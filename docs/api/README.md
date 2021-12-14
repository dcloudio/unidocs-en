`uni-app`的js API由标准ECMAScript的js API 和 uni 扩展 API 这两部分组成。
The js API of `uni-app` consists of the standard ECMAScript js API and the uni extension API.

标准ecmascript的API非常多，本文档没有必要列全，仅以console、settimeout为例做简要说明。
There are many APIs for standard ecmascript. There is no need to list exhaustively in this document. Just take console and settimeout as examples to make a brief explanation.

## 标准js和浏览器js的区别
## Differences between standard js and browser js

`uni-app`的js代码，h5端运行于浏览器中。非h5端，Android平台运行在v8引擎中，iOS平台运行在iOS自带的jscore引擎中。
For the js code of `uni-app`, the h5 side runs in the browser. For non-h5 sides, Android platform runs in v8 engine, and iOS platform runs in its own jscore engine.

非H5端，虽然不支持window、document、navigator等浏览器的js API，但也支持标准ECMAScript。
On the non-H5 sides, the standard ECMAScript is supported but not the js APIs of browsers such as window, document or navigator.

开发者不要把浏览器里的js等价于标准js。
Developers should not equate js in browsers to standard js.

ECMAScript由Ecma国际管理，是基础js语法。浏览器基于标准js扩充了window、document等js API；Node.js基于标准js扩充了fs等模块；
ECMAScript, managed by Ecma International, is the basic js syntax. The browser expands the js APIs of window, document and others based on the standard js. Node.js expands the fs and other modules based on the standard js.

所以uni-app的非H5端，一样支持标准js，支持if、for等语法，支持字符串、数组、时间等变量及各种处理方法。仅仅是不支持浏览器专用对象。
Therefore, the non-H5 sides of uni-app also support the standard js, syntaxes such as if and for, variables such as string, array and time, and various processing methods. Only the browser-specific objects are not supported.

## 各端特色API调用
## Call of the featured APIs on each side

