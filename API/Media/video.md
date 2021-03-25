### uni.chooseVideo(OBJECT)
Take a video or select a video from the phone album, and return to the temporary file path of the video.

**OBJECT parameter description** 

| parameter name | Types of            | Required | Description                                                  | Platform difference description                              |
|:-|:-|:-|:-|:-|
|sourceType|Array&lt;String&gt;| no       | album Select a video from the album, and the camera uses the camera to shoot, the default is: ['album','camera'] ||
|extension|Array&lt;String&gt;| no       | According to the file extension filtering, each item cannot be an empty string. No filtering by default. |H5(HBuilder X2.9.9+)|
|compressed|Boolean| no       | Whether to compress the selected video source file, the default value is true and compression is required. |  |
|maxDuration|Number| no       | The maximum recording time of a video, in seconds. Supports up to 60 seconds. | APP platform 1.9.7+ (iOS support, Android depends on whether the camera component of the ROM implements this function. If this function is not implemented, this attribute is ignored.) |
|camera|String| no       | 'front','back', default'back'                                | APP                                     |
|success|Function| no       | The interface is successfully called, and the temporary file path of the video file is returned. For details, see the return parameter description. ||
|fail|Function| no       | Callback function for interface call failure                 ||
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

 **success return parameter description** 

| parameter    | Types of | Description                              | Explanation of platform differences |
|:-|:-|:-|:-|
|tempFilePath|String|Temporary file path of selected video||
|tempFile|File| Selected video file                      | Only H5 (2.6.15+) supported         |
|duration|Number| The duration of the selected video, in s | APP 2.1.0+, H5, WeChat |
|size|Number| The data size of the selected video      | APP 2.1.0+, H5, WeChat |
|height|Number| Returns the height of the selected video | APP 2.1.0+, H5, WeChat |
|width|Number| Returns the width of the selected video  | APP 2.1.0+, H5, WeChat |
|name|String| File name including extension            | Only H5 support                     |

 **note:** 

* The video selected by the app on the Android side only supports up to 180MB. If you want to break through this limit, please use the native plug-in
* The temporary path of the file can be used normally during the current startup of the application. If you need to save it for a long time, you need to call uni.saveFile actively and you can access it when the application is started next time.
* Camera cannot take effect under some Android phones because the system ROM is not supported. You can switch between operations after opening the shooting interface.
* You can use the user authorization API to determine whether the user grants the app the permission to access the photo album or camera
* If you need to further compress the video size under the App, you can search for video compression plugins in the plugin market
* If you need to upload to CDN, you can use uniCloud.uploadFile API. UniCloud provides free CDN for developers to use

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
				sourceType: ['camera', 'album'],
				success: function (res) {
					self.src = res.tempFilePath;
				}
			});
		}
	}
}
```

### [uni.chooseMedia(OBJECT)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)

Take or select a picture or video from the phone album.

If you select and upload non-image and video files

 **OBJECT parameter description** 

| parameter name | Types of             | Defaults                               | Required | Description                                                  |
|:-|:-|:-|:-|:-|
|count|Number| 9 (note: ios cannot be greater than 9) | no       | Maximum number of files that can be selected                 |
|mediaType|Array.&lt;string&gt;|['image', 'video']| no       | file type                                                    |
|sourceType|Array.&lt;string&gt;|['album', 'camera']| no       | Selected source of pictures and videos                       |
|maxDuration|Number|10| no       | The maximum recording time of a video, in seconds. The time range is between 3s and 30s |
|sizeType|Array.&lt;string&gt;|['original', 'compressed']| no       | Only valid when mediaType is image, whether to compress the selected file |
|camera|String|'back'| no       | Only valid when sourceType is camera, use front or rear camera |
|success|function|| no       | Callback function for successful interface call              |
|fail|function|| no       | Callback function for interface call failure                 |
|complete|function|| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **OBJECT.mediaType legal value** 

| value | Description                                      |
|:-|:-|
|image|Only take pictures or select pictures from album|
|video|Can only shoot video or select video from album	|

 **OBJECT.sourceType legal value** 

| value  | Description             |
|:-|:-|
|album|Select from album|
|camera|Use the camera to shoot	|

 **OBJECT.camera legal value** 

| value | Description          |
|:-|:-|
|back|Use the rear camera|
|front|Use the front camera	|

 **success return parameter description** 

| parameter name | Types of             | Description                              |
|:-|:-|:-|
|tempFiles|Array.&lt;string&gt;|Local temporary file list|
|type|String|File type, valid values are image, video|

 **Structure of res.tempFiles** 

| **parameter name** 						| **Types of** 		| **Description** 												|
|:-								|:-			|:-													|
|tempFilePath			|String	| Local temporary file path (local path) |
|size							|Number	| Local temporary file size, unit B 		|
|duration					|Number	| Video duration 					|
|height						|Number	| The height of the video 									|
|width						|Number	| Video width 									|
|thumbTempFilePath|String	| Video thumbnail temporary file path 			|


 **Example** 

```javascript
uni.chooseMedia({
  count: 9,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success(res) {
    console.log(res.tempFilest)
  }
})

