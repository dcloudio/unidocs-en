**iBeacon API 平台差异说明**
**IBeacon API platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

### uni.onBeaconServiceChange(CALLBACK)

监听 iBeacon 服务状态变化事件
Monitor iBeacon service status change events

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
|属性|类型|说明|
|:-|:-|:-|
|available|boolean|服务目前是否可用|
|available|boolean|服务目前是否可用|
|discovering|boolean|目前是否处于搜索状态|
|discovering|boolean|目前是否处于搜索状态|
### uni.onBeaconUpdate(CALLBACK)

监听 iBeacon 设备更新事件
Listen to iBeacon device update events

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|beacons|Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>|当前搜寻到的所有 iBeacon 设备列表|
|beacons|Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>|List of all iBeacon devices currently found|

### uni.getBeacons(OBJECT)

获取所有已搜索到的 iBeacon 设备
Get all iBeacon devices that have been searched

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|:-|
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
|:-|:-|:-|
|beacons|Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>|iBeacon 设备列表|
|beacons|Array<[IBeaconInfo](/api/system/ibeacon?id=ibeaconinfo)>|iBeacon device list|\

#### 错误
#### mistake

|错误码|错误信息|说明|
|Error Code|Error Message|Description|
|:-|:-|:-|
|0|ok|正常|
|0|ok|Normal|
|11000|unsupport|系统或设备不支持|
|11000|unsupport|The system or device does not support|
|11001|bluetooth service unavailable|蓝牙服务不可用|
|11001|bluetooth service unavailable|Bluetooth service unavailable|
|11002|location service unavailable|位置服务不可用|
|11002|location service unavailable|location service unavailable|
|11003|already start|已经开始搜索|
|11003|already start|Search has started|

### uni.startBeaconDiscovery(OBJECT)

开始搜索附近的 iBeacon 设备
Start searching for nearby iBeacon devices

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|:-|
|uuids|Array＜String＞||是|iBeacon 设备广播的 uuid 列表|
|uuids|Array<String>||is|uuid list broadcast by iBeacon device|
|ignoreBluetoothAvailable|boolean|false|否|是否校验蓝牙开关，仅在 iOS 下有效|
|ignoreBluetoothAvailable|boolean|false|No|Whether to verify the Bluetooth switch, only valid under iOS|
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
|:-|:-|:-|
|0|ok|正常|
|0|ok|Normal|
|11000|unsupport|系统或设备不支持|
|11000|unsupport|The system or device does not support|
|11001|bluetooth service unavailable|蓝牙服务不可用|
|11001|bluetooth service unavailable|Bluetooth service unavailable|
|11002|location service unavailable|位置服务不可用|
|11002|location service unavailable|location service unavailable|
|11003|already start|已经开始搜索|
|11003|already start|Search has started|

#### 示例代码
#### Sample code

```js
uni.startBeaconDiscovery({
  success(res) { }
})
```

### uni.stopBeaconDiscovery(OBJECT)

停止搜索附近的 iBeacon 设备
Stop searching for nearby iBeacon devices

**OBJECT 参数说明**
**OBJECT parameter description**

|属性|类型|默认值|必填|说明|
|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|:-|
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
|:-|:-|:-|
|0|ok|正常|
|0|ok|Normal|
|11000|unsupport|系统或设备不支持|
|11000|unsupport|The system or device does not support|
|11001|bluetooth service unavailable|蓝牙服务不可用|
|11001|bluetooth service unavailable|Bluetooth service unavailable|
|11002|location service unavailable|位置服务不可用|
|11002|location service unavailable|location service unavailable|
|11003|already start|已经开始搜索|
|11003|already start|Search has started|

### IBeaconInfo

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|uuid|string|iBeacon 设备广播的 uuid|
|uuid|string|uuid broadcasted by the iBeacon device|
|major|string|iBeacon 设备的主 id|
|major|string|The primary id of the iBeacon device|
|minor|string|iBeacon 设备的次 id|
|minor|string|The secondary id of the iBeacon device|
|proximity|number|表示设备距离的枚举值|
|proximity|number|Enumerated value representing the distance of the device|
|accuracy|number|iBeacon 设备的距离|
|accuracy|number|iBeacon device distance|
|rssi|number|表示设备的信号强度|
|rssi|number|Indicates the signal strength of the device|

### 注意事项
### Precautions

* 未启用定位将影响 iBeacon 的正常使用。（相关反馈：[#2027](https://github.com/dcloudio/uni-app/issues/2027)）
* Failure to enable positioning will affect the normal use of iBeacon. (Related feedback: [#2027](https://github.com/dcloudio/uni-app/issues/2027))