除了uni-app框架内置的跨端API，各端自己的特色API也可通过[条件编译](https://uniapp.dcloud.io/platform)自由使用。
In addition to the cross-side API built into the uni-app framework, each side's own characteristic API can also be used freely through [Conditional compilation](https://uniapp.dcloud.io/platform).

各端特色API规范参考各端的开发文档。uni-app也支持通过扩展原生插件来丰富App端的开发能力，具体参考[插件开发文档](http://ask.dcloud.net.cn/article/35408)
Refer to the development documents of each side for their characteristic API specifications. uni-app also supports expanding native plug-ins to enrich the development capability of the App side. For details, please refer to [Plug-in development document](http://ask.dcloud.net.cn/article/35408)

各平台的API新增，不需要uni-app升级，开发者就可以直接使用。
Developers can use the new APIs on each platform directly not requiring the uni-app update beforehand.

## 说明
## Instruction

- uni.on 开头的 API 是监听某个事件发生的 API 接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。
- The APIs beginning with uni.on are used as API interfaces to listen to certain events and accept a CALLBACK function as a parameter. When that event is triggered, the CALLBACK function is called.
- 如未特殊约定，其他 API 接口都接受一个 OBJECT 作为参数。
- Unless otherwise specified, other API interfaces accept an OBJECT as a parameter.
- OBJECT 中可以指定 success，fail，complete 来接收接口调用结果。
- In the OBJECT, success, fail and complete can be specified in the reception of the interface call result.
- **平台差异说明**若无特殊说明，则表示所有平台均支持。
- **Platform difference description**Unless otherwise specified, it means that all platforms support it.

## API `Promise 化`
## API `Promisify`

1. 具体 API `Promise 化` 的策略：
1. Specific strategy of API `Promisify`:
   - 异步的方法，如果不传入 success、fail、complete 等 callback 参数，将以 Promise 返回数据。例如：`uni.getImageInfo()`
   - For the asynchronous method, if no callback parameter such as success, fail or complete is passed in, the data will be returned as Promise. E.g.: `uni.getImageInfo()`
   - 异步的方法，且有返回对象，如果希望获取返回对象，必须至少传入一项 success、fail、complete 等 callback 参数。例如：
   - For asynchronous method with return object, at least one callback parameter of success, fail or complete should be passed in to obtain the return object. E.g.:

		```js
			// 正常使用
        	//Normal use
			const task = uni.connectSocket(
				success(res){
					console.log(res)
				}
			)

			// Promise 化
        	// Promisify
			uni.connectSocket().then(res => {
					// 此处即为 success 回调的 res
        			//This is the res called back by success.
					// 如果想获取 task ，则不要使用 Promise 化
        			// Promisify transformation should be avoid if you want to obtain task.
					console.log(res)
			})
		```

2. 不进行 `Promise 化` 的 API：
2. API that does not proceed `Promisify`:
   - 同步的方法（即以 sync 结束）。例如：`uni.getSystemInfoSync()`
   - Synchronization method (ended with sync). E.g.: `uni.getSystemInfoSync()`
   - 以 create 开头的方法。例如：`uni.createMapContext()`
   - Method beginning with create. E.g.: `uni.createMapContext()`
   - 以 manager 结束的方法。例如：`uni.getBackgroundAudioManager()`
   - Method ending with manager. E.g.: `uni.getBackgroundAudioManager()`

### Vue 2 和 Vue 3 的 API `Promise 化`
### API `Promisify` of Vue 2 and Vue 3
> 返回结果不一致，以下为 `不同点` 和 `互相转换`
> Inconsistent results are returned, and the following are `different point` and `mutual transformation`

#### Vue 2

> 对部分 API 进行了 Promise 封装，返回数据的第一个参数是错误对象，第二个参数是返回数据。
> Some APIs are encapsulated by Promise. The first parameter of the returned data is the error object, and the second parameter is the returned data.

**使用示例：**
**Usage example:**

```js
// 默认方式
//Default method
uni.request({
	url: 'https://www.example.com/request',
	success: (res) => {
		console.log(res.data);
	},
	fail:(err) => {
		console.error(err)
	}
});

// Promise
uni.request({
		url: 'https://www.example.com/request'
	})
	.then(data => {
		// data为一个数组
		// data is an array
		// 数组第一项为错误信息 即为 fail 回调
		//The first term of the array is the error message, namely the fail callback
		// 第二项为返回数据
		//The second term is the returned data.
		var [err, res]  = data;
        console.log(res.data);
	})

// Await
async function request () {
	var [err, res] = await uni.request({
		url: 'https://www.example.com/request'
	});
	console.log(res.data);
}
```

#### Vue 3

> 对部分 API 进行了 Promise 封装，`then` 为 success 成功回调。`catch` 为 fail 失败回调
> Part of APIs are encapsulated by Promise, and `then` is the success callback. `catch` fail callback

**使用示例：**
**Usage example:**

```js
// 默认方式
//Default method
uni.request({
	url: 'https://www.example.com/request',
	success: (res) => {
		console.log(res.data);
	},
	fail:(err) => {
		console.error(err)
	}
});

// Promise
uni.request({
		url: 'https://www.example.com/request'
	})
	// 此处即为 success 回调中的 res
	// Here is the res in the success callback
	.then(res => {
		console.log(res.data);
	})
	// 此处即为 fail 回调中的 err
	// Here is the err in the fail callback
	.catch(err => {
		console.error(err)
	})

// Await
async function request () {
	try{
		var res = await uni.request({
			url: 'https://www.example.com/request'
		});
		// 此处即为 success 回调中的 res
		//This is the res in the success callback.
		console.log(res); 
	} catch (err) {
		// 此处即为 fail 回调中的 err
		// This is the err in the fail callback
		console.error(err) 
	}
}
```

#### Vue 2 写法转 Vue 3 写法
#### Vue 2 writing mode has been transformed to Vue 3 writing mode

```js
// 在 main.js 中写入以下代码即可
//Write the following code in main.js
function isPromise (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

uni.addInterceptor({
  returnValue (res) {
    if (!isPromise(res)) {
      return res
    }
    return new Promise((resolve, reject) => {
      res.then(res => {
        if (res[0]) {
          reject(res[0])
        } else {
          resolve(res[1])
        }
      })
    })
  }
})
```

#### Vue 3 写法转 Vue 2 写法
#### Vue 3 writing mode has been transformed to Vue 2 writing mode

```js
// 在 main.js 中写入以下代码即可
//Write the following code in main.js
function isPromise (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

uni.addInterceptor({
	returnValue(res) {
		if (!isPromise(res)) {
			return res
		}
		const returnValue = [undefined, undefined]
		return res
			.then((res) => {
				returnValue[1] = res
			})
			.catch((err) => {
				returnValue[0] = err
			})
			.then(() => returnValue)
	}
})
```

### API 列表
### API list
#### 网络
#### Network
##### 发起请求
##### Initiating request

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.request](api/request/request?id=request)|发起网络请求|
| [uni.request](api/request/request?id=request)| Initiate a network request|

##### 上传、下载
##### Upload and download

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.uploadFile](api/request/network-file?id=uploadfile)|上传文件|
| [uni.uploadFile](api/request/network-file?id=uploadfile)| Upload file|
|[uni.downloadFile](api/request/network-file?id=downloadfile)|下载文件|
| [uni.downloadFile](api/request/network-file?id=downloadfile)| Download file|

##### WebSocket

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.connectSocket](api/request/websocket?id=connectsocket)|创建 WebSocket 连接|
| [uni.connectSocket](api/request/websocket?id=connectsocket)| Create WebSocket connection|
|[uni.onSocketOpen](api/request/websocket?id=onsocketopen)|监听 WebSocket 打开|
| [uni.onSocketOpen](api/request/websocket?id=onsocketopen)| listen to WebSocket opening|
|[uni.onSocketError](api/request/websocket?id=onsocketerror)|监听 WebSocket 错误|
| [uni.onSocketError](api/request/websocket?id=onsocketerror)| listen to WebSocket error|
|[uni.sendSocketMessage](api/request/websocket?id=sendsocketmessage)|发送 WebSocket 消息|
| [uni.sendSocketMessage](api/request/websocket?id=sendsocketmessage)| Send WebSocket message|
|[uni.onSocketMessage](api/request/websocket?id=onsocketmessage)|接受 WebSocket 消息|
| [uni.onSocketMessage](api/request/websocket?id=onsocketmessage)| Accept WebSocket message|
|[uni.closeSocket](api/request/websocket?id=closesocket)|关闭 WebSocket 连接|
| [uni.closeSocket](api/request/websocket?id=closesocket)| Close WebSocket connection|
|[uni.onSocketClose](api/request/websocket?id=onsocketclose)|监听 WebSocket 关闭|
| [uni.onSocketClose](api/request/websocket?id=onsocketclose)| listen to WebSocket closing|

##### SocketTask

