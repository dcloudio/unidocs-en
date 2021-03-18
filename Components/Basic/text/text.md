#### text
Text component.

Used to wrap text content.

**Property description**

| Attribute name | Types of | Defaults | Description                  |
| :------------- | :------- | :------- | :--------------------------- |
| selectable     | Boolean  | false    | Whether the text is optional |
| space          | String   |          | Show consecutive spaces      |
| decode         | Boolean  | false    | Whether to decode            |

**space value description**

| value | Description                          |
| :---- | :----------------------------------- |
| ensp  | Half size of Chinese character space |
| emsp  | Chinese character space size         |
| nbsp  | Space size set according to font     |

**Tips**

- `<text>`Only nesting is supported within `<text>`components, other components or custom components are not supported, otherwise it will cause rendering differences on different platforms.
- Under app-nvue, only `<text>`text content can be wrapped. Unable to `<view>`wrap text in component.
- Decode can be parsed ` ` `<` `>` `&` `'` ` ` ` `.
- The space standards of various operating systems are not consistent.
- Except for the text node, no other nodes can be selected by long pressing.
- Support `\n`way wrap.
- If you are using `<span>`it will be converted to component compiler `<text>`.

**Example** view demo

The following sample code comes from the hello uni-app project . It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

```html
<!-- This example does not include the complete css, please refer to the above to obtain the external css, check it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>{{text}}</text>
			</view>
			<view class="uni-btn-v">
				<button type="primary" :disabled="!canAdd" @click="add">add line</button>
				<button type="warn" :disabled="!canRemove" @click="remove">remove line</button>
			</view>
		</view>
	</view>
</template>
```
```javascript
export default {
    data() {
        return {
            texts: [
                'HBuilder, the IDE chosen by 5 million developers',
                 'MUI, a lightweight and beautiful front-end open source framework',
                 'wap2app, the app that quickly converts native experience to station M',
                 '5+Runtime, add native wings to HTML5',
                 'HBuilderX, lightweight, fast, geek editor',
                 'uni-app, the ultimate cross-platform solution',
                 'HBuilder, the IDE chosen by 5 million developers',
                 'MUI, a lightweight and beautiful front-end open source framework',
                 'wap2app, the app that quickly converts native experience to station M',
                 '5+Runtime, add native wings to HTML5',
                 'HBuilderX, lightweight, fast, geek editor',
                 'uni-app, the ultimate cross-platform solution',
                 '......'
            ],
            text: '',
            canAdd: true,
            canRemove: false,
            extraLine: []
        }
    },
    methods: {
        add: function(e) {
            this.extraLine.push(this.texts[this.extraLine.length % 12]);
            this.text = this.extraLine.join('\n');
            this.canAdd = this.extraLine.length < 12;
            this.canRemove = this.extraLine.length > 0;
        },
        remove: function(e) {
            if (this.extraLine.length > 0) {
                this.extraLine.pop();
                this.text = this.extraLine.join('\n');
                this.canAdd = this.extraLine.length < 12;
                this.canRemove = this.extraLine.length > 0;
            }
        }
    }
}

```
