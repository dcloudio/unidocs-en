### 组件使用的入门教程
### Introductory tutorial for component usage
- 组件是视图层的基本组成单元。
- Component is the basic unit of the view layer.
- 组件是一个单独且可复用的功能模块的封装。
- Component is the encapsulation of a single and reusable functional module.

每个组件，包括如下几个部分：以组件名称为标记的开始标签和结束标签、组件内容、组件属性、组件属性值。
Each component includes the following parts: start tag and end tag marked by component name, component content, component attribute and component attribute value.

- 组件名称由尖括号包裹，称为标签，它有开始标签和结束标签。结束标签的`<`后面用`/`来表示结束。结束标签也称为闭合标签。如下面示例的`<component-name>`是开始标签，`</component-name>`是结束标签。
- The component name is wrapped in angle brackets, called tag, which has a start tag and an end tag. Use `/` after `<` of the end tag to indicate the end. An end tag is also called a closing tag. For example, in the following example, `<component-name>` is the start tag, and `</component-name>` is the end tag.
- 在开始标签和结束标签之间，称为组件内容。如下面示例的`content`
- The content between the start tag and the end tag is called component content. For example, `content` in the example below
- 开始标签上可以写属性，属性可以有多个，多个属性之间用空格分割。如下面示例的`property1`和`property2`。注意闭合标签上不能写属性。
- Attributes can be written on the start tag, and there can be multiple attributes, which are separated by spaces. For example, `property1` and `property2` in the following example. Note that attributes cannot be written on closing tags.
- 每个属性通过`=`赋值。如下面的示例中，属性`property1`的值被设为字符串`value`。
- Each attribute is assigned a value by `=`. As in the example below, the value of the attribute `property1` is set to the string `value`.

> 注意：所有组件与属性名都是小写，单词之间以连字符``-``连接。
> Note: All component and attribute names are lowercase, with hyphens between words connected by a hyphen `-`.

```html
<component-name property1="value" property2="value">
	content
</component-name>
```

下面是一个基本组件的实例，在一个vue页面的根`<view>`组件下插入一个`<button>`组件。给这个组件的内容区写上文字“按钮”，同时给这个组件设置了一个属性“size”，并且“size”属性的值设为了“mini”。
The following is an example of a basic component. Insert an `<button>` component under the root `<view>` component of a vue page. Write the text "button" in the content area of this component, and set an attribute "size" for this component, and the attribute value of "size" is set to "mini".

