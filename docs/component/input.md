#### input

输入框。
Input box.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|value|String||输入框的初始内容||
| value| String| | Initial content of the input box| |
|type|String|text|input 的类型|H5 暂未支持动态切换，详见下方 Tips，请使用 v-if 进行整体切换|
| type| String| text| input type| H5 does not support dynamic switching yet, and see Tips below for details. Please use v-if for overall switching|
|text-content-type|String| |文本区域的语义，根据类型自动填充|仅 App-nvue-iOS 支持|
| text-content-type| String| | Semantic of text area, automatically filled according to types| Only supported on App-nvue-iOS|
|password|Boolean|false|是否是密码类型|H5和App写此属性时，type失效|
| password| Boolean| false| Is it a password type?| type is invalid when H5 and App write this attribute|
|placeholder|String||输入框为空时占位符||
| placeholder| String| | Placeholder when the input box is empty| |
|placeholder-style|String||指定 placeholder 的样式||
| placeholder-style| String| | Specify the style of placeholder| |
|placeholder-class|String|"input-placeholder"|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/||
| placeholder-class| String| "input-placeholder"| Specify the style class of placeholder. Note that when style in a page or component writes scoped, /deep/ need to be attached in front of the class name| |
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false| Disable or not| |
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
| maxlength| Number| 140| Maximum input length, which is not limited when set to -1| |
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App|
| cursor-spacing| Number| 0| The distance between the specified cursor and the keyboard, in px. Take the minimum value of the distance between input and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard| App|
|focus|Boolean|false|获取焦点。|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
| focus| Boolean| false| Get focus.| Whether to focus on H5 platform and whether the soft keyboard pops up with it depend on the implementation of the current browser itself. nvue page is not supported, and focus () and blur () methods of the component are needed to be used to control the focus|
|confirm-type|String|done|设置键盘右下角按钮的文字，仅在 type="text" 时生效。|App、H5|
| confirm-type| String| done| Set the text of the button in the lower right corner of the keyboard, which only takes effect when type="text".| App, H5|
|confirm-hold|Boolean|false|点击键盘右下角按钮时是否保持键盘不收起|App|
| confirm-hold| Boolean| false| Whether to keep the keyboard displayed when clicked the button in the lower right corner of the keyboard| App|
|cursor|Number||指定focus时的光标位置||
| cursor| Number| | Cursor position while specifying the focus| |
|selection-start|Number|-1|光标起始位置，自动聚集时有效，需与selection-end搭配使用||
| selection-start| Number| -1| Home position of cursor, valid for automatically focusing, needing to be used with selection-end| |
|selection-end|Number|-1|光标结束位置，自动聚集时有效，需与selection-start搭配使用||
| selection-end| Number| -1| End position of cursor, valid for automatically focusing, needing to be used with selection-start| |
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（vue 页面 softinputMode 为 adjustResize 时无效）|
| adjust-position| Boolean| true| Whether automatically push up the page when the keyboard pops up| App-Android (invalid when softinputMode of vue page is adjustResize)|
|auto-blur|boolean|false|键盘收起时，是否自动失去焦点|App 3.0.0+|
| auto-blur| boolean| false| Whether to automatically lose focus when the keyboard is retracted| App 3.0.0+|
|@input|EventHandle||当键盘输入时，触发input事件，event.detail = {value}|差异见下方 Tips|
| @input| EventHandle| | Input event is triggered at keyboard inputting, event.detail = {value}| See Tips below for differences|
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅App（2.2.3+） 支持|
| @focus| EventHandle| | Triggered when the input box gets focus, event.detail = {value, height }, wherein height is the keyboard height| Only supported by App (2.2.3+)|
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value: value}||
| @blur| EventHandle| | Triggered when the input box loses focus, event.detail = {value: value}| |
|@confirm|EventHandle||点击完成按钮时触发，event.detail = {value: value}|&nbsp;|
| @confirm| EventHandle| | Triggered when clicked on the Finish button, event.detail = {value: value}|  |
|@keyboardheightchange|eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|App 3.1.0+|
| @keyboardheightchange| eventhandle| | Trigger this event when the height of keyboard changes, event.detail = {height: height, duration: duration}| App 3.1.0+|

**Tips**

