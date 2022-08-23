(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-login-login"],{"1eed":function(n,e,i){"use strict";var t=i("4ea4");i("99af"),i("c975"),i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(i("3835"));i("96cf");var a=t(i("1da1")),r=t(i("5530")),u=i("26cb"),c="univerifyInfo",s={data:function(){return{title:"login",providerList:[],phoneNumber:"",univerifyBtnLoading:!1}},computed:(0,r.default)({},(0,u.mapState)(["hasLogin","isUniverifyLogin","univerifyErrorMsg"])),onLoad:function(){var n=this;uni.getProvider({service:"oauth",success:function(e){n.providerList=e.provider.map((function(n){var e="";switch(n){case"weixin":e="WeChat Login";break;case"qq":e="QQ Login";break;case"sinaweibo":e="Sina Weibo Login";break;case"xiaomi":e="Xiaomi Login";break;case"alipay":e="Alipay Login";break;case"baidu":e="Baidu Login";break;case"jd":e="Jingdong Login";break;case"toutiao":e="toutiao Login";break;case"apple":e="Apple Login";break;case"univerify":e="Univerify Login";break}return{name:e,id:n}}))},fail:function(n){console.log("Failed to get login channel",n)}}),this.hasLogin&&this.isUniverifyLogin&&this.getPhoneNumber(uni.getStorageSync(c)).then((function(e){n.phoneNumber=e}))},methods:(0,r.default)((0,r.default)((0,r.default)({},(0,u.mapMutations)(["login","setUniverifyLogin"])),(0,u.mapActions)(["getPhoneNumber"])),{},{Toast:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;uni.showToast(Object.assign({},n,{duration:e}))},tologin:function(n){var e=this;"univerify"===n.id&&(this.univerifyBtnLoading=!0),uni.login({provider:n.id,success:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(t){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:console.log("login success:",t),e.Toast({title:"Login successful"}),e.login(n.id);case 3:case"end":return i.stop()}}),i)})));function t(n){return i.apply(this,arguments)}return t}(),fail:function(n){if(console.log("login fail:",n),"30002"==n.code)return uni.closeAuthView(),void e.Toast({title:"Other login methods"});1e3!=n.code?"30005"!=n.code?"30003"!=n.code&&uni.showModal({showCancel:!1,title:"Login failure",content:JSON.stringify(n)}):uni.showModal({showCancel:!1,title:"预登录失败",content:e.univerifyErrorMsg||n.errMsg}):uni.showModal({title:"Login failure",content:"".concat(n.errMsg,"\n，Error Code：").concat(n.code),confirmText:"Opening Guide",cancelText:"OK",success:function(n){n.confirm&&setTimeout((function(){plus.runtime.openWeb("https://ask.dcloud.net.cn/article/37965")}),500)}})},complete:function(){e.univerifyBtnLoading=!1}})},loginByUniverify:function(n,e){var i=this;this.setUniverifyLogin(!0),uni.closeAuthView();var t=(0,r.default)({provider:n},e.authResult);this.getPhoneNumber(t).then((function(n){i.phoneNumber=n,uni.setStorageSync(c,t)})).catch((function(n){uni.showModal({showCancel:!1,title:"Cell phone number acquisition failure",content:"".concat(n.errMsg,"\n，Error Code：").concat(n.code)}),console.error(e)}))},loginByApple:function(n,e){return(0,a.default)(regeneratorRuntime.mark((function e(){var i,t,a,r,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.getUserInfo({provider:n});case 2:a=e.sent,r=(0,o.default)(a,2),i=r[0],t=r[1],i&&(u=i.errMsg,~u.indexOf("uni.login")&&(u="Please complete the login operation on the login page"),uni.showModal({title:"Failed to get user information",content:"Reason for error"+u,showCancel:!1})),console.warn("This uses uni-id to handle Apple logins, for details refer to: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),uni.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByApple",params:t.userInfo},success:function(n){console.log("uniId login success",n),0!==n.data.code?uni.showModal({showCancel:!1,content:"Apple login failure: ".concat(JSON.stringify(n.data.msg))}):(uni.setStorageSync("openid",n.data.openid),uni.setStorageSync("apple_nickname",n.data.userInfo.nickname))},fail:function(n){uni.showModal({content:"Apple login failure: ".concat(JSON.stringify(n)),showCancel:!1})}});case 9:case"end":return e.stop()}}),e)})))()}})};e.default=s},"5bad":function(n,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var t={pageHead:i("524e").default},o=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticStyle:{background:"#FFF",padding:"40rpx"}},[!0===n.hasLogin?[i("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[n._v("Logged in"),n.isUniverifyLogin?i("v-uni-text",{staticStyle:{"font-size":"0.8em"}},[n.phoneNumber.length?i("i",[n._v("（"+n._s(n.phoneNumber)+"）")]):i("i",{staticClass:"uni-icon_toast uni-loading"})]):n._e()],1),i("v-uni-view",{staticClass:"uni-hello-text uni-center"},[i("v-uni-text",[n._v("Each account only needs to log in 1 time, \\n each subsequent entry page can automatically pull the user information.")])],1)]:n._e(),!1===n.hasLogin?[i("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[n._v("Not logged in")]),i("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n._v("Please click the button to log in")])]:n._e()],2),i("v-uni-view",{staticClass:"uni-btn-v uni- uni-common-mt"},n._l(n.providerList,(function(e,t){return i("v-uni-button",{key:t,staticClass:"page-body-button",attrs:{type:"primary",loading:"univerify"===e.id&&n.univerifyBtnLoading},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.tologin(e)}}},[n._v(n._s(e.name))])})),1)],1)],1)},a=[]},6497:function(n,e,i){var t=i("e47a");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var o=i("4f06").default;o("541354f4",t,!0,{sourceMap:!1,shadowMode:!1})},cc49:function(n,e,i){"use strict";i.r(e);var t=i("5bad"),o=i("fa6f");for(var a in o)"default"!==a&&function(n){i.d(e,n,(function(){return o[n]}))}(a);i("ebe3");var r,u=i("f0c5"),c=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"7fe017c0",null,!1,t["a"],r);e["default"]=c.exports},e47a:function(n,e,i){var t=i("24fb");e=t(!1),e.push([n.i,"uni-button[data-v-7fe017c0]{background-color:#007aff;color:#fff}",""]),n.exports=e},ebe3:function(n,e,i){"use strict";var t=i("6497"),o=i.n(t);o.a},fa6f:function(n,e,i){"use strict";i.r(e);var t=i("1eed"),o=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=o.a}}]);