> 注：按照[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)，每个vue文件的根节点必须为 `<template>`，且这个 `<template>` 下只能且必须有一个根 `<view>` 组件。
> Note: According to [vue single file component specification](https://cn.vuejs.org/v2/guide/single-file-components.html), the root node of each vue file must be `<template>`，and there must be only one root `<view>` component under this `<template>`.

```html
<template>
	<view>
		<button size="mini">Button</button>
	</view>
</template>
```

通过了解[button组件](/component/button)的文档，我们知道上述代码将在页面中绘制一个按钮，按钮显示的文字是“按钮”，按钮的大小是小尺寸的。
By understanding the documentation of [button component](/component/button), we can see that the above code will draw a button on the page, the text displayed on the button is "button", and the size of the button is small.

#### 组件的属性类型
#### Attribute type of components

组件的属性，有多种类型：
There are many types of attributes of components:

|类型|描述|注解|
| Type| Describe| Annotation|
|:-|:-|:-|
|Boolean|布尔值|组件写上该属性，不管该属性等于什么，其值都为 ``true``，只有组件上没有写该属性时，属性值才为 ``false``。如果属性值为变量，变量的值会被转换为 ``Boolean`` 类型。|
| Boolean| Boolean value| The attribute is written on the component, no matter what the attribute is equal to, its value is `true`. Only when the attribute is not written on the component, the attribute value is `false`. If the attribute value is a variable, the value of the variable will be converted to the `Boolean` type.|
|Number|数字|1, 2.5|
| Number| Digit| 1, 2.5|
|String|字符串|"string"|
| String| String| "string"|
|Array|数组|[ 1, "string" ]|
| Array| Array| \[ 1, "string" ]|
|Object|对象|{ key: value }|
| Object| Object| { key: value }|
|EventHandler|事件处理函数名|``handlerName`` 是 methods 中定义的事件处理函数名|
| EventHandler| Event handler function name| `handlerName` is the name of the event handling function defined in methods|
|Any|任意属性|&nbsp;|
| Any| Arbitrary attribute|  |

下面的例子演示了组件的属性设置bool值和数字的例子。注意`false`作为一个js变量，在组件的属性中使用时，属性前面需增加`:`冒号前缀，属性值仍使用引号包裹，但引号里不是字符串，而是js。
The following example demonstrates an example of bool value and number of the component attributes. Note that `false` is a js variable. When used in the attributes of the component, the prefix of `:` should be added to the front of the attribute. The attribute value is still wrapped in quotation marks, but what's inside the quotation marks is not a string, it’s js.

```html
<template>
	<view>
		<button size="mini" :disabled="false" hover-start-time=20 >Button</button>
	</view>
</template>
```

#### 公共属性列表
#### Public attribute list

每个组件都有各自定义的属性，但所有uni-app的组件，都有如下属性：
Each component has its own defined attributes, but all components of uni-app have the following attributes:

|属性名|类型|描述|注解|
| Attribute name| Type| Describe| Annotation|
|:-|:-|:-|:-|
|id|String|组件的唯一标示|一般用于获取组件上下文对象（如：[VideoContext](/api/media/video-context)），需要保持整个页面唯一|
| id| String| Unique identifier for components| It is generally used to obtain the component context object (such as: [VideoContext](/api/media/video-context)), and the entire page needs to be unique|
|ref|String|vue中组件的唯一标示|用来给子组件注册引用信息，详见 [Vue 文档](/vue-components?id=ref)|
| ref| String| Unique identifier of components in vue| It is used to register reference information for sub-components, see [Vue documentation](/vue-components?id=ref) for details|
|class|String|组件的样式类|在对应的 css 中定义的样式类|
| class| String| Style class of components| Style class defined in the corresponding css|
|style|String|组件的内联样式|可以动态设置的内联样式|
| style| String| Inline styles of components| Inline style that can be set dynamically|
|hidden|Boolean|组件是否隐藏|所有组件默认是显示的|
| hidden| Boolean| Whether components are hidden?| All components are displayed by default|
|data-*|Any|自定义属性|组件上触发的事件时，会发送给事件处理函数|
| data-*| Any| Custom attributes| When event is triggered on component, it will be sent to the event handler.|
|@\*|EventHandler|组件的事件|详见各组件详细文档，事件绑定参考 [事件处理器](/vue-basics?id=事件处理器)|
| @*| EventHandler| Component events| For details, please refer to the detailed documentation of each component. For event binding, please refer to [Event handler](/vue-basics?id=%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%99%A8)|

除了上述公共属性，还有一类特殊属性以`v-`开头，称之为vue指令，如v-if、v-else、v-for、v-model。详见[vue指令](/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4)
In addition to the public attributes mentioned above, there is a special class of attributes starting with `v-`, called vue instructions, such as v-if, v-else, v-for, and v-model. See [vue Instruction](/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4) for details

#### 在组件中使用js变量
#### Use js variables in components

组件中可以使用script的data中定义的js变量，但组件的属性中使用和内容区使用的用法不一样。
js variables defined in the data of script can be used in the component, but the usage in the attributes of the component is different from that in the content area.

- 在内容区使用时，使用两个花括号来包裹，如下面的`buttonText`
- When used in the content area, use two curly braces to wrap, such as the following `buttonText`
- 在属性值中使用时，属性名的前面要加冒号前缀
- When used in attribute values, the attribute name should be prefixed with a colon.

下面的button组件示例，等价于上一个的示例。只不过静态内容改成动态js。
The following examples of button component are equivalent to the previous examples. Only that the static content is changed to dynamic js.

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
				"buttonText": "button",
				"buttondisble":false
			}
		}
	}
</script>
```

#### 组件的事件
#### Component events

每个组件都有“事件”。事件就是在指定的条件下触发某个js方法。
Each component has an "event". Event is to trigger a js method under specified conditions.

比如button组件，有点击事件，也就是当手机用户点击这个button组件时，会触发这个事件。
For example, if button component has a click event, that means when the mobile phone user clicks the button component, this event will be triggered.

事件也是组件的属性，只不过这类属性以`@`为前缀。
Events are also attributes of components, but such attributes are prefixed with `@`.

事件的属性值，指向一个在script的methods里定义过的js方法，还可以给方法传参数。
The attribute value of the event points to a js method defined in the methods of script, and you can also pass parameters to the method.

下面是组件事件的示例：
The following are examples of component events:
- click是button组件的点击事件，在用户点击这个button时触发
- click is the click event of the button component, which is triggered when the user clicks the button
- click指向了methods中定义的goto方法，并且传递了一个参数'/pages/about/about'
- click points to the goto method defined in methods and passes the parameter '/pages/about/about'

```html
<template>
	<view>
		<button size="mini" @click="goto('/pages/about/about')">Button</button>
	</view>
