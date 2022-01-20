### uni.createLivePlayerContext(livePlayerId, this)
创建 live-player 上下文 livePlayerContext 对象。注意是直播的播放而不是推流。
Create a livePlayerContext object for live-player context. Note that it is live broadcast other than live-pusher.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|见下|x|
| See below| x|

App平台的直播播放，不使用此API，而直接使用video的API。
The App platform does not use its API for live broadcast, but directly uses the API of video.

**参数说明**
**Parameter Description**

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-:|:-:|:-:|
|livePlayerId|``<live-player>`` 组件 id||
| livePlayerId| `<live-player>` component id| |

**livePlayerContext 对象的方法列表：**
**Method list of livePlayerContext object:**

|方法|参数|说明|
| Method| Parameter| Instruction|
|:-|:-|:-|
|play|Object|播放|
| play| Object| Play|
|stop|Object|停止|
| stop| Object| Stop|
|mute|Object|静音|
| mute| Object| Mute|
|pause|Object|暂停|
| pause| Object| Pause|
|resume|Object|恢复|
| resume| Object| Restore|
|requestFullScreen|Object|进入全屏|
| requestFullScreen| Object| Enter full screen|
|exitFullScreen|Object|退出全屏|
| exitFullScreen| Object| Exit full screen|

**requestFullScreen 的 Object 参数列表：**
**Parameter list of requestFullScreen Object:**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|direction|Number|是|设置全屏时的方向，有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。|
| direction| Number| Yes| Set full screen direction, valid values are 0 (normal vertical), 90 (when screen is 90 degrees counterclockwise), -90 (when screen is 90 degrees clockwise).|
|success|Function|否|接口调用成功的回调函数。|
| success| Function| No| Callback function for successful interface calling.|
|fail|Function|否|接口调用失败的回调函数。|
| fail| Function| No| Callback function for failed interface calling.|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling).|

**其他方法的 Object 参数列表：**
**Parameter list of Objects for other methods:**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|



### uni.createLivePusherContext(livePusherId, this)
创建 live-pusher 上下文 livePusherContext 对象。
Create the livePusherContext object of the live-pusher context.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|见下|x|
| See below| x|

- app-nvue 平台 2.2.5+ 支持 uni.createLivePusherContext(livePusherId, this)
- The app-nvue platform 2.2.5+ supports uni.createLivePusherContext(livePusherId, this)
- app-nvue 平台 2.2.5以下，需要同时设置组件属性id和ref ``<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>``，或者直接使用 ref，例如 ``this.$refs.livepusher1``
- For app-nvue platform 2.2.5-, you need to set both the component attribute id and ref `<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>`, or use ref directly, for example `this.$refs.livepusher1`

使用nvue做直播，比使用vue的优势有：
The advantages of nvue for live broadcast over vue are as follows:
1. nvue可一套代码直接编译到App
1. nvue can compile a set of codes directly into App
2. nvue的cover-view比vue的cover-view更强大，在视频上绘制元素更容易。如果只考虑App端的话，不用cover-view，任意组件都可以覆盖live-pusher组件
2. cover-view of nvue is more powerful than that of vue, making it easier to draw elements on video. If only the App side is considered, any component can override the live-pusher component without using cover-view
3. 若需要视频内嵌在swiper里上下滑动（类抖音、映客首页模式），App端只有nvue才能实现
3. If the video needs to be embedded in swiper to slide up and down (like TikTok and Inke home page mode), only nvue on the App side can realize it.
当然nvue相比vue的坏处是css写法受限。
Of course, compared with vue, nvue has the disadvantage of limited css writing mode.

**参数说明**
**Parameter Description**

设置live-pusher组件的推流地址，推流视频模式等。
Set the live-pusher address and live-pusher video mode of the live-pusher component.

