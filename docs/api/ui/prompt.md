### uni.showToast(OBJECT)

显示消息提示框。
Displays the message prompt box.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|title|String|是|提示的内容，长度与 icon 取值有关。||
| title| String| Yes| The content and length of the prompt are related to the value of icon.| |
|icon|String|否|图标，有效值详见下方说明。||
| icon| String| No| Icon. See the description below for valid values.| |
|image|String|否|自定义图标的本地路径（app端暂不支持gif）|App、H5|
| image| String| No| The local path of the custom icon (gif is temporarily not supported on the app side)| App, H5|
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|App|
| mask| Boolean| No| Whether to display transparent mask to prevent touch penetration, default: false| App|
|duration|Number|否|提示的延迟时间，单位毫秒，默认：1500||
| duration| Number| No| Prompt delay time, in milliseconds, default: 1500| |
|position|String|否|纯文本轻提示显示位置，填写有效值后只有 `title` 属性生效， 有效值详见下方说明。|App|
| position| String| No| The plain text light prompt displays the location. After filling in the valid value, only the `title` attribute takes effect. See the description below for the valid value.| App|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**icon 值说明**
**icon value description**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|success|显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值||
| success| Display the success icon with the title text displaying a maximum of 7 Chinese characters in length. Defaults| |
|error|显示错误图标，此时 title 文本最多显示 7 个汉字长度。||
| error| Display the failure icon with the title text displaying a maximum of 7 Chinese characters in length.| |
|loading|显示加载图标，此时 title 文本最多显示 7 个汉字长度。||
| loading| Display the loading icon with the title text displaying a maximum of 7 Chinese characters in length.| |
|none|不显示图标，此时 title 文本在`App`仅支持单行显示。|&nbsp;|
| none| If no icon is displayed, the title text only supports single line display in `App`.|  |

**示例**
**Example**

```javascript
uni.showToast({
	title: 'title',
	duration: 2000
});
```

**position 值说明（仅App生效）**
**Description of position value (valid only in App)**

|值|说明|
| Value| Instruction|
|:-|:-|
|top|居上显示|
| top| Display at top|
|center|居中显示|
| center| Display at center|
|bottom|居底显示|
| bottom| Display at bottom|

### uni.hideToast()

隐藏消息提示框。
Hide the message prompt box.

**示例**
**Example**

```javascript
uni.hideToast();
```


### uni.showLoading(OBJECT)

显示 loading 提示框, 需主动调用 [uni.hideLoading](api/ui/prompt?id=hideloading) 才能关闭提示框。
If the loading prompt box is displayed, you must actively call [uni.hideLoading](api/ui/prompt?id=hideloading) to close the prompt box.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|是|提示的文字内容，显示在loading的下方||
| title| String| Yes| Text content of the prompt, displayed under loading| |
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|App|
| mask| Boolean| No| Whether to display transparent mask to prevent touch penetration, default: false| App|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**示例**
**Example**

```javascript
uni.showLoading({
	title: 'Loading'
});
```

### uni.hideLoading()

隐藏 loading 提示框。
Hide the loading prompt box.

**示例**
**Example**

```javascript
uni.showLoading({
	title: 'Loading'
});

setTimeout(function () {
	uni.hideLoading();
}, 2000);
```

### uni.showModal(OBJECT)

显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
Display the modal pop-up window with only one OK button or both OK and Cancel buttons. Similar to an API integrating alert and confirm in html.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|否|提示的标题||
| title| String| No| Prompt title| |
|content|String|否|提示的内容||
| content| String| No| Prompt content| |
|showCancel|Boolean|否|是否显示取消按钮，默认为 true||
| showCancel| Boolean| No| Whether to display the Cancel button, with true as default| |
|cancelText|String|否|取消按钮的文字，默认为"取消"，最多 4 个字符||
| cancelText| String| No| Text of the Cancel button, with "Cancel" as default and a maximum of 4 characters| |
|cancelColor|HexColor|否|取消按钮的文字颜色，默认为"#000000"|H5|
| cancelColor| HexColor| No| The text color of the Cancel button is "#000000" by default| H5|
|confirmText|String|否|确定按钮的文字，默认为"确定"，最多 4 个字符||
| confirmText| String| No| Text of the OK button, with "OK" as default and a maximum of 4 characters| |
|confirmColor|HexColor|否|确定按钮的文字颜色，H5平台默认为"#007aff"|H5|
| confirmColor| HexColor| No| The text color of the OK button is "#007aff" by default for H5 platform| H5|
|editable|Boolean|否|是否显示输入框|H5 (3.2.10+)、App (3.2.10+)|
| editable| Boolean| No| Whether to display the input box?| H5 (3.2.10+), App (3.2.10+)|
|placeholderText|String|否|显示输入框时的提示文本|H5 (3.2.10+)、App (3.2.10+)|
| placeholderText| String| No| Prompt text when the input box is displayed| H5 (3.2.10+), App (3.2.10+)|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**success返回参数说明**
**Success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|:-|
|confirm|Boolean|为 true 时，表示用户点击了确定按钮|
| confirm| Boolean| true indicates the user clicking on the OK button|
|cancel|Boolean|为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）|
| cancel| Boolean| true indicates the user clicking on the Cancel button (used for Android system to distinguish between clicking the mask to close or clicking the Cancel button to close)|


