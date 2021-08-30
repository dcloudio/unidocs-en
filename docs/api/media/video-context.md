### uni.createVideoContext(videoId, this)
创建并返回 video 上下文 videoContext 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 ``<video>`` 组件。
Create and return a video context videoContext object. In the custom component, the second component parameters into the this example, the operation to the component  ``<video>`` assembly. 

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**videoContext 对象的方法列表**
**List of methods of the videoContext object** 

|方法|参数|说明|平台差异说明|
| **method** | **parameter** | **Description** | **Platform difference description** |
|:-|:-|:-|:-|
|play|无|播放||
|play| no | Play ||
|pause|无|暂停||
|pause| no | time out ||
|seek|position|跳转到指定位置，单位 s||
|seek|position| Jump to the specified position, unit s ||
|sendDanmu|danmu|发送弹幕，danmu 包含两个属性 text, color||
|sendDanmu|danmu| Send barrage, danmu contains two attributes text, color ||
|playbackRate|rate|设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5。||
|playbackRate|rate| Set the double speed playback, the supported magnifications are 0.5/0.8/1.0/1.25/1.5. ||
|requestFullScreen|无|进入全屏，可传入{direction}参数，详见 video 组件文档|H5不支持{direction}参数|
|requestFullScreen| no | Enter the full screen, you can pass in the {direction} parameter, see the video component documentation for details  |H5不支持{direction}参数|
|exitFullScreen|无|退出全屏||
|exitFullScreen| no | Exit Full Screen ||


**注意：**
**note:** 
- app-nvue 平台 2.2.5以下使用本API，需同时设置组件属性id和ref ``<video id="video1" ref="video1"></video>``，或者直接使用 ref，例如 ``this.$refs.video1``，2.2.5+ 支持直接使用 uni.createVideoContext(videoId, this)
- app-nvue platform 2.2.5+ supports uni.createVideoContext(videoId, this)
- To use this API under app-nvue platform 2.2.5, you need to set the component attribute id and ref at the same time ``, or use ref directly, for example`this.$refs.video1`

**示例**
**Example**

```html
<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<video id="myVideo" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4" @error="videoErrorCallback" :danmu-list="danmuList"
				    enable-danmu danmu-btn controls></video>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view>
							<view class="uni-label">弹幕内容</view>
						</view>
						<view class="uni-list-cell-db">
							<input @blur="bindInputBlur" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
						</view>
					</view>
				</view>
				<view class="btn-area">
					<button @tap="bindSendDanmu" class="page-body-button" formType="submit">发送弹幕</button>
				</view>
			</view>
		</view>
	</view>
</template>
```
```javascript
export default {
	data() {
		return {
			title: 'video',
			src: '',
			inputValue: '',
			danmuList: [{
					text: '第 1s 出现的弹幕',
					color: '#ff0000',
					time: 1
				},
				{
					text: '第 3s 出现的弹幕',
					color: '#ff00ff',
					time: 3
				}
			]
		}
	},
	onReady: function (res) {
		this.videoContext = uni.createVideoContext('myVideo')
	},
	methods: {
		bindInputBlur: function (e) {
			this.inputValue = e.target.value
		},
		bindButtonTap: function () {
			var that = this
			uni.chooseVideo({
				sourceType: ['album', 'camera'],
				maxDuration: 60,
				camera: ['front', 'back'],
				success: function (res) {
					this.src = res.tempFilePath
				}
			})
		},
		bindSendDanmu: function () {
			this.videoContext.sendDanmu({
				text: this.inputValue,
				color: this.getRandomColor()
			})
		},
		videoErrorCallback: function (e) {
			console.log('视频错误信息:')
			console.log(e.target.errMsg)
		},
		getRandomColor: function () {
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
