(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-share-share"],{"0872":function(e,t,a){"use strict";a.r(t);var n=a("22b0"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"22b0":function(e,t,a){"use strict";var n=a("4ea4");a("4e82"),a("d3b7"),a("e25e"),a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),r={data:function(){return{title:"share",shareText:"uni-app can be published as a native app, applet, and H5 at the same time, and you are invited to experience them together!",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"Share to WeChat friends"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"Welcome to experience uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png"}},onUnload:function(){this.shareText="uni-app can be published as a native app, applet, and H5 at the same time, and you are invited to experience them together!",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var e=this;uni.getProvider({service:"share",success:function(t){console.log("success",t);for(var a=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":a.push({name:"Share to WeChat friends",id:"weixin",sort:0}),a.push({name:"Share to WeChat friend circle",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":a.push({name:"Share on Sina Weibo",id:"sinaweibo",sort:2});break;case"qq":a.push({name:"Share to QQ",id:"qq",sort:3});break;default:break}e.providerList=a.sort((function(e,t){return e.sort-t.sort}))},fail:function(e){console.log("Share coFailed to get sharing accessntent",e),uni.showModal({content:"Share coFailed to get sharing accessntent",showCancel:!1})}})},methods:{share:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("Share Channel:"+e.id+"； Share Type:"+t.shareType),t.shareText||1!==t.shareType&&0!==t.shareType){a.next=4;break}return uni.showModal({content:"Share content Cannot be empty",showCancel:!1}),a.abrupt("return");case 4:if(t.image||2!==t.shareType&&0!==t.shareType){a.next=7;break}return uni.showModal({content:"Share image cannot be empty",showCancel:!1}),a.abrupt("return");case 7:n={provider:e.id,scene:e.type&&"WXSenceTimeline"===e.type?"WXSenceTimeline":"WXSceneSession",type:t.shareType,success:function(e){console.log("success",e),uni.showModal({content:"Shared",showCancel:!1})},fail:function(e){console.log("fail",e),uni.showModal({content:e.errMsg,showCancel:!1})},complete:function(){console.log("End of sharing operation!")}},a.t0=t.shareType,a.next=0===a.t0?11:1===a.t0?16:2===a.t0?18:5===a.t0?20:24;break;case 11:return n.summary=t.shareText,n.imageUrl=t.image,n.title="Welcome to experience uniapp",n.href="https://uniapp.dcloud.io",a.abrupt("break",25);case 16:return n.summary=t.shareText,a.abrupt("break",25);case 18:return n.imageUrl=t.image,a.abrupt("break",25);case 20:return n.imageUrl=t.image?t.image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b6304f00-5168-11eb-bd01-97bc1429a9ff.png",n.title="Welcome to experience uniapp",n.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},a.abrupt("break",25);case 24:return a.abrupt("break",25);case 25:if(0!==n.type||"iOS"!==plus.os.name){a.next=29;break}return a.next=28,t.compress();case 28:n.imageUrl=a.sent;case 29:1===n.type&&"qq"===n.provider&&(n.href="https://uniapp.dcloud.io",n.title="Welcome to experience uniapp"),uni.share(n);case 31:case"end":return a.stop()}}),a)})))()},radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var e=this;uni.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(t){e.image=t.tempFilePaths[0]},fail:function(e){}})},compress:function(){console.log("Start compression");var e=this.image;return new Promise((function(t){var a=plus.io.convertAbsoluteFileSystem(e.replace("file://",""));console.log("after"+a),plus.io.resolveLocalFileSystemURL(a,(function(a){a.file((function(a){console.log("getFile:"+JSON.stringify(a)),a.size>20480&&plus.zip.compressImage({src:e,dst:e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},(function(a){console.log("success zip****"+a.size);var n=e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");t(n)}),(function(e){uni.showModal({content:"Share the picture is too big, need to re-select the picture!",showCancel:!1})}))}))}),(function(e){console.log("Resolve file URL failed: "+e.message),uni.showModal({content:"Share the picture is too big, need to re-select the picture!",showCancel:!1})}))}))}}};t.default=r},"69a5":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={pageHead:a("524e").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[e._v("Share content")]),a("v-uni-view",{staticClass:"uni-textarea"},[a("v-uni-textarea",{staticClass:"textarea",model:{value:e.shareText,callback:function(t){e.shareText=t},expression:"shareText"}})],1),a("v-uni-view",{staticClass:"uni-title"},[e._v("Share image：")]),a("v-uni-view",{staticClass:"uni-uploader",staticStyle:{padding:"15rpx",background:"#FFF"}},[e.image?e._e():a("v-uni-view",{staticClass:"uni-uploader__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}}),e.image?a("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e.image}}):e._e()],1)],1)],1)},r=[]},"8ee6":function(e,t,a){"use strict";a.r(t);var n=a("69a5"),i=a("0872");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"265df607",null,!1,n["a"],s);t["default"]=c.exports}}]);