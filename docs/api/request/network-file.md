### uni.uploadFile(OBJECT)
将本地资源上传到开发者服务器，客户端发起一个 ``POST`` 请求，其中 ``content-type`` 为 ``multipart/form-data``。  
The local resources uploaded to the developer server, the client initiates a `POST`request, which `content-type`is `multipart/form-data`.

如页面通过 [uni.chooseImage](api/media/image?id=chooseimage) 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：[https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547)。
For example, after the page obtains the temporary file path of a local resource through an interface such as [uni.chooseImage](api/media/image?id=chooseimage), the local resource can be uploaded to the specified server through this interface. In addition, please refer to the selection and upload of non-image and video files: [https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547).

**推荐开发者上传到uniCloud，uniCloud提供了免费CDN和更好的易用性，包括安全的cdn直传。**
**It is recommended that developers upload to uniCloud. UniCloud provides free CDN and better ease of use, including secure CDN direct transmission. **
- uniCloud的上传API：[https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
- UniCloud upload API: [https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile](https://uniapp.dcloud.io/uniCloud/storage?id=uploadfile)
- 封装的更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud，一站式集成。
- Packaged more complete [uni-file-picker component](https://ext.dcloud.net.cn/plugin?id=4079), file selection, upload to uniCloud, one-stop integration.


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| parameter name | Types    | Required | Description  |平台差异说明|
|:-|:-|:-|:-|:-|
|url|String|是|开发者服务器 url||
| url            | String   | Yes      | Developer server url  ||
|files|Array|否|需要上传的文件列表。**使用 files 时，filePath 和 name 不生效。**|App、H5（ 2.6.15+）|
|files|Array|No|The list of files to be uploaded. **When using files, filePath and name do not take effect. **|App, H5 (2.6.15+)|
|file|File|否|要上传的文件对象。|仅H5（2.6.15+）支持|
|file|File|No|The file object to be uploaded. |Only H5 (2.6.15+) support|
|filePath|String|是|要上传文件资源的路径。||
|filePath|String|is|The path of the file resource to be uploaded. ||
|name|String|是|文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容||
| name           | String   | Yes      | The key corresponding to the file, the developer can obtain the binary content of the file through this key on the server side ||
|header|Object|否|HTTP 请求 Header, header 中不能设置 Referer。||
| header        | Object   | no  | HTTP request Header, Referer cannot be set in the header. ||
|timeout|Number|否|超时时间，单位 ms|H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)|
|timeout|Number|No|Timeout time, unit ms|H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+)|
|formData|Object|否|HTTP 请求中其他额外的 form data||
| formData       | Object   | no       | Other additional form data in the HTTP request  ||
|success|Function|否|接口调用成功的回调函数||
| success        | Function | no      | Callback function for successful interface call ||
|fail|Function|否|接口调用失败的回调函数||
| fail           | Function | no       | Callback function for interface call failure  ||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||

**注意**：
**Notice**:

- App支持多文件上传，传多个文件需要反复调用本API。所以跨端的写法就是循环调用本API。
- App supports uploading of multiple files. To transfer multiple files, you need to call this API repeatedly. Therefore, the cross-terminal writing method is to call this API cyclically.
- hello uni-app中的客服反馈，支持多图上传。[uni-app插件市场](https://ext.dcloud.net.cn/)中也有多个封装的组件。
- Customer service feedback in hello uni-app supports multi-image upload. [uni-app plug-in market](https://ext.dcloud.net.cn/) also has multiple packaged components.
- App平台选择和上传非图像、视频文件，参考[https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547)
- App platform to select and upload non-image and video files, refer to [https://ask.dcloud.net.cn/article/35547](https://ask.dcloud.net.cn/article/35547)
- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The ``timeout time'' of the network request can be configured in ``manifest.json`` [networkTimeout](/collocation/manifest?id=networktimeout).


**files参数说明**
**Files parameter description**

files 参数是一个 file 对象的数组，file 对象的结构如下：
The files parameter is an array of file objects. The structure of the file object is as follows:

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|name|String|否|multipart 提交时，表单的项目名，默认为 file|
|name|String|No|The item name of the form when multipart is submitted, the default is file|
|file|File|否|要上传的文件对象，仅H5（2.6.15+）支持|
|file|File|No|The file object to be uploaded, only supported by H5 (2.6.15+)|
|uri|String|是|文件的本地地址|
|uri|String|is|The local address of the file|

Tip:

- 如果 ``name`` 不填或填的值相同，可能导致服务端读取文件时只能读取到一个文件。
- If you `name`do not fill or fill the same values, it can lead to only read a file server to read the file.

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter  | Types  | Description |
|:-|:-|:-|
|data|String|开发者服务器返回的数据|
| data       | String | Data returned by the developer server             |
|statusCode|Number|开发者服务器返回的 HTTP 状态码|
| statusCode | Number | HTTP status code returned by the developer server |

**示例**
**Example**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		uni.uploadFile({
			url: 'https://www.example.com/upload', 
			//仅为示例，非真实的接口地址 
			//Example only, not the real interface address
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});
	}
});
```

**返回值**
**return value**

如果希望返回一个 `uploadTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return an `uploadTask`object that need to pass at least a success / fail / complete parameters. E.g:

```javascript
var uploadTask = uni.uploadFile({
	url: 'https://www.example.com/upload', 
	//仅为示例，并非真实接口地址。
	//Just an example, not the real interface address.
	complete: ()=> {}
});
uploadTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If success / fail / complete parameters are not passed in, the encapsulated Promise object will be returned.

通过 `uploadTask`，可监听上传进度变化事件，以及取消上传任务。
Pass `downloadTask`, can monitor the download progress change event, and cancel the download task.

**uploadTask 对象的方法列表**
**List of methods of the downloadTask object**

|方法|参数|说明|
| method           | parameter | Description                       |
|:-|:-|:-|
|abort||中断上传任务|
| abortion         |           | Interrupt download task           |
|onProgressUpdate|callback|监听上传进度变化|
| onProgressUpdate | callback  | Monitor download progress changes |


**onProgressUpdate 返回参数说明**
**onProgressUpdate return parameter description**

|参数|类型|说明|
| parameter                 | Types of | Description |
|:-|:-|:-|
|progress|Number|上传进度百分比|
| progress                  | Number   | Download progress percentage                               |
|totalBytesSent|Number|已经上传的数据长度，单位 Bytes|
| totalBytesWritten         | Number   | The length of the downloaded data, in Bytes                |
|totalBytesExpectedToSend|Number|预期需要上传的数据总长度，单位 Bytes|
| totalBytesExpectedToWrite | Number   | The total length of data expected to be downloaded, in Bytes |

**示例**	
**Example**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		const uploadTask = uni.uploadFile({
			url: 'https://www.example.com/upload', 
			//仅为示例，非真实的接口地址
			//Just an example, not a real interface address
			filePath: tempFilePaths[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});

		uploadTask.onProgressUpdate((res) => {
			console.log('上传进度' + res.progress);
			console.log('Upload progress' + res.progress);
			console.log('已经上传的数据长度' + res.totalBytesSent);
			console.log('The length of the uploaded data' + res.totalBytesSent);
			console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
			console.log('The total length of data expected to be uploaded' + res.totalBytesExpectedToSend);
			// 测试条件，取消上传任务。
			// Test conditions, cancel the upload task.
			if (res.progress > 50) {
				uploadTask.abort();
			}
		});
	}
});
```

### uni.downloadFile(OBJECT)
下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
When downloading file resources locally, the client directly initiates an HTTP GET request to return the local temporary path of the file.


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| parameter name | Types    | Required | Description  |平台差异说明|
|:-|:-|:-|:-|:-|
|url|String|是|下载资源的 url| |
| url            | String   | Yes      | Download resource url  ||
|header|Object|否|HTTP 请求 Header, header 中不能设置 Referer。| |
| header         | Object   | no       | HTTP request Header, Referer cannot be set in the header. |
|timeout|Number|否|超时时间，单位 ms|H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)| |
|success|Function|否|下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}| |
| success        | Function | no       | After the download is successful, it will be sent to the page in the form of tempFilePath, res = {tempFilePath:'temporary path of the file'} ||
|fail|Function|否|接口调用失败的回调函数| |
| fail       | Function | no       | Callback function for interface call failure   ||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）| |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||


