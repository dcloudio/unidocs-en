`uni.scss`The purpose of the file is to facilitate overall control of the style of the application. For example, button color, border style, `uni.scss`a batch of scss variable presets are preset in the file.

`uni-app`The official extension (uni ui)  have used these tripartite plug-style variables, if you are a plugin developer, I suggest you use scss pretreatment, and use these variables (no need to import this file) directly in the plug-in code , It is convenient for users to develop apps with the same overall style by building blocks.

`uni.scss`It is a special file. You can use the style variable in scss code without importing this file in the code. The uni-app compiler specially handles this uni.scss in the webpack configuration, so that every scss file is injected into this uni.scss to achieve a globally available effect. If developers want the global use of less and stylus, they need to configure the webpack strategy in vue.config.js.

**note:**

1. If you want to use these commonly used variables, you need to install the scss plugin in HBuilderX;

2. It needs to be added to the style node when using it 

   ```
   lang="scss"
   ```

   .

   ```
   <style lang="scss">
   </style>
   ```

3. pages.json does not support scss, the dynamic modification of the native navigation bar and tabbar can only use js api

**The following are the relevant variables of uni.scss:**

```
/* Color variable */

/* Behavior dependent color */
$uni-color-primary: #007aff;
$uni-color-success: #4cd964;
$uni-color-warning: #f0ad4e;
$uni-color-error: #dd524d;

/* Text base color */
$uni-text-color:#333;//The basic color
$uni-text-color-inverse:#fff;//The color
$uni-text-color-grey:#999;//Auxiliary grays, such as loading more prompts
$uni-text-color-placeholder: #808080;
$uni-text-color-disable:#c0c0c0;

/* The background color */
$uni-bg-color:#ffffff;
$uni-bg-color-grey:#f8f8f8;
$uni-bg-color-hover:#f1f1f1;//Click Status Color
$uni-bg-color-mask:rgba(0, 0, 0, 0.4);//Mask color

/* Border color */
$uni-border-color:#c8c7cc;

/* Variable size */

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

/* The vertical distance between */
$uni-spacing-col-sm: 8rpx;
$uni-spacing-col-base: 16rpx;
$uni-spacing-col-lg: 24rpx;

/* transparency */
$uni-opacity-disabled: 0.3; // Transparency of the disabled state of the component

/* Article Scene Related */
$uni-color-title: #2C405A; // Title Color
$uni-font-size-title:40rpx;
$uni-color-subtitle: #555555; // Secondary title color
$uni-font-size-subtitle:36rpx;
$uni-color-paragraph: #3F536E; // Paragraph color
$uni-font-size-paragraph:30rpx;
```

```

```
