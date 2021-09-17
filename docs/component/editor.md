#### editor

富文本编辑器，可以对图片、文字格式进行编辑和混排。
Rich text editor, you can edit and mix pictures and text formats.

在web开发时，可以使用`contenteditable`来实现内容编辑。但这是一个dom API，在非H5平台无法使用。于是uni-app的App-vue提供了`editor`组件来实现这个功能，并且在uni-app的H5平台也提供了兼容。从技术本质来讲，这个组件仍然运行在视图层webview中，利用的也是浏览器的`contenteditable`功能。
In web development, you can use `contenteditable` to achieve content editing. But this is a dom API and cannot be used on non-H5 platforms. So the App-vue of uni-app provides the `editor` component to achieve this function, and it also provides compatibility on the H5 platform of uni-app. Technically speaking, this component is still running in the view layer webview, using the browser's `contenteditable` function.

编辑器导出内容支持带标签的 `html`和纯文本的 `text`，编辑器内部采用 `delta` 格式进行存储。
The export content of the editor supports tagged `html` and plain text `text`, and the editor uses the `delta` format for storage.

通过`setContents`接口设置内容时，解析插入的 `html` 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入。
When setting content through the `setContents` interface, parsing the inserted `html` may cause parsing errors due to some illegal tags. It is recommended that developers insert it through 'delta' when using in-app.

