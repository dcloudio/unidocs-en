### uni.getSystemInfo(OBJECT)
获取系统信息。
Get System Information.

**OBJECT 参数说明：**
**OBJECT Parameter description**

|参数名|类型|必填|说明|
|Argument Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功的回调|
|success|Function|yes|A successful callback to the interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|The interface calls the callback function that failed|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success 返回参数说明：**
**success Return parameter description**

|参数|说明|平台差异说明|
|Attribute|Description|Platform difference description|
|:-|:-|:-|
|brand|设备品牌|App|
|brand|Mobile phone brand||
|model|设备型号|全平台支持。H5（3.1.10+）新增`PC`|
|model|Mobile phone models|Full platform support. H5（3.1.10+）added `PC`|
|pixelRatio|设备像素比||
|pixelRatio|Device pixel ratio||
|screenWidth|屏幕宽度||
|screenWidth|The screen width||
|screenHeight|屏幕高度||
|screenHeight|The screen height||
|windowWidth|可使用窗口宽度||
|windowWidth|Window widths are available||
|windowHeight|可使用窗口高度||
|windowHeight|Window height can be used||
|windowTop|可使用窗口的顶部位置|App、H5|
|windowTop|The top position of the window is available||
|windowBottom|可使用窗口的底部位置|App、H5|
|windowBottom|The bottom position of the window is available||
|statusBarHeight|状态栏的高度||
|statusBarHeight|The height of the status bar||
|language|应用设置的语言||
|language|App settings language||
|version|引擎版本号|H5不支持|
|version|Engine version number|H5 not supported|
|system|操作系统名称及版本，如Android 10||
|system|Operating system version, like Android 10||
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|platform|Client platform,optional value: `ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|SDKVersion|客户端基础库版本|H5不支持|
|SDKVersion|Client base library version|H5 not supported|
|safeArea|在竖屏正方向下的安全区域|App、H5|
|safeArea|在竖屏正方向下的安全区域||
|safeAreaInsets|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、H5|
|safeArea|The safe area in the vertical direction||
|deviceId|设备 id|非 App 端由 uni-app 框架生成并存储，清空 Storage 会导致改变|
|deviceId|device id|The non-App side is generated and stored by the uni-app framework. Clearing Storage will cause changes||

**Tips**
- 屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
- The screen height = Native Navigation Bar height （Including status bar height）+ Window height can be used + Native Tab Bar height
- windowHeight不包含NavigationBar和TabBar的高度
- windowHeightdo not contain the height of NavigationBar and TabBar
- H5端，windowTop等于NavigationBar高度，windowBottom等于TabBar高度
- H5, windowTop is equal to the height of NavigationBar, windowBottom is equal to the height of TabBar
- App端，windowTop等于透明状态NavigationBar高度，windowBottom等于透明状态TabBar高度
- App, windowTop height equals height of transparent NavigationBar,windowBottom height equals height of transparent TabBar
- 高度相关信息，要放在 onReady 里获取
- Height information, should obtain through onReady

**safeArea 的结构**
**safeArea structure**

|参数	|类型	|说明							|
|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
|left	|Number	|The upper left abscissa of the security area			|
|right	|Number	|安全区域右下角横坐标			|
|right	|Number	|Abscissa at the lower right corner of the security zone			|
|top	|Number	|安全区域左上角纵坐标			|
|top	|Number	|Upper left ordinate of the security area			|
|bottom	|Number	|安全区域右下角纵坐标			|
|bottom	|Number	|The vertical axis of the lower right corner of the safety zone			|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|width	|Number	|The width of the safe area, unit: pixel	|
|height	|Number	|安全区域的高度，单位逻辑像素	|
|height	|Number	|The height of the safe zone, unit: pixel	|

**safeAreaInsets 的结构**
**safeAreaInsets structure**

|参数	|类型	|说明							|
|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
|left	|Number	|Left insert position of safe zone			|
|right	|Number	|安全区域右侧插入位置			|
|right	|Number	|Insert position on the right side of safe zone			|
|top	|Number	|安全区顶部插入位置			|
|top	|Number	|Safety zone top insertion position			|
|bottom	|Number	|安全区域底部插入位置			|
|bottom	|Number	|Safety zone bottom insertion position			|


**示例**
**Example**

```javascript
uni.getSystemInfo({
	success: function (res) {
		console.log(res.model);
		console.log(res.pixelRatio);
		console.log(res.windowWidth);
		console.log(res.windowHeight);
		console.log(res.language);
		console.log(res.version);
		console.log(res.platform);
	}
});
```

### uni.getSystemInfoSync()
获取系统信息同步接口。
Get system information synchronization interface.

**同步返回参数说明**
**synchronization Return parameter description**

|参数|说明|平台差异说明|
|Attribute|Description|Platform difference description|
|:-|:-|:-|
|brand|设备品牌|App|
|brand|Mobile phone brand||
|model|设备型号|全平台支持。H5（3.1.10+）新增`PC`|
|model|Mobile phone models|Full platform support. H5（3.1.10+）added `PC`|
|pixelRatio|设备像素比||
|pixelRatio|Device pixel ratio||
|screenWidth|屏幕宽度||
|screenWidth|The screen width||
|screenHeight|屏幕高度||
|screenHeight|The screen height||
|windowWidth|可使用窗口宽度||
|windowWidth|Window widths are available||
|windowHeight|可使用窗口高度||
|windowHeight|Window height can be used||
|windowTop|可使用窗口的顶部位置|App、H5|
|windowTop|The top position of the window is available||
|windowBottom|可使用窗口的底部位置|App、H5|
|windowBottom|The bottom position of the window is available||
|statusBarHeight|状态栏的高度||
|statusBarHeight|The height of the status bar||
|language|应用设置的语言||
|language|App settings language||
|version|引擎版本号|H5不支持|
|version|Engine version number|H5 not supported|
|system|操作系统版本||
|system|Operating system version, like Android 10||
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|platform|Client platform,optional value: `ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
|SDKVersion|客户端基础库版本|H5不支持|
|SDKVersion|Client base library version|H5 not supported|
|safeArea|在竖屏正方向下的安全区域|App、H5|
|safeArea|The safe area in the vertical direction||
|safeAreaInsets|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、H5|
|deviceId|设备 id|非 App 端由 uni-app 框架生成并存储，清空 Storage 会导致改变|
|deviceId|device id|The non-App side is generated and stored by the uni-app framework. Clearing Storage will cause changes||

