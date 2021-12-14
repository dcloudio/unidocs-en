#### text
文本组件。
Text components.

用于包裹文本内容。
Used to wrap text content.

**属性说明**
**Attribute description**

|属性名		|类型	|默认值	|说明			|平台差异说明				|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-			|:-		|:-		|:-				|
|selectable	|Boolean|false	|文本是否可选	|	App、H5	|
| selectable| Boolean| false| Whether text is optional?| App, H5|
|space		|String	|		|显示连续空格	|App、H5	|
| space| String| | Display continuous whitespace| App, H5|
|decode		|Boolean|false	|是否解码		|App、H5	|
| decode| Boolean| false| Decode or not| App, H5|

**space 值说明**
**space value description**

|值|说明|
| Value| Instruction|
|:-|:-|
|ensp|中文字符空格一半大小|
| ensp| Half the size of Chinese character spaces|
|emsp|中文字符空格大小|
| emsp| Size of Chinese character spaces|
|nbsp|根据字体设置的空格大小|
| nbsp| Space size set according to font|

**Tips**

- `<text>` 组件内只支持嵌套 `<text>`，不支持其它组件或自定义组件，否则会引发在不同平台的渲染差异。
- `<text>` only supports nested `<text>` components, and does not support other components or custom components, or otherwise rendering differences in different platforms will be caused.
- 在app-nvue下，只有`<text>`才能包裹文本内容。无法在`<view>`组件包裹文本。
- Under app-nvue, only `<text>` can wrap the text content. Unable to wrap text in the `<view>` component.
- decode 可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`。
- `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;` can be parsed by decode.
- 各个操作系统的空格标准并不一致。
- The space standard of each operating system is not consistent.
- 除了文本节点以外的其他节点都无法长按选中。
- All nodes except the text node can not be selected by long press.
- 支持 `\n` 方式换行。
- Line feed using the `\n` method is supported.
- 如果使用 `<span>` 组件编译时会被转换为 `<text>`。
- If you use the `<span>` component to compile, it will be converted to `<text>`.

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/text/text)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/text/text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
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
                'HBuilder, IDE chosen by 5 million developers',
                'MUI, a lightweight and beautiful front-end open-source framework',
                'wap2App, the App for M station to quickly convert native experience',
                '5+Runtime, insert native wings for HTML5',
                'HBuilderX, a lightweight and fast geek editor',
                'uni-app, ultimate cross-platform solution',
                'HBuilder, IDE chosen by 5 million developers',
                'MUI, a lightweight and beautiful front-end open-source framework',
                'wap2App, the App for M station to quickly convert native experience',
                '5+Runtime, insert native wings for HTML5',
                'HBuilderX, a lightweight and fast geek editor',
                'uni-app, ultimate cross-platform solution',
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
