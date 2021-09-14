## 操作场景
## Operation scenario
云函数URL化 是 uniCloud 为开发者提供的 HTTP 访问服务，让开发者可以通过 HTTP URL 方式访问到云函数。
Cloud function URLization is an HTTP access service provided by uniCloud for developers, allowing developers to access cloud functions through HTTP URLs.
- 场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
- Scenario 1: For example, WeChat payment on the App side requires a server callback address, and an HTTP URL is required at this time.
- 场景2：非uni-app开发的系统，想要连接uniCloud，读取数据，也需要通过HTTP URL方式访问。
- Scenario 2: A system that is not developed by uni-app. If you want to connect to uniCloud and read data, you also need to access it through an HTTP URL.
云函数默认是只有自己的app在前端通过`uniCloud.callFunction`来调用的，不会暴露到外网。一旦URL化后，开发者需要关注业务和资源安全。
By default, cloud functions are only called by your own app on the front end through `uniCloud.callFunction`, and will not be exposed to the external network. Once the URL is changed, developers need to pay attention to business and resource security.
- 安全：为了保障业务安全性，开发者需在代码中做好权限控制和安全防护，避免未授权访问触发敏感操作。
- Security: In order to ensure business security, developers need to implement authority control and security protection in the code to prevent unauthorized access from triggering sensitive operations.
- 计费：云函数开启了URL化后，如果遇到大量恶意访问，消耗云函数资源，开发者可以将云函数访问地址设置为空即可停止 HTTP 访问支持。
- Billing: After the cloud function is URLized, if a large number of malicious visits are encountered and cloud function resources are consumed, the developer can set the cloud function access address to empty to stop HTTP access support.
本文档主要指导您如何在uniCloud web控制台管理和使用云函数URL化。
This document mainly guides you how to manage and use cloud function URLization in the uniCloud web console.
**使用限制**
**Restrictions on Use**
- 腾讯云免费服务空间最多只支持配置10个云函数URL化地址
- Tencent Cloud free service space only supports up to 10 cloud function URLized addresses
- 阿里云暂不支持修改响应头中的content-disposition，即无法返回html并在浏览器中展示，只可以触发下载
- Alibaba Cloud does not currently support modifying the content-disposition in the response header, that is, it cannot return html and display it in the browser, but can only trigger the download


