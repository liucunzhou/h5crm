(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-load-more-load-more"],{"0fce":function(a,t,e){"use strict";e.r(t);var i=e("44ed"),n=e("1098");for(var o in n)"default"!==o&&function(a){e.d(t,a,function(){return n[a]})}(o);e("9e21");var r=e("2877"),l=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"75e8dd98",null);t["default"]=l.exports},1098:function(a,t,e){"use strict";e.r(t);var i=e("c6a8"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,function(){return i[a]})}(o);t["default"]=n.a},"36b6":function(a,t,e){"use strict";e.r(t);var i=e("4eae"),n=e("d84b");for(var o in n)"default"!==o&&function(a){e.d(t,a,function(){return n[a]})}(o);e("ecec");var r=e("2877"),l=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"707ccaaf",null);t["default"]=l.exports},"40e7":function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,'uni-page-body[data-v-75e8dd98]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-75e8dd98]{font-size:%?28?%;line-height:inherit}.example[data-v-75e8dd98]{padding:0 %?30?% %?30?%}.example-title[data-v-75e8dd98]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-75e8dd98]{margin:%?40?% 0}.example-body[data-v-75e8dd98]{padding:0 %?40?%}uni-radio-group uni-label[data-v-75e8dd98]{padding:0}.uni-list-item__container[data-v-75e8dd98]{padding:%?24?% %?30?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-list-item__container[data-v-75e8dd98]:after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}body.?%PAGE?%[data-v-75e8dd98]{background-color:#fff}',""])},"44ed":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("v-uni-view",[e("v-uni-view",{staticClass:"example-title"},[a._v("基本用法")]),e("uni-load-more",{attrs:{status:a.status}})],1),e("v-uni-view",[e("v-uni-view",{staticClass:"example-title"},[a._v("修改默认颜色及文字")]),e("uni-load-more",{attrs:{status:a.status,"content-text":a.contentText,color:"#007aff"}})],1),e("v-uni-view",{staticClass:"example-title"},[a._v("改变组件状态")]),e("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){t=a.$handleEvent(t),a.onChange(t)}}},a._l(a.statusTypes,function(t,i){return e("v-uni-label",{key:i,staticClass:"uni-list-item"},[e("v-uni-view",{staticClass:"uni-list-item__container"},[e("v-uni-view",{staticClass:"uni-list-item__content"},[e("v-uni-view",{staticClass:"uni-list-item__content-title"},[a._v(a._s(t.text))])],1),e("v-uni-view",{staticClass:"uni-list-item__extra"},[e("v-uni-radio",{attrs:{value:t.value,checked:t.checked}})],1)],1)],1)}),1)],1)},n=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n})},"4eae":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===a.status&&a.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}})],1),e("v-uni-view",{staticClass:"load2 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}})],1),e("v-uni-view",{staticClass:"load3 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:a.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:a.color}},[a._v(a._s("more"===a.status?a.contentText.contentdown:"loading"===a.status?a.contentText.contentrefresh:a.contentText.contentnomore))])],1)},n=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n})},"882f":function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,".uni-load-more[data-v-707ccaaf]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-707ccaaf]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-707ccaaf]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>.load[data-v-707ccaaf]{position:absolute}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-707ccaaf]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-707ccaaf 1.56s ease infinite;animation:load-data-v-707ccaaf 1.56s ease infinite}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-707ccaaf]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(4){top:11px;left:0}.load1[data-v-707ccaaf],.load2[data-v-707ccaaf],.load3[data-v-707ccaaf]{height:24px;width:24px}.load2[data-v-707ccaaf]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-707ccaaf]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-707ccaaf]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-707ccaaf]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 .uni-load-view_wrapper[data-v-707ccaaf]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 .uni-load-view_wrapper[data-v-707ccaaf]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-707ccaaf{0%{opacity:1}to{opacity:.2}}",""])},9133:function(a,t,e){var i=e("882f");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("1812c9f6",i,!0,{sourceMap:!1,shadowMode:!1})},"9e21":function(a,t,e){"use strict";var i=e("b3a7"),n=e.n(i);n.a},b3a7:function(a,t,e){var i=e("40e7");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("6dfb0363",i,!0,{sourceMap:!1,shadowMode:!1})},c6a8:function(a,t,e){"use strict";var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("36b6")),o={components:{uniLoadMore:n.default},data:function(){return{status:"more",statusTypes:[{value:"more",text:"加载前",checked:!0},{value:"loading",text:"加载中",checked:!1},{value:"noMore",text:"没有更多",checked:!1}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},methods:{onChange:function(a){this.status=a.detail.value}}};t.default=o},d84b:function(a,t,e){"use strict";e.r(t);var i=e("e383"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,function(){return i[a]})}(o);t["default"]=n.a},e383:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};t.default=i},ecec:function(a,t,e){"use strict";var i=e("9133"),n=e.n(i);n.a}}]);