</template>
<script>
    export default {
        methods: {
            goto(url) {
                console.log("button is clicked, and the parameter passed in is: " + url)
            }
        }
    }
</script>
```


### 基础组件
### Basic component

uni-app的组件，分为基础组件和扩展组件。
uni-app components are divided into basic components and extended components.

基础组件在uni-app框架中已经内置，无需将内置组件的文件导入项目，也无需注册内置组件，随时可以直接使用，比如`<view>`组件。
The basic components have been built in the uni-app framework. There is no need to import the files of the built-in components into the project or register the built-in components, which can be used directly at any time, such as the `<view>` component.

除了基础组件，都称为扩展组件。扩展组件需要将组件导入项目中才可以使用。
All components other than the basic components are called extended components. The extended components can be used only after they are imported into the project.

uni-app为开发者提供了一系列基础组件，类似HTML里的基础标签元素。
uni-app provides developers with a series of basic components, similar to the basic tag elements in HTML.

但uni-app的组件与HTML不同，可更好的满足手机端的使用习惯。
However, the components of uni-app are different from HTML, which can better meet the usage habits of mobile device users.

虽然不推荐使用HTML标签，但实际上如果开发者写了`div`等标签，在编译到非H5平台时也会被编译器转换为`view`标签，类似的还有`span`转`text`、`a`转`navigator`等，包括css里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用view等组件。
Although HTML tags are not recommended, in fact, if developers write tags such as `div`, they will be converted to `view` tags by the compiler when they are compiled to a non-H5 platform. Similarly, `span` is converted to `text`, `A` is converted to `navigator`, etc., including the element selector in css. However, for the sake of convenient management and unified policies, it is still recommended to use components such as view when writing new code.

开发者可以通过组合这些基础组件进行快速开发。在需要复用的情况下可封装成扩展组件。
Developers can combine these basic components for quick development. It can be encapsulated as an extended component if reuse is needed.


`uni-app` 基础组件规范，需要注意组件上的事件绑定，需要以 vue 的事件绑定语法来绑定，如 bindchange="eventName" 事件，需要写成 `@change="eventName"`
For the `uni-app` basic component specification, you need to pay attention to the event binding on the component, which needs to be bound by vue's event binding syntax, such as bindchange="eventName" event, which needs to be written as `@change="eventName"`

```html
	<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
		<view class="picker">
		  Current selection: {{date}}
		</view>
	</picker>
