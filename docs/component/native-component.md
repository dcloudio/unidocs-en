#### 原生组件说明
#### Native component description

App的vue页面，主体是webview渲染的。为了提升性能，App的vue页面下部分ui元素，比如导航栏、tabbar、video、map使用了原生控件。这种方式被称为混合渲染。
App's vue page, the main body is rendered by webview. In order to improve performance, some UI elements under the App's vue page, such as navigation bar, tabbar, video, and map, use native controls. This method is called hybrid rendering.

虽然提升了性能，但原生组件带来了其他问题：
Although performance is improved, native components bring other problems:
1. 前端组件无法覆盖原生控件的层级问题
1. Front-end components cannot cover the level of native controls
2. 原生组件不能嵌入特殊前端组件(如scroll-view)
2. Native components cannot be embedded in special front-end components (such as scroll-view)
3. 原生控件ui无法灵活自定义
3. The native control ui cannot be flexibly customized
4. 原生控件在Android上，字体会渲染为rom的主题字体，而webview如果不经过单独改造不会使用rom主题字体
4. For native controls on Android, fonts will be rendered as rom theme fonts, and webviews will not use rom theme fonts if they are not individually modified

H5、App的nvue页面，不存在混合渲染的情况，它们或者全部是前端渲染、或者全部是原生渲染，不涉及层级问题。
H5, App’s nvue page, there is no mixed rendering, they are either all front-end rendering or all native rendering, and no hierarchy issues are involved.

``uni-app`` 中原生组件清单如下：
The list of native components in ``uni-app`` is as follows:
* [map](/component/map)
* [video](/component/video)
* [live-player](/component/live-player)（仅App端直接使用video组件可同时实现拉流）
* [live-player](/component/live-player) (Only App can directly use the video component to pull the stream at the same time)
* [live-pusher](/component/live-pusher)（仅app-nvue支持，app-vue使用plus.video.LivePusher可实现推流）
* [live-pusher](/component/live-pusher) (only app-nvue supports, app-vue uses plus.video.LivePusher to achieve push)
* [cover-view](/component/cover-view)
* [cover-image](/component/cover-view?id=cover-image)

#### 混合渲染模式下原生组件的使用限制
#### Use restrictions of native components in mixed rendering mode

由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：
Since native components are out of the WebView rendering process, they have the following restrictions when used:

* 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。后插入的原生组件可以覆盖之前的原生组件。
* The level of native components is the **highest**, so no matter how much z-index is set, other components on the page cannot be overlaid on the native components. The native components inserted later can overwrite the previous native components.
* 原生组件无法在 scroll-view、swiper、picker-view、movable-view 中使用。
* Native components cannot be used in scroll-view, swiper, picker-view, and movable-view.
* app-nvue 不涉及层级问题，自然所有组件都是同层渲染。
* app-nvue does not involve hierarchical issues, naturally all components are rendered at the same level.


可在组件中监听同层失败回调 bindrendererror 来判断
You can monitor the same layer failure callback bindrendererror in the component to judge
* 部分CSS样式无法应用于原生组件，例如：
* Some CSS styles cannot be applied to native components, for example:
    * 无法对原生组件设置 CSS 动画；
	* Cannot set CSS animation for native components;
    * 无法定义原生组件为 position: fixed；
	* Cannot define native components as position: fixed;
    * 不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域。
    * You cannot use overflow: hidden on the parent node to crop the display area of native components.

#### 其他原生界面元素
#### Other native interface elements
除了原生组件外，uni-app在非H5端还有其他原生界面元素，清单如下：
In addition to native components, uni-app has other native interface elements on the non-H5 side. The list is as follows:
* 原生navigationBar和tabbar（pages.json里配置的）。
* Native navigationBar and tabbar (configured in pages.json).
* web-view组件虽然不是原生的，但这个组件相当于一个原生webview覆盖在页面上
* Although the web-view component is not native, this component is equivalent to a native webview covering the page
* 弹出框：picker、showModal、showToast、showLoading、showActionSheet、previewImage、chooseImage、chooseVideo等弹出元素也无法被前端组件覆盖
* Pop-up box: pop-up elements such as picker, showModal, showToast, showLoading, showActionSheet, previewImage, chooseImage, chooseVideo, etc. cannot be covered by front-end components
* plus下的plus.nativeObj.view、plus.video.LivePusher、plus.nativeUI、plus.webview，层级均高于前端元素
* The plus.nativeObj.view, plus.video.LivePusher, plus.nativeUI, plus.webview under plus are all at a higher level than the front-end elements

