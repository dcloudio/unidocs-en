### uni.createMapContext(mapId,this)
创建并返回 map 上下文 ``mapContext`` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 ``<map>`` 组件。
Create and return to the map context `mapContext` object. Under custom components, the second parameter is passed into the custom component instance this to operate the `<map>` component.

**注意：uni.createMapContext(mapId, this)**
**Note: uni.createMapContext(mapId, this)**
- app-nvue 平台 2.2.5+ 支持 uni.createMapContext(mapId, this)
- app-nvue platform 2.2.5+ supports uni.createMapContext(mapId, this)
- app-nvue 平台 2.2.5- 需要同时设置组件属性id和ref ``<map id="map1" ref="map1"></map>``，或者直接使用 ref，例如 ``this.$refs.map1``
- On app-nvue platform 2.2.5, you need to set both the component attribute id and ref `<map id="map1" ref="map1"></map>`, or use ref directly, for example `this.$refs.map1`


**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

mapContext

``mapContext`` 通过 mapId 跟一个 ``<map>`` 组件绑定，通过它可以操作对应的 ``<map>`` 组件。
`mapContext` is bound to a `<map>` component through mapId, through which you can manipulate the corresponding `<map>` component.

**mapContext 对象的方法列表**
**Method list of mapContext object**

|方法|参数|说明|平台差异说明|最低版本|
| Method| Parameter| Instruction| Platform difference description| Minimum version|
|:-|:-|:-|:-|:-|
|getCenterLocation|OBJECT|获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 [uni.openLocation](api/location/location?id=getlocation)|||
| getCenterLocation| OBJECT| Get the latitude and longitude of the current map center, and return the gcj02 coordinate system, which can be used for [uni.openLocation](api/location/location?id=getlocation)| | |
|moveToLocation|OBJECT|将地图中心移动到当前定位点，需要配合map组件的show-location使用|||
| moveToLocation| OBJECT| show-location of the map component should be used for moving the map center to the current locating point| | |
|translateMarker|OBJECT|平移marker，带动画|app-nvue 2.1.5+||
| translateMarker| OBJECT| Translate the marker with animation| app-nvue 2.1.5+| |
|includePoints|OBJECT|缩放视野展示所有经纬度|app-nvue 2.1.5+||
| includePoints| OBJECT| Zoom to show all latitude and longitude| app-nvue 2.1.5+| |
|getRegion|OBJECT|获取当前地图的视野范围|||
| getRegion| OBJECT| Get the view range of the current map| | |
|getScale|OBJECT|获取当前地图的缩放级别|||
| getScale| OBJECT| Get the zoom level of the current map| | |
|addGroundOverlay|OBJECT|创建自定义图片图层，图片会随着地图缩放而缩放||App-nvue 3.1.0+|
| addGroundOverlay| OBJECT| Create a custom image layer, and the image will scale as the map zooms| | App-nvue 3.1.0+|
|addMarkers |OBJECT|添加 marker||App-nvue 3.1.0+|
| addMarkers| OBJECT| Add marker| | App-nvue 3.1.0+|
|initMarkerCluster|OBJECT|初始化点聚合的配置，未调用时采用默认配置||App-nvue 3.1.0+|
| initMarkerCluster| OBJECT| Configuration of marker cluster initialization. Use the default configuration if not being called| | App-nvue 3.1.0+|
|moveAlong|OBJECT|沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断。|支持 android 不支持autoRotate属性设置 默认ture|App-nvue 3.1.0+|
| moveAlong| OBJECT| Move the marker along the specified path for scenes such as track playback. The callback event can be triggered when the animation is finished. The previous animation will be interrupted if the same marker called the moveAlong method again while the animation is in progress.| Support android, but not the attribute setting with autoRotate. ture as default| App-nvue 3.1.0+|
|openMapApp|OBJECT|拉起地图APP选择导航。||App-nvue 3.1.0+|
| openMapApp| OBJECT| Open the map APP and select navigation.| | App-nvue 3.1.0+|
|removeGroundOverlay|OBJECT|移除自定义图片图层||App-nvue 3.1.0+|
| removeGroundOverlay| OBJECT| Remove custom image layer| | App-nvue 3.1.0+|
|removeMarkers|OBJECT|移除 marker。||App-nvue 3.1.0+|
| removeMarkers| OBJECT| Remove the marker.| | App-nvue 3.1.0+|
|updateGroundOverlay|OBJECT|更新自定义图片图层。||App-nvue 3.1.0+|
| updateGroundOverlay| OBJECT| Update the custom image layer.| | App-nvue 3.1.0+|
|on|EventHandle|监听地图事件。||App-nvue 3.1.0+|
| on| EventHandle| listen to map events.| | App-nvue 3.1.0+|

