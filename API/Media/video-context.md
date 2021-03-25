### uni.createVideoContext(videoId, this)
 Create and return a video context videoContext object. In the custom component, the second component parameters into the this example, the operation to the component  ``<video>`` assembly. 

 **List of methods of the videoContext object** 

| **method** | **parameter** | **Description** | **Platform difference description** 
|:-|:-|:-|:-|
|play| no | Play ||
|pause| no | time out ||
|seek|position| Jump to the specified position, unit s ||
|stop|| Stop video | WeChat Mini Program |
|sendDanmu|danmu| Send barrage, danmu contains two attributes text, color ||
|playbackRate|rate| Set the double speed playback, the supported magnifications are 0.5/0.8/1.0/1.25/1.5. WeChat basic library supports 2.0 times speed since 2.6.3 ||
|requestFullScreen| no | Enter the full screen, you can pass in the {direction} parameter, see the video component documentation for details ||
|exitFullScreen| no | Exit Full Screen ||
|showStatusBar| no | Show status bar, only valid in iOS full screen |
|hideStatusBar|no| Hide the status bar, only effective in iOS full screen |

 **note:** 
- app-nvue platform 2.2.5+ supports uni.createVideoContext(videoId, this)
- To use this API under app-nvue platform 2.2.5, you need to set the component attribute id and ref at the same time ``, or use ref directly, for example`this.$refs.video1`

** **Example** **

```html
<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<video id="myVideo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4" @error="videoErrorCallback" :danmu-list="danmuList"
				    enable-danmu danmu-btn controls></video>

				<view class="uni-list">
					<view class="uni-list-cell">
						<view>
							<view class="uni-label">Barrage content </view>
						</view>
						<view class="uni-list-cell-db">
							<input @blur="bindInputBlur" class="uni-input" type="text" placeholder="Enter the barrage content here" />
						</view>
					</view>
				</view>
				<view class="btn-area">
					<button @tap="bindSendDanmu" class="page-body-button" formType="submit">Send barrage </button>
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
					text: 'Barrage that appears in the first second',
					color: '#ff0000',
					time: 1
				},
				{
					text: 'Barrage that appears in the third second',
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
			console.log('Video error message:')
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
