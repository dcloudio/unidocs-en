## uni.getDeviceInfo()

获取设备基础信息
Get basic device information

|App|H5|微信小程序|支付宝小程序|抖音小程序|快手小程序|QQ小程序|百度小程序|京东小程序|钉钉小程序|飞书小程序|元服务|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-:|
|√ `(3.4.13+)`|√ `(3.4.13+)`|√ `(2.20.1+)`|x|x|x|x|x|x|x|x|x|

<!-- UNIAPPAPIJSON.getDeviceInfo.compatibility -->

**返回参数说明**
**Return parameter description**

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|deviceBrand|string|设备品牌。如：`apple`、`huawei`|`H5 不支持`|
|deviceBrand|string|The device brand. For example: `apple`, `huawei`|`H5 does not support`|
|deviceId|string|设备 id	。由 uni-app 框架生成并存储，清空 Storage 会导致改变||
|deviceId|string|The device id. Generated and stored by the uni-app framework, emptying the Storage will cause changes||
|deviceModel|string|设备型号||
|deviceModel|string|Device Model||
|deviceType|string|设备类型`phone`、`pad`、`pc`||
|deviceOrientation|string|设备方向 `竖屏 portrait`、`横屏 landscape`|`App、H5`。微信小程序请使用 [`getSystemInfo Api`](/api/system/info.html) 获取|
|devicePixelRatio|string|设备像素比|`App、H5`。微信小程序请使用 [`getSystemInfo Api`](/api/system/info.html) 获取|
|system|string|操作系统及版本||
|platform|string|客户端平台||
|osName|string|系统名称|HBuilderX 4.32+，`weixin 4.33`支持|
|osVersion|string|操作系统版本。如 ios 版本，andriod 版本|HBuilderX 4.32+，`weixin 4.33`支持|
|osLanguage|string|操作系统语言|HBuilderX 4.32+，`H5、weixin` 不支持|
|osTheme|string|操作系统主题|HBuilderX 4.32+，`H5、weixin` 不支持|
|romName|string|rom 名称。Android 部分机型获取不到值。iOS 恒为 `ios`|HBuilderX 4.32+，`H5、weixin` 不支持|
|romVersion|string|rom 版本号。Android 部分机型获取不到值。iOS 为操作系统版本号（同 `osVersion`）|HBuilderX 4.32+，`H5、weixin` 不支持|

小程序特殊的返回参数
applet special return parameters

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|abi	|String|应用二进制接口类型（仅 Android 支持）|`仅微信小程序`|
|abi |String|Application binary interface type (only supported by Android)|`WeChat applet only`|
|benchmarkLevel|Number|设备性能等级（仅 Android 支持）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）|`仅微信小程序`|
|benchmarkLevel|Number|Device performance level (Android only). The value is: -2 or 0 (the device cannot run mini games), -1 (the performance is unknown), >=1 (the device performance value, the higher the value, the better the device performance, the current maximum is less than 50)|` WeChat applet only`|

不推荐使用的返回参数，仅为向下兼容保留
Deprecated return parameter, reserved for backward compatibility only

|参数名|类型|说明|平台差异说明|
|Parameter Name|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|brand|string|设备品牌|`H5 不支持`|
|brand|string|device brand|`H5 not supported`|
|model|string|设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。||
|model|string|Device model. The new model will display unknown after it has been launched for a while, and WeChat will adapt it as soon as possible. ||

<!-- UNIAPPAPIJSON.getDeviceInfo.returnValue -->

**Tips**
- `deviceId`：`android 平台` 根据优先使用imei、mac，如果没有获取到就使用随机生成的标识。`ios 平台` 是直接使用随机生成的标识