```


#### 基础组件列表
#### List of basic components

基础组件分为以下十几大类：
Basic components are divided into the following ten categories:


**视图容器（View Container）：**
**View Container:**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[view](component/view.md)|视图容器，类似于HTML中的div|
| [view](component/view.md)| View container is similar to div in HTML|
|[scroll-view](component/scroll-view.md)|可滚动视图容器|
| [scroll-view](component/scroll-view.md)| Scrollable view container|
|[swiper](component/swiper.md)|滑块视图容器，比如用于轮播banner|
| [swiper](component/swiper.md)| Slide view container, such as used for carousel banner|
|[match-media](component/match-media.md)|屏幕动态适配组件，比如窄屏上不显示某些内容|
| [match-media](component/match-media.md)| Screen dynamic adaptation components, such as hiding certain contents on narrow screen|
|[movable-area](component/movable-view.md?id=movable-area)|可拖动区域|
| [movable-area](component/movable-view.md?id=movable-area)| Draggable area|
|[movable-view](component/movable-view.md?id=movable-view)|可移动的视图容器，在页面中可以拖拽滑动或双指缩放。movable-view必须在movable-area组件中|
| [movable-view](component/movable-view.md?id=movable-view)| Movable view container. Dragging and sliding or scaling with two fingers on the page is allowed. movable-view must be in the movable-area component|
|[cover-view](/component/cover-view?id=cover-view)|可覆盖在原生组件的上的文本组件|
| [cover-view](/component/cover-view?id=cover-view)| A text component that can be covered on the native component|
|[cover-image](/component/cover-view?id=cover-image)|可覆盖在原生组件的上的图片组件|
| [cover-image](/component/cover-view?id=cover-image)| An image component that can be covered on the native component|

**基础内容（Basic Content）：**
**Basic Content:**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[icon](component/icon.md)|图标|
| [icon](component/icon.md)| Icon|
|[text](component/text.md)|文字|
| [text](component/text.md)| Word|
|[rich-text](component/rich-text.md)|富文本显示组件|
| [rich-text](component/rich-text.md)| Rich-text display component|
|[progress](component/progress.md)|进度条|
| [progress](component/progress.md)| Progress bar|

**表单组件（Form）：**
**Form:**

|标签名|说明|
| Label name| Instruction|
|:-|:-|
|[button](component/button.md)|按钮|
| [button](component/button.md)| Button.|
|[checkbox](component/checkbox.md)|多项选择器|
| [checkbox](component/checkbox.md)| Multiple selector|
|[editor](component/editor.md)|富文本输入框|
| [editor](component/editor.md)| Rich-text input box|
|[form](component/form.md)|表单|
| [form](component/form.md)| Form|
|[input](component/input.md)|输入框|
| [input](component/input.md)| Input box|
|[label](component/label.md)|标签|
| [label](component/label.md)| Label|
|[picker](component/picker.md)|弹出式列表选择器|
| [picker](component/picker.md)| Pop-up list selector|
|[picker-view](component/picker-view.md)|窗体内嵌式列表选择器|
| [picker-view](component/picker-view.md)| Window embedded list selector|
|[radio](component/radio.md)|单项选择器|
| [radio](component/radio.md)| Single selector|
|[slider](component/slider.md)|滑动选择器|
| [slider](component/slider.md)| Slide selector|
|[switch](component/switch.md)|开关选择器|
| [switch](component/switch.md)| Switch selector|
|[textarea](component/textarea.md)|多行文本输入框|
| [textarea](component/textarea.md)| Multi-line text input box|

**路由与页面跳转（Navigation）：**
**Routing and Page Navigation:**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[navigator](component/navigator.md)|页面链接。类似于HTML中的a标签|
| [navigator](component/navigator.md)| Page link. Similar to the "a" tag in HTML|

**媒体组件（Media）：**
**Media:**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[audio](component/audio.md)|音频|
| [audio](component/audio.md)| Audio|
|[camera](component/camera.md)|相机|
| [camera](component/camera.md)| Camera|
|[image](component/image.md)|图片|
| [image](component/image.md)| Image|
|[video](component/video.md)|视频|
| [video](component/video.md)| Video|
|[live-player](component/live-player.md)|直播播放|
| [live-player](component/live-player.md)| Live broadcast|
|[live-pusher](component/live-pusher.md)|实时音视频录制，也称直播推流|
| [live-pusher](component/live-pusher.md)| Live audio and video recording, also known as live-pusher|

**地图（Map）：**
**Map:**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[map](component/map.md)|地图|
| [map](component/map.md)| Map|

**画布（Canvas）：**
**Canvas:**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[canvas](component/canvas.md)|画布|
| [canvas](component/canvas.md)| Canvas|

**webview（Web-view）：**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[web-view](component/web-view.md)|web浏览器组件|
| [web-view](component/web-view.md)| web browser components|

**广告**
**Advertisement**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[ad](component/ad.md)|广告组件|
| [ad](component/ad.md)| Advertisement component|
|[ad-draw](component/ad-draw.md)|沉浸视频流广告组件|
| [ad-draw](component/ad-draw.md)| Immersive video streaming AD components|

**页面属性配置**
**Page attribute configuration**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[custom-tab-bar](component/custom-tab-bar.md)|底部tabbar自定义组件|
| [custom-tab-bar](component/custom-tab-bar.md)| Bottom tabbar custom component|
|[navigation-bar](component/navigation-bar.md)|页面顶部导航|
| [navigation-bar](component/navigation-bar.md)| Page top navigation|
|[page-meta](component/page-meta.md)|页面属性配置节点|
| [page-meta](component/page-meta.md)| Page attribute configuration node|

**uniCloud**

|组件名|说明|
| Component name| Instruction|
|:-|:-|
|[unicloud-db组件](uniCloud/unicloud-db)|uniCloud数据库访问和操作组件|
| [unicloud-db component](uniCloud/unicloud-db)| uniCloud database access and operation components|

**各平台专有组件**
**Specific components for each platform**

在nvue平台，还有一些专有组件，比如open-data，详见左侧导航
On nvue platform, there are some proprietary components, such as open-data. See the left navigation for details

### 扩展组件的意义
### Meaning of extending components

虽然所有的业务需求都可以通过基础组件满足，但仅有基础组件是低效的，实际开发中会有很多封装的组件。
Although all business requirements can be met by basic components, but basic components alone are inefficient, and there will be many encapsulated components in actual development.

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)
For example, if we need a pentagram click rating component, it is available in the DCloud plug-in market: [https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)

把这个uni-rate组件导入到你的uni-app项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。
Import this uni-rate component into your uni-app project, refer to it in the required vue page, and you can display this five-pointed star component in the specified place.

```html
	<!-- 在index.vue页面引用 uni-rate 组件-->
	<!-- Refer the uni-rate component on the index.vue page -->
	<template>
		<view>
			<uni-rate></uni-rate><!-- A five-pointed star will be displayed here, and  will be automatically lit after clicking on it -->
		</view>
	</template>
