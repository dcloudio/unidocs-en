### component

渲染一个“元组件”为动态组件。依 `is` 的值，来决定哪个组件被渲染。[详见](https://cn.vuejs.org/v2/api/#component)
Render a "meta component" as a dynamic component. According to the value of `is`, which component is to be rendered is determined. [See details](https://cn.vuejs.org/v2/api/#component)

**平台差异说明**
**Platform difference description**

|App|H5	|
|:-:|:-:|
|√	|√	|


### template

`uni-app` 支持在 `template` 模板中嵌套 `<template/>` 和 `<block/>`，用来进行 [列表渲染](https://uniapp.dcloud.io/vue-basics?id=listrendering) 和 [条件渲染](https://uniapp.dcloud.io/vue-basics?id=condition)。
`uni-app` supports nesting of `<template/>` and `<block/>` in the `template` template for [list rendering](https://uniapp.dcloud.io/vue-basics? id=listrendering) and [conditional rendering](https://uniapp.dcloud.io/vue-basics?id=condition).

`<template/>` 和 `<block/>` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
`<template/>` and `<block/>` are not a component, they are just a wrapper element, do not do any rendering on the page, only accept control attributes.

`<block/>` 在不同的平台表现存在一定差异，推荐统一使用 `<template/>`。
There are certain differences in the performance of `<block/>` on different platforms. It is recommended to use `<template/>` uniformly.


**平台差异说明**
**Platform difference description**

|App|H5	|
|:-:|:-:|
|√	|√	|

**代码示例**
**Code Example**

```html
<template>
    <view>
        <template v-if="test">
            <view>test 为 true 时显示</view>
        </template>
        <template v-else>
            <view>test 为 false 时显示</view>
        </template>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				test:true
            }
        }
    }
</script> 
```


```html
<template>
    <view>
        <block v-for="(item,index) in list" :key="index">
            <view>{{item}} - {{index}}</view>
        </block>
    </view>
</template>
```




### transition

`<transition>` 元素作为单个元素/组件的过渡效果。`<transition>` 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素，也不会出现在可被检查的组件层级中。[详见](https://cn.vuejs.org/v2/api/#transition)
The `<transition>` element serves as a transition effect for a single element/component. `<transition>` will only apply the transition effect to the content it wraps, and will not render additional DOM elements, nor will it appear in the component level that can be inspected. [See details](https://cn.vuejs.org/v2/api/#transition)


**平台差异说明**
**Platform difference description**

|App|H5	|
|:-:|:-:|
|x	|√	|


### transition-group
### transition-group

`<transition-group>` 元素作为多个元素/组件的过渡效果。`<transition-group>` 渲染一个真实的 DOM 元素。默认渲染 `<span>`，可以通过 tag attribute 配置哪个元素应该被渲染。[详见](https://cn.vuejs.org/v2/api/#transition-group)
The `<transition-group>` element serves as a transition effect for multiple elements/components. `<transition-group>` renders a real DOM element. The default rendering of `<span>`, you can configure which element should be rendered through the tag attribute. [See details](https://cn.vuejs.org/v2/api/#transition-group)


**平台差异说明**
**Platform difference description**

|App|H5	|
|:-:|:-:|
|x	|√	|


### keep-alive

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。[详见](https://cn.vuejs.org/v2/api/#keep-alive)
When `<keep-alive>` wraps dynamic components, inactive component instances are cached instead of destroying them. Similar to `<transition>`, `<keep-alive>` is an abstract component: it does not render a DOM element by itself, nor does it appear in the component's parent component chain. [See details](https://cn.vuejs.org/v2/api/#keep-alive)

**平台差异说明**
**Platform difference description**

|App|H5	|
|:-:|:-:|
|x	|√	|



### slot

`<slot>` 元素作为组件模板之中的内容分发插槽。`<slot>` 元素自身将被替换。[插槽](https://uniapp.dcloud.io/vue-components?id=%e6%8f%92%e6%a7%bd)。
The `<slot>` element serves as a content distribution slot in the component template. The `<slot>` element itself will be replaced. [Slot](https://uniapp.dcloud.io/vue-components?id=%e6%8f%92%e6%a7%bd).

详细用法，请参考下面教程的链接。[通过插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)
For detailed usage, please refer to the link to the tutorial below. [Distribute content through slots](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD %E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)

**平台差异说明**
**Platform difference description**

|App|H5	|
|:-:|:-:|
|√	|√	|
