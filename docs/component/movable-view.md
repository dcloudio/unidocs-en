#### movable-area

可拖动区域
Draggable area

由于app的架构是逻辑层与视图层分离，使用js监听拖动时会引发逻辑层和视图层的频繁通讯，影响性能。为了方便高性能的实现拖动，平台特封装了`movable-area`组件。
Since the architecture of app is that the logical layer is separated from the view layer, using js to listen to the dragging will cause frequent communication between the logical layer and the view layer, which will affect the performance. In order to facilitate the implementation of high-performance dragging, the platform specially encapsulates the `movable-area` component.

`movable-area`指代可拖动的范围，在其中内嵌`movable-view`组件用于指示可拖动的区域。
`movable-area` refers to the draggable area, in which the embedded `movable-view` component is used to indicate the draggable area.

即手指/鼠标按住`movable-view`拖动或双指缩放，但拖不出`movable-area`规定的范围。
That is, drag with the mouse while holding down `movable-view` or zoom with two fingers without dragging out of the range specified in `movable-area`.

当然也可以不拖动，而使用代码来触发`movable-view`在`movable-area`里的移动缩放。
Of course, you can use code to trigger the movement and zooming of `movable-view` in `movable-area` instead of dragging.

`movable-view`的规范另见[下文](/component/movable-view?id=movable-view)。
See also [below](/component/movable-view?id=movable-view) for the specification of `movable-view`.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|scale-area|Boolean|false|当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area|
| scale-area| Boolean| false| When the movable-view inside is set to support two-finger scale, setting this value can change the effective area of scale gesture into the whole movable-area.|

**注意：movable-area 必须设置 width 和 height 属性，不设置默认为 10px**
**Note: the width and height attributes must be set for movable-area, with 10px as default**
- movable-area app-nvue平台 暂不支持手势缩放，并且和滚动冲突。
- movable-area app-nvue platform does not support gesture scaling temporarily, and it conflicts with scrolling.


#### movable-view

可移动的视图容器，在页面中可以拖拽滑动或双指缩放。
Movable view container. Dragging and sliding or scaling with two fingers on the page is allowed.

`movable-view`必须在`movable-area`组件中，并且必须是直接子节点，否则不能移动。
`movable-view` must be in the `movable-area` component and must be a direct child node, otherwise it cannot be moved.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|direction|String|none|movable-view的移动方向，属性值有all、vertical、horizontal、none||
| direction| String| none| The moving direction of movable-view, with the attribute values of all, vertical, horizontal and none| |
|inertia|Boolean|false|movable-view是否带有惯性|App、H5|
| inertia| Boolean| false| Whether movable-view has inertia| App, H5|
|out-of-bounds|Boolean|false|超过可移动区域后，movable-view是否还可以移动|App、H5|
| out-of-bounds| Boolean| false| Whether movable-view can move beyond the movable area| App, H5|
|x|Number / String||定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画||
| x| Number / String| | Define the offset of x-axis direction. If the value of x is not within the movable range, it will automatically move to it. Changing the value of x will trigger the animation| |
|y|Number / String||定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画||
| y| Number / String| | Define the offset of y-axis direction. If the value of y is not within the movable range, it will automatically move to it. Changing the value of y will trigger the animation| |
|damping|Number|20|阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快|App、H5|
| damping| Number| 20| Damping coefficient, used to control the animation of x or y changing and that of over-bound rebounding. The larger the value is, the faster the movement is| App, H5|
|friction|Number|2|摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值|App、H5|
| friction| Number| 2| Friction coefficient, used to control the animation of inertia sliding. The larger the value is, the greater the friction is, and the faster the sliding stops. It must be greater than 0, or it will be set to the default value.| App, H5|
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false| Disable or not| |
|scale|Boolean|false|是否支持双指缩放，默认缩放手势生效区域是在movable-view内|App、H5|
| scale| Boolean| false| Whether two-finger scale is supported. The effective area of the scale gesture is in the movable-view by default| App, H5|
|scale-min|Number|0.5|定义缩放倍数最小值|App、H5|
| scale-min| Number| 0.5| Define the minimum zoom factor| App, H5|
|scale-max|Number|10|定义缩放倍数最大值|App、H5|
| scale-max| Number| 10| Define the maximum zoom factor| App, H5|
|scale-value|Number|1|定义缩放倍数，取值范围为 0.5 - 10|App、H5|
| scale-value| Number| 1| Define the scaling factor, with the range of 0.5-10.| App, H5|
|animation|Boolean|true|是否使用动画|App、H5|
| animation| Boolean| true| Whether to use animation?| App, H5|
|@change|EventHandle||拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）||
| @change| EventHandle| | Event triggered during dragging, event.detail = {x: x, y: y, source: source}, wherein the source represents the reason for the movement, with the options of touch (drag), touch-out-of-bounds (out of the movement bound), out-of-bounds (rebound after exceeding the movement bound), friction (Inertia) and empty string (setData)| |
|@scale|EventHandle||缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}，|App、H5|
| @scale| EventHandle| | Event triggered during zooming, event.detail = {x: x, y: y, scale: scale},| App, H5|

除了基本事件外，movable-view提供了两个特殊事件
In addition to the basic events, the movable-view also provides two special events

|类型|触发条件|
| Type| Triggering conditions|
|:-|:-|
|htouchmove|初次手指触摸后移动为横向的移动，如果catch此事件，则意味着touchmove事件也被catch|
| htouchmove| The movement after initial finger touch is a horizontal movement. If this event is caught, it means that the touchmove event is also caught|
|vtouchmove|初次手指触摸后移动为纵向的移动，如果catch此事件，则意味着touchmove事件也被catch|
| vtouchmove| The movement after initial finger touch is a vertical movement. If this event is caught, it means that the touchmove event is also caught|

> movable-view 必须设置width和height属性，不设置默认为10px
> The width and height attributes must be set for movable-view, with 10px as default
> 
> movable-view 默认为绝对定位，top和left属性为0px
> movable-view defaults to absolute positioning, and the top and left attributes are 0px.
> 
> 当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）
> When movable-view is smaller than the movable-area, the moving range of the movable-view is within the movable-area. When it is larger than the movable-area, the moving range of the movable-view must include the movable-area (X-axis direction and Y-axis direction are considered separately)

**Tips**
- movable-view必须在`<movable-area/>`组件中，并且必须是直接子节点，否则不能移动。
- movable-view must be in the `<movable-area/>` component and must be a direct child node, otherwise it cannot be moved.
- 如果遇到x、y、scale属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=componentsolutions)
- If you encounter the problem that the x, y, and scale attribute settings do not take effect, please refer to: [Solution to ineffective component attribute settings](/vue-api?id=componentsolutions)
- 除了H5端和app-nvue端，其他平台不支持内嵌video、map等原生组件。
- Platforms do not support embedding video, map and other native components, except for H5 and app-nvue.

**示例**[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/movable-view/movable-view)
**Example**[View demo](https://hellouniapp.dcloud.net.cn/pages/component/movable-view/movable-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可快速体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to quickly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
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
