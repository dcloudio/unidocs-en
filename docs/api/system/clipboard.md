**剪贴板 API 平台差异说明**
**Platform difference description for clipboard APIs**

|App|H5|
|:-:|:-:|
|√|x|

### uni.setClipboardData(OBJECT)
设置系统剪贴板的内容。
Set the contents of the system clipboard.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|data|String|是|需要设置的内容|
| data| String| Yes| Content to be set|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

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
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|data|String|剪贴板的内容|
| data| String| Contents of the clipboard|

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
#### **Notice**

- H5的复制粘贴，可去插件市场搜索[剪贴板](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E8%B4%B4%E6%9D%BF)
- For copy and paste on the H5 side, you can search for [Clipboard](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E8%B4%B4%E6%9D%BF) in the plug-in market.