富文本组件内部引入了一些基本的样式使得内容可以正确的展示，开发时可以进行覆盖。需要注意的是，在其它组件或环境中使用富文本组件导出的html时，需要额外引入[这段样式](https://github.com/dcloudio/uni-app/blob/master/src/core/view/components/editor/editor.css)，并维护`<ql-container><ql-editor></ql-editor></ql-container>`的结构，参考：[使用 editor 组件导出的 html](https://ask.dcloud.net.cn/article/36205)。
Some basic styles are introduced into the rich text component so that the content can be displayed correctly and can be overwritten during development. It should be noted that when using the html exported by the rich text component in other components or environments, you need to additionally introduce [this style](https://github.com/dcloudio/uni-app/blob/master/src/core /view/components/editor/editor.css), and maintain the structure of `<ql-container><ql-editor></ql-editor></ql-container>`, reference: [html exported using editor component ](https://ask.dcloud.net.cn/article/36205).

图片控件仅初始化时设置有效。
The picture control is only valid when it is initialized.

相关 api：[editorContext](/api/media/editor-context)
Related api: [editorContext](/api/media/editor-context)

**平台差异说明**
**Platform difference description**

|App				|H5		|
|:-:				|:-:		|
|2.0+，app-vue	|2.4.5+	|


editor组件目前只有H5、App的vue页面支持，其他端平台自身未提供editor组件，只能使用web-view加载web页面，也可搜索[插件市场](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91) 获取简单的markdown富文本编辑器
The editor component is currently only supported by the vue page of H5 and App. The other end platforms do not provide the editor component. You can only use the web-view to load the web page. You can also search for [plugin market](https://ext.dcloud.net.cn) /search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91) Get a simple markdown rich text editor
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes       | Types of    | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| read-only | boolean | false | 否 | 设置编辑器为只读 |
| read-only        | boolean     | false    | no       | Set the editor to read-only                                  |
| placeholder | string |  | 否 | 提示信息 |
| placeholder      | string      |          | no       | Prompt information                                           |
| show-img-size | boolean | false | 否 | 点击图片时显示图片大小控件 |
| show-img-size    | boolean     | false    | no       | Show picture size control when click on picture              |
| show-img-toolbar | boolean | false | 否 | 点击图片时显示工具栏控件 |
| show-img-toolbar | boolean     | false    | no       | Show toolbar controls when you click on the picture          |
| show-img-resize | boolean | false | 否 | 点击图片时显示修改尺寸控件 |
| show-img-resize  | boolean     | false    | no       | Display the size modification control when clicking on the picture |
| @ready | eventhandle |  | 否 | 编辑器初始化完成时触发 |
| @ready           | eventhandle |          | no       | Triggered when the editor is initialized                     |
| @focus | eventhandle |  | 否 | 编辑器聚焦时触发，event.detail = {html, text, delta} |
| @focus           | eventhandle |          | no       | Triggered when the editor is focused, event.detail = {html, text, delta} |
| @blur | eventhandle |  | 否 | 编辑器失去焦点时触发，detail = {html, text, delta} |
| @blur            | eventhandle |          | no       | Triggered when the editor loses focus, detail = {html, text, delta} |
| @input | eventhandle |  | 否 | 编辑器内容改变时触发，detail = {html, text, delta} |
| @input           | eventhandle |          | no       | Triggered when the editor content changes, detail = {html, text, delta} |
| @statuschange | eventhandle |  | 否 | 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 |
| @statuschange    | eventhandle |          | no       | Triggered when the style in the editor is changed through the Context method, and returns the style set in the selection |

编辑器内支持部分 HTML 标签和内联样式，不支持**class**和**id**
The editor supports some HTML tags and inline styles, but does not support **class** and **id**

#### 支持的标签
#### Supported tags

#### [Supported tags](https://uniapp.dcloud.io/component/editor?id=支持的标签)
#### [Supported tags](https://uniapp.dcloud.io/component/editor?id=supported tags)

不满足的标签会被忽略，`<div>`会被转行为`<p>`储存。
Unsatisfied tags will be ignored and `<div>`will be transferred to `<p>`store.

| 类型 | 节点 |
| Types of             | node                                                         |
| --- | --- |
| 行内元素 | `<span> <strong> <b> <ins> <em> <i> <u> <a> <del> <s> <sub> <sup> <img>` |
| Elements in the line | `<span> <strong> <b> <ins> <em> <i> <u> <a> <del> <s> <sub> <sup> <img>` |
| 块级元素 | `<p> <h1> <h2> <h3> <h4> <h5> <h6> <hr> <ol> <ul> <li>` |
| Block element        | `<p> <h1> <h2> <h3> <h4> <h5> <h6> <hr> <ol> <ul> <li>`      |

#### 支持的内联样式
#### Supported inline styles
#### [Supported inline styles](https://uniapp.dcloud.io/component/editor?id=支持的内联样式)
#### [Supported inline styles](https://uniapp.dcloud.io/component/editor?id=Supported inline styles)

内联样式仅能设置在行内元素或块级元素上，不能同时设置。例如 font-size` 归类为行内元素属性，在 p 标签上设置是无效的。
Inline styles can only be set on inline elements or block-level elements, not both. For example, font-size` is classified as an inline element attribute, and setting it on the p tag is invalid.

| 类型 | 样式 |
| Types of     | style                                                        |
| --- | --- |
| 块级样式 | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` `padding-right` `padding-bottom` `line-height` `text-indent` |
| Block style  | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` `padding-right` `padding-bottom` `line-height` `text-indent` |
| 行内样式 | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` |
| Inline style | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` |

**注意事项**
**Precautions**

- 插入的 html 中事件绑定会被移除
- Event bindings in the inserted html will be removed
- formats 中的 color 属性会统一以 hex 格式返回
- The color attribute in formats will be returned in hex format
- 粘贴时仅纯文本内容会被拷贝进编辑器
- Only the plain text content will be copied into the editor when pasting
- 插入 html 到编辑器内时，编辑器会删除一些不必要的标签，以保证内容的统一。例如`<p><span>xxx</span></p>`会改写为`<p>xxx</p>`
- When inserting html into the editor, the editor will delete some unnecessary tags to ensure the unity of the content. For example, it `<p><span>xxx</span></p>`will be rewritten as`<p>xxx</p>`
- 编辑器聚焦时页面会被上推，系统行为以保证编辑区可见
- The page will be pushed up when the editor is focused, the system acts to ensure that the editing area is visible
- H5端会动态引入依赖 [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js)、[image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js)，依赖从 [unpkg.com](https://unpkg.com) 加载，如过依赖加载较慢，可以下载下来放在自己的服务器或 CDN 服务商，然后在 [自定义模板](/collocation/manifest?id=h5-template) head 内引入。
- H5 end will depend on the introduction of dynamic [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js) , [Image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js) , dependent from [unpkg.com](https://unpkg.com/) load, such as over-reliance slow to load, you can download it on your own server or CDN service provider, then [self](https://uniapp.dcloud.io/collocation/manifest?id=h5-template) Import in the [definition template](https://uniapp.dcloud.io/collocation/manifest?id=h5-template) head.
- 不能直接插入视频，编辑时可以采用视频封面占位，并在图片属性中保存视频信息，预览时再还原为视频。
- You can’t directly insert the video. You can use the video cover to occupy the space when editing, and save the video information in the image properties, and then restore it to the video when previewing.


**示例代码** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
**Sample Code** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)

```html
<template>
	<view class="container">
		<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
		<button type="warn" @tap="undo">revoke</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				placeholder: 'Typing...'
			}
		},
		methods: {
			onEditorReady() {
			    // #ifdef MP-BAIDU
			    this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
			    // #endif
			    
			    // #ifdef APP-PLUS || H5 ||MP-WEIXIN
			    uni.createSelectorQuery().select('#editor').context((res) => {
			      this.editorCtx = res.context
			    }).exec()
			    // #endif
			},
			undo() {
				this.editorCtx.undo()
			}
		}
	}
</script>

<style>
	.container {
		padding: 10px;
	}

	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	button {
		margin-top: 10px;
	}
</style>
```
