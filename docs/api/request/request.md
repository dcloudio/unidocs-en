### uni.request(OBJECT)
发起网络请求。
Initiate a network request.


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|默认值|说明|平台差异说明|
| parameter name | Types  | Required | Defaults | Description  | Platform difference description |
|:-|:-|:-|:-|:-|:-|
|url|String|是||开发者服务器接口地址||
| url     | String   | Yes      | | Developer server interface address  |    |
|data|Object/String/ArrayBuffer|否||请求的参数|App（自定义组件编译模式）不支持ArrayBuffer类型|
| data     | Object/String | no       |     | Requested parameters    |   App（自定义组件编译模式）不支持ArrayBuffer类型     |
|header|Object|否||设置请求的 header，header 中不能设置 Referer。|App、H5端会自动带上cookie，且H5端不可手动修改|
| header   | Object        | no       |          | Set the requested header. Referer cannot be set in the header. |  App、H5端会自动带上cookie，且H5端不可手动修改                               |
|method|String|否|GET|有效值详见下方说明||
| method    | String   | no       | GET      | See the description below for valid values | |
|timeout|Number|否|60000|超时时间，单位 ms|H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)|
|timeout|Number|No|60000|Timeout time, unit ms|H5(HBuilderX 2.9.9+), APP(HBuilderX 2.9.9+)|
|dataType|String|否|json	|如果设为 json，会尝试对返回的数据做一次 JSON.parse||
| dataType       | String        | no       | json     | If set to json, it will try to do a JSON.parse on the returned data |     |
|responseType|String|否|text	|设置响应的数据类型。合法值：text、arraybuffer||
|responseType|String|No|text |Set the data type of the response. Legal values: text, arraybuffer||
|sslVerify|Boolean|否|true|验证 ssl 证书|仅App安卓端支持（HBuilderX 2.3.3+）|
|sslVerify|Boolean|No|true|Verify ssl certificate|Only App Android supports (HBuilderX 2.3.3+)|
|withCredentials|Boolean|否|false|跨域请求时是否携带凭证（cookies）|仅H5支持（HBuilderX 2.6.15+）|
|withCredentials|Boolean|No|false|Whether to carry credentials (cookies) in cross-domain requests|Only H5 support (HBuilderX 2.6.15+)|
|firstIpv4|Boolean|否|false|DNS解析时优先使用ipv4|仅 App-Android 支持 (HBuilderX 2.8.0+)|
|firstIpv4|Boolean|No|false|Priority to use ipv4 for DNS resolution|Only App-Android support (HBuilderX 2.8.0+)|
|success|Function|否||收到开发者服务器成功返回的回调函数||
| success        | Function      | no       |          | Receive the callback function successfully returned by the developer server |                                 |
|fail|Function|否||接口调用失败的回调函数||
| fail           | Function      | no       |          | Callback function for interface call failure                 |                                 |
|complete|Function|否||接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete       | Function      | no       |          | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |         |

**method 有效值**
**method valid value**

必须大写
Must be capitalized.
有效值在不同平台差异说明不同。
The effective value differs on different platforms.

|method|App|H5|
|:-:|:-:|:-:|
|GET|√|√|
|POST|√|√|
|PUT|√|√|
|DELETE|√|√|
|CONNECT|x|√|
|HEAD|x|√|
|OPTIONS|√|√|
|TRACE|x|√|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter  | Types   | Description   |
|:-|:-|:-|
|data|Object/String/ArrayBuffer|开发者服务器返回的数据|
| data       | Object/String/ArrayBuffer | Data returned by the developer server                        |
|statusCode|Number|开发者服务器返回的 HTTP 状态码|
| statusCode | Number                    | HTTP status code returned by the developer server            |
|header|Object|开发者服务器返回的 HTTP Response Header|
| header     | Object                    | HTTP Response Header returned by the developer server        |
|cookies|``Array.<string>``|开发者服务器返回的 cookies，格式为字符串数组|
| cookies    | `Array.<string>`          | Cookies returned by the developer server, in the format of a string array |

**data 数据说明**
**data data description**

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String。转换规则如下：
The final data sent to the server is of type String. If the incoming data is not of type String, it will be converted to String. The conversion rules are as follows:

- 对于 ``GET`` 方法，会将数据转换为 query string。例如 ``{ name: 'name', age: 18 }`` 转换后的结果是 ``name=name&age=18``。
- For the `GET`method, it converts the data query string. For example `{ name: 'name', age: 18 }`the result of transformation is `name=name&age=18`.
- 对于 ``POST`` 方法且 ``header['content-type']`` 为 ``application/json`` 的数据，会进行 JSON 序列化。
- For the `POST`method and `header['content-type']`of `application/json`the data, will JSON serialization.
- 对于 ``POST`` 方法且 ``header['content-type']`` 为 ``application/x-www-form-urlencoded`` 的数据，会将数据转换为 query string。 
- For the `POST`method and `header['content-type']`for the `application/x-www-form-urlencoded`data, converts the data query string.

**示例**
**Example**

```javascript
uni.request({
    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
	 //Example only, not the real interface address.
    data: {
        text: 'uni.request'
    },
    header: {
        'custom-header': 'hello' //自定义请求头信息
		  //Customize request header information
    },
    success: (res) => {
        console.log(res.data);
        this.text = 'request success';
    }
});
```

**返回值**
**return value**

如果希望返回一个 `requestTask` 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return an `requestTask`object that need to pass at least a success / fail / complete parameters. E.g:

