**剪贴板 API 平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

### uni.setClipboardData(OBJECT)
设置系统剪贴板的内容。
Sets the contents of the system clipboard.

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|data|String|是|需要设置的内容|
|data|String|yes|What needs to be set|
|success|Function|否|接口调用成功的回调|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**示例**
**Exemple**

```javascript
uni.setClipboardData({
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

### uni.getClipboardData(OBJECT)
获取系统剪贴板内容。
Get the contents of the system clipboard.

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success 返回参数说明**
**success Return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|data|String|剪贴板的内容|
|data|String|The contents of the clipboard|

**示例**
**Example**

```javascript
uni.getClipboardData({
	success: function (res) {
		console.log(res.data);
	}
});
```

#### **注意**
#### **Tips**

- 设置剪贴板内容后，App平台默认会自动弹出轻提示。如不希望在App平台弹出提示，可使用Native.js自行操作剪贴板，插件市场有封装好的示例[https://ext.dcloud.net.cn/plugin?id=712](https://ext.dcloud.net.cn/plugin?id=712)。也可以在设置剪切板后立即uni.hideToast()。
- After setting the clipboard contents,Mini program platform will automatically pop up light prompts.APP platform keep the same policy to mini program. If you do not want the prompt to pop up on the APP platform,You can use Native.js to operate the clipboard by yourself.It can also be uni.hideToast() set immediately after the clipboard is set.
- H5的复制粘贴，可去插件市场搜索[剪贴板](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E8%B4%B4%E6%9D%BF)
- To copy and paste H5, you can go to the plug-in market to search for [clipboard](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E8%B4%B4%E6%9D%BF )