### uni.onCompassChange(CALLBACK)
监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offCompassChange`` 取消监听。
Monitor compass data, frequency: 5 beats per second,Interface calls automatically start listening,You can cancel listening by using `uni.offCompassChange()`.

**CALLBACK 返回参数**
**CALLBACK Return Parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|direction|Number|面对的方向度数|
|direction|Number|The degree of the direction we're facing|

**Tips**
- H5端获取罗盘信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- H5 Obtain disk information,It needs to be deployed on **HTTPS** service,Local Preview (localhost) can still use HTTP.

**示例**
**Example**

```javascript
uni.onCompassChange(function (res) {
	console.log(res.direction);
});
```

### uni.offCompassChange(CALLBACK)
取消监听罗盘数据。
Cancel listening for compass data.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|

**Tips**
- `CALLBACK`为调用`uni.onCompassChange`时传入的`CALLBACK`
- `CALLBACK` which is passed in when call `uni.onCompassChange`

### uni.startCompass(OBJECT)
开始监听罗盘数据。
Start listening for compass data.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**示例**
**Exemple**

```javascript
uni.startCompass();
```

### uni.stopCompass(OBJECT)
停止监听罗盘数据。
Stop listening for compass data.

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**示例**
**Exemple**

```javascript
uni.stopCompass();
```
