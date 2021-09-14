## uni.base64ToArrayBuffer(base64)

将 Base64 字符串转成 ArrayBuffer 对象
Convert Base64 string into ArrayBuffer object

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|base64|String|是|要转化成 ArrayBuffer 对象的 Base64 字符串|
|base64|String|Yes|The Base64 string to be converted into an ArrayBuffer object|

**示例**
**Example**

```javascript
const base64 = 'test'
const arrayBuffer = uni.base64ToArrayBuffer(base64)
```