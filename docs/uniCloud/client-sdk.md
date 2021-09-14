# uniCloud客户端sdk
# uniCloud client sdk
uniCloud分为客户端和云端两部分，有些接口名称相同，参数也相近，在此列举客户端sdk内可以使用的接口/属性，避免混淆
uniCloud is divided into two parts: client and cloud. Some interfaces have the same name and similar parameters. Here are the interfaces/attributes that can be used in the client SDK to avoid confusion

## API

客户端API列表
Client API list
|API |Description |
|API														|描述																																																		|

|--															|--																																																			|

|uniCloud.callFunction()				|客户端调用云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=clientcallfunction)			|
|uniCloud.callFunction() |Client call cloud function [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=clientcallfunction) |
|uniCloud.database()						|客户端访问云数据库，获取云数据库对象引用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb)				|
|uniCloud.database() |Client accesses cloud database and obtains cloud database object references [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb) |
|uniCloud.uploadFile()					|客户端直接上传文件到云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=uploadfile)					|
|uniCloud.uploadFile() |The client directly uploads files to cloud storage [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=uploadfile) |
|uniCloud.getTempFileURL()			|客户端获取云存储文件的临时路径 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=gettempfileurl)	|
|uniCloud.getTempFileURL() |Temporary path for the client to obtain cloud storage files [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=gettempfileurl) |
|uniCloud.chooseAndUploadFile()	|客户端选择文件并上传 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)			|
|uniCloud.chooseAndUploadFile() |The client selects the file and uploads it [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile) |
|uniCloud.getCurrentUserInfo()	|获取当前用户信息 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk?id=client-getcurrentuserinfo)			|
|uniCloud.getCurrentUserInfo() |Get current user information [details](https://uniapp.dcloud.io/uniCloud/client-sdk?id=client-getcurrentuserinfo) |
|uniCloud.init()								|同时使用多个服务空间时初始化额外服务空间 [详情](https://uniapp.dcloud.net.cn/uniCloud/init)						|
|uniCloud.init() |Initialize additional service space when using multiple service spaces at the same time [details](https://uniapp.dcloud.net.cn/uniCloud/init) |

### 获取当前用户信息getCurrentUserInfo@client-getcurrentuserinfo
### Get current user information getCurrentUserInfo@client-getcurrentuserinfo
> HBuilderX 3.1.0+
> HBuilderX 3.1.0+
解析客户端token获取用户信息。常用于在前端判断当前登录的用户状态和用户权限，比如根据不同的权限显示隐藏某些按钮。
Parse the client token to obtain user information. It is often used to judge the status of the currently logged-in user and user permissions on the front end, such as displaying and hiding certain buttons according to different permissions.
注意：不会发送网络请求，**注意这个仅仅是客户端接口，不校验token的合法性**
Note: No network request will be sent. **Note that this is only a client interface and does not verify the legitimacy of the token**
注意：需要搭配uni-id使用并要求客户端必须将token存储在storage内的`uni_id_token`内
Note: It needs to be used with uni-id and requires the client to store the token in the `uni_id_token` in the storage
用法：`uniCloud.getCurrentUserInfo()`
Usage: `uniCloud.getCurrentUserInfo()`
该方法为同步方法。
This method is a synchronous method.

**响应参数**
**Response parameters**

| 字段			| 类型	| 说明							|
| Field | Type | Description |
| ---			| ---	| ---							|
| uid			| Number|当前用户uid						|
| uid | Number|Current user uid |
| role			| Array	|用户角色列表。admin用户返回["admin"]			|
| role | Array |List of user roles. admin user returns ["admin"] |
| permission	| Array	|用户权限列表。注意admin角色此数组为空|
| permission | Array | List of user permissions. Note that this array of admin roles is empty |
未能获取用户信息时返回以下结果
The following results are returned when failing to obtain user information

```js
{
  uid: null,
  role: [],
  permission: []
}
```

**示例**
**Example**
```js
console.log(uniCloud.getCurrentUserInfo().role.indexOf('admin')>-1); // 如果是admin用户的话，打印结果为true(If it is an admin user, the print result is true)
```

### 新增拦截器@add-interceptor
### Add interceptor @add-interceptor
> 新增于HBuilderX 3.1.20
> Added in HBuilderX 3.1.20
接口形式：`uniCloud.addInterceptor(String apiName, Object interceptorMap)`
Interface form: `uniCloud.addInterceptor(String apiName, Object interceptorMap)`
**平台兼容性**
**Platform compatibility**
|阿里云	|腾讯云	|
|Alibaba Cloud |Tencent Cloud |
|----		|----		|
|√			|√			|

**入参说明**
**Instructions for participation**
| 字段					| 类型	| 必填| 说明																												|
| Field | Type | Required | Description |
| ---						| ---		| ---	| ---																													|
| apiName				| string| 是	| 要拦截的Api名称，可选值：callFunction、database、uploadFile	|
| apiName | string| Yes | Api name to be intercepted, optional values: callFunction, database, uploadFile |
| interceptorMap| object| 是	| 要添加的拦截器																							|
| interceptorMap| object| is | the interceptor to be added |

**interceptorMap参数说明**
**InterceptorMap parameter description**
|参数名		|类型			|必填	|默认值	|说明					|平台差异说明	|
|Parameter name |Type |Required |Default value |Description |Platform difference description |
|---			|---			|---	|---		|---					|---					|
|invoke		|Function	|否		|				|拦截前触发		|							|
|invoke |Function |No | |Trigger before interception | |
|success	|Function	|否		|				|成功回调拦截	|							|
|success |Function |No | |Successful callback interception | |
|fail			|Function	|否		|				|失败回调拦截	|							|
|fail |Function |No | |Failed callback interception | |
|complete	|Function	|否		|				|完成回调拦截	|							|
|complete |Function |No | |Complete callback interception | |
示例
Example
```js
uniCloud.addInterceptor('callFunction', {
  invoke(param) {
    // param为拦截Api的参数 例 {name: 'functionName', data: {'functionParam1': 1, 'functionParam2': 2}}
	//param is the parameter of intercepting Api. Example {name:'functionName', data: {'functionParam1': 1,'functionParam2': 2}}
    // 此处返回错误可终止api执行
	// Return an error here to terminate the api execution
  },
  success(res) {
    // res为callFunction的返回值，此处可以对返回值进行修改
	// res is the return value of callFunction, the return value can be modified here
  },
  fail(err) {
    // err为callFunction抛出的错误
	// Error thrown by err for callFunction
  },
  complete(res){
    // complete内res为上面的res或err
	// res in complete is the res or err above
  }
})
```

### 移除拦截器@remove-interceptor
### Remove the interceptor @remove-interceptor
> 新增于HBuilderX 3.1.20
> Added in HBuilderX 3.1.20
接口形式：`uniCloud.removeInterceptor(String apiName, Object interceptorMap)`
Interface form: `uniCloud.removeInterceptor(String apiName, Object interceptorMap)`
**入参说明**
**Instructions for participation**

| 字段					| 类型	| 必填| 说明																												|
| Field | Type | Required | Description |
| ---						| ---		| ---	| ---																													|
| apiName				| string| 是	| 要拦截的Api名称，可选值：callFunction、database、uploadFile	|
| apiName | string| Yes | Api name to be intercepted, optional values: callFunction, database, uploadFile |
| interceptorMap| object| 是	| 要移除的拦截器，选填，不传递此参数时移除此Api所有拦截器			|
| interceptorMap| object| Yes | The interceptor to be removed, optional. If this parameter is not passed, all interceptors for this Api will be removed |

**interceptorMap参数说明**
**InterceptorMap parameter description**

|参数名		|类型			|必填	|默认值	|说明					|平台差异说明	|
|Parameter name |Type |Required |Default value |Description |Platform difference description |
|---			|---			|---	|---		|---					|---					|
|invoke		|Function	|否		|				|拦截前触发		|							|
|invoke |Function |No | |Trigger before interception | |
|success	|Function	|否		|				|成功回调拦截	|							|
|success |Function |No | |Successful callback interception | |
|fail			|Function	|否		|				|失败回调拦截	|							|
|fail |Function |No | |Failed callback interception | |
|complete	|Function	|否		|				|完成回调拦截	|							|
|complete |Function |No | |Complete callback interception | |

**注意：**
**Notice:**
- 要移除的拦截器内方法需和添加的方法一致才可以移除，详情见下方示例
- The method in the interceptor to be removed must be the same as the method added before it can be removed. See the example below for details

```js
// 错误用法，无法移除invoke拦截器
// Wrong usage, unable to remove the invoke interceptor
uniCloud.addInterceptor('callFunction', {
  invoke(param) {
    console.log('callFunction invoked, with param:',param)
  }
})
uniCloud.removeInterceptor('callFunction', {
  invoke(param) {
    console.log('callFunction invoked, with param:',param)
  }
})

// 正确用法
// correct usage
function invokeInterceptor(param) {
  console.log('callFunction invoked, with param:',param)
}
uniCloud.addInterceptor('callFunction', {
  invoke: invokeInterceptor
})
uniCloud.removeInterceptor('callFunction', {
  invoke: invokeInterceptor
})
```

## 属性
## Attributes
### 获取当前uniCloud实例的服务商
### Get the service provider of the current uniCloud instance
用法：`uniCloud.config.provider`
Usage: `uniCloud.config.provider`
访问此属性会返回`tencent`、`aliyun`分别代表腾讯云和阿里云
Accessing this property will return `tencent` and `aliyun` representing Tencent Cloud and Alibaba Cloud respectively