### uni.makePhoneCall(OBJECT)
拨打电话。
Make a phone call.

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|phoneNumber|String|是|需要拨打的电话号码|
|phoneNumber|String|yes|The number to call|
|success|Function|否|接口调用成功的回调|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**示例**
**Exemple**

```javascript
uni.makePhoneCall({
	phoneNumber: '114' 
	//仅为示例
	//Just an example
});
```


注：App端关于电话短信的扩展文档
Note: The extended document on the phone SMS on the App side
- Android不弹出询问框直接拨打电话：[https://ask.dcloud.net.cn/question/4035](https://ask.dcloud.net.cn/question/4035)
- Android dials directly without popping up the inquiry box: [https://ask.dcloud.net.cn/question/4035](https://ask.dcloud.net.cn/question/4035)
- 发送短信：[http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
- Send SMS: [http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
- Android读取短信验证码：[http://ask.dcloud.net.cn/article/676](http://ask.dcloud.net.cn/article/676)
- Android read SMS verification code: [http://ask.dcloud.net.cn/article/676](http://ask.dcloud.net.cn/article/676)
- Android遍历读取短信：[https://ask.dcloud.net.cn/article/12934](https://ask.dcloud.net.cn/article/12934)
- Android traverse to read SMS: [https://ask.dcloud.net.cn/article/12934](https://ask.dcloud.net.cn/article/12934)
注意需要赋予相关权限。
Note that relevant permissions need to be granted.
