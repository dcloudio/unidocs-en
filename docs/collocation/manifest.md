`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。
`manifest.json`The file is the configuration file of the application, used to specify the name, icon, permissions, etc. of the application. The project created by HBuilderX is in the root directory, and the project created by CLI is in the src directory.

### 配置项列表
### List of configuration items

|属性|类型|默认值|描述|最低版本|
| Attributes        | Types of | Defaults                                                    | description                                                  | Minimum version |
|:-|:-|:-|:-|:-|
|name|String||应用名称||
| name              | String   |                                                             | Application Name                                             |                 |
|appid|String|新建 uni-app 项目时，DCloud 云端分配。用途[详见](https://ask.dcloud.net.cn/article/35907)|应用标识|| 
| appid             | String   | When creating a new uni-app project, DCloud will assign it. | Application ID                                               |                 |
|description|String||应用描述||
| description       | String   |                                                             | Application description                                      |                 |
|versionName|String||版本名称，例如：1.0.0。详见下方Tips说明||
| versionName       | String   |                                                             | Version name, for example: 1.0.0. See the Tips description below for details |                 |
|versionCode|String||版本号，例如：36||
| versionCode       | String   |                                                             | Version number, for example: 36                              |                 |
|transformPx|Boolean|true|是否转换项目的px，为true时将px转换为rpx，为false时，px为传统的实际像素||
| transformPx       | Boolean  | true                                                        | Whether to convert the px of the project, when true, convert px to rpx, when false, px is the traditional actual pixel |                 |
|networkTimeout|Object||网络超时时间，[详见](/collocation/manifest?id=networktimeout)||
| networkTimeout    | Object   |                                                             | Network timeout time                                         |                 |
|debug|Boolean|false|是否开启 debug 模式，开启后调试信息以 ``info`` 的形式给出，其信息有页面的注册，页面路由，数据更新，事件触发等||
| debug             | Boolean  | false                                                       | Debug mode is turned on, after opening the debug information `info`given in the form, the information pages have registered, page routing, data updates, event triggers, etc. |                 |
|uniStatistics|Object||[是否开启 uni 统计，全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
| uniStatistics     | Object   |                                                             | Whether to enable uni statistics, global configuration       | 2.2.3+          |
|app-plus|Object||[App 特有配置](/collocation/manifest?id=app-plus)||
|app-plus|Object||[App specific configuration](/collocation/manifest?id=app-plus)||
|h5|Object||[H5 特有配置](/collocation/manifest?id=h5)||
|h5|Object||[H5 specific configuration](/collocation/manifest?id=h5)||
**Tips**

- uni-app 的 `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- uni-app of `appid`the cloud DCloud allocated, mainly for DCloud related cloud service, do not modify. 
- 注意区分 uni-app 的 `appid` 与 iOS 等其它平台分配的 `appid`，以及第三方 SDK 的 `appid`。
- Note the distinction between uni-app `appid`with other platforms iOS like distribution `appid`, and the third party SDK `appid`.
- versionName在云打包App和生成wgt应用资源时会使用。如需升级App版本，先修改此处再云打包。导出wgt资源用于离线打包和热更新时也会以此版本为依据。
- versionName is used when cloud packaging App and generating wgt application resources. If you need to upgrade the App version, first modify this and then cloud packaging. Exporting wgt resources for offline packaging and hot updates will also be based on this version.
- 在本地打包时和热更新时，App版本和wgt应用资源版本将不再保持一致。此时通过[plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version)可获取App版本，通过[plus.runtime.getProperty](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.getProperty)获取wgt资源版本。
- During local packaging and hot update, the App version and wgt application resource version will no longer be consistent. By this time plus.runtime.version available App version, by plus.runtime.getProperty get wgt resource version.

#### networkTimeout

各类网络请求的超时时间，单位均为毫秒。
The timeout period of various network requests, in milliseconds.

|属性|类型|必填|默认值|说明|
| Attributes    | Types of | Required | Defaults | Description                                              |
|--|--|--|--|--|
|request|Number|否|60000|uni.request 的超时时间，单位毫秒。|
| request       | Number   | no       | 60000    | The timeout period of uni.request, in milliseconds.      |
|connectSocket|Number|否|60000|uni.connectSocket 的超时时间，单位毫秒。|
| connectSocket | Number   | no       | 60000    | Uni.connectSocket timeout time, in milliseconds.         |
|uploadFile|Number|否|60000|uni.uploadFile 的超时时间，单位毫秒。|
| uploadFile    | Number   | no       | 60000    | The timeout period of uni.uploadFile, in milliseconds.   |
|downloadFile|Number|否|60000|uni.downloadFile 的超时时间，单位毫秒。|
| downloadFile  | Number   | no       | 60000    | The timeout period of uni.downloadFile, in milliseconds. |

自`HBuilderX 2.5.10`起，上述默认超时时间由6秒改为60秒
Since `HBuilderX 2.5.10`then, the above-mentioned default timeout period has been changed from 6 seconds to 60 seconds.


### uniStatistics
uni 统计配置项
uni statistics configuration items

|属性|类型|必填|默认值|说明|
| Attributes | Types of | Required | Defaults | Description                      |
|--|--|--|--|--|
|enable|Boolean|是|true|是否开启uni统计|
| enable     | Boolean  | Yes      | true     | Whether to enable uni statistics |

### app-plus

