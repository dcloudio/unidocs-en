#### textarea

多行输入框。
Multi-line input box.


**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name    | Types of    | Defaults | Description|Platform difference description|
|:-|:-|:-|:-|:-|
|value|String||输入框的内容||
| value             | String      |          | The content of the input box                                 |
|placeholder|String||输入框为空时占位符||
| placeholder       | String      |          | Placeholder when the input box is empty                      |
|placeholder-style|String||指定 placeholder 的样式||
| placeholder-style | String      |          | Specify the style of the placeholder                         |
|placeholder-class|String|textarea-placeholder|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/||
|placeholder-class|String|textarea-placeholder|Specify the style class of placeholder. Note that when scoped is written in the style of the page or component, you need to write /deep/|| before the class name
|disabled|Boolean|false|是否禁用||
| disabled          | Boolean     | false    | Whether to disable                                           |
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
| maxlength         | Number      | 140      | Maximum input length, when set to -1, the maximum length is not limited |
|focus|Boolean|false|获取焦点|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
|focus|Boolean|false|Get focus|Whether the focus can be focused on the H5 platform and whether the soft keyboard follows the pop-up depends on the implementation of the current browser itself. The nvue page does not support, you need to use the focus() and blur() methods of the component to control the focus|
| focus             | Boolean     | false    | Get focus|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
|auto-height|Boolean|false|是否自动增高，设置auto-height时，style.height不生效||
| auto-height       | Boolean     | false    | Whether to increase automatically, style.height does not take effect when auto-height is set |
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App|
|cursor-spacing|Number|0|Specifies the distance between the cursor and the keyboard, in px. Take the minimum of the distance between the textarea and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard |App|
|cursor|Number||指定focus时的光标位置|App、H5|
|cursor|Number||Cursor position when focus is specified|App、H5|
|confirm-type|String|done|设置键盘右下角按钮的文字|App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
|confirm-type|String|done|Set the text of the button in the lower right corner of the keyboard|App-vue and H5 (2.9.9+, and require device webview kernel Chrome81+, Safari13.7+)|
|selection-start|Number|-1|光标起始位置，自动聚焦时有效，需与selection-end搭配使用|App、H5|
| selection-start   | Number      | -1       | The starting position of the cursor, valid during auto focus, need to be used with selection-end|App、H5 |
|selection-end|Number|-1|光标结束位置，自动聚焦时有效，需与selection-start搭配使用|App、H5|
| selection-end     | Number      | -1       | The end position of the cursor, valid during auto focus, need to be used with selection-start|App、H5|
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（softinputMode 为 adjustResize 时无效）|
|adjust-position|Boolean|true|Whether the page is automatically pushed up when the keyboard pops up|App-Android (invalid when softinputMode is adjustResize)|
|auto-blur|boolean|false|键盘收起时，是否自动失去焦点|App-vue 3.0.0+ ，App-nvue不支持|
| auto-blur         | boolean     | false    | Whether the keyboard automatically loses focus when the keyboard is retracted| App-vue 3.0.0+ ，App-nvue not supported |
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅App（HBuilderX 2.0+ [nvue uni-app模式](http://ask.dcloud.net.cn/article/36074)） |
|@focus|EventHandle||Fires when the input box is focused, event.detail = {value, height }, height is the keyboard height|App only (HBuilderX 2.0+ [nvue uni-app mode](http://ask.dcloud. net.cn/article/36074)) |
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value, cursor}||
|@blur|EventHandle||Fires when the input box loses focus, event.detail = {value, cursor}||
|@linechange|EventHandle||输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}|nvue ios暂不支持|
|@linechange|EventHandle||Called when the number of lines in the input box changes, event.detail = {height: 0, heightRpx: 0, lineCount: 0}|nvue ios not currently supported|
|@input|EventHandle||当键盘输入时，触发 input 事件，event.detail = {value, cursor}， @input 处理函数的返回值并不会反映到 textarea 上||
| @input            | EventHandle |          | When keyboard input, the input event is triggered, event.detail = {value, cursor}, the return value of the @input processing function will not be reflected on the textarea |
|@keyboardheightchange|Eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|App 3.1.0+|
|@keyboardheightchange|Eventhandle||This event is triggered when the keyboard height changes, event.detail = {height: height, duration: duration}|App 3.1.0+|


**confirm-type 有效值**
**confirm-type valid value**


|值|说明|
| value  | Description                                    |
|:-|:-|
|send|右下角按钮为“发送”|
| send   | The button in the lower right corner is "Send" |
|search|右下角按钮为“搜索”|
| search | The bottom right button is "Search"            |
|next|右下角按钮为“下一个”|
| next   | The button in the lower right corner is "Next" |
|go|右下角按钮为“前往”|
| go     | The bottom right button is "Go"                |
|done|右下角按钮为“完成”|
| done   | The button in the lower right corner is "Done" |

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea)
 **Example** [View example](https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp), it is recommended to use HBuilderX, create a new uni-app project, choose hello uni-app template, you can experience the complete Example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-title uni-common-pl">The input area is highly adaptive, no scroll bar appears</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">The placeholder font is red textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="The placeholder font is red"/>
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
- The blur event of the textarea will be later than the tap event on the page. If you need to get the textarea from the click event of the button, you can use the @submit of the form.
- 如果遇到 value 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If you encounter the problem that the value property setting does not take effect, please refer to: [Solution for component property setting not taking effect](/vue-api?id=_4-Solution for component property setting not taking effect)
- 覆盖textarea需要使用cover-view。[详见](/component/native-component)
- Cover-view is required to cover textarea. [See details](/component/native-component)
- H5 平台只能在用户交互时修改 focus 生效。
- H5 platform can only modify focus to take effect during user interaction.
- 如果遇到 focus 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If you encounter the problem that the focus property setting does not take effect, please refer to: [Solution for component property setting not taking effect](/vue-api?id=_4-Solution for component property setting not taking effect)
- 软键盘的弹出和收起逻辑，详见[input的文档](/component/input?id=app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF%E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6%96%B9%E6%A1%88)
- The pop-up and retract logic of the soft keyboard, see [input's documentation](/component/input?id=app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF for details %E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6 %96%B9%E6%A1%88)
- 如需禁止点击其他位置收起键盘的默认行为，可以监听`touch`事件并使用`prevent`修饰符（仅支持App-v3、H5，其他平台可以通过设置`focus`来使输入框重新获取焦点），例如在确认按钮上使用：```@touchend.prevent="onTap"```
- If you want to prohibit the default behavior of clicking other places to close the keyboard, you can listen to the `touch` event and use the `prevent` modifier (App-v3, H5 only, other platforms can set the `focus` to make the input box reacquired Focus), for example, use on the confirm button: ```@touchend.prevent="onTap"```
- js中给textarea组件赋值为字符串，在字符串中加\n可实现换行。
- Assign a string to the textarea component in js, and add \n to the string to achieve line break.

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
                "txt":"hello world！\n textarea多行输入框"
            }
        }
    }
