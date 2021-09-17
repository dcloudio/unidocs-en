#### input

输入框。
Input box.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|Attribute name|Types of|Defaults|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|value|String||输入框的初始内容||
| value             | String      |                     | The initial content of the input box                         ||
|type|String|text|input 的类型|H5 暂未支持动态切换，详见下方 Tips，请使用 v-if 进行整体切换|
|type|String|text|input type|H5 does not support dynamic switching, please refer to Tips below for details, please use v-if for overall switching|
|text-content-type|String| |文本区域的语义，根据类型自动填充|仅 App-nvue-iOS 支持|
|text-content-type|String| |The semantics of the text area, automatically filled according to the type|Only App-nvue-iOS supports|
|password|Boolean|false|是否是密码类型|H5和App写此属性时，type失效|
|password|Boolean|false|Whether it is the password type|When H5 and App write this attribute, type is invalid|
|placeholder|String||输入框为空时占位符||
|placeholder|String||Placeholder when the input box is empty||
|placeholder-style|String||指定 placeholder 的样式||
|placeholder-style|String||Specify the style of placeholder||
|placeholder-class|String|"input-placeholder"|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/||
|placeholder-class|String|"input-placeholder"|Specify the style class of placeholder. Note that when scoped is written in the style of the page or component, you need to write /deep/|| before the class name
|disabled|Boolean|false|是否禁用||
|disabled|Boolean|false|whether to disable||
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
|maxlength|Number|140|Maximum input length, when set to -1, the maximum length is not limited||
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App|
|cursor-spacing|Number|0|Specifies the distance between the cursor and the keyboard, in px. Take the minimum of the distance between the input and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard |App|
|focus|Boolean|false|获取焦点。|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
|focus|Boolean|false|Get focus. |Whether the focus can be focused on the H5 platform and whether the soft keyboard will follow the pop-up depends on the implementation of the current browser itself. The nvue page does not support, you need to use the focus() and blur() methods of the component to control the focus|
|confirm-type|String|done|设置键盘右下角按钮的文字，仅在 type="text" 时生效。|App、H5|
|confirm-type|String|done|Set the text of the button at the bottom right corner of the keyboard, which only takes effect when type="text". |App, H5|
|confirm-hold|Boolean|false|点击键盘右下角按钮时是否保持键盘不收起|App|
|confirm-hold|Boolean|false|Whether to keep the keyboard unfolded when clicking the button in the lower right corner of the keyboard|App|
|cursor|Number||指定focus时的光标位置||
|cursor|Number||Specify the cursor position when focus||
|selection-start|Number|-1|光标起始位置，自动聚集时有效，需与selection-end搭配使用||
|selection-start|Number|-1|The starting position of the cursor, which is valid for automatic aggregation. It needs to be used with selection-end||
|selection-end|Number|-1|光标结束位置，自动聚集时有效，需与selection-start搭配使用||
|selection-end|Number|-1|The end position of the cursor, which is valid for automatic aggregation. It needs to be used with selection-start||
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（vue 页面 softinputMode 为 adjustResize 时无效）|
|adjust-position|Boolean|true|Whether the page is automatically pushed up when the keyboard pops up|App-Android (it is invalid when the softinputMode of the vue page is adjustResize)|
|auto-blur|boolean|false|键盘收起时，是否自动失去焦点|App 3.0.0+|
|auto-blur|boolean|false|Whether the focus is automatically lost when the keyboard is retracted|App 3.0.0+|
|@input|EventHandle||当键盘输入时，触发input事件，event.detail = {value}|差异见下方 Tips|
|@input|EventHandle||When the keyboard is input, the input event is triggered, event.detail = {value}|The difference is shown below Tips|
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅App（2.2.3+） 支持|
|@focus|EventHandle||Fires when the input box is focused, event.detail = {value, height }, height is the keyboard height|Only App (2.2.3+) supports|
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value: value}||
|@blur|EventHandle||Fires when the input box loses focus, event.detail = {value: value}||
|@confirm|EventHandle||点击完成按钮时触发，event.detail = {value: value}|&nbsp;|
|@confirm|EventHandle||Fires when the Finish button is clicked, event.detail = {value: value}|&nbsp;|
|@keyboardheightchange|eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|App 3.1.0+|
|@keyboardheightchange|eventhandle||This event is triggered when the keyboard height changes, event.detail = {height: height, duration: duration}|App 3.1.0+|

