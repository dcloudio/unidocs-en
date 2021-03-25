#### picker

The scroll selector that pops up from the bottom. Supports five types of selectors, distinguished by mode, they are ordinary selector, multi-column selector, time selector, date selector, province/city selector, and the default is normal selector.

#### Normal selector

```
mode = selector
```

**Property description**

| Attribute name | Types of                | Defaults | Description                                                  |
| :------------- | :---------------------- | :------- | :----------------------------------------------------------- |
| range          | Array / Array＜Object＞ | []       | When mode is selector or multiSelector, range is valid       |
| range-key      | String                  |          | When range is an Array<Object>, use range-key to specify the value of key in Object as the selector display content |
| value          | Number                  | 0        | The value of value indicates which number in the range is selected (the subscript starts from 0) |
| selector-type  | String                  | auto     | UI type for large screens, support picker, select, auto, by default it is displayed in picker style on iPad and select style on PC |
| @change        | EventHandle             |          | The change event is triggered when the value changes, event.detail = {value: value} |
| disabled       | Boolean                 | false    | Whether to disable                                           |
| @cancel        | EventHandle             |          | Triggered when you cancel the selection or click the mask layer to retract the picker |

#### Multiple column selector

```
mode = multiSelector
```

**Property description**

| Attribute name | Types of                                                | Defaults | Description                                                  |
| :------------- | :------------------------------------------------------ | :------- | :----------------------------------------------------------- |
| range          | Two-dimensional Array / Two-dimensional Array＜Object＞ | []       | When mode is selector or multiSelector, range is valid. Two-dimensional array, the length indicates how many columns, each item of the array indicates the data of each column, such as [["a","b"], ["c","d"]] |
| range-key      | String                                                  |          | When range is a two-dimensional Array<Object>, use range-key to specify the value of key in Object as the selector display content |
| value          | Array                                                   | []       | The value of each item indicates the number of the corresponding items in the range is selected (the subscript starts from 0) |
| @change        | EventHandle                                             |          | The change event is triggered when the value changes, event.detail = {value: value} |
| @columnchange  | EventHandle                                             |          | The columnchange event is triggered when the value of a column changes, event.detail = {column: column, value: value}, the value of column indicates which column is changed (subscript starts from 0), and the value of value indicates the subscript of the changed value |
| @cancel        | EventHandle                                             |          | Triggered when deselected                                    |
| disabled       | Boolean                                                 | false    | Whether to disable                                           |

#### Time picker

```
mode = time
```

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  |
| :------------- | :---------- | :------- | :----------------------------------------------------------- |
| value          | String      |          | Indicates the selected time, the format is "hh:mm"           |
| @change        | EventHandle |          | The change event is triggered when the value changes, event.detail = {value: value} |
| @cancel        | EventHandle |          | Triggered when deselected                                    |
| disabled       | Boolean     | false    | Whether to disable                                           |

#### Date picker

```
mode = date
```

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  |
| :------------- | :---------- | :------- | :----------------------------------------------------------- |
| value          | String      | 0        | Indicates the selected date, the format is "YYYY-MM-DD"      |
| fields         | String      | day      | Valid values year, month, day, indicate the granularity of the selector, the default is day, the system UI is used when this item is not configured on the App side |
| @change        | EventHandle |          | The change event is triggered when the value changes, event.detail = {value: value} |
| @cancel        | EventHandle |          | Triggered when deselected                                    |
| disabled       | Boolean     | false    | Whether to disable                                           |

**valid fields**

| value | Description                   |
| :---- | :---------------------------- |
| year  | Selector granularity is year  |
| month | Selector granularity is month |
| day   | Selector granularity is days  |

#### Province/city selector

```
mode = region
```

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  |
| :------------- | :---------- | :------- | :----------------------------------------------------------- |
| value          | Array       | []       | Indicates the selected province, municipality, and the first value of each column is selected by default |
| custom-item    | String      |          | You can add a custom item to the top of each column          |
| @change        | EventHandle |          | The change event is triggered when the value changes, event.detail = {value: value} |
| @cancel        | EventHandle |          | Triggered when deselected                                    |
| disabled       | Boolean     | false    | Whether to disable                                           |

**Example**

```html
<!-- This example does not include the complete css, please refer to the above to obtain the external css, check it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-title uni-common-pl">Region selector</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					Current selection
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">Time selector</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					Current selection
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">Date picker</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					Current selection
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>
```
```javascript
export default {
    data() {
        const currentDate = this.getDate({
            format: true
        })
        return {
            title: 'picker',
            array: ['China', 'United States', 'Brazil', 'Japan'],
            index: 0,
            date: currentDate,
            time: '12:01'
        }
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
    methods: {
        bindPickerChange: function(e) {
            console.log('Picker sends the selection change, and the carry value is', e.target.value)
            this.index = e.target.value
        },
        bindDateChange: function(e) {
            this.date = e.target.value
        },
        bindTimeChange: function(e) {
            this.time = e.target.value
        },
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        }
    }
}
```
