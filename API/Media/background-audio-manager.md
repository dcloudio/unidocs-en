### uni.getBackgroundAudioManager()
Get the **globally unique** background audio manager `backgroundAudioManager`.

The background audio is not the background music of the game, but similar to QQ Music. When the App is in the background, it is still playing music. If you do not need to continue playing when the App is switched to the background, then you should not use this API, but use the normal audio API uni.createInnerAudioContext instead.

 **Property list of backgroundAudioManager object** 

|**Attributes**|**Types of**|**Description**|**Read only**|
|:-|:-|:-|:-|
|duration|Number|The length of the current audio (unit: s), only returned when there is a valid src|Yes|
|currentTime|Number|The current audio playback position (unit: s), only returned when there is a valid src|Yes|
|paused|Boolean|Whether the current state is paused or stopped, true means pause or stop, false means playing|Yes|
|src|String|The audio data source, the default is an empty string, **when a new src is set, it will automatically start to play,** currently supported formats are m4a, aac, mp3, wav|no|
|startTime|Number|The position where the audio starts to play (unit: s)|no|
|buffered|Number|The time of audio buffering, only to ensure that the content has been buffered from the current playback time to this time.|Yes|
|title|String|Audio title, used as audio title for native audio player. The share function in the native audio player, and the shared card title will also use this value.|no|
|epname|String|The album name, the sharing function in the native audio player, and the shared card profile will also use this value.|no|
|singer|String|The name of the singer, the sharing function in the native audio player, and the card profile shared will also use this value.|no|
|coverImgUrl|String|Cover image url, used as background image of native audio player. The sharing function in the native audio player, the card layout and background that are shared will also use this image.|no|
|webUrl|String|The page link, the sharing function in the native audio player, and the shared card profile will also use this value.|no|
|protocol|String|Audio protocol. The default value is'http', setting'hls' can support playing HLS protocol live audio, App platform does not currently support|no|

 **List of methods of the backgroundAudioManager object** 

|**method**|**parameter**|**Description**|
|:-|:-|:-|
|play||Play|
|pause||time out|
|stop||stop|
|seek|position|Jump to the specified position, unit s|
|onCanplay|callback|The background audio can be played, but there is no guarantee that it can be played smoothly.|
|onPlay|callback|Background audio playback event|
|onPause|callback|Background audio pause event|
|onStop|callback|Background audio stop event|
|onEnded|callback|Background audio natural playback end event|
|onTimeUpdate|callback|Background audio playback progress update event|
|onPrev|callback|The user clicks the last song event in the system music playback panel (iOS only)|
|onNext|callback|The user clicks the next song event in the system music playback panel (iOS only)|
|onError|callback|Background audio playback error event|
|onWaiting|callback|Audio loading event, when the audio needs to stop and load due to insufficient data, it will be triggered|

 errCode description 

|errCode|**Description**|
|:-|:-|
|10001|system error|
|10002|Network Error|
|10003|File error|
|10004|wrong format|
|-1|unknown mistake|

 **Example** 

```javascript
const bgAudioMannager = uni.getBackgroundAudioManager();
bgAudioMannager.title = 'To Alice';
bgAudioMannager.singer = 'no';
bgAudioMannager.coverImgUrl = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png';
bgAudioMannager.src = '1. https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
```

**Note** Because the background audio playback consumes mobile phone power, the platform is all controlled and needs to be filled out in the manifest.

- ios App platform, to be played in the background manifest.json -> app-plus -> distribute -> ios node is added `"UIBackgroundModes":["audio"]`to ensure that the background music can play (ipa packaged into force)
- For applet platform, you need to fill in "requiredBackgroundModes": ["audio"] under the applet node corresponding to manifest.json. The platform will review when the Mini Program is released
- By default, the Android App will not display the volume control in the notification bar. If you need this function, you need to download the native plug-in separately from the plug-in market
