#### button

按钮。
button.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|**Attribute name**|**Types of**|**Defaults**|**Description**|**Platform difference description**|
|:-|:-|:-|:-|:-|
|size|String|default|按钮的大小||
|size|String|default|Button size||
|type|String|default|按钮的样式类型||
|type|String|default|Button style type||
|plain|Boolean|false|按钮是否镂空，背景色透明||
|plain|Boolean|false|Whether the button is hollowed out and the background color is transparent|
|disabled|Boolean|false|是否禁用||
|disabled|Boolean|false|Whether to disable||
|loading|Boolean|false|名称前是否带 loading 图标|App-nvue 平台，在 ios 上为雪花，Android上为圆圈|
|form-type|String||用于 ``<form>`` 组件，点击分别会触发 ``<form>`` 组件的 submit/reset 事件||
|open-type|String||开放能力|||
|hover-class|String|button-hover|指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果|App-nvue 平台暂不支持|
|hover-start-time|Number|20|按住后多久出现点击态，单位毫秒||
|hover-stay-time|Number|70|手指松开后点击态保留时间，单位毫秒||


- **注意：``button-hover`` 默认为 ``{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}``**

 
**size 有效值**

|值|说明|
|**value**|**Description**|
|:-|:-|
|default|默认大小|
|default|Default size|
|mini|小尺寸|
|mini|Small size|

**type 有效值**
**type valid value**

|值|说明|
|value|Description|
|:-|:-|
|primary|App、H5为蓝色|
|primary|please use default instead, and then write your own style.|
|default|白色|
|default|white|
|warn|红色|
|warn|red|

**form-type 有效值**
**form-type valid value**

|值|说明|
|Value|Description|
|:-|:-|
|submit|提交表单|
|submit|submit Form|
|reset|重置表单|
|reset|Reset Form|

**open-type 有效值**

|值|说明|平台差异说明|
|:-|:-|:-|
|feedback|打开“意见反馈”页面，用户可提交反馈内容并上传日志|App|


**button点击**
**Button click**

button 组件的点击遵循 vue 标准的 @click事件。
The click of the button component follows the @click event of the vue standard.

button 组件没有 url 属性，如果要跳转页面，可以在@click中编写，也可以在button组件外面套一层 navigator 组件。举例，如需跳转到about页面，可按如下几种代码写法执行：
The button component has no url attribute. If you want to jump to the page, you can write it in @click, or you can put a layer of navigator component outside the button component. For example, if you need to jump to the about page, you can execute the following code writing methods:

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">Jump to the about page through the navigator component</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">Jump to the about page by function</button>
		<button type="default" @click="navigateTo('/pages/about/about')">Jump to about page</button><!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```


**注意** 

- 在 App 中，开发者登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) 后点击应用名称，进入左侧菜单“用户反馈”页面获取反馈内容。
- 点击 share 分享按钮时会触发 [onShareAppMessage](/api/plugins/share)

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/button/button)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">Main page operation Normal</button>
			<button type="primary" loading="true">Main page operation Loading</button>
			<button type="primary" disabled="true">Main page operation Disabled</button>
			<button type="default">Page secondary action Normal</button>
			<button type="default" disabled="true">Page secondary action Disabled</button>
			<button type="warn">Warning operations Normal</button>
			<button type="warn" disabled="true">Warning operations Disabled</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">button</button>
				<button type="primary" disabled="true" plain="true">Non-clickable button</button>
				<button type="default" plain="true">button</button>
				<button type="default" disabled="true" plain="true">button</button>
				<button class="mini-btn" type="primary" size="mini">button</button>
				<button class="mini-btn" type="default" size="mini">button</button>
				<button class="mini-btn" type="warn" size="mini">button</button>
			</view>
		</view>
	</view>
</template>
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f3edf730-4f32-11eb-8a36-ebb87efcf8c0.png)


