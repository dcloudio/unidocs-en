# uni.createSelectorQuery()

返回一个 `SelectorQuery` 对象实例。可以在这个实例上使用 `select` 等方法选择节点，并使用 `boundingClientRect` 等方法选择需要查询的信息。

|元服务|
|:-:|
|√|

<!-- UNIAPPAPIJSON.createSelectorQuery.compatibility -->

**Tips:**

- 使用 `uni.createSelectorQuery()` 需要在生命周期 `mounted` 后进行调用。
- 默认需要使用到 `selectorQuery.in` 方法。

## SelectorQuery

查询节点信息的对象
Object to query node information

### selectorQuery.in(component)

将选择器的选取范围更改为自定义组件 `component` 内，返回一个 `SelectorQuery` 对象实例。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。

**代码示例**

::: preview

> 选项式 API

```javascript
const query = uni.createSelectorQuery().in(this);
query
  .select("#id")
  .boundingClientRect((data) => {
    console.log("得到布局位置信息" + JSON.stringify(data));
    console.log("节点离页面顶部的距离为" + data.top);
  })
  .exec();
```

> 组合式 API

```javascript
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const query = uni.createSelectorQuery().in(instance.proxy);
query
  .select("#id")
  .boundingClientRect((data) => {
    console.log("得到布局位置信息" + JSON.stringify(data));
    console.log("节点离页面顶部的距离为" + data.top);
  })
  .exec();
```
:::


**注意**
**Notice**

- 支付宝小程序不支持 in(component)，使用无效果

### selectorQuery.select(selector)

在当前页面下选择第一个匹配选择器 `selector` 的节点，返回一个 `NodesRef` 对象实例，可以用于获取节点信息。

**selector 说明：**
**selector description:**

`selector` 类似于 CSS 的选择器，但仅支持下列语法。

- ID 选择器：`#the-id`
- class 选择器（可以连续指定多个）：`.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant` (H5 暂不支持)
- 多选择器的并集：`#a-node, .some-other-nodes`

### selectorQuery.selectAll(selector)

在当前页面下选择匹配选择器 `selector` 的所有节点，返回一个 `NodesRef` 对象实例，可以用于获取节点信息。

### selectorQuery.selectViewport()

选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个 `NodesRef` 对象实例。

### selectorQuery.exec(callback)

执行所有的请求。请求结果按请求次序构成数组，在 callback 的第一个参数中返回。

## NodesRef

用于获取节点信息的对象
Object used to obtain node information

### nodesRef.fields(object,callback)

获取节点的相关信息。第一个参数是节点相关信息配置（必选）；第二参数是方法的回调函数，参数是指定的相关节点信息。
Obtain information about the nodes. The first parameter is node related information configuration (required); The second parameter is the callback function of the method, and the parameter is the specified related node information.

**object 参数说明**
**object parameter description**

|字段名|类型|默认值|必填|说明|平台差异说明|
| Field name| Type| Defaults| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|id|Boolean|false|否|是否返回节点 ``id``||
| id| Boolean| false| No| Whether to return the node `id`| |
|dataset|Boolean|false|否|是否返回节点 ``dataset``| App、微信小程序、H5 |
|dataset|Boolean|false|No|return node ``dataset``| App, WeChat applet, H5 |
|rect|Boolean|false|否|是否返回节点布局位置（``left`` ``right`` ``top`` ``bottom``）||
| rect| Boolean| false| No| Whether to return the node layout location (`left` `right` `top` `bottom`)| |
|size|Boolean|false|否|是否返回节点尺寸（``width`` ``height``）||
| size| Boolean| false| No| Whether to return the node size (`width` `height`)| |
|scrollOffset|Boolean|false|否|是否返回节点的 ``scrollLeft`` ``scrollTop``，节点必须是 ``scroll-view`` 或者 ``viewport``||
| scrollOffset| Boolean| false| No| Whether to return `scrollLeft` `scrollTop` of the node, and the node must be `scroll-view` or `viewport`| |
| properties | Array＜string＞ | [] | 否 | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取） | 仅 App 和微信小程序支持 |
| properties | Array<string> | [] | No | Specify a list of property names, and return the current property value of the property name corresponding to the node (only the general property values marked in the component document, id class style and event binding property values can be obtained Not available) | App and WeChat applet only support |
| computedStyle | Array＜string＞ | [] | 否 | 指定样式名列表，返回节点对应样式名的当前值 | 仅 App 和微信小程序支持 |
| computedStyle | Array<string> | [] | No | Specify a list of style names and return the current value of the style name corresponding to the node | Only supported by App and WeChat applet |
| context | Boolean | false | 否 | 是否返回节点对应的 Context 对象 | 仅 App 和微信小程序支持 |
| node | Boolean | false | 否 | 是否返回节点对应的 Node 实例，当前仅支持 canvas 实例的获取 | H5, 微信小程序, 抖音小程序, 快手小程序 |

