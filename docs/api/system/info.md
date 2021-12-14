### uni.getSystemInfo(OBJECT)
获取系统信息。
Get system information.

**OBJECT 参数说明：**
**OBJECT parameter description:**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|是|接口调用成功的回调|
| success| Function| Yes| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-|:-|:-|
|brand|设备品牌|App|
| brand| Device brand| App|
|model|设备型号|全平台支持。H5（3.1.10+）新增`PC`|
| model| Device model| Supported on all platforms. Added `PC` on the H5 (3.1.10+) side|
|pixelRatio|设备像素比||
| pixelRatio| Device pixel ratio| |
|screenWidth|屏幕宽度||
| screenWidth| Screen width| |
|screenHeight|屏幕高度||
| screenHeight| Screen height| |
|windowWidth|可使用窗口宽度||
| windowWidth| Usable window width| |
|windowHeight|可使用窗口高度||
| windowHeight| Usable window height| |
|windowTop|可使用窗口的顶部位置|App、H5|
| windowTop| Window top can be used| App, H5|
|windowBottom|可使用窗口的底部位置|App、H5|
| windowBottom| Window bottom can be used| App, H5|
|statusBarHeight|状态栏的高度||
| statusBarHeight| Height of the status bar| |
|language|应用设置的语言||
| language| App settings language| |
|version|引擎版本号|H5不支持|
| version| Engine version number| not supported by H5|
|system|操作系统名称及版本，如Android 10||
| system| Name and version of operating system, such as Android 10| |
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
| platform| Client platform, the value range is: `ios`, `android`, `mac（3.1.10+）`, `windows（3.1.10+）`, `linux（3.1.10+）`| |
|SDKVersion|客户端基础库版本|H5不支持|
| SDKVersion| Client base library version| not supported by H5|
|safeArea|在竖屏正方向下的安全区域|App、H5|
| safeArea| Safe area in primary direction of the portrait screen| App, H5|
|safeAreaInsets|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、H5|
| safeAreaInsets| Insert position in the safe area in primary direction of the portrait screen (2.5.3+)| App, H5|
|deviceId|设备 id|非 App 端由 uni-app 框架生成并存储，清空 Storage 会导致改变|
| deviceId| Device id| The non-App side is generated and stored by the uni-app framework, and emptying the Storage will make it change|

**Tips**
- 屏幕高度 = 原生NavigationBar高度（含状态栏高度）+ 可使用窗口高度 + 原生TabBar高度
- Screen height = native NavigationBar height (including status bar height) + available window height + native TabBar height
- windowHeight不包含NavigationBar和TabBar的高度
- windowHeight does not include the heights of NavigationBar and TabBar
- H5端，windowTop等于NavigationBar高度，windowBottom等于TabBar高度
- For H5, windowTop is equal to NavigationBar height, windowBottom is equal to TabBar height.
- App端，windowTop等于透明状态NavigationBar高度，windowBottom等于透明状态TabBar高度
- For App, windowTop is equal to the height of  NavigationBar in transparent state and windowBottom is equal to the height of TabBar in transparent state
- 高度相关信息，要放在 onReady 里获取
- Height-related information should be obtained from onReady

**safeArea 的结构**
**Structure of safeArea**

|参数	|类型	|说明							|
| Parameter| Type| Instruction|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
| left| Number| Abscissa of upper left corner in safety area|
|right	|Number	|安全区域右下角横坐标			|
| right| Number| Abscissa of lower right corner in safety area|
|top	|Number	|安全区域左上角纵坐标			|
| top| Number| Ordinate of upper left corner in safety area|
|bottom	|Number	|安全区域右下角纵坐标			|
| bottom| Number| Ordinate of lower right corner in safety area|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
| width| Number| Width of safe area, in logical pixel|
|height	|Number	|安全区域的高度，单位逻辑像素	|
| height| Number| Height of safe area, in logical pixel|

**safeAreaInsets 的结构**
**Sstructure of safeAreaInsets**

|参数	|类型	|说明							|
| Parameter| Type| Instruction|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
| left| Number| Insert position of left side in safety area|
|right	|Number	|安全区域右侧插入位置			|
| right| Number| Insert position of right side in safety area|
|top	|Number	|安全区顶部插入位置			|
| top| Number| Insert location at the top of the safety zone|
|bottom	|Number	|安全区域底部插入位置			|
| bottom| Number| Insert position of bottom side in safety area|


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
Get the system information synchronization interface.

**同步返回参数说明**
**Synchronous return parameter description**