|API|说明|
| API| Instruction|
|---|---|
|[SocketTask.send](/api/request/socket-task?id=sockettasksend)		|通过 WebSocket 连接发送数据			|
| [SocketTask.send](/api/request/socket-task?id=sockettasksend)| Send data through WebSocket connection|
|[SocketTask.close](/api/request/socket-task?id=sockettaskclose)		|关闭 WebSocket 连接					|
| [SocketTask.close](/api/request/socket-task?id=sockettaskclose)| Close WebSocket connection|
|[SocketTask.onOpen](/api/request/socket-task?id=sockettaskonopen)		|监听 WebSocket 连接打开事件			|
| [SocketTask.onOpen](/api/request/socket-task?id=sockettaskonopen)| listen to WebSocket connection opening event|
|[SocketTask.onClose](/api/request/socket-task?id=sockettaskonclose)		|监听 WebSocket 连接关闭事件			|
| [SocketTask.onClose](/api/request/socket-task?id=sockettaskonclose)| listen to WebSocket connection closing event|
|[SocketTask.onError](/api/request/socket-task?id=sockettaskonerror)		|监听 WebSocket 错误事件				|
| [SocketTask.onError](/api/request/socket-task?id=sockettaskonerror)| listen to WebSocket error event|
|[SocketTask.onMessage](/api/request/socket-task?id=sockettaskonmessage)	|监听 WebSocket 接受到服务器的消息事件	|
| [SocketTask.onMessage](/api/request/socket-task?id=sockettaskonmessage)| listen to the message events that WebSocket receives and send to the server.|

#### 媒体
#### Media
##### 图片
##### Image

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.chooseImage](api/media/image?id=chooseimage)|从相册选择图片，或者拍照|
| [uni.chooseImage](api/media/image?id=chooseimage)| Select a image from album, or shoot one|
|[uni.previewImage](api/media/image?id=previewimage)|预览图片|
| [uni.previewImage](api/media/image?id=previewimage)| Preview image|
|[uni.getImageInfo](api/media/image?id=getimageinfo)|获取图片信息|
| [uni.getImageInfo](api/media/image?id=getimageinfo)| Get image information|
|[uni.saveImageToPhotosAlbum](api/media/image?id=saveimagetophotosalbum)|保存图片到系统相册|
| [uni.saveImageToPhotosAlbum](api/media/image?id=saveimagetophotosalbum)| Save the image to the system album|

##### 文件
##### Document

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.chooseFile](api/media/file?id=chooseFile)|从本地选择文件|
| [uni.chooseFile](api/media/file?id=chooseFile)| Select files from the local directory|

##### 录音管理
##### Recording Management

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.getRecorderManager](api/media/record-manager)|录音管理|
| [uni.getRecorderManager](api/media/record-manager)| Recording Management|

##### 背景音频播放管理
##### Background audio playback management

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.getBackgroundAudioManager](api/media/background-audio-manager)|背景音频播放管理|
| [uni.getBackgroundAudioManager](api/media/background-audio-manager)| Background audio playback management|

##### 音频组件管理
##### Audio component management

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createInnerAudioContext](api/media/audio-context)|音频组件管理|
| [uni.createInnerAudioContext](api/media/audio-context)| Audio component management|

##### 视频
##### Video

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.chooseVideo](api/media/video?id=choosevideo)|从相册选择视频，或者拍摄|
| [uni.chooseVideo](api/media/video?id=choosevideo)| Select video from album, or shoot one|
|[uni.chooseMedia](api/media/video?id=choosemedia)|拍摄或从手机相册中选择图片或视频。|
| [uni.chooseMedia](api/media/video?id=choosemedia)| Shoot or select images of videos from mobile phone albums.|
|[uni.saveVideoToPhotosAlbum](api/media/video?id=savevideotophotosalbum)|保存视频到系统相册|
| [uni.saveVideoToPhotosAlbum](api/media/video?id=savevideotophotosalbum)| Save the video to the system album|
|[uni.createVideoContext](/api/media/video-context?id=createvideocontext)|视频组件管理|
| [uni.createVideoContext](/api/media/video-context?id=createvideocontext)| Video component management|

##### 相机组件管理
##### Camera component management

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createCameraContext](api/media/camera-context.md)|相机组件管理|
| [uni.createCameraContext](api/media/camera-context.md)| Camera component management|

##### 直播组件管理
##### Live stream component management

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createLivePlayerContext](api/media/live-player-context.md)|直播组件管理|
| [uni.createLivePlayerContext](api/media/live-player-context.md)| Live stream component management|

#### 文件
#### Document

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.saveFile](api/file/file?id=savefile)|保存文件|
| [uni.saveFile](api/file/file?id=savefile)| Save file|
|[uni.getSavedFileList](api/file/file?id=getsavedfilelist)|获取已保存的文件列表|
| [uni.getSavedFileList](api/file/file?id=getsavedfilelist)| Obtain the list of saved files|
|[uni.getSavedFileInfo](api/file/file?id=getsavedfileinfo)|获取已保存的文件信息|
| [uni.getSavedFileInfo](api/file/file?id=getsavedfileinfo)| Obtain saved file information.|
|[uni.removeSavedFile](api/file/file?id=removesavedfile)|删除已保存的文件信息|
| [uni.removeSavedFile](api/file/file?id=removesavedfile)| Delete saved file information|
|[uni.getFileInfo](/api/file/file?id=getfileinfo)|获取文件信息|
| [uni.getFileInfo](/api/file/file?id=getfileinfo)| Get file information|
|[uni.openDocument](api/file/file?id=opendocument)|打开文件|
| [uni.openDocument](api/file/file?id=opendocument)| Open file|


