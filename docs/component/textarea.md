#### textarea

多行输入框。
Multi-line input box.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|value|String||输入框的内容||
| value| String| | Contents of the input box| |
|placeholder|String||输入框为空时占位符||
| placeholder| String| | Placeholder when the input box is empty| |
|placeholder-style|String||指定 placeholder 的样式||
| placeholder-style| String| | Specify the style of placeholder| |
|placeholder-class|String|textarea-placeholder|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/||
| placeholder-class| String| textarea-placeholder| Specify the style class of placeholder. Note that when style in a page or component writes scoped, /deep/ need to be attached in front of the class name| |
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false| Disable or not| |
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
| maxlength| Number| 140| Maximum input length, which is not limited when set to -1| |
|focus|Boolean|false|获取焦点|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
| focus| Boolean| false| Get focus| Whether to focus on H5 platform and whether the soft keyboard pops up with it depend on the implementation of the current browser itself. nvue page is not supported, and focus () and blur () methods of the component are needed to be used to control the focus|
|auto-height|Boolean|false|是否自动增高，设置auto-height时，style.height不生效||
| auto-height| Boolean| false| Whether to increase the height automatically. style.height does not take effect when auto-height is set| |
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App|
| cursor-spacing| Number| 0| The distance between the specified cursor and the keyboard, in px. Take the minimum value of the distance between textarea and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard| App|
|cursor|Number||指定focus时的光标位置|App、H5|
| cursor| Number| | Cursor position while specifying the focus| App, H5|
|confirm-type|String|done|设置键盘右下角按钮的文字|App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| confirm-type| String| done| Set the text of the button in the lower right corner of the keyboard| App-vue and H5 (2.9.9+, and kernel Chrome81+ and Safari 13.7+ are required in webview device)|
|selection-start|Number|-1|光标起始位置，自动聚焦时有效，需与selection-end搭配使用|App、H5|
| selection-start| Number| -1| Home position of cursor, valid for automatically focusing, needing to be used with selection-end| App, H5|
|selection-end|Number|-1|光标结束位置，自动聚焦时有效，需与selection-start搭配使用|App、H5|
| selection-end| Number| -1| End position of cursor, valid for automatically focusing, needing to be used with selection-start| App, H5|
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（softinputMode 为 adjustResize 时无效）|
| adjust-position| Boolean| true| Whether automatically push up the page when the keyboard pops up| App-Android (invalid when softinputMode is adjustResize)|
|auto-blur|boolean|false|键盘收起时，是否自动失去焦点|App-vue 3.0.0+ ，App-nvue不支持|
| auto-blur| boolean| false| Whether to automatically lose focus when the keyboard is retracted| App-vue 3.0.0+, not supported by App-nvue|
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅App（HBuilderX 2.0+ [nvue uni-app模式](http://ask.dcloud.net.cn/article/36074)） |
| @focus| EventHandle| | Triggered when the input box gets focus, event.detail = {value, height }, wherein height is the keyboard height| App only (HBuilderX 2.0+ [nvue uni-app mode](http://ask.dcloud.net.cn/article/36074))|
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value, cursor}||
| @blur| EventHandle| | Triggered when the input box losing focus, event.detail = {value, cursor}| |
|@linechange|EventHandle||输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}|nvue ios暂不支持|
| @linechange| EventHandle| | Called when the number of input boxes changes, event.detail = {height: 0, heightRpx: 0, lineCount: 0}| not supported by nvue ios temporarily|
|@input|EventHandle||当键盘输入时，触发 input 事件，event.detail = {value, cursor}， @input 处理函数的返回值并不会反映到 textarea 上||
| @input| EventHandle| | input event is triggered at keyboard inputting, event.detail = {value, cursor}， @input. The return value of the processing function will not be reflected on the textarea| |
|@keyboardheightchange|Eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|App 3.1.0+|
| @keyboardheightchange| Eventhandle| | Trigger this event when the height of keyboard changes, event.detail = {height: height, duration: duration}| App 3.1.0+|


**confirm-type 有效值**
**Valid value of confirm-type**


|值|说明|
| Value| Instruction|
|:-|:-|
|send|右下角按钮为“发送”|
| send| The button in the lower right corner is "Send"|
|search|右下角按钮为“搜索”|
| search| The button in the lower right corner is "Search"|
|next|右下角按钮为“下一个”|
| next| The button in the lower right corner is "Next"|
|go|右下角按钮为“前往”|
| go| The button in the lower right corner is "Go"|
|done|右下角按钮为“完成”|
| done| The button in the lower right corner is "Finish"|

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea)
**Example** [View examples](https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-title uni-common-pl">The input area is highly adaptive, and scroll bars will not appear</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">Placeholder font is of red textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="Placeholder font is of red"/>
			</view>
		</view>
</template>
```
 
```javascript
export default {
    data() {
        return {}
    },
    methods: {
        bindTextAreaBlur: function (e) {
            console.log(e.detail.value)
        }
    }
}
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3aa1edc0-4f2f-11eb-bd01-97bc1429a9ff.png)

