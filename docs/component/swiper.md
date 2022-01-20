#### swiper

滑块视图容器。
Slider view container.

一般用于左右滑动或上下滑动，比如banner轮播图。
Generally used to slide left and right or up and down, such as banner carousel.

注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换。swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。
Note the difference between sliding switching and scrolling. Sliding switching is switching one screen after the other. Each swiper-item under swiper is a sliding switching area, and cannot stay between two sliding areas.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|indicator-dots|Boolean|false|是否显示面板指示点||
| indicator-dots| Boolean| false| Whether to display panel indicator points?| |
|indicator-color|Color|rgba(0, 0, 0, .3)|指示点颜色||
| indicator-color| Color| rgba(0, 0, 0, .3)| Indicator color| |
|indicator-active-color|Color|#000000|当前选中的指示点颜色||
| indicator-active-color| Color| #000000| Color of the currently selected indicator| |
|autoplay|Boolean|false|是否自动切换||
| autoplay| Boolean| false| Whether to switch automatically?| |
|current|Number|0|当前所在滑块的 index||
| current| Number| 0| index of the current slider| |
|current-item-id|String||当前所在滑块的 item-id ，不能与 current 被同时指定||
| current-item-id| String| | item-id of the current slider, which cannot be specified current simultaneously| |
|interval|Number|5000|自动切换时间间隔||
| interval| Number| 5000| Time interval for automatic switching| |
|duration|Number|500|滑动动画时长|app-nvue不支持|
| duration| Number| 500| Slide animation duration| Not supported by app-nvue|
|circular|Boolean|false|是否采用衔接滑动，即播放到末尾后重新回到开头||
| circular| Boolean| false| Whether to use circular sliding, i.e. return to the beginning after playing| |
|vertical|Boolean|false|滑动方向是否为纵向||
| vertical| Boolean| false| Whether the sliding direction is longitudinal?| |
|previous-margin|String|0px|前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值|app-nvue|
| previous-margin| String| 0px| Previous-margin can be used to display a small part of the previous item and accepts px and rpx values| app-nvue|
|next-margin|String|0px|后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值|app-nvue|
| next-margin| String| 0px| Next-margin can be used to display a small part of the next item and accepts px and rpx values| app-nvue|
|display-multiple-items|Number|1|同时显示的滑块数量|app-nvue|
| display-multiple-items| Number| 1| Number of sliders displayed at the same time| app-nvue|
|skip-hidden-item-layout|Boolean|false|是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息|App|
| skip-hidden-item-layout| Boolean| false| Whether to skip the layout of the slider that is not displayed. If set to true, the sliding performance in complex situations can be optimized, but the layout information of the hidden state slider will be lost| App|
|disable-touch|Boolean|false|是否禁止用户 touch 操作|App 2.5.5+、H5 2.5.5+|
| disable-touch| Boolean| false| Whether to prevent user from performing touch operations| App 2.5.5+, H5 2.5.5+|
|@change|EventHandle||current 改变时会触发 change 事件，event.detail = {current: current, source: source}||
| @change| EventHandle| | change event will be triggered when current changes, event.detail = {current: current, source: source}| |
|@transition|EventHandle||swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}|App、H5|
| @transition| EventHandle| | transition event will be triggered when the position of swiper-item changes, event.detail = {dx: dx, dy: dy}| App, H5|
|@animationfinish|EventHandle||动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}||
| @animationfinish| EventHandle| | animationfinish event will be triggered when animation finishes, event.detail = {current: current, source: source}| |

change 事件返回 detail 中包含一个 source 字段，表示导致变更的原因，可能值如下：
A source field is contained when change event returns detail, which indicates the cause of the change. Possible values are as follows:

- autoplay 自动播放导致swiper变化。
- Autoplay causes the swiper to change.
- touch 用户划动引起swiper变化。
- User touch causes the swiper to change.
- 其他原因将用空字符串表示。
- Other reasons will be indicated by an empty string.