#### 数据缓存
#### Data cache

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.getStorage](api/storage/storage?id=setstorage)|获取本地数据缓存|
| [uni.getStorage](api/storage/storage?id=setstorage)| Get local data cache|
|[uni.getStorageSync](api/storage/storage?id=setstoragesync)|获取本地数据缓存|
| [uni.getStorageSync](api/storage/storage?id=setstoragesync)| Get local data cache|
|[uni.setStorage](api/storage/storage?id=getstorage)|设置本地数据缓存|
| [uni.setStorage](api/storage/storage?id=getstorage)| Set up local data cache|
|[uni.setStorageSync](api/storage/storage?id=getstoragesync)|设置本地数据缓存|
| [uni.setStorageSync](api/storage/storage?id=getstoragesync)| Set up local data cache|
|[uni.getStorageInfo](api/storage/storage?id=getstorageinfo)|获取本地缓存的相关信息|
| [uni.getStorageInfo](api/storage/storage?id=getstorageinfo)| Obtain relevant information about local cache|
|[uni.getStorageInfoSync](api/storage/storage?id=getstorageinfosync)|获取本地缓存的相关信息|
| [uni.getStorageInfoSync](api/storage/storage?id=getstorageinfosync)| Obtain relevant information about local cache|
|[uni.removeStorage](api/storage/storage?id=removestorage)|删除本地缓存内容|
| [uni.removeStorage](api/storage/storage?id=removestorage)| Delete local cache content|
|[uni.removeStorageSync](api/storage/storage?id=removestoragesync)|删除本地缓存内容|
| [uni.removeStorageSync](api/storage/storage?id=removestoragesync)| Delete local cache content|
|[uni.clearStorage](api/storage/storage?id=clearstorage)|清理本地数据缓存|
| [uni.clearStorage](api/storage/storage?id=clearstorage)| Clean up the local data cache|
|[uni.clearStorageSync](api/storage/storage?id=clearstoragesync)|清理本地数据缓存|
| [uni.clearStorageSync](api/storage/storage?id=clearstoragesync)| Clean up the local data cache|


#### 位置
#### Location
##### 获取位置 
##### Get location

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.getLocation](api/location/location?id=getlocation)|获取当前位置|
| [uni.getLocation](api/location/location?id=getlocation)| Get current location|
|[uni.chooseLocation](api/location/location?id=chooselocation)|打开地图选择位置|
| [uni.chooseLocation](api/location/location?id=chooselocation)| Open the map to select a location|

##### 查看位置
##### View location

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.openLocation](api/location/open-location?id=openlocation)|打开内置地图|
| [uni.openLocation](api/location/open-location?id=openlocation)| Open built-in map|

##### 地图组件控制
##### Map component control

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createMapContext](api/location/map?id=createmapcontext)|地图组件控制|
| [uni.createMapContext](api/location/map?id=createmapcontext)| Map component control|


#### 设备
#### Device

##### 系统信息
##### System message

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.getSystemInfo](api/system/info?id=getsysteminfo)|获取系统信息|
| [uni.getSystemInfo](api/system/info?id=getsysteminfo)| Get system information|
|[uni.getSystemInfoSync](api/system/info?id=getsysteminfosync)|获取系统信息|
| [uni.getSystemInfoSync](api/system/info?id=getsysteminfosync)| Get system information|
|[uni.canIUse](/api/system/info?id=caniuse)|判断应用的 API，回调，参数，组件等是否在当前版本可用|
| [uni.canIUse](/api/system/info?id=caniuse)| Determine whether the applied APIs, callbacks, parameters, components, etc. are available in the current version|

##### 网络状态
##### Network status

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.getNetworkType](api/system/network?id=getnetworktype)|获取网络类型|
| [uni.getNetworkType](api/system/network?id=getnetworktype)| Get network type|
|[uni.onNetworkStatusChange](api/system/network?id=onnetworkstatuschange)|监听网络状态变化|
| [uni.onNetworkStatusChange](api/system/network?id=onnetworkstatuschange)| Listen to network status change|
|[uni.offNetworkStatusChange](api/system/network?id=offnetworkstatuschange)|取消监听网络状态变化|
| [uni.offNetworkStatusChange](api/system/network?id=offnetworkstatuschange)| Cancel listening to network status change|

##### 加速度计
##### Accelerometer

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.onAccelerometerChange](api/system/accelerometer?id=onaccelerometerchange)|监听加速度数据|
| [uni.onAccelerometerChange](api/system/accelerometer?id=onaccelerometerchange)| Listen to the acceleration data|
|[uni.offAccelerometerChange](api/system/accelerometer?id=offaccelerometerchange)|取消监听加速度数据|
| [uni.offAccelerometerChange](api/system/accelerometer?id=offaccelerometerchange)| Remove listening to the acceleration data|
|[uni.startAccelerometer](api/system/accelerometer?id=startaccelerometer)|开始监听加速度数据|
| [uni.startAccelerometer](api/system/accelerometer?id=startaccelerometer)| Start listening to the acceleration data|
|[uni.stopAccelerometer](api/system/accelerometer?id=stopaccelerometer)|停止监听加速度数据|
| [uni.stopAccelerometer](api/system/accelerometer?id=stopaccelerometer)| Stop listening to the acceleration data|

