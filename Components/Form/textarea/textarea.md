#### textarea

Multi-line input box.

**Property description**

| Attribute name    | Types of    | Defaults | Description                                                  |
| :---------------- | :---------- | :------- | :----------------------------------------------------------- |
| value             | String      |          | The content of the input box                                 |
| placeholder       | String      |          | Placeholder when the input box is empty                      |
| placeholder-style | String      |          | Specify the style of the placeholder                         |
| disabled          | Boolean     | false    | Whether to disable                                           |
| maxlength         | Number      | 140      | Maximum input length, when set to -1, the maximum length is not limited |
| focus             | Boolean     | false    | Get focus                                                    |
| auto-height       | Boolean     | false    | Whether to increase automatically, style.height does not take effect when auto-height is set |
| confirm-type      | String      | done     | Set the text of the button at the bottom right corner of the keyboard |
| selection-start   | Number      | -1       | The starting position of the cursor, valid during auto focus, need to be used with selection-end |
| selection-end     | Number      | -1       | The end position of the cursor, valid during auto focus, need to be used with selection-start |
| auto-blur         | boolean     | false    | Whether the keyboard automatically loses focus when the keyboard is retracted |
| @input            | EventHandle |          | When keyboard input, the input event is triggered, event.detail = {value, cursor}, the return value of the @input processing function will not be reflected on the textarea |

**confirm-type valid value**

| value  | Description                                    |
| :----- | :--------------------------------------------- |
| send   | The button in the lower right corner is "Send" |
| search | The bottom right button is "Search"            |
| next   | The button in the lower right corner is "Next" |
| go     | The bottom right button is "Go"                |
| done   | The button in the lower right corner is "Done" |

**Example** 

```html
<template>
	<view>
		<view class="uni-title uni-common-pl">The input area is highly adaptive, no scroll bar appears</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">The placeholder font is red textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="The placeholder font is red"/>
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
        bindTextAreaBlur: function (e) {
            console.log(e.detail.value)
        }
    }
}
```
