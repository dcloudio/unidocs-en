### uni.onAccelerometerChange(CALLBACK)
监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ``uni.offAccelerometer`` 取消监听。
Listen for acceleration data,Frequency: 5 cycles per second,Interface calls will automatically start listening,use ``uni.offAccelerometer`` to listening the cancel.

**CALLBACK 返回参数**
**CALLBACK Return Parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|x|Number|X 轴|
|x|Number|The X axis|
|y|Number|Y 轴|
|y|Number|The Y axis|
|z|Number|Z 轴|
|z|Number|The Z axis|

**Tips**

- H5端获取加速度信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- H5 to obtain acceleration information,need to be deployed in **https** server,http protocol still available when local preview (localhost).

**示例**
**Example**

```javascript
uni.onAccelerometerChange(function (res) {
	console.log(res.x);
	console.log(res.y);
	console.log(res.z);
});
```

### uni.offAccelerometerChange(CALLBACK)
取消监听加速度数据。
Unlisten for acceleration data.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.9.6+|HBuilderX 2.9.6+|

### uni.startAccelerometer(OBJECT)
开始监听加速度数据。
Unlisten for acceleration data.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT 参数说明**
**OBJECT Parameter Description**

|参数名|类型|默认|必填|说明|平台差异说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|:-|:-|
|success|Function||否|接口调用成功的回调||
|success|Function|no|Callback function for successful interface call|
|fail|Function||否|接口调用失败的回调函数||
|fail|Function|no|Callback function for interface call failure|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

`interval` 的合法值
`interval` The legal value

|值|说明|
|Value|Description|
|:-|:-|
|game|适用于更新游戏的回调频率，在 20ms/次 左右|
|game|callback frequency applicable to updating the game,It's about every 20 milliseconds|
|ui|适用于更新 UI 的回调频率，在 60ms/次 左右|
|ui|The callback frequency for updating the UI,It's about every 60 milliseconds|
|normal|普通的回调频率，在 200ms/次 左右|
|normal|Normal callback frequency,It's about every 200 milliseconds|


**示例**
**Example**

```javascript
uni.startAccelerometer();
```

### uni.stopAccelerometer(OBJECT)
停止监听加速度数据。
Stop listening for acceleration data.

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
**Example**

```javascript
uni.stopAccelerometer();
```
