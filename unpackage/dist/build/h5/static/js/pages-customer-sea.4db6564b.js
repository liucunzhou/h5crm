(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customer-sea"],{5851:function(g,A,I){"use strict";var C=function(){var g=this,A=g.$createElement,C=g._self._c||A;return C("v-uni-view",{staticClass:"pages"},[C("v-uni-view",{staticClass:"header_box"},[C("v-uni-view",{staticClass:"header_back",on:{click:function(A){A=g.$handleEvent(A),g.goBack()}}},[C("img",{attrs:{src:I("fd18")},on:{click:function(A){A=g.$handleEvent(A),g.goBack()}}})]),C("v-uni-view",{staticClass:"header_all"},[C("v-uni-text",[g._v("客资公海")])],1),C("v-uni-view",{staticClass:"header_search",on:{click:function(A){A=g.$handleEvent(A),g.isShowSearchCompontent=!g.isShowSearchCompontent}}},[g._v("筛选")])],1),C("v-uni-view",{staticClass:"page-search"},[g.isShowPageNav?C("v-uni-view",{staticClass:"allcusList",on:{click:function(A){A=g.$handleEvent(A),g.closePageNavFn(A)}}},[C("v-uni-view",{staticClass:"allcusList_box"},g._l(g.pageNav,function(A,I){return C("v-uni-view",{key:I,class:["allcusList_main",g.pageNavIndex==I?"activeallcusList_main":""],on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.PageNavFn(I)}}},[C("v-uni-text",[g._v(g._s(A))]),g.pageNavIndex==I?C("v-uni-text",[g._v("✓")]):g._e()],1)}),1)],1):g._e(),C("v-uni-view",{staticClass:"topmuie"},[C("v-uni-view",{staticClass:"seek"},[C("v-uni-input",{attrs:{type:"text","placeholder-style":"font-size:13px",value:g.keywords,"data-key":"keywords",placeholder:"请输入手机号进行查询"},on:{input:function(A){A=g.$handleEvent(A),g.inputChange(A)}}}),C("img",{attrs:{src:I("a834")},on:{click:function(A){A=g.$handleEvent(A),g.search(A)}}})],1)],1),g.isShowSearchCompontent?C("v-uni-view",{staticClass:"topmuieFixed"},[C("v-uni-view",{staticClass:"topmuieFixed_main"},[C("v-uni-view",{staticClass:"topmuieFixed_box"},[C("v-uni-view",{staticClass:"searchNavBar"},g._l(g.searchNavBar,function(A,I){return C("v-uni-text",{key:I,class:g.searchNavIndex===I?"searchNavBartext":"",on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.searchNav(I)}}},[g._v(g._s(A))])}),1),C("v-uni-view",{staticClass:"topmuieFixed_right"},[""!=g.searchItemsFields&&2!==g.searchNavIndex?g._l(g.searchItemsFields,function(A,I){return C("v-uni-text",{key:I,class:g.searchSelectedItemIndex===I?"searchItemsFields":"",on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.searchNavItemClick(I)}}},[g._v(g._s(A.title))])}):g._e(),""!=g.searchItemsFields&&2==g.searchNavIndex?g._l(g.searchItemsFields,function(A,I){return C("v-uni-text",{key:I,class:g.searchSelectedItemIndex===I?"searchItemsFields":"",on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.searchNavItemClick(I)}}},[g._v(g._s(A.realname))])}):g._e(),3===g.searchNavIndex||4===g.searchNavIndex||5===g.searchNavIndex||6===g.searchNavIndex?g._l(g.searchDateTextItems,function(A,I){return C("v-uni-text",{key:I,class:g.searchSelectedItemIndex===I?"searchItemsFields":"",on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.searchNavItemClick(I)}}},[g._v(g._s(A))])}):g._e()],2)],1),g.searchNavIndex>2&&g.searchSelectedItemIndex===g.searchDateTextItems.length-1?C("v-uni-view",{staticClass:"clocedtime"},[C("v-uni-picker",{attrs:{mode:"date",value:g.startDate},on:{change:function(A){A=g.$handleEvent(A),g.startDateChange(A)}}},[C("v-uni-view",{staticClass:"uni-input"},[C("v-uni-text",[g._v("开始时间:"+g._s(g.startDate))])],1)],1),C("v-uni-picker",{attrs:{mode:"date",value:g.endDate},on:{change:function(A){A=g.$handleEvent(A),g.endDateChange(A)}}},[C("v-uni-view",{staticClass:"uni-input"},[C("v-uni-text",[g._v("结束时间:"+g._s(g.endDate))])],1)],1)],1):g._e(),C("v-uni-view",{staticClass:"topmuieFixed_setting"},[C("v-uni-text",{on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.emptyFn(A)}}},[g._v("清空")]),C("v-uni-text",{on:{click:function(A){A.stopPropagation(),A=g.$handleEvent(A),g.makeSure(A)}}},[g._v("确定")])],1)],1)],1):g._e()],1),g._l(g.customers,function(A,I){return C("v-uni-view",{key:A.id,staticClass:"msg"},[C("v-uni-text",{staticClass:"msgtopright"},[g._v(g._s(I+1))]),C("v-uni-view",{on:{click:function(I){I=g.$handleEvent(I),g.navToCustomer(A.id)}}},[C("v-uni-view",{staticClass:"msg_header"},[C("v-uni-view",{staticClass:"header_left"},[C("v-uni-text",{staticClass:"names"},[g._v("姓名：")]),C("v-uni-text",{staticClass:"namemain"},[g._v(g._s(A.realname))])],1)],1),C("v-uni-view",{staticClass:"msg_text"},[C("v-uni-text",{staticClass:"names"},[g._v("预算：")]),C("v-uni-text",{staticClass:"namemain"},[g._v(g._s(A.budget))])],1),C("v-uni-view",{staticClass:"msg_text"},[C("v-uni-text",{staticClass:"names"},[g._v("桌数：")]),C("v-uni-text",{staticClass:"namemain"},[g._v(g._s(A.banquet_size))])],1),C("v-uni-view",{staticClass:"msg_text"},[C("v-uni-text",{staticClass:"names"},[g._v("酒店：")]),C("v-uni-text",{staticClass:"namemain"},[g._v(g._s(A.hotel_text))])],1),C("v-uni-view",{staticClass:"msg_text"},[C("v-uni-text",{staticClass:"names"},[g._v("区域：")]),C("v-uni-text",{staticClass:"namemain"},[g._v(g._s(A.zone))])],1)],1)],1)})],2)},e=[];I.d(A,"a",function(){return C}),I.d(A,"b",function(){return e})},"71f3":function(g,A,I){"use strict";var C=I("288e");Object.defineProperty(A,"__esModule",{value:!0}),A.default=void 0;var e=C(I("f97e")),t=e.default.env.platform,a={data:function(){var g=["全部客户","我的客户","我的下属客户"],A=["跟进状态","客户来源","负责人","创建时间"],I=["今天","自定义"],C=["none","today","tomorrow","this_week","this_month","date_range"];return{keywords:"",customers:[],pageNav:g,pageNavIndex:0,isShowPageNav:!1,isShowSearchCompontent:!1,searchNavBar:A,searchDateTextItems:I,searchDateFieldItems:C,searchItemsFields:[],searchNavIndex:0,searchSelectedItemIndex:0,startDate:"",endDate:"",getBaseDatas:{},page_title:"我的客资",params:{},page:0}},onLoad:function(g){this.params=g,void 0!=g.page_title&&(this.page_title=g.page_title,uni.setNavigationBarTitle({title:g.page_title})),this.getSea(g)},created:function(){this.getBaseData()},onShow:function(){"notInDingTalk"!=t&&e.default.ready(function(){e.default.biz.navigation.hideBar({hidden:!0,onSuccess:function(g){},onFail:function(g){}})})},methods:{getSea:function(g){var A=this,I=A.$apis.customer.sea;g["token"]=this.$getToken(),uni.request({url:I,method:"POST",data:g,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(g){var I=g.data;console.log(I),"0"==I.code?A.customers=I.data:uni.showToast({title:I.msg})}})},navToCustomer:function(g){uni.navigateTo({url:"visitLogs?member_id=".concat(g)})},getBaseData:function(){var g=this,A=this,I=A.$apis.customer.getBaseData,C=this.$getToken(),e={token:C};uni.request({url:I,method:"POST",data:e,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(I){var C=I.data;"0"==C.code?(g.getBaseDatas=C.data,g.searchItemsFields=g.getBaseDatas.statuses,A.newsTypes=C.data.news_types,A.sources=C.data.sources,A.statuses=C.data.statuses,A.staffes=C.data.staffes):uni.showToast({title:C.msg})}})},goBack:function(){uni.navigateBack({delta:0})},PageNavFn:function(g){this.pageNavIndex=g},showPageNavFn:function(){this.isShowPageNav=!this.isShowPageNav},closePageNavFn:function(){this.isShowPageNav=!this.isShowPageNav},searchNav:function(g){switch(this.searchNavIndex=g,this.searchSelectedItemIndex=0,g){case 0:this.searchItemsFields=this.getBaseDatas.statuses;break;case 1:this.searchItemsFields=this.getBaseDatas.sources;break;case 2:this.searchItemsFields=this.getBaseDatas.staffes;break;case 3:this.searchItemsFields="";break}},searchNavItemClick:function(g){this.searchSelectedItemIndex=g},startDateChange:function(g){this.startDate=g.detail.value},endDateChange:function(g){this.endDate=g.detail.value},emptyFn:function(){this.searchNavIndex="",this.searchSelectedItemIndex=""},makeSure:function(){console.log(this.searchNavIndex,this.searchSelectedItemIndex);var g="";switch(this.searchNavIndex){case 0:g="status";break;case 1:g="source";break;case 2:g="staff";break;case 3:g="create_time";break}var A=0;if(this.searchNavIndex<3)A=this.searchSelectedItemIndex;else{var I=this.searchSelectedItemIndex;A=I==this.searchDateTextItems.length-1?this.startDate+"~"+this.endDate:this.searchDateFieldItems[I]}uni.navigateTo({url:"sea?"+g+"="+A+"&page_title="+this.page_title})},inputChange:function(g){var A=g.currentTarget.dataset.key;this[A]=g.detail.value},search:function(){var g=this,A=g.$apis.customer.sea,I={};if(I["token"]=this.$getToken(),""==this.keywords)return uni.showToast({title:"请填写要搜索的手机号"}),!1;I["keywords"]=this.keywords,uni.request({url:A,method:"POST",data:I,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(A){var I=A.data;"0"==I.code?g.customers=I.data:uni.showToast({title:I.msg}),g.page=g.page+1}})}}};A.default=a},"799f":function(g,A,I){"use strict";I.r(A);var C=I("5851"),e=I("9c55");for(var t in e)"default"!==t&&function(g){I.d(A,g,function(){return e[g]})}(t);I("9c1d");var a=I("2877"),i=Object(a["a"])(e["default"],C["a"],C["b"],!1,null,"75ff9891",null);A["default"]=i.exports},"9c1d":function(g,A,I){"use strict";var C=I("dc99"),e=I.n(C);e.a},"9c55":function(g,A,I){"use strict";I.r(A);var C=I("71f3"),e=I.n(C);for(var t in C)"default"!==t&&function(g){I.d(A,g,function(){return C[g]})}(t);A["default"]=e.a},beea:function(g,A,I){A=g.exports=I("2350")(!1),A.push([g.i,".pages[data-v-75ff9891]{width:100%;height:100%;padding:90px 12px 30px 12px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;position:relative;background:#0caaf0}.header_box[data-v-75ff9891]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;top:0;width:100%;height:42px;padding:10px 0 0 0;z-index:10;background:#fff;color:#00000;-webkit-box-sizing:border-box;box-sizing:border-box}.header_back[data-v-75ff9891]{-webkit-box-flex:0;-webkit-flex:0 %?38?%;-ms-flex:0 %?38?%;flex:0 %?38?%;padding-left:%?16?%}.header_back img[data-v-75ff9891]{width:100%;height:auto;vertical-align:middle;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.header_all[data-v-75ff9891]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:30px;text-align:center}.header_allimg[data-v-75ff9891]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);vertical-align:middle}.header_allimgs[data-v-75ff9891]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);vertical-align:middle}.header_search[data-v-75ff9891]{-webkit-box-flex:0;-webkit-flex:0 2rem;-ms-flex:0 2rem;flex:0 2rem;padding:0 %?16?%}.allcusList[data-v-75ff9891]{width:100%;height:100vh;background:rgba(0,0,0,.2);position:fixed;top:40px;left:0;z-index:10}.allcusList_box[data-v-75ff9891]{width:100%;height:auto;background:#fff}.allcusList_main[data-v-75ff9891]{padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:auto;line-height:35px;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.allcusList_main[data-v-75ff9891]:last-child{border:none}.activeallcusList_main[data-v-75ff9891]{color:#0caaf0}.topmuie[data-v-75ff9891]{background:#fff;width:100%;height:80px;padding-top:40px;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;left:0;border-bottom:1px solid #f4f4f4;z-index:4}\n\n\t/* 筛选弹框 */.topmuieFixed[data-v-75ff9891]{width:100%;height:100vh;background:rgba(0,0,0,.3);position:fixed;top:80px;left:0;z-index:4}.topmuieFixed_main[data-v-75ff9891]{width:100%;height:auto;background:#fff}.topmuieFixed_box[data-v-75ff9891]{width:100%;height:auto;clear:both;overflow:hidden}.searchNavBar[data-v-75ff9891]{width:50%;height:280px;overflow:scroll;float:left;background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:left;-webkit-align-items:left;-ms-flex-align:left;align-items:left;-webkit-box-sizing:border-box;box-sizing:border-box}.searchNavBar uni-text[data-v-75ff9891]{line-height:40px;padding-left:10px}.searchNavBartext[data-v-75ff9891]{line-height:30px;background:#fff;color:#0caaf0}.topmuieFixed_right[data-v-75ff9891]{width:50%;height:280px;overflow:scroll;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.topmuieFixed_right uni-text[data-v-75ff9891]{line-height:30px;font-size:10px}.searchItemsFields[data-v-75ff9891]{color:#0caaf0}.clocedtime[data-v-75ff9891]{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.topmuieFixed_setting[data-v-75ff9891]{width:100%;height:40px;background:#fff;border-top:1px #f2f2ff2 solid;font-size:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;line-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box}.topmuieFixed_setting uni-text[data-v-75ff9891]{width:50%;display:inline-block;text-align:center}.topmuieFixed_setting uni-text[data-v-75ff9891]:first-child{border-right:1px solid #f2f2f2}.screen[data-v-75ff9891]{width:50%;height:40px;display:inline-block;text-align:center;line-height:45px;text-align:center;float:left}.screen_allimg[data-v-75ff9891]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);vertical-align:middle}.screen_allimgs[data-v-75ff9891]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);vertical-align:middle}.seek[data-v-75ff9891]{float:right;text-align:center;width:100%;height:40px;line-height:45px;text-align:center;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:3px solid #0caaf0}.seek img[data-v-75ff9891]{padding-right:12px;width:38px;height:38px;display:inline-block;vertical-align:top;text-align:right;float:right}.seek uni-input[data-v-75ff9891]{height:40px;width:80%;float:left;text-align:left;padding-left:12px}.msg[data-v-75ff9891]{width:100%;height:auto;border-radius:5px;background:#fff;padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:1px 1px 10px #f4f4f4;box-shadow:1px 1px 10px #f4f4f4;position:relative;margin:10px 0}.msgtopright[data-v-75ff9891]{position:absolute;top:5px;right:5px;display:inline-block;width:15px;height:15px;text-align:center;line-height:15px;font-size:10px;color:#fff;background:#0caaf0;border-radius:50%}.msg_header[data-v-75ff9891]{width:100%;padding:15px 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:solid #f2f2f2 1px;margin-bottom:5px}.msg_text[data-v-75ff9891]{width:100%;padding:8px 0}.names[data-v-75ff9891]{color:#1e1e1e;letter-spacing:4px;margin-right:10px}.namemain[data-v-75ff9891]{color:#989898;letter-spacing:3px}",""])},dc99:function(g,A,I){var C=I("beea");"string"===typeof C&&(C=[[g.i,C,""]]),C.locals&&(g.exports=C.locals);var e=I("4f06").default;e("7f4a6fba",C,!0,{sourceMap:!1,shadowMode:!1})},fd18:function(g,A){g.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDEtMTVUMTg6MjI6NTUrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wMS0xNVQxODozMTo1MSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDEtMTVUMTg6MzE6NTErMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MTFlYzhlZWUtNjVkMi0zNTQ2LTg5YmUtMDE3MTk0OTY1OGNiPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjExZWM4ZWVlLTY1ZDItMzU0Ni04OWJlLTAxNzE5NDk2NThjYjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjExZWM4ZWVlLTY1ZDItMzU0Ni04OWJlLTAxNzE5NDk2NThjYjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxMWVjOGVlZS02NWQyLTM1NDYtODliZS0wMTcxOTQ5NjU4Y2I8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDEtMTVUMTg6MjI6NTUrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8++YH0tAAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAADU0lEQVR42uzdvWoUYRiG4Tt2gmAZRPEnCGLjIUyhiBaChWCpkMJT8AjEWqysIlh5ABbaCC+YRsEDEBQ8ABFMowixyEZEDNmYnZ2Z77mfdmZh2edi/+ab91vZ3t7G5GZFAALwVRCAEYARgBGAEYARgBGAEYARwPDpuu4i8KGqfu5xfNDnV1UC6Kn4W8AD4ALwBXgMPKyq7wJoHEDXdfeAJ/84tAlcq6otAbQN4BtwbI/Db4HLuwgE0BiAruvOAx/2Oe03AgG0B+AosAUcmQfB7FwBNPYR8BS4O8epgyMQQD8ATgDvgdWxIxBAfwjWZt/6R41AAOEIBBCOQADhCAQQjkAA4QgEEI5AAOEIBBCOQADhCAQwDgQFnBwCgQCGBwBwBngzBAIBjAPAYAgEMB4AgyAQwLgALB2BAMYHYKkIBDBOAEtDIIDxAlgKAgGMG0DvCAQwfgC9IhDANAD0hkAA0wHQCwIBTAvAwhEIYHoAFopAANMEsDAEApgugIUgEMC0ARwagQCmD+BQCATQBoD/RiCAdgDsIijg9LwI/hxXI4DpA2D2DrCZgkAA4QgEEI5AAOEIBBCOQADhCAQQjkAA4QgEEI5AAOEIBBCOQADhCASwXAQvq+q6ABoCUFV0XXcQBDeq6oUAGgIwex7zItioqnUBtAdgdQZgbZ+HPKuqOwJo7yOg5igfYL2qNgSQ+SXwNXClqrYF4M9AAUwcgH8EBQPwr+BgAF4MCgbg5eBgAC4ICQbgkrBgAC4KDQbgsvBgAN4YEgzAW8OCAXhzaDCAqPIFcMjycUBEMwAOPBgCR8Q0A8AhUcEAHBPnoEgHRSYCcFRsMACHRQcDcFx8MAA3jAgG4JYxwQDcNCoYgNvGBQNw48hgAG4dGwzAzaODAbh9fDCANXYu6S6tfAGMB8AaO4s5VpdZvgDGAWCw8gUQXr4AwssXQHj5AggvXwDh5QsgvHwBhJcvgPDyBRBevgDCyxdAf+WfAt6NvXwB9AfgFXB17OULoJ/yjwNfp1C+APoBcA74OE/5VbU1lv0CBLBYBJ+As/uVPztXAA0CuA083698AbT9M/AmcB+4BHwGNoBHVfXjr/ME0CIAIwAjACMAIwAjACMAIwAjACMAIwAjALOQ/BoAyS4YPZJjKYoAAAAASUVORK5CYII="}}]);