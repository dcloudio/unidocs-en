(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-navigator-navigator"],{"95a4":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=a("26cb"),u={data:function(){return{title:"navigator"}},computed:(0,r.default)({},(0,i.mapState)({hasLeftWin:function(t){return!t.noMatchLeftWindow}}))};e.default=u},a94f:function(t,e,a){"use strict";a.r(e);var n=a("95a4"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},d636:function(t,e,a){"use strict";a.r(e);var n=a("dc4b"),r=a("a94f");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var u,o=a("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=c.exports},dc4b:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={pageHead:a("524e").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-navigator",{attrs:{url:"navigate/navigate?title=navigate","hover-class":"navigator-hover"}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("Jump to new page")])],1),a("v-uni-navigator",{attrs:{url:"redirect/redirect?title=redirect","open-type":"redirect","hover-class":"other-navigator-hover"}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("Open in current page")])],1),t.hasLeftWin?t._e():a("v-uni-navigator",{attrs:{url:"/pages/tabBar/extUI/extUI","open-type":"switchTab","hover-class":"other-navigator-hover"}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("Jump to Tab page")])],1)],1)],1)],1)},i=[]}}]);