#### map

地图组件。
Map component.

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者。
The map component is used to display the map, and the positioning API only obtains the coordinates, do not confuse the two.

**平台差异说明**
**Platform difference description**


|App|H5|
|:-:|:-:|
|√|√|

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
|Attribute name|Type|Default value|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|longitude|Number||中心经度||
|longitude|Number||Central Longitude||
|latitude|Number||中心纬度||
|latitude|Number||Central Latitude||
|scale|Number|16|缩放级别，取值范围为3-20||
|scale|Number|16|Zoom level, the value range is 3-20||
|min-scale|Number|3|最小缩放级别|App-nvue 3.1.0+|
|min-scale|Number|3|Minimum zoom level|App-nvue 3.1.0+|
|max-scale|Number|20|最大缩放级别|App-nvue 3.1.0+|
|max-scale|Number|20|Maximum zoom level|App-nvue 3.1.0+|
|layer-style|Number|1|个性化地图|App-nvue 3.1.0+|
|layer-style|Number|1|Personalized map|App-nvue 3.1.0+|
|markers|Array||标记点||
|markers|Array||Markers||
|polyline|Array||路线||
|polyline|Array||Route||
|circles|Array||圆||
|circles|Array||circle||
|controls|Array||控件||
|controls|Array||Controls||
|include-points|Array||缩放视野以包含所有给定的坐标点|App-nvue 2.1.5+、H5|
|include-points|Array||Zoom the field of view to include all given coordinate points|App-nvue 2.1.5+, H5|
|enable-3D|Boolean|false|是否显示3D楼块|App-nvue 2.1.5+|
|enable-3D|Boolean|false|Whether to display 3D building blocks|App-nvue 2.1.5+|
|show-compass|Boolean|false|是否显示指南针|App-nvue 2.1.5+|
|show-compass|Boolean|false|Whether to show the compass|App-nvue 2.1.5+|
|enable-zoom|Boolean|true|是否支持缩放|App-nvue 2.1.5+|
|enable-zoom|Boolean|true|Whether zooming is supported|App-nvue 2.1.5+|
|enable-scroll|Boolean|true|是否支持拖动|App-nvue 2.1.5+|
|enable-scroll|Boolean|true|Whether to support dragging|App-nvue 2.1.5+|
|enable-rotate|Boolean|false|是否支持旋转|App-nvue 2.1.5+|
|enable-rotate|Boolean|false|Whether to support rotation|App-nvue 2.1.5+|
|enable-overlooking|Boolean|false|是否开启俯视|App-nvue 2.1.5+|
|enable-overlooking|Boolean|false|Whether to enable the overlook|App-nvue 2.1.5+|
|enable-satellite|Boolean|false|是否开启卫星图|App-nvue 2.1.5+|
|enable-satellite|Boolean|false|Whether to enable the satellite image|App-nvue 2.1.5+|
|enable-traffic|Boolean|false|是否开启实时路况|App-nvue 2.1.5+|
|enable-traffic|Boolean|false|Whether to enable real-time traffic|App-nvue 2.1.5+|
|enable-poi|Boolean|false|是否展示 POI 点|App-nvue 3.1.0+|
|enable-poi|Boolean|false|Whether to display POI points|App-nvue 3.1.0+|
|enable-building|Boolean|false|是否展示建筑物|App-nvue 3.1.0+ 支持 (**废除原enable-3D属性 高德地图默认开启建筑物就是3D无法设置**)|
|enable-building|Boolean|false|Whether to display the building|App-nvue 3.1.0+ support (**Abolish the original enable-3D attribute. The default building is turned on in the AutoNavi map, and the building cannot be set in 3D**)|
|show-location|Boolean||显示带有方向的当前定位点|H5|
|show-location|Boolean||Show the current location with direction|H5|
|polygons|Array.`<polygon>`||多边形|App-nvue 2.1.5+|
|polygons|Array.`<polygon>`||Polygon|App-nvue 2.1.5+|
|enable-indoorMap|Boolean|false|是否展示室内地图|App-nvue 3.1.0+|
|enable-indoorMap|Boolean|false|Whether to display indoor map|App-nvue 3.1.0+|
|@markertap|EventHandle||点击标记点时触发，e.detail = {markerId}|App-nvue 2.3.3+, App平台需要指定 marker 对象属性 id|
|@markertap|EventHandle||When a marker is clicked, e.detail = {markerId}|App-nvue 2.3.3+, App platform needs to specify the marker object attribute id|
|@callouttap|EventHandle||点击标记点对应的气泡时触发，e.detail = {markerId}||
|@callouttap|EventHandle||It is triggered when the bubble corresponding to the mark point is clicked, e.detail = {markerId}||
|@controltap|EventHandle||点击控件时触发，e.detail = {controlId}||
|@controltap|EventHandle||Triggered when the control is clicked, e.detail = {controlId}||
|@regionchange|EventHandle||视野发生变化时触发|H5|
|@regionchange|EventHandle||Triggered when the field of view changes|H5|
|@tap|EventHandle||点击地图时触发; App-nuve||
|@tap|EventHandle||Triggered when the map is clicked; App-nuve||
|@updated|EventHandle||在地图渲染更新完成时触发|H5|
|@updated|EventHandle||Triggered when the map rendering update is complete|H5|
|@anchorpointtap|EventHandle||点击定位标时触发，e.detail = {longitude, latitude}|App-nvue 3.1.0+|
|@anchorpointtap|EventHandle||Triggered when the anchor is clicked, e.detail = {longitude, latitude}|App-nvue 3.1.0+|

