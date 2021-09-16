### uni.getBackgroundAudioManager()
获取**全局唯一**的背景音频管理器 ``backgroundAudioManager``。
Get the **globally unique** background audio manager `backgroundAudioManager`.

背景音频，不是游戏的背景音乐，而是类似QQ音乐那样，App在后台时，仍然在播放音乐。如果你不需要在App切后台时继续播放，那么不应该使用本API，而应该使用普通音频API[uni.createInnerAudioContext](https://uniapp.dcloud.io/api/media/audio-context)。
The background audio is not the background music of the game, but similar to QQ Music. When the App is in the background, it is still playing music. If you do not need to continue playing when the App is switched to the background, then you should not use this API, but use the normal audio API [uni.createInnerAudioContext](https://uniapp.dcloud.io/api/media/audio-context)。

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**backgroundAudioManager 对象的属性列表**
**Property list of backgroundAudioManager object**

|属性|类型|说明|只读|
|**Attributes**|**Types of**|**Description**|**Read only**|
|:-|:-|:-|:-|
|duration|Number|当前音频的长度（单位：s），只有在当前有合法的 src 时返回|是|
|duration|Number|The length of the current audio (unit: s), only returned when there is a valid src|Yes|
|currentTime|Number|当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回|是|
|currentTime|Number|The current audio playback position (unit: s), only returned when there is a valid src|Yes|
|paused|Boolean|当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放|是|
|paused|Boolean|Whether the current state is paused or stopped, true means pause or stop, false means playing|Yes|
|src|String|音频的数据源，默认为空字符串，**当设置了新的 src 时，会自动开始播放，**目前支持的格式有 m4a, aac, mp3, wav|否|
|src|String|The audio data source, the default is an empty string, **when a new src is set, it will automatically start to play,** currently supported formats are m4a, aac, mp3, wav|no|
|startTime|Number|音频开始播放的位置（单位：s）|否|
|startTime|Number|The position where the audio starts to play (unit: s)|no|
|buffered|Number|音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。|是|
|buffered|Number|The time of audio buffering, only to ensure that the content has been buffered from the current playback time to this time.|Yes|
|title|String|音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。|否|
|title|String|Audio title, used as audio title for native audio player. The share function in the native audio player, and the shared card title will also use this value.|no|
|epname|String|专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|否|
|epname|String|The album name, the sharing function in the native audio player, and the shared card profile will also use this value.|no|
|singer|String|歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|否|
|singer|String|The name of the singer, the sharing function in the native audio player, and the card profile shared will also use this value.|no|
|coverImgUrl|String|封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。|否|
|coverImgUrl|String|Cover image url, used as background image of native audio player. The sharing function in the native audio player, the card layout and background that are shared will also use this image.|no|
|webUrl|String|页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|否|
|webUrl|String|The page link, the sharing function in the native audio player, and the shared card profile will also use this value.|no|
|protocol|String|音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频，App平台暂不支持|否|
|protocol|String|Audio protocol. The default value is'http', setting'hls' can support playing live audio of HLS protocol, App platform does not support temporarily|No|

**backgroundAudioManager 对象的方法列表**
**List of methods of the backgroundAudioManager object**

|方法|参数|说明|
|method|parameter|Description|
|:-|:-|:-|
|play||播放|
|play||Play|
|pause||暂停|
|pause||time out|
|stop||停止|
|stop||stop|
|seek|position|跳转到指定位置，单位 s|
|seek|position|Jump to the specified position, unit s|
|onCanplay|callback|背景音频进入可以播放状态，但不保证后面可以流畅播放|
|onCanplay|callback|The background audio can be played, but there is no guarantee that it can be played smoothly.|
|onPlay|callback|背景音频播放事件|
|onPlay|callback|Background audio playback event|
|onPause|callback|背景音频暂停事件|
|onPause|callback|Background audio pause event|
|onStop|callback|背景音频停止事件|
|onStop|callback|Background audio stop event|
|onEnded|callback|背景音频自然播放结束事件|
|onEnded|callback|Background audio natural playback end event|
|onTimeUpdate|callback|背景音频播放进度更新事件|
|onTimeUpdate|callback|Background audio playback progress update event|
|onPrev|callback|用户在系统音乐播放面板点击上一曲事件（iOS only）|
|onPrev|callback|The user clicks the last song event in the system music playback panel (iOS only)|
|onNext|callback|用户在系统音乐播放面板点击下一曲事件（iOS only）|
|onNext|callback|The user clicks the next song event in the system music playback panel (iOS only)|
|onError|callback|背景音频播放错误事件|
|onError|callback|Background audio playback error event|
|onWaiting|callback|音频加载中事件，当音频因为数据不足，需要停下来加载时会触发|
|onWaiting|callback|Audio loading event, when the audio needs to stop and load due to insufficient data, it will be triggered|

errCode 说明
errCode Description

|errCode|说明|
|errCode|Description|
|:-|:-|
|10001|系统错误|
|10001|system error|
|10002|网络错误|
|10002|Network Error|
|10003|文件错误|
|10003|File error|
|10004|格式错误|
|10004|wrong format|
|-1|未知错误|
|-1|unknown mistake|

**示例**
**Example**

```javascript
const bgAudioManager = uni.getBackgroundAudioManager();
bgAudioManager.title = '致爱丽丝';
bgAudioManager.singer = '暂无';
bgAudioManager.coverImgUrl = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png';
bgAudioManager.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
```


**注意**
**Note**
因为背景音频播放耗费手机电量，所以平台都有管控，需在manifest中填写申请。
Because the background audio playback consumes mobile phone power, the platform is all controlled and needs to be filled out in the manifest.
- ios App平台，背景播放需在manifest.json -> app-plus -> distribute -> ios 节点添加 ``"UIBackgroundModes":["audio"]`` 才能保证音乐可以后台播放（打包成ipa生效）
- ios App platform, to be played in the background manifest.json -> app-plus -> distribute -> ios node is added `"UIBackgroundModes":["audio"]`to ensure that the background music can play (ipa packaged into force)
- Android App端默认不会在通知栏出现音量控制，如需此功能，需要在插件市场单独下载原生插件，[详见](https://ext.dcloud.net.cn/search?q=%E9%80%9A%E7%9F%A5%E6%A0%8F+%E9%9F%B3%E4%B9%90%E6%8E%A7%E5%88%B6)
- By default, the Android App will not display the volume control in the notification bar. If you need this function, you need to download the native plug-in separately from the plug-in market. [Details](https://ext.dcloud.net.cn/search?q=%E9%80%9A%E7%9F%A5%E6%A0%8F+%E9%9F%B3%E4%B9%90%E6%8E%A7%E5%88%B6)
