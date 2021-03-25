### uni.onCompassChange(CALLBACK)
Monitor compass data, frequency:5 beats per second,Interface calls automatically start listening,You can cancel listening by using `uni.offCompassChange()`.

**CALLBACK Return Parameter**

|Parameter|Type|Description|
|:-|:-|:-|
|direction|Number|The degree of the direction we're facing|

**Tips**
- H5 Obtain disk information,It needs to be deployed on **HTTPS** service,Local Preview (localhost) can still use HTTP.

**Sample**

```javascript
uni.onCompassChange(function (res) {
	console.log(res.direction);
});
```

### uni.offCompassChange(CALLBACK)
Cancel listening for compass data.

**Tips**
- `CALLBACK` which is passed in when call `uni.onCompassChange`

### uni.startCompass(OBJECT)
Start listening for compass data.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Sample**

```javascript
uni.startCompass();
```

### uni.stopCompass(OBJECT)
Stop listening for compass data.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Sample**

```javascript
uni.stopCompass();
```
