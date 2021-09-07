### uni.chooseFile(OBJECT)
从本地选择文件。
Select the file locally.

本API主要用于选择非媒体文件，如果选择的文件是媒体文件，另有3个专用API：
This API is mainly used to select non-media files. If the selected file is a media file, there are 3 dedicated APIs:
- [图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
- [视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)
- [多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|x|√`(HBuilder X2.9.9+)`|

- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- If you need to select non-media files on the App side, you can search for file options in the plug-in market [File selection](https://ext.dcloud.net.cn/search?q=文件选择), Among them, Native.js can be used on the Android side without native plug-ins, while the iOS side requires native plug-ins.
- App端如果想选择下载到`_doc`、`_downloads`、`_documents`等plus.io控制的目录下的文件，可通过[plus.io Api](https://www.html5plus.org/doc/zh_cn/io.html)，自己做选择框。
- App end if you want to choose to download `_doc`, `_downloads`, `_documents`file directories, etc. plus.io control, by [plus.io Api](https://www.html5plus.org/doc/zh_cn/io.html), make their own selection box.
- 选择文件大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|默认值|必填|说明|平台差异说明|
| parameter name | Types of | Defaults    | Required | Description | Platform difference description |
|:-|:-|:-|:-|:-|:-|
|count|Number|100|否|最多可以选择的文件数量|见下方说明|
|count|Number|100| no       | Maximum number of pictures that can be selected              | See description below           |
|type|String|'all'|否|所选的文件的类型|见下方说明|
|type|String|'all'| no       | Type of selected file                                        | See description below           |
|extension|Array&lt;String&gt;||否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|见下方说明|
|extension|Array&lt;String&gt;|| no       | According to the file extension filtering, each item cannot be an empty string. No filtering by default. | See description below           |
|sourceType|Array&lt;String&gt;|['album','camera']|否|（仅在type为`image`或`video`时可用）`album` 从相册选图，`camera` 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项||
|sourceType|Array&lt;String&gt;|['album','camera']| no       | (Only available when the type is `image`or `video`) `album`Select pictures from the album and `camera`use the camera. By default, both are available. If you need to directly turn on the camera or directly select the album, please use only one option ||
|success|Function||是|成功则返回图片的本地文件路径列表 `tempFilePaths`||
|success|Function|| Yes      | Return the list of local file paths of the picture if successful `tempFilePaths` ||
|fail|Function||否|接口调用失败的回调函数||
|fail|Function|| no       | Callback function for interface call failure                 ||
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- The performance of the count value on the H5 platform is based on the browser's own specifications. According to the current test results, only single selection/multiple selection can be restricted, but the number cannot be restricted. Moreover, few browsers on actual mobile phones can support multiple selection.
- sourceType 在H5端对应`input`的`capture`属性，设置为`['album']`无效，依然可以使用相机。
- In H5 sourceType end corresponding to `input`the `capture`attribute is set to `['album']`invalid, you can still use the camera.
- extension暂只支持文件后缀名，例如`['.zip','.exe','.js']`，不支持`application/msword`等类似值
- extension only supports file extensions temporarily, for example `['.zip','.exe','.js']`, it does not support `application/msword`similar values

**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**
**Note：The temporary path of the file can be used normally during the current startup of the application. If you need to save it permanently, you need to call it [uni.saveFile](api/file/file?id=savefile), Can only be accessed when the app is launched next time.**

**OBJECT.type 的合法值**
**Legal value of OBJECT.type**

|值|说明|
|value|Description|
|:-|:-|
|all|从所有文件选择|
|all|Select from all files|
|video|只能选择视频文件|
|video|Only video files can be selected|
|image|只能选择图片文件|
|image|Only image files can be selected|

**Tips**

- 如果type属性和extension同时存在，例如`{type:'image',extension:['.png','.jpg']}`，则会选择`image/png,image/jpg`文件
- If the type attribute and extension exist at the same time, for example `{type:'image',extension:['.png','.jpg']}`, the `image/png,image/jpg`file will be selected
- 如果只配置extension属性，例如`{extension:['.doc','.xlsx','.docx']}`，则会选择`.doc,.xlsx,.docx`文件，详情见[`accept属性`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/accept)
- If only the extension attribute is configured, for example`{extension:['.doc','.xlsx','.docx']}`, the`.doc,.xlsx,.docx`file will be selected, For Details to see [`accept Attributes`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/accept)


**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter| Types | Description |
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|文件的本地文件路径列表|
|tempFilePaths|Array&lt;String&gt;|List of local file paths for pictures|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|文件的本地文件列表，每一项是一个 File 对象|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|The local file list of the picture, each item is a File object|

**File 对象结构如下**
**The File object structure is as follows** 

|参数|类型|说明|
| parameter | Types of | Description   |
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
**Example**

```javascript
uni.chooseFile({
  count: 6, //默认100
  extension:['.zip','.doc'],
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});

// 选择图片文件
uni.chooseFile({
  count: 10,
  type: 'image',
  success (res) {
    // tempFilePath可以作为img标签的src属性显示图片
    const tempFilePaths = res.tempFiles
  }
})
```
