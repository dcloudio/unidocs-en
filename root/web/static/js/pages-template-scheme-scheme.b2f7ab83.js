(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-scheme-scheme"],{"1fa2":function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,".button[data-v-2540dfe6]{margin:%?30?%;color:#007aff}",""]),e.exports=n},"53c8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},methods:{openBrowser:function(e){plus.runtime.openURL(e)},openMarket:function(e){var n;n="Android"==plus.os.name?"market://details?id=io.dcloud.hellouniapp":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253","undefined"==typeof e?plus.runtime.openURL(n,(function(e){console.log(e)})):"Android"==plus.os.name?plus.runtime.openURL(n,(function(e){plus.nativeUI.alert("There is no YinYongBao App Store installed on this machine")}),e):plus.nativeUI.alert("Only Android phones support YinYongBao App Store")},openTaobao:function(e){plus.runtime.openURL(e,(function(e){uni.showModal({content:"This machine does not detect the Taobao client, whether to open the browser to access Taobao？",success:function(e){e.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})}))},openMap:function(){var e="";if("Android"==plus.os.name){var n=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),t=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),a="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",i="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";t&&n?plus.nativeUI.actionSheet({title:"Select a map application",cancel:"Cancel",buttons:[{title:"Baidu map"},{title:"Gaode Map"}]},(function(e){switch(e.index){case 1:plus.runtime.openURL(a);break;case 2:plus.runtime.openURL(i);break}})):t?plus.runtime.openURL(i):n?plus.runtime.openURL(a):(e="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(e))}else plus.nativeUI.actionSheet({title:"Select a map application",cancel:"Cancel",buttons:[{title:"Apple Map"},{title:"Baidu map"},{title:"Gaode Map"}]},(function(n){switch(console.log("e.index: "+n.index),n.index){case 1:e="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:e="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:e="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";break;default:break}""!=e&&plus.runtime.openURL(e,(function(e){plus.nativeUI.alert("本机未安装指定的地图应用")}))}))},openQQ:function(e){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+e.detail.value.qqNumType+"&uin="+e.detail.value.qqNum,(function(e){plus.nativeUI.alert("No QQ installed on this machine, can't start")}))}}};n.default=a},"542e":function(e,n,t){"use strict";t.r(n);var a=t("53c8"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},"5c4b":function(e,n,t){var a=t("1fa2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("26f3812a",a,!0,{sourceMap:!1,shadowMode:!1})},"9bfc":function(e,n,t){"use strict";var a=t("5c4b"),i=t.n(a);i.a},cff0:function(e,n,t){"use strict";t.r(n);var a=t("eda8"),i=t("542e");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("9bfc");var u,s=t("f0c5"),p=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2540dfe6",null,!1,a["a"],u);n["default"]=p.exports},eda8:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var a={pageHead:t("524e").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("page-head",{attrs:{title:"通过scheme打开三方app示例"}}),t("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.openBrowser("https://uniapp.dcloud.io/h5")}}},[e._v("Open the specified URL using your browser")]),t("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.openMarket()}}},[e._v("Open the specified app using the app store")]),t("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.openMarket("com.tencent.android.qqdownloader")}}},[e._v("Force to use App Store to open the specifiedApp")]),t("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.openTaobao("taobao://s.taobao.com/search?q=uni-app")}}},[e._v("Open Taobao search page")]),t("v-uni-button",{staticClass:"button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.openMap()}}},[e._v("Open the map and specify the location")]),t("v-uni-view",{staticClass:"uni-divider"},[t("v-uni-view",{staticClass:"uni-divider__content"},[e._v("Open QQ")]),t("v-uni-view",{staticClass:"uni-divider__line"})],1),t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("v-uni-form",{on:{submit:function(n){arguments[0]=n=e.$handleEvent(n),e.openQQ.apply(void 0,arguments)}}},[t("v-uni-view",[t("v-uni-view",{staticClass:"uni-title"},[e._v("Please enter the QQ number of the person you are chatting with：")]),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-view",{staticClass:"uni-list-cell"},[t("v-uni-input",{staticClass:"uni-input",attrs:{name:"qqNum",type:"number"}})],1)],1)],1),t("v-uni-view",[t("v-uni-view",{staticClass:"uni-title"},[e._v("Please select the type of QQ number：")]),t("v-uni-radio-group",{staticClass:"uni-flex",attrs:{name:"qqNumType"}},[t("v-uni-label",[t("v-uni-radio",{attrs:{value:"wpa",checked:""}}),e._v("General QQ number")],1),t("v-uni-label",[t("v-uni-radio",{attrs:{value:"crm"}}),e._v("Marketing QQ number (no need to add friends to chat directly)")],1)],1)],1),t("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[t("v-uni-button",{staticClass:"button",attrs:{formType:"submit"}},[e._v("Open qq and go to the designated chat screen")])],1)],1)],1)],1)},o=[]}}]);