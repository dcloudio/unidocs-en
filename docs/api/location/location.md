### uni.getLocation(OBJECT)
获取当前的地理位置、速度。
Get the current geographical position and speed.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-:|
|type|String|否|默认为 wgs84 返回 gps 坐标，gcj02 返回国测局坐标，可用于 ``uni.openLocation`` 的坐标，app平台高德SDK仅支持返回gcj02||
| type| String| No| By default, wgs84 returns gps coordinates, and gcj02 returns the coordinates of State Bureau of Surveying and Mapping of China, which can be used for the coordinates of `uni.openLocation`. On the app platform, AutoNavi SDK only supports returning gcj02| |
|altitude|Boolean|否|传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度|App不支持|
| altitude| Boolean| No| For input = true, it will return the altitude information. Because the altitude request requires high accuracy, the return speed of the interface will be lowered| Not supported on App|
|geocode|Boolean|否|默认false，是否解析地址信息|仅App平台支持|
| geocode| Boolean| No| false as default, whether to resolve the address information| Only supported on App platform|
|success|Function|是|接口调用成功的回调函数，返回内容详见返回参数说明。||
| success| Function| Yes| Callback function for successful interface calling. See the notices on returning parameter description for returning contents.| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**success 返回参数说明**
**success return parameter description**

