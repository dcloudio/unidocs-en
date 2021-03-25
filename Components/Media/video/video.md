#### video
Video playback component.

**Property description**

| Attribute name          | Types of     | Defaults | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|
|src|String||The resource address of the video to be played||
|autoplay|Boolean|false|Whether to play automatically||
|loop|Boolean|false|Whether to loop||
|muted|Boolean|false|Whether to play silently||
|initial-time|Number||Specify the initial playback position of the video, in seconds (s).||
|duration|Number||Specify the video duration in seconds (s).||
|controls|Boolean|true|Whether to display the default playback controls (play/pause button, playback progress, time)||
|danmu-list|Object Array||Barrage list||
|danmu-btn|Boolean|false|Whether to display the barrage button, it is only valid during initialization and cannot be changed dynamically||
|enable-danmu|Boolean|false|Whether to display the barrage, it is only valid during initialization and cannot be changed dynamically||
|direction|Number||Set the direction of the video in full screen. If it is not specified, it will be automatically judged according to the aspect ratio. Valid values are 0 (normal vertical orientation), 90 (screen 90 degrees counterclockwise), -90 (screen 90 degrees clockwise)
|show-progress|Boolean|true|If not set, it will only be displayed when the width is greater than 240||
|show-fullscreen-btn|Boolean|true|Whether to show the full screen button||
|show-play-btn|Boolean|true|Whether to display the play button in the control bar at the bottom of the video||
|show-center-play-btn|Boolean|true|Whether to show the play button in the middle of the video||
|show-loading|Boolean|true|Whether to display the loading control|app 2.8.12+|
|enable-progress-gesture|Boolean|true|Whether to enable gestures for controlling progress||
|object-fit|String|contain|When the video size is inconsistent with the video container size, the form of the video. contain: contain, fill: fill, cover: cover|
|poster|String||The image network resource address of the video cover, if the value of the controls attribute is false, setting the poster is invalid||
|show-mute-btn|Boolean|false|Whether to show the mute button||
|title|String||Title of the video, shown at the top when full screen||
|codec|String|hardware|Decoder selection, hardware: hard decoding (hard decoding can increase decoding power and improve video clarity. Some hardware may have compatibility issues); software: ffmpeg soft decoding;|App 3.1.0+|
|http-cache|Boolean|true|Whether to enable local caching for http and https video sources. Cache strategy: The video source with this switch turned on will save the cache file locally during video playback. If the local cache pool exceeds 100M, the previous cache will be cleared before caching|App 3.1.0+|
|play-strategy|Number|0| Play strategy, 0: default strategy; 1: smooth playback mode (video sources with this mode enabled will increase buffering, and use open sl to decode audio to avoid the problem of audio and video derailment, which may reduce the first screen display speed. Applicable The scene of playing high-definition video online.); |App 3.1.0+|
|@play|EventHandle||Trigger play event when start/continue playing||
|@pause|EventHandle||The pause event is triggered when the playback is paused||
|@ended|EventHandle||Triggers the end event when playing to the end||
|@timeupdate|EventHandle||Triggered when the playback progress changes, event.detail = {currentTime, duration}. Trigger frequency 250ms once||
|@fullscreenchange|EventHandle||Triggered when the video enters and exits the full screen, event.detail = {fullScreen, direction}, direction is taken as vertical or horizontal||
|@waiting|EventHandle||Triggered when the video has buffer||
|@error|EventHandle||Triggered when the video playback error||
|@progress|EventHandle||Triggered when the loading progress changes, only one segment of loading is supported. event.detail = {buffered}, percentage|
|@loadedmetadata|EventHandle||Fires when the video metadata is loaded. event.detail = {width, height, duration}|
|@fullscreenclick|EventHandle||Click event when the video is playing in full screen. event.detail = {screenX: "Number type, the X coordinate of the click point relative to the left edge of the screen", screenY: "Number type, the Y coordinate of the click point relative to the top edge of the screen", screenWidth: "Number type, Total screen width", screenHeight:"Number type, total screen height"}|App 2.6.3+|

`<video>` The default width is 300px, height is 225px, and the width and height can be set through css.


##### legal value of direction

| value | Description                        |
|:-|:-|
|0|Normal vertical|
|90|Screen 90 degrees counterclockwise|
|-90|Screen 90 degrees clockwise|


##### Legal value of object-fit

| value | Description |
|:-|:-|
|       |contain|
|fill|filling|
|cover|cover|


##### Legal value of play-btn-position

| value  | Description         |
|:-|:-|
|bottom|on the controls bar|
|center|Video middle|

**Example** 

```html
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
            </view>
            <!-- #ifndef MP-ALIPAY -->
            <view class="uni-list uni-common-mt">
                <view class="uni-list-cell">
                    <view>
                        <view class="uni-label">Barrage content</view>
                    </view>
                    <view class="uni-list-cell-db">
                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
                    </view>
                </view>
            </view>
            <view class="uni-btn-v">
                <button @click="sendDanmu" class="page-body-button">Send barrage</button>
            </view>
            <!-- #endif -->
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
                    text: 'Barrage appeared in 1s',
                    color: '#ff0000',
                    time: 1
                },
                {
                    text: 'Barrage appearing in 3s',
                    color: '#ff00ff',
                    time: 3
                }
            ],
            danmuValue: ''
        }
    },
    onReady: function(res) {
        // #ifndef MP-ALIPAY
        this.videoContext = uni.createVideoContext('myVideo')
        // #endif
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
