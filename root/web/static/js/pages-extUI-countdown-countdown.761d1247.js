(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-countdown-countdown"],{"0cb0":function(t,n,e){"use strict";var i=e("4ea4");e("a9e3"),e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("37dc"),r=i(e("7879")),o=(0,a.initVueI18n)(r.default),c=o.t,s={name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},color:{type:String,default:"#333"},fontSize:{type:Number,default:14},splitorColor:{type:String,default:"#333"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},computed:{dayText:function(){return c("uni-countdown.day")},hourText:function(t){return c("uni-countdown.h")},minuteText:function(t){return c("uni-countdown.m")},secondText:function(t){return c("uni-countdown.s")},timeStyle:function(){var t=this.color,n=this.backgroundColor,e=this.fontSize;return{color:t,backgroundColor:n,fontSize:"".concat(e,"px"),width:"".concat(22*e/14,"px"),lineHeight:"".concat(20*e/14,"px"),borderRadius:"".concat(3*e/14,"px")}},splitorStyle:function(){var t=this.splitorColor,n=this.fontSize,e=this.backgroundColor;return{color:t,fontSize:"".concat(12*n/14,"px"),margin:e?"".concat(4*n/14,"px"):""}}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()},start:{immediate:!0,handler:function(t,n){if(t)this.startData();else{if(!n)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},destroyed:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,i,a){return t?t-parseInt((new Date).getTime()/1e3,10):60*n*60*24+60*e*60+60*i+a},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,i=0,a=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,i=Math.floor(t/60)-24*n*60-60*e,a=Math.floor(t)-24*n*60*60-60*e*60-60*i):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),i<10&&(i="0"+i),a<10&&(a="0"+a),this.d=n,this.h=e,this.i=i,this.s=a},startData:function(){var t=this;if(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0)return this.seconds=this.toSeconds(0,0,0,0,0),void this.countDown();clearInterval(this.timer),this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3)},update:function(){this.startData()},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=s},"2a74":function(t,n,e){"use strict";e.r(n);var i=e("ab68"),a=e("5d58");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("3913");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0ee6ec24",null,!1,i["a"],o);n["default"]=s.exports},3913:function(t,n,e){"use strict";var i=e("da62"),a=e.n(i);a.a},"394c":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-section[data-v-6284dbcc]{background-color:#fff;margin-top:10px}.uni-section-header[data-v-6284dbcc]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-6284dbcc]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-6284dbcc]{height:12px;background-color:#2979ff;border-radius:10px;width:4px}.circle[data-v-6284dbcc]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#2979ff}.uni-section__content[data-v-6284dbcc]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-6284dbcc]{font-size:14px;color:#2979ff}.distraction[data-v-6284dbcc]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-6284dbcc]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.is--hidden[data-v-6284dbcc]{overflow:hidden}',""]),t.exports=n},4800:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#333"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1},overflow:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},"4c0d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={components:{},data:function(){return{testHour:1,testMinute:0,testSecond:0,start:!1,timeupSecond:10}},mounted:function(){var t=this;setTimeout((function(){t.testHour=1,t.testMinute=1,t.testSecond=0,t.start=!0}),3e3),setTimeout((function(){t.start=!1}),1e4)},methods:{timeup:function(){uni.showToast({title:"Time to"}),this.timeupSecond=29}}};n.default=i},"523b":function(t,n,e){"use strict";var i=e("cccc"),a=e.n(i);a.a},5243:function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"時","uni-countdown.m":"分","uni-countdown.s":"秒"}')},"5d58":function(t,n,e){"use strict";e.r(n);var i=e("0cb0"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},6697:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uniCard:e("dad4").default,uniSection:e("ecc8").default,uniCountdown:e("2a74").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("uni-card",{attrs:{"is-full":!0}},[e("v-uni-text",{staticClass:"uni-h6"},[t._v("The countdown component is mainly used to promote the remaining time of the product, send SMS to verify the waiting time and other scenarios")])],1),e("uni-section",{attrs:{title:"General Usage",type:"line",padding:!0}},[e("uni-countdown",{attrs:{day:1,hour:1,minute:12,second:40}})],1),e("uni-section",{attrs:{title:"No days displayed",subTitle:"set show-day = false no days displayed",type:"line",padding:!0}},[e("uni-countdown",{attrs:{"show-day":!1,hour:12,minute:12,second:12}})],1),e("uni-section",{attrs:{title:"Text separator",subTitle:"Set the show-colon property to set the separator style",type:"line",padding:!0}},[e("uni-countdown",{attrs:{minute:30,second:0,"show-colon":!1}})],1),e("uni-section",{attrs:{title:"Modify color",subTitle:"Set the color \\ background property to set the component color",type:"line",padding:!0}},[e("uni-countdown",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#007AFF"}})],1),e("uni-section",{attrs:{title:"Modify font size",subTitle:"Set the font-size property to set the component size",type:"line",padding:!0}},[e("uni-countdown",{attrs:{"font-size":30,day:1,hour:2,minute:30,second:0}})],1),e("uni-section",{attrs:{title:"Change color + font size",type:"line",padding:!0}},[e("uni-countdown",{attrs:{"font-size":30,day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#007AFF"}})],1),e("uni-section",{attrs:{title:"Free control of start/pause",subTitle:"Set the start property to control whether it is automatically turned on",type:"line",padding:!0}},[e("uni-countdown",{attrs:{start:t.start,day:1,hour:1,minute:12,second:40}})],1),e("uni-section",{attrs:{title:"Countdown callback event",type:"line",padding:!0}},[e("uni-countdown",{attrs:{"show-day":!1,second:t.timeupSecond},on:{timeup:function(n){arguments[0]=n=t.$handleEvent(n),t.timeup.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"Dynamic assignment",type:"line",padding:!0}},[e("uni-countdown",{attrs:{"show-day":!1,hour:t.testHour,minute:t.testMinute,second:t.testSecond}})],1)],1)},r=[]},"66b7":function(t,n,e){"use strict";var i=e("c871"),a=e.n(i);a.a},"66be":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #ebeef5}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=n},"686f":function(t,n,e){"use strict";e.r(n);var i=e("c644"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},"69f5":function(t,n,e){"use strict";e.r(n);var i=e("4c0d"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},7600:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?e("v-uni-view",{staticClass:"uni-card__cover"},[e("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?e("v-uni-view",{staticClass:"uni-card__header"},[e("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("title")}}},[t.thumbnail?e("v-uni-view",{staticClass:"uni-card__header-avatar"},[e("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),e("v-uni-view",{staticClass:"uni-card__header-content"},[e("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?e("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),e("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("extra")}}},[e("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),e("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("content")}}},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},7879:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("d0aa")),r=i(e("b266")),o=i(e("5243")),c={en:a.default,"zh-Hans":r.default,"zh-Hant":o.default};n.default=c},"7a5d":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-section"},[e("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{color:t.color}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),e("v-uni-view",[t._t("right")],2)],1),e("v-uni-view",{class:{"is--hidden":t.overflow},style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},r=[]},"7d70":function(t,n,e){"use strict";e.r(n);var i=e("4800"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},ab68:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.d))]):t._e(),t.showDay?e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.dayText))]):t._e(),e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.h))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.showColon?":":t.hourText))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.i))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.showColon?":":t.minuteText))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.s))]),t.showColon?t._e():e("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.secondText))])],1)},r=[]},b266:function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"时","uni-countdown.m":"分","uni-countdown.s":"秒"}')},bc30:function(t,n,e){"use strict";e.r(n);var i=e("6697"),a=e("69f5");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"ae3dc6b0",null,!1,i["a"],o);n["default"]=s.exports},c644:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};n.default=i},c871:function(t,n,e){var i=e("394c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("a79a6392",i,!0,{sourceMap:!1,shadowMode:!1})},cccc:function(t,n,e){var i=e("66be");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("5803037a",i,!0,{sourceMap:!1,shadowMode:!1})},d0aa:function(t){t.exports=JSON.parse('{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"}')},da62:function(t,n,e){var i=e("dcac");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("27148fc6",i,!0,{sourceMap:!1,shadowMode:!1})},dad4:function(t,n,e){"use strict";e.r(n);var i=e("7600"),a=e("686f");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("523b");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],o);n["default"]=s.exports},dcac:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-countdown[data-v-0ee6ec24]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.uni-countdown__splitor[data-v-0ee6ec24]{margin:0 2px;font-size:14px;color:#333}.uni-countdown__number[data-v-0ee6ec24]{border-radius:3px;text-align:center;font-size:14px}',""]),t.exports=n},ecc8:function(t,n,e){"use strict";e.r(n);var i=e("7a5d"),a=e("7d70");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("66b7");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"6284dbcc",null,!1,i["a"],o);n["default"]=s.exports}}]);