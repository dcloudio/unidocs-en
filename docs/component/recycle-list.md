#### recycle-list

app端nvue专用组件。
nvue dedicated component on app side.

`<recycle-list>` 是一个新的列表容器，具有回收和复用的能力，可以大幅优化内存占用和渲染性能。它的性能比list组件更高，但写法受限制。它除了会释放不可见区域的渲染资源，在非渲染的数据结构上也有更多优化。
`<recycle-list>` is a new list container with the ability to recycle and reuse, which can greatly optimize memory usage and rendering performance. Its performance is higher than the list component, but the writing method is restricted. In addition to releasing the rendering resources in the invisible area, it also has more optimizations in the non-rendering data structure.

此组件自HBuilderX 2.2.6+起支持。
This component is supported since HBuilderX 2.2.6+.

#### 子组件
#### Subassembly
`<recycle-list>` 只能使用 `<cell-slot>` 作为其直接子节点，使用其他节点无效。
`<recycle-list>` can only use `<cell-slot>` as its direct child node, using other nodes is invalid.

#### cell-slot
#### cell-slot
`<cell-slot>` 代表的是列表每一项的模板，它只用来描述模板的结构，并不对应实际的节点。`<cell-slot>` 的个数只表示模板的种类数，真实列表项的个数是由数据决定的。
`<cell-slot>` represents the template of each item in the list. It is only used to describe the structure of the template and does not correspond to the actual node. The number of `<cell-slot>` only represents the number of template types, and the number of actual list items is determined by the data.

**注意**
**Notice**
- `<cell-slot>` 包含自定义组件时，在 Android 上有性能问题
- There are performance issues on Android when `<cell-slot>` contains custom components
- recycle-list 是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。
- recycle-list is regional scrolling, it will not trigger page scrolling, and cannot trigger the pull-down refresh configured in pages.json, the page bottoming onReachBottomDistance, and the transparent gradient of titleNView.


属性|说明
Properties|Description
:--|:--|
case|声明了当前模板的类型，只有和数据中的类型与当前类型匹配时才会渲染，语义和编程语言里的 case 一致。所有模板中最多只会匹配到一项，按照模板的顺序从上到下匹配，一旦匹配成功就不在继续匹配下一个。
case| declares the type of the current template. It will only be rendered when the type in the data matches the current type. The semantics are consistent with the case in the programming language. At most, only one item can be matched in all the templates, which are matched from top to bottom according to the order of the templates. Once the matching is successful, it will not continue to match the next one.
default|表示当前模板为默认模板类型，不需要指定值。如果数据项没有匹配到任何 case 类型，则渲染带有 default 模板。如果存在多个 default，则只会使用第一个默认模板。
default| means that the current template is the default template type and does not need to specify a value. If the data item does not match any case type, the default template will be rendered. If there are multiple defaults, only the first default template will be used.
key|可选属性，用于指定列表数据中可以作为唯一标识的键值，可以优化渲染性能。
key|Optional attribute, used to specify the key value that can be used as a unique identifier in the list data, which can optimize the rendering performance.

- warning 属性的省略 - 如果没写 `switch`，无论有没有写 `case` 或 `default`，都只使用第一个模板 - 在写了 `switch` 的情况下，`case` 和 `default` 必须写一个，否则该模板将会被忽略
- Omission of warning attribute-If `switch` is not written, no matter whether `case` or `default` is written or not, only the first template is used-When `switch` is written, `case` and `default` You must write one, otherwise the template will be ignored


属性
Attributes

- for
在 `<recycle-list>` 添加 for 属性即可描述如何循环展开列表的数据，语法和 Vue 的 v-for 指令类似，但是它循环的是自己内部的子节点，并不是当前节点。写法：
Adding the for attribute to `<recycle-list>` can describe how to loop and unroll the data in the list. The syntax is similar to Vue's v-for command, but it loops through its own internal child nodes, not the current node. Writing method:
  - `alias in expression`
  - `(alias, index) in expression`
- switch
在 `<recycle-list>` 添加 switch 属性可以用来指定数据中用于区分子模板类型的字段名，语义和编程语言里的 switch 一致，配合 `<cell-slot>` 中的 case 和 default 属性一起使用。
Adding the switch attribute to `<recycle-list>` can be used to specify the field name used to identify the molecular template type in the data. The semantics are consistent with the switch in the programming language, and it is matched with the case and default attributes in `<cell-slot>` use together.
如果省略了 switch 属性，则只会将第一个 `<cell-slot>` 视为模板，多余的模板将会被忽略。
If the switch attribute is omitted, only the first `<cell-slot>` will be regarded as a template, and redundant templates will be ignored.

