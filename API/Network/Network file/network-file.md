### uni.uploadFile(OBJECT)
The local resources uploaded to the developer server, the client initiates a `POST`request, which `content-type`is `multipart/form-data`.
**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| url            | String   | Yes      | Developer server url                                         |
| name           | String   | Yes      | The key corresponding to the file, the developer can obtain the binary content of the file through this key on the server side |
| header         | Object   | no       | HTTP request Header, Referer cannot be set in the header.    |
| formData       | Object   | no       | Other additional form data in the HTTP request               |
| success        | Function | no       | Callback function for successful interface call              |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**files parameter description**

The files parameter is an array of file objects, the structure of the file object is as follows:

| parameter name | Types  | Required | Description                                                  |
| :------------- | :----- | :------- | :----------------------------------------------------------- |
| name           | String | no       | When multipart is submitted, the project name of the form, the default is file |
| hate           | String | Yes      | Local address of the file                                    |

Tip:

- If you `name`do not fill or fill the same values, it can lead to only read a file server to read the file.

**success return parameter description**

| parameter  | Types  | Description                                       |
| :--------- | :----- | :------------------------------------------------ |
| data       | String | Data returned by the developer server             |
| statusCode | Number | HTTP status code returned by the developer server |

**Example**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		uni.uploadFile({
			url: 'https://www.example.com/upload', //Example only, not the real interface address
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

**return value**

If you want to return an `uploadTask`object that need to pass at least a success / fail / complete parameters. E.g:

```javascript
var uploadTask = uni.uploadFile({
    url: 'https://www.example.com/upload', //Example only, not the real interface address.
    complete: ()=> {}
});
uploadTask.abort();
```

If success / fail / complete parameters are not passed in, the encapsulated Promise object will be returned.

Pass `uploadTask`, can monitor upload progress change event, and cancel upload task.

**List of methods of uploadTask object**

| method           | parameter | Description                     |
| :--------------- | :-------- | :------------------------------ |
| abortion         |           | Interrupt upload task           |
| onProgressUpdate | callback  | Monitor upload progress changes |

**onProgressUpdate return parameter description**

| parameter                | Types  | Description                                                |
| :----------------------- | :----- | :--------------------------------------------------------- |
| progress                 | Number | Upload progress percentage                                 |
| totalBytesSent           | Number | The length of the uploaded data, in Bytes                  |
| totalBytesExpectedToSend | Number | The total length of data expected to be uploaded, in Bytes |

**Example**

```javascript
uni.chooseImage({
	success: (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		const uploadTask = uni.uploadFile({
			url: 'https://www.example.com/upload', //Example only, not the real interface address.
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
			console.log('Upload progress' + res.progress);
			console.log('Length of data that has been uploaded' + res.totalBytesSent);
			console.log('Total length of data expected to be uploaded' + res.totalBytesExpectedToSend);

			// Test the condition and cancel the upload task.
			if (res.progress > 50) {
				uploadTask.abort();
			}
		});
	}
});
```

### uni.downloadFile(OBJECT)
When downloading file resources locally, the client directly initiates an HTTP GET request to return the local temporary path of the file.

**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| url            | String   | Yes      | Download resource url                                        |
| header         | Object   | no       | HTTP request Header, Referer cannot be set in the header.    |
| success        | Function | no       | After the download is successful, it will be sent to the page in the form of tempFilePath, res = {tempFilePath:'temporary path of the file'} |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter    | Types  | Description                                                  |
| :----------- | :----- | :----------------------------------------------------------- |
| tempFilePath | String | Temporary file path, the downloaded file will be stored in a temporary file |
| statusCode   | Number | HTTP status code returned by the developer server            |

**note**

- Network requests `timeout`can be unified in `manifest.json`the configurationNetworkTimeout.
- **Example**

```javascript
uni.downloadFile({
	url: 'https://www.example.com/file/test', //Example only, not the real interface address.
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('Download successful');
		}
	}
});
```

**return value**

If you want to return an `downloadTask`object that need to pass at least a success / fail / complete parameters. E.g:

```javascript
var downloadTask = uni.downloadFile({
	url: 'https://www.example.com/file/test', //Example only, not the real interface address.
	complete: ()=> {}
});
downloadTask.abort();
```

If success / fail / complete parameters are not passed in, the encapsulated Promise object will be returned.

Pass `downloadTask`, can monitor the download progress change event, and cancel the download task.

**List of methods of the downloadTask object**

| method           | parameter | Description                       |
| :--------------- | :-------- | :-------------------------------- |
| abortion         |           | Interrupt download task           |
| onProgressUpdate | callback  | Monitor download progress changes |

**onProgressUpdate return parameter description**

| parameter                 | Types of | Description                                                  |
| :------------------------ | :------- | :----------------------------------------------------------- |
| progress                  | Number   | Download progress percentage                                 |
| totalBytesWritten         | Number   | The length of the downloaded data, in Bytes                  |
| totalBytesExpectedToWrite | Number   | The total length of data expected to be downloaded, in Bytes |

**Example**

```javascript
const downloadTask = uni.downloadFile({
	url: 'http://www.example.com/file/test', //Example only, not the real interface address.
	success: (res) => {
		if (res.statusCode === 200) {
			console.log('Download successful');
		}
	}
});

downloadTask.onProgressUpdate((res) => {
	console.log('Download progress' + res.progress);
	console.log('Length of data that has been downloaded' + res.totalBytesWritten);
	console.log('Total length of data expected to be downloaded' + res.totalBytesExpectedToWrite);

	// Test the condition and cancel the upload task.
	if (res.progress > 50) {
		downloadTask.abort();
	}
});
```

