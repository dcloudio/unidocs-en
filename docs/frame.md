
`uni-app` 使用`Vue`的语法。
`uni-app` uses the syntax of `Vue`.

## 开发规范
## Development specification

为了实现多端兼容，综合考虑编译速度、运行性能等因素，`uni-app` 约定了如下开发规范：
In order to achieve multi-terminal compatibility, factors such as compilation speed and running performance are comprehensively considered. `uni-app` has agreed on the following development specifications:

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- The page file follows the [Vue Single File Component (SFC) specification](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签采用自定义规范，详见[uni-app 组件规范](component/README.md)
- The component label adopts a custom specification, see [uni-app component specification](component/README.md) for details
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
- Data binding and event handling are the same as the `Vue.js` specification, while supplementing the life cycle of App and page
- 为兼容多端运行，建议使用flex布局进行开发
- To be compatible with multi-side operation, it is recommended to use flex layout for development

## 目录结构
## Directory structure

一个uni-app工程，默认包含如下目录及文件：
A uni-app project, which contains the following directories and files by default:

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─components            ...
│  └─comp-a.vue         ...
├─hybrid                ...
├─platforms             ...
├─pages                 ...
│  ├─index
│  │  └─index.vue       ...
│  └─list
│     └─list.vue        ...
├─static                ...
├─uni_modules           ...
├─main.js               ...
├─App.vue               ...
├─manifest.json         ...
└─pages.json            ...
	</code>
</pre>

**Tips**
- 编译到任意平台时，`static` 目录下的文件均会被完整打包进去，且不会编译。非 `static` 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。
- When compiling to any platform, the files in the `static` directory will be fully packaged and will not be compiled. Files (vue, js, css, etc.) not in the `static` directory will be packaged and compiled only when they are referenced.
- `static` 目录下的 `js` 文件不会被编译，如果里面有 `es6` 的代码，不经过转换直接运行，在手机设备上会报错。
- The `js` file in the `static` directory will not be compiled. If there is `es6` code in it, it will report an error on the mobile device if it is run without conversion.
- `css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。
- `css`, `less/scss` and other resources should not be placed in the `static` directory. It is recommended that these public resources be placed in the self-built `common` directory.

|有效目录|说明|
| Valid directory| Instruction|
|:-:|:-:|
|app-plus|App|
|h5|H5|

## 资源路径说明
## Resource path description



### 模板内引入静态资源
### Introduce static resources into the template

> `template`内引入静态资源，如`image`、`video`等标签的`src`属性时，可以使用相对路径或者绝对路径，形式如下
> When introducing static resources into `template`, such as `image`, `video` and other tags of the `src` attribute, you can use a relative path or an absolute path in the form as follows

```html
<!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 -->
<!-- For absolute path, /static refers to the static directory under the root directory. For cli project, /static refers to the static directory under the src directory -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- 相对路径 -->
<!-- Relative path -->
<image class="logo" src="../../static/logo.png"></image>
```

**注意**
**Notice**

- `@`开头的绝对路径以及相对路径会经过base64转换规则校验
- The absolute path and relative path starting with `@` will be verified by base64 conversion rules
- 引入的静态资源在非h5平台，均不转为base64。
- The introduced static resources are not converted to base64 on non-h5 platforms.
- H5平台，小于4kb的资源会被转换成base64，其余不转。
- On H5 platform, resources less than 4kb will be converted to base64, and the rest will not be converted.
- 自`HBuilderX 2.6.6`起`template`内支持`@`开头路径引入静态资源，旧版本不支持此方式
- From `HBuilderX 2.6.6`, `template` supports the introduction of static resources in the path starting with `@`, which is not supported by the old version.
- App平台自`HBuilderX 2.6.9`起`template`节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
- From `HBuilderX 2.6.9` on the App platform, when static resource files (such as pictures) are referenced in the `template` node, adjust the search strategy to [Search based on the path of the current file], which is consistent with other platforms

### js文件引入
### js file introduction

> `js`文件或`script`标签内（包括renderjs等）引入`js`文件时，可以使用相对路径和绝对路径，形式如下
> When importing `js` files in `js` files or `script` tags (including renderjs, etc.), you can use relative paths and absolute paths in the following form

```js
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
//Absolute path, @ points to the root directory of the project, and in cli projects @ points to the src directory
import add from '@/common/add.js'
// 相对路径
// Relative path
import add from '../../common/add.js'
```

**注意**
**Notice**

- js文件不支持使用`/`开头的方式引入
- js files do not support the introduction of the method starting with `/`

### css引入静态资源
### Introduce static resources into css

> `css`文件或`style标签`内引入`css`文件时（scss、less文件同理），可以使用相对路径或绝对路径（`HBuilderX 2.6.6`）
> For `css` files or when `css` files are introduced in `style label` (same for scss and less files), you can use relative or absolute paths (`HBuilderX 2.6.6`)

```css
/* Absolute path */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* Relative path */
@import url('../../common/uni.css');
```

**注意**
**Notice**

- 自`HBuilderX 2.6.6`起支持绝对路径引入静态资源，旧版本不支持此方式
- From `HBuilderX 2.6.6`, static resources are imported using absolute paths, which is not supported by the old version.

> `css`文件或`style标签`内引用的图片路径可以使用相对路径也可以使用绝对路径。
> For `css` files or pictures referenced in `style label`, you can use a relative path or an absolute path.

```css
/* Absolute path */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* Relative path */
background-image: url(../../static/logo.png);
```

**Tips**

- 引入字体图标请参考，[字体图标](frame?id=字体图标)
- For the introduction of font icons, please refer to [Font icons](frame?id=%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87)
- `@`开头的绝对路径以及相对路径会经过base64转换规则校验
- The absolute path and relative path starting with `@` will be verified by base64 conversion rules
- h5平台，小于4kb会转base64，超出4kb时不转。
- On H5 platform, resources less than 4kb will be converted to base64 while those more than 4kb will not.
- 其余平台不会转base64
- Resources on other platforms will not be converted to base64

## 生命周期
## Lifecycle


### 应用生命周期
### Application life cycle

``uni-app`` 支持 onLaunch、onShow、onHide 等应用生命周期函数，详情请参考[应用生命周期](/collocation/frame/lifecycle?id=应用生命周期)
`uni-app` supports application life cycle functions such as onLaunch, onShow and onHide. Please refer to [Application life cycle](/collocation/frame/lifecycle?id=%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F) for details.

### 页面生命周期
### Page life cycle

``uni-app`` 支持 onLoad、onShow、onReady 等生命周期函数，详情请参考[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)
`uni-app` supports life cycle functions such as onLoad, onShow and onReady. Please refer to [Page life cycle](/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F) for details.

## 路由
## Routing

``uni-app``页面路由为框架统一管理，开发者需要在[pages.json](/collocation/pages?id=pages)里配置每个路由页面的路径及页面样式。所以 `uni-app` 的路由用法与 ``Vue Router`` 不同，如仍希望采用 `Vue Router` 方式管理路由，可在插件市场搜索 [Vue-Router](https://ext.dcloud.net.cn/search?q=vue-router)。
`uni-app` page routing is managed in a unified way as a framework, and developers need to configure the path and page style of each routing page in [pages.json](/collocation/pages?id=pages). Therefore, the routing usage of `uni-app` is different from `Vue Router`. If you still want to use `Vue Router` to manage routing, you can search for [Vue-Router](https://ext.dcloud.net.cn/search?q=vue-router) in the plug-in market.

### 路由跳转
### Routing jump

``uni-app`` 有两种页面路由跳转方式：使用[navigator](/component/navigator)组件跳转、调用[API](/api/router)跳转。
`uni-app` has two page routing jump methods: jump through the [navigator](/component/navigator) component, and jump through the [API](/api/router).

### 页面栈
### Page stack

框架以栈的形式管理当前所有页面， 当发生路由切换的时候，页面栈的表现如下：
The framework manages all current pages in the form of stack. When a route switch occurs, the page stack behaves as follows:

|路由方式	|页面栈表现							|触发时机																						|
| Routing mode| Page stack performance| Trigger timing|
|---		|---								|---																							|
|初始化		|新页面入栈							|uni-app 打开的第一个页面																			|
| Initialization| New page onto the stack| The first page opened by uni-app|
|打开新页面	|新页面入栈							|调用 API &nbsp; [uni.navigateTo](/api/router?id=navigateto) &nbsp;、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigate"/&gt;</a>							|
| Open a new page| New page onto the stack| Call API [uni.navigateTo](/api/router?id=navigateto), use component <a href="/component/navigator?id=navigator">\<navigator open-type="navigate"/></a>|
|页面重定向	|当前页面出栈，新页面入栈			|调用 API  &nbsp; [uni.redirectTo](/api/router?id=redirectto) &nbsp;、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="redirectTo"/&gt;</a>							|
| Page redirection| The current page is out of the stack, and the new page is in the stack| Call API [uni.redirectTo](/api/router?id=redirectto), use component <a href="/component/navigator?id=navigator">\<navigator open-type="redirectTo"/></a>|
|页面返回	|页面不断出栈，直到目标返回页		|调用 API &nbsp;[uni.navigateBack](/api/router?id=navigateback) &nbsp; 、使用组件&nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigateBack"/&gt;</a>&nbsp;、用户按左上角返回按钮、安卓用户点击物理back按键	|
| Page return| The page is constantly popped until the target returns to the page| Call API [uni.navigateBack](/api/router?id=navigateback) , use component <a href="/component/navigator?id=navigator">\<navigator open-type="navigateBack"/></a>, user presses back button in the upper left corner, Android user presses back button|
|Tab 切换	|页面全部出栈，只留下新的 Tab 页面	|调用 API &nbsp;[uni.switchTab](/api/router?id=switchtab)&nbsp;  、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="switchTab"/&gt;</a>&nbsp; 、用户切换 Tab				|
| Tab switching| All the pages are out of the stack, leaving only the new Tab page| Call API [uni.switchTab](/api/router?id=switchtab), use component <a href="/component/navigator?id=navigator">\<navigator open-type="switchTab"/></a>, user switches Tab|
|重加载		|页面全部出栈，只留下新的页面		|调用 API &nbsp;[uni.reLaunch](/api/router?id=relaunch)&nbsp;  、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="reLaunch"/&gt;</a>						|
| Reload| All the pages are out of the stack, leaving only the new page| Call API [uni.reLaunch](/api/router?id=relaunch), Use component <a href="/component/navigator?id=navigator">\<navigator open-type="reLaunch"/></a>|

## 运行环境判断
## Operating environment judgment

### 开发环境和生产环境
### Development environment and production environment
``uni-app`` 可通过 ``process.env.NODE_ENV`` 判断当前环境是开发环境还是生产环境。一般用于连接测试服务器或生产服务器的动态切换。
You can use `process.env.NODE_ENV` to determine whether the current environment of `uni-app` is a development environment or a production environment. Generally, it is used for dynamic switching of connecting test server or production server.
- 在HBuilderX 中，点击“运行”编译出来的代码是开发环境，点击“发行”编译出来的代码是生产环境
- In HBuilderX, the code compiled by clicking "Run" is the development environment, while the code compiled by clicking "Release" is the production environment.
- cli模式下，是通行的编译环境处理方式。
- cli mode is a common way of compilation environment processing.

```javascript
if(process.env.NODE_ENV === 'development'){
    console.log ('development environment')
}else{
    console.log ('production environment')
}
```

如果你需要自定义更多环境，比如测试环境：
If more environments need to be customized, such as test environment:
- 假设只需要对单一平台配置，可以 package.json 中配置，在HBuilderX的运行和发行菜单里会多一个出来。[https://uniapp.dcloud.io/collocation/package](https://uniapp.dcloud.io/collocation/package)
- Assuming that you only need to configure a single platform, you can configure it in package.json. There will be one more in the running and publishing menu of HBuilderX. [https://uniapp.dcloud.io/collocation/package](https://uniapp.dcloud.io/collocation/package)
- 如果是针对所有平台配置，可以在 vue-config.js 中配置。[https://uniapp.dcloud.io/collocation/vue-config](https://uniapp.dcloud.io/collocation/vue-config)
- If it is configured for all platforms, you can configure it in vue-config.js. [https://uniapp.dcloud.io/collocation/vue-config](https://uniapp.dcloud.io/collocation/vue-config)

**快捷代码块**
**Shortcut code block**

HBuilderX 中敲入代码块 `uEnvDev`、`uEnvProd` 可以快速生成对应 `development`、`production` 的运行环境判定代码。
Type in the code blocks `uEnvDev` and `uEnvProd` in HBuilderX, then you can quickly generate code for determining the operating environment corresponding to `development` and `production`.
```javascript
// uEnvDev
if (process.env.NODE_ENV === 'development') {
    // TODO
}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
    // TODO
}
```

### 判断平台
### Judgment platform

平台判断有2种场景，一种是在编译期判断，一种是在运行期判断。
There are 2 scenarios for platform judgment, one is at compile time and the other is at run time.

- 编译期判断
- Compile time judgment
编译期判断，即条件编译，不同平台在编译出包后已经是不同的代码。详见：[条件编译](/platform)
Compile time judgment, i.e., conditional compilation. Different platforms have different codes after compiling the package. For details, see: [Conditional compilation](/platform)

```javascript
// #ifdef H5
	alert ("Only H5 platform has alert method")