**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](/api/file/file?id=savefile)，才能在应用下次启动时访问得到。**
**Note: The temporary path of the file can be used normally during this application startup. If you need to save it for a long time, you need to call [uni.saveFile](/api/file/file?id=savefile) actively before it can be downloaded Accessed at the next startup. **

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter    | Types  | Description   |
|:-|:-|:-|
|tempFilePath|String|临时文件路径，下载后的文件会存储到一个临时文件|
| tempFilePath | String | Temporary file path, the downloaded file will be stored in a temporary file |
|statusCode|Number|开发者服务器返回的 HTTP 状态码|
| statusCode   | Number | HTTP status code returned by the developer server    |

**注意**
**note**
- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- Network requests `timeout`can be unified in `manifest.json`the configuration [networkTimeout](/collocation/manifest?id=networktimeout)。

**示例**
**Example**

```javascript
uni.downloadFile({
	url: 'https://www.example.com/file/test', 
	//仅为示例，并非真实的资源
	//Only an example, not a real resource
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('下载成功');
			console.log('Download successful');
		}
	}
});
```

**返回值**
**return value**

如果希望返回一个 `downloadTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return an `downloadTask`object that need to pass at least a success / fail / complete parameters. E.g:

```javascript
var downloadTask = uni.downloadFile({
	url: 'https://www.example.com/file/test', //仅为示例，并非真实接口地址。
	//Example only, not the real interface address.
	complete: ()=> {}
});
downloadTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If success / fail / complete parameters are not passed in, the encapsulated Promise object will be returned.

