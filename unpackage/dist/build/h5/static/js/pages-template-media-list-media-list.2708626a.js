(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-media-list-media-list"],{"0250":function(i,t,s){"use strict";var e=s("343a"),n=s.n(e);n.a},"03f3":function(i,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"media-list",showImg:!1,list:[{title:"幸福",content:"能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"},{title:"木屋",content:"想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"},{title:"CBD",content:"烤炉模式的城，到黄昏，如同打翻的调色盘一般。",img:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"}]}},onLoad:function(){var i=this;setTimeout(function(){i.showImg=!0},400)}};t.default=e},"05f7":function(i,t,s){"use strict";s.r(t);var e=s("03f3"),n=s.n(e);for(var a in e)"default"!==a&&function(i){s.d(t,i,function(){return e[i]})}(a);t["default"]=n.a},"343a":function(i,t,s){var e=s("6509");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=s("4f06").default;n("4fba4c5b",e,!0,{sourceMap:!1,shadowMode:!1})},6509:function(i,t,s){t=i.exports=s("2350")(!1),t.push([i.i,".title[data-v-1b30b9c8]{padding:%?20?%}",""])},ac77:function(i,t,s){"use strict";s.r(t);var e=s("e69c"),n=s("05f7");for(var a in n)"default"!==a&&function(i){s.d(t,i,function(){return n[i]})}(a);s("0250");var l=s("2877"),u=Object(l["a"])(n["default"],e["a"],e["b"],!1,null,"1b30b9c8",null);t["default"]=u.exports},e69c:function(i,t,s){"use strict";var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("v-uni-view",{staticClass:"page"},[s("page-head",{attrs:{title:i.title}}),s("v-uni-view",{staticClass:"title"},[i._v("缩略图居左")]),s("v-uni-view",{staticClass:"uni-list"},i._l(i.list,function(t,e){return s("v-uni-view",{key:e,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[s("v-uni-view",{staticClass:"uni-media-list"},[s("v-uni-view",{staticClass:"uni-media-list-logo"},[i.showImg?s("v-uni-image",{attrs:{src:t.img}}):i._e()],1),s("v-uni-view",{staticClass:"uni-media-list-body"},[s("v-uni-view",{staticClass:"uni-media-list-text-top"},[i._v(i._s(t.title))]),s("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[i._v(i._s(t.content))])],1)],1)],1)}),1),s("v-uni-view",{staticClass:"title"},[i._v("缩略图居右")]),s("v-uni-view",{staticClass:"uni-list"},i._l(i.list,function(t,e){return s("v-uni-view",{key:e,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[s("v-uni-view",{staticClass:"uni-media-list uni-pull-right"},[s("v-uni-view",{staticClass:"uni-media-list-logo"},[i.showImg?s("v-uni-image",{attrs:{src:t.img}}):i._e()],1),s("v-uni-view",{staticClass:"uni-media-list-body"},[s("v-uni-view",{staticClass:"uni-media-list-text-top"},[i._v(i._s(t.title))]),s("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[i._v(i._s(t.content))])],1)],1)],1)}),1),s("v-uni-view",{staticClass:"title"},[i._v("右侧带箭头")]),s("v-uni-view",{staticClass:"uni-list"},i._l(i.list,function(t,e){return s("v-uni-view",{key:e,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[s("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list "},[s("v-uni-view",{staticClass:"uni-media-list-logo"},[i.showImg?s("v-uni-image",{attrs:{src:t.img}}):i._e()],1),s("v-uni-view",{staticClass:"uni-media-list-body"},[s("v-uni-view",{staticClass:"uni-media-list-text-top"},[i._v(i._s(t.title))]),s("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[i._v(i._s(t.content))])],1)],1)],1)}),1),s("v-uni-view",{staticClass:"title"},[i._v("卡片列表")]),s("v-uni-view",{staticClass:"uni-list"},i._l(i.list,function(t,e){return s("v-uni-view",{key:e,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[s("v-uni-view",{staticClass:"uni-media-list uni-pull-right"},[s("v-uni-view",{staticClass:"uni-media-list-logo"},[i.showImg?s("v-uni-image",{attrs:{src:t.img}}):i._e()],1),s("v-uni-view",{staticClass:"uni-media-list-body"},[s("v-uni-view",{staticClass:"uni-media-list-text-top"},[i._v(i._s(t.title))]),s("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[i._v(i._s(t.content))])],1)],1)],1)}),1)],1)},n=[];s.d(t,"a",function(){return e}),s.d(t,"b",function(){return n})}}]);