### uni.scanCode(OBJECT)
调起客户端扫码界面，扫码成功后返回对应的结果。
Call the client code scanning interface, and return the corresponding results after succeeding code scanning.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-:|
|onlyFromCamera|Boolean|否|是否只能从相机扫码，不允许从相册选择图片||
| onlyFromCamera| Boolean| No| Whether it is allowed to scan the code only from the camera, but not to select images from the photo album| |
|scanType|Array|否|扫码类型，参数类型是数组，二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。||
| scanType| Array| No| Code scanning types with array as the parameter type. qrCode is 'qrCodeo', 1D barcode is 'barCode', DataMatrix is 'DataMatrix' and pdf417 is 'pdf417'.| |
|success|Function|否|接口调用成功的回调，返回内容详见返回参数说明。||
| success| Function| No| Callback for successful interface calling. See the notices on returning parameter description for returning contents.| |
|fail|Function|否|接口调用失败的回调函数（识别失败、用户取消等情况下触发）||
| fail| Function| No| Callback function for failed interface calling (triggered when identification failed, or being cancelled by user, etc.)| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**success 返回参数说明**
**success return parameter description**

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-|:-|:-|
|result|所扫码的内容||
| result| Content of code scanned| |
|scanType|所扫码的类型|App|
| scanType| Type of code scanned| App|
|charSet|所扫码的字符集|App|
| charSet| Character of code scanned| App|
|path|当所扫的码为当前应用的合法二维码时，会返回此字段，内容为二维码携带的 path。|App|
| path| If the scanned code is a valid QR code of the current application, the field containing the path carried by the QR code will be returned.| App|

**示例**
**Example**

```javascript
// 允许从相机和相册扫码
//Allow scanning codes from cameras and photo albums
uni.scanCode({
	success: function (res) {
		console.log('barcode type:' + res.scanType);
		console.log('barcode content:' + res.result);
	}
});

// 只允许通过相机扫码
// Allow scanning codes from cameras only.
uni.scanCode({
	onlyFromCamera: true,
	success: function (res) {
		console.log('barcode type:' + res.scanType);
		console.log('barcode content:' + res.result);
	}
});

// 调起条码扫描
//Call up barcode scanning
uni.scanCode({
	scanType: ['barCode'],
	success: function (res) {
		console.log('barcode type:' + res.scanType);
		console.log('barcode content:' + res.result);
	}
});
```

**Tip**

- App-nvue，支持barcode组件，可自定义扫码界面。[详见](https://uniapp.dcloud.io/component/barcode)。App端自定义扫码界面，建议使用nvue方式。
- App-nvue, supports barcode component, you can customize the scan code interface. [See details.](https://uniapp.dcloud.io/component/barcode) It is recommended to use nvue to customize the code scanning interface on the App
- 在扫码界面点击返回也会进入 `fail` 回调中
- Click return on the code scanning interface to enter `fail` callback
