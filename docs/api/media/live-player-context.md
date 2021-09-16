### uni.createLivePlayerContext(livePlayerId, this)
创建 live-player 上下文 livePlayerContext 对象。注意是直播的播放而不是推流。
Create a live-player context livePlayerContext object. Note that it is live broadcast, not push streaming.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|见下|x|
|See below|x|

App平台的直播播放，不使用此API，而直接使用video的API。
The live broadcast of the App platform does not use this API, but directly uses the video API.

**参数说明**
**Parameter Description**

|参数|说明|平台差异说明|
|Parameters|Explanation|Explanation of Platform Differences|
|:-:|:-:|:-:|
|livePlayerId|``<live-player>`` 组件 id||
|livePlayerId|``<live-player>`` component id||

**livePlayerContext 对象的方法列表：**
**List of methods of the livePlayerContext object:**


|方法|参数|说明|
|Method|Parameter|Description|
|:-|:-|:-|
|play|Object|播放|
|play|Object|Play|
|stop|Object|停止|
|stop|Object|Stop|
|mute|Object|静音|
|mute|Object|mute|
|pause|Object|暂停|
|pause|Object|Pause|
|resume|Object|恢复|
|resume|Object|Resume|
|requestFullScreen|Object|进入全屏|
|requestFullScreen|Object|Enter full screen|
|exitFullScreen|Object|退出全屏|
|exitFullScreen|Object|Exit Full Screen|

**requestFullScreen 的 Object 参数列表：**
**List of Object parameters of requestFullScreen:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|direction|Number|是|设置全屏时的方向，有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。|
|direction|Number|is|Set the direction of full screen, valid values are 0 (normal vertical orientation), 90 (screen 90 degrees counterclockwise), -90 (screen 90 degrees clockwise). |
|success|Function|否|接口调用成功的回调函数。|
|success|Function|No|Callback function for successful interface call. |
|fail|Function|否|接口调用失败的回调函数。|
|fail|Function|No|Callback function for interface call failure. |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|
|complete|Function|No|Callback function for the end of the interface call (it will be executed if the call succeeds or fails). |

**其他方法的 Object 参数列表：**
**List of Object parameters of other methods:**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

### uni.createLivePusherContext(livePusherId, this)
创建 live-pusher 上下文 livePusherContext 对象。
Create a live-pusher context livePusherContext object.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|见下|x|
|See below|x|

