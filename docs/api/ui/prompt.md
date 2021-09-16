### uni.showToast(OBJECT)

显示消息提示框。
A message box is displayed.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| parameter | Types of | Required | Description     |平台差异说明|
|:-|:-|:-|:-|:-|:-|
|title|String|是|提示的内容，长度与 icon 取值有关。||
| title     | String   | Yes      | The length of the prompt content is related to the icon value. ||
|icon|String|否|图标，有效值详见下方说明。||
| icon      | String   | no       | Icon, the effective value is detailed in the description below. ||
|image|String|否|自定义图标的本地路径（app端暂不支持gif）|App、H5|
| image     | String   | no       | The local path of the custom icon   ||
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|App|
| mask      | Boolean  | no       | Whether to display a transparent mask to prevent touch penetration, default: false ||
|duration|Number|否|提示的延迟时间，单位毫秒，默认：1500||
| duration  | Number   | no       | Prompt delay time, in milliseconds, default: 1500  ||
|position|String|否|纯文本轻提示显示位置，填写有效值后只有 `title` 属性生效， 有效值详见下方说明。|App|
| position  | String   | no       | Light plain text display position, only fill the effective value of `title`property to take effect, the effective value see note below. ||
|success|Function|否|接口调用成功的回调函数||
| success   | Function | no       | Callback function for successful interface call    ||
|fail|Function|否|接口调用失败的回调函数||
| fail      | Function | no       | Callback function for interface call failure   ||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||

**icon 值说明**
**icon value description**
|Value|Description|Platform difference description|
|值|说明|平台差异说明|
|:-|:-|:-|
|success|显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值||
|success|The success icon is displayed. At this time, the title text displays up to 7 Chinese characters in length. Default value||
|error|显示错误图标，此时 title 文本最多显示 7 个汉字长度。||
|error|The error icon is displayed. At this time, the title text displays up to 7 Chinese characters in length. ||
|loading|显示加载图标，此时 title 文本最多显示 7 个汉字长度。||
|loading| displays the loading icon, at this time the title text displays up to 7 Chinese characters in length. ||
|none|不显示图标，此时 title 文本在`小程序`最多可显示两行，`App`仅支持单行显示。|&nbsp;|
|none|No icon is displayed. At this time, the title text can be displayed on up to two lines in the `small program`, and `App` only supports single line display. |&nbsp;|

**示例**
**Example**

```javascript
uni.showToast({
	title: '标题',
	duration: 2000
});
```

**position 值说明（仅App生效）**
**Description of position value (valid only for App)**

|值|说明|
| value  | Description    |
|:-|:-|
|top|居上显示|
| top    | Top display    |
|center|居中显示|
| center | Center display |
|bottom|居底显示|
| bottom | Bottom display |

**Tips**

- App端可通过[plus.nativeUI.toast API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.toast)实现更多功能。
- can achieve more functions through [plus.nativeUI.toast API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.toast)。

### uni.hideToast()

隐藏消息提示框。
Hide the message box.

**示例**
**Example**

```javascript
uni.hideToast();
```


### uni.showLoading(OBJECT)

显示 loading 提示框, 需主动调用 [uni.hideLoading](api/ui/prompt?id=hideloading) 才能关闭提示框。
The loading prompt box is displayed, and [uni.hideLoading](api/ui/prompt?id=hideloading) must be actively called to close the prompt box.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| parameter | Types of | Required | Description  |平台差异说明|
|:-|:-|:-|:-|:-|
|title|String|是|提示的文字内容，显示在loading的下方||
| title     | String   | Yes      | The prompt text content is displayed below loading   ||
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|App|
| mask      | Boolean  | no       | Whether to display a transparent mask to prevent touch penetration, default: false ||
|success|Function|否|接口调用成功的回调函数||
| success   | Function | no       | Callback function for successful interface call   ||
|fail|Function|否|接口调用失败的回调函数||
| fail      | Function | no       | Callback function for interface call failure  ||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||

**示例**
**Example**

```javascript
uni.showLoading({
	title: '加载中'
});
```

### uni.hideLoading()

隐藏 loading 提示框。
Hide the loading prompt box.

**示例**
**Example**

```javascript
uni.showLoading({
	title: '加载中'
});

setTimeout(function () {
	uni.hideLoading();
}, 2000);
```

### uni.showModal(OBJECT)

显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
The display modal pop-up window can have only one OK button, or both OK and Cancel buttons. Similar to an API that integrates html: alert, confirm.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
|Parameter|Type|Required|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|否|提示的标题||
|title|String|No|Title of the prompt||
|content|String|否|提示的内容||
|content|String|No|Prompt content||
|showCancel|Boolean|否|是否显示取消按钮，默认为 true||
|showCancel|Boolean|No|Whether to show the cancel button, the default is true||
|cancelText|String|否|取消按钮的文字，默认为"取消"，最多 4 个字符||
|cancelText|String|No|The text of the cancel button, the default is "Cancel", up to 4 characters||
|cancelColor|HexColor|否|取消按钮的文字颜色，默认为"#000000"|H5|
|cancelColor|HexColor|No|The text color of the cancel button, the default is "#000000"|H5|
|confirmText|String|否|确定按钮的文字，默认为"确定"，最多 4 个字符||
|confirmText|String|No|The text of the OK button, the default is "OK", up to 4 characters||
|confirmColor|HexColor|否|确定按钮的文字颜色，H5平台默认为"#007aff"|H5|
|confirmColor|HexColor|No|The color of the text of the OK button, the default on the H5 platform is "#007aff"|H5|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if it succeeds or fails)|&nbsp;|


