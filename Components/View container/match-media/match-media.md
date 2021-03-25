#### match-media

The media query matches the detection node.

Similar to the use of media queries to adapt to large and small screens in web development, match-media is a basic view component that can adapt to different screens. You can specify a set of media query media query rules, and this component will only be displayed when the query conditions are met.

For example, placing a sidebar in the match-media component and setting the media query rule to display on widescreen can achieve the effect of displaying the sidebar on the widescreen of the PC, but not displaying the sidebar on the narrow screen of the mobile phone.

**Property description**

| Attribute name | Types of | Defaults | Required | Description                                |
|:-|:-|:-|:-|:-|
|min-width|number||no|Minimum page width (in px)|
|max-width|number||no|Maximum page width (in px)|
|width|number||no|Page width (in px)|
|min-height|number||no|Minimum page height (in px)|
|max-height|number||no|Maximum page height (in px)|
|height|number||no|Page height (in px)|
|orientation|string||no|Screen orientation (landscape or portrait)|

**match-media example**

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
