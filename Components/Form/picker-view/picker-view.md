#### picker-view

Scroll selector embedded in the page.

Compared with `picker`components, it `picker-view`has more flexibility. When you need to customize the pop-up mode and UI performance, you often need to use it `picker-view`.

**Property description**

| Attribute name  | Types of        | Defaults                                                     |
| :-------------- | :-------------- | :----------------------------------------------------------- |
| value           | Array＜Number＞ | The numbers in the array indicate the number of items selected by picker-view-column in picker-view (the subscript starts from 0). When the number is greater than the length of the picker-view-column option, the last item is selected. |
| indicator-style | String          | Set the style of the selected box in the middle of the selector |
| indicator-class | String          | Set the class name of the selected box in the selector. Note that when scoped is written in the style of the page or component, you need to write /deep/ before the class name |
| mask-style      | String          | Set the style of the mask                                    |
| mask-class      | String          | Set the class name of the mask                               |
| @change         | EventHandle     | When scrolling selection, the change event is triggered when the value changes, event.detail = {value: value}; value is an array, which means the picker-view-column in the picker-view is currently selected (the subscript starts from 0) |
| @pickstart      | eventhandle     | Trigger event when scroll selection starts                   |
| @pickend        | eventhandle     | Event is triggered when scroll selection ends                |

**Note:** in which may be placed only `<picker-view-column/>`components, other nodes will not be displayed.

#### picker-view-column

`<picker-view />`The subassembly may be placed only in the `<picker-view />`height level of the child nodes will be automatically set to the height of the picker-view is consistent with the selected frame.

**Example**


```html
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

