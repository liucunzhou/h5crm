(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-video-video"],{"0fa4":function(e,t,a){"use strict";a.r(t);var i=a("ed21"),n=a("ea4f");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("4ee8");var c=a("2877"),u=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"779c1211",null);t["default"]=u.exports},"4ee8":function(e,t,a){"use strict";var i=a("fe1e"),n=a.n(i);n.a},9845:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[["camera"],["album"],["camera","album"]],n={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange:function(e){for(var t=0;t<this.cameraList.length;t++)if(this.cameraList[t].value===e.target.value){this.cameraIndex=t;break}},sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},chooseVideo:function(){var e=this;uni.chooseVideo({camera:this.cameraList[this.cameraIndex].value,sourceType:i[this.sourceTypeIndex],success:function(t){e.src=t.tempFilePath}})}}};t.default=n},ea4f:function(e,t,a){"use strict";a.r(t);var i=a("9845"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},ed21:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[e._v("视频来源")])],1),a("v-uni-view",{staticClass:"uni-list-cell-right"},[a("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex},on:{change:function(t){t=e.$handleEvent(t),e.sourceTypeChange(t)}}},[a("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1)],1)],1),e.src?[a("v-uni-video",{staticClass:"video",attrs:{src:e.src}})]:[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseVideo(t)}}},[e._v("+ 添加视频")])]],2)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},f58d:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".video[data-v-779c1211]{width:100%}.camera-tips[data-v-779c1211]{padding:%?10?% %?30?%}",""])},fe1e:function(e,t,a){var i=a("f58d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("394b2134",i,!0,{sourceMap:!1,shadowMode:!1})}}]);