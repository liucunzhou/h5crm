(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-share-share"],{4738:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title"},[e._v("分享内容")]),n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{staticClass:"textarea",model:{value:e.shareText,callback:function(t){e.shareText=t},expression:"shareText"}})],1),n("v-uni-view",{staticClass:"uni-title"},[e._v("分享图片：")]),n("v-uni-view",{staticClass:"uni-uploader",staticStyle:{padding:"15upx",background:"#FFF"}},[e.image?e._e():n("v-uni-view",{staticClass:"uni-uploader__input-box",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}}),e.image?n("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e.image}}):e._e()],1)],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"4edf":function(e,t,n){"use strict";n.r(t);var i=n("abfb"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},abfb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a,s,r){try{var o=e[s](r),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(i,a)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function o(e){s(r,i,a,o,u,"next",e)}function u(e){s(r,i,a,o,u,"throw",e)}o(void 0)})}}var o={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var e=this;uni.getProvider({service:"share",success:function(t){console.log("success",t);for(var n=[],i=0;i<t.provider.length;i++)switch(t.provider[i]){case"weixin":n.push({name:"分享到微信好友",id:"weixin",sort:0}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":n.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":n.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}e.providerList=n.sort(function(e,t){return e.sort-t.sort})},fail:function(e){console.log("获取分享通道失败",e),uni.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(){var e=r(i.default.mark(function e(t){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("分享通道:"+t.id+"； 分享类型:"+this.shareType),this.shareText||1!==this.shareType&&0!==this.shareType){e.next=4;break}return uni.showModal({content:"分享内容不能为空",showCancel:!1}),e.abrupt("return");case 4:if(this.image||2!==this.shareType&&0!==this.shareType){e.next=7;break}return uni.showModal({content:"分享图片不能为空",showCancel:!1}),e.abrupt("return");case 7:n={provider:t.id,scene:t.type&&"WXSenceTimeline"===t.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(e){console.log("success",e),uni.showModal({content:"分享成功",showCancel:!1})},fail:function(e){console.log("fail",e),uni.showModal({content:e.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}},e.t0=this.shareType,e.next=0===e.t0?11:1===e.t0?16:2===e.t0?18:5===e.t0?20:24;break;case 11:return n.summary=this.shareText,n.imageUrl=this.image,n.title="欢迎体验uniapp",n.href="https://uniapp.dcloud.io",e.abrupt("break",25);case 16:return n.summary=this.shareText,e.abrupt("break",25);case 18:return n.imageUrl=this.image,e.abrupt("break",25);case 20:return n.imageUrl=this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",n.title="欢迎体验uniapp",n.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:if(0!==n.type||"iOS"!==plus.os.name){e.next=29;break}return e.next=28,this.compress();case 28:n.imageUrl=e.sent;case 29:1===n.type&&"qq"===n.provider&&(n.href="https://uniapp.dcloud.io",n.title="欢迎体验uniapp"),uni.share(n);case 31:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var e=this;uni.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(t){e.image=t.tempFilePaths[0]}})},compress:function(){console.log("开始压缩");var e=this.image;return new Promise(function(t){var n=plus.io.convertAbsoluteFileSystem(e.replace("file://",""));console.log("after"+n),plus.io.resolveLocalFileSystemURL(n,function(n){n.file(function(n){console.log("getFile:"+JSON.stringify(n)),n.size>20480&&plus.zip.compressImage({src:e,dst:e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(n){console.log("success zip****"+n.size);var i=e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");t(i)},function(e){uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(e){console.log("Resolve file URL failed: "+e.message),uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};t.default=o},c704:function(e,t,n){"use strict";n.r(t);var i=n("4738"),a=n("4edf");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var r=n("2877"),o=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"48d0976e",null);t["default"]=o.exports}}]);