|参数|说明|
| Parameter| Instruction|
|:-|:-|
|latitude|纬度，浮点数，范围为-90~90，负数表示南纬|
| latitude| Latitude, floating number, from -90 to 90. Negative number indicates south latitude|
|longitude|经度，浮点数，范围为-180~180，负数表示西经|
| longitude| Longitude, floating number, from -180 to 180. Negative number indicates west longitude|
|speed|速度，浮点数，单位m/s|
| speed| Speed, floating number, in m/s|
|accuracy|位置的精确度|
| accuracy| Position accuracy|
|altitude|高度，单位 m|
| altitude| Height, in m|
|verticalAccuracy|垂直精度，单位 m（Android 无法获取，返回 0）|
| verticalAccuracy| Vertical accuracy, in m (If Android can't get it, return 0)|
|horizontalAccuracy|水平精度，单位 m|
| horizontalAccuracy| Horizontal accuracy, in m|
|[address](/api/location/location?id=address)|地址信息（仅App端支持，需配置geocode为true）|
| [address](/api/location/location?id=address)| Address information (only supported by App side, geocode needs to be configured to true)|

**address 地址信息说明**
**address information description**

|属性|类型|描述|说明|
| Attribute| Type| Describe| Instruction|
|:-|:-|:-|:-|
|country|String|国家|如“中国”，如果无法获取此信息则返回undefined|
| country| String| Nation| e.g. "China". undefined is returned if no information is obtained.|
|province|String|省份名称|如“北京市”，如果无法获取此信息则返回undefined|
| province| String| Province| e.g. "Beijing City". undefined is returned if no information is obtained.|
|city|String|城市名称|如“北京市”，如果无法获取此信息则返回undefined|
| city| String| City| e.g. "Beijing City". undefined is returned if no information is obtained.|
|district|String|区（县）名称|如“朝阳区”，如果无法获取此信息则返回undefined|
| district| String| District (county) name| e.g. "Chaoyang District". undefined is returned if no information is obtained.|
|street|String|街道信息|如“酒仙桥路”，如果无法获取此信息则返回undefined|
| street| String| Street| e.g. "Jiuxianqiao Road". undefined is returned if no information is obtained.|
|streetNum|String|获取街道门牌号信息|如“3号”，如果无法获取此信息则返回undefined|
| streetNum| String| Get street number information| e.g. "No. 3". undefined is returned if no information is obtained.|
|poiName|String|POI信息|如“电子城．国际电子总部”，如果无法获取此信息则返回undefined|
| poiName| String| POI information| Such as "Electronic City. International Electronics Headquarters". undefined is returned if no information is obtained.|
|postalCode|String|邮政编码|如“100016”，如果无法获取此信息则返回undefined|
| postalCode| String| Postal code| e.g. "100016". undefined is returned if no information is obtained.|
|cityCode|String|城市代码|如“010”，如果无法获取此信息则返回undefined|
| cityCode| String| City code| e.g. "010". undefined is returned if no information is obtained.|

**示例**
**Example**

```javascript
uni.getLocation({
	type: 'wgs84',
	success: function (res) {
		console.log('longitude of current position: ' + res.longitude);
		console.log('latitude of current position: ' + res.latitude);
	}
});
```

#### 注意
#### Notice

- H5：在较新的浏览器上，H5 端获取定位信息，要求部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- H5: On newer browsers, to obtain location information on the H5 side, it must be deployed on the **https** service. For local preview (localhost), the http protocol can still be used.
- H5：国产安卓手机上，H5若无法定位，检查手机是否开通位置服务、GPS，ROM是否给该浏览器位置权限、浏览器是否对网页弹出请求给予定位的询问框。
- H5: On Chinese Android smartphones, if localization failed on H5, check whether the location service and GPS are turned on, whether the ROM gives browser the location permission, and whether the browser gives popup for localization permission on the page.
- H5：安卓手机在原生App内嵌H5时，无法定位需要原生App处理Webview。
- H5: For H5 embedded native app on Android phone, it needs the native app to process the Webview in case of failed localization.
- H5：移动端浏览器普遍仅支持GPS定位，在GPS信号弱的地方可能定位失败。
- H5: Mobile browsers generally support GPS localization only. If GPS signal is weak, localization may fail.
- H5：PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- H5: Location is obtained by connecting to Google server when the PC devices use Chrome browser, but the Chinese users may fail to get the location.
- H5：使用地图和定位相关需要在[腾讯地图开放平台](https://lbs.qq.com/dev/console/key/manage)申请密钥，填写在 [manifest.json](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig) 中。
- H5: To use map and localization service, you need to apply for a key on [Tencent Map Open Platform](https://lbs.qq.com/dev/console/key/manage), and fill it in [manifest.json](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig).
- H5：2.9.9 版本以上，优化 uni.getLocation 支持通过 IP 定位。默认通过 GPS 获取，如果获取失败，备选方案是通过 IP 定位获取，需填写地图服务平台的秘钥（key）。key配置：manifest.json ---> H5配置 ---> 定位和地图 ---> key。
- H5: Version 2.9.9 or above supports IP location with optimized uni.getLocation. By default, it is got by GPS. If failed, the alternative is to get the location via IP and the key of the map service platform is necessary. key configuration: manifest.json ---> H5 configuration -> location and map ---> key.
- App：Android由于谷歌服务被墙，或者手机上没有GMS，想正常定位就需要向高德等三方服务商申请SDK资质，获取AppKey。否则打包后定位就会不准。云打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)。离线打包自行在原生工程中配置。注意包名、appkey、证书信息必须匹配。真机运行可以正常定位，是因为真机运行基座使用了DCloud向高德申请的sdk配置，打包后必须由开发者自己申请。如果手机自带GMS且网络环境可以正常访问google定位服务器，此时无需在manifest填写高德定位的sdk配置。
- App: If the Google service is blocked on the Android or there is no GMS, SDK qualification needs to be applied from a third-party service provider such as Gaode to get the AppKey for localization. Otherwise, the localization will be inaccurate after packaging. When packaging on cloud, Appkey needs to be filled in the SDK configuration on manifest. Detailed application guides are available in the manifest visualization interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29) for details. When packaging offline, it can be configured in native project. It should be noted that the package name, appkey and certificate information must be matched. The mobile App Playground can get the location normally due to its running base using the sdk configuration applied by DCloud to Gaode, which must be applied by the developers themselves after packaging. If the mobile phone has its own GMS and the network environment can normally access the Google Location Service, the sdk configuration of Gaode location on manifest can be skipped.
- App：``<map>`` 组件默认为国测局坐标gcj02，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- App: `<map>` The component defaults to the coordinate gcj02 of State Bureau of Surveying and Mapping of China. When calling `uni.getLocation` return result and passing it to the `<map>` component, the type must be specified as gcj02.
- App：定位和map是2个东西。通过`getLocation`得到位置坐标后，可以在任意map地图上展示，比如定位使用高德，地图使用google的webview版地图。如果坐标系不同时，注意转换坐标系。
- App: localization and map are different. Location coordinates obtained from `getLocation` can be displayed on any map, for example, using AutoNavi for localization and google's webview for map. If the coordinates are different, coordinate space transformation should be conducted.
- App：如果使用web-view加载地图，无需在manifest里配地图的sdk配置。
- App: If using web-view to load the map, the sdk configuration of map on manifest can be skipped.
- App：持续定位方案：iOS端可以申请持续定位权限，[参考](https://ask.dcloud.net.cn/article/12569)。Android如果进程被杀，代码无法执行。可以使用[unipush](https://ask.dcloud.net.cn/article/35622)，通过服务器激活App，执行透传消息，让App启动然后采集位置。Android上，即使自己写原生插件做后台进程，也很容易被杀，unipush是更合适的方案
- App: continuous localization scheme; iOS side: apply for continuous localization permission. [Refer to](https://ask.dcloud.net.cn/article/12569). The code cannot be executed if the Android process is killed. You can use [unipush](https://ask.dcloud.net.cn/article/35622) to activate the App through the server, execute the transparent message, start the App and then collect the location information. On Android, even the background process of the native plugin written by the developer, it is still likely to be killed. So unipush is a more suitable scheme
- 可以通过用户授权API来判断用户是否给应用授予定位权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- The user authorization API can be used to determine whether the user authorizes localization permissions to the application [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)

### uni.chooseLocation(OBJECT)
打开地图选择位置。
Open the map to select a location.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|keyword|String|否|搜索关键字，仅App平台支持|
| keyword| String| No| Search keyword, only supported on App platform|
|success|Function|是|接口调用成功的回调函数，返回内容详见返回参数说明。|
| success| Function| Yes| Callback function for successful interface calling. See the notices on returning parameter description for returning contents.|
|fail|Function|否|接口调用失败的回调函数（获取定位失败、用户取消等情况下触发）|
| fail| Function| No| Callback function for failed interface calling (triggered when getting location failed, or being cancelled by user, etc.)|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**注意**
**Notice**
- 因平台差异，如果SDK配置百度地图，需要设置keyword，才能显示相关地点
- In light of platform differences, for SDK configured with Baidu map, keyword setting is necessary for relevant places being displayed
- nvue下只支持高德地图，不支持百度地图
- Only Gaode map, but not Baidu map, is supported under nvue
- HBuilderX 2.4.0+ 非 weex 编译模式仅支持高德地图
- Only Gaode map is supported under non-weex compilation mode of the HBuilderX 2.4.0+


**success 返回参数说明**
**success return parameter description**

|参数|说明|
| Parameter| Instruction|
|:-|:-|
|name|位置名称|
| name| Location name|
|address|详细地址|
| address| Address|
|latitude|纬度，浮点数，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系。|
| latitude| Latitude, floating number, from -90 to 90. Negative number indicates south latitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China.|
|longitude|经度，浮点数，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系。|
| longitude| Longitude, floating number, from -180 to 180. Negative number indicates west longitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China.|

**示例**
**Example**

```javascript
uni.chooseLocation({
	success: function (res) {
		console.log('Location name:' + res.name);
		console.log('Detailed address:' + res.address);
		console.log('latitude:' + res.latitude);
		console.log('longitude:' + res.longitude);
	}
});
```

**注意**
**Notice**
- 不同端，使用地图选择时基于的底层地图引擎不一样，如H5是腾讯地图，App是高德地图，详见地图map组件的使用注意事项。app中也可以使用百度定位，在manifest中配置，打包后生效。但app-nvue里只能用高德定位，不能用百度地图。另外选择地图、查看地图位置的API也仅支持高德地图。所以App端如无特殊必要，建议使用高德地图。
- Different underlying map engines for map search are used for different platforms. For example, Tencent map is used on H5 and Gaode map is used on APP. Please see the notices on using the map component for more details. Baidu localization can also be used on App after being configured on manifest and packaged. Only Gaode map, but not Baidu map, is supported on app-nvue. In addition, the API for selecting and viewing map location only supports Gaode map. So it is recommended to use Gaode map if there is no special needs on the App side.
- H5 端使用地图和定位相关，需要在 (manifest.json)[/collocation/manifest?id=h5sdkconfig] 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- For map and localization service on H5 side, the key is required to be applied to the third-party map service providers such as Tencent or Google and configured on (manifest.json)[/collocation/manifest?id=h5sdkconfig].
- chooseLocation属于封装型API，开发者若觉得不够灵活，可自行基于原始的map组件进行封装。插件市场已经有各种封装样例了。
- chooseLocation is a packaged API. Developers can package it based on the native map component for higher flexibility. There are various packaging examples on Plugin Market.
- 若Android App端位置不准，见上文uni.getLocation的注意事项
- If the localization of Android App side is inaccurate, see the notices of uni.getLocation above
