### uni.makePhoneCall(OBJECT)
Make a phone call.

**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|phoneNumber|String|yes|The number to call|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Sample**

```javascript
uni.makePhoneCall({
	phoneNumber: '114' //Just for a sample
});
```

