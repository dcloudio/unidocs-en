**SocketTask** 由 [uni.connectSocket()](/api/request/websocket?id=connectsocket) 接口创建。
**SocketTask** is created by the [uni.connectSocket()](/api/request/websocket?id=connectsocket) interface.

### SocketTask.onMessage(CALLBACK)
监听 WebSocket 接受到服务器的消息事件
Monitor the message events received by the WebSocket from the server

**回调函数**
**Callback**

`Function`

WebSocket 接受到服务器的消息事件的回调函数
WebSocket receives the callback function of the server's message event

**回调函数中的参数**
**Parameters in the callback function**

`Object`

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|data|String/ArrayBuffer|服务器返回的消息|
|data|String/ArrayBuffer|Message returned by the server|

### SocketTask.send(OBJECT)
通过 WebSocket 连接发送数据
Send data via WebSocket connection

**参数**
**parameter**

|属性|类型|是否必填|说明|
|Attribute|Type|Is it required|Description|
|:-|:-|:-|:-|
|data|String/ArrayBuffer|是|需要发送的内容|
|data|String/ArrayBuffer|Yes|What needs to be sent|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

### SocketTask.close(OBJECT)
关闭 WebSocket 连接
Close the WebSocket connection

**参数**
**parameter**

|属性|类型|默认值|是否必填|说明|
|Attribute|Type|Default value|Required or not|Description|
|:-|:-|:-|:-|:-|
|code|Number|1000（表示正常关闭连接）|否|一个数字值表示关闭连接的状态号，表示连接被关闭的原因。|
|code|Number|1000 (indicating that the connection is closed normally)|No|A numeric value represents the status number of the closed connection, indicating the reason for the connection being closed. |
|reason|String||否|一个可读的字符串，表示连接被关闭的原因。|
|reason|String||No|A readable string indicating the reason why the connection was closed. |
|success|Function||否|接口调用成功的回调函数|
|success|Function||No|Callback function for successful interface call|
|fail|Function||否|接口调用失败的回调函数|
|fail|Function||No|Callback function for interface call failure|
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function||No|Callback function at the end of the interface call (it will be executed if the call succeeds or fails)|

### SocketTask.onOpen(CALLBACK)
监听 WebSocket 连接打开事件
Listen for WebSocket connection open events

**回调函数**
**Callback**

`Function`

WebSocket 连接打开事件的回调函数
Callback function of WebSocket connection open event

**回调函数中的参数**
**Parameters in the callback function**

`Object`

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|data|String/ArrayBuffer|服务器返回的消息|
|data|String/ArrayBuffer|Message returned by the server|

### SocketTask.onClose(CALLBACK)
监听 WebSocket 连接关闭事件
Listen to the WebSocket connection close event

**回调函数**
**Callback**

`Function`

WebSocket 连接关闭事件的回调函数
Callback function of WebSocket connection close event

### SocketTask.onError(CALLBACK)
监听 WebSocket 错误事件
Listen for WebSocket error events

**回调函数**
**Callback**

`Function`

WebSocket 错误事件的回调函数
Callback function for WebSocket error event

**回调函数中的参数**
**Parameters in the callback function**

`Object`

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|errMsg|String|错误信息|
|errMsg|String|Error Message|