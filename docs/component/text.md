## text组件

文本组件。用于包裹文本内容。


<!-- UNIAPPCOMJSON.text.compatibility -->

在app-uvue和app-nvue中，文本只能写在text中，而不能写在view的text区域。

虽然app-uvue中写在view的text区域的文字，也会被编译器自动包裹一层text组件，看起来也可以使用。但这样会造成无法修改该text文字的样式，详见uvue的[样式不继承](https://doc.dcloud.net.cn/uni-app-x/css/#stylenoextends)章节

## 属性说明

|属性名		|类型	|默认值	|说明			|平台差异说明				|
|Property Name |Type |Default Value |Description |Platform Difference Description |
|:-|:-			|:-		|:-		|:-				|
|selectable	|Boolean|false	|文本是否可选	|		|
| selectable | Boolean | false | Whether the text is selectable | |
|user-select	|Boolean|false	|文本是否可选	| 微信小程序 |
| user-select | Boolean| false |Whether the text is optional | WeChat MiniApp |
|space		|String	|		|显示连续空格	|钉钉小程序不支持	|
| space | String | |Display continuous spaces |DingTalk MiniApp not support |
|decode		|Boolean|false	|是否解码		|百度、钉钉小程序不支持	|
| decode | Boolean| false |Whether to decode |Baidu and DingTalk MiniApp do not support |


<!-- UNIAPPCOMJSON.text.attribute -->

**space 值说明**
**space value description**

|值|说明|
|value|description|
|:-|:-|
|ensp|中文字符空格一半大小|
| ensp|Chinese character space half size|
|emsp|中文字符空格大小|
| emsp|Space size of Chinese characters|
|nbsp|根据字体设置的空格大小|
|nbsp|Space size set according to font|

## 子组件

text组件在web浏览器渲染（含浏览器、小程序webview渲染模式、app-vue）和uvue中，可以并只能嵌套text组件。

在nvue中，text组件不能嵌套。

## Tips

- 支持 `\n` 方式换行。
- 在app-nvue下，只有`<text>`才能包裹文本内容。无法在`<view>`组件包裹文本。
- Under app-nvue, only `<text>` can wrap text content. Unable to wrap text in `<view>` component.
- decode 可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`。
- decode can parse `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`.
- 各个操作系统的空格标准并不一致。
- Space standards are not consistent across operating systems.
- 除了文本节点以外的其他节点都无法长按选中。
- 如果使用 `<span>` 组件编译时会被转换为 `<text>`。
- nvue 样式 `word-wrap` 在 Android 平台暂不支持

## 示例

[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/text/text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and select the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/text/text
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not contain the complete css, please refer to the above to get the external link css, check it in the hello uni-app project -->
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
> Script
```vue
<script>
export default {
    data() {
        return {
            texts: [
                'HBuilder，900万开发者选择的IDE',
                'MUI，轻巧、漂亮的前端开源框架',
                'wap2app，M站快速转换原生体验的App',
                '5+Runtime，为HTML5插上原生的翅膀',
                'HBuilderX，轻巧、极速，极客编辑器',
                'uni-app，终极跨平台方案',
                'HBuilder，900万开发者选择的IDE',
                'MUI，轻巧、漂亮的前端开源框架',
                'wap2app，M站快速转换原生体验的App',
                '5+Runtime，为HTML5插上原生的翅膀',
                'HBuilderX，轻巧、极速，极客编辑器',
                'uni-app，终极跨平台方案',
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
</script>
```
:::

<!-- UNIAPPCOMJSON.text.reference -->
