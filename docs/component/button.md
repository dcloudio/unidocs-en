#### button

按钮。
Button.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|生效时机|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Effective time| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|size|String|default|按钮的大小|||
| size| String| default| Button size| | |
|type|String|default|按钮的样式类型|||
| type| String| default| Button style type| | |
|plain|Boolean|false|按钮是否镂空，背景色透明|||
| plain| Boolean| false| Whether the button is hollow and the background color is transparent| | |
|disabled|Boolean|false|是否禁用|||
| disabled| Boolean| false| Disable or not| | |
|loading|Boolean|false|名称前是否带 loading 图标||App-nvue 平台，在 ios 上为雪花，Android上为圆圈|
| loading| Boolean| false| With the loading icon before the name or not| | App-nvue platform, displayed as snowflake on ios and circle on Android|
|form-type|String||用于 ``<form>`` 组件，点击分别会触发 ``<form>`` 组件的 submit/reset 事件|||
| form-type| String| | Used for the `<form>` component, clicking will trigger the submit/reset event of the `<form>` component respectively| | |
|open-type|String||开放能力|||
| open-type| String| | Openness| | |
|hover-class|String|button-hover|指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果||App-nvue 平台暂不支持|
| hover-class| String| button-hover| Specify the style class of the pressed button. For hover-class="none", there is no effect of click state| | The App-nvue platform does not support temporarily|
|hover-start-time|Number|20|按住后多久出现点击态，单位毫秒|||
| hover-start-time| Number| 20| How long does the click state appear after pressing, in milliseconds| | |
|hover-stay-time|Number|70|手指松开后点击态保留时间，单位毫秒|||
| hover-stay-time| Number| 70| Retention time of the click state after finger release, in milliseconds| | |


- **注意：``button-hover`` 默认为 ``{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}``**
- **Notice: `button-hover` `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}` as default**

 
**size 有效值**
**size valid value**

|值|说明|
| Value| Instruction|
|:-|:-|
|default|默认大小|
| default| Default size|
|mini|小尺寸|
| mini| Small size|

**type 有效值**
**type valid value**

|值|说明|
| Value| Instruction|
|:-|:-|
|primary|App、H5为蓝色|
| primary| Blue on App and H5 sides|
|default|白色|
| default| White|
|warn|红色|
| warn| Red|

**form-type 有效值**
**form-type valid value**

|值|说明|
| Value| Instruction|
|:-|:-|
|submit|提交表单|
| submit| Submit form|
|reset|重置表单|
| reset| Reset form|

**open-type 有效值**
**open-type valid value**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|feedback|打开“意见反馈”页面，用户可提交反馈内容并上传日志|App|
| feedback| Open the "Feedback" page, then users can submit feedback content and upload the log| App|


**button点击**
**button click**

button 组件的点击遵循 vue 标准的 @click事件。
The click of the button component follows the vue standard @click event.

button 组件没有 url 属性，如果要跳转页面，可以在@click中编写，也可以在button组件外面套一层 navigator 组件。举例，如需跳转到about页面，可按如下几种代码写法执行：
Button component has no url attribute. If you want to jump to certain pages, you can write it in @click, or put a layer of navigator component outside the button component. For example, if you need to jump to the about page, execution can be performed as the following writing mode of codes:

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">Goto about page through the navigator component</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">Goto about page through this method</button>
		<button type="default" @click="navigateTo('/pages/about/about')">Goto about page</button><!-- This writing mode is only supported on the h5 platform, without cross-platform feature, not recommended -->
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
**Notice**

- 在 App 中，开发者登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) 后点击应用名称，进入左侧菜单“用户反馈”页面获取反馈内容。
- In the App, the developer logs in to the [DCloud Developer Center](https://dev.dcloud.net.cn/), clicks on the application name, and enters the "User Feedback" page in the left menu to get feedback.
- 点击 share 分享按钮时会触发 [onShareAppMessage](/api/plugins/share)
- When you click the share button, it will trigger [onShareAppMessage](/api/plugins/share)

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/button/button)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/button/button)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">Page primary operation is Normal</button>
			<button type="primary" loading="true">Page primary operation is Loading</button>
			<button type="primary" disabled="true">Page primary operation is Disabled</button>
			<button type="default">Page secondary operation is Normal</button>
			<button type="default" disabled="true">Page secondary operation is Disabled</button>
			<button type="warn">Warning operation is Normal</button>
			<button type="warn" disabled="true">Warning operation is Disabled</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">Button</button>
				<button type="primary" disabled="true" plain="true">Non-clickable button</button>
				<button type="default" plain="true">Button</button>
				<button type="default" disabled="true" plain="true">Button</button>
				<button class="mini-btn" type="primary" size="mini">Button</button>
				<button class="mini-btn" type="default" size="mini">Button</button>
				<button class="mini-btn" type="warn" size="mini">Button</button>
			</view>
		</view>
	</view>
</template>
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f3edf730-4f32-11eb-8a36-ebb87efcf8c0.png)

