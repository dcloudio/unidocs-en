#### input

Input box.

**Property description**

| Attribute name    | Types of    | Defaults            | Description                                                  |
| :---------------- | :---------- | :------------------ | :----------------------------------------------------------- |
| value             | String      |                     | The initial content of the input box                         |
| type              | String      | text                | input type                                                   |
| password          | Boolean     | false               | Is it a password type                                        |
| placeholder       | String      |                     | Placeholder when the input box is empty                      |
| placeholder-style | String      |                     | Specify the style of the placeholder                         |
| placeholder-class | String      | "input-placeholder" | Specify the style class of the placeholder. Note that when scoped is written in the style of the page or component, you need to write /deep/ before the class name |
| disabled          | Boolean     | false               | Whether to disable                                           |
| maxlength         | Number      | 140                 | Maximum input length, when set to -1, the maximum length is not limited |
| cursor            | Number      |                     | Specify the cursor position when focus                       |
| selection-start   | Number      | -1                  | The starting position of the cursor. It is valid when automatically gathering. It needs to be used with selection-end |
| selection-end     | Number      | -1                  | The end position of the cursor. It is effective when automatically gathering. It needs to be used with selection-start |
| @blur             | EventHandle |                     | Triggered when the input box loses focus, event.detail = {value: value} |
| @confirm          | EventHandle |                     | Triggered when the Finish button is clicked, event.detail = {value: value} |



**type valid value**

| value | Description         | Platform difference description |
| :---- | :------------------ | :------------------------------ |
| text  | Text input keyboard |                                 |

**Precautions**

- If the input component does not want to pop up the soft keyboard, it can be set to disable



**Input sample** 

```html
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">Auto-focusable input</view>
				<input class="uni-input" focus placeholder="Get focus automatically" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">The button at the bottom right corner of the keyboard is displayed as search</view>
				<input class="uni-input" confirm-type="search" placeholder="The button at the bottom right corner of the keyboard is displayed as search" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Input to control the maximum input length</view>
				<input class="uni-input" maxlength="10" placeholder="Maximum input length is 10" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">Get input value in real time：{{inputValue}}</view>
				<input class="uni-input" @input="onKeyInput" placeholder="Input synchronization to view" />
			</view>
		</view>
	</view>
</template>
```

```javascript
export default {
    data() {
        return {
            title: 'input',
            focus: false,
            inputValue: '',
            changeValue: ''
        }
    },
    methods: {
        onKeyInput: function(event) {
            this.inputValue = event.target.value
        },
        replaceInput: function(event) {
            var value = event.target.value;
            if (value === '11') {
                this.changeValue = '2';
            }
        },
        hideKeyboard: function(event) {
            if (event.target.value === '123') {
                uni.hideKeyboard();
            }
        }
    }
}
```

