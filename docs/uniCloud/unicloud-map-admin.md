## unicloud-map-admin

### 介绍@introduce

unicloud-map-admin是[unicloud-map](unicloud-map.md)组件的admin插件，提供了POI管理，可以在管理端可视化的标记POI。标记的结果存入opendb表，客户端的[unicloud-map](unicloud-map.md)组件可以自动直接拉取。

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=unicloud-map-admin](https://ext.dcloud.net.cn/plugin?name=unicloud-map-admin)

运行效果图

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/412.png)

### 使用教程

> 使用方式简单，只需导入对应的插件至uni-admin项目中即可。

**安装unicloud-map-admin插件**

在插件市场中找到[unicloud-map-admin](https://ext.dcloud.net.cn/plugin?name=unicloud-map-admin)，将插件导入至[uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html)项目中。

如果还未使用过uni-admin，请先在HBuilderX新建项目时选择uni-admin项目。并需要了解[uni-admin](https://uniapp.dcloud.net.cn/uniCloud/admin.html)的相关知识。

导入unicloud-map-admin后，运行启动uni-admin，在web管理后台，点击左侧菜单栏的菜单管理，添加“内容管理”菜单。

如下图所示：

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/414.png)

导入后刷新页面，在uni-admin左侧菜单，可看到地图管理的菜单项，点击即可进入相关页面。

注意：如果刷新页面后没有出现菜单，查看此处菜单是否启用，如下图所示：

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/415.png)

### 配置地图key

打开`manifest.json`文件，点击Web配置，配置腾讯地图或高德地图任意一个即可

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/416.png)

### unicloud-map-admin的opendb数据表@database

unicloud-map-admin需要创建以下表后才能正常运行，可以右键插件database目录下的`opendb-poi.schema.json`上传Schema

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/411.png)

- 地图POI表 [opendb-poi](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-poi/collection.json)

### 常见问题

#### 添加和编辑POI时，点击选择地理位置，不显示地图？

需要配置地图key，打开`manifest.json`文件，点击Web配置，配置腾讯地图或高德地图任意一个即可

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/416.png)

#### 添加和编辑POI时，点击选择地理位置，没有确认按钮？

将以下代码添加到uni-admin的`/common/uni.css`文件最后一行

```css
/* 地图选择top需要大于topWindow的高度 */
.uni-system-choose-location{
	display: block;
	position: fixed;
	left: 0;
	top: 60px;
	width: 100%;
	height: calc(100% - 60px);
	background: #f8f8f8;
}
```

