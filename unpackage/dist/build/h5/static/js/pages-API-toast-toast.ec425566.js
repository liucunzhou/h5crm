(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-toast-toast"],{1276:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast1Tap(n)}}},[t._v("点击弹出默认toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast2Tap(n)}}},[t._v("点击弹出设置duration的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast3Tap(n)}}},[t._v("点击弹出显示loading的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast4Tap(n)}}},[t._v("点击弹出显示自定义图片的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.hideToast(n)}}},[t._v("点击隐藏toast")])],1)],1)],1)},o=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return o})},"1c09":function(t,n,a){"use strict";a.r(n);var i=a("1276"),o=a("d74a");for(var u in o)"default"!==u&&function(t){a.d(n,t,function(){return o[t]})}(u);var e=a("2877"),s=Object(e["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},d74a:function(t,n,a){"use strict";a.r(n);var i=a("f66f"),o=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},f66f:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"toast"}},methods:{toast1Tap:function(){uni.showToast({title:"默认"})},toast2Tap:function(){uni.showToast({title:"duration 3000",duration:3e3})},toast3Tap:function(){uni.showToast({title:"loading",icon:"loading",duration:5e3})},toast4Tap:function(){uni.showToast({title:"logo",image:"../../../static/uni.png"})},hideToast:function(){uni.hideToast()}}};n.default=i}}]);