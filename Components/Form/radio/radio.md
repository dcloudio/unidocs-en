

#### radio-group

Single selector, a plurality of internal `<radio>`components. By putting multiple `radio`packages under one `radio-group`, `radio`the single selection of these is realized .

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  |
| :------------- | :---------- | :------- | :----------------------------------------------------------- |
| @change        | EventHandle |          | `<radio-group>` The change event is triggered when the selected item in the selection changes, event.detail = {value: the value of the selected item radio} |

#### radio

Single-select items.

**Property description**

| Attribute name | Types of | Defaults | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| value          | String   |          | `<radio>`Logo. When the `<radio>`time is selected, `<radio-group>`a change event will carry `<radio>`a value |
| checked        | Boolean  | false    | Is currently selected                                        |
| disabled       | Boolean  | false    | Whether to disable                                           |
| color          | Color    |          | The color of radio, same as the color of css                 |

**Example**

```html
<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="uni-title">Default style</view>
			<view>
				<label class="radio"><radio value="r1" checked="true" />Selected</label>
				<label class="radio"><radio value="r2" />Unselected</label>
			</view>
		</view>
		<view class="uni-title uni-common-mt uni-common-pl">Recommended display style</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>
```
```javascript
export default {
    data() {
        return {
            items: [{
                    value: 'USA',
                    name: 'USA'
                },
                {
                    value: 'CHN',
                    name: 'China',
                    checked: 'true'
                },
                {
                    value: 'BRA',
                    name: 'Brazil'
                },
                {
                    value: 'JPN',
                    name: 'Japan'
                },
                {
                    value: 'ENG',
                    name: 'England'
                },
                {
                    value: 'FRA',
                    name: 'France'
                },
            ],
            current: 0
        }
    },
    methods: {
        radioChange: function(evt) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === evt.target.value) {
                    this.current = i;
                    break;
                }
            }
        }
    }
}
```

**note**

- If you need to adjust the radio size, you can adjust it through the scale method of CSS, such as reducing it to 70%`style="transform:scale(0.7)"`
- Radio is not a checkbox, click on an already selected radio, it will not be unchecked