注意：app的nvue页面里的组件虽然不涉及map、video等原生组件的层级遮挡问题，但pages.json中配置的原生tabbar、原生navigationBar，一样是nvue里的组件也无法遮挡的。
Note: Although the components in the app’s nvue page do not involve hierarchical occlusion of native components such as map and video, the native tabbar and native navigationBar configured in pages.json are also not occluded by the components in nvue.

#### vue页面层级覆盖解决方案
#### vue page level coverage solution

为了解决webview渲染中原生组件层级最高的限制，uni-app提供了 [cover-view](/component/cover-view) 和 [cover-image](/component/cover-view?id=cover-image) 组件，让其覆盖在原生组件上。
In order to solve the limitation of the highest level of native components in webview rendering, uni-app provides [cover-view](/component/cover-view) and [cover-image](/component/cover-view?id=cover-image) Component, let it be overlaid on the native component.

除了跨端的cover-view，App端还提供了3种方案：plus.nativeObj.view、subNVue、新开半透明nvue页面。详述如下
In addition to the cross-terminal cover-view, the App terminal also provides 3 solutions: plus.nativeObj.view, subNVue, and the newly opened semi-transparent nvue page. Detailed as follows

- [cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)

`cover-view`只能覆盖原生组件，不能覆盖其他原生界面元素。比如cover-view可以覆盖video、map，但无法覆盖原生导航栏、tabbar、web-view。
`cover-view` can only cover native components, not other native interface elements. For example, cover-view can cover video and map, but it cannot cover native navigation bar, tabbar, and web-view.


app-vue的`cover-view`还有一些限制，1) 无法嵌套、 2) 无法内部滚动，即cover-view无法内部出现滚动条、 3) 无法覆盖到视频的全屏界面。
The `cover-view` of app-vue has some limitations, 1) cannot be nested, 2) cannot scroll inside, that is, cover-view cannot display scroll bars inside, 3) cannot cover the full screen interface of the video.
app-nvue的`cover-view`无这些限制。
The `cover-view` of app-nvue does not have these restrictions.

另外cover-view无论如何都无法解决原生导航栏、tabbar、web-view组件的覆盖，为此App端补充了2个层级覆盖方案plus.nativeObj.view和subNVue
In addition, cover-view cannot solve the coverage of the native navigation bar, tabbar, and web-view components anyway. For this reason, two hierarchical coverage schemes plus.nativeObj.view and subNVue have been added to the App side.

- [plus.nativeObj.view](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)

简称nview，它是一个原生的类画布的控件，其实cover-view也是用plus.nativeObj.view封装的。API文档详见：[https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)
Referred to as nview, it is a native canvas-like control. In fact, the cover-view is also encapsulated with plus.nativeObj.view. For the API documentation, please refer to: [https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus .nativeObj.View)

plus.nativeObj.view的API比较原生，可以画出任何界面，但plus.nativeObj.view有3个问题：1. api很底层，开发比较复杂；2. 不支持动画；3. 不支持内部滚动。
The API of plus.nativeObj.view is relatively native and can draw any interface, but plus.nativeObj.view has 3 problems: 1. The api is very low-level and the development is more complicated; 2. Animation is not supported; 3. Internal scrolling is not supported.

