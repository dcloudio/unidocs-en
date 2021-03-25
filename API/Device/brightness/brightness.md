### uni.setScreenBrightness(OBJECT)
Screen brightness setting.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|value|Number|yes|Screen brightness value,Ranges 0 to 1, where 0 is darkest and 1 is brightest|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Sample**

```javascript
uni.setScreenBrightness({
	value: 0.5,
	success: function () {
		console.log('success');
	}
});
```

>*Tips:* avoid using setScreenBrightness() in onshow() process, The brightness change triggers onShow() again, causing an endless loop

### uni.getScreenBrightness(OBJECT)
Get screen brightness value.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success Return parameter description**

|Parameter|Type|Description|
|:-|:-|:-|
|value|Number|Screen brightness values, ranging from 0 to 1, where 0 is darkest and 1 is brightest.|

**Sample**

```javascript
uni.getScreenBrightness({
	success: function (res) {
		console.log('Screen brightness value:' + res.value);
	}
});
```

### uni.setKeepScreenOn(OBJECT)
Sets whether to remain always on. This will only take effect in the current application, and will not work when you leave the application.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|keepScreenOn|Boolean|yes|Whether to keep the screen always on|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success Return parameter description**

|Parameter|Type|Description|
|:-|:-|:-|
|errMsg|String|The results|

**Sample**

```javascript
// Keep the screen always on
uni.setKeepScreenOn({
	keepScreenOn: true
});
```

