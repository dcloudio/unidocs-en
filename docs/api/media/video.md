### uni.chooseVideo(OBJECT)
拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
Take a video or select a video from the phone album, and return to the temporary file path of the video.

若选择和上传非图像、视频文件，另行参考：[https://uniapp.dcloud.io/api/media/file](https://uniapp.dcloud.io/api/media/file)。
If you select and upload non-image and video files, please refer to: [https://uniapp.dcloud.io/api/media/file](https://uniapp.dcloud.io/api/media/file).
若选择和上传非图像、视频文件，另行参考：[https://uniapp.dcloud.io/api/media/file](https://uniapp.dcloud.io/api/media/file)。
If you select and upload non-image and video files, please refer to: [https://uniapp.dcloud.io/api/media/file](https://uniapp.dcloud.io/api/media/file).

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT 参数说明**
**OBJECT parameter description** 

|参数名|类型|必填|说明|平台差异说明|
| parameter name | Types of  | Required | Description    | Platform difference description |
|:-|:-|:-|:-|:-|
|sourceType|Array&lt;String&gt;|否|album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']||
|sourceType|Array&lt;String&gt;| no       | album Select a video from the album, and the camera uses the camera to shoot, the default is: ['album','camera'] ||
|extension|Array&lt;String&gt;|否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|H5(HBuilder X2.9.9+)|
|extension|Array&lt;String&gt;| no       | According to the file extension filtering, each item cannot be an empty string. No filtering by default. |H5(HBuilder X2.9.9+)|
|maxDuration|Number|否|拍摄视频最长拍摄时间，单位秒。最长支持 60 秒。|APP平台 1.9.7+(iOS支持，Android取决于ROM的拍照组件是否实现此功能，如果没实现此功能则忽略此属性。)|
|maxDuration|Number| no       | The maximum recording time of a video, in seconds. Supports up to 60 seconds. | APP platform 1.9.7+ (iOS support, Android depends on whether the camera component of the ROM implements this function. If this function is not implemented, this attribute is ignored.) |
|camera|String|否|'front'、'back'，默认'back'|APP|
|camera|String| no       | 'front','back', default'back'  | APP  |
|success|Function|否|接口调用成功，返回视频文件的临时文件路径，详见返回参数说明。||
|success|Function| no       | The interface is successfully called, and the temporary file path of the video file is returned. For details, see the return parameter description. ||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function| no       | Callback function for interface call failure                 ||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

**success 返回参数说明**
**success return parameter description** 

|参数|类型|说明|平台差异说明说明|
| parameter    | Types of | Description  | Explanation of platform differences |
|:-|:-|:-|:-|
|tempFilePath|String|选定视频的临时文件路径||
|tempFilePath|String|Temporary file path of selected video||
|tempFile|File|选定的视频文件|仅H5（2.6.15+）支持|
|tempFile|File| Selected video file                      | Only H5 (2.6.15+) supported         |
|duration|Number|选定视频的时间长度，单位为 s|APP 2.1.0+、H5|
|duration|Number| The duration of the selected video, in s | APP 2.1.0+, H5 |
|size|Number|选定视频的数据量大小|APP 2.1.0+、H5|
|size|Number| The data size of the selected video      | APP 2.1.0+, H5 |
|height|Number|返回选定视频的高|APP 2.1.0+、H5|
|height|Number| Returns the height of the selected video | APP 2.1.0+, H5 |
|width|Number|返回选定视频的宽|APP 2.1.0+、H5|
|width|Number| Returns the width of the selected video  | APP 2.1.0+, H5 |
|name|String|包含扩展名的文件名称|仅H5支持|
|name|String| File name including extension            | Only H5 support  |

**注意：**
* app安卓端选择的视频最大只支持180MB，如需突破该限制请使用原生插件https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9 
* The video selected by the app on the Android side only supports up to 180MB. If you want to break through this limit, please use the native plug-in
* 文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。
* The temporary path of the file can be used normally during the current startup of the application. If you need to save it for a long time, you need to call uni.saveFile actively and you can access it when the application is started next time.
* camera 部分 Android 手机下由于系统 ROM 不支持无法生效，打开拍摄界面后可操作切换
* Camera cannot take effect under some Android phones because the system ROM is not supported. You can switch between operations after opening the shooting interface.
* 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
* You can use the user authorization API to determine whether the user grants the app the permission to access the photo album or camera
* App下如需进一步压缩视频大小，可以在插件市场搜索[视频压缩](http://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E5%8E%8B%E7%BC%A9)插件
* If you need to further compress the video size under the App, you can search for video compression plugins in the plugin market
* 如需上传到cdn，可使用uniCloud.uploadFile API，uniCloud提供了免费cdn给开发者使用，详见[https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
* If you need to upload to CDN, you can use uniCloud.uploadFile API. UniCloud provides free CDN for developers to use
* 选择视频大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。

**示例**

```html
<template>
	<view>
		<text>hello</text>
		<button @tap="test">click me</button>
		<video :src="src"></video>
	</view>
</template>
```
```javascript
export default {
	data() {
		return {
			src: ''
		}
	},
	methods: {
		test: function () {
			var self = this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera', 'album'],
				success: function (res) {
					self.src = res.tempFilePath;
				}
			});
		}
	}
}
```



### uni.saveVideoToPhotosAlbum(OBJECT)
保存视频到系统相册。
Save the video to the system album. 

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明**
**OBJECT parameter description** 

|参数名|类型|必填|说明|
| parameter name | Types of | Required | Description   |
|:-|:-|:-|:-|
|filePath|String|是|视频文件路径，可以是临时文件路径也可以是永久文件路径|
|filePath|String| Yes      | Video file path, it can be a temporary file path or a permanent file path |
|success|Function|否|接口调用成功的回调函数|
|success|Function| no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails)） |

**success 返回参数说明**
**success return parameter description** 

|参数名|类型|说明|
| parameter name | Types of | Description |
|:-|:-|:-|
|errMsg|String|调用结果|
|errMsg|String|Call result|

**注意**
**note** 

- 可以通过用户授权API来判断用户是否给应用授予相册写入权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user grants the app write permission for the album [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)

**示例**
**Example**

```html
<template>
	<view>
		<text>hello</text>
		<button @tap="test">click me</button>
		<video :src="src"></video>
	</view>
</template>
```
```javascript
export default {
	data() {
		return {
			src: ''
		}
	},
	methods: {
		test: function () {
			var self = this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera'],
				success: function (res) {
					self.src = res.tempFilePath;
					
					uni.saveVideoToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function () {
							console.log('save success');
						}
					});
				}
			});
		}
	}
}
```

### uni.getVideoInfo(OBJECT)

获取视频详细信息
Get video details 

**平台差异说明**

|App|H5|
|:-:|:-:|
|3.1.10+|3.1.10+|

**OBJECT 参数说明**
**OBJECT parameter description** 

|属性			|类型			|默认值	|必填	|说明	|
|Attributes			|Types of			| TDefaults	| Required 	| Description|
|:-:			|:-:			|:-:		|:-:	|:-:	|
|src			|string		|-			|是		|视频文件路径，可以是临时文件路径也可以是永久文件路径（不支持网络地址）	|
|src			|string		|-			| Yes 		| Video file path, it can be a temporary file path or a permanent file path 	|
|success	|function	|-			|否		|接口调用成功的回调函数	|
|success	|function	|-			| no 		| Callback function for successful interface call 	|
|fail			|function	|-			|否		|接口调用失败的回调函数|
|fail			|function	|-			| no 		| Callback function for interface call failure 			|
|complete	|function	|-			|否		|接口调用结束的回调函数（调用成功、失败都会执行）			|
|complete	|function	|-			| no 		| The callback function for the end of the interface call (the call will be executed if it succeeds or fails) 			|


**success 返回参数说明**
**success return parameter description** 

|参数名			|类型		|说明								|平台差异说明|
| **parameter name** | **Types of** 	| **Description** |平台差异说明|
|:-					|:-			|:-									||
|orientation|string	|画面方向						|App（3.1.14+）|
|orientation|string	| Screen orientation App（3.1.14+）		||
|type				|string	|视频格式						|App（3.1.14+）|
|type				|string	| Video format 	App（3.1.14+）	||
|duration		|number	|视频长度						|App（3.1.10+）、H5|
|duration		|number	| Video length 	App（3.1.10+）、H5		||
|size				|number	|视频大小，单位 kB	|App（3.1.10+）、H5|
|size				|number	| Video size, unit kB App（3.1.10+）、H5 	||
|height			|number	|视频的长，单位 px	|App（3.1.10+）、H5|
|height			|number	| Video length, unit px App（3.1.10+）、H5	||
|width			|number	|视频的宽，单位 px	|App（3.1.10+）、H5|
|width			|number	| The width of the video, in px App（3.1.10+）、H5	||
|fps				|number	|视频帧率						|App（3.1.14+）|
|fps				|number	| Video frame rate App（3.1.14+）		||
|bitrate		|number	|视频码率，单位 kbps|App（3.1.14+）|
|bitrate		|number	| Video bit rate, unit kbps App（3.1.14+）||

**res.orientation参数说明**
**res.orientation parameter description** 

|值							|说明									|
| **value** 						| **Description** 		|
|:-							|:-									|
|up							|默认									|
|up							| default 							|
|down						|180度旋转							|
|down						| 180 degree rotation 				|
|left						|逆时针旋转90度				|
|left						| Rotate 90 degrees counterclockwise 				|
|right					|顺时针旋转90度				|
|right					| Rotate 90 degrees clockwise 				|
|up-mirrored		|同up，但水平翻转			|
|up-mirrored		| Same as up, but flipped horizontally 		|
|down-mirrored	|同down，但水平翻转		|
|down-mirrored	| Same as down, but flipped horizontally 		|
|left-mirrored	|同left，但垂直翻转		|
|left-mirrored	| Same as left, but flipped vertically 		|
|right-mirrored	|同right，但垂直翻转	|
|right-mirrored	| Same as right, but flipped vertically 	|

### uni.compressVideo(OBJECT)

压缩视频接口。开发者可指定压缩质量 quality 进行压缩。当需要更精细的控制时，可指定 bitrate、fps、和 resolution，当 quality 传入时，这三个参数将被忽略。原视频的相关信息可通过 getVideoInfo 获取。

Compressed video interface. Developers can specify compression quality quality for compression. When finer control is needed, bitrate, fps, and resolution can be specified. When quality is passed in, these three parameters will be ignored. The relevant information of the original video can be obtained through getVideoInfo.

**平台差异说明**

|App|H5|
|:-:|:-:|
|3.1.10+|x|

App端有很多插件支持视频压缩，详见[插件市场](https://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E5%8E%8B%E7%BC%A9)
There are many [plug-ins](https://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E5%8E%8B%E7%BC%A9) on the App side that support video compression

压缩完毕后如需上传到cdn，可使用uniCloud.uploadFile API，uniCloud提供了免费cdn给开发者使用，详见[https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
If you need to upload to CDN after compression, you can use uniCloud.uploadFile API. UniCloud provides free CDN for developers to use [https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)


**OBJECT 参数说明**
**OBJECT parameter description**

|属性				|类型			|默认值	|必填	|说明	|
| **Attributes** | **Types of**| **Defaults**| **Required** 	| **Description** |
|:-:				|:-:			|:-:		|:-:	|:-:	|
|src				|string		|			|是		|视频文件路径，可以是临时文件路径也可以是永久文件路径	|
|src			|string		|	| Yes | Video file path, it can be a temporary file path or a permanent file path 	|
|quality		|string		|				|是		|压缩质量	|
|quality		|string		|				| Yes 		| Compression quality 	|
|bitrate		|number		|				|是		|码率，单位 kbps|
|bitrate		|number		|				| Yes 		| Bit rate, unit kbps |
|fps				|number		|				|是		|帧率	|
|fps				|number		|				| Yes 		| Frame rate 	|
|resolution	|number		|				|是		|相对于原视频的分辨率比例，取值范围(0, 1]	|
|resolution	|number		|				| Yes 		| Relative to the resolution ratio of the original video, the value range is (0, 1) |
|success		|function	|				|否		|接口调用成功的回调函数		|
|success		|function	|				|no		| Callback function for successful interface call 	|
|fail				|function	|				|否		|接口调用失败的回调函数|
|fail				|function	|				|no		| Callback function for interface call failure |
|complete		|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete		|function	|				|no	| The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**quality可取值**
**quality value** 

|值			|说明	|
| **value** 			| **Description** 	|
|:-			|:-		|
|low		|低		|
|low		| low 	|
|medium	|中		|
|medium	| in 		|
|high		|高		|
|high		| high 		|

**success 返回参数说明**
**success return parameter description** 

|参数名				|类型		|说明		|
| **parameter name** 				| **Types of** 	| **Description** 	|
|:-						|:-			|:-			|
|tempFilePath	|string	|压缩后的临时文件地址	|
|tempFilePath	|string	| Temporary file address after compression 	|
|size				|string	|压缩后的大小，单位 kB|
|size				|string	| The compressed size, in kB |

