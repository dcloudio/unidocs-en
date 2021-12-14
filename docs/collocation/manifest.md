`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。
The `manifest.json` file is the configuration file of the application, which is used to specify the name, icon, permission and so on of the application. The project file created by HBuilderX is in the root directory, and the project file created by CLI is in the src directory.

### 配置项列表
### List of configuration items

|属性|类型|默认值|描述|最低版本|
|Attribute|Type|Default|Description|Minimum version|
|:-|:-|:-|:-|:-|
|name|String||应用名称||
|name|String||application name||
|appid|String|新建 uni-app 项目时，DCloud 云端分配。用途[详见](https://ask.dcloud.net.cn/article/35907)|应用标识|| 
|appid|String|When creating a new uni-app project, make distribution at DCloud Cloud Service. [See details](https://ask.dcloud.net.cn/article/35907) for usage|Application identification||
|description|String||应用描述||
|description|String||Application description||
|locale|String|auto|设置当前默认语言，具体参考 [locale](/api/ui/locale)||
|locale|String|auto|Set the current default language. Refer to [locale](/api/ui/locale)||
|versionName|String||版本名称，例如：1.0.0。详见下方Tips说明||
|versionName|String||version name, e.g.: 1.0.0. See Tips description below for details||
|versionCode|String||版本号，例如：36||
|versionCode|String||version number, e.g.: 36||
|transformPx|Boolean|true|是否转换项目的px，为true时将px转换为rpx，为false时，px为传统的实际像素||
|transformPx|Boolean|true|Convertto px of the item or not. true indicates converting px to rpx, and false indicates using px as the conventional actual pixel||
|networkTimeout|Object||网络超时时间，[详见](/collocation/manifest?id=networktimeout)||
|networkTimeout|Object||Network timeout, [see details](/collocation/manifest?id=networktimeout)||
|debug|Boolean|false|是否开启 debug 模式，开启后调试信息以 ``info`` 的形式给出，其信息有页面的注册，页面路由，数据更新，事件触发等||
|debug|Boolean|false|Turn on/off the debug mode. The debugging information will be given in the form of `info`, after being turned on. The information includes page registration, page routing, data update, and event triggering, etc.||
|uniStatistics|Object||[是否开启 uni 统计，全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
|uniStatistics|Object||[Turn on/off uni statistics as global configuration](/collocation/manifest?id=uniStatistics)|2.2.3+|
|app-plus|Object||[App 特有配置](/collocation/manifest?id=app-plus)||
|app-plus|Object||[App specific configuration](/collocation/manifest?id=app-plus)||
|h5|Object||[H5 特有配置](/collocation/manifest?id=h5)||
|h5|Object||[H5 specific configuration](/collocation/manifest?id=h5)||
**Tips**

- uni-app 的 `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- uni-app's `appid` is allocated by DCloud Cloud Service and is mainly used for cloud services related to DCloud. Please do not modify it yourself. [See details](https://ask.dcloud.net.cn/article/35907)
- 注意区分 uni-app 的 `appid` 与 iOS 等其它平台分配的 `appid`，以及第三方 SDK 的 `appid`。
- Pay attention to distinguish between `appid` of uni-app and `appid` of other platforms such as iOS, and `appid` of third-party SDK.
- versionName在云打包App和生成wgt应用资源时会使用。如需升级App版本，先修改此处再云打包。导出wgt资源用于离线打包和热更新时也会以此版本为依据。
- versionName will be used when packaging App in Cloud and generating wgt application resources. If you need to upgrade the App version, first modify it here and then package it in Cloud. This version will also be referred when exporting wgt resources for offline packaging and hot updating.

#### networkTimeout

各类网络请求的超时时间，单位均为毫秒。
Timeout required by all kinds of network, in milliseconds.

|属性|类型|必填|默认值|说明|
| Attribute| Type| Required| Defaults| Instruction|
|--|--|--|--|--|
|request|Number|否|60000|uni.request 的超时时间，单位毫秒。|
| request| Number| No| 60000| uni.request timeout, in milliseconds.|
|connectSocket|Number|否|60000|uni.connectSocket 的超时时间，单位毫秒。|
| connectSocket| Number| No| 60000| uni.connectSocket timeout, in milliseconds.|
|uploadFile|Number|否|60000|uni.uploadFile 的超时时间，单位毫秒。|
| uploadFile| Number| No| 60000| uni.uploadFile timeout, in milliseconds.|
|downloadFile|Number|否|60000|uni.downloadFile 的超时时间，单位毫秒。|
| downloadFile| Number| No| 60000| uni.downloadFile timeout, in milliseconds.|

自`HBuilderX 2.5.10`起，上述默认超时时间由6秒改为60秒
From `HBuilderX 2.5.10`, the above default timeout time has been changed from 6 seconds to 60 seconds


### uniStatistics
uni 统计配置项
uni statistics configuration item

|属性|类型|必填|默认值|说明|
| Attribute| Type| Required| Defaults| Instruction|
|--|--|--|--|--|
|enable|Boolean|是|true|是否开启uni统计|
| enable| Boolean| Yes| true| Whether to enable uni statistics?|

### app-plus