```
<recycle-list for="(item, i) in longList" switch="type">
  <cell-slot case="A">
    <text>- A {{i}} -</text>
  </cell-slot>
  <cell-slot case="B">
    <text>- B {{i}} -</text>
  </cell-slot>
</recycle-list>
```

可复用的组件
Reusable components

在 `<recycle-list>` 中使用的子组件也将被视为模板，在开发组件时给 `<template>` 标签添加 recyclable 属性，才可以用在 `<recycle-list>` 中。
The sub-components used in `<recycle-list>` will also be regarded as templates. When developing the component, add the recyclable attribute to the `<template>` tag before it can be used in `<recycle-list>`.

```
<template recyclable>
  <div>
    <text>...</text>
  </div>
</template>
<script>
  // ...
</script>
```

> 添加了 recyclable 属性并不会影响组件本身的功能，它仍然可以用在其他正常的组件里。
> The addition of the recyclable attribute does not affect the function of the component itself, it can still be used in other normal components.

注意事项
Precautions
#### 属性和文本的绑定
#### Binding of attributes and text
绑定属性或者文本时，仅支持表达式，不支持函数调用，也不支持使用 filter，可以参考 Implementation.md#支持的表达式。
When binding attributes or text, only expressions are supported, function calls are not supported, and the use of filters is not supported. You can refer to the expressions supported by Implementation.md#.

例如，下列写法不可用：
For example, the following notation is not available:

```
<div :prop="capitalize(card.title)">
  <text>{{ card.title | capitalize }}</text>
</div>
```
针对这种场景，推荐使用 computed 属性来实现。
For this kind of scenario, it is recommended to use the computed attribute.
因为模板的取值是由客户端实现的，而函数的定义在前端（filter 可以认为是在模板里调用函数的语法糖），如果每次取值都走一次通信的话，会大幅降低渲染性能。
Because the value of the template is implemented by the client, and the definition of the function is on the front end (filter can be considered as syntactic sugar for calling the function in the template), if the value is communicated once for each value, the rendering performance will be greatly reduced.

#### `<slot>`不可用
#### `<slot>` is not available
`<cell-slot>` 的功能和 `<slot>` 有部分重叠，而且更为激进，在概念上有冲突，存在很多边界情况无法完全支持。不要在 `<cell-slot>` 及其子组件里使用 `<slot>`。
The function of `<cell-slot>` partially overlaps with `<slot>`, and is more radical. There are conceptual conflicts, and there are many boundary conditions that cannot be fully supported. Do not use `<slot>` in `<cell-slot>` and its sub-components.

#### v-once 不会优化渲染性能
#### v-once will not optimize rendering performance
和前端框架中的理解不同，客户端里要实现复用的逻辑，会标记模板节点的状态，添加了 v-once 能保证节点只渲染一次，但是并不一定能优化渲染性能，反而可能会拖慢客户端复用节点时的比对效率。
Different from the understanding in the front-end framework, the logic of reuse in the client will mark the state of the template node. The addition of v-once can ensure that the node is only rendered once, but it does not necessarily optimize the rendering performance. Instead, it may be delayed. The comparison efficiency when the slow client reuses nodes.

#### 样式功能的限制
#### Restrictions on style functions
计划支持。目前版本里还不支持绑定样式类名（v-bind:class），原因和进展可以参考 #14。
Program support. The binding style class name (v-bind:class) is not yet supported in the current version. For the reason and progress, please refer to #14.

#### 双向绑定
#### Two-way binding
计划支持。v-model 还未调通，暂时不要使用。
Program support. v-model has not been adjusted yet, do not use it for now.

#### 子组件的限制
#### Restrictions of sub-components
没有 Virtual DOM！ 使用在 `<recycle-list>` 中的组件没有 Virtual DOM！与 Virtual DOM 相关的功能也不支持。在开发过程中尽量只处理数据，不要操作生成后的节点。
No Virtual DOM! The components used in `<recycle-list>` don't have Virtual DOM! Functions related to Virtual DOM are also not supported. Try to only process data during the development process, and don't manipulate the generated nodes.

下列这些属性都不再有意义，请不要使用：
The following attributes are no longer meaningful, please do not use:

- vm.$el
- vm.$refs.xxx
- vm.$vnode
- vm.#slots
- vm.#scopedSlots

