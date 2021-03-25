## editorContext

 The editorContext instance corresponding to the editor component can be obtained through uni.createSelectorQuery

```js
 onEditorReady() {
    uni.createSelectorQuery().select('#editor').context((res) => {
        this.editorCtx = res.context
    }).exec()
}
```



```js
 onEditorReady() {
    this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
  }
```


1. References dynamic libraries in the project, in the `manifest.json`middle to add a`dynamicLib`

```js
  "mp-baidu" : {
    "usingComponents" : true,
    "appid" : "",
    "setting" : {
      "urlCheck" : true
    },
    "dynamicLib": {
      "editorLib": {
        "provider": "swan-editor"
      }
    }
  },

```

2. In each using a rich text editor component to a page, the configuration `pages.json`file as follows:

``` js 
{
	"pages": [ 
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app",
				"usingSwanComponents": {
					"editor": "dynamicLib://editorLib/editor"
				}
			}
		}
	]
}

```




## editorContext.format(name, value)

 Modify style 

| parameter | Types of | Description |
| --- | --- | --- |
|name|String|Attributes|
|value|String|value|

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

Setting the selection to the already applied style will cancel the style. css style represents the allowable value specified in css.

## [editorContext.insertDivider(OBJECT)](https://uniapp.dcloud.io/api/media/editor-context?id=editorcontextinsertdivider)

Insert dividing line

**OBJECT parameter description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no | Callback function for successful interface call |
| fail | Function |  | no | Callback function for interface call failure |
| complete | Function |  | no | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.insertImage(OBJECT)

Insert a picture.

 When the micro-channel applet internet address as a temporary file, html format of the content editor acquired  <img>  tag attributes to increase data-local, delta format image content attributes attribute data-local field increases, the value of the incoming address the temporary file. Developers can choose to upload pictures to the server during the submission stage, and replace them after obtaining the network address. For html content should be replaced when replacing <img> the src value, should replace the content for delta `insert { image: abc }`values.

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| src | String |  | Yes      | The map's address                                            |
| alt | String |  | no       | Alternative text when the image cannot be displayed          |
| width | String |  | no       | Picture width (pixels/percentage), 2.6.5+ support            |
| height | String |  | no       | Picture height (pixels/percentage), 2.6.5+ support           |
| extClass | String |  | no       | The class name added to the image img tag, 2.6.5+ support    |
| data | Object |  | no       | data is serialized as name=value; the format of name1=value2 is hung on the attribute data-custom, 2.6.5+ support |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.insertText(OBJECT)

Overwrite the current selection and set a paragraph of text

**OBJECT parameter description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| text | String |  | no | Text content |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.setContents(OBJECT)

 Initialize editor content, only delta will take effect when hmlt and delta exist at the same time 

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| html | String |  | no       | Tagged HTML content                                          |
| delta | Object |  | no       | Delta object representing the content                        |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.getContents(OBJECT)

Get editor content

**OBJECT parameter description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.clear(OBJECT)

Clear editor content

**OBJECT parameter description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.removeFormat(OBJECT)

Clear the style of the current selection

**OBJECT parameter description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.undo(OBJECT)

 Revoke 

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.redo(OBJECT)

restore

**OBJECT parameter description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.blur(OBJECT)

The editor is out of focus and the keyboard is retracted.

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.scrollIntoView(OBJECT)

Make the editor cursor scroll to the visible area of the window.

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

## editorContext.getSelectionText(OBJECT)

Get the plain text content in the selected area of the editor. When the editor is out of focus or a section is not selected, the returned content is empty.

 **OBJECT parameter description** 

| Attributes | Types of | Defaults | Required | Description                                                  |
| --- | --- | --- | --- | --- |
| success | Function |  | no       | Callback function for successful interface call              |
| fail | Function |  | no       | Callback function for interface call failure                 |
| complete | Function |  | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **success return parameter description:** 

| parameter | Types of | Description           |
|:-|:-|:-|
|errMsg|String|Interface call result|
|text|String|Plain text content|