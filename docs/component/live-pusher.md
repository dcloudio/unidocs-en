#### live-pusher

实时音视频录制，也称直播推流。
Live audio and video recording, also known as live-pusher.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√(仅nvue)|x|
| √(nvue only)| x|

app开发，推荐使用nvue做直播，比使用vue的优势有：
For app development, it is recommended to use nvue for live streaming. Compared with vue, it has the following advantages:
1. nvue也可一套代码编译多端。
1. nvue can also compile multiple sides with a set of codes.
2. nvue的cover-view比vue的cover-view更强大，在视频上绘制元素更容易。如果只考虑App端的话，不用cover-view，任意组件都可以覆盖live-pusher组件，因为nvue没有层级问题。
2. cover-view of nvue is more powerful than that of vue, making it easier to draw elements on video. If only the App side is considered, any component can override the live-pusher component without using cover-view, for there is no hierarchy problem.
3. 若需要视频内嵌在swiper里上下滑动（类抖音、映客首页模式），App端只有nvue才能实现
3. If you need the video embedded in the swiper to slide up and down (such as the home page modes like Tik Tok and Inke), only nvue can achieve on the app side


**参数说明**
**Parameter Description**

设置live-pusher组件的推流地址，推流视频模式等。
Set the live-pusher address and live-pusher video mode of the live-pusher component.

|属性|类型 |默认值|必填|说明|平台差异说明|
| Attribute| Type| Defaults| Required| Instruction| Platform difference description
|:--|:--|:--|:--|:--|:--|
|url|string| |是|推流地址，支持RTMP协议。|
| url| string| | Yes| live-pusher address, supporting RTMP protocol.
|mode |string|SD|否|推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。|
| mode| string| SD| No| live-pusher video mode. Options include: SD (standard definition), HD (high definition) and FHD (Full high definition).
|aspect |string|3:2|否|视频宽高比例|
| aspect| string| 3:2| No| Video aspect ratio
|muted|Boolean|false|否|是否静音。|
| muted| Boolean| false| No| Mute or not.
|enable-camera|Boolean|true|否|开启摄像头。|
| enable-camera| Boolean| true| No| Enable the camera.
|auto-focus|Boolean|true|否|自动聚集。|
| auto-focus| Boolean| true| No| Automatic clustering.
|beauty|Number|0|否|美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
| beauty| Number| 0| No| Make-up mode, with the value range of 0-9 (iOS value range of 1), 0 indicates off.
|whiteness|Number|0|否|美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
| whiteness| Number| 0| No| Skin whitening, with the value range of 0-9 (iOS value range of 1), 0 indicates off.
|orientation|String|"vertical"|否|画面方向|
| orientation| String| "vertical"| No| Screen orientation
|min-bitrate|Number|200|否|最小码率。|
| min-bitrate| Number| 200| No| Minimum bit rate.
|max-bitrate|Number|1000|否|最大码率。|
| max-bitrate| Number| 1000| No| Maximum bit rate.
|@statechange|EventHandle|||状态变化事件，detail = {code}|
| @statechange|EventHandle|||state change event，detail = {code}
|@netstatus|EventHandle|||网络状态通知，detail = {info}|
| @netstatus|EventHandle|||status notice，detail = {info}
|@error|EventHandle|||渲染错误事件，detail = {errMsg, errCode}|
| @error|EventHandle|||error event，detail = {errMsg, errCode}



#### orientation 的合法值
#### Legal value of orientation

|值|说明|
| Value| Instruction|
|:-|:-|
|vertical|竖直|
| vertical| Vertical|
|horizontal|水平|
| horizontal| Horizontal|


#### 网络状态数据（info）安卓
#### Network status data (info) Android

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

#### 网络状态数据（info）iOS
#### Network status data (info) iOS

|参数|类型 |说明
| Parameter| Type| Instruction
|:--|:--|:--|
|code|Number|  code码
| code| Number| code
|message|string| 具体的网络状态信息
| message| string| Specific network status information

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



```html
<template>
    <view>
        <live-pusher id='livePusher' ref="livePusher" class="livePusher" url=""
        mode="SD" :muted="true" :enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2"
        aspect="9:16" @statechange="statechange" @netstatus="netstatus" @error = "error"
        ></live-pusher>
        <button class="btn" @click="start">Start live-pusher</button>
        <button class="btn" @click="pause">Pause live-pusher</button>
        <button class="btn" @click="resume">resume</button>
        <button class="btn" @click="stop">Stop live-pusher</button>
        <button class="btn" @click="snapshot">Snapshot</button>
        <button class="btn" @click="startPreview">Start camera preview</button>
        <button class="btn" @click="stopPreview">Stop camera preview</button>
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
            // Note: Need to delay in onReady or onLoad
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
* App platform: When using the `<live-pusher/>` component, you must check manifest.json->App module permission configuration->LivePusher module when packaging the App.