**注意** 
**Notice** 

- `<map>` 组件的宽/高推荐写直接量，比如：750rpx，不要设置百分比值。
- It is recommended to write the width/height of the `<map>` component directly, for example: 750rpx, do not set a percentage value.
- `uni-app` 只支持 `gcj02` 坐标
- `uni-app` only supports `gcj02` coordinates
- App平台 `layer-style` 属性需要在地图服务商后台创建，值设置为高德后台申请的字符串，[详情](https://developer.amap.com/api/android-sdk/guide/create-map/custom)
- The `layer-style` attribute of the App platform needs to be created in the backend of the map service provider, and the value is set to the string applied by the AutoNavi backend, [details](https://developer.amap.com/api/android-sdk/guide/ create-map/custom)

**markers**

标记点用于在地图上显示标记的位置
Marker points are used to show the location of the marker on the map

|属性|说明|类型|必填|备注|平台差异说明|
|Attribute|Description|Type|Required|Remarks|Description of platform differences|
|:-|:-|:-|:-|:-|:-|
|id|标记点id|Number|是|marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。最大限制9位数||
|id|Marker id|Number|Yes|marker click event callback will return this id. It is recommended to set the Number type id for each marker to ensure better performance when updating the marker. Maximum limit of 9 digits||
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90||
|latitude|Latitude|Number|is|floating point number, range -90 ~ 90||
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180||
|longitude|longitude|Number|is|floating point number, range -180 ~ 180||
|title|标注点名|String|否|点击时显示，callout存在时将被忽略|App-nvue 2.1.5+、H5|
|title|Mark the name|String|No|Displayed when clicked, and will be ignored when the callout exists|App-nvue 2.1.5+, H5|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径||
|iconPath|Displayed icon|String|is|The path of the picture in the project directory, supports relative path writing, starting with'/' means relative applet root directory; also supports temporary path||
|rotate|旋转角度|Number|否|顺时针旋转的角度，范围 0 ~ 360，默认为 0|App-nvue 2.1.5+|
|rotate|rotation angle|Number|No|clockwise rotation angle, range 0 ~ 360, default is 0|App-nvue 2.1.5+|
|alpha|标注的透明度|Number|否|默认1，无透明，范围 0 ~ 1|App-nvue 2.1.5+|
|alpha|Marked transparency|Number|No|default 1, no transparency, range 0 ~ 1|App-nvue 2.1.5+|
|width|标注图标宽度|Number|否|默认为图片实际宽度|App-nvue 2.1.5+、H5|
|width|Label icon width|Number|No|The default is the actual width of the picture|App-nvue 2.1.5+, H5|
|height|标注图标高度|Number|否|默认为图片实际高度|App-nvue 2.1.5+、H5|
|height|Label icon height|Number|No|The default is the actual height of the picture|App-nvue 2.1.5+, H5|
|callout|自定义标记点上方的气泡窗口|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+|
|callout|The bubble window above the custom marker point|Object|No|The supported attributes are shown in the table below, and line breaks can be recognized. |App-nvue 2.1.5+|
|label|为标记点旁边增加标签|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、H5、App|
|label|Add a label next to the marked point |Object|No| The supported attributes are shown in the table below, which can recognize line breaks. |App-nvue 2.1.5+, H5, App|
|anchor|经纬度在标注图标的锚点，默认底边中点|Object|否|{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点|App-nvue 2.1.5+、H5|
|anchor|Longitude and latitude are at the anchor point of the label icon, the default bottom side midpoint |Object|No|{x, y}, x means horizontal (0-1), y means vertical (0-1). {x: .5, y: 1} represents the midpoint of the bottom edge |App-nvue 2.1.5+, H5|
|clusterId|自定义点聚合簇效果时使用|Number|否||App-nvue 3.1.0+|
|clusterId|Used when customizing the point aggregation cluster effect|Number|No||App-nvue 3.1.0+|
|customCallout|自定义气泡窗口|Object|否||app暂时不支持|
|customCallout|Custom Bubble Window|Object|No||app does not support temporarily|
|aria-label|无障碍访问，（属性）元素的额外描述|String|否||App-nvue 3.1.0+|
|aria-label|Accessibility, additional description of (attribute) elements|String|No||App-nvue 3.1.0+|

**marker 上的气泡 callout**
**Bubble callout on marker**

|属性|说明|类型|平台差异说明|
|Attribute|Description|Type|Platform difference description|
|:-|:-|:-|:-|
|content|文本|String||
|content|text|String||
|color|文本颜色|String|App-nvue 2.1.5+、H5|
|color|Text color|String|App-nvue 2.1.5+, H5|
|fontSize|文字大小|Number|App-nvue 2.1.5+、H5|
|fontSize|Text size|Number|App-nvue 2.1.5+, H5|
|borderRadius|callout边框圆角|Number|App-nvue 2.1.5+、H5|
|borderRadius|callout border rounded corners|Number|App-nvue 2.1.5+、H5|
|bgColor|背景色|String|App-nvue 2.1.5+、H5|
|bgColor|Background color|String|App-nvue 2.1.5+, H5|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、H5|
|padding|Text margin space|Number|App-nvue 2.1.5+、H5|
|display|'BYCLICK':点击显示; 'ALWAYS':常显|String|App-nvue 2.1.5+、H5|
|display|'BYCLICK': click to display;'ALWAYS': often show|String|App-nvue 2.1.5+, H5|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+|
|textAlign|Text alignment. Valid values: left, right, center|String|App-nvue 2.1.5+|

**marker 上的标签 label**
**label label on marker**

|属性|说明|类型|平台差异说明|
|Attribute|Description|Type|Platform difference description|
|:-|:-|:-|:-|
|content|文本|String||
|content|text|String||
|color|文本颜色|String|App-nvue 2.1.5+、H5|
|color|Text color|String|App-nvue 2.1.5+, H5|
|fontSize|文字大小|Number|App-nvue 2.1.5+、H5|
|fontSize|Text size|Number|App-nvue 2.1.5+, H5|
|x|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、H5|
|x|label's coordinates, the origin is the latitude and longitude corresponding to the marker |Number|App-nvue 2.1.5+, H5|
|y|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、H5|
|y|label's coordinates, the origin is the latitude and longitude corresponding to the marker |Number|App-nvue 2.1.5+, H5|
|borderRadius|边框圆角|Number|App-nvue 2.1.5+|
|borderRadius|Border rounded corners|Number|App-nvue 2.1.5+|
|bgColor|背景色|String|App-nvue 2.1.5+|
|bgColor|Background color|String|App-nvue 2.1.5+|
|padding|文本边缘留白|Number|App-nvue 2.1.5+|
|padding|Text edge margin|Number|App-nvue 2.1.5+|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+|
|textAlign|Text alignment. Valid values: left, right, center|String|App-nvue 2.1.5+|
|clusterId|自定义点聚合簇效果时使用|Number|App-nvue 3.1.0+|
|clusterId|Used when customizing the point aggregation cluster effect|Number|App-nvue 3.1.0+|
|customCallout|自定义气泡窗口|Object|App暂时不支持|
|customCallout|Custom Bubble Window|Object|App does not support temporarily|
|aria-label|无障碍访问，（属性）元素的额外描述|String|App-nvue 3.1.0+|
|aria-label|Accessibility, additional description of (attribute) elements|String|App-nvue 3.1.0+|

**polyline**

指定一系列坐标点，从数组第一项连线至最后一项
Specify a series of coordinate points, from the first item of the array to the last item

|属性|说明|类型|必填|备注|平台差异说明|
|Attribute|Description|Type|Required|Remarks|Description of platform differences|
|:-|:-|:-|:-|:-|:-|
|points|经纬度数组|Array|是|[{latitude: 0, longitude: 0}]||
|points|Array of latitude and longitude|Array|Yes|[{latitude: 0, longitude: 0}]||
|color|线的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA||
|color|Line color|String|No|8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #0000AA||
|width|线的宽度|Number|否|||
|width|Line width|Number|No|||
|dottedLine|是否虚线|Boolean|否|默认false|App-nvue 2.1.5+、H5|
|dottedLine|Is it a dotted line|Boolean|No|default false|App-nvue 2.1.5+、H5|
|arrowLine|带箭头的线|Boolean|否|默认false|App-nvue 2.1.5+|
|arrowLine|Line with arrow|Boolean|No|default false|App-nvue 2.1.5+|
|arrowIconPath|更换箭头图标|String|否|在arrowLine为true时生效|App-nvue 2.1.5+|
|arrowIconPath|Replace the arrow icon|String|No|Valid when arrowLine is true|App-nvue 2.1.5+|
|borderColor|线的边框颜色|String|否||H5|
|borderColor|The border color of the line|String|No||H5|
|borderWidth|线的厚度|Number|否||H5|
|borderWidth|Line thickness|Number|No||H5|
|colorList|彩虹线|Array|false|存在时忽略 color 值|App-nvue 3.1.0+|
|colorList|Rainbow Line|Array|false|Ignore the color value when it exists|App-nvue 3.1.0+|
|level|压盖关系，默认为 abovelabels|String|false||App不支持（**需SDK提供支持**）|
|level|Overlap relationship, the default is abovelabels|String|false||App does not support (**Requires SDK to provide support**)|

**polygon**<br>
指定一系列坐标点，根据 points 坐标数据生成闭合多边形
Specify a series of coordinate points and generate a closed polygon according to the points coordinate data

|属性|说明|类型|必填|备注
|Attribute|Description|Type|Required|Remarks
|:--|:--|:--|:--|:--|
|points|经纬度数组|array|是|[{latitude: 0, longitude: 0}]
|points|array of latitude and longitude|array|is|[{latitude: 0, longitude: 0}]
|strokeWidth|描边的宽度|Number|否||
|strokeWidth|StrokeWidth|Number|No||
|strokeColor|描边的颜色|String|否|十六进制|
|strokeColor|Stroke Color|String|No|Hexadecimal|
|fillColor|填充颜色|String|否|十六进制|
|fillColor|fill color|String|No|hexadecimal|
|zIndex|设置多边形 Z 轴数值|Number|否||
|zIndex|Set the value of the polygon Z axis|Number|No||
|level|压盖关系，默认为 abovelabels|String|false|App不支持（**需SDK提供支持**）|
|level|Overlap relationship, the default is abovelabels|String|false|Not supported by App (**Support provided by SDK**)|

**circles**

在地图上显示圆
Show circle on the map

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90|
|latitude|Latitude|Number|is|floating point number, range -90 ~ 90|
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180|
|longitude|longitude|Number|is|floating point number, range -180 ~ 180|
|color|描边的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA|
|color|Stroke color|String|No|8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #0000AA|
|fillColor|填充颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA|
|fillColor|fill color|String|No|8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #0000AA|
|radius|半径|Number|是||
|radius|radius|Number|is||
|strokeWidth|描边的宽度|Number|否|&nbsp;|
|strokeWidth|StrokeWidth|Number|No|&nbsp;|
|level|压盖关系，默认为 abovelabels|String|false|App不支持（**需SDK提供支持**）|
|level|Overlap relationship, the default is abovelabels|String|false|Not supported by App (**Support provided by SDK**)|

**controls**

在地图上显示控件，控件不随着地图移动
Display the control on the map, the control does not move with the map

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|id|控件id|Number|否|在控件点击事件回调会返回此id|
|id|Control id|Number|No|This id will be returned when the control click event callback|
|position|控件在地图的位置|Object|是|控件相对地图位置|
|position|The position of the control on the map|Object|Yes|The relative map position of the control|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对项目根目录；也支持临时路径|
|iconPath|Displayed icon|String|is|The path of the picture in the project directory, supports relative path writing, starting with'/' means relative project root directory; temporary path is also supported|
|clickable|是否可点击|Boolean|否|默认不可点击|
|clickable|whether clickable|Boolean|No|default is not clickable|

**position**

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|left|距离地图的左边界多远|Number|否|默认为0|
|left|how far is it from the left border of the map|Number|No|default is 0|
|top|距离地图的上边界多远|Number|否|默认为0|
|top|How far is it from the upper border of the map|Number|No|The default is 0|
|width|控件宽度|Number|否|默认为图片宽度|
|width|Control width|Number|No|The default is the image width|
|height|控件高度|Number|否|默认为图片高度|
|height|Control height|Number|No|The default is the picture height|

地图组件的经纬度必填，如果不填经纬度则默认值是北京的经纬度。
The latitude and longitude of the map component is required. If the latitude and longitude are not filled, the default value is the latitude and longitude of Beijing.

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/map/map)
**Example** [View example](https://hellouniapp.dcloud.net.cn/pages/component/map/map)


```html
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
```

```javascript
export default {
	data() {
		return {
      id:0, 
	  // 使用 marker点击事件 需要填写id
	  // Use marker click event to fill in id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [{
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '../../../static/location.png'
			}, {
				latitude: 39.90,
				longitude: 116.39,
				iconPath: '../../../static/location.png'
			}]
		}
	},
	methods: {

	}
}
```

map 组件相关操作的 JS API：[uni.createMapContext](api/location/map?id=createmapcontext)
JS API of map component related operations: [uni.createMapContext](api/location/map?id=createmapcontext)
nvue map 更换箭头图标格式参考: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)
nvue map replacement arrow icon format reference: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)

**注意事项**
**Precautions**

- app-vue中，`<map>` 组件是由引擎创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。在`<map>`上绘制内容，可使用组件自带的marker、controls等属性，也可以使用`<cover-view>`组件。App端还可以使用plus.nativeObj.view 或 subNVue 绘制原生内容，[参考](/component/native-component)。另外App端nvue文件不存在层级问题。
- In app-vue, the `<map>` component is a native component created by the engine. Its level is the highest, and the level cannot be controlled by z-index. To draw content on `<map>`, you can use the marker, controls and other attributes that come with the component, or you can use the `<cover-view>` component. On the App side, you can also use plus.nativeObj.view or subNVue to draw native content, [Reference](/component/native-component). In addition, there is no hierarchical problem with nvue files on the App side.
- vue里的map则与plus.map功能一致。**App端使用map推荐使用nvue。**
- The map in vue has the same function as plus.map. **Nvue is recommended to use map on the App side. **
- App端使用到本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。
- If you use local images on the App side, you need to set the resource to release mode before packaging, add a runmode node to app-plus in the manifest file, and set the value to liberate.
- 在涉及层级问题的app-vue中，请勿在 scroll-view、swiper、picker-view、movable-view 中使用 `<map>` 组件。
- In app-vue that involves hierarchical issues, please do not use the `<map>` component in scroll-view, swiper, picker-view, and movable-view.
- app-vue 中，css 动画对 `<map>` 组件无效。
- In app-vue, css animation is invalid for `<map>` component.
- map 组件使用的经纬度是国测局坐标，调用 uni.getLocation 接口需要指定 type 为 gcj02。
- The latitude and longitude used by the map component are the coordinates of the National Bureau of Survey and Measurement, and calling the uni.getLocation interface needs to specify the type as gcj02.
- `<map>` 组件在不同平台的底层引擎是不同的：H5为腾讯地图；App为高德地图。app-vue也可以使用百度地图，在manifest中配置，打包后生效，但app-nvue只支持高德地图。另外选择地图、查看地图位置的API也仅支持高德地图。App端如无特殊必要，建议使用高德地图。
- The underlying engine of the `<map>` component is different on different platforms: H5 is Tencent map; App is Gaode map. App-vue can also use Baidu map, which is configured in the manifest and takes effect after packaging, but app-nvue only supports Gaode maps. In addition, the API for selecting maps and viewing map locations also only supports Gaode maps. If there is no special need on the App side, it is recommended to use Gaode map.
- map 组件默认的api是参考微信小程序的，如需要使用plus.map，可以通过`$getAppMap`获取原生地图对象，[详见](https://uniapp.dcloud.io/api/location/map)。注意nvue的map组件不是plus.map对象，无法使用`$getAppMap`
- The default api of the map component refers to the WeChat applet. If you need to use plus.map, you can get the native map object through `$getAppMap`, [see details](https://uniapp.dcloud.io/api/location/ map). Note that the map component of nvue is not a plus.map object, so `$getAppMap` cannot be used
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- The H5 terminal obtains location information and needs to be deployed on the **https** service. The local preview (localhost) can still use the http protocol.
- 无GPS模块或GPS无信号的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- When using the Chrome browser on a PC device without a GPS module or GPS signal, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.
- App 端使用地图组件需要**向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest文件中勾选相应模块，在SDK配置中填写Appkey。注意申请包名和打包时的包名需匹配一致，证书信息匹配**。在manifest可视化界面有详细申请指南。
- To use the map component on the App side, you need to apply for SDK qualification from a third-party service provider such as AutoNavi or Baidu to obtain the AppKey. When packaging, you need to check the corresponding module in the manifest file and fill in the Appkey in the SDK configuration. Note that the application package name must match the package name when packaging, and the certificate information must match**. There is a detailed application guide in the manifest visualization interface.
- H5 端使用地图和定位相关需要在[腾讯地图开放平台](https://lbs.qq.com/dev/console/key/manage)申请密钥，填写在 [manifest.json](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig) 中。
- H5 terminal use map and positioning related need to apply for a key in [Tencent Map Open Platform](https://lbs.qq.com/dev/console/key/manage), fill in [manifest.json](https:/ /uniapp.dcloud.io/collocation/manifest?id=h5sdkconfig).
- ios nvue Color 不支持 ARGB 十六进制，使用 rgba(r,g,b,a) 代替
- ios nvue Color does not support ARGB hexadecimal, use rgba(r,g,b,a) instead
##### FAQ

Q：应用中使用了 `<map>` 组件，打包为App时，提示缺少权限模块怎么办？
Q: The `<map>` component is used in the application, and when it is packaged as an App, it prompts that the permission module is missing, what should I do?
A：App端原生地图，依赖第三方的 SDK，因此打包移动应用时，需要在manifest中勾选相关的权限并填写 key 信息。详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
A: The native map on the App side relies on a third-party SDK, so when packaging a mobile application, you need to check the relevant permissions in the manifest and fill in the key information. For details, please see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)

Q：国外应用想使用谷歌地图/google地图怎么办？
Q: What should I do if foreign applications want to use Google Maps/Google Maps?
A：1. 可以在web-view下调用谷歌的web地图；2. 可以写一个原生插件封装谷歌原生地图，具体参考uni-app插件市场的原生插件开发教程。插件市场已有三方写好的[地图插件](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E5%9C%B0%E5%9B%BE)。
A: 1. You can call Google's web map under web-view; 2. You can write a native plug-in to encapsulate Google's native map. For details, please refer to the uni-app plug-in market's native plug-in development tutorial. The plug-in market has been written by three parties [Map plug-in](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E5%9C%B0%E5% 9B%BE).