**Tips**
- 使用注意同上getSystemInfo
- Use note the same as above getSystemInfo

**safeArea 的结构**
**safeArea structure**

|参数	|类型	|说明							|
|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
|left	|Number	|The upper left abscissa of the security area			|
|right	|Number	|安全区域右下角横坐标			|
|right	|Number	|Abscissa at the lower right corner of the security zone			|
|top	|Number	|安全区域左上角纵坐标			|
|top	|Number	|Upper left ordinate of the security area			|
|bottom	|Number	|安全区域右下角纵坐标			|
|bottom	|Number	|The vertical axis of the lower right corner of the safety zone			|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
|width	|Number	|The width of the safe area, unit: pixel	|
|height	|Number	|安全区域的高度，单位逻辑像素	|
|height	|Number	|The height of the safe zone, unit: pixel	|

**safeAreaInsets 的结构**
**safeAreaInsets structure**

|参数	|类型	|说明							|
|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
|left	|Number	|Left insert position of safe zone			|
|right	|Number	|安全区域右侧插入位置			|
|right	|Number	|Insert position on the right side of safe zone			|
|top	|Number	|安全区顶部插入位置			|
|top	|Number	|Safety zone top insertion position			|
|bottom	|Number	|安全区域底部插入位置			|
|bottom	|Number	|Safety zone bottom insertion position			|

**示例**
**Example**

```javascript
try {
	const res = uni.getSystemInfoSync();
	console.log(res.model);
	console.log(res.pixelRatio);
	console.log(res.windowWidth);
	console.log(res.windowHeight);
	console.log(res.language);
	console.log(res.version);
	console.log(res.platform);
} catch (e) {
	// error
}
```


**获取设备标记**
**Get device mark**

