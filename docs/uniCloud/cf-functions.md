
## 简介@intro
## Introduction @intro

云函数是运行在云端的 `JavaScript` 代码，和普通的`Node.js`开发一样，熟悉`Node.js`的开发者可以直接上手。
Cloud functions are `JavaScript` codes that run in the cloud. Like ordinary `Node.js` development, developers who are familiar with `Node.js` can get started directly.

如下是将传入的两个参数求和并返回客户端的云函数代码示例：
The following is an example of cloud function code that sums the two parameters passed in and returns to the client:

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//event is the parameter uploaded by the client
	return {
    sum:event.a + event.b
  }
}
```

云函数的传入参数有两个，一个是`event`对象，一个是`context`对象。`event`指的是触发云函数的事件，当客户端调用云函数时，`event`就是客户端调用云函数时传入的参数。`context` 对象包含了此处调用的调用信息和运行状态，可以用它来了解服务运行的情况。`uniCloud`会自动将客户端的操作系统（`os`）、运行平台（`platform`）、应用信息（`appid`）等注入`context`中，开发者可通过`context`获取每次调用的上下文，如下是一个示例：
There are two incoming parameters of the cloud function, one is the `event` object and the other is the `context` object. `event` refers to the event that triggers the cloud function. When the client calls the cloud function, `event` is the parameter passed in when the client calls the cloud function. The `context` object contains the calling information and running status of the call here, which can be used to understand the running status of the service. `uniCloud` will automatically inject the client's operating system (`os`), running platform (`platform`), application information (`appid`), etc. into the `context`. Developers can get the information of each call through `context` Context, the following is an example:

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数(event is the parameter uploaded by the client)
  //...
  //context中可获取客户端调用的上下文(The context of the client call can be obtained in the context)
  let clientIP = context.CLIENTIP // 客户端ip信息(Client ip information)
  let clientUA = context.CLIENTUA // 客户端user-agent(Client user-agent)
  let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}(Current environment information {spaceId:'xxx',provider:'tencent'})
  // 以下四个属性只有使用uni-app以callFunction方式调用才能获取(The following four attributes can only be obtained by calling uni-app in callFunction mode)
  let os = context.OS //客户端操作系统，返回值：android、ios	等(Client operating system, return value: android, ios, etc.)
  let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等(Run the platform, the return value is mp-weixin, app-plus, etc.)
  let appid = context.APPID // manifest.json中配置的appid(appid configured in manifest.json)
  let deviceId = context.DEVICEID // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId(Client ID, newly added in HBuilderX 3.1.0, same as the deviceId obtained by uni-app client getSystemInfo interface)
	//... //其它业务代码(Other business codes)
}
```


云函数url化的场景下无法获取`context.OS`、`context.PLATFORM`、`context.APPID`、`context.CLIENTUUID`
Cannot get `context.OS`, `context.PLATFORM`, `context.APPID`, `context.CLIENTUUID` in the scenario of urlization of cloud functions

>在云函数URL化的场景无法获取客户端平台信息，可以在调用依赖客户端平台的接口接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息供其他插件（如：uni-id）使用
>The client platform information cannot be obtained in the scenario of cloud function URLization. You can manually pass in the client platform information for other plug-ins (such as : Uni-id) use

