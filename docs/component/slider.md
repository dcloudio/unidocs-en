#### slider

滑动选择器。
Slide the selector.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|
| Attribute name  | Types of    | Defaults| Description|
|:-|:-|:-|:-|
|min|Number|0|最小值|
| min             | Number      | 0                                          | Minimum                                                      |
|max|Number|100|最大值|
| max             | Number      | 100                                        | Max                                                          |
|step|Number|1|步长，取值必须大于 0，并且可被(max - min)整除|
| step            | Number      | 1                                          | Step size, the value must be greater than 0 and divisible by (max-min) |
|disabled|Boolean|false|是否禁用|
| disabled        | Boolean     | false                                      | Whether to disable                                           |
|value|Number|0|当前取值|
| value           | Number      | 0                                          | Current value                                                |
|activeColor|Color|各个平台不同，详见下|滑块左侧已选择部分的线条颜色|
| activeColor     | Color       | Different platforms, see below for details | The line color of the selected part on the left side of the slider |
|backgroundColor|Color|#e9e9e9|滑块右侧背景条的颜色|
| backgroundColor | Color       | # e9e9e9                                   | The color of the background bar on the right side of the slider |
|block-size|Number|28|滑块的大小，取值范围为 12 - 28|
| block-size      | Number      | 28                                         | The size of the slider, the value range is 12-28             |
|block-color|Color|#ffffff|滑块的颜色|
| block-color     | Color       | #ffffff                                    | The color of the slider                                      |
|show-value|Boolean|false|是否显示当前 value|
| show-value      | Boolean     | false                                      | Whether to display the current value                         |
|@change|EventHandle||完成一次拖动后触发的事件，event.detail = {value: value}|
| @change         | EventHandle |                                            | Event triggered after completing a drag, event.detail = {value: value} |
|@changing|EventHandle||拖动过程中触发的事件，event.detail = {value: value}|
| @changing       | EventHandle |                                            | Event triggered during dragging, event.detail = {value: value} |

<!-- |color|Color|#e9e9e9|背景条的颜色（请使用 backgroundColor）|-->
<!-- |color|Color|#e9e9e9|The color of the background bar (please use backgroundColor)|-->
<!-- |selected-color|Color|#1aad19|已选择的颜色（请使用 activeColor）| -->
<!-- |selected-color|Color|#1aad19|Selected color (please use activeColor)| -->
**Tips**

- 如需要区间滑块，即一根横条上使用2个滑块选择一段范围，可见[插件市场](https://ext.dcloud.net.cn/search?q=%E5%8C%BA%E9%97%B4%E6%BB%91%E5%9D%97)
- If you need an interval slider, use 2 sliders on a horizontal bar to select a range, see [Plugin Market](https://ext.dcloud.net.cn/search?q=%E5%8C%BA %E9%97%B4%E6%BB%91%E5%9D%97)

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/slider/slider)
 **Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/slider/slider)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp), it is recommended to use HBuilderX, create a new uni-app project, choose hello uni-app template, you can experience the complete Example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Set up step</view>
			<view>
				<slider value="60" @change="sliderChange" step="5" />
			</view>
			
			<view class="uni-title">Display current value</view>
			<view>
				<slider value="50" @change="sliderChange" show-value />
			</view>
            
			<view class="uni-title">Set min/max</view>
			<view>
				<slider value="100" @change="sliderChange" min="50" max="200" show-value />
			</view>
			
			<view class="uni-title">Sliders of different colors and sizes</view>
			<view>
				<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
			</view>
        </view>
    </view>
</template>
```
 
```javascript
export default {
    data() {
        return {}
    },
    methods: {
        sliderChange(e) {
            console.log('value Change：' + e.detail.value)
        }
    }
}

```
 
![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/96daf000-4f2f-11eb-b997-9918a5dda011.png)


**Tips**
- 2.6.3以前，在PC端使用`slider`，需配置[H5模版](https://uniapp.dcloud.io/collocation/manifest?id=h5-template)，并引入[touch-emulator.js](https://github.com/dcloudio/touchemulator)
- Before 2.6.3, to use `slider` on the PC side, you need to configure [H5 template](https://uniapp.dcloud.io/collocation/manifest?id=h5-template) and introduce [touch-emulator.js ](https://github.com/dcloudio/touchemulator)
