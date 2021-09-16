### 生物认证说明
### Biometric authentication instructions

生物认证，又称活体检测。它包含指纹识别、人脸识别这两部分。即通过人体身体特征来进行身份认证识别。
Biometric authentication, also known as in vivo testing. It includes fingerprint recognition and face recognition. That is, identity authentication is performed through the characteristics of the human body.

### uni.startSoterAuthentication(OBJECT)

开始 SOTER 生物认证。
Started SOTER biometric authentication.

**平台差异说明**
**Platform difference description**

|App				|H5|
|:-				|:-|
|√（2.3.8+）	|x	|

App端在2.3.8版以前，可在插件市场获取[指纹相关插件](https://ext.dcloud.net.cn/plugin?id=358)。
App is before version 2.3.8, and you can get [fingerprint related plug-ins] (https://ext.dcloud.net.cn/plugin?id=358) in the plug-in market.

**OBJECT参数说明**
**OBJECT parameter description**

|属性					|类型		|默认值	|必填	|说明					| 平台差异说明	|
|Attribute |Type |Default value |Required |Description | Platform difference description |
|:-					|:-		|:-		|:-	|:-				|:-					|
|requestAuthModes	|Array	|			|是	|请求使用的可接受的生物认证方式		|APP		|
|requestAuthModes |Array | |Yes |The acceptable biometric authentication method used by the request |APP |
|authContent		|String	|''		|否	|验证描述，即识别过程中显示在界面上的对话框提示内容	|APP|
|authContent |String |'' |No |Verification description, that is, the prompt content of the dialog box displayed on the interface during the recognition process |APP|
|success				|Function|			|否	|接口调用成功的回调函数	|						|
|success |Function| |No |Callback function for successful interface call | |
|fail					|Function|			|否	|接口调用失败的回调函数	|						|
|fail |Function| |No |Callback function for interface call failure | |
|complete			|Function|			|否	|接口调用结束的回调函数（调用成功、失败都会执行）	|						|
|complete |Function| |No |Callback function at the end of the interface call (it will be executed if the call succeeds or fails) | |

**OBJECT.requestAuthModes说明**

|值					|说明			|
|Value |Description |
|:-					|:-				|
|fingerPrint|指纹识别	|
|fingerPrint|Fingerprint Recognition |
|facial			|人脸识别	|
|facial |Face Recognition |

注意：
Notice:
- App端指纹识别，Android平台从Android6.0起才提供了官方API，uni-app也是从Android6起支持。对于更低版本的安卓，某些rom私有的指纹识别API，uni-app并不支持。
- App-side fingerprint recognition, the Android platform only provides the official API from Android 6.0, and uni-app is also supported from Android 6. For lower versions of Android, some ROM private fingerprint recognition APIs are not supported by uni-app.
- App端人脸识别，iOS平台使用自带的faceID，而Android平台需要依赖三方SDK方可实现，可在插件市场搜索[人脸识别](https://ext.dcloud.net.cn/search?q=%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB)插件
- App-side face recognition, the iOS platform uses its own faceID, while the Android platform needs to rely on the third-party SDK to achieve it. You can search for [Face Recognition](https://ext.dcloud.net.cn/search) in the plug-in market ?q=%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB) plugin

**OBJECT.success返回值说明**
**OBJECT.success return value description**

|属性						|类型		|说明			|平台差异说明	|
|Attribute |Type |Description |Platform difference description |
|:-						|:-		|:-			|:-				|
|authMode				|string	|生物认证方式|APP				|
|authMode |string |Biometric authentication method|APP |
|errCode					|number	|错误码		|					|
|errCode |number |error code | |
|errMsg					|string	|错误信息		|					|
|errMsg |string |Error message | |

**错误码说明**
**Error code description**

|错误码	|错误码说明																				|
|Error Code |Description of Error Code |
|:-			|:-																								|
|0			|识别成功																					|
|0 |Recognition successful |
|90001	|本设备不支持生物认证														|
|90001 |This device does not support biometric authentication |
|90002	|用户未授权使用该生物认证接口											|
|90002 |The user is not authorized to use the biometric authentication interface |
|90003	|请求使用的生物认证方式不支持											|
|90003 |The requested biometric authentication method is not supported |
|90004	|未传入challenge或challenge长度过长（最长512字符）|
|90004 |The challenge is not passed in or the length of the challenge is too long (maximum 512 characters)|
|90005	|auth_content长度超过限制（最长42个字符）					|
|90005 |The length of auth_content exceeds the limit (up to 42 characters) |
|90007	|内部错误																					|
|90007 |Internal Error |
|90008	|用户取消授权																			|
|90008 |User cancel authorization |
|90009	|识别失败																					|
|90009 |Recognition failed |
|90010	|重试次数过多被冻结																|
|90010 |Too many retries are frozen |
|90011	|用户未录入所选识别方式														|
|90011 |The user has not entered the selected identification method |


### uni.checkIsSupportSoterAuthentication(OBJECT)

获取本机支持的 SOTER 生物认证方式
Get the SOTER biometric authentication method supported by this machine

**OBJECT参数说明**
**OBJECT parameter description**

|属性			|类型			|默认值	|必填	|说明																							|
|Attribute |Type |Default value |Required |Description |
|:-				|:-				|:-			|:-		|:-																								|
|success	|function	|				|否		|接口调用成功的回调函数														|
|success |function | |No |Callback function for successful interface call |
|fail			|function	|				|否		|接口调用失败的回调函数														|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |Callback function for the end of the interface call (it will be executed if the call succeeds or fails) |

**OBJECT.success返回值说明**
**OBJECT.success return value description**
|属性				|类型	|说明																		|
|Attribute |Type |Description |
|:-					|:-		|:-																			|
|supportMode|Array|该设备支持的可被SOTER识别的生物识别方式|
|supportMode|Array|The biometric methods supported by the device that can be recognized by SOTER|

### uni.checkIsSoterEnrolledInDevice(OBJECT)

获取设备内是否录入如指纹等生物信息的接口
An interface for obtaining whether biometric information such as fingerprints is entered in the device

**OBJECT参数说明**
**OBJECT parameter description**

|属性					|类型			|默认值	|必填	|说明																							|
|Attribute |Type |Default value |Required |Description |
|:-:					|:-:			|:-:		|:-:	|:-:																							|
|checkAuthMode|string		|				|是		|认证方式																					|
|checkAuthMode|string | |Yes |Authentication Mode |
|success			|function	|				|否		|接口调用成功的回调函数														|
|success |function | |No |Callback function for successful interface call |
|fail					|function	|				|否		|接口调用失败的回调函数														|
|fail |function | |No |Callback function for interface call failure |
|complete			|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |Callback function for the end of the interface call (it will be executed if the call succeeds or fails) |

**OBJECT.checkAuthMode合法值**
**OBJECT.checkAuthMode legal value**

|值					|说明			|
|Value |Description |
|:-					|:-				|
|fingerPrint|指纹识别	|
|fingerPrint|Fingerprint Recognition |
|facial			|人脸识别	|
|facial |Face Recognition |

**OBJECT.success返回值说明**
**OBJECT.success return value description**

|属性				|类型		|说明						|
|Attribute |Type |Description |
|:-					|:-			|:-							|
|isEnrolled	|boolean|是否已录入信息	|
|isEnrolled |boolean|Is the information entered |
|errMsg			|string	|错误信息				|
|errMsg |string |Error message |

#### 代码示例
#### Code example

```html

<template>
	<view class="content">
		<button type="primary" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
		<button type="primary" @click="checkIsSupportSoterAuthentication">Check supported authentication methods</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">Check whether the fingerprint is entered</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">Check if FaceID is entered</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">Start fingerprint authentication</button>
		<button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
		<button type="primary" @click="startSoterAuthenticationFaceID">Start FaceID authentication</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			checkIsSupportSoterAuthentication() {
				uni.checkIsSupportSoterAuthentication({
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			checkIsSoterEnrolledInDeviceFingerPrint() {
				uni.checkIsSoterEnrolledInDevice({
					checkAuthMode: 'fingerPrint',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			checkIsSoterEnrolledInDeviceFaceID() {
				uni.checkIsSoterEnrolledInDevice({
					checkAuthMode: 'facial',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			startSoterAuthenticationFingerPrint() {
				uni.startSoterAuthentication({
					requestAuthModes: ['fingerPrint'],
					challenge: '123456',
					authContent: '请用指纹解锁',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			startSoterAuthenticationFaceID() {
				uni.startSoterAuthentication({
					requestAuthModes: ['facial'],
					challenge: '123456',
					authContent: '请用FaceID解锁',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	button {
		width: 200px;
		margin: 20px auto;
	}
</style>


```

#### 注意事项
#### Precautions

- App端自2.3.8版本起开始支持生物认证，更低版本或想使用指纹功能，可在插件市场获取[插件](https://ext.dcloud.net.cn/plugin?id=358)
- App has been supporting biometric authentication since version 2.3.8. For lower versions or if you want to use the fingerprint function, you can get [plugin](https://ext.dcloud.net.cn/plugin?id=358) in the plug-in market
- App端的人脸识别，仅支持iOS端的faceID。Android端需要依赖三方SDK方可实现，可在插件市场搜索[人脸识别](https://ext.dcloud.net.cn/search?q=%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB)插件
- Face recognition on the App side only supports faceID on the iOS side. Android needs to rely on third-party SDKs to achieve this. You can search for [Face Recognition](https://ext.dcloud.net.cn/search?q=%E4%BA%BA%E8%84%B8%) in the plug-in market E8%AF%86%E5%88%AB) plugin
- App端打包时，注意需要在manifest的模块中选择指纹和faceID，否则打包后无法运行相关功能。
- When packaging the App, pay attention to selecting fingerprint and faceID in the module of the manifest, otherwise the relevant functions cannot be run after packaging.
- hello uni-app已经集成相关示例，最新版HBuilderX新建新版hello uni-app示例项目真机运行可见，在API-设备-生物认证里。
- The hello uni-app has integrated relevant examples. The latest version of HBuilderX has created a new version of the hello uni-app example project, which can be seen on the real machine, in the API-device-biological authentication.