// #endif
```
如上代码只会编译到H5的发行包里，其他平台的包不会包含如上代码。
The above code will only be compiled to the distribution package of H5 (not other platforms).

- 运行期判断
- Runtime judgment
运行期判断是指代码已经打入包中，仍然需要在运行期判断平台，此时可使用 ``uni.getSystemInfoSync().platform`` 判断客户端环境是 Android、iOS。
Runtime judgment means that the code has been entered into the package and still needs to be judged at runtime. At this time, you can use `uni.getSystemInfoSync().platform` to judge whether the client environment is Android or iOS.

```javascript
switch(uni.getSystemInfoSync().platform){
    case 'android':
       console.log ('Run on Android')
       break;
    case 'ios':
       console.log ('Run on iOS')
       break;
    default:
       Console.log ('Run on developer tools')
       break;
}
```

如有必要，也可以在条件编译里自己定义一个变量，赋不同值。在后续运行代码中动态判断环境。
If necessary, you can also define a variable and assign it different values in conditional compilation. Dynamically judge the environment in the subsequent running code.


### 其他环境变量
### Other environment variables

其他环境变量的定义方式参考 [环境变量](/collocation/env)。
For the definition of other environment variables, please refer to [Environment variables](/collocation/env).
## 页面样式与布局
## Page style and layout

uni-app的css与web的css基本一致。本文没有讲解css的用法。在你了解web的css的基础之上，本文讲述一些样式相关的注意事项。
css of uni-app is basically the same as that of web. css usage is not covered in this article. Based on your knowledge of web css, this article also describes some style-related considerations.

uni-app有vue页面和nvue页面。vue页面是webview渲染的、app端的nvue页面是原生渲染的。在nvue页面里样式比web会限制更多，另见[nvue样式专项文档](/nvue-css)
There are vue page and nvue page in uni-app. vue page is rendered by webview, and that of the app side is rendered natively. Styles are more restricted in nvue pages than in the web. See also [Nvue style specific document](/nvue-css)

本文重点介绍vue页面的样式注意事项。
In this article, attention is placed on the style considerations of the vue page.

### 尺寸单位
### Size unit

`uni-app` 支持的通用 css 单位包括 px、rpx
Common css units supported by `uni-app` include px, rpx

- px 即屏幕像素
- px, i.e. screen pixels
- rpx 即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大，但在 App 端和 H5 端屏幕宽度达到 960px 时，默认将按照 375px 的屏幕宽度进行计算，具体配置参考：[rpx计算配置](https://uniapp.dcloud.io/collocation/pages?id=globalstyle) 。
- rpx, i.e. responsive px, is a dynamic unit that self-adapts to the screen width. Based on the 750-wide screen, 750rpx is exactly the screen width. When the screen becomes wider, the actual display effect of rpx will be enlarged proportionally. However, when the screen width of App and H5 reaches 960px, it will be calculated according to the screen width of 375px by default. For specific configuration, please refer to: [rpx calculation configuration](https://uniapp.dcloud.io/collocation/pages?id=globalstyle).

vue页面支持下面这些普通H5单位，但在nvue里不支持：
vue page supports the following common H5 units, but not support in nvue:
- rem 根字体大小可以通过 [page-meta](/component/page-meta?id=page-meta) 配置
- rem root font size can be configured through [page-meta](/component/page-meta?id=page-meta)
- vh viewpoint height，视窗高度，1vh等于视窗高度的1%
- vh means viewpoint height. 1vh is equal to 1% of the viewpoint height
- vw viewpoint width，视窗宽度，1vw等于视窗宽度的1%
- vw means viewpoint width. 1vw is equal to 1% of the viewpoint width

nvue还不支持百分比单位。
nvue does not support percentage units yet.

App端，在 pages.json 里的 titleNView 中涉及的单位，只支持 px。**注意此时不支持 rpx**
On the App side, only px is supported for the units involved in titleNView in pages.json. **Note that rpx is not supported at this time**

nvue中，uni-app 模式（[nvue 不同编译模式介绍](https://ask.dcloud.net.cn/article/36074)）可以使用 px 、rpx，表现与 vue 中一致。weex 模式目前遵循weex的单位，它的单位比较特殊：
In nvue, px and rpx can be used in uni-app mode ([Introduction to different compilation modes of nvue](https://ask.dcloud.net.cn/article/36074)), with the same performance as in vue. weex mode currently follows the unit of weex, and its unit is a little bit special:

- px:，以750宽的屏幕为基准动态计算的长度单位，与 vue 页面中的 rpx 理念相同。（一定要注意 weex 模式的 px，和 vue 里的 px 逻辑不一样。）
- px: a length unit calculated dynamically on the basic of a 750-wide screen, is the same concept as that of rpx in vue page. (Be sure to pay attention to the px in weex mode, whose logic is different from that of px in vue.)
- wx：与设备屏幕宽度无关的长度单位，与 vue 页面中的 px 理念相同
- wx: a length unit independent of the screen width of the device, is the same concept as that of px in the vue page


下面对 `rpx` 详细说明：
The following is a detailed description of `rpx`:

设计师在提供设计图时，一般只提供一个分辨率的图。
Designers generally only provide drawing with one resolution while providing design drawing.

严格按设计图标注的 px 做开发，在不同宽度的手机上界面很容易变形。
If you develop strictly according to the px marked by the design icon, the interface is easily deformed on mobile phones of different widths.

而且主要是宽度变形。高度一般因为有滚动条，不容易出问题。由此，引发了较强的动态宽度单位需求。
Width deformation is dominant. Generally, the height is not easy to go wrong on account of the scroll bar. As a result, a strong demand for dynamic width unit is triggered.

`uni-app` 在 App 端、H5 端都支持了 `rpx`，并且可以配置不同屏幕宽度的计算方式，具体参考：[rpx计算配置](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)。
`uni-app` supports `rpx` on both the App side and H5 side, and configures different screen width calculation methods. For details, please refer to: [rpx calculation configuration](https://uniapp.dcloud.io/collocation/pages?id=globalstyle).

rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。`uni-app` 规定屏幕基准宽度 750rpx。
rpx is a unit relative to the reference width, which can be adapted to the screen width. `uni-app` The specified screen reference width is 750rpx.

开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：
Developers can calculate the rpx value of page elements based on the reference width of design draft. The conversion formula between design draft 1px and frame style 1rpx is as follows:

``设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx``
``Design draft 1px / design draft baseline width = frame style 1rpx / 750rpx``

换言之，页面元素宽度在 `uni-app` 中的宽度计算公式：
In other words, the formula for calculating the width of the page element width in `uni-app` is as follows:

`` 750 * 元素在设计稿中的宽度 / 设计稿基准宽度 ``
``750 * element width in design draft/Design draft baseline width``

**举例说明：**
**For example:**

1. 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 750`，结果为：100rpx。
1. If the width of the design draft is 750px and the width of element A on the design draft is 100px, then the width of element A in `uni-app` should be set to: `750 * 100 / 750`, the result is: 100rpx.
2. 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 640`，结果为：117rpx。
2. If the width of the design draft is 640px and the width of element A on the design draft is 100px, then the width of element A in `uni-app` should be set to: `750 * 100 / 640`, the result is: 117rpx.
3. 若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在 `uni-app` 里面的宽度应该设为：` 750 * 200 / 375`，结果为：400rpx。
3. If the width of the design draft is 375px and the width of element B on the design draft is 200px, then the width of element B in `uni-app` should be set to: ` 750 * 200 / 375`, the result is: 400rpx.

**Tips**

- 注意 rpx 是和宽度相关的单位，屏幕越宽，该值实际像素越大。如不想根据屏幕宽度缩放，则应该使用 px 单位。
- Note that rpx is a unit related to the width. The wider the screen, the larger the actual pixels. If you do not want to zoom according to the screen width, you should use px as the unit.
- 如果开发者在字体或高度中也使用了 rpx ，那么需注意这样的写法意味着随着屏幕变宽，字体会变大、高度会变大。如果你需要固定高度，则应该使用 px 。
- If the developer also uses rpx in font or height, this writing mode means that as the screen becomes wider, the font and height will become larger. If you need a fixed height, you should use px.
- rpx不支持动态横竖屏切换计算，使用rpx建议锁定屏幕方向
- rpx does not support dynamic landscape and portrait screen switching calculation, so it is recommended to lock the screen direction when using rpx
- 设计师可以用 iPhone6 作为视觉稿的标准。
- Designers can take iPhone6 as the standard of visual drafts.
- 如果设计稿不是750px，HBuilderX提供了自动换算的工具，详见：[https://ask.dcloud.net.cn/article/35445](https://ask.dcloud.net.cn/article/35445)。
- If the design draft is not 750px, HBuilderX provides an automatic conversion tool, see: [https://ask.dcloud.net.cn/article/35445](https://ask.dcloud.net.cn/article/35445).
- App端，在 pages.json 里的 titleNView 中涉及的单位，只支持 px，不支持 rpx。
- On the App side, only px is supported for the units involved in titleNView in pages.json except for rpx.
- 早期 uni-app 提供了 upx ，目前已经推荐统一改为 rpx 了，[详见](http://ask.dcloud.net.cn/article/36130)
- Early uni-app provided upx, and now it is recommended to change to rpx. [See details](http://ask.dcloud.net.cn/article/36130)

### 样式导入
### Style import

使用```@import```语句可以导入外联样式表，```@import```后跟需要导入的外联样式表的相对路径，用```;```表示语句结束。
The `@import` sentence can be used to import an external style sheet, `@import` is followed by the relative path of the external style sheet that needs to be imported, and `;` indicates the end of the sentence.

**示例代码：**
**Sample code:**

```
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```

### 内联样式
### Inline style

框架组件上支持使用 style、class 属性来控制组件的样式。
Frame components support the use of style and class attributes to control the style of components.

- style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。
- style: static styles are uniformly written into class. style receives dynamic styles, which will be parsed at runtime. Please try to avoid writing static styles into style so as not to affect the rendering speed.
```
<view :style="{color:color}" />
```
- class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上.，样式类名之间用空格分隔。
- class: used to specify a style rule. Its attribute value is a collection of class selector names (style class names) in the style rule. Style class names do not need to be marked with. The style class names are separated by spaces.
```
<view class="normal_view" />
```

### 选择器
### Selector

目前支持的选择器有：
Currently supported selectors are:

|选择器|样例|样例描述|
| Selector| Example| Example description|
|:-|:-|:-|
|.class|.intro|选择所有拥有 class="intro" 的组件|
| .class| .intro| Select all components with class="intro"|
|#id|#firstname|选择拥有 id="firstname" 的组件|
|#id| #firstname| Select the component with id="firstname"|
|element|view|选择所有 view 组件|
| element| view| Select all view components|
|element, element|view, checkbox|选择所有文档的 view 组件和所有的 checkbox 组件|
| element, element| view, checkbox| Select view component of all documents and all checkbox components|
|::after|view::after|在 view 组件后边插入内容，**仅 vue 页面生效**|
|::after| view::after| Insert content behind the view component, **Only vue page is valid**|
|::before|view::before|在 view 组件前边插入内容，**仅 vue 页面生效**|
|::before| view::before| Insert content in front of the view component, **Only vue page is effective**|

**注意：** 
**Notice:**
- 在 `uni-app` 中不能使用 ```*``` 选择器。
- You cannot use the `*` selector in `uni-app`.
- ```page``` 相当于 ```body``` 节点，例如：
- `page` is equivalent to the `body` node, for example:

  ```css
  <!-- 设置页面背景颜色，使用 scoped 会导致失效 -->
  <!-- Set the background color of the page. Using scoped may cause invalidation -->
  page {
    background-color:#ccc;
  }
  ```


### 全局样式与局部样式
### Global and local styles
定义在 App.vue 中的样式为全局样式，作用于每一个页面。在 pages 目录下 的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。
The styles defined in App.vue are global styles, which act on every page. The styles defined in the vue file in the pages directory are local styles, which only act on the corresponding pages and will cover the same selectors in App.vue.

**注意：** 
**Notice:**
- App.vue 中通过 ``@import`` 语句可以导入外联样式，一样作用于每一个页面。
- In App.vue, you can import out-of-line styles through the `@import` statement, which also applies to every page
- nvue页面暂不支持全局样式
- nvue pages do not support global styles temporarily

### CSS变量
### CSS variables

uni-app 提供内置 CSS 变量
uni-app provides built-in CSS variables

|CSS变量|描述|App|H5|
| CSS variables| Describe| App| H5|
|:-|:-|:-|:-|
|--status-bar-height|系统状态栏高度|系统状态栏高度、nvue注意见下|0|
|--status-bar-height| Height of system status bar| See below for height of system status bar and attentions for nvue| 0|
|--window-top|内容区域距离顶部的距离|0|NavigationBar 的高度|
|--window-top| Distance of the content area from the top| 0| Height of NavigationBar|
|--window-bottom|内容区域距离底部的距离|0|TabBar 的高度|
|--window-bottom| Distance of the content area from the bottom| 0| Height of TabBar|


**注意：**
**Notice:**
- ``var(--status-bar-height)`` 此变量在 App 里为手机实际状态栏高度。
- `var(--status-bar-height)` represents the height of the actual status bar of the phone in the App.
- 当设置 ``"navigationStyle":"custom"`` 取消原生导航栏后，由于窗体为沉浸式，占据了状态栏位置。此时可以使用一个高度为 ``var(--status-bar-height)`` 的 view 放在页面顶部，避免页面内容出现在状态栏。
- When setting `"navigationStyle":"custom"` to cancel the native navigation bar, the status bar position is occupied because the form is immersive. At this time, a view with a height of `var(--status-bar-height)` can be placed at the top of the page to prevent the page content from appearing in the status bar.
- 由于在H5端，不存在原生导航栏和tabbar，也是前端div模拟。如果设置了一个固定位置的居底view，在App端是在tabbar上方，但在H5端会与tabbar重叠。此时可使用`--window-bottom`，不管在哪个端，都是固定在tabbar上方。
- Since it is on the H5 side, there is no native navigation bar and tabbar and it is also a front-end div simulation. If a fixed-position bottom view is set, it is above the tabbar on the App side, but will overlap with the tabbar on the H5 side. At this time, you can use `--window-bottom`, no matter which end it is, it is fixed above the tabbar.
- 目前 nvue 在App端，还不支持 `--status-bar-height`变量，替代方案是在页面onLoad时通过uni.getSystemInfoSync().statusBarHeight获取状态栏高度，然后通过style绑定方式给占位view设定高度。下方提供了示例代码
- Currently nvue does not support the `--status-bar-height` variable on the App side. The alternative is to obtain the status bar height through uni.getSystemInfoSync().statusBarHeight when the page is onLoad, and then set the height of the placeholder view through style binding. Sample code is provided below

**代码块**
**Code block**

快速书写css变量的方法是：在css中敲hei，在候选助手中即可看到3个css变量。（HBuilderX 1.9.6以上支持）
How to quickly write css variables: type hei in css to display 3 css variables in the candidate assistant. (supported by HBuilderX 1.9.6+)


示例1 - 普通页面使用css变量：
Example 1 - use css variables on ordinary pages:

```html
<template>
    <!-- HBuilderX 2.6.3+ 新增 page-meta, 详情：https://uniapp.dcloud.io/component/page-meta -->
    <!-- page-meta is added to HBuilderX 2.6.3+. See details: https://uniapp.dcloud.io/component/page-meta -->
    <page-meta>
        <navigation-bar />
    </page-meta>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
			<!-- Here is the status bar -->
		</view>
		<view> Text under the status bar </view>
	</view>
