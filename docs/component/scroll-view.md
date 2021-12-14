#### scroll-view

可滚动视图区域。用于区域滚动。
Scrollable view area. Used for zone scrolling.

需注意在webview渲染的页面中，区域滚动的性能不及页面滚动。
Please note that in the page rendered by webview, the performance of area scrolling is not superior to page scrolling.

**属性说明**
**Attribute description**

|属性名					|类型		|默认值	|说明																							|平台差异说明	|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-						|:-			|:-		|:-																								|:-			|
|scroll-x				|Boolean	|false	|允许横向滚动																					|			|
| scroll-x| Boolean| false| Horizontal scrolling is allowed| |
|scroll-y				|Boolean	|false	|允许纵向滚动																					|			|
| scroll-y| Boolean| false| Vertical scrolling is allowed| |
|upper-threshold		|Number		|50		|距顶部/左边多远时（单位px），触发 scrolltoupper 事件											|			|
| upper-threshold| Number| 50| How far from the top/left (in px) will trigger scrolltoupper event| |
|lower-threshold		|Number		|50		|距底部/右边多远时（单位px），触发 scrolltolower 事件											|			|
| lower-threshold| Number| 50| How far from the bottom/right (in px) will trigger scrolltolower event| |
|scroll-top				|Number		|		|设置竖向滚动条位置																				|			|
| scroll-top| Number| | Set the vertical scrolling bar location| |
|scroll-left			|Number		|		|设置横向滚动条位置																				|			|
| scroll-left| Number| | Set the horizontal scrolling bar location| |
|scroll-into-view		|String		|		|值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素				|			|
| scroll-into-view| String| | The value should be a child element id (id cannot start with a number). If the scrollable direction is set, it scrolls to the element in that direction| |
|scroll-with-animation	|Boolean	|false	|在设置滚动条位置时使用动画过渡																	|			|
| scroll-with-animation| Boolean| false| Use animation to transition when setting scroll bar location| |
|enable-back-to-top		|Boolean	|false	|iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向								|app-nvue	|
| enable-back-to-top| Boolean| false| In iOS, click the top status bar or in Android, double-click the title bar, and the scrollbar returns to the top. Only vertical is supported| app-nvue|
|show-scrollbar         |Boolean	|false	|控制是否出现滚动条| App-nvue 2.1.5+ |
| show-scrollbar| Boolean| false| Control whether scroll bars appear| App-nvue 2.1.5+|
|refresher-enabled		|Boolean	|false	|开启自定义下拉刷新|app-vue 2.5.12+|
| refresher-enabled| Boolean| false| Enable custom drop-down refresh| app-vue 2.5.12+|
|refresher-threshold	|number		|45		|设置自定义下拉刷新阈值|app-vue 2.5.12+|
| refresher-threshold| number| 45| Set the threshold of custom pull-down refresh| app-vue 2.5.12+|
|refresher-default-style|string		|"black"|设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式|app-vue 2.5.12+|
| refresher-default-style| string| "black"| Set the default style of custom pull-down refresh. Support setting black, white, none, and none means that the default style is not used| app-vue 2.5.12+|
|refresher-background	|string		|"#FFF" |设置自定义下拉刷新区域背景颜色|app-vue 2.5.12+|
| refresher-background| string| "#FFF"| Set the background color of custom pull-down refresh area| app-vue 2.5.12+|
|refresher-triggered	|boolean	|false	|设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发|app-vue 2.5.12+|
| refresher-triggered| boolean| false| Set the current state of pull-down refresh. true indicates that the pull-down refresh has been triggered, and false indicates that it has not been triggered| app-vue 2.5.12+|
|@scrolltoupper			|EventHandle|		|滚动到顶部/左边，会触发 scrolltoupper 事件														|			|
| @scrolltoupper| EventHandle| | Scrolling to the top/left will trigger scrolltoupper event| |
|@scrolltolower			|EventHandle|		|滚动到底部/右边，会触发 scrolltolower 事件														|			|
| @scrolltolower| EventHandle| | Scrolling to the bottom/right will trigger scrolltolower event| |
|@scroll				|EventHandle|		|滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}	|&nbsp;|
| @scroll| EventHandle| | Triggered when scrolling, event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}|  |
|@refresherpulling		|EventHandle|		|自定义下拉刷新控件被下拉|app-vue 2.5.12+|
| @refresherpulling| EventHandle| | Custom pull-down refresh control is pulled down| app-vue 2.5.12+|
|@refresherrefresh		|EventHandle|		|自定义下拉刷新被触发|app-vue 2.5.12+|
| @refresherrefresh| EventHandle| | Custom pull-down refresh is triggered| app-vue 2.5.12+|
|@refresherrestore		|EventHandle|		|自定义下拉刷新被复位|app-vue 2.5.12+|
| @refresherrestore| EventHandle| | Custom pull-down refresh is reset| app-vue 2.5.12+|
|@refresherabort		|EventHandle|		|自定义下拉刷新被中止|app-vue 2.5.12+|
| @refresherabort| EventHandle| | Custom pull-down refresh is stopped| app-vue 2.5.12+|

