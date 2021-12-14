## 介绍
## Introduction
``uni-app`` App端内置了一个基于 weex 改进的原生渲染引擎，提供了原生渲染能力。
`uni-app` App has a built-in native rendering engine based on weex, which provides native rendering capabilities.

在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此。
On the App side, if vue page is used, webview rendering will be used; If nvue page (abbreviation of native vue) is used, native rendering will be used. You can use two kinds of pages in an App at the same time, for example, the home page uses nvue, and the second page uses vue page, as is the case with the hello uni-app example.

虽然nvue也可以多端编译，输出H5，但nvue的css写法受限，所以如果你不开发App，那么不需要使用nvue。
Although nvue can also be compiled with multiple terminals and output H5, the css writing of nvue is limited. If you don not develop an App, nvue is not needed.

以往的 weex ，有个很大的问题是它只是一个高性能的渲染器，没有足够的API能力（比如各种push sdk集成、蓝牙等能力调用），使得开发时非常依赖原生工程师协作，开发者本来想节约成本，结果需要前端、iOS、Android 3拨人开发，适得其反。 nvue 解决了这个问题，让前端工程师可以直接开发完整 App，并提供丰富的插件生态和云打包。这些组合方案，帮助开发者切实的提高效率、降低成本。
The previous weex had a big problem that it was only a high-performance renderer, and it didn't have enough API capabilities (such as various push sdk integration, Bluetooth and other capability to call), which made the development heavily dependent on the collaboration of native engineers. Developers are intended to save costs, but as a result, they need front-end, iOS and Android 3 groups of people to develop, which is counterproductive. nvue solves this problem by allowing front-end engineers to directly develop a complete App and provide rich plug-in ecosystem and cloud packaging. These combination schemes help developers to effectively improve efficiency and reduce costs.

同时```uni-app```扩展了weex原生渲染引擎的很多排版能力，修复了很多bug。比如
At the same time, `uni-app` expands many typesetting capabilities of weex's native rendering engine and fixes many bugs. For example

- Android端良好支持边框阴影，[详情](/nvue-css?id=android-box-shadow)
- The Android side supports border shadows well, [Details](/nvue-css?id=android-box-shadow)
- iOS端支持高斯模糊，<a href="https://ask.dcloud.net.cn/article/36617#view" target="_blank">详情</a>
- IOS supports Gaussian blur, <a href="https://ask.dcloud.net.cn/article/36617#view" target="_blank">Details</a>
- 可实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果
- It can realize the complex typesetting effect of area scrolling long list+left and right dragging list+ceiling
- 优化圆角边框绘制性能
- Optimize the rendering performance of border-radius
- 扩展了更多的css
- Extend more css



## 适用场景
## Applicable scene