`vm.$refs` 里的值可能是数组、子组件的实例、DOM 元素，在前端里比较常用，如果不支持，对 Weex 里的 `dom` 模块和 `animation` 模块的功能也有影响。
The values in `vm.$refs` may be arrays, instances of sub-components, DOM elements, which are commonly used in the front end. If they are not supported, they will also affect the functions of the `dom` module and the `animation` module in Weex.

目前正在讨论技术方案，部分接口可能会重新设计，或者是在 `vm` 上透出专为 `<recycle-list>` 设计的接口。
Technical solutions are currently being discussed, and some interfaces may be redesigned, or an interface designed for `<recycle-list>` will be revealed on `vm`.

组件的属性 目前子组件的属性不支持函数。（正在讨论实现方案）
Attributes of components Currently, the attributes of sub-components do not support functions. (The implementation plan is being discussed)

```
<sub-component :prop="item.xxx" />
```

因为子组件的属性值需要在前端和客户端之间传递，所以仅支持可序列化的值。`item.xxx` 的类型可以是对象、数组、字符串、数字、布尔值等，不支持函数。
Because the attribute values ​​of the sub-components need to be passed between the front end and the client, only serializable values ​​are supported. The type of `item.xxx` can be object, array, string, number, boolean, etc. It does not support functions.

生命周期的行为差异 由于列表的渲染存在回收机制，节点渲染与否也与用户的滚动行为有关，组件的生命周期行为会有一些不一致。
Differences in life cycle behaviors Due to the recycling mechanism in the rendering of the list, the rendering of nodes is also related to the user's scrolling behavior, and there will be some inconsistencies in the life cycle behavior of components.

可回收长列表不会立即渲染所有节点，只有即将滚动到可视区域（以及可滚动的安全区域）内时才开始渲染，组件生命周期的语义没变，但是会延迟触发。
The long list of recyclables will not render all nodes at once, and will only start rendering when it is about to scroll into the visible area (and the safe area of ​​the scrollable). The semantics of the component life cycle has not changed, but the trigger will be delayed.

假设有 100 条数据，一条数据了对应一个组件。渲染首屏时只能展示 8 条数据的节点，那就只有前 8 个组件被创建了，也只有前 8 个组件的生命周期被触发。
Suppose there are 100 pieces of data, and one piece of data corresponds to one component. When rendering the first screen, only 8 data nodes can be displayed, so only the first 8 components are created, and only the life cycle of the first 8 components is triggered.

组件的 `beforeCreate` 和 `created` 也只有在组件即将创建和创建完成时才会触发
The `beforeCreate` and `created` of the component will only be triggered when the component is about to be created and created.
同理，组件的 `beforeMount` 和 `mounted` 也只有页面真正渲染到了该组件，在即将挂载和已经挂载时才会触发
In the same way, the `beforeMount` and `mounted` of the component will only be triggered when the page is actually rendered to the component, when it is about to be mounted or has been mounted
组件的自定义事件
Custom events for components
计划支持。`vm.$on`, `vm.$once`, `vm.$emit`, `vm.$off` 等功能还未完全调通，接口可用，但是行为可能有些差异（参数丢失），暂时不要使用。
Program support. Functions such as `vm.$on`, `vm.$once`, `vm.$emit`, `vm.$off` have not been fully adjusted, the interface is available, but the behavior may be different (parameters are missing), don’t use.

#### 示例
#### Example
```
<recycle-list for="(item, i) in longList" switch="type">
  <cell-slot case="A">
    <text>- A {{i}} -</text>
  </cell-slot>
  <cell-slot case="B">
    <text>- B {{i}} -</text>
  </cell-slot>
</recycle-list>
```
如果有如下数据：
If you have the following data:

```
const longList = [
  { type: 'A' },
  { type: 'B' },
  { type: 'B' },
  { type: 'A' },
  { type: 'B' }
]
```

则会生成如下等价节点：
Will generate the following equivalent nodes:

```
<text>- A 0 -</text>
<text>- B 1 -</text>
<text>- B 2 -</text>
<text>- A 3 -</text>
<text>- B 4 -</text>
```

如果将模板合并成一个，也可以省略 `switch` 和 `case`，将例子进一步简化：
If you merge the templates into one, you can also omit `switch` and `case` to further simplify the example:

```
<recycle-list for="(item, i) in longList">
  <cell-slot>
    <text>- {{item.type}} {{i}} -</text>
  </cell-slot>
</recycle-list>
```
