## uni.requestSubscribeMessage(Object object)


**平台差异说明**
**Platform Difference Description**

|App|H5	|微信小程序				|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|元服务|
|:-:	|:-:|:-:							|:-:					|:-:				|:-:				|:-:			|:-:|
|x		|x	|基础库版本>=2.8.2|x						|x					|x					|x				|√|

**object参数说明**
**object parameter description**

|属性			|类型			|默认值	|必填	|说明																																																																																																																																																|
|property |type |default |required |description |
|:-:			|:-:			|:-:		|:-:	|:-:																																																																																																																																																|
|tmplIds	|Array		|				|是		|需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置	|
|tmplIds |Array | |Yes |A collection of ids of message templates that need to be subscribed, a maximum of 3 messages can be subscribed in one call (Note: One-time subscription after iOS client version 7.0.6 and Android client version 7.0.7/ Long-term subscriptions only support multiple template messages. iOS client version 7.0.5 and Android client version 7.0.6 only support one template message per subscription.) The message template id is in [WeChat Public Platform (mp.weixin.qq.com] )-function-subscribe message] configuration |
|success	|function	|				|否		|接口调用成功的回调函数																																																																																																																																							|
|success |function | |No |Callback function for successful interface call |
|fail			|function	|				|否		|接口调用失败的回调函数																																																																																																																																							|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）																																																																																																																										|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


**注意**
**Notice**

- 用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面
- After the user clicks or initiates a payment callback, the subscription message interface can be called up

**平台说明**
**Platform Description**

- [微信小程序订阅消息参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)
- [WeChat Mini Program Subscription Message Reference Document](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)


**object.success 返回值**
**object.success return value**

|属性				|类型		|说明																																																																																																																																																																														|
|property |type |description |
|:-:				|:-:		|:-:																																																																																																																																																																														|
|errMsg			|String	|接口调用成功时errMsg值为'requestSubscribeMessage:ok'																																																																																																																																																						|
|errMsg |String |The errMsg value is 'requestSubscribeMessage:ok' when the interface call is successful |
|TEMPLATE_ID|String| [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息|
|TEMPLATE_ID|String| [TEMPLATE_ID] is the dynamic key, the template id, and the values include 'accept', 'reject', and 'ban'. 'accept' indicates that the user agrees to subscribe to the template message corresponding to the id, 'reject' indicates that the user refuses to subscribe to the template message corresponding to the id, and 'ban' indicates that it has been banned in the background. For example, { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} means that the user agrees to subscribe to this message zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE|

**object.fail 返回值**
**object.fail return value**

|属性		|类型		|说明									|
|property |type |description |
|:-:		|:-:		|:-:									|
|errMsg	|String	|接口调用失败错误信息	|
|errMsg |String |Interface call failed error message |
|errCode|Number	|接口调用失败错误码		|
|errCode|Number |Interface call failure error code |

**示例代码**
**Sample code**
```
uni.requestSubscribeMessage({
  tmplIds: [''],
  success (res) { }
})
```