</template>	
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
```

```html
<template>
	<view>
		<view class="toTop">
			<!-- 这里可以放一个向上箭头，它距离底部tabbar上浮10px-->
			<!-- An up arrow can be put here, which shifts up 10px from the bottom tabbar-->
		</view>
	</view>
</template>	
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px)
	}
</style>
```

示例2 - nvue页面获取状态栏高度
Example 2 - get the height of status bar on nvue page
```html
<template>
	<view class="content">
		<view :style="{ height: iStatusBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iStatusBarHeight:0
			}
		},
		onLoad() {
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight
		}
	}
</script>
```

### 固定值
### Fixed value
`uni-app` 中以下组件的高度是固定的，不可修改：
The height of the following components in `uni-app` is fixed and cannot be modified:

|组件|描述|App|H5|
| Component| Describe| App| H5|
|:-|:-|:-|:-|
|NavigationBar|导航栏|44px|44px|
| NavigationBar| Navigation bar| 44px| 44px|
|TabBar|底部选项卡|HBuilderX 2.3.4之前为56px，2.3.4起和H5调为一致，统一为 50px。但可以自主更改高度）|50px|
| TabBar| Bottom tab| 56px before HBuilderX 2.3.4. From 2.3.4+, it was in line with H5, unified to 50px. BBut you can change the height voluntarily)| 50px|

### Flex布局
### Flex layout

为支持跨平台，框架建议使用Flex布局，关于Flex布局可以参考外部文档[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、[阮一峰的flex教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)等。
To support cross-platform, it is recommended that the framework adopts Flex layout. For Flex layout, please refer to external documents [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [Ruan Yifeng's flex tutorial](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html), etc.

### 背景图片
### Background image

``uni-app`` 支持使用在 css 里设置背景图片，使用方式与普通 ``web`` 项目大体相同，但需要注意以下几点：
`uni-app` supports being used to set a background image in css in the same way as ordinary `web` projects, but the following points should be noted:

- 支持 base64 格式图片。
- Support base64 format images.
- 支持网络路径图片。
- Support web path images.
- 使用本地路径背景图片需注意：
- Note when using background images from local path:
    1. 为方便开发者，在背景图片小于 40kb 时，``uni-app`` 编译到不支持本地背景图的平台时，会自动将其转化为 base64 格式；
    1. For the convenience of developers, when the background picture is less than 40kb, `uni-app` will be automatically converted to base64 format when compiled to a platform that does not support local background images;
    2. 图片大于等于 40kb，会有性能问题，不建议使用太大的背景图，如开发者必须使用，则需自己将其转换为 base64 格式使用，或将其挪到服务器上，从网络地址引用。
    2. If the image is larger than or equal to 40kb, there may be performance problems. It is not recommended to use too large a background image. If developers must use it, they need to convert it to base64 format or move it to the server and reference it from the network address.
    3. 本地背景图片的引用路径推荐使用以 ~@ 开头的绝对路径。
    3. The absolute path starting with ~@ is recommended for the reference path of local background images.
   ```css
        .test2 {
            background-image: url('~@/static/logo.png');
        }
   ```

### 字体图标
### Font icon

``uni-app`` 支持使用字体图标，使用方式与普通 ``web`` 项目相同，需要注意以下几点：
`uni-app` supports the use of font icons in the same way as ordinary `web` projects, but the following points should be noted:

- 支持 base64 格式字体图标。
- Support base64 format font icons.
- 支持网络路径字体图标。
- Support network path font icons.
- 网络路径必须加协议头 ``https``。
- The network path must have a protocol header `https`.
- 从 [http://www.iconfont.cn](http://www.iconfont.cn) 上拷贝的代码，默认是没加协议头的。 
- The code copied from [http://www.iconfont.cn](http://www.iconfont.cn) has no protocol header added by default.
- 从 [http://www.iconfont.cn](http://www.iconfont.cn) 上下载的字体文件，都是同名字体（字体名都叫iconfont，安装字体文件时可以看到），在nvue内使用时需要注意，此字体名重复可能会显示不正常，可以使用工具修改。
- The font files downloaded from [http://www.iconfont.cn](http://www.iconfont.cn) are all fonts with the same name (the font names are all called iconfont, which can be seen when installing the font files). When using it in nvue, please note that the repeated font name may display abnormally, and you can use the tool to modify it.
- 使用本地路径图标字体需注意：
- Note when using local path icon font:
    1. 为方便开发者，在字体文件小于 40kb 时，``uni-app`` 会自动将其转化为 base64 格式；
    1. For the convenience of developers, when the font file is less than 40kb, `uni-app` will automatically convert it to base64 format;
    2. 字体文件大于等于 40kb，仍转换为 base64 方式使用的话可能有性能问题，如开发者必须使用，则需自己将其转换为 base64 格式使用，或将其挪到服务器上，从网络地址引用；
    2. If the font size of the file is larger than or equal to 40kb and is still converted to base64, there may be performance problems. If developers must use it, they need to convert it to base64 or move it to the server and reference it from the network address;
    3. 字体文件的引用路径推荐使用以 ~@ 开头的绝对路径。
    3. The absolute path starting with ~@ is recommended for the reference path of the font file.
   ```css
        @font-face {
            font-family: test1-icon;
            src: url('~@/static/iconfont.ttf');
        }
   ```

`nvue`中不可直接使用css的方式引入字体文件，需要使用以下方式在js内引入。nvue内不支持本地路径引入字体，请使用网络链接或者`base64`形式。**`src`字段的`url`的括号内一定要使用单引号。**
You cannot import font files in `nvue` directly using CSS. Instead, you need to import font files in js using the following method. nvue does not support importing fonts from local paths, please use network links or the form of `base64`. **In the `src` field, single quotation marks must be used within the brackets of `url`.**

```js
var domModule = weex.requireModule('dom');
domModule.addRule('fontFace', {
  'fontFamily': "fontFamilyName",
  'src': "url('https://...')"
})
```


**示例：**
**Example:**

```html
<template>
	<view>
		<view>
			<text class="test">&#xe600;</text>
			<text class="test">&#xe687;</text>
			<text class="test">&#xe60b;</text>
		</view>
	</view>
