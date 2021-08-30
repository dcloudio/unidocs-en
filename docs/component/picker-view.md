#### picker-view

嵌入页面的滚动选择器。
Scroll selector embedded in the page.

相对于`picker`组件，`picker-view`拥有更强的灵活性。当需要对自定义选择的弹出方式和UI表现时，往往需要使用`picker-view`。
Compared with `picker`components, it `picker-view`has more flexibility. When you need to customize the pop-up mode and UI performance, you often need to use it `picker-view`.

**属性说明**
**Property description**

|属性名|类型|默认值|平台差异说明|
| Attribute name  | Types of        | Defaults|Platform difference description|
|:-|:-|:-|:-|
|value|Array＜Number＞|数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。||
| value           | Array＜Number＞ | The numbers in the array indicate the number of items selected by picker-view-column in picker-view (the subscript starts from 0). When the number is greater than the length of the picker-view-column option, the last item is selected. ||
|indicator-style|String|设置选择器中间选中框的样式||
| indicator-style | String          | Set the style of the selected box in the middle of the selector ||
|indicator-class|String|设置选择器中间选中框的类名，注意页面或组件的style中写了scoped时，需要在类名前写/deep/|app-nvue不支持|
| indicator-class | String          | Set the class name of the selected box in the selector. Note that when scoped is written in the style of the page or component, you need to write /deep/ before the class name |app-nvue不支持|
|mask-style|String|设置蒙层的样式||
| mask-style      | String          | Set the style of the mask                                    ||
|mask-class|String|设置蒙层的类名|app-nvue不支持|
| mask-class      | String          | Set the class name of the mask                               |app-nvue不支持|
|@change|EventHandle|当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|&nbsp;|
| @change         | EventHandle     | When scrolling selection, the change event is triggered when the value changes, event.detail = {value: value}; value is an array, which means the picker-view-column in the picker-view is currently selected (the subscript starts from 0) ||


**注意：**其中只可放置 `<picker-view-column/>` 组件，其他节点不会显示。
**Note:** in which may be placed only `<picker-view-column/>`components, other nodes will not be displayed.

#### picker-view-column

`<picker-view />` 的子组件，仅可放置于 `<picker-view />` 中，其子节点的高度会自动设置成与 picker-view 的选中框的高度一致。
`<picker-view />`The subassembly may be placed only in the `<picker-view />`height level of the child nodes will be automatically set to the height of the picker-view is consistent with the selected frame.

**注意：**nvue页面子节点未继承 picker-view 的选中框的高度，需要自己设置高度并居中。

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/picker-view/picker-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。


```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="uni-title">Date：{{year}}year{{month}}month{{day}}day</view>
        </view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
            <picker-view-column>
                <view class="item" v-for="(item,index) in years" :key="index">{{item}}year</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in months" :key="index">{{item}}month</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in days" :key="index">{{item}}day</view>
            </picker-view-column>
        </picker-view>
    </view>
</template>
<script>
    export default {
        data: function () {
            const date = new Date()
            const years = []
            const year = date.getFullYear()
            const months = []
            const month = date.getMonth() + 1
            const days = []
            const day = date.getDate()
            for (let i = 1990; i <= date.getFullYear(); i++) {
                years.push(i)
            }
            for (let i = 1; i <= 12; i++) {
                months.push(i)
            }
            for (let i = 1; i <= 31; i++) {
                days.push(i)
            }
            return {
                title: 'picker-view',
                years,
                year,
                months,
                month,
                days,
                day,
                value: [9999, month - 1, day - 1],
                visible: true,
                indicatorStyle: `height: 50px;`
            }
        },
        methods: {
            bindChange: function (e) {
                const val = e.detail.value
                this.year = this.years[val[0]]
                this.month = this.months[val[1]]
                this.day = this.days[val[2]]
            }
        }
    }
</script>
<style>
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}
	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>

```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/433a97b0-4f30-11eb-b680-7980c8a877b8.png)

**Tips**
- 在2.6.3版本以前，如果需要在PC端使用`picker-view`，需配置[H5模版](https://uniapp.dcloud.io/collocation/manifest?id=h5-template)，并引入[touch-emulator.js](https://github.com/dcloudio/touchemulator)

**扩展**
- uni ui提供了增强版`<uni-data-picker>`组件，详见：[https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net.cn/plugin?id=3796)
