(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-nav-search-input"],{"236b":function(t,e,i){"use strict";i.r(e);var n=i("32d9"),a=i("38353");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("28f3");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"44f6c69d",null,!1,n["a"],s);e["default"]=c.exports},"24d6":function(t,e,i){var n=i("c923");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3857f446",n,!0,{sourceMap:!1,shadowMode:!1})},"28f3":function(t,e,i){"use strict";var n=i("24d6"),a=i.n(n);a.a},"32d9":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{attrs:{"indicator-dots":"true"}},t._l(t.imgUrls,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-image",{attrs:{src:t}})],1)})),1),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"uni-title"},[i("v-uni-view",[t._v("This example is a demonstration of the full functionality of the navigation bar with search box,\n\t\t\t\twith the following main demonstrations.")]),i("v-uni-view",[t._v("1. The navigation bar is transparent mode, swipe up the page, the navigation bar will change from\n\t\t\t\ttransparent to solid color.")]),i("v-uni-view",[t._v("2. Click on the search box to jump to the search page.")]),i("v-uni-view",[t._v("3. Click the button on the right side of the navigation bar to realize the associated operation.")]),i("v-uni-view",[t._v("4. The search page is a prompted word search, and the input content shows related words in real time.")]),i("v-uni-view",[t._v("5. Search results highlight text based on the search content.")]),i("v-uni-view",[t._v("6. Clicking on the search list or the soft keyboard search button will save the results to the search history list.")]),i("v-uni-view",[t._v("7. Click the delete icon to clear the history search list.")]),i("v-uni-view",[t._v("Tips")]),i("v-uni-view",[t._v("1. This example is currently only supported on the App side")]),i("v-uni-view",[t._v("2. All examples are for demonstration purposes, specific logic needs to be implemented by yourself.")])],1)],1),i("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},o=[]},38353:function(t,e,i){"use strict";i.r(e);var n=i("f124"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c923:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-image[data-v-44f6c69d],\nuni-swiper[data-v-44f6c69d],\n.img-view[data-v-44f6c69d]{width:%?750?%;width:100%;height:%?500?%}.page-section-title[data-v-44f6c69d]{margin-top:%?50?%}",""]),t.exports=e},f124:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{showSwiper:!1,imgUrls:["https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4b60b10-5168-11eb-bd01-97bc1429a9ff.jpg","https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1dcfa70-5168-11eb-bd01-97bc1429a9ff.jpg"]}},onNavigationBarSearchInputClicked:function(t){console.log("event is executed"),uni.navigateTo({url:"/pages/template/nav-search-input/detail/detail"})},onNavigationBarButtonTap:function(){uni.showModal({title:"Tips",content:"The user clicks on the function button, which is only shown here.",success:function(t){t.confirm&&console.log("The user clicked OK")}})}};e.default=n}}]);