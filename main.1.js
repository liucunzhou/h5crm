import Vue from 'vue'
import App from './App'

import store from './store'
import hosts from './hosts.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.prototype.$apis = hosts;
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
			k]).substr(("" + o[k]).length)));
	return fmt;
}

function errDingEvnMsg(msg) {
	return false;
	uni.showModal({
		title: '提示',
		content: msg,
		showCancel: false,
		success: function(res) {
			if (res.confirm) {
				errDingEvnMsg(msg);
			} else if (res.cancel) {
				errDingEvnMsg(msg);
			}
		}
	});
}

import dingtalk from '@/dingtalk.open.js'
let platform = dingtalk.env.platform;
let getUserId = function(token) {
	let userid = '';
	try {
		userid = uni.getStorageSync('userid');
		if (userid) {

		} else {
			if (platform != 'notInDingTalk') {
				dingtalk.ready(function() {
					dingtalk.runtime.permission.requestAuthCode({
						corpId: 'ding7f6f146b7c5505bc35c2f4657eb6378f',
						onSuccess: function(info) {
							let url = hosts.dingding.getUserInfo;
							let params = {
								token: token,
								code: info.code
							};

							uni.request({
								url: url,
								method: 'POST',
								data: params,
								dataType: 'json',
								header: {
									'content-type': 'application/x-www-form-urlencoded',
								},
								success: (res) => {
									/**
									uni.showModal({
									    title: '用户数据',
									    content: JSON.stringify(res),
									    success: function (res) {
									      
									    }
									});
									**/
									try {
										uni.setStorageSync('token', res.data.result.token);
										uni.setStorageSync('user', res.data.result.user);
										uni.setStorageSync('userid', res.data.result.user.dingding);
									} catch (e) {

									}
								},
								fail: (res) => {

								}
							})
						}
					});
				});
			} else {
				let msg = '请在钉钉上使用';
				errDingEvnMsg($msg);
			}
		}
	} catch (e) {}

	return userid;
}

Vue.prototype.$getToken = function() {
	if (platform == 'notInDingTalk') {
		let msg = '请在钉钉上使用';
		errDingEvnMsg(msg);
	}
	
	let token = '';
	try {
		token = uni.getStorageSync('token');
		if (token) {
			getUserId(token);
			uni.request({
				url: hosts.dingding.getDingSign,
				method: 'POST',
				data: {
					token: token
				},
				dataType: 'json',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				success: (res) => {
					let _config = res.data.result;
					try {
						let user = uni.getStorageSync('user');
						if (platform != 'notInDingTalk') {
							dingtalk.config({
								agentId: _config.agentId,
								corpId: _config.corpId,
								timeStamp: _config.timeStamp,
								nonceStr: _config.nonceStr,
								signature: _config.signature,
								type: 0,
								jsApiList: [
									'runtime.info',
									'device.base.getUUID',
								]
							});

							dingtalk.userid = 0;
							dingtalk.ready(function() {
								dingtalk.device.base.getUUID({
									onSuccess: function(data) {
										if (user.uuid == '') {

											// 绑定uuid
											let uuid = data.uuid;
											uni.request({
												url: hosts.user.bindUUid,
												method: 'POST',
												data: {
													token: token,
													uuid: uuid
												},
												dataType: 'json',
												header: {
													'content-type': 'application/x-www-form-urlencoded',
												},
												success: (res) => {
													user.uuid = uuid;
													// user的更新本地缓存
													uni.setStorageSync('user', user);
												},
												fail(err) {
													uni.showModal({
														title: '请求错误提示',
														content: JSON.stringify(err),
														success: function(res) {

														}
													});
												}
											});
										} else if (user.uuid != data.uuid) {
											// 提示
											let msg = "更换手机请与管理员联系\n 点击‘确定’退出";
											uni.showModal({
												title: '提示',
												content: msg,
												showCancel: false,
												success: function(res) {
													try{
														uni.clearStorageSync();
														uni.navigateTo({
															url: '../public/login'
														})
													}catch(e){
														uni.showToast({
															title:"退出异常，请重试"
														})
													}
												}
											});
										}
									},
									onFail: function(err) {
										uni.showModal({
											title: '提示',
											content: JSON.stringify(err),
											success: function(res) {

											}
										});
									}
								});
							});

							dingtalk.error(function(err) {
								/**
								uni.showModal({
									title: '提示',
									content: JSON.stringify(err),
									success: function(res) {

									}
								});
								**/
							});
						} else {
							let msg = '请在钉钉上使用';
							errDingEvnMsg($msg);
						}
					} catch (e) {
						//TODO handle the exception
					}
				},
				fail: (res) => {

				}
			})

		} else {
			uni.navigateTo({
				url: '/pages/public/login'
			});
		}
	} catch (e) {

	}

	return token;
}


App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()