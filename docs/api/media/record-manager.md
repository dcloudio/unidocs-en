### uni.getRecorderManager()
获取**全局唯一**的录音管理器 ``recorderManager``。
Get the **globally unique** recording manager `recorderManager`.

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|x|

**recorderManager 对象的方法列表**
**List of methods of recorderManager object** 

|方法|参数|说明|平台差异说明|
| method          | parameter | Description | Platform difference description |
|:-|:-|:-|:-|
|start|options|开始录音||
|start|options|start recording||
|pause||暂停录音|App 暂不支持|
|pause|| Pause recording  | App not currently supported     |
|resume||继续录音|App 暂不支持|
|resume|| Continue recording  | App not currently supported     |
|stop||停止录音||
|stop||Stop recording||
|onStart|callback|录音开始事件||
|onStart|callback|Recording start event||
|onPause|callback|录音暂停事件||
|onPause|callback|Recording pause event||
|onStop|callback|录音停止事件，会回调文件地址||
|onStop|callback|Recording stop event, will call back the file address||
|onFrameRecorded|callback|已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件|App 暂不支持|
|onFrameRecorded|callback|After the file with the specified frame size has been recorded, the recording fragment result data will be called back. If frameSize is set, this event will be called back|App not currently supported|
|onError|callback|录音错误事件, 会回调错误信息|&nbsp;|
|onError|callback|Recording error event, will call back error message|&nbsp;|

**start(options) 说明**
**start(options) description** 

|属性|类型|必填|说明|平台差异说明|
|**Attributes**|**Types of**| Required | Description   |平台差异说明|
|:-|:-|:-|:-|:-|
|duration|Number|否|指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）|App|
|duration|Number| no       | Specify the duration of the recording in ms. If a legal duration is passed in, the recording will automatically stop after the specified duration is reached. The maximum value is 600000 (10 minutes), and the default value is 60000 (1 minute).|App|
|sampleRate|Number|否|采样率，有效值 8000/16000/44100|App|
|sampleRate|Number| no       | Sampling rate, effective value 8000/16000/44100  |App|
|format|String|否|音频格式，有效值 aac/mp3/wav/PCM。App默认值为mp3，小程序默认值aac|App|
|format|String| no       | Audio format, valid value aac/mp3/wav/PCM   |App|
|frameSize|String|否|指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。|App不支持|
|frameSize|String| no       | Specify the frame size in KB. After frameSize is passed in, every time the content of the specified frame size is recorded, the recorded file content will be called back. If it is not specified, it will not be called back. Only mp3 format is currently supported. App|App不支持|



**onStop(callback) 回调结果说明**
**onStop(callback) callback result description** 

|属性|类型|说明|
| Attributes   | Types of | Description  |
|:-|:-|:-|
|tempFilePath|String|录音文件的临时路径|
|tempFilePath|String|Temporary path of recording file|


**onFrameRecorded(callback) 回调结果说明**
**onFrameRecorded(callback) callback result description** 

|属性|类型|说明|
| Attributes  | Types of    | Description   |
|:-|:-|:-|
|frameBuffer|ArrayBuffer|录音分片结果数据|
|frameBuffer|ArrayBuffer|Recording fragment result data|
|isLastFrame|Boolean|当前帧是否正常录音结束前的最后一帧|
|isLastFrame|Boolean|Whether the current frame is normally the last frame before the end of recording|

**onError(callback) 回调结果说明**
**onError(callback) callback result description** 

|属性|类型|说明|
|**Attributes**|**Types of**|**Description**|
|:-|:-|:-|
|errMsg|String|错误信息|
|errMsg|String|Error message|

**注意**
**note**

- 可以通过用户授权API来判断用户是否给应用授予麦克风的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user has granted the microphone access to the application [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)

**示例**
**Example** 

```html
<template>
	<view>
		<button @tap="startRecord">开始录音</button>
		<button @tap="endRecord">停止录音</button>
		<button @tap="playVoice">播放录音</button>
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
			console.log('开始录音');

			recorderManager.start();
		},
		endRecord() {
			console.log('录音结束');
			recorderManager.stop();
		},
		playVoice() {
			console.log('播放录音');

			if (this.voicePath) {
				innerAudioContext.src = this.voicePath;
				innerAudioContext.play();
			}
		}
	}
}
```
