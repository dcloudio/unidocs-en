(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-label-label"],{"000b":function(e,t,i){var n=i("37fa");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6e1eed3c",n,!0,{sourceMap:!1,shadowMode:!1})},"1a7f":function(e,t,i){"use strict";i.r(t);var n=i("e334"),a=i("3c1b");for(var l in a)"default"!==l&&function(e){i.d(t,e,(function(){return a[e]}))}(l);i("d420");var c,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"4df0eac0",null,!1,n["a"],c);t["default"]=s.exports},"37fa":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-list-cell[data-v-4df0eac0]{justify-content:flex-start}.uni-list .label-3[data-v-4df0eac0]{padding:0}.label-2-text[data-v-4df0eac0]{flex:1}",""]),e.exports=t},"3c1b":function(e,t,i){"use strict";i.r(t);var n=i("6b3d"),a=i.n(n);for(var l in n)"default"!==l&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=a.a},"6b3d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"USA"},{name:"China",value:"China",checked:"true"}],radioItems:[{name:"USA",value:"USA"},{name:"China",value:"China",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){var t=e.detail.value;console.log(t)},radioChange:function(e){var t=e.detail.value;console.log(t)}}};t.default=n},d420:function(e,t,i){"use strict";var n=i("000b"),a=i.n(n);a.a},e334:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return n}));var n={pageHead:i("524e").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("The form component is inside the label")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.checkboxItems,(function(t){return i("v-uni-label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-checkbox",{attrs:{value:t.name,checked:t.checked}})],1),i("v-uni-view",[e._v(e._s(t.value))])],1)})),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label identifies form components with for")]),i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.radioItems,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",[i("v-uni-radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),i("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[i("v-uni-text",[e._v(e._s(t.value))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-view",{staticClass:"title"},[e._v("label内Check the first one if there are more than one in label")]),i("v-uni-checkbox-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"label-3"},[i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("Option 1")])],1),i("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-checkbox",{staticClass:"checkbox-3"},[e._v("Option 2")])],1),i("v-uni-view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20rpx"}},[e._v("Click on the text under the label to select the first checkbox by default")])],1)],1)],1)],1)],1)},l=[]}}]);