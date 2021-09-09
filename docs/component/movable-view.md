#### movable-area

可拖动区域
Draggable area components.

由于app的架构是逻辑层与视图层分离，使用js监听拖动时会引发逻辑层和视图层的频繁通讯，影响性能。为了方便高性能的实现拖动，平台特封装了`movable-area`组件。
Since the architecture of app and applet is separated from the logic layer and the view layer, using js to monitor the drag will cause frequent communication between the logic layer and the view layer and affect performance. In order to facilitate high-performance dragging, the platform specially encapsulates `movable-area`components.

`movable-area`指代可拖动的范围，在其中内嵌`movable-view`组件用于指示可拖动的区域。
`movable-area`Refers to the draggable range, in which embedded `movable-view`components are used to indicate the draggable area.

即手指/鼠标按住`movable-view`拖动或双指缩放，但拖不出`movable-area`规定的范围。
That is, the finger/mouse is held down and `movable-view`dragged or two-finger zooming, but the drag cannot go out of the `movable-area`specified range.

当然也可以不拖动，而使用代码来触发`movable-view`在`movable-area`里的移动缩放。
Of course, you can also use code instead of dragging to trigger `movable-view`the `movable-area`zoom in.。

`movable-view`的规范另见[下文](/component/movable-view?id=movable-view)。

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**属性说明**
**Property description**

|属性名|类型|默认值|说明|
| Attribute name | Types of | Defaults | Description                                                  |
|:-|:-|:-|:-|
|scale-area|Boolean|false|当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area|
|scale-area|Boolean|false|When the movable-view inside is set to support two-finger zoom, setting this value can modify the effective area of the zoom gesture to the entire movable-area|

**注意：movable-area 必须设置 width 和 height 属性，不设置默认为 10px**
**Note: The width and height properties of the movable-area must be set, and the default is 10px if it is not set**
- movable-area app-nvue平台 暂不支持手势缩放，并且和滚动冲突。
- The movable-area app-nvue platform does not support gesture zoom, and conflicts with scrolling.


#### movable-view

可移动的视图容器，在页面中可以拖拽滑动或双指缩放。
Movable view container, you can drag and slide or pinch to zoom on the page.

`movable-view`必须在`movable-area`组件中，并且必须是直接子节点，否则不能移动。
`movable-view`It must be in the `movable-area`component and must be a direct child node, otherwise it cannot be moved.

**平台差异说明**
**Property description**

|App|H5|
|:-:|:-:|
|√|√|

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|direction|String|none|movable-view的移动方向，属性值有all、vertical、horizontal、none||
|direction|String|none|The moving direction of movable-view, the attribute values are all, vertical, horizontal, none||
|inertia|Boolean|false|movable-view是否带有惯性||
|inertia|Boolean|false|Whether movable-view has inertia| 
|out-of-bounds|Boolean|false|超过可移动区域后，movable-view是否还可以移动||
|out-of-bounds|Boolean|false|After exceeding the movable area, can the movable-view still move||
|x|Number / String||定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画||
|x|Number / String||Define the offset in the x-axis direction. If the value of x is not within the movable range, it will automatically move to the movable range; changing the value of x will trigger the animation||
|y|Number / String||定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画||
|y|Number / String||Define the offset in the y-axis direction. If the value of y is not within the movable range, it will automatically move to the movable range; changing the y value will trigger the animation||
|damping|Number|20|阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快||
|damping|Number|20|Damping coefficient, used to control the animation when x or y changes and the animation of rebounding. The larger the value, the faster the movement|
|friction|Number|2|摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值||
|friction|Number|2|Friction coefficient, used to control the animation of inertial sliding, the larger the value, the greater the friction, the faster the sliding will stop; it must be greater than 0, otherwise it will be set to the default value|
|disabled|Boolean|false|是否禁用||
|disabled|Boolean|false|Whether to disable||
|scale|Boolean|false|是否支持双指缩放，默认缩放手势生效区域是在movable-view内||
|scale|Boolean|false|Whether to support two-finger zoom, the default zoom gesture effective area is in the movable-view||
|scale-min|Number|0.5|定义缩放倍数最小值||
|scale-min|Number|0.5|Define the minimum zoom factor||
|scale-max|Number|10|定义缩放倍数最大值||
|scale-max|Number|10|Define the maximum zoom factor||
|scale-value|Number|1|定义缩放倍数，取值范围为 0.5 - 10||
|scale-value|Number|1|Define the zoom factor, the value range is 0.5-10||
|animation|Boolean|true|是否使用动画||
|animation|Boolean|true|Whether to use animation||
|@change|EventHandle||拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）||
|@change|EventHandle||Event triggered during dragging, event.detail = {x: x, y: y, source: source}, where source represents the reason for the movement, and the value can be touch (drag), touch-out-of-bounds (Beyond the range of movement), out-of-bounds (rebound after exceeding the range of movement), friction (inertia) and empty string (setData)||
|@scale|EventHandle||缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}，||
|@scale|EventHandle||Event triggered during zooming, event.detail = {x: x, y: y, scale: scale},||

除了基本事件外，movable-view提供了两个特殊事件
In addition to basic events, movable-view provides two special events

|类型|触发条件|
| Types of   | Triggering conditions                                        |
|:-|:-|
|htouchmove|初次手指触摸后移动为横向的移动，如果catch此事件，则意味着touchmove事件也被catch|
|htouchmove|The movement after the first finger touch is a horizontal movement. If this event is caught, it means that the touchmove event is also caught|
|vtouchmove|初次手指触摸后移动为纵向的移动，如果catch此事件，则意味着touchmove事件也被catch|
|vtouchmove|The movement after the first finger touch is a vertical movement. If this event is caught, it means that the touchmove event is also caught|

> movable-view 必须设置width和height属性，不设置默认为10px
> 
> movable-view 默认为绝对定位，top和left属性为0px
> Movable-view defaults to absolute positioning, top and left attributes are 0px
> 
> 当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）
> When the movable-view is smaller than the movable-area, the moving range of the movable-view is within the movable-area; when the movable-view is larger than the movable-area, the moving range of the movable-view must include the movable-area (x-axis direction and y (Axial direction is considered separately)

**Tips**
- movable-view必须在`<movable-area/>`组件中，并且必须是直接子节点，否则不能移动。
- 如果遇到x、y、scale属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=componentsolutions)
- 除了H5端和app-nvue端，其他平台不支持内嵌video、map等原生组件。

**示例**[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/movable-view/movable-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可快速体验完整示例。
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="page-body">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Example 1
				<text>\nmovable-view area is smaller than movable-area</text>
			</view>
			<movable-area>
				<movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
			</movable-area>
			<view @tap="tap" class="uni-link uni-center uni-common-mt">
				Click here to move to (30px, 30px)
			</view>
			<view class="uni-title uni-common-mt">
				Example 2
				<text>\nmovable-view area is larger than movable-area</text>
			</view>
			<movable-area>
				<movable-view class="max" direction="all">text</movable-view>
			</movable-area>
		</view>
	</view>
</template>
```

```js
export default {
    data() {
        return {
            x: 0,
            y: 0,
            old: {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        tap: function(e) {
            this.x = this.old.x
            this.y = this.old.y
            this.$nextTick(function() {
                this.x = 30
                this.y = 30
            })
        },
        onChange: function(e) {
            this.old.x = e.detail.x
            this.old.y = e.detail.y
        }
    }
}
```

 ![uni](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/41b00010-4f30-11eb-a16f-5b3e54966275.png)