**getCenterLocation 的 OBJECT 参数列表**
**parameter list of getCenterLocation OBJECT**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
| success| Function| No| Callback function for successful interface calling, res = { longitude: "Longitude", latitude: "latitude"}|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|


**moveToLocation 的 OBJECT 参数列表**
**parameter list of moveToLocation OBJECT**

|参数			|类型		|必填	|说明	|
| Parameter| Type| Required| Instruction|
|:-			|:-		|:-	|:-		|
|longitude	|Number	|否	|经度 ，App 2.6.8、H5	|
| longitude| Number| No| Longitude, App 2.6.8, H5|
|latitude	|Number	|否	|纬度 ，App 2.6.8、H5	|
| latitude| Number| No| latitude, App 2.6.8, H5|
|success		|Function|否	|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
| success| Function| No| Callback function for successful interface calling, res = { longitude: "Longitude", latitude: "latitude"}|
|fail			|Function|否	|接口调用失败的回调函数	|
| fail| Function| No| Callback function for failed interface calling|
|complete	|Function|否	|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|


**translateMarker 的 OBJECT 参数列表**
**parameter list of translateMarker OBJECT**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|markerId|Number|是|指定 marker|
| markerId| Number| Yes| Specify marker|
|destination|Object|是|指定 marker 移动到的目标点|
| destination| Object| Yes| Specify the target point that the marker moves to|
|autoRotate|Boolean|否|移动过程中是否自动旋转 marker|
| autoRotate| Boolean| No| Whether the marker automatically rotates during the movement|
|rotate|Number|否|marker 的旋转角度|
| rotate| Number| No| Rotate angle of marker|
|duration|Number|否|动画持续时长，默认值1000ms，平移与旋转分别计算|
| duration| Number| No| The default of animation duration is 1000ms, which in translation and rotation is calculated separately|
|animationEnd|Function|否|	动画结束回调函数|
| animationEnd| Function| No| Animation end callback function|
|fail|Function|否|	接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|

**includePoints 的 OBJECT 参数列表**
**parameter list of includePoints OBJECT**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|points|Array|是|要显示在可视区域内的坐标点列表，[{latitude, longitude}]|
| points| Array| Yes| List of coordinate points to be displayed in the visible area, \[{latitude, longitude}]|
|padding|Array|否|坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上，右，下，左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。|
| padding| Array| No| Distance from rectangular edge formed by coordinates to map edge, in pixel. The format is [up, right, down, left]. On Android, only the first item of the array can be identified, and the padding on the up, down, left and right is consistent. Padding parameter is temporarily not supported by the developer tools.|

**getRegion 的 OBJECT 参数列表**
**parameter list of getRegion OBJECT**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度|
| success| Function| No| Callback function for successful interface calling, res = {southwest, northeast}, latitudes and longitudes of the southwest corner and the northeast corner|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**getScale 的 OBJECT 参数列表**
**parameter list of getScale OBJECT**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {scale}|
| success| Function| No| Callback function for successful interface calling, res = {scale}|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|


**addCustomLayer 的 OBJECT 参数列表**
**parameter list of addCustomLayer OBJECT**

|属性		|类型		|默认值	|必填	|说明												|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|layerId	|string		|		|是		|个性化图层id										|
| layerId| string| | Yes| Personalized layer id|
|success	|function	|		|否		|接口调用成功的回调函数								|
| success| function| | No| Callback function for successful interface calling|
|fail		|function	|		|否		|接口调用失败的回调函数								|
| fail| function| | No| Callback function for failed interface calling|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|


**addGroundOverlay 的 OBJECT 参数列表**
**parameter list of addGroundOverlay OBJECT**