##### 罗盘
##### Compass

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.onCompassChange](api/system/compass?id=oncompasschange)|监听罗盘数据|
| [uni.onCompassChange](api/system/compass?id=oncompasschange)| listen to compass data|
|[uni.offCompassChange](api/system/compass?id=offcompasschange)|取消监听罗盘数据|
| [uni.offCompassChange](api/system/compass?id=offcompasschange)| Cancel listening to compass data|
|[uni.startCompass](api/system/compass?id=startcompass)|开始监听罗盘数据|
| [uni.startCompass](api/system/compass?id=startcompass)| Start listening to compass data|
|[uni.stopCompass](api/system/compass?id=stopcompass)|停止监听罗盘数据|
| [uni.stopCompass](api/system/compass?id=stopcompass)| Stop listening to compass data|


##### 拨打电话
##### Dial number

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.makePhoneCall](api/system/phone?id=makephonecall)|拨打电话|
| [uni.makePhoneCall](api/system/phone?id=makephonecall)| Dial number|

##### 扫码
##### Scan code

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.scanCode](api/system/barcode?id=scancode)|扫码|
| [uni.scanCode](api/system/barcode?id=scancode)| Scan code|

##### 剪切板
##### Clipboard

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.setClipboardData](api/system/clipboard?id=setclipboarddata)|设置剪贴板内容|
| [uni.setClipboardData](api/system/clipboard?id=setclipboarddata)| Set the contents of the clipboard|
|[uni.getClipboardData](api/system/clipboard?id=getclipboarddata)|获取剪贴板内容|
| [uni.getClipboardData](api/system/clipboard?id=getclipboarddata)| Get the contents of the clipboard|

##### 屏幕亮度
##### Screen brightness

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.setScreenBrightness](api/system/brightness?id=setscreenbrightness)|设置屏幕亮度|
| [uni.setScreenBrightness](api/system/brightness?id=setscreenbrightness)| Set screen brightness|
|[uni.getScreenBrightness](api/system/brightness?id=getscreenbrightness)|获取屏幕亮度|
| [uni.getScreenBrightness](api/system/brightness?id=getscreenbrightness)| Get screen brightness|
|[uni.setKeepScreenOn](api/system/brightness?id=setkeepscreenon)|设置是否保持常亮状态|
| [uni.setKeepScreenOn](api/system/brightness?id=setkeepscreenon)| Set whether to stay on or not|


##### 振动
##### Vibration

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.vibrate](api/system/vibrate?id=vibrate)|使手机发生振动|
| [uni.vibrate](api/system/vibrate?id=vibrate)| Make the phone vibrate|
|[uni.vibrateLong](api/system/vibrate?id=vibratelong)|使手机发生较长时间的振动|
| [uni.vibrateLong](api/system/vibrate?id=vibratelong)| Lead to long time vibration of the phone|
|[uni.vibrateShort](api/system/vibrate?id=vibrateshort)|使手机发生较短时间的振动|
| [uni.vibrateShort](api/system/vibrate?id=vibrateshort)| Lead to short time vibration of the phone|

##### 手机联系人
##### Mobile phone contact

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.addPhoneContact](api/system/contact?id=addphonecontact)|添加手机通讯录|
| [uni.addPhoneContact](api/system/contact?id=addphonecontact)| Add phone address book|

##### 蓝牙
##### Bluetooth

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.openBluetoothAdapter](/api/system/bluetooth?id=openbluetoothadapter)|初始化蓝牙模块|
| [uni.openBluetoothAdapter](/api/system/bluetooth?id=openbluetoothadapter)| Initialize the Bluetooth module|
|[uni.startBluetoothDevicesDiscovery](/api/system/bluetooth?id=startbluetoothdevicesdiscovery)|搜寻附近的蓝牙外围设备|
| [uni.startBluetoothDevicesDiscovery](/api/system/bluetooth?id=startbluetoothdevicesdiscovery)| Search for nearby Bluetooth peripherals|
|[uni.onBluetoothDeviceFound](/api/system/bluetooth?id=onbluetoothdevicefound)|监听寻找到新设备的事件    |
| [uni.onBluetoothDeviceFound](/api/system/bluetooth?id=onbluetoothdevicefound)| listen to the event of finding a new device|
|[uni.stopBluetoothDevicesDiscovery](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery)|停止搜寻|
| [uni.stopBluetoothDevicesDiscovery](/api/system/bluetooth?id=stopbluetoothdevicesdiscovery)| Stop searching|
|[uni.onBluetoothAdapterStateChange](/api/system/bluetooth?id=onbluetoothadapterstatechange)|监听蓝牙适配器状态变化事件|
| [uni.onBluetoothAdapterStateChange](/api/system/bluetooth?id=onbluetoothadapterstatechange)| listen to Bluetooth adapter status change events|
|[uni.getConnectedBluetoothDevices](/api/system/bluetooth?id=getconnectedbluetoothdevices)|根据 uuid 获取处于已连接状态的设备|
| [uni.getConnectedBluetoothDevices](/api/system/bluetooth?id=getconnectedbluetoothdevices)| Obtain the devices with connected status according to uuid|
|[uni.getBluetoothDevices](/api/system/bluetooth?id=getbluetoothdevices)|获取已发现的蓝牙设备|
| [uni.getBluetoothDevices](/api/system/bluetooth?id=getbluetoothdevices)| Obtain discovered Bluetooth devices|
|[uni.getBluetoothAdapterState](/api/system/bluetooth?id=getbluetoothadapterstate)|获取本机蓝牙适配器状态|
| [uni.getBluetoothAdapterState](/api/system/bluetooth?id=getbluetoothadapterstate)| Obtain the local Bluetooth adapter status|
|[uni.closeBluetoothAdapter](/api/system/bluetooth?id=closebluetoothadapter)|关闭蓝牙模块|
| [uni.closeBluetoothAdapter](/api/system/bluetooth?id=closebluetoothadapter)| Disable the Bluetooth module|

