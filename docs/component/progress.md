#### progress
进度条。
progress bar.

**属性说明**
**Property description**

|属性名			|类型		|默认值		|说明				|平台差异说明				|
| Attribute name| Types of| Defaults| Description|Platform difference description|
|:-				|:-			|:-			|:-				|:-						|
|percent		|Float		|无			|百分比0~100											|						|
| percent         | Float         | no                         | Percentage 0~100                                             ||
|show-info		|Boolean	|false		|在进度条右侧显示百分比									|						|
| show-info       | Boolean       | false                      | Show percentage on the right side of the progress bar        ||
|border-radius|number/string|0|圆角大小|app-nvue|
| border-radius   | number/string | 0                          | Fillet size                                                  |app-nvue|
|font-size|number/string|16|右侧百分比字体大小|app-nvue|
| font-size       | number/string | 16                         | Percentage font size on the right                            |app-nvue|
|stroke-width	|Number		|6			|进度条线的宽度，单位px									|						|
| stroke-width    | Number        | 6                          | The width of the progress bar, in px                         ||
|activeColor	|Color		|#09BB07（百度为#E6E6E6）	|已选择的进度条的颜色		|						|
| activeColor     | Color         | #09BB07 (Baidu is #E6E6E6) | The color of the selected progress bar                       ||
|backgroundColor|Color		|#EBEBEB	|未选择的进度条的颜色									|						|
| backgroundColor | Color         | #EBEBEB                    | The color of the unselected progress bar                     ||
|active			|Boolean	|false		|进度条从左往右的动画									|						|
| active          | Boolean       | false                      | Animation of the progress bar from left to right             ||
|active-mode	|String		|backwards	|backwards: 动画从头播；forwards：动画从上次结束点接着播|App、H5|
| active-mode     | String        | backwards                  | backwards: the animation is played from the beginning; forwards: the animation is played from the last end point |App、H5|
|duration|number|30|进度增加1%所需毫秒数|App-nvue2.6.1+、H5 3.1.11+|
| duration        | number        | 30                         | The number of milliseconds required to increase the progress by 1% |App-nvue2.6.1+、H5 3.1.11+|


**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/progress/progress)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/progress/progress)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp) . It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- This example does not include the complete css, please refer to the above to obtain the external css, check it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="progress-box">
				<progress percent="20" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress percent="40" active stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress percent="60" active stroke-width="3" backgroundColor="#999"/>
			</view>
			<view class="progress-box">
				<progress percent="80" activeColor="red" active stroke-width="8" />
			</view>
		</view>
	</view>
</template>
```

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/43f66da0-4f30-11eb-b997-9918a5dda011.png)
