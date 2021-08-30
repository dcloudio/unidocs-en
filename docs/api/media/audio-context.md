### uni.createInnerAudioContext()
创建并返回内部 audio 上下文 `innerAudioContext` 对象。
Creates and returns an internal audio context `innerAudioContext`object.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**innerAudioContext 对象的属性列表**
**List of properties of innerAudioContext object**

|属性|类型|说明|只读|平台差异说明|
| Attributes     | Types of | Description    | Read only | Platform difference description  |
|:-|:-|:-|:-|:-|
|src|String|音频的数据链接，用于直接播放。|否||
|src|String| Audio data link for direct playback.                         | no        |              |
|startTime|Number|开始播放的位置（单位：s），默认 0|否||
|startTime|Number| Start playing position (unit: s), default 0                  | no        ||
|autoplay|Boolean|是否自动开始播放，默认 false|否|H5端部分浏览器不支持|
|autoplay|Boolean| Whether to start playing automatically, the default is false | no        | Some browsers on H5 do not support                           |
|loop|Boolean|是否循环播放，默认 false|否||
|loop|Boolean| Whether to play in a loop, the default is false              | no        ||
|duration|Number|当前音频的长度（单位：s），只有在当前有合法的 src 时返回，需要在onCanplay中获取|是||
|duration|Number| The length of the current audio (unit: s), only returned when there is currently a valid src, it needs to be obtained in onCanplay | Yes       ||
|currentTime|Number|当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位|是||
|currentTime|Number| The current audio playback position (unit: s), only returned when there is currently a legal src, the time is not rounded up, and 6 digits after the decimal point are kept | Yes       ||
|paused|Boolean|当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放|是||
|paused|Boolean| Whether the current state is paused or stopped, true means pause or stop, false means playing | Yes       ||
|buffered|Number|音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。|是||
|buffered|Number| The time of audio buffering, only to ensure that the content has been buffered from the current playback time to this time. | Yes       ||
|volume|Number|音量。范围 0~1。|否|&nbsp;|
|volume|Number| volume. The range is 0~1.                                    | no        |&nbsp;|


**innerAudioContext 对象的方法列表**
**List of methods of innerAudioContext object**

|方法|参数|说明|
| method        | parameter | Description                                                  |
|:-|:-|:-|
|play||播放（H5端部分浏览器需在用户交互时进行）|
|play||Play (some browsers on the H5 side need to be performed during user interaction)|
|pause||暂停|
|pause||time out|
|stop||停止|
|stop||stop|
|seek|position|跳转到指定位置，单位 s|
|seek|position|Jump to the specified position, unit s|
|destroy||销毁当前实例|
|destroy||Destroy the current instance|
|onCanplay|callback|音频进入可以播放状态，但不保证后面可以流畅播放|
|onCanplay|callback|The audio can be played, but there is no guarantee that it can be played smoothly later|
|onPlay|callback|音频播放事件|
|onPlay|callback|Audio playback event|
|onPause|callback|音频暂停事件|
|onPause|callback|Audio pause event|
|onStop|callback|音频停止事件|
|onStop|callback|Audio stop event|
|onEnded|callback|音频自然播放结束事件|
|onEnded|callback|Audio natural playback end event|
|onTimeUpdate|callback|音频播放进度更新事件|
|onTimeUpdate|callback|Audio playback progress update event|
|onError|callback|音频播放错误事件|
|onError|callback|Audio playback error event|
|onWaiting|callback|音频加载中事件，当音频因为数据不足，需要停下来加载时会触发|
|onWaiting|callback|Audio loading event, triggered when the audio needs to stop and load due to insufficient data|
|onSeeking|callback|音频进行 seek 操作事件|
|onSeeking|callback|Audio seek operation event|
|onSeeked|callback|音频完成 seek 操作事件|
|onSeeked|callback|Audio complete seek operation event|
|offCanplay|callback|取消监听 onCanplay 事件|
|offCanplay|callback|Cancel listening onCanplay event|
|offPlay|callback|取消监听 onPlay 事件|
|offPlay|callback|Cancel listening onPlay event|
|offPause|callback|取消监听 onPause 事件|
|offPause|callback|Cancel listening onPause event|
|offStop|callback|取消监听 onStop 事件|
|offStop|callback|Cancel listening onStop event|
|offEnded|callback|取消监听 onEnded 事件|
|offEnded|callback|Cancel listening onEnded event|
|offTimeUpdate|callback|取消监听 onTimeUpdate 事件|
|offTimeUpdate|callback|Cancel listening onTimeUpdate event|
|offError|callback|取消监听 onError 事件|
|offError|callback|Cancel listening onError event|
|offWaiting|callback|取消监听 onWaiting 事件|
|offWaiting|callback|Cancel listening onWaiting event|
|offSeeking|callback|取消监听 onSeeking 事件|
|offSeeking|callback|Cancel listening onSeeking event|
|offSeeked|callback|取消监听 onSeeked 事件|
|offSeeked|callback|Cancel listening onSeeked event|

errCode 说明
errCode description 

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


**支持格式**
**Support format**

|格式|iOS|Android|
|format|iOS|Android|
|:-|:-|:-|
|flac	|x|√|
|m4a	|√|√|
|ogg	|x|√|
|ape	|x|√|
|amr	|x|√|
|wma	|x|√|
|wav	|√|√|
|mp3	|√|√|
|mp4	|x|√|
|aac	|√|√|
|aiff	|√|x|
|caf	|√|x|

**示例**
**Example**

```javascript
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
innerAudioContext.onPlay(() => {
  console.log('开始播放');
});
innerAudioContext.onError((res) => {
  console.log(res.errMsg);
  console.log(res.errCode);
});
```

**tips**

- 如需音频的倍速播放，可通过video的倍速播放替代实现。插件市场有封装好的插件[音频倍速播放](https://ext.dcloud.net.cn/search?q=%E9%9F%B3%E9%A2%91%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE)
- If you need double-speed audio playback, you can replace it with video double-speed playback. The plug-in market has packaged plug-in [audio double-speed playback](https://ext.dcloud.net.cn/search?q=%E9%9F%B3%E9%A2%91%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE)
- 如果需要带ui的音频播放器样式，可以在插件市场搜索相关[插件](https://ext.dcloud.net.cn/search?q=audio)
- If you need an audio player style with ui, you can search for related plug-ins in the plug-in market. [plugin](https://ext.dcloud.net.cn/search?q=audio)
- `Android 4.1` 及更高版本对 `PCM/WAVE` 支持范围是 `8` 位和 `16` 位线性 PCM（比特率最高可达到硬件上限）。以 8000、16000 和 44100 Hz 录制原始 PCM 所需的采样率。
- `Android 4.1` and higher versions support `PCM/WAVE` in the range of `8` bit and `16` bit linear PCM (bit rate can reach the hardware limit). The sampling rate required to record raw PCM at 8000, 16000, and 44100 Hz.