- 如果遇到 value 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If case of the problem that the value attribute setting does not take effect, refer to: [Solution to ineffective component attribute settings](/vue-api?id=_4-%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)
- `input` 组件上有默认的 `min-height` 样式，如果 `min-height` 的值大于 `height` 的值那么 `height` 样式无效。
- There is a default `min-height` style on the `input` component. If the value of `min-height` is greater than the value of `height`, then the `height` style is invalid.
- H5 暂未支持动态切换，请使用 `v-if`进行整体切换。
- H5 side does not support dynamic switching yet, please use `v-if` for overall switching.

```html
        <!-- 错误写法 -->
        <!-- Wrong writing mode -->
	<input :type="isText?'text':'number'" placeholder="Please enter the content" />
	
        <!-- 正确写法 -->
        <!-- Correct writing mode -->
	<input v-if="isText" type="text" placeholder="Please enter the text" />
	<input v-else  type="number"  placeholder="Please enter digit" />
```



**type 有效值**
**type valid value**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|text|文本输入键盘||
| text| Text input keyboard| |
|number|数字输入键盘|均支持，App平台、H5平台 3.1.22 以下版本 vue 页面在 iOS 平台显示的键盘包含负数和小数。|
| number| Numerical input keyboard| All supported. The keyboards displayed on the iOS platform on vue page of App platform and H5 platform version 3.1.22 or lower contain negative numbers and decimals.|
|digit|带小数点的数字键盘|均支持，App平台、H5平台 vue 页面在 iOS 平台显示的键盘包含负数。|
| digit| Numeric keyboard with decimal point| All supported. The keyboards displayed on the iOS platform on vue page of App platform and H5 platform contain negative numbers.|
|tel|电话输入键盘|仅App的nvue页面支持|
| tel| Phone input keyboard| Only supported under the nvue page of App|

**注意事项**
**Precautions**

