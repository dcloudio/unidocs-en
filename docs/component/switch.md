#### switch

开关选择器。
Switch selector.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name | Types of    | Defaults | Description|Platform difference description|
|:-|:-|:-|:-|:-|
|checked|Boolean|false|是否选中||
| checked        | Boolean     | false    | Whether selected                                             ||
|disabled|Boolean|false|是否禁用||
| disabled       | Boolean     | false    | Whether to disable                                           ||
|type|String|switch|样式，有效值：switch, checkbox||
| type           | String      | switch   | Style, valid values: switch, checkbox                        ||
|@change|EventHandle||checked 改变时触发 change 事件，event.detail={ value:checked}||
| @change        | EventHandle |          | The change event is triggered when checked changes, event.detail={ value:checked} ||
|color|Color||switch 的颜色，同 css 的 color|&nbsp;|
| color          | Color       |          | The color of switch, same as the color of css                ||

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
 
```html
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Default style</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">Recommended display style</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Opening</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">shut down</view>
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
            console.log('A change event occurs in switch1, and the carry value is', e.target.value)
        },
        switch2Change: function (e) {
            console.log('switch2 has a change event, and the value carried is', e.target.value)
        }
    }
}
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/51f6fb50-4f2f-11eb-b680-7980c8a877b8.png)

示例代码说明：以上示例代码从hello uni-app示例中复制，涉及的css样式在hello uni-app的app.vue和uni.css中
Sample code description: The above sample code is copied from the hello uni-app example, and the css style involved is in the app.vue and uni.css of the hello uni-app

预览H5效果：使用浏览器的手机模式访问[https://hellouniapp.dcloud.net.cn/pages/component/switch/switch](https://hellouniapp.dcloud.net.cn/pages/component/switch/switch)
Preview H5 effect: use the mobile phone mode of the browser to access [https://hellouniapp.dcloud.net.cn/pages/component/switch/switch](https://hellouniapp.dcloud.net.cn/pages/component/switch /switch)

**注意**
**Notice**
- 如需调节switch大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`
- If you need to adjust the switch size, you can adjust it through the CSS scale method, such as reducing it to 70% `style="transform:scale(0.7)"`
