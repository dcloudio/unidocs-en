

#### editor

Rich text editor, you can edit and mix pictures and text formats.

In web development, you can use it `contenteditable`to implement content editing. But this is a dom API and cannot be used on non-H5 platforms. So the WeChat applet and Uni-app's App-vue provide `editor`components to achieve this function, and compatibility is also provided on the uni-app's H5 platform. Technically speaking, this component is still running in the view layer webview, which also uses the `contenteditable`functions of the browser .

Editor to export content support with labels `html`and plain text `text`, editor uses an internal `delta`format for storage.

By `setContents`the time interface settings content, analytical insertion `html`may be due to some illegal labels fail to parse, be inserted through the delta It is recommended that developers use within the application.

| Attributes       | Types of    | Defaults | Required | Description                                                  |
| ---------------- | ----------- | -------- | -------- | ------------------------------------------------------------ |
| read-only        | boolean     | false    | no       | Set the editor to read-only                                  |
| placeholder      | string      |          | no       | Prompt information                                           |
| show-img-size    | boolean     | false    | no       | Show picture size control when click on picture              |
| show-img-toolbar | boolean     | false    | no       | Show toolbar controls when you click on the picture          |
| show-img-resize  | boolean     | false    | no       | Display the size modification control when clicking on the picture |
| @ready           | eventhandle |          | no       | Triggered when the editor is initialized                     |
| @focus           | eventhandle |          | no       | Triggered when the editor is focused, event.detail = {html, text, delta} |
| @blur            | eventhandle |          | no       | Triggered when the editor loses focus, detail = {html, text, delta} |
| @input           | eventhandle |          | no       | Triggered when the editor content changes, detail = {html, text, delta} |
| @statuschange    | eventhandle |          | no       | Triggered when the style in the editor is changed through the Context method, and returns the style set in the selection |

The editor supports some HTML tags and inline styles, but does not support **class** and **id**

#### [Supported tags](https://uniapp.dcloud.io/component/editor?id=支持的标签)

Unsatisfied tags will be ignored and `<div>`will be transferred to `<p>`store.

| Types of             | node                                                         |
| -------------------- | ------------------------------------------------------------ |
| Elements in the line | `<span> <strong> <b> <ins> <em> <i> <u> <a> <del> <s> <sub> <sup> <img>` |
| Block element        | `<p> <h1> <h2> <h3> <h4> <h5> <h6> <hr> <ol> <ul> <li>`      |

#### [Supported inline styles](https://uniapp.dcloud.io/component/editor?id=支持的内连样式)

Inline styles can only be set on inline elements or block-level elements, not both. For example, font-size` is classified as an inline element attribute, and setting it on the p tag is invalid.

| Types of     | style                                                        |
| ------------ | ------------------------------------------------------------ |
| Block style  | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` `padding-right` `padding-bottom` `line-height` `text-indent` |
| Inline style | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` |

**Precautions**

- Event bindings in the inserted html will be removed
- The color attribute in formats will be returned in hex format
- Only the plain text content will be copied into the editor when pasting
- When inserting html into the editor, the editor will delete some unnecessary tags to ensure the unity of the content. For example, it `<p><span>xxx</span></p>`will be rewritten as`<p>xxx</p>`
- The page will be pushed up when the editor is focused, the system acts to ensure that the editing area is visible
- H5 end will depend on the introduction of dynamic [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js) , [Image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js) , dependent from [unpkg.com](https://unpkg.com/) load, such as over-reliance slow to load, you can download it on your own server or CDN service provider, then [self](https://uniapp.dcloud.io/collocation/manifest?id=h5-template) Import in the [definition template](https://uniapp.dcloud.io/collocation/manifest?id=h5-template) head.
- You can’t directly insert the video. You can use the video cover to occupy the space when editing, and save the video information in the image properties, and then restore it to the video when previewing.

**Sample Code**

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