使用竖向滚动时，需要给 ``<scroll-view>`` 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给``<scroll-view>``添加``white-space: nowrap;``样式。
When using vertical scrolling, you need to give `<scroll-view>` a fixed height and set the height through css; When using horizontal scrolling, you need to add the style of `white-space: nowrap;` to `<scroll-view>`.
 
**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\nVertical scrolling</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				@scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				Click here to return to the top
			</view>
			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>\nHorizontal scrolling</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
```
 
```javascript
export default {
    data() {
        return {
            scrollTop: 0,
            old: {
                scrollTop: 0
            }
        }
    },
    methods: {
        upper: function(e) {
            console.log(e)
        },
        lower: function(e) {
            console.log(e)
        },
        scroll: function(e) {
            console.log(e)
            this.old.scrollTop = e.detail.scrollTop
        },
        goTop: function(e) {
            this.scrollTop = this.old.scrollTop
            this.$nextTick(() => {
                this.scrollTop = 0
            });
            uni.showToast({
                icon:"none",
                title: "scrollTop value of vertical scroll has been modified to 0"
            })
        }
    }
}
```

**自定义下拉刷新**
**Custom pull-down refresh**

注意自定义下拉刷新的性能不及pages.json中配置的原生下拉刷新。
Note that the performance of custom pull-down refresh is not superior to the native pull-down refresh configured in pages.json.
```html
<template>
    <view>
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"></scroll-view>
    </view>
</template>
```

```javascript

<script>
    export default {
        data() {
            return {
                triggered: false
            }
        },
        onLoad() {
            this._freshing = false;
            setTimeout(() => {
                this.triggered = true;
            }, 1000)
        },
        methods: {
            onPulling(e) {
                console.log("onpulling", e);
            },
            onRefresh() {
                if (this._freshing) return;
                this._freshing = true;
                setTimeout(() => {
                    this.triggered = false;
                    this._freshing = false;
                }, 3000)
            },
            onRestore() {
                // 需要重置
                //Need to be reset
                this.triggered = 'restore';
                console.log("onRestore");
            },
            onAbort() {
                console.log("onAbort");
            }
        }
    }
</script>

```
![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/99567750-4f2f-11eb-a16f-5b3e54966275.png)
 
**Tips**

- APP-vue中，请勿在 scroll-view 中使用 map、video 等原生组件。app-nvue无此限制。
- In APP-vue, do not use native components such as map and video in scroll-view. app-nvue does not have this restriction.
- scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是scroll-view。
- scroll-view is not suitable for  long lists, or otherwise performance problems would occur. Long list scrolling and pull-down refreshing should be realized by using native navigation bar with page-level scrolling and pull-down refreshing. Long list should use list instead of scroll-view even on app-nvue pages.
- scroll-into-view 的优先级高于 scroll-top。
- scroll-into-view has a higher priority than scroll-top.
- scroll-view是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。
- scroll-view runs in area scrolling, which will not trigger page scrolling, and cannot trigger the pull-down refresh configured by pages.json, onReachBottomDistance, and the transparent gradient of titleNView.
- 若要使用下拉刷新，建议使用页面的滚动，而不是 scroll-view 。插件市场有前端模拟的基于scroll-view的下拉刷新，但性能不佳。如必需使用前端下拉刷新，推荐使用基于wxs的下拉刷新，性能会比基于js监听方式更高。
- To use pull-down refresh, it is recommended to use page scrolling instead of scroll-view. There is a scroll-view-based pull-down refresh based on the front-end analog available in the plug-in market, but with poor performance. If front-end pull-down refresh is necessary, pull-down refresh based on wxs is recommended, whose performance is higher than that based on js listening to.
- 如果遇到scroll-top、scroll-left、refresher-triggered属性设置不生效的问题参考：[组件属性设置不生效解决办法](/vue-api?id=componentsolutions)
- If case of the problem that the settings of the scroll-top, scroll-left, and refresher-triggered attributes are ineffective, please refer to: [Solution to ineffective component attribute settings](/vue-api?id=componentsolutions)
- scroll-view的滚动条设置，可通过css的-webkit-scrollbar自定义，包括隐藏滚动条。（app-nvue无此css）
- Scroll bar settings of scroll-view can be customized by -webkit-scrollbar of css, including hiding scroll bar. (app-nvue does not have this css)
