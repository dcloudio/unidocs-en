### uni.connectSocket(OBJECT)
创建一个 [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 连接。
Create a [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) connection.

**OBJECT 参数说明**
**OBJECT parameter description**
|参数名|类型|必填|说明|平台差异说明|
|Parameter name|Type|Required|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|url|String|是|服务器接口地址||
|url|String|Yes|Server interface address||
|header|Object|否|HTTP Header , header 中不能设置 Referer|App 2.9.6+|
|header|Object|No|HTTP Header, Referer cannot be set in the header|App 2.9.6+|
|protocols|Array&lt;String&gt;|否|子协议数组|App、H5|
|protocols|Array&lt;String&gt;|No|Array of sub-protocols|App、H5|
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|Callback function at the end of the interface call (it will be executed if the call succeeds or fails)|&nbsp;|

**示例代码**
**Sample Code**

```javascript
uni.connectSocket({
	url: 'wss://www.example.com/socket',
	data() {
		return {
			x: '',
			y: ''
		};
	},
	header: {
		'content-type': 'application/json'
	},
	protocols: ['protocol1'],
	method: 'GET'
});
```

**返回值**
**return value**

如果希望返回一个 [socketTask](/api/request/socket-task) 对象，需要至少传入 success / fail / complete 参数中的一个。例如：
If you want to return a [socketTask](/api/request/socket-task) object, you need to pass in at least one of the success / fail / complete parameters. E.g:

```javascript
var socketTask = uni.connectSocket({
	url: 'wss://www.example.com/socket', 
	//仅为示例，并非真实接口地址。
	//Just an example, not the real interface address.
	complete: ()=> {}
});
```

如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：[Promise 封装](/api/README?id=promise-%E5%B0%81%E8%A3%85)
If no success / fail / complete parameters are passed in, the encapsulated Promise object will be returned: [Promise encapsulation](/api/README?id=promise-%E5%B0%81%E8%A3%85)

**注意事项**
**Precautions**

- 网络请求的 ``超时时间`` 可以统一在 ``manifest.json`` 中配置 [networkTimeout](/collocation/manifest?id=networktimeout)。
- The ``timeout time'' of the network request can be configured in ``manifest.json`` [networkTimeout](/collocation/manifest?id=networktimeout).
- App平台，2.2.6以下的版本，不支持 ``ArrayBuffer`` 类型的数据收发。老版本不愿升级也可以使用 [plus-websocket插件](https://ext.dcloud.net.cn/plugin?id=647) 插件替代。
- App platform, versions below 2.2.6, do not support ``ArrayBuffer'' type data sending and receiving. If you don’t want to upgrade the old version, you can also use the [plus-websocket plug-in](https://ext.dcloud.net.cn/plugin?id=647) plug-in instead.
- App平台自定义组件模式下，所有 `vue` 页面只能使用一个 `websocket` 连接。App下可以使用 [plus-websocket](https://ext.dcloud.net.cn/plugin?id=647) 插件替代实现多链接。App平台，2.2.6+起支持多个socket链接，数量没有限制。
- In the custom component mode of the App platform, all `vue` pages can only use one `websocket` connection. You can use the [plus-websocket](https://ext.dcloud.net.cn/plugin?id=647) plug-in to implement multiple links under the App. App platform, starting from 2.2.6+ supports multiple socket links, and the number is unlimited.

### uni.onSocketOpen(CALLBACK)
监听WebSocket连接打开事件。
Monitor the WebSocket connection open event.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|header|Object|连接成功的 HTTP 响应 Header|
|header|Object|HTTP response for successful connection Header|

**示例代码：**
**Sample code:**

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});
uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！');
  console.log('WebSocket connection has been opened!');
});
```


### uni.onSocketError(CALLBACK)
监听WebSocket错误。
Listen for WebSocket errors.

**示例代码**
**Sample Code**
```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});
uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！');
  console.log('WebSocket connection has been opened!');
});
uni.onSocketError(function (res) {
  console.log('WebSocket连接打开失败，请检查！');
  console.log('WebSocket connection failed to open, please check!');
});
```

### uni.sendSocketMessage(OBJECT)
通过 WebSocket 连接发送数据，需要先 [uni.connectSocket](/api/request/websocket?id=connectsocket)，并在 [uni.onSocketOpen](/api/request/websocket?id=onsocketopen) 回调之后才能发送。
To send data through a WebSocket connection, you need to [uni.connectSocket](/api/request/websocket?id=connectsocket) first and send it after the [uni.onSocketOpen](/api/request/websocket?id=onsocketopen) callback.

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|data|String/ArrayBuffer|是|需要发送的内容|
|data|String/ArrayBuffer|Yes|What needs to be sent|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

**示例代码**
**Sample Code**

```javascript
var socketOpen = false;
var socketMsgQueue = [];

uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

uni.onSocketOpen(function (res) {
  socketOpen = true;
  for (var i = 0; i < socketMsgQueue.length; i++) {
    sendSocketMessage(socketMsgQueue[i]);
  }
  socketMsgQueue = [];
});

function sendSocketMessage(msg) {
  if (socketOpen) {
    uni.sendSocketMessage({
      data: msg
    });
  } else {
    socketMsgQueue.push(msg);
  }
}
```

### uni.onSocketMessage(CALLBACK)
监听WebSocket接受到服务器的消息事件。
Monitor the message events received by the WebSocket from the server.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|data|String/ArrayBuffer|服务器返回的消息|
|data|String/ArrayBuffer|Message returned by the server|

**示例代码：**
**Sample code:**

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

uni.onSocketMessage(function (res) {
  console.log('收到服务器内容：' + res.data);
  console.log('Received server content:' + res.data);
});
```

### uni.closeSocket(OBJECT)
关闭 WebSocket 连接。
Close the WebSocket connection.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|code|Number|否|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|code|Number|No|A numeric value represents the status number of the closed connection, indicating the reason for the connection being closed. If this parameter is not specified, the default value is 1000 (indicating that the normal connection is closed)|
|reason|String|否|一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）|
|reason|String|No|A readable string indicating the reason why the connection was closed. This string must be UTF-8 text (not characters) no longer than 123 bytes|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

### uni.onSocketClose(CALLBACK)
监听WebSocket关闭。
Monitor WebSocket is closed.

```javascript
uni.connectSocket({
  url: 'wss://www.example.com/socket'
});

// 注意这里有时序问题，
// Note that there are timing issues here,
// 如果 uni.connectSocket 还没回调 uni.onSocketOpen，而先调用 uni.closeSocket，那么就做不到关闭 WebSocket 的目的。
// If uni.connectSocket does not call back uni.onSocketOpen, but calls uni.closeSocket first, then it will not be able to close the WebSocket.
// 必须在 WebSocket 打开期间调用 uni.closeSocket 才能关闭。
// You must call uni.closeSocket during the opening of the WebSocket to be closed.
uni.onSocketOpen(function () {
  uni.closeSocket();
});

uni.onSocketClose(function (res) {
  console.log('WebSocket 已关闭！');
  console.log('WebSocket is closed!');
});
```
