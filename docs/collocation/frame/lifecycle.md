### 应用生命周期
### Application life cycle

``uni-app`` 支持如下应用生命周期函数：
The following application life cycle functions are supported:

|函数名|说明|
|Function name|Description|
|:-|:-|
|onLaunch|当``uni-app`` 初始化完成时触发（全局只触发一次）|
|onLaunch|`uni-app`Triggered when the initialization is completed|
|onShow|当 ``uni-app`` 启动，或从后台进入前台显示|
|onShow|When `uni-app`started, or from the background into the foreground display|
|onHide|当 ``uni-app`` 从前台进入后台|
|onHide|As `uni-app`from the foreground into the background|
|onError|当 ``uni-app`` 报错时触发|
|onError|When the `uni-app`trigger error|
|onUniNViewMessage|对 ``nvue`` 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯](https://uniapp.dcloud.io/nvue-api?id=communication)|
|onUniNViewMessage|For `nvue`data pages sent by the monitor, refer to [nvue to communicate vue](https://uniapp.dcloud.io/nvue-api?id=communication)|
|onUnhandledRejection|对未处理的 Promise 拒绝事件监听函数（2.8.1+）|
|onUnhandledRejection|Listener function for unprocessed Promise rejection event (2.8.1+)|
|onThemeChange|监听系统主题变化|
|onThemeChange|Monitor system theme changes|

**注意**
**note**

- 应用生命周期仅可在``App.vue``中监听，在其它页面监听无效。
- The application life cycle can only be `App.vue`monitored in , and monitoring on other pages is invalid.
- onlaunch里进行页面跳转，如遇白屏报错，请参考[https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)
- Page jump in onlaunch, if you encounter a white screen error, please refer to [https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)

**示例代码**
**Sample code**
```html
<script>
	// 只能在App.vue里监听应用的生命周期
    // You can only listen for the application lifecycle in app.vue
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
```

### 页面生命周期
### Page life cycle

``uni-app`` 支持如下页面生命周期函数：
The following page life cycle functions are supported:

|函数名|说明|平台差异说明|最低版本|
|Function name|Description|平台差异说明|最低版本|
|:-|:-|:-|:-|
|onLoad|监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](/api/router?id=navigateto)|||
|onLoad|Monitor page loading, its parameter is the data passed on the previous page, the parameter type is Object (used for page parameter transfer)，参考[示例](/api/router?id=navigateto)|||
|onShow|监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面|||
|onShow|Monitor page display. It is triggered every time the page appears on the screen, including returning from the lower page point to reveal the current page|||
|onReady|监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发|||
|onReady|The first rendering of the monitoring page is complete. Note that if the rendering speed is fast, it will be triggered before the page enters the animation.|||
|onHide|监听页面隐藏|||
|onHide|Monitor page hiding|||
|onUnload|监听页面卸载|||
|onUnload|Monitor page uninstall|||
|onResize|监听窗口尺寸变化|App||
|onPullDownRefresh|监听用户下拉动作，一般用于下拉刷新，参考[示例](api/ui/pulldown)|||
|onPullDownRefresh|Monitor user pull-down actions, generally used for pull-down refresh，参考[示例](api/ui/pulldown)|||
|onReachBottom|页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项|||
|onReachBottom|The event when the page scrolls to the bottom (not the scroll-view scroll to the bottom) is often used to pull down the next page of data. See the notes below for details|||
|onTabItemTap|点击 tab 时触发，参数为Object，具体见下方注意事项|H5、App（自定义组件模式）||
|onTabItemTap|Triggered when the tab is clicked, the parameter is Object, see the notes below for details|H5, App (custom component mode)||
|onPageScroll|监听页面滚动，参数为Object|nvue暂不支持||
|onPageScroll|Monitor page scrolling, the parameter is Object|nvue暂不支持||
|onNavigationBarButtonTap|监听原生标题栏按钮点击事件，参数为Object|App、H5||
|onNavigationBarButtonTap|Monitor the native title bar button click event, the parameters are Object|App, H5||
|onBackPress|监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：[onBackPress 详解](http://ask.dcloud.net.cn/article/35120)。|app、H5||
|onBackPress|Monitor page return, return event = {from:backbutton, navigateBack}, backbutton indicates that the source is the upper-left return button or the android return key; navigateBack indicates that the source is uni.navigateBack; detailed instructions and usage: [onBackPress Detailed](http ://ask.dcloud.net.cn/article/35120). |app、H5||
|onNavigationBarSearchInputChanged|监听原生标题栏搜索输入框输入内容变化事件|App、H5|1.6.0|
|onNavigationBarSearchInputChanged|Monitor the input content change event of the native title bar search input box|App, H5|1.6.0|
|onNavigationBarSearchInputConfirmed|监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。|App、H5|1.6.0|
|onNavigationBarSearchInputConfirmed|Monitor the search event of the native title bar search input box, triggered when the user clicks the "search" button on the soft keyboard. |App, H5|1.6.0|
|onNavigationBarSearchInputClicked|监听原生标题栏搜索输入框点击事件|App、H5|1.6.0|
|onNavigationBarSearchInputClicked|Listen to the click event of the native title bar search input box|App, H5|1.6.0|

``onReachBottom``使用注意
`onReachBottom`Note
可在pages.json里定义具体页面底部的触发距离[onReachBottomDistance](/collocation/pages)，比如设为50，那么滚动页面到距离底部50px时，就会触发onReachBottom事件。
that you can define the trigger distance onReachBottomDistance at the bottom of the specific page in pages.json, for example, set it to 50, then the onReachBottom event will be triggered when the page is scrolled to 50px from the bottom.

如使用scroll-view导致页面没有滚动，则触底事件不会被触发。scroll-view滚动到底部的事件请参考scroll-view的文档
If scroll-view is used and the page does not scroll, the bottoming event will not be triggered. For the event of scroll-view scrolling to the bottom, please refer to the scroll-view documentation


``onPageScroll`` （监听滚动、滚动监听、滚动事件）参数说明：
`onPageScroll` (Monitor scroll, scroll monitor, scroll event) parameter description:

|属性|类型|说明|
|Attributes|Types of|Description|
|---|---|---|
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|
|scrollTop|Number|The distance the page has been scrolled in the vertical direction (in px)|

**注意**
**note**
- `onPageScroll`里不要写交互复杂的js，比如频繁修改页面。因为这个生命周期是在渲染层触发的，在非h5端，js是在逻辑层执行的，两层之间通信是有损耗的。如果在滚动过程中，频发触发两层之间的数据交换，可能会造成卡顿。
- `onPageScroll`Don't write interactive complex js, such as frequent page modification. Because this life cycle is triggered in the rendering layer, on the non-h5 side, js is executed in the logic layer, and communication between the two layers is lossy. If the data exchange between the two layers is triggered frequently during the scrolling process, it may cause stuck.
- 如果想实现滚动时标题栏透明渐变，在App和H5下，可在pages.json中配置titleNView下的type为transparent，[参考](https://uniapp.dcloud.io/collocation/pages?id=app-titlenview)。
- If you want to achieve a transparent gradient of the title bar when scrolling, under App and H5, you can configure the type under titleNView as transparent in pages.json.
- 如果需要滚动吸顶固定某些元素，推荐使用css的粘性布局，参考[插件市场](https://ext.dcloud.net.cn/plugin?id=715)。插件市场也有其他js实现的吸顶插件，但性能不佳，需要时可自行搜索。
- If you need to scroll the ceiling to fix certain elements, it is recommended to use the sticky layout of CSS . There are also other ceiling plug-ins implemented by js in the plug-in market, but the performance is not good, you can search by yourself when you need it.
- 在App、H5中，也可以使用wxs监听滚动，[参考](https://uniapp.dcloud.io/frame?id=wxs)；在app-nvue中，可以使用bindingx监听滚动，[参考](https://uniapp.dcloud.io/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx)。
- In App, WeChat applet, and H5, you can also use wxs to monitor scrolling; in app-nvue, you can use bindingx to monitor scrolling.
- `onBackPress`上不可使用`async`，会导致无法阻止默认返回
- `onBackPress``async`Can’t be used on , it will prevent the default return

```js
//nvue暂不支持滚动监听，可用bindingx代替
//nvue does not support scrolling listening. BindingX can be used instead
onPageScroll : function(e) {
	console.log("scrollTop: " + e.scrollTop);
},
```

``onTabItemTap`` 返回的json对象说明：
`onTabItemTap` Description of the returned json object:

|属性|类型|说明|
|Attributes|Types of|Description|
|---|---|---|
|index|String|被点击tabItem的序号，从0开始|
|index|String|The sequence number of the clicked tabItem, starting from 0|
|pagePath|String|被点击tabItem的页面路径|
|pagePath|String|The page path of the clicked tabItem|
|text|String|被点击tabItem的按钮文字|
|text|String|The button text of the tabItem that was clicked|

**注意**
**note**
- onTabItemTap常用于点击当前tabitem，滚动或刷新当前页面。如果是点击不同的tabitem，一定会触发页面切换。
- onTabItemTap is often used to click the current tabitem, scroll or refresh the current page. If you click on a different tabitem, it will definitely trigger a page switch.
- 如果想在App端实现点击某个tabitem不跳转页面，不能使用onTabItemTap，可以使用[plus.nativeObj.view](http://www.html5plus.org/doc/zh_cn/nativeobj.html)放一个区块盖住原先的tabitem，并拦截点击事件。
- If you want to click on a tabitem on the App side without jumping to the page, you can't use onTabItemTap, you can use plus.nativeObj.view to put a block to cover the original tabitem and intercept the click event.

```js
onTabItemTap : function(e) {
	console.log(e);
	// e: {"index":0,"text":"index","pagePath":"pages/index/index"}
},
```

``onNavigationBarButtonTap`` 参数说明：
`onNavigationBarButtonTap` Parameter Description:

|属性|类型|说明|
|Attributes|Types of|Description|
|---|---|---|
|index|Number|原生标题栏按钮数组的下标|
|index|Number|The subscript of the native title bar button array|

```js
onNavigationBarButtonTap : function (e) {
	console.log(e);
	// e: {"text":"test","index":0}
}
```

`onBackPress` 回调参数对象说明：
`onBackPress` Description of callback parameter object:

|属性|类型|说明|
|Attributes|Types of|Description|
|---|---|---|
|from|String|触发返回行为的来源：'backbutton'——左上角导航栏按钮及安卓返回键；'navigateBack'——uni.navigateBack() 方法。|
|from|String|The source of triggering the return behavior:'backbutton'-the upper left corner navigation bar button and the Android return key;'navigateBack'-uni.navigateBack() method. |
```javascript
export default {
	data() {
		return {};
	},
	onBackPress(options) {
		console.log('from:' + options.from)
	}
}
```

**注意**
**note**

- nvue 页面weex编译模式支持的生命周期同weex，具体参考：[weex生命周期介绍](https://uniapp.dcloud.io/nvue-outline?id=%e7%bc%96%e8%af%91%e6%a8%a1%e5%bc%8f)。
- The life cycle supported by the weex compilation mode of the nvue page is the same as that of weex. 

### 组件生命周期
### Component life cycle

``uni-app`` 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：
`uni-app`The life cycle supported by the component is the same as the life cycle of the vue standard component. There is no page-level onLoad and other life cycles:

|函数名|说明|平台差异说明|最低版本|
|Function name|Description|Platform difference description|Minimum version|
|:-|:-|:-|:-|
|beforeCreate|在实例初始化之后被调用。[详见](https://cn.vuejs.org/v2/api/#beforeCreate)|||
| beforeCreate  | Called after the instance is initialized. [See](https://vuejs.org/v2/api/#beforeCreate) |                                 |                 |
|created|在实例创建完成后被立即调用。[详见](https://cn.vuejs.org/v2/api/#created)|||
| created       | It is called immediately after the instance is created. [See](https://vuejs.org/v2/api/#created) |                                 |                 |
|beforeMount|在挂载开始之前被调用。[详见](https://cn.vuejs.org/v2/api/#beforeMount)|||
| beforeMount   | Called before the start of the mount. [See](https://vuejs.org/v2/api/#beforeMount) |                                 |                 |
|mounted|挂载到实例上去之后调用。[详见](https://cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用```$nextTick```[Vue官方文档](https://cn.vuejs.org/v2/api/#Vue-nextTick)|||
| mounted       | Called after mounting to the instance. [For details, please](https://vuejs.org/v2/api/#mounted) note: It is not certain that all subcomponents are mounted here. If you need to perform operations after the subcomponents are fully mounted, you can use the `$nextTick`[official Vue documentation](https://vuejs.org/v2/api/#Vue-nextTick) |                                 |                 |
|beforeUpdate|数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://cn.vuejs.org/v2/api/#beforeUpdate)|仅H5平台支持||
| beforeUpdate  | Called when the data is updated, before the virtual DOM is patched. [See](https://vuejs.org/v2/api/#beforeUpdate) | Only supported by H5 platform   |                 |
|updated|由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://cn.vuejs.org/v2/api/#updated)|仅H5平台支持||
| updated       | The virtual DOM is re-rendered and patched due to data changes, after which the hook will be called. [See](https://vuejs.org/v2/api/#updated) | Only supported by H5 platform   |                 |
|beforeDestroy|实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://cn.vuejs.org/v2/api/#beforeDestroy)|||
| beforeDestroy | Called before the instance is destroyed. At this step, the instance is still fully available. [See](https://vuejs.org/v2/api/#beforeDestroy) |                                 |                 |
|destroyed|Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://cn.vuejs.org/v2/api/#destroyed)|||
| destroyed     | Called after the Vue instance is destroyed. After the call, everything indicated by the Vue instance will be unbound, all event listeners will be removed, and all child instances will be destroyed. [See](https://vuejs.org/v2/api/#destroyed) |                                 |                 |