|属性		|类型		|默认值	|必填	|说明												|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|id			|String		|		|是		|图片图层 id										|
| id| String| | Yes| Image layer id|
|src		|String		|		|是		|图片路径，支持网络图片、临时路径、代码包路径		|
| src| String| | Yes| ImgPath, supporting online image, temporary path and code package path|
|bounds		|Object		|		|是		|图片覆盖的经纬度范围								|
| bounds| Object| | Yes| Latitude and longitude range covered by the image|
|visible	|Boolean	|true	|否		|是否可见											|
| visible| Boolean| true| No| Visible or not|
|zIndex		|Number		|1		|否		|图层绘制顺序										|
| zIndex| Number| 1| No| Layer drawing order|
|opacity	|Number		|1		|否		|图层透明度											|
| opacity| Number| 1| No| Layer transparency|
|success	|function	|		|否		|接口调用成功的回调函数								|
| success| function| | No| Callback function for successful interface calling|
|fail		|function	|		|否		|接口调用失败的回调函数								|
| fail| function| | No| Callback function for failed interface calling|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

`object.bounds` 的结构
Structure of `object.bounds`

|属性		|类型	|默认值	|必填	|说明			|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|southwest	|Object	|		|是		|西南角经纬度	|
| southwest| Object| | Yes| Latitude and longitude of the southwest corner|
|northeast	|Object	|		|是		|东北角经纬度	|
| northeast| Object| | Yes| Latitude and longitude of the northeast corner|

`southwest` 的结构
Structure of `southwest`

|属性		|类型	|默认值	|必填	|说明	|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
| longitude| number| | Yes| Longitude|
|latitude	|number	|		|是		|纬度	|
| latitude| number| | Yes| Latitude|

`northeast` 的结构
Structure of `northeast`

|属性		|类型	|默认值	|必填	|说明	|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
| longitude| number| | Yes| Longitude|
|latitude	|number	|		|是		|纬度	|
| latitude| number| | Yes| Latitude|


**addMarkers 的 OBJECT 参数列表**
**parameter list of addMarkers OBJECT**

|属性		|类型		|默认值	|必填	|说明												|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|markers	|Array		|		|是		|同传入 map 组件的 marker 属性						|
| markers| Array| | Yes| Same as the marker attribute of the incoming map component|
|clear		|boolean	|false	|否		|是否先清空地图上所有 marker						|
| clear| boolean| false| No| Whether to clear all markers on the map firstly|
|success	|function	|		|否		|接口调用成功的回调函数								|
| success| function| | No| Callback function for successful interface calling|
|fail		|function	|		|否		|接口调用失败的回调函数								|
| fail| function| | No| Callback function for failed interface calling|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**removeMarkers 的 OBJECT 参数列表**
**parameter list of removeMarkers OBJECT**

|属性		|类型		|默认值	|必填	|说明												|
| Attribute| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|markerIds	|Array		|		|是		|要被删除的marker的id属性组成的数组						|
| markerIds| Array| | Yes| Array of id attributes of the markers to be deleted|
|success	|function	|		|否		|接口调用成功的回调函数								|
| success| function| | No| Callback function for successful interface calling|
|fail		|function	|		|否		|接口调用失败的回调函数								|
| fail| function| | No| Callback function for failed interface calling|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**MapContext.on()** (app-nvue支持)
**MapContext.on()** (app-nvue is supported)

**markerClusterCreate**

缩放或拖动导致新的聚合簇产生时触发，仅返回新创建的聚合簇信息。
is triggered when a new cluster is generated by zooming or dragging, and only the information of the newly created cluster is returned.

返回参数
Return parameter

|参数		|类型								|说明		|
| Parameter| Type| Instruction|
|:-|:-|:-|
|clusters	|Array&amp;lt;ClusterInfo&amp;gt;	|聚合簇数据	|
| clusters| Array&lt;ClusterInfo&gt;| Cluster data|


**markerClusterClick**

聚合簇的点击事件。
Click event of the cluster.

返回参数
Return parameter

|参数	|类型		|说明	|
| Parameter| Type| Instruction|
|:-|:-|:-|
|cluster|ClusterInfo|聚合簇	|
| cluster| ClusterInfo| Cluster|

`ClusterInfo` 结构
Structure of `ClusterInfo`

|参数		|类型						|说明						|
| Parameter| Type| Instruction|
|:-|:-|:-|
|clusterId	|Number						|聚合簇的 id				|
| clusterId| Number| Cluster id|
|center		|LatLng						|聚合簇的坐标				|
| center| LatLng| Cluster coordinates|
|markerIds	|Array&amp;lt;Number&amp;gt;|该聚合簇内的点标记数据数组	|
| markerIds| Array&lt;Number&gt;| array of point marker data in this cluster|


示例代码
Sample code

```
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```


## mapSearch 模块(仅app-nvue支持)
## mapSearch module (only supported by app-nvue)