</template>
<style>
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
	}
	.test {
		font-family: iconfont;
		margin-left: 20rpx;
	}
</style>
```


## ``<template/>`` 和 ``<block/>`` @template-block
## `<template/>` and `<block/>` @template-block

``uni-app`` 支持在 template 模板中嵌套 ``<template/>`` 和 ``<block/>``，用来进行 [列表渲染](/vue-basics?id=列表渲染) 和 [条件渲染](/vue-basics?id=条件渲染)。
``uni-app`` supports nesting of `<template/>` and `<block/>` in the template for [list rendering](/vue-basics?id=%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93) and [conditional rendering](/vue-basics?id=%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93).

``<template/>`` 和 ``<block/>`` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
``<template/>`` and `<block/>` are not a component but just a packaging element. They will not be rendered on the page and only accept control attributes.
 
``<block/>`` 在不同的平台表现存在一定差异，推荐统一使用 ``<template/>``。
``<block/>`` has certain differences in performance on different platforms. It is recommended to use `<template/>` uniformly.
 
**代码示例**
**Code example**
 
```html
<template>
	<view>
		<template v-if="test">
			<view>Display when test is true</view>
		</template>
        <template v-else>
        	<view>Display when test is false</view>
        </template>
	</view>
</template>
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

## ES6 支持
## Supported on ES6
uni-app 在支持绝大部分 ES6 API 的同时，也支持了 ES7 的 await/async。
uni-app supports not only most ES6 API, but also await/async of ES7.

