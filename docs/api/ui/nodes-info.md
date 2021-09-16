## uni.createSelectorQuery()

返回一个 ``SelectorQuery`` 对象实例。可以在这个实例上使用 ``select`` 等方法选择节点，并使用 ``boundingClientRect`` 等方法选择需要查询的信息。 
It returns an `SelectorQuery`object instance. You may be used in this example `select`and other methods to select a node, and using `boundingClientRect`a method such as selection information to be queried.

**Tips:** 

* 使用 `uni.createSelectorQuery()` 需要在生命周期 `mounted` 后进行调用。
* Use `uni.createSelectorQuery()`needs in the life cycle `mounted`be called later.
* 自定义组件编译模式（默认模式），需要使用到 `selectorQuery.in` 方法。
* Custom components compile mode (default mode), requires the use of `selectorQuery.in`the method.

## SelectorQuery

查询节点信息的对象
Object to query node information

### selectorQuery.in(component)

将选择器的选取范围更改为自定义组件 ``component`` 内，返回一个 ``SelectorQuery`` 对象实例。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。
The selector changes the selection for the custom components `component`within, a return `SelectorQuery`object instance. (Initially, the selector only selects nodes in the page range, and does not select nodes in any custom components).

**代码示例**
**Code example**

```javascript
const query = uni.createSelectorQuery().in(this);
query.select('#id').boundingClientRect(data => {
  console.log("得到布局位置信息" + JSON.stringify(data));
  console.log("Get layout location information" + JSON.stringify(data));
  console.log("节点离页面顶部的距离为" + data.top);
  console.log("The distance between the node and the top of the page is" + data.top);
}).exec();
```


### selectorQuery.select(selector)

在当前页面下选择第一个匹配选择器 ``selector`` 的节点，返回一个 ``NodesRef`` 对象实例，可以用于获取节点信息。
Select the current page matches a first selector `selector`node, it returns an `NodesRef`object instance, be used to obtain the node information.

**selector 说明：**
**selector description:**

``selector`` 类似于 CSS 的选择器，但仅支持下列语法。
`selector` Similar to CSS selectors, but only supports the following syntax.
- ID选择器：``#the-id``
- ID selector:`#the-id`
- class选择器（可以连续指定多个）：``.a-class.another-class``
- Class selector (multiple can be specified consecutively):`.a-class.another-class`
- 子元素选择器：``.the-parent > .the-child``
- Child element selector:`.the-parent > .the-child`
- 后代选择器：``.the-ancestor .the-descendant``
- Descendant selector:`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：``.the-ancestor >>> .the-descendant``
- Descendant selector across custom components:`.the-ancestor >>> .the-descendant`
- 多选择器的并集：``#a-node, .some-other-nodes``
- Union of multiple selectors:`#a-node, .some-other-nodes`

### selectorQuery.selectAll(selector)

在当前页面下选择匹配选择器 ``selector`` 的所有节点，返回一个 ``NodesRef`` 对象实例，可以用于获取节点信息。
Select the current page selector matches `selector`all nodes return an `NodesRef`object instance, be used to obtain the node information.

### selectorQuery.selectViewport()

选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个 ``NodesRef`` 对象实例。
Selection display area can be used to obtain information about the size, the position of the display area of the scroll, return an `NodesRef`object instance.


### selectorQuery.exec(callback)

执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回。
Execute all requests. The request results form an array in the order of the request and are returned in the first parameter of the callback.

## NodesRef

用于获取节点信息的对象
Object used to obtain node information

### nodesRef.fields(object,callback)

获取节点的相关信息。第一个参数是节点相关信息配置（必选）；第二参数是方法的回调函数，参数是指定的相关节点信息。
Get information about the node. The first parameter is the node-related information configuration (required); the second parameter is the method's callback function, and the parameter is the specified related node information.

**object 参数说明**
**object parameter description**

|字段名|类型|默认值|必填|说明|平台差异说明|
| Field name    | Types of  | Defaults | Required | Description |平台差异说明|
|:-|:-|:-|:-|:-|:-|
|id|Boolean|false|否|是否返回节点 ``id``||
| id            | Boolean         | false    | no       | Whether to return the node `id`  ||
|dataset|Boolean|false|否|是否返回节点 ``dataset``| App、H5 |
| dataset       | Boolean | false    | no       | Whether to return the node `dataset` | App、H5|
|rect|Boolean|false|否|是否返回节点布局位置（``left`` ``right`` ``top`` ``bottom``）||
| rect          | Boolean         | false    | no       | Whether to return the node layout position ( `left` `right` `top` `bottom`) ||
|size|Boolean|false|否|是否返回节点尺寸（``width`` ``height``）||
| size          | Boolean         | false    | no       | Whether to return the node size ( `width` `height`)    ||
|scrollOffset|Boolean|false|否|是否返回节点的 ``scrollLeft`` ``scrollTop``，节点必须是 ``scroll-view`` 或者 ``viewport``||
| scrollOffset  | Boolean         | false    | no       | Returns whether the node `scrollLeft` `scrollTop`, the node must be `scroll-view`or`viewport` ||
| properties | Array＜string＞ | [] | 否 | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取） | 仅 App支持 |
| properties    | Array＜string＞ | []       | no       | Specify a list of attribute names, and return the current attribute value of the corresponding attribute name of the node (only the regular attribute values marked in the component document can be obtained, and the attribute values of id class style and event binding are not available) |仅 App 支持|
| computedStyle | Array＜string＞ | [] | 否 | 指定样式名列表，返回节点对应样式名的当前值 | 仅 App 支持 |
| computedStyle | Array＜string＞ | []       | no       | Specify a list of style names, and return the current value of the style name corresponding to the node |仅 App 支持|
| context | Boolean | false | 否 | 是否返回节点对应的 Context 对象 | 仅 App支持 |
| context       | Boolean         | false    | no       | Whether to return the Context object corresponding to the node |仅 App支持|

