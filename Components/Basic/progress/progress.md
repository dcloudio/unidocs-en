#### progress
progress bar.

**Property description**

| Attribute name  | Types of      | Defaults                   | Description                                                  |
| :-------------- | :------------ | :------------------------- | :----------------------------------------------------------- |
| percent         | Float         | no                         | Percentage 0~100                                             |
| show-info       | Boolean       | false                      | Show percentage on the right side of the progress bar        |
| border-radius   | number/string | 0                          | Fillet size                                                  |
| font-size       | number/string | 16                         | Percentage font size on the right                            |
| stroke-width    | Number        | 6                          | The width of the progress bar, in px                         |
| activeColor     | Color         | #09BB07 (Baidu is #E6E6E6) | The color of the selected progress bar                       |
| backgroundColor | Color         | #EBEBEB                    | The color of the unselected progress bar                     |
| active          | Boolean       | false                      | Animation of the progress bar from left to right             |
| active-mode     | String        | backwards                  | backwards: the animation is played from the beginning; forwards: the animation is played from the last end point |
| duration        | number        | 30                         | The number of milliseconds required to increase the progress by 1% |

**Example** view demo

The following sample code comes from the hello uni-app project . It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

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