```

**Tips**

* If you need to upload to CDN, you can use uniCloud.uploadFile API. UniCloud provides free CDN for developers to use
* The developer reminds that the number of files that can be selected for the WeChat applet ios real machine cannot be greater than 9


### uni.saveVideoToPhotosAlbum(OBJECT)
 Save the video to the system album. 

 **OBJECT parameter description** 

| parameter name | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|filePath|String| Yes      | Video file path, it can be a temporary file path or a permanent file path |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails)） |

 **success return parameter description** 

| parameter name | Types of | Description |
|:-|:-|:-|
|errMsg|String|Call result|

 **note** 

- You can use the user authorization API to determine whether the user grants the app write permission for the album

** **Example** **

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

 Get video details 

  **OBJECT parameter description** 

|Attributes			|Types of			| TDefaults	| Required 	| Description										|
|:-:			|:-:			|:-:		|:-:	|:-:																									|
|src			|string		|-			| Yes 		| Video file path, it can be a temporary file path or a permanent file path 	|
|success	|function	|-			| no 		| Callback function for successful interface call 	|
|fail			|function	|-			| no 		| Callback function for interface call failure 			|
|complete	|function	|-			| no 		| The callback function for the end of the interface call (the call will be executed if it succeeds or fails) 			|

 **success return parameter description** 

| **parameter name** 			| **Types of** 	| **Description** 								|
|:-					|:-			|:-									|
|orientation|string	| Screen orientation 						|
|type				|string	| Video format 						|
|duration		|number	| Video length 						|
|size				|number	| Video size, unit kB 	|
|height			|number	| Video length, unit px 	|
|width			|number	| The width of the video, in px 	|
|fps				|number	| Video frame rate 					|
|bitrate		|number	| Video bit rate, unit kbps |

 **res.orientation parameter description** 

| **value** 						| **Description** 									|
|:-							|:-										|
|up							| default 									|
|down						| 180 degree rotation 						|
|left						| Rotate 90 degrees counterclockwise 				|
|right					| Rotate 90 degrees clockwise 				|
|up-mirrored		| Same as up, but flipped horizontally 		|
|down-mirrored	| Same as down, but flipped horizontally 		|
|left-mirrored	| Same as left, but flipped vertically 		|
|right-mirrored	| Same as right, but flipped vertically 	|

### uni.compressVideo(OBJECT)

Compressed video interface. Developers can specify compression quality quality for compression. When finer control is needed, bitrate, fps, and resolution can be specified. When quality is passed in, these three parameters will be ignored. The relevant information of the original video can be obtained through getVideoInfo.

There are many plug-ins on the App side that support video compression

If you need to upload to CDN after compression, you can use uniCloud.uploadFile API. UniCloud provides free CDN for developers to use

**OBJECT parameter description**

| **Attributes** 				| **Types of** 			| **Defaults** 	| **Required** 	| **Description** 																									|
|:-:				|:-:			|:-:		|:-:	|:-:																									|
|src			|string		|	| Yes | Video file path, it can be a temporary file path or a permanent file path 	|
|quality		|string		|				| Yes 		| Compression quality 	|
|bitrate		|number		|				| Yes 		| Bit rate, unit kbps |
|fps				|number		|				| Yes 		| Frame rate 	|
|resolution	|number		|				| Yes 		| Relative to the resolution ratio of the original video, the value range is (0, 1) |
|success		|function	|				|no		| Callback function for successful interface call 	|
|fail				|function	|				|no		| Callback function for interface call failure |
|complete		|function	|				|no	| The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **quality value** 

| **value** 			| **Description** 	|
|:-			|:-		|
|low		| low 	|
|medium	| in 		|
|high		| high 		|

 **success return parameter description** 

| **parameter name** 				| **Types of** 	| **Description** 									|
|:-						|:-			|:-										|
|tempFilePath	|string	| Temporary file address after compression 	|
|size					|string	| The compressed size, in kB |

### uni.openVideoEditor(OBJECT)

Open the video editor

 **OBJECT parameter description** 

| **Attributes** 			| **Types of** 			| **Defaults** 	| **Required** 	| **Description** 																							|
|:-:			|:-:			|:-:		|:-:	|:-:																							|
|filePath	|string		|-			| Yes 		| The path of the video source, only the local path is supported |
|success	|function	|-			|no		| Callback function for successful interface call |
|fail			|function	|-			|no		| Callback function for interface call failure 	|
|complete	|function	|-			|no	| The callback function for the end of the interface call (the call will be executed if it succeeds or fails) 	|

 **success return parameter description** 

| **parameter name** 				| **Types of** 		| **Description** 																				|
|:-						|:-			|:-																						|
|duration			|number	| The length of the video file generated after editing, in milliseconds (ms) 		|
|size					|number	| The size of the video file generated after editing, in bytes (byte) 	|
|tempFilePath	|string	| Temporary path of the video file generated after editing 							|
|tempThumbPath|string	| Temporary path of the thumbnail file generated after editing 							|