ES6 API 的支持，详见如下表格部分（`x` 表示不支持，无特殊说明则表示支持）：
For the support of ES6 API, see the following table for details (`x` means no support, and no special instructions means support):
- 因为iOS上不允许三方js引擎，所以iOS上不区分App、H5，各端均仅依赖iOS版本。
- Because third party js engines are not allowed on iOS, there is no distinction between App and H5 on iOS. Each side only depends on the iOS version.
- 各端Android版本有差异：
- Differences can be seen among Android versions of various sides:
* App端的数据见下表；
* See the table below for the data of App side;
* H5端数据见caniuse；
* See caniuse for H5 side;

|String|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|codePointAt|||||
|normalize|x|x||仅支持 NFD/NFC|
| normalize| x| x| | Only NFD/NFC is supported|
|includes|||||
|startsWith|||||
|endsWith|||||
|repeat|||||
|String.fromCodePoint||||&nbsp;|

|Array|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|copyWithin|||||
|find|||||
|findIndex|||||
|fill|||||
|entries|||||
|keys|||||
|values|x|||x|
|includes|x||||
|Array.from|||||
|Array.of||||&nbsp;|

|Number|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|isFinite|||||
|isNaN|||||
|parseInt|||||
|parseFloat|||||
|isInteger|||||
|EPSILON|||||
|isSafeInteger||||&nbsp;|

