### uni.setClipboardData(OBJECT)
Sets the contents of the system clipboard.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|data|String|yes|What needs to be set|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Sample**

```javascript
uni.setClipboardData({
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

### uni.getClipboardData(OBJECT)
Get the contents of the system clipboard.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success Return parameter description**

|Parameter|Type|Description|
|:-|:-|:-|
|data|String|The contents of the clipboard|

**Sample**

```javascript
uni.getClipboardData({
	success: function (res) {
		console.log(res.data);
	}
});
```

#### **Tips**

- After setting the clipboard contents,Mini program platform will automatically pop up light prompts.APP platform keep the same policy to mini program. If you do not want the prompt to pop up on the APP platform,You can use Native.js to operate the clipboard by yourself.It can also be uni.hideToast() set immediately after the clipboard is set.
