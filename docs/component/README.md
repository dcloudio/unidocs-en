### 组件使用的入门教程
### Introductory tutorial for component usage
- 组件是视图层的基本组成单元。
- Components are the basic building blocks of the view layer.
- 组件是一个单独且可复用的功能模块的封装。
- A component is a package of a separate and reusable functional module.

每个组件，包括如下几个部分：以组件名称为标记的开始标签和结束标签、组件内容、组件属性、组件属性值。
Each component includes the following parts: start tag and end tag marked with the component name, component content, component attribute, and component attribute value.

- 组件名称由尖括号包裹，称为标签，它有开始标签和结束标签。结束标签的`<`后面用`/`来表示结束。结束标签也称为闭合标签。如下面示例的`<component-name>`是开始标签，`</component-name>`是结束标签。
- The component name is wrapped in angle brackets, called a label, and it has a start label and an end label. The `<` of the closing tag is followed by `/` to indicate the end. The closing tag is also called the closing tag. For example, in the following example, `<component-name>` is the start tag, and `</component-name>` is the end tag.
- 在开始标签和结束标签之间，称为组件内容。如下面示例的`content`
- Between the start tag and the end tag, it is called the component content. As in the following example, `content`
- 开始标签上可以写属性，属性可以有多个，多个属性之间用空格分割。如下面示例的`property1`和`property2`。注意闭合标签上不能写属性。
- Attributes can be written on the start tag, and there can be multiple attributes. Use spaces to separate multiple attributes. Such as `property1` and `property2` in the example below. Note that attributes cannot be written on the closed label.
- 每个属性通过`=`赋值。如下面的示例中，属性`property1`的值被设为字符串`value`。
- Each attribute is assigned with `=`. As in the example below, the value of the property `property1` is set to the string `value`.

> 注意：所有组件与属性名都是小写，单词之间以连字符``-``连接。
> Note: All component and attribute names are lowercase, and the words are connected by a hyphen ``-``.

```html
<component-name property1="value" property2="value">
	content
</component-name>
```

下面是一个基本组件的实例，在一个vue页面的根`<view>`组件下插入一个`<button>`组件。给这个组件的内容区写上文字“按钮”，同时给这个组件设置了一个属性“size”，并且“size”属性的值设为了“mini”。
The following is an example of a basic component. Insert a `<button>` component under the root `<view>` component of a vue page. Write the text "button" to the content area of this component, and at the same time set an attribute "size" to this component, and the value of the "size" attribute is set to "mini".

