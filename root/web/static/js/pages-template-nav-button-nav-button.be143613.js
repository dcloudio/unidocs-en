(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-button-nav-button"],{3837:function(t,n,e){"use strict";e.r(n);var i=e("6ee3"),u=e("4205");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);var a,s=e("f0c5"),c=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,"70eaaf05",null,!1,i["a"],a);n["default"]=c.exports},"3da8":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"nav-button"}},onNavigationBarButtonTap:function(t){uni.showToast({title:0===t.index?"You clicked the share button":"You clicked the favorite button",icon:"none"})}};n.default=i},4205:function(t,n,e){"use strict";e.r(n);var i=e("3da8"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},"6ee3":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={pageHead:e("524e").default,uniIcons:e("1cc9").default},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("uni-icons",{attrs:{size:"16",type:"info"}}),t._v("Description :")],1),e("v-uni-view",{staticClass:"uni-helllo-text"},[e("v-uni-view",[t._v("In the App side, you can configure the buttons in pages.json, do not support dynamically changing the style of the buttons, use onNavigationBarButtonTap to listen to the click event of the buttons.")]),e("v-uni-view",[t._v("In the applet side, configuration of buttons is not supported, so the button is missing.")])],1)],1)],1)},o=[]}}]);