|属性|类型|说明|最低版本|
|Attribute|Type|Description|Minimum Version|
|:-|:-|:-|:-|
|splashscreen|Object|App 启动界面信息，[详见](/collocation/manifest?id=splashscreen)||
|splashscreen|Object|App startup interface information, [see details](/collocation/manifest?id=splashscreen)||
|screenOrientation|Array|重力感应、横竖屏配置，可取值："portrait-primary"：竖屏正方向；"portrait-secondary"：竖屏反方向；"landscape-primary"：横屏正方向；"landscape-secondary"：横屏反方向。||
|screenOrientation|Array|Gravity sensor, horizontal and vertical screen configuration, possible values: "portrait-primary": vertical screen forward direction; "portrait-secondary": vertical screen reverse direction; "landscape-primary": horizontal screen forward direction;" landscape-secondary": The reverse direction of landscape screen. ||
|modules|Object|权限模块，[详见](/collocation/manifest?id=modules)||
|modules|Object|Permission module, [see details](/collocation/manifest?id=modules)||
|distribute|Object|App 发布信息，[详见](/collocation/manifest?id=distribute)||
|distribute|Object|App release information, [see details](/collocation/manifest?id=distribute)||
|usingComponents|Boolean|是否启用自定义组件模式，默认为false，[编译模式区别详情](https://ask.dcloud.net.cn/article/35843)|1.9.0+|
|usingComponents|Boolean|Whether to enable the custom component mode, the default is false, [Details of the difference between compilation modes](https://ask.dcloud.net.cn/article/35843)|1.9.0+|
|nvueCompiler|String|切换 nvue 编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](http://ask.dcloud.net.cn/article/36074)|2.0.3+|
|nvueCompiler|String|Switch nvue compilation mode, optional value, `weex`: old compilation mode, `uni-app`: new compilation mode, default is `weex`. [Details about the differences in compilation mode](http://ask.dcloud.net.cn/article/36074)|2.0.3+|
|nvueStyleCompiler|String|切换 nvue 样式编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](https://ask.dcloud.net.cn/article/38751)|3.1.1+|
|nvueStyleCompiler|String|Switch nvue style compilation mode, optional value, `weex`: old compilation mode, `uni-app`: new compilation mode, default is `weex`. [Details about the differences in compilation mode](https://ask.dcloud.net.cn/article/38751)|3.1.1+|
|renderer|String|可不加载基于 webview 的运行框架，减少包体积、提升启动速度。可选值 `native`| App-nvue 2.2.0+|
|renderer|String|can not load the running framework based on webview, which reduces the package size and improves the startup speed. Optional value `native`| App-nvue 2.2.0+|
|compilerVersion|Number|编|compilerVersion|Number|Compiler version, optional values: 2, 3 Default 2 [See details](https://ask.dcloud.net.cn/article/36599)|HBuilderX alpha 2.4.4+ or HBuilderX 2.5. 0+|译器版本，可选值：2、3 默认 2 [详见](https://ask.dcloud.net.cn/article/36599)|HBuilderX alpha 2.4.4+或HBuilderX 2.5.0+|
|compilerVersion|Number|Compiler version, optional values: 2, 3 Default 2 [See details](https://ask.dcloud.net.cn/article/36599)|HBuilderX alpha 2.4.4+ or HBuilderX 2.5. 0+|
|nvueLaunchMode|Number|Nvue 首页启动模式，在 compilerVersion 值为 3 时生效，可选值：normal、fast 默认 normal（HBuilderX alpha 2.4.4-2.4.9 固定为 fast） [详见](https://ask.dcloud.net.cn/article/36749)|2.5.0+|
|nvueLaunchMode|Number|Nvue homepage startup mode, effective when the compilerVersion value is 3, optional values: normal, fast default normal (HBuilderX alpha 2.4.4-2.4.9 is fixed as fast) [details](https:// ask.dcloud.net.cn/article/36749)|2.5.0+|
|nvue|Object|nvue 页面布局初始配置，[详见](/collocation/manifest?id=nvue)|2.0.3+|
|nvue|Object|nvue page layout initial configuration, [see details](/collocation/manifest?id=nvue)|2.0.3+|
|uniStatistics|Object|[App 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
|uniStatistics|Object|[Whether the app enables uni statistics, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|2.2.3+|

PS：这里只列出了核心部分，更多内容请参考 [完整的 manifest.json](/collocation/manifest?id=完整-manifestjson)。
PS: Only the core parts are listed here. For more content, please refer to [complete manifest.json](/collocation/manifest?id=complete-manifestjson).

**Tips**

- manifest.json 文件的配置，推荐在 HBuilderX 提供的可视化操作界面完成。
- The configuration of the manifest.json file is recommended to be done in the visual operation interface provided by HBuilderX.
- 部分配置在打包时的操作界面补全，例如：证书等信息。
- Part of the configuration is completed in the operation interface during packaging, such as information such as certificates.
- Native.js 权限部分会根据配置的模块权限，在打包后自动填充。
- Native.js permissions section will be automatically filled after packaging according to the configured module permissions.
- 部分 modules 是默认的，不需要进行配置。
- Some modules are default and do not need to be configured.


#### App Splashscreen@splashscreen

splash（启动封面）是App必然存在的、不可取消的。
Splash (startup cover) is an inevitable App existence and cannot be cancelled.

|属性|类型|默认值|描述|最低版本|
|Attribute|Type|Default Value|Description|Minimum Version|
|:-|:-|:-|:-|:-|
|alwaysShowBeforeRender|Boolean|true|首页白屏时不关闭启动界面|1.6.0|
|alwaysShowBeforeRender|Boolean|true|Do not close the startup interface when the homepage is blank|1.6.0|
|autoclose|Boolean|true|是否自动关闭程序启动界面。如果需要手动关闭启动界面，需将 alwaysShowBeforeRender 及 autoclose 均设置为 false。||
|autoclose|Boolean|true|Whether to automatically close the program startup interface. If you need to close the startup interface manually, you need to set both alwaysShowBeforeRender and autoclose to false. ||
|waiting|Boolean|true|是否在程序启动界面显示等待圈或雪花||
|waiting|Boolean|true|Whether to display a waiting circle or snowflake on the program startup interface||
|delay|Number|0|启动界面在应用的首页面加载完毕后延迟关闭的时间，autoclose 为 true 时生效。|&nbsp;|
|delay|Number|0|The time to delay the closing of the startup interface after the home page of the application is loaded. It takes effect when autoclose is true. |&nbsp;|

**注意**
**Notice**
- 如果不配置自己的splash图，App端会默认把App的icon放到splash中
- If you don’t configure your own splash image, the App will put the App’s icon in the splash by default
- splash只能是标准png，不要用jpg改名为png。也不支持gif等动画
- Splash can only be standard png, do not use jpg to rename it to png. Does not support animation such as gif
- 相关改动，云打包生效，真机运行不生效。本地打包需自行在原生工程中配置
- For related changes, cloud packaging takes effect, but does not take effect when running on a real machine. Local packaging needs to be configured in the native project by itself
- App启动图中iOS的MAX等大屏设备的splash图若不配，会导致iOS认为此App没有为MAX优化，App将无法全屏，四周会有黑边
- If the splash map of iOS MAX and other large-screen devices does not match in the app startup picture, iOS will think that the app is not optimized for MAX, and the app will not be full screen, and there will be black bars around it
- Android的splash支持.9.png，[详见](https://ask.dcloud.net.cn/article/35527)
- Android splash support.9.png, [see details](https://ask.dcloud.net.cn/article/35527)


#### App Modules@modules
#### App Modules@modules
模块选择是为了控制App的包体积，不需要的模块可以在打包时剔除。
Module selection is to control the package size of the App, and unnecessary modules can be eliminated when packaging.

|名称|描述|
|Name|Description|
|:-|:-|

|Bluetooth|BLE蓝牙|
|Bluetooth|BLE Bluetooth|
|Contacts|系统通讯录|
|Contacts|System Directory|
|Fingerprint|指纹识别|
|Fingerprint|Fingerprint Recognition|
|iBeacon|iBeacon|
|iBeacon|iBeacon|
|LivePusher|直播推流|
|LivePusher|Live Push Stream|
|Maps|地图|
|Maps|Map|
|Messaging|短彩邮件消息|
|Messaging|Short Color Mail Message|
|OAuth|登录授权|
|OAuth|Login Authorization|
|Payment|支付|
|Payment|Payment|
|Push|消息推送|
|Push|Message Push|
|Share|社交分享|
|Share|Social Sharing|
|Speech|语音识别|
|Speech|Speech Recognition|
|SQLite|SQLite数据库|
|SQLite|SQLite Database|
|Statistic|统计|
|Statistic|Statistic|
|VideoPlayer|视频播放|
|VideoPlayer|Video Player|

**注意**
**Notice**
- 仅App云打包生效。本地打包需自行在原生工程中配置。
- Only App Cloud packaging takes effect. Local packaging needs to be configured in the native project.

#### App Distribute@distribute

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|android|Object|Android 应用配置，详见: [完整 manifest.json](/collocation/manifest?id=完整-manifestjson)|
|android|Object|Android application configuration, see: [full manifest.json](/collocation/manifest?id=full-manifestjson)|
|ios|Object|iOS 应用配置，详见: [完整 manifest.json](/collocation/manifest?id=完整-manifestjson)|
|ios|Object|iOS application configuration, see: [full manifest.json](/collocation/manifest?id=full-manifestjson)|
|sdkConfigs|Object|SDK配置，仅打包生效 [详见](/collocation/manifest?id=sdkConfigs)|
|sdkConfigs|Object|SDK configuration, only takes effect when packaged [see](/collocation/manifest?id=sdkConfigs)|
|orientation|Array|同 screenOrientation 配置，仅打包生效，已废弃，推荐使用 screenOrientation|
|orientation|Array|Same as screenOrientation configuration, only takes effect when packaged, and is deprecated. It is recommended to use screenOrientation|

##### App SdkConfigs@sdkConfigs

三方原生SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（App SDK配置）输入配置，此配置仅**云打包后生效**，本地打包需自行在原生工程中配置。
Three-party native SDK configuration. To use the three-party SDK, you need to apply to these SDK providers, and configure the parameters here. The configuration can be entered in the HBuilderX visual interface (App SDK configuration). This configuration only takes effect after **cloud packaging**, and local packaging needs to be configured in the native project.

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|oauth|Object|授权登录，配置后可调用 [uni.login](/api/plugins/login?id=login) 进行登录操作，目前支持的授权登录平台有：[QQ](http://open.qq.com/)、[微信](https://open.weixin.qq.com/)、[新浪微博](http://open.weibo.com/)。|
|oauth|Object|Authorized login, after configuration, you can call [uni.login](/api/plugins/login?id=login) to log in. The currently supported authorized login platforms are: [QQ](http://open .qq.com/), [WeChat](https://open.weixin.qq.com/), [Sina Weibo](http://open.weibo.com/). |
|share|Object|分享，配置后可调用 [uni.share](/api/plugins/share?id=share) 进行分享，目前支持QQ、微信、新浪微博等分享， 具体配置 [详见](/api/plugins/share?id=app-端各平台分享配置说明)。|
|share|Object|Share, after configuration, you can call [uni.share](/api/plugins/share?id=share) to share. Currently, sharing is supported by QQ, WeChat, Sina Weibo, etc., for specific configuration [see]( /api/plugins/share?id=app-end each platform sharing configuration instructions). |
|push|Object|push配置，使用方式 [详见](http://ask.dcloud.net.cn/article/34)，目前支持：[uniPush](http://ask.dcloud.net.cn/article/35716)、[个推](http://www.igetui.com/)、[小米推送](https://dev.mi.com/console/appservice/push.html)，注意App仅支持一种 push 方式，配置多个 push 无效，建议使用 uniPush，支持多厂商推送。|
|push|Object|push configuration, how to use [see](http://ask.dcloud.net.cn/article/34), currently supports: [uniPush](http://ask.dcloud.net.cn /article/35716), [Push](http://www.igetui.com/), [Xiaomi Push](https://dev.mi.com/console/appservice/push.html), please note that the App only It supports one push method. It is invalid to configure multiple pushes. UniPush is recommended to support multi-vendor push. |
|payment|Object|三方支付配置，配置后可调用 [uni.payment](/api/plugins/payment?id=payment) 进行支付，目前支持微信支付、支付宝支付、苹果内购， 具体配置 [详见](/api/plugins/payment?id=uni-app-app-平台支付流程)。|
|payment|Object|Three-party payment configuration, after configuration, you can call [uni.payment](/api/plugins/payment?id=payment) to make payment, currently supports WeChat payment, Alipay payment, Apple in-app purchase, specific configuration [see details ](/api/plugins/payment?id=uni-app-app-platform payment process). |
|statics|Object|统计配置，目前仅支付友盟统计，[详见](http://ask.dcloud.net.cn/article/74)，在uni-app中只用 [plus.statistic](http://www.html5plus.org/doc/zh_cn/statistic.html) 进行调用。|
|statics|Object|Statistics configuration, currently only pay for Youmeng statistics, [see details](http://ask.dcloud.net.cn/article/74), only use [plus.statistic]( in uni-app http://www.html5plus.org/doc/zh_cn/statistic.html) to make a call. |
|speech|Object|语音识别配置，支持讯飞语音、百度语音，[详见](http://ask.dcloud.net.cn/article/35059)，在uni-app中只用 [plus.speech](http://www.html5plus.org/doc/zh_cn/speech.html) 进行调用。|
|speech|Object|Speech recognition configuration, support iFLYTEK voice, Baidu voice, [see details](http://ask.dcloud.net.cn/article/35059), only use [plus.speech in uni-app ](http://www.html5plus.org/doc/zh_cn/speech.html) to call. |
|maps|Object|原生地图配置，目前仅支持 [高德地图](http://lbs.amap.com/)，申请方式可参考：[地图插件配置](http://ask.dcloud.net.cn/article/29)。|
|maps|Object|Native map configuration, currently only supports [High German map](http://lbs.amap.com/), please refer to the application method: [Map plug-in configuration](http://ask.dcloud.net .cn/article/29). |

#### optimization@app-vue-optimization

从uni-app 2.7.12+ 开始，App-vue平台也有分包配置，但默认并不开启。
Starting from uni-app 2.7.12+, the App-vue platform is also compatible with the sub-package configuration of applets, but it is not enabled by default.

在manifest配置以下节点，可以在App端启动分包。
Configure the following nodes in the manifest to start subcontracting on the App side.

|属性|类型|说明|
| Attributes  | Types of | Description                                   |
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|
| subPackages | Boolean  | Whether to enable subcontracting optimization |

```
"app-plus": {
  "optimization": {
    "subPackages": true
  },
  // 开启分包优化后，必须配置资源释放模式
  // After the subcontracting optimization is enabled, the resource release mode must be configured
  "runmode" : "liberate"
}
```

在manifest中启动分包后，需要在pages.json中配置具体的分包规则，详见：[https://uniapp.dcloud.io/collocation/pages?id=subpackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
After starting the subpackage in the manifest, you need to configure specific subpackage rules in pages.json

在pages.json里配置分包，app是否生效，取决于manifest里是否开启。
That is, once subcontracting is configured in pages.json, and whether the app takes effect depends on whether it is enabled in the manifest.

注意: 
note:
* App开启分包后，每个分包单独编译成一个js文件(都包含在app内，不会联网下载)，当App首页是vue时，可减小启动加载文件大小，提升启动速度。
* After the app is sub-packaged, each sub-package is separately compiled into a js file (all included in the app and will not be downloaded on the Internet). When the home page of the App is vue, the startup loading file size can be reduced and the startup speed can be improved.
* 首页是nvue时，分包不会提升启动速度，nvue本身启动速度就快于vue，也快于开启分包后的首页为vue的应用。如果追求极致启动速度，还是应该使用nvue做首页并在manifest开启fast模式。
* When the homepage is nvue, subcontracting will not increase the startup speed, and the startup speed of nvue itself is faster than vue, and faster than the application whose homepage is vue after opening the subcontracting. If you pursue the ultimate startup speed, you should still use nvue as the home page and enable fast mode in the manifest.
* App页面较少时，分包对启动速度的优化不明显。
* When the homepage is nvue, subcontracting will not increase the startup speed, and the startup speed of nvue itself is faster than vue, and faster than the application whose homepage is vue after opening the subcontracting. If you pursue the ultimate startup speed, you should still use nvue as the home page and enable fast mode in the manifest.


#### nvue@nvue
`nvue` 页面布局初始设置
`nvue` Initial page layout settings

|属性|类型|描述|
| Attributes     | Types of | description                                                  |
|:-|:-|:-|
|flex-direction|String| flex 成员项的排列方向，支持项，row：从左到右； row-reverse：从右到左；column：从上到下；column-reverse：与 column 相反，默认值 column。|
| flex-direction | String   | The arrangement direction of flex member items, support items, row: from left to right; row-reverse: from right to left; column: from top to bottom; column-reverse: opposite to column, the default value is column. |


### h5
|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|title|String|页面标题，默认使用 manifest.json 的 name|
|title|String|Page title, the name of manifest.json is used by default|
|template|String|index.html模板路径，相对于应用根目录，可定制生成的 html 代码。参考：[自定义模板](collocation/manifest?id=h5-template)|
|template|String|index.html template path, relative to the application root directory, the generated html code can be customized. Reference: [Custom Template](collocation/manifest?id=h5-template)|
|router|Object|参考：[router](collocation/manifest?id=h5-router)|
|router|Object|Reference: [router](collocation/manifest?id=h5-router)|
|async|Object|参考：[async](collocation/manifest?id=h5-async)|
|async|Object|Reference: [async](collocation/manifest?id=h5-async)|
|devServer|Object|开发环境 server 配置，参考：[devServer](collocation/manifest?id=devserver)|
|devServer|Object|Development environment server configuration, reference: [devServer](collocation/manifest?id=devserver)|
|publicPath|String|引用资源的地址前缀，仅发布时生效。参考：[publicPath](collocation/manifest?id=publicPath)|
|publicPath|String|The address prefix of the referenced resource, which takes effect only when it is released. Reference: [publicPath](collocation/manifest?id=publicPath)|
|sdkConfigs|String|SDK配置，例如地图...  参考：[sdkConfigs](collocation/manifest?id=h5sdkconfig)|
|sdkConfigs|String|SDK configuration, such as map... Reference: [sdkConfigs](collocation/manifest?id=h5sdkconfig)|
|optimization|Object|打包优化配置（HBuilderX 2.1.5 以上支持），参考[optimization](collocation/manifest?id=optimization)|
|optimization|Object|Package optimization configuration (supported by HBuilderX 2.1.5 and above), refer to [optimization](collocation/manifest?id=optimization)|
|uniStatistics|Object|[H5 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)||
|uniStatistics|Object|[H5 is uni statistics enabled, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)||

#### 自定义模板@h5-template
#### Custom template @h5-template
需要使用自定义模板的场景，通常有以下几种情况：
Scenarios that need to use a custom template usually have the following situations:

- 调整页面 head 中的 meta 配置
- Adjust the meta configuration in the head of the page
- 补充 SEO 相关的一些配置（仅首页）
- Supplement some configurations related to SEO (only home page)
- 加入百度统计等三方js
- Join Baidu Statistics and other tripartite js

使用自定义模板时，1. 工程根目录下新建一个html文件；2. 复制下面的基本模板内容，到这个html文件，在此基础上修改meta和引入js；3. 在 `manifest.json->h5->template` 节点中关联这个html文件的路径。
When using a custom template, 1. Create a new html file in the project root directory; 2. Copy the content of the basic template below to this html file, modify meta and import js on this basis; 3. In `manifest.json-> h5->template` The path of the associated html file in the node.
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
In the hello uni-app example, there is a `template.h5.html` file for this purpose.

**关于SEO的补充说明**
**Supplementary note about SEO**

H5平台是SPA单页应用，普通的SEO信息即加meta字段只能在，自定义的模板html里配置首页。
The H5 platform is a single-page application for SPA, and ordinary SEO information, that is, adding meta fields can only configure the homepage in the custom template html.

#### router@h5-router
#### router@h5-router
|属性|类型|默认值|说明|
|Attribute|Type|Default Value|Description|
|:-|:-|:-|:-|
|mode|String|hash|路由跳转模式，支持 hash、history|
|mode|String|hash|Route jump mode, support hash, history|
|base|String|/|应用基础路径，例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"，支持设置为相对路径 "./"|
|base|String|/|Application base path, for example, if the entire single-page application service is under /app/, then base should be set to "/app/", and it can be set to a relative path "./"|

**注意：**
**Notice:**

* `history` 模式部分浏览器器不支持，iOS微信内置浏览器无法观测到URL变动，默认分享（不使用微信[JSSDK](https://ask.dcloud.net.cn/article/35380)的情况下）的链接为入口页链接。
* Some browsers do not support the `history` mode, and the iOS WeChat built-in browser cannot observe URL changes. It is shared by default (WeChat [JSSDK](https://ask.dcloud.net.cn/article/35380) is not used) In case), the link is the entry page link.
* `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
* The release of `history` mode requires back-end configuration support, see: [Back-end configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90% 8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)


#### async@h5-async
|属性|类型|默认值|说明|
|Attribute|Type|Default Value|Description|
|:-|:-|:-|:-|
|loading|String|AsyncLoading|页面 js 加载时使用的组件（需注册为全局组件）|
|loading|String|AsyncLoading|Component used when page js is loaded (need to be registered as a global component)|
|error|String|AsyncError|页面 js 加载失败时使用的组件（需注册为全局组件）|
|error|String|AsyncError|The component used when the page js fails to load (need to be registered as a global component)|
|delay|Number|200|展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）|
|delay|Number|200|Display the delay time of loading components (If the page js is loaded within the delay time, the loading component will not be displayed)|
|timeout|Number|60000|页面 js 加载超时时间（超时后展示 error 对应的组件）|
|timeout|Number|60000|Page js loading timeout time (the component corresponding to error will be displayed after timeout)|

#### devServer
|属性|类型|默认值|说明|
|Attribute|Type|Default Value|Description|
|:-|:-|:-|:-|
|https|Boolean|false|启用 https 协议|
|https|Boolean|false|Enable https protocol|
|disableHostCheck|Boolean|false|禁用 Host 检查|
|disableHostCheck|Boolean|false|Disable Host Check|

Tips：`uni-app` 中 `manifest.json->h5->devServer` 实际上对应 `webpack` 的 [devServer](https://webpack.js.org/configuration/dev-server/)，鉴于 manifest 为 json 文件，故 `webpack.config.js->devServer` 配置项下的简单类型属性均可在`manifest.json->h5->devServer`节点下配置，funciton 等复杂类型暂不支持。
Tips: `manifest.json->h5->devServer` in `uni-app` actually corresponds to [devServer](https://webpack.js.org/configuration/dev-server/) of `webpack`, given the manifest It is a json file, so the simple type properties under the `webpack.config.js->devServer` configuration item can be configured under the `manifest.json->h5->devServer` node, and complex types such as funciton are not currently supported.

#### publicPath
配置 publicPath 为 cdn 资源地址前缀，这样编译出来的 html 文件，引用的 js，css 路径会自动变成 cdn 上的地址。
Configure publicPath as the prefix of the cdn resource address, so that the compiled html file, the referenced js, css path will automatically become the address on the cdn.

注意：如果想对图片生效，image组件的图片地址需要使用相对路径
Note: If you want to take effect on the image, the image address of the image component needs to use a relative path

**示例**
**Example**

以 hello-uniapp 发布 H5 时为例
Take hello-uniapp as an example when H5 is released

未配置 publicPath 时，发布时 index.html 中的结果：
When publicPath is not configured, the results in index.html when publishing:

```html
<script src=/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=/h5/static/js/index.34e8497d.js>
```
配置 publicPath 为 `https://www.cdn.com/h5/`（无效地址仅用作示例） 后，发布时 index.html 中的结果：
After configuring publicPath to `https://www.cdn.com/h5/` (invalid address is only used as an example), the result in index.html when publishing:

```html
<script src=https://www.cdn.com/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=https://www.cdn.com/h5/static/js/index.34e8497d.js>
```

**注意**
**Notice**
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- After packaging and deployment, open gzip on the server to further compress the files. For specific configuration, please refer to the online sharing: https://juejin.im/post/5af003286fb9a07aac24611b
#### sdkconfig@h5sdkconfig


**示例**
**Example**

```json
"h5": {
	"sdkConfigs": {
		"maps": {
			"qqmap": {
				// 腾讯地图秘钥（key）https://lbs.qq.com/dev/console/key/manage
				// Tencent map secret key (key) https://lbs.qq.com/dev/console/key/manage
				"key": ""
			}
		}
	}
}
```

#### optimization

|属性|类型|默认值|说明|
|Attribute|Type|Default Value|Description|
|:-|:-|:-|:-|
|prefetch|Boolean|false|资源预取|
|prefetch|Boolean|false|Resource prefetch|
|preload|Boolean|false|资源预加载|
|preload|Boolean|false|Resource preloading|
|treeShaking|Object||摇树优化，根据项目需求，动态打包框架所需的组件及API，保持框架代码最精简化，参考[treeShaking](collocation/manifest?id=treeshaking)|
|treeShaking|Object||Treeshaking optimization, according to project requirements, dynamically package the components and API required by the framework to keep the framework code the most streamlined and simplified, refer to [treeShaking](collocation/manifest?id=treeshaking)|

##### treeShaking

|属性|类型|默认值|说明|
|Attribute|Type|Default Value|Description|
|:-|:-|:-|:-|
|enable|Boolean|false|是否启用摇树优化|
|enable|Boolean|false|Whether to enable tree shaking optimization|

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
Tips: For the principle and optimization results of treeshaking, please refer to: [https://ask.dcloud.net.cn/article/36279](https://ask.dcloud.net.cn/article/36279)

### 关于分包优化的说明
### Notes on subcontracting optimization

- 在对应平台的配置下添加`"optimization":{"subPackages":true}`开启分包优化
- Add `"optimization":{"subPackages":true}` under the configuration of the corresponding platform to enable subpackage optimization
- 分包优化具体逻辑：
- Subcontracting optimization specific logic:
  + 静态文件：分包下支持 static 等静态资源拷贝，即分包目录内放置的静态资源不会被打包到主包中，也不可在主包中使用
  + Static files: The copy of static resources such as static is supported under sub-packages, that is, static resources placed in the sub-package directory will not be packaged into the main package, and cannot be used in the main package.
  + js文件：当某个 js 仅被一个分包引用时，该 js 会被打包到该分包内，否则仍打到主包（即被主包引用，或被超过 1 个分包引用）
  + js file: When a js is only referenced by one subpackage, the js will be packaged into the subpackage, otherwise it will still be included in the main package (ie, referenced by the main package, or referenced by more than 1 subpackage)
  + 自定义组件：若某个自定义组件仅被一个分包引用时，且未放入到分包内，编译时会输出提示信息
  + Custom components: If a custom component is only referenced by one subpackage and is not included in the subpackage, a prompt message will be output when compiling
**分包内静态文件示例**
**Example of static files in sub-package**

```
"subPackages": [{
	"root": "pages/sub",
	"pages": [{
		"path": "index/index"
	}]
}]
```

以上面的分包为例，放在每个分包root对应目录下的静态文件会被打包到此分包内。
Taking the above sub-package as an example, the static files placed in the directory corresponding to the root of each sub-package will be packaged into this sub-package.

### 完整 manifest.json
### Complete manifest.json

```javascript
{
    "appid": "__UNI__XXXXXX，创建应用时云端分配的，不要修改。(__UNI__XXXXXX, assigned by the cloud when creating the application, do not modify it.)",
    "name": "应用名称，如uni-app(Application name, such as uni-app)",
    "description": "应用描述(Application description)",
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
            "Statistic": {},
            "VideoPlayer": {},
            "LivePusher": {}
        },
        "distribute": {
            "android": {
                "packagename": "Android应用包名，如io.dcloud.uniapp(Android application package name, such as io.dcloud.uniapp)",
                "keystore": "Android应用打包使用的密钥库文件(The keystore file used by Android application packaging)",
                "password": "Android应用打包使用密钥库中证书的密码(Android application packaging uses the password of the certificate in the keystore)",
                "aliasname": "Android应用打包使用密钥库中证书的别名(Android application packaging uses the alias of the certificate in the keystore)",
                "schemes": [
                    "应用支持的scheme，大小写相关，推荐使用小写(The scheme supported by the application, case-sensitive, lowercase is recommended)"
                ],
                "theme": "程序使用的主题(Theme used by the program)",
                "android:name": "自定义程序入口类名(Custom program entry class name)",
                "custompermissions": "Boolean类型，是否自定义android权限，true表示自定义权限，只使用permissions下指定的android权限，不根据用户使用的5+模块自动添加android权限，false表示自动根据用户使用的5+模块自动添加android权限(Boolean type, whether to customize android permissions, true means custom permissions, only use the android permissions specified under permissions, do not automatically add android permissions based on the 5+ modules used by the user, false means automatically add android based on the 5+ modules used by the user Authority)",
                "permissions": [
                    "要添加的额外的android权限，如<uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\" />(Additional android permissions to be added, such as <uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\" />)",
                    "<uses-permission android:name=\"com.android.launcher.permission.UNINSTALL_SHORTCUT\" />"
                ],
                "minSdkVersion": "apk支持的最低版本，默认值为14(The minimum version supported by apk, the default value is 14)",
                "targetSdkVersion": "apk的目标版本，默认值为21(The target version of the apk, the default value is 21)"
            },
            "ios": {
                "appid": "iOS应用标识，苹果开发网站申请的appid，如io.dcloud.uniapp(iOS application ID, the appid applied by Apple's development website, such as io.dcloud.uniapp)",
                "mobileprovision": "iOS应用打包配置文件(iOS application packaging configuration file)",
                "password": "iOS应用打包个人证书导入密码(iOS application packaging personal certificate import password)",
                "p12": "iOS应用打包个人证书，打包配置文件关联的个人证书(iOS application package personal certificate, package the personal certificate associated with the configuration file)",
                "devices": "iOS应用支持的设备类型，可取值iphone/ipad/universal(The device type supported by the iOS application, which can be iphone/ipad/universal)",
                "urltypes": [
                    {
                        "urlidentifier": "com.xxx.test",
                        "urlschemes": [
                            "hbuilder"
                        ]
                    }
                ],
                "frameworks": [
                    "使用native.js调用API要引用的库文件名称，如CoreLocation.framework(The name of the library file to be referenced by using native.js to call the API, such as CoreLocation.framework)",
                    "QuartzCore.framework"
                ],
                "idfa": "true|false，是否使用广告标识符，默认值为false(true|false, whether to use the advertising identifier, the default value is false)",
                "plistcmds": [
                    "Set :权限 使用权限的原因(Permission Reason for using permission)",
                    "Set :NSCameraUsageDescription 说明使用用户相机的原因(NSCameraUsageDescription explains the reason for using the user's camera)"
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
                "push": {
                    "igexin": {
                        "appid": "",
                        "appkey": "",
                        "appsecret": ""
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
                },
                "statics": {
                    "umeng": {
                        "appkey_ios": "",
                        "channelid_ios": "",
                        "appkey_android": "",
                        "channelid_android": ""
                    }
                }
            },
            "icons": {
                "ios": {
                    "appstore": "必选, 1024x1024, 提交app sotre使用的图标(Required, 1024x1024, submit the icon used by the app store)",
                    "iphone": {
                        "app@2x": "可选，120x120，iOS7-11程序图标（iPhone4S/5/6/7/8）(Optional, 120x120, iOS7-11 program icon (iPhone4S/5/6/7/8))",
                        "app@3x": "可选，180x180，iOS7-11程序图标（iPhone6plus/7plus/8plus/X）(Optional, 180x180, iOS7-11 program icon (iPhone6plus/7plus/8plus/X))",
                        "spotlight@2x": "可选，80x80，iOS7-11 Spotlight搜索图标（iPhone5/6/7/8）(Optional, 80x80, iOS7-11 Spotlight search icon (iPhone5/6/7/8))",
                        "spotlight@3x": "可选，120x120，iOS7-11 Spotlight搜索图标（iPhone6plus/7plus/8plus/X）(Optional, 120x120, iOS7-11 Spotlight search icon (iPhone6plus/7plus/8plus/X))",
                        "settings@2x": "可选，58x58，iOS5-11 Settings设置图标（iPhone5/6/7/8）(Optional, 58x58, iOS5-11 Settings setting icon (iPhone5/6/7/8))",
                        "settings@3x": "可选，87x87，iOS5-11 Settings设置图标（iPhone6plus/7plus/8plus/X）(Optional, 87x87, iOS5-11 Settings setting icon (iPhone6plus/7plus/8plus/X))",
                        "notification@2x": "可选，40x40，iOS7-11 通知栏图标（iPhone5/6/7/8）(Optional, 40x40, iOS7-11 notification bar icon (iPhone5/6/7/8))",
                        "notification@3x": "可选，60x60，iOS7-11 通知栏图标（iPhone6plus/7plus/8plus/X）(Optional, 60x60, iOS7-11 notification bar icon (iPhone6plus/7plus/8plus/X))"
                    },
                    "ipad": {
                        "app": "可选，76x76，iOS7-11程序图标(Optional, 76x76, iOS7-11 program icon)",
                        "app@2x": "可选，152x152，iOS7-11程序图标（高分屏）(Optional, 152x152, iOS7-11 program icon (high score screen))",
                        "proapp@2x": "可选，167x167，iOS9-11程序图标（iPad Pro）(Optional, 167x167, iOS9-11 program icon (iPad Pro))",
                        "spotlight": "可选，40x40，iOS7-11 Spotlight搜索图标(Optional, 40x40, iOS7-11 Spotlight search icon)",
                        "spotlight@2x": "可选，80x80，iOS7-11 Spotlight搜索图标（高分屏）(Optional, 80x80, iOS7-11 Spotlight search icon (high score screen))",
                        "settings": "可选，29x29，iOS5-11 设置图标(Optional, 29x29, iOS5-11 setting icon)",
                        "settings@2x": "可选，58x58，iOS5-11 设置图标（高分屏）(Optional, 58x58, iOS5-11 setting icon (high score screen))",
                        "notification": "可选，20x20，iOS7-11 通知栏图标(Optional, 20x20, iOS7-11 notification bar icon)",
                        "notification@2x": "可选，40x40，iOS7-11 通知栏图标（高分屏）(Optional, 40x40, iOS7-11 notification bar icon (high score screen))"
                    }
                },
                "android": {
                    "mdpi": "必选，48x48，普通屏程序图标(Required, 48x48, normal screen program icon)",
                    "ldpi": "必选，48x48，大屏程序图标(Required, 48x48, large-screen program icon)",
                    "hdpi": "必选，72x72，高分屏程序图标(Mandatory, 72x72, high score screen program icon)",
                    "xhdpi": "必选，96x96，720P高分屏程序图标(Required, 96x96, 720P high-resolution screen program icon)",
                    "xxhdpi": "必选，144x144，1080P高分屏程序图标(Required, 144x144, 1080P high-resolution screen program icon)",
                    "xxxhdpi": "可选，192x192(Optional, 192x192)"
                }
            },
            "splashscreen": {
                "ios": {
                    "iphone": {
                        "retina35": "可选，640x960，3.5英寸设备(iPhone4)启动图片(Optional, 640x960, 3.5-inch device (iPhone4) startup picture)",
                        "retina40": "可选，640x1136，4.0英寸设备(iPhone5)启动图片(Optional, 640x1136, 4.0-inch device (iPhone5) startup picture)",
                        "retina40l": "可选，1136x640，4.0英寸设备(iPhone5)横屏启动图片(Optional, 1136x640, 4.0-inch device (iPhone5) landscape startup picture)",
                        "retina47": "可选，750x1334，4.7英寸设备（iPhone6）启动图片(Optional, 750x1334, 4.7-inch device (iPhone6) startup picture)",
                        "retina47l": "可选，1334x750，4.7英寸设备（iPhone6）横屏启动图片(Optional, 1334x750, 4.7-inch device (iPhone6) landscape startup picture)",
                        "retina55": "可选，1242x2208，5.5英寸设备（iPhone6Plus）启动图片(Optional, 1242x2208, 5.5-inch device (iPhone6Plus) startup picture)",
                        "retina55l": "可选，2208x1242，5.5英寸设备（iPhone6Plus）横屏启动图片(Optional, 2208x1242, 5.5-inch device (iPhone6Plus) horizontal screen startup picture)",
                        "iphonex": "可选，1125x2436，iPhoneX启动图片(可选，1125x2436，iPhoneX启动图片)",
                        "iphonexl": "可选，2436x1125，iPhoneX横屏启动图片(Optional, 2436x1125, iPhoneX landscape startup picture)"
                    },
                    "ipad": {
                        "portrait": "可选，768x1004，需支持iPad时必选，iPad竖屏启动图片(Optional, 768x1004, required if you need to support iPad, iPad vertical screen startup picture)",
                        "portrait-retina": "可选，1536x2008，需支持iPad时必选，iPad高分屏竖屏图片(Optional, 1536x2008, required if you need to support iPad, iPad high-resolution vertical screen picture)",
                        "landscape": "可选，1024x748，需支持iPad时必选，iPad横屏启动图片(Optional, 1024x748, required when supporting iPad, iPad landscape startup picture)",
                        "landscape-retina": "可选，2048x1496，需支持iPad时必选，iPad高分屏横屏启动图片(Optional, 2048x1496, required when supporting iPad, iPad high score screen horizontal screen startup picture)",
                        "portrait7": "可选，768x1024，需支持iPad iOS7时必选，iPad竖屏启动图片(Optional, 768x1024, required when supporting iPad iOS7, iPad vertical screen startup image)",
                        "portrait-retina7": "可选，1536x2048，需支持iPad iOS7时必选，iPad高分屏竖屏图片(Optional, 1536x2048, required when supporting iPad iOS7, iPad high score screen portrait)",
                        "landscape7": "可选，1024x768，需支持iPad iOS7时必选，iPad横屏启动图片(Optional, 1024x768, required when supporting iPad iOS7, iPad landscape startup picture)",
                        "landscape-retina7": "可选，2048x1536，需支持iPad iOS7时必选，iPad高分屏横屏启动图片(Optional, 2048x1536, required when supporting iPad iOS7, iPad high score screen horizontal screen startup picture)"
                    }
                },
                "android": {
                    "mdpi": "Required, 240x282, normal screen startup picture",
                    "ldpi": "Mandatory, 320x442, large screen startup picture",
                    "hdpi": "Mandatory, 480x762, high-score screen startup picture",
                    "xhdpi": "Mandatory, 720x1242, 720P high-score screen startup picture",
                    "xxhdpi": "Mandatory, 1080x1882, 1080P high-score screen startup picture"
                }
            }
        },
        "splashscreen": {
            "waiting": true,
            "autoclose": true
        },
        "error": {
            "url": "页面加载错误时打开的页面地址，可以是网络地址，也可以是本地地址(The address of the page opened when the page is loaded incorrectly, which can be a network address or a local address)"
        },
        "useragent": {
            "value": "自定义ua字符串(Custom ua string)",
            "concatenate": "是否为追加模式(Whether it is append mode)"
        },
        "useragent_ios": {
            "value": "与useragent的value一致，仅在iOS平台生效，当useragent和useragent_ios同时存在时优先级useragent_ios>useragent(Consistent with the value of useragent, it only takes effect on the iOS platform. When useragent and useragent_ios exist at the same time, the priority is useragent_ios>useragent)",
            "concatenate": "与useragent的concatenate一致，仅iOS平台生效(Consistent with useragent's concatenate, only valid for iOS platform)"
        },
        "useragent_android": {
            "value": "与useragent的value一致，仅在Android平台生效，当useragent和useragent_android同时存在时优先级useragent_android>useragent(Consistent with the value of useragent, it only takes effect on the Android platform. When useragent and useragent_android exist at the same time, the priority is useragent_android>useragent)",
            "concatenate": "与useragent的concatenate一致，仅Android平台生效(Consistent with useragent's concatenate, only valid for Android platform)"
        },
        "ssl": "accept|refuse|warning，访问https网络时对非受信证书的处理逻辑(accept|refuse|warning, the processing logic for untrusted certificates when accessing the https network)",
        "runmode": "normal",
        "appWhitelist": [
            "Android平台下载apk地址白名单列表(Android platform download apk address whitelist list)",
            "iOS平台跳转appstore地址白名单列表(The iOS platform jumps to the appstore address whitelist list)"
        ],
        "schemeWhitelist": [
            "URL Scheme白名单列表，如：mqq(URL Scheme whitelist list, such as: mqq)"
        ],
        "channel": "渠道标记，可在DCloud开发者中心查看各渠道应用的统计数据(Channel tag, you can view the statistical data of each channel application in the DCloud Developer Center)",
        "adid": "广告联盟会员id，在DCloud开发者中心申请后填写(Advertising alliance member id, fill in after application in DCloud Developer Center)",
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
        "title": "演示(Demo)",
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
For more configuration related instructions, please refer to the description in [manifest.json document description](https://ask.dcloud.net.cn/article/94). The location of the node may be different from that of the ordinary App, please follow the configured name to correspond.

# FAQ
Q：iOS 应用调用相机等权限时，弹出的提示语如何修改？
Q: How to modify the prompt that pops up when the iOS app calls the camera and other permissions?
A：在 manifest.json 可视化界面-App模块权限配置-iOS隐私信息访问的许可描述
A: In the manifest.json visual interface-App module permission configuration-iOS privacy information access permission description