### nodesRef.boundingClientRect(callback)

添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 ``getBoundingClientRect``。返回 ``NodesRef`` 对应的 ``SelectorQuery``。
Add a query request for the layout position of the node. Relative to the display area, in pixels. Its function is similar to that of DOM `getBoundingClientRect`. Return `NodesRef`corresponding `SelectorQuery`.

**callback 返回参数**
**callback return parameter**

|属性	|类型		|说明		|
| Attributes | Types of | Description                                |
|---|---|---|
|id	|String	|节点的 ID|
| id         | String   | ID of the node                             |
|dataset	|Object	|节点的 dataset|
| dataset    | Object   | Node's dataset                             |
|left	|Number	|节点的左边界坐标|
| left       | Number   | The left boundary coordinates of the node  |
|right	|Number	|节点的右边界坐标|
| right      | Number   | The right boundary coordinates of the node |
|top	|Number	|节点的上边界坐标|
| top        | Number   | The upper boundary coordinates of the node |
|bottom	|Number	|节点的下边界坐标|
| bottom     | Number   | The lower boundary coordinates of the node |
|width	|Number	|节点的宽度|
| width      | Number   | Node width                                 |
|height	|Number	|节点的高度|
| height     | Number   | Node height                                |

### nodesRef.scrollOffset(callback)

添加节点的滚动位置查询请求。以像素为单位。节点必须是 ``scroll-view`` 或者 ``viewport``。返回 ``NodesRef`` 对应的 ``SelectorQuery``。
Add the scroll position query request of the node. In pixels. Node must be `scroll-view`or `viewport`. Return `NodesRef`corresponding `SelectorQuery`.

**callback 返回参数**
**callback return parameter**

|属性	|类型				|说明		|
| Attributes | Types of | Description                                |
|---|---|---|
|id	|String			|节点的 ID|	
| id         | String   | ID of the node                             |
|dataset	|Object			|节点的 dataset|
| dataset    | Object   | Node's dataset                             |
|scrollLeft	|Number			|节点的水平滚动位置|
| scrollLeft | Number   | The horizontal scroll position of the node |
|scrollTop	|Number	|节点的竖直滚动位置	|
| scrollTop  | Number   | Vertical scroll position of the node       |

### nodesRef.context(callback)

添加节点的 Context 对象查询请求。支持 [`VideoContext`](/api/media/video-context)、[`CanvasContext`](/api/canvas/CanvasContext)、和 [`MapContext`](/api/location/map) 等的获取。
Add the Context object query request of the node. Support  [`VideoContext`](/api/media/video-context),[`CanvasContext`](/api/canvas/CanvasContext), [`MapContext`](/api/location/map) ,acquisition.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|HBuilderX 2.4.7+|

**callback 返回参数**
**callback return parameter**

| 属性 | 类型 | 说明 |
| Attributes | Types of | Description                              |
| --- | --- | --- |
| context | Object | 节点对应的 Context 对象 |
| context    | Object   | Context object corresponding to the node |


### 代码示例
### Code example

```javascript
uni.createSelectorQuery().selectViewport().scrollOffset(res => {
  console.log("竖直滚动位置" + res.scrollTop);
  console.log("Vertical scroll position" + res.scrollTop);
}).exec();

let view = uni.createSelectorQuery().in(this).select(".test");

view.fields({
  size: true,
  scrollOffset: true
}, data => {
  console.log("得到节点信息" + JSON.stringify(data));
  console.log("Get node information" + JSON.stringify(data));
  console.log("节点的宽为" + data.width);
  console.log("The width of the node is" + data.width);
}).exec();

view.boundingClientRect(data => {
  console.log("得到布局位置信息" + JSON.stringify(data));
  console.log("Get layout location information" + JSON.stringify(data));
  console.log("节点离页面顶部的距离为" + data.top);
  console.log("The distance between the node and the top of the page is" + data.top);
}).exec();
```

**注意**
**Notice**
- nvue 暂不支持 uni.createSelectorQuery，暂时使用下面的方案
- nvue does not support uni.createSelectorQuery temporarily, use the following scheme temporarily
```html
<template>
  <view class="wrapper">
    <view ref="box" class="box">
      <text class="info">Width: {{size.width}}</text>
      <text class="info">Height: {{size.height}}</text>
      <text class="info">Top: {{size.top}}</text>
      <text class="info">Bottom: {{size.bottom}}</text>
      <text class="info">Left: {{size.left}}</text>
      <text class="info">Right: {{size.right}}</text>
    </view>
  </view>
</template>

<script>
  // 注意平台差异
  // Pay attention to platform differences
  // #ifdef APP-NVUE
  const dom = weex.requireModule('dom')
  // #endif

  export default {
    data () {
      return {
        size: {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    },
    onReady () {
      const result = dom.getComponentRect(this.$refs.box, option => {
        console.log('getComponentRect:', option)
        this.size = option.size
      })
      console.log('return value:', result)
      console.log('viewport:', dom.getComponentRect('viewport'))
    }
  }
</script>
```
