#### audio
音频。

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

app-nvue也不支持此组件。

如果需要带ui的样式，可以自己做，也可以在插件市场搜索相关[插件](https://ext.dcloud.net.cn/search?q=audio)

**属性说明**

|属性名|类型|默认值|说明|
|**Attribute name**|**Type**|**Defaults**|**Description**|
|:-|:-|:-|:-|
|id|String||audio 组件的唯一标识符|
|id|String||Unique identifier of the audio component|
|src|String||要播放音频的资源地址|
|src|String||Resource address to play audio|
|loop|Boolean|false|是否循环播放|
|loop|Boolean|false|Whether to loop|
|controls|Boolean|false|是否显示默认控件|
|controls|Boolean|false|Whether to show the default controls|
|poster|String||默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效|
|poster|String||The image resource address of the audio cover on the default control. If the value of the controls attribute is false, setting the poster is invalid|
|name|String|未知音频|默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效|
|name|String|Unknown audio|The audio name on the default control. If the value of the controls attribute is false, setting the name is invalid|
|author|String|未知作者|默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效|
|author|String|Unknown author|The name of the author on the default control. If the value of the controls attribute is false, setting the author is invalid|
|@error|EventHandle||当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}|
|@error|EventHandle||When an error occurs, the error event is triggered, detail = {errMsg: MediaError.code}|
|@play|EventHandle||当开始/继续播放时触发play事件|
|@play|EventHandle||Trigger play event when start/continue playing|
|@pause|EventHandle||当暂停播放时触发 pause 事件|
|@pause|EventHandle||The pause event is triggered when the playback is paused|
|@timeupdate|EventHandle||The timeupdate event is triggered when the playback progress changes, detail = {currentTime, duration}|
|@timeupdate|EventHandle||当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}|
|@ended|EventHandle||当播放到末尾时触发 ended 事件|
|@ended|EventHandle||Triggers the end event when playing to the end|

**MediaError.code**

|返回错误码|描述|
| Return error code | description                                   |
|:-|:-|
|1|获取资源被用户禁止|
|1|Access to resources is prohibited by the user|
|2|网络错误|
|2|Network Error|
|3|解码错误|
|3| Decoding error                                |
|4|不合适资源|
|4|Inappropriate resources|

**示例：** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/audio/audio)
 
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

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/abc3fd40-4f48-11eb-b680-7980c8a877b8.png)
