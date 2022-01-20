#### Barcode

app端nvue专用的扫码组件。
Scanning component specific to the app-side nvue.

- 此组件用于app端nvue页面实现内嵌到界面上的扫码。其他场景、其他平台，请使用全屏扫码API：[uni.scanCode](https://uniapp.dcloud.io/api/system/barcode) 
- This component is used for the nvue page on the app side to realize the scanning embedded in the interface. For other scenes and other platforms, please use the full-screen scanning API: [uni.scanCode](https://uniapp.dcloud.io/api/system/barcode)
- App下纯nvue项目（manifest中renderer为native），暂不支持uni.scanCode API，此时只能使用barcode组件来替代。
- For the pure nvue project of App (rendered as native in manifest), the uni.scanCode API is temporarily not supported, and only the barcode component can be used instead.
- 此组件自HBuilderX 2.1.5+起支持。
- This component has been supported since HBuilderX 2.1.5+.

**属性说明**
**Attribute description**
设置Barcode扫码控件的属性，如扫码框、扫码条的颜色等。
Set the attributes of Barcode scanning control, such as the color of the scanning box and the barcode scanning bar.

|属性|类型 |默认值|必填|说明
| Attribute| Type| Defaults| Required| Instruction
|:--|:--|:--|:--|:--|
|autostart|boolean|false|否|是否自动开始扫码
| autostart| boolean| false| No| Whether to start scanning code automatically?
|background|string| |否|条码识别控件背景颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值，默认值为黑色。
| background| string| | No| Background color of the barcode identification control. The color value supported (refer to CSS color specification): color name (refer to CSS Color Names)/ hexadecimal value /rgb value, with black as default.
|frameColor |string| |否|扫码框颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。
| frameColor| string| | No| Color of scanning box. The color value supported (refer to CSS color specification): color name (refer to CSS Color Names)/ hexadecimal value /rgb value/rgba value, with red as default.
|scanbarColor|string||否|扫码条颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。
| scanbarColor| string| | No| Color of scanning bar. The color value supported (refer to CSS color specification): color name (refer to CSS Color Names)/ hexadecimal value /rgb value/rgba value, with red as default.
|filters|Array[Number] |[0,1,2]|否|条码类型过滤器，条码类型常量数组，默认情况支持QR、EAN13、EAN8类型。 通过此参数可设置扫码识别支持的条码类型（注意：设置支持的条码类型越多，扫描识别速度可能将会降低）。
| filters| Array\[Number]| \[0,1,2]| No| Barcode filter, with the barcode type of constant array. QR, EAN13 and EAN8 types are supported by default. With this parameter, the barcode types supported by scanning identification can be set (Note: the more supported barcode types you set, the slower scanning identification speed may be).

**码类型常量**
**Code type constant**
- QR: QR二维码，数值为0
- QR: QR code, with a value of 0
- EAN13: EAN条形码标准版，数值为1
- EAN13: EAN barcode standard version, with a value of 1
- EAN8: ENA条形码简版，数值为2
- EAN8: EAN barcode short version, with a value of 2
- AZTEC: Aztec二维码，数值为3
- AZTEC: Aztec QR code, with a value of 3
- DATAMATRIX: Data Matrix二维码，数值为4
- DATAMATRIX: Data Matrix QR code, with a value of 4
- UPCA: UPC条形码标准版，数值为5
- UPCA: UPC barcode standard version, with a value of 5
- UPCE: UPC条形码缩短版，数值为6
- UPCE: UPC barcode short version, with a value of 6
- CODABAR: Codabar条形码，数值为7
- CODABAR: Codabar barcode, with a value of 7
- CODE39: Code39条形码，数值为8
- CODE39: Code39 barcode, with a value of 8
- CODE93: Code93条形码，数值为9
- CODE93: Code93 barcode, with a value of 9
- CODE128: Code128条形码，数值为10
- CODE128: Code128 barcode, with a value of 10
- ITF: ITF条形码，数值为11
- ITF: ITF barcode, with a value of 11
- MAXICODE: MaxiCode二维码，数值为12
- MAXICODE: MaxiCode QR code, with a value of 12
- PDF417: PDF 417二维条码，数值为13
- PDF417: PDF 417 QR barcode, with a value of 13
- RSS14: RSS 14条形组合码，数值为14
- RSS14: RSS 14 combined barcode, with a value of 14
- RSSEXPANDED: 扩展式RSS条形组合码，数值为15
- RSSEXPANDED: Expanded RSS combined barcode, with a value of 15

##### start(object)
> 开始扫码识别
> Start scan code recognition

###### Object object
|属性|说明|类型|必填|备注
| Attribute| Instruction| Type| Required| Remark
|:--|:--|:--|:--|:--|
|conserve|是否保存扫码成功时的截图|Boolean|否|如果设置为true则在扫码成功时将图片保存，并通过onmarked回调函数的file参数返回保存文件的路径。 默认值为false，不保存截图。
| conserve| Whether to save the screenshot when the code is successfully scanned| Boolean| No| If set to true, the image will be saved when the code is successfully scanned, and the path of the saved file will be returned through the file parameter of the onmarked callback function. The default value is false and the screenshots will not be saved.
|filename|保存扫码成功时图片保存路径|String|否|可通过此参数设置保存截图的路径和名称，如果设置图片文件名称则必须指定文件的后缀名（必须是.png），否则认为是指定目录，文件名称则自动生成。
| filename| The save path of image when the code is successfully scanned| String| No| The path and name for saving screenshots can be set with this parameter. If set the image file name, the file suffix must be specified as .png, or otherwise, the specified directory and the automatically generated file name will be used.
|vibrate|扫码成功时是否需要震动提醒|Boolean|否|如果设置为true则在扫码成功时震动设备，false则不震动。 默认值为true。
| vibrate| Whether vibration reminder is needed when the code is successfully scanned| Boolean| No| If set to true, the device will vibrate when the code is successfully scanned, and if false, no vibration. The default value is true.
|sound|扫码成功时播放的提示音|String|否|可取值： "none" - 不播放提示音； "default" - 播放默认提示音（App引擎内置）。 默认值为"default"。
| sound| Prompt tone to be played when the code is successfully scanned| String| No| Options: "none" - no prompt tone; "default" - play the default prompt tone (built-in to the App engine). The default value is "default".


##### cancel()
> 取消扫码识别
> Cancel scan code recognition

|参数|类型 |必填|说明
| Parameter| Type| Required| Instruction
|:--|:--|:--|:--|
|无|无| 无| 结束对摄像头获取图片数据进行条码识别操作，同时关闭摄像头的视频捕获。 结束后可调用start方法重新开始识别。
| None| None| None| End the barcode identification operation on the image data obtained by the camera, and turn off the video capture of the camera meanwhile. After that, you can call the start method to restart the identification.

##### setFlash(boolean)
> 操作闪光灯
> Operating the flash

###### Boolean boolean
|类型 |必填|说明|备注
| Type| Required| Instruction| Remark
|:--|:--|:--|:--|
|Boolean| 是| 是否开启闪光灯|可取值true或false，true表示打开闪光灯，false表示关闭闪光灯。
| Boolean| Yes| Whether to turn on the flash?| The acceptable values are true or false: true means to turn on the flash, and false means to turn off the flash.


##### 事件
##### Event

##### marked
> 条码识别成功事件 {event.detail}
> Barcode identification successful event {event.detail}

######  返回参数说明
###### Return parameter description
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type|string|"success" 表示成功
| type| string| "success" means being successful.
|message|string|识别到的条码数据，扫码识别出的数据内容，字符串类型，采用UTF8编码格式。
| message| string| Identified barcode data, data content identified by scanning, character string type, in UTF8 encoding format.
|code|Number|识别到的条码类型，与Barcode组件的条码类型常量一致。
| code| Number| Identified barcode type, consistent with the barcode type constant of Barcode component.
|file|string|扫码成功的截图文件路径，扫码识别到的截图，png格式文件，如果设置为不保存截图，则返回undefined。
| file| string| Screenshot file path of successful scanning, screenshot identified by scanning, png format file. If set to not save the screenshot, it will return undefined.


##### error
> 条码识别错误事件
> Barcode recognition error event

######  返回参数说明
###### Return parameter description
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type|string|"fail" 表示失败
| type| string| "fail" indicates failure
|code|number| 相应 code 码
| code| number| Corresponding code
|message|string|失败描述
| message| string| Failure description

**示例：**
**Example:**
```html
<template>
	<view>
		<barcode id='1' class="barcode" autostart="true" ref="barcode" background="rgb(0,0,0)" frameColor="#1C86EE" scanbarColor="#1C86EE" :filters="fil" @marked="success1" @error="fail1"></barcode>
		<button class="btn" @click="toStart">Start scanning code identification</button>
		<button class="btn" @click="tocancel">Cancel scanning code identification</button>
		<button class="btn" @click="toFlash">Turn on the flash</button>
		<button class="btn" @click="toscan">Preview</button>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
		},
		data() {
			return {
				fil: [0, 2, 1]
			}
		},

		methods: {
			success1(e) {
				console.log("success1:" + JSON.stringify(e));
			},
			fail1(e) {
				console.log("fail1:" + JSON.stringify(e));
			},
			toStart: function() {
				this.$refs.barcode.start({
					conserve: true,
					filename: '_doc/barcode/'
				});
			},
			tocancel:function(){
				this.$refs.barcode.cancel();
			},
			toFlash: function() {
				this.$refs.barcode.setFlash(true);
			},

			toscan: function() {
				console.log("scan:");				
				const barcodeModule = uni.requireNativePlugin('barcodeScan');
				barcodeModule.scan("/static/barcode1.png"
				,(e)=>{
					console.log("scan_error:"+JSON.stringify(e));
				});
			}
		}
	}
</script>

<style>
	.barcode {
		width: 750rpx;
		height: 700rpx;
		background-color: #808080;
	}

	.btn {
		top: 20rpx;
		width: 730rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
		background-color: #458B00;
		border-radius: 10rpx;
	}
</style>
```