例：
example:

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app-plus'
}
```

云函数中如果要使用其他服务（比如mysql数据库、redis等），可以按照nodejs的写法即可。但注意这些非uniCloud数据库和云函数运行环境不在一起，访问速度受影响。
If you want to use other services in the cloud function (such as mysql database, redis, etc.), you can follow the wording of nodejs. But note that these non-uniCloud databases and cloud function operating environments are not together, and the access speed will be affected.

**注意事项**
**Precautions**

- 服务商为阿里云时，暂不可使用相对路径读取文件（比如`fs.readFileSync('./info.txt')`），可以使用绝对路径`fs.readFileSync(path.resolve(__dirname,'./info.txt'))`
- When the service provider is Alibaba Cloud, you cannot use relative paths to read files (such as `fs.readFileSync('./info.txt')`), but you can use the absolute path `fs.readFileSync(path.resolve(__dirname,' ./info.txt'))`
- event大小不可超过100kb
- Event size cannot exceed 100kb

## API列表
## API list


云函数支持nodejs和js的标准API，但除了标准API外，uniCloud扩展了一批新API，实际开发中更常用的是uniCloud的扩展API。见下：
Cloud functions support the standard APIs of nodejs and js, but in addition to the standard APIs, uniCloud has extended a batch of new APIs. In actual development, uniCloud's extended APIs are more commonly used. See below:


|API						|描述																					|
|API |Description |
|--							|--																						|

|uniCloud.callFunction()	|客户端调用云函数 [见下](uniCloud/cf-functions?id=clientcallfunction)；云函数中调用另一个云函数 [见下](uniCloud/cf-functions?id=callbyfunction)				|
|uniCloud.callFunction() |Client call cloud function [see below](uniCloud/cf-functions?id=clientcallfunction); call another cloud function in cloud function[see below](uniCloud/cf-functions?id=callbyfunction ) |
|uniCloud.database()		|云数据库对象 [详情](uniCloud/cf-database.md)											|
|uniCloud.database() |Cloud database object [details](uniCloud/cf-database.md) |
|uniCloud.uploadFile()		|云函数上传文件到云存储 [详情](uniCloud/storage?id=clouduploadfile)							|
|uniCloud.uploadFile() |Cloud function upload files to cloud storage [details](uniCloud/storage?id=clouduploadfile) |
|uniCloud.downloadFile()	|云函数下载云存储的文件到云函数运行环境 [详情](uniCloud/storage?id=clouddownloadfile)	|
|uniCloud.downloadFile() |Cloud function downloads files stored in the cloud to the cloud function operating environment [details](uniCloud/storage?id=clouddownloadfile) |
|uniCloud.deleteFile()		|云函数删除云存储的文件 [详情](uniCloud/storage?id=clouddeletefile)							|
|uniCloud.deleteFile() |Cloud function to delete cloud storage files [details](uniCloud/storage?id=clouddeletefile) |
|uniCloud.getTempFileURL()	|获取云存储文件的临时路径 [详情](uniCloud/storage?id=cloudgettempfileurl)					|
|uniCloud.getTempFileURL() |Get the temporary path of cloud storage files [details](uniCloud/storage?id=cloudgettempfileurl) |
|uniCloud.httpclient		|云函数中通过http连接其他系统 [见下](uniCloud/cf-functions?id=httpclient)				|
|uniCloud.httpclient |Connect to other systems via http in cloud functions [see below](uniCloud/cf-functions?id=httpclient) |
|uniCloud.logger			|云函数中打印日志到uniCloud日志记录系统（非HBuilderX控制台）[详情](uniCloud/cf-logger)	|
|uniCloud.logger |Print logs from cloud functions to uniCloud logging system (non-HBuilderX console) [details](uniCloud/cf-logger) |
|uniCloud.sendSms()			|发送短信 [详见](uniCloud/send-sms.md)													|
|uniCloud.sendSms() |Send SMS [details](uniCloud/send-sms.md) |


## 特殊属性
## Special attributes

**注意：下面所有的“客户端”均是相对于云函数而言，如果你使用自己的服务器调用云函数此时客户端是指你的服务器**
**Note: All the "clients" below are relative to cloud functions. If you use your own server to call cloud functions, then the client refers to your server**

### 获取客户端IP@clientip
### Get client IP@clientip

```js
'use strict';
exports.main = async (event, context) => {
  let clientIP = context.CLIENTIP // 客户端ip信息(Client ip information)
}
```

### 获取客户端user-agent@client-user-agent
### Get the client user-agent@client-user-agent

```js
'use strict';
exports.main = async (event, context) => {
  let clientUA = context.CLIENTUA // 客户端user-agent信息(Client user-agent information)
}
```

### 获取服务空间信息@context-space-info
### Get service space information @context-space-info

```js
'use strict';
exports.main = async (event, context) => {
  let spaceInfo = context.SPACEINFO // 当前环境信息 {spaceId:'xxx',provider:'tencent'}(Current environment information {spaceId:'xxx',provider:'tencent'})
}
```

### 获取云函数调用来源@context-source
### Get cloud function call source @context-source

```js
'use strict';
exports.main = async (event, context) => {
  let source = context.SOURCE
  // 当前云函数被何种方式调用
  // How is the current cloud function called?
  // client   客户端callFunction方式调用
  // client client callFunction method call
  // http     云函数url化方式调用
  // http cloud function url-based call
  // timing   定时触发器调用
  // timing timing trigger call
  // server   由管理端调用，HBuilderX里上传并运行，仅阿里云支持，腾讯云这种方式调用也是client
  // The server is called by the management terminal, uploaded and run in HBuilderX, only supported by Alibaba Cloud, and this way of calling Tencent Cloud is also the client
  // function 由其他云函数callFunction调用，仅阿里云支持，腾讯云这种方式调用也是client
  // function is called by other cloud function callFunction, only supported by Alibaba Cloud, and Tencent Cloud in this way is also a client
}
```
### 其他客户端信息@client-info
### Other client information @client-info

**以下四个属性只有使用uni-app以callFunction方式调用才能获取**
**The following four attributes can only be obtained by calling uni-app in callFunction mode**

```js
'use strict';
exports.main = async (event, context) => {
  let os = context.OS //客户端操作系统，返回值：android、ios	等(Client operating system, return value: android, ios, etc.)
  let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等(Run the platform, the return value is mp-weixin, app-plus, etc.)
  let appid = context.APPID // manifest.json中配置的appid(appid configured in manifest.json)
  let deviceId = context.DEVICEID // 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId(Client ID, newly added in HBuilderX 3.1.0, same as the deviceId obtained by uni-app client getSystemInfo interface)
}
```

## 访问数据库
## Access the database

云函数中支持访问本服务空间下的数据库，调用方式详见[规范](uniCloud/cf-database.md)
The cloud function supports access to the database under this service space, and the calling method is detailed in [Specification](uniCloud/cf-database.md)

## 访问HTTP服务@httpclient
## Access HTTP service @httpclient

`uniCloud`提供了`uniCloud.httpclient`供开发者使用。无需额外依赖，就可以请求任何 HTTP 和 HTTPS 协议的 Web 服务。`uniCloud.httpclient`返回的是一个[urllib实例](https://github.com/node-modules/urllib)。
`uniCloud` provides `uniCloud.httpclient` for developers to use. Without additional dependency, you can request any HTTP and HTTPS protocol Web services. What `uniCloud.httpclient` returns is a [urllib instance](https://github.com/node-modules/urllib).

**uniCloud.httpclient.request(URL,requestOptions)**
**uniCloud.httpclient.request(URL,requestOptions)**

**requestOptions参数说明**
**requestOptions parameter description**

|参数名							|类型		|是否必填	|默认值	|说明|
|Parameter name |Type |Required or not |Default value |Description|
|----								|----			|----			|----		|----|
|method							|String			| -				|GET		|HTTP 请求方法, 默认为：GET. 可选值： GET, POST, DELETE, PUT|
|method |String |-|GET |HTTP request method, default: GET. Optional values: GET, POST, DELETE, PUT|
|data								|Object| -				|-			|发送的数据|
|data |Object|-|- |Sent data|
|dataAsQueryString	|Boolean	| -				|true		|是否强制转换data为queryString|
|dataAsQueryString |Boolean |-|true |Whether to force data to queryString|
|content						|String &#124; Buffer	| -				|-			|手动设置请求的payload，设置后会忽略data|
|content |String &#124; Buffer |-|- |Set the requested payload manually, after setting, data will be ignored|
|stream							|ReadStream		|-				|-			|发送请求正文的可读数据流|
|stream |ReadStream |- |- |Send the readable data stream of the request body|
|writeStream				|WriteStream|-				|-			|接受响应数据的可写数据流|
|writeStream |WriteStream|- |- |Writable data stream that accepts response data|
|consumeWriteStream	|Boolean	|-				|true		|是否等待 writeStream 完全写完才算响应全部接收完毕|
|consumeWriteStream |Boolean |- |true |Whether to wait for the writeStream to be completely written before the response is all received|
|files							|Array&lt;ReadStream&#124;Buffer&#124;String&gt; &#124; Object &#124; ReadStream &#124; Buffer &#124; String| -				|-			|上传的文件，设置后将会使用 multipart/form-data 格式。如果未设置method，将会自动将method设置为POST|
|files |Array&lt;ReadStream&#124;Buffer&#124;String&gt; &#124; Object &#124; ReadStream &#124; Buffer &#124; String|-|- |Uploaded files will use multipart after setting /form-data format. If method is not set, method will be automatically set to POST|
|contentType				|String	| -				|-			|上传数据的格式，设为`json`会自动在`header`内设置`Content-Type: application/json`|
|contentType |String |-|- |The format of the uploaded data, set to `json` will automatically set `Content-Type: application/json` in the `header`|
|nestedQuerystring	|Boolean	| -				|-			|转换data为queryString时默认不支持嵌套Object，此选项设置为true则支持转换嵌套Object|
|nestedQuerystring |Boolean |-|- | When converting data to queryString, nested Objects are not supported by default, and this option is set to true to support conversion of nested Objects|
|dataType						|String		| -				|-			|返回的数据格式，可选值为 'json'（返回数据转为JSON），'text'（返回数据转为字符串）， ''（返回数据不做处理，默认值）|
|dataType |String |-|- |Returned data format, optional values ​​are'json' (returned data is converted to JSON),'text' (returned data is converted to string),'' (returned data is not processed, Default value)|
|fixJSONCtlChars		|Boolean	|-				|false	|在JSON.parse之前处理响应结果中的控制字符（Control Character）|
|fixJSONCtlChars |Boolean |- |false |Control Characters in the response result are processed before JSON.parse|
|headers						|Object	| -				|-			|请求头|
|headers |Object |-|- |Request header|
|timeout						|Number &#124; Array| -				|-			|超时时间设置。设置为数组时第一项为请求超时，第二项为返回超时。设置为数字时相当于同时设置请求超时和返回超时，即`timeout:3000`效果等于`timeouut:[3000,3000]`|
|timeout |Number &#124; Array|-|- |Timeout setting. When set to an array, the first item is request timeout, and the second item is return timeout. When set to a number, it is equivalent to setting the request timeout and return timeout at the same time, that is, the effect of `timeout:3000` is equal to `timeouut:[3000,3000]`|
|auth								|String	|-				|-			|简单登录授权（Basic Authentication）参数，必须按照 `user:password` 格式设置|
|auth |String |- |- |Basic Authentication parameters, which must be set in the format of `user:password`|
|digestAuth					|String	|-				|-			|摘要登录授权（Digest Authentication）参数，必须按照 `user:password` 格式设置|
|digestAuth |String |- |- |Digest Authentication parameters must be set in the format of `user:password`|
|agent							|[http.Agent](https://nodejs.org/api/http.html#http_class_http_agent)|-				|-			|http代理，如不使用可设为false|
|agent |[http.Agent](https://nodejs.org/api/http.html#http_class_http_agent)|- |- |http agent, if not used, it can be set to false|
|httpsAgent					|[https.Agent](https://nodejs.org/api/https.html#https_class_https_agent)|-				|-			|https代理，如不使用可设为false|
|httpsAgent |[https.Agent](https://nodejs.org/api/https.html#https_class_https_agent)|- |- |https agent, if not used, it can be set to false|
|ca									|String&#124;Buffer&#124;Array|-				|-			|证书内容|
|ca |String&#124;Buffer&#124;Array|- |- |Certificate content|
|rejectUnauthorized	|Boolean|-				|true		|是否在证书不受信任时返回错误|
|rejectUnauthorized |Boolean|- |true |Whether to return an error when the certificate is not trusted|
|pfx								|String&#124;Buffer|-				|-			|包含了私钥, 证书和CA certs, 一般是 PFX 或者 PKCS12 格式|
|pfx |String&#124;Buffer|- |- |Contains private key, certificate and CA certs, usually in PFX or PKCS12 format|
|key								|String&#124;Buffer|-				|-			|PEF格式的服务器的私钥|
|key |String&#124;Buffer|- |- |The private key of the server in PEF format|
|cert								|String&#124;Buffer|-				|-			|PEM格式的服务器证书密钥|
|cert |String&#124;Buffer|- |- |Server certificate key in PEM format|
|passphrase					|String|-				|-			|私钥或pfx密码的字符串|
|passphrase |String|- |- |String of private key or pfx password|
|ciphers						|String|-				|-			|使用或排除的cipher|
|ciphers |String|- |- |ciphers used or excluded|
|secureProtocol			|String|-				|-			|SSL 使用的方法，例如，`SSLv3_method` 强制 SSL 版本为3。|
|secureProtocol |String|- |- |Method used by SSL, for example, `SSLv3_method` forces SSL version to 3. |
|followRedirect			|Boolean|-				|false	|收到3xx响应时是否自动重定向|
|followRedirect |Boolean|- |false |Whether to automatically redirect when a 3xx response is received|
|maxRedirects				|Number|-				|10			|最高重定向次数|
|maxRedirects |Number|- |10 |Maximum number of redirects|
|formatRedirectUrl	|Function|-				|-			|手动格式化url|
|formatRedirectUrl |Function|- |- |Manually format url|
|beforeRequest			|Function|-				|-			|请求发送前的钩子|
|beforeRequest |Function|- |- |Hook before request is sent|
|streaming					|Boolean|-				|false	|是否直接返回响应流，开启 streaming 之后，HttpClient 会在拿到响应对象 res 之后马上返回， 此时 result.headers 和 result.status 已经可以读取到，只是没有读取 data 数据而已。|
|streaming |Boolean|- |false |Whether to return the response stream directly. After streaming is turned on, HttpClient will return immediately after getting the response object res. At this time, result.headers and result.status can be read, but it is not. data is just data. |
|gzip								|Boolean|-				|false	|是否支持 gzip 响应格式。开启 gzip 之后，HttpClient 将自动设置 Accept-Encoding: gzip 请求头， 并且会自动解压带 Content-Encoding: gzip 响应头的数据。|
|gzip |Boolean|- |false |Whether to support gzip response format. After opening gzip, HttpClient will automatically set Accept-Encoding: gzip request header, and will automatically decompress the data with Content-Encoding: gzip response header. |
|timing							|Boolean|-				|false	|是否开启请求各阶段的时间测量|
|timing |Boolean|- |false |Whether to enable time measurement for each stage of the request|
|enableProxy				|Boolean|-				|false	|是否启用代理|
|enableProxy |Boolean|- |false |Whether to enable proxy|
|proxy							|String|-				|null		| 代理地址|
|proxy |String|- |null | proxy address|
|lookup							|Function|-				|-			|自定义DNS查询函数|
|lookup |Function|- |- |Custom DNS query function|
|checkAddress				|Function|-				|-			|校验请求地址|
|checkAddress |Function|- |- |Check the request address|
|trace							|Boolean|-				|false	|是否启用捕获堆栈|
|trace |Boolean|- |false |Whether to enable the capture stack|


**示例代码**
**Sample Code**

```js
const res = await uniCloud.httpclient.request(apiUrl, {
    method: 'POST',
    data: {
      test: 'testValue'
    },
    contentType: 'json', // 指定以application/json发送data内的数据(Specify to send the data in data as application/json)
    dataType: 'json' // 指定返回值为json格式，自动进行parse(Specify the return value in json format, and automatically parse)
  })
