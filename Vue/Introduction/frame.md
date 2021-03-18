

## Directory Structure

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─components            a directory of  components that conforms to the VUE component specification
│  └─comp-a.vue        reusable component A
├─hybrid                a directory to hold local web pages
├─platforms             a directory that holds pages specific to each platform
├─pages                 business page file storage directory
│  ├─index
│  │  └─index.vue       the index page
│  └─list
│     └─list.vue        the list page
├─static               The directory where the application references static resources (such as images, videos, etc.)，<b>attention：</b>Static resources can only be stored here
├─main.js               Vue initializes the entry file
├─App.vue               Application configuration, which is used to configure App global styles and listening
├─manifest.json         configure the application name, appid, logo, version and other packaging information，
└─pages.json            configure page routing, navigation bar, tabs and other page information.
	</code>
</pre>

**Tips**

- When compiled into any platform, `static`the files in the directory will be packaged in, non- `static`file (vue, js, css, etc.) under the directory is referenced will be included.
-  Static Directory js files are not compiled, if there are `es6`codes, without directly converted to run on mobile devices will complain.
- Css, less/scss And other resources not on the same  static directory, we recommend that these public resources on common the directory.

### Introduce static resources into the template

> `Template`When introducing static resources, such as `image`, `video`and other label `src`attributes, you can use a relative path or an absolute path, the form is as follows

```html
<!-- absolute path，/Static refers to the static directory under the root directory, and in cli projects /static refers to the static directory under the src directory -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- relative path -->
<image class="logo" src="../../static/logo.png"></image>
```

**注意**

- `@`The absolute path and relative path at the beginning will be verified by base64 conversion rules
- The imported static resources are not converted to base64 on non-h5 platforms.
- On H5 platform, resources smaller than 4kb will be converted to base64, and the rest will not be transferred.

### js file introduction

> `Js`When `script`importing `js`files in files or tags (including renderjs, etc.) , you can use relative and absolute paths, in the form as follows

```js
// the absolute path, @ points to the project root directory, and in cli projects @ points to the src directory
import add from '@/common/add.js'
// relative paths
import add from '../../common/add.js'
```

**Note**

- Js files do not support `/`the introduction of the beginning

### css introduces static resources

> `Css`When `style the label`importing files or internal `css`files (same for scss and less files), you can use relative or absolute paths ( `HBuilderX 2.6.6-alpha`)

```css
/* an absolute path */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* relative paths */
@import url('../../common/uni.css');
```



> `Css`The file or `style the label `image path referenced inside can use relative or absolute paths. It should be noted that some small project terminal css files are not allowed to reference local files (please see the precautions).

```css
/* an absolute path */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* relative paths */
background-image: url(../../static/logo.png);
```

**Tips**

- For the introduction of font icons, please refer to Font Icon.
- `@`The absolute path and relative path at the beginning will be verified by base64 conversion rules
- For the h5 platform, base64 will be converted if it is less than 4kb, and it will not be converted if it exceeds 4kb.
- Other platforms will not switch to base64

## Life cycle

### Application life cycle

Support application life cycle functions such as onLaunch, onShow, onHide, etc. For details.

### Page life cycle

Support life cycle functions such as onLoad, onShow, onReady.

## Route

Page routing is managed by the framework. Developers need to configure the path and page style of each routing page in pages.json. It's similar to configuring page routing in app.json for applet.

### Route jump

`There are two ways to jump to page routing: use the navigatorcomponent to jump, and call API to jump.

### Page stack

The framework manages all current pages in the form of a stack. When a route switch occurs, the page stack behaves as follows:

| Routing method | Page stack performance                                       | Trigger timing                                               |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| initialization | New page push                                                | The first page opened by                                     |
| Open new page  | New page push                                                | Call API  uni.navigateTo , use component.                    |
| Page redirect  | The current page is popped, and the new page is popped       | Call API  [uni.redirectTo , use component.                   |
| Page back      | The page keeps popping the stack until the target returns to the page | Call the API  uni.navigateBack , use the component  , the user presses the return button in the upper left corner, and the Android user clicks the physical back button |
| Tab switch     | All pages are popped, leaving only the new Tab page          | Call API  uni.switchTab, use component  , user switch Tab.   |
| Reload         | All pages are popped, leaving only new pages                 | Call API  uni.reLaunch, use components.                      |

## Operating environment judgment

### Development environment and production environment

We can set process.env.NODE_ENV`determine the current environment is a development environment or a production environment. Generally it is used for dynamic switching of connection test server or production server.

- In HBuilderX, click "Run" to compile the code is the development environment, and click "Release" to compile the code is the production environment
- In cli mode, it is a common compilation environment processing method.

```javascript
if(process.env.NODE_ENV === 'development'){
    console.log('development')
}else{
    console.log('production')
}
```

