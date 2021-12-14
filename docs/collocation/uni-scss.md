`uni.scss`文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，`uni.scss`文件里预置了一批scss变量预置。
The purpose of the `uni.scss` file is to facilitate the overall control of the style of the application. For example, for button color and border style, a batch of scss variable presets are preset in the `uni.scss` file.

``uni-app`` 官方扩展插件（uni ui）及 [插件市场](https://ext.dcloud.net.cn) 上很多三方插件均使用了这些样式变量，如果你是插件开发者，建议你使用 scss 预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App。
These style variables are used in many third-party plug-ins on the `uni-app` official extension plug-in (uni ui) and the [Plug-in market](https://ext.dcloud.net.cn). If you are a plug-in developer, it is recommended to use scss preprocessing and use these variables directly in the plug-in code (without importing this file), so that users can develop Apps with a consistent overall style by building blocks.

``uni.scss``是一个特殊文件，在代码中无需 import 这个文件即可在scss代码中使用这里的样式变量。uni-app的编译器在webpack配置中特殊处理了这个uni.scss，使得每个scss文件都被注入这个uni.scss，达到全局可用的效果。如果开发者想要less、stylus的全局使用，需要在vue.config.js中自行配置webpack策略。
`uni.scss` is a special file, which can be used in scss code without importing this file in the code. The compiler of uni-app performed special treatment for this uni.scss in the webpack configuration, so that every scss file is injected into this uni.scss to achieve the effect of global availability. If developers want the global use of less and stylus, they need to configure the webpack policies in vue.config.js on their own.

**注意：** 
**Notice:**

1. 如要使用这些常用变量，需要在 HBuilderX 里面安装 scss 插件；
1. If these common variables are to be used, scss plug-in should be installed in HBuilderX;
2. 使用时需要在 style 节点上加上 ``lang="scss"``。
2. When using it, you need to add `lang="scss"` to the style node.
```
<style lang="scss">
</style>
```
3. pages.json不支持scss，原生导航栏和tabbar的动态修改只能使用js api
3. pages.json does not support scss, and only js api can be used for dynamic modification of native navigation bar and tabbar.

**以下是 uni.scss 的相关变量：**
**The following are the relevant variables of uni.scss:**

```
/* Color variable */

/* Behavior-related color */
$uni-color-primary: #007aff;
$uni-color-success: #4cd964;
$uni-color-warning: #f0ad4e;
$uni-color-error: #dd524d;

/* Basic text color */
//基本色
// Basic color
$uni-text-color:#333;
//反色
// Invert color
$uni-text-color-inverse:#fff;
//辅助灰色，如加载更多的提示信息
// Auxiliary gray, such as loading more prompt information
$uni-text-color-grey:#999;
$uni-text-color-placeholder: #808080;
$uni-text-color-disable:#c0c0c0;

/* Background color */
$uni-bg-color:#ffffff;
$uni-bg-color-grey:#f8f8f8;
//点击状态颜色
// Click the status color
$uni-bg-color-hover:#f1f1f1;
//遮罩颜色
// Mask color
$uni-bg-color-mask:rgba(0, 0, 0, 0.4);

/* Border color */
$uni-border-color:#c8c7cc;

/* Dimensional variables */

/* Text size */
$uni-font-size-sm:24rpx;
$uni-font-size-base:28rpx;
$uni-font-size-lg:32rpx;

/* Image size */
$uni-img-size-sm:40rpx;
$uni-img-size-base:52rpx;
$uni-img-size-lg:80rpx;

/* Border Radius */
$uni-border-radius-sm: 4rpx;
$uni-border-radius-base: 6rpx;
$uni-border-radius-lg: 12rpx;
$uni-border-radius-circle: 50%;

/* Horizontal spacing */
$uni-spacing-row-sm: 10px;
$uni-spacing-row-base: 20rpx;
$uni-spacing-row-lg: 30rpx;

/* Vertical spacing */
$uni-spacing-col-sm: 8rpx;
$uni-spacing-col-base: 16rpx;
$uni-spacing-col-lg: 24rpx;

/* Transparency */
// 组件禁用态的透明度
//Disabled state transparency of component
$uni-opacity-disabled: 0.3;

/* Articles and scenes related*/
// 文章标题颜色
//Article title color
$uni-color-title: #2C405A;
$uni-font-size-title:40rpx;
// 二级标题颜色
//Secondary title color
$uni-color-subtitle: #555555;
$uni-font-size-subtitle:36rpx;
// 文章段落颜色
//Article paragraph color
$uni-color-paragraph: #3F536E;
$uni-font-size-paragraph:30rpx;
```
