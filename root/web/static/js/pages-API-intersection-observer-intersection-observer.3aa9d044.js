(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-intersection-observer-intersection-observer"],{"2d7f":function(e,t,a){"use strict";a.r(t);var n=a("d01e"),i=a("5a46");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("e080");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6327a064",null,!1,n["a"],o);t["default"]=c.exports},"5a46":function(e,t,a){"use strict";a.r(t);var n=a("8bbd"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"87d7":function(e,t,a){var n=a("c8db");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("45df7c36",n,!0,{sourceMap:!1,shadowMode:!1})},"8bbd":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,i={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var e=this;n=uni.createIntersectionObserver(this),n.relativeTo(".scroll-view").observe(".ball",(function(t){t.intersectionRatio>0&&!e.appear?e.appear=!0:!t.intersectionRatio>0&&e.appear&&(e.appear=!1)}))},onUnload:function(){n&&n.disconnect()}};t.default=i},c8db:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".scroll-view[data-v-6327a064]{height:%?400?%;background:#fff;border:1px solid #ccc;box-sizing:border-box}.scroll-area[data-v-6327a064]{height:%?1300?%;display:flex;flex-direction:column;align-items:center}.notice[data-v-6327a064]{margin-top:%?150?%;margin:%?150?% 0 %?400?% 0}.ball[data-v-6327a064]{width:%?200?%;height:%?200?%;background:#4cd964;border-radius:50%}",""]),e.exports=t},d01e:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={pageHead:a("524e").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v(e._s(e.appear?"Small ball appears":"Small ball disappears"))]),a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"scroll-area"},[a("v-uni-text",{staticClass:"notice"},[e._v("Scroll down to make the ball appear")]),a("v-uni-view",{staticClass:"ball"})],1)],1)],1)],1)},r=[]},e080:function(e,t,a){"use strict";var n=a("87d7"),i=a.n(n);i.a}}]);