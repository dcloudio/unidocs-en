`uni.scss`文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，`uni.scss`文件里预置了一批scss变量预置。
`uni.scss`The purpose of the file is to facilitate overall control of the style of the application. For example, button color, border style, `uni.scss`a batch of scss variable presets are preset in the file.

 ``uni-app`` 官方扩展插件（uni ui）及 [插件市场](https://ext.dcloud.net.cn) 上很多三方插件均使用了这些样式变量，如果你是插件开发者，建议你使用 scss 预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App。
  `uni-app`The official extension (uni ui)  have used these tripartite plug-style variables, if you are a plugin developer, I suggest you use scss pretreatment, and use these variables (no need to import this file) directly in the plug-in code , It is convenient for users to develop apps with the same overall style by building blocks.

 ``uni.scss``是一个特殊文件，在代码中无需 import 这个文件即可在scss代码中使用这里的样式变量。uni-app的编译器在webpack配置中特殊处理了这个uni.scss，使得每个scss文件都被注入这个uni.scss，达到全局可用的效果。如果开发者想要less、stylus的全局使用，需要在vue.config.js中自行配置webpack策略。
  `uni.scss`It is a special file. You can use the style variable in scss code without importing this file in the code. The uni-app compiler specially handles this uni.scss in the webpack configuration, so that every scss file is injected into this uni.scss to achieve a globally available effect. If developers want the global use of less and stylus, they need to configure the webpack strategy in vue.config.js.

**注意：** 
**note:**

1. 如要使用这些常用变量，需要在 HBuilderX 里面安装 scss 插件；
1. If you want to use these commonly used variables, you need to install the scss plugin in HBuilderX;
2. 使用时需要在 style 节点上加上 ``lang="scss"``。
2. It needs to be added to the style node when using it  ``lang="scss"`` .
```
<style lang="scss">
</style>
```
3. pages.json不支持scss，原生导航栏和tabbar的动态修改只能使用js api
3. pages.json does not support scss, the dynamic modification of the native navigation bar and tabbar can only use js api

**以下是 uni.scss 的相关变量：**
**The following are the relevant variables of uni.scss:**

```
/* 颜色变量 */
/* Color variable */

/* 行为相关颜色 */
/* Behavior dependent color */
$uni-color-primary: #007aff;
$uni-color-success: #4cd964;
$uni-color-warning: #f0ad4e;
$uni-color-error: #dd524d;

/* 文字基本颜色 */
/* Text base color */
//基本色
//The basic color
$uni-text-color:#333;
//反色
//The reverse color
$uni-text-color-inverse:#fff;
//辅助灰色，如加载更多的提示信息
//Auxiliary grays, such as loading more prompts
$uni-text-color-grey:#999;
$uni-text-color-placeholder: #808080;
$uni-text-color-disable:#c0c0c0;

/* 背景颜色 */
/* The background color */
$uni-bg-color:#ffffff;
$uni-bg-color-grey:#f8f8f8;
//点击状态颜色
//Click Status Color
$uni-bg-color-hover:#f1f1f1;
//遮罩颜色
//Mask color
$uni-bg-color-mask:rgba(0, 0, 0, 0.4);

/* 边框颜色 */
/* Border color */
$uni-border-color:#c8c7cc;

/* 尺寸变量 */
/* Variable size */

/* 文字尺寸 */
/* Text size */
$uni-font-size-sm:24rpx;
$uni-font-size-base:28rpx;
$uni-font-size-lg:32rpx;

/* 图片尺寸 */
/* Image size */
$uni-img-size-sm:40rpx;
$uni-img-size-base:52rpx;
$uni-img-size-lg:80rpx;

/* Border Radius */
$uni-border-radius-sm: 4rpx;
$uni-border-radius-base: 6rpx;
$uni-border-radius-lg: 12rpx;
$uni-border-radius-circle: 50%;

/* 水平间距 */
/* Horizontal spacing */
$uni-spacing-row-sm: 10px;
$uni-spacing-row-base: 20rpx;
$uni-spacing-row-lg: 30rpx;

/* 垂直间距 */
/* The vertical distance between */
$uni-spacing-col-sm: 8rpx;
$uni-spacing-col-base: 16rpx;
$uni-spacing-col-lg: 24rpx;

/* 透明度 */
/* transparency */
// 组件禁用态的透明度
// Transparency of the disabled state of the component
$uni-opacity-disabled: 0.3;

/* 文章场景相关 */
/* Article Scene Related */
// 文章标题颜色
// Title Color
$uni-color-title: #2C405A;
$uni-font-size-title:40rpx;
// 二级标题颜色
// Secondary title color
$uni-color-subtitle: #555555;
$uni-font-size-subtitle:36rpx;
// 文章段落颜色
// Paragraph color
$uni-color-paragraph: #3F536E;
$uni-font-size-paragraph:30rpx;
```
