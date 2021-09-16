**低功耗蓝牙 API 平台差异说明**
**Instructions for Bluetooth Low Energy API Platform Differences**

|App|H5|
|:-:|:-:|
|√|x|

### uni.setBLEMTU(OBJECT)

2.8.4+

设置蓝牙最大传输单元。需在 uni.createBLEConnection调用成功后调用，mtu 设置范围 (22,512)。安卓5.1以上有效。
Set the Bluetooth maximum transmission unit. It needs to be called after uni.createBLEConnection is successfully called, and mtu sets the range (22,512). Valid for Android 5.1 or above.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|用于区分设备的 id|
|deviceId|string||Yes|The id used to distinguish the device|
|mtu|number||是|最大传输单元(22,512) 区间内，单位 bytes|
|mtu|number||Yes|In the interval of the maximum transmission unit (22,512), the unit is bytes|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

### uni.writeBLECharacteristicValue(OBJECT)

向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
Write binary data into the characteristic value of the Bluetooth low energy device. Note: The feature value of the device must support write before it can be called successfully.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
|deviceId|string||Yes|Bluetooth device id|
|serviceId|string||是|蓝牙特征值对应服务的 uuid|
|serviceId|string||Yes|The uuid of the service corresponding to the Bluetooth feature value|
|characteristicId|string||是|蓝牙特征值的 uuid|
|characteristicId|string||is|uuid of Bluetooth characteristic value|
|value|ArrayBuffer||是|蓝牙设备特征值对应的二进制值|
|value|ArrayBuffer||Yes|The binary value corresponding to the characteristic value of the Bluetooth device|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

#### 错误
#### mistake

|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|

#### 注意
#### Notice

*   并行调用多次会存在写失败的可能性。
*   Multiple calls in parallel may cause write failure.
*   APP不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙4.0单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过20字节。
*   APP does not limit the size of the written data packet, but the system and Bluetooth device will limit the data size of a single transmission of Bluetooth 4.0. When the maximum number of bytes is exceeded, a write error will occur. It is recommended that each write not exceed 20 words Festival.
*   若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
*   If the data written in a single time is too long, there will be situations in which the system will not have any callbacks (including error callbacks) on iOS.
*   安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*   On the Android platform, calling the `writeBLECharacteristicValue` interface immediately after calling `notifyBLECharacteristicValueChange` successfully, a system error of 10008 will occur on some models

#### 示例代码
#### Sample code

```js
// 向蓝牙设备发送一个0x00的16进制数据
// Send a 0x00 hexadecimal data to the Bluetooth device
const buffer = new ArrayBuffer(1)
const dataView = new DataView(buffer)
dataView.setUint8(0, 0)
uni.writeBLECharacteristicValue({
  // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  // The deviceId here needs to be obtained in the getBluetoothDevices or onBluetoothDeviceFound interface
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  // The serviceId here needs to be obtained in the getBLEDeviceServices interface
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  // The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface
  characteristicId,
  // 这里的value是ArrayBuffer类型
  // The value here is of type ArrayBuffer
  value: buffer,
  success(res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
```

### uni.readBLECharacteristicValue(OBJECT)

读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
Read the binary data value of the characteristic value of the Bluetooth low energy device. Note: The feature value of the device must support read before it can be called successfully.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
|deviceId|string||Yes|Bluetooth device id|
|serviceId|string||是|蓝牙特征值对应服务的 uuid|
|serviceId|string||Yes|The uuid of the service corresponding to the Bluetooth feature value|
|characteristicId|string||是|蓝牙特征值的 uuid|
|characteristicId|string||is|uuid of Bluetooth characteristic value|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|


#### 错误
#### mistake

|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|


#### 注意
#### Notice
*   并行调用多次会存在读失败的可能性。
*   Multiple calls in parallel may cause read failure.
*   接口读取到的信息需要在 `onBLECharacteristicValueChange` 方法注册的回调中获取。
*   The information read by the interface needs to be obtained in the callback registered by the `onBLECharacteristicValueChange` method.
#### 示例代码
#### Sample code

```js
// 必须在这里的回调才能获取
// Must be here to get the callback
uni.onBLECharacteristicValueChange(function (characteristic) {
  console.log('characteristic value comed:', characteristic)
})
uni.readBLECharacteristicValue({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
 // The deviceId here needs to have established a link with the corresponding device through createBLEConnection
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
 // The serviceId here needs to be obtained in the getBLEDeviceServices interface
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  // The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface
  characteristicId,
  success(res) {
    console.log('readBLECharacteristicValue:', res.errCode)
  }
})
```

### uni.onBLEConnectionStateChange(CALLBACK)

监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
Monitor the change event of the Bluetooth low energy connection state. Including the developer's active connection or disconnection, device loss, abnormal connection disconnection, etc.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|deviceId|string|蓝牙设备ID|
|deviceId|string|Bluetooth device ID|
|connected|boolean|是否处于已连接状态|
|connected|boolean|Is it in a connected state|

#### 示例代码
#### Sample code

