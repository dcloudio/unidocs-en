(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox-checkbox"],{"18d4":function(e,t,n){"use strict";n.r(t);var a=n("8105"),i=n("d9e0");for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("df2c");var u,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"08506297",null,!1,a["a"],u);t["default"]=s.exports},2533:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".uni-list-cell[data-v-08506297]{justify-content:flex-start}",""]),e.exports=t},"2fa7":function(e,t,n){"use strict";n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"Checkbox",items:[{value:"USA",name:"USA"},{value:"CHN",name:"China",checked:"true"},{value:"BRA",name:"Brazil"},{value:"JPN",name:"Japan"},{value:"ENG",name:"England"},{value:"FRA",name:"France"}]}},methods:{checkboxChange:function(e){for(var t=this.items,n=e.detail.value,a=0,i=t.length;a<i;++a){var c=t[a];n.indexOf(c.value)>=0?this.$set(c,"checked",!0):this.$set(c,"checked",!1)}}}};t.default=a},7982:function(e,t,n){var a=n("2533");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("261c750f",a,!0,{sourceMap:!1,shadowMode:!1})},8105:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var a={pageHead:n("524e").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("Default Style")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb1",checked:"true"}}),e._v("Checked")],1),n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb"}}),e._v("Unchecked")],1)],1)],1),n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("Different colors and sizes checkbox")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb1",checked:"true",color:"#FFCC33"}}),e._v("Checked")],1),n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",color:"#FFCC33"}}),e._v("Unchecked")],1)],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("Recommended display style"),n("v-uni-text",[e._v("\\nUse uni-list layout")])],1)],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.items,(function(t){return n("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1),n("v-uni-view",[e._v(e._s(t.name))])],1)})),1)],1)],1)},c=[]},d9e0:function(e,t,n){"use strict";n.r(t);var a=n("2fa7"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},df2c:function(e,t,n){"use strict";var a=n("7982"),i=n.n(a);i.a}}]);