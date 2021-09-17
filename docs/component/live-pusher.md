#### live-pusher

实时音视频录制，也称直播推流。
Real-time audio and video recording, also known as live streaming.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√(仅nvue)|x|
|√(nvue only)|x|

如app平台的vue页面需要支持直播推流，需编写条件编译代码，使用 `plus.video.LivePusher`，[业务指南](https://ask.dcloud.net.cn/article/13416)、[规范文档](http://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher)。还是推荐直接使用nvue里的`live-pusher`组件。
If the vue page of the app platform needs to support live streaming, you need to write conditional compilation code, use `plus.video.LivePusher`, [Business Guide](https://ask.dcloud.net.cn/article/13416), [ Specification document](http://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher). It is recommended to use the `live-pusher` component in nvue directly.

app开发，推荐使用nvue做直播，比使用vue的优势有：
For app development, it is recommended to use nvue for live broadcast. The advantages over using vue are:
1. nvue也可一套代码编译多端。
1. nvue can also compile a set of codes with multiple ends.
2. nvue的cover-view比vue的cover-view更强大，在视频上绘制元素更容易。如果只考虑App端的话，不用cover-view，任意组件都可以覆盖live-pusher组件，因为nvue没有层级问题。
2. The cover-view of nvue is more powerful than the cover-view of vue, and it is easier to draw elements on the video. If you only consider the App side, without cover-view, any component can cover the live-pusher component, because nvue has no hierarchical issues.
3. 若需要视频内嵌在swiper里上下滑动（类抖音、映客首页模式），App端只有nvue才能实现
3. If you need to slide up and down the video embedded in the swiper (like Douyin, Yingke homepage mode), only nvue can do it on the App side
当然nvue相比vue的坏处是css写法受限，如果只开发微信小程序，不考虑App，那么使用vue页面也是一样的。
Of course, the disadvantage of nvue compared to vue is that the css writing method is limited. If you only develop WeChat applets and do not consider App, then the use of vue pages is the same.

**参数说明**
**Parameter Description**

设置live-pusher组件的推流地址，推流视频模式等。
Set the push stream address and push stream video mode of the live-pusher component.

属性|类型 |默认值|必填|说明|平台差异说明|
Attribute|Type |Default Value|Required|Description|Description of Platform Differences|
:--|:--|:--|:--|:--|:--|
url|string| |是|推流地址，支持RTMP协议。|
url|string| |Yes|Push stream address, supports RTMP protocol. |
mode |string|SD|否|推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。|
mode |string|SD|No|Push streaming video mode, possible values: SD (standard definition), HD (high definition), FHD (super definition). |
aspect |string|3:2|否|视频宽高比例|
aspect |string|3:2|No|Video aspect ratio|
muted|Boolean|false|否|是否静音。|
muted|Boolean|false|No|Whether to mute. |
enable-camera|Boolean|true|否|开启摄像头。|
enable-camera|Boolean|true|No|Enable the camera. |
auto-focus|Boolean|true|否|自动聚集。|
auto-focus|Boolean|true|No|Auto focus. |
beauty|Number|0|否|美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
beauty|Number|0|No|Beauty, the value range is 0-9 (iOS value range is 1), 0 means off. |
whiteness|Number|0|否|美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
whiteness|Number|0|No|Whiteness, the value range is 0-9 (iOS value range is 1), 0 means off. |
orientation|String|"vertical"|否|画面方向|
orientation|String|"vertical"|No|Screen orientation|
min-bitrate|Number|200|否|最小码率。|
min-bitrate|Number|200|No|The minimum bitrate. |
max-bitrate|Number|1000|否|最大码率。|
max-bitrate|Number|1000|No|Max bitrate. |
@statechange|EventHandle|||状态变化事件，detail = {code}|
@statechange|EventHandle|||State change event, detail = {code}|
@netstatus|EventHandle|||网络状态通知，detail = {info}|
@netstatus|EventHandle|||Network status notification, detail = {info}|
@error|EventHandle|||渲染错误事件，detail = {errMsg, errCode}|
@error|EventHandle|||Rendering error event, detail = {errMsg, errCode}|


orientation 的合法值
Legal value of orientation

|值|说明|
|Value|Description|
|:-|:-|
|vertical|竖直|
|vertical|vertical|
|horizontal|水平|
|horizontal|Horizontal|


网络状态数据（info）安卓
Network status data (info) Android

键名|说明
Key name|Description
:--|:--|
videoBitrate | 当前视频编/码器输出的比特率，单位 kbps
videoBitrate | The bit rate of the current video encoder/decoder output, in kbps
audioBitrate | 当前音频编/码器输出的比特率，单位 kbps
audioBitrate | The bit rate of the current audio encoder/decoder output, in kbps
videoFPS | 当前视频帧率
videoFPS | Current video frame rate
videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
videoGOP | The current video GOP, that is, the interval duration of every two key frames (I frames), in s
netSpeed | 当前的发送/接收速度
netSpeed | Current sending/receiving speed
netJitter | 网络抖动情况，抖动越大，网络越不稳定
netJitter | Network jitter, the greater the jitter, the more unstable the network
videoWidth | 视频画面的宽度
videoWidth | The width of the video screen
videoHeight | 视频画面的高度
videoHeight | The height of the video screen

网络状态数据（info）iOS
Network status data (info) iOS

参数|类型 |说明
Parameter|type|description
:--|:--|:--|
code|Number|  code码
code|Number| code code
message|string| 具体的网络状态信息
message|string| Specific network status information
```html
<template>
    <view>
        <live-pusher id='livePusher' ref="livePusher" class="livePusher" url=""
        mode="SD" :muted="true" :enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2"
        aspect="9:16" @statechange="statechange" @netstatus="netstatus" @error = "error"
        ></live-pusher>
        <button class="btn" @click="start">开始推流</button>
        <button class="btn" @click="start">Start streaming</button>
		<button class="btn" @click="pause">暂停推流</button>
        <button class="btn" @click="pause">Pause streaming</button>
		<button class="btn" @click="resume">resume</button>
		<button class="btn" @click="stop">停止推流</button>
        <button class="btn" @click="stop">Stop streaming</button>
		<button class="btn" @click="snapshot">快照</button>
        <button class="btn" @click="snapshot">Snapshot</button>
		<button class="btn" @click="startPreview">开启摄像头预览</button>
        <button class="btn" @click="startPreview">Open camera preview</button>
		<button class="btn" @click="stopPreview">关闭摄像头预览</button>
        <button class="btn" @click="stopPreview">Close camera preview</button>
		<button class="btn" @click="switchCamera">切换摄像头</button>
		<button class="btn" @click="switchCamera">Switch camera</button>
    </view>
</template>
```

```javascript
<script>
    export default {
        data() {
			return {}
        },
        onReady() {
            // 注意：需要在onReady中 或 onLoad 延时
			// Note: need to delay in onReady or onLoad
            this.context = uni.createLivePusherContext("livePusher", this);
        },
        methods: {
            statechange(e) {
                console.log("statechange:" + JSON.stringify(e));
            },
            netstatus(e) {
                console.log("netstatus:" + JSON.stringify(e));
            },
            error(e) {
                console.log("error:" + JSON.stringify(e));
            },
            start: function() {
                this.context.start({
                    success: (a) => {
                        console.log("livePusher.start:" + JSON.stringify(a));
                    }
                });
            },
            close: function() {
                this.context.close({
                    success: (a) => {
                        console.log("livePusher.close:" + JSON.stringify(a));
                    }
                });
            },
            snapshot: function() {
                this.context.snapshot({
                    success: (e) => {
                        console.log(JSON.stringify(e));
                    }
                });
            },
            resume: function() {
                this.context.resume({
                    success: (a) => {
                        console.log("livePusher.resume:" + JSON.stringify(a));
                    }
                });
            },
            pause: function() {
                this.context.pause({
                    success: (a) => {
                        console.log("livePusher.pause:" + JSON.stringify(a));
                    }
                });
            },
            stop: function() {
                this.context.stop({
                    success: (a) => {
                        console.log(JSON.stringify(a));
                    }
                });
            },
            switchCamera: function() {
                this.context.switchCamera({
                    success: (a) => {
                        console.log("livePusher.switchCamera:" + JSON.stringify(a));
                    }
                });
            },
            startPreview: function() {
                this.context.startPreview({
                    success: (a) => {
                        console.log("livePusher.startPreview:" + JSON.stringify(a));
                    }
                });
            },
            stopPreview: function() {
                this.context.stopPreview({
                    success: (a) => {
                        console.log("livePusher.stopPreview:" + JSON.stringify(a));
                    }
                });
            }
        }
    }
</script>
```

相关api：[uni.createLivePusherContext](/api/media/live-pusher-context?id=createLivePusherContext)
Related api: [uni.createLivePusherContext](/api/media/live-pusher-context?id=createLivePusherContext)



**注意**
**Notice**
* App平台：使用 `<live-pusher/>` 组件，打包 App 时必须勾选 manifest.json->App 模块权限配置->LivePusher(直播推流) 模块。
* App platform: Use the `<live-pusher/>` component, you must check manifest.json->App module permission configuration->LivePusher module when packaging App.