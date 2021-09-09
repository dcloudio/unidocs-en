### uni.chooseImage(OBJECT)
从本地相册选择图片或使用相机拍照。
Choose a picture from a local album or take a photo with the camera.

App端如需要更丰富的相机拍照API（如直接调用前置摄像头），参考[plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)
If you need a richer camera API on the App side (such as directly calling the front camera) [plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| parameter name | Types of  | Required | Description   | Platform difference description      |
|:-|:-|:-|:-|:-|
|count|Number|否|最多可以选择的图片张数，默认9|见下方说明|
|count|Number|no| The maximum number of pictures that can be selected, the default is 9 | See description below                                        |
|sizeType|Array&lt;String&gt;|否|original 原图，compressed 压缩图，默认二者都有|App|
|sizeType|Array&lt;String&gt;| no       | original original image, compressed image, both have by default |  |
|extension|Array&lt;String&gt;|否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|H5(HBuilder X2.9.9+)|
|extension|Array&lt;String&gt;| no       | According to the file extension filtering, each item cannot be an empty string. No filtering by default. | H5(HBuilder X2.9.9+)                                         |
|sourceType|Array&lt;String&gt;|否|album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项||
|sourceType|Array&lt;String&gt;| no       | album Select pictures from the album, camera uses the camera, and both are available by default. If you need to directly turn on the camera or directly select the album, please use only one option ||
|crop|Object|否|图像裁剪参数，设置后 sizeType 失效|App 3.1.19+|
|crop|Object|否|图像裁剪参数，设置后 sizeType 失效|App 3.1.19+|
|success|Function|是|成功则返回图片的本地文件路径列表 tempFilePaths||
|success|Function| Yes      | If successful, return the list of local file paths of the picture tempFilePaths ||
|fail|Function|否|接口调用失败的回调函数|App|
|fail|Function| no       | Callback function for interface call failure                 |  App                                            |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

**crop 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|quality|Number|否|取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。|
|width|Number|是|裁剪的宽度，单位为px，用于计算裁剪宽高比。|
|height|Number|是|裁剪的高度，单位为px，用于计算裁剪宽高比。|
|resize|Boolean|否|是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示|

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- The performance of the count value on the H5 platform is based on the browser's own specifications. According to the current test results, only single selection/multiple selection can be restricted, but the number cannot be restricted. Moreover, few browsers on actual mobile phones can support multiple selection.
- sourceType 在H5端对应`input`的`capture`属性，设置为`['album']`无效，依然可以使用相机。
- In H5 sourceType end corresponding to `input`the `capture`attribute is set to `['album']`invalid, you can still use the camera.
- 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user grants the app the permission to access the photo album or camera
- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- If you need to select non-media files on the App side, you can search for file options in the plug-in market . Among them, Native.js can be used on the Android side without native plug-ins, while the iOS side requires native plug-ins.
- 选择照片大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。


**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter     | Types of   | Description  |
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|图片的本地文件路径列表|
|tempFilePaths|Array&lt;String&gt;|List of local file paths for pictures|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|图片的本地文件列表，每一项是一个 File 对象|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|The local file list of the picture, each item is a File object|

**File 对象结构如下**
**The File object structure is as follows** 

|参数|类型|说明|
| parameter | Types of | Description                                |
|:-|:-|:-|
|path|String|本地文件路径|
|path|String|Local file path|
|size|Number|本地文件大小，单位：B|
|size|Number|Local file size, unit: B|
|name|String|包含扩展名的文件名称，仅H5支持|
|name|String|File name with extension, only H5 supports|
|type|String|文件类型，仅H5支持|
|type|String|File type, only supported by H5|

**示例**

```javascript
uni.chooseImage({
	count: 6, //默认9
	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	sourceType: ['album'], //从相册选择
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});
```

### uni.previewImage(OBJECT) @unipreviewimageobject
预览图片。
preview picture.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| parameter name   | Types of  | Required  | Description  | Platform difference description |
|:-|:-|:-|:-|:-|
|current|String/Number|详见下方说明|详见下方说明||
|current|String/Number| See the description below for details | See the description below for details                        ||
|urls|Array&lt;String&gt;|是|需要预览的图片链接列表||
|urls|Array&lt;String&gt;| Yes    | List of image links to preview  ||
|indicator|String|否|图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。|App|
|indicator|String| no  | Picture indicator style, possible values: "default"-bottom dot indicator; "number"-top number indicator; "none"-no indicator displayed. |App|
|loop|Boolean|否|是否可循环预览，默认值为 false|App|
|loop|Boolean| no   | Whether to cycle preview, the default value is false         |App|
|longPressActions|Object|否|长按图片显示操作菜单，如不填默认为**保存相册**|App 1.9.5+|
|longPressActions|Object| no                                    | Long press the picture to display the operation menu, if you don’t fill it, the default is to **save the album** |App 1.9.5+|
|success|Function|否|接口调用成功的回调函数||
|success|Function| no    | Callback function for successful interface call   ||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function| no   | Callback function for interface call failure   ||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function| no   | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

**current 参数说明**
**current parameter description** 

> 1.9.5+ 支持传图片在 urls 中的索引值
> 1.9.5+ Support uploading the index value of pictures in urls 

current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。**App平台在 1.9.5至1.9.8之间，current为必填。不填会报错**
current is the link/index value of the currently displayed picture. If the value is not filled or the value is invalid, it is the first picture of urls. **App platform is between 1.9.5 and 1.9.8, current is required. If you don't fill it, it will report an error**

注意，当 urls 中有重复的图片链接时：
Note that when there are duplicate image links in urls:

- 传链接，预览结果始终显示该链接在 urls 中第一次出现的位置。
- After uploading a link, the preview result always shows the first position of the link in urls.
- 传索引值会保留原始的 urls 不会做去重处理。
- Pass the index value will keep the original urls without de-duplication.

举例说明：
 for example:

一组图片 `[A, B1, C, B2, D]`，其中 B1 与 B2 的图片链接是一样的。
A set of pictures `[A, B1, C, B2, D]`, where the picture links of B1 and B2 are the same. 

- 传 B2 的链接，预览的结果是 B1，前一张是 A，下一张是 C。
- Pass the link of B2, the preview result is B1, the previous one is A, and the next one is C.
- 传 B2 的索引值 3，预览的结果是 B2，前一张是 C，下一张是 D。
- Pass the index value of B2 to 3, the preview result is B2, the previous one is C, and the next one is D. At this time, on the WeChat/Baidu/ByteDance applet platform, the final incoming urls are `[A, C, B2, D]`filtered out B1 that is duplicated with B2.

**longPressActions 参数说明**
**longPressActions parameter description** 

|参数|类型|必填|说明|
| parameter | Types of            | Required | Description|
|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;|是|按钮的文字数组|
|itemList|Array&lt;String&gt;| Yes      | The text array of the button                           |
|itemColor|String|否|按钮的文字颜色，字符串格式，默认为"#000000"|
|itemColor|String| no  | The text color of the button, string format, the default is "#000000" |
|success|Function|否|接口调用成功的回调函数，详见返回参数说明|
|success|Function| no       | Callback function for successful interface call, see the return parameter description for details |
|fail|Function|否|接口调用失败的回调函数|
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明**
**success return parameter description** 

|参数|类型|说明|
| parameter | Types of | Description                                      |
|:-|:-|:-|
|index|Number|用户长按图片的索引值|
|index|Number|User long presses the index value of the picture|
|tapIndex|Number|用户点击按钮列表的索引值|
|tapIndex|Number|The index value of the user clicked button list|

**示例**

```javascript
// 从相册选择6张图
uni.chooseImage({
	count: 6,
	sizeType: ['original', 'compressed'],
	sourceType: ['album'],
	success: function(res) {
		// 预览图片
		uni.previewImage({
			urls: res.tempFilePaths,
			longPressActions: {
				itemList: ['发送给朋友', '保存图片', '收藏'],
				success: function(data) {
					console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			}
		});
	}
	});
```

**TIPS**
- 在非H5端，previewImage是原生实现的，界面自定义灵活度较低。
- On the non-H5 side, previewImage is implemented natively, and the interface customization flexibility is low.
- 插件市场有前端实现的previewImage，性能低于原生实现，但界面可随意定义；插件市场也有适于App端的previewImage原生插件，提供了更多功能。
- The plug-in market has a previewImage implemented on the front end, which has lower performance than the native implementation, but the interface can be defined at will; the plug-in market also has a previewImage native plug-in suitable for App, which provides more functions.


### uni.getImageInfo(OBJECT)

获取图片信息。
Get picture information.

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT 参数说明**
**OBJECT parameter description** 

|参数名|类型|必填|说明|
| parameter name | Types of | Required | Description        |
|:-|:-|:-|:-|
|src|String|是|图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径|
|src|String| Yes      | The path of the picture, which can be a relative path, temporary file path, storage file path, network picture path |
|success|Function|否|接口调用成功的回调函数|
|success|Function| no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明**
**success return parameter description** 

|参数名|类型|说明|平台差异说明|
| parameter name | Types of | Description      | Platform difference description |
|:-|:-|:-|:-|
|width|Number|图片宽度，单位px||
|width|Number|Image width, unit px||
|height|Number|图片高度，单位px||
|height|Number|Image height, unit px||
|path|String|返回图片的本地路径||
|path|String|Return the local path of the picture||
|orientation|String|返回图片的方向，有效值见下表|App|
|orientation|String|Return the direction of the picture, see the table below for valid values|App|
|type|String|返回图片的格式|App|
|type|String|Return image format|App|

**orientation 参数说明**
**orientation parameter description** 

|枚举值|说明|
| Enumerated value | Description                            |
|:-|:-|
|up|默认|
|up|default|
|down|180度旋转|
|down|180 degree rotation|
|left|逆时针旋转90度|
|left|Rotate 90 degrees counterclockwise|
|right|顺时针旋转90度|
|right|Rotate 90 degrees clockwise|
|up-mirrored|同up，但水平翻转|
|up-mirrored|Same as up, but flipped horizontally|
|down-mirrored|同down，但水平翻转|
|down-mirrored|Same as down, but flipped horizontally|
|left-mirrored|同left，但垂直翻转|
|left-mirrored|Same as left, but flipped vertically|
|right-mirrored|同right，但垂直翻转|
|right-mirrored|Same as right, but flipped vertically|

**示例**

```javascript
uni.chooseImage({
	count: 1,
	sourceType: ['album'],
	success: function (res) {
		uni.getImageInfo({
			src: res.tempFilePaths[0],
			success: function (image) {
				console.log(image.width);
				console.log(image.height);
			}
		});
	}
});
```

### uni.saveImageToPhotosAlbum(OBJECT)
保存图片到系统相册。
Save the picture to the system album.

**平台差异说明**
**平台差异说明**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明**
**OBJECT parameter description** 

|参数名|类型|必填|说明|
| parameter name | Types of | Required | Description   |
|:-|:-|:-|:-|
|filePath|String|是|图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
|filePath|String| Yes      | Picture file path, it can be temporary file path or permanent file path, network picture path is not supported |
|success|Function|否|接口调用成功的回调函数|
|success|Function| no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明**
**success return parameter description** 

|参数名|类型|说明|
| parameter name | Types of | Description                                                  |
|:-|:-|:-|
|path|String|保存到相册的图片路径，仅 App 3.0.5+ 支持|
|path|String|The path of the picture saved to the album, only supported by App 3.0.5+|
|errMsg|String|调用结果|
|errMsg|String|Call result|

**注意**

- 可以通过用户授权API来判断用户是否给应用授予相册的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user grants the app permission to access the album [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- H5没有API可触发保存到相册行为，下载图片时浏览器会询问图片存放地址。
- H5 has no API to trigger the save to album behavior. When downloading a picture, the browser will ask for the picture storage address.

**示例代码：**
** Example code ：**

```javascript
uni.chooseImage({
	count: 1,
	sourceType: ['camera'],
	success: function (res) {
		uni.saveImageToPhotosAlbum({
			filePath: res.tempFilePaths[0],
			success: function () {
				console.log('save success');
			}
		});
	}
});
```

# uni.compressImage(OBJECT)

压缩图片接口，可选压缩质量
Compressed picture interface, optional compression quality

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明**
**OBJECT parameter description** 

| 属性 | 类型 | 默认值 | 必填 | 说明 | 平台差异说明 |
| Attributes | Types of | Defaults | Required | Description | Platform difference description |
| :- | :- | :- | :- | :- | :- |
| src | String |  | 是 | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 ||
| src | String |  | Yes      | Picture path, picture path, can be relative path, temporary file path, storage file path ||
| quality | Number | 80 | 否 | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） ||
| quality | Number | 80 | no       | Compression quality, range from 0 to 100, the smaller the value, the lower the quality, and the higher the compression rate (only valid for jpg) ||
| width | String | auto | 否 | 缩放图片的宽度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）|App 3.0.0+|
| width | String | auto | no       | Scale the width of the image, support pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", which is calculated according to the zoom ratio of the height and the height of the source image, if the height is not set, use Source image height) |App 3.0.0+|
| height | String | auto | 否 | 缩放图片的高度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）|App 3.0.0+|
| height | String | auto | no       | The height of the zoomed picture, support pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", which is calculated according to the zoom ratio of height and source image height, if height is not set, use Source image height) |App 3.0.0+|
| rotate | Number | 0 | 否 | 旋转度数，范围0～360 |App 3.0.0+||
| success | Function |  | 否 | 接口调用成功的回调函数 ||
| success | Function |  | no       | Callback function for successful interface call              ||
| fail | Function |  | 否 | 接口调用失败的回调函数 ||
| fail | Function |  | no       | Callback function for interface call failure                 ||
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） ||
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||

**success 返回参数说明**
**success return parameter description** 

| 属性 | 类型 | 说明 |
| Attributes   | Types of | Description   |
| :- | :- | :- |
| tempFilePath | String | 压缩后图片的临时文件路径 |
| tempFilePath | String | Temporary file path of compressed image |

**示例代码：**
**Sample code:** 

```js
uni.compressImage({
  src: '/static/logo.jpg',
  quality: 80,
  success: res => {
    console.log(res.tempFilePath)
  }
})
```