#### reverseGeocode(Object,callback)
> 反向地理编码
> Reverse geocoding

##### Object
|属性|类型 |默认值|必填|说明
| Attribute| Type| Defaults| Required| Instruction
|:--|:--|:--|:--|:--|
|point|Object| |是|{latitude: 纬度, longitude: 经度}
| point| Object| | Yes| {latitude: latitude, longitude: longitude}

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|属性|类型 |说明
| Attribute| Type| Instruction
|:--|:--|:--
|type|String|"success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail
|code|Number| 成功返回 0,失败返回相应 code 码
| code| Number| Return 0 for success, or otherwise, return the corresponding code
|message|String|失败描述
| message| String| Failure description
|address|String|查询后地址 （成功时返回）
| address| String| Address after inquiry (return when success)

#### poiSearchNearBy（Object,callback);
> 周边检索
> Peripheral search

##### Object
|属性|类型 |默认值|必填|说明
| Attribute| Type| Defaults| Required| Instruction
|:--|:--|:--|:--|:--
|point|Object| |是|检索的中心点坐标 {latitude: 纬度, longitude: 经度}
| point| Object| | Yes| Retrieved coordinate of the center of {latitude: latitude, longitude: longitude}
|key|String| | 是|搜索关键字
| key| String| | Yes| Search keywords
|radius|Number|3000|否|检索的半径，单位为米
| radius| Number| 3000| No| Retrieved radius, in meters
|index|Number|1|否|要获取检索结果的页号索引
| index| Number| 1| No| Page number index of the retrieval result to be obtained

##### callback 返回 Object 参数说明
##### Parameter description of callback return object
|属性|类型 |说明
| Attribute| Type| Instruction
|:--|:--|:--
|type|String|"success" 表示成功， "fail" 表示失败
| type| String| "success" means success and "fail" means fail
|code|Number| 成功返回 0,失败返回相应 code 码
| code| Number| Return 0 for success, or otherwise, return the corresponding code
|message|String|失败描述
| message| String| Failure description
|totalNumber|Number|返回的POI数目
| totalNumber| Number| Number of POIs returned
|currentNumber|Number|当前页POI数目
| currentNumber| Number| Number of POIs on the current page
|pageNumber|Number|页数
| pageNumber| Number| Page number
|pageIndex|Number|当前页号索引
| pageIndex| Number| Index of current page number
|poiList|Array.&lt;poiObject&gt;|POI信息数组
| poiList| Array.\<poiObject>| POI information array

##### poiObject
|属性|类型 |说明
| Attribute| Type| Instruction
|:--|:--|:--|
|location|Object|{latitude: 纬度, longitude: 经度}
| location| Object| {latitude: latitude, longitude: longitude}
|name|String|名称
| name| String| Name
|type|String|类型
| type| String| Type
|distance|Number|距离（单位米）
| distance| Number| Distance (in m)
|address|String|地址
| address| String| Address


**Tips**

- App端使用map，nvue比vue更强大，且没有层级问题。
- For map on App side, nvue is more powerful than vue and has no hierarchy problem.
- App端vue页面默认为高德地图，也可以选择百度地图。但app-nvue只有高德地图，没有百度地图。以及地图选择api（mapSearch），只支持高德地图。
- The page of vue on App side defaults to Gaode map, but the Baidu map is optional. However, app-nvue only supports the Gaode map, but not the Baidu map. Map search api (mapSearch) only supports Gaode map.
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- To obtain location information on the H5 side, it must be deployed on the **https** service. For local preview (localhost), the http protocol can still be used.
- 无 GPS 模块的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- Location is obtained by connecting to Google server when the PC devices without GPS module use Chrome browser, but the Chinese users may fail to get the location.
- App 端使用地图组件需要向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- To use the map component, App side needs to apply for SDK qualification and AppKey to the third-party service providers such as Gaode and Baidu. During packaging, Appkey needs to be filled in the SDK configuration on the manifest. Detailed application guides are available in the manifest visualization interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- H5 端使用地图和定位相关，需要在 (manifest.json)[/collocation/manifest?id=h5sdkconfig] 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- For map and localization service on H5 side, the key is required to be applied to the third-party map service providers such as Tencent or Google and configured on (manifest.json)[/collocation/manifest?id=h5sdkconfig].
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- `<map>` component is defaulted to the coordinates of the State Bureau of Surveying and Mapping of China. When calling `uni.getLocation` return result and passing it to the `<map>` component, the type must be specified as gcj02.
