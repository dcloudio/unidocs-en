MediaQueryObserver 对象，用于监听页面 media query 状态的变化，如界面的宽高是不是在某个指定的范围内。
MediaQueryObserver object, which is used to listen to the change of the status of the page media query, such as whether the width and height of the interface are within a specified range.

### uni.createMediaQueryObserver([this])
创建并返回一个 ``MediaQueryObserver`` 对象实例。
Create and return a `MediaQueryObserver` object instance.

**this说明：**
**this description:**

自定义组件实例。仅App 2.8.12+，app-vue支持。
Custom component instance. Only supported by App 2.8.12+, app-vue.


### MediaQueryObserver 对象的方法列表
### Method form of MediaQueryObserver object

>tips: 和 UI 相关的 api 在组件 mounted 后执行
> tips: UI-related api will be executed after the component is mounted

|方法|说明|
| Method| Instruction|
|:-|:-|
|MediaQueryObserver.observe(Object descriptor, function callback)|开始监听页面 media query 变化情况|
| MediaQueryObserver.observe(Object descriptor, function callback)| Start listening to the changes of the page media query|
|MediaQueryObserver.disconnect()|停止监听，回调函数将不再触发|
| MediaQueryObserver.disconnect()| Stop listening to, and the callback function will no longer be triggered|

**Object descriptor**

|属性名|类型|默认值|必填|说明|
| Attribute name| Type| Defaults| Required| Instruction|
|:-|:-|:-|:-|:-|
|min-width|number||否|页面最小宽度（ px 为单位）|
| min-width| number| | No| Minimum page width (in px)|
|max-width|number||否|页面最大宽度（ px 为单位）|
| max-width| number| | No| Maximum page width (in px)|
|width|number||否|页面宽度（ px 为单位）|
| width| number| | No| Page width (in px)|
|min-height|number||否|页面最小高度（ px 为单位）|
| min-height| number| | No| Minimum page height (in px)|
|max-height|number||否|页面最大高度（ px 为单位）|
| max-height| number| | No| Maximum page height (in px)|
|height|number||否|页面高度（ px 为单位）|
| height| number| | No| Page height (in px)|
|orientation|string||否|屏幕方向（ landscape 或 portrait ）|
| orientation| string| | No| Screen direction (landscape or portrait)|

**observe 回调函数包含一个参数**
**The observe callback function contains one parameter**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|matches|boolean|页面的当前状态是否满足所指定的 media query|
| matches| boolean| Whether the current status of the page meets the specified media query|

### 代码示例
### Code example

以下示例代码，推荐使用HBuilderX，新建uni-app项目，可直接体验完整示例。
For the following sample code, it is recommended to use HBuilderX to create a new uni-app project, able to directly experience the complete example.

```html
<template>
    <view class="content">
        <view class="">
            Does the required minimum page width of 375px and the maximum page width of 500px match: {{matches}}
        </view>
        <view>
            Does the required screen direction of portrait match: {{landscape}}
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
        //UI-related api will be executed after the component is mounted
        mounted() {
            this.testMediaQueryObserver()
            this.landscapeObserver()
        },

        methods: {
            testMediaQueryObserver() {
                this.mediaQueryOb = uni.createMediaQueryObserver(this)

                this.mediaQueryOb.observe({
                    //页面最小宽度 375px
                    //Minimum page width of 375px
                    minWidth: 375,
                    //页面宽度最大 500px
                    //Maximum page width of 500px
                    maxWidth: 500
                }, matches => {
                    this.matches = matches;
                })
            },
            landscapeObserver() {
                landscapeOb = uni.createMediaQueryObserver(this)
                landscapeOb.observe({
                    //屏幕方向为纵向
                    //Screen direction of landscape
                    orientation: 'landscape'
                }, matches => {
                        this.landscape = matches
                })
            },
            destroyed () {
                //组件销毁时停止监听
                //Stop listening to when component is destroyed.
                this.mediaQueryOb.disconnect() 
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