通过 `downloadTask`，可监听下载进度变化事件，以及取消下载任务。
Pass `downloadTask`, can monitor the download progress change event, and cancel the download task.

**downloadTask 对象的方法列表**
**List of methods of the downloadTask object**

|方法|参数|说明|
| method           | parameter | Description                       |
|:-|:-|:-|
|abort||中断下载任务|
| abortion         |           | Interrupt download task           |
|onProgressUpdate|callback|监听下载进度变化|
| onProgressUpdate | callback  | Monitor download progress changes |

**onProgressUpdate 返回参数说明**
**onProgressUpdate return parameter description**

|参数|类型|说明|
| parameter                 | Types of | Description |
|:-|:-|:-|
|progress|Number|下载进度百分比|
| progress                  | Number   | Download progress percentage                |
|totalBytesWritten|Number|已经下载的数据长度，单位 Bytes|
| totalBytesWritten         | Number   | The length of the downloaded data, in Bytes |
|totalBytesExpectedToWrite|Number|预期需要下载的数据总长度，单位 Bytes|
| totalBytesExpectedToWrite | Number   | The total length of data expected to be downloaded, in Bytes |

**示例**
**Example**

```javascript
const downloadTask = uni.downloadFile({
	url: 'http://www.example.com/file/test', 
	//仅为示例，并非真实的资源
	//Only an example, not a real resource
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('下载成功');
			console.log('Download successful');
		}
	}
});

downloadTask.onProgressUpdate((res) => {
	console.log('下载进度' + res.progress);
	console.log('Download progress' + res.progress);
	console.log('已经下载的数据长度' + res.totalBytesWritten);
	console.log('Data length downloaded' + res.totalBytesWritten);
	console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
	console.log('Total length of data expected to be downloaded' + res.totalBytesExpectedToWrite);
	
	// 测试条件，取消下载任务。
	// Test conditions, cancel the download task.
	if (res.progress > 50) {
		downloadTask.abort();
	}
});
```
