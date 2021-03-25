#### image

image.

| Attribute name | Types of    | Defaults      | Description                                                  | Platform difference description       |
|:-|:-|:-|:-|:-|
|src|String||Image resource address||
|mode|String|'scaleToFill'|Image cropping and zooming mode|<div style="width:68px;"></div>|
|lazy-load|Boolean|false|Images are lazy loading. Only valid for image under page and scroll-view|App|
|fade-show|Boolean|true|Picture shows animation effect|Only App-nvue 2.3.4+ Android is valid|
|@error|HandleEvent||When an error occurs, the name of the event posted to AppService, event object event.detail = {errMsg:'something wrong'}||
|@load|HandleEvent||When the image is loaded, the name of the event posted to AppService, event object event.detail = {height:'image height px', width:'image width px'}|&nbsp;|

**Tips**

- `<image>` The default component width is 300px, height is 225px;`app-nvue平台，暂时默认为屏幕宽度`
- `src` Only support relative path, absolute path, support base64 code;
- If the page structure is complicated and there are too many css styles, the use of image may cause the style to take effect slowly, causing a "flicker" situation. At this time, the setting `image{will-change: transform}`can optimize this problem.
- Custom components to use inside `<image>`when, if the `src`situation Pathfinder failure may occur using a relative path, it is recommended to use absolute paths.
- Images in webp format are built-in support on Android. Different platforms on iOS are different. The details are as follows: under app-vue, iOS does not support; under app-nvue, iOS supports; 
- svg format images are supported differently on different platforms. Specifically: app-nvue does not support pictures in svg format, and only network addresses are supported on the applet.

**Mode valid values:**

There are 13 modes in mode, 4 of which are zoom modes and 9 are crop modes.

| mode | value        | Description                                                  |
|:-|:-|:-|
|Zoom|scaleToFill|Scaling the image without maintaining the aspect ratio, so that the width and height of the image are fully stretched to fill the image element|
|Zoom|aspectFit|Keep the aspect ratio and zoom the picture so that the long side of the picture can be fully displayed. In other words, the picture can be displayed completely.|
|Zoom|aspectFill|Keep the aspect ratio of the zoomed picture, and only ensure that the short side of the picture is fully displayed. In other words, the picture is usually only in the horizontal or vertical direction is complete, the other direction will be intercepted.|
|Zoom|widthFix|The width does not change, the height changes automatically, keeping the original image aspect ratio unchanged|
|Zoom|heightFix|The height does not change, the width changes automatically, and the original image aspect ratio remains unchanged **App and H5 platform HBuilderX 2.9.3+ support**|
|Crop|top|Do not zoom the picture, only show the top area of the picture|
|Crop|bottom|Do not zoom the picture, only show the bottom area of the picture|
|Crop|center|Do not zoom the picture, only show the middle area of the picture|
|Crop|left|Do not zoom the picture, only show the left area of the picture|
|Crop|right|Do not zoom the picture, only display the right area of the picture|
|Crop|top left|Do not zoom the picture, only display the upper left area of the picture|
|Crop|top right|Do not zoom the picture, only display the upper right area of the picture|
|Crop|bottom left|Do not zoom the picture, only display the lower left area of the picture|
|Crop|bottom right|Do not zoom the picture, only display the lower right area of the picture|

**Example:** 

```html
<template>
    <view class="page">
        <view class="image-list">
            <view class="image-item" v-for="(item,index) in array" :key="index">
                <view class="image-content">
                    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"
                        @error="imageError"></image>
                </view>
                <view class="image-title">{{item.text}}</view>
            </view>
        </view>
    </view>
</template>
```
```javascript
export default {
    data() {
        return {
            array: [{
                mode: 'scaleToFill',
                text: 'scaleToFill：Scaling the picture without maintaining the aspect ratio, so that the picture fits perfectly'
            }, {
                mode: 'aspectFit',
                text: 'aspectFit：Keep the aspect ratio and zoom the picture so that the long side of the picture can be fully displayed'
            }, {
                mode: 'aspectFill',
                text: 'aspectFill：Keep the aspect ratio zoomed in and out of the picture, and only ensure that the short side of the picture can be fully displayed'
            }, {
                mode: 'top',
                text: 'top：Do not zoom the picture, only show the top area of the picture'
            }, {
                mode: 'bottom',
                text: 'bottom：Do not zoom the picture, only show the bottom area of the picture'
            }, {
                mode: 'center',
                text: 'center：Do not zoom the picture, only show the middle area of the picture'
            }, {
                mode: 'left',
                text: 'left：Do not zoom the picture, only show the left area of the picture'
            }, {
                mode: 'right',
                text: 'right：Do not zoom the picture, only display the right side area of the picture'
            }, {
                mode: 'top left',
                text: 'top left：Do not zoom the picture, only display the upper left area of the picture'
            }, {
                mode: 'top right',
                text: 'top right：Do not zoom the picture, only display the upper right area of the picture'
            }, {
                mode: 'bottom left',
                text: 'bottom left：Do not zoom the picture, only display the lower left area of the picture'
            }, {
                mode: 'bottom right',
                text: 'bottom right：Do not zoom the picture, only display the lower right area of the picture'
            }],
            src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
        }
    },
    methods: {
        imageError: function(e) {
            console.error('An error event occurs in the image, and the value carried is' + e.detail.errMsg)
        }
    }
}
```
