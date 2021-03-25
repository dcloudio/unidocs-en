### uni.chooseImage(OBJECT)
Choose a picture from a local album or take a photo with the camera.

If you need a richer camera API on the App side (such as directly calling the front camera)

**OBJECT parameter description**

| parameter name | Types of            | Required | Description                                                  | Platform difference description                              |
|:-|:-|:-|:-|:-|
|count|Number|no| The maximum number of pictures that can be selected, the default is 9 | See description below                                        |
|sizeType|Array&lt;String&gt;| no       | original original image, compressed image, both have by default |  |
|extension|Array&lt;String&gt;| no       | According to the file extension filtering, each item cannot be an empty string. No filtering by default. | H5(HBuilder X2.9.9+)                                         |
|sourceType|Array&lt;String&gt;| no       | album Select pictures from the album, camera uses the camera, and both are available by default. If you need to directly turn on the camera or directly select the album, please use only one option ||
|success|Function| Yes      | If successful, return the list of local file paths of the picture tempFilePaths ||
|fail|Function| no       | Callback function for interface call failure                 | Mini Program, App                                            |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

**Tips**

- The performance of the count value on the H5 platform is based on the browser's own specifications. According to the current test results, only single selection/multiple selection can be restricted, but the number cannot be restricted. Moreover, few browsers on actual mobile phones can support multiple selection.
- In H5 sourceType end corresponding to `input`the `capture`attribute is set to `['album']`invalid, you can still use the camera.
- You can use the user authorization API to determine whether the user grants the app the permission to access the photo album or camera
- If you need to select non-media files on the App side, you can search for file options in the plug-in market . Among them, Native.js can be used on the Android side without native plug-ins, while the iOS side requires native plug-ins.

**success return parameter description**

| parameter     | Types of                               | Description                                                  |
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|List of local file paths for pictures|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|The local file list of the picture, each item is a File object|

 **The File object structure is as follows** 

| parameter | Types of | Description                                |
|:-|:-|:-|
|path|String|Local file path|
|size|Number|Local file size, unit: B|
|name|String|File name with extension, only H5 supports|
|type|String|File type, only supported by H5|

 **Example** 

```javascript
uni.chooseImage({
	count: 6, //Default 9 
	sizeType: ['original', 'compressed'], //You can specify whether it is the original image or the compressed image, the default is both 
	sourceType: ['album'], //Select from album 
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});
```

### uni.previewImage(OBJECT) @unipreviewimageobject
preview picture.

**OBJECT parameter description**

| parameter name   | Types of            | Required                              | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|
|current|String/Number| See the description below for details | See the description below for details                        ||
|urls|Array&lt;String&gt;| Yes                                   | List of image links to preview                               ||
|indicator|String| no                                    | Picture indicator style, possible values: "default"-bottom dot indicator; "number"-top number indicator; "none"-no indicator displayed. |App|
|loop|Boolean| no                                    | Whether to cycle preview, the default value is false         |App|
|longPressActions|Object| no                                    | Long press the picture to display the operation menu, if you don’t fill it, the default is to **save the album** |App 1.9.5+|
|success|Function| no                                    | Callback function for successful interface call              ||
|fail|Function| no                                    | Callback function for interface call failure                 ||
|complete|Function| no                                    | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

 **current parameter description** 

>  1.9.5+ Support uploading the index value of pictures in urls 

current is the link/index value of the currently displayed picture. If the value is not filled or the value is invalid, it is the first picture of urls. **App platform is between 1.9.5 and 1.9.8, current is required. If you don't fill it, it will report an error**

Note that when there are duplicate image links in urls:

- After uploading a link, the preview result always shows the first position of the link in urls.
- Pass the index value. In the WeChat/Baidu/ByteDance applet platform, the value that is duplicated with the corresponding image link before the index value in the incoming urls will be filtered out. Other platforms will keep the original urls without de-duplication.

 for example: ：

 A set of pictures `[A, B1, C, B2, D]`, where the picture links of B1 and B2 are the same. 

- Pass the link of B2, the preview result is B1, the previous one is A, and the next one is C.
- Pass the index value of B2 to 3, the preview result is B2, the previous one is C, and the next one is D. At this time, on the WeChat/Baidu/ByteDance applet platform, the final incoming urls are `[A, C, B2, D]`filtered out B1 that is duplicated with B2.

 **longPressActions parameter description** 

