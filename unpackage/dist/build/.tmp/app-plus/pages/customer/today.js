(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer/today"],{"1d18":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=(e._self._c,a("fd18")),n=a("a834");e._isMounted||(e.e0=function(t){e.isShowSearchCompontent=!e.isShowSearchCompontent}),e.$mp.data=Object.assign({},{$root:{m0:s,m1:n}})},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},"31db":function(e,t,a){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("f97e"));function i(e){return e&&e.__esModule?e:{default:e}}var o=n.default.env.platform,c={data:function(){var e=["全部客户","我的客户","我的下属客户"],t=["跟进状态","客户来源","负责人","下次跟进时间","创建时间"],a=["不限","今天","明天","本周","本月","自定义"],s=["none","today","tomorrow","this_week","this_month","date_range"];return{keywords:"",customers:[],pageNav:e,pageNavIndex:0,isShowPageNav:!1,isShowSearchCompontent:!1,searchNavBar:t,searchDateTextItems:a,searchDateFieldItems:s,searchItemsFields:[],searchNavIndex:0,searchSelectedItemIndex:0,startDate:"",endDate:"",getBaseDatas:{},page_title:"我的客资",params:{},page:0}},onLoad:function(t){this.params=t,void 0!=t.page_title&&(this.page_title=t.page_title,e.setNavigationBarTitle({title:t.page_title})),this.getCustomerList(t),this.getBaseData()},onShow:function(){"notInDingTalk"!=o&&n.default.ready(function(){n.default.biz.navigation.hideBar({hidden:!0,onSuccess:function(e){},onFail:function(e){}})})},methods:{getCustomerList:function(t){var a=this,n=a.$apis.visit.today;t["token"]=this.$getToken(),e.request({url:n,method:"POST",data:t,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var n=t.data;console.log(s(n," at pages/customer/today.vue:191")),"0"==n.code?a.customers=n.data:e.showToast({title:n.msg})}})},navToCustomer:function(t){e.navigateTo({url:"visitCustomer?member_id=".concat(t)})},getBaseData:function(){var t=this,a=this,s=a.$apis.customer.getBaseData,n=this.$getToken(),i={token:n};e.request({url:s,method:"POST",data:i,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(s){var n=s.data;"0"==n.code?(t.getBaseDatas=n.data,t.searchItemsFields=t.getBaseDatas.statuses,a.newsTypes=n.data.news_types,a.sources=n.data.sources,a.statuses=n.data.statuses,a.staffes=n.data.staffes):e.showToast({title:n.msg})}})},goBack:function(){e.navigateBack({delta:0})},PageNavFn:function(e){this.pageNavIndex=e},showPageNavFn:function(){this.isShowPageNav=!this.isShowPageNav},closePageNavFn:function(){this.isShowPageNav=!this.isShowPageNav},searchNav:function(e){switch(this.searchNavIndex=e,this.searchSelectedItemIndex=0,e){case 0:this.searchItemsFields=this.getBaseDatas.statuses;break;case 1:this.searchItemsFields=this.getBaseDatas.sources;break;case 2:this.searchItemsFields=this.getBaseDatas.staffes;break;case 3:this.searchItemsFields="";break;case 4:this.searchItemsFields="";break}},searchNavItemClick:function(e){this.searchSelectedItemIndex=e},startDateChange:function(e){this.startDate=e.detail.value},endDateChange:function(e){this.endDate=e.detail.value},emptyFn:function(){this.searchNavIndex="",this.searchSelectedItemIndex=""},makeSure:function(){console.log(s(this.searchNavIndex,this.searchSelectedItemIndex," at pages/customer/today.vue:314"));var t="";switch(this.searchNavIndex){case 0:t="status";break;case 1:t="source";break;case 2:t="staff";break;case 3:t="next_visit_time";break;case 4:t="create_time";break}var a=0;if(this.searchNavIndex<3)a=this.searchSelectedItemIndex;else{var n=this.searchSelectedItemIndex;a=n==this.searchDateTextItems.length-1?this.startDate+"~"+this.endDate:this.searchDateFieldItems[n]}e.navigateTo({url:"today?"+t+"="+a+"&page_title="+this.page_title})},inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},search:function(){var t=this,a=t.$apis.customer.mine,s={};if(s["token"]=this.$getToken(),""==this.keywords)return e.showToast({title:"请填写要搜索的手机号"}),!1;s["keywords"]=this.keywords,e.request({url:a,method:"POST",data:s,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var s=a.data;"0"==s.code?t.customers=s.data:e.showToast({title:s.msg}),t.page=t.page+1}})}}};t.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},"442c":function(e,t,a){},"769f":function(e,t,a){"use strict";a.r(t);var s=a("31db"),n=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);t["default"]=n.a},"7e6d":function(e,t,a){"use strict";a.r(t);var s=a("1d18"),n=a("769f");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("8cbf");var o=a("2877"),c=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=c.exports},"8cbf":function(e,t,a){"use strict";var s=a("442c"),n=a.n(s);n.a}},[["7276","common/runtime","common/vendor"]]]);