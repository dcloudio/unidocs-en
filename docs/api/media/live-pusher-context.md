### uni.createLivePusherContext(livePusherId, this)
创建 live-pusher 上下文 livePusherContext 对象。
Create the livePusherContext object of the live-pusher context.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|见下|x|
| See below| x|


**参数说明**
**Parameter Description**

设置live-pusher组件的推流地址，推流视频模式等。
Set the live-pusher address and live-pusher video mode of the live-pusher component.

|属性|类型 |默认值|必填|说明
| Attribute| Type| Defaults| Required| Instruction
|:--|:--|:--|:--|:--|
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

**注意：**
**Notice:**
- app-nvue 平台 2.2.5+ 支持 uni.createLivePusherContext(livePusherId, this)
- The app-nvue platform 2.2.5+ supports uni.createLivePusherContext(livePusherId, this)
- app-nvue 平台 2.2.5- 需要同时设置组件属性id和ref ``<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>``，或者直接使用 ref，例如 ``this.$refs.livepusher1``
- On app-nvue platform 2.2.5, you need to set both the component attribute id and ref `<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>`, or use ref directly, for example `this.$refs.livepusher1`


### API
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

### 事件
### Event

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