| parameter | Types of            | Required | Description                                                  |
|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;| Yes      | The text array of the button                                 |
|itemColor|String| no       | The text color of the button, string format, the default is "#000000" |
|success|Function| no       | Callback function for successful interface call, see the return parameter description for details |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **success return parameter description** 

| parameter | Types of | Description                                      |
|:-|:-|:-|
|index|Number|User long presses the index value of the picture|
|tapIndex|Number|The index value of the user clicked button list|

**示例**

```javascript
// Select 6 pictures from the album 
uni.chooseImage({
	count: 6,
	sizeType: ['original', 'compressed'],
	sourceType: ['album'],
	success: function(res) {
		// preview picture 
		uni.previewImage({
			urls: res.tempFilePaths,
			longPressActions: {
				itemList: ['Send to friends ', 'save Picture ', 'Favorites '],
				success: function(data) {
					console.log('The' + (data.tapIndex + 1) + 'button is selected,the' + (data.index + 1) + 'image is selected');
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
- On the non-H5 side, previewImage is implemented natively, and the interface customization flexibility is low.
- The plug-in market has a previewImage implemented on the front end, which has lower performance than the native implementation, but the interface can be defined at will; the plug-in market also has a previewImage native plug-in suitable for App, which provides more functions.


### uni.getImageInfo(OBJECT)

Get picture information.

To obtain network picture information under the applet, you need to configure the download domain name whitelist to take effect.

 **OBJECT parameter description** 

| parameter name | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|src|String| Yes      | The path of the picture, which can be a relative path, temporary file path, storage file path, network picture path |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **success return parameter description** 

| parameter name | Types of | Description                                                  | Platform difference description |
|:-|:-|:-|:-|
|width|Number|Image width, unit px||
|height|Number|Image height, unit px||
|path|String|Return the local path of the picture||
|orientation|String|Return the direction of the picture, see the table below for valid values|App、Mini Program|
|type|String|Return image format|App、Mini Program|

 **orientation parameter description** 

| Enumerated value | Description                            |
|:-|:-|
|up|default|
|down|180 degree rotation|
|left|Rotate 90 degrees counterclockwise|
|right|Rotate 90 degrees clockwise|
|up-mirrored|Same as up, but flipped horizontally|
|down-mirrored|Same as down, but flipped horizontally|
|left-mirrored|Same as left, but flipped vertically|
|right-mirrored|Same as right, but flipped vertically|

 **Example** 

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
Save the picture to the system album.

 **OBJECT parameter description** 

| parameter name | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|filePath|String| Yes      | Picture file path, it can be temporary file path or permanent file path, network picture path is not supported |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **success return parameter description** 

| parameter name | Types of | Description                                                  |
|:-|:-|:-|
|path|String|The path of the picture saved to the album, only supported by App 3.0.5+|
|errMsg|String|Call result|

**note**

- You can use the user authorization API to determine whether the user grants the app permission to access the album 
- H5 has no API to trigger the save to album behavior. When downloading a picture, the browser will ask for the picture storage address.

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

Compressed picture interface, optional compression quality

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  | Platform difference description |
| :- | :- | :- | :- | :- | :- |
| src | String |  | Yes      | Picture path, picture path, can be relative path, temporary file path, storage file path ||
| quality | Number | 80 | no       | Compression quality, range from 0 to 100, the smaller the value, the lower the quality, and the higher the compression rate (only valid for jpg) ||
| width | String | auto | no       | Scale the width of the image, support pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", which is calculated according to the zoom ratio of the height and the height of the source image, if the height is not set, use Source image height) |App 3.0.0+|
| height | String | auto | no       | The height of the zoomed picture, support pixel value (such as "100px"), percentage (such as "50%"), automatic calculation (such as "auto", which is calculated according to the zoom ratio of height and source image height, if height is not set, use Source image height) |App 3.0.0+|
| success | Function |  | no       | Callback function for successful interface call              ||
| fail | Function |  | no       | Callback function for interface call failure                 ||
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||

 **success return parameter description** 

| Attributes   | Types of | Description                             |
| :- | :- | :- |
| tempFilePath | String | Temporary file path of compressed image |

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