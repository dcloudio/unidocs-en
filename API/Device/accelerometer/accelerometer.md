### uni.onAccelerometerChange(CALLBACK)
Listen for acceleration data,Frequency: 5 cycles per second,Interface calls will automatically start listening,use ``uni.offAccelerometer`` to listening the cancel.

**CALLBACK Return Parameter**

|Parameter|Type|Description|
|:-|:-|:-|
|x|Number|The X axis|
|y|Number|The Y axis|
|z|Number|The Z axis|

**Tips**

- H5 to obtain acceleration information,need to be deployed in **https** server,http protocol still available when local preview（localhost）.

**Sample**

```javascript
uni.onAccelerometerChange(function (res) {
	console.log(res.x);
	console.log(res.y);
	console.log(res.z);
});
```

### uni.offAccelerometerChange(CALLBACK)
Unlisten for acceleration data.

### uni.startAccelerometer(OBJECT)
Start listening for acceleration data.

**OBJECT Parameter Description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|:-|
|success|Function||no|A successful callback to the interface call|
|fail|Function||no|The interface calls the callback function that failed|
|complete|Function||no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

`interval` The legal value

|Value|Description|
|:-|:-|
|game|callback frequency applicable to updating the game,It's about 20ms|
|ui|The callback frequency for updating the UI,It's about 60ms|
|normal|Normal callback frequency,It's about 200ms|


**Sample**

```javascript
uni.startAccelerometer();
```

### uni.stopAccelerometer(OBJECT)
Stop listening for acceleration data.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Sample**

```javascript
uni.stopAccelerometer();
```
