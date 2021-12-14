#### video
视频播放组件。
Video player components.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|src|String||要播放视频的资源地址||
| src| String| | Address of resource to play video| |
|autoplay|Boolean|false|是否自动播放||
| autoplay| Boolean| false| Whether it is played automatically?| |
|loop|Boolean|false|是否循环播放||
| loop| Boolean| false| Whether to loop?| |
|muted|Boolean|false|是否静音播放||
| muted| Boolean| false| Whether it is played silently?| |
|initial-time|Number||指定视频初始播放位置，单位为秒（s）。||
| initial-time| Number| | Specify the initial video playback position, in second (s).| |
|duration|Number||指定视频时长，单位为秒（s）。||
| duration| Number| | Specify the video duration, in second (s).| |
|controls|Boolean|true|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）||
| controls| Boolean| true| Whether to display default playback controls (play/pause button, playback progress, time)| |
|danmu-list|Object Array||弹幕列表||
| danmu-list| Object Array| | Bullet screen list| |
|danmu-btn|Boolean|false|是否显示弹幕按钮，只在初始化时有效，不能动态变更||
| danmu-btn| Boolean| false| Whether to display the barrage button. Only valid during initialization, cannot be changed dynamically| |
|enable-danmu|Boolean|false|是否展示弹幕，只在初始化时有效，不能动态变更||
| enable-danmu| Boolean| false| Whether to display the barrage. Only valid during initialization, cannot be changed dynamically| |
|page-gesture|Boolean|false|在非全屏模式下，是否开启亮度与音量调节手势|H5|
| page-gesture| Boolean| false| Whether to enable brightness and volume adjustment gestures in non-full screen mode| H5|
|direction|Number||设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）|H5不支持|
| direction| Number| | Set the orientation of the video in full screen. If not specified, it will be automatically judged according to the aspect ratio. Valid values are 0 (normal vertical), 90 (when screen is 90 degrees counterclockwise), -90 (when screen is 90 degrees clockwise)| not supported by H5|
|show-progress|Boolean|true|若不设置，宽度大于240时才会显示||
| show-progress| Boolean| true| If not set, it will only be displayed when the width is greater than 240| |
|show-fullscreen-btn|Boolean|true|是否显示全屏按钮||
| show-fullscreen-btn| Boolean| true| Whether to display the full-screen button?| |
|show-play-btn|Boolean|true|是否显示视频底部控制栏的播放按钮||
| show-play-btn| Boolean| true| Whether to display the play button of control bar at the bottom of the video| |
|show-center-play-btn|Boolean|true|是否显示视频中间的播放按钮||
| show-center-play-btn| Boolean| true| Whether to display the play button in the middle of the video| |
|show-loading|Boolean|true|是否显示loading控件|仅app 2.8.12+|
| show-loading| Boolean| true| Whether to display the loading control| App 2.8.12+ only|
|enable-progress-gesture|Boolean|true|是否开启控制进度的手势||
| enable-progress-gesture| Boolean| true| Whether to enable gesture of controlling the progress| |
|object-fit|String|contain|当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖|App、H5|
| object-fit| String| contain| Representation of the video when the size of the video is inconsistent with that of video container. contain, fill, cover| App, H5|
|poster|String||视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效||
| poster| String| | The image network resource address of the video cover. If the control attribute value is false, the poster will be an invalid setting.| |
|codec|String|hardware|解码器选择，hardware：硬解码（硬解码可以增加解码算力，提高视频清晰度。少部分老旧硬件可能存在兼容性问题）；software：ffmpeg 软解码；|App-Android 3.1.0+|
| codec| String| hardware| Decoder selection, hardware: hardware decoding (hardware decoding can increase the hash rate of decoding and improve video clarity. Compatibility problems may exist in a few old hardware; Software: ffmpeg software decoding;| App-Android 3.1.0+|
|http-cache|Boolean|true|是否对 http、https 视频源开启本地缓存。缓存策略:开启了此开关的视频源，在视频播放时会在本地保存缓存文件，如果本地缓存池已超过100M，在进行缓存前会清空之前的缓存（不适用于m3u8等流媒体协议）|App-Android 3.1.0+|
| http-cache| Boolean| true| Whether to enable local cache for http and https video sources. Caching strategy: the video source with this switch turned on will save the cache file locally when the video is playing. If the local cache pool exceeds 100M, the previous cache will be cleared before caching (not applicable to streaming media protocols such as m3u8)| App-Android 3.1.0+|
|play-strategy|Number|0| 播放策略，0：普通模式，适合绝大部分视频播放场景；1：平滑播放模式（降级），增加缓冲区大小，采用open sl解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等。 适用于高码率视频的极端场景；3： M3U8优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度。 适用于M3U8在线播放的场景 |App-Android 3.1.0+|
| play-strategy| Number| 0| Playback strategy, 0: normal mode, suitable for most video playback scenes; 1: smooth playback mode (degradation), increasing the buffer size, with adoption of open sl for decoding audio to avoid the problem of audio and video derailment. It may reduce the display speed of the first screen, video frame rate and cause audio delay when opening the screen, etc. Applicable to extreme scenarios of high bit rate video; 3: M3U8 optimization mode, increasing the buffer size, improving the video loading speed and fluency, with the possibility of reducing the display speed of the first screen. Scenarios applicable to M3U8 play online| App-Android 3.1.0+|
|header|Object||HTTP 请求 Header|App 3.1.19+|
| header| Object| | HTTP request Header| App 3.1.19+|
|@play|EventHandle||当开始/继续播放时触发play事件||
| @play| EventHandle| | Trigger the play event when starts/continues playing| |
|@pause|EventHandle||当暂停播放时触发 pause 事件||
| @pause| EventHandle| | Trigger the pause event when playing is paused| |
|@ended|EventHandle||当播放到末尾时触发 ended 事件||
| @ended| EventHandle| | Trigger the ended event when playing goes to the end| |
|@timeupdate|EventHandle||播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次||
| @timeupdate| EventHandle| | Triggered at playback progress changing, event.detail = {currentTime, duration}. Trigger at a frequency of 250ms/time| |
|@fullscreenchange|EventHandle||当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal||
| @fullscreenchange| EventHandle| | Triggered at video entering and exiting full screen, event.detail = {fullScreen, direction}. The direction is of vertical or horizontal| |
|@waiting|EventHandle||视频出现缓冲时触发||
| @waiting| EventHandle| | Triggered when the video is buffered| |
|@error|EventHandle||视频播放出错时触发||
| @error| EventHandle| | Triggered when a video playback error occurs| |
|@progress|EventHandle||加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比|H5|
| @progress| EventHandle| | Triggered when the loading progress changes. Only one section of loading is supported. event.detail = {buffered}, percentage| H5|
|@loadedmetadata|EventHandle||视频元数据加载完成时触发。event.detail = {width, height, duration}|H5|
| @loadedmetadata| EventHandle| | Triggered when the video metadata is loaded. event.detail = {width, height, duration}| H5|
|@fullscreenclick|EventHandle||视频播放全屏播放时点击事件。event.detail = { screenX:"Number类型，点击点相对于屏幕左侧边缘的 X 轴坐标", screenY:"Number类型，点击点相对于屏幕顶部边缘的 Y 轴坐标", screenWidth:"Number类型，屏幕总宽度", screenHeight:"Number类型，屏幕总高度"}|App 2.6.3+|
| @fullscreenclick| EventHandle| | Click event when video is played in full screen. event.detail = {screenX: "Number type, the X coordinate of the click point relative to the left edge of the screen", screenY: "Number type, the Y coordinate of the click point relative to the top edge of the screen", screenWidth: "Number type, total width of the screen", screenHeight:"Number type, total height of the screen"}| App 2.6.3+|


`<video>` 默认宽度 300px、高度 225px，可通过 css 设置宽高。
The width of `<video>` is 300px and the height is 225px by default, which can be set via css.


##### direction 的合法值
##### Legal value of direction

|值|说明|
| Value| Instruction|
|:-|:-|
|0|正常竖向|
| 0| Normal vertical|
|90|屏幕逆时针90度|
| 90| 90° counterclockwise of the screen|
|-90|屏幕顺时针90度|
|-90| 90° clockwise of the screen|


##### object-fit 的合法值
##### Legal value of object-fit

|值|说明|
| Value| Instruction|
|:-|:-|
|contain|包含|
| contain| Include|
|fill|填充|
| fill| Fill|
|cover|覆盖|
| cover| Cover|


**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/video/video)
**Example** [View examples](https://hellouniapp.dcloud.net.cn/pages/component/video/video)
 
```html
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
            </view>
            <view class="uni-list uni-common-mt">
                <view class="uni-list-cell">
                    <view>
                        <view class="uni-label">Bullet screen content</view>
                    </view>
                    <view class="uni-list-cell-db">
                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="Enter the bullet screen content here" />
                    </view>
                </view>
            </view>
            <view class="uni-btn-v">
                <button @click="sendDanmu" class="page-body-button">Send bullet screen</button>
            </view>
        </view>
    </view>
</template>
```
 
```javascript
export default {
    data() {
        return {
            src: '',
            danmuList: [{
                    text: 'bullet screen appeared at 1st second',
                    color: '#ff0000',
                    time: 1
                },
                {
                    text: 'bullet screen appeared at 3rd second',
                    color: '#ff00ff',
                    time: 3
                }
            ],
            danmuValue: ''
        }
    },
    onReady: function(res) {
        this.videoContext = uni.createVideoContext('myVideo')
    },
    methods: {
        sendDanmu: function() {
            this.videoContext.sendDanmu({
                text: this.danmuValue,
                color: this.getRandomColor()
            });
            this.danmuValue = '';
        },
        videoErrorCallback: function(e) {
            uni.showModal({
                content: e.target.errMsg,
                showCancel: false
            })
        },
        getRandomColor: function() {
            const rgb = []
            for (let i = 0; i < 3; ++i) {
                let color = Math.floor(Math.random() * 256).toString(16)
                color = color.length == 1 ? '0' + color : color
                rgb.push(color)
            }
            return '#' + rgb.join('')
        }
    }
}
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/989ac870-4f2f-11eb-8a36-ebb87efcf8c0.png)

相关api：[uni.createVideoContext](/api/media/video-context?id=createvideocontext)
Related api: [uni.createVideoContext](/api/media/video-context?id=createvideocontext)

**注意**
**Notice**
 
- 视频播放格式说明：
- Video playback format description:
	* H5平台：支持的视频格式视浏览器而定，一般通用的都支持：mp4、webm 和 ogg。（``<video/>`` 组件编译到 H5 时会替换为标准 html 的 video 标签）。H5端也可以自行在条件编译里使用video.js等三方库，这些库可以自动判断环境兼容以决定使用标准video或flash来播放。
	* H5 platform: supported video formats depend on the browser, and generally the common ones are supported: mp4, webm and ogg. (When the component `<video/>` is compiled to H5, it will be replaced with the video tag of standard html). On the H5 side, third-party libraries such as video.js can also be used in conditional compilation. These libraries can automatically judge the environment compatibility to decide to use standard video or flash to play.
	* App平台： 支持本地视频(mp4/flv)、网络视频地址（mp4/flv/m3u8）及流媒体（rtmp/hls/rtsp）。
	* App platform: Support local video (mp4/flv), network video address (mp4/flv/m3u8) and streaming media (rtmp/hls/rtsp).

- video**全屏**后，如何自行绘制界面？比如加个标题、加个分享按钮
- How to draw the interface by myself after the video is **full screen**? For example, add a title or a share button
	* app端 2.1.5 以上nvue页面的video也可以通过cover-view来绘制界面覆盖元素
	* On the App side 2.1.5+, the video on the nvue page can also draw interface overlay elements through cover-view
	* H5端可通过通用h5做法实现
	* It can be achieved on the H5 side through common H5 practices
	* 其他端无法全屏后自行绘制内容
	* On other sides, there is no way to draw content after full screen

- 如何实现抖音、映客等全屏视频垂直滑动切换效果？
- How to realize the vertical sliding switching effect of full-screen videos such as Tik Tok and Inke?
	* app端nvue 2.1.5 以上，可通过在垂直的swiper中内嵌video来实现。原生导航栏设置为custom，视频长宽设为手机屏幕大小，通过cover-view覆盖视频内容。插件市场有相关[示例](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3)
	* On the app side nvue 2.1.5+, this effect can be achieved by embedding video in the vertical swiper. The native navigation bar is set to custom, and the video length and width are set to the size of the mobile phone screen. The video content is covered by cover-view. Related [examples](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3) are available in the plug-in market

- `<video/>` 组件在非H5端是原生组件，层级高于普通前端组件，覆盖其需要使用[cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)组件或subNVue。
- The `<video/>` component is a native component on non H5 sides, with its level is higher than that of ordinary front-end components. To cover it, you need to use the [cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view) component or subNVue.
- 除 app-nvue 2.1.5+，其他情况下非H5的video不能放入scroll-view和swiper。注意参考 [原生组件使用限制](/component/native-component)。
- Except for app-nvue 2.1.5+, videos from non-H5 sides cannot be put into scroll-view and swiper. Please refer to [Restrictions on the use of native components](/component/native-component).
- 你也可以尝试换个设计思路，如：列表中的视频组件是通过图片与icon模拟的，点击后播放全屏播放视频的方案。详情[【video组件会覆盖页面其他非原生组件的设计替代方案示例】](https://ext.dcloud.net.cn/plugin?id=3549)
- You can also try another design idea, such as the scheme that the video components in the list are simulated by pictures and icon, and the video will be played in full screen after click. For details, please refer to [\[Example of design alternatives where the video component will cover other non-native components on the page\]](https://ext.dcloud.net.cn/plugin?id=3549)

- App平台：使用 `<video/>` 组件，打包 App 时必须勾选 manifest.json->App 模块权限配置->VideoPlayer 模块。此模块体积较大，非默认内置。
- App platform: When using the `<video/>` component, you must check manifest.json->App module permission configuration->VideoPlayer module when packaging the App. This module is bulky and is not built-in by default.
- App平台：如果使用的视频路径为本地路径，需要配置资源为释放模式：在 manifest.json 文件内 app-plus 节点下新增 runmode 配置，设置值为liberate。
- App platform: if the video path used is a local path, it is necessary to configure the resources to release mode: add runmode configuration under the app-plus node in the manifest.json file, and set the value as liberate.
- App平台：如果想使用非原生的video，即原来普通的html5自带video，可使用web-view组件load html页面，在其中使用普通h5 video。
- App platform: if you want to use non-native video, i.e., the original ordinary html5 comes with video, you can use the web-view component load html page, in which you can use ordinary h5 video.
- App平台：app-vue即使选择了使用x5内核，也不会使用x5的video播放，仍然使用uni-app的App引擎自带的原生视频播放。
- App platform: even if app-vue chooses to use x5 kernel, it will not use video of x5 for playback, but still use the native video that comes with the App engine of uni-app.
- H5平台： 在部分浏览器中会强制调用原生播放器播放（如：微信内置浏览器、UC浏览器等），在 x5 内核的浏览器中支持配置[同层播放器](https://x5.tencent.com/docs/video.html)。
- H5 platform: In some browsers, native players will be forced to call to play (such as: WeChat built-in browser, UC browser, etc.), and the configuration of [Same-layer players](https://x5.tencent.com/docs/video.html) is supported in the x5 kernel browser.
- HBuilderX内置浏览器，使用video标签暂时存在问题，请先使用其他外部浏览器。
- HBuilderX has a built-in browser. There is a temporary problem with using the video tag. Please use another external browser first.
