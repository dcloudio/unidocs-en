每个端有每个端的特点，有的能被抹平，有的不可能被抹平。
Each end has the characteristics of each end, some can be smoothed, and some cannot be smoothed.

注意：跨端，不是把web的习惯迁移到全平台。而是按照uni的写法，然后全平台使用。
Note: Cross-terminal is not to migrate the habits of the web to the whole platform. Instead, it is written in accordance with uni, and then used on all platforms.

### H5正常但App异常的可能性
### The possibility that H5 is normal but App is abnormal

1. css异常：
1. css exception:

- 不支持的选择器
- Unsupported selector

非H5端不支持*选择器；
The non-H5 terminal does not support *selector;

body的元素选择器请改为page，同样，div和ul和li等改为view、span和font改为text、a改为navigator、img改为image...
Please change the element selector of body to page. Similarly, change div, ul and li to view, span and font to text, a to navigator, img to image...

- 组件和页面样式相互影响
- Components and page styles influence each other

非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped
The non-H5 end does not enable scoped by default. If you need to isolate the component style, you can add the scoped attribute to the style tag. The H5 end enables scoped by default in order to isolate the style between pages.

- webview浏览器兼容性
- webview browser compatibility

vue页面在App端，默认是被系统的webview渲染的（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，很多css是不支持的，所以不要使用太新的css，会导致界面异常。
On the App side, the vue page is rendered by the webview of the system by default (not the browser that comes with the mobile phone, but the webview of the rom). On older mobile phones, such as Android4.4, 5.0 or iOS8, many css are not supported , So don't use too new css, it will cause the interface to be abnormal.

注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。
Note that this does not mean that flex cannot be used, Android 4.4 also supports flex, but do not use too new css.

可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。
You can find an Android4.4 mobile phone or use a pc emulator for actual testing. Most domestic Android emulators are 4.4 or 5.0.

