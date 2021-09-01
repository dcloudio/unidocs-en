`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。
`pages.json` The file is used to configure uni-app globally, determine the path of the page file, window style, native navigation bar, native tabbar at the bottom, etc.

注意定位权限申请等原属于`app.json`的内容，在uni-app中是在manifest中配置。
Note that `app.json`the content that originally belonged to the location permission application is configured in the manifest in the uni-app.

### 配置项列表
### List of configuration

|属性|类型|必填|描述|平台兼容|
| Attributes                                                   | Types of     | Required | description                                    | Platform compatible |
|:-|:-|:-|:-|:-|
|[globalStyle](/collocation/pages?id=globalstyle)|Object|否|设置默认页面的窗口表现||
|[globalStyle](https://uniapp.dcloud.io/collocation/pages?id=globalstyle) | Object       | no       | Set the window performance of the default page |                     |
|[pages](/collocation/pages?id=pages)|Object Array|是|设置页面路径及窗口表现||
|[pages](https://uniapp.dcloud.io/collocation/pages?id=pages) | Object Array | Yes      | Set page path and window performance           |                     |
|[easycom](/collocation/pages?id=easycom)|Object|否|组件自动引入规则|2.5.5+|
|[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) | Object       | no       | Automatic component introduction rules         | 2.5.5+              |
|[tabBar](/collocation/pages?id=tabbar)|Object|否|设置底部 tab 的表现||
|[tabBar](https://uniapp.dcloud.io/collocation/pages?id=tabbar) | Object       | no       | Set the performance of the bottom tab          |                     |
|[condition](/collocation/pages?id=condition)|Object|否|启动模式配置||
|[condition](https://uniapp.dcloud.io/collocation/pages?id=condition) | Object       | no       | Start mode configuration                       |                     |
|[subPackages](/collocation/pages?id=subPackages)|Object Array|否|分包加载配置||
|[leftWindow](/collocation/pages?id=leftwindow)|Object|否|大屏左侧窗口|H5|
|[topWindow](/collocation/pages?id=topwindow)|Object|否|大屏顶部窗口|H5|
|[rightWindow](/collocation/pages?id=rightwindow)|Object|否|大屏右侧窗口|H5|

以下是一个包含了所有配置选项的 `pages.json` ：
The following is one that includes all configuration options `pages.json`:

```javascript
{
	"pages": [{
		"path": "pages/component/index",
		"style": {
			"navigationBarTitleText": "component"
		}
	}, {
		"path": "pages/API/index",
		"style": {
			"navigationBarTitleText": "interface"
		}
	}, {
		"path": "pages/component/view/index",
		"style": {
			"navigationBarTitleText": "view"
		}
	}],
  //模式配置，仅开发期间生效
  //Pattern configuration, effective only during development
	"condition": {
    //当前激活的模式（list 的索引项）
    //Pattern configuration, effective only during development
		"current": 0,
		"list": [{
      //模式名称
      //Model name
			"name": "test",
      //启动页面，必选
      //Startup page, required
			"path": "pages/component/view/index"
		}]
	},
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "demo",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"usingComponents":{
			"collapse-tree-item":"/components/collapse-tree-item"
		},
		//横屏配置，全局屏幕旋转设置(仅 APP)，支持 auto / portrait / landscape
		"pageOrientation": "portrait",
		"rpxCalcMaxDeviceWidth": 960,
		"rpxCalcBaseDeviceWidth": 375,
		"rpxCalcIncludeWidth": 750
	},
	"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"height": "50px",
		"fontSize": "10px",
		"iconWidth": "24px",
		"spacing": "3px",
		"list": [{
			"pagePath": "pages/component/index",
			"iconPath": "static/image/icon_component.png",
			"selectedIconPath": "static/image/icon_component_HL.png",
			"text": "component"
		}, {
			"pagePath": "pages/API/index",
			"iconPath": "static/image/icon_API.png",
			"selectedIconPath": "static/image/icon_API_HL.png",
			"text": "interface"
		}],
		"midButton": {
			"width": "80px",
			"height": "50px",
			"text": "text",
			"iconPath": "static/image/midButton_iconPath.png",
			"iconWidth": "24px",
			"backgroundImage": "static/image/midButton_backgroundImage.png"
		}
	},
  "easycom": {
    //是否自动扫描组件
    //Whether to automatically scan components
    "autoscan": true,
    //自定义扫描规则
    //Custom scanning rules
    "custom": {
      "^uni-(.*)": "@/components/uni-$1.vue"
    }
  },
  "topWindow": {
    "path": "responsive/top-window.vue",
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue",
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "300px"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
}
```

# globalStyle

用于设置应用的状态栏、导航条、标题、窗口背景色等。
Used to set the status bar, navigation bar, title, window background color of the application, etc.

|属性|类型|默认值|描述|平台差异说明|
|Attributes|Types of|Defaults|description|平台差异说明|
|:-|:-|:-|:-|:-|
|navigationBarBackgroundColor|HexColor|#F7F7F7|导航栏背景颜色（同状态栏背景色）|APP与H5为#F7F7F7|
|navigationBarBackgroundColor|HexColor|#F7F7F7|Navigation bar background color (same as status bar background color)|APP与H5为#F7F7F7|
|navigationBarTextStyle|String|white|导航栏标题颜色及状态栏前景颜色，仅支持 black/white||
|navigationBarTextStyle|String|white|Navigation bar title color and status bar foreground color, only black/white supported||
|navigationBarTitleText|String||导航栏标题文字内容||
|navigationStyle|String|default|导航栏样式，仅支持 default/custom。custom即取消默认的原生导航栏，需看[使用注意](/collocation/pages?id=customnav)|H5、App（2.0.3+）|
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。||
|enablePullDownRefresh|Boolean|false|Whether to enable pull-down refresh，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。||
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)||
|onReachBottomDistance|Number|50|The distance from the bottom of the page when the page pull-down event is triggered, the unit only supports px，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)||
|backgroundColorTop|HexColor|#ffffff|顶部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
|backgroundColorBottom|HexColor|#ffffff|底部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
|titleImage|String||导航栏图片地址（替换当前文字标题）|H5、APP|
|transparentTitle|String|none|导航栏整体（前景、背景）透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明|H5、APP|
|titlePenetrate|String|NO|导航栏点击穿透|H5|
|pageOrientation|String|portrait|横屏配置，屏幕旋转设置，仅支持 auto / portrait / landscape 详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)|App 2.4.7+|
|animationType|String|pop-in|窗口显示的动画效果，详见：[窗口动画](api/router?id=animation)|App|
|animationDuration|Number|300|窗口显示动画的持续时间，单位为 ms|App|
|app-plus|Object||设置编译到 App 平台的特定样式，配置项参考下方 [app-plus](/collocation/pages?id=app-plus)|App|
|h5|Object||设置编译到 H5 平台的特定样式，配置项参考下方 [H5](/collocation/pages?id=h5)|H5|
|leftWindow|Boolean|true|当存在 leftWindow 时，默认是否显示 leftWindow|H5|
|topWindow|Boolean|true|当存在 topWindow 时，默认是否显示 topWindow|H5|
|rightWindow|Boolean|true|当存在 rightWindow 时，默认是否显示 rightWindow|H5|
|rpxCalcMaxDeviceWidth|Number|960|rpx 计算所支持的最大设备宽度，单位 px|App、H5（2.8.12+）|
|rpxCalcBaseDeviceWidth|Number|375|rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px|App、H5（2.8.12+）|
|rpxCalcIncludeWidth|Number|750|rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx|App、H5（2.8.12+）|
|maxWidth|Number||单位px，当浏览器可见区域宽度大于maxWidth时，两侧留白，当小于等于maxWidth时，页面铺满；不同页面支持配置不同的maxWidth；maxWidth = leftWindow(可选)+page(页面主体)+rightWindow(可选)|H5（2.9.9+）|

**注意**
**note**

- `globalStyle`中设置的`titleImage`也会覆盖掉`pages`->`style`内的设置文字标题
- `globalStyle`The setting in -> `titleImage`will also override the setting text title in`pages``style`
- 使用 `maxWidth` 时，页面内fixed元素需要使用--window-left,--window-right来保证布局位置正确
- Use `maxWidth`, the fixed elements within the page need to use --window-left, - window-right layout to ensure the correct position

# topWindow@topwindow

uni-app 2.9+ 新增 leftWindow, topWindow, rightWindow 配置。用于解决宽屏适配问题。
uni-app 2.9+ adds leftWindow, topWindow, and rightWindow configurations. Used to solve the problem of widescreen adaptation.

以现有的手机应用为mainWindow，在左、上、右，可以追加新的页面显示窗体。
Taking the existing mobile application as the mainWindow, new page display windows can be added to the left, top, and right.

整体的宽屏适配思路，参考单独的[宽屏适配指南](https://uniapp.dcloud.net.cn/adapt)

|属性|类型|默认值|描述|
| Attributes | Types of | Defaults | description                                    |
|:-|:-|:-|:-|
|path|String||配置页面路径|
| path       | String   |          | Configure page path                            |
|style|Object||配置页面窗口表现，配置项参考下方 [pageStyle](/collocation/pages?id=style)|
| style      | Object   |          | Configure page window performance              |
|matchMedia|Object||配置显示该窗口的规则，配置项参考下方 [matchMedia](/collocation/pages?id=matchmedia)|
| matchMedia | Object   |          | Configure the rules for displaying this window |

**注意**
**note**
- 目前 style 节点仅支持配置 width，height 等 css 样式相关属性
- Currently the style node only supports the configuration of CSS style related attributes such as width and height
- 如果需求当存在 topwindow 时，自动隐藏页面的 navigationBar，根据需求不同在`App.vue`中配置如下 css：
  - 只需要隐藏某个的页面 navigationBar
	```html
	<!-- 隐藏路径为 pages/component/view/view 页面的 navigationBar -->
	.uni-app--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
		display: none;
	}
	```
  - 需要隐藏大部分页面的 navigationBar，显示某个页面的 navigationBar 
	```html
	<!-- 隐藏所有页面的 navigationBar -->
	.uni-app--showtopwindow uni-page-head {
		display: none;
	}
	
	<!-- 显示路径为 pages/component/view/view 页面的 navigationBar -->
	.uni-app--showtopwindow [data-page="pages/component/view/view"] uni-page-head {
		display: block;
	}
	```


#### matchMedia

|属性|类型|默认值|描述|
| Attributes | Types of | Defaults | description|
|:-|:-|:-|:-|
|minWidth|Number|768|当设备可见区域宽度 >= minWidth 时，显示该 window|
| minWidth   | Number   | 768      | When the visible area width of the device >= minWidth, the window is displayed |

通过matchMedia的调节，可以自适应在不同屏幕上显示指定的window。
Through the adjustment of matchMedia, you can adaptively display the specified window on different screens.

```javascript
{
  "pages": [
    {
      "path": "pages/login/login",
      "style": {
        // 当前页面不显示 topWindow
        // The current page is not 
        "topWindow": false,
        // 当前页面不显示 leftWindow
        // The current page is not displayed leftWindow
        "leftWindow": false,
        // 当前页面不显示 rightWindow
        // The current page is not displayed rightWindow
        "rightWindow": false
      }
    }
  ],
  "topWindow": {
    // 指定 topWindow 页面文件
    // Specify the TopWindow page file
    "path": "responsive/top-window.vue",
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    // 指定 leftWindow 页面文件
    // Specify the leftWindow page file
    "path": "responsive/left-window.vue",
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    // 指定 rightWindow 页面文件
    // Specify the rightWindow page file
    "path": "responsive/right-window.vue",
    "style": {
      // 页面宽度
      // The page width
      "width": "300px"
    },
    "matchMedia": {
      //生效条件，当窗口宽度大于768px时显示
      //Valid condition, when the window width is greater than 768px
      "minWidth": 768
    }
  }
}
```

案例演示：HBuilderX 2.9.9+，新建项目选择hello uni-app或新闻模板，或直接浏览：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)

# leftWindow

与[topWindow](/collocation/pages?id=topwindow)相同

# rightWindow

与[topWindow](/collocation/pages?id=topwindow)相同

窗口通信参考：[https://uniapp.dcloud.net.cn/api/window/communication](https://uniapp.dcloud.net.cn/api/window/communication)


# pages

`uni-app` 通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象，其属性值如下：
`uni-app` Configure which pages the application consists of through the pages node. The pages node receives an array. Each item in the array is an object. Its attribute values are as follows:
 
|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|path|String||配置页面路径|
|path|String||Configure page path|
|style|Object||配置页面窗口表现，配置项参考下方 [pageStyle](/collocation/pages?id=style)||
|style|Object||Configure page window performance，配置项参考下方 [pageStyle](/collocation/pages?id=style)||

**Tips：**

- pages节点的第一项为应用入口页（即首页）
- The first item of the pages node is the application entry page (the home page)
- **应用中新增/减少页面**，都需要对 pages 数组进行修改
- **To add/reduce pages in the application** , you need to modify the pages array
- 文件名**不需要写后缀**，框架会自动寻找路径下的页面资源
- The file name **does not need to write a suffix** , the framework will automatically find the page resource under the path

**代码示例：**
**Code example:**

开发目录为：
The development directory is:
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─pages               
│  ├─index
│  │  └─index.vue    
│  └─login
│     └─login.vue    
├─static             
├─main.js       
├─App.vue          
├─manifest.json  
└─pages.json            
	</code>
</pre>

则需要在 pages.json 中填写
You need to fill in pages.json

```javascript
{
    "pages": [
        {
            "path": "pages/index/index", 
            "style": { ... }
        }, {
            "path": "pages/login/login", 
            "style": { ... }
        }
    ]
}
```

## style

用于设置每个页面的状态栏、导航条、标题、窗口背景色等。
Used to set the status bar, navigation bar, title, window background color, etc. of each page.

页面中配置项会覆盖 [globalStyle](/collocation/pages?id=globalstyle) 中相同的配置项
The configuration items in the page will override the same configuration items in globalStyle

|属性|类型|默认值|描述|平台差异说明|
|Attributes|Types of|Defaults|description|平台差异说明|
|:-|:-|:-|:-|:-|
|navigationBarBackgroundColor|HexColor|#000000|导航栏背景颜色（同状态栏背景色），如"#000000"||
|navigationBarBackgroundColor|HexColor|#000000|Navigation bar background color (same as status bar background color), such as "#000000"||
|navigationBarTextStyle|String|white|导航栏标题颜色及状态栏前景颜色，仅支持 black/white||
|navigationBarTextStyle|String|white|Navigation bar title color and status bar foreground color, only black/white supported||
|navigationBarTitleText|String||导航栏标题文字内容||
|navigationBarTitleText|String||Navigation bar title text content||
|navigationBarShadow|Object||导航栏阴影，配置参考下方 [导航栏阴影](/collocation/pages?id=navigationBarShadow)||
|navigationStyle|String|default|导航栏样式，仅支持 default/custom。custom即取消默认的原生导航栏，需看[使用注意](/collocation/pages?id=customnav)|H5、App（2.0.3+）|
|backgroundTextStyle|String|dark|下拉 loading 的样式，仅支持 dark/light||
|backgroundTextStyle|String|dark|Drop-down loading style, only supports dark/light||
|enablePullDownRefresh|Boolean|false|是否开启下拉刷新，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。||
|enablePullDownRefresh|Boolean|false|Whether to enable pull-down refresh，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。||
|onReachBottomDistance|Number|50|页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)||
|onReachBottomDistance|Number|50|The distance from the bottom of the page when the page pull-down event is triggered, the unit only supports px，详见[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)||
|backgroundColorTop|HexColor|#ffffff|顶部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
|backgroundColorBottom|HexColor|#ffffff|底部窗口的背景色（bounce回弹区域）|仅 iOS 平台|
|titleImage|String||导航栏图片地址（替换当前文字标题）|H5|
|transparentTitle|String|none|导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明|H5、APP|
|titlePenetrate|String|NO|导航栏点击穿透|H5|
|app-plus|Object||设置编译到 App 平台的特定样式，配置项参考下方 [app-plus](/collocation/pages?id=app-plus)|App|
|h5|Object||设置编译到 H5 平台的特定样式，配置项参考下方 [H5](/collocation/pages?id=h5)|H5|
|leftWindow|Boolean|true|当存在 leftWindow时，当前页面是否显示 leftWindow|H5|
|topWindow|Boolean|true|当存在 topWindow 时，当前页面是否显示 topWindow|H5|
|rightWindow|Boolean|true|当存在 rightWindow时，当前页面是否显示 rightWindow|H5|
|maxWidth|Number||单位px，当浏览器可见区域宽度大于maxWidth时，两侧留白，当小于等于maxWidth时，页面铺满；不同页面支持配置不同的maxWidth；maxWidth = leftWindow(可选)+page(页面主体)+rightWindow(可选)|H5（2.9.9+）|

**注意**
**note**

- 使用 `maxWidth` 时，页面内fixed元素需要使用--window-left,--window-right来保证布局位置正确
- Use `maxWidth`, the fixed elements within the page need to use --window-left, - window-right layout to ensure the correct position

**代码示例：**
**Code example:**

```javascript
{
  "pages": [{
      "path": "pages/index/index",
      "style": {
        //设置页面标题文字
        // Set the page title text
        "navigationBarTitleText": "首页",
        //开启下拉刷新
        //Turn on drop-down refresh
        "enablePullDownRefresh":true
      }
    },
    ...
  ]
}
```


### 自定义导航栏使用注意@customnav
### Note on the use of custom navigation bars@customnav
当navigationStyle设为custom或titleNView设为false时，原生导航栏不显示，此时要注意几个问题：
When navigationStyle is set to custom or titleNView is set to false, the native navigation bar is not displayed. At this time, there are several issues to be aware of:
- 非H5端，手机顶部状态栏区域会被页面内容覆盖。这是因为窗体是沉浸式的原因，即全屏可写内容。uni-app提供了状态栏高度的css变量[--status-bar-height](/frame?id=css%e5%8f%98%e9%87%8f)，如果需要把状态栏的位置从前景部分让出来，可写一个占位div，高度设为css变量。
- For non-H5 devices, the status bar area at the top of the phone will be covered by the page content. This is because the form is immersive, that is, full-screen writable content. uni-app provides a css variable for the height of the status bar 
```html
<template>
    <view>
        <view class="status_bar">
            <!-- 这里是状态栏 -->
            <!-- Here's the status bar -->
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
- 如果原生导航栏不能满足需求，推荐使用uni ui的[自定义导航栏NavBar](https://ext.dcloud.net.cn/plugin?id=52)。这个前端导航栏自动处理了状态栏高度占位问题。
- If the native navigation bar cannot meet the needs, it is recommended to use uni ui's custom navigation bar NavBar. This front-end navigation bar automatically handles the height occupancy of the status bar.
- 前端导航栏搭配原生下拉刷新时，会有问题，包括
	* App和H5下，原生下拉刷新提供了[circle样式](/collocation/pages?id=app-pullToRefresh)，可以指定offset偏移量（pages.json的app-plus下配置），自定义下拉圈出现的位置。在hello uni-app的扩展组件中有示例。
- 非H5端，前端导航盖不住原生组件。如果页面有video、map等[原生组件](/component/native-component)，滚动时会覆盖住导航栏
- For non-H5 terminals, the front-end navigation cannot cover native components. If the page has native components such as video, map, it will cover the navigation bar when scrolling
	* 如果是App下，建议使用[titleNView](/collocation/pages?id=app-titleNView)或[subNVue](/collocation/pages?id=app-subNVues)，体验更好
- 前端组件在渲染速度上不如原生导航栏，原生导航可以在动画期间渲染，保证动画期间不白屏，但使用前端导航栏，在新窗体进入的动画期间可能会整页白屏，越低端的手机越明显。
- The rendering speed of the front-end components is not as good as the native navigation bar. The native navigation can be rendered during the animation to ensure that the screen is not white during the animation. However, when the front-end navigation bar is used, the entire page may be white during the animation when the new form enters. The lower end The more obvious the phone.
- 以上讨论的是前端自定义导航栏，但在App侧，原生导航栏也提供了更丰富的自定义性
- The above discussion is the front-end custom navigation bar, but on the App side, the native navigation bar also provides more customization navigation
	* titleNView：给原生导航栏提供更多配置，包括自定义按钮、滚动渐变效果、搜索框等，详见[titleNView](/collocation/pages?id=app-titleNView)
  * titleNView: Provides more configurations for the native navigation bar, including custom buttons, scrolling gradient effects, search boxes, etc.
	* subNVue：使用nvue原生渲染，所有布局自己开发，具备一切自定义灵活度。详见[subNVue](/collocation/pages?id=app-subNVues)
  * subNView: Use nvue native rendering, all layouts are developed by yourself, with all customization flexibility. 
- 页面禁用原生导航栏后，想要改变状态栏的前景字体样式，仍可设置页面的 navigationBarTextStyle 属性（只能设置为 black或white）。如果想单独设置状态栏颜色，App端可使用[plus.navigator.setStatusBarStyle](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.setStatusBarStyle)设置。注意部分低端Android手机（4.4）自身不支持设置状态栏前景色。
- After the native navigation bar is disabled on the page, if you want to change the foreground font style of the status bar, you can still set the navigationBarTextStyle property of the page (only black or white). If you want to set the status bar color separately, you can use plus.navigator.setStatusBarStyle to set the App . Note that some low-end Android phones (4.4) do not support setting the foreground color of the status bar.
 
鉴于以上问题，在原生导航能解决业务需求的情况下，尽量使用原生导航。甚至有时需要牺牲一些不是很重要的需求。在App和H5下，uni-app提供了灵活的处理方案：[titleNView](/collocation/pages?id=app-titleNView)、[subNVue](/collocation/pages?id=app-subNVues)、或整页使用nvue。
In view of the above problems, when native navigation can solve business needs, try to use native navigation. Sometimes it is even necessary to sacrifice some less important requirements. Under App and H5, uni-app provides flexible solutions: titleNView , subNVue , or nvue for the entire page.

### app-plus

配置编译到 App 平台时的特定样式，部分常用配置 H5 平台也支持。以下仅列出常用，更多配置项参考 [WebviewStyles](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)。

|属性|类型|默认值|描述|平台兼容|
|:-|:-|:-|:-|:-|
|background|HexColor|#FFFFFF|窗体背景色。无论vue页面还是nvue页面，在App上都有一个父级原生窗体，该窗体的背景色生效时间快于页面里的css生效时间|App|
|titleNView|Object||导航栏 ，详见:[导航栏](/collocation/pages?id=app-titleNView)|App、H5|
|subNVues|Object||原生子窗体，详见:[原生子窗体](/collocation/pages?id=app-subNVues)|App 1.9.10+|
|bounce|String||页面回弹效果，设置为 "none" 时关闭效果。|App（nvue Android无页面级bounce效果，仅list、recycle-list、waterfall等滚动组件有bounce效果）|
|popGesture|String|close|侧滑返回功能，可选值："close"（启用侧滑返回）、"none"（禁用侧滑返回）|App-iOS|
|softinputNavBar|String|auto|iOS软键盘上完成工具栏的显示模式，设置为 "none" 时关闭工具栏。|App-iOS|
|softinputMode|String|adjustPan|软键盘弹出模式，支持 adjustResize、adjustPan 两种模式|App|
|pullToRefresh|Object||下拉刷新|App|
|scrollIndicator|String||滚动条显示策略，设置为 "none" 时不显示滚动条。|App|
|animationType|String|pop-in|窗口显示的动画效果，详见：[窗口动画](api/router?id=animation)。|App|
|animationDuration|Number|300|窗口显示动画的持续时间，单位为 ms。|App|
**Tips**
- `.nvue` 页面仅支持 `titleNView、pullToRefresh、scrollIndicator` 配置，其它配置项暂不支持

#### 导航栏@app-titleNView
#### Navigation Bar@app-titleNView
|属性|类型|默认值|描述|版本兼容性|
|Attributes|Types of|Defaults|description|Version compatibility|
|:-|:-|:-|:-|:-|
|backgroundColor|String|#F7F7F7|背景颜色，颜色值格式为"#RRGGBB"。在使用半透明标题栏时，也可以设置rgba格式||
|backgroundColor|String|#F7F7F7|The background color, the color value format is "#RRGGBB". When using a semi-transparent title bar, you can also set the rgba format||
|buttons|Array||自定义按钮，详见 [buttons](/collocation/pages?id=app-titlenview-buttons)|纯nvue即render:native时暂不支持|
|buttons|Array||Custom buttons，详见 [buttons](/collocation/pages?id=app-titlenview-buttons)|纯nvue即render:native时暂不支持|
|titleColor|String|#000000|标题文字颜色||
|titleColor|String|#000000|Title text color||
|titleOverflow|String|ellipsis|标题文字超出显示区域时处理方式。"clip"-超出显示区域时内容裁剪；"ellipsis"-超出显示区域时尾部显示省略标记（...）。||
|titleOverflow|String|ellipsis|The processing method when the title text exceeds the display area. "clip"-the content is clipped when it exceeds the display area; "ellipsis"-an ellipsis (...) is displayed at the end when it exceeds the display area.||
|titleText|String||标题文字内容||
|titleText|String||Title text content||
|titleSize|String||标题文字字体大小||
|titleSize|String||Title text font size||
|type|String|default|导航栏样式。"default"-默认样式；"transparent"-滚动透明渐变；"float"-悬浮导航栏。|App-nvue 2.4.4+ 支持|
|type|String|default|Navigation bar style. "default"-default style; "transparent"-scrolling transparent gradient; "float"-floating navigation bar.|App-nvue 2.4.4+ support|
|tags|Array||原生 View 增强，详见：[5+ View 控件](http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.ViewDrawTagStyles)||
|tags|Array||Native View enhancement，详见：[5+ View 控件](http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.ViewDrawTagStyles)||
|searchInput|Object||原生导航栏上的搜索框配置，详见：[searchInput](/collocation/pages?id=app-titlenview-searchinput)|1.6.0|
|searchInput|Object||The search box configuration on the native navigation bar，详见：[searchInput](/collocation/pages?id=app-titlenview-searchinput)|1.6.0|
|homeButton|Boolean|false|标题栏控件是否显示Home按钮||
|homeButton|Boolean|false|Whether the title bar control displays the Home button||
|autoBackButton|Boolean|true|标题栏控件是否显示左侧返回按钮|2.6.3|
|autoBackButton|Boolean|true|Whether the title bar control displays the left back button|2.6.3|
|backButton|Object||返回按钮的样式，详见：[backButton](/collocation/pages?id=app-titleNView-backButtonStyles)|2.6.3|
|backButton|Object||The style of the back button，详见：[backButton](/collocation/pages?id=app-titleNView-backButtonStyles)|2.6.3|
|backgroundImage|String||支持以下类型： 背景图片路径 - 如"/static/img.png"，仅支持本地文件绝对路径，根据实际标题栏宽高拉伸绘制； 渐变色 - 仅支持线性渐变，两种颜色的渐变，如“linear-gradient(to top, #a80077, #66ff00)”， 其中第一个参数为渐变方向，可取值： "to right"表示从左向右渐变， “to left"表示从右向左渐变， “to bottom"表示从上到下渐变， “to top"表示从下到上渐变， “to bottom right"表示从左上角到右下角， “to top left"表示从右下角到左上角|2.6.3|
|backgroundImage|String||The following types are supported: Background image path-such as "./img/t.png", only supports local file path, relative path, relative to the host location of the current page, drawn according to the actual title bar width and height; gradient color-only Support linear gradient, two-color gradient, such as "linear-gradient(to top, #a80077, #66ff00)", where the first parameter is the direction of the gradient, which can be a value: "to right" means gradient from left to right , "To left" means gradient from right to left, "to bottom" means gradient from top to bottom, "to top" means gradient from bottom to top, "to bottom right" means from upper left corner to lower right corner, "to top" "left" means from the lower right corner to the upper left corner|2.6.3|
|backgroundRepeat|String||仅在backgroundImage设置为图片路径时有效。 可取值： "repeat" - 背景图片在垂直方向和水平方向平铺； "repeat-x" - 背景图片在水平方向平铺，垂直方向拉伸； “repeat-y” - 背景图片在垂直方向平铺，水平方向拉伸； “no-repeat” - 背景图片在垂直方向和水平方向都拉伸。 默认使用 “no-repeat"|2.6.3|
|backgroundRepeat|String||Only valid when backgroundImage is set to the image path. Possible values: "repeat"-the background image is tiled vertically and horizontally; "repeat-x"-the background image is tiled horizontally and stretched vertically; "repeat-y"-the background image is tiled vertically Shop, stretch horizontally; "no-repeat"-the background image stretches both vertically and horizontally. "No-repeat" is used by default|2.6.3|
|titleAlign|String|"auto"|可取值： "center"-居中对齐； "left"-居左对齐； "auto"-根据平台自动选择（Android平台居左对齐，iOS平台居中对齐）|2.6.3|
|titleAlign|String|"auto"|Possible values: "center"-align to the center; "left"-align to the left; "auto"-automatically select according to the platform (left-aligned on Android platform, center-aligned on iOS platform)|2.6.3|
|blurEffect|String|"none"|此效果将会高斯模糊显示标题栏后的内容，仅在type为"transparent"或"float"时有效。 可取值： "dark" - 暗风格模糊，对应iOS原生UIBlurEffectStyleDark效果； "extralight" - 高亮风格模糊，对应iOS原生UIBlurEffectStyleExtraLight效果； "light" - 亮风格模糊，对应iOS原生UIBlurEffectStyleLight效果； "none" - 无模糊效果。 注意：使用模糊效果时应避免设置背景颜色，设置背景颜色可能覆盖模糊效果。|2.4.3|
|blurEffect|String|"none"|This effect will display the content behind the title bar in a Gaussian blur. It is only effective when the type is "transparent" or "float". Possible values: "dark"-dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect; "extralight"-highlight style blur, corresponding to iOS native UIBlurEffectStyleExtraLight effect; "light"-bright style blur, corresponding to iOS native UIBlurEffectStyleLight effect; "none" -No blur effect. Note: Avoid setting the background color when using the blur effect. Setting the background color may cover the blur effect.|2.4.3|
|coverage|String|"132px"|标题栏控件变化作用范围，仅在type值为transparent时有效，页面滚动时标题栏背景透明度将发生变化。 当页面滚动到指定偏移量时标题栏背景变为完全不透明。 支持百分比、像素值||
|coverage|String|"132px"|The change scope of the title bar control is only valid when the type value is transparent. The transparency of the title bar background will change when the page is scrolled. The title bar background becomes completely opaque when the page scrolls to the specified offset. Support percentage, pixel value||
|splitLine|Boolean |false|标题栏的底部分割线([SplitLineStyles](/collocation/pages?id=app-titleNView-splitLineStyles))，设置此属性则在标题栏控件的底部显示分割线，可配置颜色值及高度。 设置此属性值为undefined或null则隐藏分割线。 默认不显示底部分割线|2.6.6|
|splitLine|Boolean |false|The bottom split line of the title bar (SplitLineStyles), set this property to display the split line at the bottom of the title bar control, and the color value and height can be configured. Set this property to undefined or null to hide the dividing line. The bottom dividing line is not displayed by default|2.6.6|
|subtitleColor|String||副标题文字颜色，颜色值格式为"#RRGGBB"和"rgba(R,G,B,A)"，如"#FF0000"表示标题文字颜色为红色。 默认值与主标题文字颜色一致|2.6.6|
|subtitleColor|String||The color of the subtitle text. The color value format is "#RRGGBB" and "rgba(R,G,B,A)". For example, "#FF0000" means the color of the title text is red. The default value is the same as the main title text color|2.6.6|
|subtitleSize|String|"auto"|副标题文字字体大小，字体大小单位为像素，如"14px"表示字体大小为14像素，默认值为12像素。|2.6.6|
|subtitleSize|String|"auto"|The font size of the subtitle text. The font size unit is pixels. For example, "14px" means the font size is 14 pixels, and the default value is 12 pixels.|2.6.6|
|subtitleOverflow|String|"ellipsis"|标题文字超出显示区域时处理方式，可取值： "clip" - 超出显示区域时内容裁剪； "ellipsis" - 超出显示区域时尾部显示省略标记（...）。|2.6.6|
|subtitleOverflow|String|"ellipsis"|The processing method when the title text exceeds the display area, the possible values are: "clip"-the content is clipped when it exceeds the display area; "ellipsis"-the ellipsis (...) is displayed at the end when it exceeds the display area.|2.6.6|
|subtitleText|String||副标题文字内容，设置副标后将显示两行标题，副标显示在主标题（titleText）下方。 注意：设置副标题后将居左显示|2.6.6|
|subtitleText|String||Subtitle text content. After setting the subtitle, two lines of title will be displayed, and the subtitle will be displayed below the main title (titleText). Note: After setting the subtitle, it will be displayed on the left|2.6.6|
|titleIcon|String||标题图标，图标路径如"./img/t.png"，仅支持本地文件路径， 相对路径，相对于当前页面的host位置，固定宽高为逻辑像素值"34px"。 要求图片的宽高相同。 注意：设置标题图标后标题将居左显示。|2.6.6|
|titleIcon|String||Title icon, icon path such as "./img/t.png", only supports local file path, relative path, relative to the host position of the current page, fixed width and height are logical pixel value "34px". The width and height of the pictures must be the same. Note: The title will be displayed on the left after setting the title icon.|2.6.6|
|titleIconRadius|String|无圆角|标题图标圆角，取值格式为"XXpx"，其中XX为像素值（逻辑像素），如"10px"表示10像素半径圆角。|2.6.6|
|titleIconRadius|String|No rounded corners | The rounded corners of the title icon, the value format is "XXpx", where XX is the pixel value (logical pixels), for example, "10px" means a 10-pixel radius rounded corner.|2.6.6|

#### SplitLineStyles@app-titleNView-splitLineStyles
|属性|类型|默认值|描述|版本兼容性|
|Attributes| Types of|Defaults|description|Version compatibility|
|:-|:-|:-|:-|:-|
|color|String|#CCCCCC|底部分割线颜色，可取值： "#RRGGBB"格式字符串，如"#FF0000"表示绘制红色分割线； "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明| |
|color|String|#CCCCCC|The color of the bottom dividing line, which can take the value: "#RRGGBB" format string, such as "#FF0000" means drawing a red dividing line; "rgba(R,G,B,A)", where R/G/B stands for red respectively Value/green value/blue value, positive integer type, value range is 0-255, A is transparency, floating point type, value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba (255,0,0,0.5)", which means red translucent| |
|height|String|"1px"|可取值：像素值（逻辑像素），支持小数点，如"1px"表示1像素高；百分比，如"1%"，相对于标题栏控件的高度。| |
|height|String|"1px"|Possible values: pixel value (logical pixel), decimal point is supported, such as "1px" means 1 pixel high; percentage, such as "1%", relative to the height of the title bar control.| |


**Tips**

- 页面支持通过配置 navigationStyle为custom，或titleNView为false，来禁用原生导航栏。一旦禁用原生导航，请注意阅读[自定义导航注意事项](/collocation/pages?id=customnav)。
- The page supports disabling the native navigation bar by configuring navigationStyle to custom or titleNView to false.
- `titleNView` 的 `type` 值为 `transparent` 时，导航栏为滚动透明渐变导航栏，默认只有button，滚动后标题栏底色和title文字会渐变出现； `type` 为 `float` 时，导航栏为悬浮标题栏，此时页面内容上顶到了屏幕顶部，包括状态栏，但导航栏悬浮盖在页面上方，一般这种场景会同时设置导航栏的背景色为rgba半透明颜色。
- `titleNView`The `type`value of `transparent`time, the navigation bar to scroll transparent gradient navigation bar, only the default button, and scroll the title bar gradient background and title text will appear; `type`as `float`, the navigation bar title bar for the suspension, this time on top of the top of the screen to page content , Including the status bar, but the navigation bar is floating over the top of the page. Generally, in this scenario, the background color of the navigation bar will be set to the semi-transparent color of rgba.
- `titleNView` 的 `type` 值为 `transparent` 时，App-nvue 2.4.4+ 支持
- `titleNView`The `type`value of `transparent`time, App-nvue 2.4.4+ support
- 在 `titleNView` 配置 `buttons` 后，监听按钮的点击事件，vue 页面及 nvue 的weex编译模式参考：[uni.onNavigationBarButtonTap](/nvue-outline?id=onnavigationbarbuttontap)
- In the `titleNView`configuration `buttons`, the monitor button click event, vue page and nvue of weex compilation mode reference: uni.onNavigationBarButtonTap
- 在 `titleNView` 配置 `searchInput` 后，相关的事件监听参考：[onNavigationBarSearchInputChanged 等](/collocation/frame/lifecycle?id=页面生命周期)
- In the `titleNView`configuration `searchInput`, the related event listener Reference: onNavigationBarSearchInputChanged etc.
- 可通过 `[<navigation-bar>(/component/navigation-bar)]` 配置
- Can `[<navigation-bar>(/component/navigation-bar)]`configure
- App下原生导航栏的按钮如果使用字体图标，注意检查字体库的名字（font-family）是否使用了默认的 iconfont，这个名字是保留字，不能作为外部引入的字体库的名字，需要调整为自定义的名称，否则无法显示。
- If the buttons of the native navigation bar under the App use font icons, pay attention to check whether the name of the font library (font-family) uses the default iconfont. This name is a reserved word and cannot be used as the name of an externally imported font library. It needs to be adjusted to self The defined name, otherwise it cannot be displayed.
- 想了解各种导航栏的开发方法，请详读[导航栏开发指南](https://ask.dcloud.net.cn/article/34921)

##### 自定义按钮@app-titleNView-buttons
##### Custom button@app-titleNView-buttons

|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|type|String|none|按钮样式，可取值见：[buttons 样式](/collocation/pages?id=app-titlenview-buttons-type)|
|type|String|none|Button style, see: [buttons style](/collocation/pages?id=app-titlenview-buttons-type)|
|color|String|默认与标题文字颜色一致|按钮上文字颜色|
|color|String|The default color is the same as the title text|
|background|String|默认值为灰色半透明|按钮的背景颜色，仅在标题栏type=transparent时生效|
|background|String|The default value is gray translucent|The background color of the button, only takes effect when the title bar type=transparent |
|colorPressed|String|默认值为 color 属性值自动调整透明度为 0.3|按下状态按钮文字颜色|
|colorPressed|String|The default value is the color attribute value and the transparency is automatically adjusted to 0.3 | Press state button text color|
|float|String|right|按钮在标题栏上的显示位置，可取值"left"、"right"|
|float|String|right|The display position of the button on the title bar, the values can be "left", "right"|
|fontWeight|String|normal|按钮上文字的粗细。可取值"normal"-标准字体、"bold"-加粗字体。|
|fontWeight|String|normal|The thickness of the text on the button. Possible values are "normal"-standard font, "bold"-bold font. |
|fontSize|String||按钮上文字大小|
|fontSize|String||The size of the text on the button |
|fontSrc|String||按钮上文字使用的字体文件路径。不支持网络地址，请统一使用本地地址。|
|fontSrc|String||The font file path used for the text on the button. Network addresses are not supported, please use local addresses uniformly. |
|select|String|false|是否显示选择指示图标（向下箭头），常用于城市选择|
|select|String|false|Whether to display the selection indicator icon (down arrow), often used for city selection |
|text|String||按钮上显示的文字。使用字体图标时 unicode 字符表示必须 '\u' 开头，如 "\ue123"（注意不能写成"\e123"）。|
|text|String||The text displayed on the button. When using font icons, unicode characters must start with'\u', such as "\ue123" (note that it cannot be written as "\e123").|
|width|String|44px|按钮的宽度，可取值： "*px" - 逻辑像素值，如"10px"表示10逻辑像素值，不支持rpx。按钮的内容居中显示； "auto" - 自定计算宽度，根据内容自动调整按钮宽度|
|width|String|44px|The width of the button, possible values: "*px"-logical pixel value, such as "10px" means 10 logical pixel value, rpx is not supported. The content of the button is displayed in the center; "auto"-customize the calculated width, and automatically adjust the button width according to the content|

##### 自定义返回按钮的样式@app-titleNView-backButtonStyles
##### Customize the style of the back button@app-titleNView-backButtonStyles

当autoBackButton设置为true时生效。 通过此属性可自定义返回按钮样式，如图标大小、红点、角标、标题等。
It takes effect when autoBackButton is set to true. Through this property, you can customize the style of the return button, such as icon size, red dot, corner label, title, etc.

HBuilderX 2.6.3+ 支持
HBuilderX 2.6.3+ support

|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|background|String|none|背景颜色，仅在标题栏type=transparent时生效，当标题栏透明时按钮显示的背景颜色。 可取值#RRGGBB和rgba格式颜色字符串，默认值为灰色半透明。|
|background|String|none|The background color is only effective when the title bar type=transparent. The background color of the button when the title bar is transparent. Possible values are #RRGGBB and rgba format color strings. The default value is gray and semi-transparent.|
|badgeText|String||角标文本，最多显示3个字符，超过则显示为...|
|badgeText|String||Subscript text, display up to 3 characters, if it exceeds, it will be displayed as...|
|color|String|窗口标题栏控件的标题文字颜色。|图标和标题颜色，可取值： "#RRGGBB"格式字符串，如"#FF0000"表示红色； "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。|
|color|String|The title text color of the window title bar control.|Icon and title color, possible values: "#RRGGBB" format string, such as "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B stands for red value/green respectively Value/blue value, positive integer type, value range is 0-255, A is transparency, floating point type, value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba(255, 0,0,0.5)", which means red translucent.|
|colorPressed|String||按下状态按钮文字颜色，可取值： "#RRGGBB"格式字符串，如"#FF0000"表示红色； "rgba(R,G,B,A)"，其中R/G/B分别代表红色值/绿色值/蓝色值，正整数类型，取值范围为0-255，A为透明度，浮点数类型，取值范围为0-1（0为全透明，1为不透明），如"rgba(255,0,0,0.5)"，表示红色半透明。 默认值为color属性值自动调整透明度为0.3。|
|colorPressed|String||Press the status button text color, the value can be: "#RRGGBB" format string, such as "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B respectively represent the red value /Green value/blue value, positive integer type, the value range is 0-255, A is transparency, floating point type, the value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba( 255,0,0,0.5)", which means red translucent. The default value is the color attribute value and the transparency is automatically adjusted to 0.3. |
|fontWeight|String|"normal"|返回图标的粗细，可取值： "normal" - 标准字体； "bold" - 加粗字体。|
|fontWeight|String|"normal"|Returns the thickness of the icon. Possible values: "normal"-standard font; "bold"-bold font. |
|fontSize|String||返回图标文字大小，可取值：字体高度像素值，数字加"px"格式字符串，如"22px"。 窗口标题栏为透明样式（type="transparent"）时，默认值为"22px"； 窗口标题栏为默认样式（type="default"）时，默认值为"27px"。|
|fontSize|String||Returns the icon text size, possible values: font height pixel value, number plus "px" format string, such as "22px". When the window title bar is a transparent style (type="transparent"), the default value is "22px"; when the window title bar is a default style (type="default"), the default value is "27px".|
|redDot|Boolean|false|是否显示红点，设置为true则显示红点，false则不显示红点。默认值为false。 注意：当设置了角标文本时红点不显示。|
|redDot|Boolean|false|Whether to display the red dot, set to true to display the red dot, false to not display the red dot. The default value is false. Note: The red dot is not displayed when the corner mark text is set. |
|title|String||返回按钮上的标题，显示在返回图标（字体图标）后，默认为空字符串。|
|title|String||The title on the back button, displayed after the back icon (font icon), is an empty string by default. |
|ftitleWeight|String|"normal"|返回按钮上标题的粗细，可取值： "normal" - 标准字体； "bold" - 加粗字体。|
|ftitleWeight|String|"normal"|The thickness of the title on the return button, the possible values are: "normal"-standard font; "bold"-bold font. |
|fontSize|String|"16px"|标题的字体大小，可取值：字体高度像素值，数字加"px"格式字符串，如"22px"。|
|fontSize|String|"16px"|The font size of the title. Possible values: font height pixel value, number plus "px" format string, such as "22px". |


##### 按钮样式@app-titleNView-buttons-type
##### Button style@app-titleNView-buttons-type

使用 type 值设置按钮的样式时，会忽略 fontSrc 和 text 属性。
When using the type value to style the button, the fontSrc and text attributes are ignored.

|值|说明|
|value|Description|
|:-|:-|
|forward|前进按钮|
|forward|Forward button|
|back|后退按钮|
|back|Back button|
|share|分享按钮|
|share|Share button|
|favorite|收藏按钮|
|favorite|Favorite button|
|home|主页按钮|
|home|Home button|
|menu|菜单按钮|
|menu|Menu button|
|close|关闭按钮|
|close|Close button|
|none|无样式，需通过 text 属性设置按钮上显示的内容、通过 fontSrc 属性设置使用的字体库。|
|none|No style, you need to set the content displayed on the button through the text property, and set the font library used through the fontSrc property. |

##### 搜索框配置@app-titleNView-searchInput
##### Search box configuration@app-titleNView-searchInput

searchInput可以在titleNView的原生导航栏上放置搜索框。其宽度根据周围元素自适应。
searchInput can place a search box on the native navigation bar of titleNView. Its width adapts to surrounding elements.

|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|autoFocus|Boolean|false|是否自动获取焦点|
|autoFocus|Boolean|false|Whether to automatically get focus|
|align|String|center|非输入状态下文本的对齐方式。可取值： "left" - 居左对齐； "right" - 居右对齐； "center" - 居中对齐。|
|align|String|center|The alignment of the text in the non-input state. Possible values: "left"-align to the left; "right"-align to the right; "center"-align to the center.|
|backgroundColor|String|rgba(255,255,255,0.5)|背景颜色|
|backgroundColor|String|rgba(255,255,255,0.5)|background color|
|borderRadius|String|0px|输入框的圆角半径，取值格式为"XXpx"，其中XX为像素值（逻辑像素），不支持rpx。|
|borderRadius|String|0px|The fillet radius of the input box, the value format is "XXpx", where XX is the pixel value (logical pixel), rpx is not supported.|
|placeholder|String||提示文本。|
|placeholder|String||Prompt text.|
|placeholderColor|String|#CCCCCC|提示文本颜色|
|placeholderColor|String|#CCCCCC|Prompt text color|
|disabled|Boolean|false|是否可输入|
|disabled|Boolean|false|Can input|

**searchInput Tips**

searchInput的点击输入框onNavigationBarSearchInputClicked、文本变化onNavigationBarSearchInputChanged、点击搜索按钮onNavigationBarSearchInputConfirmed等生命周期，见文档[页面生命周期](/frame?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)。
The life cycle of searchInput click input box onNavigationBarSearchInputClicked, text change onNavigationBarSearchInputChanged, click search button onNavigationBarSearchInputConfirmed, etc.
- 在生命周期里通过参数e.text，可获取输入框内容。具体见hello uni-app中模板-顶部导航栏中的示例
- Through the parameter e.text in the life cycle, the content of the input box can be obtained. For details, see the template in the hello uni-app-the example in the top navigation bar
- 如需动态修改searchInput，或者获取searchInput的placehold，参考[uni-app动态修改App端导航栏](https://ask.dcloud.net.cn/article/35374)
- If you need to modify searchInput dynamically, or get the placehold of searchInput

**常见titleNView配置代码示例**
**Common titleNView configuration code examples**

以下列出部分配置。关于全面的导航栏配置，这里有一个完善的演示工程，演示了导航栏的各种效果，详见：[https://ext.dcloud.net.cn/plugin?id=1765](https://ext.dcloud.net.cn/plugin?id=1765)
Some configurations are listed below. Regarding the comprehensive navigation bar configuration, here is a complete demonstration project that demonstrates the various effects of the navigation bar. 详见：[https://ext.dcloud.net.cn/plugin?id=1765](https://ext.dcloud.net.cn/plugin?id=1765)

```javascript
{
	"pages": [{
			//首页
      //Home page
			"path": "pages/index/index",
			"style": {
				"app-plus": {
          //禁用原生导航栏
          //Disable native navigation
					"titleNView": false
				}
			}
		}, {
      //日志页面
      //Log pages
			"path": "pages/log/log",
			"style": {
				"app-plus": {
          //关闭窗口回弹效果
          //Turn off window bounces
					"bounce": "none",
					"titleNView": {
            //原生标题栏按钮配置,
            //Native title bar button configuration,
						"buttons": [
							{
                //原生标题栏增加分享按钮，点击事件可通过页面的 onNavigationBarButtonTap 函数进行监听
                // Add a Share button to the native title bar. Clicking events can be monitored by the onNavigationBarButtonTap function of the page
								"text": "分享"
							}
						],
            //自定义 backButton
            //Custom backButton
						"backButton": {
							"background": "#00FF00"
						}
					}
				}
			}
		}, {
      //详情页面
      //Details page
			"path": "pages/detail/detail",
			"style": {
				"navigationBarTitleText": "Details",
				"app-plus": {
					"titleNView": {
            //透明渐变导航栏 App-nvue 2.4.4+ 支持
            //Transparent gradient navigation bar app-nvue 2.4.4+ support
						"type": "transparent"
					}
				}
			}
		}, {
      //搜索页面
      //Search page
			"path": "pages/search/search",
			"style": {
				"app-plus": {
					"titleNView": {
            //透明渐变导航栏 App-nvue 2.4.4+ 支持
            //Transparent gradient navigation bar app-nvue 2.4.4+ support
						"type": "transparent",
						"searchInput": {
							"backgroundColor": "#fff",
              //输入框圆角
              // Rounded corner of input box
							"borderRadius": "6px",
							"placeholder": "Please enter your search",
              //disable时点击输入框不置焦，可以跳到新页面搜索
              //When Disable, click the input box out of focus, can jump to the new page search
							"disabled": true
						}
					}
				}
			}
		}
		...
	]
}
```

**Tips**

- buttons 的 text 推荐使用字体图标。如果使用了汉字或英文，推荐把字体改小一点，否则文字长度增加后，距离屏幕右边距太近。
- It is recommended to use font icons for the text of buttons. If you use Chinese or English, it is recommended to change the font size smaller, otherwise the text length will increase and the distance to the right of the screen will be too close.
- App平台，buttons动态修改，[详见](https://ask.dcloud.net.cn/article/35374)
- App平台，buttons角标动态修改，见 hello uni-app 中模板-顶部导航标题栏-导航栏带红点和角标
- App平台，设置searchInput的文字动态修改，API见[文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.setTitleNViewSearchInputText)。注意disable状态无法设置文字、placehold暂不支持动态设置
- H5平台，如需实现上述动态修改，需在条件编译通过dom操作修改


#### 原生子窗体@app-subNVues
#### Native child form@app-subNVues

`subNVues` 是 vue 页面的原生子窗体。用于解决App中 vue 页面中的层级覆盖和原生界面灵活自定义用的。
`subNVues`It is the native child form of the vue page. Used to solve the hierarchical coverage in the vue page in the App and the flexible customization of the native interface.

它不是全屏页面，也不是组件，就是一个原生子窗体。它是一个 nvue 页面，使用 weex 引擎渲染，提供了比 cover-view、plus.nativeObj.view 更强大的原生排版能力，方便自定义原生导航或覆盖原生地图、视频等。请详读[subNVues 开发指南](http://ask.dcloud.net.cn/article/35948)
It is not a full-screen page, nor a component, but a native child form. It is an nvue page, rendered using the weex engine, and provides more powerful native typesetting capabilities than cover-view and plus.nativeObj.view, which is convenient for customizing native navigation or covering native maps, videos, etc. 

`subNVue` 也可以在 nvue 页面中使用。但目前在纯nvue下（render为native）还不支持。
`subNVue`It can also be used in the nvue page. But currently it is not supported under pure nvue (render is native).

|属性|类型|描述|
|Attributes|Types of|description|
|:- |:-  |:-|
|id|String| subNVue 原生子窗体的标识 |
|id|String| The identity of subNVue native subform |
|path|String|配置 nvue 文件路径，nvue 文件需放置到使用 subNvue 的页面文件目录下|
|path|String|Configure the nvue file path, the nvue file needs to be placed in the page file directory using subNvue|
|type|String|原生子窗口内置样式，可取值：'popup',弹出层；"navigationBar",导航栏|
|type|String|Native child window built-in style, possible values:'popup', pop-up layer; "navigationBar", navigation bar|
|style|Object|subNVue 原生子窗体的样式，配置项参考下方 [subNVuesStyle](/collocation/pages?id=app-subNVuesStyle)|
|style|Object|The style of subNVue native sub-form, the configuration items refer to subNVuesStyle below|

**Tips**
- `subNVues` 的 `id` 是全局唯一的，不能重复
- `subNVues`The `id`globally unique, can not be repeated
- 可以通过 [uni.getSubNVueById('id')](/api/window/subNVues?id=app-getsubnvuebyid) 获取 `subNVues` 的实例
- By uni.getSubNVueById ( 'id') acquired `subNVues`instance
- `subNVues` 的 `path` 属性只能是 `nvue` 文件路径
- `subNVues`The `path`property is only `nvue`a file path

##### 原生子窗体样式@app-subNVuesStyle
##### Native child form style@app-subNVuesStyle
|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|position|String|absolute|原生子窗体的排版位置，排版位置决定原生子窗体在父窗口中的定位方式。 可取值："static"，原生子窗体在页面中正常定位，如果页面存在滚动条则随窗口内容滚动；"absolute"，原生子窗体在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动；"dock"，原生子窗体在页面中停靠，停靠的位置由dock属性值决定。 默认值为"absolute"。|
|position|String|absolute|The layout position of the native child form. The layout position determines the positioning method of the native child form in the parent window. Possible values: "static", the native subform is positioned normally on the page, if the page has a scroll bar, it will scroll with the window content; "absolute", the native subform is absolutely positioned on the page, if the page has a scroll bar, it will not follow the window Content scrolling; "dock", the native child form is docked in the page, and the docking position is determined by the value of the dock property. The default value is "absolute".|
|dock|String|bottom|原生子窗体的停靠方式,仅当原生子窗体 "position" 属性值设置为 "dock" 时才生效，可取值："top"，原生子窗体停靠则页面顶部；"bottom"，原生子窗体停靠在页面底部；"right"，原生子窗体停靠在页面右侧；"left"，原生子窗体停靠在页面左侧。 默认值为"bottom"。|
|dock|String|bottom|The docking method of the native child form takes effect only when the native child form’s "position" property value is set to "dock", the value can be: "top", the native child form is docked at the top of the page; "bottom", native The subform is docked at the bottom of the page; "right", the native subform is docked on the right side of the page; "left", the native subform is docked on the left side of the page. The default value is "bottom". |
|mask|HexColor|rgba(0,0,0,0.5)|原生子窗体的遮罩层,仅当原生子窗体 "type" 属性值设置为 "popup" 时才生效，可取值： rgba格式字符串，定义纯色遮罩层样式，如"rgba(0,0,0,0.5)"，表示黑色半透明；|
|mask|HexColor|rgba(0,0,0,0.5)|The mask layer of the native subform will only take effect when the "type" attribute value of the native subform is set to "popup". Values are: rgba format string, which defines the solid color mask layer style, such as "rgba(0 ,0,0,0.5)", which means black translucent;|
|width|String|100%|原生子窗体的宽度,支持百分比、像素值，默认为100%。未设置width属性值时，可同时设置left和right属性值改变窗口的默认宽度。|
|width|String|100%|The width of the native child form supports percentages and pixel values. The default is 100%. When the width attribute value is not set, the left and right attribute values can be set at the same time to change the default width of the window.|
|height|String|100%|原生子窗体的高度,支持百分比、像素值，默认为100%。 当未设置height属性值时，优先通过top和bottom属性值来计算原生子窗体的高度。|
|height|String|100%|The height of the native child form, supports percentage, pixel value, the default is 100%. When the height attribute value is not set, the top and bottom attribute values are given priority to calculate the height of the native child form.|
|top|String|0px|原生子窗体垂直向下的偏移量，支持百分比、像素值，默认值为0px。 未设置top属性值时，优先通过bottom和height属性值来计算原生子窗体的top位置。|
|top|String|0px|The vertical downward offset of the native child form. It supports percentage and pixel value. The default value is 0px. When the top attribute value is not set, the bottom and height attribute values are first used to calculate the top position of the native child form. |
|bottom|String||原生子窗体垂直向上偏移量,支持百分比、像素值，默认值无值（根据top和height属性值来自动计算）。 当同时设置了top和height值时，忽略此属性值； 当未设置height值时，可通过top和bottom属性值来确定原生子窗体的高度。|
|bottom|String||The vertical upward offset of the native child form supports percentages and pixel values. The default value has no value (automatically calculated based on the top and height attribute values). When the top and height values are set at the same time, this attribute value is ignored; when the height value is not set, the height of the native child form can be determined by the top and bottom attribute values. |
|left|String|0px|原生子窗体水平向左的偏移量，支持百分比、像素值，默认值为0px。 未设置left属性值时，优先通过right和width属性值来计算原生子窗体的left位置。|
|left|String|0px|The horizontal leftward offset of the native child form. It supports percentage and pixel value. The default value is 0px. When the left attribute value is not set, the left position of the native child form is calculated by the right and width attribute values first. |
|right|String||原生子窗体水平向右的偏移量，支持百分比、像素值，默认无值（根据left和width属性值来自动计算）。 当设置了left和width值时，忽略此属性值； 当未设置width值时，可通过left和bottom属性值来确定原生子窗体的宽度。|
|right|String||The horizontal offset of the native child form to the right, supports percentages, pixel values, and no value by default (automatically calculated based on the left and width attribute values). When the left and width values are set, this property value is ignored; when the width value is not set, the width of the native child form can be determined by the left and bottom property values. |
|margin|String||原生子窗体的边距，用于定位原生子窗体的位置，支持auto，auto表示居中。若设置了left、right、top、bottom则对应的边距值失效。|
|margin|String||The margin of the native child form is used to locate the position of the native child form. It supports auto, which means centering. If left, right, top, bottom are set, the corresponding margin value is invalid.|
|zindex|Number||原生子窗体的窗口的堆叠顺序值，拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show方法则在前面。|
|zindex|Number||The stacking order value of the windows of the native child form. A window with a higher stacking order will always be in front of a window with a lower stacking order, and a window with the same stacking order will be in front after the show method is called.|
|background|String|#FFFFFF|窗口的背景颜色,Android平台4.0以上系统才支持“transparent”背景透明样式。比如subnvue为圆角时需要设置为transparent才能看到正确的效果|
|background|String|#FFFFFF|For the background color of the window, the "transparent" background transparent style is only supported by Android platform 4.0 and above. For example, when subnvue is rounded, it needs to be set to transparent to see the correct effect.|

**代码示例**
**Code example**

```javascript
{
	"pages": [{
    //首页
    //Home page
		"path": "pages/index/index",
		"style": {
			"app-plus": {
        //禁用原生导航栏
        //Disable native navigation
				"titleNView": false ,
        //侧滑菜单
        //Lateral spreads menu
				"subNVues":[{
          //subNVue 的 id，可通过 uni.getSubNVueById('drawer') 获取
          //The ID of the subNVUE can be obtained via uni.getSubNVUEBYID ('drawer')
					"id": "drawer",
          // nvue 路径
          // Nvue path
					"path": "pages/index/drawer.nvue",
          //webview style 子集，文档可暂时开放出来位置，大小相关配置
          //WebView Style subsets, documents can be temporarily opened out of location, size - dependent configuration
					"style": {
            //除 popup 外，其他值域参考 5+ webview position 文档
            //Other than POPUP, refer to the 5+ WebView Position document for value fields
						"position": "popup",
						"width": "50%"
					}

				}, {
          //弹出层
          //Pop-up layer
					"id": "popup",
					"path": "pages/index/popup",
					"style": {
						"position": "popup",
						"margin":"auto",
						"width": "150px",
						"height": "150px"
					}

				}, {
          //自定义头
          //The custom head
					"id": "nav",
					"path": "pages/index/nav",
					"style": {
						"position": "dock",
						"height": "44px"
					}

				}]
			}
		}
	}]
}
```


#### 下拉刷新@app-pullToRefresh
#### Pull down to refresh@app-pullToRefresh
在 App 平台下可以自定义部分下拉刷新的配置 `page->app-plus->pullToRefresh`。
Under the App platform, you can customize the partial pull-down refresh configuration `page->app-plus->pullToRefresh`.

|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|support|Boolean|false|是否开启窗口的下拉刷新功能|
|support|Boolean|false|Whether to enable the pull-down refresh function of the window|
|color|String|#2BD009|颜色值格式为"#RRGGBB"，仅"circle"样式下拉刷新支持此属性。|
|color|String|#2BD009|The color value format is "#RRGGBB". Only the "circle" style pull-down refresh supports this attribute.|
|style|String|Android 平台为 circle；iOS 平台为 default。|可取值："default"——经典下拉刷新样式（下拉拖动时页面内容跟随）；"circle"——圆圈样式下拉刷新控件样式（下拉拖动时仅刷新控件跟随）。|
|style|String|The Android platform is circle; the iOS platform is default. | Possible values: "default"-classic pull-down refresh style (the page content follows when the pull-down is dragged); "circle"-circle style pull-down refresh control style (only the refresh control follows when the pull-down drags).|
|height|String||窗口的下拉刷新控件进入刷新状态的拉拽高度。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|
|height|String||The pull-down height of the window's pull-down refresh control to enter the refresh state. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx.|
|range|String||窗口可下拉拖拽的范围。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|
|range|String||The window can be dragged down and dropped. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx.|
|offset|String|0px|下拉刷新控件的起始位置。仅对"circle"样式下拉刷新控件有效，用于定义刷新控件下拉时的起始位置。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。如使用了非原生title且需要原生下拉刷新，一般都使用circle方式并将offset调至自定义title的高度|
|offset|String|0px|Pull down to refresh the starting position of the control. It is only valid for the "circle" style pull-down refresh control, and is used to define the starting position when the refresh control pulls down. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. If you use a non-native title and need to pull down to refresh, generally use the circle method and adjust the offset to the height of the custom title|
|contentdown|Object||目前支持一个属性：caption——在下拉可刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。|
|contentdown|Object||Currently supports one attribute: caption-pull down to refresh the title content displayed on the control when the pull-down can be refreshed. Only valid for "default" style pull-down refresh control.|
|contentover|Object||目前支持一个属性：caption——在释放可刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。|
|contentover|Object||Currently supports one attribute: caption-pull down to refresh the title content displayed on the control when the refreshable state is released. Only valid for "default" style pull-down refresh control.|
|contentrefresh|Object||目前支持一个属性：caption——在正在刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。|
|contentrefresh|Object||Currently supports one attribute: caption-pull down to refresh the title content displayed on the control when the state is being refreshed. Only valid for "default" style pull-down refresh control.|

**下拉刷新使用注意**
**Pull down to refresh use note**

- `enablePullDownRefresh` 与 `pullToRefresh->support` 同时设置时，后者优先级较高。
- `enablePullDownRefresh`And `pullToRefresh->support`setting at the same time, which is a higher priority.
- 如果期望在 App 上开启下拉刷新的话，请配置页面的 `enablePullDownRefresh` 属性为 true。
- When the native pull-down refresh is turned on, the full-screen high scroll-view should not be used in the page. When the content is dragged down, the pull-down refresh will be triggered first instead of the scroll-view scroll
- 若仅期望在 App 上开启下拉刷新，则不要配置页面的 `enablePullDownRefresh` 属性，而是配置 `pullToRefresh->support` 为 true。
- 开启原生下拉刷新时，页面里不应该使用全屏高的scroll-view，向下拖动内容时，会优先触发下拉刷新而不是scroll-view滚动
- 原生下拉刷新的起始位置在原生导航栏的下方，如果取消原生导航栏，使用自定义导航栏，原生下拉刷新的位置会在屏幕顶部。如果希望在自定义导航栏下方拉动，只能使用circle方式的下拉刷新，并设置offset参数，将circle圈的起始位置调整到自定义导航栏下方。hello uni-app的扩展组件中有示例。
- The starting position of the native pull-down refresh is below the native navigation bar. If you cancel the native navigation bar and use a custom navigation bar, the position of the native pull-down refresh will be at the top of the screen. If you want to pull below the custom navigation bar, you can only use the circle method to pull down to refresh, and set the offset parameter to adjust the starting position of the circle circle to the bottom of the custom navigation bar. There are examples in the extension component of hello uni-app.
- 如果想在app端实现更多复杂的下拉刷新，比如美团、京东App那种拉下一个特殊图形，可以使用nvue的`<refresh>`组件。HBuilderX 2.0.3+起，新建项目选择新闻模板可以体验
- If you want to achieve more complex pull-down refresh on the app side, such as the Meituan and Jingdong App, you can use nvue'sComponents. Starting from HBuilderX 2.0.3+, you can experience new projects by choosing news templates
- 如果想在vue页面通过web前端技术实现下拉刷新，插件市场有例子，但前端下拉刷新的性能不如原生，复杂长列表会很卡
- If you want to implement pull-down refresh on the vue page through web front-end technology, there are examples in the plug-in market, but the performance of the front-end pull-down refresh is not as good as the original one, and the complex long list will be very stuck
- iOS上，default模式的下拉刷新和bounce回弹是绑定的，如果设置了bounce:none，会导致无法使用default下拉刷新
- On iOS, the default mode pull-down refresh and bounce rebound are bound. If bounce:none is set, the default pull-down refresh cannot be used.

**代码示例**
**Code example**
```javascript
{
    "pages": [
        {
            //首页
            //Home page
            "path": "pages/index/index",
            "style": {
                "app-plus": {
                    "pullToRefresh": {
                        "support": true,
                        "color": "#ff3333",
                        "style": "default",
                        "contentdown": {
                            // 下拉可刷新自定义文本
                            // Drop down to refresh the custom text
                            "caption": "下拉可刷新自定义文本"
                        },
                        "contentover": {
                            // 释放可刷新自定义文本
                            // Releases refreshable custom text
                            "caption": "Releases refreshable custom text"
                        },
                        "contentrefresh": {
                            "caption": "正在刷新自定义文本"
                        }
                    }
                }
            }
        }
    ]
}
```

### h5
配置编译到 H5 平台时的特定样式

|属性|类型|描述|
|:-|:-|:-|
|titleNView|Object|导航栏|
|pullToRefresh|Object|下拉刷新|

#### 导航栏@h5-titleNView
#### Navigation Bar@h5-titleNView
|属性|类型|默认值|描述|最低版本|
|Attributes|Types of|Defaults|description|最低版本|
|:-|:-|:-|:-|:-|
|backgroundColor|String|#F7F7F7|背景颜色，颜色值格式为"#RRGGBB"。||
|backgroundColor|String|#F7F7F7|The background color, the color value format is "#RRGGBB".||
|buttons|Array||自定义按钮，参考 [buttons](collocation/pages?id=h5-titlenview-buttons)||
|buttons|Array||Custom buttons，参考 [buttons](collocation/pages?id=h5-titlenview-buttons)||
|titleColor|String|#000000|标题文字颜色||
|titleColor|String|#000000|Title text color||
|titleText|String||标题文字内容||
|titleText|String||Title text content||
|titleSize|String||标题文字字体大小||
|titleSize|String||Title text font size||
|type|String|default|导航栏样式。"default"-默认样式；"transparent"-透明渐变。||
|type|String|default|Navigation bar style. "default"-default style; "transparent"-transparent gradient.||
|searchInput|Object||导航栏上的搜索框样式，详见：[searchInput](/collocation/pages?id=h5-searchInput)|1.6.5|
|searchInput|Object||The style of the search box on the navigation bar，详见：[searchInput](/collocation/pages?id=h5-searchInput)|1.6.5|

##### 自定义按钮@h5-titleNView-buttons
##### Custom button@h5-titleNView-buttons
|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|type|String|none|按钮样式，可取值见：[buttons 样式](collocation/pages?id=h5-titlenview-buttons-type)|
|type|String|none|Button style，可取值见：[buttons 样式](collocation/pages?id=h5-titlenview-buttons-type)|
|color|String|默认与标题文字颜色一致|按钮上文字颜色|
|color|String|The default color is the same as the title text|Text color on button|
|background|String|默认值为灰色半透明|按钮的背景颜色，仅在标题栏type=transparent时生效|
|background|String|The default value is gray translucent|The background color of the button, only takes effect when the title bar type=transparent |
|badgeText|String||按钮上显示的角标文本，最多显示3个字符，超过则显示为...|
|badgeText|String||The subscript text displayed on the button, up to 3 characters, will be displayed as... |
|colorPressed（暂不支持）|String|默认值为 color 属性值自动调整透明度为 0.3|按下状态按钮文字颜色|
|colorPressed (not currently supported)|String|The default value is the color attribute value and the transparency is automatically adjusted to 0.3 | Press state button text color|
|float|String|right|按钮在标题栏上的显示位置，可取值"left"、"right"|
|float|String|right|The display position of the button on the title bar, the values can be "left", "right"|
|fontWeight|String|normal|按钮上文字的粗细。可取值"normal"-标准字体、"bold"-加粗字体。|
|fontWeight|String|normal|The thickness of the text on the button. Possible values are "normal"-standard font, "bold"-bold font. |
|fontSize|String||按钮上文字大小|
|fontSize|String||The size of the text on the button|
|fontSrc|String||按钮上文字使用的字体文件路径。|
|fontSrc|String||The font file path used for the text on the button.|
|select|String|false|是否显示选择指示图标（向下箭头）|
|select|String|false|Whether to display the selection indicator icon (down arrow) |
|text|String||按钮上显示的文字。使用字体图标时 unicode 字符表示必须 '\u' 开头，如 "\ue123"（注意不能写成"\e123"）。|
|text|String||The text displayed on the button. When using font icons, unicode characters must start with'\u', such as "\ue123" (note that it cannot be written as "\e123").|
|width|String|44px|按钮的宽度，可取值： "*px" - 逻辑像素值，如"10px"表示10逻辑像素值，不支持rpx，按钮的内容居中显示； "auto" - 自定计算宽度，根据内容自动调整按钮宽度|
|width|String|44px|The width of the button, possible values: "*px"-logical pixel value, such as "10px" means 10 logical pixel value, rpx is not supported, the content of the button is displayed in the center; "auto"-self-calculated width, automatically adjusted according to the content Button width |

##### 按钮样式@h5-titleNView-buttons-type
##### Button style@h5-titleNView-buttons-type

使用 type 值设置按钮的样式时，会忽略 fontSrc 和 text 属性。
When using the type value to style the button, the fontSrc and text attributes are ignored.

|值|说明|
|value|Description|
|:-|:-|
|forward|前进按钮|
|forward|Forward button|
|back|后退按钮|
|back|Back button|
|share|分享按钮|
|share|Share button|
|favorite|收藏按钮|
|favorite|Favorite button|
|home|主页按钮|
|home|Home button|
|menu|菜单按钮|
|menu|Menu button|
|close|关闭按钮|
|close|Close button|
|none|无样式，需通过 text 属性设置按钮上显示的内容、通过 fontSrc 属性设置使用的字体库。|
|none|No style, you need to set the content displayed on the button through the text property, and set the font library used through the fontSrc property.|

#### 下拉刷新@h5-pullToRefresh
#### Pull down to refresh@h5-pullToRefresh
h5 平台下拉刷新动画，只有 circle 类型。
The h5 platform pulls down to refresh the animation, only the circle type.

|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|color|String|#2BD009|颜色值格式为"#RRGGBB"|
|color|String|#2BD009|The color value format is "#RRGGBB"|
|offset|String|0px|下拉刷新控件的起始位置。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|
|offset|String|0px|Pull down to refresh the starting position of the control. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx.|

##### 搜索框样式@h5-searchInput
##### Search box style@h5-searchInput

|属性|类型|默认值|描述|
|Attributes|Types of|Defaults|description|
|:-|:-|:-|:-|
|autoFocus|Boolean|false|是否自动获取焦点|
|autoFocus|Boolean|false|Whether to automatically get focus|
|align|String|center|非输入状态下文本的对齐方式。可取值： "left" - 居左对齐； "right" - 居右对齐； "center" - 居中对齐。|
|align|String|center|The alignment of the text in the non-input state. Possible values: "left"-align to the left; "right"-align to the right; "center"-align to the center.|
|backgroundColor|String|rgba(255,255,255,0.5)|背景颜色|
|backgroundColor|String|rgba(255,255,255,0.5)|background color|
|borderRadius|String|0px|输入框的圆角半径，取值格式为"XXpx"，其中XX为像素值（逻辑像素），不支持rpx。|
|borderRadius|String|0px|The fillet radius of the input box, the value format is "XXpx", where XX is the pixel value (logical pixel), rpx is not supported.|
|placeholder|String||提示文本|
|placeholder|String||Prompt text|
|placeholderColor|String|#CCCCCC|提示文本颜色|
|placeholderColor|String|#CCCCCC|Prompt text color|
|disabled|Boolean|false|是否可输入|
|disabled|Boolean|false|Can input|

**注意事项：**
**Precautions:**

- 如果 `h5` 节点没有配置，默认会使用 `app-plus` 下的配置。
- If the `h5`node is not configured, it will use the default `app-plus`configuration of.
- 配置了 `h5` 节点，则会覆盖 `app-plus` 下的配置。
- Configured `h5`nodes will override the `app-plus`configuration of.

#### navigationBarShadow

|属性|类型|描述|
|:-|:-|:-|
|colorType|String|阴影的颜色，支持：grey、blue、green、orange、red、yellow|

**注意事项**

- `titleImage`仅支持https地址，设置了`titleImage`会替换页面文字标题
- `backgroundImageUrl`支持网络地址和本地地址，尽量使用绝对地址
- 部分配置可能会只在真机运行的时候生效，支付宝未来应该会改善

## FAQ
- Q：如何取消原生导航栏？或自定义导航
- A：参考[导航栏开发指南](http://ask.dcloud.net.cn/article/34921)

# easycom

> `HBuilderX 2.5.5`起支持`easycom`组件模式。
> `HBuilderX 2.5.5`Starting to support `easycom`component mode.

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。
Traditional vue components need to be installed, referenced, and registered, and the components can be used after three steps. `easycom`Reduce it to one step. As long as the components are installed in the components directory of the project and conform to the `components/component name/component name.vue`directory structure. You can use it directly on the page without quoting or registering. as follows:
只要组件安装在项目的components目录下，并符合`components/组件名称/组件名称.vue`目录结构。就可以不用引用、注册，直接在页面中使用。
如下：
```html
<template>
	<view class="container">
		<uni-list>
			<uni-list-item title="第一行"></uni-list-item>
      <uni-list-item title="The first line"></uni-list-item>
			<uni-list-item title="第二行"></uni-list-item>
      <uni-list-item title="The second line"></uni-list-item>
		</uni-list>
	</view>
</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
  // There is no need to import, nor to register uni-list components with Components. Template can be used directly
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
```

不管components目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
No matter how many components are installed in the components directory, `easycom`unused components will be automatically removed after packaging, which is particularly friendly to the use of component libraries.

组件库批量安装，随意使用，自动按需打包。以官方的`uni-ui`为例，在HBuilderX新建项目界面选择`uni-ui`项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。
The component library is installed in batches, used at will, and automatically packaged on demand. Take the official `uni-ui`example, to select a `uni-ui`project template in the HBuilderX new project interface , just hit u in the page to pull out a large number of component code blocks, select directly, and you can use it. Significantly improve development efficiency and lower the threshold for use.

在[uni-app插件市场](https://ext.dcloud.net.cn/)下载符合`components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。
Download components that conform to the directory structure in the `components/ component name/component name.vue` use them directly.

`easycom`是自动开启的，不需要手动开启，有需求时可以在`pages.json`的`easycom`节点进行个性化设置，如关闭自动扫描，或自定义扫描匹配组件的策略。设置参数如下：
`easycom`It is automatically turned on and does not need to be turned on manually. You can perform personalized settings at `pages.json`the `easycom`node when you need it , such as turning off automatic scanning, or customizing the strategy of scanning matching components. The setting parameters are as follows:

|属性			|类型		|默认值	|描述																																											|
|Attributes			|Types of		|Defaults	|description																																											|
|:-				|:-			|:-			|:-																																												|
|autoscan	|Boolean|true		|是否开启自动扫描，开启后将会自动扫描符合`components/组件名称/组件名称.vue`目录结构的组件	|
|autoscan	|Boolean|true		|Whether to enable automatic scanning, `components/组件名称/组件名称.vue`the components that conform to the directory structure will be automatically scanned after opening	|
|custom		|Object	|-			|以正则方式自定义组件匹配规则。如果`autoscan`不能满足需求，可以使用`custom`自定义匹配规则	|
|custom		|Object	|-			|Customize component matching rules in a regular manner. If you `autoscan`can’t meet your needs, you can use `custom`custom matching rules	|

**自定义easycom配置的示例**
**Example of custom easycom configuration**

如果需要匹配node_modules内的vue文件，需要使用`packageName/path/to/vue-file-$1.vue`形式的匹配规则，其中`packageName`为安装的包名，`/path/to/vue-file-$1.vue`为vue文件在包内的路径。
If you need to match the vue file in node_modules, you need to use `packageName/path/to/vue-file-$1.vue`the matching rule of the form, where `packageName`is the installed package name and `/path/to/vue-file-$1.vue`the path of the vue file in the package.

```
"easycom": {
  "autoscan": true,
  "custom": {
    // 匹配components目录内的vue文件
    // Matches the VUE file in the Components directory
    "^uni-(.*)": "@/components/uni-$1.vue",
    // 匹配node_modules内的vue文件
    // Matches the VUE file in node_modules
    "^vue-file-(.*)": "packageName/path/to/vue-file-$1.vue"
  }
}
```

**说明**
**Description**
- `easycom`方式引入的组件无需在页面内`import`，也不需要在`components`内声明，即可在任意页面使用
- `easycom`Components of the way without having to introduce within the page `import`, do not need to `components`declare within, you can use any page
- `easycom`方式引入组件不是全局引入，而是局部引入。例如在H5端只有加载相应页面才会加载使用的组件
- `easycom`The way to introduce components is not global introduction, but local introduction. For example, on the H5 side, the components used will only be loaded when the corresponding page is loaded
- 在组件名完全一致的情况下，`easycom`引入的优先级低于手动引入（区分连字符形式与驼峰形式）
- In the case that the component names are exactly the same, `easycom`the priority of introduction is lower than manual introduction (distinguish between hyphenated form and camel case form)
- 考虑到编译速度，直接在`pages.json`内修改`easycom`不会触发重新编译，需要改动页面内容触发。
- Considering the compilation speed, directly in the `pages.json`modification within `easycom`not trigger recompilation, trigger the need to change the page content.
- `easycom`只处理vue组件。不处理后缀为.nvue的组件。但vue组件也可以全端运行，包括app-nvue。可以参考uni ui，使用vue后缀，同时兼容nvue页面。
- `easycom`Only vue components are processed, Components with the suffix .nvue are not processed. But vue components can also be run at all ends, including app-nvue. You can refer to uni ui, use the vue suffix, and be compatible with nvue pages.
- `nvue`页面里引用`.vue`后缀的组件，会按照nvue方式使用原生渲染，其中不支持的css会被忽略掉。这种情况同样支持`easycom`
- `nvue``.vue`The components that refer to the suffix on the page will use native rendering in the nvue way, and the unsupported css will be ignored. This situation also supports`easycom`

# tabBar

如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。
If the application is a multi-tab application, you can specify the first-level navigation bar through the tabBar configuration item, and the corresponding page displayed when the tab is switched.

在 pages.json 中提供 tabBar 配置，不仅仅是为了方便快速开发导航，更重要的是在App提升性能。在这两个平台，底层原生引擎在启动时无需等待js引擎初始化，即可直接读取 pages.json 中配置的 tabBar 信息，渲染原生tab。
Providing tabBar configuration in pages.json is not only to facilitate rapid development and navigation, but more importantly, to improve performance on App terminals. On these two platforms, the underlying native engine can directly read the tabBar information configured in pages.json and render the native tab without waiting for the js engine to initialize at startup.

**Tips**

- 当设置 position 为 top 时，将不会显示 icon
- When the position is set to top, the icon will not be displayed
- tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。
- The list in the tabBar is an array, and only at least 2 tabs and at most 5 tabs can be configured. The tabs are sorted in the order of the array.
- tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）
- The tabbar switch may not render in time when it is loaded for the first time. You can pop up a waiting snowflake in the onLoad life cycle of each tabbar page (hello uni-app uses this method)
- tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。

**属性说明：**
**Property description:**

|属性|类型|必填|默认值|描述|平台差异说明|
|Attributes|Types of|Required|Defaults|description|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|color|HexColor|是||tab 上的文字默认颜色||
|color|HexColor|Yes||Default color of text on tab||
|selectedColor|HexColor|是||tab 上的文字选中时的颜色||
|selectedColor|HexColor|Yes||The color of the text on the tab when selected||
|backgroundColor|HexColor|是||tab 的背景色||
|backgroundColor|HexColor|Yes||tab background color||
|borderStyle|String|否|black|tabbar 上边框的颜色，可选值 black/white|App 2.3.4+ 支持其他颜色值、H5 3.0.0+|
|borderStyle|String|no|black|The color of the upper border of the tabbar, optional black/white|App 2.3.4+ 支持其他颜色值、H5 3.0.0+|
|blurEffect|String|否|none|iOS 高斯模糊效果，可选值 dark/extralight/light/none（参考:[使用说明](https://ask.dcloud.net.cn/article/36617)）|App 2.4.0+ 支持、H5 3.0.0+（只有最新版浏览器才支持）|
|blurEffect|String|no|none|iOS Gaussian blur effect, optional value dark/extralight/light/none|App 2.4.0+ 支持、H5 3.0.0+（只有最新版浏览器才支持）|
|list|Array|是||tab 的列表，详见 list 属性说明，最少2个、最多5个 tab||
|fontSize|String|否|10px|文字默认大小|App 2.3.4+、H5 3.0.0+|
|iconWidth|String|否|24px|图标默认宽度（高度等比例缩放）|App 2.3.4+、H5 3.0.0+|
|spacing|String|否|3px|图标和文字的间距|App 2.3.4+、H5 3.0.0+|
|height|String|否|50px|tabBar 默认高度|App 2.3.4+、H5 3.0.0+|
|midButton|Object|否||中间按钮 仅在 list 项为偶数时有效|App 2.3.4+、H5 3.0.0+|

其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：
Among them, list receives an array, each item in the array is an object, and its attribute values are as follows:

|属性|类型|必填|说明|
|Attributes|Types of|Required|Description|
|:-|:-|:-|:-|
|pagePath|String|是|页面路径，必须在 pages 中先定义|
|pagePath|String|Yes|Page path, must be defined in pages|
|text|String|是|tab 上按钮文字，在 App 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标|
|text|String|Yes|The button text on the tab is not required in App and H5 platform. For example, you can put a + icon with no text in the middle|
|iconPath|String|否|图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标|
|iconPath|String|no|The image path, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid. Network pictures and font icons are not supported|
|selectedIconPath|String|否|选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效|
|selectedIconPath|String|no|The image path when selected, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid|

**midButton 属性说明**
**midButton property description**

|属性|类型|必填|默认值|描述|
|Attributes|Types of|Required|Defaults|description|
|:-|:-|:-|:-|:-|
|width|String|否|80px|中间按钮的宽度，tabBar 其它项为减去此宽度后平分，默认值为与其它项平分宽度|
|width|String|no|80px|The width of the middle button. Other tabBar items are divided equally after subtracting this width. The default value is divided equally with other items.|
|height|String|否|50px|中间按钮的高度，可以大于 tabBar 高度，达到中间凸起的效果|
|height|String|no|50px|The height of the middle button can be greater than the height of the tabBar to achieve the effect of convex middle|
|text|String|否||中间按钮的文字|
|text|String|no||Middle button text|
|iconPath|String|否||中间按钮的图片路径|
|iconPath|String|no||The image path of the middle button|
|iconWidth|String|否|24px|图片宽度（高度等比例缩放）|
|iconWidth|String|no|24px|Picture width (height proportional zoom)|
|backgroundImage|String|否||中间按钮的背景图片路径|
|backgroundImage|String|no||The background image path of the middle button|

midButton没有pagePath，需监听点击事件，自行处理点击后的行为逻辑。监听点击事件为调用API：uni.onTabBarMidButtonTap，详见[https://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap](https://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap)
midButton does not have a pagePath, it needs to listen to the click event and handle the behavior logic after the click. To monitor the click event is to call the API: uni.onTabBarMidButtonTap

#### **tabbar常见问题** @tips-tabbar
#### **Tabbar FAQ**@tips-tabbar
- tabbar 的 js api 见[接口-界面-tabbar](https://uniapp.dcloud.io/api/ui/tabbar)，可实现动态显示隐藏（如弹出层无法覆盖tabbar）、内容修改（如国际化）、item加角标等功能。hello uni-app中也有示例。
- For the js api of the tabbar, see Interface-Interface-tabbar, which can realize functions such as dynamic display and hiding (such as the pop-up layer cannot cover the tabbar), content modification (such as internationalization), and item addition. There are also examples in hello uni-app.
- tabbar 的 item 点击事件见[页面生命周期的onTabItemTap](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)。
- For the item click event of the tabbar, see onTabItemTap of the page life cycle
- 代码跳转到 tabbar 页面，api只能使用[uni.switchTab](https://uniapp.dcloud.io/api/router?id=switchtab)，不能使用uni.navigateTo、uni.redirectTo；使用navigator组件跳转时必须设置[open-type="switchTab"](https://uniapp.dcloud.io/component/navigator)
- The code jumps to the tabbar page. The api can only use uni.switchTab, not uni.navigateTo, uni.redirectTo; when using the navigator component to jump, open-type="switchTab"must be set
- tabbar 的默认高度，在不同平台不一样。App端的默认高度在HBuilderX 2.3.4起从56px调整为50px，与H5端统一。开发者也可以自行设定高度，调回56px。[详见](https://uniapp.dcloud.io/frame?id=%e5%9b%ba%e5%ae%9a%e5%80%bc)
- The default height of the tabbar is different on different platforms. The default height of the App has been adjusted from 56px to 50px since HBuilderX 2.3.4, which is unified with the H5 end. Developers can also set the height by themselves and adjust it back to 56px.
- tabbar 在H5端是div模拟的，属于前端屏幕窗口的一部分，如果要使用bottom居底定位方式，应该使用css变量`--window-bottom`，比如悬浮在tabbar上方10px的按钮，样式如下`bottom: calc(var(--window-bottom) + 10px)`
- The tabbar is div-simulated on the H5 end, which is part of the front-end screen window. If you want to use the bottom positioning method, you should use css variables `--window-bottom`, such as a button floating 10px above the tabbar, the style is as follows`bottom: calc(var(--window-bottom) + 10px)`
- 中间带+号的tabbar模板例子，[参考](https://ext.dcloud.net.cn/plugin?id=98)。可跨端，但+号不凸起。如需中间凸起，配置tabbar的midButton。
- An example of a tabbar template with a + sign in the middle . Can cross the end, but the + sign is not raised. If you need a middle bump, configure the midButton of the tabbar.
- 如果是需要先登录、后进入tab页面，不需要把登录页设为首页，首页仍然是tabbar页，可参考HBuilderX新建uni-app项目时的登录模板
- If you need to log in first and then enter the tab page, you don’t need to set the login page as the home page. The home page is still the tabbar page. You can refer to the login template when creating a uni-app project in HBuilderX.
- 前端弹出遮罩层挡不住tabbar的问题，跨端处理方式时动态隐藏tabbar。App端可以使用plus.nativeObj.view或subNVue做弹出和遮罩，可参考这个[底部原生图标分享菜单例子](https://ext.dcloud.net.cn/plugin?id=69)
- PC宽屏上，当页面存在topWindow或leftWindow或rightWindow等多窗体结构时，tabBar自动隐藏（HBuilderX 2.9.9），请使用 [custom-tab-bar组件](https://uniapp.dcloud.io/component/custom-tab-bar) 配置 tabBar 的位置。
- On PC widescreen, when the page has multiple window structures such as topWindow, leftWindow, or rightWindow, the tabBar is automatically hidden (HBuilderX 2.9.9). 

**代码示例**
**Code example**
```json
"tabBar": {
	"color": "#7A7E83",
	"selectedColor": "#3cc51f",
	"borderStyle": "black",
	"backgroundColor": "#ffffff",
	"list": [{
		"pagePath": "pages/component/index",
		"iconPath": "static/image/icon_component.png",
		"selectedIconPath": "static/image/icon_component_HL.png",
		"text": "组件"
	}, {
		"pagePath": "pages/API/index",
		"iconPath": "static/image/icon_API.png",
		"selectedIconPath": "static/image/icon_API_HL.png",
		"text": "接口"
	}]
}
```

#### 自定义tabbar @custom-tab-bar
#### Custom tabbar@custom-tab-bar

原生tabBar是相对固定的配置方式，可能无法满足所有场景，这就涉及到自定义tabBar。
The native tabBar is a relatively fixed configuration method, which may not meet all scenarios, which involves custom tabBar.

但注意除了H5端，自定义tabBar的性能体验会低于原生tabBar。App非必要不要自定义。
But note that except for the H5 end, the performance experience of the custom tabBar will be lower than that of the native tabBar. Do not customize apps unless necessary.

- H5端的自定义tabBar组件：H5端不存在原生tabBar性能更高的概念，并且宽屏下常见的tabBar在顶部而不是底部，此时可以使用 [custom-tab-bar组件](https://uniapp.dcloud.io/component/custom-tab-bar) 来自定义
- Custom tabBar component on H5 side: There is no concept of higher performance of native tabBar on H5 side, and the common tabBar in widescreen is at the top instead of the bottom. At this time, you can use custom-tab-bar component to
- 普通自定义tabBar：使用view自行绘制tabBar。如果页面是多页方式，切换tabBar将无法保持底部tabBar一直显示。所以这种情况建议使用单页方式。单页方式，如果是复杂页面，应用性能会下降明显，需减少页面复杂度。如果是App端，nvue单页的性能会显著高于vue页面
- 原生的tabbar有且只有一个且在首页。二级页如需的tab，需自行编写view来实现。一般二级页面更适合的导航是 [segement组件](https://ext.dcloud.net.cn/plugin?id=54)
- There is one and only one native tabbar and it is on the homepage. If you need a tab for the secondary page, you need to write a view to achieve it. Generally, the more suitable navigation for secondary pages is the segment component


# condition
启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：用户点击所打开的页面。

**属性说明：**

|属性|类型|是否必填|描述|
|:-|:-|:-|:-|
|current|Number|是|当前激活的模式，list节点的索引值|
|list|Array|是|启动模式列表|

**list说明：**

|属性|类型|是否必填|描述|
|:-|:-|:-|:-|
|name|String|是|启动模式名称|
|path|String|是|启动页面路径|
|query|String|否|启动参数，可在页面的 [onLoad](/collocation/frame/lifecycle?id=页面生命周期) 函数里获得|

**注意：** 在 App 里真机运行可直接打开配置的页面，微信开发者工具里需要手动改变编译模式，如下图：

<div style="text-align:center;">
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a4ceac70-4f2e-11eb-b680-7980c8a877b8.png" />
</div>

**代码示例：**

```javascript
"condition": { //模式配置，仅开发期间生效
	"current": 0, //当前激活的模式（list 的索引项）
	"list": [{
			"name": "swiper", //模式名称
			"path": "pages/component/swiper/swiper", //启动页面，必选
			"query": "interval=4000&autoplay=false" //启动参数，在页面的onLoad函数里面得到。
		},
		{
			"name": "test",
			"path": "pages/component/switch/switch"
		}
	]
}
```

# subPackages

所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而分包则是根据pages.json的配置进行划分。

App默认为整包。其目的不用于下载提速，而用于首页是vue时的启动提速。App下开启分包，除在pages.json中配置分包规则外，还需要在manifest中设置在app端开启分包设置，详见：[https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)

subPackages 节点接收一个数组，数组每一项都是应用的子包，其属性值如下：

|属性|类型|是否必填|描述|
|:-|:-|:-|:-|
|root|String|是|子包的根目录|
|pages|Array|是|子包由哪些页面组成，参数同 [pages](/collocation/pages?id=pages)|

**注意：** 

- ```subPackages``` 里的pages的路径是 ``root`` 下的相对路径，不是全路径。
- 分包下支持独立的 ```static``` 目录，用来对静态资源进行分包。
- `uni-app`内支持分包优化，即将静态资源或者js文件放入分包内不占用主包大小。详情请参考：[关于分包优化的说明](/collocation/manifest?id=关于分包优化的说明)
- 针对`vendor.js`过大的情况可以使用运行时压缩代码

**使用方法：**

假设支持分包的 ```uni-app``` 目录结构如下：
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─pages               
│  ├─index
│  │  └─index.vue    
│  └─login
│     └─login.vue    
├─pagesA   
│  ├─static
│  └─list
│     └─list.vue 
├─pagesB    
│  ├─static
│  └─detail
│     └─detail.vue  
├─static             
├─main.js       
├─App.vue          
├─manifest.json  
└─pages.json            
	</code>
</pre>

则需要在 pages.json 中填写

```javascript
{
	"pages": [{
		"path": "pages/index/index",
		"style": { ...}
	}, {
		"path": "pages/login/login",
		"style": { ...}
	}],
	"subPackages": [{
		"root": "pagesA",
		"pages": [{
			"path": "list/list",
			"style": { ...}
		}]
	}, {
		"root": "pagesB",
		"pages": [{
			"path": "detail/detail",
			"style": { ...}
		}]
	}]
}
```