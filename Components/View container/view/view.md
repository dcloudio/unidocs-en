#### view

View container.

It is similar to the div in traditional html and is used to wrap the content of various elements.

**Property description**

| Attribute name         | Types of | Defaults | Description                                                  |
|:-|:-|:-|:-|
|hover-class|String|none|Specifies the style class to be pressed. When hover-class="none", there is no click state effect|
|hover-stop-propagation|Boolean|false|Specify whether to prevent the click state of the ancestor node of this node|
|hover-start-time|Number|50|How long does the click state appear after pressing, in milliseconds|
|hover-stay-time|Number|400|Retention time of the click state after releasing the finger, in milliseconds|

**Example**

For the following sample code, it is recommended to use HBuilderX to create a new uni-app project and select the hello uni-app template to quickly experience the complete example.
```html
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



**Tips**

- If used `<div>`, it will be converted to `<view>`.
