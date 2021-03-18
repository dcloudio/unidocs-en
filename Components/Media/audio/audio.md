#### audio
Audio.

Property description

| Attribute name | Types of    | Defaults       | Description                                                  |
|:-|:-|:-|:-|
|id|String||Unique identifier of the audio component|
|src|String||Resource address to play audio|
|loop|Boolean|false|Whether to loop|
|controls|Boolean|false|Whether to show the default controls|
|poster|String||The image resource address of the audio cover on the default control. If the value of the controls attribute is false, setting the poster is invalid|
|name|String|Unknown audio|The audio name on the default control. If the value of the controls attribute is false, setting the name is invalid|
|author|String|Unknown author|The name of the author on the default control. If the value of the controls attribute is false, setting the author is invalid|
|@error|EventHandle||When an error occurs, the error event is triggered, detail = {errMsg: MediaError.code}|
|@play|EventHandle||Trigger play event when start/continue playing|
|@pause|EventHandle||The pause event is triggered when the playback is paused|
|@timeupdate|EventHandle||The timeupdate event is triggered when the playback progress changes, detail = {currentTime, duration}|
|@ended|EventHandle||Triggers the end event when playing to the end|

**MediaError.code**

| Return error code | description                                   |
|:-|:-|
|1|Access to resources is prohibited by the user|
|2|Network Error|
|3| Decoding error                                |
|4|Inappropriate resources|

**Example:**

```html
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap" style="text-align: center;">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
			</view>
		</view>
	</view>
</template>
```


```javascript
export default {
	data() {
		return {
			current: {
				poster: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				name: 'To Alice',
				author: 'No',
				src: '1. https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
			},
			audioAction: {
				method: 'pause'
			}
		}
	}
}
```


