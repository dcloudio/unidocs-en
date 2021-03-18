#### swiper

Slider view container.

Generally used for sliding left and right or up and down, such as banner carousel.

Pay attention to the difference between sliding switch and scrolling, sliding switch is one screen one screen switch. Each swiper-item under swiper is a sliding switching area and cannot stay between 2 sliding areas.

**Property description**

| Attribute name                 | Types of    | Defaults          | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|
|indicator-dots|Boolean|false|Whether to display the panel indicator||
|indicator-color|Color|rgba(0, 0, 0, .3)|Point color||
|indicator-active-color|Color|#000000|The currently selected indicator point color||
|active-class|String||class when swiper-item is visible||
|changing-class|String||When acceleration is set to {{true}} and in the sliding process, the class when several screens in the middle are visible||
|autoplay|Boolean|false|Whether to switch automatically||
|current|Number|0|The index of the current slider||
|current-item-id|String||The item-id of the current slider cannot be specified at the same time as current||
|interval|Number|5000|Automatic switching time interval||
|duration|Number|500|Sliding animation duration|  
|circular|Boolean|false|Whether to use continuous sliding, that is, play back to the beginning after playing to the end||
|vertical|Boolean|false|Whether the sliding direction is vertical||
|previous-margin|String|0px|Front margin, can be used to expose a small part of the previous item, accepts px and rpx values|  
|next-margin|String|0px|Back margin, can be used to expose a small part of the latter item, accept px and rpx values|  
|acceleration|Boolean|false|When turned on, it will continuously slide multiple screens according to the sliding speed||
|disable-programmatic-animation|Boolean|false|Whether to disable the use of animation when code changes trigger swiper switching.||
|display-multiple-items|Number|1|Number of sliders displayed at the same time|  
|skip-hidden-item-layout|Boolean|false|Whether to skip the unshown slider layout, set to true to optimize the sliding performance in complex situations, but the layout information of the hidden state slider will be lost||
|disable-touch|Boolean|false|Whether to prohibit user touch operation|App 2.5.5+、H5 2.5.5+、|
|touchable|Boolean|true|Whether to listen to the user's touch event, it is only valid during initialization and cannot be changed dynamically||
|easing-function|String|default|Specify swiper to switch the type of ease animation, valid values: default, linear, easeInCubic, easeOutCubic, easeInOutCubic||
|@change|EventHandle||The change event will be triggered when current changes, event.detail = {current: current, source: source}||
|@transition|EventHandle||The transition event will be triggered when the position of swiper-item changes, event.detail = {dx: dx, dy: dy}, Alipay applet does not support dx, dy|App、H5、|
|@animationfinish|EventHandle||The animationfinish event will be triggered when the animation ends, event.detail = {current: current, source: source}||

The detail returned by the change event contains a source field, which indicates the cause of the change. The possible values are as follows:

- autoplay autoplay causes swiper to change.
- Touch user swipes to cause swiper changes.
- Other reasons will be indicated by an empty string.

**Swiper does the special problem of dragging the long list left and right**

- Swiper is a single page component, suitable for banner image carousel and simple list sliding left and right.
- Because of performance issues, using swiper to make complex long lists requires high optimization skills and accepts some limitations.

**Tips**

- When using vertical scrolling, you need to give `<scroll-view>`a fixed height, provided by the height css.
- Note: The only be placed where the `<swiper-item>`components, otherwise it will lead to undefined behavior. 
- The switching effect of the banner picture and the style of the indicator, there are many styles that can be customized
- At the same time, monitor the change transition, trigger the transition when you start sliding, and after letting go, the trigger sequence on the ios platform is transition... change, Android is transition... change transition.

#### swiper-item
It may be placed only in the `<swiper>`assembly, the width and height is automatically set to 100%. Note: 100% width and height are relative to the parent component, not to the child component, and cannot be automatically opened by the child component.

| Attribute name | Types of | Defaults | Description                       |
|:-|:-|:-|:-|
|item-id|String||The identifier of the swiper-item|

**Example**

```html
<!-- This example does not include the complete css -->
<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<view class="swiper-item uni-bg-red">A</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">B</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">C</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Indicator point</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Autoplay</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>Slideshow switching duration (ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>Auto play interval time (ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view>
	</view>
</template>
```
```javascript
export default {
    data() {
        return {
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
        }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
    }
}
```