```javascript
var requestTask = uni.request({
	url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
	//Example only, not the real interface address.
	complete: ()=> {}
});
requestTask.abort();
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If no success / fail / complete parameters are passed in, the encapsulated Promise object will be returned: [Promise encapsulation](/api/README?id=promise-%E5%B0%81%E8%A3%85)

通过 `requestTask`，可中断请求任务。
Through `requestTask`, the request task can be interrupted.

**requestTask 对象的方法列表**
**Method list of requestTask object**

|方法|参数|说明|
|Method|Parameter|Description|
|:-|:-|:-|
|abort||中断请求任务|
|abort||Interrupt request task|

**示例**
**Example**

```javascript
const requestTask = uni.request({
	url: 'https://www.example.com/request', 
	//仅为示例，并非真实接口地址。
	//Just an example, not the real interface address.
	data: {
        name: 'name',
        age: 18
	},
	success: function(res) {
		console.log(res.data);
	}
});

// 中断请求任务
// Interrupt request task
requestTask.abort();
```

**Tips**

- 请求的 ``header`` 中 ``content-type`` 默认为 ``application/json``。
- The ``content-type`` in the requested ``header`` defaults to ``application/json``.
- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The ``timeout time'' of the network request can be configured in ``manifest.json`` [networkTimeout](/collocation/manifest?id=networktimeout).
- H5 端本地调试需注意跨域问题，参考：[调试跨域问题解决方案](https://ask.dcloud.net.cn/article/35267)
- H5 local debugging needs to pay attention to cross-domain issues, refer to: [Debugging cross-domain problem solutions](https://ask.dcloud.net.cn/article/35267)
- H5端 cookie 受跨域限制（和平时开发网站时一样），旧版的 uni.request 未支持 withCredentials 配置，可以直接使用 xhr 对象或者其他类库。
- H5 cookies are subject to cross-domain restrictions (the same as during website development). The old version of uni.request does not support the withCredentials configuration. You can directly use xhr objects or other libraries.
- 根据 W3C 规范，H5 端无法获取 response header 中 Set-Cookie、Set-Cookie2 这2个字段，对于跨域请求，允许获取的 response header 字段只限于“simple response header”和“Access-Control-Expose-Headers”（[详情](https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header)）
- According to the W3C specification, the H5 side cannot obtain the Set-Cookie and Set-Cookie2 fields in the response header. For cross-domain requests, the response header fields that are allowed to be obtained are limited to "simple response header" and "Access-Control-Expose-" Headers" ([details](https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header))
- [uni-app 插件市场](https://ext.dcloud.net.cn/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8)有flyio、axios等三方封装的拦截器可用
- [uni-app plug-in market](https://ext.dcloud.net.cn/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8) There are three parties such as flyio and axios Encapsulated interceptor available
- 低版本手机自身不支持 ipv6，如果服务器仅允许 ipv6，会导致老手机无法正常运行或访问速度非常慢
- Low-version mobile phones do not support ipv6. If the server only allows ipv6, it will cause the old mobile phones to not operate normally or the access speed is very slow
- localhost、127.0.0.1等服务器地址，只能在电脑端运行，手机端连接时不能访问。请使用标准IP并保证手机能连接电脑网络
- Server addresses such as localhost, 127.0.0.1, etc., can only be run on the computer side, and cannot be accessed when the mobile side is connected. Please use a standard IP and ensure that the phone can connect to the computer network
- debug 模式，安卓端暂时无法获取响应头，url中含有非法字符（如未编码为%20的空格）时会请求失败
- In debug mode, the Android terminal cannot obtain the response header temporarily, and the request will fail if the URL contains illegal characters (such as spaces not encoded as %20)
- iOS App第一次安装启动后，会弹出是否允许联网的询问框，在用户点击同意前，调用联网API会失败。请注意判断这种情况。比如官方提供的新闻模板示例（HBuilderX新建项目可选择），会判断如果无法联网，则提供一个错误页，提示用户设置网络及下拉刷新重试。
- After the iOS App is installed and started for the first time, a dialog box asking whether to allow networking will pop up. Calling the networking API will fail before the user clicks to agree. Please pay attention to judge this situation. For example, the official news template example (optional for new projects in HBuilderX) will determine that if the network cannot be connected, an error page will be provided, prompting the user to set the network and pull down to refresh and try again.
- 良好体验的App，还会判断当前是否处于飞行模式（[参考](https://ext.dcloud.net.cn/plugin?id=594)）、是wifi还是3G（[参考](https://uniapp.dcloud.io/api/system/network)）
- App with good experience will also determine whether it is currently in airplane mode ([reference](https://ext.dcloud.net.cn/plugin?id=594)), wifi or 3G ([reference](https: //uniapp.dcloud.io/api/system/network))
- 部分安卓设备，真机运行或debug模式下的网速，低于release模式很多。
- For some Android devices, the network speed in real machine or debug mode is much lower than in release mode.
- 使用一些比较小众的证书机构（如：CFCA OV OCA）签发的 ssl 证书在安卓设备请求会失败，因为这些机构的根证书不在系统内置根证书库，可以更换其他常见机构签发的证书（如：Let's Encrypt），或者配置 sslVerify 为 false 关闭 ssl 证书验证（不推荐）。
- Using some relatively small certificate authorities (such as CFCA OV OCA) issued SSL certificates will fail to request on Android devices, because the root certificates of these organizations are not in the system's built-in root certificate library, you can replace certificates issued by other common organizations (such as : Let's Encrypt), or configure sslVerify to false to turn off ssl certificate verification (not recommended).
- 单次网络请求数据量建议控制在50K以下（仅指json数据，不含图片），过多数据应分页获取，以提升应用体验。
- It is recommended that the amount of data in a single network request be controlled below 50K (only json data, excluding images). Too much data should be obtained by pagination to improve the application experience.