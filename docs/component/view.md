#### view

视图容器。
View container.

它类似于传统html中的div，用于包裹各种元素内容。
It is similar to the div in traditional html and is used to wrap the content of various elements.

如果使用[nvue](https://uniapp.dcloud.io/nvue-outline)，则需注意，包裹文字应该使用`<text>`组件。

**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|hover-class|String|none|指定按下去的样式类。当 hover-class="none" 时，没有点击态效果|
|hover-class|String|none|Specifies the style class to be pressed. When hover-class="none", there is no click state effect|
|hover-stop-propagation|Boolean|false|指定是否阻止本节点的祖先节点出现点击态，App、H5|
|hover-stop-propagation|Boolean|false|Specify whether to prevent the click state of the ancestor node of this node|
|hover-start-time|Number|50|按住后多久出现点击态，单位毫秒|
|hover-start-time|Number|50|How long does the click state appear after pressing, in milliseconds|
|hover-stay-time|Number|400|手指松开后点击态保留时间，单位毫秒|
|hover-stay-time|Number|400|Retention time of the click state after releasing the finger, in milliseconds|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/view/view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可快速体验完整示例。
For the following sample code, it is recommended to use HBuilderX to create a new uni-app project and select the hello uni-app template to quickly experience the complete example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css -->
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-title uni-common-mt">
                flex-direction: row
                <text>\n Horizontal layout</text>
            </view>
            <view class="uni-flex uni-row">
                <view class="flex-item uni-bg-red">A</view>
                <view class="flex-item uni-bg-green">B</view>
                <view class="flex-item uni-bg-blue">C</view>
            </view>
            <view class="uni-title uni-common-mt">
                flex-direction: column
                <text>\n Vertical layout</text>
            </view>
            <view class="uni-flex uni-column">
                <view class="flex-item flex-item-V uni-bg-red">A</view>
                <view class="flex-item flex-item-V uni-bg-green">B</view>
                <view class="flex-item flex-item-V uni-bg-blue">C</view>
            </view>
        </view>
    </view>
</template>
```
 
![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/113204c0-4f2f-11eb-97b7-0dc4655d6e68.png)
 
**Tips**

- 如果使用 `<div>` ，编译时会被转换为 `<view>`。
- If used `<div>`, it will be converted to `<view>`.