##### 低耗蓝牙
##### Bluetooth Low Energy

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.writeBLECharacteristicValue](/api/system/ble?id=writeblecharacteristicvalue)|向低功耗蓝牙设备特征值中写入二进制数据|
| [uni.writeBLECharacteristicValue](/api/system/ble?id=writeblecharacteristicvalue)| Write binary data into the characteristic value of the low power Bluetooth devices|
|[uni.readBLECharacteristicValue](/api/system/ble?id=readblecharacteristicvalue)|读取低功耗蓝牙设备的特征值的二进制数据值|
| [uni.readBLECharacteristicValue](/api/system/ble?id=readblecharacteristicvalue)| Read the binary data value of the characteristic value of the low power Bluetooth devices|
|[uni.onBLEConnectionStateChange](/api/system/ble?id=onbleconnectionstatechange)|监听低功耗蓝牙连接状态的改变事件|
| [uni.onBLEConnectionStateChange](/api/system/ble?id=onbleconnectionstatechange)| listen to the change events of low power Bluetooth connection status|
|[uni.onBLECharacteristicValueChange](/api/system/ble?id=onblecharacteristicvaluechange)|监听低功耗蓝牙设备的特征值变化事件|
| [uni.onBLECharacteristicValueChange](/api/system/ble?id=onblecharacteristicvaluechange)| listen to the characteristic value change events of the low power Bluetooth devices|
|[uni.notifyBLECharacteristicValueChange](/api/system/ble?id=notifyblecharacteristicvaluechange)|监听低功耗蓝牙设备的特征值变化事件|
| [uni.notifyBLECharacteristicValueChange](/api/system/ble?id=notifyblecharacteristicvaluechange)| listen to the characteristic value change events of the low power Bluetooth devices|
|[uni.getBLEDeviceServices](/api/system/ble?id=getbledeviceservices)|获取蓝牙设备所有服务(service)|
| [uni.getBLEDeviceServices](/api/system/ble?id=getbledeviceservices)| Obtain all services of the Bluetooth devices|
|[uni.getBLEDeviceCharacteristics](/api/system/ble?id=getbledevicecharacteristics)|获取蓝牙设备某个服务中所有特征值(characteristic)|
| [uni.getBLEDeviceCharacteristics](/api/system/ble?id=getbledevicecharacteristics)| Obtain all characteristic values of a certain service of that Bluetooth device|
|[uni.createBLEConnection](/api/system/ble?id=createbleconnection)|连接低功耗蓝牙设备|
| [uni.createBLEConnection](/api/system/ble?id=createbleconnection)| Connect low power Bluetooth devices|
|[uni.closeBLEConnection](/api/system/ble?id=closebleconnection)|断开与低功耗蓝牙设备的连接|
| [uni.closeBLEConnection](/api/system/ble?id=closebleconnection)| Disconnect from low power Bluetooth devices|

##### iBeacon

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.onBeaconServiceChange](/api/system/ibeacon?id=onbeaconservicechange)|监听 iBeacon 服务状态变化事件|
| [uni.onBeaconServiceChange](/api/system/ibeacon?id=onbeaconservicechange)| listen to iBeacon service status change events|
|[uni.onBeaconUpdate](/api/system/ibeacon?id=onbeaconupdate)|监听 iBeacon 设备更新事件|
| [uni.onBeaconUpdate](/api/system/ibeacon?id=onbeaconupdate)| listen to iBeacon device update events|
|[uni.getBeacons](/api/system/ibeacon?id=getbeacons)|获取所有已搜索到的 iBeacon 设备|
| [uni.getBeacons](/api/system/ibeacon?id=getbeacons)| Obtain all searched iBeacon devices.|
|[uni.startBeaconDiscovery](/api/system/ibeacon?id=startbeacondiscovery)|停止搜索附近的 iBeacon 设备|
| [uni.startBeaconDiscovery](/api/system/ibeacon?id=startbeacondiscovery)| Stop searching for nearby iBeacon devices|
|[uni.stopBeaconDiscovery](/api/system/ibeacon?id=stopbeacondiscovery)|开始搜索附近的 iBeacon 设备|
| [uni.stopBeaconDiscovery](/api/system/ibeacon?id=stopbeacondiscovery)| Start searching for nearby iBeacon devices|

##### 生物认证
##### Biometric authentication

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.startSoterAuthentication](/api/system/authentication?id=startsoterauthentication)|开始生物认证|
| [uni.startSoterAuthentication](/api/system/authentication?id=startsoterauthentication)| Start biometric authentication|
|[uni.checkIsSupportSoterAuthentication](/api/system/authentication?id=checkissupportsoterauthentication)|获取本机支持的生物认证方式|
| [uni.checkIsSupportSoterAuthentication](/api/system/authentication?id=checkissupportsoterauthentication)| Obtain the supported biometric authentication mode|
|[uni.checkIsSoterEnrolledInDevice](/api/system/authentication?id=checkissoterenrolledindevice)|获取设备内是否录入如指纹等生物信息的接口|
| [uni.checkIsSoterEnrolledInDevice](/api/system/authentication?id=checkissoterenrolledindevice)| Interface for requesting whether biological information such as fingerprints are entered in the device|