> 注：按照[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)，每个vue文件的根节点必须为 `<template>`，且这个 `<template>` 下只能且必须有一个根 `<view>` 组件。
> Note: According to [vue single file component specification](https://cn.vuejs.org/v2/guide/single-file-components.html), the root node of each vue file must be `<template>`, And this `<template>` can only and must have one root `<view>` component.

```html
<template>
	<view>
		<button size="mini">按钮</button>
	</view>
</template>
```

通过了解[button组件](/component/button)的文档，我们知道上述代码将在页面中绘制一个按钮，按钮显示的文字是“按钮”，按钮的大小是小尺寸的。
By understanding the documentation of [button component](/component/button), we know that the above code will draw a button on the page, the text displayed on the button is "button", and the size of the button is small.

#### 组件的属性类型
#### Component attribute type

组件的属性，有多种类型：
There are many types of component attributes:

|类型|描述|注解|
|Type|Description|Annotation|
|:-|:-|:-|
|Boolean|布尔值|组件写上该属性，不管该属性等于什么，其值都为 ``true``，只有组件上没有写该属性时，属性值才为 ``false``。如果属性值为变量，变量的值会被转换为 ``Boolean`` 类型。|
|Boolean|Boolean value|The attribute is written on the component, no matter what the attribute is equal to, its value is ``true''. The attribute value is ``false'' only when the attribute is not written on the component. If the attribute value is a variable, the value of the variable will be converted to the ``Boolean`` type. |
|Number|数字|1, 2.5|
|Number|Number|1, 2.5|
|String|字符串|"string"|
|String|String|"string"|
|Array|数组|[ 1, "string" ]|
|Array|Array|[ 1, "string" ]|
|Object|对象|{ key: value }|
|Object|Object|{ key: value }|
|EventHandler|事件处理函数名|``handlerName`` 是 methods 中定义的事件处理函数名|
|EventHandler|Event processing function name|``handlerName'' is the name of the event processing function defined in methods|
|Any|任意属性|&nbsp;|
|Any|Any attribute|&nbsp;|

下面的例子演示了组件的属性设置bool值和数字的例子。注意`false`作为一个js变量，在组件的属性中使用时，属性前面需增加`:`冒号前缀，属性值仍使用引号包裹，但引号里不是字符串，而是js。
The following example demonstrates an example of setting bool values ​​and numbers for the properties of the component. Note that `false` is a js variable. When using it in the properties of the component, you need to add a `:` colon prefix in front of the property. The property value is still wrapped in quotation marks, but the quotation marks are not strings, but js.

```html
<template>
	<view>
		<button size="mini" :disabled="false" hover-start-time=20 >按钮</button>
	</view>
</template>
```

#### 公共属性列表
#### Public property list

每个组件都有各自定义的属性，但所有uni-app的组件，都有如下属性：
Each component has its own defined attributes, but all uni-app components have the following attributes:

|属性名|类型|描述|注解|
|Attribute name|Type|Description|Annotation|
|:-|:-|:-|:-|
|id|String|组件的唯一标示|一般用于获取组件上下文对象（如：[VideoContext](/api/media/video-context)），需要保持整个页面唯一|
|id|String|The unique identifier of the component|Generally used to obtain the component context object (such as: [VideoContext](/api/media/video-context)), which needs to keep the entire page unique|
|ref|String|vue中组件的唯一标示|用来给子组件注册引用信息，详见 [Vue 文档](/vue-components?id=ref)|
|ref|String|The unique identifier of the component in vue| is used to register the reference information for the sub-component, see [Vue documentation](/vue-components?id=ref)|
|class|String|组件的样式类|在对应的 css 中定义的样式类|
|class|String|The style class of the component|The style class defined in the corresponding css|
|style|String|组件的内联样式|可以动态设置的内联样式|
|style|String|Inline style of the component|Inline style that can be set dynamically|
|hidden|Boolean|组件是否隐藏|所有组件默认是显示的|
|hidden|Boolean|Whether components are hidden|All components are displayed by default|
|data-*|Any|自定义属性|组件上触发的事件时，会发送给事件处理函数|
|data-*|Any|Custom attributes|When an event is triggered on a component, it will be sent to the event handler|
|@\*|EventHandler|组件的事件|详见各组件详细文档，事件绑定参考 [事件处理器](/vue-basics?id=事件处理器)|
|@\*|EventHandler|Component's event|For details, please refer to the detailed documentation of each component, event binding reference [event handler](/vue-basics?id=event handler)|

除了上述公共属性，还有一类特殊属性以`v-`开头，称之为vue指令，如v-if、v-else、v-for、v-model。详见[vue指令](/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4)
In addition to the above public attributes, there is also a special category of attributes starting with `v-`, called vue instructions, such as v-if, v-else, v-for, v-model. For details, see [vue instruction](/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4)

#### 在组件中使用js变量
#### Use js variables in components

组件中可以使用script的data中定义的js变量，但组件的属性中使用和内容区使用的用法不一样。
The component can use the js variable defined in the script's data, but the usage of the component's attributes is different from the usage of the content area.

- 在内容区使用时，使用两个花括号来包裹，如下面的`buttonText`
- When used in the content area, use two curly braces to wrap, such as the following `buttonText`
- 在属性值中使用时，属性名的前面要加冒号前缀
- When used in attribute values, prefix the attribute name with a colon

下面的button组件示例，等价于上一个的示例。只不过静态内容改成动态js。
The following button component example is equivalent to the previous example. It's just that the static content is changed to dynamic js.

```html
<template>
	<view>
		<button size="mini" :disabled="buttondisble" hover-start-time=20 >{{buttonText}}</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"buttonText":"按钮",
				"buttondisble":false
			}
		}
	}
</script>
```

#### 组件的事件
#### Component events

每个组件都有“事件”。事件就是在指定的条件下触发某个js方法。
Each component has "events". Event is to trigger a js method under specified conditions.

比如button组件，有点击事件，也就是当手机用户点击这个button组件时，会触发这个事件。
For example, the button component has a click event, that is, when the mobile phone user clicks the button component, this event will be triggered.

事件也是组件的属性，只不过这类属性以`@`为前缀。
Events are also properties of components, but such properties are prefixed with `@`.

事件的属性值，指向一个在script的methods里定义过的js方法，还可以给方法传参数。
The attribute value of the event points to a js method defined in the script's methods. You can also pass parameters to the method.

下面是组件事件的示例：
The following is an example of component events:
- click是button组件的点击事件，在用户点击这个button时触发
- click is the click event of the button component, which is triggered when the user clicks the button
- click指向了methods中定义的goto方法，并且传递了一个参数'/pages/about/about'
- click points to the goto method defined in methods, and passes a parameter'/pages/about/about'

```html
<template>
	<view>
		<button size="mini" @click="goto('/pages/about/about')">按钮</button>
	</view>
</template>
<script>
    export default {
        methods: {
            goto(url) {
                console.log("按钮被点击了，且传入的参数是：" + url)
            }
        }
    }
</script>
```


### 基础组件
### Basic components

uni-app的组件，分为基础组件和扩展组件。
The components of uni-app are divided into basic components and extended components.

基础组件在uni-app框架中已经内置，无需将内置组件的文件导入项目，也无需注册内置组件，随时可以直接使用，比如`<view>`组件。
The basic components are already built-in in the uni-app framework. There is no need to import the files of the built-in components into the project, and there is no need to register the built-in components. They can be used directly at any time, such as the `<view>` component.

除了基础组件，都称为扩展组件。扩展组件需要将组件导入项目中才可以使用。
Except for the basic components, they are all called extension components. Expansion components need to be imported into the project before they can be used.

uni-app为开发者提供了一系列基础组件，类似HTML里的基础标签元素。
uni-app provides developers with a series of basic components, similar to the basic tag elements in HTML.

但uni-app的组件与HTML不同，而是与小程序相同，可更好的满足手机端的使用习惯。
However, the components of uni-app are different from HTML, but the same as small programs, which can better meet the mobile phone usage habits.

虽然不推荐使用HTML标签，但实际上如果开发者写了`div`等标签，在编译到非H5平台时也会被编译器转换为`view`标签，类似的还有`span`转`text`、`a`转`navigator`等，包括css里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用view等组件。
Although HTML tags are not recommended, in fact, if developers write tags such as `div`, they will be converted to `view` tags by the compiler when they are compiled to a non-H5 platform. Similarly, there are `span` to `text. `, `a` to `navigator`, etc., including element selectors in css will also be transferred. However, in order to facilitate management and unify the strategy, it is still recommended to use components such as view when writing new code.

开发者可以通过组合这些基础组件进行快速开发。在需要复用的情况下可封装成扩展组件。
Developers can quickly develop by combining these basic components. It can be packaged as an expansion component when it needs to be reused.

`uni-app` 基础组件规范，需要注意组件上的事件绑定，需要以 vue 的事件绑定语法来绑定，如 bindchange="eventName" 事件，需要写成 `@change="eventName"`
The basic component specification of `uni-app` needs to pay attention to the event binding on the component, which needs to be bound with vue's event binding syntax, such as bindchange="eventName" event, which needs to be written as `@change="eventName"`

```html
	<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
		<view class="picker">
		  当前选择: {{date}}
		</view>
	</picker>
```


#### 基础组件列表
#### Basic component list

基础组件分为以下十几大类：
The basic components are divided into the following dozens of categories:

**视图容器（View Container）：**
**View Container:**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[view](component/view.md)|视图容器，类似于HTML中的div|
|[view](component/view.md)|View container, similar to div in HTML|
|[scroll-view](component/scroll-view.md)|可滚动视图容器|
|[scroll-view](component/scroll-view.md)|Scrollable view container|
|[swiper](component/swiper.md)|滑块视图容器，比如用于轮播banner|
|[swiper](component/swiper.md)|Slider view container, for example for carousel banner|
|[match-media](component/match-media.md)|屏幕动态适配组件，比如窄屏上不显示某些内容|
|[match-media](component/match-media.md)|Screen dynamic adaptation components, for example, some content is not displayed on a narrow screen|
|[movable-area](component/movable-view.md?id=movable-area)|可拖动区域|
|[movable-area](component/movable-view.md?id=movable-area)|Draggable area|
|[movable-view](component/movable-view.md?id=movable-view)|可移动的视图容器，在页面中可以拖拽滑动或双指缩放。movable-view必须在movable-area组件中|
|[movable-view](component/movable-view.md?id=movable-view)|Moveable view container, you can drag and slide on the page or zoom with two fingers. The movable-view must be in the movable-area component|
|[cover-view](/component/cover-view?id=cover-view)|可覆盖在原生组件的上的文本组件|
|[cover-view](/component/cover-view?id=cover-view)|Text components that can be overlaid on native components|
|[cover-image](/component/cover-view?id=cover-image)|可覆盖在原生组件的上的图片组件|
|[cover-image](/component/cover-view?id=cover-image)|Image components that can be overlaid on native components|

**基础内容（Basic Content）：**
**Basic Content:**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[icon](component/icon.md)|图标|
|[icon](component/icon.md)|icon|
|[text](component/text.md)|文字|
|[text](component/text.md)|text|
|[rich-text](component/rich-text.md)|富文本显示组件|
|[rich-text](component/rich-text.md)|rich text display component|
|[progress](component/progress.md)|进度条|
|[progress](component/progress.md)|Progress Bar|

**表单组件（Form）：**
**Form component (Form):**

|标签名|说明|
|Tag name|Description|
|:-|:-|
|[button](component/button.md)|按钮|
|[button](component/button.md)|Button|
|[checkbox](component/checkbox.md)|多项选择器|
|[checkbox](component/checkbox.md)|multiple selector|
|[editor](component/editor.md)|富文本输入框|
|[editor](component/editor.md)|Rich text input box|
|[form](component/form.md)|表单|
|[form](component/form.md)|Form|
|[input](component/input.md)|输入框|
|[input](component/input.md)|input box|
|[label](component/label.md)|标签|
|[label](component/label.md)|label|
|[picker](component/picker.md)|弹出式列表选择器|
|[picker](component/picker.md)|Pop-up list selector|
|[picker-view](component/picker-view.md)|窗体内嵌式列表选择器|
|[picker-view](component/picker-view.md)|In-form list selector|
|[radio](component/radio.md)|单项选择器|
|[radio](component/radio.md)|Single item selector|
|[slider](component/slider.md)|滑动选择器|
|[slider](component/slider.md)|Slide selector|
|[switch](component/switch.md)|开关选择器|
|[switch](component/switch.md)|switch selector|
|[textarea](component/textarea.md)|多行文本输入框|
|[textarea](component/textarea.md)|Multi-line text input box|


**路由与页面跳转（Navigation）：**
**Routing and page jump (Navigation):**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[navigator](component/navigator.md)|页面链接。类似于HTML中的a标签|
|[navigator](component/navigator.md)|Link to the page. Similar to the a tag in HTML|

**媒体组件（Media）：**
**Media component (Media):**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[audio](component/audio.md)|音频|
|[audio](component/audio.md)|audio|
|[camera](component/camera.md)|相机|
|[camera](component/camera.md)|Camera|
|[image](component/image.md)|图片|
|[image](component/image.md)|Picture|
|[video](component/video.md)|视频|
|[video](component/video.md)|video|
|[live-player](component/live-player.md)|直播播放|
|[live-player](component/live-player.md)|Live broadcast|
|[live-pusher](component/live-pusher.md)|实时音视频录制，也称直播推流|
|[live-pusher](component/live-pusher.md)|Real-time audio and video recording, also known as live streaming|

**地图（Map）：**
**Map:**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[map](component/map.md)|地图|
|[map](component/map.md)|Map|

**画布（Canvas）：**
**Canvas:**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[canvas](component/canvas.md)|画布|
|[canvas](component/canvas.md)|Canvas|

**webview（Web-view）：**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[web-view](component/web-view.md)|web浏览器组件|
|[web-view](component/web-view.md)|web browser component|

**广告**
**advertise**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[ad](component/ad.md)|广告组件|
|[ad](component/ad.md)|Ad component|
|[ad-draw](component/ad-draw.md)|沉浸视频流广告组件|
|[ad-draw](component/ad-draw.md)|Immersive Video Streaming Advertising Component|

**页面属性配置**
**Page attribute configuration**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[custom-tab-bar](component/custom-tab-bar.md)|底部tabbar自定义组件|
|[custom-tab-bar](component/custom-tab-bar.md)|Bottom tabbar custom component|
|[navigation-bar](component/navigation-bar.md)|页面顶部导航|
|[navigation-bar](component/navigation-bar.md)|Navigation at the top of the page|
|[page-meta](component/page-meta.md)|页面属性配置节点|
|[page-meta](component/page-meta.md)|Page attribute configuration node|

**uniCloud**

|组件名|说明|
|Component name|Description|
|:-|:-|
|[unicloud-db组件](uniCloud/unicloud-db)|uniCloud数据库访问和操作组件|
|[unicloud-db component](uniCloud/unicloud-db)|uniCloud database access and operation component|

**各平台专有组件**
**Proprietary components for each platform**

在小程序平台和nvue平台，还有一些专有组件，比如open-data，详见左侧导航
On the applet platform and nvue platform, there are some proprietary components, such as open-data, see the left navigation for details

### 扩展组件的意义
### The meaning of extended components

虽然所有的业务需求都可以通过基础组件满足，但仅有基础组件是低效的，实际开发中会有很多封装的组件。
Although all business requirements can be met by basic components, only basic components are inefficient, and there are many encapsulated components in actual development.

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)
For example, we need a five-pointed star click and score component, which can be obtained in the DCloud plug-in market: [https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net .cn/plugin?id=33)