|属性|类型 |默认值|必填|说明
| Attribute| Type| Defaults| Required| Instruction
|:--|:--|:--|:--|:--
|url|string| |是|推流地址，支持RTMP协议。
| url| string| | Yes| live-pusher address, supporting RTMP protocol.
|mode |string| |否|推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。
| mode| string| | No| live-pusher video mode. Options include: SD (standard definition), HD (high definition) and FHD (Full high definition).
|muted|Boolean|false|否|是否静音。
| muted| Boolean| false| No| Mute or not.
|enable-camera|Boolean|true|否|开启摄像头。
| enable-camera| Boolean| true| No| Enable the camera.
|auto-focus|Boolean|true|否|自动聚集。
| auto-focus| Boolean| true| No| Automatic clustering.
|beauty|Number|0|否|美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。
| beauty| Number| 0| No| Make-up mode, with the value range of 0-9 (iOS value range of 1), 0 indicates off.
|whiteness|Number|0|否|美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。
| whiteness| Number| 0| No| Skin whitening, with the value range of 0-9 (iOS value range of 1), 0 indicates off.


#### API
#### start(callback)
> 开始推流
> Start live-pusher

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|属性|类型 |说明
| Attribute| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail

#### pause(callback)
> 暂停推流
> Pause live-pusher

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail

#### resume(callback)
> 恢复推流
> Restore live-pusher

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail


#### stop(callback)
> 停止推流
> Stop live-pusher

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail

#### switchCamera(callback)
> 切换前后摄像头
> Switch front and rear cameras

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail

#### snapshot(callback)
> 快照
> Snapshot

#####  callback 返回 Object 参数说明
##### Parameter description of callback return object
##### 成功时的回调
##### Callback on success
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type|string|"success" 表示成功, "fail" 表示失败
| type| string| "success" means success and "fail" means fail
|code|Number| 对应code码
| code| Number| Corresponding code
|message|object|{width:"快照图片宽度",height:"快照图片高度",tempImagePath:"快照图片路径"}。
| message| object| {width:"snapshot width", height:"snapshot height",tempImagePath:"snapshot path"}.

##### 失败的回调
##### Failed callback
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type|string|"fail" 表示失败
| type| string| "fail" indicates failure
|code|Number|
|message|object|


#### startPreview(callback)
> 开启摄像头预览
> Turn on camera preview

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail

#### stopPreview(callback)
> 关闭摄像头预览
> Turn off camera preview

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail

#### 事件
#### Event

#### statechange
> 状态变化事件
> State change event

#####  返回参数（detail）的详细说明
##### Detailed description of return parameter (detail)
|参数|类型|说明
| Parameter| Type| Instruction
|:--|:--|:--|
|code|Number|
|message|string|


#### netstatus
> 网络状态通知事件
> Network status notification event

#####  安卓 返回参数（detail）的详细说明
##### For Android, the detailed description of return parameter (detail)
|键名|说明
| Key name| Instruction
|:--|:--|
|videoBitrate | 当前视频编/码器输出的比特率，单位 kbps
| videoBitrate| The bit rate of current video encoder output, in kbps
|audioBitrate | 当前音频编/码器输出的比特率，单位 kbps
| audioBitrate| The bit rate of current audio encoder output, in kbps
|videoFPS | 当前视频帧率
| videoFPS| Current video frame rate
|videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
| videoGOP| GOP of current video, namely the interval time of every two key frames (I frames), in s
|netSpeed | 当前的发送/接收速度
| netSpeed| The current sending/receiving speed
|netJitter | 网络抖动情况，抖动越大，网络越不稳定
| netJitter| Network jitter, the greater the jitter, the more unstable the network is
|videoWidth | 视频画面的宽度
| videoWidth| Width of the video screen
|videoHeight | 视频画面的高度
| videoHeight| Height of the video screen

##### iOS 返回参数（detail）的详细说明
##### For iOS, the detailed description of return parameter (detail)
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|code|Number| code码
| code| Number| code
|message|string| 具体的网络状态信息
| message| string| Specific network status information


#### error
> 渲染错误事件
> Render error event

#####  返回参数（detail）的详细说明
##### Detailed description of return parameter (detail)
|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|errCode|Number|
|errMsg|string|
