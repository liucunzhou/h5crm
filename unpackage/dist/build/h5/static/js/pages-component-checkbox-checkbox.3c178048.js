(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox-checkbox"],{"0d56":function(e,t,n){"use strict";var a=n("d6ee"),i=n.n(a);i.a},"24af":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".uni-list-cell[data-v-1691a6c1]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}",""])},"2a80":function(e,t,n){"use strict";n.r(t);var a=n("df1e"),i=n("bd7a");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("0d56");var u=n("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"1691a6c1",null);t["default"]=l.exports},"41a2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{checkboxChange:function(e){for(var t=this.items,n=e.detail.value,a=0,i=t.length;a<i;++a){var c=t[a];n.indexOf(c.value)>=0?this.$set(c,"checked",!0):this.$set(c,"checked",!1)}}}};t.default=a},bd7a:function(e,t,n){"use strict";n.r(t);var a=n("41a2"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=i.a},d6ee:function(e,t,n){var a=n("24af");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("c02a5394",a,!0,{sourceMap:!1,shadowMode:!1})},df1e:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("默认样式")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb",checked:"true"}}),e._v("选中")],1),n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb"}}),e._v("未选中")],1)],1)],1),n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("不同颜色和尺寸的checkbox")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",checked:"true",color:"#FFCC33"}}),e._v("选中")],1),n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",color:"#FFCC33"}}),e._v("未选中")],1)],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("推荐展示样式"),n("v-uni-text",[e._v("\\n使用 uni-list 布局")])],1)],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-checkbox-group",{on:{change:function(t){t=e.$handleEvent(t),e.checkboxChange(t)}}},e._l(e.items,function(t){return n("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1),n("v-uni-view",[e._v(e._s(t.name))])],1)}),1)],1)],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})}}]);