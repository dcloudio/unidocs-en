(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-default-nav-default"],{"15e0":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={pageHead:n("524e").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-helllo-text"},[t._v("The title bar of this page is the default configuration of uni-app, developers can configure the text content and title color in pages.json, or change it through the api interface.")]),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setText.apply(void 0,arguments)}}},[t._v("Change title bar text")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setBg.apply(void 0,arguments)}}},[t._v("Change title bar color")])],1)],1)],1)},u=[]},4325:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"nav-default",hasSetText:!1,hasSetBg:!1}},methods:{setText:function(){this.hasSetText=!this.hasSetText,uni.setNavigationBarTitle({title:this.hasSetText?"Hello uni-app":"Default navigation bar"})},setBg:function(){this.hasSetBg=!this.hasSetBg,uni.setNavigationBarColor({frontColor:this.hasSetBg?"#ffffff":"#000000",backgroundColor:this.hasSetBg?"#007AFF":"#F8F8F8"})}}};e.default=a},"5d00":function(t,e,n){"use strict";n.r(e);var a=n("4325"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},"786e":function(t,e,n){"use strict";n.r(e);var a=n("15e0"),i=n("5d00");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);var o,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"ae40373c",null,!1,a["a"],o);e["default"]=s.exports}}]);