```

封装扩展组件的优势：
Advantages of encapsulated extended components:

- 可以将组件进行任意次数的复用。
- Components can be reused arbitrarily.
- 合理的划分组件，有助于提高应用性能。
- Reasonable division of components is helpful to improve the application performance.
- 代码更加方便组织和管理，并且扩展性也更强，便于多人协同开发。
- The code is more convenient for organization and management, and has stronger expansibility, which is convenient for collaborative development by many people.
- 组件化开发能大幅度提高应用开发效率、测试性、复用性等。
- Component-based development can greatly improve the efficiency, testability and reusability of application development.

### 组件的类别
### Component categories

uni-app支持的组件为vue组件。
The vue components are supported by uni-app.

- vue组件：[文档](https://uniapp.dcloud.net.cn/vue-components?id=%e6%a6%82%e5%bf%b5)
- vue components: [document](https://uniapp.dcloud.net.cn/vue-components?id=%e6%a6%82%e5%bf%b5)


如果扩展组件符合uni-app的`easycom`组件规范，则可以免注册，直接使用。比如uni ui扩展组件就符合`easycom`组件规范。
If the extension component complies with the uni-app `easycom` component specification, it can be used directly without registration. For example, the uni ui extension component conforms to the `easycom` component specification.

如果组件不符合easycom规范，则需要在代码里手动import和注册组件，然后才能使用。
For the components not conforming to the easycom specification, you need to manually import and register these components in the code before implementation.

除了easycom规范外，扩展组件还有很多概念，比如`uni_module`、`datacom`、`原生组件`、`uniCloud组件`。
Besides easycom specification, there are many concepts of extension components, such as`uni_module`, `datacom`, `Native component`, `uniCloud component`.

接下来一一讲解。
Let us explain them one by one.

### easycom组件规范
### easycom component specification

> `HBuilderX 2.5.5`起支持
> Supported in `HBuilderX 2.5.5`+

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。
Traditional vue components need to be installed, referenced and registered before they can be used.`easycom` Streamline it to one step.

只要组件安装在项目的components目录下或`uni_modules`目录下，并符合`components/组件名称/组件名称.vue`目录结构。就可以不用引用、注册，直接在页面中使用。
As long as the components are installed in the components directory of the project or`uni_modules` directory, and conform to `components/ component name/ component name.vue` directory structure. You can use it directly in the page without reference or registration.

比如前述举例的[uni-rate组件](https://ext.dcloud.net.cn/plugin?id=33)，它导入到uni-app项目后，存放在了目录/components/uni-rate/uni-rate.vue
For example, the [uni-rate component](https://ext.dcloud.net.cn/plugin?id=33) in the previous example, after it is imported into the uni-app project, it is stored in the directory /components/uni-rate/uni-rate.vue

同时它的组件名称也叫uni-rate，所以这样的组件，不用在script里注册和引用。
At the same time, its component is also called uni-rate, so that such a component does not need to be registered and referenced in script.
如下：
As follows:
```html
<template>
		<view>
			<uni-rate></uni-rate><!-- A five-pointed star will be displayed here, and  will be automatically lit after clicking on it -->
		</view>
	</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
	//There is no need to introduce by import or register uni-list components in components. You can use it directly in template
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
```

不管components目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
No matter how many components are installed in the components directory, `easycom` will automatically remove unused components after packaging, which is particularly friendly to the use of component library.

组件库批量安装，随意使用，自动按需打包。以官方的`uni-ui`为例，在HBuilderX新建项目界面选择`uni-ui`项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。
The component library is installed in batches, and it can be used at will, and automatically packed on demand. Take the official `uni-ui` as an example, select the `uni-ui` project template in the HBuilderX new project interface, just knock u in the page to pull out a large number of component code blocks, and select directly to use. Greatly improve the development efficiency and lower the use threshold.

在[DCloud插件市场](https://ext.dcloud.net.cn/)下载符合`components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。
The components that conform to the directory structure of `components/ component name/ component name.vue` downloaded in the [DCloud plug-in market](https://ext.dcloud.net.cn/) can be used directly.

`easycom`是自动开启的，不需要手动开启。
`easycom` is automatically turned on instead of manually.

如果你的组件名称或路径不符合easycom的默认规范，可以在`pages.json`的`easycom`节点进行个性化设置，自定义匹配组件的策略。[另见](/collocation/pages?id=easycom)
If your component name or path does not comply with easycom's default specification, you can personalize it in the `easycom` node of `pages.json` to customize the matching component strategy. [See also](/collocation/pages?id=easycom)

如果不使用easycom，手动引用和注册vue组件，则需要分3步写如下代码：
If you do not use easycom to manually reference and register vue components, you need to write the following code in 3 steps:

1. import导入组件
1. Import components in import
2. components里注册组件
2. Registering components in components
3. template中使用组件
3. Use components in template

```html
	<template>
		<view>
			<uni-rate text="1"></uni-rate><!-- 3. Use  components -->
		</view>
	</template>
	<script>
		//1.导入组件
		//1. Import component
		import uniRate from '@/components/uni-rate/uni-rate.vue';
		export default {
			//2.注册组件
			//2. Register components
			components:{uniRate }
		}
	</script>
```

### uni_module规范
### uni_module specification

uni_module其实不止服务于组件，它可以服务于组件、js库、页面、项目等所有DCloud插件市场所支持的种类。
uni_module actually serves more than components, it can serve components, js libraries, pages, projects and other categories supported by the DCloud plug-in market.

符合uni_module规范的组件都在项目的`uni_modules`目录下，以插件id为目录存放。（项目模板不放在`uni_modules`目录下）
Components that meet the uni_module specification are stored in the `uni_modules` directory of the project, with the plug-in id as the directory. (The project template is not placed in the `uni_modules` directory)

在HBuilderX中点右键可方便的更新插件，插件作者也可以方便的上传插件。
Right-clicking in HBuilderX can conveniently update plug-ins, and plug-in authors can also conveniently upload the plug-ins.

uni_module还支持云端一体的插件。
uni_module also supports plug-ins for cloud integration.

uni_module有详细的专项文档，请另行查阅[uni_module规范](/uni_modules)。
uni_module has detailed special documents, please refer to [uni_module specification](/uni_modules) separately.

### uniCloud组件
### uniCloud component

uniCloud是DCloud提供的、配套uni-app的云开发服务。
uniCloud is a cloud development service provided by DCloud and used with uni-app.

uni-app的基础组件中，有一个特殊基础组件是：`<unicloud-db>`组件。
Among the basic components of uni-app, there is a special basic component: `<unicloud-db>` component.

它可以在前端直接获取和操作uniCloud的云端数据库。
It can directly acquire and operate the cloud database of uniCloud at the front end.

相关文档详见：[unicloud-db组件](uniCloud/unicloud-db)
For related documents, please refer to: [unicloud-db component](uniCloud/unicloud-db)

除了内置的数据库组件，在uni ui扩展库里还有uniCloud的文件选择和上传组件，参考：[uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)
In addition to the built-in database components, there are also uniCloud file selection and upload components in the uni ui extension library, please refer to: [uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)

### 原生组件和原生插件
### Native components and native plug-ins

#### 基础组件里的原生组件
#### Native components from basic components

uni-app的基础组件里，有一批原生组件，如video、map...
There are a number of native components from the basic components of uni-app, such as video and map ...

这些组件如果用于vue页面，也就是webview渲染时，会造成层级高于普通前端组件的情况。
If these components are used in vue pages for webview rendering, it will obtain a hierarchy higher than that of ordinary front-end components.

它们的层级需要使用cover-view等特殊组件才能覆盖，同时在使用中有些需要注意的事情。
Their hierarchies can only be coved with some special components like cover-view and more considerations are required to use them.

在app-nvue里没有这些问题。
There is no such problem in app-nvue.

相关文档详见：[uni-app内置原生组件说明](/component/native-component)
For related documents, please see: [uni-app built-in native component description](/component/native-component)

#### uni-app的App端原生插件
#### The App-side native plug-in of uni-app

uni-app的App端支持原生插件，这类插件使用iOS或Android原生语言编写，封装成插件，供其他开发者使用js来调用。
The App side of uni-app supports the native plug-ins, which are written in the native language of iOS or Android and encapsulated into plug-ins for other developers to call with js.

原生插件分为原生组件component和原生模块module。
Native plug-ins can be divided into native components and native modules.

其实原生组件component只能在App-nvue环境中使用。
Actually, the native component can only be used in the App-nvue environment.

相关文档详见：[uni-app原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/README)
For related documents, please see: [uni-app native plug-in development](https://nativesupport.dcloud.net.cn/NativePlugin/README)

### datacom

datacom组件是一种数据驱动的、可云端一体的组件。
datacom component is a data-driven, cloud-integrated component.

传统组件只涉及前端概念，而datacom拉通了uniCloud云端数据，是uni-app+uniCloud协同开发的必备提效工具。
Traditional components only involve the front-end concept, while datacom pulls through uniCloud cloud data, which is an essential efficiency tool for the collaborative development of uni-app+uniCloud.

相关文档详见：[datacom组件](/component/datacom)
For related documents, please see: [datacom component](/component/datacom)

### 如何封装组件
### How to encapsulate components

封装组件涉及的知识点较多，相关文档详见：[vue组件详解](https://uniapp.dcloud.io/vue-components)
Encapsulating components involves a lot of knowledge, and related documents can be found in: [Detailed explanation of vue component](https://uniapp.dcloud.io/vue-components)


### 扩展组件（uni-ui）@uniui
### Expanded component (uni-ui)@uniui

uni-ui是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。
uni-ui is a cross-end ui library provided by DCloud, which is a cross-all-end ui framework based on vue component, flex layout and dom-free.

uni-ui不包括基础组件，**它是基础组件的补充**。
uni-ui does not include the basic components,  **it is a supplement to the basic components**.

#### uni ui产品特点
#### uni ui product features

1、高性能
1、High performance

目前为止，在混合app领域，uni ui是性能的标杆。
So far, in the field of hybrid app, uni ui is the benchmark of performance.

- 自动差量更新数据
- Automatic differential update data

uni ui属于vue组件，uni-app引擎底层自动diff更新数据。当然其实插件市场里众多vue组件都具备这个特点。
uni ui belongs to vue component, and the bottom layer of uni-app engine automatically diff the updates data. Of course, many vue components on the plug-in market have the same feature.

- 优化逻辑层和视图层通讯折损
- Communication loss on the optimized logical layer and view layer

非H5，App端，不管是app的webview渲染还是原生渲染，全都是逻辑层和视图层分离的。这里就有一个逻辑层和视图层通讯的折损问题。
Not on H5 but on App side, the logical layer and view layer are separated both for webview rendering and native rendering of app. There is a problem of communication loss between the logical layer and the view layer.
比如在视图层拖动一个可跟手的组件，由于通讯的损耗，用js监听很难做到实时跟手。
For example, if you drag a component that can follow the finger on the view layer, it is difficult to achieve the immediacy with js listening to due to communication loss.

这时就需要使用css动画以及平台底层提供的wxs、bindingx等技术。不过这些技术都比较复杂，所以uni ui里做了封装，在需要跟手式操作的ui组件，比如swiperaction列表项左滑菜单，就在底层使用了这些技术，实现了高性能的交互体验
For such case, we need to use css animation and wxs, bindingx and other technologies provided by the bottom of the platform. However, these technologies are complicated and encapsulated in uni ui, requiring ui components that conduct the follow-the-finger operation. For example, the left slide menu of the swiperaction list items used these technologies at bottom layer, realizing high-performance interactive experience

- 背景停止
- Background stop

很多ui组件是会一直动的，比如轮播图、跑马灯。即便这个窗体被新窗体挡住，它在背景层仍然在消耗着硬件资源。在Android的webview版本为chrome66以上，背景操作ui会引发很严重的性能问题，造成前台界面明显卡顿。
Many ui components keep moving, such as carousel and marquee. Even the window is blocked by another one, it still consumes hardware resources in the background layer. In the webview of chrome66 or above on Android, the operating ui in the background will cause serious performance problems, resulting in obvious jamming on the front-end.

而uni ui的组件，会自动判断自己的显示状态，在组件不再可见时，不会再消耗硬件资源。
On the other hand, the components of uni ui will automatically determine their display status, and the invisible components will not consume hardware resources anymore.

2、全端
2、All platforms

uni ui的组件都是多端自适应的，底层会抹平很多平台的差异或bug。
uni ui components are multi-side adaptive, and the bottom layer will smooth out many platform differences or bugs.

比如导航栏navbar组件，会自动处理不同端的状态栏；
For example, the navbar component of the navigation bar will automatically process the status bars at different sides.
比如swiperaction组件，在app上会使用交互体验更好的wxs技术。
For example, the swiperaction component will use wxs technology with better interactive experience on app.

uni ui还支持nvue原生渲染。
uni ui also supports nvue native rendering.

uni ui还支持pc等宽屏设备，可以通过PC浏览器访问[https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)体验
uni ui also supports widescreen devices such as pc, which can be experienced by accessing [https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge) through a PC browser

3、风格扩展
3、Style expansion

uni ui的默认风格是中型的，与uni-app基础组件风格一致。但它支持[uni.scss](https://uniapp.dcloud.io/collocation/uni-scss)，可以方便的扩展和切换应用的风格。
The default style of uni ui is neutral, in consistent with the style of uni-app basic components. But it supports [uni.scss](https://uniapp.dcloud.io/collocation/uni-scss), which can easily expand and switch application styles.

ui是一种需求非常发散的产品，DCloud官方也无意用uni ui压制第三方ui插件的空间，但官方有义务在性能和跨端方面提供一个开源的标杆给大家。
ui is a product with very divergent demand, and DCloud has no intention to suppress the space of third-party ui plug-ins with uni ui, but the official has the obligation to provide an open source benchmark for everyone in terms of performance and cross-end.

我们欢迎更多优秀的ui组件出现，也欢迎更多人贡献uni ui的主题风格，满足更多用户的需求。
We welcome more excellent ui components and more people to contribute the theme style of uni ui to meet the needs of more users.

4、与uniCloud协作
4、Collaboration with uniCloud

uni ui里很多组件与uniCloud打通，可大幅提升开发效率
Many components in uni ui are shared with uniCloud, which can greatly improve the development efficiency

5、uni ui符合全套DCloud组件规范
5、uni ui conforms to the full set of DCloud component specifications

包括easycom、uni_module、datacom，全部遵循。
The easycom, uni_module and datacom, etc. are all complied.

#### uni ui的使用方式
#### Usage of uni ui

uni ui支持 HBuilderX直接新建项目模板、npm安装和单独导入个别组件等多种使用方式
uni ui supports HBuilderX's direct creation of project templates, npm installation and independent import of individual components and other usages.

![HBuilderX内创建uni ui项目](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)
![Creating uni ui project in HBuilderX](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg)

1. 在HBuilderX新建uni-app项目的模板中，选择uni ui模板
1. In the template of the newly-built uni-app project in HBuilderX, select the uni ui template.
由于uni-app独特的[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)技术，可以免引用、注册，直接使用各种符合规则的vue组件。
Due to the unique [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) technology of uni-app, you can use all kinds of vue components that meet the rules directly without reference and registration.

在代码区键入`u`，拉出各种内置或uni ui的组件列表，选择其中一个，即可使用该组件。
Type `u` in the code area to pull up a list of various built-in or uni ui components, and select one of them to use the component.

光标放在组件名称上，按F1，可以查阅组件的文档。
Place the cursor on the component name and press F1 to check the component's documentation.

![uni ui代码块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)
![uni ui code block](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg)

2. npm安装参考：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
2. npm installation reference: [https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

3. 单独安装组件
3. Install the components separately.
如果你没有创建uni ui项目模板，也可以在你的工程里，单独安装需要的那个组件。下表为uni-ui的扩展组件清单，点击每个组件在详情页面可以导入组件到项目下，导入后直接使用即可，无需import和注册。
If you have not created the uni ui project template, you can also install the required components separately in your project. The following table is a list of extended components of uni-ui. Click each component on the detail page to import components into the project, which can be used directly after importing without other import or registration.

uni ui有几十个组件，详情的uni ui组件清单，请参考：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
uni ui has dozens of components. For a detailed list of uni ui components, please refer to: [https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

**更多组件**
**More components**

除了基础组件、uni-ui，插件市场还有更多扩展组件、模板，包括前端组件和原生扩展组件，具体见[插件市场](https://ext.dcloud.net.cn/)。
In addition to basic components and uni-ui, there are more extension components and templates in the plug-in market, including front-end components and native extension components. For details, see [Plug-in market](https://ext.dcloud.net.cn/).

关于其他vue的web组件库是否能在uni-app中使用的问题，参考[https://ask.dcloud.net.cn/article/35489](https://ask.dcloud.net.cn/article/35489)
Regarding whether other vue web component libraries can be used in uni-app, please refer to [https://ask.dcloud.net.cn/article/35489](https://ask.dcloud.net.cn/article/35489)