```js
uni.onBLEConnectionStateChange(function (res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  // This method callback can be used to handle abnormal situations such as unexpected disconnection of the connection
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```

### uni.onBLECharacteristicValueChange(CALLBACK)

监听低功耗蓝牙设备的特征值变化事件。必须先启用 `notifyBLECharacteristicValueChange` 接口才能接收到设备推送的 notification。
Monitor the change event of the characteristic value of the Bluetooth low energy device. The `notifyBLECharacteristicValueChange` interface must be enabled first to receive notification pushed by the device.

#### Sample code
**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|deviceId|string|蓝牙设备 id|
|deviceId|string|Bluetooth device id|
|serviceId|string|蓝牙特征值对应服务的 uuid|
|serviceId|string|The uuid of the service corresponding to the Bluetooth feature value|
|characteristicId|string|蓝牙特征值的 uuid|
|characteristicId|string|uuid of Bluetooth characteristic value|
|value|ArrayBuffer|特征值最新的值|
|value|ArrayBuffer|The latest value of the eigenvalue|

#### 示例代码
#### Sample code

```js
// ArrayBuffer转16进度字符串示例	
// ArrayBuffer to 16 progress string example
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
}
uni.onBLECharacteristicValueChange(function (res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
  console.log(ab2hex(res.value))
})
```

### uni.notifyBLECharacteristicValueChange(OBJECT)

启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
Enable the notify function when the characteristic value of the Bluetooth low energy device changes, and subscribe to the characteristic value. Note: The feature value of the device must support notify or indicate before it can be called successfully.

另外，必须先启用 `notifyBLECharacteristicValueChange` 才能监听到设备 `characteristicValueChange` 事件
In addition, you must first enable `notifyBLECharacteristicValueChange` to listen to the device `characteristicValueChange` event

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
|deviceId|string||Yes|Bluetooth device id|
|serviceId|string||是|蓝牙特征值对应服务的 uuid|
|serviceId|string||Yes|The uuid of the service corresponding to the Bluetooth feature value|
|characteristicId|string||是|蓝牙特征值的 uuid|
|characteristicId|string||is|uuid of Bluetooth characteristic value|
|state|boolean||是|是否启用 notify|
|state|boolean||Yes|Whether to enable notify|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

#### 错误
#### mistake
|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|

#### 注意
#### Notice


*   订阅操作成功后需要设备主动更新特征值的 value，才会触发 [`uni.onBLECharacteristicValueChange`](/api/system/ble?id=onblecharacteristicvaluechange) 回调。
*   The [`uni.onBLECharacteristicValueChange`](/api/system/ble?id=onblecharacteristicvaluechange) callback will be triggered after the successful subscription operation requires the device to actively update the value of the characteristic value.
*   安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
*   On the Android platform, calling the `writeBLECharacteristicValue` interface immediately after calling `notifyBLECharacteristicValueChange` successfully, a system error of 10008 will occur on some models

#### 示例代码
#### Sample code
```js
uni.notifyBLECharacteristicValueChange({
  state: true, 
  // 启用 notify 功能
  // enable notify function
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  // The deviceId here needs to have established a link with the corresponding device through createBLEConnection
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  // The serviceId here needs to be obtained in the getBLEDeviceServices interface
  serviceId,
  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
  // The characteristicId here needs to be obtained in the getBLEDeviceCharacteristics interface
  characteristicId,
  success(res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
```

### uni.getBLEDeviceServices(OBJECT)

获取蓝牙设备所有服务(service)。
Get all the services of the Bluetooth device.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
|deviceId|string||Yes|Bluetooth device id|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

**success 返回参数说明：**
**success return parameter description:**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|services|Array&lt;Object&gt;|设备服务列表|
|services|Array&lt;Object&gt;|Device Service List|

**res.services 的结构**
**Structure of res.services**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|uuid|string|蓝牙设备服务的 uuid|
|uuid|string|uuid of Bluetooth device service|
|isPrimary|boolean|该服务是否为主服务|
|isPrimary|boolean|Is this service a primary service|

#### 错误
#### mistake

|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|

#### 示例代码
#### Sample code


```js
uni.getBLEDeviceServices({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  // The deviceId here needs to have established a link with the corresponding device through createBLEConnection
  deviceId,
  success(res) {
    console.log('device services:', res.services)
  }
})
```


### uni.getBLEDeviceRSSI(OBJECT)

2.8.4+

获取蓝牙设备的信号强度。
Get the signal strength of the Bluetooth device.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
|deviceId|string||Yes|Bluetooth device id|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

### uni.getBLEDeviceCharacteristics(OBJECT)

获取蓝牙设备某个服务中所有特征值(characteristic)。
Get all the characteristic values (characteristic) in a certain service of the Bluetooth device.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|蓝牙设备 id|
|deviceId|string||Yes|Bluetooth device id|
|serviceId|string||是|蓝牙服务 uuid，需要使用 `getBLEDeviceServices` 获取|
|serviceId|string||Yes|Bluetooth service uuid, need to use `getBLEDeviceServices` to obtain|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

