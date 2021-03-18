### uni.getRecorderManager()
Get the **globally unique** recording manager `recorderManager`.

 **List of methods of recorderManager object** 

| method          | parameter | Description                                                  | Platform difference description |
|:-|:-|:-|:-|
|start|options|start recording||
|pause|| Pause recording                                              | App not currently supported     |
|resume|| Continue recording                                           | App not currently supported     |
|stop||Stop recording||
|onStart|callback|Recording start event||
|onPause|callback|Recording pause event||
|onStop|callback|Recording stop event, will call back the file address||
|onFrameRecorded|callback|After the file with the specified frame size has been recorded, the recording fragment result data will be called back. If frameSize is set, this event will be called back|App not currently supported|
|onError|callback|Recording error event, will call back error message|&nbsp;|

 **start(options) description** 

|**Attributes**|**Types of**| Required | Description                                                  |
|:-|:-|:-|:-|
|duration|Number| no       | Specify the duration of the recording in ms. If a legal duration is passed in, the recording will automatically stop after the specified duration is reached. The maximum value is 600000 (10 minutes), and the default value is 60000 (1 minute). |
|sampleRate|Number| no       | Sampling rate, effective value 8000/16000/44100              |
|numberOfChannels|Number| no       | Number of recording channels, effective value 1/2            |
|encodeBitRate|Number| no       | Encoding rate, see the table below for effective values      |
|format|String| no       | Audio format, valid value aac/mp3/wav/PCM                    |
|frameSize|String| no       | Specify the frame size in KB. After frameSize is passed in, every time the content of the specified frame size is recorded, the recorded file content will be called back. If it is not specified, it will not be called back. Only mp3 format is currently supported. |

 Among them, the sampling rate and code rate have certain requirements, the specific effective values are as follows: 

| Sampling Rate | Encoding rate  |
|:-|:-|
|8000|16000 ~ 48000|
|11025|16000 ~ 48000|
|12000|24000 ~ 64000|
|16000|24000 ~ 96000|
|22050|32000 ~ 128000|
|24000|32000 ~ 128000|
|32000|48000 ~ 192000|
|44100|64000 ~ 320000|
|48000|64000 ~ 320000|

 **onStop(callback) callback result description** 

| Attributes   | Types of | Description                      |
|:-|:-|:-|
|tempFilePath|String|Temporary path of recording file|


 **onFrameRecorded(callback) callback result description** 

| Attributes  | Types of    | Description                                                  |
|:-|:-|:-|
|frameBuffer|ArrayBuffer|Recording fragment result data|
|isLastFrame|Boolean|Whether the current frame is normally the last frame before the end of recording|

 **onError(callback) callback result description** 

|**Attributes**|**Types of**|**Description**|
|:-|:-|:-|
|errMsg|String|Error message|

- **note**
  
  - You can use the user authorization API to determine whether the user has granted the microphone access to the application 
  
  

 **Example** 

```html
<template>
	<view>
		<button @tap="startRecord">start recording </button>
		<button @tap="endRecord">Stop recording </button>
		<button @tap="playVoice">Play recording </button>
	</view>
</template>
```

```javascript
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;

export default {
	data() {
		return {
			text: 'uni-app',
			voicePath: ''
		}
	},
	onLoad() {
		let self = this;
		recorderManager.onStop(function (res) {
			console.log('recorder stop' + JSON.stringify(res));
			self.voicePath = res.tempFilePath;
		});
	},
	methods: {
		startRecord() {
			console.log('start recording');

			recorderManager.start();
		},
		endRecord() {
			console.log('End of recording');
			recorderManager.stop();
		},
		playVoice() {
			console.log('Play recording');

			if (this.voicePath) {
				innerAudioContext.src = this.voicePath;
				innerAudioContext.play();
			}
		}
	}
}
```