**示例**
**Example**

```javascript
uni.showModal({
	title: 'Tip',
	content: 'This is a modal pop-up',
	success: function (res) {
		if (res.confirm) {
			console.log('user clicks on OK');
		} else if (res.cancel) {
			console.log('user clicks on Cancel');
		}
	}
});
```

**注意**
**Notice**
- 弹框同时使用确定取消时，需注意不同平台的确认取消按钮位置不同。在H5中，确认按钮默认在右边。在App中，iOS的确认按钮默认在右边，而Android默认在左边。产生这种差异的原因是uni.showModa在App上调用的是原生提供的弹出框，原生平台的策略本身就不同。如果需要调整，可以通过自行控制按钮的文字，即“确定”按钮的文字其实可以设置为“取消”。
- If the OK and Cancel buttons are used on pop-up at the same time, please note that the positions of the OK and Cancel buttons vary according to platforms. In H5, the OK button is on the right by default. In App, the OK button of iOS is on the right by default, and that of Android is on the left by default. The reason for this difference is that uni.showModa calls the pop-up box provided by the native platform on the App, and the strategy of the native platform itself is different. If adjustment is needed, you can control the text of the button by yourself, i.e., the text of the "OK" button can actually be set to "Cancel".
- showModal不满足需求时，可以自行开发组件弹框。插件市场有很多自定义弹框的组件，需注意在非H5平台，前端组件无法覆盖原生组件（如地图、video），遮罩也无法盖住tabbar和navigationbar。如需覆盖原生组件或遮罩tabbar等，App端推荐使用[subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues)。
- If the showModal does not meet the requirements, the component pop-up boxes can be developed in a customized manner. There are many components for custom pop-up boxes on the plugin market. It should be noted that on non-H5 platforms, front-end components cannot cover the native components (such as maps and video), and masks cannot cover the tabbar and navigationbar. [subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues) is recommended on the App side to override native components or mask tabbars, etc.

### uni.showActionSheet(OBJECT)

从底部向上弹出操作菜单
Pop up the operation menu from the bottom up

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;|是|按钮的文字数组||
| itemList| Array\<String>| Yes| Text array of buttons| |
|itemColor|HexColor|否|按钮的文字颜色，字符串格式，默认为"#000000"|App-iOS不支持|
| itemColor| HexColor| No| Button text color, in string format. The default is "#000000".| Not supported by App-iOS|
|popover|Object|否|大屏设备弹出原生选择按钮框的指示区域，默认居中显示|App-iPad（2.6.6+）、H5（2.9.2）|
| popover| Object| No| On large-screen devices, the display area of the native selection button box is popped up and displayed in the center by default| App-iPad(2.6.6+), H5(2.9.2)|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明||
| success| Function| No| Callback function for successful interface calling. See the notices on returning parameter description.| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**popover 值说明（仅App生效）**
**popover value description (only valid for App)**

|值|类型|说明|
| Value| Type| Instruction|
|:-|:-|:-|
|top|Number|指示区域坐标，使用原生 navigationBar 时一般需要加上 navigationBar 的高度|
| top| Number| Coordinates of the indication area. When using the native navigationBar, it is generally necessary to add the height of the navigationBar.|
|left|Number|指示区域坐标|
| left| Number| Indicate area coordinates|
|width|Number|指示区域宽度|
| width| Number| Indicate area width|
|height|Number|指示区域高度|
| height| Number| Indicate area height|

**success返回参数说明**
**Success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|tapIndex|Number|用户点击的按钮，从上到下的顺序，从0开始|
| tapIndex| Number| The buttons clickable by user, from top to bottom, starting from 0|

**示例**
**Example**

```javascript
uni.showActionSheet({
	itemList: ['A', 'B', 'C'],
	success: function (res) {
		console.log('The' + (res.tapIndex + 1) + 'th button is selected');
	},
	fail: function (res) {
		console.log(res.errMsg);
	}
});
```

**Tips**

- App平台，实现原生的、复杂的底部图文菜单，例如分享菜单，可参考[https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)
- To realize native and complex bottom menu of graphics and text on the App platform, such as sharing menu, please refer to [https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)

**注意**
**Notice**

- 在非H5端，本章的所有弹出控件都是原生控件，层级最高，可覆盖video、map、tabbar等原生控件。
- On the non-H5 side, all pop-up controls in this chapter are native controls with the highest level, covering native controls such as video, map and tabbar.
- [uni-app插件市场](https://ext.dcloud.net.cn/)有很多封装好的前端组件，但注意前端组件层级不是最高，无法覆盖原生组件，除非使用cover-view或nvue。
- Many encapsulated front-end components are available on the [uni-app plug-in market](https://ext.dcloud.net.cn/). Note that the front-end component level is not the highest and cannot override native components unless cover-view or nvue is used.