</script>
```



nvue下键盘右下角按钮点击仅触发换行；如想监听该按钮事件可以参考，示例代码如下：
Clicking on the button in the lower right corner of the keyboard under nvue only triggers line break; if you want to listen to the button event, you can refer to the sample code as follows:
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
				if( txt.indexOf('\n') != -1 ){ //敲了回车键了
				   uni.hideKeyboard() //收起软键盘
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
**Solution for rich text editing**
在输入框里图文混排内容，在web上该功能依赖document，而小程序和app的正常页面又没有document。
In the input box, the content is mixed with text and graphics. This function on the web depends on the document, and the normal page of the applet and app does not have a document.
- 方式一：使用uni-app自带的`editor`组件，该组件支持App、H5。
- Method 1: Use the `editor` component that comes with uni-app, which supports App and H5.
- 方式二：采用markdown编辑器方案，输入区输入markdown语法，预览区提供预览。这种方式可以跨端。插件市场搜[富文本编辑](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91)，有不少插件。
- Method 2: Use the markdown editor solution, enter markdown syntax in the input area, and preview in the preview area. This approach can be cross-terminal. Plug-in market search [rich text editor](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96% E8%BE%91), there are many plug-ins.
- 方式三：使用web-view组件，加载html页面，此时可使用web中常见的各种富文本编辑器，插件市场也有这类插件。
- Method 3: Use the web-view component to load the html page. At this time, you can use various rich text editors that are common in the web. There are also such plug-ins in the plug-in market.