- [subNVue](https://ask.dcloud.net.cn/article/35948)

subNVue是原生渲染的nvue子窗体，把一个nvue页面以半屏的方式覆盖在vue页面上。它解决了plus.nativeObj.view的不足，提供了强大的层级问题解决方案。subNVue的详细介绍见：[https://ask.dcloud.net.cn/article/35948](https://ask.dcloud.net.cn/article/35948)
subNVue is a natively rendered nvue sub-form, which overlays an nvue page on the vue page in a half-screen manner. It solves the shortcomings of plus.nativeObj.view and provides a powerful solution to hierarchical problems. For a detailed introduction of subNVue, please see: [https://ask.dcloud.net.cn/article/35948](https://ask.dcloud.net.cn/article/35948)

- [弹出部分区域透明的nvue页面](https://ext.dcloud.net.cn/plugin?id=953)
- [Pop up part of the transparent nvue page](https://ext.dcloud.net.cn/plugin?id=953)

uni-app支持在App端弹出半透明的nvue窗体。即看起来是在本窗体弹出一个元素，但实际上是弹出了一个部分区域蒙灰透明的新窗体。这样的窗体比subnvue有个优势就是可以全局复用。具体参考这个[插件](https://ext.dcloud.net.cn/plugin?id=953)
uni-app supports the pop-up of semi-transparent nvue windows on the App side. That is to say, it looks like an element pops up in this form, but in fact a new form with a gray and transparent part of the area pops up. Such a form has an advantage over subnvue that it can be reused globally. For details, please refer to this [plugin](https://ext.dcloud.net.cn/plugin?id=953)

subNVue或弹出部分区域透明的nvue页面，会比plus.nativeObj.view多占用一些内存。所以如果你要覆盖的内容很简单，cover-view或plus.nativeObj.view可以简单实现的话，就没必要用subNVue或nvue。
SubNVue or pop-up nvue pages with transparent areas will take up more memory than plus.nativeObj.view. So if the content you want to cover is very simple, cover-view or plus.nativeObj.view can be easily implemented, there is no need to use subNVue or nvue.

所以如果你的层级覆盖问题比较简单，不用嵌套，且有跨端需求，就使用cover-view。
So if your hierarchical coverage problem is relatively simple, there is no need for nesting, and there are cross-end requirements, use cover-view.

如果App端cover-view无法满足需求，且需要覆盖的原生界面比较简单，可以用plus.nativeObj.view。否则，就使用subnvue或部分区域透明的nvue吧。
If the App-side cover-view cannot meet the requirements, and the native interface that needs to be covered is relatively simple, you can use plus.nativeObj.view. Otherwise, use subnvue or nvue with partial area transparency.

**关于subNVue和Webview的层级问题**
**About the hierarchy of subNVue and Webview**
subNVue的层级高于前端元素，但多个subNVue以及Webview，它们之间的也存在层级关系。
The level of subNVue is higher than the front-end elements, but there is also a hierarchical relationship between multiple subNVues and Webviews.

默认规则是，先创建的subNVue或webview在底部，后创建的会盖住之前的。
The default rule is that the subNVue or webview created first is at the bottom, and those created later will cover the previous ones.

当然每个subNVue和webview，都支持Style参数配置，其中有一个zindex属性，可以调节它们的层级。
Of course, each subNVue and webview supports Style parameter configuration, which has a zindex attribute that can adjust their level.

#### App的nvue页面层级问题
#### App's nvue page level problem
nvue页面全部都是原生组件，互相之间没有层级问题。
All nvue pages are native components, and there are no hierarchical issues between each other.

但如果在pages.json里注册了原生导航栏和tabbar，nvue里的界面元素默认也无法覆盖这些，也需要plus.nativeObj.view或subNVue。
But if the native navigation bar and tabbar are registered in pages.json, the interface elements in nvue cannot cover these by default, and plus.nativeObj.view or subNVue is also required.

如果仅开发App，不跨端，不愿涉及层级问题，也可以不使用pages.json里的原生导航栏和tabbar，nvue页面不需要这些来强化性能。
If you only develop App, do not cross-end, and do not want to involve hierarchical issues, you can also omit the native navigation bar and tabbar in pages.json. The nvue page does not need these to enhance performance.

#### Android系统主题字体对原生组件渲染的影响
#### The impact of Android system theme fonts on the rendering of native components

在Android手机上，调整系统主题字体，所有原生渲染的控件的字体都会变化，而webview渲染的字体则不一定会变化，有的rom的系统webview会跟随变，有的不会变。
On Android phones, if you adjust the system theme fonts, the fonts of all natively rendered controls will change, but the fonts rendered by webview will not necessarily change. Some rom system webviews will change accordingly, and some will not change.

对于webview字体不会跟随rom变的情况，如果原生渲染和webview渲染出现在同一页面，就会发现字体不一致。
In the case that the webview font does not change with the rom, if the native rendering and webview rendering appear on the same page, you will find that the fonts are inconsistent.

app-nvue因为是原生渲染，没有字体不一致的问题。而app-vue下，在某些rom下，webview字体与系统字体不一致。
Because app-nvue is native rendering, there is no problem of font inconsistency. Under app-vue, under some roms, the webview font is inconsistent with the system font.

app端遇到字体不一致，有2种方案：
There are 2 solutions for font inconsistencies encountered on the app side:
1. 直接使用nvue。nvue是纯原生渲染，不存在webview渲染和原生字体不一致的问题。
1. Use nvue directly. nvue is pure native rendering, there is no problem of inconsistency between webview rendering and native fonts.
2. app端不使用系统webview，而是使用x5浏览器内核，x5是处理过的，可以跟随系统字体的。详见：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)
2. The app side does not use the system webview, but uses the x5 browser kernel. The x5 is processed and can follow the system font. For details, please refer to: [https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)

