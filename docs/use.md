## 此文档已迁移
## This document has been migrated

**新文档链接：[Vue教程](/vue-basics)**
**New document link: [Vue Tutorial](/vue-basics)**

**************************************

``uni-app`` 在发布到H5时支持所有vue的语法；发布到App时，由于平台限制，无法实现全部vue语法，但``uni-app``仍是是对vue语法支持度最高的跨端框架。本文将详细讲解差异。
``uni-app'' supports all vue syntax when it is published to H5; when it is published to App, due to platform restrictions, it is impossible to implement all vue syntax, but ``uni-app'' still has the highest support for vue syntax Cross-end framework. This article will explain the differences in detail.
相比Web平台， ``Vue.js`` 在 ``uni-app`` 中使用差异主要集中在两个方面：
Compared with the Web platform, the differences in the use of ``Vue.js`` in ``uni-app`` are mainly concentrated in two aspects:
- 新增：uni-app除了支持Vue实例的生命周期，还支持应用启动、页面显示等生命周期
- New addition: In addition to supporting the life cycle of Vue instances, uni-app also supports life cycles such as application startup and page display
- 受限：相比web平台，在App端部分功能受限，具体见下。
- Restricted: Compared with the web platform, some functions on the App side are limited, see below for details.
- v3版本App端可以使用更多的vue特性，[详见](https://ask.dcloud.net.cn/article/36599)
- The v3 version of the App can use more vue features, [see details](https://ask.dcloud.net.cn/article/36599)


## 生命周期
## The life cycle
``uni-app`` 完整支持 ``Vue`` 实例的生命周期，同时还新增 [应用生命周期](/collocation/frame/lifecycle?id=应用生命周期) 及 [页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。
``uni-app`` fully supports the life cycle of ``Vue`` instances, and also adds [application life cycle](/collocation/frame/lifecycle?id=application life cycle) and [page life cycle](/ collocation/frame/lifecycle?id=page lifecycle).
详见Vue官方文档：[生命周期钩子](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)。
For details, please refer to the official Vue document: [Lifecycle Hook](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91 %BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90).

## 模板语法
## Template syntax

``uni-app`` 完整支持 ``Vue`` 模板语法。
``uni-app`` fully supports the ``Vue`` template syntax.

详见Vue官方文档：[模板语法](https://cn.vuejs.org/v2/guide/syntax.html)。
For details, please refer to the official Vue document: [Template Syntax](https://cn.vuejs.org/v2/guide/syntax.html).

**注意**
**Notice**
如果使用**老版**的非自定义组件模式，即manifest中`"usingComponents":false`，部分模版语法不支持，但此模式已于2019年11月起下线。
If you use the **old version** non-custom component mode, that is, `"usingComponents":false` in the manifest, some template syntax is not supported, but this mode has been offline since November 2019.

## data 属性
## data attributes
``data`` 必须声明为返回一个初始数据对象的函数（注意函数内返回的数据对象不要直接引用函数外的对象）；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据。
``data`` must be declared as a function that returns an initial data object (note that the data object returned in the function should not directly refer to objects outside the function); otherwise, when the page is closed, the data will not be automatically destroyed. When the page is opened again, it will Display the last data.


```javascript
//正确用法，使用函数返回对象
//Correct usage, use functions to return objects
data() {
	return {
		title: 'Hello'
	}
}

//错误写法，会导致再次打开页面时，显示上次数据
//Wrong writing will cause the last data to be displayed when the page is opened again
data: {
	title: 'Hello'
}

//错误写法，同样会导致多个组件实例对象数据相互影响
//Wrong writing will also cause multiple component instance object data to affect each other
const obj = {
  title: 'Hello'
}
data() {
	return {
    obj
  }
}
```

## 全局变量
## Global Variables

实现全局变量的方式需要遵循 Vue 单文件模式的开发规范。详细参考：[uni-app全局变量的几种实现方式](https://ask.dcloud.net.cn/article/35021)
The way to implement global variables needs to follow the development specifications of Vue single file mode. Detailed reference: [Several ways to implement uni-app global variables](https://ask.dcloud.net.cn/article/35021)

## Class 与 Style 绑定
## Class and Style binding

为节约性能，我们将 ``Class`` 与 ``Style`` 的表达式通过 ``compiler`` 硬编码到 ``uni-app`` 中，支持语法和转换效果如下：
In order to save performance, we hard-code the expressions of ``Class`` and ``Style`` into ``uni-app`` through ``compiler``. The supported syntax and conversion effects are as follows:

class 支持的语法:
Grammar supported by class:

```html
<view :class="{ active: isActive }">111</view>
<view class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">222</view>
<view class="static" :class="[activeClass, errorClass]">333</view>
<view class="static" v-bind:class="[isActive ? activeClass : '', errorClass]">444</view>
<view class="static" v-bind:class="[{ active: isActive }, errorClass]">555</view>
```

style 支持的语法:
Style supported syntax:

```html
<view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">666</view>
<view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">777</view>
```

非H5端不支持 [Vue官方文档：Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html) 中的 ``classObject`` 和 ``styleObject`` 语法。
Non-H5 end does not support ``classObject`` and ``styleObject'' in [Vue official document: Class and Style binding](https://cn.vuejs.org/v2/guide/class-and-style.html) ``Grammar.

不支持示例：
Unsupported example:

```html
<template>
	<view :class="[activeClass]" :style="[baseStyles,overridingStyles]"></view>
</template>

<script>
	export default {
		data() {
			return {
                activeClass: {
                    'active': true,
                    'text-danger': false
                },
                baseStyles: {
                    color: 'green',
                    fontSize: '30px'
                },
                overridingStyles: {
                    'font-weight': 'bold'
                }
			}
		}
	}
</script>
```

**注意：以``:style=""``这样的方式设置px像素值，其值为实际像素，不会被编译器转换。**
**Note: Set the px pixel value in such a way as ``:style=""``. The value is the actual pixel and will not be converted by the compiler. **

此外还可以用 ``computed`` 方法生成 ``class`` 或者 ``style`` 字符串，插入到页面中，举例说明：
In addition, you can also use the ``computed`` method to generate ``class`` or ``style`` strings and insert them into the page, for example:

```html
<template>
    <!-- 支持 -->
	<!-- Support -->
    <view class="container" :class="computedClassStr"></view>
    <view class="container" :class="{active: isActive}"></view>

    <!-- 不支持 -->
	<!-- Not supported -->
    <view class="container" :class="computedClassObject"></view>
</template>
<script>
    export default {
        data () {
            return {
                isActive: true
            }
        },
        computed: {
            computedClassStr () {
                return this.isActive ? 'active' : ''
            },
            computedClassObject () {
                return { active: this.isActive }
            }
        }
    }
</script>
```

**用在组件上**
**Used on components**

非H5端（非自定义组件编译模式）暂不支持在自定义组件上使用 ``Class`` 与 ``Style`` 绑定
The non-H5 end (non-custom component compilation mode) does not currently support the use of ``Class`` and ``Style`` binding on custom components

## 计算属性
## Calculated attributes

完整支持 [Vue官方文档：计算属性](https://cn.vuejs.org/v2/guide/computed.html)。
Fully supports [Vue official document: calculated properties](https://cn.vuejs.org/v2/guide/computed.html).

## 条件渲染
## Conditional rendering

完整支持 [Vue官方文档：条件渲染](https://cn.vuejs.org/v2/guide/conditional.html)
Full support [Vue official document: Conditional rendering](https://cn.vuejs.org/v2/guide/conditional.html)

## 列表渲染
## List rendering

完整vue列表渲染 [Vue官方文档：列表渲染](https://cn.vuejs.org/v2/guide/list.html)
Complete vue list rendering [Vue official document: list rendering](https://cn.vuejs.org/v2/guide/list.html)

### key
 
如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 ``<input>`` 中的输入内容，``<switch>`` 的选中状态），需要使用 ``:key`` 来指定列表中项目的唯一的标识符。
If the position of the items in the list changes dynamically or new items are added to the list, and you want the items in the list to maintain their own characteristics and status (such as the input content in ``<input>``, ``<switch> `` selected state), you need to use ``:key`` to specify the unique identifier of the item in the list.


``:key`` 的值以两种形式提供
The value of ``:key`` is provided in two forms

- 使用 ``v-for`` 循环 ``array`` 中 ``item`` 的某个 ``property``，该 ``property`` 的值需要是列表中唯一的字符串或数字，且不能动态改变。
- Use ``v-for`` to loop a certain ``property`` of ``item`` in ``array``, the value of this ``property`` needs to be the only string or number in the list, and It cannot be changed dynamically.
- 使用 ``v-for`` 循环中 ``item`` 本身，这时需要 ``item`` 本身是一个唯一的字符串或者数字
- Use ``item`` itself in the ``v-for`` loop. In this case, ``item`` itself needs to be a unique string or number
当数据改变触发渲染层重新渲染的时候，会校正带有 ``key`` 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。
When the data change triggers the rendering layer to re-render, the components with ``key'' will be corrected, and the framework will ensure that they are reordered, not recreated, to ensure that the components maintain their own state and improve the rendering time of the list s efficiency.
**如不提供 ``:key``，会报一个 ``warning``， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。**
**If ``:key`` is not provided, a ``warning`` will be reported. If you know that the list is static or you don't need to pay attention to its order, you can choose to ignore it. **
**示例：**
**Example:**

```html
<template>
	<view>
		<!-- array 中 item 的某个 property -->
		<!-- A property of item in the array -->
		<view v-for="(item,index) in objectArray" :key="item.id">
			{{index +':'+ item.name}}
		</view>
		<!-- item 本身是一个唯一的字符串或者数字时，可以使用 item 本身 -->
		<!-- When item itself is a unique string or number, you can use item itself -->
		<view v-for="(item,index) in stringArray" :key="item">
			{{index +':'+ item}}
		</view>
	</view>
</template>
<script>
export default {
  data () {
    return {
      objectArray:[{
		  id:0,
		  name:'li ming'
	  },{
		  id:1,
		  name:'wang peng'
	  }],
	  stringArray:['a','b','c']
    }
  }
}

</script>
```

### 注意事项
### Precautions

* 在H5平台 使用 v-for 循环整数时和其他平台存在差异，如 `v-for="(item, index) in 10"` 中，在H5平台 item 从 1 开始，其他平台 item 从 0 开始，可使用第二个参数 index 来保持一致。
* There is a difference between using v-for loop integers on the H5 platform and other platforms. For example, in `v-for="(item, index) in 10"`, the item on the H5 platform starts from 1, and the item on other platforms starts from 0. The second parameter index can be used to maintain consistency.
* 在非H5平台 循环对象时不支持第三个参数，如 `v-for="(value, name, index) in object"` 中，index 参数是不支持的。
* The third parameter is not supported when looping objects on non-H5 platforms. For example, in `v-for="(value, name, index) in object"`, the index parameter is not supported.

## 事件处理器
## Event handler

几乎全支持 [Vue官方文档：事件处理器](https://cn.vuejs.org/v2/guide/events.html)
Almost all support [Vue official document: event handler](https://cn.vuejs.org/v2/guide/events.html)


```javascript
// 事件映射表，左侧为 WEB 事件，右侧为 ``uni-app`` 对应事件
// Event mapping table, the left side is WEB events, the right side is ``uni-app`` corresponding events
{
    click: 'tap',
    touchstart: 'touchstart',
    touchmove: 'touchmove',
    touchcancel: 'touchcancel',
    touchend: 'touchend',
    tap: 'tap',
    longtap: 'longtap', 
	//推荐使用longpress代替
	//Recommended to use longpress instead
    input: 'input',
    change: 'change',
    submit: 'submit',
    blur: 'blur',
    focus: 'focus',
    reset: 'reset',
    confirm: 'confirm',
    columnchange: 'columnchange',
    linechange: 'linechange',
    error: 'error',
    scrolltoupper: 'scrolltoupper',
    scrolltolower: 'scrolltolower',
    scroll: 'scroll'
}
```

**注意：**
**Notice:**
<!-- * 事件映射表中没有的原生事件也可以使用，例如``map``组件的``regionchange`` 事件直接在组件上写成 ``@regionchange``,同时这个事件也非常特殊，它的 ``event`` ``type`` 有 ``begin`` 和 ``end`` 两个，导致我们无法在``handleProxy`` 中区分到底是什么事件，所以你在监听此类事件的时候同时监听事件名和事件类型既 
``<map @regionchange="functionName" @end="functionName" @begin="functionName"><map>``。 -->
<!-- * Native events that are not in the event mapping table can also be used. For example, the ``regionchange'' event of the ``map'' component is directly written as ``@regionchange'' on the component, and this event is also very special. Its ``event`` and ``type'' have ``begin`` and ``end``, which makes it impossible for us to distinguish what event is in ``handleProxy``, so you are listening for this type of event When monitoring the event name and event type at the same time
``<map @regionchange="functionName" @end="functionName" @begin="functionName"><map>''. -->
* 为兼容各端，事件需使用 ``v-on`` 或 ``@`` 的方式绑定。
* To be compatible with all terminals, events need to be bound using ``v-on`` or ``@``.
* 事件修饰符
* Event modifier
 * ``.stop``：各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为
 * ``.stop``: Supported by all platforms, it will prevent the event from bubbling when used, and will also prevent the default behavior of the event on the non-H5 side
 * ``.native``：监听原生事件，仅在 H5 平台支持
 * ``.native``: monitor native events, only supported on H5 platform
 * ``.prevent`` 仅在 H5 平台支持
 * ``.prevent`` is only supported on H5 platform
 * ``.self``：仅在 H5 平台支持
 * ``.self``: Only supported on H5 platform
 * ``.once``：仅在 H5 平台支持
 * ``.once``: only supported on H5 platform
 * ``.capture``：仅在 H5 平台支持
 * ``.capture``: only supported on H5 platform
 * ``.passive``：仅在 H5 平台支持 
 * ``.passive``: only supported on H5 platform
 * 若需要禁止蒙版下的页面滚动，可使用 ``@touchmove.stop.prevent="moveHandle"``，moveHandle 可以用来处理 touchmove 的事件，也可以是一个空函数。
 * If you need to prohibit page scrolling under the mask, you can use ``@touchmove.stop.prevent="moveHandle"``, moveHandle can be used to handle touchmove events, or it can be an empty function.
 
 
  ```html
  <view class="mask" @touchmove.stop.prevent="moveHandle"></view>
  ```
* 按键修饰符：``uni-app``运行在手机端，没有键盘事件，所以不支持按键修饰符。
* Key modifier: ``uni-app'' runs on the mobile phone without keyboard events, so key modifiers are not supported.

## 表单控件绑定
## Form control binding
支持 [Vue官方文档：表单控件绑定](https://cn.vuejs.org/v2/guide/forms.html)。
Support [Vue Official Document: Form Control Binding](https://cn.vuejs.org/v2/guide/forms.html).
建议开发过程中直接使用  [uni-app：表单组件](component/button)。用法示例：
It is recommended to use [uni-app: form component](component/button) directly in the development process. Example usage:
H5 的select 标签用 picker 组件进行代替
H5's select tag is replaced with picker component
```html
<template>
  <view>
    <picker @change="bindPickerChange" :value="index" :range="array">
      <view class="picker">
        当前选择：{{array[index]}}
      </view>
	  <view class="picker">
	  	Current selection: {{array[index]}}
	  </view>
    </picker>
  </view>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      array: ['A', 'B', 'C']
    }
  },
  methods: {
    bindPickerChange (e) {
      console.log(e)
    }
  }
}

</script>
```

表单元素 radio 用 radio-group 组件进行代替
The form element radio is replaced by a radio-group component

```html
<template>
  <view>
    <radio-group class="radio-group" @change="radioChange">
      <label class="radio" v-for="(item, index) in items" :key="item.name">
        <radio :value="item.name" :checked="item.checked"/> {{item.value}}
      </label>
    </radio-group>
  </view>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'},
        {name: 'BRA', value: '巴西'},
        {name: 'JPN', value: '日本'},
        {name: 'ENG', value: '英国'},
        {name: 'TUR', value: '法国'}
      ]
    }
  },
  methods: {
    radioChange (e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
	  console.log('Radio has a change event, carrying value value:', e.target.value)
    }
  }
}

</script>

```

## v-html指令
## v-html instruction

App端（vue页面[V3编译模式](https://ask.dcloud.net.cn/article/36599)）和H5端支持v-html，其他端不支持v-html。
App side (vue page [V3 compilation mode](https://ask.dcloud.net.cn/article/36599)) and H5 side support v-html, other side does not support v-html.

跨端的富文本处理方案详见：[https://ask.dcloud.net.cn/article/35772](https://ask.dcloud.net.cn/article/35772)
For cross-terminal rich text processing solutions, please refer to: [https://ask.dcloud.net.cn/article/35772](https://ask.dcloud.net.cn/article/35772)

## 组件   
## Components

### Vue 组件
### Vue components

组件是 ``vue`` 技术中非常重要的部分，组件使得与ui相关的轮子可以方便的制造和共享，进而使得vue使用者的开发效率大幅提升。
Components are a very important part of the ``vue'' technology. Components make it easy to manufacture and share UI-related wheels, which greatly improves the development efficiency of vue users.

uni-app搭建了组件的插件市场，可大幅提升开发者的效率。[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)
uni-app has built a plug-in market for components, which can greatly improve the efficiency of developers. [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)

在项目的/component目录下存放组件，在要显示组件的页面中则分为3步：导入、注册和使用。
The components are stored in the /component directory of the project, and there are three steps in the page where the components are to be displayed: import, register, and use.

可以这个[评分组件](https://ext.dcloud.net.cn/plugin?id=33)的使用为例，了解vue组件的使用方式。
Take this [scoring component](https://ext.dcloud.net.cn/plugin?id=33) as an example to understand how the vue component is used.


```html
<template>
	<view>
		<uni-rate value="2"></uni-rate> 
		<!-- 第三步，使用组件。并传值点亮2颗星 -->
		<!-- The third step is to use components. And pass the value to light up 2 stars -->
	</view>
</template>
<script>
import uniRate from "@/components/uni-rate/uni-rate.vue" 
//第一步，导入组件
//The first step is to import components
export default {
    components: {
		uniRate 
		//第二步，注册组件
		//The second step is to register the component
	}
}
</script>
```

- `2.5.0+`版本支持在pages.json内引入组件，[详见](/collocation/pages?id=easycom)
- `2.5.0+` version supports the introduction of components in pages.json, [see details](/collocation/pages?id=easycom)

- **uni-app只支持vue单文件组件（.vue 组件）**。其他的诸如：动态组件，自定义 ``render``，和``<script type="text/x-template">`` 字符串模版等，在非H5端不支持。
- **uni-app only supports vue single file components (.vue components)**. Others such as dynamic components, custom ``render``, and ``<script type="text/x-template">`` string templates, etc., are not supported on the non-H5 side.

### uni-app内置基础组件
### uni-app built-in basic components

``uni-app`` 内置了小程序的所有[组件](component/)，比如： ``picker``,``map`` 等。
``uni-app`` contains all [components](component/) of the applet, such as: ``picker``, ``map``, etc.

**示例**
**Example**

```html
<picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
    <view class="picker">
      当前选择: {{date}}
    </view>
	<view class="picker">
	  Current selection: {{date}}	  
	</view>
</picker>
```

### 全局组件
### Global components

```uni-app``` 支持配置全局组件，需在 ``main.js`` 里进行全局注册，注册后就可在所有页面里使用该组件。
```uni-app``` supports the configuration of global components. Global registration is required in ``main.js``. After registration, the component can be used in all pages.

**注意**
**Notice**

- ``Vue.component`` 的第一个参数必须是静态的字符串。
- The first parameter of ``Vue.component`` must be a static string.
- nvue页面暂不支持全局组件
- nvue page does not currently support global components

**示例**
**Example**

main.js 里进行全局导入和注册
Global import and registration in main.js


```javascript
import Vue from 'vue'
import pageHead from './components/page-head.vue'
Vue.component('page-head',pageHead)
```
index.vue 里可直接使用组件
Components can be used directly in index.vue
```html
<template>
  <view>
    <page-head></page-head>
	</view>
</template>
```

### 命名限制
### Naming restrictions

在 `uni-app` 中以下这些作为保留关键字，不可作为组件名。
The following are reserved keywords in `uni-app` and cannot be used as component names.
- `a`
- `canvas`
- `cell`
- `content`
- `countdown`
- `datepicker`
- `div`
- `element`
- `embed`
- `header`
- `image`
- `img`
- `indicator`
- `input`
- `link`
- `list`
- `loading-indicator`
- `loading`
- `marquee`
- `meta`
- `refresh`
- `richtext`
- `script`
- `scrollable`
- `scroller`
- `select`
- `slider-neighbor`
- `slider`
- `slot`
- `span`
- `spinner`
- `style`
- `svg`
- `switch`
- `tabbar`
- `tabheader`
- `template`
- `text`
- `textarea`
- `timepicker`
- `transition-group`
- `transition`
- `video`
- `view`
- `web`

**Tips**

- 除以上列表中的名称外，标准的 HTML 及 SVG 标签名也不能作为组件名。
- In addition to the names in the above list, standard HTML and SVG tag names cannot be used as component names.
- `methods`中不可使用与生命周期同名的方法名
- The method name with the same name as the life cycle cannot be used in `methods`

## 常见问题
## common problem
**1. 如何获取上个页面传递的数据**
**1. How to get the data passed on the previous page**

在 ``onLoad`` 里得到，``onLoad`` 的参数是其他页面打开当前页面所传递的数据。
Obtained in ``onLoad``, the parameter of ``onLoad`` is the data passed by other pages to open the current page.

**2. 如何设置全局的数据和全局的方法**
**2. How to set up global data and global methods**

``uni-app`` 内置了 [vuex](https://vuex.vuejs.org/zh/guide/) ，在app里的使用，可参考``hello-uniapp`` ``store/index.js``。
``uni-app`` has built-in [vuex](https://vuex.vuejs.org/zh/guide/), for the use in the app, please refer to ``hello-uniapp`` ``store/index. js''.


```javascript
//store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {...},
    mutations: {...},
    actions: {...}
})

export default store

//main.js
...
import store from './store'
Vue.prototype.$store = store
const app = new Vue({
    store,...
})
...

//test.vue 使用时：
//When using test.vue:
import {mapState,mapMutations} from 'vuex'
```

**3. 如何捕获 app 的 onError**
**3. How to catch app's onError**

由于 ``onError`` 并不是完整意义的生命周期，所以只提供一个捕获错误的方法，在 ``app`` 的根组件上添加名为 ``onError`` 的回调函数即可。如下：
Since ``onError`` is not a complete life cycle, so only a method of catching errors is provided. Just add a callback function named ``onError`` to the root component of ``app``. as follows:

```javascript
export default {
   // 只有 app 才会有 onLaunch 的生命周期
   // Only app will have onLaunch life cycle
   onLaunch () {
       // ...
   },

   // 捕获 app error
   // capture app error
   onError (err) {
       console.log(err)
   }
}
```

**4. 组件属性设置不生效解决办法**
**4. Component property setting does not take effect. Solution**

当重复设置某些属性为相同的值时，不会同步到view层。
When some properties are repeatedly set to the same value, they will not be synchronized to the view layer.

例如：每次将scroll-view组件的scroll-top属性值设置为0，只有第一次能顺利返回顶部。
For example: each time the scroll-top attribute value of the scroll-view component is set to 0, only the first time can it return to the top smoothly.

这和props的单向数据流特性有关，组件内部scroll-top的实际值改动后，其绑定的属性并不会一同变化。
This is related to the one-way data flow characteristics of props. After the actual value of the scroll-top inside the component is changed, its bound properties will not change together.

解决办法有两种（以scroll-view组件为例）：
There are two solutions (take the scroll-view component as an example):

* 监听scroll事件，记录组件内部变化的值，在设置新值之前先设置为记录的当前值
* Monitor the scroll event, record the value of the internal change of the component, and set it to the current value of the record before setting the new value

```html
<scroll-view :scroll-top="scrollTop" scroll-y="true" @scroll="scroll">
```

```js
export default {
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			}
		}
	},
	methods: {
		scroll: function(e) {
			this.old.scrollTop = e.detail.scrollTop
		},
		goTop: function(e) {
			this.scrollTop = this.old.scrollTop
			this.$nextTick(function() {
				this.scrollTop = 0
			});
		}
	}
}
```

* 监听scroll事件，获取组件内部变化的值，实时更新其绑定值
* Monitor the scroll event, get the value of the internal change of the component, and update its binding value in real time

```html
<scroll-view :scroll-top="scrollTop" scroll-y="true" @scroll="scroll">
```

```js
export default {
	data() {
		return {
			scrollTop: 0,
		}
	},
	methods: {
		scroll: function(e) {
			// 如果使用此方法，请自行增加防抖处理
			// If you use this method, please add anti-shake treatment by yourself
			this.scrollTop = e.detail.scrollTop
		},
		goTop: function(e) {
			this.scrollTop = 0
		}
	}
}
```

第二种解决方式在某些组件可能造成抖动，推荐第一种解决方式。
The second solution may cause jitter in some components, and the first solution is recommended.


## Vue特性支持表
## Vue feature support table

#### 全局配置
#### Global configuration

|Vue 全局配置											|H5		|App端|说明																					|
|Vue global configuration |H5 |App side|Description |
|--																|--		|--			|--																						|
|Vue.config.silent								|支持	|支持		|-																						|
|Vue.config.silent |Support |Support |- |
|Vue.config.optionMergeStrategies	|支持	|支持		|-																						|
|Vue.config.optionMergeStrategies |Support |Support |- |
|Vue.config.devtools							|支持	|不支持	|只在`Web`环境下支持													|
|Vue.config.devtools |Supported |Not supported |Only supported in the `Web` environment |
|Vue.config.errorHandler					|支持	|支持		|-																						|
|Vue.config.errorHandler |Support |Support |- |
|Vue.config.warnHandler						|支持	|支持		|-																						|
|Vue.config.warnHandler |Support |Support |- |
|Vue.config.ignoredElements				|支持	|支持		|强烈不推荐，会覆盖`uni-app`框架配置的内置组件|
|Vue.config.ignoredElements |Support |Support |Strongly not recommended, it will overwrite the built-in components of the `uni-app` framework configuration|
|Vue.config.keyCodes							|支持	|不支持	|-																						|
|Vue.config.keyCodes | Supported | Not Supported |- |
|Vue.config.performance						|支持	|不支持	|只在`Web`环境下支持													|
|Vue.config.performance |Supported |Not supported |Only supported in the `Web` environment |
|Vue.config.productionTip					|支持	|支持		|-																						|
|Vue.config.productionTip |Support |Support |- |

#### 全局 API
#### Global API

|Vue 全局 API	|H5		|App端|说明																		|
|Vue Global API |H5 |App side|Description |
|--						|--		|--			|--																			|
|Vue.extend		|支持	|支持		|不可作为组件使用												|
|Vue.extend |Support |Support |Not available as a component |
|Vue.nextTick	|支持	|不支持	|-																			|
|Vue.nextTick |Support |Not Support |- |
|Vue.set			|支持	|支持		|-																			|
|Vue.set |Support |Support |- |
|Vue.delete		|支持	|支持		|-																			|
|Vue.delete |Support |Support |- |
|Vue.directive|支持	|支持		|-																			|
|Vue.directive|Support |Support |- |
|Vue.filter		|支持	|支持		|App端旧版不可以在`class`中使用					|
|Vue.filter |Support |Support |The old version of App can not be used in `class` |
|Vue.component|支持	|支持		|-																			|
|Vue.component|Support |Support |- |
|Vue.use			|支持	|支持		|-																			|
|Vue.use |Support |Support |- |
|Vue.mixin		|支持	|支持		|-																			|
|Vue.mixin |Support |Support |- |
|Vue.version	|支持	|支持		|-																			|
|Vue.version |Support |Support |- |
|Vue.compile	|支持	|不支持	|`uni-app`使用的`vue`是只包含运行时的版本	|
|Vue.compile | Support | Not Support | The `vue` used by `uni-app` is a version that only contains the runtime |


#### 选项
#### Options

|Vue 选项				|H5		|App端|说明																			|
|Vue options |H5 |App side|Description |
|--							|--		|--			|--																				|
|data						|支持	|支持		|-																				|
|data |Support |Support |- |
|props					|支持	|支持		|App端旧版不可以传递函数									|
|props |Support |Support |The old version of the App can't transfer functions |
|propsData			|支持	|支持		|-																				|
|propsData |Support |Support |- |
|computed				|支持	|支持		|-																				|
|computed |support |support |- |
|methods				|支持	|支持		|-																				|
|template |supported |not supported |`vue` used by `uni-app` is a version that only contains runtime |
|watch					|支持	|支持		|-																				|
|methods |Support |Support |- |
|el							|支持	|不支持	|																					|
|watch |Support |Support |- |
|template				|支持	|不支持	|`uni-app`使用的`vue`是只包含运行时的版本	|
|el |Support |Not support | |
|render					|支持	|不支持	|-																				|
|render |support |not support |- |
|renderError		|支持	|不支持	|-																				|
|renderError |supported |not supported |- |
|directives			|支持	|支持		|-																				|
|directives |support |support |- |
|filters				|支持	|支持		|App端旧版不可以在`class`中使用						|
|filters |Support |Support |The old version of App cannot be used in `class` |
|components			|支持	|支持		|-																				|
|components |Support |Support |- |
|parent					|支持	|支持		|不推荐																		|
|parent |support |support |not recommended |
|mixins					|支持	|支持		|-																				|
|mixins |support |support |- |
|extends				|支持	|支持		|-																				|
|extends |support |support |- |
|provide/inject	|支持	|支持		|App端旧版部分支持												|
|provide/inject |Support |Support |App-side old version partial support |
|name						|支持	|支持		|App端旧版不支持递归组件									|
|name |Support |Support |The old version of the App does not support recursive components |
|delimiters			|支持	|不支持	|-																				|
|delimiters |supported |not supported |- |
|functional			|支持	|不支持	|-																				|
|functional |support |not support |- |
|model					|支持	|支持		|-																				|
|model |Support |Support |- |
|inheritAttrs		|支持	|支持		|-																				|
|inheritAttrs |Support |Support |- |
|comments				|支持	|不支持	|-																				|
|comments |support |not support |- |


#### 生命周期钩子
#### Lifecycle hook

|Vue 生命周期钩子	|H5		|App端|说明	|
|Vue lifecycle hook |H5 |App side|Description |
|--								|--		|--			|---		|
|beforeCreate			|支持	|支持		|		|
|beforeCreate |Support |Support | |
|created					|支持	|支持		|-		|
|created |support |support |- |
|beforeMount			|支持	|支持		|-		|
|beforeMount |Support |Support |- |
|mounted					|支持	|支持		|-		|
|mounted |Support |Support |- |
|beforeUpdate			|支持	|支持		|-		|
|beforeUpdate |Support |Support |- |
|updated					|支持	|支持		|-		|
|updated |support |support |- |
|activated				|支持	|支持		|-		|
|activated |support |support |- |
|deactivated			|支持	|支持		|-		|
|deactivated |Support |Support |- |
|beforeDestroy		|支持	|支持		|-		|
|beforeDestroy |Support |Support |- |
|destroyed				|支持	|支持		|-		|
|destroyed |support |support |- |
|errorCaptured		|支持	|支持		|-		|
|errorCaptured |Support |Support |- |

#### 实例属性
#### Instance Properties

|Vue 实例属性		|H5		|App端|说明																																				|
|Vue instance properties |H5 |App side|Description |
|--							|--		|--			|--																																					|
|vm.$data				|支持	|支持		|-																																					|
|vm.$data |Support |Support |- |
|vm.$props			|支持	|支持		|-																																					|
|vm.$props |Support |Support |- |
|vm.$el					|支持	|不支持	|-																																					|
|vm.$el |support |not support |- |
|vm.$options		|支持	|支持		|-																																					|
|vm.$options |Support |Support |- |
|vm.$parent			|支持	|支持		|H5端 `view`、`text` 等内置标签是以 Vue 组件方式实现，`$parent` 会获取这些到内置组件，导致的问题是 `this.$parent` 与其他平台不一致，解决方式是使用 `this.$parent.$parent` 获取或自定义组件根节点由 `view` 改为 `div`|
|vm.$parent |Support |Support |H5 end `view`, `text` and other built-in tags are implemented as Vue components, `$parent` will get these to the built-in components, and the problem is `this.$parent` Inconsistent with other platforms, the solution is to use `this.$parent.$parent` to get or customize the component root node from `view` to `div`|
|vm.$root				|支持	|支持		|-																																					|
|vm.$root |Support |Support |- |
|vm.$children		|支持	|支持		|H5端 `view`、`text` 等内置标签是以 Vue 组件方式实现，`$children` 会获取到这些内置组件，导致的问题是 `this.$children` 与其他平台不一致，解决方式是使用 `this.$children.$children` 获取或自定义组件根节点由 `view` 改为 `div`|
|vm.$children |Support |Support |H5 end `view`, `text` and other built-in tags are implemented as Vue components, `$children` will get these built-in components, and the problem is `this.$children` Inconsistent with other platforms, the solution is to use `this.$children.$children` to obtain or customize the component root node from `view` to `div`|
|vm.$slots			|支持	|不支持	|App端旧版获取值为`{'slotName':true/false}`比如：`{"footer":true}`					|
|vm.$slots |Supported |Not supported |The old version of the App side gets the value `{'slotName':true/false}` For example: `{"footer":true}` |
|vm.$scopedSlots|支持	|支持		|App端旧版获取值为`{'slotName':true/false}`比如：`{"footer":true}`					|
|vm.$scopedSlots|Support |Support |The old version of App side gets the value `{'slotName':true/false}` For example: `{"footer":true}` |
|vm.$refs				|支持	|支持		|非H5端只能用于获取自定义组件，不能用于获取内置组件实例（如：view、text）|
|vm.$refs |Support |Support |Non-H5 end can only be used to obtain custom components, not to obtain built-in component instances (such as: view, text)|
|vm.$isServer		|支持	|支持		|App端V3总是返回false																												|
|vm.$isServer |Support |Support |App V3 always returns false |
|vm.$attrs			|支持	|支持		|-																																					|
|vm.$attrs |Support |Support |- |
|vm.$listeners	|支持	|支持		|-																																					|
|vm.$listeners |Support |Support |- |



#### 实例方法
#### Example method

|Vue 实例方法			|H5		|App端|说明	|
|Vue instance method |H5 |App side|Description |
|--								|--		|--			|--		|
|vm.$watch()			|支持	|支持		|-		|
|vm.$watch() |Support |Support |- |
|vm.$set()				|支持	|支持		|-		|
|vm.$set() |Support |Support |- |
|vm.$delete()			|支持	|支持		|-		|
|vm.$delete() |Support |Support |- |
|vm.$on()					|支持	|支持		|-		|
|vm.$on() |Support |Support |- |
|vm.$once()				|支持	|支持		|-		|
|vm.$once() |Support |Support |- |
|vm.$off()				|支持	|支持		|-		|
|vm.$off() |Support |Support |- |
|vm.$emit()				|支持	|支持		|-		|
|vm.$emit() |Support |Support |- |
|vm.$mount()			|支持	|不支持	|-		|
|vm.$mount() |supported |not supported |- |
|vm.$forceUpdate()|支持	|支持		|-		|
|vm.$forceUpdate()|Support |Support |- |
|vm.$nextTick()		|支持	|支持		|-		|
|vm.$nextTick() |Support |Support |- |
|vm.$destroy()		|支持	|支持		|-		|
|vm.$destroy() |Support |Support |- |

#### 模板指令
#### Template Directive

|Vue 指令	|H5		|App端|说明																					|
|Vue command |H5 |App side|Description |
|--				|--		|--			|--																						|
|v-text		|支持	|支持		|-																						|
|v-text |Support |Support |- |
|v-html		|支持	|支持		|-																						|
|v-html |Support |Support |- |
|v-show		|支持	|支持		|-																						|
|v-show |Support |Support |- |
|v-if			|支持	|支持		|-																						|
|v-if |Support |Support |- |
|v-else		|支持	|支持		|-																						|
|v-else |Support |Support |- |
|v-else-if|支持	|支持		|-																						|
|v-else-if|Support |Support |- |
|v-for		|支持	|支持		|-																						|
|v-for |Support |Support |- |
|v-on			|支持	|支持		|-																						|
|v-on |Support |Support |- |
|v-bind		|支持	|支持		|App端旧版不支持`v-bind="{key:value}"`类似用法|
|v-bind |Support |Support |The old version of App does not support `v-bind="{key:value}"` similar usage|
|v-model	|支持	|支持		|-																						|
|v-model |Support |Support |- |
|v-pre		|支持	|支持		|-																						|
|v-pre |Support |Support |- |
|v-cloak	|支持	|不支持	|-																						|
|v-cloak |support |not support |- |
|v-once		|支持	|支持		|-																						|
|v-once |Support |Support |- |

#### 特殊属性
#### Special attributes

|Vue 特殊属性	|H5		|App端|说明									|
|Vue special attributes |H5 |App side|Description |
|--						|--		|--			|--										|
|key					|支持	|支持		|App端旧版不支持表达式|
|key |Support |Support |The old version of the App does not support expressions|
|ref					|支持	|支持		|-										|
|ref |Support |Support |- |
|is						|支持	|支持		|-										|
|is |Support |Support |- |

#### 内置组件
#### Built-in components

|Vue 内置组件			|H5		|App端|说明	|
|Vue built-in components |H5 |App side|Description |
|--								|--		|--			|--					|--		|
|component				|支持	|支持		|-		|
|component |Support |Support |- |
|transition				|支持	|不支持	|-		|
|transition |support |not support |- |
|transition-group	|支持	|不支持	|-		|
|transition-group |support |not support |- |
|keep-alive				|支持	|不支持		|-		|
|keep-alive |support |not support |- |
|slot							|支持	|支持		|-		|
|slot |Support |Support |- |