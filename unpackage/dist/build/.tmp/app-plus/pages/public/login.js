(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{"3dbf":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},"3ddf":function(n,t,e){},4722:function(n,t,e){"use strict";e.r(t);var a=e("3dbf"),o=e("f9d5");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("81d0");var u=e("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},"7b77":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,a,o,i,u){try{var r=n[i](u),c=r.value}catch(s){return void e(s)}r.done?t(c):Promise.resolve(c).then(a,o)}function u(n){return function(){var t=this,e=arguments;return new Promise(function(a,o){var u=n.apply(t,e);function r(n){i(u,a,o,r,c,"next",n)}function c(n){i(u,a,o,r,c,"throw",n)}r(void 0)})}}var r={data:function(){return{nickname:"",password:"",logining:!1}},onLoad:function(){},methods:{inputChange:function(n){var t=n.currentTarget.dataset.key;this[t]=n.detail.value},navBack:function(){n.navigateBack()},toRegist:function(){n.navigateTo({url:"/pages/public/signin"})},toLogin:function(){var t=u(a.default.mark(function t(){var e,o,i,u;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.logining=!1,e=this.nickname,o=this.password,i={nickname:e,password:o},u="http://crm.reactphp.club/api/passport/dologin",n.request({url:u,method:"POST",data:i,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data;if("200"==e.code)try{n.setStorageSync("token",e.result.token),n.navigateTo({url:"/pages/home/index",success:function(n){},fail:function(){},complete:function(){}})}catch(a){n.showToast({title:"登陆失败"})}else n.showToast({title:e.msg})}});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};t.default=r}).call(this,e("6e42")["default"])},"81d0":function(n,t,e){"use strict";var a=e("3ddf"),o=e.n(a);o.a},f9d5:function(n,t,e){"use strict";e.r(t);var a=e("7b77"),o=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=o.a}},[["cddf","common/runtime","common/vendor"]]]);