**swiper做左右拖动的长列表的专项问题**
**A special issue about using swiper to make long lists of left and right drags**
- swiper是单页组件，适合做banner图轮播和简单列表左右滑动。
- Swiper is a single page component suitable for banner picture carousel and simple list sliding left and right.
- 因为性能问题，用swiper做复杂长列表，需要较高的优化技巧以及接受一些限制。
- For perlistance reasons, making complex long lists with swiper requires high optimization skills and will be subject to certain limitations.
- 这是一个范例，[插件市场新闻模板示例](https://ext.dcloud.net.cn/plugin?id=103)，它在App端使用了nvue的原生渲染，实现高性能的左右拖动长列表；并支持可自定义的任何形式的下拉刷新。它在非App端使用的模式是只缓存左右一共3列的数据，dom中的数据过多时，它会自动释放。就是说App上，只要看过这一页，再进去时内容是还在的。而在非App上，只能做到缓存3页数据，其他页即便看过，再进去也会重新加载。并且非App的这种情况下，不再提供下拉刷新。虽然插件市场也有其他前端模拟的下拉刷新，但性能不佳。
- For the [example of news template in the plug-in market](https://ext.dcloud.net.cn/plugin?id=103), it uses the native rendering of nvue on the App side to achieve high-perlistance dragging of long lists, and supports any list of pull-down refresh that can be customized. The mode it uses on non-App sides is to cache only three columns of data on the left and right. It will be released automatically in case of too much data in dom. That is to say, on the App, as long as you read this page, the content is cached when you read again. But on non-App sides, only 3 pages of data can be cached, and other pages will be reloaded when you read again. In the case of non-App sides, pull-down refresh is no longer provided. Although there are other front-end analog pull-down refreshes available in the plug-in market, the performance is not good.

**Tips**

- 如果 nvue 页面 ``@animationfinish`` 事件不能返回正确的数据，可同时监听 ``@change`` 事件。
- If the `@animationfinish` event on the nvue page cannot return correct data, you can listen to the `@change` event at the same time.
- 使用竖向滚动时，需要给 ``<scroll-view>`` 一个固定高度，通过 css 设置 height。
- When using vertical scrolling, you need to give `<scroll-view>` a fixed height by css.
- 注意：其中只可放置 ``<swiper-item>`` 组件，否则会导致未定义的行为。 
- Note: Only the `<swiper-item>` component can be placed in it, or otherwise it will lead to undefined behavior.
- 如果遇到current、current-item-id属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=_4-组件属性设置不生效解决办法)
- If case of the problem that the current and current-item-id attribute settings do not take effect, please refer to: [Solution to ineffective component attribute settings](/vue-api?id=_4-%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)
- banner图的切换效果和指示器的样式，有多种风格可自定义，可在[uni-app插件市场](https://ext.dcloud.net.cn/search?q=%E8%BD%AE%E6%92%AD)搜索
- The switching effect of the banner picture and the style of the indicator can be customized in a variety of styles, which can be searched in the [uni-app plug-in market](https://ext.dcloud.net.cn/search?q=%E8%BD%AE%E6%92%AD)
- 如需banner管理后台，参考uniCloud admin banner插件：[https://ext.dcloud.net.cn/plugin?id=4117](https://ext.dcloud.net.cn/plugin?id=4117)
- For banner management background, refer to uniCloud admin banner plug-in: [https://ext.dcloud.net.cn/plugin?id=4117](https://ext.dcloud.net.cn/plugin?id=4117)
- swiper在App的vue中，不支持内嵌video、map等原生组件。在App nvue2.1.5起支持内嵌原生组件。竖向的swiper内嵌视频可实现抖音、映客等视频垂直拖动切换效果。
- swiper doesn't support embedding native components such as video and map in vue of App. Embedded native components are supported from App nvue2.1.5+. Vertical swiper embedded videos can realize the vertical drag switching effect on the video software such as Tik Tok and Inke.
- 同时监听 change transition，开始滑动时触发transition, 放开手后，在ios平台触发顺序为 transition... change，Android为 transition... change transition...
- While listening to the change transition, the transition is triggered when the slide starts. After you release your hand, the trigger sequence is transition... change on ios platform and transition... change transition on Android platform.
 
#### swiper-item
仅可放置在 ``<swiper>`` 组件中，宽高自动设置为100%。注意：宽高100%是相对于其父组件，不是相对于子组件，不能被子组件自动撑开。
It can only be placed in the `<swiper>` component, with the width and height automatically set to 100%. Note: 100% of the width and height is relative to its parent component rather than sub-component, and it cannot be opened automatically by sub-component.

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|:-|:-|:-|:-|:-|
|item-id|String||该 swiper-item 的标识符|
| item-id| String| | The identifier of this swiper-item|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/swiper/swiper)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/swiper/swiper)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
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
				<view class="uni-list-cell-db">Indication point</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Autoplay</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>Slide switching interval (ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>Autoplay interval (ms)</text>
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
 ![uni](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/97ccca10-4f2f-11eb-b997-9918a5dda011.png)
