#### Barcode

app端nvue专用的扫码组件。
nvue dedicated scan code component on app side.

- 此组件用于app端nvue页面实现内嵌到界面上的扫码。其他场景、其他平台，请使用全屏扫码API：[uni.scanCode](https://uniapp.dcloud.io/api/system/barcode) 
- This component is used to scan code embedded in the nvue page on the app side. For other scenarios and other platforms, please use the full-screen scan code API: [uni.scanCode](https://uniapp.dcloud.io/api/system/barcode)
- App下纯nvue项目（manifest中renderer为native），暂不支持uni.scanCode API，此时只能使用barcode组件来替代。
- The pure nvue project under the App (the renderer in the manifest is native), does not support uni.scanCode API at this time, and can only be replaced by the barcode component at this time.
- 此组件自HBuilderX 2.1.5+起支持。
- This component is supported since HBuilderX 2.1.5+.

**属性说明**
**Attribute description**
设置Barcode扫码控件的属性，如扫码框、扫码条的颜色等。
Set the attributes of the Barcode scan code control, such as the color of the scan code box and the scan code bar.

属性|类型 |默认值|必填|说明
Attribute|Type |Default Value|Required|Description
:--|:--|:--|:--|:--|
autostart|boolean|false|否|是否自动开始扫码
autostart|boolean|false|No|Whether to start scanning codes automatically
background|string| |否|条码识别控件背景颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值，默认值为黑色。
background|string| |No|Barcode identification control background color, color value support (refer to CSS color specification): color name (refer to CSS Color Names)/hexadecimal value/rgb value, the default value is black.
frameColor |string| |否|扫码框颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。
frameColor |string| |No|Scan code box color, color value support (refer to CSS color specification): color name (refer to CSS Color Names)/hexadecimal value/rgb value/rgba value, the default value is red.
scanbarColor|string||否|扫码条颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。
scanbarColor|string||No|Scan bar color, color value support (refer to CSS color specification): color name (refer to CSS Color Names)/hexadecimal value/rgb value/rgba value, the default value is red.
filters|Array[Number] |[0,1,2]|否|条码类型过滤器，条码类型常量数组，默认情况支持QR、EAN13、EAN8类型。 通过此参数可设置扫码识别支持的条码类型（注意：设置支持的条码类型越多，扫描识别速度可能将会降低）。
filters|Array[Number] |[0,1,2]|No|Barcode type filter, a constant array of barcode type, supports QR, EAN13, EAN8 types by default. This parameter can be used to set the barcode type supported by scanning code recognition (note: the more barcode types supported by the setting, the scanning recognition speed may be reduced).

**码类型常量**
**Code type constant**
- QR: QR二维码，数值为0
- QR: QR code, the value is 0
- EAN13: EAN条形码标准版，数值为1
- EAN13: standard version of EAN barcode , the value is 1
- EAN8: ENA条形码简版，数值为2
- EAN8: simplified version of ENA barcode, with a value of 2
- AZTEC: Aztec二维码，数值为3
- AZTEC: Aztec QR code, the value is 3
- DATAMATRIX: Data Matrix二维码，数值为4
- DATAMATRIX: Data Matrix QR code, the value is 4
- UPCA: UPC条形码标准版，数值为5
- UPCA: standard version of UPC barcode, the value is 5
- UPCE: UPC条形码缩短版，数值为6
- UPCE: shortened version of UPC bar code, the value is 6
- CODABAR: Codabar条形码，数值为7
- CODABAR: Codabar barcode, the value of 7
- CODE39: Code39条形码，数值为8
- CODE39: Code39 barcode, the value is 8
- CODE93: Code93条形码，数值为9
- Code93 bar code, the value is 9
- CODE128: Code128条形码，数值为10
- CODE128: Code128 bar code, the value is 10
- ITF: ITF条形码，数值为11
- ITF: ITF bar code, the value is 11
- MAXICODE: MaxiCode二维码，数值为12
- MAXICODE: MaxiCode QR code, the value is 12
- PDF417: PDF 417二维条码，数值为13
- PDF417: PDF 417 QR code, the value is 13
- RSS14: RSS 14条形组合码，数值为14
- RSS14: RSS 14 bar combination code, the value is 14
- RSSEXPANDED: 扩展式RSS条形组合码，数值为15
- RSSEXPANDED: Extended RSS bar combination code, the value is 15

##### start(object)
> 开始扫码识别
> Scan code recognition

###### Object object
属性|说明|类型|必填|备注
Attribute|Description|Type|Required|Remarks
:--|:--|:--|:--|:--|
conserve|是否保存扫码成功时的截图|Boolean|否|如果设置为true则在扫码成功时将图片保存，并通过onmarked回调函数的file参数返回保存文件的路径。 默认值为false，不保存截图。
conserve|Whether to save the screenshot when the code is successfully scanned|Boolean|No|If set to true, the picture will be saved when the code is successfully scanned, and the path will be returned through the file parameter of the onmarked callback function. The default value is false, and screenshots are not saved.
filename|保存扫码成功时图片保存路径|String|否|可通过此参数设置保存截图的路径和名称，如果设置图片文件名称则必须指定文件的后缀名（必须是.png），否则认为是指定目录，文件名称则自动生成。
filename|Save the path of image when the scan code is successfully saved|String|No|You can use this parameter to set the path and name for saving the screenshot, if you set the image file name, you must specify the file suffix (must be .png), otherwise it is considered to be specified Directory, file name is automatically generated.
vibrate|扫码成功时是否需要震动提醒|Boolean|否|如果设置为true则在扫码成功时震动设备，false则不震动。 默认值为true。
vibrate|Whether to vibrate when the code is successfully scanned|Boolean|No|If set to true, the device will be vibrated when the code is scanned successfully, and if it is false, the device will not be vibrated. The default value is true.
sound|扫码成功时播放的提示音|String|否|可取值： "none" - 不播放提示音； "default" - 播放默认提示音（5+引擎内置）。 默认值为"default"。
sound|Prompt sound played when the code scan succeeds|String|No| Possible values: "none"-do not play prompt sound; "default"-play default prompt sound (5+ engine built-in). The default value is "default".


##### cancel()
> 取消扫码识别
> Cancel scan code recognition

参数|类型 |必填|说明
Parameter|Type |Required|Description
:--|:--|:--|:--|
无|无| 无| 结束对摄像头获取图片数据进行条码识别操作，同时关闭摄像头的视频捕获。 结束后可调用start方法重新开始识别。
None | None | None | End the barcode recognition operation on the image data obtained by the camera, and close the video capture of the camera at the same time. After the end, the start method can be called to restart the recognition.

##### setFlash(boolean)
> 操作闪光灯
> Operating the flash

###### Boolean boolean
类型 |必填|说明|备注
Type |Required|Description|Remarks
:--|:--|:--|:--|
Boolean| 是| 是否开启闪光灯|可取值true或false，true表示打开闪光灯，false表示关闭闪光灯。
Boolean| Yes| Whether to turn on the flash|Can be true or false, true means turn on the flash, false means turn off the flash.



##### 事件
##### event

##### marked
> 条码识别成功事件 {event.detail}
> Barcode recognition success event {event.detail}

######  返回参数说明
######  Return parameter description
参数|类型 |说明
Parameter|type|description
:--|:--|:--|
type|string|"success" 表示成功
type|string|"success" means success
message|string|识别到的条码数据，扫码识别出的数据内容，字符串类型，采用UTF8编码格式。
message|string|The identified barcode data, the data content identified by the scan code, and the string type are in UTF8 encoding format.
code|Number|识别到的条码类型，与Barcode组件的条码类型常量一致。
code|Number|The recognized barcode type is consistent with the barcode type constant of the Barcode component.
file|string|扫码成功的截图文件路径，扫码识别到的截图，png格式文件，如果设置为不保存截图，则返回undefined。
file|string|The file path of the screenshot file for successful scanning, the screenshot recognized by the scanning code, and a png format file. If it is set to not save the screenshot, it will be return with 'undefined'.

##### error
> 条码识别错误事件
> Barcode recognition error event

######  返回参数说明
######  Return parameter description
参数|类型 |说明
Parameter|type|description
:--|:--|:--|
type|string|"fail" 表示失败
type|string|"fail" means failure
code|number| 相应 code 码
code|number| Corresponding code code
message|string|失败描述
message|string|Failure description

**示例：**
**Example:**
```html
<template>
	<view>
		<barcode id='1' class="barcode" autostart="true" ref="barcode" background="rgb(0,0,0)" frameColor="#1C86EE" scanbarColor="#1C86EE" :filters="fil" @marked="success1" @error="fail1"></barcode>
		<button class="btn" @click="toStart">开始扫码识别</button>
		<button class="btn" @click="toStart">Start scanning code recognition</button>
		<button class="btn" @click="tocancel">取消扫码识别</button>
		<button class="btn" @click="tocancel">Cancel scan code recognition</button>
		<button class="btn" @click="toFlash">开启闪光灯</button>
		<button class="btn" @click="toFlash">Turn on the flash</button>
		<button class="btn" @click="toscan">预览</button>
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