|Math|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|trunc|||||
|sign|||||
|cbrt|||||
|clz32|||||
|imul|||||
|fround|||||
|hypot|||||
|expm1|||||
|log1p|||||
|log10|||||
|log2|||||
|sinh|||||
|cosh|||||
|tanh|||||
|asinh|||||
|acosh|||||
|atanh||||&nbsp;|

|Object|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|is|||||
|assign|||||
|getOwnPropertyDescriptor|||||
|keys|||||
|getOwnPropertyNames|||||
|getOwnPropertySymbols||||&nbsp;|

|Other|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|Symbol|||||
|Set|||||
|Map|||||
|Proxy|x|x||x|
|Reflect|||||
|Promise||||&nbsp;|

**注意**
**Notice**
- App端Android支持不依赖Android版本号，即便是Android4.4也是上表数据。因为uni-app的js代码运行在自带的独立jscore中，没有js的浏览器兼容性问题。uni-app的vue页面在Android低端机上只有css浏览器兼容性问题，因为vue页面仍然渲染在webview中，受Android版本影响，太新的css语法在低版本不支持。
- On the App side, Android supports less dependence on the Android version number. The data in the above table is applicable even on Android 4.4. Because js code of uni-app runs in its own independent jscore, there is no browser compatibility problem of js. The vue page of uni-app only has css browser compatibility problem on Android low-end device, because vue page is still rendered in webview. Affected by the Android version, too new css syntax is not supported in lower versions.


