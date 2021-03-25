### uni.getNetworkType(OBJECT)
Get the network type.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|success|Function|yes|The interface call was successful,return network type|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success Return parameter description**

|Attribute|Description|
|:-|:-|
|networkType|network type|

**The legal value of networkType**

|Value|Description|
|:-|:-|
|wifi|wifi network|
|2g|2g network|
|3g|3g network|
|4g|4g network|
|5g|5g network|
|ethernet|Wired network|
|unknown|An unusual type of network on Android|
|none|none|

**Sample**

```javascript
uni.getNetworkType({
	success: function (res) {
		console.log(res.networkType);
	}
});
```

### uni.onNetworkStatusChange(CALLBACK)
Monitor network status changes.`uni.offNetworkStatusChange` can be use to cancel listening.

**CALLBACK Return Parameter**

|Parameter|Type|Description|
|:-|:-|:-|
|isConnected|Boolean|Is there a network connection currently available|
|networkType|String|network type|

**Sample**

```javascript
uni.onNetworkStatusChange(function (res) {
	console.log(res.isConnected);
	console.log(res.networkType);
});
```
### uni.offNetworkStatusChange(CALLBACK)
Not listen network status changes.

**Tips**
- `CALLBACK` is passed when calling `uni.onNetworkStatusChange`
