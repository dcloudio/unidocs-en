(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-background-audio-background-audio"],{"10d1":function(t,e,n){"use strict";var a,i=n("da84"),r=n("e2cc"),o=n("f183"),u=n("6d61"),s=n("acac"),c=n("861d"),d=n("69f3").enforce,l=n("7f9a"),f=!i.ActiveXObject&&"ActiveXObject"in i,p=Object.isExtensible,g=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},v=t.exports=u("WeakMap",g,s);if(l&&f){a=s.getConstructor(g,"WeakMap",!0),o.REQUIRED=!0;var b=v.prototype,h=b["delete"],y=b.has,m=b.get,w=b.set;r(b,{delete:function(t){if(c(t)&&!p(t)){var e=d(this);return e.frozen||(e.frozen=new a),h.call(this,t)||e.frozen["delete"](t)}return h.call(this,t)},has:function(t){if(c(t)&&!p(t)){var e=d(this);return e.frozen||(e.frozen=new a),y.call(this,t)||e.frozen.has(t)}return y.call(this,t)},get:function(t){if(c(t)&&!p(t)){var e=d(this);return e.frozen||(e.frozen=new a),y.call(this,t)?m.call(this,t):e.frozen.get(t)}return m.call(this,t)},set:function(t,e){if(c(t)&&!p(t)){var n=d(this);n.frozen||(n.frozen=new a),y.call(this,t)?w.call(this,t,e):n.frozen.set(t,e)}else w.call(this,t,e);return this}})}},"29e2":function(t,e,n){"use strict";var a=n("dbce");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5ae0")),r={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var t=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var e=uni.getBackgroundAudioManager();e.title||(e.title="Fur Elise"),e.singer||(e.singer="None"),e.coverImgUrl||(e.coverImgUrl="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c517b410-5184-11eb-b997-9918a5dda011.jpeg"),e.onPlay((function(){console.log("Start playing"),t.$backgroundAudioData.playing=t.playing=!0})),e.onPause((function(){console.log("Pause Play"),t.$backgroundAudioData.playing=t.playing=!1})),e.onEnded((function(){t.playing=!1,t.$backgroundAudioData.playing=!1,t.$backgroundAudioData.playTime=t.playTime=0,t.$backgroundAudioData.formatedPlayTime=t.formatedPlayTime=i.formatTime(0)})),e.onTimeUpdate((function(n){Math.floor(e.currentTime)>Math.floor(t.playTime)&&(t.$backgroundAudioData.formatedPlayTime=t.formatedPlayTime=i.formatTime(Math.floor(e.currentTime))),t.$backgroundAudioData.playTime=t.playTime=e.currentTime})),this.bgAudioMannager=e},methods:{play:function(t){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(t){this.bgAudioMannager.seek(t.detail.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=i.formatTime(0)}}};e.default=r},3892:function(t,e,n){"use strict";n.r(e);var a=n("d87b"),i=n("9dcc");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("8727");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"13245516",null,!1,a["a"],o);e["default"]=s.exports},"5ae0":function(t,e,n){"use strict";function a(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var a=t;return[e,n,a].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function i(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}n("d81d"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatTime=a,e.formatLocation=i,e.dateUtils=void 0;var r={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+a(e.getMonth()+1)+"/"+a(e.getDate())+"-"+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};e.dateUtils=r},7037:function(t,e,n){function a(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=a=function(t){return typeof t}:t.exports=a=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),t.exports=a},8727:function(t,e,n){"use strict";var a=n("f1a4"),i=n.n(a);i.a},"9dcc":function(t,e,n){"use strict";n.r(e);var a=n("29e2"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},acac:function(t,e,n){"use strict";var a=n("e2cc"),i=n("f183").getWeakData,r=n("825a"),o=n("861d"),u=n("19aa"),s=n("2266"),c=n("b727"),d=n("5135"),l=n("69f3"),f=l.set,p=l.getterFor,g=c.find,v=c.findIndex,b=0,h=function(t){return t.frozen||(t.frozen=new y)},y=function(){this.entries=[]},m=function(t,e){return g(t.entries,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=m(this,t);if(e)return e[1]},has:function(t){return!!m(this,t)},set:function(t,e){var n=m(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=v(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,a){u(t,l,e),f(t,{type:e,id:b++,frozen:void 0}),void 0!=a&&s(a,t[c],t,n)})),g=p(e),v=function(t,e,n){var a=g(t),o=i(r(e),!0);return!0===o?h(a).set(e,n):o[a.id]=n,t};return a(l.prototype,{delete:function(t){var e=g(this);if(!o(t))return!1;var n=i(t);return!0===n?h(e)["delete"](t):n&&d(n,e.id)&&delete n[e.id]},has:function(t){var e=g(this);if(!o(t))return!1;var n=i(t);return!0===n?h(e).has(t):n&&d(n,e.id)}}),a(l.prototype,n?{get:function(t){var e=g(this);if(o(t)){var n=i(t);return!0===n?h(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return v(this,t,e)}}:{add:function(t){return v(this,t,!0)}}),l}}},be29:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-image[data-v-13245516]{width:%?150?%;height:%?150?%}.page-body-text[data-v-13245516]{padding:0 %?30?%}.page-body-wrapper[data-v-13245516]{margin-top:0}.page-body-info[data-v-13245516]{padding-bottom:%?50?%}.time-big[data-v-13245516]{font-size:%?60?%;margin:%?20?%}.slider[data-v-13245516]{width:%?630?%}.play-time[data-v-13245516]{font-size:%?28?%;width:100%;padding:%?20?% 0;display:flex;justify-content:space-between;box-sizing:border-box}.page-body-buttons[data-v-13245516]{display:flex;justify-content:space-around;margin-top:%?100?%}.page-body-button[data-v-13245516]{width:%?250?%;text-align:center}",""]),t.exports=e},d87b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={pageHead:n("524e").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-center"},[n("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))])],1),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:t.playTime},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.seek.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"play-time"},[n("v-uni-text",[t._v("00:00")]),n("v-uni-text",[t._v("00:21")])],1),n("v-uni-view",{staticClass:"uni-hello-text"},[t._v("Note: The background music will keep playing after you leave the current page, but will stop when you exit the uni-app")]),n("v-uni-view",{staticClass:"page-body-buttons"},[t.playing?[n("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stop.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"/static/stop.png"}})],1),n("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pause.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"/static/pause.png"}})],1)]:t._e(),t.playing?t._e():[n("v-uni-view",{staticClass:"page-body-button"}),n("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.play.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"/static/play.png"}})],1)],n("v-uni-view",{staticClass:"page-body-button"})],2)],1)],1)},r=[]},dbce:function(t,e,n){n("e439"),n("d3b7"),n("3ca3"),n("10d1"),n("ddb0");var a=n("7037");function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function r(t){if(t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=r?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=t[o]}return n["default"]=t,e&&e.set(t,n),n}t.exports=r},f1a4:function(t,e,n){var a=n("be29");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b0c00e58",a,!0,{sourceMap:!1,shadowMode:!1})}}]);