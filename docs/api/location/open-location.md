### uni.openLocation(OBJECT)
使用应用内置地图查看位置。
Use the in-app map to view the location.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter name|Type|Required|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|latitude|Float|是|纬度，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系||
|latitude|Float|Yes|Latitude, the range is -90~90, a negative number means south latitude, use gcj02 China Survey Bureau coordinate system||
|longitude|Float|是|经度，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系||
|longitude|Float|Yes|Longitude, the range is -180~180, the negative number indicates the west longitude, using the gcj02 National Survey Bureau coordinate system||
|name|String|否|位置名||
|name|String|No|Location name||
|address|String|否|地址的详细说明||
|address|String|No|Detailed description of address||
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|Callback function at the end of the interface call (it will be executed if the call succeeds or fails)|&nbsp;|
**示例**
**Example**

```javascript
uni.getLocation({
	type: 'gcj02', 
	//返回可以用于uni.openLocation的经纬度
	//Return the latitude and longitude that can be used for uni.openLocation
	success: function (res) {
		const latitude = res.latitude;
		const longitude = res.longitude;
		uni.openLocation({
			latitude: latitude,
			longitude: longitude,
			success: function () {
				console.log('success');
			}
		});
	}
});
```

**Tips**

- 本API是一个非原子的封装界面，开发者如有定制需求，可自己做页面实现类似功能。
- This API is a non-atomic package interface. Developers can make their own pages to achieve similar functions if they have custom requirements.
- 若定位不准，参考[uni.getLocation文档的注意事项](https://uniapp.dcloud.io/api/location/location)
- If the location is inaccurate, please refer to [Notes in the Uni.getLocation Document](https://uniapp.dcloud.io/api/location/location)
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- The ``<map>`` component defaults to the coordinates of the National Bureau of Survey and Measurement. When calling ``uni.getLocation`` to return the result to the ``<map>`` component, the type must be specified as gcj02.
- App 端使用地图组件需要向高德等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)。
- To use the map component on the App side, you need to apply for SDK qualification from a third-party service provider such as AutoNavi, and obtain the AppKey. When packaging, you need to fill in the Appkey in the SDK configuration of the manifest. There is a detailed application guide in the manifest visualization interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29).
- H5 端使用地图和定位相关需要在[腾讯地图开放平台](https://lbs.qq.com/dev/console/key/manage)申请密钥，填写在 [manifest.json](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig) 中。
- H5 terminal use map and positioning related need to apply for a key in [Tencent Map Open Platform](https://lbs.qq.com/dev/console/key/manage), fill in [manifest.json](https:/ /uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig).
- iOS端 如需使用第三方地图进行导航，需要在 manifest.json 文件内增加 ``urlschemewhitelist`` 节点，在线打包即可
- iOS If you need to use a third-party map for navigation, you need to add the ``urlschemewhitelist`` node in the manifest.json file, and you can package it online
- 不同平台打开的地图不一样，App端是高德地图（不支持百度地图）、H5端是腾讯地图。
- The maps opened on different platforms are different. The App side is AutoNavi Maps (Baidu maps are not supported), and the H5 side is Tencent Maps.

```json
{  
    "app-plus": {  
        "distribute": {  
            "ios": {  
                "urlschemewhitelist": [  
                    "baidumap",  
                    "iosamap",  
                    "qqmap"  
                ]  
            }  
        }  
    }  
}  
```

- 点击返回也会进入 `fail` 回调中
- Clicking to return will also enter the `fail` callback