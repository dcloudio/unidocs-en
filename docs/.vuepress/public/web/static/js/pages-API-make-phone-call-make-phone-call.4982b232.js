(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-make-phone-call-make-phone-call"],{"3db6":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(t){this.inputValue=t.detail.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){uni.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("Successful calls")}})}}};n.default=i},"477d":function(t,n,e){"use strict";e.r(n);var i=e("ac31"),a=e("c700");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("c688");var l,o=e("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"06bab6d6",null,!1,i["a"],l);n["default"]=c.exports},"4cb1":function(t,n,e){var i=e("c82f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("029bf2ef",i,!0,{sourceMap:!1,shadowMode:!1})},ac31:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={pageHead:e("524e").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("Please enter your phone number below")]),e("v-uni-input",{staticClass:"input uni-common-mt",attrs:{type:"number",name:"input"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.bindInput.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.makePhoneCall.apply(void 0,arguments)}}},[t._v("Call")])],1)],1)],1)},u=[]},c688:function(t,n,e){"use strict";var i=e("4cb1"),a=e.n(i);a.a},c700:function(t,n,e){"use strict";e.r(n);var i=e("3db6"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},c82f:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".input[data-v-06bab6d6]{height:%?119?%;line-height:%?119?%;font-size:%?78?%;border-bottom:%?1?% solid #e2e2e2;text-align:center}",""]),t.exports=n}}]);