## 操作步骤
## Steps
### 设置云函数 HTTP 访问地址
### Set cloud function HTTP access address
1. 登录[uniCloud后台](https://unicloud.dcloud.net.cn/)，选择需要管理的服务空间。
1. Log in to [uniCloud background](https://unicloud.dcloud.net.cn/) and select the service space to be managed.
2. 单击左侧菜单栏【云函数】，进入云函数页面。
2. Click [Cloud Function] on the left menu bar to enter the cloud function page.
3. 点击需要配置的云函数的【详情】按钮，配置访问路径。
3. Click the [Details] button of the cloud function to be configured to configure the access path.
<img style="max-width:800px;height:auto;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b79d1dc0-5a21-11eb-8a36-ebb87efcf8c0.jpg"></img>

### 绑定自定义域名
### Binding a custom domain name
**目前阿里云不支持绑定自定义域名，只能使用其默认提供的域名，但是需要手动在【云函数域名绑定】处开启云函数Url化开关**
**Currently, Alibaba Cloud does not support binding custom domain names. You can only use the domain name provided by default, but you need to manually turn on the cloud function URL switch at [Cloud function domain name binding]**
**2021年5月25日起腾讯云绑定域名CNAME记录值由默认域名调整为腾讯云给定的`CNAME域名`，已经绑定正常使用的域名无需调整**
**From May 25, 2021, the CNAME record value of the domain name bound by Tencent Cloud will be adjusted from the default domain name to the `CNAME domain name` given by Tencent Cloud. Domain names that have been bound for normal use do not need to be adjusted**
1. 单击左侧菜单栏【云函数】，进入云函数页面。
1. Click [Cloud Function] in the left menu bar to enter the cloud function page.
2. 单击【云函数域名绑定】，在弹出的配置窗口中进行配置。
2. Click [Cloud Function Domain Name Binding] to configure in the pop-up configuration window.
<img style="max-width:800px;height:auto;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/55897b30-5993-11eb-8ff1-d5dcf8779628.jpg"></img>

上一步中填写域名证书且绑定成功后会返回一个`CNAME域名`，将绑定的域名配置CNAME记录值为此`CNAME域名`即可
Fill in the domain name certificate in the previous step and after the binding is successful, a `CNAME domain name` will be returned. Configure the bound domain name with the CNAME record value as this `CNAME domain name`.


**注意**
**Notice**
- 每个服务空间最多绑定1个自定义域名
- Each service space can be bound with at most 1 custom domain name
- uniCloud提供默认域名供体验和测试该特性
- uniCloud provides a default domain name for experiencing and testing this feature
- 需要注意的是绑定的域名必须已经备案
- It should be noted that the bound domain name must have been filed
- 单个服务空间可支持被访问的最大 QPS 为5000，单个云函数可支持被访问的最大 QPS 为2000（具体频次受函数并发限制）
- A single service space can support a maximum QPS of 5000 to be accessed, and a single cloud function can support a maximum QPS of 2000 (the specific frequency is limited by function concurrency)
- 默认域名可支持被访问的最大 QPS 为200，推荐您绑定自定义域名以获取更大的访问频次
- The default domain name can support a maximum QPS of 200 to be visited. It is recommended that you bind a custom domain name to obtain greater access frequency
如需要更高的QPS支持，请发邮件到service@dcloud.io申请。若您还没有SSL证书，点此[快速获取](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)
If you need higher QPS support, please send an email to service@dcloud.io to apply. If you do not have an SSL certificate, click here [Quick Obtain](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)
**关于证书内容与私钥**
**About certificate content and private key**
申请证书时通常会有下载选项，下载到证书之后找到对应Nginx的证书（包含一个crt文件和一个key文件），以文本形式打开crt文件即可看到证书内容，同样的key文件对应着私钥。
There is usually a download option when applying for a certificate. After downloading the certificate, find the corresponding Nginx certificate (including a crt file and a key file), and open the crt file in text form to see the content of the certificate. The same key file corresponds to the private key. .
### 通过 HTTP URL 方式访问云函数
### Access cloud functions via HTTP URL
- 方式一：通过`https://${云函数Url化域名}/${path}`直接访问函数，其中`${path}`是配置的函数触发路径。
- Method 1: Access the function directly through `https://${cloud function URLized domain name}/${path}`, where `${path}` is the configured function trigger path.

```sh
$ curl https://${云函数Url化域名(Cloud function URLized domain name)}/${path}
```

- 方式二：直接在浏览器内打开`https://${云函数Url化域名}/${path}`。
- Method 2: Open `https://${cloud function URLized domain name}/${path}` directly in the browser.
### 云函数的入参
### Input parameters of cloud function
使用 HTTP 访问云函数时，HTTP 请求会被转化为特殊的结构体，称之为**集成请求**，结构如下：
When using HTTP to access cloud functions, the HTTP request will be transformed into a special structure called **integration request**, the structure is as follows:


```shell
{
    path: 'HTTP请求路径，如 /hello(HTTP request path, such as /hello)',
    httpMethod: 'HTTP请求方法，如 GET(HTTP request method, such as GET)',
    headers: {HTTP请求头(HTTP request header)},
    queryStringParameters: {HTTP请求的Query，键值对形式(Query for HTTP request, in the form of key-value pairs)},
    body: 'HTTP请求体(HTTP request body)',
    isBase64Encoded: 'true or false，表示body是否为Base64编码(true or false, indicating whether the body is Base64 encoded)'
}
```

下面是一个示例：
Here is an example:
```shell
{
    path: '/',
    httpMethod: 'GET',
    headers: {
        'host': 'xxx.service.tcloudbase.com',
        'connection': 'close',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
    },
    isBase64Encoded: false,
    body: ''
}
```


**示例**
**Example**

使用GET请求`https://${云函数Url化域名}/${functionPath}?a=1&b=2`，云函数接收到的`event`为
Use GET to request `https://${cloud function URLized domain name}/${functionPath}?a=1&b=2`, the `event` received by the cloud function is
```
{
    path: '/',
    httpMethod: 'GET',
    headers: {HTTP请求头},
    queryStringParameters: {a: "1", b: "2"},
    isBase64Encoded: false
}
```


使用POST请求`https://${spaceId}.service.tcloudbase.com/${functionPath}`，云函数接收到的`event.body`为请求发送的数据，**uni.request默认content-type为application/json**
Use POST request `https://${spaceId}.service.tcloudbase.com/${functionPath}`, the `event.body` received by the cloud function is the data sent by the request, **uni.request default content-type As application/json**
```js
// 以uni.request为例
// Take uni.request as an example
uni.request({
  method: 'POST',
  url: 'https://${云函数Url化域名}/${functionPath}',
  data: {
    a: 1,
    b: 2
  },
  success(res) {
    console.log(res);
  }
})

// 云函数收到的event为, 注意如果直接return此格式数据可能会被作为集成响应处理，参考下面的集成响应文档
// The event received by the cloud function is. Note that if you directly return this format data, it may be processed as an integrated response. Refer to the integrated response document below
{
    path: '/',
    httpMethod: 'POST',
    headers: {
    	...
    	"content-type": 'application/json'
    },
    isBase64Encoded: false,
    body: '{"a":1,"b":2}', 
	// 注意此处可能是base64，需要根据isBase64Encoded判断
	// Note that it may be base64 here, it needs to be judged according to isBase64Encoded
}
```

**注意**
**Notice**
- 阿里云目前请求与响应有如下限制
- Alibaba Cloud currently has the following restrictions on requests and responses
  + 请求Body大小限制，不能超过1M。
  + Request body size limit, cannot exceed 1M.
  + 响应Body大小限制，不能超过1M。
  + Respond to the body size limit, which cannot exceed 1M.
- 腾讯云目前请求与响应有如下限制
- Tencent Cloud currently has the following restrictions on requests and responses
  + 请求Body大小限制，不能超过4M。
  + Request body size limit, cannot exceed 4M.
  + 响应Body大小限制，不能超过6M。
  + Respond to the body size limit, which cannot exceed 6M.
>在云函数URL化的场景无法获取客户端平台信息，可以在调用依赖客户端平台的接口接口之前（推荐在云函数入口）通过修改context.PLATFORM手动传入客户端平台信息
>The client platform information cannot be obtained in the scenario where the cloud function is URLized. You can manually pass in the client platform information by modifying the context.PLATFORM before calling the interface interface that depends on the client platform (recommended at the entrance of the cloud function)
例：
example:

```js
exports.main = async (event, context) => {
	context.PLATFORM = 'app-plus'
}
```

云函数接收到的post请求的请求体可能是被转成base64的，如果是这样需要进行一次转化。
The request body of the post request received by the cloud function may be converted to base64. If this is the case, a conversion is required.

以接收application/json格式的post请求为例
Take the post request in application/json format as an example
```js
exports.main = function(event) {
    let body = event.body
    if(event.isBase64Encoded){
      body = Buffer.from(body)
    }
    const param = JSON.parse(body) 
	// param为客户端上传的数据
	// param is the data uploaded by the client
    // ...
}
```


### 云函数的返回值
### Return value of cloud function

云函数可以返回`string`、`object`、`number`等类型的数据，或者返回 [集成响应](#Integrationresponse)，随后云接入会将返回值转化为正常的 HTTP 响应。
Cloud functions can return data of types such as `string`, `object`, `number`, or return [integration response](#Integrationresponse), and then cloud access will convert the return value into a normal HTTP response.
#### 返回字符串或数字
#### Return a string or number
云函数返回字符串，那么：
The cloud function returns a string, then:
```js
exports.main = function() {
    return 'hello gateway'
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: text/plain; charset=utf-8
content-length: 13

hello gateway
```

#### 返回 Object
#### Return Object

返回的`Object`会被转换为 JSON，同时 HTTP 响应的`content-type`会被设置为 `application/json`：
The returned `Object` will be converted to JSON, and the `content-type` of the HTTP response will be set to `application/json`:
```js
exports.main = function() {
    return {
        foo: 'bar'
    }
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: application/json; charset=utf-8
content-length: 13

{"foo":"bar"}
```

#### 返回集成响应@Integrationresponse
#### Return integrated response @Integrationresponse

云函数可以返回如下这样特殊结构的**集成响应**，来自由地控制响应体：
The cloud function can return the following special structured **integrated response** to freely control the response body:
```json
{
    "mpserverlessComposedResponse": true, 
	// 使用阿里云返回集成响应是需要此字段为true
	// If you use Alibaba Cloud to return an integrated response, you need this field to be true
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "body": "..."
}
```

##### 使用集成响应返回 HTML
##### Use integrated response to return HTML

将`content-type`设置为`text/html`，即可在`body`中返回 HTML，会被浏览器自动解析：
Set `content-type` to `text/html` to return HTML in `body`, which will be automatically parsed by the browser:
**阿里云目前无法返回html并在浏览器中展示，只可以触发下载**
**Alibaba Cloud currently cannot return html and display it in the browser, it can only trigger the download**
```js
exports.main = function() {
    return {
        mpserverlessComposedResponse: true, 
		// 使用阿里云返回集成响应是需要此字段为true
		// If you use Alibaba Cloud to return an integrated response, you need this field to be true
        statusCode: 200,
        headers: {
            'content-type': 'text/html'
        },
        body: '<h1>Hello</h1>'
    }
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: text/html; charset=utf-8
content-length: 14

<h1>Hello</h1>
```

##### 使用集成响应返回 JS 文件
##### Use integrated response to return JS file

将`content-type`设置为`application/javascript`，即可在`body`中返回 JavaScript 文件：
Set `content-type` to `application/javascript` to return JavaScript files in `body`:
```js
exports.main = function() {
    return {
        mpserverlessComposedResponse: true, 
		// 使用阿里云返回集成响应是需要此字段为true
		// If you use Alibaba Cloud to return an integrated response, you need this field to be true
        statusCode: 200,
        headers: {
            'content-type': 'application/javascript'
        },
        body: 'console.log("Hello!")'
    }
}
```

最终 HTTP 响应为：
The final HTTP response is:
```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: application/javascript; charset=utf-8
content-length: 21

console.log("Hello!")
```

##### 使用集成响应返回二进制文件
##### Use the integrated response to return the binary file

如果返回体是诸如图片、音视频这样的二进制文件，那么可以将`isBase64Encoded`设置为`true`，并且将二进制文件内容转为 Base64 编码的字符串，例如：
If the returned body is a binary file such as pictures, audio and video, you can set `isBase64Encoded` to `true`, and convert the content of the binary file to a Base64 encoded string, for example:
```js
exports.main = function() {
    return {
        mpserverlessComposedResponse: true, 
		// 使用阿里云返回集成响应是需要此字段为true
		// If you use Alibaba Cloud to return an integrated response, you need this field to be true
        isBase64Encoded: true,
        statusCode: 200,
        headers: {
            'content-type': 'image/png'
        },
        body: 'iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAY...'
    }
}
```

最终 HTTP 响应为一张 PNG 图片：
The final HTTP response is a PNG image:

```shell
HTTP/1.1 200 OK
date: Mon, 16 Dec 2019 08:35:31 GMT
content-type: image/png
content-length: 9897

<binary payload...>
```

##### 返回不同的状态码
##### Return different status codes

如需重定向或返回4xx，5xx等自定义状态码等，可以使用如下方式
If you need to redirect or return custom status codes such as 4xx, 5xx, etc., you can use the following methods
**注意：阿里云暂不支持在返回的header里面使用location**
**Note: Alibaba Cloud does not currently support the use of location in the returned header**
```js
exports.main = function() {
    return {
        mpserverlessComposedResponse: false, 
		// 使用阿里云返回集成响应是需要此字段为true
		// If you use Alibaba Cloud to return an integrated response, you need this field to be true
        isBase64Encoded: false,
        statusCode: 301,
        headers: {
            'location': 'http://www.baidu.com'
        }
    }
}
```
