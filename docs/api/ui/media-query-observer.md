MediaQueryObserver 对象，用于监听页面 media query 状态的变化，如界面的宽高是不是在某个指定的范围内。
The MediaQueryObserver object is used to monitor changes in the media query status of the page, such as whether the width and height of the interface are within a specified range.

### uni.createMediaQueryObserver([this])
创建并返回一个 ``MediaQueryObserver`` 对象实例。
Create and return a ``MediaQueryObserver`` object instance.

**this说明：**
**this description:**

自定义组件实例。仅App 2.8.12+，app-vue支持。
Custom component instance. Only App 2.8.12+, app-vue support.

### MediaQueryObserver 对象的方法列表
### List of methods of the MediaQueryObserver object

>tips: 和 UI 相关的 api 在组件 mounted 后执行
>tips: UI-related APIs are executed after the component is mounted

|方法|说明|
|Method|Description|
|:-|:-|
|MediaQueryObserver.observe(Object descriptor, function callback)|开始监听页面 media query 变化情况|
|MediaQueryObserver.observe(Object descriptor, function callback)|Start listening to the page media query changes|
|MediaQueryObserver.disconnect()|停止监听，回调函数将不再触发|
|MediaQueryObserver.disconnect()|Stop listening, the callback function will no longer trigger|

**Object descriptor**

|属性名|类型|默认值|必填|说明|
|Attribute name|Type|Default value|Required|Description|
|:-|:-|:-|:-|:-|
|min-width|number||否|页面最小宽度（ px 为单位）|
|min-width|number||No|Minimum page width (in px)|
|max-width|number||否|页面最大宽度（ px 为单位）|
|max-width|number||No|Maximum page width (in px)|
|width|number||否|页面宽度（ px 为单位）|
|width|number||No|Page width (in px)|
|min-height|number||否|页面最小高度（ px 为单位）|
|min-height|number||No|minimum page height (in px)|
|max-height|number||否|页面最大高度（ px 为单位）|
|max-height|number||No|Maximum page height (in px)|
|height|number||否|页面高度（ px 为单位）|
|height|number||No|Page height (in px)|
|orientation|string||否|屏幕方向（ landscape 或 portrait ）|
|orientation|string||No|Screen orientation (landscape or portrait )|


**observe 回调函数包含一个参数**
**The observe callback function contains one parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|matches|boolean|页面的当前状态是否满足所指定的 media query|
|matches|boolean|Whether the current state of the page meets the specified media query|

### 代码示例
### Code example

以下示例代码，推荐使用HBuilderX，新建uni-app项目，可直接体验完整示例。
For the following sample code, it is recommended to use HBuilderX to create a new uni-app project, and you can directly experience the complete sample.

```html
<template>
    <view class="content">
        <view class="">
            要求页面最小宽度 375px， 且页面宽度最大 500px，是否匹配: {{matches}}
        </view>
       <view class="">
            The minimum page width is 375px and the maximum page width is 500px. Whether it matches: {{matches}}
       </view>
		<view>
            要求屏幕方向为纵向，是否匹配: {{landscape}}
        </view>
		<view>
		     The screen orientation is required to be portrait, whether it matches: {{landscape}}
		 </view>
    </view>
</template>

<script>
    let landscapeOb
    export default {
        data() {
            return {
                matches: false,
                landscape: false,
                mediaQueryOb: null
            }
        },
        onLoad() {

        },
        
        // 和 UI 相关的 api 在组件 mountd 后执行
		// APIs related to UI are executed after component mountd
        mounted() {
            this.testMediaQueryObserver()
            this.landscapeObserver()
        },

        methods: {
            testMediaQueryObserver() {
                this.mediaQueryOb = uni.createMediaQueryObserver(this)

                this.mediaQueryOb.observe({
                    minWidth: 375,  
					//页面最小宽度 375px
					//Minimum page width 375px
                    maxWidth: 500  
					//页面宽度最大 500px
					//The maximum page width is 500px
                }, matches => {
                    this.matches = matches;
                })
            },
            landscapeObserver() {
                landscapeOb = uni.createMediaQueryObserver(this)
                landscapeOb.observe({
                    orientation: 'landscape'  
					//屏幕方向为纵向
					//The screen orientation is portrait
                }, matches => {
                        this.landscape = matches
                })
            },
            destroyed () {
                this.mediaQueryOb.disconnect()  
				//组件销毁时停止监听
				//Stop listening when the component is destroyed
                landscapeOb.disconnect()
            }
        }
    }
</script>

<style>
    .content {
        text-align: center;
        height: 400upx;
    }
</style>
```
