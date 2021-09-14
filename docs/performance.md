#### 运行原理
#### Principle of operation

##### 逻辑层和视图层分离，且非H5端通信有折损
##### The logic layer and the view layer are separated, and the communication on the non-H5 side is compromised


``uni-app`` 在非H5端运行时，从架构上分为逻辑层和视图层两个部分。逻辑层负责执行业务逻辑，也就是运行js代码，视图层负责页面渲染。
When ``uni-app'' runs on the non-H5 side, it is divided into two parts, the logical layer and the view layer. The logic layer is responsible for executing business logic, that is, running js code, and the view layer is responsible for page rendering.

虽然开发者在一个vue页面里写js和css，但其实，编译时就已经将它们拆分了。
Although developers write js and css in a vue page, in fact, they have been split during compilation.


###### 逻辑层详解
###### Detailed logical layer

逻辑层是运行在一个独立的jscore里的，它不依赖于本机的webview，所以一方面它没有浏览器兼容问题，可以在Android4.4上跑es6代码，另一方面，它无法运行window、document、navigator、localstorage等浏览器专用的js API。
The logic layer runs in an independent jscore, which does not depend on the native webview, so on the one hand, it has no browser compatibility issues and can run es6 code on Android4.4. On the other hand, it cannot run window, Document, navigator, localstorage and other browser-specific js APIs.
`jscore`就是一个标准js引擎，标准js是可以正常运行的，比如if、for、各种字符串、日期处理等。js和浏览器的区别要注意区分开来。
`jscore` is a standard js engine, standard js can run normally, such as if, for, various strings, date processing, etc. The difference between js and browser should be distinguished.
- 所谓浏览器的js引擎，就是jscore或v8的基础上新增了一批浏览器专用API，比如dom；
- The so-called js engine of the browser is a new batch of browser-specific APIs, such as dom, based on jscore or v8;
- node.js引擎，则是v8基础上补充一些电脑专用API，比如本地io；
- The node.js engine is based on v8 to supplement some computer-specific APIs, such as local io;
- 那么uni-app的App端的js引擎，其实是在jscore上补充了一批手机端常用的JS API，比如扫码。
- So the js engine on the app side of uni-app actually adds a batch of commonly used JS APIs on mobile phones to jscore, such as scanning codes.
![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/jscore.jpg)

###### 视图层详解
###### Detailed View Layer
h5平台，以及app-vue，视图层是webview。而app-nvue的视图层是基于weex改造的原生渲染视图。
For the h5 platform and app-vue, the view layer is webview. The view layer of app-nvue is a native rendering view based on weex transformation.

关于webview，在iOS上，只能使用iOS提供的Webview（默认是WKWebview）。它有一定的浏览器兼容问题，iOS版本不同，它的表现有细微差异（一般可忽略）。
Regarding webview, on iOS, you can only use the Webview provided by iOS (the default is WKWebview). It has certain browser compatibility issues. Different iOS versions have slight differences in its performance (generally negligible).

Android上App端没办法带这么大体积的三方包，所以App端默认使用了Android system webview，这个系统webview跟随手机不同而有差异。当然App端也支持使用腾讯X5引擎，此时可以在Android端统一视图层。
There is no way to bring such a large three-party package on the App side on Android, so the App side uses the Android system webview by default. This system webview is different from mobile phones. Of course, the App side also supports the use of Tencent X5 engine, and the view layer can be unified on the Android side at this time.

所以uni-app的js基本没有不同手机的兼容问题（因为js引擎自带了），而视图层的css，在app-vue上使用系统webview时会有手机浏览器的css兼容问题。此时或者不要用太新的css语法，或者集成腾讯x5引擎。
So uni-app js basically has no compatibility issues with different mobile phones (because the js engine comes with it), and the view layer css, when using the system webview on app-vue, there will be css compatibility issues with mobile browsers. At this time, either don't use too new css syntax, or integrate Tencent x5 engine.

###### 逻辑层和视图层分离的利与弊
###### The pros and cons of the separation of the logical layer and the view layer

逻辑层和视图层分离，好处是js运算不卡渲染，最简单直接的感受就是：窗体动画稳。
The logic layer is separated from the view layer. The advantage is that the js operation is not stuck in rendering. The simplest and direct feeling is: the animation of the form is stable.

