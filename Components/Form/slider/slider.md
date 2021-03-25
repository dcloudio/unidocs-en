#### slider

Slide the selector.

**Property description**

| Attribute name  | Types of    | Defaults                                   | Description                                                  |
| :-------------- | :---------- | :----------------------------------------- | :----------------------------------------------------------- |
| min             | Number      | 0                                          | Minimum                                                      |
| max             | Number      | 100                                        | Max                                                          |
| step            | Number      | 1                                          | Step size, the value must be greater than 0 and divisible by (max-min) |
| disabled        | Boolean     | false                                      | Whether to disable                                           |
| value           | Number      | 0                                          | Current value                                                |
| activeColor     | Color       | Different platforms, see below for details | The line color of the selected part on the left side of the slider |
| backgroundColor | Color       | # e9e9e9                                   | The color of the background bar on the right side of the slider |
| block-size      | Number      | 28                                         | The size of the slider, the value range is 12-28             |
| block-color     | Color       | #ffffff                                    | The color of the slider                                      |
| show-value      | Boolean     | false                                      | Whether to display the current value                         |
| @change         | EventHandle |                                            | Event triggered after completing a drag, event.detail = {value: value} |
| @changing       | EventHandle |                                            | Event triggered during dragging, event.detail = {value: value} |

**Example**

```html
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