|参数|说明|平台差异说明|
| Parameter| Instruction| Platform difference description|
|:-|:-|:-|
|brand|设备品牌|App|
| brand| Device brand| App|
|model|设备型号|全平台支持。H5（3.1.10+）新增`PC`|
| model| Device model| Supported on all platforms. Added `PC` on the H5 (3.1.10+) side|
|pixelRatio|设备像素比||
| pixelRatio| Device pixel ratio| |
|screenWidth|屏幕宽度||
| screenWidth| Screen width| |
|screenHeight|屏幕高度||
| screenHeight| Screen height| |
|windowWidth|可使用窗口宽度||
| windowWidth| Usable window width| |
|windowHeight|可使用窗口高度||
| windowHeight| Usable window height| |
|windowTop|可使用窗口的顶部位置|App、H5|
| windowTop| Window top can be used| App, H5|
|windowBottom|可使用窗口的底部位置|App、H5|
| windowBottom| Window bottom can be used| App, H5|
|statusBarHeight|状态栏的高度||
| statusBarHeight| Height of the status bar| |
|language|应用设置的语言||
| language| App settings language| |
|version|引擎版本号|H5不支持|
| version| Engine version number| not supported by H5|
|system|操作系统版本||
| system| Operating system version| |
|platform|客户端平台，值域为：`ios`、`android`、`mac（3.1.10+）`、`windows（3.1.10+）`、`linux（3.1.10+）`||
| platform| Client platform, the value range is: `ios`, `android`, `mac（3.1.10+）`, `windows（3.1.10+）`, `linux（3.1.10+）`| |
|SDKVersion|客户端基础库版本|H5不支持|
| SDKVersion| Client base library version| not supported by H5|
|safeArea|在竖屏正方向下的安全区域|App、H5|
| safeArea| Safe area in primary direction of the portrait screen| App, H5|
|safeAreaInsets|在竖屏正方向下的安全区域插入位置（2.5.3+）|App、H5|
| safeAreaInsets| Insert position in the safe area in primary direction of the portrait screen (2.5.3+)| App, H5|
|deviceId|设备 id|非 App 端由 uni-app 框架生成并存储，清空 Storage 会导致改变|
| deviceId| Device id| The non-App side is generated and stored by the uni-app framework, and emptying the Storage will make it change|

**Tips**
- 使用注意同上getSystemInfo
- Using tips are as above getSystemInfo

**safeArea 的结构**
**Structure of safeArea**

|参数	|类型	|说明							|
| Parameter| Type| Instruction|
|:-		|:-								|:-								|
|left	|Number	|安全区域左上角横坐标			|
| left| Number| Abscissa of upper left corner in safety area|
|right	|Number	|安全区域右下角横坐标			|
| right| Number| Abscissa of lower right corner in safety area|
|top	|Number	|安全区域左上角纵坐标			|
| top| Number| Ordinate of upper left corner in safety area|
|bottom	|Number	|安全区域右下角纵坐标			|
| bottom| Number| Ordinate of lower right corner in safety area|
|width	|Number	|安全区域的宽度，单位逻辑像素	|
| width| Number| Width of safe area, in logical pixel|
|height	|Number	|安全区域的高度，单位逻辑像素	|
| height| Number| Height of safe area, in logical pixel|

**safeAreaInsets 的结构**
**Sstructure of safeAreaInsets**

|参数	|类型	|说明							|
| Parameter| Type| Instruction|
|:-		|:-								|:-								|
|left	|Number	|安全区域左侧插入位置			|
| left| Number| Insert position of left side in safety area|
|right	|Number	|安全区域右侧插入位置			|
| right| Number| Insert position of right side in safety area|
|top	|Number	|安全区顶部插入位置			|
| top| Number| Insert location at the top of the safety zone|
|bottom	|Number	|安全区域底部插入位置			|
| bottom| Number| Insert position of bottom side in safety area|

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

### uni.canIUse(String)
判断应用的 API，回调，参数，组件等是否在当前版本可用。
Determine whether the applied APIs, callbacks, parameters, components, etc. are available in the current version.

平台差异说明
Platform difference description

|App|H5|
|:-:|:-:|
|√|x|

**String 参数说明**
**String Parameter Description**

使用 ``${API}.${method}.${param}.${options}`` 或者 ``${component}.${attribute}.${option}`` 方式来调用，例如：
Use `${API}.${method}.${param}.${options}` or `${component}.${attribute}.${option}` to call, for example:

- ``${API}`` 代表 API 名字
- `${API}` represents the API name
- ``${method}`` 代表调用方式，有效值为return, success, object, callback
- `${method}` represents the calling method. Valid values are return, success, object, callback
- ``${param}`` 代表参数或者返回值
- `${param}` represents a parameter or return value
- ``${options}`` 代表参数的可选值
- `${options}` represents the optional value of the parameter
- ``${component}`` 代表组件名字
- `${component}` represents the component name
- ``${attribute}`` 代表组件属性
- `${attribute}` represents component attributes
- ``${option}`` 代表组件属性的可选值
- `${option}` represents an optional value of a component attribute

**示例**
**Example**

```javascript
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```
