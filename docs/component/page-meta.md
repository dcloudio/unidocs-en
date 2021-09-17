#### page-meta

页面属性配置节点，用于指定页面的一些属性、监听页面事件。可部分替代pages.json的功能。
The page property configuration node is used to specify some properties of the page and monitor page events. It can partially replace the functions of pages.json.

它是一个特殊的标签，有点类似html里的header标签。页面的背景色、原生导航栏的参数，都可以写在`page-meta`里。HBuilderX 2.6.3+ 支持了这个组件，并且全平台都实现了。
It is a special tag, similar to the header tag in html. The background color of the page and the parameters of the native navigation bar can be written in `page-meta`. HBuilderX 2.6.3+ supports this component, and it is implemented on all platforms.

从某种意义讲，`page-meta`对pages.json有一定替代作用，可以让页面的配置和页面内容代码写在一个vue文件中。它还可以实现通过变量绑定来控制页面配置。但它的性能不如pages.json的配置，在新页面加载时，渲染速度还是pages.json方式的写法更快。
In a sense, `page-meta` has a certain substitution effect on pages.json, allowing page configuration and page content code to be written in a vue file. It can also control page configuration through variable binding. But its performance is not as good as the pages.json configuration. When a new page is loaded, the rendering speed is still faster in pages.json.

`page-meta`只能是页面内的第一个节点。可以配合 [navigation-bar](https://uniapp.dcloud.io/component/navigation-bar) 组件一同使用。
`page-meta` can only be the first node in the page. It can be used with the [navigation-bar](https://uniapp.dcloud.io/component/navigation-bar) component.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√ 2.6.3+|2.6.3+|

从HBuilderX 2.6.3起，编译到所有平台均支持`page-meta`。
Starting from HBuilderX 2.6.3, all platforms support `page-meta`.

**属性说明**
**Attribute description**

|属性|类型|默认值|必填|说明|版本要求
|Attribute|Type|Default Value|Required|Description|Version Requirements
|:-|:-|:-|:-|:-|:-|
|page-style|string|""|否|页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点|H5 2.6.7、App 2.6.7|
|page-style|string|""|No|Page root node style, the page root node is the ancestor node of all page nodes, which is equivalent to the body node in HTML|H5 2.6.7, App 2.6.7|
|root-font-size|string|""|否|页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小|H5 2.6.7、App 2.6.7|
|root-font-size|string|""|No|The root font size of the page, all rem units in the page, will use this font size as a reference value, that is, 1rem is equal to this font size|H5 2.6.7, App 2.6 .7|
|enable-pull-down-refresh|Boolean|""|否|是否开启下拉刷新|App 2.6.7|
|enable-pull-down-refresh|Boolean|""|No|Whether to enable pull-down refresh|App 2.6.7|

**注意**
**Notice**
- `<page-meta>` 目前支持的配置仅为上表所列，并不支持所有 page.json 的配置
- `<page-meta>` currently supports only the configurations listed in the table above, and does not support all page.json configurations
- `<page-meta>` 与 pages.json 的设置相冲突时，会覆盖 page.json 的配置
- When `<page-meta>` conflicts with the settings of pages.json, the settings of page.json will be overwritten

#### 示例代码
#### Sample code

```
<template>
  <page-meta
    page-style="color: green"
    root-font-size="16px"
  >
    <navigation-bar
      :title="nbTitle"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
    />
  </page-meta>
  <view class="content">
  </view>
</template>

<script>
  export default {
    data() {
      return {
        nbTitle: '标题',
        nbLoading: false,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>
```
