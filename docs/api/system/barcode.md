### uni.scanCode(OBJECT)
调起客户端扫码界面，扫码成功后返回对应的结果。
Turn up the client scan interface, scan code after successful return the corresponding results.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明**
**OBJECT Parameter Description**

|参数名|类型|必填|说明|平台差异说明|
|Paramater Name|Type|Required|Description|平台差异说明|
|:-|:-|:-|:-|:-:|
|onlyFromCamera|Boolean|否|是否只能从相机扫码，不允许从相册选择图片||
|onlyFromCamera|Boolean|no|If only from the camera code, are not allowed to select images from album ||
|scanType|Array|否|扫码类型，参数类型是数组，二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。||
|scanType|Array|no|Sweep the code type,The parameter type is an array,Qr code is 'qrCode',One dimension code is 'barCode',DataMatrix is ‘datamatrix’,pdf417 is ‘pdf417’.||
|success|Function|否|接口调用成功的回调，返回内容详见返回参数说明。||
|success|Function|no|A successful callback to the interface call,See details for returned content. Return parameter description.||
|fail|Function|否|接口调用失败的回调函数（识别失败、用户取消等情况下触发）||
|fail|Function|no|CALLBACK function for interface call failure (triggered in case of recognition failure, user cancellation, etc.)||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)||

**success 返回参数说明**
**success Return parameter description**

|参数|说明|平台差异说明|
|Parameter|Description|
|:-|:-|:-|
|result|所扫码的内容||
|result|scancode result|
|scanType|所扫码的类型|App|
|scanType|scancode type|
|charSet|所扫码的字符集|App|
|charSet|char set|
|path|当所扫的码为当前应用的合法二维码时，会返回此字段，内容为二维码携带的 path。|App|
|path|When the code scanned is the valid QR code of the current application,This field will be returned, the content is carried by the two-dimensional code path. |

**示例**
**Example**

```javascript
// 允许从相机和相册扫码
// Allows code scanning from cameras and albums
uni.scanCode({
	success: function (res) {
		console.log('条码类型：' + res.scanType);
		console.log('Barcode Type:' + res.scanType);
		console.log('条码内容：' + res.result);
		console.log('Barcode content:' + res.result);
	}
});

// 只允许通过相机扫码
// Only camera scanning is allowed
uni.scanCode({
	onlyFromCamera: true,
	success: function (res) {
		console.log('条码类型：' + res.scanType);
		console.log('Barcode Type:' + res.scanType);
		console.log('条码内容：' + res.result);
		console.log('Barcode content:' + res.result);
	}
});

// 调起条码扫描
// Turn up bar code scanning
uni.scanCode({
	scanType: ['barCode'],
	success: function (res) {
		console.log('条码类型：' + res.scanType);
		console.log('Barcode Type:' + res.scanType);
		console.log('条码内容：' + res.result);
		console.log('Barcode content:' + res.result);
	}
});
```

**Tip**

- App-vue如果想自定义扫码，可参考[uni-app中如何使用5+的原生界面控件](http://ask.dcloud.net.cn/article/35036)和[plus.barcode API](https://www.html5plus.org/doc/zh_cn/barcode.html)
- `App-vue` If you want to customize the scan code，May refer to[How to use 5+ native interface controls in uni-app](http://ask.dcloud.net.cn/article/35036) and [plus.barcode API](https://www.html5plus.org/doc/zh_cn/barcode.html)
- App-nvue，支持barcode组件，可自定义扫码界面。[详见](https://uniapp.dcloud.io/component/barcode)。App端自定义扫码界面，建议使用nvue方式。
- `App-nvue`, Support for barcode components,Customized scanning interface. [Details](https://uniapp.dcloud.io/component/barcode). App Customized scan code interface,nvue is recommended.
- App的扫码引擎，使用业内开源的通用扫码库，扫码效率比不过微信、支付宝等商业扫码库。如需更强的扫码效果，请使用支付宝提供的扫码插件：[https://ext.dcloud.net.cn/plugin?id=2636](https://ext.dcloud.net.cn/plugin?id=2636)
- App code scanning engine, Use the industry's open source universal scan library,Scan code efficiency than WeChat, Alipay and other commercial scanning code library. For a stronger scanning code effect, Please use the scan code plugin provided by Alipay: [https://ext.dcloud.net.cn/plugin?id=2636](https://ext.dcloud.net.cn/plugin?id=2636)
- 在扫码界面点击返回也会进入 `fail` 回调中
- Clicking back on the scan screen will also enter the `fail` callback.