**Tips**

- textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 @submit。
- The blur event of textarea will be later than the tap event on the page. If you need to get the textarea from the click event of the button, you can use the @submit。 of the form
- 如果遇到 value 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If case of the problem that the value attribute setting does not take effect, refer to: [Solution to ineffective component attribute settings](/vue-api?id=_4-%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)
- H5 平台只能在用户交互时修改 focus 生效。
- It can only take effect during user interaction on H5 platform via modifying the focus.
- 如果遇到 focus 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If case of the problem that the focus attribute setting does not take effect, please refer to: [Solution to ineffective component attribute settings](/vue-api?id=_4-%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)
- 软键盘的弹出和收起逻辑，详见[input的文档](/component/input?id=app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF%E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6%96%B9%E6%A1%88)
- For the pop-up and retract logic of the soft keyboard, please refer to the [input document](/component/input?id=app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF%E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6%96%B9%E6%A1%88)
- 如需禁止点击其他位置收起键盘的默认行为，可以监听`touch`事件并使用`prevent`修饰符（仅支持App、H5，其他平台可以通过设置`focus`来使输入框重新获取焦点），例如在确认按钮上使用：```@touchend.prevent="onTap"```
- If you need to prohibit the default behavior of clicking other places to collapse the keyboard, you can listen to the `touch` event and use the `prevent` modifier (only App and H5 are supported. On other platforms, you can set `focus` to enable input box to regain the focus), for example, use on the confirm button: `@touchend.prevent="onTap"`
- js中给textarea组件赋值为字符串，在字符串中加\n可实现换行。
- js assigns a value to the textarea component as a string. Adding \\n to the string can realize line feed.

```
<template>
    <view class="content">
        <textarea class="textarea" v-model="txt"></textarea>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                "txt":"hello world！\ n textarea multiline input box"
            }
        }
    }
</script>
```



nvue下键盘右下角按钮点击仅触发换行；如想监听该按钮事件可以参考，示例代码如下：
Under nvue, clicking the button in the lower right corner of the keyboard only triggers line feed; If you want to listen to this button event, please refer to the sample code as follows:
```
<template>
	<view class="content">
		<textarea class="textarea" v-model="txt"></textarea>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:"txt"
			}
		},
		watch: {
			txt(txt) {
				//敲了回车键了
				//Hit the Enter key
				if( txt.indexOf('\n') != -1 ){
				   //收起软键盘
				   //Retract the soft keyboard
				   uni.hideKeyboard() 
				}
			}
		},
		methods: {
		}
	}
</script>

<style>
.textarea{
	border: solid 1px red;
}
</style>
```


**富文本编辑的解决方案**
**Solution to rich text editing**
在输入框里图文混排内容，在web上该功能依赖document，而app的正常页面又没有document。
In the input box, the content is mixed with graphics and text. On the web, this function depends on document, but there is no document on the normal page of the app.
- 方式一：使用uni-app自带的`editor`组件，该组件支持App、H5。
- Method 1: Use the `editor` component that comes with uni-app, which is supported on App and H5 sides.
- 方式二：采用markdown编辑器方案，输入区输入markdown语法，预览区提供预览。这种方式可以跨端。插件市场搜[富文本编辑](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91)，有不少插件。
- Method 2: Adopt markdown editor scheme, input markdown syntax in input area, and provide preview in preview area. In this way, cross sides are allowed. Numerous plug-ins are available in the plug-in market when searching for [Rich text editing](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91)
- 方式三：使用web-view组件，加载html页面，此时可使用web中常见的各种富文本编辑器，插件市场也有这类插件。
- Method 3: Use web-view component, load html pages. At this time, you can use various rich-text editors commonly found in the web, which are also available in the plug-in market.