- 原html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API：[radio组件](https://uniapp.dcloud.io/component/radio)、[checkbox组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8)、[日期选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。
- In the original html specification, input is not only an input box, also includes the functions of radio, checkbox, time, date and file selection. In uni-app specification, input is an input box only. Other functions uni-app have separate components or API: [radio component](https://uniapp.dcloud.io/component/radio), [checkbox component](https://uniapp.dcloud.io/component/checkbox), [time selection](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8), [date selection](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8), [picture selection](https://uniapp.dcloud.io/api/media/image?id=chooseimage), [video selection](https://uniapp.dcloud.io/api/media/video?id=choosevideo), [multimedia file selection (including picture and video)](https://uniapp.dcloud.io/api/media/video?id=choosemedia), [General file selection](https://uniapp.dcloud.io/api/media/file?id=choosefile).
- input组件若不想弹出软键盘，可设置为disabled
- input components can be set to disabled if the soft keyboard doesn't need to be popped up

**text-content-type 有效值**
**Valid value of text-content-type**

|值|说明|
| Value| Instruction|
|:-|:-|
|oneTimeCode|一次性验证码|
| oneTimeCode| One-time verification code|

**confirm-type 有效值**
**Valid value of confirm-type**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|send|右下角按钮为“发送”|app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| send| The button in the lower right corner is "Send"| app-nvue, app-vue and h5 (2.9.9+, and kernel Chrome81+ and Safari 13.7+ are required in webview device)|
|search|右下角按钮为“搜索”||
| search| The button in the lower right corner is "Search"| |
|next|右下角按钮为“下一个”|app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| next| The button in the lower right corner is "Next"| app-nvue, app-vue and h5 (2.9.9+, and kernel Chrome81+ and Safari 13.7+ are required in webview device)|
|go|右下角按钮为“前往”||
| go| The button in the lower right corner is "Go"| |
|done|右下角按钮为“完成”|app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| done| The button in the lower right corner is "Finish"| app-nvue, app-vue and h5 (2.9.9+, and kernel Chrome81+ and Safari 13.7+ are required in webview device)|

- App平台的nvue页面，如果是weex编译模式，需通过weex的api设置（weex模式已被淘汰）
- If nvue page of App platform is in weex compilation mode, it needs to be set by api of weex (weex mode has been abolished)
- App平台的vue页面及 H5平台 的弹出键盘使用的是浏览器控制的键盘，在Chrome81+、Safari13.7+之前，键盘右下角文字只能设置完成和搜索，从Chrome81+、Safari13.7+起支持设置发送、下一个。
- The pop-up keyboard on vue page of App platform and H5 platform is controlled by browser. Before Chrome81+ and Safari13.7+, the text in the lower right corner of the keyboard can only be set to Finish and Search, and since these versions, it is supported to be set to Send and Next.
- App平台涉及聊天的建议使用nvue，一方面因为app-vue控制键盘右下角按键文字为“发送”对webview内核有要求，另一方面聊天记录如使用sroll-view，过长的内容在app-vue上会有性能问题。
- It is recommended to use nvue for chat in App platform. On the one hand, it is because the button text "Send" in the lower right corner of app-vue control keyboard requires for webview kernel and on the other hand, when sroll-view is used in chat record, too long content will cause performance problems in app-vue.

#### App平台iOS端软键盘上方横条去除方案
#### The scheme for removing bar above the soft keyboard on iOS App platform

App平台在iOS上，webview中的软键盘弹出时，默认在软键盘上方有一个横条，显示着：上一项、下一项和完成等按钮。如不想显示这个横条，可以配置softinputNavBar: 'none'
For iOS App platform, the soft keyboard in webview pops up with a bar above the soft keyboard by default, showing buttons such as Back, Next and Finish, etc. If you don't want to display this bar, you can configure softinputNavBar: 'none'

配置方式，在 pages.json 中配置 style
Configuration mode, to configure style in pages.json

```json
"app-plus": {
	"softinputNavBar": "none"
}
```

如果是nvue页面，iOS默认就没有键盘上方的横条，无需任何设置。
For nvue page, iOS has no bar above the keyboard by default, and without any setting.

#### 关于软键盘弹出的逻辑说明
#### Logical explanation about the soft keyboard pop-up

App平台软键盘弹出有 adjustResize|adjustPan 两种模式，默认为 adjustPan 模式，H5平台因不同浏览器而异
Soft keyboard pops up with two modes, adjustResize|adjustPan, with adjustPan mode as default on App platform but variable on H5 platform depending on different browsers
- adjustResize：软键盘弹出时，webview窗体高度挤压。屏幕高度=webview窗体高度+软键盘高度
- adjustResize: when the soft keyboard pops up, the form height of webview will be squeezed. Screen height= the form height of webview+ soft keyboard height
- adjustPan：软键盘弹出时，webview窗体高度不变，但窗体上推，以保证输入框不被软键盘盖住
- adjustPan: when the soft keyboard pops up, the form height of webview will be unchanged, but the form will be pushed up to ensure that the input box will not be covered by the soft keyboard

配置方式，在 pages.json 中配置 style
Configuration mode, to configure style in pages.json

```json
"app-plus": {
	"softinputMode": "adjustResize"
}
```


**注意**
**Notice**
- adjustResize模式在Android App上，弹起键盘和收回键盘时，因为要重设webview窗体高度，可能会在个别安卓机型闪现灰屏或漏出下层页面内容。
- For adjustResize mode on Android App, when the keyboard pops up and retracts, the screen may blink gray or leak the content on the page below in some Android devices since the webview window height requires resetting,.
- H5平台只能在用户交互时修改 focus 生效。
- It can only take effect during user interaction on H5 platform via modifying the focus.
- 如果遇到 focus 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If case of the problem that the focus attribute setting does not take effect, please refer to: [Solution to ineffective component attribute settings](/vue-api?id=_4-%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)
- 如需禁止点击其他位置收起键盘的默认行为，可以监听`touch`事件并使用`prevent`修饰符（仅支持App、H5，其他平台可以通过设置`focus`来使输入框重新获取焦点），例如在确认按钮上使用：```@touchend.prevent="onTap"```
- If you need to prohibit the default behavior of clicking other places to collapse the keyboard, you can listen to the `touch` event and use the `prevent` modifier (only App and H5 are supported. On other platforms, you can set `focus` to enable input box to regain the focus), for example, use on the confirm button: `@touchend.prevent="onTap"`


#### 关于软键盘收起的逻辑说明
#### Logical explanation of soft keyboard retracting
- Android上在软键盘弹出后，点击back或点击非置焦区域可收起软键盘。
- On Android, after the soft keyboard pops up, click back or the non-focus area to retract the soft keyboard.
- iOS上如果软键盘上方有带有“完成”的横条，则需要点完成才能收起键盘；如果没有软键盘上方横条，则点击非input/textarea区域即可收起软键盘
- On iOS, if there is a horizontal bar with "Finished" above the soft keyboard, you need to click Finished to retract the keyboard; if not, click the non-input/textarea area to retract the soft keyboard

以上为默认逻辑，uni-app同时提供了隐藏软键盘的api：[uni.hideKeyboard()](https://uniapp.dcloud.io/api/key?id=hidekeyboard)
The above is the default logic, and uni-app also provides an api for hiding soft keyboard: [uni.hideKeyboard()](https://uniapp.dcloud.io/api/key?id=hidekeyboard)

#### App平台原生输入框的说明
#### Explanation of native input box on App platform
在app平台，有titleNView配置的[searchinput](/collocation/pages?id=app-titlenview)原生输入框。这些方式的输入框都是原生的，不是webview里的。
On the app platform, there is a native input box of [searchinput](/collocation/pages?id=app-titlenview) configured by titleNView. The input boxes of these methods are native, not from webview.
- 原生输入框在iOS上不会有软键盘上方的横条
- On iOS, no horizontal bar above the soft keyboard will occur in the native input box
- 原生输入框一样受配置的`adjustPan|adjustResize`模式影响
- The native input box is also affected by the configured `adjustPan|adjustResize` mode

**input示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/input/input)
**input example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/input/input)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">Auto-focusable input</view>
				<input class="uni-input" focus placeholder="automatically get focus" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">The button at the bottom right corner of the keyboard is displayed as search</view>
				<input class="uni-input" confirm-type="search" placeholder="The button at the bottom right corner of the keyboard is displayed as search" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input for maximum control input length</view>
				<input class="uni-input" maxlength="10" placeholder="Maximum input length of 10" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Get input value in real time: {{inputValue}}</view>
				<input class="uni-input" @input="onKeyInput" placeholder="synchronize input to view" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input for control input</view>
				<input class="uni-input" @input="replaceInput" v-model="changeValue" placeholder="Two consecutive 1 will become 2" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input for digital input</view>
				<input class="uni-input" type="number" placeholder="This is a number input box" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input for password input</view>
				<input class="uni-input" password type="text" placeholder="This is a password input box" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input with decimal point</view>
				<input class="uni-input" type="digit" placeholder="Digital keyboard with decimal point" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input for ID card number input</view>
				<input class="uni-input" type="idcard" placeholder="ID card number input keyboard" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input for control placeholder color</view>
				<input class="uni-input" placeholder-style="color:#F76260" placeholder="Placeholder font is red" />
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
**Extension**
- uni ui提供了easyinput组件，提供了常用的封装，可搭配uni-forms组件，支持表单验证、支持各种常用设置。[详见](https://ext.dcloud.net.cn/plugin?id=3455)
- uni ui provides easyinput component with common encapsulation, which can be matched with uni-forms component, supporting form validation and various common settings. [See details](https://ext.dcloud.net.cn/plugin?id=3455)
- uni ui提供了combox组件，可选可输入，常用词免输入。[详见](https://ext.dcloud.net.cn/plugin?id=1261)
- uni ui provides combox component, selectable and enterable, with common words for selecting. [See details](https://ext.dcloud.net.cn/plugin?id=1261)
- uni ui提供了搜索框ui组件，插件市场还有封装好的页面模板。[详见](https://ext.dcloud.net.cn/search?q=search)。云端一体搜索模板功能完善，推荐使用：[https://ext.dcloud.net.cn/plugin?id=3851](https://ext.dcloud.net.cn/plugin?id=3851)
- Uni ui provides ui components of search box, plug-in market and packaged page templates. [See details.](https://ext.dcloud.net.cn/search?q=search) Cloud integrated search template has perfect functions, and is recommended: [https://ext.dcloud.net.cn/plugin?id=3851](https://ext.dcloud.net.cn/plugin?id=3851)
- uni-app插件市场有输入文字后自动提示候选的组件，可搜索 [autocomplete](https://ext.dcloud.net.cn/search?q=autocomplete) 查看。
- The uni-app plug-in market has components that automatically prompt candidates after entering text. For details, you can search for [autocomplete](https://ext.dcloud.net.cn/search?q=autocomplete).
- 插件市场有各种类型的模拟键盘，比如车牌键盘、身份证键盘，可去插件市场搜索 [键盘](https://ext.dcloud.net.cn/search?q=%E9%94%AE%E7%9B%98)。
- There are various types of analog keyboards in the plug-in market, such as license plate keyboards and ID card keyboards. You can search for [keyboards](https://ext.dcloud.net.cn/search?q=%E9%94%AE%E7%9B%98) in the plug-in market.
