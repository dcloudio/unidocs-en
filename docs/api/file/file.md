#### uni.saveFile(OBJECT)
保存文件到本地。
Save the file locally.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用。**

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description   |
|:-|:-|:-|:-|
|tempFilePath|String|是|需要保存的文件的临时路径|
| tempFilePath   | String   | Yes      | Temporary path of the file to be saved                       |
|success|Function|否|返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}|
| success        | Function | no       | Return the save path of the file, res = {savedFilePath:'File save path'} |
|fail|Function|否|接口调用失败的回调函数|
| fail           | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明：**
**success return parameter description:**

|参数|说明|
| parameter     | Description    |
|:-|:-|
|savedFilePath|文件的保存路径|
| savedFilePath | File save path |

**示例代码：**
**Exemple code:**

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
获取本地已保存的文件列表。
Get a list of locally saved files.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明：**
**OBJECT parameter description：**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，返回结果见 success 返回参数说明|
| success | Function | no       | The callback function of the successful interface call, see the success return parameter description for the return result |
|fail|Function|否|接口调用失败的回调函数|
| fail           | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明：**
**success return parameter description:**

|参数|类型|说明|
| parameter | Types         | Description           |
|:-|:-|:-|
|errMsg|String|接口调用结果|
| errMsg    | String        | Interface call result |
|fileList|Array&lt;Object&gt;|文件列表|
| fileList  | Array&lt;Object&gt; | document list         |

**fileList 中的项目说明：**
**Description of items in fileList:**

|键|类型|说明|
| key        | Types  | Description                                                  |
|:-|:-|:-|
|filePath|String|文件的本地路径|
| filePath   | String | Local path of the file     |
|createTime|Number|文件的保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。|
| createTime | Number | Timestamp of when saving files, from `1970/01/01 08:00:00`the number of seconds that time. |
|size|Number|文件大小，以字节为单位。|
| size       | Number | File size, in bytes.                                         |

**示例代码：**
**Exemple code:**

```javascript
uni.getSavedFileList({
  success: function (res) {
    console.log(res.fileList);
  }
});
```

#### uni.getSavedFileInfo(OBJECT)
获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件。
Get the file information of the local file. This interface can only be used to obtain files that have been saved locally.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description    |
|:-|:-|:-|:-|
|filePath|String|是|文件路径|
| filePath       | String   | Yes      | file path                                                    |
|success|Function|否|接口调用成功的回调函数，返回结果见 success 返回参数说明|
| success        | Function | no       | The callback function of the successful interface call, see the success return parameter description for the return result |
|fail|Function|否|接口调用失败的回调函数|
| fail           | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明：**
**success return parameter description:**

|参数|类型|说明|
| parameter  | Types  | Description                                                  |
|:-|:-|:-|
|errMsg|String|接口调用结果|
| errMsg     | String | Interface call result                                        |
|size|Number|文件大小，以字节为单位。|
| size       | Number | File size, in bytes.                                         |
|createTime|Number|文件保存时的时间戳，从 `1970/01/01 08:00:00` 到该时刻的秒数。|
| createTime | Number | Timestamp when the file is saved, from `1970/01/01 08:00:00`the number of seconds that time. |

**示例代码：**
**Exemple code:**

```javascript
uni.getSavedFileInfo({
  filePath: 'unifile://somefile', //仅做示例用，非真正的文件路径  // For example only, not the actual file path
  success: function (res) {
    console.log(res.size);
    console.log(res.createTime);
  }
});
```

#### uni.removeSavedFile(OBJECT)
删除本地存储的文件。
Delete files stored locally.


**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|filePath|String|是|需要删除的文件路径|
| filePath       | String   | Yes      | File path to be deleted                                      |
|success|Function|否|接口调用成功的回调函数|
| success        | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
| fail           | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**示例代码：**
**Exemple code:**

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
获取文件信息
Get file information

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|默认值|必填|说明|平台差异说明|
| parameter name  | Types    | Defaults | Required | Description                                                  |Platform difference description|
|:-|:-|:-|:-|:-|:-|
|filePath|String||是|本地文件路径||
| filePath        | String   |          | Yes      | Local file path                                              ||
|digestAlgorithm|String|md5|否|计算文件摘要的算法，可取值 md5、sha1。|App 2.9.0+|
|digestAlgorithm|String|md5|no|Algorithm for calculating document summary, Possible value `md5`, `sha1`.|App 2.9.0+|
|success|Function||否|接口调用成功的回调函数||
| success         | Function |          | no       | Callback function for successful interface call              ||
|fail|Function||否|接口调用失败的回调函数||
| fail            | Function |          | no       | Callback function for interface call failure                 ||
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete        | Function |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||


**success 返回参数说明：**
**success return parameter description:**

|参数|类型|说明|平台差异说明|
| parameter | Types  | Description                                                  |
|:-|:-|:-|:-|
|errMsg|String|接口调用结果||
| errMsg    | String | Interface call result                                        |
|size|Number|文件大小，以字节为单位。||
| size      | Number | File size, in bytes.                                         |
|digest|String|按照传入的 digestAlgorithm 计算得出的的文件摘要|App 2.9.0+|
| digest    | String | File digest calculated according to the passed digestAlgorithm | App 2.9.0+         |

#### uni.openDocument(OBJECT)
新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
Open the document on a newly opened page. Support formats: doc, xls, ppt, pdf, docx, xlsx, pptx.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| parameter name | Types  | Required | Description                                                  |
|:-|:-|:-|:-|
|filePath|String|是|文件路径，可通过 downFile 获得|
| filePath       | String | Yes      | File path, available through downFile                        |
|success|String|否|接口调用成功的回调函数|
| success        | String | no       | Callback function for successful interface call              |
|complete|String|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | String | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**示例代码：**
**Exemple code:**

```javascript
uni.downloadFile({
  url: 'https://example.com/somefile.pdf',
  success: function (res) {
    var filePath = res.tempFilePath;
    uni.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('打开文档成功');
      }
    });
  }
});
```

**平台差异**
**Platform difference description**

|平台|打开方式|
|Platform|Open way|
|:-|:-|
|App iOS|在当前应用内打开|
|App iOS|Open in current app|
|App Android|调用系统相关应用打开，无相关应用则不能打开|
|App Android|Call system related applications to open, no related applications can not be opened|
|H5|使用浏览器打开，当前浏览器不支持则不能打开|
|H5|Use the browser to open, the current browser does not support it cannot be opened|

**Tips**

- App端，io操作还可以用更强大的plus.io API。[https://www.html5plus.org/doc/zh_cn/io.html](https://www.html5plus.org/doc/zh_cn/io.html)
- App端，打开各种格式的文件，如office、pdf等，还可以用更强大的三方插件，详见[插件市场](https://ext.dcloud.net.cn/search?q=pdf)
- 选择文件上传，uni-app有自带的api：[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)和[uni.chooseVideo](https://uniapp.dcloud.io/api/media/video?id=choosevideo)。App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
