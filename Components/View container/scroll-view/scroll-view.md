#### scroll-view

Scrollable view area. Used for area scrolling.

It should be noted that in the page rendered by webview, the performance of area scrolling is not as good as page scrolling.

**Property description**

| Attribute name          | Types of    | Defaults | Description                                                  | Platform difference description |
| :---------------------- | :---------- | :------- | :----------------------------------------------------------- | :------------------------------ |
| scroll-x                | Boolean     | false    | Allow horizontal scrolling                                   |                                 |
| scroll-y                | Boolean     | false    | Allow vertical scrolling                                     |                                 |
| upper-threshold         | Number      | 50       | How far from the top/left (in px), the scrolltoupper event is triggered |                                 |
| lower-threshold         | Number      | 50       | How far from the bottom/right side (in px), the scrolltolower event is triggered |                                 |
| scroll-top              | Number      |          | Set the vertical scroll bar position                         |                                 |
| scroll-left             | Number      |          | Set the horizontal scroll bar position                       |                                 |
| scroll-into-view        | String      |          | The value should be a child element id (id cannot start with a number). Set which direction to scroll, then scroll to the element in which direction |                                 |
| scroll-with-animation   | Boolean     | false    | Use animated transitions when setting the scroll bar position |                                 |
| enable-back-to-top      | Boolean     | false    | When iOS clicks the top status bar, Android double-clicks the title bar, the scroll bar returns to the top, only supports vertical |                                 |
| show-scrollbar          | Boolean     | false    | Control whether the scroll bar appears                                      |
| refresher-enabled       | Boolean     | false    | Turn on custom pull-down refresh                                             |
| refresher-threshold     | number      | 45       | Set a custom pull-down refresh threshold                                |
| refresher-default-style | string      | "black"  | Set a custom pull-down refresh default style, support setting black, white, none, none means not to use the default style |   
| refresher-background    | string      | "#FFF"   | Set a custom pull-down refresh area background color               |
| refresher-triggered     | boolean     | false    | Set the current pull-down refresh state, true means pull-down refresh has been triggered, false means pull-down refresh has not been triggered     |
| enable-flex             | boolean     | false    | Enable flexbox layout. After opening, the current node declared display: flex will become a flex container and act on its child nodes. |                                 |
| scroll-anchoring        | boolean     | false    | Turn on the scroll anchoring feature, that is, control the scroll position not to jitter with content changes. It only takes effect under iOS. For Android, you can refer to the CSS overflow-anchor property. |                                 |
| @scrolltoupper          | EventHandle |          | Scroll to the top/left, the scrolltoupper event will be triggered |                                 |
| @scrolltolower          | EventHandle |          | Scroll to the bottom/right, the scrolltolower event will be triggered |                                 |
| @scroll                 | EventHandle |          | Triggered when scrolling, event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |                                 |
| @refresherpulling       | EventHandle |          | Custom pull-down refresh control is pulled down                             |
| @refresherrefresh       | EventHandle |          | Custom pull-down refresh is triggered                                 |
| @refresherrestore       | EventHandle |          | Custom pull-down refresh is reset                                            |
| @refresherabort         | EventHandle |          | Custom pull-down refresh was aborted                           |

When using vertical scrolling, you need to give `<scroll-view>`a fixed height, provided by the height css.



**Example**

```html
<!-- This example does not include the complete css -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\n Vertical scroll</text>
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
				<text>\n horizontal scroll</text>
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
            this.$nextTick(function() {
                this.scrollTop = 0
            });
            uni.showToast({
                icon:"none",
                title:"Vertical scroll scrollTop value has been modified to 0"
            })
        }
    }
}
```

**Custom pull to refresh**

Note that the performance of custom pull-down refresh is not as good as the native pull-down refresh configured in pages.json.
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
                this.triggered = 'restore'; // Need to reset
                console.log("onRestore");
            },
            onAbort() {
                console.log("onAbort");
            }
        }
    }
</script>

```


**Tips**

- Scroll-view is not suitable for long lists and has performance problems. Long list scrolling and pull-down refresh should be realized by using native navigation bar with page-level scrolling and pull-down refresh. Included in the app-nvue page, long lists should use list instead of scroll-view.
- The priority of scroll-into-view is higher than scroll-top.
- Scroll-view is area scrolling and will not trigger page scrolling. It cannot trigger the pull-down refresh configured in pages.json, the page bottoming onReachBottomDistance, and the transparent gradient of titleNView.
- To use pull-down refresh, it is recommended to use page scrolling instead of scroll-view. The plug-in market has a scroll-view-based pull-down refresh based on the front-end simulation, but the performance is not good. If you need to use the front-end pull-down refresh, it is recommended to use the wxs-based pull-down refresh, the performance will be higher than the js-based monitoring method.
- The scroll bar setting of scroll-view can be customized through -webkit-scrollbar of css, including hiding the scroll bar.
