## editorContext

editor 组件对应的 editorContext 实例，可通过 [uni.createSelectorQuery](/api/ui/nodes-info?id=createselectorquery) 获取。
The editorContext instance corresponding to the editor component can be obtained by [uni.createSelectorQuery](/api/ui/nodes-info?id=createselectorquery).

```js
 onEditorReady() {
    uni.createSelectorQuery().select('#editor').context((res) => {
        this.editorCtx = res.context
    }).exec()
}
```



`editorContext` 通过 `id` 跟一个 [`<editor>`](/component/editor) 组件绑定，操作对应的 [`<editor>`](/component/editor) 组件。
`editorContext` is bound to a [`<editor>`](/component/editor) component through the `id`, and operates the corresponding [`<editor>`](/component/editor) component.

**平台差异说明**
**Platform difference description**

|App	|H5		|
|:-:	|:-:		|
|√	|2.4.5+	|


## editorContext.format(name, value)

修改样式
Modify style

| 参数 | 类型 | 说明 |
| parameter | Type | Description |
| --- | --- | --- |
|name|String|属性|
|name|String|Attributes|
|value|String|值|
|value|String|value|

**支持设置的样式列表**
**List of supported styles**

| name | value |
| --- | --- |
| bold |  |
| italic |  |
| underline |  |
| strike |  |
| ins |  |
| script | sub / super |
| header | H1 / H2 / h3 / H4 / h5 / H6 |
| align | left / center / right / justify |
| direction | rtl |
| indent | -1 / +1 |
| list | ordered / bullet / check |
| color | hex color |
| backgroundColor | hex color |
| margin/marginTop/marginBottom/marginLeft/marginRight | css style |
| padding/paddingTop/paddingBottom/paddingLeft/paddingRight | css style |
| font/fontSize/fontStyle/fontVariant/fontWeight/fontFamily | css style |
| lineHeight | css style |
| letterSpacing | css style |
| textDecoration | css style |
| textIndent | css style |

对已经应用样式的选区设置会取消样式。css style 表示 css 中规定的允许值。
Setting the selection to the already applied style will cancel the style. css style represents the allowable value specified in css.

## editorContext.insertDivider(OBJECT)

插入分割线
Insert dividing line

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no | Callback function for successful interface call |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no | Callback function for interface call failure |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.insertImage(OBJECT)

插入图片。
Insert a picture.

微信小程序平台地址为临时文件时，获取的编辑器html格式内容中 `<img>` 标签增加属性 data-local，delta 格式内容中图片 attributes 属性增加 data-local 字段，该值为传入的临时文件地址。
When the WeChat applet platform address is a temporary file, the attribute data-local is added to the `<img>` tag in the html format content of the obtained editor, and the data-local field is added to the image attributes attribute in the delta format content. This value is the temporary value passed in File address.
开发者可选择在提交阶段上传图片到服务器，获取到网络地址后进行替换。替换时对于html内容应替换掉 `<img>` 的 src 值，对于 delta 内容应替换掉 `insert { image: abc }` 值。
Developers can choose to upload pictures to the server during the submission stage, and replace them after obtaining the network address. When replacing, the src value of `<img>` should be replaced for html content, and the value of `insert {image: abc }` should be replaced for delta content.

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description  |
| --- | --- | --- | --- | --- |
| src | String |  | 是 | 图片地址 |
| src | String |  | Yes      | The map's address  |
| alt | String |  | 否 | 图像无法显示时的替代文本 |
| alt | String |  | no       | Alternative text when the image cannot be displayed          |
| width | String |  | 否 | 图片宽度（pixels/百分比），2.6.5+ 支持 |
| width | String |  | no       | Picture width (pixels/percentage), 2.6.5+ support            |
| height | String |  | 否 | 图片高度 (pixels/百分比），2.6.5+ 支持|
| height | String |  | no       | Picture height (pixels/percentage), 2.6.5+ support           |
| extClass | String |  | 否 | 添加到图片 img 标签上的类名，2.6.5+ 支持 |
| extClass | String |  | no       | The class name added to the image img tag, 2.6.5+ support    |
| data | Object |  | 否 | data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上，2.6.5+ 支持 |
| data | Object |  | no       | data is serialized as name=value; the format of name1=value2 is hung on the attribute data-custom, 2.6.5+ support |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no    | Callback function for successful interface call |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.insertText(OBJECT)

覆盖当前选区，设置一段文本
Overwrite the current selection and set a paragraph of text

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| text | String |  | 否 | 文本内容 |
| text | String |  | no | Text content |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call    |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.setContents(OBJECT)

初始化编辑器内容，hmlt和delta同时存在时仅delta生效
Initialize editor content, only delta will take effect when hmlt and delta exist at the same time 

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description   |
| --- | --- | --- | --- | --- |
| html | String |  | 否 | 带标签的HTML内容 |
| html | String |  | no       | Tagged HTML content                                          |
| delta | Object |  | 否 | 表示内容的delta对象 |
| delta | Object |  | no       | Delta object representing the content                        |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.getContents(OBJECT)

获取编辑器内容
Get editor content

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.clear(OBJECT)

清空编辑器内容
Clear editor content

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.removeFormat(OBJECT)

清除当前选区的样式
Clear the style of the current selection

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.undo(OBJECT)

撤销
Revoke

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.redo(OBJECT)

恢复
restore

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.blur(OBJECT)

编辑器失焦，同时收起键盘。
The editor is out of focus and the keyboard is retracted.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.scrollIntoView(OBJECT)

使得编辑器光标处滚动到窗口可视区域内。
Make the editor cursor scroll to the visible area of the window.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.getSelectionText(OBJECT)

获取编辑器已选区域内的纯文本内容。当编辑器失焦或未选中一段区间时，返回内容为空。
Get the plain text content in the selected area of the editor. When the editor is out of focus or a section is not selected, the returned content is empty.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attributes | Type | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明：**
**success Return parameter description：**

|参数|类型|说明|
| parameter | Type | Description           |
|:-|:-|:-|
|errMsg|String|接口调用结果|
|errMsg|String|Interface call result|
|text|String|纯文本内容|
|text|String|Plain text content|