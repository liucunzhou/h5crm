(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-popup-popup"],{"001a":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"example"},[o("v-uni-view",{staticClass:"example-title"},[t._v("基本用法")]),o("v-uni-button",{attrs:{type:"button"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("top")}}},[t._v("顶部弹出 popup")]),o("uni-popup",{attrs:{show:"top"===t.type,position:"top",mode:"fixed",msg:"顶部弹出popup"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}}),o("v-uni-button",{attrs:{type:"button"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("middle")}}},[t._v("居中弹出 popup")]),o("uni-popup",{attrs:{show:"middle"===t.type,position:"middle",mode:"fixed",msg:"居中弹出popup"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}}),o("v-uni-button",{attrs:{type:"button"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("bottom")}}},[t._v("底部部弹出 popup")]),o("uni-popup",{attrs:{show:"bottom"===t.type,position:"bottom",mode:"fixed",msg:"底部弹出popup"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}})],1),o("v-uni-view",{staticClass:"example"},[o("v-uni-view",{staticClass:"example-title"},[t._v("slot用法")]),o("v-uni-button",{attrs:{type:"button"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("middle-img")}}},[t._v("居中弹出（插屏广告）")]),o("uni-popup",{attrs:{show:"middle-img"===t.type,position:"middle",mode:"insert"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[o("v-uni-view",{staticClass:"uni-center center-box"},[o("v-uni-image",{staticClass:"image",attrs:{src:"/static/uni.png"}})],1)],1),o("v-uni-button",{attrs:{type:"button"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("middle-list")}}},[t._v("居中弹出（滚动列表）")]),o("uni-popup",{attrs:{show:"middle-list"===t.type,position:"middle",mode:"fixed"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[o("v-uni-scroll-view",{staticClass:"uni-center center-box",attrs:{"scroll-y":!0}},t._l(t.list,function(e,i){return o("v-uni-view",{key:i,staticClass:"uni-list-item"},[t._v("滚动列表数据 "+t._s(e))])}),1)],1),o("v-uni-button",{attrs:{type:"button","data-position":"bottom"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("bottom-share")}}},[t._v("底部弹出（分享界面）")]),o("uni-popup",{attrs:{show:"bottom-share"===t.type,position:"bottom"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[o("v-uni-view",{staticStyle:{display:"block"}},[o("v-uni-view",{staticClass:"bottom-title"},[t._v("分享到")]),o("v-uni-view",{staticClass:"bottom-content"},t._l(t.bottomData,function(e,i){return o("v-uni-view",{key:i,staticClass:"bottom-content-box"},[o("v-uni-view",{staticClass:"bottom-content-image",class:e.name},[o("v-uni-text",{staticClass:"icon"},[t._v(t._s(e.icon))])],1),o("v-uni-view",{staticClass:"bottom-content-text"},[t._v(t._s(e.text))])],1)}),1),o("v-uni-view",{staticClass:"bottom-btn",on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[t._v("取消分享")])],1)],1)],1)],1)},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},"09f0":function(t,e,o){"use strict";o.r(e);var i=o("c6ec"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},"0f19":function(t,e,o){"use strict";var i=o("a49d"),n=o.n(i);n.a},"197b":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.moveHandle(e)}}}),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup",class:"uni-popup-"+t.position+" uni-popup-"+t.mode},[t._v(t._s(t.msg)),t._t("default"),"middle"===t.position&&"insert"===t.mode?o("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===t.buttonMode,"uni-close-right":"right"===t.buttonMode},on:{click:function(e){e=t.$handleEvent(e),t.closeMask(e)}}}):t._e()],2)],1)},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},"25d3":function(t,e,o){"use strict";o.r(e);var i=o("197b"),n=o("8b3e");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("bf6d");var s=o("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"b8bc559e",null);e["default"]=c.exports},"2f9e":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniPopup",props:{show:{type:Boolean,default:!1},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){return{offsetTop:0}},watch:{h5Top:function(t){this.offsetTop=t?44:0}},created:function(){var t=0;t=this.h5Top?0:44,this.offsetTop=t},methods:{hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}}};e.default=i},4087:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'uni-page-body[data-v-1cbad09a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-1cbad09a]{font-size:%?28?%;line-height:inherit}.example[data-v-1cbad09a]{padding:0 %?30?% %?30?%}.example-title[data-v-1cbad09a]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-1cbad09a]{margin:%?40?% 0}.example-body[data-v-1cbad09a]{padding:0 %?40?%}.uni-padding-wrap[data-v-1cbad09a]{padding:0 %?30?%}uni-button[data-v-1cbad09a]{margin:%?20?% 0}.uni-helllo-text[data-v-1cbad09a]{height:%?100?%;line-height:%?100?%;text-align:center}.center-box[data-v-1cbad09a]{width:%?500?%;height:%?500?%}.uni-list-item[data-v-1cbad09a]{text-align:left;line-height:%?80?%;border-bottom:1px #f5f5f5 solid}.uni-list-item[data-v-1cbad09a]:last-child{border:none}.center-box .image[data-v-1cbad09a]{width:100%;height:100%}.bottom-title[data-v-1cbad09a]{line-height:%?60?%;font-size:%?24?%;padding:%?15?% 0}.bottom-content[data-v-1cbad09a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?35?%}.bottom-content-box[data-v-1cbad09a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?15?%;width:25%;-webkit-box-sizing:border-box;box-sizing:border-box}.bottom-content-image[data-v-1cbad09a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?90?%;height:%?90?%;overflow:hidden;background:#007aff;border-radius:%?10?%}.bottom-content-text[data-v-1cbad09a]{font-size:%?26?%;color:#333;margin-top:%?10?%}.bottom-btn[data-v-1cbad09a]{height:%?90?%;line-height:%?90?%;border-top:1px #f5f5f5 solid}.bottom-content-image.wx[data-v-1cbad09a]{background:#00ce47}.bottom-content-image.qq[data-v-1cbad09a]{background:#00b6f6}.bottom-content-image.sina[data-v-1cbad09a]{background:#ff766a}.bottom-content-image.copy[data-v-1cbad09a]{background:#07ccd0}@font-face{font-family:iconfont;\n\t/* project id 1028200 */src:url(https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf) format("truetype")}.icon[data-v-1cbad09a]{font-family:iconfont;font-size:%?40?%;color:#fff}body.?%PAGE?%[data-v-1cbad09a]{background-color:#fff}',""])},"5a10":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'.uni-mask[data-v-b8bc559e]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-b8bc559e]{position:fixed;z-index:999;background-color:#fff}.uni-popup-middle[data-v-b8bc559e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-b8bc559e]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-b8bc559e]{border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-b8bc559e],.uni-close-right[data-v-b8bc559e]{position:absolute;bottom:%?-180?%;text-align:center;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-bottom[data-v-b8bc559e]{margin:auto;left:0;right:0}.uni-close-right[data-v-b8bc559e]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-b8bc559e]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-bottom[data-v-b8bc559e],.uni-popup-top[data-v-b8bc559e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-popup-top[data-v-b8bc559e]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-b8bc559e]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""])},"8b3e":function(t,e,o){"use strict";o.r(e);var i=o("2f9e"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},a49d:function(t,e,o){var i=o("4087");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("28124d92",i,!0,{sourceMap:!1,shadowMode:!1})},af88:function(t,e,o){"use strict";o.r(e);var i=o("001a"),n=o("09f0");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("0f19");var s=o("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"1cbad09a",null);e["default"]=c.exports},bf6d:function(t,e,o){"use strict";var i=o("cb3f"),n=o.n(i);n.a},c6ec:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("25d3"));function n(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniPopup:i.default},data:function(){return{type:"",list:["1","2","3","4","5","6","7","8","9","10"],bottomData:[{text:"微信",icon:"",name:"wx"},{text:"朋友圈",icon:"",name:"wx"},{text:"QQ",icon:"",name:"qq"},{text:"新浪",icon:"",name:"sina"},{text:"复制",icon:"",name:"copy"},{text:"更多",icon:"",name:"more"}]}},onBackPress:function(){if(""!==this.type)return this.type="",!0},methods:{togglePopup:function(t){this.type=t}}};e.default=a},cb3f:function(t,e,o){var i=o("5a10");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("79de7328",i,!0,{sourceMap:!1,shadowMode:!1})}}]);