(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"055a":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};i.default=a},"064c":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".uni-margin-wrap[data-v-86877916]{width:%?690?%;margin:0 %?30?%}.swiper[data-v-86877916]{height:%?300?%}.swiper-item[data-v-86877916]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-86877916]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-86877916]{margin-top:%?60?%;position:relative}.info[data-v-86877916]{position:absolute;right:%?20?%}",""])},"567d":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:"swiper,可滑动视图"}}),n("v-uni-view",{staticClass:"uni-margin-wrap"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[t._v("A")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[t._v("B")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[t._v("C")])],1)],1)],1),n("v-uni-view",{staticClass:"swiper-list"},[n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("指示点")]),n("v-uni-switch",{attrs:{checked:t.indicatorDots},on:{change:function(i){i=t.$handleEvent(i),t.changeIndicatorDots(i)}}})],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("自动播放")]),n("v-uni-switch",{attrs:{checked:t.autoplay},on:{change:function(i){i=t.$handleEvent(i),t.changeAutoplay(i)}}})],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-text",[t._v("幻灯片切换时长(ms)")]),n("v-uni-text",{staticClass:"info"},[t._v(t._s(t.duration))])],1),n("v-uni-slider",{attrs:{value:t.duration,min:"500",max:"2000"},on:{change:function(i){i=t.$handleEvent(i),t.durationChange(i)}}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-text",[t._v("自动播放间隔时长(ms)")]),n("v-uni-text",{staticClass:"info"},[t._v(t._s(t.interval))])],1),n("v-uni-slider",{attrs:{value:t.interval,min:"2000",max:"10000"},on:{change:function(i){i=t.$handleEvent(i),t.intervalChange(i)}}})],1)],1)},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},"70bf":function(t,i,n){"use strict";n.r(i);var a=n("055a"),e=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);i["default"]=e.a},a15e:function(t,i,n){"use strict";var a=n("ddfb"),e=n.n(a);e.a},aba2:function(t,i,n){"use strict";n.r(i);var a=n("567d"),e=n("70bf");for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);n("a15e");var u=n("2877"),r=Object(u["a"])(e["default"],a["a"],a["b"],!1,null,"86877916",null);i["default"]=r.exports},ddfb:function(t,i,n){var a=n("064c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("1064234b",a,!0,{sourceMap:!1,shadowMode:!1})}}]);