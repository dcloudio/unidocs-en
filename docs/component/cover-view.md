#### cover-view
覆盖在原生组件上的文本视图。
Text view covered on native component.

app-vue框架，渲染引擎是webview的。但为了优化体验，部分组件如map、video、textarea、canvas通过原生控件实现，原生组件层级高于前端组件（类似flash层级高于div）。为了能正常覆盖原生组件，设计了cover-view。
app-vue framework, with the rendering engine belonging to webview. However, in order to optimize the experience, some components, such as map, video, textarea and canvas, are implemented through native controls, and the level of native components is higher than that of front-end components (just like the level of flash is higher than div). In order to properly cover native components, cover-view is designed.


**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

* app-nvue所有组件均为原生渲染，不存在前端组件无法覆盖原生组件的问题。但为了保持多端兼容，nvue里也实现了`cover-view`，作用于普通`view`一样。
* All components of app-nvue are native rendering, and there should be no such problem that front-end components cannot cover the native components. However, in order to maintain multi-terminal compatibility, `cover-view` is also implemented in nvue, which acts the same as a normal `view`.



#### cover-image
覆盖在原生组件上的图片视图。可覆盖的原生组件同`cover-view`，支持嵌套在`cover-view`里。
Image view covered on native component. The native components that can be overridden are the same as `cover-view`, which can be nested in `cover-view`.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|src|String||图标路径。支持本地路径、网络路径。不支持 base64 格式。||
| src| String| | Icon path. Support local path and network path. base64 format is not supported.| |


app-vue上可覆盖的原生组件：`<video>`、`<map>`
Native components that can be overridden on app-vue: `<video>`, `<map>`

支持的事件：`click`
Supported events: `click`

**不支持的 CSS**
**Unsupported CSS**

- position: fixed
- opacity
- overflow
- padding
- linebreak
- white-space

注意：nvue的cover-view不在上述限制中，它仅支持且全部支持nvue的所有css。
Note: cover-view of nvue is not restricted by the above factors, it only supports all css's of nvue.

**Tips**

- App端vue页面 `cover-view`、`cover-image` 中不支持嵌套其它组件，包括再次嵌套`cover-view`，仅可覆盖`video`、`map`。App端nvue页面自2.1.5起没有这些限制。
- On the App side, vue pages `cover-view` and `cover-image` do not support nesting of other components, including nesting `cover-view` again, which can only cover `video` and `map`. The App side nvue page has no such restrictions since 2.1.5.
- App端 `cover-image` 使用本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。
- If the `cover-image` on the App side uses local images, you need to set the resources to release mode before packaging, and add a runmode node to app-plus in the manifest file, with the setting value of liberate.
- App端还提供了更灵活和强大的`subNvue`，参考[原生子窗体subNvue](/api/window/subNVues)
- The App side also provides a more flexible and powerful`subNvue`, please refer to [Native subwindow subNvue](/api/window/subNVues)
- 在 video 组件中使用时，若想在全屏模式下使用`cover-view`，只有在App端的nvue页面可实现。
- When using in the video component, if you want to use `cover-view` in full-screen mode, it can only be implemented on the nvue page on the App side.
- 在App端，如果重度使用video和map，推荐使用nvue页面。
- On the App side, if video and map are used heavily, it is recommended to use nvue page.


**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view class="page">
		<video class="video" id="demoVideo" :controls="false" :enable-progress-gesture="false" :show-center-play-btn="true" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v">
			<cover-view class="controls-title">Simple custom controls</cover-view>
			<cover-image class="controls-play img" @click="play" src="/static/play.png"></cover-image>
			<cover-image class="controls-pause img" @click="pause" src="/static/pause.png"></cover-image>
		</video>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.videoCtx = uni.createVideoContext('demoVideo')
		},
		methods: {
			play(event) {
				this.videoCtx.play();
				uni.showToast({
					title: 'Start playing',
					icon: 'none'
				});
			},
			pause(event) {
				this.videoCtx.pause();
				uni.showToast({
					title: 'Pause playback',
					icon: 'none'
				});
			}
		}
	}
</script>
<style>
	.page {
		display: flex;
		justify-content: center;
	}

	.video {
		position: relative;
	}

	cover-view,
	cover-image {
		display: inline-block;
	}

	.img {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		margin-top: -50rpx;
	}

	.controls-play {
		left: 50rpx;
	}

	.controls-pause {
		right: 50rpx;
	}

	.controls-title {
		width: 100%;
		text-align: center;
		color: #FFFFFF;
	}
</style>
```