console.log(res)
```

返回数据结构如下
The returned data structure is as follows

```js
{
	"data": {"name": "DCloud"}, // 响应内容(Response content)
	"status": 200, // 状态码(status code)
	"headers": { // 响应头，仅作示例，不同服务器返回的有差异(The response header is just an example, the response of different servers is different)
		"date": "Tue, 29 Dec 2020 08:10:30 GMT",
		"content-type": "application/json",
		"content-length": "276",
		"connection": "keep-alive",
		"server": "gunicorn/19.9.0",
		"access-control-allow-origin": "*",
		"access-control-allow-credentials": "true"
	}
}
```

**发送formdata类型数据**
**Send formdata type data**

实际业务中常有使用云函数发送formdata类型数据的需求，比如微信小程序提供的一些服务端接口（图片内容安全检测、识别图片二维码等），可以参考以下示例进行发送
In actual business, there is often a need to use cloud functions to send formdata type data. For example, some server-side interfaces provided by WeChat applets (image content security detection, image QR code recognition, etc.), you can refer to the following examples to send

```js
'use strict';
const fs = require('fs')
const path = require('path')
const FormData = require('form-data'); // 此form-data需要使用npm安装，地址：https://www.npmjs.com/package/form-data(This form-data needs to be installed using npm, address: https://www.npmjs.com/package/form-data)
exports.main = async (event, context) => {
  const form = new FormData()
  form.append('media', fs.readFileSync(path.resolve(__dirname, './test.jpg')), { // 为方便演示此处直接使用云函数目录下的test.jpg文件(For the convenience of demonstration, the test.jpg file in the cloud function directory is used directly here)
    filename: 'test.jpg',
    contentType: 'image/jpeg'
  });
  form.append('otherParam', 'otherParam content');
  const res = await uniCloud.httpclient.request('https://httpbin.org/post', {
    method: 'POST',
    content: form.getBuffer(), // 请求内容(Request content)
    headers: form.getHeaders(), // 请求头(Request header)
    dataType: 'json' // 此处指定为json表示将此请求的返回值解析为json(Specifying json here means that the return value of this request is parsed as json)
  })
  return res
};

