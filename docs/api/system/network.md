### uni.getNetworkType(OBJECT)
获取网络类型。
Get the network type.

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功，返回网络类型 networkType|
|success|Function|yes|The interface call was successful,return network type|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success 返回参数说明**
**success Return parameter description**

|参数|说明|
|:-|:-|
|networkType|网络类型|
|networkType|network type|

**networkType 有效值**
**The legal value of networkType**

|值|说明|平台差异说明|
|Value|Description|Platform difference description|
|:-|:-|:-|
|wifi|wifi 网络||
|wifi|wifi network||
|2g|2g 网络||
|2g|2g network||
|3g|3g 网络||
|3g|3g network||
|4g|4g 网络||
|4g|4g network||
|5g|5g 网络||
|5g|5g network||
|ethernet|有线网络|App|
|ethernet|Wired network|App|
|unknown|Android 下不常见的网络类型||
|unknown|An unusual type of network on Android||
|none|无网络|&nbsp;|
|none|No network|&nbsp;|

**示例**
**Exemple**

```javascript
uni.getNetworkType({
	success: function (res) {
		console.log(res.networkType);
	}
});
```

### uni.onNetworkStatusChange(CALLBACK)
监听网络状态变化。可使用`uni.offNetworkStatusChange`取消监听。
Monitor network status changes.`uni.offNetworkStatusChange` can be use to cancel listening.

**CALLBACK 返回参数**
**CALLBACK Return Parameter**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|
|:-|:-|:-|:-|
|isConnected|Boolean|当前是否有网络连接||
|isConnected|Boolean|Is there a network connection currently available|
|networkType|String|网络类型|&nbsp;|
|networkType|String|network type|

**示例**
**Exemple**

```javascript
uni.onNetworkStatusChange(function (res) {
	console.log(res.isConnected);
	console.log(res.networkType);
});
```

### uni.offNetworkStatusChange(CALLBACK)
取消监听网络状态变化。
Not listen network status changes.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 3.0.1+|HBuilderX 3.0.1+|

**Tips**
- `CALLBACK`必须为调用`uni.onNetworkStatusChange`时传入的`CALLBACK`
- `CALLBACK` is passed when calling `uni.onNetworkStatusChange`

例如：
**Exemple**

```
var CALLBACK = function(res) {
    // ...这里写你的业务逻辑
	 // ...TODO
}
uni.offNetworkStatusChange(CALLBACK)
uni.onNetworkStatusChange(CALLBACK);
```