### nodesRef.boundingClientRect(callback)

添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。

**callback 返回参数**
**callback return parameter**

| 属性    | 类型   | 说明             |
| ------- | ------ | ---------------- |
| id      | String | 节点的 ID        |
| dataset | Object | 节点的 dataset   |
| left    | Number | 节点的左边界坐标 |
| right   | Number | 节点的右边界坐标 |
| top     | Number | 节点的上边界坐标 |
| bottom  | Number | 节点的下边界坐标 |
| width   | Number | 节点的宽度       |
| height  | Number | 节点的高度       |

### nodesRef.scrollOffset(callback)

添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`。返回 `NodesRef` 对应的 `SelectorQuery`。

**callback 返回参数**
**callback return parameter**

| 属性       | 类型   | 说明               |
| ---------- | ------ | ------------------ |
| id         | String | 节点的 ID          |
| dataset    | Object | 节点的 dataset     |
| scrollLeft | Number | 节点的水平滚动位置 |
| scrollTop  | Number | 节点的竖直滚动位置 |

### nodesRef.context(callback)

添加节点的 Context 对象查询请求。支持 [`VideoContext`](/api/media/video-context)、[`CanvasContext`](/api/canvas/CanvasContext)、和 [`MapContext`](/api/location/map) 等的获取。
Add a query request for the Context object of the node. Support the access of [`VideoContext`](/api/media/video-context), [`CanvasContext`](/api/canvas/CanvasContext), and [`MapContext`](/api/location/map).

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|HBuilderX 2.4.7+|√|x|x|x|√|√|√|

**callback 返回参数**
**callback return parameter**

| 属性    | 类型   | 说明                    |
| ------- | ------ | ----------------------- |
| context | Object | 节点对应的 Context 对象 |
| context| Object| Context object corresponding to the node|

### nodesRef.node(callback)

获取 `Node` 节点实例。目前支持 `Canvas` 的获取。
Get the `Node` node instance. Currently supports fetching of `Canvas`.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|x|x|x|√|√|

**callback 返回参数**
**callback return parameter**

| 属性 | 类型   | 说明                 |
| ---- | ------ | -------------------- |
| node | Object | 节点对应的 Node 实例 |
| node | Object | Node instance corresponding to the node |

**注意**
**Notice**

- 目前仅能用于`canvas`
- Currently only works with `canvas`
- `canvas`需设置`type="webgl"`才能正常使用
- `canvas` needs to be set with `type="webgl"` for normal use

### 代码示例
### Code example

```javascript
uni
  .createSelectorQuery()
  .selectViewport()
  .scrollOffset((res) => {
    console.log("竖直滚动位置" + res.scrollTop);
  })
  .exec();

let view = uni.createSelectorQuery().in(this).select(".test");

view
  .fields(
    {
      size: true,
      scrollOffset: true,
    },
    (data) => {
      console.log("得到节点信息" + JSON.stringify(data));
      console.log("节点的宽为" + data.width);
    }
  )
  .exec();

view
  .boundingClientRect((data) => {
    console.log("得到布局位置信息" + JSON.stringify(data));
    console.log("节点离页面顶部的距离为" + data.top);
  })
  .exec();
```

**注意**

- nvue 暂不支持 uni.createSelectorQuery，暂时使用下面的方案
- nvue temporarily does not support uni.createSelectorQuery, and the following plan is used temporarily.

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
  // #ifdef APP-NVUE
  const dom = weex.requireModule("dom");
  // #endif

  export default {
    data() {
      return {
        size: {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      };
    },
    onReady() {
      setTimeout(() => {
        const result = dom.getComponentRect(this.$refs.box, (option) => {
          console.log("getComponentRect:", option);
          this.size = option.size;
        });
        console.log("return value:", result);
        console.log("viewport:", dom.getComponentRect("viewport"));
      }, 100);
    },
  };
</script>
```

<!-- UNIAPPAPIJSON.createSelectorQuery.returnValue -->
