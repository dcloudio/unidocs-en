#### match-media

media query 匹配检测节点。
The media query matches the detection node.

类似于网页开发中使用媒体查询来适配大屏小屏，match-media是一个可适配不同屏幕的基本视图组件。可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示。
Similar to the use of media queries to adapt to large and small screens in web development, match-media is a basic view component that can adapt to different screens. You can specify a set of media query media query rules, and this component will only be displayed when the query conditions are met.

例如在match-media组件中放置一个侧边栏，媒体查询规则设置为宽屏才显示，就可以实现在PC宽屏显示该侧边栏，而在手机窄屏中不显示侧边栏的效果。
For example, placing a sidebar in the match-media component and setting the media query rule to display on widescreen can achieve the effect of displaying the sidebar on the widescreen of the PC, but not displaying the sidebar on the narrow screen of the mobile phone.

**平台兼容性**
**Platform compatibility**

|app|
|:-|
|2.8.12+，app-vue|


**属性说明**
**Attribute description**

|属性名|类型|默认值|必填|说明|
|Attribute name|Type|Defaults|Required|Description|
|:-|:-|:-|:-|:-|
|min-width|number||否|页面最小宽度（ px 为单位）|
|min-width|number||no|Minimum page width (in px)|
|max-width|number||否|页面最大宽度（ px 为单位）|
|max-width|number||no|Maximum page width (in px)|
|width|number||否|页面宽度（ px 为单位）|
|width|number||no|Page width (in px)|
|min-height|number||否|页面最小高度（ px 为单位）|
|min-height|number||no|Minimum page height (in px)|
|max-height|number||否|页面最大高度（ px 为单位）|
|max-height|number||no|Maximum page height (in px)|
|height|number||否|页面高度（ px 为单位）|
|height|number||no|Page height (in px)|
|orientation|string||否|屏幕方向（ landscape 或 portrait ）|
|orientation|string||no|Screen orientation (landscape or portrait)|

**match-media 示例**
**match-media example**

以下示例代码，推荐使用HBuilderX，新建uni-app项目，可直接体验完整示例。
The following sample code is recommended to use HBuilderX to create a new uni-app project and experience the complete sample directly.
```html

<template>
    <view>
        <match-media :min-width="375" :max-width="800" >
            <view>Display when the minimum page width is 375px and the maximum page width is 800px</view>
        </match-media>

        <match-media :min-height="400" :orientation="landscape">
            <view>Show here when the page height is not less than 400px and the screen orientation is portrait</view>
        </match-media>
    </view>
</template>
```