**Shortcut code block**

HBuilderX knockin block `uEnvDev`, `uEnvProd`to quickly generate a corresponding `development`, `production`operating environment decision code.

```javascript
// uEnvDev
if (process.env.NODE_ENV === 'development') {
    // TODO
}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
    // TODO
}
```



## Page style and layout

### Measurement unit

 Supported common css units include px, rpx

- px is the screen pixel
- rpx is responsive px, a dynamic unit that adapts to the screen width. Based on a 750-wide screen, 750rpx is exactly the width of the screen. As the screen becomes wider, the actual display effect of rpx will be magnified proportionally, but when the screen width of the App and H5 ends reaches 960px, the default will be calculated according to the screen width of 375px . Refer to the [rpx calculation configuration for specific configuration.

The vue page supports ordinary H5 units

- Rem root font size can be configured through page-meta.
- vh viewpoint height, the height of the viewport, 1vh is equal to 1% of the viewport height
- vw viewpoint width, the width of the window, 1vw is equal to 1% of the width of the window

On the App side, the units involved in the titleNView in pages.json or the plus api written in the page only support px. 

**Note that rpx is not supported at this time**

1. In nvue,  mode ( introduction to different compilation modes of nvue ) can use px and rpx, and the performance is the same as in vue. The weex model currently follows the weex unit, and its unit is quite special:

   - px: A length unit dynamically calculated based on a 750-wide screen, which is the same as the rpx concept in the vue page. (Be sure to note that the px in weex mode is different from the px logic in vue.)
   - wx: a unit of length that has nothing to do with the width of the device screen, the same as the concept of px in the vue page

   Below for `rpx`details:

   When designers provide design drawings, they generally only provide one resolution.

   Develop strictly according to the px of the design icon, the interface is easy to deform on mobile phones with different widths.

   And It mainly occures the width deformation. The height is generally not prone to problems because of the scroll bar. As a result, a strong demand for dynamic width units has been triggered.

   WeChat applet designed rpx to solve this problem. Both the App and H5 are supported `rpx`, and the calculation methods for different screen widths can be configured. For details, refer to : rpx calculation configuration.

   rpx is a unit relative to the base width and can be adapted to the screen width. `The standard screen width is 750rpx.

   Developers can calculate the rpx value of page elements based on the base width of the design draft. The conversion formula of design draft 1px and frame style 1rpx is as follows:

   ```
   draft 1px / base width of design draft = frame style 1rpx / 750rpx
   ```

   In other words, the width of the page elements in the `calculation formula of width:

   ```
   750 * the width of the element in the design draft / base width of design draft
   ```

   **For example:**

   1. If the width of the design draft 750px, element A width in the design draft is 100px, then the width of element A in ` which should be set: `750 * 100 / 750`the result is: 100rpx.
   2. If the width of 640px by design draft, element A width in the design draft is 100px, then the width of A in `which should be set: `750 * 100 / 640`the result is: 117rpx.
   3. If the width of the design draft 375px, element B width in the design draft is 200px, then the width of B in ` which should be set: `750 * 200 / 375`the result is: 400rpx.

**Tips**

- Note that rpx is a unit related to width. The wider the screen, the larger the actual pixel value. If you don't want to scale according to the screen width, you should use the px unit.
- If the developer also uses rpx in the font or height, it should be noted that this writing means that as the screen becomes wider, the font will become larger and the height will become larger. If you need a fixed height, you should use px.
- rpx does not support dynamic horizontal and vertical screen switching calculation, using rpx is recommended to lock the screen orientation
- Designers can use iPhone6 as the standard for visual drafts.
- On the App side, the units involved in the titleNView in pages.json or the plus api written in the page only support px, not rpx.
- Early  provided upx, and now it is recommended to change to rpx.

### Style import

Use the `@import`statement to import the external style sheet, `@import`followed by the relative path of the external style sheet that needs to be imported to `;`indicate the end of the statement.

**Sample code:**

```
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```

### Inline style

The frame component supports the use of style and class attributes to control the style of the component.

- style: The static style is written uniformly in the class. style receives dynamic styles and will be parsed at runtime. Please try to avoid writing static styles into style to avoid affecting rendering speed.

```
<view :style="{color:color}" />
```

- class: Used to specify style rules. Its attribute value is a collection of class selector names (style class names) in style rules. Style class names do not need to be accompanied by .. Style class names are separated by spaces.

```
<view class="normal_view" />
```

### Selector

The currently supported selectors are:

| Selector         | Sample         | Sample description                                           |
| :--------------- | :------------- | :----------------------------------------------------------- |
| .class           | .intro         | Select all components with class="intro"                     |
| #id              | #firstname     | Select the component with id="firstname"                     |
| element          | view           | Select all view components                                   |
| element, element | view, checkbox | Select view components of all documents and all checkbox components |

**note：** 

- In ` do not use the `*`selector.

- Only the class selector is supported in the WeChat applet custom component

- `page`Corresponds to `body`node, for example:

  ```css
  <!-- Set the page background color, using scoped will cause invalidations -->
  page {
    background-color:#ccc;
  }
  ```

### Global style and local style

The styles defined in App.vue are global styles and apply to every page. The style defined in the vue file under the pages directory is a partial style, which only acts on the corresponding page and will override the same selector in App.vue.

**note:**

- By App.vue `@import`may be introduced outreach style statement, each acting on the same page.
- nvue page does not support global styles

### CSS variables

 provides built-in CSS variables

| CSS variables       | description                                      | App                 | Applets | H5                              |
| :------------------ | :----------------------------------------------- | :------------------ | :------ | :------------------------------ |
| --status-bar-height | System status bar height                         | nvue note see below | 25px    | 0                               |
| --window-top        | The distance from the top of the content area    | 0                   | 0       | The height of the NavigationBar |
| --window-bottom     | The distance from the bottom of the content area | 0                   | 0       | TabBar height                   |

**Note:**

- `var(--status-bar-height)`This variable is fixed in the WeChat applet environment `25px`, and in the App is the actual status bar height of the phone.
- When set `"navigationStyle":"custom"`Cancel native navigation bar, because the form is immersive, occupied the position of the status bar. At this point you can use a height `var(--status-bar-height)`of view on the top of the page to avoid page content appears in the status bar.
- Since there is no native navigation bar and tabbar on the H5 end, it is also a front-end div simulation. If a fixed-position bottom view is set, it will be above the tabbar on the applet and app side, but will overlap with the tabbar on the H5 side. It can be used at this time `--window-bottom`, no matter which end it is, it is fixed above the tabbar.
- Currently nvue in the App end, it does not support `--status-bar-height`variable . The alternative is to get the height of the status bar through uni.getSystemInSync ().statusBarH8 on the page onLoad,and then set the height to occupying view by style binding way. Sample code is provided below

**Code block**

The quick way to write css variables is: knock hei in css, you can see 3 css variables in the candidate assistant. (Supported by HBuilderX 1.9.6 and above)

Example 1-Use css variables for normal pages:

```

```

```html
<template>
    <page-meta>
        <navigation-bar />
    </page-meta>
	<view>
		<view class="status_bar">
			<!-- Here's the status bar -->
		</view>
		<view> Text in the status bar </view>
	</view>
</template>	
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
```

```html
<template>
	<view>
		<view class="toTop">
		</view>
	</view>
</template>	
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px)
	}
</style>
```

Example 2 - NVUE page to get status bar height

```html
<template>
	<view class="content">
		<view :style="{ height: iStatusBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iStatusBarHeight:0
			}
		},
		onLoad() {
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight
		}
	}
</script>
```

### Fixed value

` The height of the following components is fixed and cannot be modified:

| Components    | description    | App                                                          | H5   |
| :------------ | :------------- | :----------------------------------------------------------- | :--- |
| NavigationBar | Navigation Bar | 44px                                                         | 44px |
| TabBar        | Bottom tab     | Before HBuilderX 2.3.4, it was 56px. Starting from 2.3.4, it is adjusted to be the same as H5 and unified to 50px. But you can change the height independently) | 50px |

The height of each applet platform, including iOS and Android of the same applet platform, is different.

### Flex layout

In order to support cross-platform, the framework recommends using Flex layout. For Flex layout, please refer to the external document A Complete Guide to Flexbox, Ruan Yifeng’s flex tutorial etc.

### Background picture

Support the use of the css set the background image, use an ordinary `web`project much the same, but need to pay attention to the following points:

- Support base64 format pictures.

- Support network path pictures.

- The applet does not support the use of local files in css, including local background images and font files. It can be used only in base64 mode. Before the v3 mode, the App side had the same limitation. Starting from v3 compilation mode, it supports the direct use of local background images and fonts.

- Note that when using the local path background image:

  1. For the convenience of developers, when the background image is less than 40kb `, it will be automatically converted to base64 format when compiled to a platform that does not support local background images;

  2. If the image is larger than or equal to 40kb, there will be performance problems. It is not recommended to use a background image that is too large. If the developer must use it, he needs to convert it to base64 format for use, or move it to the server and reference it from the network address.

  3. It is recommended to use an absolute path starting with ~@ for the reference path of the local background image.

     ```css
      .test2 {
          background-image: url('~@/static/logo.png');
      }
     ```

### Font icon

`Support the use of font icons, use ordinary ` web items the same, you need to pay attention to the following points:

- Support base64 format font icon.

- Support network path font icon.

- The network path must add the protocol header `https`.

- Note that when using local path icon fonts:

  1. For the convenience of developers, when the font file is less than 40kb, it `will be automatically converted to base64 format;

  2. If the font file is greater than or equal to 40kb, it may have performance problems if it is still converted to base64. If the developer must use it, he needs to convert it to base64 by himself, or move it to the server and reference it from the network address;

  3. It is recommended to use an absolute path starting with ~@ for the reference path of the font file.

     ```css
      @font-face {
          font-family: test1-icon;
          src: url('~@/static/iconfont.ttf');
      }
     ```

The font file cannot be imported directly by using css, you need to use the following method to import it in js. Nvue does not support importing fonts from local paths, please use network links or `base64`forms. 

**Be sure to use single quotation marks within the brackets of the** **`src`field `url`.**

```js
var domModule = weex.requireModule('dom');
domModule.addRule('fontFace', {
  'fontFamily': "fontFamilyName",
  'src': "url('https://...')"
})
```

**Example:**

```html
<template>
    <view>
        <view>
            <text class="test">&#xe600;</text>
            <text class="test">&#xe687;</text>
            <text class="test">&#xe60b;</text>
        </view>
    </view>
</template>
<style>
    @font-face {
        font-family: 'iconfont';
        src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
    }
    .test {
        font-family: iconfont;
        margin-left: 20rpx;
    }
</style>
```

## Template and block

`Supports nested template in the template `<template/>`and `<block/>`used to perform list rendering and conditions of rendering .

`<template/>`and `<block/>`is not a component, which is just a wrapper element, will not do any rendering on the page, only accept control properties.

`<block/>`There are certain differences in performance on different platforms, and unified use is recommended `<template/>`.

**Code example**

```html
<template>
    <view>
        <template v-if="test">
            <view>Display when test is true</view>
        </template>
        <template v-else>
            <view>Display when test is false</view>
        </template>
    </view>
</template>
<template>
    <view>
        <block v-for="(item,index) in list" :key="index">
            <view>{{item}} - {{index}}</view>
        </block>
    </view>
</template>
```

## ES6 support

 Supports most ES6 APIs, it also supports ES7 await/async.

## NPM support

Supports the use of **npm to** install third-party packages.

This document requires developers to have a certain understanding of **npm** , so the basic functions of **npm** will not be introduced . If you haven't contacted **npm** before , please read the official NPM documentation to learn.

**Initialize the npm project**

If the project has not used npm to manage dependencies before (there is no package.json file in the project root directory), first execute the command in the project root directory to initialize the npm project:

```shell
npm init -y
```

The cli project already has package.json by default. The project created by HBuilderX is not available by default, and needs to be created through the initialization command.

**Installation dependencies**

Install the npm package by executing the command in the project root directory:

```shell
npm install packageName --save
```

**Perform**

After installation, you can use the npm package. The npm package is introduced in js:

```js
import package from 'packageName'
const package = require('packageName')
```



## TypeScript support

To use ts development in , please refer to Vue.js TypeScript support instructions.

The type definition file is provided by the @dcloudio/types module. After installation, please pay attention to the compilerOptions> types section in the tsconfig.json file. You can also install other small program platform type definitions, such as: miniprogram-api-typings, mini-types . For missing or incorrect type definitions, you can add or modify them locally and report to the official to request an update at the same time.

### Precautions

Note the following when using ts in .

#### Declare lang="ts" in the script node of the vue file

Statement `lang="ts"`after all the components of the vue vue incoming file import, require the use of ts writing.

**Sample code**

Remodeling uni-badge.vue

```javascript
<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        props: {
            type: {
                type: String,
                default: 'default'
            },
            inverted: {
                type: Boolean,
                default: false
            },
            text: {
                type: [String, Number],
                default: ''
            },
            size: {
                type: String,
                default: 'normal'
            }
        },
        computed: {
            setClass(): string {
                const classList: string[] = ['uni-badge-' + this.type, 'uni-badge-size-' + this.size];
                if (this.inverted === true) {
                    classList.push('uni-badge-inverted')
                }
                return classList.join(" ")
            }
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    })
</script>
```

Reference uni-badge component in index.vue

```javascript
<script lang="ts">
    import Vue from 'vue';
    import uniBadge from '../../components/uni-badge.vue';
    export default Vue.extend({
        data() {
            return {
                title: 'Hello'
            }
        },
        components:{
            uniBadge
        }
    });
</script>
```

## Renderjs

`renderjs`It is a js running in the view layer. 

`renderjs`There are two main functions:

- Significantly reduce the communication loss between the logic layer and the view layer, and provide high-performance view interaction capabilities
- Operate dom in the view layer, run the js library for web

### How to use

Set the lang of the script node to renderjs

```html
<script module="test" lang="renderjs">
    export default {
        mounted() {
            // ...
        },
        methods: {
            // ...
        }
    }
</script>
```



