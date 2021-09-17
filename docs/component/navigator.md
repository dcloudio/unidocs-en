#### navigator

页面跳转。
Page jump.

该组件类似HTML中的`<a>`组件，但只能跳转本地页面。目标页面必须在pages.json中注册。
This component is similar to the component in HTML `<a>`, but it can only jump to local pages. The target page must be registered in pages.json.

该组件的功能有API方式，另见：[https://uniapp.dcloud.io/api/router?id=navigateto](https://uniapp.dcloud.io/api/router?id=navigateto)
The function of this component has API method, see also: API>Routing and page jump>router.md

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|Attribute name| Types of | Defaults        | Description                                                  |Platform difference description|
|:-|:-|:-|:-|:-|
|url|String||应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 ``.vue`` 后缀||
|url|String||Hoplinks within the application, is a relative or absolute path, such as: "../ first / first", "/ pages / first / first", careful not to add `.vue`the suffix||
|open-type|String|navigate|跳转方式||
|open-type|String|navigate|Jump way||
|delta|Number||当 open-type 为 'navigateBack' 时有效，表示回退的层数||
|delta|Number||Valid when open-type is'navigateBack', indicating the number of layers to fall back||
|animation-type|String|pop-in/out|当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见：[窗口动画](api/router?id=animation)|App|
|animation-type|String|pop-in/out|When open-type is navigate, navigateBack, it is valid, the window display/close animation effect|App|
|animation-duration|Number|300|当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。|App|
|animation-duration|Number|300|Valid when open-type is navigate, navigateBack, the duration of the window display/close animation.|App|
|hover-class|String|navigator-hover|指定点击时的样式类，当hover-class="none"时，没有点击态效果||
|hover-class|String|navigator-hover|Specify the style class when clicking. When hover-class="none", there is no click state effect||
|hover-start-time|Number|50|按住后多久出现点击态，单位毫秒||
|hover-start-time|Number|50|How long does the click state appear after pressing, in milliseconds||
|hover-stay-time|Number|600|手指松开后点击态保留时间，单位毫秒|&nbsp;|
|hover-stay-time|Number|600|Retention time of the click state after releasing the finger, in milliseconds|&nbsp;|


**open-type 有效值**
**open-type valid value**

|值|说明|平台差异说明|
| value        | Description                                                  | Platform difference description |
|:-|:-|:-|
|navigate|对应 uni.navigateTo 的功能||
|navigate|Corresponding to the function of uni.navigateTo||
|redirect|对应 uni.redirectTo 的功能||
|redirect|Corresponding to the function of uni.redirectTo||
|switchTab|对应 uni.switchTab 的功能||
|switchTab|Corresponding to the function of uni.switchTab||
|reLaunch|对应 uni.reLaunch 的功能||
|reLaunch|Corresponding to the function of uni.reLaunch||
|navigateBack|对应 uni.navigateBack 的功能||
|navigateBack|Corresponding to the function of uni.navigateBack||


**注意**
**Notice**
- 跳转tabbar页面，必须设置open-type="switchTab"
- To jump to the tabbar page, open-type="switchTab" must be set
- navigator-hover 默认为 {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, ``<navigator>`` 的子节点背景色应为透明色。
- navigator-hover defaults to {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, the background color of the child nodes of ``<navigator>'' should be transparent.
- navigator-`open-type`属性 如果使用对应的值，则对应值的功能会高于对应跳转路径。
- navigator-`open-type` attribute If the corresponding value is used, the function of the corresponding value will be higher than the corresponding jump path.
- app-nvue 平台只有纯nvue项目（render为native）才支持 `<navigator>`。非render为native的情况下，nvue暂不支持navigator组件，请使用API跳转。
- App-nvue platform supports `<navigator>` only for pure nvue projects (render is native). If the non-render is native, nvue does not support the navigator component, please use the API to jump.
- app下退出应用，Android平台可以使用[plus.runtime.quit](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.quit)。iOS没有退出应用的概念。
- To exit the application under the app, you can use [plus.runtime.quit](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.quit) on the Android platform. iOS has no concept of exiting the app.
- [uLink组件](https://ext.dcloud.net.cn/plugin?id=1182)是navigator组件的增强版，样式上自带下划线，功能上支持打开在线网页、其他App的schema、mailto发邮件、tel打电话。
- [uLink component](https://ext.dcloud.net.cn/plugin?id=1182) is an enhanced version of the navigator component, with its own underline on the style, and functionally supports opening online web pages, schemas and mailto of other apps Send email, tel call.

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/navigator/navigator)
**Example** [View example](https://hellouniapp.dcloud.net.cn/pages/component/navigator/navigator)
 
```html
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">Jump to new page</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">Open on current page</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">Jump to tab page</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
```

```javascript
// navigate.vue Page accepts parameters
export default {
	onLoad: function (option) { //option is object type, it will serialize the parameters passed on the previous page
		console.log(option.id); //Print out the parameters passed on the previous page
		console.log(option.name); //Print out the parameters passed on the previous page
	}
}
```

url有长度限制，太长的字符串会传递失败，可使用[窗体通信](https://uniapp.dcloud.io/collocation/frame/communication)、[全局变量](https://ask.dcloud.net.cn/article/35021)，或`encodeURIComponent`等多种方式解决，如下为`encodeURIComponent`示例。
The URL has a length limit. If the string is too long, it will fail to pass. You can use `encodeURIComponent`other methods to solve it. The following is `encodeURIComponent`an example.
```html
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```
```javascript
// navigate.vue Page accepts parameters
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