```

## 使用npm
## Use npm

云函数的运行环境是 `Node.js`，因此我们可以使用 `npm` 安装第三方依赖。
The operating environment of cloud functions is `Node.js`, so we can use `npm` to install third-party dependencies.

注意：阿里云目前仅支持全量上传云函数（整个 node_modules文件夹全部上传），因此提醒开发者精简依赖，否则可能会每次上传时间很慢，影响开发体验。并且太大的npm库影响云函数的运行性能。
Note: Alibaba Cloud currently only supports full upload of cloud functions (the entire node_modules folder is uploaded), so developers are reminded to streamline dependencies, otherwise the upload time may be slow each time and affect the development experience. And too large npm library affects the running performance of cloud functions.

腾讯云会在上传云函数后自动安装需要的npm依赖。
Tencent Cloud will automatically install the required npm dependencies after uploading cloud functions.

Tips:
- 目前每个云函数上传包大小限制为10M。如果npm包很大，阿里云的整体上传机制会无法满足需求。此时只能选择腾讯云，交给腾讯云自动安装依赖。
- Currently, the upload package size of each cloud function is limited to 10M. If the npm package is large, Alibaba Cloud's overall upload mechanism will not be able to meet the demand. At this time, you can only choose Tencent Cloud and let Tencent Cloud automatically install dependencies.

## 公共模块
## Common module

云函数支持公共模块。多个云函数的共享部分，可以抽离为公共模块，然后被多个云函数引用。[详见](uniCloud/cf-common)
Cloud functions support public modules. The shared part of multiple cloud functions can be extracted as a common module and then referenced by multiple cloud functions. [See details](uniCloud/cf-common)

## 客户端调用云函数@clientcallfunction
## Client call cloud function @clientcallfunction

前端代码（H5前端、App、小程序），不再执行uni.request联网，而是通过`uniCloud.callFunction`调用云函数，`callFunction`定义如下：
The front-end code (H5 front-end, App, applet), no longer executes uni.request networking, but calls cloud functions through `uniCloud.callFunction`, `callFunction` is defined as follows:

#### 请求参数
#### Request parameters

|字段	|类型	|必填	|说明		|
|Field |Type |Required |Description |
|:-:	|:-:	|:-:	|:-:		|
|name	|String	|是		|云函数名称|
|name |String |is |cloud function name|
|data	|Object	|否		|客户端需要传递的参数|
|data |Object |No |Parameters that the client needs to pass|

#### 响应参数
#### Response parameters

|字段		|类型	|说明						|
|Field |Type |Description |
|:-:		|:-:	|:-:						|
|result		|Object	|云函数执行结果				|
|result |Object |Cloud function execution result |
|requestId	|String	|请求序列号，用于错误排查	|
|requestId |String |Request serial number, used for troubleshooting |

#### 示例代码
#### Sample code

```javascript
// promise方式(promise way)
uniCloud.callFunction({
    name: 'test',
    data: { a: 1 }
  })
  .then(res => {});

