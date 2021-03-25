### uni.createInnerAudioContext()
Creates and returns an internal audio context `innerAudioContext`object.

 **List of properties of innerAudioContext object** 

| Attributes     | Types of | Description                                                  | Read only | Platform difference description                              |
|:-|:-|:-|:-|:-|
|src|String| Audio data link for direct playback.                         | no        |              |
|startTime|Number| Start playing position (unit: s), default 0                  | no        ||
|autoplay|Boolean| Whether to start playing automatically, the default is false | no        | Some browsers on H5 do not support                           |
|loop|Boolean| Whether to play in a loop, the default is false              | no        ||
|obeyMuteSwitch|Boolean| Whether to follow the system mute switch, when this parameter is false, even if the user turns on the mute switch, the sound can continue to be emitted, the default value is true | no        |  |
|duration|Number| The length of the current audio (unit: s), only returned when there is currently a valid src, it needs to be obtained in onCanplay | Yes       ||
|currentTime|Number| The current audio playback position (unit: s), only returned when there is currently a legal src, the time is not rounded up, and 6 digits after the decimal point are kept | Yes       ||
|paused|Boolean| Whether the current state is paused or stopped, true means pause or stop, false means playing | Yes       ||
|buffered|Number| The time of audio buffering, only to ensure that the content has been buffered from the current playback time to this time. | Yes       ||
|volume|Number| volume. The range is 0~1.                                    | no        |&nbsp;|


** **List of methods of innerAudioContext object** **

| method        | parameter | Description                                                  |
|:-|:-|:-|
|play||Play (some browsers on the H5 side need to be performed during user interaction)|
|pause||time out|
|stop||stop|
|seek|position|Jump to the specified position, unit s|
|destroy||Destroy the current instance|
|onCanplay|callback|The audio can be played, but there is no guarantee that it can be played smoothly later|
|onPlay|callback|Audio playback event|
|onPause|callback|Audio pause event|
|onStop|callback|Audio stop event|
|onEnded|callback|Audio natural playback end event|
|onTimeUpdate|callback|Audio playback progress update event|
|onError|callback|Audio playback error event|
|onWaiting|callback|Audio loading event, triggered when the audio needs to stop and load due to insufficient data|
|onSeeking|callback|Audio seek operation event|
|onSeeked|callback|Audio complete seek operation event|
|offCanplay|callback|Cancel listening onCanplay event|
|offPlay|callback|Cancel listening onPlay event|
|offPause|callback|Cancel listening onPause event|
|offStop|callback|Cancel listening onStop event|
|offEnded|callback|Cancel listening onEnded event|
|offTimeUpdate|callback|Cancel listening onTimeUpdate event|
|offError|callback|Cancel listening onError event|
|offWaiting|callback|Cancel listening onWaiting event|
|offSeeking|callback|Cancel listening onSeeking event|
|offSeeked|callback|Cancel listening onSeeked event|

 errCode description 

|errCode|**Description**|
|:-|:-|
|10001|system error|
|10002|Network Error|
|10003|File error|
|10004|wrong format|
|-1|unknown mistake|


** **Support format** **

|**format**|iOS|Android|
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

** **Example** **

```javascript
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
innerAudioContext.onPlay(() => {
  console.log('Start playing ');
});
innerAudioContext.onError((res) => {
  console.log(res.errMsg);
  console.log(res.errCode);
});
```

**tips**

- If you need double-speed audio playback, you can replace it with video double-speed playback. The plug-in market has packaged plug-in [audio double-speed playback](https://ext.dcloud.net.cn/search?q=音频倍速播放)
- If you need an audio player style with ui, you can search for related plug-ins in the plug-in market.