**success返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter | Types of | Description    |
|:-|:-|:-|:-|
|confirm|Boolean|为 true 时，表示用户点击了确定按钮|
| confirm   | Boolean  | When true, it means that the user clicked the OK button      |
|cancel|Boolean|为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）|
| cancel    | Boolean  | When it is true, it means that the user clicked cancel (used for the Android system to distinguish between clicking the mask to close or clicking the cancel button to close) |


**示例**
**Example**

```javascript
uni.showModal({
	title: '提示',
	content: '这是一个模态弹窗',
	success: function (res) {
		if (res.confirm) {
			console.log('用户点击确定');
		} else if (res.cancel) {
			console.log('用户点击取消');
		}
	}
});
```

**注意**
**Notice**
- 弹框同时使用确定取消时，需注意不同平台的确认取消按钮位置不同。在微信、H5中，确认按钮默认在右边。在App中，iOS的确认按钮默认在右边，而Android默认在左边。产生这种差异的原因是uni.showModa在App和小程序上调用的是原生提供的弹出框，原生平台的策略本身就不同。如果需要调整，可以通过自行控制按钮的文字，即“确定”按钮的文字其实可以设置为“取消”。
- When using the pop-up box to confirm and cancel at the same time, please note that the positions of the confirm and cancel buttons on different platforms are different. In WeChat and H5, the confirm button is on the right by default. In the App, the iOS confirmation button is on the right by default, while Android is on the left by default. The reason for this difference is that uni.showModa calls natively provided pop-up boxes on App and applets, and the native platform's strategy itself is different. If you need to adjust, you can control the text of the button by yourself, that is, the text of the "OK" button can actually be set to "Cancel".
- showModal不满足需求时，可以自行开发组件弹框。插件市场有很多自定义弹框的组件，需注意在非H5平台，前端组件无法覆盖原生组件（如地图、video），遮罩也无法盖住tabbar和navigationbar。如需覆盖原生组件或遮罩tabbar等，App端推荐使用[subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues)。
- When showModal does not meet the requirements, you can develop the component box by yourself. There are many custom pop-up components in the plug-in market. It should be noted that on non-H5 platforms, front-end components cannot cover native components (such as maps and videos), and masks cannot cover tabbar and navigationbar. If you need to cover native components or mask the tabbar, etc., it is recommended to use [subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues) on the App side.
- App端还有原生的[prompt API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.prompt)，弹出界面中内置一个输入框。其他平台需自行封装前端组件实现。
- There is also a native [prompt API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.prompt) on the App side, and an input box is built into the pop-up interface. Other platforms need to encapsulate the front-end components to achieve.

### uni.showActionSheet(OBJECT)

从底部向上弹出操作菜单
Pop up the operation menu from the bottom up

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
|Parameter|Type|Required|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;|是|按钮的文字数组||
|itemList|Array&lt;String&gt;|Yes|The text array of the button||
|itemColor|HexColor|否|按钮的文字颜色，字符串格式，默认为"#000000"|App-iOS不支持|
|itemColor|HexColor|No|The text color of the button, in string format, the default is "#000000"|Not supported by App-iOS|
|popover|Object|否|大屏设备弹出原生选择按钮框的指示区域，默认居中显示|App-iPad（2.6.6+）、H5（2.9.2）|
|popover|Object|No|Large screen devices pop up the indication area of the native selection button box, which is displayed in the center by default|App-iPad (2.6.6+), H5 (2.9.2)|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明||
|success|Function|No|Callback function for successful interface call, see the return parameter description for details||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if it succeeds or fails)|&nbsp;|


**popover 值说明（仅App生效）**
**popover value description (valid only for App)**

|值|类型|说明|
|Value|Type|Description|
|:-|:-|:-|
|top|Number|指示区域坐标，使用原生 navigationBar 时一般需要加上 navigationBar 的高度|
|top|Number|Indicates the coordinates of the area. When using the native navigationBar, you generally need to add the height of the navigationBar|
|left|Number|指示区域坐标|
|left|Number|indicating area coordinates|
|width|Number|指示区域宽度|
|width|Number|Indicates the width of the area|
|height|Number|指示区域高度|
|height|Number|Indicating the height of the area|

**success返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|tapIndex|Number|用户点击的按钮，从上到下的顺序，从0开始|
|tapIndex|Number|The button clicked by the user, from top to bottom, starting from 0|

**示例**
**Example**

```javascript
uni.showActionSheet({
	itemList: ['A', 'B', 'C'],
	success: function (res) {
		console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
	},
	fail: function (res) {
		console.log(res.errMsg);
	}
});
```

**Tips**

- App平台，iPad设备支持设置弹出框的位置，详见 [plus.nativeUI的文档](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
- App platform, iPad devices support setting the position of the pop-up box, see [plus.nativeUI's documentation](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
- App平台，实现原生的、复杂的底部图文菜单，例如分享菜单，可参考[https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)
- App platform, to achieve native and complex bottom graphic menus, such as sharing menus, please refer to [https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net .cn/plugin?id=69)

**注意**
**Notice**

- 在非H5端，本章的所有弹出控件都是原生控件，层级最高，可覆盖video、map、tabbar等原生控件。
- On the non-H5 end, all pop-up controls in this chapter are native controls, with the highest level, which can cover native controls such as video, map, and tabbar.
- [uni-app插件市场](https://ext.dcloud.net.cn/)有很多封装好的前端组件，但注意前端组件层级不是最高，无法覆盖原生组件，除非使用cover-view或nvue。
- [uni-app plug-in market](https://ext.dcloud.net.cn/) There are many packaged front-end components, but note that the front-end component level is not the highest and cannot cover native components unless cover-view or nvue is used .