|属性|类型|说明|最低版本|
| Attribute| Type| Instruction| Minimum version|
|:-|:-|:-|:-|
|splashscreen|Object|App 启动界面信息，[详见](/collocation/manifest?id=splashscreen)||
| splashscreen| Object| For information about the App launch interface. [See details](/collocation/manifest?id=splashscreen)| |
|screenOrientation|Array|重力感应、横竖屏配置，可取值："portrait-primary"：竖屏正方向；"portrait-secondary"：竖屏反方向；"landscape-primary"：横屏正方向；"landscape-secondary"：横屏反方向。||
| screenOrientation| Array| Gravity sensing, landscape and portrait screen configuration. Options include: "portrait-primary": portrait screen primary direction; "portrait-secondary": the portrait screen secondary direction; "landscape-primary": landscape primary direction; "landscape-secondary": landscape secondary direction.| |
|modules|Object|权限模块，[详见](/collocation/manifest?id=modules)||
| modules| Object| Permission module. [See details](/collocation/manifest?id=modules)| |
|distribute|Object|App 发布信息，[详见](/collocation/manifest?id=distribute)||
| distribute| Object| For information about App release. [See details](/collocation/manifest?id=distribute)| |
|nvueCompiler|String|切换 nvue 编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](http://ask.dcloud.net.cn/article/36074)|2.0.3+|
| nvueCompiler| String| Switch nvue compilation mode, optional value, `weex`: Old compilation mode,`uni-app`: New compilation mode, which defaults to `weex`. [Details about the differences in compilation mode](http://ask.dcloud.net.cn/article/36074)| 2.0.3+|
|nvueStyleCompiler|String|切换 nvue 样式编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](https://ask.dcloud.net.cn/article/38751)|3.1.1+|
| nvueStyleCompiler| String| Switch nvue style compilation mode, optional value, `weex`: Old compilation mode, `uni-app`: New compilation mode, which defaults to `weex`. [Details about the differences in compilation mode](https://ask.dcloud.net.cn/article/38751)| 3.1.1+|
|renderer|String|可不加载基于 webview 的运行框架，减少包体积、提升启动速度。可选值 `native`| App-nvue 2.2.0+|
| renderer| String| Running framework based on webview may not be loaded with reduced package size and improved startup speed. Optional value `native`| App-nvue 2.2.0+|
|compilerVersion|Number|编译器版本，可选值：2、3 默认 2 [详见](https://ask.dcloud.net.cn/article/36599)|HBuilderX alpha 2.4.4+或HBuilderX 2.5.0+|
| compilerVersion| Number| Compiler version, optional values: 2, 3, and the default is 2. [See details](https://ask.dcloud.net.cn/article/36599)| HBuilderX alpha 2.4.4+ or HBuilderX 2.5.0+|
|nvueLaunchMode|Number|Nvue 首页启动模式，在 compilerVersion 值为 3 时生效，可选值：normal、fast 默认 normal（HBuilderX alpha 2.4.4-2.4.9 固定为 fast） [详见](https://ask.dcloud.net.cn/article/36749)|2.5.0+|
| nvueLaunchMode| Number| Nvue home page startup mode, effective when the compilerVersion value is 3, optional values: normal and fast, the default is normal (HBuilderX alpha 2.4.4-2.4.9 is fixed as fast). [See details](https://ask.dcloud.net.cn/article/36749)| 2.5.0+|
|nvue|Object|nvue 页面布局初始配置，[详见](/collocation/manifest?id=nvue)|2.0.3+|
| nvue| Object| Initial configuration of nvue page layout. [See details](/collocation/manifest?id=nvue)| 2.0.3+|
|uniStatistics|Object|[App 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
| uniStatistics| Object| [Whether or not to enable uni statistics on App is configured in the same way as global configuration](/collocation/manifest?id=uniStatistics)| 2.2.3+|

PS：这里只列出了核心部分，更多内容请参考 [完整的 manifest.json](/collocation/manifest?id=完整-manifestjson)。
PS: Only the core parts are listed here. For more details, please refer to [Complete manifest.json](/collocation/manifest?id=%E5%AE%8C%E6%95%B4-manifestjson).

**Tips**

- manifest.json 文件的配置，推荐在 HBuilderX 提供的可视化操作界面完成。
- The configuration of manifest.json file is recommended to be completed in the visual operation interface provided by HBuilderX.
- 部分配置在打包时的操作界面补全，例如：证书等信息。
- Operation interface completion of part of the configuration during packaging, such as: certificate and other information.
- 部分 modules 是默认的，不需要进行配置。
- Some modules are default and do not need to be configured.


#### App Splashscreen@splashscreen

splash（启动封面）是App必然存在的、不可取消的。
The splash screen in App is inevitable and irrevocable.

|属性|类型|默认值|描述|最低版本|
| Attribute| Type| Defaults| Describe| Minimum version|
|:-|:-|:-|:-|:-|
|alwaysShowBeforeRender|Boolean|true|首页白屏时不关闭启动界面|1.6.0|
| alwaysShowBeforeRender| Boolean| true| The splash screen will not close at white screen of home page| 1.6.0|
|autoclose|Boolean|true|是否自动关闭程序启动界面。如果需要手动关闭启动界面，需将 alwaysShowBeforeRender 及 autoclose 均设置为 false。||
| autoclose| Boolean| true| Whether to automatically close the program splash screen. If you need to manually close the splash screen, you need to set both alwaysShowBeforeRender and autoclose as false.| |
|waiting|Boolean|true|是否在程序启动界面显示等待圈或雪花||
| waiting| Boolean| true| Whether to display the waiting circle or snowflake in the program splash screen?| |
|delay|Number|0|启动界面在应用的首页面加载完毕后延迟关闭的时间，autoclose 为 true 时生效。|&nbsp;|
| delay| Number| 0| The delayed closing time after loading the home page of the application in the splash screen, taking effect when autoclose is true.|  |

**注意**
**Notice**
- 如果不配置自己的splash图，App端会默认把App的icon放到splash中
- If you don't configure your own splash image, the App side will put the icon of the App in the splash by default.
- splash只能是标准png，不要用jpg改名为png。也不支持gif等动画
- Splash can only be the standard png, and just changing jpg extension to png is not allowed. Animation such as gif is also not supported.
- 相关改动，云打包生效，真机运行不生效。本地打包需自行在原生工程中配置
- Related changes take effect for cloud packaging, but not for mobile App Playground. Local packaging needs to be configured in the native project in a customized manner.
- App启动图中iOS的MAX等大屏设备的splash图若不配，会导致iOS认为此App没有为MAX优化，App将无法全屏，四周会有黑边
- If the App splash images of large-screen devices such as MAX in iOS doesn't match up, it may cause iOS deeming that this App is not optimized for MAX, and the App full screen will not work, and there will be black edges around it.
- Android的splash支持.9.png，[详见](https://ask.dcloud.net.cn/article/35527)
- Splash on Android supports .9.png. [See details](https://ask.dcloud.net.cn/article/35527)


#### App Modules@modules
模块选择是为了控制App的包体积，不需要的模块可以在打包时剔除。
Module selection is to control the package volume of the App, and unnecessary modules can be removed during packaging.

|名称|描述|
| Name| Describe|
|:-|:-|
|Bluetooth|BLE蓝牙|
| Bluetooth| BLE Bluetooth|
|Contacts|系统通讯录|
| Contacts| System address book|
|Fingerprint|指纹识别|
| Fingerprint| Fingerprint identification|
|iBeacon|iBeacon|
|LivePusher|直播推流|
| LivePusher| Live-pusher|
|Maps|地图|
| Maps| Map|
|Messaging|短彩邮件消息|
| Messaging| SMS message|
|OAuth|登录授权|
| OAuth| Login authorization|
|Payment|支付|
| Payment| Pay|
|Share|社交分享|
| Share| Social sharing|
|Speech|语音识别|
| Speech| Speech identification|
|SQLite|SQLite数据库|
| SQLite| SQLite database|
|VideoPlayer|视频播放|
| VideoPlayer| Video playback|

**注意**
**Notice**
- 仅App云打包生效。本地打包需自行在原生工程中配置。
- Take effect for App cloud packaging only. Local packaging needs to be configured in the native project in a customized manner.

#### App Distribute@distribute

|属性|类型|描述|
| Attribute| Type| Describe|
|:-|:-|:-|
|android|Object|Android 应用配置，详见: [完整 manifest.json](/collocation/manifest?id=完整-manifestjson)|
| android| Object| Android application configuration, see details: [Complete manifest.json](/collocation/manifest?id=%E5%AE%8C%E6%95%B4-manifestjson)|
|ios|Object|iOS 应用配置，详见: [完整 manifest.json](/collocation/manifest?id=完整-manifestjson)|
| ios| Object| IOS application configuration, see details: [Complete manifest.json](/collocation/manifest?id=%E5%AE%8C%E6%95%B4-manifestjson)|
|sdkConfigs|Object|SDK配置，仅打包生效 [详见](/collocation/manifest?id=sdkConfigs)|
| sdkConfigs| Object| SDK configuration, only takes effect when packaged. [See details](/collocation/manifest?id=sdkConfigs)|
|orientation|Array|同 screenOrientation 配置，仅打包生效，已废弃，推荐使用 screenOrientation|
| orientation| Array| Same as screenOrientation configuration, only take effects after packaging. It has been abandoned, and it is recommended to use screenOrientation.|

##### App SdkConfigs@sdkConfigs

三方原生SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（App SDK配置）输入配置，此配置仅**云打包后生效**，本地打包需自行在原生工程中配置。
3rd party native SDK configuration. The use of 3rd party SDK needs to apply to these SDK providers and configure the parameters here. You can enter the configuration in the visual interface of HBuilderX (App SDK configuration). This configuration only takes effect after **cloud packaging**. Local packaging needs to be configured in the native project by itself.

|属性|类型|描述|
| Attribute| Type| Describe|
|:-|:-|:-|
|oauth|Object|授权登录，配置后可调用 [uni.login](/api/plugins/login?id=login) 进行登录操作，目前支持的授权登录平台有：[QQ](http://open.qq.com/)、[微信](https://open.weixin.qq.com/)、[新浪微博](http://open.weibo.com/)。|
| oauth| Object| Authorized login. After configuration, you can call [uni.login](/api/plugins/login?id=login) to log in. Currently supported authorized login platforms are: [QQ](http://open.qq.com/), [WeChat](https://open.weixin.qq.com/), [Sina Weibo](http://open.weibo.com/).|
|share|Object|分享，配置后可调用 [uni.share](/api/plugins/share?id=share) 进行分享，目前支持QQ、微信、新浪微博等分享， 具体配置 [详见](/api/plugins/share?id=app-端各平台分享配置说明)。|
| share| Object| Sharing. After configuration, you can call [uni.share](/api/plugins/share?id=share) for sharing. Currently, QQ, WeChat, Sina Weibo, etc. are supported for sharing. For specific configuration, [See details](/api/plugins/share?id=app-%E7%AB%AF%E5%90%84%E5%B9%B3%E5%8F%B0%E5%88%86%E4%BA%AB%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E).|
|payment|Object|三方支付配置，配置后可调用 [uni.payment](/api/plugins/payment?id=payment) 进行支付，目前支持微信支付、支付宝支付、苹果内购， 具体配置 [详见](/api/plugins/payment?id=uni-app-app-平台支付流程)。|
| payment| Object| Third-party payment configuration. After configuration, you can call [uni.payment](/api/plugins/payment?id=payment) for payment. Currently, WeChat payment, Alipay, and Apple in-app purchases are supported. For specific configuration, [See details](/api/plugins/payment?id=uni-app-app-%E5%B9%B3%E5%8F%B0%E6%94%AF%E4%BB%98%E6%B5%81%E7%A8%8B).|
|maps|Object|原生地图配置，目前仅支持 [高德地图](http://lbs.amap.com/)，申请方式可参考：[地图插件配置](http://ask.dcloud.net.cn/article/29)。|
| maps| Object| Native map configuration. Currently only [AutoNavi](http://lbs.amap.com/) is supported. For application method, please refer to [Map plug-in configuration](http://ask.dcloud.net.cn/article/29).|

#### optimization@app-vue-optimization

从uni-app 2.7.12+ 开始，App-vue平台也有分包配置，但默认并不开启。
Since uni-app 2.7.12+, the App-vue platform also has subpackage configuration, but it is not turned on by default.

在manifest配置以下节点，可以在App端启动分包。
Configure the following nodes in manifest, and start subpackage on the App side.

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|
| subPackages| Boolean| Whether to enable subcontracting optimization?|

```
"app-plus": {
  "optimization": {
    "subPackages": true
  },
  // 开启分包优化后，必须配置资源释放模式
  // After starting subpackage optimization, the resource release mode must be configured.
  "runmode" : "liberate"
}
```

在manifest中启动分包后，需要在pages.json中配置具体的分包规则，详见：[https://uniapp.dcloud.io/collocation/pages?id=subpackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
After subcontracting is started in manifest, specific subcontracting rules need to be configured in pages.json. For details, please see [https://uniapp.dcloud.io/collocation/pages?id=subpackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages)

在pages.json里配置分包，app是否生效，取决于manifest里是否开启。
Configure subpackage in pages.json. Whether the app is effective depends on whether it is turned on in the manifest.

注意: 
Notice:
* App开启分包后，每个分包单独编译成一个js文件(都包含在app内，不会联网下载)，当App首页是vue时，可减小启动加载文件大小，提升启动速度。
* After the App subpackage is started, each subpackage is independently compiled into a js file (all of which are included in the App and need not to be downloaded online). When the home page of the app is vue, the size of the startup loading file can be reduced and the startup speed can be improved.
* 首页是nvue时，分包不会提升启动速度，nvue本身启动速度就快于vue，也快于开启分包后的首页为vue的应用。如果追求极致启动速度，还是应该使用nvue做首页并在manifest开启fast模式。
* For nvue home page, subpackage will not improve the startup speed, and the startup speed of nvue itself is faster than vue, and also faster than the application with vue home page after subpackage is started. If you pursue the ultimate startup speed, you should still use nvue as the home page and turn on fast mode in manifest.
* App页面较少时，分包对启动速度的优化不明显。
* When there are few App pages, the optimization of startup speed by subpackage is not obvious.


#### nvue@nvue
`nvue` 页面布局初始设置
`nvue` Initial setting of page layout

|属性|类型|描述|
| Attribute| Type| Describe|
|:-|:-|:-|
|flex-direction|String| flex 成员项的排列方向，支持项，row：从左到右； row-reverse：从右到左；column：从上到下；column-reverse：与 column 相反，默认值 column。|
| flex-direction| String| Arrangement direction of flex member items, supported options: row: from left to right; row-reverse: from right to left; column: from top to bottom; column-reverse: contrary to column, with column as default.|


### h5
|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|title|String|页面标题，默认使用 manifest.json 的 name|
| title| String| For page title, the name of manifest.json is used by default|
|template|String|index.html模板路径，相对于应用根目录，可定制生成的 html 代码。参考：[自定义模板](collocation/manifest?id=h5-template)|
| template| String| index.html template path, relative to the application root directory, able to customize the generated html code. Refer to [Custom template](collocation/manifest?id=h5-template)|
|router|Object|参考：[router](collocation/manifest?id=h5-router)|
| router| Object| Refer to [router](collocation/manifest?id=h5-router)|
|async|Object|参考：[async](collocation/manifest?id=h5-async)|
| async| Object| Refer to [async](collocation/manifest?id=h5-async)|
|devServer|Object|开发环境 server 配置，参考：[devServer](collocation/manifest?id=devserver)|
| devServer| Object| Development environment server configuration, refer to [devServer](collocation/manifest?id=devserver)|
|publicPath|String|引用资源的地址前缀，仅发布时生效。参考：[publicPath](collocation/manifest?id=publicPath)|
| publicPath| String| The address prefix of the referenced resource, taking effect only at publishing. Refer to [publicPath](collocation/manifest?id=publicPath)|
|sdkConfigs|String|SDK配置，例如地图...  参考：[sdkConfigs](collocation/manifest?id=h5sdkconfig)|
| sdkConfigs| String| SDK configuration, such as maps... refer to [sdkConfigs](collocation/manifest?id=h5sdkconfig)|
|optimization|Object|打包优化配置（HBuilderX 2.1.5 以上支持），参考[optimization](collocation/manifest?id=optimization)|
| optimization| Object| Package optimization configuration (supported by HBuilderX 2.1.5+), refer to[optimization](collocation/manifest?id=optimization)|
|uniStatistics|Object|[H5 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)||
| uniStatistics| Object| [Whether or not to enable uni statistics on the H5 side is configured in the same way as global configuration](/collocation/manifest?id=uniStatistics)| |

#### 自定义模板@h5-template
#### Custom template @h5-template
需要使用自定义模板的场景，通常有以下几种情况：
There are following scenarios generally requiring custom templates:

- 调整页面 head 中的 meta 配置
- Adjust meta configuration in page head
- 补充 SEO 相关的一些配置（仅首页）
- Supplement some SEO-related configurations (home page only)
- 加入百度统计等三方js
- Add Baidu Statistics and other 3rd party js

使用自定义模板时，1. 工程根目录下新建一个html文件；2. 复制下面的基本模板内容，到这个html文件，在此基础上修改meta和引入js；3. 在 `manifest.json->h5->template` 节点中关联这个html文件的路径。
When using custom templates, 1. Create a new html file in the project root directory; 2. Copy the following basic template content to this html file, and modify meta and introduce js on this basis; 3. Associate the path of this html file in the `manifest.json->h5->template` node.
```html
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>
			<%= htmlWebpackPlugin.options.title %>
		</title>
		<!-- Open Graph data -->
		<!-- <meta property="og:title" content="Title Here" /> -->
		<!-- <meta property="og:url" content="http://www.example.com/" /> -->
		<!-- <meta property="og:image" content="http://example.com/image.jpg" /> -->
		<!-- <meta property="og:description" content="Description Here" /> -->
		<script>
			var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') || CSS.supports('top: constant(a)'))
			document.write('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' + (coverSupport ? ', viewport-fit=cover' : '') + '" />')
		</script>
		<link rel="stylesheet" href="<%= BASE_URL %>static/index.<%= VUE_APP_INDEX_CSS_HASH %>.css" />
	</head>
	<body>
		<noscript>
			<strong>Please enable JavaScript to continue.</strong>
		</noscript>
		<div id="app"></div>
		<!-- built files will be auto injected -->
	</body>
</html>
```

在hello uni-app示例中有一个`template.h5.html`文件，即是此用途。
In the hello uni-app example, there is an `template.h5.html` file for this purpose.

**关于SEO的补充说明**
**Supplementary explanation about SEO**

H5平台是SPA单页应用，普通的SEO信息即加meta字段只能在，自定义的模板html里配置首页。
H5 platform is a single-page application of SPA. The home page of ordinary SEO information, that is, meta plus field, can only be configured in the custom template html.

#### router@h5-router
|属性|类型|默认值|说明|
| Attribute| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|mode|String|hash|路由跳转模式，支持 hash、history|
| mode| String| hash| Route jumping mode, supporting hash and history|
|base|String|/|应用基础路径，例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"，支持设置为相对路径 "./"|
| base| String| /| The basic application path, for example, if the whole single-page application service is under /app/, then the base should be set to "/app/", and the support setting is relative path "./"|

**注意：**
**Notice:**

* `history` 模式部分浏览器器不支持，iOS微信内置浏览器无法观测到URL变动，默认分享（不使用微信[JSSDK](https://ask.dcloud.net.cn/article/35380)的情况下）的链接为入口页链接。
* The `history` mode is not supported by some browsers. The iOS WeChat built-in browser cannot observe URL changes. By default, the link shared (in the case of not using WeChat [JSSDK](https://ask.dcloud.net.cn/article/35380)) is the entry page link.
* `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
* The release of `history` mode requires back-end configuration support. For details, please refer to [Back-end configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90).

#### async@h5-async
|属性|类型|默认值|说明|
| Attribute| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|loading|String|AsyncLoading|页面 js 加载时使用的组件（需注册为全局组件）|
| loading| String| AsyncLoading| Components used when page js is loaded (need to be registered as global components)|
|error|String|AsyncError|页面 js 加载失败时使用的组件（需注册为全局组件）|
| error| String| AsyncError| Components used when page js is failed to load (need to be registered as global components)|
|delay|Number|200|展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）|
| delay| Number| 200| Show the delay time of loading components (if the loading of page js is completed within the delay time, the loading components will not be displayed)|
|timeout|Number|60000|页面 js 加载超时时间（超时后展示 error 对应的组件）|
| timeout| Number| 60000| Timeout time of js page loading (show the component corresponding to error after timeout)|

#### devServer
|属性|类型|默认值|说明|
| Attribute| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|https|Boolean|false|启用 https 协议|
| https| Boolean| false| Enable https protocol|
|disableHostCheck|Boolean|false|禁用 Host 检查|
| disableHostCheck| Boolean| false| Disable Host check|

Tips：`uni-app` 中 `manifest.json->h5->devServer` 实际上对应 `webpack` 的 [devServer](https://webpack.js.org/configuration/dev-server/)，鉴于 manifest 为 json 文件，故 `webpack.config.js->devServer` 配置项下的简单类型属性均可在`manifest.json->h5->devServer`节点下配置，funciton 等复杂类型暂不支持。
Tips：`uni-app` `manifest.json->h5->devServer` actually corresponds to [devServer](https://webpack.js.org/configuration/dev-server/) of `webpack`. Since the manifest is a json file, the simple type attributes under the `webpack.config.js->devServer` configuration item can all be configured under the `manifest.json->h5->devServer` node, and complex types such as funciton are temporarily not supported.

#### publicPath
配置 publicPath 为 cdn 资源地址前缀，这样编译出来的 html 文件，引用的 js，css 路径会自动变成 cdn 上的地址。
Configure the publicPath as the resource address prefix of cdn. In such compiled html files, the referenced js and css paths will automatically become addresses on cdn.

注意：如果想对图片生效，image组件的图片地址需要使用相对路径
Notice: If you want to make the image take effect, the image address of the image component needs to use a relative path.

**示例**
**Example**

以 hello-uniapp 发布 H5 时为例
Use the example when hello-uniapp publishes H5

未配置 publicPath 时，发布时 index.html 中的结果：
When publicPath is not configured, publish the results in the index.html:

```html
<script src=/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=/h5/static/js/index.34e8497d.js>
```
配置 publicPath 为 `https://www.cdn.com/h5/`（无效地址仅用作示例） 后，发布时 index.html 中的结果：
Results in index.html when the mode is released after configuring publicPath to `https://www.cdn.com/h5/` (invalid address, only used as an example):

```html
<script src=https://www.cdn.com/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=https://www.cdn.com/h5/static/js/index.34e8497d.js>
```

**注意**
**Notice**
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- After packaging and deployment, open gzip on the server can further compress the file. For specific configuration, please refer to online sharing: https://juejin.im/post/5af003286fb9a07aac24611b

#### sdkconfig@h5sdkconfig

三方SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（H5 配置）输入配置。
Third-party SDK configuration. The use of 3rd party SDK needs to apply to these SDK providers and configure the parameters here. You can enter the configuration in the visual interface of HBuilderX (H5 configuration).

|属性|类型|描述|
| Attribute| Type| Describe|
|:-|:-|:-|
|maps|Object|地图或位置相关SDK|
| maps| Object| Map or location related SDK|

#### maps@h5sdkconfigmaps

地图服务商 SDK 配置，使用地图以及位置（IP 定位及坐标转换）需要配置此项。
Map service provider SDK configuration, map use and location (IP positioning and coordinate conversion) need to configure this item.

**示例**
**Example**

```json
"h5": {
	"sdkConfigs": {
		// 使用地图或位置相关功能必须填写其一
		// One of the functions related to map use or location must be filled in
		"maps": {
			"qqmap": {
				// 腾讯地图秘钥 https://lbs.qq.com/dev/console/key/manage
				// Tencent map key https://lbs.qq.com/dev/console/key/manage
				"key": ""
			},
			"google": {
				// 谷歌地图秘钥（HBuilderX 3.2.10+）https://developers.google.com/maps/documentation/javascript/get-api-key
				// Google map key (HBuilderx3.2.10+) https://developers.google.com/maps/documentation/javascript/get-api-key
				"key": ""
			}
		}
	}
}
```

#### optimization

|属性|类型|默认值|说明|
| Attribute| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|prefetch|Boolean|false|资源预取|
| prefetch| Boolean| false| Resource prefetching|
|preload|Boolean|false|资源预加载|
| preload| Boolean| false| Resource preload|
|treeShaking|Object||摇树优化，根据项目需求，动态打包框架所需的组件及API，保持框架代码最精简化，参考[treeShaking](collocation/manifest?id=treeshaking)|
| treeShaking| Object| | treeShaking optimization. According to the project requirements, dynamically package the components and APIs required by the framework to keep the framework code most streamlined and simplified, refer to [treeShaking](collocation/manifest?id=treeshaking)|

##### treeShaking

|属性|类型|默认值|说明|
| Attribute| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|enable|Boolean|false|是否启用摇树优化|
| enable| Boolean| false| Whether to enable tree shaking optimization|

**示例：**
**Example:**
```json
"h5": {
    "optimization": {
        "treeShaking": {
            "enable": true
        }
    }
}
```

Tips：关于摇树优化（treeShaking）原理及优化结果，参考：[https://ask.dcloud.net.cn/article/36279](https://ask.dcloud.net.cn/article/36279)
Tips: For the principle and optimization results of treeShaking, please refer to [https://ask.dcloud.net.cn/article/36279](https://ask.dcloud.net.cn/article/36279)


### 关于分包优化的说明
### Notes on subcontracting optimization

- 在对应平台的配置下添加`"optimization":{"subPackages":true}`开启分包优化
- Add `"optimization":{"subPackages":true}` under the configuration of the corresponding platform to enable sub-contracting optimization
- 分包优化具体逻辑：
- Specific logic of subcontracting optimization:
  + 静态文件：分包下支持 static 等静态资源拷贝，即分包目录内放置的静态资源不会被打包到主包中，也不可在主包中使用
  + Static files: static resources such as static are supported under the subpackage, i.e., static resources placed in the subpackage directory will not be packaged into or used in the main package
  + js文件：当某个 js 仅被一个分包引用时，该 js 会被打包到该分包内，否则仍打到主包（即被主包引用，或被超过 1 个分包引用）
  + js file: when a js is referenced by only one subpackage, it will be packaged into the subpackage, or otherwise it will still packaged into the main package (i.e., it will be referenced by the main package or more than 1 subpackage)
  + 自定义组件：若某个自定义组件仅被一个分包引用时，且未放入到分包内，编译时会输出提示信息
  + Custom component: if a custom component is referenced by only one subpackage and is not put into the subpackage, a prompt message will be output during compilation

**分包内静态文件示例**
**Examples of static files in subcontracting**

```
"subPackages": [{
	"root": "pages/sub",
	"pages": [{
		"path": "index/index"
	}]
}]
```

以上面的分包为例，放在每个分包root对应目录下的静态文件会被打包到此分包内。
Take the above subpackage as an example, the static files placed in the root corresponding directory of each subpackage will be packaged into this subpackage.

### 完整 manifest.json
### Complete manifest.json

```javascript
{
    "appid": "__UNI__XXXXXX, which was assigned in cloud when creating the application. Do not modify it." ,
    "name": "application name, such as uni-app",
    "description": "application description",
    "versionName": "1.0.0",
    "versionCode": "100",
    "uniStatistics": {
        "enable": false
    },
    "app-plus": {
        "screenOrientation": [
            "portrait-primary",
            "landscape-primary",
            "portrait-secondary",
            "landscape-secondary"
        ],
        "optimization": {
            "subPackages": true
        },
        "modules": {
            "Contacts": {},
            "Fingerprint": {},
            "Maps": {},
            "Messaging": {},
            "OAuth": {},
            "Payment": {},
            "Push": {},
            "Share": {},
            "Speech": {},
            "VideoPlayer": {},
            "LivePusher": {}
        },
        "distribute": {
            "android": {
                "packagename": "Android application package name, such as io.dcloud.uniapp",
                "keystore": "keystore file for Android application packaging",
                "password": "password of the certificate in the keystore used by Android application packaging",
                "aliasname": "alias name of the certificate in the keystore used by Android application packaging",
                "schemes": [
                    "scheme supported by the application, case-sensitive, and lowercase is recommended"
                ],
                "theme": "theme used by the program",
                "android:name": "customized program entry class name",
                "custompermissions": "Boolean type, whether to customize the android permissions. true indicates customizing permissions, which only use the android permissions specified under permissions instead of automatically adding android permissions according to the native modules used by users; while false indicates automatically adding android permissions according to the native modules used by users",
                "permissions": [
                    "Additional android permissions to be added, such as <uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\" />",
                    "<uses-permission android:name=\"com.android.launcher.permission.UNINSTALL_SHORTCUT\" />"
                ],
                "minSdkVersion": "minimum version supported by apk, with 14 as default",
                "targetSdkVersion": "target version of apk, with 21 as default"
            },
            "ios": {
                "appid": "iOS application ID, appid applied from Apple Developer website, such as io.dcloud.uniapp",
                "mobileprovision": "configuration file for iOS application packaging",
                "password": "imported password of personal certificate for iOS application packaging",
                "p12": "personal certificate for iOS application packaging, associated with configuration files",
                "devices": "types of devices supported by iOS applications. Options include: iphone/ipad/universal",
                "urltypes": [
                    {
                        "urlidentifier": "com.xxx.test",
                        "urlschemes": [
                            "hbuilder"
                        ]
                    }
                ],
                "frameworks": [
                    "QuartzCore.framework"
                ],
                "idfa": "true|false, whether to use the advertisement identifier, with false as default",
                "plistcmds": [
                    "Set : Permission, reason for using permission",
                    "Set : NSCameraUsageDescription, reason for using the user's camera"
                ]
            },
            "sdkConfigs": {
                "maps": {
                    "baidu": {
                        "appkey_ios": "",
                        "appkey_android": ""
                    }
                },
                "oauth": {
                    "weixin": {
                        "appid": "",
                        "appsecret": ""
                    },
                    "qq": {
                        "appid": ""
                    },
                    "sina": {
                        "appkey": "",
                        "appsecret": "",
                        "redirect_uri": ""
                    },
                    "xiaomi": {
                        "appid_ios": "",
                        "appsecret_ios": "",
                        "redirect_uri_ios": "",
                        "appid_android": "",
                        "appsecret_android": "",
                        "redirect_uri_android": ""
                    }
                },
                "payment": {
                    "appleiap": {},
                    "alipay": {
                        "scheme": ""
                    },
                    "weixin": {
                        "appid": ""
                    }
                },
                "share": {
                    "weixin": {
                        "appid": ""
                    },
                    "sina": {
                        "appkey": "",
                        "appsecret": "",
                        "redirect_uri": ""
                    },
                    "qq": {
                        "appid": ""
                    }
                }
            },
            "icons": {
                "ios": {
                    "appstore": "required, 1024x1024, icon to be submitted to app sotre",
                    "iphone": {
                        "app@2x": "optional, 120x120, iOS7-11 program icon (iPhone4S/5/6/7/8)",
                        "app@3x": "optional, 180x180, iOS7-11 program icon (iPhone6plus/7plus/8plus/X)",
                        "spotlight@2x": "optional, 80x80, iOS7-11 Spotlight search icon (iPhone5/6/7/8)",
                        "spotlight@3x": "optional, 120x120, iOS7-11 Spotlight search icon (iPhone6plus/7plus/8plus/X)",
                        "settings@2x": "optional, 58x58, iOS5-11 Settings icon (iPhone5/6/7/8)",
                        "settings@3x": "optional, 87x87, iOS5-11 Settings icon (iPhone6plus/7plus/8plus/X)",
                        "notification@2x": "optional, 40x40, iOS7-11 notification bar icon (iPhone5/6/7/8)",
                        "notification@3x": "optional, 60x60, iOS7-11 notification bar icon (iPhone6plus/7plus/8plus/X)"
                    },
                    "ipad": {
                        "app": "optional, 76x76, iOS7-11 program icon",
                        "app@2x": "optional, 152x152, iOS7-11 program icon (high-resolution screen)",
                        "proapp@2x": "optional, 167x167, iOS9-11 program icon (iPad Pro)",
                        "spotlight": "optional, 40x40, iOS7-11 Spotlight search icon",
                        "spotlight@2x": "optional, 80x80, iOS7-11 Spotlight search icon (high-resolution screen)",
                        "settings": "optional, 29x29, iOS5-11 settings icon",
                        "settings@2x": "optional, 58x58, iOS5-11 settings icon (high-resolution screen)",
                        "notification": "optional, 20x20, iOS7-11 notification bar icon",
                        "notification@2x": "optional, 40x40, iOS7-11 notification bar icon (high-resolution screen)"
                    }
                },
                "android": {
                    "mdpi": "Required, 48x48, ordinary screen program icon",
                    "ldpi": "required, 48x48, big screen program icon",
                    "hdpi": "required, 72x72, high-resolution screen program icon",
                    "xhdpi": "required, 96x96, 720P high-resolution screen program icon",
                    "xxhdpi": "required, 144x144, 1080P high-resolution screen program icon",
                    "xxxhdpi": "optional, 192x192"
                }
            },
            "splashscreen": {
                "ios": {
                    "iphone": {
                        "retina35": "optional, 640x960, 3.5-inch device (iPhone4) splash image",
                        "retina40": "optional, 640x1136, 4.0-inch device (iPhone5) splash image",
                        "retina40l": "optional, 1136x640, 4.0-inch device (iPhone5) landscape splash image",
                        "retina47": "optional, 750x1334, 4.7-inch device (iPhone6) splash image",
                        "retina47l": "optional, 1334x750, 4.7-inch device (iPhone6) landscape splash image",
                        "retina55": "optional, 1242x2208, 5.5-inch device (iPhone6Plus) splash image",
                        "retina55l": "optional, 2208x1242, 5.5-inch device (iPhone6Plus) landscape splash image",
                        "iphonex": "optional, 1125x2436, iPhoneX splash image",
                        "iphonexl": "optional, 2436x1125, iPhoneX landscape screen splash image"
                    },
                    "ipad": {
                        "portrait": "optional, 768x1004, required when supporting iPad, portrait screen splash image for iPad",
                        "portrait-retina": "optional, 1536x2008, required when supporting iPad, portrait screen image for high-resolution iPad",
                        "landscape": "optional, 1024x748, required when supporting iPad, landscape screen splash image for iPad",
                        "landscape-retina": "optional, 2048x1496, required when supporting iPad, landscape screen image for high-resolution iPad",
                        "portrait7": "optional, 768x1024, required when supporting iPad iOS7, portrait screen splash image for iPad",
                        "portrait-retina7": "optional, 1536x2048, required when supporting iPad iOS7, portrait screen image for high-resolution iPad",
                        "landscape7": "optional, 1024x768, required when supporting iPad iOS7, landscape screen splash image for iPad",
                        "landscape-retina7": "optional, 2048x1536, required when supporting iPad iOS7, landscape screen image for high-resolution iPad"
                    }
                },
                "android": {
                    "mdpi": "required, 240x282, ordinary screen splash image",
                    "ldpi": "required, 320x442, big screen splash image",
                    "hdpi": "required, 480x762, high-resolution screen splash image",
                    "xhdpi": "required, 720x1242, 720P high-resolution screen splash image",
                    "xxhdpi": "required, 1080x1882, 1080P high-resolution screen splash image"
                }
            }
        },
        "splashscreen": {
            "waiting": true,
            "autoclose": true
        },
        "error": {
            "url": "address of the page opened when the page is loaded incorrectly, which can be a network address or a local address"
        },
        "useragent": {
            "value": "customize ua string",
            "concatenate": "whether it is in concatenate mode"
        },
        "useragent_ios": {
            "value": "consistent with the value of useragent, only valid on iOS platform. When both useragent and useragent_ios exist simultaneously, the priority of useragent_ios>useragent",
            "concatenate": "consistent with concatenate of useragent, only valid on iOS platform"
        },
        "useragent_android": {
            "value": "consistent with the value of useragent, only valid on Android platform. When both useragent and useragent_android exist simultaneously, the priority of useragent_android>useragent",
            "concatenate": "consistent with concatenate of useragent, only valid on Android platform"
        },
        "ssl": "accept|refuse|warning, the processing logic for untrusted certificates when accessing the https network",
        "runmode": "normal",
        "appWhitelist": [
            "Android platform downloads the apk address whitelist",
            "iOS platform jumps to the appstore address whitelist"
        ],
        "schemeWhitelist": [
            "URL Scheme whitelist, for example: mqq"
        ],
        "channel": "channel marker, and the statistical data of each channel application can be viewed in the DCloud Developer Center",
        "adid": "advertising alliance member id, to be filled in after the application of DCloud Developer Center",
        "safearea": {
            "background": "#CCCCCC",
            "bottom": {
                "offset": "none|auto"
            },
            "left": {
                "offset": "none|auto"
            },
            "right": {
                "offset": "none|auto"
            }
        },
        "softinput": {
            "navBar": "auto",
            "mode": "adjustResize|adjustPan"
        },
        "popGesture": "none"
    },
    "h5": {
        "title": "presentation",
        "template": "index.html",
        "router": {
            "mode": "history",
            "base": "/hello/"
        },
        "async": {
            "loading": "AsyncLoading",
            "error": "AsyncError",
            "delay": 200,
            "timeout": 3000
        }
    }
}
```
更多配置相关的说明，请参考 [manifest.json文档说明](https://ask.dcloud.net.cn/article/94) 中的描述。可能节点的位置与普通的 App 有差异，请按照配置的名称进行对应。
For more configuration related instructions, please refer to the description in [manifest.json Document Description](https://ask.dcloud.net.cn/article/94). The locations of the nodes may be different from those on the common App. Please correspond according to the configured name.

# FAQ
Q：iOS 应用调用相机等权限时，弹出的提示语如何修改？
Q: How to modify the pop-up message when the iOS app calls permissions such as that of camera?
A：在 manifest.json 可视化界面-App模块权限配置-iOS隐私信息访问的许可描述
A: In manifest.json visualization interface - permission configuration of App module - permission description of iOS privacy information access
