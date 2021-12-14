#### switch

开关选择器。
Switch selector.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|checked|Boolean|false|是否选中||
| checked| Boolean| false| Selected or not| |
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false| Disable or not| |
|type|String|switch|样式，有效值：switch, checkbox||
| type| String| switch| Style, valid values: switch, checkbox| |
|@change|EventHandle||checked 改变时触发 change 事件，event.detail={ value:checked}||
| @change| EventHandle| | change event is triggered at checked changing, event.detail={ value:checked}| |
|color|Color||switch 的颜色，同 css 的 color|&nbsp;|
| color| Color| | The color of the switch is the same as that of css|  |

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
 
```html
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Default style</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">Recommended exhibition style</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">ON</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">OFF</view>
				<switch />
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
        switch1Change: function (e) {
            console.log(change event occurred in 'switch1, carrying value', e.target.value)
        },
        switch2Change: function (e) {
            console.log(change event occurred in 'switch2, carrying value', e.target.value)
        }
    }
}
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/51f6fb50-4f2f-11eb-b680-7980c8a877b8.png)

示例代码说明：以上示例代码从hello uni-app示例中复制，涉及的css样式在hello uni-app的app.vue和uni.css中
Code description: The above code is copied from the example of hello uni-app, and the css styles involved can be found in app.vue and uni.css of hello uni-app

预览H5效果：使用浏览器的手机模式访问[https://hellouniapp.dcloud.net.cn/pages/component/switch/switch](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
Preview the effect of H5: Visit [https://hellouniapp.dcloud.net.cn/pages/component/switch/switch](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch) by using the mobile phone mode of the browser

**注意**
**Notice**
- 如需调节switch大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`
- If you need to adjust the switch size, you can adjust it by the scale method of css, such as scaling down it to 70% `style="transform:scale(0.7)"`
