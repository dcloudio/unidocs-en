#### movable-view

Movable view container, you can drag and slide or pinch to zoom on the page.

`movable-view`It must be in the `movable-area`component and must be a direct child node, otherwise it cannot be moved.

**Property description**

| Attribute name | Types of        | Defaults | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|
|direction|String|none|The moving direction of movable-view, the attribute values are all, vertical, horizontal, none||
|inertia|Boolean|false|Whether movable-view has inertia| 
|out-of-bounds|Boolean|false|After exceeding the movable area, can the movable-view still move?| 
|x|Number / String||Define the offset in the x-axis direction. If the value of x is not within the movable range, it will automatically move to the movable range; changing the value of x will trigger the animation||
|y|Number / String||Define the offset in the y-axis direction. If the value of y is not within the movable range, it will automatically move to the movable range; changing the y value will trigger the animation||
|damping|Number|20|Damping coefficient, used to control the animation when x or y changes and the animation of rebounding. The larger the value, the faster the movement|
|friction|Number|2|Friction coefficient, used to control the animation of inertial sliding, the larger the value, the greater the friction, the faster the sliding will stop; it must be greater than 0, otherwise it will be set to the default value|
|disabled|Boolean|false|Whether to disable||
|scale|Boolean|false|Whether to support two-finger zoom, the default zoom gesture effective area is in the movable-view|
|scale-min|Number|0.5|Define the minimum zoom factor|
|scale-max|Number|10|Define the maximum zoom factor|
|scale-value|Number|1|Define the zoom factor, the value range is 0.5-10|
|animation|Boolean|true|Whether to use animation|
|@change|EventHandle||Event triggered during dragging, event.detail = {x: x, y: y, source: source}, where source represents the reason for the movement, and the value can be touch (drag), touch-out-of-bounds (Beyond the range of movement), out-of-bounds (rebound after exceeding the range of movement), friction (inertia) and empty string (setData)||
|@scale|EventHandle||Event triggered during zooming, event.detail = {x: x, y: y, scale: scale},|

In addition to basic events, movable-view provides two special events

| Types of   | Triggering conditions                                        |
|:-|:-|
|htouchmove|The movement after the first finger touch is a horizontal movement. If this event is caught, it means that the touchmove event is also caught|
|vtouchmove|The movement after the first finger touch is a vertical movement. If this event is caught, it means that the touchmove event is also caught|

> Movable-view must set width and height attributes, if not set, the default is 10px
> 
> Movable-view defaults to absolute positioning, top and left attributes are 0px
> 
> When the movable-view is smaller than the movable-area, the moving range of the movable-view is within the movable-area; when the movable-view is larger than the movable-area, the moving range of the movable-view must include the movable-area (x-axis direction and y (Axial direction is considered separately)

**Tips**

- Movable-view must be in the `<movable-area/>`component and must be a direct child node, otherwise it cannot be moved.
- Except for H5 and app-nvue, other platforms do not support embedded video, map and other native components. 

**Example**

```html
<!-- This example does not include the complete css -->
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


