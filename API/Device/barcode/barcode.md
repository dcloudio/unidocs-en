### uni.scanCode(OBJECT)
Turn up the client scan interface, scan code after successful return the corresponding results.

**Object Parameter Description**

|Paramater Name|Type|Required|Description|
|:-|:-|:-|:-|
|onlyFromCamera|Boolean|no|If only from the camera code, are not allowed to select images from album |
|scanType|Array|no|Sweep the code type,The parameter type is an array,Qr code is 'qrCode',One dimension code is'barCode',DataMatrix是‘datamatrix’,pdf417是‘pdf417’.|
|success|Function|no|A successful callback to the interface call,See details for returned content. Return parameter description.|
|fail|Function|no|CALLBACK function for interface call failure (triggered in case of recognition failure, user cancellation, etc.)|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success Return parameter description**

|Parameter|Description|
|:-|:-|
|result|result|
|scanType|scan type|
|charSet|char set|
|path|When the code scanned is the valid QR code of the current application,This field will be returned, the content is carried by the two-dimensional code path. |

**The sample**

```javascript
// Allows code scanning from cameras and albums
uni.scanCode({
	success: function (res) {
		console.log('scanType:' + res.scanType);
		console.log('result:' + res.result);
	}
});

// Only camera scanning is allowed
uni.scanCode({
	onlyFromCamera: true,
	success: function (res) {
		console.log('scanType:' + res.scanType);
		console.log('result:' + res.result);
	}
});

// Turn up bar code scanning
uni.scanCode({
	scanType: ['barCode'],
	success: function (res) {
		console.log('scanType:' + res.scanType);
		console.log('result:' + res.result);
	}
});
```

**Tip**

- App-vueIf you want to customize the scan code,May refer to How to use 5+ native interface controls in uni-app和plus.barcode API
- App-nvue,Support for barcode components,Customized scanning interface.App Customized scan code interface,nvue is recommended.
- App code scanning engine,Use the industry's open source universal scan library,Scan code efficiency than WeChat, Alipay and other commercial scanning code library.
- Clicking back on the scan screen will also enter the `fail` callback.