// callback方式(callback method)
uniCloud.callFunction({
	name: 'test',
	data: { a: 1 },
	success(){},
	fail(){},
	complete(){}
});
```

## 云函数中调用云函数@callbyfunction
## Calling cloud functions in cloud functions @callbyfunction

用法同客户端调用云函数，不支持callback形式。**云函数本地运行时使用callFunction会调用云端的云函数而不是本地云函数，连接本地云函数调试时云函数内的callFunction会调用本地云函数**
The usage is the same as that of calling cloud functions on the client side. The callback form is not supported. **When a cloud function is running locally, using callFunction will call the cloud function instead of the local cloud function. When connecting to the local cloud function for debugging, the callFunction in the cloud function will call the local cloud function**

#### 请求参数
#### Request parameters

|字段			|类型			|必填	|说明					|
|Field |Type |Required |Description |
|---			|---			|---	|---					|
|name			|String		|是		|云函数名称。	|
|name |String |is |The name of the cloud function. |
|data			|Object		|否		|云函数参数。	|
|data |Object |No |Cloud function parameters. |

#### 响应参数
#### Response parameters

|字段			|类型		|必备	|说明												|
|Field |Type |Required |Description |
|---			|---		|---	|---												|
|errCode	|String	|否		|状态码，操作成功则不返回。	|
|errCode |String |No |Status code, do not return if the operation is successful. |
|errMsg		|String	|否		|错误描述。									|
|errMsg |String |No |Description of the error. |
|result		|Object	|否		|云函数执行结果。						|
|result |Object |No |Cloud function execution result. |
|requestId|String	|否		|请求序列号，用于错误排查。	|
|requestId|String |No |Request serial number, used for error troubleshooting. |

**示例代码**
**Sample Code**

```javascript
let callFunctionResult = await uniCloud.callFunction({
    name: "test",
    data: { a: 1 }
})
```

## 开发模式
## Development Mode

实际项目中，很少会每个接口新建一个云函数。
In actual projects, a new cloud function is rarely created for each interface.

更常见的开发模式有如下两种：
There are two more common development models as follows:

- 不写云函数，客户端直接操作数据库，开发效率更高。详见：[clientDB](uniCloud/database)
- Without writing cloud functions, the client can directly operate the database, and the development efficiency is higher. For details, see: [clientDB](uniCloud/database)
- 使用路由框架，在一个云函数内通过控制器、路由的方式编写服务器接口，控制更灵活。插件市场有很多这类插件，[详见](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&orderBy=WeekDownload&cat1=7)
- Use the routing framework to write server interfaces through controllers and routing in a cloud function, making the control more flexible. There are many such plugins in the plugin market, [see details](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&orderBy=WeekDownload&cat1=7)
## 云函数配置
## Cloud function configuration

### 超时时间
### overtime time

**注意**
**Notice**

- 目前阿里云的超时时间和腾讯云有区别，如果在阿里云云函数运行超过10秒那么客户端没法同步接收返回结果，但是云函数仍会运行到配置的超时时间。腾讯云在云函数运行到配置的超时时间之前客户端都是可以收到返回结果的。
- The current timeout period of Alibaba Cloud is different from that of Tencent Cloud. If the Alibaba Cloud function runs for more than 10 seconds, the client cannot receive the return result synchronously, but the cloud function will still run until the configured timeout period. Tencent Cloud can receive the returned result from the client before the cloud function runs to the configured timeout period.

### 固定出口IP@eip
### Fixed export IP@eip

serverless默认是没有固定的服务器IP的，因为有很多服务器在后面供随时调用，每次调用到哪个服务器、哪个ip都不固定。
Serverless does not have a fixed server IP by default, because there are many servers that can be called at any time later, and which server and which IP is called each time are not fixed.

但一些三方系统，要求配置固定ip白名单，比如微信公众号的js sdk，此时只能提供固定ip地址。
However, some third-party systems require the configuration of a fixed IP whitelist, such as the js sdk of the WeChat official account, and only fixed IP addresses can be provided at this time.

目前腾讯云的收费版，提供了云函数的固定出口ip。ip属于有价资源，阿里云和腾讯云的免费版不提供这方面的能力。
At present, the paid version of Tencent Cloud provides a fixed export IP for cloud functions. IP is a valuable resource, and the free versions of Alibaba Cloud and Tencent Cloud do not provide this capability.

在uniCloud [Web控制台](https://unicloud.dcloud.net.cn)，创建付费的腾讯云服务空间，选择一个云函数，在云函数的详情界面可以开启固定出口ip。开启后界面上会显示可用的固定ip。拿着这个ip去需要固定ip的界面（如微信公众号管理界面）配置即可。
In uniCloud [Web console](https://unicloud.dcloud.net.cn), create a paid Tencent cloud service space, select a cloud function, and open the fixed export ip in the cloud function details interface. After opening, the available fixed ip will be displayed on the interface. Take this ip and go to the interface that needs a fixed ip (such as the WeChat official account management interface) to configure.

**注意**
**Notice**

- 同一个服务空间内所有开启固定出口IP的云函数使用的是同一个IP。
- All cloud functions with fixed export IP in the same service space use the same IP.
- 如果你是免费版升配到付费版，开启`固定IP`功能后，会导致付费版到期无法自动降级到免费版，请注意按时续费
- If you upgrade from the free version to the paid version, after turning on the `fixed IP` function, the paid version will not be automatically downgraded to the free version when the paid version expires. Please pay attention to renewal on time

### 单实例多并发@concurrency
### Single instance multiple concurrency @concurrency

> 仅阿里云支持
> Only supported by Alibaba Cloud

默认情况下云函数仅支持单实例单并发，即同一时间一个实例仅可为一个用户服务（不同用户同一时间访问会被分派到不同实例进行处理）。通过修改云函数单实例并发度，可以修改云函数同一时间最多能处理多少请求。
By default, cloud functions only support single instance and single concurrency, that is, one instance can only serve one user at the same time (different users will be dispatched to different instances for processing at the same time). By modifying the single instance concurrency of the cloud function, you can modify the maximum number of requests that the cloud function can handle at the same time.

假设同时有3个请求需要处理，当实例并发度设置为1时，需要创建3个实例来处理这3个请求，每个实例分别处理1个请求。而每开启一个实例都会引发云函数冷启动；当云函数的实例并发度设置为10时（即1个实例可以同时处理10个请求），只需要创建1个实例就能处理这3个请求。这样后面2个并发请求不会造成云函数的冷启动。
Assuming that there are 3 requests to be processed at the same time, when the instance concurrency is set to 1, 3 instances need to be created to handle these 3 requests, and each instance handles 1 request. Every time an instance is opened, it will trigger a cold start of the cloud function; when the instance concurrency of the cloud function is set to 10 (that is, one instance can handle 10 requests at the same time), only one instance needs to be created to handle these 3 requests. In this way, the latter two concurrent requests will not cause a cold start of the cloud function.

**开启方式**
**Opening method**

云函数详情页面配置单实例并发度即可，支持1-100之间的数值
Configure the single instance concurrency on the cloud function details page, and support a value between 1-100

**效果**
**Effect**

- 有效减少并发请求时云函数冷启动次数
- Effectively reduce the number of cold starts of cloud functions during concurrent requests
  
**使用注意**
**Use Note**

- 云函数内存使用量会随着并发量增大而增加
- Cloud function memory usage will increase as the amount of concurrency increases
- 如果并发的不同请求对全局变量同时进行读写会污染全局变量，可能会导致意想不到的后果，开启单实例多并发后请不要编写修改全局变量的代码，除非你熟悉这种技术带来的特殊应用，比如下文进阶部分提到的ip过滤。
- If concurrent different requests to read and write global variables at the same time will pollute the global variables, it may lead to unexpected consequences, please do not write code to modify global variables after enabling single-instance multiple concurrency, unless you are familiar with this technology. Special applications, such as ip filtering mentioned in the advanced section below.
- 设置过大的单实例多并发可能会导致实例底层网络请求排队从而导致请求超时
- Setting too large a single instance with multiple concurrency may cause the underlying network request of the instance to be queued and cause the request to time out

**适用场景**
**Applicable scene**


|场景																	|适用性	|理由																																	|
|Scenario |Applicability |Reason |
|:-:																	|:-:		|:-:																																	|
|函数中有较多时间在等待下游服务的响应	|适用		|等待响应一般不消耗资源，在一个实例内并发处理可以节省费用。						|
|There is more time in the function waiting for the response of the downstream service |Applicable |Waiting for the response generally does not consume resources, and concurrent processing in an instance can save costs. |
|函数中有共享状态且不能并发访问				|不适用	|例如全局变量，多请求并发执行修改共享状态可能会导致错误。							|
|Functions have shared state and cannot be accessed concurrently |Not applicable |For example, global variables, concurrent execution of multiple requests to modify the shared state may cause errors. |
|单个请求的执行要消耗大量CPU及内存资源|不适用	|多请求并发执行会造成资源争抢，可能会导致内存不足（OOM）或者延时增加。|
|The execution of a single request consumes a lot of CPU and memory resources|Not applicable |The concurrent execution of multiple requests will cause resource contention, which may lead to out of memory (OOM) or increased latency. |
**关于uni-id的特殊说明**
**Special note about uni-id**

```js
// 开启单实例多并发前的uni-id用法(Uni-id usage before enabling single instance multiple concurrency)
const uniID = require('uni-id')
exports.main = async function(event, context) {
  const res = uniID.login({
    // ...一些参数(...Some parameters)
  })
  return res
}