#### 界面
#### Interface

##### 交互反馈
##### Interactive feedback

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.showToast](api/ui/prompt?id=showtoast)|显示提示框|
| [uni.showToast](api/ui/prompt?id=showtoast)| Display prompt box|
|[uni.showLoading](api/ui/prompt?id=showloading)|显示加载提示框|
| [uni.showLoading](api/ui/prompt?id=showloading)| Display loading prompt box|
|[uni.hideToast](api/ui/prompt?id=hidetoast)|隐藏提示框|
| [uni.hideToast](api/ui/prompt?id=hidetoast)| Hide prompt box|
|[uni.hideLoading](api/ui/prompt?id=hideloading)|隐藏加载提示框|
| [uni.hideLoading](api/ui/prompt?id=hideloading)| Hide loading prompt box|
|[uni.showModal](api/ui/prompt?id=showmodal)|显示模态弹窗|
| [uni.showModal](api/ui/prompt?id=showmodal)| Display modal popup|
|[uni.showActionSheet](api/ui/prompt?id=showactionsheet)|显示菜单列表|
| [uni.showActionSheet](api/ui/prompt?id=showactionsheet)| Display menu list|

##### 设置导航条
##### Set navigation bar

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.setNavigationBarTitle](api/ui/navigationbar?id=setnavigationbartitle)|设置当前页面标题|
| [uni.setNavigationBarTitle](api/ui/navigationbar?id=setnavigationbartitle)| Set the title of the current page|
|[uni.setNavigationBarColor](/api/ui/navigationbar?id=setnavigationbarcolor)|设置页面导航条颜色|
| [uni.setNavigationBarColor](/api/ui/navigationbar?id=setnavigationbarcolor)| Set the color for the page navigation bar|
|[uni.showNavigationBarLoading](api/ui/navigationbar?id=shownavigationbarloading)|显示导航条加载动画|
| [uni.showNavigationBarLoading](api/ui/navigationbar?id=shownavigationbarloading)| Display navigation bar loading animation|
|[uni.hideNavigationBarLoading](api/ui/navigationbar?id=hidenavigationbarloading)|隐藏导航条加载动画|
| [uni.hideNavigationBarLoading](api/ui/navigationbar?id=hidenavigationbarloading)| Hide navigation bar loading animation|

##### 设置TabBar
##### Set up TabBar

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.setTabBarItem](/api/ui/tabbar?id=settabbaritem)|动态设置 tabBar 某一项的内容|
| [uni.setTabBarItem](/api/ui/tabbar?id=settabbaritem)| Dynamically set the content of any item in tabBar|
|[uni.setTabBarStyle](/api/ui/tabbar?id=settabbarstyle)|动态设置 tabBar 的整体样式|
| [uni.setTabBarStyle](/api/ui/tabbar?id=settabbarstyle)| Dynamically set the overall style of tabBar|
|[uni.hideTabBar](/api/ui/tabbar?id=hidetabbar)|隐藏 tabBar|
| [uni.hideTabBar](/api/ui/tabbar?id=hidetabbar)| Hide tabBar|
|[uni.showTabBar](/api/ui/tabbar?id=showtabbar)|显示 tabBar|
| [uni.showTabBar](/api/ui/tabbar?id=showtabbar)| Display tabBar|
|[uni.setTabBarBadge](/api/ui/tabbar?id=settabbarbadge)|为 tabBar 某一项的右上角添加文本|
| [uni.setTabBarBadge](/api/ui/tabbar?id=settabbarbadge)| Add text to the upper right corner of any item in tabBar|
|[uni.removeTabBarBadge](/api/ui/tabbar?id=removetabbarbadge)|移除 tabBar 某一项右上角的文本|
| [uni.removeTabBarBadge](/api/ui/tabbar?id=removetabbarbadge)| Remove the text in the upper right corner of any item in tabBar|
|[uni.showTabBarRedDot](/api/ui/tabbar?id=showtabbarreddot)|显示 tabBar 某一项的右上角的红点|
| [uni.showTabBarRedDot](/api/ui/tabbar?id=showtabbarreddot)| Display the red dot in the upper right corner of any item in tabBar|
|[uni.hideTabBarRedDot](/api/ui/tabbar?id=hidetabbarreddot)|隐藏 tabBar 某一项的右上角的红点|
| [uni.hideTabBarRedDot](/api/ui/tabbar?id=hidetabbarreddot)| Hide the red dot in the upper right corner of any item in tabBar|


##### 动画
##### Animation

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createAnimation](/api/ui/animation?id=createanimation)|创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。|
| [uni.createAnimation](/api/ui/animation?id=createanimation)| Create an animation instance animation. Call the method of the instance to describe the animation. Finally, export the animation data to the animation attribute of the component through the export method of the animation instance.|

##### 滚动
##### Scroll

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.pageScrollTo](/api/ui/scroll?id=pagescrollto)|将页面滚动到目标位置。|
| [uni.pageScrollTo](/api/ui/scroll?id=pagescrollto)| Scroll the page to the target location.|

##### 绘画
##### Painting

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createCanvasContext](/api/canvas/createCanvasContext)|创建绘图上下文|
| [uni.createCanvasContext](/api/canvas/createCanvasContext)| Create a drawing context|
|[uni.canvasToTempFilePath](/api/canvas/canvasToTempFilePath)|将画布内容保存成文件|
| [uni.canvasToTempFilePath](/api/canvas/canvasToTempFilePath)| Save the canvas content as a file|
|[uni.canvasGetImageData](/api/canvas/canvasGetImageData)|获取画布图像数据|
| [uni.canvasGetImageData](/api/canvas/canvasGetImageData)| Get canvas image data|
|[uni.canvasPutImageData](/api/canvas/canvasPutImageData)|设置画布图像数据|
| [uni.canvasPutImageData](/api/canvas/canvasPutImageData)| Set canvas image data|

