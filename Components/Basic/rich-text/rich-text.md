#### rich-text
Rich text.

**Property description**

| Attribute name | Types of       | Defaults | Description             |
| :------------- | :------------- | :------- | :---------------------- |
| nodes          | Array / String | []       | Node list / HTML String |

**note**

- The app-nvue platform nodes property only supports the Array type

If you need to support HTML String, you need to convert HTML String to nodes array by yourself, you can use html-parser to convert.

Support default events, including: click, touchstart, touchmove, touchcancel, touchend, longpress.

**The Array type is recommended for the nodes attribute. Since the component converts the String type to the Array type, the performance will decrease.**

##### nodes

Now supports two kinds of nodes, distinguished by type, which are element node and text node. The default is element node, which is the HTML node displayed in the rich text area.

**Element node: type = node**

| Attributes | Description     | Types of | Required | Remarks                                                     |
| :--------- | :-------------- | :------- | :------- | :---------------------------------------------------------- |
| name       | Label name      | String   | Yes      | Support for partially trusted HTML nodes                    |
| attrs      | Attributes      | Object   | no       | Support some trusted attributes, follow Pascal nomenclature |
| children   | Child node list | Array    | no       | The structure is consistent with nodes                      |

**Text node: type = text**

| Attributes | Description | Types of | Required | Remarks          |
| :--------- | :---------- | :------- | :------- | :--------------- |
| text       | text        | String   | Yes      | Support entities |

##### Trusted HTML nodes and attributes

The class and style attributes are globally supported, **but the id attribute is not supported** .

| node       | Attributes                      |
| :--------- | :------------------------------ |
| a          |                                 |
| abbr       |                                 |
| b          |                                 |
| blockquote |                                 |
| br         |                                 |
| code       |                                 |
| with the   | span，width                     |
| colgroup   | span，width                     |
| dd         |                                 |
| of the     |                                 |
| div        |                                 |
| dl         |                                 |
| DT         |                                 |
| in         |                                 |
| fieldset   |                                 |
| h1         |                                 |
| h2         |                                 |
| h3         |                                 |
| h4         |                                 |
| h5         |                                 |
| h6         |                                 |
| hr         |                                 |
| i          |                                 |
| img        | alt，src，height，width         |
| ins        |                                 |
| label      |                                 |
| legend     |                                 |
| li         |                                 |
| be         | start，type                     |
| p          |                                 |
| q          |                                 |
| span       |                                 |
| strong     |                                 |
| sub        |                                 |
| sup        |                                 |
| table      | width                           |
| tbody      |                                 |
| e.g.       | colspan，height，rowspan，width |
| tfoot      |                                 |
| th         | colspan，height，rowspan，width |
| thead      |                                 |
| tr         |                                 |
| ul         |                                 |

**Example** view demo

The following sample code comes from the hello uni-app project . It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

```html
<!-- This example does not include the complete css, please refer to the above to obtain the external css, check it in the hello uni-app project -->
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				Array
				<text>\nThe nodes attribute is Array</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<view class="uni-title uni-common-mt">
				String
				<text>\nThe nodes attribute is String</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>
```
```javascript
export default {
    data() {
        return {
            nodes: [{
                name: 'div',
                attrs: {
                    class: 'div-class',
                    style: 'line-height: 60px; color: red; text-align:center;'
                },
                children: [{
                    type: 'text',
                    text: 'Hello&nbsp;uni-app!'
                }]
            }],
            strings: '<div style="text-align:center;"><img src="https://xxx.xxx.xxx.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>'
        }
    }
}
```

- **Tips**
  - The String type is not recommended for nodes, and performance will decrease.
  - The rich-text component shields the events of all nodes. Therefore, if there are links or images in the content that need to be clicked, rich-text cannot be used. At this time, you can search for the parse plugin in the uni-app plugin market . The rich-text component of app-nvue supports click on link images.
  - The attrs attribute does not support id, but supports class.
  - The name attribute is not case sensitive.
  - If an untrusted HTML node is used, the node and all its children will be removed.
  - The img tag only supports web pictures.
  - If the rich-text component is used in the custom component, only the css style of the custom component will take effect for the class in the rich-text.