- app-nvue 平台 2.2.5+ 支持 uni.createLivePusherContext(livePusherId, this)
- app-nvue platform 2.2.5+ supports uni.createLivePusherContext(livePusherId, this)
- app-nvue 平台 2.2.5以下，需要同时设置组件属性id和ref ``<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>``，或者直接使用 ref，例如 ``this.$refs.livepusher1``
- App-nvue platform 2.2.5 or lower, you need to set the component attribute id and ref ``<live-pusher id="livepusher1" ref="livepusher1"></live-pusher>" at the same time, or use ref directly, for example ``this.$refs.livepusher1''
- app-vue 平台，需要编写条件编译代码，使用 `plus.video.LivePusher`，[业务指南](https://ask.dcloud.net.cn/article/13416)、[规范文档](http://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher)
- App-vue platform, you need to write conditional compilation code, use `plus.video.LivePusher`, [Business Guide](https://ask.dcloud.net.cn/article/13416), [Specification Document](http: //www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher)

使用nvue做直播，比使用vue的优势有：
The advantages of using nvue for live broadcast over using vue are:

1. nvue可一套代码直接编译到App和微信
1. nvue can compile a set of code directly to App and WeChat
2. nvue的cover-view比vue的cover-view更强大，在视频上绘制元素更容易。如果只考虑App端的话，不用cover-view，任意组件都可以覆盖live-pusher组件
2. The cover-view of nvue is more powerful than the cover-view of vue, and it is easier to draw elements on the video. If you only consider the App side, without cover-view, any component can cover the live-pusher component
3. 若需要视频内嵌在swiper里上下滑动（类抖音、映客首页模式），App端只有nvue才能实现
3. If you need to slide up and down the video embedded in the swiper (like Douyin, Yingke homepage mode), only nvue can do it on the App side
当然nvue相比vue的坏处是css写法受限。
Of course, the downside of nvue compared to vue is that css writing is limited.


**参数说明**
**Parameter Description**

设置live-pusher组件的推流地址，推流视频模式等。
Set the push stream address and push stream video mode of the live-pusher component.

|属性|类型 |默认值|必填|说明|
|Attribute|Type |Default Value|Required|Description|
|:--|:--|:--|:--|:--|
|url|string| |是|推流地址，支持RTMP协议。|
|url|string| |Yes|Push stream address, supports RTMP protocol.|
|mode |string| |否|推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。|
|mode |string| |No|Push streaming video mode, possible values: SD (standard definition), HD (high definition), FHD (super definition).|
|muted|Boolean|false|否|是否静音。|
|muted|Boolean|false|No|Whether to mute.|
|enable-camera|Boolean|true|否|开启摄像头。|
|enable-camera|Boolean|true|No|Enable the camera.|
|auto-focus|Boolean|true|否|自动聚集。|
|auto-focus|Boolean|true|No|Auto focus.|
|beauty|Number|0|否|美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
|beauty|Number|0|No|Beauty, the value range is 0-9 (iOS value range is 1), 0 means off.|
|whiteness|Number|0|否|美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
|whiteness|Number|0|No|Whiteness, the value range is 0-9 (iOS value range is 1), 0 means off.|


#### API
#### start(callback)
> 开始推流
> Start streaming

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|属性|类型 |说明|
|Attribute|Type|Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|

#### pause(callback)
> 暂停推流
> Pause streaming

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|

#### resume(callback)
> 恢复推流
> Resuming push

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|

#### stop(callback)
> 停止推流
> Stop streaming

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|

#### switchCamera(callback)
> 切换前后摄像头
> Switch between front and rear cameras


##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|

#### snapshot(callback)
> 快照
> Snapshot


#####  callback 返回 Object 参数说明
#####  callback returns Object parameter description
##### 成功时的回调
##### Callback on success
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type|string|"success" 表示成功, "fail" 表示失败|
|type|string|"success" means success, "fail" means failure|
|code|Number| 对应code码|
|code|Number| Corresponding code code|
|message|object|{width:"快照图片宽度",height:"快照图片高度",tempImagePath:"快照图片路径"}。|
|message|object|{width:"snapshot picture width",height:"snapshot picture height",tempImagePath:"snapshot picture path"}. |

##### 失败的回调
##### Failed callback
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type|string|"fail" 表示失败|
|type|string|"fail" means failure|
|code|Number|
|message|object|

#### startPreview(callback)
> 开启摄像头预览
> Open camera preview

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|


#### stopPreview(callback)
> 关闭摄像头预览
> Close camera preview


##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|type | String | "success" 表示成功， "fail" 表示失败|
|type | String | "success" means success, "fail" means failure|

#### 事件
#### event
#### statechange
> 状态变化事件
> State change event

#####  返回参数（detail）的详细说明
#####  Return a detailed description of the parameter (detail)
|参数|类型|说明|
|Parameter|Type|Description|
|:--|:--|:--|
|code|Number|
|message|string|


#### netstatus
> 网络状态通知事件
> Network status notification events

#####  安卓 返回参数（detail）的详细说明
#####  Android Return the detailed description of the parameter (detail)
|键名|说明|
|Key Name|Description|
|:--|:--|
|videoBitrate | 当前视频编/码器输出的比特率，单位 kbps|
|videoBitrate | The bit rate of the current video encoder/decoder output, in kbps|
|audioBitrate | 当前音频编/码器输出的比特率，单位 kbps|
|audioBitrate | The bit rate of the current audio encoder/decoder output, in kbps|
|videoFPS | 当前视频帧率|
|videoFPS | Current video frame rate|
|videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s|
|videoGOP | The current video GOP, that is, the interval duration of every two key frames (I frames), in s|
|netSpeed | 当前的发送/接收速度|
|netSpeed | Current sending/receiving speed|
|netJitter | 网络抖动情况，抖动越大，网络越不稳定|
|netJitter | Network jitter, the greater the jitter, the more unstable the network|
|videoWidth | 视频画面的宽度|
|videoWidth | The width of the video screen|
|videoHeight | 视频画面的高度|
|videoHeight | The height of the video screen|


##### iOS 返回参数（detail）的详细说明
##### iOS return parameter (detail) detailed description
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|code|Number| code码|
|code|Number| code code|
|message|string| 具体的网络状态信息|
|message|string| Specific network status information|

#### error
> 渲染错误事件
> Render error event

#####  返回参数（detail）的详细说明
##### Return a detailed description of the parameter (detail)
|参数|类型 |说明|
|Parameter|Type |Description|
|:--|:--|:--|
|errCode|Number|
|errMsg|string|