**Tips**

- `input` 事件处理函数可以直接 return 一个字符串，将替换输入框的内容。仅微信小程序支持。
- The `input` event handler can directly return a string, which will replace the content of the input box. Only supported by WeChat applet.
- 如果遇到 value 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If you encounter the problem that the value property setting does not take effect, please refer to: [Solution for component property setting not taking effect](/vue-api?id=_4-Solution for component property setting not taking effect)
- `input` 组件上有默认的 `min-height` 样式，如果 `min-height` 的值大于 `height` 的值那么 `height` 样式无效。
- The `input` component has a default `min-height` style. If the value of `min-height` is greater than the value of `height`, the `height` style is invalid.
- H5 暂未支持动态切换，请使用 `v-if`进行整体切换。
- H5 does not support dynamic switching, please use `v-if` for overall switching.

```html
        <!-- 错误写法 -->
		<!-- Wrong wording -->
	<input :type="isText?'text':'number'" placeholder="请输入内容" />
	<input :type="isText?'text':'number'" placeholder="Please enter the content" />
	
        <!-- 正确写法 -->
		<!-- Correct writing -->
	<input v-if="isText" type="text" placeholder="请输入文本" />
	<input v-if="isText" type="text" placeholder="Please enter text" />
	<input v-else  type="number"  placeholder="请输入数字" />
	<input v-else type="number" placeholder="Please enter a number" />
```



**type 有效值**
**type valid value**

|值|说明|平台差异说明|
|Value|Description|Platform difference description|
|:-|:-|:-|
|text|文本输入键盘||
|text|Text input keyboard||
|number|数字输入键盘|均支持，App平台、H5平台 3.1.22 以下版本 vue 页面在 iOS 平台显示的键盘包含负数和小数。|
|number|Numeric input keyboard|All support, App platform, H5 platform 3.1.22 The keyboard displayed on the iOS platform of the vue page contains negative numbers and decimals. |
|digit|带小数点的数字键盘|均支持，App平台、H5平台 vue 页面在 iOS 平台显示的键盘包含负数。|
|digit|Numeric keyboard with decimal point| Both support, App platform, H5 platform vue page displayed on the iOS platform keyboard contains negative numbers. |
|tel|电话输入键盘|仅App的nvue页面支持|
|tel|Phone input keyboard|Only App’s nvue page supports|

**注意事项**
**Precautions**