如果开发者使用过App，应该有概念，webview新窗体一边做进入动画，一边自身渲染，很容易卡动画。而uni-app则无需写预载代码，新窗体渲染快且动画稳定。
If the developer has used the App, there should be a concept. The new form of webview will enter the animation while rendering itself, so it is easy to get stuck in the animation. With uni-app, there is no need to write pre-loaded code, the new window renders quickly and the animation is stable.

但是两层分离也带来一个坏处，这两层互相通信，其实是有损耗的。
But the separation of the two layers also brings a disadvantage. The communication between the two layers is actually lossy.

iOS还好，但Android低端机上，每次通信都要耗时几十毫秒。平时看不出来影响，但有几个场景表现明显。
iOS is okay, but on low-end Android devices, each communication takes tens of milliseconds. The effect is usually not visible, but there are a few scenes that show obvious performance.

1. 连续高帧率绘制canvas动画，会发现还不如webview内部绘制流畅
1. Drawing canvas animations with continuous high frame rate, you will find that it is not as smooth as the drawing inside the webview

2. 视图层滚动、跟手操作，不停反馈给逻辑层，js再处理逻辑并通知视图层做对应更新。此时会发现交互不跟手或卡
2. The view layer is scrolled and operated with hands, continuously feeding back to the logic layer, and js then processes the logic and notifies the view layer to update accordingly. At this time, you will find that the interaction does not follow the hand or the card
不管app-vue还是app-nvue，都有这个两层通信损耗的问题。
Regardless of app-vue or app-nvue, there is the problem of two-layer communication loss.

解决这类问题，在webview渲染和原生渲染引用了不同的做法：
To solve this kind of problem, different approaches are used in webview rendering and native rendering:

- webview渲染的视图层
- View layer rendered by webview

