#### label

Used to improve the usability of form components, use the for attribute to find the corresponding id, or place the control under the label. When clicked, the corresponding control will be triggered.

The priority of for is higher than internal controls. When there are multiple controls inside, the first control is triggered by default.

Currently controls can be bound to include: `<button>`, `<checkbox>`, `<radio>`, `<switch>`.

**Property description**

| Attribute name | Types of | Description                 |
| :------------- | :------- | :-------------------------- |
| for            | String   | The id of the bound control |

**Example**

```html
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">The form component is in the label</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
						<view>
							<checkbox :value="item.name" :checked="item.checked"></checkbox>
						</view>
						<view>{{item.value}}</view>
					</label>
				</checkbox-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">label uses for to identify form components</view>
				<radio-group class="uni-list" @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view>
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
						</view>
						<view>
							<label class="label-2-text" :for="item.name">
								<text>{{item.value}}</text>
							</label>
						</view>
					</label>
				</radio-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">Select the first one when there are multiple labels</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="label-3">
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">option 1</checkbox>
						</view>
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">option 2</checkbox>
						</view>
						<view class="uni-link uni-center" style="margin-top:20rpx;">Click the text under the label to select the first checkbox by default</view>
					</label>
				</checkbox-group>
			</view>

		</view>
	</view>
</template>
```

```javascript
export default {
    data() {
        return {
            checkboxItems: [{
                    name: 'USA',
                    value: 'United States'
                },
                {
                    name: 'CHN',
                    value: 'China',
                    checked: 'true'
                }
            ],
            radioItems: [{
                    name: 'USA',
                    value: 'United States'
                },
                {
                    name: 'CHN',
                    value: 'China',
                    checked: 'true'
                }
            ],
            hidden: false
        }
    },
    methods: {
        checkboxChange: function(e) {
            console.log(e)
            var checked = e.target.value
            var changed = {}
            for (var i = 0; i < this.checkboxItems.length; i++) {
                if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
                    changed['checkboxItems[' + i + '].checked'] = true
                } else {
                    changed['checkboxItems[' + i + '].checked'] = false
                }
            }
        },
        radioChange: function(e) {
            var checked = e.target.value
            var changed = {}
            for (var i = 0; i < this.radioItems.length; i++) {
                if (checked.indexOf(this.radioItems[i].name) !== -1) {
                    changed['radioItems[' + i + '].checked'] = true
                } else {
                    changed['radioItems[' + i + '].checked'] = false
                }
            }
        }
    }
}
```