## NPM支持
## Supported on NPM

uni-app支持使用**npm**安装第三方包。
Uni-app supports the use of **npm** to install third-party packages.

此文档要求开发者们对**npm**有一定的了解，因此不会再去介绍**npm**的基本功能。如若之前未接触过**npm**，请翻阅[NPM官方文档](https://docs.npmjs.com/getting-started/what-is-npm)进行学习。
This document requires developers to have a certain understanding of **npm**, so the basic functions of **npm** will not be introduced. If you do not have access to **npm** before, please refer to the [NPM official document](https://docs.npmjs.com/getting-started/what-is-npm).

**初始化npm工程**
**Initialize npm project**

若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：
If the npm management dependency has not been used before in the project (no package.json file in the project root directory), please initialize the npm project by executing the command in the project root directory first:
```shell
npm init -y
```

cli项目默认已经有package.json了。HBuilderX创建的项目默认没有，需要通过初始化命令来创建。
cli project already has package.json by default. The project created by HBuilderX is not available by default and needs to be created by initialization command.

**安装依赖**
**Installation dependencies**

在项目根目录执行命令安装npm包：
Execute the command to install npm package in the root directory of the project:
```shell
npm install packageName --save
```

**使用**
**Usage**

安装完即可使用npm包，js中引入npm包：
You can use npm package after installation, and introduce npm package into js:
```js
import package from 'packageName'
const package = require('packageName')
```

**注意**
**Notice**

* 为多端兼容考虑，建议优先从 [uni-app插件市场](https://ext.dcloud.net.cn/) 获取插件。直接从 npm 下载库很容易只兼容H5端。
* In consideration of multi-terminal compatibility, it is recommended to give priority to obtain plug-ins from the [uni-app plug-in market](https://ext.dcloud.net.cn/). Downloading the library directly from npm is easy to be compatible with the H5 side only.
* 非 H5 端不支持使用含有 dom、window 等操作的 vue 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 [API](./api/README)。类似[jQuery](https://www.npmjs.com/package/jquery) 等库只能用于H5端。
* Vue components and js modules that contain operations such as dom and window are not supported on the non-H5 side. The API used by the installed modules and their dependent modules must be the existing [API](./api/README) in uni-app. Libraries like [jQuery](https://www.npmjs.com/package/jquery) can only be used on the H5 side.
* node_modules 目录必须在项目根目录下。不管是cli项目还是HBuilderX创建的项目。
* The node_modules directory must be under the root directory of the project. Whether it is a cli project or a project created by HBuilderX.
* 关于ui库的获取，详见[多端UI库](https://ask.dcloud.net.cn/article/35489)
* For the acquisition of ui library, please refer to [Multi-terminal UI Library](https://ask.dcloud.net.cn/article/35489)

## TypeScript 支持
## Supported by TypeScript
在 uni-app 中使用 ts 开发，请参考 [Vue.js TypeScript 支持](https://cn.vuejs.org/v2/guide/typescript.html) 说明。
To develop using ts in uni-app, please refer to [Vue.js TypeScript Support](https://cn.vuejs.org/v2/guide/typescript.html).


类型定义文件由 @dcloudio/types 模块提供，安装后请注意配置 tsconfig.json 文件中的 compilerOptions > types 部分。对于缺少或者错误的类型定义，可以自行在本地新增或修改并同时报告给官方请求更新。
The type definition file is provided by the @dcloudio/types module. Please pay attention to the compilerOptions> types section in the configuration tsconfig.json file after installation. Missing or wrong type definitions can be added or modified locally and reported to the official in the meantime to ask for updates.

### 注意事项
### Precautions
在 uni-app 中使用 ts 需要注意以下事项。
Please note the following when using ts in uni-app.
#### 在 vue 文件的 script 节点声明 lang="ts"@vue-ts
#### Declare lang="ts"@vue-ts in the script node of the vue file
声明 `lang="ts"` 后，该 vue 文件 import 进来的所有 vue 组件，均需要使用 ts 编写。
After declaring `lang="ts"`, all vue components imported from the vue file need to be written in ts.

**示例代码**
**Sample code**

改造 uni-badge.vue 
Transform uni-badge.vue
```javascript
<script lang="ts">
    // 仅展示需要修改的核心代码，完整代码请参考原来的组件。
    //Only the core code that needs to be modified is displayed. For the complete code, please refer to the original components.
	import Vue from 'vue';
	export default Vue.extend({
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		computed: {
			setClass(): string {
				const classList: string[] = ['uni-badge-' + this.type, 'uni-badge-size-' + this.size];
				if (this.inverted === true) {
					classList.push('uni-badge-inverted')
				}
				return classList.join(" ")
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	})
</script>
```
在 index.vue 中引用 uni-badge 组件
Reference the uni-badge component in index.vue
```javascript
<script lang="ts">
    import Vue from 'vue';
	import uniBadge from '../../components/uni-badge.vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			uniBadge
		}
	});
</script>
```

## renderjs
`renderjs`是一个运行在视图层的js。它只支持app-vue和h5。
`renderjs` is a js running in the view layer. Only supported by app-vue and h5.

`renderjs`的主要作用有2个：
`renderjs` has two main functions:
- 大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力
- Greatly reduce the communication loss between the logic layer and the view layer, and provide high-performance view interaction capability
- 在视图层操作dom，运行for web的js库
- Operate dom in view layer and run js library for web

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√(2.5.5+，仅支持vue)|√|
| √(2.5.5+, only vue is supported)| √|

### 使用方式
### Usage mode

设置 script 节点的 lang 为 renderjs
Set lang of script node to renderjs
```html
<script module="test" lang="renderjs">
	export default {
		mounted() {
			// ...
		},
		methods: {
			// ...
		}
	}
</script>
```

### 示例
### Example

* [通过renderjs，在app和h5端使用完整的 `echarts`](https://ext.dcloud.net.cn/plugin?id=1207)
* [ uses the complete `echarts`](https://ext.dcloud.net.cn/plugin?id=1207) on app and h5 through renderjs

### 功能详解
### Function details
- 大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力
- Greatly reduce the communication loss between the logic layer and the view layer, and provide high-performance view interaction capability

逻辑层和视图层分离有很多好处，但也有一个副作用是在造成了两层之间通信阻塞。
In addition to the separation of the logic layer and the view layer has many advantages, there is a side effect of blocking communication between the two layers.

`renderjs`运行在视图层，可以直接操作视图层的元素，避免通信折损。
`renderjs` runs on the view layer and can be used to directly manipulate the elements of the view layer to avoid communication loss.

在hello uni-app的canvas示例中，App端使用了`renderjs`，由运行在视图层的`renderjs`直接操作视图层的canvas，实现了流畅canvas动画示例。具体在[hello uni-app](https://m3w.cn/uniapp)示例中体验。
In the canvas example of hello uni-app, the App side uses `renderjs`, and the `renderjs` running on the view layer directly manipulates the canvas of the view layer to achieve a smooth canvas animation example. You can experience it in the [hello uni-app](https://m3w.cn/uniapp) example.

- 在视图层操作dom，运行for web的js库
- Operate dom in the view layer and run the js library for web.
官方不建议在uni-app里操作dom，但如果你想使用一些操作了dom、window的库，其实可以使用`renderjs`来解决。
It is officially not recommended to operate dom in uni-app, but if you want to use some libraries that operate dom and window, you can actually use `renderjs` to solve it.

在app-vue环境下，视图层由webview渲染，而`renderjs`运行在视图层，自然可以操作dom和window。
In the app-vue environment, the view layer is rendered by the webview, and `renderjs` runs on the view layer, which can naturally operate dom and window.

这是一个基于`renderjs`运行echart完整版的示例：[renderjs版echart](https://ext.dcloud.net.cn/plugin?id=1207)
This is an example of running the full version of echart based on `renderjs`: [renderjs version of echart](https://ext.dcloud.net.cn/plugin?id=1207)

同理，`f2`、`threejs`等库都可以这么用。
In the same way, libraries such as `f2` and `threejs` can all be used in this way.


### 注意事项
### Precautions

* 目前仅支持内联使用。
* Currently, only inline use is supported.
* 不要直接引用大型类库，推荐通过动态创建 script 方式引用。
* Don not reference large class libraries directly. It is recommended to refer to them by creating script dynamically.
* 可以使用 vue 组件的生命周期不可以使用 App、Page 的生命周期
* You can use the life cycle of vue components but not the life cycle of App and Page
* 视图层和逻辑层通讯方式与 [WXS](frame?id=wxs) 一致，另外可以通过 this.$ownerInstance 获取当前组件的 ComponentDescriptor 实例。
* The communication method between the view layer and the logic layer is the same as [WXS](frame?id=wxs). In addition, the ComponentDescriptor instance of the current component can be obtained through this.$ownerInstance.
* 观测更新的数据在视图层可以直接访问到。
* The observation updated data can be directly accessed in the view layer.
* APP 端视图层的页面引用资源的路径相对于根目录计算，例如：./static/test.js。
* The path of the page reference resource in the APP side view layer is computed relative to the root directory, for example:./static/test.js.
* APP 端可以使用 dom、bom API，不可直接访问逻辑层数据，不可以使用 uni 相关接口（如：uni.request）
* On the APP side, dom and bom APIs can be used, but the logic layer data cannot be directly accessed, and uni-related interfaces (such as uni.request) cannot be used
* H5 端逻辑层和视图层实际运行在同一个环境中，相当于使用 mixin 方式，可以直接访问逻辑层数据。
* The logic layer and the view layer on the H5 side actually run in the same environment, which is equivalent to using a mixin method to directly access the logic layer data.


## 致谢
## Thanks

`uni-app`使用 ```vue``` 语法，开发多端应用，感谢```Vue```团队！！
`uni-app` uses the `vue` grammar to develop multi-terminal applications. Sincere thanks should be given to the `Vue` team!!

