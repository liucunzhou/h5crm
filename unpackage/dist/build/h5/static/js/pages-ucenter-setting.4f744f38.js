(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-setting"],{6025:function(e,t,n){var a=n("ed58");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("332b0638",a,!0,{sourceMap:!1,shadowMode:!1})},"78ca":function(e,t,n){"use strict";var a=n("6025"),i=n.n(a);i.a},8318:function(e,t,n){"use strict";n.r(t);var a=n("8d9f"),i=n("f30b");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("78ca");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"6bbe43f4",null);t["default"]=u.exports},"8d9f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"column_down"},[n("v-uni-view",{staticClass:"downmsg"},[n("v-uni-navigator",{attrs:{url:"password"}},[n("v-uni-text",[e._v("修改密码")])],1)],1),n("v-uni-view",{staticClass:"downmsg"},[n("v-uni-text",[e._v("修改昵称")]),n("v-uni-input",{attrs:{value:e.realname},on:{blur:function(t){t=e.$handleEvent(t),e.changeRealName(t)}}})],1)],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},de6a:function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("3ee9")),o=i.default.env.platform;"notInDingTalk"!=o&&i.default.ready(function(){i.default.biz.navigation.hideBar({hidden:!0,onSuccess:function(e){},onFail:function(e){}})});var r={data:function(){var e;try{e=uni.getStorageSync("user")}catch(n){}var t=e.realname;return{realname:t}},methods:{changeRealName:function(e){var t=e.detail.value;""==t&&uni.showToast({title:"系统名称不能为空",icon:"none"});var n=this.$getToken(),a={token:n,realname:t},i=this.$apis.user.editUser;uni.request({url:i,method:"POST",data:a,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){var a=n.data;if("200"==a.code){var i;try{i=uni.getStorageSync("user")}catch(e){}i.realname=t;try{uni.setStorageSync("user",i)}catch(e){}uni.showToast({title:a.msg})}else uni.showToast({title:a.msg})}})}}};t.default=r},ed58:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".column_down[data-v-6bbe43f4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px 20px}.downmsg[data-v-6bbe43f4]{margin-bottom:10px;border-bottom:1px solid #ccc;padding:5px 0}",""])},f30b:function(e,t,n){"use strict";n.r(t);var a=n("de6a"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a}}]);