app端提供了[renderjs](https://uniapp.dcloud.io/frame?id=renderjs)，并兼容到H5平台。
[renderjs](https://uniapp.dcloud.io/frame?id=renderjs) is provided on the app side and is compatible with the H5 platform.

比如canvas动画，微信的canvas无法通过wxs操作，js不停绘制canvas动画因通信折损而无法流畅。uni-app的app-vue里的canvas对象设计在webview视图层的，通过renderjs可以在视图层直接操作canvas动画，将不再有通信折损，实现更流畅的效果，详见：[renderjs](https://uniapp.dcloud.io/frame?id=renderjs)
For example, canvas animation, WeChat canvas cannot be operated by wxs, and js keeps drawing canvas animation due to communication loss and cannot be smooth. The canvas object in the app-vue of uni-app is designed in the webview view layer. The canvas animation can be directly operated in the view layer through renderjs, which will no longer have communication loss and achieve a smoother effect, see: [renderjs]( https://uniapp.dcloud.io/frame?id=renderjs)

- 原生渲染的视图层
- Natively rendered view layer
在app-nvue里，逻辑层和视图层的折损一样存在。包括react native也有这个问题。所以也千万别以为原生渲染就多么高级。
In app-nvue, the loss of the logic layer and the view layer is the same. Including react native also has this problem. So don't think that native rendering is so advanced.

weex提供了一套[bindingx](https://uniapp.dcloud.io/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx)机制，可以在js里一次性传一个表达式给原生层，由原生层解析后根据指令操作原生的视图层，避免反复跨层通信。这个技术在uni-app里也可以使用。
Weex provides a set of [bindingx](https://uniapp.dcloud.io/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx) mechanism, You can pass an expression in js to the native layer at a time, and the native view layer can be operated according to instructions after being parsed by the native layer to avoid repeated cross-layer communication. This technique can also be used in uni-app.

bindingx作为一种表达式，它的功能不及js强大，但手势监听、动画还是可以实现的，比如uni ui的swiperAction组件在app-nvue下运行时会自动启用bindingx，以实现流畅跟手。
As a kind of expression, bindingx is not as powerful as js, but gesture monitoring and animation can still be achieved. For example, uni ui's swiperAction component will automatically enable bindingx when running under app-nvue to achieve smooth follow-up.

#### 优化建议
#### Optimization suggestions

##### App如果不是v3模式，请改为v3编译模式
##### If the App is not in v3 mode, please change to v3 compilation mode

详见：[https://ask.dcloud.net.cn/article/36599](https://ask.dcloud.net.cn/article/36599)
For details, please see: [https://ask.dcloud.net.cn/article/36599](https://ask.dcloud.net.cn/article/36599)

##### 避免使用大图
##### Avoid using large images

页面中若大量使用大图资源，会造成页面切换的卡顿，导致系统内存升高，甚至白屏崩溃。
If large image resources are used extensively in the page, it will cause the page switching to freeze, resulting in an increase in system memory, and even a white screen crash.

尤其是不要把多张大图缩小后显示在一个屏幕内，比如上传图片前选了数张几M体积的照片，然后缩小在一个屏幕中展示多张几M的大图，非常容易白屏崩溃。
In particular, do not display multiple large images on one screen after being reduced. For example, if you select a few mega-size photos before uploading the image, and then zoom out to display multiple mega-large images on one screen, the white screen is very easy to crash.

对大体积的二进制文件进行base64，也非常耗费资源。
Performing base64 on large binary files is also very resource intensive.

##### 优化数据更新
##### Optimize data update

在 ``uni-app`` 中，定义在 data 里面的数据每次变化时都会通知视图层重新渲染页面。所以如果不是视图所需要的变量，可以不定义在 data 中，可在外部定义变量或直接挂载在vue实例上，以避免造成资源浪费。
In ``uni-app``, every time the data defined in data changes, the view layer will be notified to re-render the page. Therefore, if it is not a variable required by the view, you can not define it in data. You can define the variable externally or directly mount it on the vue instance to avoid wasting resources.

##### 长列表
##### Long list
- 长列表中如果每个item有一个点赞按钮，点击后点赞数字+1，此时点赞组件必须是一个单独引用的组件，才能做到差量数据更新。否则会造成整个列表数据重载。
- If there is a like button for each item in the long list, click the like number +1. At this time, the like component must be a separately referenced component in order to update the difference data. Otherwise, the entire list data will be overloaded.
- 长列表中每个item并不一定需要做成组件，取决于你的业务中是否需要差量更新某一行item的数据，如没有此类需求则不应该引入大量组件。（点击item后背景变色，属于css调整，没有更新data数据和渲染，不涉及这个问题）
- Each item in the long list does not necessarily need to be made into a component. It depends on whether you need to update the data of a row of items in your business. If there is no such requirement, you should not introduce a large number of components. (The background changes color after clicking the item, which belongs to css adjustment, data data and rendering are not updated, and this problem is not involved)
- 单个组件中存在大量数据时（比如长列表），在App端数据更新时会消耗较多时间，建议使用组件对数据进行分页，将变更限制更小范围。可以参考：[长列表优化示例](https://ext.dcloud.net.cn/plugin?id=2863#detail)
- When there is a large amount of data in a single component (such as a long list), it will take more time to update the data on the App side. It is recommended to use the component to page the data and limit the change to a smaller scope. You can refer to: [Long list optimization example](https://ext.dcloud.net.cn/plugin?id=2863#detail)
- app端nvue的长列表应该使用list组件，有自动的渲染资源回收机制。vue页面使用页面滚动的性能，好于使用scroll-view的区域滚动。uni ui封装了uList组件，在app-nvue下使用了list组件，在其他环境使用页面滚动，自动适配，强烈推荐开发者使用，避免自己写的不好产生性能问题。
- The long list of nvue on the app side should use the list component, which has an automatic rendering resource recovery mechanism. The performance of vue pages using page scrolling is better than using scroll-view area scrolling. uni ui encapsulates the uList component, uses the list component under app-nvue, and uses page scrolling and automatic adaptation in other environments. Developers are strongly recommended to use it to avoid performance problems caused by bad writing.
- 如需要左右滑动的长列表，请在HBuilderX新建uni-app项目选新闻模板，那是一个标杆实现。自己用swiper和scroll-view做很容易引发性能问题。
- If you need a long list that slides left and right, please create a new uni-app project in HBuilderX and select the news template, which is a benchmark implementation. Using swiper and scroll-view by yourself can easily cause performance problems.

##### 减少一次性渲染的节点数量
##### Reduce the number of nodes rendered at once、

页面初始化时，逻辑层如果一次性向视图层传递很大的数据，使视图层一次性渲染大量节点，可能造成通讯变慢、页面切换卡顿，所以建议以局部更新页面的方式渲染页面。如：服务端返回100条数据，可进行分批加载，一次加载50条，500ms 后进行下一次加载。
When the page is initialized, if the logic layer transmits a large amount of data to the view layer at one time, so that the view layer renders a large number of nodes at one time, communication may slow down and page switching may freeze. Therefore, it is recommended to render the page by partially updating the page. For example, the server returns 100 pieces of data, which can be loaded in batches, with 50 pieces being loaded at a time, and the next load will be performed after 500ms.

##### **减少组件数量、减少节点嵌套层级**
##### **Reduce the number of components and reduce the nesting level of nodes**

深层嵌套的节点在页面初始化构建时往往需要更多的内存占用，并且在遍历节点时也会更慢些，所以建议减少深层的节点嵌套。
Deeply nested nodes often require more memory usage during page initialization and construction, and will be slower when traversing nodes, so it is recommended to reduce deep node nesting.

有些nvue页面在Android低端机上初次渲染时，会看到从上到下的渲染过程，这往往都是因为组件过多导致的。每个组件渲染时都会触发一次通信，太多组件就会阻塞通信。
When some nvue pages are first rendered on a low-end Android machine, you will see the rendering process from top to bottom, which is often caused by too many components. Each component will trigger a communication when rendering, too many components will block the communication.

##### 避免视图层和逻辑层频繁进行通讯
##### Avoid frequent communication between the view layer and the logic layer

* 减少 scroll-view 组件的 scroll 事件监听，当监听 scroll-view 的滚动事件时，视图层会频繁的向逻辑层发送数据；
* Reduce the scroll event monitoring of the scroll-view component. When monitoring the scroll event of the scroll-view, the view layer will frequently send data to the logic layer;
* 监听 scroll-view 组件的滚动事件时，不要实时的改变 scroll-top/scroll-left 属性，因为监听滚动时，视图层向逻辑层通讯，改变 scroll-top/scroll-left 时，逻辑层又向视图层通讯，这样就可能造成通讯卡顿。
* When monitoring the scroll event of the scroll-view component, do not change the scroll-top/scroll-left properties in real time, because when monitoring scrolling, the view layer communicates with the logic layer, and when scroll-top/scroll-left is changed, the logic layer changes again. View layer communication, which may cause communication stalls.
* 注意 onPageScroll 的使用，onPageScroll 进行监听时，视图层会频繁的向逻辑层发送数据；
* Pay attention to the use of onPageScroll. When onPageScroll is monitoring, the view layer will frequently send data to the logic layer;
* 多使用css动画，而不是通过js的定时器操作界面做动画
* Use css animation more instead of using js timer interface to do animation
* 如需在canvas里做跟手操作，app端建议使用renderjs。
* If you need to do follow-up operations in the canvas, it is recommended to use renderjs on the app side.
##### 优化页面切换动画
##### Optimize page switching animation

* 页面初始化时若存在大量图片或原生组件渲染和大量数据通讯，会发生新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧。建议延时100ms~300ms渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量。
* If there are a lot of pictures or native component rendering and a lot of data communication when the page is initialized, new page rendering and form entry animation will happen to grab resources, causing page switching jams and frame drops. It is recommended to delay 100ms~300ms to render pictures or complex native components, and perform data communication in batches to reduce the number of nodes for one-time rendering.
* App端动画效果可以自定义。popin/popout的双窗体联动挤压动画效果对资源的消耗更大，如果动画期间页面里在执行耗时的js，可能会造成动画掉帧。此时可以使用消耗资源更小的动画效果，比如slide-in-right/slide-out-right。
* App side animation effects can be customized. The popin/popout dual-form linkage extrusion animation effect consumes more resources. If the time-consuming js is executed on the page during the animation, the animation may drop frames. At this time, animation effects that consume less resources can be used, such as slide-in-right/slide-out-right.
* App-nvue和H5，还支持页面预载，[uni.preloadPage](https://uniapp.dcloud.io/api/preload-page)，可以提供更好的使用体验
* App-nvue and H5 also support page preloading, [uni.preloadPage](https://uniapp.dcloud.io/api/preload-page), which can provide a better user experience


##### 优化背景色闪白
##### Optimize the background color to flash white
1. 如果是新页面进入时背景闪白
1. If the background flashes white when entering a new page
  * 如果页面背景是深色，在vue页面中可能会发生新窗体刚开始动画时是灰白色背景，动画结束时才变为深色背景，造成闪屏。这是因为webview的背景生效太慢的问题。此时需将样式写在 ``App.vue`` 里，可以加速页面样式渲染速度。``App.vue`` 里面的样式是全局样式，每次新开页面会优先加载 ``App.vue`` 里面的样式，然后加载普通 vue 页面的样式。
  * If the page background is dark, it may happen in the vue page that the new form has an off-white background when the animation starts, and it changes to a dark background when the animation ends, causing a splash screen. This is because the background of the webview is too slow to take effect. At this time, you need to write the style in ``App.vue``, which can speed up the rendering speed of the page style. The styles in ``App.vue`` are global styles. Each time a new page is opened, the styles in ``App.vue`` will be loaded first, and then the styles of ordinary vue pages will be loaded.
  * app端还可以在pages.json的页面的style里单独配置页面原生背景色，比如在globalStyle->style->app-plus->background下配置全局背景色
  * The app side can also configure the native background color of the page separately in the style of the pages.json page, for example, configure the global background color under globalStyle->style->app-plus->background

```json
"style": {  
    "app-plus": {  
        "background":"#000000"
    }  
}
```
  * 另外nvue页面不存在此问题，也可以更改为nvue页面。
  * In addition, the nvue page does not have this problem, and it can also be changed to an nvue page.
 
  * 注意：以上优化方案在 HBuilderX 2.7.7 以上版本时运行在 iOS12 以下系统效果较差，请等待优化。
  * Note: The above optimization scheme is not effective when running on HBuilderX 2.7.7 or above and under iOS12. Please wait for optimization.

2. 如果是老页面消失时背景闪白
2. If the background flashes white when the old page disappears

Android上popin动画时，老窗体会有一个半透明消失的效果。这个半透明效果的背景色，可以根据需要调节为暗色系。
When popin animation on Android, the old form will have a translucent disappearance effect. The background color of this translucent effect can be adjusted to a dark color system as needed.

在pages.json里globalStyle下或指定页面下，配置app-plus专属节点，然后配置animationAlphaBGColor属性。
Configure the app-plus exclusive node under globalStyle in pages.json or under the specified page, and then configure the animationAlphaBGColor property.


##### 使用nvue代替vue
##### Use nvue instead of vue


在 App 端 ```uni-app``` 的 nvue 页面可是基于weex升级改造的原生渲染引擎，实现了页面原生渲染能力、提高了页面流畅性。若对页面性能要求较高可以使用此方式开发，详见：[nvue](/nvue-outline)。
The nvue page of ```uni-app``` on the App side is a native rendering engine based on the upgrade of weex, which realizes the native rendering capabilities of the page and improves the fluency of the page. If you have high requirements for page performance, you can use this method to develop. For details, see: [nvue](/nvue-outline).

##### 优化启动速度
##### Optimize startup speed

* App端的 splash 关闭有白屏检测机制，如果首页一直白屏或首页本身就是一个空的中转页面，可能会造成 splash 10秒才关闭，可参考此文解决[https://ask.dcloud.net.cn/article/35565](https://ask.dcloud.net.cn/article/35565)
* The splash shutdown on the App side has a white screen detection mechanism. If the homepage is always blank or the homepage itself is an empty transit page, it may cause the splash to be closed for 10 seconds. Please refer to this article to solve this problem. [https://ask.dcloud.net .cn/article/35565](https://ask.dcloud.net.cn/article/35565)

* App端使用v3编译器，首页为nvue页面时，并设置为[fast启动模式](https://ask.dcloud.net.cn/article/36749)，此时App启动速度最快。
* When the App uses the v3 compiler and the home page is the nvue page, and set to [fast start mode](https://ask.dcloud.net.cn/article/36749), the App starts the fastest at this time.

* App设置为纯nvue项目（manifest里设置app-plus下的renderer:"native"），这种项目的启动速度更快，2秒即可完成启动。因为它整个应用都使用原生渲染，不加载基于webview的那套框架。
* App is set to a pure nvue project (renderer: "native" under app-plus is set in the manifest). This kind of project starts faster and can be started in 2 seconds. Because it uses native rendering throughout the application, it does not load the webview-based framework.

##### 优化包体积
##### Optimize package size

* uni-app的H5端，自带了vue.js、vue-router及部分es6 polyfill库，这部分的体积gzip后只有92k，和web开发使用vue基本一致。而内置组件ui库（如picker、switch等）、js api等，相当于一个完善的大型ui库。但大多数应用不会用到所有内置组件和API。由此uni-app提供了摇树优化机制，未摇树优化前的uni-app整体包体积约500k，服务器部署gzip后162k。开启摇树优化需在manifest配置，[详情](https://uniapp.dcloud.io/collocation/manifest?id=optimization)。
* The H5 end of uni-app comes with vue.js, vue-router and some es6 polyfill libraries. The volume of this part is only 92k after gzip, which is basically the same as using vue for web development. The built-in component ui library (such as picker, switch, etc.), js api, etc., are equivalent to a complete large-scale ui library. But most applications will not use all the built-in components and APIs. As a result, uni-app provides a tree-shaking optimization mechanism. The overall package volume of uni-app before tree-shaking optimization is about 500k, and the server is 162k after gzip is deployed. To enable tree shake optimization, you need to configure it in the manifest, [details](https://uniapp.dcloud.io/collocation/manifest?id=optimization).

* uni-app的App端，因为自带了一个独立v8引擎和uni-app框架，所以比HTML5Plus或mui等普通hybrid的App引擎体积要大。Android基础引擎约9M。App还提供了扩展模块，比如地图、蓝牙等，打包时如不需要这些模块，可以裁剪掉，以缩小发行包体积。在 manifest.json-App模块权限 里可以选择。
* The App side of uni-app, because it comes with an independent v8 engine and uni-app framework, is larger than ordinary hybrid App engines such as HTML5Plus or mui. The basic Android engine is about 9M. App also provides expansion modules, such as maps, Bluetooth, etc. If these modules are not needed when packaging, they can be cut out to reduce the size of the distribution package. It can be selected in manifest.json-App module permissions.

* App端支持如果选择纯nvue项目（manifest里设置app-plus下的renderer:"native"），包体积可以进一步减少2M左右。
* App support If you choose a pure nvue project (renderer: "native" under app-plus in the manifest), the package size can be further reduced by about 2M.

* App端在HBuilderX 2.7后，App端下掉了非v3的编译模式，包体积下降了3M。
* After HBuilderX 2.7 on the App side, the non-v3 compilation mode has been dropped on the App side, and the package size has dropped by 3M.

* uni-app的App-Android端有so库的概念，支持不同的cpu类型的so库越多，包越大。在HBuilderX 2.7以前，Android app默认包含arm32和x86两个cpu的支持so库。包体积比较大。如果你在意体积控制，可以在manifest里去掉x86 cpu的支持（manifest可视化界面-App其他设置里选择cpu），这可以减少包体积到9M。从HBuilderX 2.7起，默认不再包含x86，如有需求请自行在manifest里勾选后打包。一般手机都是arm的，涉及x86 cpu场景很少，包括：个别少见的Android pad、as的模拟器里选择x86类型。
* The App-Android side of uni-app has the concept of so library. The more so libraries that support different CPU types, the larger the package. Before HBuilderX 2.7, Android apps included arm32 and x86 cpu support so libraries by default. The bag is relatively large. If you care about volume control, you can remove the x86 cpu support in the manifest (select cpu in other settings of the manifest visual interface-App), which can reduce the package size to 9M. Starting from HBuilderX 2.7, x86 is no longer included by default. If you need it, please tick it in the manifest and package it. Generally, mobile phones are ARM, and there are few scenarios involving x86 cpu, including: the rare Android pad and as emulator choose x86 type.