从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，[详见x5使用指南](https://ask.dcloud.net.cn/article/36806)
Starting from uni-app 2.5.3, the Android side supports the introduction of Tencent x5 browser kernel, which can smooth out the browser compatibility issues of low-end Android, [see x5 user guide](https://ask.dcloud.net. cn/article/36806)

如果你的H5界面正常，而Android低端机App界面异常，且App没有使用x5引擎，那基本就可以判定是因为css兼容性。
If your H5 interface is normal, but the Android low-end App interface is abnormal, and the App does not use the x5 engine, then it can basically be determined that it is because of CSS compatibility.

app端nvue页面，不存在浏览器兼容问题，它自带一个统一的原生渲染引擎，不依赖webview。
The app-side nvue page does not have browser compatibility issues. It comes with a unified native rendering engine and does not rely on webview.

Android4.4对应的webview是chrome37。各端浏览器内核的详情查阅，参考：[关于手机webview内核、默认浏览器的区别和兼容性](https://ask.dcloud.net.cn/article/1318)
The webview corresponding to Android4.4 is chrome37. For details of browser kernels at each end, refer to: [About the difference and compatibility between the mobile webview kernel and the default browser](https://ask.dcloud.net.cn/article/1318)

- 原生组件层级问题
- Native component level issues

H5没有原生组件概念问题，非H5端有原生组件并引发了原生组件层级高于前端组件的概念，要遮挡video、map等原生组件，请使用cover-view组件。
H5 does not have the concept of native components. The non-H5 end has native components, which leads to the concept that the level of native components is higher than that of front-end components. To obscure native components such as video and map, please use cover-view components.

2. 使用了非H5端不支持的API
2. Use an API that is not supported by the non-H5 side
App的js运行在jscore下而不是浏览器里，没有浏览器专用的js对象，比如document、xmlhttp、cookie、window、location、navigator、localstorage、websql、indexdb、webgl等对象。
App's js runs under jscore instead of the browser. There are no browser-specific js objects, such as document, xmlhttp, cookie, window, location, navigator, localstorage, websql, indexdb, webgl and other objects.

如果你的代码没有直接使用这些，那很可能是引入的三方库使用了这些。如果是后者，去[插件市场](https://ext.dcloud.net.cn/)搜索替代方案。要知道非H5端的js是运行在一个独立的js core或v8下，并不是运行在浏览器里。
If your code does not directly use these, it is likely that the imported third-party library uses these. If it is the latter, go to [plugin market](https://ext.dcloud.net.cn/) to search for alternatives. Be aware that the non-H5 js is running under a separate js core or v8, not in the browser.
从HBuilderX 2.6起，App端新增了renderjs，这是一种运行在视图层的js，vue页面通过renderjs可以操作浏览器对象，进而可以让基于浏览器的库直接在uni-app的App端运行，诸如echart、threejs，详见：[https://uniapp.dcloud.io/frame?id=renderjs](https://uniapp.dcloud.io/frame?id=renderjs)
Starting from HBuilderX 2.6, the App side has added renderjs, which is a js running on the view layer. Vue pages can manipulate browser objects through renderjs, which allows browser-based libraries to run directly on the App side of uni-app , Such as echart, threejs, see: [https://uniapp.dcloud.io/frame?id=renderjs](https://uniapp.dcloud.io/frame?id=renderjs)
3. 使用了非H5端不支持的vue语法，[详见](/vue-components)
3. Use the vue syntax that is not supported by the non-H5 end, [see details](/vue-components)
4. 不要在引用组件的地方在组件属性上直接写 style="xx"，要在组件内部写样式
4. Do not write style="xx" directly on the component properties where the component is referenced, but write the style inside the component
5. `url(//alicdn.net)`等路径，改为`url(https://alicdn.net)`，因为在App端//是file协议
5. Paths such as `url(//alicdn.net)` are changed to `url(https://alicdn.net)`, because on the App side // is the file protocol
6. 很多人在H5端联网时使用本地测试服务地址(localhost或127.0.0.1)，这样的联网地址手机App端是无法访问的，请使用手机可访问的IP进行联网
6. Many people use the local test service address (localhost or 127.0.0.1) when connecting to the H5 terminal. Such a network address cannot be accessed on the mobile App terminal. Please use the IP accessible by the mobile phone to connect to the network.


### App正常，但H5异常的可能性
### App is normal, but the possibility of H5 abnormality
2. App端使用了App特有的API和功能，比如plus、Native.js、subNVue、原生插件等
2. App side uses App-specific APIs and functions, such as plus, Native.js, subNVue, native plug-ins, etc.

### App正常，H5异常的可能性
### App is normal, the possibility of H5 abnormality

1. 代码中使用了App端特有的plus、Native.js、subNVue、原生插件等功能
1. The code uses the unique plus, Native.js, subNVue, native plug-in and other functions on the App side

### App(v2)与App(v3)差异说明
### The difference between App(v2) and App(v3)

1. App(v2)默认template中使用了未定义或未初始化的数据，运行不会报错，且不影响后续节点渲染。App(v3)运行时，会直接告警，并报错（标准的vue渲染逻辑，同H5），且影响后续节点数据的渲染，错误信息通常显示为`undefined is not an object, evaluating(xxx.xxx.xxx)`
1. App(v2) default template uses undefined or uninitialized data, it will not report an error when running, and will not affect subsequent node rendering. When App(v3) is running, it will directly alert and report an error (standard vue rendering logic, same as H5), and affect the rendering of subsequent node data. The error message is usually displayed as `undefined is not an object, evaluating(xxx.xxx. xxx)`

2. App(v2)默认隔离组件样式（组件间样式不会互相影响），App(v3)版本默认不隔离。目前发现开发者v2升级v3反馈的样式问题大多由此导致，v3版本将于`2.6.14-alpha`进行调整默认隔离组件间样式。
2. App (v2) isolates component styles by default (the styles between components will not affect each other), App (v3) version does not isolate by default. At present, it is found that most of the style problems reported by the developers of v2 upgrade v3 are caused by this. The v3 version will be adjusted in `2.6.14-alpha` to adjust the default isolation between components style.


### 使用 Vue.js 的注意
### Notes on using Vue.js

1. `uni-app` 基于`Vue 2.0`实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见[从 Vue 1.x 迁移](https://cn.vuejs.org/v2/guide/migration.html)
1. `uni-app` is implemented based on `Vue 2.0`. Developers should pay attention to the differences in the use of Vue 1.0 -> 2.0. For details, see [Migrating from Vue 1.x](https://cn.vuejs.org/v2/ guide/migration.html)

2. data 属性必须声明为返回一个初始数据对象的函数；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据
2. The data attribute must be declared as a function that returns an initial data object; otherwise, the data will not be automatically destroyed when the page is closed, and the last data will be displayed when the page is opened again
 
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
  	```
3. 开发者需按`Vue 2.0`的写法实现数据绑定，不支持`Vue 1.0`的数据绑定写法，故如下写法不支持：
3. Developers need to implement data binding according to the writing method of `Vue 2.0`. The writing method of data binding of `Vue 1.0` is not supported, so the following writing method is not supported:

	```javascript
	  <view id="item-{{id}}"></view>	
	```
	需修改为：
	Need to be modified to:
	```javascript
	<view v-bind:id="'item-' + id "></view>	
	```
 
### 区别于传统 web 开发的注意
### Different from traditional web development

你之前可能习惯自由的web开发，但uni-app有很多限制。
You may be used to free web development before, but uni-app has many limitations.

当然限制是为了在框架层更好的优化用户体验，所以uni-app的体验要优于web。
Of course, the limitation is to better optimize the user experience at the framework layer, so the experience of uni-app is better than that of the web.

并且这些限制只是写法的限制，并不影响功能。
And these restrictions are only restrictions on the writing method, and do not affect the function.

请仔细阅读本节。
Please read this section carefully.

1. JS注意
1. JS attention
	- 非H5端，不能使用浏览器自带对象，比如document、window、localstorage、cookie等，更不能使用jquery等依赖这些浏览器对象的框架。因为App端不支持这些对象。
	- For non-H5 end, you cannot use the browser's built-in objects, such as document, window, localstorage, cookies, etc., let alone jquery and other frameworks that rely on these browser objects. Because the App does not support these objects.
	- 没有这些浏览器自带对象并不影响业务开发，uni提供的api足够完成业务。
	- The absence of these browser's built-in objects does not affect business development, and the api provided by uni is sufficient to complete the business.
	- uni的api在编译到web平台运行时，其实也会转为浏览器的js api。
	- When uni's api is compiled and run on the web platform, it will actually be converted to the browser's js api.
  - App端若要使用操作window、document的库，需要通过renderjs来实现。
  - If you want to use the library for operating windows and documents on the App side, you need to implement it through renderjs.
	- uni的api是多端可用的。在条件编译区，每个平台的专有api也可以使用，比如wx.、plus.等api可以分别在微信下和app下使用。
	- Uni's api is available at multiple ends. In the conditional compilation area, the proprietary api of each platform can also be used, such as wx., plus. and other apis can be used under WeChat and app respectively.
2. Tag注意
2. Tag attention
	- uni-app的tag同小程序的tag，和HTML的tag不一样，比如div要改成view，span要改成text、a要改成navigator。
	- The tag of uni-app is different from the tag of the applet, and is different from the tag of HTML. For example, div should be changed to view, span should be changed to text, and a should be changed to navigator.
	- 出于降低h5应用向uni-app迁移成本的考虑，写成div、span也可以运行在app上，因为uni-app编译器会把这些HTML标签编译为小程序标签。但仍然建议养成新习惯。
	- In order to reduce the cost of migrating h5 applications to uni-app, div and span can also be run on the app, because the uni-app compiler will compile these HTML tags into small program tags. But it is still recommended to develop new habits.
3. Css注意
3. Css attention
	- 虽然大部分css样式app中都可以支持，但推荐使用flex布局模型，这种布局更灵活高效且支持更多平台(比如nvue、快应用只支持flex布局)
	- Although most css style apps can support it, it is recommended to use the flex layout model, which is more flexible and efficient and supports more platforms (such as nvue and fast apps only support flex layout)
	- 单位方面，uni-app默认为rpx。这是一种可跨端的通用单位 [详见](/frame?id=%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)
    - In terms of units, uni-app defaults to rpx. This is a universal unit that can be cross-terminal [see details](/frame?id=%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)


4. 工程目录注意
4. Project catalog attention
	- 每个要显示的页面，都要放到pages目录下，新建一个页面所在的目录，然后放同名目录的vue文件，比如project/pages/lista/lista.vue，并且在pages.json里配置。
	- Each page to be displayed must be placed in the pages directory, create a new directory where the page is located, and then put the vue file of the directory with the same name, such as project/pages/lista/lista.vue, and configure it in pages.json.
	- 自定义组件，放到component目录
	- Custom components, put them in the component directory
	- 静态资源如图片，固定放到static目录下。这是webpack、mpvue的规则
	- Static resources, such as pictures, are fixed in the static directory. This is the rule of webpack and mpvue
5. 数据绑定方式的注意
5. Note on data binding
	- ```uni-app``` 基于```Vue 2.0```实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见[从 Vue 1.x 迁移](https://cn.vuejs.org/v2/guide/migration.html)
	- ```uni-app``` is implemented based on ```Vue 2.0```. Developers should pay attention to the differences in the use of Vue 1.0 -> 2.0. For details, please refer to [Migration from Vue 1.x](https://cn .vuejs.org/v2/guide/migration.html)
6. 每个页面支持使用原生title，首页支持使用原生底部tab，这些是要在pages.json里配置，这些并不是vue页面的一部分。当然vue里的js api也可以动态修改原生title
6. Each page supports the use of native title, and the home page supports the use of native bottom tabs. These are to be configured in pages.json and are not part of the vue page. Of course, the js api in vue can also dynamically modify the native title
6. 虽然使用vue，但在app里，不是spa而是mpa
6. Although using vue, in the app, it is not spa but mpa
7. 位置坐标系统一为国测局坐标系gcj02，这种坐标系可以被多端支持。老版5+的百度定位和百度地图使用的是百度私有坐标系bd09ll，这种坐标系需要转换。新版uni-app里的百度地图已经默认改为gcj02。高德地图不受影响，一直是gcj02
7. The first position coordinate system is the coordinate system gcj02 of the National Bureau of Survey and Measurement, which can be supported by multiple terminals. The old version of 5+ Baidu positioning and Baidu map use Baidu's private coordinate system bd09ll, which needs to be converted. The Baidu map in the new uni-app has been changed to gcj02 by default. The Gaode map is not affected, it is always gcj02

### H5 开发注意
### H5 Development Note

* H5 发布到服务器注意：
* H5 is published to the server note:
    1. 配置发行后的路径（发行在网站根目录可不配置），比如发行网站路径是 www.xxx.com/html5，在 `manifest.json` 文件内编辑 h5 节点，router 下增加 base 属性为 html5
    1. Configure the path after the release (it is not necessary to configure the release in the root directory of the website), for example, the path of the release website is www.xxx.com/html5, edit the h5 node in the `manifest.json` file, and add the base attribute to html5 under the router
<div>
<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9f026b20-4f3c-11eb-b680-7980c8a877b8.png" width="500">
</div>
    2. 点击菜单 发行-> H5
    2. Click on the menu Issue -> H5
    3. 在当下项目下的 ``unpackage/dist/build/h5`` 目录找到出的资源，部署服务器（或者使用本地服务器预览），如需部署到相对路径（支持本地file协议打开）参考：https://ask.dcloud.net.cn/article/37432。
    3. Find the resources found in the ``unpackage/dist/build/h5'' directory under the current project, deploy the server (or use the local server to preview), if you need to deploy to a relative path (support the local file protocol to open) reference: https ://ask.dcloud.net.cn/article/37432.

* 引用第三方 js 的方式：
* Ways to cite third-party js:
    1. 通过 npm 引入（通过条件编译，只有是 h5 平台才 import 相应的库）
    1. Import through npm (through conditional compilation, only the h5 platform can import the corresponding library)
    2. 在 `manifest.json` 文件编辑 h5 节点的 template 属性，填写 html 模版路径，在 html 模版里面可以使用 script 的方式引入三方的 js，如下示例是加了百度统计的 html 模板部分代码，模版全部代码可参考：[自定义模板](/collocation/manifest?id=h5-template)
    2. Edit the template attribute of the h5 node in the `manifest.json` file, and fill in the html template path. In the html template, you can use script to introduce the tripartite js. The following example is a part of the html template code added by Baidu Statistics, the template is all The code can refer to: [custom template](/collocation/manifest?id=h5-template)

```
...
<body>
            <noscript>
                <strong>Please enable JavaScript to continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- built files will be auto injected -->
            <script>
                var _hmt = _hmt || [];
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?xxxxxx";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            </script>
</body>
...
```

* H5 版 `uni-app` 全支持 `vue` 语法，所以可能造成部分写法在 H5 端生效，在 App 端不生效。
* The H5 version of `uni-app` fully supports the `vue` syntax, so it may cause part of the wording to take effect on the H5 side, but not on the App side.

* H5 校验了更严格的 ``vue`` 语法，有些写法不规范会报警，比如： `data` 后面写对象会报警，必须写 `function`；不能修改 `props` 的值；组件最外层 `template` 节点下不允许包含多个节点等。
* H5 has verified the stricter ``vue`` syntax. Some irregularities will cause an alarm. For example, writing an object after `data` will cause an alarm. You must write `function`; you cannot modify the value of `props`; the outermost component The layer `template` node is not allowed to contain multiple nodes, etc.

* 编译为 H5 版后生成的是单页应用（SPA）。
* After compiling to the H5 version, a single page application (SPA) is generated.

* 如果遇到跨域造成js无法联网，注意网络请求（request、uploadFile、downloadFile等）在浏览器存在跨域限制，解决方案有详见：[https://ask.dcloud.net.cn/article/35267](https://ask.dcloud.net.cn/article/35267)
* If you encounter cross-domain js failure to connect to the Internet, please note that network requests (request, uploadFile, downloadFile, etc.) have cross-domain restrictions in the browser. The solution is detailed in: [https://ask.dcloud.net.cn/article /35267](https://ask.dcloud.net.cn/article/35267)

* APP 的导航栏和 `tabbar` 均是原生控件，元素区域坐标是不包含原生导航栏和 `tabbar` 的；而 H5 里导航栏和 `tabbar` 是 div 模拟实现的，所以元素坐标会包含导航栏和tabbar的高度。为了优雅的解决多端高度定位问题，`uni-app` 新增了2个css变量：`--window-top` 和 `--window-bottom`，这代表了页面的内容区域距离顶部和底部的距离。举个实例，如果你想在原生`tabbar` 上方悬浮一个菜单，之前写 `bottom:0`。这样的写法编译到 h5 后，这个菜单会和 `tabbar` 重叠，位于屏幕底部。而改为使用 `bottom:var(--window-bottom)`，则不管在 app 下还是在h5下，这个菜单都是悬浮在 `tabbar` 上浮的。这就避免了写条件编译代码。当然仍然也可以使用 H5 的条件编译处理界面的不同。
* APP’s navigation bar and `tabbar` are both native controls, and the element area coordinates do not include native navigation bar and `tabbar`; while the navigation bar and `tabbar` in H5 are implemented by div simulation, so element coordinates will include navigation The height of the bar and tabbar. In order to elegantly solve the problem of multi-terminal height positioning, `uni-app` adds 2 new css variables: `--window-top` and `--window-bottom`, which represent the distance between the content area of ​​the page and the top and bottom of the page. distance. For example, if you want to hover a menu above the native `tabbar`, write `bottom:0` beforehand. After compiling this way to h5, this menu will overlap with `tabbar` and located at the bottom of the screen. Instead of using `bottom:var(--window-bottom)`, the menu will float on the `tabbar` regardless of whether it is under app or h5. This avoids writing conditional compilation code. Of course, you can still use H5's conditional compilation to handle the difference in interface.

* CSS 內使用 `vh` 单位的时候注意 `100vh` 包含导航栏，使用时需要减去导航栏和 `tabBar` 高度，部分浏览器还包含浏览器操作栏高度，使用时请注意。
* When using the unit of `vh` in CSS, note that `100vh` contains the navigation bar. You need to subtract the height of the navigation bar and `tabBar` when using it. Some browsers also include the height of the browser operation bar. Please pay attention when using it.

* 正常支持 `rpx`，`px` 是真实物理像素。暂不支持通过设 `manifest.json` 的 `"transformPx" : true`，把 px 当动态单位使用。
* Normally supports `rpx`, `px` is the real physical pixel. It is not currently supported to use px as a dynamic unit by setting `"transformPx": true` of `manifest.json`.

* 使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议。
* To use the compass, geographic location, accelerometer and other related interfaces requires the https protocol, and the local preview (localhost) can use the http protocol.

* PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器。
* When testing the PC-side Chrome browser emulator device, access to the location API needs to connect to the Google server.

* 组件内（页面除外）不支持 `onLoad`、`onShow` 等页面生命周期。
* In components (except pages), page life cycles such as `onLoad` and `onShow` are not supported.

* 为避免和内置组件冲突，自定义组件请加上前缀（但不能是 u 和 uni）。比如可使用的自定义组件名称：`my-view`、`m-input`、`we-icon`，例如不可使用的自定义组件名称：`u-view`、`uni-input`，如果已有项目使用了可能造成冲突的名称，请修改名称。
* To avoid conflicts with built-in components, please add prefixes for custom components (but not u and uni). For example, the usable custom component names: `my-view`, `m-input`, `we-icon`, for example, the unusable custom component names: `u-view`, `uni-input`, if you have Some items use names that may cause conflicts. Please modify the names.