把这个uni-rate组件导入到你的uni-app项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。
Import this uni-rate component into your uni-app project, reference it in the required vue page, and you can display the five-pointed star component in the specified place.

```html
	<!-- 在index.vue页面引用 uni-rate 组件-->
	<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
```

封装扩展组件的优势：
Advantages of packaged expansion components:

- 可以将组件进行任意次数的复用。
- The components can be reused any number of times.
- 合理的划分组件，有助于提高应用性能。
- Reasonable division of components helps improve application performance.
- 代码更加方便组织和管理，并且扩展性也更强，便于多人协同开发。
- The code is more convenient to organize and manage, and it is more extensible, facilitating multi-person collaborative development.
- 组件化开发能大幅度提高应用开发效率、测试性、复用性等。
- Component development can greatly improve application development efficiency, testability, reusability, etc.

### 组件的类别
### Component category

uni-app支持的组件分为vue组件和小程序自定义组件。
The components supported by uni-app are divided into vue components and small program custom components.

如果你还不了解这两种组件，可以参阅各自的文档
If you do not understand these two components, you can refer to their respective documents
- vue组件：[文档](https://uniapp.dcloud.net.cn/vue-components?id=%e6%a6%82%e5%bf%b5)
- vue component: [document](https://uniapp.dcloud.net.cn/vue-components?id=%e6%a6%82%e5%bf%b5)
- 小程序自定义组件：其规范不是vue规范，而是小程序规范，[文档](https://uniapp.dcloud.net.cn/frame?id=%e5%b0%8f%e7%a8%8b%e5%ba%8f%e8%87%aa%e5%ae%9a%e4%b9%89%e7%bb%84%e4%bb%b6%e6%94%af%e6%8c%81)
- Mini Program Custom Components: Its specification is not a vue specification, but a small program specification, [document](https://uniapp.dcloud.net.cn/frame?id=%e5%b0%8f%e7%a8% 8b%e5%ba%8f%e8%87%aa%e5%ae%9a%e4%b9%89%e7%bb%84%e4%bb%b6%e6%94%af%e6%8c%81)

日常开发来讲，推荐使用vue组件。uni-app支持小程序组件主要是为了兼容更多生态资源。
For daily development, vue components are recommended. Uni-app supports small program components mainly for compatibility with more ecological resources.

如果扩展组件符合uni-app的`easycom`组件规范，则可以免注册，直接使用。比如uni ui扩展组件就符合`easycom`组件规范。
If the extension component complies with uni-app’s `easycom` component specification, it can be used directly without registration. For example, the uni ui extension component conforms to the `easycom` component specification.

如果组件不符合easycom规范，则需要在代码里手动import和注册组件，然后才能使用。
If the component does not conform to the easycom specification, you need to manually import and register the component in the code before it can be used.

除了easycom规范外，扩展组件还有很多概念，比如`uni_module`、`datacom`、`原生组件`、`uniCloud组件`。
In addition to the easycom specification, there are many concepts for extended components, such as `uni_module`, `datacom`, `native component`, and `uniCloud component`.

接下来一一讲解。
Next, explain one by one.

### easycom组件规范
### easycom component specification

> `HBuilderX 2.5.5`起支持
> Supported from `HBuilderX 2.5.5`

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。
Traditional vue components need to be installed, referenced, and registered, and the components can be used after three steps. `easycom` reduces it to one step.

只要组件安装在项目的components目录下或`uni_modules`目录下，并符合`components/组件名称/组件名称.vue`目录结构。就可以不用引用、注册，直接在页面中使用。
As long as the components are installed in the project's components directory or in the `uni_modules` directory, and conform to the `components/component name/component name.vue` directory structure. You can use it directly on the page without quoting or registering.

比如前述举例的[uni-rate组件](https://ext.dcloud.net.cn/plugin?id=33)，它导入到uni-app项目后，存放在了目录/components/uni-rate/uni-rate.vue
For example, the [uni-rate component](https://ext.dcloud.net.cn/plugin?id=33) in the previous example, after it is imported into the uni-app project, it is stored in the directory /components/uni-rate/ uni-rate.vue

同时它的组件名称也叫uni-rate，所以这样的组件，不用在script里注册和引用。
At the same time, its component name is also called uni-rate, so such a component does not need to be registered and referenced in the script.
如下：
as follows:

```html
<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
```

不管components目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
No matter how many components are installed in the components directory, `easycom` will automatically remove unused components after packaging, which is particularly friendly to the use of component libraries.

组件库批量安装，随意使用，自动按需打包。以官方的`uni-ui`为例，在HBuilderX新建项目界面选择`uni-ui`项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。
The component library is installed in batches, used at will, and automatically packaged on demand. Take the official `uni-ui` as an example, select the `uni-ui` project template in the HBuilderX new project interface, just hit u in the page, pull out a large number of component code blocks, select directly, and you can use it. Significantly improve development efficiency and lower the threshold for use.

在[DCloud插件市场](https://ext.dcloud.net.cn/)下载符合`components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。
Download components that conform to the `components/component name/component name.vue` directory structure in [DCloud Plugin Market](https://ext.dcloud.net.cn/), and you can use them directly.

`easycom`是自动开启的，不需要手动开启。
`easycom` is automatically turned on, and does not need to be turned on manually.

如果你的组件名称或路径不符合easycom的默认规范，可以在`pages.json`的`easycom`节点进行个性化设置，自定义匹配组件的策略。[另见](/collocation/pages?id=easycom)
If your component name or path does not conform to the default specification of easycom, you can personalize it in the `easycom` node of `pages.json` to customize the strategy for matching components. [See also](/collocation/pages?id=easycom)

如果不使用easycom，手动引用和注册vue组件，则需要分3步写如下代码：
If you do not use easycom and manually reference and register vue components, you need to write the following code in 3 steps:

1. import导入组件
1. Import components
2. components里注册组件
2. Register components in components
3. template中使用组件
3. Use components in template

```html
	<template>
		<view>
			<uni-rate text="1"></uni-rate><!-- 3.使用组件 -->
		</view>
	</template>
	<script>
		import uniRate from '@/components/uni-rate/uni-rate.vue';//1.导入组件
		export default {
			components:{uniRate }//2.注册组件
		}
	</script>
```

### uni_module规范
### uni_module specification

uni_module其实不止服务于组件，它可以服务于组件、js库、页面、项目等所有DCloud插件市场所支持的种类。
In fact, uni_module does not only serve components, it can serve all types supported by the DCloud plug-in market, such as components, js libraries, pages, and projects.

符合uni_module规范的组件都在项目的`uni_modules`目录下，以插件id为目录存放。（项目模板不放在`uni_modules`目录下）
The components that conform to the uni_module specification are stored in the `uni_modules` directory of the project, with the plug-in id as the directory. (Project templates are not placed in the `uni_modules` directory)

在HBuilderX中点右键可方便的更新插件，插件作者也可以方便的上传插件。
Right-click in HBuilderX to update the plug-in conveniently, and the plug-in author can also upload the plug-in conveniently.

uni_module还支持云端一体的插件。
uni_module also supports cloud integrated plug-ins.

uni_module有详细的专项文档，请另行查阅[uni_module规范](/uni_modules)。
Uni_module has detailed special documents, please refer to [uni_module specification](/uni_modules) separately.

### uniCloud组件
### uniCloud components

uniCloud是DCloud提供的、配套uni-app的云开发服务。
uniCloud is a cloud development service provided by DCloud and supporting uni-app.

uni-app的基础组件中，有一个特殊基础组件是：`<unicloud-db>`组件。
Among the basic components of uni-app, there is a special basic component: the `<unicloud-db>` component.

它可以在前端直接获取和操作uniCloud的云端数据库。
It can directly obtain and operate uniCloud cloud database at the front end.

相关文档详见：[unicloud-db组件](uniCloud/unicloud-db)
For related documents, please refer to: [unicloud-db component](uniCloud/unicloud-db)

除了内置的数据库组件，在uni ui扩展库里还有uniCloud的文件选择和上传组件，参考：[uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)
In addition to the built-in database components, there are also uniCloud file selection and upload components in the uni ui extension library. Refer to: [uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)

### 原生组件和原生插件
### Native components and native plugins

#### 基础组件里的原生组件
#### Native components in basic components

uni-app的基础组件里，有一批原生组件，如video、map...
Among the basic components of uni-app, there are a batch of native components, such as video, map...

这些组件如果用于vue页面，也就是webview渲染时，会造成层级高于普通前端组件的情况。
If these components are used in the vue page, that is, when the webview is rendered, the hierarchy will be higher than that of the ordinary front-end components.

它们的层级需要使用cover-view等特殊组件才能覆盖，同时在使用中有些需要注意的事情。
Their levels need to be covered by special components such as cover-view, and there are some things that need to be paid attention to in use.

在app-nvue里没有这些问题。
There are no such problems in app-nvue.

相关文档详见：[uni-app内置原生组件说明](/component/native-component)
For related documents, please refer to: [uni-app built-in native component description](/component/native-component)

#### uni-app的App端原生插件
#### App-side native plugin for uni-app

uni-app的App端支持原生插件，这类插件使用iOS或Android原生语言编写，封装成插件，供其他开发者使用js来调用。
The App side of uni-app supports native plug-ins, which are written in iOS or Android native language and packaged into plug-ins for other developers to use js to call.

原生插件分为原生组件component和原生模块module。
Native plug-ins are divided into native component and native module module.

其实原生组件component只能在App-nvue环境中使用。
In fact, the native component component can only be used in the App-nvue environment.

相关文档详见：[uni-app原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/README)
For related documents, please refer to: [uni-app native plug-in development](https://nativesupport.dcloud.net.cn/NativePlugin/README)

### datacom

datacom组件是一种数据驱动的、可云端一体的组件。
The datacom component is a data-driven, cloud-integrated component.

传统组件只涉及前端概念，而datacom拉通了uniCloud云端数据，是uni-app+uniCloud协同开发的必备提效工具。
Traditional components only involve front-end concepts, while datacom pulls uniCloud cloud data, which is an essential tool for uni-app+uniCloud collaborative development.

相关文档详见：[datacom组件](/component/datacom)
For related documents, please refer to: [datacom component](/component/datacom)

### 如何封装组件
### How to package components

封装组件涉及的知识点较多，相关文档详见：[vue组件详解](https://uniapp.dcloud.io/vue-components)
There are many knowledge points involved in encapsulating components. For related documents, please refer to: [Detailed explanation of vue components](https://uniapp.dcloud.io/vue-components)


### 扩展组件（uni-ui）@uniui
### Extension component (uni-ui) @uniui

uni-ui是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。
uni-ui is a cross-end UI library provided by DCloud. It is a cross-full-end UI framework based on vue components, flex layout, and dom-free.

uni-ui不包括基础组件，**它是基础组件的补充**。
uni-ui does not include the basic components, **it is a supplement to the basic components**.

#### uni ui产品特点
#### uni ui product features

1、高性能
1. High performance

目前为止，在小程序和混合app领域，uni ui是性能的标杆。
So far, in the field of small programs and hybrid apps, uni ui is the benchmark for performance.

- 自动差量更新数据
- Automatic difference update data

虽然uni-app支持小程序自定义组件，所有小程序的ui库都可以用。但小程序自定义组件的ui库都需要使用setData手动更新数据，在大数据量时、或高频更新数据时，很容易产生性能问题。
Although uni-app supports custom components for small programs, all the ui libraries of small programs can be used. However, the ui library of the small program custom component needs to use setData to manually update the data. When the amount of data is large or when the data is updated frequently, performance problems are prone to occur.

而uni ui属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。
The uni ui belongs to the vue component, and the bottom layer of the uni-app engine automatically diff updates the data. Of course, many vue components in the plug-in market have this feature.

- 优化逻辑层和视图层通讯折损
- Optimize the communication loss between the logic layer and the view layer

非H5，不管是小程序还是App，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
Non-H5, whether it is a small program or an App, whether it is the webview rendering of the app or the native rendering, the logic layer and the view layer are all separated. There is a loss of communication between the logic layer and the view layer.
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。
For example, drag a component that can be followed in the view layer. Due to the loss of communication, it is difficult to follow the hand in real time with js monitoring.

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以uni ui里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验
At this time, you need to use css animation and technologies such as wxs and bindingx provided by the bottom of the platform. However, these technologies are more complicated, so uni ui is encapsulated. For ui components that need to be operated with hands, such as the left-swiping menu of swiperaction list items, these technologies are used at the bottom to achieve a high-performance interactive experience.


- 背景停止
- Background stop

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。
Many ui components are always moving, such as carousels and marquees. Even if this window is blocked by the new window, it still consumes hardware resources in the background layer. In the Android webview version above chrome66, the background operation ui will cause very serious performance problems, causing the foreground interface to be obviously stuck.

而uni ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。
The uni ui component will automatically determine its display status, and will no longer consume hardware resources when the component is no longer visible.

2、全端
2. Full end

uni ui的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。
The components of uni ui are multi-end adaptive, and the bottom layer will smooth out the differences or bugs of many small program platforms.

比如导航栏navbar组件，会自动处理不同端的状态栏；
For example, the navbar component of the navigation bar will automatically process the status bars of different ends;
比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。
For example, the swiperaction component will use wxs technology for better interactive experience on apps and WeChat applets, but other applets that do not support wxs will use js to simulate similar effects.

uni ui还支持nvue原生渲染。
uni ui also supports nvue native rendering.

uni ui还支持pc等宽屏设备，可以通过PC浏览器访问[https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)体验
uni ui also supports widescreen devices such as pc, which can be accessed through a PC browser [https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/pages /extUI/badge/badge) experience

3、风格扩展
3. Style expansion

uni ui的默认风格是中型的，与uni-app基础组件风格一致。但它支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的扩展和切换应用的风格。
The default style of uni ui is medium-sized, which is consistent with the style of uni-app basic components. But it supports [uni.scss](https://uniapp.dcloud.io/collocation/uni-scss), which can easily expand and switch application styles.

ui是一种需求非常发散的产品，DCloud官方也无意用uni ui压制第三方ui插件的空间，但官方有义务在性能和跨端方面提供一个开源的标杆给大家。
UI is a product with very divergent needs. DCloud officials also have no intention of using uni ui to suppress the space of third-party UI plug-ins, but the official is obliged to provide an open source benchmark for everyone in terms of performance and cross-end.

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献uni ui的主题风格，满足更多用户的需求。
We welcome more outstanding ui components to appear, and we welcome more people to contribute uni ui theme style to meet the needs of more users.

4、与uniCloud协作
4. Collaborate with uniCloud

uni ui里很多组件与uniCloud打通，可大幅提升开发效率
Many components in uni ui are connected with uniCloud, which can greatly improve development efficiency

5、与uni统计自动集成实现免打点
5. Automatic integration with uni statistics to achieve no RBI

uni统计是优秀的多端统计平台，见[tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。
uni statistics is an excellent multi-terminal statistics platform, see [tongji.dcloud.net.cn](https://tongji.dcloud.net.cn).

除了一张报表看全端，它的另一个重要特点是免打点。
In addition to looking at the full end of a report, another important feature of it is that it does not require RBI.
比如使用uni ui的navbar标题栏、收藏、购物车等组件，均可实现自动打点，统计页面标题等各种行为数据。
For example, using uni ui's navbar title bar, favorites, shopping carts and other components, can realize automatic management, statistics of various behavior data such as page titles.
当然你也可以关闭uni统计，这不是强制的。
Of course you can also turn off uni statistics, this is not mandatory.

6、uni ui符合全套DCloud组件规范
6. Uni ui complies with the full set of DCloud component specifications

包括easycom、uni_module、datacom，全部遵循。
Including easycom, uni_module, datacom, all follow.

#### uni ui的使用方式
#### How to use uni ui

uni ui支持 HBuilderX直接新建项目模板、npm安装和单独导入个别组件等多种使用方式
uni ui supports HBuilderX to directly create new project templates, npm install and import individual components separately, etc.

![HBuilderX内创建uni ui项目](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)
![Create uni ui project in HBuilderX](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)

1. 在HBuilderX新建uni-app项目的模板中，选择uni ui模板
1. In the template of the newly created uni-app project in HBuilderX, select the uni ui template
由于uni-app独特的[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)技术，可以免引用、注册，直接使用各种符合规则的vue组件。
Due to uni-app's unique [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) technology, you can directly use various vue components that comply with the rules without reference and registration.

在代码区键入`u`，拉出各种内置或uni ui的组件列表，选择其中一个，即可使用该组件。
Type `u` in the code area to pull up a list of various built-in or uni ui components, select one of them, and you can use the component.

光标放在组件名称上，按F1，可以查阅组件的文档。
Place the cursor on the component name and press F1 to check the component's documentation.

![uni ui代码块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)
![uni ui code block](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

2. npm安装参考：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
2. npm installation reference: [https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

3. 单独安装组件
3. Install the components separately
如果你没有创建uni ui项目模板，也可以在你的工程里，单独安装需要的那个组件。下表为uni-ui的扩展组件清单，点击每个组件在详情页面可以导入组件到项目下，导入后直接使用即可，无需import和注册。
If you have not created a uni ui project template, you can also install the required component separately in your project. The following table is a list of uni-ui's extended components. Click each component on the detail page to import the component to the project. After importing, it can be used directly without import and registration.

uni ui有几十个组件，详情的uni ui组件清单，请参考：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
There are dozens of components in uni ui. For a detailed list of uni ui components, please refer to: [https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/ plugin?id=55)

**更多组件**
**More components**

除了基础组件、uni-ui，插件市场还有更多扩展组件、模板，包括前端组件和原生扩展组件，具体见[插件市场](https://ext.dcloud.net.cn/)。
In addition to basic components and uni-ui, the plug-in market has more extension components and templates, including front-end components and native extension components. For details, see [plug-in market](https://ext.dcloud.net.cn/).

关于其他vue的web组件库、小程序组件库是否能在uni-app中使用的问题，参考[https://ask.dcloud.net.cn/article/35489](https://ask.dcloud.net.cn/article/35489)
Regarding whether other vue web component libraries and small program component libraries can be used in uni-app, please refer to [https://ask.dcloud.net.cn/article/35489](https://ask.dcloud. net.cn/article/35489)
