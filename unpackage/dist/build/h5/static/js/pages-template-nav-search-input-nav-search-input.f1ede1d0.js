(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-nav-search-input"],{"19ba":function(i,n,e){n=i.exports=e("2350")(!1),n.push([i.i,".img-view[data-v-2ec0dfe0],uni-image[data-v-2ec0dfe0],uni-swiper[data-v-2ec0dfe0]{width:%?750?%;height:%?500?%}.page-section-title[data-v-2ec0dfe0]{margin-top:%?50?%}",""])},"50d8":function(i,n,e){var t=e("19ba");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=e("4f06").default;a("4eacf5d0",t,!0,{sourceMap:!1,shadowMode:!1})},"630c":function(i,n,e){"use strict";var t=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("v-uni-view",{staticClass:"page"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,function(i,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-image",{attrs:{src:i}})],1)}),1),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",[i._v("本示例为导航栏带搜索框完整功能演示，主要演示有：")]),e("v-uni-view",[i._v("1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。")]),e("v-uni-view",[i._v("2. 点击搜索框跳转到搜索页面。")]),e("v-uni-view",[i._v("3. 点击导航栏右侧按钮实现关联操作。")]),e("v-uni-view",[i._v("4. 搜索页面为提示词搜索，输入内容实时显示关联词。")]),e("v-uni-view",[i._v("5. 搜索结果根据搜索内容高亮显示文字。")]),e("v-uni-view",[i._v("6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。")]),e("v-uni-view",[i._v("7. 点击删除图标，清空历史搜索列表。")]),e("v-uni-view",[i._v("Tips")]),e("v-uni-view",[i._v("1. 本示例目前仅支持 App 端")]),e("v-uni-view",[i._v("2. 所有示例均为演示使用，具体逻辑需要自己实现。")])],1)],1),e("v-uni-view",{staticStyle:{height:"1000upx"}})],1)},a=[];e.d(n,"a",function(){return t}),e.d(n,"b",function(){return a})},"6f35":function(i,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{showSwiper:!1,imgUrls:["https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"]}},onNavigationBarSearchInputClicked:function(i){console.log("事件执行了"),uni.navigateTo({url:"/pages/template/nav-search-input/detail/detail"})},onNavigationBarButtonTap:function(){uni.showModal({title:"提示",content:"用户点击了功能按钮，这里仅做展示。",success:function(i){i.confirm&&console.log("用户点击了确定")}})}};n.default=t},a68f:function(i,n,e){"use strict";e.r(n);var t=e("630c"),a=e("dee9");for(var u in a)"default"!==u&&function(i){e.d(n,i,function(){return a[i]})}(u);e("df9e");var v=e("2877"),c=Object(v["a"])(a["default"],t["a"],t["b"],!1,null,"2ec0dfe0",null);n["default"]=c.exports},dee9:function(i,n,e){"use strict";e.r(n);var t=e("6f35"),a=e.n(t);for(var u in t)"default"!==u&&function(i){e.d(n,i,function(){return t[i]})}(u);n["default"]=a.a},df9e:function(i,n,e){"use strict";var t=e("50d8"),a=e.n(t);a.a}}]);