// 由于uni-id默认会从一个内置全局变量上获取客户端平台信息，不同请求会修改此全局变量可能造成混乱，开启单实例多并发后需要将uni-id修改为如下写法
// Since uni-id obtains client platform information from a built-in global variable by default, different requests to modify this global variable may cause confusion. After enabling single-instance multiple concurrency, uni-id needs to be modified as follows
let uniID = require('uni-id')
exports.main = async function(event, context) {
  let uniIDIns = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID(Create a uni-id instance, the above method is the same as uniID)
    context: context, // 传入context防止不同请求互相影响(Incoming context prevents different requests from affecting each other)
    config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数(Complete uni-id configuration information, no need to pass this parameter when using config.json for configuration)
  })
  const res = uniIDIns.login({
    // ...一些参数(...Some parameters)
  })
  return res
}
```

**进阶**
**Advanced**

开启单实例多并发后的全局变量复用并非一定是坏的结果，如果你很了解此行为，也可以对此进行有效的利用
Global variable reuse after enabling single-instance multiple concurrency is not necessarily a bad result. If you know this behavior well, you can also make effective use of it

例：[ip-filter](https://ext.dcloud.net.cn/plugin?id=4619)中就利用云函数全局缓存一些ip访问信息来限制单ip访问频率，可以下载示例项目体验一下
For example: [ip-filter](https://ext.dcloud.net.cn/plugin?id=4619) uses cloud functions to cache some IP access information globally to limit the frequency of single IP access. You can download the sample project to experience it

### 云函数运行环境@runtime
### Cloud function operating environment @runtime

目前腾讯云和阿里云均支持选择nodejs版本，有nodejs8、nodejs12两个选项，需要在云函数创建时设定，不可修改。需要在云函数的package.json文件的`cloudfunction-config->runtime`字段进行配置，详情参考：[云函数package.json](uniCloud/cf-functions.md?id=packagejson)
At present, both Tencent Cloud and Alibaba Cloud support the choice of nodejs version. There are two options, nodejs8 and nodejs12, which need to be set when the cloud function is created and cannot be modified. It needs to be configured in the `cloudfunction-config->runtime` field of the cloud function's package.json file. For details, please refer to: [cloud function package.json](uniCloud/cf-functions.md?id=packagejson)

## 云函数package.json@packagejson
## Cloud functions package.json@packagejson

HBuilderX 3.0版本之前，package.json只是一个标准的package.json，一般来说安装依赖或公共模块才需要。HBuilderX 3.0及以上版本，package.json也可以用来配置云函数。
Before HBuilderX 3.0 version, package.json is just a standard package.json, generally only needed to install dependencies or public modules. For HBuilderX 3.0 and above, package.json can also be used to configure cloud functions.

uniCloud web控制台提供了很多云函数的设置，比如内存大小、url化、定时触发等，从HBuilderX 3.0起，在云函数的package.json里也可以编写这些设置。
The uniCloud web console provides many cloud function settings, such as memory size, urlization, timing triggers, etc. Starting from HBuilderX 3.0, these settings can also be written in the cloud function package.json.

开发者在本地编写云函数的设置，上传云函数，这些设置会自动在云端生效。（本地不生效）
Developers write cloud function settings locally, upload cloud functions, and these settings will automatically take effect in the cloud. (Not valid locally)

在云端设置了非默认参数后，HBuilderX下载云函数到本地时，也会自动把设置项放入package.json中下载下来。
After setting non-default parameters in the cloud, when HBuilderX downloads the cloud function to the local, it will also automatically download the setting items into package.json.

package.json是一个标准json文件，不可带注释。下面是一个package.json示例。
package.json is a standard json file without comments. The following is an example of package.json.
```json
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章(New article)",
  "main": "index.js",
  "dependencies": {
    
  },
  "cloudfunction-config": {
      "memorySize": 256,
      "timeout": 5,
      "triggers": [{
          "name": "myTrigger",
          "type": "timer",
          "config": "0 0 2 1 * * *"
      }],
      "path": "",
      "runtime": "Nodejs8" 
    }
}
```

其中cloudfunction-config字段是云函数配置，支持的配置如下
The cloudfunction-config field is the cloud function configuration, and the supported configurations are as follows

```js
{
  "concurrency": 10, // 单个云函数实例最大并发量，不配置的情况下默认是1(The maximum concurrency of a single cloud function instance, if not configured, the default is 1)
  "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256(The maximum usable memory of the function, in MB, optional value: 128|256|512|1024|2048, the default value is 256)
  "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒(The timeout period of the function, in seconds, the default value is 5. The maximum length is 60 seconds, and the maximum length of Alibaba Cloud can be 600 seconds when triggered regularly.)
  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个(The triggers field is an array of triggers. Currently, only one trigger is supported, that is, only one of the arrays can be filled in, and no more than one can be added.)
  "triggers": [{
      // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效(name: The name of the trigger, see https://uniapp.dcloud.net.cn/uniCloud/trigger for rules, the name is not valid for Alibaba Cloud)
      "name": "myTrigger",
      // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效(type: trigger type, currently only supports timer (ie timing trigger), type does not take effect for Alibaba Cloud)
      "type": "timer",
      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效(config: Trigger configuration. Under timing triggers, the format of config is cron expression. See https://uniapp.dcloud.net.cn/uniCloud/trigger for rules. When using Alibaba Cloud, the last digit is automatically ignored, that is, the one representing the year does not take effect in Alibaba Cloud)
      "config": "0 0 2 1 * * *"
  }],
  // 云函数Url化path部分，阿里云需要以/http/开头(Urlized path part of cloud function, Alibaba Cloud needs to start with /http/)
  "path": "",
  "runtime": "" // nodejs版本，可选Nodejs8、Nodejs12，默认：Nodejs8(nodejs version, optional Nodejs8, Nodejs12, default: Nodejs8)
}
```

**注意**
**Notice**

- 插件作者在发布插件时，如果云函数有特殊设置，应该放入package.json中，然后发布到插件市场。这样就不用再通过说明文档一步一步引导用户去配置云函数定时触发器、内存、url化路径等
- When the plug-in author publishes the plug-in, if the cloud function has special settings, it should be placed in package.json and then published to the plug-in market. In this way, there is no need to guide users step by step through documentation to configure cloud function timing triggers, memory, URL path, etc.
- 在web控制台修改云函数配置后，通过HBuilderX的下载云函数菜单会在package.json内添加修改后的云函数配置
- After modifying the cloud function configuration in the web console, the modified cloud function configuration will be added to the package.json through the download cloud function menu of HBuilderX
- 上传云函数时，如果项目下的package.json内包含云函数配置会同时进行云函数的配置更新
- When uploading cloud functions, if the package.json under the project contains the cloud function configuration, the cloud function configuration update will be performed at the same time
- package.json只有云端部署才生效，本地运行不生效。
- package.json is only effective for cloud deployment, not for local operation.
- cloudfunction-config不可删除云端配置。例：云端已配置triggers（定时触发器），删除cloudfunction-config内的trigger不会删掉云端的定时触发器
- cloudfunction-config cannot delete cloud configuration. Example: Triggers (timing triggers) have been configured in the cloud, deleting the trigger in cloudfunction-config will not delete the timing triggers in the cloud
- runtime参数（nodejs版本）仅可在创建云函数时生效，不可修改
- The runtime parameter (nodejs version) can only take effect when creating a cloud function and cannot be modified

## 使用cloudfunctions_init初始化云函数@init
## Use cloudfunctions_init to initialize cloud functions @init

`HBuilderX 2.9`版本，`uniCloud`提供了`cloudfunctions_init.json`来方便开发者快速进行云函数的初始化操作，即在HBuilderX工具中，一次性完成所有云函数的配置。
In `HBuilderX 2.9` version, `uniCloud` provides `cloudfunctions_init.json` to facilitate developers to quickly initialize cloud functions, that is, in the HBuilderX tool, the configuration of all cloud functions is completed at one time.

**注意：HBuilderX 3.0.0版本起不再使用cloudfunctions_init.json来初始化云函数。改为使用在云函数目录下通过package.json进行配置，具体见上个章节**
**Note: From HBuilderX 3.0.0 version, cloudfunctions_init.json is no longer used to initialize cloud functions. Use package.json to configure in the cloud function directory instead, see the previous chapter for details**

详细调整如下：
The detailed adjustments are as follows:

不再使用cloudfunctions_init.json，内容被分散到每个云函数的package.json的`cloudfunction-config`字段下
Cloudfunctions_init.json is no longer used, and the content is scattered under the `cloudfunction-config` field of the package.json of each cloud function

package.json是一个标准json文件，不可带注释。下面是一个package.json示例
package.json is a standard json file without comments. Below is a package.json example
```json
{
  "name": "add-article",
  "version": "1.0.0",
  "description": "新增文章(New article)",
  "main": "index.js",
  "dependencies": {
    
  },
  "cloudfunction-config": {
      "memorySize": 256,
      "timeout": 5,
      "triggers": [{
          "name": "myTrigger",
          "type": "timer",
          "config": "0 0 2 1 * * *"
      }],
      "path": ""
    }
}
```

cloudfunction-config说明如下
The cloudfunction-config description is as follows

```js
{
  "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256(The maximum usable memory of the function, in MB, optional value: 128|256|512|1024|2048, the default value is 256)
  "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒(The timeout period of the function, in seconds, the default value is 5. The maximum length is 60 seconds, and the maximum length of Alibaba Cloud can be 600 seconds when triggered regularly.)
  // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个(The triggers field is an array of triggers. Currently, only one trigger is supported, that is, only one of the arrays can be filled in, and no more than one can be added.)
  "triggers": [{
      // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效(name: The name of the trigger, see https://uniapp.dcloud.net.cn/uniCloud/trigger for rules, the name is not valid for Alibaba Cloud)
      "name": "myTrigger",
      // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效(ype: trigger type, currently only supports timer (ie timing trigger), type does not take effect for Alibaba Cloud)
      "type": "timer",
      // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效(config: Trigger configuration. Under timing triggers, the format of config is cron expression. See https://uniapp.dcloud.net.cn/uniCloud/trigger for rules. When using Alibaba Cloud, the last digit is automatically ignored, that is, the one representing the year does not take effect in Alibaba Cloud)
      "config": "0 0 2 1 * * *"
  }],
  // 云函数Url化path部分，阿里云需要以/http/开头(Urlized path part of cloud function, Alibaba Cloud needs to start with /http/)
  "path": ""
}
```


**HBuilderX 3.0.0之前版本，请继续阅读下面文档**
**For HBuilderX versions before 3.0.0, please continue to read the following documents**

**使用方式**
**How to use**
- 在`cloudfucntions`目录右键即可创建`cloudfunctions_init.json`，
- -Right click in the `cloudfucntions` directory to create `cloudfunctions_init.json`,
- 编写好json内容，在`cloudfunctions_init.json`上右键初始化云函数配置。
- -Write the json content, right-click on `cloudfunctions_init.json` to initialize the cloud function configuration.

**cloudfunctions_init.json形式如下**
**cloudfunctions_init.json has the following form**

```json
{
    "fun-name": { // 云函数名称(Cloud function name)
        "memorySize": 256, // 函数的最大可用内存，单位MB，可选值： 128|256|512|1024|2048，默认值256(  The maximum usable memory of the function, in MB, optional value: 128|256|512|1024|2048, the default value is 256)
        "timeout": 5, // 函数的超时时间，单位秒，默认值5。最长为60秒，阿里云在定时触发时最长可以是600秒(The timeout period of the function, in seconds, the default value is 5. The maximum length is 60 seconds, and the maximum length of Alibaba Cloud can be 600 seconds when triggered regularly.)
        // triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个(  The triggers field is an array of triggers. Currently, only one trigger is supported, that is, only one of the arrays can be filled in, and no more than one can be added.)
        "triggers": [{
            // name: 触发器的名字，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger，name不对阿里云生效(name: The name of the trigger, see https://uniapp.dcloud.net.cn/uniCloud/trigger for rules, the name is not valid for Alibaba Cloud)
            "name": "myTrigger",
            // type: 触发器类型，目前仅支持 timer (即 定时触发器)，type不对阿里云生效(type: trigger type, currently only supports timer (ie timing trigger), type does not take effect for Alibaba Cloud)
            "type": "timer",
            // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见https://uniapp.dcloud.net.cn/uniCloud/trigger。使用阿里云时会自动忽略最后一位，即代表年份的一位在阿里云不生效(  config: Trigger configuration. Under timing triggers, the format of config is cron expression. See https://uniapp.dcloud.net.cn/uniCloud/trigger for rules. When using Alibaba Cloud, the last digit is automatically ignored, that is, the one representing the year does not take effect in Alibaba Cloud)
            "config": "0 0 2 1 * * *"
        }],
        // 云函数Url化path部分，阿里云需要以/http/开头(Urlized path part of cloud function, Alibaba Cloud needs to start with /http/)
        "path": ""
    }
}

```


## 注意事项
## Precautions

### 云函数的启动模式（冷启动、热启动）@launchtype
### Cloud function startup mode (cold start, hot start) @launchtype

基于云函数按需执行的特点, 函数在不被触发的时候, 计算资源是不被激活的。
Based on the on-demand execution of cloud functions, computing resources are not activated when the function is not triggered.

当一个云函数初次被触发时，其完整过程如下：
When a cloud function is triggered for the first time, its complete process is as follows:

1. 实例化计算实例
1. Instantiate calculation examples
2. 加载函数代码
2. Load function code
3. 启动 node
3. Start the node
4. 执行代码
4. Execute the code

函数被调用时，执行这些完整步骤的过程一般称作冷启动, 冷启动的耗时长于热启动，一般在一秒出头。 
When a function is called, the process of executing these complete steps is generally called a cold start. The cold start takes longer than a hot start, usually in less than one second.
而如果函数实例和执行进程都被复用的情况下一般被定义为热启动, 热启动没有性能问题。
If the function instance and the execution process are reused, it is generally defined as a hot start, and there is no performance problem with the hot start.
如果一个云函数实例长时间没有被再次调用，则该计算实例会被回收；后续再次调用该云函数时，就会再次触发云函数的冷启动。
If a cloud function instance is not called again for a long time, the computing instance will be recycled; when the cloud function is subsequently called again, the cold start of the cloud function will be triggered again.
不同云厂商的函数实例回收时间，以及优化冷启动的建议，[参考](https://uniapp.dcloud.io/uniCloud/faq?id=%e4%ba%91%e5%87%bd%e6%95%b0%e8%ae%bf%e9%97%ae%e6%97%b6%e5%bf%ab%e6%97%b6%e6%85%a2%e6%80%8e%e4%b9%88%e5%9b%9e%e4%ba%8b%ef%bc%9f)
Function instance recovery time of different cloud vendors, and suggestions for optimizing cold start, [Reference](https://uniapp.dcloud.io/uniCloud/faq?id=%e4%ba%91%e5%87%bd%e6 %95%b0%e8%ae%bf%e9%97%ae%e6%97%b6%e5%bf%ab%e6%97%b6%e6%85%a2%e6%80%8e%e4%b9 %88%e5%9b%9e%e4%ba%8b%ef%bc%9f)
因为存在冷热启动的差异，云函数中的全局变量就可能出现每次不一样的情况。也就是云函数是无状态的。
Because of the difference between hot and cold startup, global variables in cloud functions may be different every time. That is, cloud functions are stateless.
以如下代码为例，`count`作为全局变量，当多次调用该云函数时，可能会出现变量累加的情况（实例未复用时，每次返回0，若实例被复用，则可能返回1、2、3等各种意外情况）。所以不要这么使用。
Take the following code as an example, `count` is a global variable. When the cloud function is called multiple times, variables may accumulate (when the instance is not reused, it returns 0 each time, if the instance is reused, it may return 1, 2, 3 and other unexpected situations). So don't use it like this.

```javascript
let count = 0;
module.exports = async (event) => {
  return count++
  //此示例为错误示例
  //This example is an error example
  //云函数实例未复用时，每次返回0
  //When the cloud function instance is not reused, it returns 0 each time
  //若实例被复用，则可能返回1、2、3等各种意外情况
  //If the instance is reused, various unexpected situations such as 1, 2, 3 may be returned
}
```

**require由于存在缓存，也存在同样的问题。尽量不要直接修改require返回的内容**
**require has the same problem due to the cache. Try not to directly modify the content returned by require**

### 临时存储空间
### Temporary storage space

云函数是运行在云端的代码，运行环境由云服务器弹性调配，这是和传统`Node.js`应用很大的区别。
Cloud functions are codes that run in the cloud, and the operating environment is flexibly configured by the cloud server. This is a big difference from the traditional `Node.js` application.
换言之，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合，建议通过云数据库或云存储的方案替代。
In other words, the host environment (which can be simply understood as a virtual machine or server hardware) for each execution of a cloud function may be the same or different. Therefore, in the traditional `Node.js` development, some information is stored in the local hard disk or memory solution. Suitable, it is recommended to replace it with cloud database or cloud storage.
### 云函数中的异步行为
### Asynchronous behavior in cloud functions
书写云函数时应注意`async`、`await`的使用，`nodejs`有内置模块`util`可以将符合`error-first`形式`callback`的函数转换为`promise`形式，[详情参考](https://nodejs.org/api/util.html#util_util_promisify_original)，比如以下示例：
When writing cloud functions, you should pay attention to the use of `async` and `await`. `nodejs` has a built-in module `util` that can convert functions that conform to the form of `error-first` and `callback` to the form of `promise`, [detailed reference] (https://nodejs.org/api/util.html#util_util_promisify_original), such as the following example:

```js
const {
	promisify
} = require('util')

let testCallback = {
	value: 'testCallbackValue',
	echo: function(num, callback) {
		setTimeout(() => {
      // 第一个参数为error，第二个为返回值
	  // The first parameter is error, the second is the return value
			callback(null, `${this.value}:${num}`)
		}, 2000)
	}
}

exports.main = async function() {
  // num=2，不传入callback参数，callback会自动作为回调函数处理
  // num=2, do not pass in the callback parameter, callback will be automatically processed as a callback function
	let val = await promisify(testCallback.echo).call(testCallback, 2)
	console.log(val)
	return val
}

```

如果想在云函数内使用回调形式可以让云函数返回一个promise，如以下示例：
If you want to use the callback form in the cloud function, you can make the cloud function return a promise, as in the following example:

```js
exports.main = async function() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('some return value')
		}, 1000)
	})
}
```



###  其它
###  Other

- 云端的云函数中使用的时区是 `UTC+0`，而不是 `UTC+8`，在云函数中使用时间时需特别注意。云函数在HBuilderX本地运行时，时区则是电脑的时区，很可能是 `UTC+8`。建议使用时间戳，可以规避时区问题。
- The time zone used in cloud functions in the cloud is `UTC+0` instead of `UTC+8`. Pay special attention when using time in cloud functions. When cloud functions are running locally in HBuilderX, the time zone is the computer's time zone, which is probably `UTC+8`. It is recommended to use a timestamp to avoid time zone issues.
- 使用阿里云作为服务商时，暂时无法使用相对路径读取文件，如：`fs.readFileSync('./info')`，可以替换为`fs.readFileSync(path.resolve(__dirname,'./info'))`
- When using Alibaba Cloud as a service provider, it is temporarily unable to read files using relative paths, such as: `fs.readFileSync('./info')`, which can be replaced with `fs.readFileSync(path.resolve(__dirname,'./ info'))`
- 阿里云目前能同步返回数据的最大超时时间为10秒，即云函数运行超过10秒时客户端会收到超时报错。如果你在uniCloud web控制台配置了10秒以上的超时时间，云函数是可以运行到10秒以上的，只是客户端无法接收到返回值，腾讯云没有此限制。
- Currently, the maximum timeout period that Alibaba Cloud can synchronously return data is 10 seconds, that is, the client will receive a timeout error when the cloud function runs for more than 10 seconds. If you configure a timeout of more than 10 seconds in the uniCloud web console, the cloud function can run for more than 10 seconds, but the client cannot receive the return value. Tencent Cloud does not have this restriction.