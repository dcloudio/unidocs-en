#### text
文本组件。
Text component.

用于包裹文本内容。
Used to wrap text content.

**属性说明**
**Property description**

|属性名		|类型	|默认值	|说明			|平台差异说明				|
| Attribute name | Types of | Defaults | Description|Platform difference description|
|:-|:-			|:-		|:-		|:-				|
|selectable	|Boolean|false	|文本是否可选	|	App、H5	|
| selectable     | Boolean  | false    | Whether the text is optional |	App、H5	|
|space		|String	|		|显示连续空格	|App、H5	|
| space          | String   |          | Show consecutive spaces      |App、H5	|
|decode		|Boolean|false	|是否解码		|App、H5	|
| decode         | Boolean  | false    | Whether to decode            |App、H5	|

**space 值说明**
**space value description**

|值|说明|
| value | Description                          |
|:-|:-|
|ensp|中文字符空格一半大小|
| ensp  | Half size of Chinese character space |
|emsp|中文字符空格大小|
| emsp  | Chinese character space size         |
|nbsp|根据字体设置的空格大小|
| nbsp  | Space size set according to font     |

**Tips**

- `<text>` 组件内只支持嵌套 `<text>`，不支持其它组件或自定义组件，否则会引发在不同平台的渲染差异。
- `<text>`Only nesting is supported within `<text>`components, other components or custom components are not supported, otherwise it will cause rendering differences on different platforms.
- 在app-nvue下，只有`<text>`才能包裹文本内容。无法在`<view>`组件包裹文本。
- Under app-nvue, only `<text>`text content can be wrapped. Unable to `<view>`wrap text in component.
- decode 可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`。
- Decode can be parsed ` ` `<` `>` `&` `'` ` ` ` `.
- 各个操作系统的空格标准并不一致。
- The space standards of various operating systems are not consistent.
- 除了文本节点以外的其他节点都无法长按选中。
- Except for the text node, no other nodes can be selected by long pressing.
- 支持 `\n` 方式换行。
- Support `\n`way wrap.
- 如果使用 `<span>` 组件编译时会被转换为 `<text>`。
- If you are using `<span>`it will be converted to component compiler `<text>`.

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/text/text)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/text/text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the hello uni-app project . It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
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

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/245b9110-4f2f-11eb-97b7-0dc4655d6e68.png)
