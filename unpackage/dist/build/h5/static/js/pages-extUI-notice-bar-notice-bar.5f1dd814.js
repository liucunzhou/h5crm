(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-notice-bar-notice-bar"],{"0421":function(e,t,i){"use strict";var n=i("e021"),o=i.n(n);o.a},2624:function(e,t,i){"use strict";i.r(t);var n=i("e213"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},"416a":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-5b06dc8b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-5b06dc8b]{font-size:%?28?%;line-height:inherit}.example[data-v-5b06dc8b]{padding:0 %?30?% %?30?%}.example-title[data-v-5b06dc8b]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-5b06dc8b]{margin:%?40?% 0}.example-body[data-v-5b06dc8b]{padding:0 %?40?%}body.?%PAGE?%[data-v-5b06dc8b]{background-color:#fff}",""])},5446:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("455c"));function o(e){return e&&e.__esModule?e:{default:e}}var a={name:"UniNoticeBar",components:{uniIcon:n.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},showGetMore:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1}},data:function(){var e=this.__call_hook?"uni_notice_bar":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:e,show:!0,animation:""}},watch:{text:function(e,t){var i=this;this.$nextTick(function(){setTimeout(i.setAnimation,200)})}},mounted:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var t=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;uni.upx2px(48)+12>t&&this.showClose&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;this.scrollable&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")})}}};t.default=a},6047:function(e,t,i){"use strict";i.r(t);var n=i("eb7e"),o=i("baff");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("7f48");var r=i("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"3e0a698e",null);t["default"]=l.exports},"7f48":function(e,t,i){"use strict";var n=i("85d8"),o=i.n(n);o.a},"85d8":function(e,t,i){var n=i("ed22");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("34f3090c",n,!0,{sourceMap:!1,shadowMode:!1})},b904:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"example-title"},[e._v("基本用法")]),i("uni-notice-bar",{attrs:{single:!0,text:"[单行] uni-app 1.6发布，开发一次、7端覆盖！"}}),i("uni-notice-bar",{attrs:{text:"[多行] uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),i("v-uni-view",{staticClass:"example-title"},[e._v("加图标")]),i("uni-notice-bar",{attrs:{single:!0,"show-icon":!0,text:"uni-app行业峰会频频亮相，开发者反响热烈!"}}),i("uni-notice-bar",{attrs:{"show-icon":!0,text:"8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。"}}),i("v-uni-view",{staticClass:"example-title"},[e._v("查看更多")]),i("uni-notice-bar",{attrs:{"show-get-more":!0,single:!0,text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(t){t=e.$handleEvent(t),e.getMore(t)}}}),i("uni-notice-bar",{attrs:{"show-get-more":!0,"show-icon":!0,single:!0,"more-text":"查看更多",text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(t){t=e.$handleEvent(t),e.getMore(t)}}}),i("v-uni-view",{staticClass:"example-title"},[e._v("修改颜色")]),i("uni-notice-bar",{attrs:{single:!0,"more-text":"查看更多",color:"red","background-color":"#eee",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),i("uni-notice-bar",{attrs:{"show-icon":!0,color:"blue",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),i("v-uni-view",{staticClass:"example-title"},[e._v("关闭按钮")]),i("uni-notice-bar",{attrs:{"show-close":!0,single:!0,text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破！"}}),i("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,"more-text":"查看更多",text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破！"}}),i("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,text:"uni-app 1.6发布，开发一次、7端覆盖！"}}),i("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,single:!0,text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},baff:function(e,t,i){"use strict";i.r(t);var n=i("5446"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},dbd8:function(e,t,i){"use strict";i.r(t);var n=i("b904"),o=i("2624");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("0421");var r=i("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"5b06dc8b",null);t["default"]=l.exports},e021:function(e,t,i){var n=i("416a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("eaf01c1c",n,!0,{sourceMap:!1,shadowMode:!1})},e213:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("6047"));function o(e){return e&&e.__esModule?e:{default:e}}var a={components:{uniNoticeBar:n.default},data:function(){return{}},created:function(){},methods:{getMore:function(){uni.showToast({title:"点击查看更多",icon:"none"})}}};t.default=a},eb7e:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(t){t=e.$handleEvent(t),e.onClick(t)}}},[e.showClose?i("v-uni-view",{staticClass:"uni-noticebar__close"},[i("uni-icon",{attrs:{type:"closefill",size:"12"}})],1):e._e(),i("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar--flex":e.scrollable||e.single||e.moreText}},[e.showIcon?i("v-uni-view",{staticClass:"uni-noticebar__content-icon",style:{backgroundColor:e.backgroundColor,color:e.color}},[i("uni-icon",{attrs:{color:e.color,type:"sound",size:"14"}})],1):e._e(),i("v-uni-view",{staticClass:"uni-noticebar__content-text",class:{"uni-noticebar--scrollable":e.scrollable,"uni-noticebar--single":!e.scrollable&&(e.single||e.moreText)}},[i("v-uni-view",{staticClass:"uni-noticebar__content-inner",style:{animation:e.animation,"-webkit-animation":e.animation},attrs:{id:e.elId}},[e._v(e._s(e.text))])],1),e.showGetMore?i("v-uni-view",{staticClass:"uni-noticebar__content-more",style:{width:e.moreText?"180upx":"20px"},on:{click:function(t){t=e.$handleEvent(t),e.clickMore(t)}}},[e.moreText?i("v-uni-view",{staticClass:"uni-noticebar__content-more-text"},[e._v(e._s(e.moreText))]):e._e(),i("uni-icon",{attrs:{type:"arrowright",size:"14"}})],1):e._e()],1)],1):e._e()},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},ed22:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-noticebar[data-v-3e0a698e]{padding:%?12?% %?24?%;font-size:%?24?%;line-height:1.5;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left}.uni-noticebar__close[data-v-3e0a698e]{color:#999;margin-right:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-noticebar__content[data-v-3e0a698e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}.uni-noticebar__content.uni-noticebar--flex[data-v-3e0a698e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-noticebar__content-icon[data-v-3e0a698e]{display:inline-block;z-index:1;padding-right:%?12?%}.uni-noticebar__content-more[data-v-3e0a698e]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;word-break:keep-all;margin-left:%?10?%;color:#999}.uni-noticebar__content-more-text[data-v-3e0a698e]{font-size:%?24?%;white-space:nowrap}.uni-noticebar__content-text[data-v-3e0a698e]{word-break:break-all;line-height:1.5;display:inline}.uni-noticebar__content-text.uni-noticebar--single[data-v-3e0a698e]{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-noticebar__content-text.uni-noticebar--scrollable[data-v-3e0a698e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden}.uni-noticebar__content-text.uni-noticebar--scrollable .uni-noticebar__content-inner[data-v-3e0a698e]{padding-left:100%;white-space:nowrap;display:inline-block;-webkit-transform:translateZ(0);transform:translateZ(0)}.uni-noticebar__content-inner[data-v-3e0a698e]{font-size:%?24?%;display:inline}@-webkit-keyframes notice-data-v-3e0a698e{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-3e0a698e{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}",""])}}]);