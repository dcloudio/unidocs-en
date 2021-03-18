### uni.addPhoneContact(OBJECT)
**Object Parameter description**

|Attribute|Type|Default value|Required|Description|
|:-|:-|:-|:-|
|photoFilePath|String|no|Avatars local file path|
|nickName|String|no|nick name|
|lastName|String|no|family name|
|middleName|String|no|middle name|
|firstName|String|yes|name|
|remark|String|no|remark|
|mobilePhoneNumber|String|no|cell-phone number|
|weChatNumber|String|no|WeChat ID|
|addressCountry|String|no|Contact Address Country|
|addressState|String|no|Contact Address Provinces|
|addressCity|String|no|Contact Address City|
|addressStreet|String|no|Contact Address Street|
|addressPostalCode|String|no|Contact Address postal code|
|organization|String|no|corporation|
|title|String|no|position|
|workFaxNumber|String|no|work fax|
|workPhoneNumber|String|no|work phone|
|hostNumber|String|no|company tel|
|email|String|no|EMail|
|url|String|no|website|
|workAddressCountry|String|no|Work Address Country|
|workAddressState|String|no|Work address province|
|workAddressCity|String|no|Work Address City|
|workAddressStreet|String|no|Work Address Street|
|workAddressPostalCode|String|no|Work address postal code|
|homeFaxNumber|String|no|Residential fax|
|homePhoneNumber|String|no|Home phone|
|homeAddressCountry|String|no|Residential address Country|
|homeAddressState|String|no|Residential address province|
|homeAddressCity|String|no|Residential address City|
|homeAddressStreet|String|no|Residential address Street|
|homeAddressPostalCode|String|no|Residential address postal code|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**Callback Result**

|Callback Type|errMsg|Description|
|:-|:-|:-|
|success|ok|success|
|cancel|fail cancel|User cancel operation|
|fail|fail ${detail}|The call failed,add the details.|

**Sample**

```javascript
uni.addPhoneContact({
	nickName: 'nickname',
	lastName: 'lastName',
	firstName: 'firstName',
	remark: 'remark',
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

**Tips**

- Mobile OS has strict limits and requirements on address book access.When used in mini programs, it should be noted that the carrier of  APP to obtain the address book relevant permissions
- When package App,Cloud packaging needs to configure permissions and modules in the manifest, while offline packaging needs to configure itself in the native project.
