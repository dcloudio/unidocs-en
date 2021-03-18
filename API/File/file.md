#### uni.saveFile(OBJECT)
Save the file locally.

**OBJECT parameter description:**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| tempFilePath   | String   | Yes      | Temporary path of the file to be saved                       |
| success        | Function | no       | Return the save path of the file, res = {savedFilePath:'File save path'} |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description:**

| parameter     | Description    |
| :------------ | :------------- |
| savedFilePath | File save path |

**Sample code:**

```javascript
uni.chooseImage({
  success: function (res) {
    var tempFilePaths = res.tempFilePaths;
    uni.saveFile({
      tempFilePath: tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath;
      }
    });
  }
});
```

#### uni.getSavedFileList(OBJECT)
Get a list of locally saved files.

**OBJECT parameter description:**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| success        | Function | no       | The callback function of the successful interface call, see the success return parameter description for the return result |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description:**

| parameter | Types         | Description           |
| :-------- | :------------ | :-------------------- |
| errMsg    | String        | Interface call result |
| fileList  | Array<Object> | document list         |

**Description of items in fileList:**

| key        | Types  | Description                                                  |
| :--------- | :----- | :----------------------------------------------------------- |
| filePath   | String | Local path of the file                                       |
| createTime | Number | Timestamp of when saving files, from `1970/01/01 08:00:00`the number of seconds that time. |
| size       | Number | File size, in bytes.                                         |

**Sample code:**

```javascript
uni.getSavedFileList({
  success: function (res) {
    console.log(res.fileList);
  }
});
```

#### uni.getSavedFileInfo(OBJECT)
Get the file information of the local file. This interface can only be used to obtain files that have been saved locally.

**OBJECT parameter description:**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| filePath       | String   | Yes      | file path                                                    |
| success        | Function | no       | The callback function of the successful interface call, see the success return parameter description for the return result |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description:**

| parameter  | Types  | Description                                                  |
| :--------- | :----- | :----------------------------------------------------------- |
| errMsg     | String | Interface call result                                        |
| size       | Number | File size, in bytes.                                         |
| createTime | Number | Timestamp when the file is saved, from `1970/01/01 08:00:00`the number of seconds that time. |

**Sample code:**

```javascript
uni.getSavedFileInfo({
  filePath: 'unifile://somefile', //For example only, not the actual file path
  success: function (res) {
    console.log(res.size);
    console.log(res.createTime);
  }
});
```

#### uni.removeSavedFile(OBJECT)
Delete files stored locally.

**OBJECT parameter description:**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| filePath       | String   | Yes      | File path to be deleted                                      |
| success        | Function | no       | Callback function for successful interface call              |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Sample code:**

```javascript
uni.getSavedFileList({
  success: function (res) {
    if (res.fileList.length > 0) {
      uni.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete: function (res) {
          console.log(res);
        }
      });
    }
  }
});
```

#### uni.getFileInfo(OBJECT)
Get file information

**OBJECT parameter description:**

| parameter name  | Types    | Defaults | Required | Description                                                  |
| :-------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| filePath        | String   |          | Yes      | Local file path                                              |
| success         | Function |          | no       | Callback function for successful interface call              |
| fail            | Function |          | no       | Callback function for interface call failure                 |
| complete        | Function |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description:**

| parameter | Types  | Description                                                  |
| :-------- | :----- | :----------------------------------------------------------- |
| errMsg    | String | Interface call result                                        |
| size      | Number | File size, in bytes.                                         |
| digest    | String | File digest calculated according to the passed digestAlgorithm | WeChat Mini Program             |

#### uni.openDocument(OBJECT)
Open the document on a newly opened page. Support formats: doc, xls, ppt, pdf, docx, xlsx, pptx.

**OBJECT parameter description:**

| parameter name | Types  | Required | Description                                                  |
| :------------- | :----- | :------- | :----------------------------------------------------------- |
| filePath       | String | Yes      | File path, available through downFile                        |
| success        | String | no       | Callback function for successful interface call              |
| complete       | String | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Sample code:**

```javascript
uni.downloadFile({
  url: 'https://example.com/somefile.pdf',
  success: function (res) {
    var filePath = res.tempFilePath;
    uni.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('Open document successfully');
      }
    });
  }
});
```
