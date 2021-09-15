### uni.createMapContext(mapId,this)
创建并返回 map 上下文 ``mapContext`` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 ``<map>`` 组件。
Create and return the map context ``mapContext`` object. In the custom component, the second parameter is passed into the component instance this to operate the ``<map>`` component in the component.

**注意：uni.createMapContext(mapId, this)**
**Note: uni.createMapContext(mapId, this)**
- app-nvue 平台 2.2.5+ 支持 uni.createMapContext(mapId, this)
- app-nvue platform 2.2.5+ supports uni.createMapContext(mapId, this)
- app-nvue 平台 2.2.5- 需要同时设置组件属性id和ref ``<map id="map1" ref="map1"></map>``，或者直接使用 ref，例如 ``this.$refs.map1``
- app-nvue platform 2.2.5- You need to set the component attribute id and ref ``<map id="map1" ref="map1"></map>" at the same time, or use ref directly, such as ``this.$ refs.map1''

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

mapContext

``mapContext`` 通过 mapId 跟一个 ``<map>`` 组件绑定，通过它可以操作对应的 ``<map>`` 组件。
``mapContext`` is bound to a ``<map>`` component through mapId, through which the corresponding ``<map>`` component can be operated.
**mapContext 对象的方法列表**
**Method list of mapContext object**