H5、iOS，属于对用户隐私保护比较严格的平台，在这些平台很难获取有效的设备唯一标记。
H5 and iOS are platforms with strict protection of user privacy, and it is difficult to obtain a valid device unique mark on these platforms.

Android已经改进用户隐私保护，在很多新手机上，获取imei等信息时需要弹框让用户授权。而Android10已经无法获取imei了。
Android has improved user privacy protections,On a lot of new devices,When obtaining information such as IMEI, pop-up box is required for user authorization.IMEI is no longer available for Android 10.

- H5平台：
- H5 platform:
常用的方式是uv，即在uni.storage里存一个随机数，本质是存在浏览器的localstorage里。将随机数发给服务器，进行用户身份识别和统计。当然如果用户浏览器清空了localstorage、更换了浏览器、或使用隐私模式，那么就统计数据就会有误差。
The commonly used method is uv, that is, storing a random number in uni.storage, which is essentially stored in the browser's localstorage. Send the random number to the server for user identification and statistics. Of course, if the user's browser empties the localstorage, changes the browser, or uses the privacy mode, there will be errors in the statistical data.
- App iOS平台：
- App iOS platform:
iOS并不提供imei的获取API，可通过[plus.device.getInfo](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) 可以获得设备的唯一标识（uuid），这个id其实也是一种随机数概念，类似于h5的uv计算，卸载app重装会发生变化；
iOS does not provide a API to get IMEI, Can use [plus.device.getInfo](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo). you can obtain the unique identity of the device (UUID),In fact, this ID is also a random number concept, similar to the UV calculation of H5. Uninstall APP and reinstall will change.

iOS还有一个叫`idfa`的广告识别符，可通过Native.js获取，详见：[idfa介绍](https://ask.dcloud.net.cn/article/36107)。
iOS also has an AD identifier called `idfa`,It is available through native.js. Details: [idfa Introduction](https://ask.dcloud.net.cn/article/36107)。

- App Android平台：
- App Android platform:
Android也可以使用UUID，同iOS。
Android can use UUID, like iOS.

Android10以下可以得到imei，在[plus.device.getInfo](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) 可以获得设备的国际移动设备身份码（imei）。注意很多新手机在获取imei时会弹框要求用户授权。
You can get imei below Android10, in [plus.device.getInfo](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo) The International Mobile Device Identity Number (IMEI) can be obtained for the device. Note that many new phones will pop up to ask for user authorization when obtaining IMEI.

Android10以上，部分国产手机支持OAID，详见[匿名设备标识符（OAID）](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)
Android10 and above, Some Chinese mobile phones support OAID, Details: [Anonymous device identifier (OAID)](http://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)

`plus.device.getInfo`的API是从HBuilderX 2.0.3+开始提供的，老版需使用plus.devide.uuid或plus.device.imei。
`plus.device.getInfo` API for HBuilderX is available from HBuilderX 2.0.3+,The old version needs used plus.devide.uuid或plus.device.imei.

### uni.canIUse(String)
判断应用的 API，回调，参数，组件等是否在当前版本可用。
Determine if the application's API, callbacks, parameters, components, etc. are available in the current version.

平台差异说明
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|x|

**String 参数说明**
**String Parameter Descriptiion**

使用 ``${API}.${method}.${param}.${options}`` 或者 ``${component}.${attribute}.${option}`` 方式来调用，例如：
Use ``${API}.${method}.${param}.${options}`` or ``${component}.${attribute}.${option}`` method to call,suchAs:

- ``${API}`` 代表 API 名字 
- ``${API}`` Represents the API name
- ``${method}`` 代表调用方式，有效值为return, success, object, callback
- ``${method}`` Represents the invocation mode,有效值为return, success, object, callback
- ``${param}`` 代表参数或者返回值
- ``${param}`` Represents a parameter or return value
- ``${options}`` 代表参数的可选值
- ``${options}`` Represents the optional value of a parameter
- ``${component}`` 代表组件名字
- ``${component}`` Represents the component name
- ``${attribute}`` 代表组件属性
- ``${attribute}`` Represents component properties
- ``${option}`` 代表组件属性的可选值
- ``${option}`` An optional value representing a component property

**示例**
**Exemple**

```javascript
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```
