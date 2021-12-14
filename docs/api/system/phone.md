### uni.makePhoneCall(OBJECT)
拨打电话。
Dial number.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|phoneNumber|String|是|需要拨打的电话号码|
| phoneNumber| String| Yes| Phone number to call|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

```javascript
uni.makePhoneCall({
	//仅为示例
	// Only for illustration
	phoneNumber: '114'
});
```