|方法|参数|说明|平台差异说明|最低版本|
|Method|Parameters|Explanation|Explanation of Platform Differences|Minimum Version|
|:-|:-|:-|:-|:-|
|getCenterLocation|OBJECT|获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 [uni.openLocation](api/location/location?id=getlocation)|||
|getCenterLocation|OBJECT|Get the latitude and longitude of the current map center, the return is the gcj02 coordinate system, which can be used in [uni.openLocation](api/location/location?id=getlocation)|||
|moveToLocation|OBJECT|将地图中心移动到当前定位点，需要配合map组件的show-location使用|||
|moveToLocation|OBJECT|Move the center of the map to the current location, which needs to be used with the show-location of the map component|||
|translateMarker|OBJECT|平移marker，带动画|app-nvue 2.1.5+||
|translateMarker|OBJECT|Translation marker with animation|app-nvue 2.1.5+||
|includePoints|OBJECT|缩放视野展示所有经纬度|app-nvue 2.1.5+||
|includePoints|OBJECT|Zoom field of view to show all latitude and longitude|app-nvue 2.1.5+||
|getRegion|OBJECT|获取当前地图的视野范围|||
|getRegion|OBJECT|Get the field of view of the current map|||
|getScale|OBJECT|获取当前地图的缩放级别|||
|getScale|OBJECT|Get the zoom level of the current map|||
|addCustomLayer|OBJECT|添加个性化图层||App暂不支持 (**SDK不支持**)|
|addCustomLayer|OBJECT|Add a personalized layer||App not currently supported (**SDK not supported**)|
|addGroundOverlay|OBJECT|创建自定义图片图层，图片会随着地图缩放而缩放||App-nvue 3.1.0+|
|addGroundOverlay|OBJECT|Create a custom image layer, the image will zoom with the map zoom||App-nvue 3.1.0+|
|addMarkers |OBJECT|添加 marker||App-nvue 3.1.0+|
|addMarkers |OBJECT|Add marker||App-nvue 3.1.0+|
|fromScreenLocation|OBJECT|获取屏幕上的点对应的经纬度，坐标原点为地图左上角||App暂不支持|
|fromScreenLocation|OBJECT|Get the latitude and longitude corresponding to the point on the screen, the origin of the coordinate is the upper left corner of the map||App not currently supported|
|initMarkerCluster|OBJECT|初始化点聚合的配置，未调用时采用默认配置||App-nvue 3.1.0+|
|initMarkerCluster|OBJECT|Initialize the configuration of point aggregation, and use the default configuration when it is not called||App-nvue 3.1.0+|
|moveAlong|OBJECT|沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断。|支持 android 不支持autoRotate属性设置 默认ture|App-nvue 3.1.0+|
|moveAlong|OBJECT|Move the marker along the specified path, used in scenes such as track playback. The callback event is triggered when the animation is completed. If the animation is in progress, call the moveAlong method on the same marker again, and the previous animation will be interrupted. |Support android does not support autoRotate attribute setting Default true|App-nvue 3.1.0+|
|openMapApp|OBJECT|拉起地图APP选择导航。||App-nvue 3.1.0+|
|openMapApp|OBJECT|Pull up the map APP to select navigation. ||App-nvue 3.1.0+|
|removeCustomLayer|OBJECT|移除个性化图层 ||App暂时不支持  (**SDK不支持**)|
|removeCustomLayer|OBJECT|Remove a personalized layer ||App does not support temporarily (**SDK does not support**)|
|removeGroundOverlay|OBJECT|移除自定义图片图层||App-nvue 3.1.0+|
|removeGroundOverlay|OBJECT|Remove custom image layer||App-nvue 3.1.0+|
|removeMarkers|OBJECT|移除 marker。||App-nvue 3.1.0+|
|removeMarkers|OBJECT|Remove markers. ||App-nvue 3.1.0+|
|setCenterOffset|OBJECT|设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)，默认偏移为[0.5, 0.5]||App暂时不支持|
|setCenterOffset|OBJECT|Set the offset of the map center point, backward and downward to increase, the screen ratio range (0.25~0.75), the default offset is [0.5, 0.5]||App temporarily does not support|
|toScreenLocation|OBJECT|获取经纬度对应的屏幕坐标，坐标原点为地图左上角。||App暂时不支持|
|toScreenLocation|OBJECT|Get the screen coordinates corresponding to the latitude and longitude, and the origin of the coordinates is the upper left corner of the map. ||App temporarily does not support|
|updateGroundOverlay|OBJECT|更新自定义图片图层。||App-nvue 3.1.0+|
|updateGroundOverlay|OBJECT|Update the custom image layer. ||App-nvue 3.1.0+|
|on|EventHandle|监听地图事件。||App-nvue 3.1.0+|
|on|EventHandle|Listen to map events. ||App-nvue 3.1.0+|
|$getAppMap||获取原生地图对象 [plus.maps.Map](https://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map)|app-vue自定义组件模式|1.9.3|
|$getAppMap||Get native map object[plus.maps.Map](https://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map)|app-vue custom component mode| 1.9.3|


`$getAppMap()` 注意事项：
Note for `$getAppMap()`:

- 在页面中，必须在 `onReady` 中调用。
- In the page, it must be called in `onReady`.
- 在组件中，必须在 `mounted` 中调用。
- In the component, it must be called in `mounted`.
- nvue没有`$getAppMap()`，请使用`createMapContext`
- nvue does not have `$getAppMap()`, please use `createMapContext`
- `uni-app`中使用原生地图无需提供占位div，得到`$getAppMap()`后直接js使用即可。
- You don't need to provide a placeholder div to use the native map in `uni-app`, you can use it directly with js after getting `$getAppMap()`.

**getCenterLocation 的 OBJECT 参数列表**
**List of OBJECT parameters of getCenterLocation**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
|success|Function|No|Callback function of successful interface call, res = {longitude: "longitude", latitude: "latitude"}|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|


**moveToLocation 的 OBJECT 参数列表**
**List of OBJECT parameters of moveToLocation**

|参数			|类型		|必填	|说明	|
|Parameter |Type |Required |Description |
|:-			|:-		|:-	|:-		|
|longitude	|Number	|否	|经度 ，App 2.6.8、H5	|
|longitude |Number |No |Longitude, App 2.6.8, H5 |
|latitude	|Number	|否	|纬度 ，App 2.6.8、H5	|
|latitude |Number |No |Latitude, App 2.6.8, H5 |
|success		|Function|否	|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
|success |Function|No |Callback function for successful interface call, res = {longitude: "longitude", latitude: "latitude"}|
|fail			|Function|否	|接口调用失败的回调函数	|
|fail |Function|No |Callback function for interface call failure |
|complete	|Function|否	|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |Function|No |Callback function at the end of the interface call (it will be executed if the call succeeds or fails) |


**translateMarker 的 OBJECT 参数列表**
**List of OBJECT parameters of translateMarker**
|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|markerId|Number|是|指定 marker|
|markerId|Number|Yes|Specify marker|
|destination|Object|是|指定 marker 移动到的目标点|
|destination|Object|Yes|Specify the target point the marker moves to|
|autoRotate|Boolean|否|移动过程中是否自动旋转 marker|
|autoRotate|Boolean|No|Whether the marker is automatically rotated during the movement|
|rotate|Number|否|marker 的旋转角度|
|rotate|Number|No|Rotation angle of the marker|
|duration|Number|否|动画持续时长，默认值1000ms，平移与旋转分别计算|
|duration|Number|No|The duration of animation, the default value is 1000ms, translation and rotation are calculated separately|
|animationEnd|Function|否|	动画结束回调函数|
|animationEnd|Function|No| Animation End Callback Function|
|fail|Function|否|	接口调用失败的回调函数|
|fail|Function|No| Callback function for interface call failure|


**includePoints 的 OBJECT 参数列表**
**List of OBJECT parameters for includePoints**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|points|Array|是|要显示在可视区域内的坐标点列表，[{latitude, longitude}]|
|points|Array|Yes|The list of coordinate points to be displayed in the visible area, [{latitude, longitude}]|
|padding|Array|否|坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上，右，下，左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。|
|padding|Array|No|The distance from the edge of the rectangle formed by the coordinate points to the edge of the map, in pixels. The format is [Up, Right, Down, Left], only the first item of the array can be recognized on Android, and the padding of the upper, lower, left, and right is the same. The developer tool does not support the padding parameter at this time. |
**getRegion 的 OBJECT 参数列表**
**List of OBJECT parameters of getRegion**
|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度|
|success|Function|No|Callback function for successful interface call, res = {southwest, northeast}, the latitude and longitude of the southwest corner and the northeast corner|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|


**getScale 的 OBJECT 参数列表**
**List of OBJECT parameters of getScale**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {scale}|
|success|Function|No|Callback function of successful interface call, res = {scale}|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

**addCustomLayer 的 OBJECT 参数列表**
**OBJECT parameter list of addCustomLayer**

|属性		|类型		|默认值	|必填	|说明												|
|Attribute |Type |Default value |Required |Description |
|:-|:-|:-|:-|:-|
|layerId	|string		|		|是		|个性化图层id										|
|layerId |string | |Yes |Personalized layer id |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |Callback function at the end of the interface call (it will be executed if the call succeeds or fails) |

**addGroundOverlay 的 OBJECT 参数列表**
**OBJECT parameter list of addGroundOverlay**

|属性		|类型		|默认值	|必填	|说明												|
|Attribute |Type |Default value |Required |Description |
|:-|:-|:-|:-|:-|
|id			|String		|		|是		|图片图层 id										|
|id |String | |Yes |Image layer id |
|src		|String		|		|是		|图片路径，支持网络图片、临时路径、代码包路径		|
|src |String | |Yes |Image path, support network image, temporary path, code package path |
|bounds		|Object		|		|是		|图片覆盖的经纬度范围								|
|bounds |Object | |Yes |Latitude and longitude range covered by the picture |
|visible	|Boolean	|true	|否		|是否可见											|
|visible |Boolean |true |No |Is it visible |
|zIndex		|Number		|1		|否		|图层绘制顺序										|
|zIndex |Number |1 |No |Layer drawing order |
|opacity	|Number		|1		|否		|图层透明度											|
|opacity |Number |1 |No |Layer transparency |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |Callback function at the end of the interface call (it will be executed if the call succeeds or fails) |

`object.bounds` 的结构
Structure of `object.bounds`

|属性		|类型	|默认值	|必填	|说明			|
|Attribute |Type |Default value |Required |Description |
|:-|:-|:-|:-|:-|
|southwest	|Object	|		|是		|西南角经纬度	|
|southwest |Object | |Yes |Latitude and longitude of southwest corner |
|northeast	|Object	|		|是		|东北角经纬度	|
|northeast |Object | |Yes |Latitude and longitude of northeast corner |
`southwest` 的结构
Structure of `southwest`
|属性		|类型	|默认值	|必填	|说明	|
|Attribute |Type |Default value |Required |Description |
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
|longitude |number | |is |longitude |
|latitude	|number	|		|是		|纬度	|
|latitude |number | |is |latitude |


`northeast` 的结构
Structure of `northeast`

|属性		|类型	|默认值	|必填	|说明	|
|Attribute |Type |Default value |Required |Description |
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
|longitude |number | |is |longitude |
|latitude	|number	|		|是		|纬度	|
|latitude |number | |is |latitude |

**addMarkers 的 OBJECT 参数列表**
**List of OBJECT parameters for addMarkers**

|属性		|类型		|默认值	|必填	|说明												|
|Attribute |Type |Default value |Required |Description |
|:-|:-|:-|:-|:-|
|markers	|Array		|		|是		|同传入 map 组件的 marker 属性						|
|markers |Array | |Yes |Same as the marker property passed in to the map component |
|clear		|boolean	|false	|否		|是否先清空地图上所有 marker						|
|clear |boolean |false |No |Whether to clear all markers on the map first |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |Callback function at the end of the interface call (it will be executed if the call succeeds or fails) |


**MapContext.on()** (app-nvue支持)
**MapContext.on()** (app-nvue support)

`markerClusterCreate`
缩放或拖动导致新的聚合簇产生时触发，仅返回新创建的聚合簇信息。
Triggered when a new aggregate cluster is generated by zooming or dragging, only the information of the newly created aggregate cluster is returned.

返回参数
Return parameter

|参数		|类型								|说明		|
|Parameter |Type |Description |
|:-|:-|:-|
|clusters	|Array&amp;lt;ClusterInfo&amp;gt;	|聚合簇数据	|
|clusters |Array&amp;lt;ClusterInfo&amp;gt; |aggregate cluster data |

`markerClusterClick`
聚合簇的点击事件。
The click event of the aggregate cluster.

返回参数
Return parameter
|参数	|类型		|说明	|
|Parameter |Type |Description |
|:-|:-|:-|
|cluster|ClusterInfo|聚合簇	|
|cluster|ClusterInfo|Aggregate cluster |

`ClusterInfo` 结构
`ClusterInfo` structure

|参数		|类型						|说明						|
|Parameter |Type |Description |
|:-|:-|:-|
|clusterId	|Number						|聚合簇的 id				|
|clusterId |Number |ID of the clustered cluster |
|center		|LatLng						|聚合簇的坐标				|
|center |LatLng |Coordinates of the aggregation cluster |
|markerIds	|Array&amp;lt;Number&amp;gt;|该聚合簇内的点标记数据数组	|
|markerIds |Array&amp;lt;Number&amp;gt;|The point marker data array in the aggregation cluster |

示例代码
Sample code

```
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```


## mapSearch 模块(仅app-nvue支持)
## mapSearch module (only app-nvue support)

#### reverseGeocode(Object,callback)
> 反向地理编码
> Reverse Geocoding

##### Object
|属性|类型 |默认值|必填|说明|
|Attribute|Type |Default Value|Required|Description|
|:--|:--|:--|:--|:--|
|point|Object| |是|{latitude: 纬度, longitude: 经度}|
|point|Object| |is|{latitude: latitude, longitude: longitude}|

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|属性|类型 |说明|
|Attribute|Type |Description|
|:--|:--|:--|
|type|String|"success" 表示成功， "fail" 表示失败|
|type|String|"success" means success, "fail" means failure|
|code|Number| 成功返回 0,失败返回相应 code 码|
|code|Number| Success returns 0, failure returns the corresponding code code|
|message|String|失败描述|
|message|String|Failure Description|
|address|String|查询后地址 （成功时返回）|
|address|String|Address after query (returned when successful)|

#### poiSearchNearBy（Object,callback);
> 周边检索
> Peripheral Search

##### Object

|属性|类型 |默认值|必填|说明|
|Attribute|Type |Default value|Required|Description|
|:--|:--|:--|:--|:--|
|point|Object| |是|检索的中心点坐标 {latitude: 纬度, longitude: 经度}|
|point|Object| |Yes|Retrieved center point coordinates {latitude: latitude, longitude: longitude}|
|key|String| | 是|搜索关键字|
|key|String| | Yes|Search Keyword|
|radius|Number|3000|否|检索的半径，单位为米|
|radius|Number|3000|No|The radius to be retrieved, in meters|
|index|Number|1|否|要获取检索结果的页号索引|
|index|Number|1|No|The index of the page number to get the search result|

##### callback 返回 Object 参数说明
##### callback returns Object parameter description
|属性|类型 |说明|
|Attribute|Type |Description|
|:--|:--|:--|
|type|String|"success" 表示成功， "fail" 表示失败|
|type|String|"success" means success, "fail" means failure|
|code|Number| 成功返回 0,失败返回相应 code 码|
|code|Number| Success returns 0, failure returns the corresponding code code|
|message|String|失败描述|
|message|String|Failure Description|
|totalNumber|Number|返回的POI数目|
|totalNumber|Number|Number of POI returned|
|currentNumber|Number|当前页POI数目|
|currentNumber|Number|The number of POIs on the current page|
|pageNumber|Number|页数|
|pageNumber|Number|Page Number|
|pageIndex|Number|当前页号索引|
|pageIndex|Number|Current page index|
|poiList|Array.&lt;poiObject&gt;|POI信息数组|
|poiList|Array.&lt;poiObject&gt;|POI information array|


##### poiObject
|属性|类型 |说明|
|Attribute|Type |Description|
|:--|:--|:--|
|location|Object|{latitude: 纬度, longitude: 经度}|
|location|Object|{latitude: latitude, longitude: longitude}|
|name|String|名称|
|name|String|Name|
|type|String|类型|
|type|String|Type|
|distance|Number|距离（单位米）|
|distance|Number|Distance (in meters)|
|address|String|地址|
|address|String|Address|

**Tips**

- App端使用map，nvue比vue更强大，且没有层级问题。
- App uses map, nvue is more powerful than vue, and there is no hierarchical problem.
- App端vue页面默认为高德地图，也可以选择百度地图。但app-nvue只有高德地图，没有百度地图。以及地图选择api（mapSearch），只支持高德地图。
- The vue page on the App side defaults to the Gaode map, or you can choose Baidu map. But app-nvue only has Gaode maps, not Baidu maps. As well as the map selection api (mapSearch), only Gaode maps are supported.
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- The H5 terminal obtains location information and needs to be deployed on the **https** service. The local preview (localhost) can still use the http protocol.
- 无 GPS 模块的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- When a PC device without a GPS module uses the Chrome browser, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.
- App 端使用地图组件需要向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- To use the map component on the App side, you need to apply for SDK qualification from third-party service providers such as AutoNavi or Baidu to obtain the AppKey. When packaging, you need to fill in the Appkey in the SDK configuration of the manifest. There is a detailed application guide in the manifest visualization interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- The ``<map>'' component defaults to the coordinates of the National Bureau of Survey and Measurement. When calling ``uni.getLocation`` to return the result to the ``<map>`` component, the type must be specified as gcj02.