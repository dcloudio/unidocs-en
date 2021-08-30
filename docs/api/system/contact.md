### uni.addPhoneContact(OBJECT)
调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式（APP端目前没有选择步骤，将直接写入），写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。
After invoking, the user can choose to use the form of "Add Contact" or "Add to Existing Contact" (there is no selection step on the APP side, and it will be written directly), write it into the phone system address book, and complete the phone Increase in contacts and contact information in the address book.

App平台提供了更多通讯录相关API，包括读取联系人，详见：[https://www.html5plus.org/doc/zh_cn/contacts.html](https://www.html5plus.org/doc/zh_cn/contacts.html)
App platform provides more address book related APIs, including reading contacts, Details：[https://www.html5plus.org/doc/zh_cn/contacts.html](https://www.html5plus.org/doc/zh_cn/contacts.html)

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**OBJECT 参数说明**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|photoFilePath|String|否|头像本地文件路径|
|photoFilePath|String|no|Avatars local file path|
|nickName|String|否|昵称|
|nickName|String|no|nick name|
|lastName|String|否|姓氏|
|lastName|String|no|family name|
|middleName|String|否|中间名|
|middleName|String|no|middle name|
|firstName|String|是|名字|
|firstName|String|yes|name|
|remark|String|否|备注|
|remark|String|no|remark|
|mobilePhoneNumber|String|否|手机号|
|mobilePhoneNumber|String|no|cell-phone number|
|weChatNumber|String|否|微信号|
|weChatNumber|String|no|WeChat ID|
|addressCountry|String|否|联系地址国家|
|addressCountry|String|no|Contact Address Country|
|addressState|String|否|联系地址省份|
|addressState|String|no|Contact Address Provinces|
|addressCity|String|否|联系地址城市|
|addressCity|String|no|Contact Address City|
|addressStreet|String|否|联系地址街道|
|addressStreet|String|no|Contact Address Street|
|addressPostalCode|String|否|联系地址邮政编码|
|addressPostalCode|String|no|Contact Address postal code|
|organization|String|否|公司|
|organization|String|no|corporation|
|title|String|否|职位|
|title|String|no|position|
|workFaxNumber|String|否|工作传真|
|workFaxNumber|String|no|work fax|
|workPhoneNumber|String|否|工作电话|
|workPhoneNumber|String|no|work phone|
|hostNumber|String|否|公司电话|
|hostNumber|String|no|company tel|
|email|String|否|电子邮件|
|email|String|no|EMail|
|url|String|否|网站|
|url|String|no|website|
|workAddressCountry|String|否|工作地址国家|
|workAddressCountry|String|no|Work Address Country|
|workAddressState|String|否|工作地址省份|
|workAddressState|String|no|Work address province|
|workAddressCity|String|否|工作地址城市|
|workAddressCity|String|no|Work Address City|
|workAddressStreet|String|否|工作地址街道|
|workAddressStreet|String|no|Work Address Street|
|workAddressPostalCode|String|否|工作地址邮政编码|
|workAddressPostalCode|String|no|Work address postal code|
|homeFaxNumber|String|否|住宅传真|
|homeFaxNumber|String|no|Residential fax|
|homePhoneNumber|String|否|住宅电话|
|homePhoneNumber|String|no|Home phone|
|homeAddressCountry|String|否|住宅地址国家|
|homeAddressCountry|String|no|Residential address Country|
|homeAddressState|String|否|住宅地址省份|
|homeAddressState|String|no|Residential address province|
|homeAddressCity|String|否|住宅地址城市|
|homeAddressCity|String|no|Residential address City|
|homeAddressStreet|String|否|住宅地址街道|
|homeAddressStreet|String|no|Residential address Street|
|homeAddressPostalCode|String|否|住宅地址邮政编码|
|homeAddressPostalCode|String|no|Residential address postal code|
|success|Function|否|接口调用成功的回调|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**回调结果**
**Callback Result**

|回调类型|errMsg|说明|
|Callback Type|errMsg|Description|
|:-|:-|:-|
|success|ok|添加成功|
|success|ok|success|
|cancel|fail cancel|用户取消操作|
|cancel|fail cancel|User cancel operation|
|fail|fail ${detail}|调用失败，detail 加上详细信息。|
|fail|fail ${detail}|The call failed,add the details.|

**示例**
**Exemple**

```javascript
uni.addPhoneContact({
	nickName: '昵称',
	lastName: '姓',
	firstName: '名',
	remark: '备注',
	mobilePhoneNumber: '114',
	weChatNumber: 'wx123',
	success: function () {
		console.log('success');
	},
	fail: function () {
		console.log('fail');
	}
});
```

**注意**

- 手机OS对通讯录访问有严格的权限限制和要求。App端获取通讯录相关权限，参考[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- Mobile OS has strict limits and requirements on address book access.When used in mini programs, it should be noted that the carrier of APP to obtain the address book relevant permissions.
- 打包App时，云打包则需要在manifest中配置权限和模块，离线打包需自行在原生工程中配置。
- When package App,Cloud packaging needs to configure permissions and modules in the manifest, while offline packaging needs to configure itself in the native project.
