### uni.chooseFile(OBJECT)
Select the file locally.

This API is mainly used to select non-media files. If the selected file is a media file, there are 3 dedicated APIs:

- Picture selection
- Video selection
- Multimedia file selection (including picture video)

 **Platform difference description** 

- If you need to select non-media files on the App side, you can search for file options in the plug-in market . Among them, Native.js can be used on the Android side without native plug-ins, while the iOS side requires native plug-ins.
- App end if you want to choose to download `_doc`, `_downloads`, `_documents`file directories, etc. plus.io control, by plus.io Api, make their own selection box.

**OBJECT parameter description**

| parameter name | Types of            | Defaults           | Required | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|:-|
|count|Number|100| no       | Maximum number of pictures that can be selected              | See description below           |
|type|String|'all'| no       | Type of selected file                                        | See description below           |
|extension|Array&lt;String&gt;|| no       | According to the file extension filtering, each item cannot be an empty string. No filtering by default. | See description below           |
|sourceType|Array&lt;String&gt;|['album','camera']| no       | (Only available when the type is `image`or `video`) `album`Select pictures from the album and `camera`use the camera. By default, both are available. If you need to directly turn on the camera or directly select the album, please use only one option ||
|success|Function|| Yes      | Return the list of local file paths of the picture if successful `tempFilePaths` ||
|fail|Function|| no       | Callback function for interface call failure                 ||
|complete|Function|| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

**Tips**

- The performance of the count value on the H5 platform is based on the browser's own specifications. According to the current test results, only single selection/multiple selection can be restricted, but the number cannot be restricted. Moreover, few browsers on actual mobile phones can support multiple selection.
- In H5 sourceType end corresponding to `input`the `capture`attribute is set to `['album']`invalid, you can still use the camera.
- extension only supports file extensions temporarily, for example `['.zip','.exe','.js']`, it does not support `application/msword`similar values

**Legal value of OBJECT.type**

| value | Description                      |
|:-|:-|
|all|Select from all files|
|video|Only video files can be selected|
|image|Only image files can be selected|

**Tips**

- If the type attribute and extension exist at the same time, for example `{type:'image',extension:['.png','.jpg']}`, the `image/png,image/jpg`file will be selected
- If only the extension attribute is configured, for example `{extension:['.doc','.xlsx','.docx']}`, the `.doc,.xlsx,.docx`file will be selected , see `accept Attributes
- In the WeChat environment, if `type="all"`the `extension`attribute is invalid

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

 example  

```javascript
uni.chooseFile({
  count: 6, //Default 100
  extension:['.zip','.doc'],
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});

// Select picture file
uni.chooseFile({
  count: 10,
  type: 'image',
  success (res) {
    // tempFilePath Can be used as the src attribute of the img tag to display the picture
    const tempFilePaths = res.tempFiles
  }
})
```

# wx.chooseMessageFile(OBJECT)

Select a file from the WeChat chat session.