- 原html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app和小程序规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API：[radio组件](https://uniapp.dcloud.io/component/radio)、[checkbox组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8)、[日期选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。
- The input in the original html specification is not only an input box, but also radio, checkbox, time, date, and file selection functions. In uni-app and applet specifications, input is just an input box. Other functions uni-app have separate components or APIs: [radio component](https://uniapp.dcloud.io/component/radio), [checkbox component](https://uniapp.dcloud.io/component/checkbox ), [Time Selection](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5% 99%a8), [Date Selection](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9 %e5%99%a8), [Picture Selection](https://uniapp.dcloud.io/api/media/image?id=chooseimage), [Video Selection](https://uniapp.dcloud.io/api /media/video?id=choosevideo), [Multimedia file selection (including picture and video)](https://uniapp.dcloud.io/api/media/video?id=choosemedia), [Universal file selection](https: //uniapp.dcloud.io/api/media/file?id=choosefile).
- input组件若不想弹出软键盘，可设置为disabled
- If the input component does not want to pop up the soft keyboard, it can be set to disabled

**text-content-type 有效值**
**text-content-type valid value**

|值|说明|
|Value|Description|
|:-|:-|
|oneTimeCode|一次性验证码|
|oneTimeCode|One-time verification code|

**confirm-type 有效值**
**confirm-type valid value**

|值|说明|平台差异说明|
|Value|Description|Platform difference description|
|:-|:-|:-|
|send|右下角按钮为“发送”|app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
|send|The button in the lower right corner is "Send"|app-nvue, app-vue and h5 (2.9.9+, and requires device webview kernel Chrome81+, Safari13.7+)|
|search|右下角按钮为“搜索”||
|search|The button in the lower right corner is "Search"||
|next|右下角按钮为“下一个”|app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
|next|The bottom right button is "Next"|app-nvue, app-vue and h5 (2.9.9+, and requires device webview kernel Chrome81+, Safari13.7+)|
|go|右下角按钮为“前往”||
|go|The button in the lower right corner is "Go"||
|done|右下角按钮为“完成”|app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
|done|The button in the lower right corner is "Done"|app-nvue, app-vue and h5 (2.9.9+, and requires device webview kernel Chrome81+, Safari13.7+)|

- App平台的nvue页面，如果是weex编译模式，需通过weex的api设置（weex模式已被淘汰）
- For the nvue page of the App platform, if it is in weex compilation mode, it needs to be set through the weex api (weex mode has been eliminated)
- App平台的vue页面及 H5平台 的弹出键盘使用的是浏览器控制的键盘，在Chrome81+、Safari13.7+之前，键盘右下角文字只能设置完成和搜索，从Chrome81+、Safari13.7+起支持设置发送、下一个。
- The vue page of the App platform and the pop-up keyboard of the H5 platform use the keyboard controlled by the browser. Before Chrome81+ and Safari13.7+, the text in the lower right corner of the keyboard can only be set and searched. Supported from Chrome81+ and Safari13.7+ Set sending, next.
- App平台涉及聊天的建议使用nvue，一方面因为app-vue控制键盘右下角按键文字为“发送”对webview内核有要求，另一方面聊天记录如使用sroll-view，过长的内容在app-vue上会有性能问题。
- App platform involving chat is recommended to use nvue. On the one hand, because the text in the lower right corner of the app-vue control keyboard is "send", it requires the webview core. On the other hand, if the chat record uses sroll-view, the long content is in the app- There will be performance issues on vue.





#### App平台iOS端软键盘上方横条去除方案
#### App platform iOS side soft keyboard top bar removal solution

App平台在iOS上，webview中的软键盘弹出时，默认在软键盘上方有一个横条，显示着：上一项、下一项和完成等按钮。如不想显示这个横条，可以配置softinputNavBar: 'none'
On the App platform on iOS, when the soft keyboard in webview pops up, there is a horizontal bar above the soft keyboard by default, showing: buttons such as previous item, next item, and completion. If you don’t want to display this bar, you can configure softinputNavBar:'none'

配置方式，在 pages.json 中配置 style
Configuration method, configure style in pages.json

```json
"app-plus": {
	"softinputNavBar": "none"
}
```

- 如需使用js动态设置softinputNavBar
- If you need to use js to dynamically set the softinputNavBar
```javascript
this.$scope.$getAppWebview().setStyle({
	softinputNavBar: 'none'
})
//this.$scope.$getAppWebview()相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()
//this.$scope.$getAppWebview() is equivalent to plus.webview.currentWebview() in html5plus. It is invalid to use plus.webview.currentWebview() directly on the vue page in uni-app, and use this.$mp.page.$getAppWebview() in non-v3 compilation mode

```

如果是nvue页面，iOS默认就没有键盘上方的横条，无需任何设置。
If it is an nvue page, iOS does not have a bar above the keyboard by default, and no settings are required.

#### 关于软键盘弹出的逻辑说明
#### Logic description about the pop-up of the soft keyboard

App平台软键盘弹出有 adjustResize|adjustPan 两种模式，默认为 adjustPan 模式，小程序平台只支持 adjustPan 模式，H5平台因不同浏览器而异
App platform soft keyboard pops up with adjustResize|adjustPan two modes, the default is adjustPan mode, applet platform only supports adjustPan mode, H5 platform varies with different browsers
- adjustResize：软键盘弹出时，webview窗体高度挤压。屏幕高度=webview窗体高度+软键盘高度
- adjustResize: When the soft keyboard pops up, the webview form is highly squeezed. Screen height = webview form height + soft keyboard height
- adjustPan：软键盘弹出时，webview窗体高度不变，但窗体上推，以保证输入框不被软键盘盖住
- adjustPan: When the soft keyboard pops up, the height of the webview form does not change, but the form is pushed up to ensure that the input box is not covered by the soft keyboard

配置方式，在 pages.json 中配置 style
Configuration method, configure style in pages.json

```json
"app-plus": {
	"softinputMode": "adjustResize"
}
```


**注意**
**Notice**
- adjustResize模式在Android App上，弹起键盘和收回键盘时，因为要重设webview窗体高度，可能会在个别安卓机型闪现灰屏或漏出下层页面内容。
- In adjustResize mode on the Android App, when the keyboard pops up and the keyboard is retracted, because the height of the webview form needs to be reset, a gray screen may flash or the content of the lower page may be leaked on some Android models.
- H5平台只能在用户交互时修改 focus 生效。
- The H5 platform can only modify focus to take effect during user interaction.
- 如果遇到 focus 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If you encounter the problem that the focus property setting does not take effect, please refer to: [Solution for component property setting not taking effect](/vue-api?id=_4-Solution for component property setting not taking effect)
- 如需禁止点击其他位置收起键盘的默认行为，可以监听`touch`事件并使用`prevent`修饰符（仅支持App-v3、H5，其他平台可以通过设置`focus`来使输入框重新获取焦点），例如在确认按钮上使用：```@touchend.prevent="onTap"```
- If you want to prohibit the default behavior of clicking other places to close the keyboard, you can listen to the `touch` event and use the `prevent` modifier (App-v3, H5 only, other platforms can set the `focus` to make the input box reacquired Focus), for example, use on the confirm button: ```@touchend.prevent="onTap"```

#### 关于软键盘收起的逻辑说明
#### About the logical description of the soft keyboard collapse
- Android上在软键盘弹出后，点击back或点击非置焦区域可收起软键盘。
- After the soft keyboard pops up on Android, tap back or tap the non-focused area to retract the soft keyboard.
- iOS上如果软键盘上方有带有“完成”的横条，则需要点完成才能收起键盘；如果没有软键盘上方横条，则点击非input/textarea区域即可收起软键盘
- On iOS, if there is a bar with "Done" above the soft keyboard, you need to click Finish to collapse the keyboard; if there is no bar above the soft keyboard, click the non-input/textarea area to collapse the soft keyboard

以上为默认逻辑，uni-app同时提供了隐藏软键盘的api：[uni.hideKeyboard()](https://uniapp.dcloud.io/api/key?id=hidekeyboard)
The above is the default logic, uni-app also provides an api to hide the soft keyboard: [uni.hideKeyboard()](https://uniapp.dcloud.io/api/key?id=hidekeyboard)

#### App平台原生输入框的说明
#### Description of App platform native input box
在app平台，有titleNView配置的[searchinput](/collocation/pages?id=app-titlenview)原生输入框和plus.nativeObj.view的drawinput。这两种方式的输入框都是原生的，不是webview里的。
On the app platform, there are [searchinput](/collocation/pages?id=app-titlenview) native input boxes configured with titleNView and drawinput with plus.nativeObj.view. The input boxes of these two methods are native, not in the webview.
- 原生输入框在iOS上不会有软键盘上方的横条
- The native input box will not have a horizontal bar above the soft keyboard on iOS
- 原生输入框一样受配置的`adjustPan|adjustResize`模式影响
- The native input box is also affected by the configured `adjustPan|adjustResize` mode

**input示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/input/input)
**input example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/input/input)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp), it is recommended to use HBuilderX, create a new uni-app project, choose hello uni-app template, you can experience the complete Example.
```html
<!-- 本示例未包含完整css，获取	外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css, check it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">Auto-focusable input</view>
				<input class="uni-input" focus placeholder="Get focus automatically" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">The button at the bottom right corner of the keyboard is displayed as search</view>
				<input class="uni-input" confirm-type="search" placeholder="The button at the bottom right corner of the keyboard is displayed as search" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input to control the maximum input length</view>
				<input class="uni-input" maxlength="10" placeholder="Maximum input length is 10" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">实时获取输入值：{{inputValue}}</view>
				<input class="uni-input" @input="onKeyInput" placeholder="输入同步到view中" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">控制输入的input</view>
				<input class="uni-input" @input="replaceInput" v-model="changeValue" placeholder="连续的两个1会变成2" />
			</view>
			<!-- #ifndef MP-BAIDU -->
			<view class="uni-form-item uni-column">
				<view class="title">控制键盘的input</view>
				<input class="uni-input" ref="input1" @input="hideKeyboard" placeholder="输入123自动收起键盘" />
			</view>
			<!-- #endif -->
			<view class="uni-form-item uni-column">
				<view class="title">数字输入的input</view>
				<input class="uni-input" type="number" placeholder="这是一个数字输入框" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">密码输入的input</view>
				<input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">带小数点的input</view>
				<input class="uni-input" type="digit" placeholder="带小数点的数字键盘" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">身份证输入的input</view>
				<input class="uni-input" type="idcard" placeholder="身份证输入键盘" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">控制占位符颜色的input</view>
				<input class="uni-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
			</view>
		</view>
	</view>
</template>
```
 
```javascript
export default {
    data() {
        return {
            title: 'input',
            focus: false,
            inputValue: '',
            changeValue: ''
        }
    },
    methods: {
        onKeyInput: function(event) {
            this.inputValue = event.target.value
        },
        replaceInput: function(event) {
            var value = event.target.value;
            if (value === '11') {
                this.changeValue = '2';
            }
        },
        hideKeyboard: function(event) {
            if (event.target.value === '123') {
                uni.hideKeyboard();
            }
        }
    }
}
```
 
![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f713b320-4f30-11eb-b680-7980c8a877b8.png)



**扩展**
**Extensions**
- uni ui提供了easyinput组件，提供了常用的封装，可搭配uni-forms组件，支持表单验证、支持各种常用设置。[详见](https://ext.dcloud.net.cn/plugin?id=3455)
- uni ui provides easyinput components, provides commonly used packages, can be used with uni-forms components, supports form validation, and supports various common settings. [See details](https://ext.dcloud.net.cn/plugin?id=3455)
- uni ui提供了combox组件，可选可输入，常用词免输入。[详见](https://ext.dcloud.net.cn/plugin?id=1261)
- uni ui provides a combox component, which is optional and can be input, and common words are free of input. [See details](https://ext.dcloud.net.cn/plugin?id=1261)
- uni ui提供了搜索框ui组件，插件市场还有封装好的页面模板。[详见](https://ext.dcloud.net.cn/search?q=search)。云端一体搜索模板功能完善，推荐使用：[https://ext.dcloud.net.cn/plugin?id=3851](https://ext.dcloud.net.cn/plugin?id=3851)
- uni ui provides search box ui components, and the plug-in market also has encapsulated page templates. [See details](https://ext.dcloud.net.cn/search?q=search). The cloud integrated search template is fully functional and recommended: [https://ext.dcloud.net.cn/plugin?id=3851](https://ext.dcloud.net.cn/plugin?id=3851)
- uni-app插件市场有输入文字后自动提示候选的组件，可搜索 [autocomplete](https://ext.dcloud.net.cn/search?q=autocomplete) 查看。
- The uni-app plug-in market has components that automatically prompt candidates after entering text. You can search for [autocomplete](https://ext.dcloud.net.cn/search?q=autocomplete) to view.
- 插件市场有各种类型的模拟键盘，比如车牌键盘、身份证键盘，可去插件市场搜索 [键盘](https://ext.dcloud.net.cn/search?q=%E9%94%AE%E7%9B%98)。
- There are various types of analog keyboards in the plug-in market, such as license plate keyboard and ID card keyboard. You can go to the plug-in market to search for [keyboard](https://ext.dcloud.net.cn/search?q=%E9%94%AE %E7%9B%98).