nvue的组件和API写法与vue页面一致，其内置组件还比vue页面内置组件增加了更多，[详见](https://uniapp.dcloud.io/component/list)。
nvue's components and API are written in the same way as the vue page, and its built-in components are more than the built-in components of the vue page. [See details](https://uniapp.dcloud.io/component/list).

如果你熟悉 weex或react native 开发，那么 nvue 是你的更优选择，能切实提升你的开发效率，降低成本。
If you are familiar with weex or react native development, nvue is your better choice, which can effectively improve your development efficiency and reduce costs.

如果你是web前端，不熟悉原生排版，那么建议你仍然以使用vue页面为主，在App端某些vue页面表现不佳的场景下使用 nvue 作为强化补充。这些场景如下：
If you are a web front-end unfamiliar with native typesetting, it is recommended that you still use vue pages as the main method, and use nvue as an enhancement supplement in the case of poor performance of some vue pages on the App side. These scenarios are as follows:

1. 需要高性能的区域长列表或瀑布流滚动。webview的页面级长列表滚动是没有性能问题的（就是滚动条覆盖webview整体高度），但页面中某个区域做长列表滚动，则需要使用nvue的```list```、```recycle-list```、```waterfall```等组件([详见](https://uniapp.dcloud.io/component/list))。这些组件的性能要高于vue页面里的区域滚动组件```scroll-view```。
1. Long lists or waterfall scrolling in areas that require high performance. There is no performance problem in webview's page-level long list scrolling (i.e., the scroll bar covers the overall height of webview), but for a long list scrolling in a certain area of the page, you need to use nvue's `list`, `recycle-list`, `waterfall` and other components ([See details](https://uniapp.dcloud.io/component/list)). The performance of these components is higher than that of the area scroll component `scroll-view` in the vue page.
2. 复杂高性能的自定义下拉刷新。uni-app的pages.json里可以配置原生下拉刷新，但引擎内置的下拉刷新样式只有雪花和circle圈2种样式。如果你需要自己做复杂的下拉刷新，推荐使用nvue的refresh组件。当然[插件市场](https://ext.dcloud.net.cn/search?q=%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0)里也有很多vue下的自定义下拉刷新插件，只要是基于renderjs或wxs的，性能也可以商用，只是没有nvue的```refresh```组件更极致。
2. Complex high-performance custom pull-down refresh. Native pull-down refresh can be configured in uni-app's pages.json, but the built-in pull-down refresh style of the engine only has two styles: snowflake and circle. If you need to generate a complex pull-down refresh yourself, nvue's refresh component is recommended. Of course, there are many custom pull-down refresh plug-ins under Vue in the [Plug-in market](https://ext.dcloud.net.cn/search?q=%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0). As long as they are based on renderjs or wxs, the performance can also be commercialized, but it is not more extreme than the `refresh` component of nvue.
3. 左右拖动的长列表。在webview里，通过```swiper```+```scroll-view```实现左右拖动的长列表，前端模拟下拉刷新，这套方案的性能不好。此时推荐使用nvue，比如新建uni-app项目时的[新闻示例模板](https://ext.dcloud.net.cn/plugin?id=103)，就采用了nvue，切换很流畅。
3. Long list that can be dragged left and right. In the webview, the performance of the solution that implements a long list of dragging left and right through `swiper`+`scroll-view` and the front end simulates pull-down refresh is not good. At this time, nvue is recommended. For example, the [news sample template](https://ext.dcloud.net.cn/plugin?id=103) used in the new uni-app project achieved smooth switching by using nvue.
4. 实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果，效果可参考hello uni-app模板里的```swiper-list```。[详见](https://ext.dcloud.net.cn/plugin?id=2128)
4. Realize the complex typesetting effect of scrolling long list in area + dragging list left and right + sticky. For the effect, please refer to `swiper-list` in the hello uni-app template. [See details](https://ext.dcloud.net.cn/plugin?id=2128)
5. 如需要将软键盘右下角按钮文字改为“发送”，则需要使用nvue。比如聊天场景，除了软键盘右下角的按钮文字处理外，还涉及聊天记录区域长列表滚动，适合nvue来做。
5. If you need to change the button text in the lower right corner of the soft keyboard to "Send", you need to use nvue. For example, the chat scenario, besides the button text processing in the lower right corner of the soft keyboard, also involves the area long list scrolling of the chat record, for which nvue is suitable.
6. 解决前端控件无法覆盖原生控件的层级问题。当你使用```map```、```video```、```live-pusher```等原生组件时，会发现前端写的```view```等组件无法覆盖原生组件，层级问题处理比较麻烦，此时使用nvue更好。或者在vue页面上也可以覆盖一个subnvue（一种非全屏的nvue页面覆盖在webview上），以解决App上的原生控件层级问题。[详见](https://uniapp.dcloud.io/component/native-component)
6. Solve the layer problem that the front-end controls fail to cover the native controls. When you use native components such as `map`, `video`, and `live-pusher`, you will find that the components such as `view` written on the front end cannot cover the native components, and it is troublesome to deal with the level problems. It's better to use nvue at this time. Or you can also overlay a subnvue on the vue page (a non-full screen nvue page overlaid on webview) to solve the problem of native control hierarchy on App. [See details](https://uniapp.dcloud.io/component/native-component)
7. 如深度使用```map```组件，建议使用nvue。除了层级问题，App端nvue文件的map功能更完善。
7. If you use the `map` component deeply, nvue is recommended. In addition to the hierarchy problem, the map function of the nvue file on the App side is more complete.
8. 如深度使用```video```，建议使用nvue。比如如下2个场景：video内嵌到swiper中，以实现抖音式视频滑动切换，例子见[插件市场](https://ext.dcloud.net.cn/search?q=%E4%BB%BF%E6%8A%96%E9%9F%B3)；nvue的视频全屏后，通过```cover-view```实现内容覆盖，比如增加文字标题、分享按钮。
8. If you use `video` deeply, nvue is recommended. Take the following two scenarios as an example: video is embedded in the swiper to achieve the same video sliding switch as Tik Tok, for example, see [plug-in market](https://ext.dcloud.net.cn/search?q=%E4%BB%BF%E6%8A%96%E9%9F%B3); After the nvue video is full screen, use `cover-view` to achieve content coverage, such as adding text titles and sharing buttons.
9. 直播推流：nvue下有```live-pusher```组件，功能更完善，也没有层级问题。
9. Live streaming: There is an `live-pusher` component under nvue, which has more complete functions and no level issues.
10. 对App启动速度要求极致化。App端如果首页使用nvue且在manifest里配置fast模式，那么App的启动速度可以控制在1秒左右。而使用vue页面的话，App的启动速度一般是3秒起，取决于你的代码性能和体积。
10. Extreme requirements for App startup speed. On the App side, if the home page uses nvue and fast mode is configured in manifest, the startup speed of the App can be controlled to about 1 second. When using vue page, the startup speed of the App usually costs more than 3 seconds, depending on your code performance and volume.

但注意，在某些场景下，nvue不如vue页面，如下：
But note that in some scenarios, nvue is not as good as vue page, as follows:
1. ```canvas```。nvue的canvas性能不高，尤其是Android App平台，所以这个组件干脆没有内置，而是需要单独引入。操作canvas动画，最高性能的方式是使用vue页面的renderjs技术，在hello uni-app里的canvas示例就是如此。
1. `canvas`。 nvue's canvas performance is not high, especially in the Android App platform. Therefore, canvas is not built in this component, but needs to be introduced separately. The highest performance way to operate canvas animation is to use the renderjs technology of vue page, as shown in the canvas example in hello uni-app.
2. 动态横竖屏。nvue页面的css不支持媒体查询，所以横竖屏动态切换、动态适配屏幕是很困难的。
2. Dynamic horizontal and vertical screens. The css of nvue page does not support media query, so it is very difficult to dynamically switch between landscape and portrait screens and dynamically adapt the screens.





## 纯原生渲染模式
## Pure native rendering mode
uni-app在App端，支持vue页面和nvue页面混搭、互相跳转。也支持纯nvue原生渲染。
uni-app supports mixing and jumping between vue pages and nvue pages on the App side. It also supports pure nvue native rendering.

启用纯原生渲染模式，可以减少App端的包体积、减少使用时的内存占用。因为webview渲染模式的相关模块将被移除。
Enabling the pure native rendering mode can reduce the package size and memory usage of the App side. Because the relevant modules of webview rendering mode will be removed.

在manifest.json源码视图的```"app-plus"```下配置```"renderer":"native"```，即代表App端启用纯原生渲染模式。此时pages.json注册的vue页面将被忽略，vue组件也将被原生渲染引擎来渲染。
Configure `"renderer":"native"` under `"app-plus"` in the source view of manifest.json, which means that the pure native rendering mode is enabled on the App side. At this time, the vue page registered by pages.json will be ignored, and the vue component will be rendered by the native rendering engine.

如果不指定该值，默认是不启动纯原生渲染的。
If this value is not specified, pure native rendering will not be started by default.

```javascript
	// manifest.json    
	{    
	     // ...    
		/* App platform-specific configuration */    
	    "app-plus": {    
	        //App端纯原生渲染模式
	        //App side pure native rendering mode
	        "renderer": "native",
	    }    
	}
```


## 编译模式
## Compilation mode
**weex编译模式和uni-app编译模式**
**weex compilation mode and uni-app compilation mode**

如你之前是weex开发者，可以继续查阅本章节，否则可以跳过看下一节[快速上手](#快速上手)。
If you used to be a weex developer, you can continue to refer to this section. Otherwise, you can skip to the next section [Quick Start](#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B).

weex的组件和JS API，与uni-app不同。
weex's components and JS API are different from uni-app.

考虑到weex用户的迁移，uni-app 也支持weex的代码写法。在manifest.json中可以配置使用**weex编译模式**或**uni-app编译模式**。选择weex编译模式时将不支持uni-app的组件和jsapi，需要开发者参考weex官方文档的写法来写代码。 比如 weex 编译模式用```<div>```。uni-app 编译模式则使用```<view>```。
Considering the migration of weex users, uni-app also supports weex coding. You can configure to use **weex compilation mode** or **uni-app compilation mode** in manifest.json. When choosing weex compilation mode, the components of uni-app and jsapi will not be supported, and developers need to refer to the writing of weex official documents to write codes. For example, use `<div>` for weex compilation mode. For uni-app compilation mode, use `<view>`.

一般情况建议使用```uni-app```模式，除非历史weex代码较多，需要逐步过渡。同时注意weex编译模式的切换是项目级的，不支持同项目下某个nvue页面使用weex模式，另一个nvue页面使用uni-app模式。
It is generally recommended to use the `uni-app` mode, unless there are many historical weex codes that requires a gradual transition. At the same time, note that the switching of weex compilation mode is project level, and it is not supported to use weex mode for one nvue page and uni-app mode for another nvue page under the same project.


|			|weex编译模式						|uni-app编译模式					|
|			| weex compiled mode| uni-app compilation mode|
|--			|--									|--								|
|平台		|仅App								|所有端，包含H5			|
| Platform| App only| All sides, including H5|
|组件		|weex组件如div						|uni-app组件如view				|
| Component| weex components such as div| uni-app components such as view|
|生命周期	|只支持weex生命周期					|支持所有uni-app生命周期			|
| Lifecycle| Only weex lifecycle is supported| All uni-app lifecycles are supported|
|JS API		|weex API、uni API			|weex API、uni API		|
|单位		|750px是屏幕宽度，wx是固定像素单位		|750rpx是屏幕宽度，px是固定像素单位|
| Unit| 750px is the screen width and wx is the fixed pixel unit| 750rpx is the screen width and px is the fixed pixel unit|
|全局样式	|手动引入							|app.vue的样式即为全局样式		|
| Global style| Manual introduction| The style of app.vue is the global style|
|页面滚动	|必须给页面套或组件					|默认支持页面滚动					|
| Page scrolling| Page nesting or components are necessary| Page scrolling is supported by default|

在 manifest.json 中修改2种编译模式，```manifest.json``` -> ```app-plus``` -> ```nvueCompiler``` 切换编译模式。
Modify the two compilation modes in manifest.json, `manifest.json` -> `app-plus` -> `nvueCompiler` switch the compilation mode.

``nvueCompiler`` 有两个值：
`nvueCompiler` has two values:

- weex
- uni-app

```javascript
// manifest.json    
{    
	// ...    
	/* App platform-specific configuration */    
	"app-plus": {    
	    //是否启用 uni-app 模式  
	    //whether to enable uni-app mode  
	    "nvueCompiler":"uni-app" 
	}    
}
```


在 `manifest.json` 配置文件中，HBuilderX2.4之前版本，默认值为 `weex` 模式，HBuilderX2.4+版本默认值改为 `uni-app` 模式。
In the `manifest.json` configuration file, the default value of HBuilderX2.4+ is `weex` mode, but the default value of HBuilderX2.4+ is changed to `uni-app` mode.


weex 编译模式不支持 ```onNavigationBarButtonTap``` 生命周期函数的写法。在 nvue 中监听原生标题栏按钮点击事件，详见：[uni.onNavigationBarButtonTap](https://uniapp.dcloud.net.cn/frame?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)。
weex compilation mode does not support the writing of `onNavigationBarButtonTap` life cycle functions. listen to the native title bar button click event in nvue, see: [uni.onNavigationBarButtonTap](https://uniapp.dcloud.net.cn/frame?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) for details.

weex编译模式不支持onShow生命周期。
The weex compilation mode does not support the onShow lifecycle.

weex 编译模式不支持`vuex`。
weex compilation mode does not support `vuex`.

nvue 的页面跳转，与 weex 不同，仍然遵循 uni-app 的路由模型。vue 页面和 nvue 页面之间不管怎么跳转，都遵循这个模型。包括 nvue 页面跳向 nvue 页面。每个页面都需要在 pages.json 中注册，调用 uni-app 的 [路由 API](https://uniapp.dcloud.net.cn/api/router) 进行跳转。
Unlike weex, the page jump of nvue still follows the routing model of uni-app. The model is followed no matter how you jump between vue page and nvue page. Including nvue page jumping to nvue page. Each page needs to be registered in pages.json and call uni-app's [route API](https://uniapp.dcloud.net.cn/api/router) to jump.

原生开发没有页面滚动的概念，页面内容高过屏幕高度时，内容并不会自动滚动；只有将页面内容放在`list`、`waterfall`、`scroll-view/scroller`这几个组件下内容才可滚动。这不符合前端开发的习惯，所以在 nvue 编译为 `uni-app`模式时，`uni-app`框架会给nvue页面外层自动嵌套一个 `scroller`，从而实现页面内容的自动滚动。
Native development does not have the concept of page scrolling. When the page content is higher than the screen height, the content will not automatically scroll; Only the content of the page is placed under the components of `list`, `waterfall`, and `scroll-view/scroller` can be scrolled. This is not in line with the custom of front-end development, so when nvue is compiled into the `uni-app` mode, the `uni-app` framework will automatically nest an `scroller` in the outer layer of the nvue page, so as to realize the automatic scrolling of the page content.

注意：
Notice:

- `uni-app`框架仅对nvue页面嵌套`scroller`容器，不会给组件自动套`scroller`容器；
- The `uni-app` frame only nests the `scroller` container for the nvue page, and does not automatically nest the `scroller` container for the component;
- 若nvue页面有`recycle-list`组件时，`uni-app`框架也不会自动给页面嵌套`scroller`容器
- If there is an `recycle-list` component on the nvue page, the `uni-app` frame will not automatically nest the `scroller` container on the page.
- 若你不希望自动嵌套`scroller`容器，可在`pages.json`中通过如下配置进行关闭：
- If you don't want to automatically nest the `scroller` container, you can turn it off in `pages.json` with the following configuration:

```javascript
{
    "path": "",
    "style": {
        // 不嵌套 scroller
        // scroller is not nested
        "disableScroll": true
    }
}
```

weex 编译模式下支持使用 weex ui ，例子[详见](https://ext.dcloud.net.cn/plugin?id=442)。但相比uni-app插件市场及官方[uni ui](https://ext.dcloud.net.cn/plugin?id=55)而言，weex语法的组件生态还是比较欠缺的。
weex ui is supported in weex compilation mode. For example, [See details](https://ext.dcloud.net.cn/plugin?id=442). But compared to the uni-app plug-in market and official [uni ui](https://ext.dcloud.net.cn/plugin?id=55), the component ecology of weex syntax is still relatively lacking.


**HBuilderX 3.1.0+ 开始支持新的样式编译模式**
**From HBuilderX 3.1.0+, new style compilation mode is supported**
- weex 编译模式：老模式，样式支持与普通 weex 相同
- weex compilation mode: the old mode, with the same style support as ordinary weex
- uni-app 编译模式：新模式，在 weex 原有样式基础上支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）[详见](https://ask.dcloud.net.cn/article/38751)
- uni-app compilation mode: a new mode, which supports combination selectors (adjacent brother selector, common brother selector, child selector and descendant selector) based on the original weex style. [See details](https://ask.dcloud.net.cn/article/38751)
```js
  // manifest.json  
  {        
      // ...        
       /* App platform-specific configuration */        
      "app-plus":  {  
          "nvueStyleCompiler": "uni-app"  
      }  
  }
```





## 快速上手
## Quick Start


### 1.新建nvue页面
### 1. Creating a new nvue page
在HBuilderX的 ```uni-app``` 项目中，新建页面，弹出界面右上角可以选择是建立```vue```页面还是```nvue```页面，或者2个同时建。
In the `uni-app` project of HBuilderX, create a new page and pop up the upper right corner of the interface, you can choose whether to create the `vue` page or the `nvue` page, or both at the same time.

不管是vue页面还是nvue页面，都需要在```pages.json```中注册。如果在HBuilderX中新建页面是会自动注册的，如果使用其他编辑器，则需要自行在pages.json里注册。
Both vue page and nvue page need to be registered in `pages.json`. If you create a new page in HBuilderX, it will be registered automatically, if you use other editors, you need to register it in pages.json.

如果一个页面路由下同时有vue页面和nvue页面，即出现同名的vue和nvue文件。那么在App端，会仅使用nvue页面，同名的vue文件将不会被编译到App端。而在非App端，会优先使用vue页面。
If there are both vue pages and nvue pages under a page route, there will be the vue and nvue files with the same name. Then on the App side, only nvue pages will be used, and the vue file with the same name will not be compiled to the App side. While on the non-App side, the vue page is preferred.

如果不同名，只有nvue页面，则在非app端，只有uni-app编译模式的nvue文件才会编译。
If there are different names and there are only nvue pages, on non-app sides, only the nvue files in uni-app compilation mode will be compiled.

### 2.开发nvue页面
### 2. Developing nvue page
``nvue`` 页面结构同 ```vue```, 由 ```template```、```style```、```script``` 构成。
`nvue` is the same as `vue` in terms of the page structure, which is composed of `template`, `style`, and `script`.

- template： 模板写法、数据绑定同 vue。组件支持2种模式，
- template： The template writing method and data binding are the same as vue. The component supports 2 modes,
	- weex 组件，同weex写法，参考：[weex 内置组件](http://emas.weex.io/zh/docs/components/a.html)；
	- weex component, written as weex, refer to: [weex built-in components](http://emas.weex.io/zh/docs/components/a.html);
	- uni-app组件，同uni-app写法。
	- uni-app component, written in the same way as uni-app.
	- App端nvue专用组件，详见[https://uniapp.dcloud.io/component/barcode](https://uniapp.dcloud.io/component/barcode)。
	- For the nvue dedicated component on the App side, see [https://uniapp.dcloud.io/component/barcode](https://uniapp.dcloud.io/component/barcode) for details.
- style：由于采用原生渲染，**并非所有浏览器的 css 均支持，布局模型只支持 flex 布局**，虽然不会造成某些界面布局无法实现，但写法要注意。详见：[样式](/nvue-css)
- style: Due to the use of native rendering, **Not all browsers support css, and the layout model only supports flex layout**. Although it will not cause some interface layouts to be unachievable, special attention should be paid to the writing. For details, see: [Style](/nvue-css)
- script：写法同 vue，并支持2种API：
- script: written in the same way as vue, and supports two kinds of APIs:
	- nvue API ：仅支持App端，uni-app编译模式也可使用。使用前需先引入对应模块，参考：[模块引入API](/nvue-api)
	- nvue API: only the App side is supported, and the uni-app compilation mode can also be used. The corresponding module must be introduced prior to use, please refer to: [Introduction of module API](/nvue-api)
	- uni API：[https://uniapp.dcloud.io/api/README](https://uniapp.dcloud.io/api/README)

### 3.调试 nvue 页面
### 3. Debugging nvue page
HBuilderX内置了weex调试工具的强化版，包括审查界面元素、看log、debug打断点，[详见](https://uniapp.dcloud.io/snippet?id=%e5%85%b3%e4%ba%8e-app-%e7%9a%84%e8%b0%83%e8%af%95)
HBuilderX has built-in an enhanced version of the weex debugging tool, including reviewing interface elements, watching log, and debugging breakpoints. [See details](https://uniapp.dcloud.io/snippet?id=%e5%85%b3%e4%ba%8e-app-%e7%9a%84%e8%b0%83%e8%af%95)





## render-whole

在HBuilder X 3.1.0起版本，nvue 新增 `render-whole`属性，类型`Boolean`。
From HBuilder X 3.1.0+, nvue has added the `render-whole`attribute and type`Boolean`.

- 设置render-whole="true"时，视图层将组件以及子组件的信息结构一次性和原生层通讯，通过整个节点的重绘提升了排版渲染性能。
- When render-whole="true" is set, the view layer communicates the information structure of components and subcomponents with the native layer at one time, and the rendering performance of typesetting is improved by redrawing the whole node.
- 设置render-whole="false"时，视图层将以子节点一个接着一个和原生层通讯再重绘。总体的渲染时间可能更久。
- When render-whole="false" is set, the view layer will be redrawn by communicating with the native layer one by one with child nodes. The overall rendering time may be longer.

默认启用`render-whole`为`true`的组件列表
Enable `render-whole` as a component list of `true` by default

- `text`
- `cell`
- `header`
- `cell-slot`
- `recycle-list`

**使用**
**Usage**

```html
<swiper :render-whole="true"></swiper>
```

**演示**
**Demo**

 > 此演示在Android 5.1版本手机上的效果，高版本手机效果没有这么明显
 > The effect of this demonstration on Android version 5.1 mobile phone is not so obvious in higher version mobile phone
 
<img style="width:300px;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/29c0c580-55ab-11eb-a16f-5b3e54966275.gif"></img>
 

示例工程[点击下载](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/d5adb160-55af-11eb-bd01-97bc1429a9ff.zip)
For the sample project, [Click to download](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/d5adb160-55af-11eb-bd01-97bc1429a9ff.zip)
 






## nvue开发与vue开发的常见区别
## Common differences between nvue development and vue development

基于原生引擎的渲染，虽然还是前端技术栈，但和web开发肯定是有区别的。
Rendering based on native engine is still a front-end technology stack, but it is definitely different from web development.

1. nvue 页面控制显隐只可以使用```v-if```不可以使用```v-show```
1. nvue page control display and hide can only use `v-if` but not `v-show`
2. nvue 页面只能使用``` flex ```布局，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 flex 布局设计好界面。
2. The nvue page only supports the `flex` layout and does not support any other layout methods. Before developing the page, you should first figure out what the vertical content of this page is and which contents are to be scrolled, then what is the horizontal axis arrangement of each vertical content, and design the interface according to flex layout.
3. nvue 页面的布局排列方向默认为竖排（```column```），如需改变布局方向，可以在 ```manifest.json``` -> ```app-plus``` -> ```nvue``` -> ```flex-direction``` 节点下修改，仅在 uni-app 模式下生效。[详情](https://uniapp.dcloud.io/collocation/manifest?id=nvue)。
3. The default layout direction of the nvue page is vertical (`column`). If you need to change the layout direction, you can modify it under the node `manifest.json` -> `app-plus` -> `nvue` -> `flex-direction`, which only takes effect in uni-app mode. [Details.](https://uniapp.dcloud.io/collocation/manifest?id=nvue)
4. nvue页面编译为H5时，会做一件css默认值对齐的工作。因为weex渲染引擎只支持flex，并且默认flex方向是垂直。而H5端，使用web渲染，默认不是flex，并且设置```display:flex```后，它的flex方向默认是水平而不是垂直的。所以nvue编译为H5时，会自动把页面默认布局设为flex、方向为垂直。当然开发者手动设置后会覆盖默认设置。
4. When the nvue page is compiled into H5, css default value alignment will be done. Because weex rendering engine only supports flex, and the default flex direction is vertical. On the H5 side, using web rendering, the default is not flex. After setting `display:flex`, its flex direction is horizontal instead of vertical by default. Therefore, when nvue is compiled into H5, the default layout of the page will be set to flex and the direction will be vertical automatically. Of course, the default settings will be overridden after the developer sets them manually.
5. 文字内容，必须、只能在```<text>```组件下。不能在```<div>```、```<view>```的```text```区域里直接写文字。否则即使渲染了，也无法绑定js里的变量。
5. The text content must and can only be under the `<text>` component. You cannot write text directly in the `text` area of `<div>` and `<view>`. Otherwise, even if rendered, the variables in js cannot be bound.
6. 只有```text```标签可以设置字体大小，字体颜色。
6. Only the `text` tag can set the font size and font color.
7. 布局不能使用百分比、没有媒体查询。
7. Layout cannot use percentage and there is no media query.
8. nvue 切换横竖屏时可能导致样式出现问题，建议有 nvue 的页面锁定手机方向。
8. When nvue switches the landscape and portrait screens, it may cause style problems, it is recommended to lock the direction of the mobile phone of the page when there is nvue.
9. 支持的css有限，不过并不影响布局出你需要的界面，```flex```还是非常强大的。详见
9. Supported css is limited, but it does not affect the layout of the interface you need. `flex` is still very powerful. See details
10. 不支持背景图。但可以使用```image```组件和层级来实现类似web中的背景效果。因为原生开发本身也没有web这种背景图概念
10. Background images are not supported. But you can use `image` components and levels to achieve background effects similar to those in the web. Because in native development, there is no such concept of background map like web.
11. css选择器支持的比较少，只能使用 class 选择器。[详见](/nvue-css)
11. Fewer styles are supported by the css selector, and only the class selector can be used. [See details](/nvue-css)
12. nvue 的各组件在安卓端默认是透明的，如果不设置```background-color```，可能会导致出现重影的问题。
12. Each component of nvue is transparent by default on the Android side. If `background-color` is not set, ghosting problems may occur.
13. ```class``` 进行绑定时只支持数组语法。
13. `class` only supports array syntax when binding.
14. Android端在一个页面内使用大量圆角边框会造成性能问题，尤其是多个角的样式还不一样的话更耗费性能。应避免这类使用。
14. Using a large number of border-radius in a page of the Android side will cause performance problems, especially if the styles of multiple borders are not the same, which will consume more performance. Such use should be avoided.
15. nvue页面没有```bounce```回弹效果，只有几个列表组件有```bounce```效果，包括 ```list```、```recycle-list```、```waterfall```。
15. The nvue page does not have the `bounce` rebound effect, only a few list components have the `bounce` effect, including `list`, `recycle-list`, and `waterfall`.
16. 原生开发没有页面滚动的概念，页面内容高过屏幕高度并不会自动滚动，只有部分组件可滚动（```list```、```waterfall```、```scroll-view/scroller```），要滚得内容需要套在可滚动组件下。这不符合前端开发的习惯，所以在 nvue 编译为 uni-app模式时，给页面外层自动套了一个 ```scroller```，页面内容过高会自动滚动。（组件不会套，页面有```recycle-list```时也不会套）。后续会提供配置，可以设置不自动套。
16. Native development does not have the concept of page scrolling. When the page content is higher than the screen height, it will not automatically scroll, only some components can be scrolled (`list`, `waterfall`, `scroll-view/scroller`). The content to be scrolled needs to be set under the scrollable component. This is not in line with the habit of front-end development, so when nvue is compiled into uni-app mode, an `scroller` is automatically nested to the outer layer of the page, and the page content will automatically scroll if it is too high. (The component will not be nested, nor will it be nested when there is `recycle-list` on the page). Follow-up configuration will be provided, and the function can be set not to be applied automatically.
17. 在 App.vue 中定义的全局js变量不会在 nvue 页面生效。```globalData```和```vuex```是生效的。
17. The global js variables defined in App.vue will not take effect on the nvue page. `globalData` and `vuex` are effective.
18. App.vue 中定义的全局css，对nvue和vue页面同时生效。如果全局css中有些css在nvue下不支持，编译时控制台会报警，建议把这些不支持的css包裹在[条件编译](https://uniapp.dcloud.io/platform)里，```APP-NVUE```
18. Global css defined in App.vue is valid for both nvue and vue pages. If some css in the global css is not supported under nvue, the console will give an alarm at the time of compiling. It is recommended to wrap these unsupported css in [Conditional compilation](https://uniapp.dcloud.io/platform), `APP-NVUE`
19. 不能在 ```style``` 中引入字体文件，nvue 中字体图标的使用参考：[加载自定义字体](/nvue-api?id=addrule)。
19. You cannot import font files in `style`. For the use of font icons in nvue, please refer to: [Load custom fonts](/nvue-api?id=addrule).
20. 目前不支持在 nvue 页面使用 ```typescript/ts```。
20. `typescript/ts` is currently not supported on the nvue page.
21. nvue 页面关闭原生导航栏时，想要模拟状态栏，可以[参考文章](https://ask.dcloud.net.cn/article/35111)。但是，仍然强烈建议在nvue页面使用原生导航栏。nvue的渲染速度再快，也没有原生导航栏快。原生排版引擎解析```json```绘制原生导航栏耗时很少，而解析nvue的js绘制整个页面的耗时要大的多，尤其在新页面进入动画期间，对于复杂页面，没有原生导航栏会在动画期间产生整个屏幕的白屏或闪屏。
21. When the native navigation bar is closed on the nvue page, if you want to simulate the status bar, you can [refer to the article](https://ask.dcloud.net.cn/article/35111). However, it is still strongly recommended to use native navigation bar on nvue pages. However fast nvue rendering is, it will not be as fast as the native navigation bar. Native typesetting engine analysis`json`. It takes little time to draw the native navigation bar, but it takes much longer to draw the whole page by analyzing the js of nvue, especially when the new page enters the animation period. For complex pages, there is no native navigation bar that will generate the white screen or splash screen of the whole screen during the animation period.


## iOS平台下拉组件refresh组件注意问题
## Notes on iOS platform drop-down component refresh component

iOS平台默认情况下滚动容器组件（如```list```、```waterfall```组件）内容不足时，由于没有撑满容器的可视区域会导致无法上下滚动，此时无法操作下拉刷新功能，无法触发```refresh```组件的```@refresh```、```@pullingdown```事件。 此时可在容器组件中配置```alwaysScrollableVertical```属性值为```true```来设置支持上下滚动，支持下拉刷新操作。
By default, when the content of the scrolling container component (such as `list`, `waterfall` components) on the iOS platform is insufficient, it will not be able to scroll up and down because the visible area of the container is not filled. At this time, the pull-down refresh function cannot be operated, and the `@refresh` and `@pullingdown` events of the `refresh` component cannot be triggered. At this time, you can configure the `alwaysScrollableVertical` property value in the container component to set the value of `true` to support up and down scrolling and pull-down refresh operations.


##### 用法
##### Usage
```html
	<list class="scroll-v list" enableBackToTop="true" scroll-y alwaysScrollableVertical="true">
		<refresh class="refresh" @refresh="onrefresh()" @pullingdown="onpullingdown">
			//refresh content
		</refresh>
		<cell v-for="(newsitem,index) in list" :key="newsitem.id">
			//cell content
		</cell>
	</list>
```


> Android平台不存在此问题
> Android platform does not have this problem
