## uni.arrayBufferToBase64(arrayBuffer)

将 ArrayBuffer 对象转成 Base64 字符串
Convert ArrayBuffer object into Base64 string

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
|arrayBuffer|ArrayBuffer|是|要转换成 Base64 字符串的 ArrayBuffer 对象|
|arrayBuffer|ArrayBuffer|Yes|The ArrayBuffer object to be converted into a Base64 string|

**示例**
**Example**

```javascript
const arrayBuffer = new Uint8Array([55, 55, 55])
const base64 = uni.arrayBufferToBase64(arrayBuffer)
```