##### 下拉刷新
##### Pull down to refresh

|API|说明|
| API| Instruction|
|:-|:-|
|[onPullDownRefresh](/api/ui/pulldown?id=onpulldownrefresh)|监听该页面用户下拉刷新事件|
| [onPullDownRefresh](/api/ui/pulldown?id=onpulldownrefresh)| listen to the user pull-down refresh event on this page.|
|[uni.startPullDownRefresh](/api/ui/pulldown?id=startpulldownrefresh)|开始下拉刷新|
| [uni.startPullDownRefresh](/api/ui/pulldown?id=startpulldownrefresh)| Start pull-down refresh|
|[uni.stopPullDownRefresh](/api/ui/pulldown?id=stoppulldownrefresh)|停止当前页面下拉刷新|
| [uni.stopPullDownRefresh](/api/ui/pulldown?id=stoppulldownrefresh)| Stop the current page pull-down refresh|

##### 节点信息
##### Node information

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createSelectorQuery](api/ui/nodes-info?id=createselectorquery)|创建查询请求|
| [uni.createSelectorQuery](api/ui/nodes-info?id=createselectorquery)| Create query request|
|[selectorQuery.select](/api/ui/nodes-info?id=selectorquery-对象的方法列表)|根据选择器选择单个节点|
| [selectorQuery.select](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Select a single node according to the selector|
|[selectorQuery.selectAll](/api/ui/nodes-info?id=selectorquery-对象的方法列表)|根据选择器选择全部节点|
| [selectorQuery.selectAll](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Select all nodes according to the selector|
|[selectorQuery.selectViewport](/api/ui/nodes-info?id=selectorquery-对象的方法列表)|选择显示区域|
| [selectorQuery.selectViewport](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Select display area|
|[selectorQuery.exec](/api/ui/nodes-info?id=selectorquery-对象的方法列表)|执行查询请求|
| [selectorQuery.exec](/api/ui/nodes-info?id=selectorquery-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Execute query request|
|[nodesRef.boundingClientRect](/api/ui/nodes-info?id=nodesref-对象的方法列表)|获取布局位置和尺寸|
| [nodesRef.boundingClientRect](/api/ui/nodes-info?id=nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Get layout location and size|
|[nodesRef.scrollOffset](/api/ui/nodes-info?id=nodesref-对象的方法列表)|获取滚动位置|
| [nodesRef.scrollOffset](/api/ui/nodes-info?id=nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Get scroll location|
|[nodesRef.fields](/api/ui/nodes-info?id=nodesref-对象的方法列表)|获取任意字段|
| [nodesRef.fields](/api/ui/nodes-info?id=nodesref-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Get any field|

##### 节点布局相交状态
##### Node layout intersection state

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.createIntersectionObserver](api/ui/intersection-observer?id=createintersectionobserver)|创建 IntersectionObserver 对象|
| [uni.createIntersectionObserver](api/ui/intersection-observer?id=createintersectionobserver)| Create an IntersectionObserver object|
|[intersectionObserver.relativeTo](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)|指定参照节点|
| [intersectionObserver.relativeTo](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Specify reference node|
|[intersectionObserver.relativeToViewport](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)|指定页面显示区域作为参照区域|
| [intersectionObserver.relativeToViewport](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Specify the page display area as the reference area|
|[intersectionObserver.observe](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)|指定目标节点并开始监听|
| [intersectionObserver.observe](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Specify the target node and start listening to|
|[intersectionObserver.disconnect](/api/ui/intersection-observer?id=intersectionobserver-对象的方法列表)|停止监听|
| [intersectionObserver.disconnect](/api/ui/intersection-observer?id=intersectionobserver-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95%E5%88%97%E8%A1%A8)| Stop listening|


#### 路由
#### Routing

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.navigateTo](/api/router?id=navigateto)|保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面|
| [uni.navigateTo](/api/router?id=navigateto)| Keep the current page, jump to a page in the application, and use uni.navigateBack to return to the original page|
|[uni.redirectTo](/api/router?id=redirectto)|关闭当前页面，跳转到应用内的某个页面|
| [uni.redirectTo](/api/router?id=redirectto)| Close the current page and jump to a page in the application|
|[uni.reLaunch](/api/router?id=relaunch)|关闭所有页面，打开到应用内的某个页面|
| [uni.reLaunch](/api/router?id=relaunch)| Close all pages and open a page in the application|
|[uni.switchTab](/api/router?id=switchtab)|跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面|
| [uni.switchTab](/api/router?id=switchtab)| Jump to the tabBar page and close all other non tabbar pages|
|[uni.navigateBack](/api/router?id=navigateback)|关闭当前页面，返回上一页面或多级页面|
| [uni.navigateBack](/api/router?id=navigateback)| Close the current page and return to the one or more levels of previous page|


#### 平台扩展
#### Platform extension

|API|说明|
| API| Instruction|
|:-|:-|
|[uni.requireNativePlugin](/api/extend/native-plugin?id=requirenativeplugin)|引入 App 原生插件|
| [uni.requireNativePlugin](/api/extend/native-plugin?id=requirenativeplugin)| Introduction of the App native plug-ins|





