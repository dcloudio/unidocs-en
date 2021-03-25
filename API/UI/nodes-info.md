## uni.createSelectorQuery()

It returns an `SelectorQuery`object instance. You may be used in this example `select`and other methods to select a node, and using `boundingClientRect`a method such as selection information to be queried.

**Tips:**

- Use `uni.createSelectorQuery()`needs in the life cycle `mounted`be called later.
- Custom components compile mode (default mode), requires the use of `selectorQuery.in`the method.

## SelectorQuery

Object to query node information

### selectorQuery.in(component)

The selector changes the selection for the custom components `component`within, a return `SelectorQuery`object instance. (Initially, the selector only selects nodes in the page range, and does not select nodes in any custom components).

**Code example**

```javascript
const query = uni.createSelectorQuery().in(this);
query.select('#id').boundingClientRect(data => {
  console.log("Get position info" + JSON.stringify(data));
  console.log("Distance of node from top" + data.top);
}).exec();
```

### selectorQuery.select(selector)

Select the current page matches a first selector `selector`node, it returns an `NodesRef`object instance, be used to obtain the node information.

**selector description:**

`selector` Similar to CSS selectors, but only supports the following syntax.

- ID selector:`#the-id`
- Class selector (multiple can be specified consecutively):`.a-class.another-class`
- Child element selector:`.the-parent > .the-child`
- Descendant selector:`.the-ancestor .the-descendant`
- Descendant selector across custom components:`.the-ancestor >>> .the-descendant`
- Union of multiple selectors:`#a-node, .some-other-nodes`

### selectorQuery.selectAll(selector)

Select the current page selector matches `selector`all nodes return an `NodesRef`object instance, be used to obtain the node information.

### selectorQuery.selectViewport()

Selection display area can be used to obtain information about the size, the position of the display area of the scroll, return an `NodesRef`object instance.

### selectorQuery.exec(callback)

Execute all requests. The request results form an array in the order of the request and are returned in the first parameter of the callback.

## NodesRef

Object used to obtain node information

### nodesRef.fields(object,callback)

Get information about the node. The first parameter is the node-related information configuration (required); the second parameter is the method's callback function, and the parameter is the specified related node information.

**object parameter description**

| Field name    | Types of        | Defaults | Required | Description                                                  |
| :------------ | :-------------- | :------- | :------- | :----------------------------------------------------------- |
| id            | Boolean         | false    | no       | Whether to return the node `id`                              |
| dataset       | Boolean         | false    | no       | Whether to return the node `dataset`                         |
| rect          | Boolean         | false    | no       | Whether to return the node layout position ( `left` `right` `top` `bottom`) |
| size          | Boolean         | false    | no       | Whether to return the node size ( `width` `height`)          |
| scrollOffset  | Boolean         | false    | no       | Returns whether the node `scrollLeft` `scrollTop`, the node must be `scroll-view`or`viewport` |
| properties    | Array＜string＞ | []       | no       | Specify a list of attribute names, and return the current attribute value of the corresponding attribute name of the node (only the regular attribute values marked in the component document can be obtained, and the attribute values of id class style and event binding are not available) |
| computedStyle | Array＜string＞ | []       | no       | Specify a list of style names, and return the current value of the style name corresponding to the node |
| context       | Boolean         | false    | no       | Whether to return the Context object corresponding to the node |

### nodesRef.boundingClientRect(callback)

Add a query request for the layout position of the node. Relative to the display area, in pixels. Its function is similar to that of DOM `getBoundingClientRect`. Return `NodesRef`corresponding `SelectorQuery`.

**callback return parameter**

| Attributes | Types of | Description                                |
| ---------- | -------- | ------------------------------------------ |
| id         | String   | ID of the node                             |
| dataset    | Object   | Node's dataset                             |
| left       | Number   | The left boundary coordinates of the node  |
| right      | Number   | The right boundary coordinates of the node |
| top        | Number   | The upper boundary coordinates of the node |
| bottom     | Number   | The lower boundary coordinates of the node |
| width      | Number   | Node width                                 |
| height     | Number   | Node height                                |

### nodesRef.scrollOffset(callback)

Add the scroll position query request of the node. In pixels. Node must be `scroll-view`or `viewport`. Return `NodesRef`corresponding `SelectorQuery`.

**callback return parameter**

| Attributes | Types of | Description                                |
| ---------- | -------- | ------------------------------------------ |
| id         | String   | ID of the node                             |
| dataset    | Object   | Node's dataset                             |
| scrollLeft | Number   | The horizontal scroll position of the node |
| scrollTop  | Number   | Vertical scroll position of the node       |

### [nodesRef.context(callback)

Add the Context object query request of the node. Support  VideoContext,CanvasContext,MapContext,acquisition.

**callback return parameter**

| Attributes | Types of | Description                              |
| ---------- | -------- | ---------------------------------------- |
| context    | Object   | Context object corresponding to the node |



### Code example

```javascript
uni.createSelectorQuery().selectViewport().scrollOffset(res => {
  console.log("vertical scroll position" + res.scrollTop);
}).exec();

let view = uni.createSelectorQuery().in(this).select(".test");

view.fields({
  size: true,
  scrollOffset: true
}, data => {
  console.log("Get position info" + JSON.stringify(data));
  console.log("The width of node" + data.width);
}).exec();

view.boundingClientRect(data => {
  console.log("Get position info" + JSON.stringify(data));
  console.log("Distance of node from top" + data.top);
}).exec();
```

