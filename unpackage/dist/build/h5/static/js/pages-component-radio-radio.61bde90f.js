(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-radio-radio"],{"13f8":function(t,e,a){var i=a("4e1c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1b780a80",i,!0,{sourceMap:!1,shadowMode:!1})},"359b":function(t,e,a){"use strict";var i=a("13f8"),n=a.n(i);n.a},"3c29":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("默认样式")]),a("v-uni-view",[a("v-uni-label",{staticClass:"radio",staticStyle:{"margin-right":"30upx"}},[a("v-uni-radio",{attrs:{value:"r1",checked:"true"}}),t._v("选中")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"r2"}}),t._v("未选中")],1)],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("不同颜色和尺寸的radio")]),a("v-uni-view",[a("v-uni-label",{staticClass:"radio",staticStyle:{"margin-right":"30upx"}},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"r1",checked:"true",color:"#FFCC33"}}),t._v("选中")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"r2",color:"#FFCC33"}}),t._v("未选中")],1)],1)],1),a("v-uni-view",{staticClass:"uni-title uni-common-mt uni-common-pl"},[t._v("推荐展示样式")]),a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-radio-group",{on:{change:function(e){e=t.$handleEvent(e),t.radioChange(e)}}},t._l(t.items,function(e,i){return a("v-uni-label",{key:e.value,staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:e.value,checked:i===t.current}})],1),a("v-uni-view",[t._v(t._s(e.name))])],1)}),1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"4e1c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-list-cell[data-v-18e2e128]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}",""])},"605d":function(t,e,a){"use strict";a.r(e);var i=a("83de"),n=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);e["default"]=n.a},"83de":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"radio 单选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}],current:0}},methods:{radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.target.value){this.current=e;break}}}};e.default=i},a751:function(t,e,a){"use strict";a.r(e);var i=a("3c29"),n=a("605d");for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);a("359b");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"18e2e128",null);e["default"]=s.exports}}]);