#### navigation-bar

The page navigation bar configuration node is used to specify some properties of the navigation bar. It can only be the first node in the page-meta component, and it needs to be used together.

**Property description**

| Attributes        | Types of | Defaults           | Required | Description                                                  |
| :---------------- | :------- | :----------------- | :------- | :----------------------------------------------------------- |
| title-icon        | string   |                    | no       | Title icon, icon path such as "./img/t.png", only supports local file path, relative path, relative to the host position of the current page, fixed width and height are logical pixel value "34px". The width and height of the pictures must be the same. Note: The title will be displayed on the left after setting the title icon. |
| title-icon-radius | string   | No rounded corners | no       | The rounded corners of the title icon, the value format is "XXpx", where XX is the pixel value (logical pixels), for example, "10px" means a 10-pixel radius rounded corner. |
| subtitle-text     | string   |                    | no       | Subtitle text content. After setting the subtitle, two lines of title will be displayed, and the subtitle will be displayed below the main title (titleText). Note: After setting the subtitle, it will be displayed on the left |
| subtitle-size     | string   | "auto"             | no       | The font size of the subtitle text. The font size unit is pixels. For example, "14px" means the font size is 14 pixels, and the default value is 12 pixels. |
| subtitle-color    | string   |                    | no       | The color of the subtitle text. The color value format is "#RRGGBB" and "rgba(R,G,B,A)". For example, "#FF0000" means that the title text color is red. The default value is the same as the main title text color |
| subtitle-overflow | string   | "ellipsis"         | no       | The processing method when the title text exceeds the display area, the possible values are: "clip"-the content is clipped when it exceeds the display area; "ellipsis"-an ellipsis (...) is displayed at the end when it exceeds the display area. |
| title-align       | string   | "auto"             | no       | Possible values: "center"-align to the center; "left"-align to the left; "auto"-automatically select according to the platform (left-aligned on Android platform, center-aligned on iOS platform) |
| background-image  | string   |                    | no       | The following types are supported: Background image path-such as "./img/t.png", only supports local file path, relative path, relative to the host location of the current page, drawn according to the actual title bar width and height; gradient color-only Support linear gradient, two-color gradient, such as "linear-gradient(to top, #a80077, #66ff00)", where the first parameter is the direction of the gradient, which can be a value: "to right" means gradient from left to right , "To left" means gradient from right to left, "to bottom" means gradient from top to bottom, "to top" means gradient from bottom to top, "to bottom right" means from upper left corner to lower right corner, "to top" "left" means from the lower right corner to the upper left corner |
| background-repeat | string   |                    | no       | Only valid when backgroundImage is set to the image path. Possible values: "repeat"-the background image is tiled vertically and horizontally; "repeat-x"-the background image is tiled horizontally and stretched vertically; "repeat-y"-the background image is tiled vertically Shop, stretch horizontally; "no-repeat"-the background image stretches both vertically and horizontally. "No-repeat" is used by default |
| blur-effect       | string   | "none"             | no       | This effect will display the content behind the title bar in a Gaussian blur. It is only effective when the type is "transparent" or "float". Possible values: "dark"-dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect; "extralight"-highlight style blur, corresponding to iOS native UIBlurEffectStyleExtraLight effect; "light"-bright style blur, corresponding to iOS native UIBlurEffectStyleLight effect; "none" -No blur effect. Note: Avoid setting the background color when using the blur effect. Setting the background color may cover the blur effect. |

Attribute description /collocation/pages?id=app-titlenview

**note**

- `navigation-bar` The currently supported configurations are only listed in the above table, and all the configurations of the navigation bar in page.json are not supported
- `navigation-bar` When it conflicts with the settings of pages.json, the settings of page.json will be overwritten

#### Sample code

```html
<template>
  <page-meta>
    <navigation-bar
      :title="nbTitle"
      :title-icon="titleIcon"
      :title-icon-radius="titleIconRadius"
      :subtitle-text="subtitleText"
      :subtitle-color="nbFrontColor"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
      :color-animation-duration="2000"
      color-animation-timing-func="easeIn"
    />
  </page-meta>
  <view class="content"></view>
</template>

<script>
  export default {
    data() {
      return {
        nbTitle: 'Title',
        titleIcon: '/static/logo.png',
        titleIconRadius: '20px',
        subtitleText: 'subtitleText',
        nbLoading: false,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>
```