**success 返回参数说明：**
**success return parameter description:**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|---|
|characteristics|Array&lt;Object&gt;|设备服务列表|
|characteristics|Array&lt;Object&gt;|Device Service List|

**res.characteristics 的结构**
**Structure of res.characteristics**


|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|uuid|string|蓝牙设备特征值的 uuid|
|uuid|string|uuid of Bluetooth device characteristic value|
|properties|Object|该特征值支持的操作类型|
|properties|Object|Operation types supported by this characteristic value|

**properties 的结构**
**The structure of properties**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|read|boolean|该特征值是否支持 read 操作|
|read|boolean|Does the feature value support read operation|
|write|boolean|该特征值是否支持 write 操作|
|write|boolean|Whether the characteristic value supports write operation|
|notify|boolean|该特征值是否支持 notify 操作|
|notify|boolean|Does the feature value support notify operation|
|indicate|boolean|该特征值是否支持 indicate 操作|
|indicate|boolean|Does the eigenvalue support the indicate operation|

#### 错误
#### mistake

|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|

#### 示例代码
#### Sample code


```js
uni.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  // The deviceId here needs to have established a link with the corresponding device through createBLEConnection
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  // The serviceId here needs to be obtained in the getBLEDeviceServices interface
  serviceId,
  success(res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```

### uni.createBLEConnection(OBJECT)

连接低功耗蓝牙设备。
Connect low energy Bluetooth devices.

若APP在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
If the APP has searched for a Bluetooth device before and successfully established a connection, it can directly pass in the deviceId obtained from the previous search and directly try to connect to the device without performing a search operation.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|用于区分设备的 id|
|deviceId|string||Yes|The id used to distinguish the device|
|timeout|number||否|超时时间，单位ms，不填表示不会超时|
|timeout|number||No|Timeout time, in ms, if you leave it blank, it will not time out|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

#### 错误
#### mistake
|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|

#### 注意
#### Notice

*   请保证尽量成对的调用 `createBLEConnection` 和 `closeBLEConnection` 接口。安卓如果多次调用 `createBLEConnection` 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
*   Please make sure to call the `createBLEConnection` and `closeBLEConnection` interfaces in pairs as much as possible. If Android calls `createBLEConnection` multiple times to create a connection, it may cause the system to hold multiple connection instances of the same device, and cause the call to `closeBLEConnection` to fail to disconnect the device.
*   蓝牙连接随时可能断开，建议监听 [`uni.onBLEConnectionStateChange`](/api/system/ble?id=onbleconnectionstatechange) 回调事件，当蓝牙设备断开时按需执行重连操作
*   The Bluetooth connection may be disconnected at any time, it is recommended to listen to the [`uni.onBLEConnectionStateChange`](/api/system/ble?id=onbleconnectionstatechange) callback event, and perform the reconnection operation as needed when the Bluetooth device is disconnected
*   若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
*   If the interface for data read and write operations is called on an unconnected device or a disconnected device, a 10006 error will be returned, and it is recommended to perform a reconnection operation.

#### 示例代码
#### Sample code

```js
uni.createBLEConnection({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  // The deviceId here needs to have established a link with the corresponding device through createBLEConnection
  deviceId,
  success(res) {
    console.log(res)
  }
})
```

### uni.closeBLEConnection(OBJECT)

断开与低功耗蓝牙设备的连接。
Disconnect the Bluetooth low energy device.

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|---|---|---|---|---|
|deviceId|string||是|用于区分设备的 id|
|deviceId|string||Yes|The id used to distinguish the device|
|success|function||否|接口调用成功的回调函数|
|success|function||No|Callback function for successful interface call|
|fail|function||否|接口调用失败的回调函数|
|fail|function||No|Callback function for interface call failure|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function||No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

#### 错误
#### mistake

|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|---|---|---|
|0|ok|正常|
|0|ok|Normal|
|10000|not init|未初始化蓝牙适配器|
|10000|not init|Bluetooth adapter not initialized|
|10001|not available|当前蓝牙适配器不可用|
|10001|not available|The current Bluetooth adapter is not available|
|10002|no device|没有找到指定设备|
|10002|no device|The specified device was not found|
|10003|connection fail|连接失败|
|10003|connection fail|connection fail|
|10004|no service|没有找到指定服务|
|10004|no service|The specified service was not found|
|10005|no characteristic|没有找到指定特征值|
|10005|no characteristic|The specified characteristic value was not found|
|10006|no connection|当前连接已断开|
|10006|no connection|The current connection has been disconnected|
|10007|property not support|当前特征值不支持此操作|
|10007|property not support|The current feature value does not support this operation|
|10008|system error|其余所有系统上报的异常|
|10008|system error|Exceptions reported by all other systems|
|10009|system not support|Android 系统特有，系统版本低于 4.3 不支持 BLE|
|10009|system not support|Unique to Android system, system version lower than 4.3 does not support BLE|

#### 示例代码
#### Sample code

```js
uni.closeBLEConnection({
  deviceId,
  success(res) {
    console.log(res)
  }
})
```
