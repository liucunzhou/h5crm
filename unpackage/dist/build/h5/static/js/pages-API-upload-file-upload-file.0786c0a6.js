(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{2931:function(e,a,t){"use strict";t.r(a);var n=t("c1b0"),i=t("cf4e");for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);t("da92");var c=t("2877"),s=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"6aa702cc",null);a["default"]=s.exports},a0a0:function(e,a,t){var n=t("c211");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("6209ebe7",n,!0,{sourceMap:!1,shadowMode:!1})},c1b0:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"demo"},[e.imageSrc?[t("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[t("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){a=e.$handleEvent(a),e.chooseImage(a)}}},[e._v("+ 选择图片")])]],2)],1)],1)},i=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i})},c211:function(e,a,t){a=e.exports=t("2350")(!1),a.push([e.i,".image[data-v-6aa702cc]{width:100%}.demo[data-v-6aa702cc]{background:#fff;padding:%?50?%}",""])},cf4e:function(e,a,t){"use strict";t.r(a);var n=t("f86f"),i=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=i.a},da92:function(e,a,t){"use strict";var n=t("a0a0"),i=t.n(n);i.a},f86f:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){console.log("chooseImage success, temp path is",a.tempFilePaths[0]);var t=a.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:t,fileType:"image",name:"data",success:function(a){console.log("uploadImage success, res is:",a),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=t},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};a.default=n}}]);