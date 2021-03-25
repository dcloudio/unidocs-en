- `pages.json` The file is used to configure uni-app globally, determine the path of the page file, window style, native navigation bar, native tabbar at the bottom, etc.

  It is similar to `app.json`the **page management** part of the WeChat applet . Note that `app.json`the content that originally belonged to the location permission application is configured in the manifest in the uni-app.

  ### [List of configuration items](https://uniapp.dcloud.io/collocation/pages?id=配置项列表)

  | Attributes                                                   | Types of     | Required | description                                    | Platform compatible |
  | :----------------------------------------------------------- | :----------- | :------- | :--------------------------------------------- | :------------------ |
  | [globalStyle](https://uniapp.dcloud.io/collocation/pages?id=globalstyle) | Object       | no       | Set the window performance of the default page |                     |
  | [pages](https://uniapp.dcloud.io/collocation/pages?id=pages) | Object Array | Yes      | Set page path and window performance           |                     |
  | [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) | Object       | no       | Automatic component introduction rules         | 2.5.5+              |
  | [tabBar](https://uniapp.dcloud.io/collocation/pages?id=tabbar) | Object       | no       | Set the performance of the bottom tab          |                     |
  | [condition](https://uniapp.dcloud.io/collocation/pages?id=condition) | Object       | no       | Start mode configuration                       |                     |
  | [subPackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages) | Object Array | no       | Subcontract loading configuration              |                     |

  The following is one that includes all configuration options `pages.json`:

  ```javascript
  {
      "pages": [{
          "path": "pages/component/index",
          "style": {
              "navigationBarTitleText": "component"
          }
      }, {
          "path": "pages/API/index",
          "style": {
              "navigationBarTitleText": "interface"
          }
      }, {
          "path": "pages/component/view/index",
          "style": {
              "navigationBarTitleText": "view"
          }
      }],
      "condition": { //Pattern configuration, effective only during development
          "current": 0, //The currently active schema (List's index entries)
          "list": [{
              "name": "test", //Model name
              "path": "pages/component/view/index" //Startup page, required
          }]
      },
      "globalStyle": {
          "navigationBarTextStyle": "black",
          "navigationBarTitleText": "demo",
          "navigationBarBackgroundColor": "#F8F8F8",
          "backgroundColor": "#F8F8F8",
          "usingComponents":{
              "collapse-tree-item":"/components/collapse-tree-item"
          },
          "rpxCalcMaxDeviceWidth": 960,
          "rpxCalcBaseDeviceWidth": 375,
          "rpxCalcIncludeWidth": 750
      },
      "tabBar": {
          "color": "#7A7E83",
          "selectedColor": "#3cc51f",
          "borderStyle": "black",
          "backgroundColor": "#ffffff",
          "height": "50px",
          "fontSize": "10px",
          "iconWidth": "24px",
          "spacing": "3px",
          "list": [{
              "pagePath": "pages/component/index",
              "iconPath": "static/image/icon_component.png",
              "selectedIconPath": "static/image/icon_component_HL.png",
              "text": "component"
          }, {
              "pagePath": "pages/API/index",
              "iconPath": "static/image/icon_API.png",
              "selectedIconPath": "static/image/icon_API_HL.png",
              "text": "interface"
          }],
          "midButton": {
              "width": "80px",
              "height": "50px",
              "text": "The text",
              "iconPath": "static/image/midButton_iconPath.png",
              "iconWidth": "24px",
              "backgroundImage": "static/image/midButton_backgroundImage.png"
          }
      },
    "easycom": {
      "autoscan": true, //Whether to automatically scan components
      "custom": {//Custom scanning rules
        "^uni-(.*)": "@/components/uni-$1.vue"
      }
    },
    "topWindow": {
      "path": "responsive/top-window.vue",
      "style": {
        "height": "44px"
      }
    },
    "leftWindow": {
      "path": "responsive/left-window.vue",
      "style": {
        "width": "300px"
      }
    },
    "rightWindow": {
      "path": "responsive/right-window.vue",
      "style": {
        "width": "300px"
      },
      "matchMedia": {
        "minWidth": 768
      }
    }
  }
  ```

  # [globalStyle](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)

  Used to set the status bar, navigation bar, title, window background color of the application, etc.

  | Attributes                   | Types of | Defaults | description                                                  |
  | :--------------------------- | :------- | :------- | :----------------------------------------------------------- |
  | navigationBarBackgroundColor | HexColor | # F7F7F7 | Navigation bar background color (same as status bar background color) |
  | navigationBarTextStyle       | String   | white    | Navigation bar title color and status bar foreground color, only black/white supported |
  | navigationBarTitleText       | String   |          | Navigation bar title text content                            |
  | enablePullDownRefresh        | Boolean  | false    | Whether to enable pull-down refresh                          |
  | onReachBottomDistance        | Number   | 50       | The distance from the bottom of the page when the page pull-down event is triggered, the unit only supports px |
  | usingComponents              | Object   |          | References small program components                          |

  **note**

  - The picture link address that `titleImage`must be used when using `https`the Alipay applet , it needs to be debugged on the real machine to see the effect, there is no effect in the Alipay developer tool
  - `globalStyle`The setting in -> `titleImage`will also override the setting text title in`pages``style`
  - Use `maxWidth`, the fixed elements within the page need to use --window-left, - window-right layout to ensure the correct position

  # topWindow

  uni-app 2.9+ adds leftWindow, topWindow, and rightWindow configurations. Used to solve the problem of widescreen adaptation.

  Taking the existing mobile application as the mainWindow, new page display windows can be added to the left, top, and right.

  | Attributes | Types of | Defaults | description                                    |
  | :--------- | :------- | :------- | :--------------------------------------------- |
  | path       | String   |          | Configure page path                            |
  | style      | Object   |          | Configure page window performance              |
  | matchMedia | Object   |          | Configure the rules for displaying this window |

  **note**

  - Currently the style node only supports the configuration of CSS style related attributes such as width and height

  #### matchMedia

  | Attributes | Types of | Defaults | description                                                  |
  | :--------- | :------- | :------- | :----------------------------------------------------------- |
  | minWidth   | Number   | 768      | When the visible area width of the device >= minWidth, the window is displayed |

  Through the adjustment of matchMedia, you can adaptively display the specified window on different screens.

  ```javascript
  {
    "pages": [
      {
        "path": "pages/login/login",
        "style": {
          "topWindow": false // The current page is not displayed topWindow
          "leftWindow": false // The current page is not displayed leftWindow
          "rightWindow": false // The current page is not displayed rightWindow
        }
      }
    ],
    "topWindow": {
      "path": "responsive/top-window.vue", // Specify the TopWindow page file
      "style": {
        "height": "44px"
      }
    },
    "leftWindow": {
      "path": "responsive/left-window.vue", // Specify the leftWindow page file
      "style": {
        "width": "300px"
      }
    },
    "rightWindow": {
      "path": "responsive/right-window.vue", // Specify the rightWindow page file
      "style": {
        "width": "300px" // The page width
      },
      "matchMedia": {
        "minWidth": 768 //Valid condition, when the window width is greater than 768px
      }
    }
  }
  ```

  # pages

  `uni-app` Configure which pages the application consists of through the pages node. The pages node receives an array. Each item in the array is an object. Its attribute values are as follows:

  | Attributes | Types of | Defaults | description                       |
  | :--------- | :------- | :------- | :-------------------------------- |
  | path       | String   |          | Configure page path               |
  | style      | Object   |          | Configure page window performance |

  **Tips：**

  - The first item of the pages node is the application entry page (the home page)
  - **To add/reduce pages in the application** , you need to modify the pages array
  - The file name **does not need to write a suffix** , the framework will automatically find the page resource under the path

  **Code example:**

  The development directory is:

  ```
  ┌─pages               
  │  ├─index
  │  │  └─index.vue    
  │  └─login
  │     └─login.vue    
  ├─static             
  ├─main.js       
  ├─App.vue          
  ├─manifest.json  
  └─pages.json            
      
  ```

  You need to fill in pages.json

  ```javascript
  {
      "pages": [
          {
              "path": "pages/index/index", 
              "style": { ... }
          }, {
              "path": "pages/login/login", 
              "style": { ... }
          }
      ]
  }
  ```

  ## style

  Used to set the status bar, navigation bar, title, window background color, etc. of each page.

  The configuration items in the page will override the same configuration items in globalStyle

  | Attributes                   | Types of | Defaults | description                                                  |
  | :--------------------------- | :------- | :------- | :----------------------------------------------------------- |
  | navigationBarBackgroundColor | HexColor | #000000  | Navigation bar background color (same as status bar background color), such as "#000000" |
  | navigationBarTextStyle       | String   | white    | Navigation bar title color and status bar foreground color, only black/white supported |
  | navigationBarTitleText       | String   |          | Navigation bar title text content                            |
  | navigationBarShadow          | Object   |          | Navigation bar shadow, configuration reference below the navigation bar shadow |
  | backgroundTextStyle          | String   | dark     | Drop-down loading style, only supports dark/light            |
  | enablePullDownRefresh        | Boolean  | false    | Whether to enable pull-down refresh                          |
  | onReachBottomDistance        | Number   | 50       | The distance from the bottom of the page when the page pull-down event is triggered, the unit only supports px |

  **note**

  - Use `maxWidth`, the fixed elements within the page need to use --window-left, - window-right layout to ensure the correct position

  **Code example:**

  ```javascript
  {
    "pages": [{
        "path": "pages/index/index",
        "style": {
          "navigationBarTitleText": "Home page ",// Set the page title text
          "enablePullDownRefresh":true//Turn on drop-down refresh
        }
      },
      ...
    ]
  }
  ```

  **note**

  - The picture link address that `titleImage`must be used when using `https`the Alipay applet , it needs to be debugged on the real machine to see the effect, there is no effect in the Alipay developer tool

  ### Note on the use of custom navigation bars

  When navigationStyle is set to custom or titleNView is set to false, the native navigation bar is not displayed. At this time, there are several issues to be aware of:

  - For non-H5 devices, the status bar area at the top of the phone will be covered by the page content. This is because the form is immersive, that is, full-screen writable content. uni-app provides a css variable for the height of the status bar 

    --status-bar-height

     . If you need to let the position of the status bar out of the foreground, you can write a placeholder div with the height set as the css variable.

    ```html
    <template>
      <view>
          <view class="status_bar">
              <!-- Here's the status bar -->
          </view>
          <view> Text under the status bar </view>
      </view>
    </template>    
    <style>
      .status_bar {
          height: var(--status-bar-height);
          width: 100%;
      }
    </style>
    ```

  - If the native navigation bar cannot meet the needs, it is recommended to use uni ui's custom navigation bar NavBar. This front-end navigation bar automatically handles the height occupancy of the status bar.

  - For non-H5 terminals, the front-end navigation cannot cover native components. If the page has 

    native components

     such as video, map, textarea (small programs only) , it will cover the navigation bar when scrolling

    - You can use cover-view as the navigation bar to avoid overwriting problems
    
  - The rendering speed of the front-end components is not as good as the native navigation bar. The native navigation can be rendered during the animation to ensure that the screen is not white during the animation. However, when the front-end navigation bar is used, the entire page may be white during the animation when the new form enters. The lower end The more obvious the phone.

  - The above discussion is the front-end custom navigation bar, but on the App side, the native navigation bar also provides more customization than the mini program navigation

    - titleNView: Provides more configurations for the native navigation bar, including custom buttons, scrolling gradient effects, search boxes, etc.
    - subNView: Use nvue native rendering, all layouts are developed by yourself, with all customization flexibility. 

  - After the native navigation bar is disabled on the page, if you want to change the foreground font style of the status bar, you can still set the navigationBarTextStyle property of the page (only black or white). If you want to set the status bar color separately, you can use plus.navigator.setStatusBarStyle to set the App . Note that some low-end Android phones (4.4) do not support setting the foreground color of the status bar.

  In view of the above problems, when native navigation can solve business needs, try to use native navigation. Sometimes it is even necessary to sacrifice some less important requirements. Under App and H5, uni-app provides flexible solutions: titleNView , subNVue , or nvue for the entire page. But under the small program, because of its own limitations, there is no good solution. If necessary, you can also use conditional compilation to deal with it separately.

  #### Navigation Bar

  | Attributes       | Types of | Defaults           | description                                                  | Version compatibility                                    |
  | :--------------- | :------- | :----------------- | :----------------------------------------------------------- | :------------------------------------------------------- |
  | backgroundColor  | String   | # F7F7F7           | The background color, the color value format is "#RRGGBB". When using a semi-transparent title bar, you can also set the rgba format |                                                          |
  | buttons          | Array    |                    | Custom buttons                                               | Pure nvue is render: not currently supported when native |
  | titleColor       | String   | #000000            | Title text color                                             |                                                          |
  | titleOverflow    | String   | ellipsis           | The processing method when the title text exceeds the display area. "clip"-the content is clipped when it exceeds the display area; "ellipsis"-an ellipsis (...) is displayed at the end when it exceeds the display area. |                                                          |
  | titleText        | String   |                    | Title text content                                           |                                                          |
  | titleSize        | String   |                    | Title text font size                                         |                                                          |
  | type             | String   | default            | Navigation bar style. "default"-default style; "transparent"-scrolling transparent gradient; "float"-floating navigation bar. | App-nvue 2.4.4+ support                                  |
  | tags             | Array    |                    | Native View enhancement                                      |                                                          |
  | searchInput      | Object   |                    | The search box configuration on the native navigation bar    | 1.6.0                                                    |
  | homeButton       | Boolean  | false              | Whether the title bar control displays the Home button       |                                                          |
  | autoBackButton   | Boolean  | true               | Whether the title bar control displays the left back button  | 2.6.3                                                    |
  | backButton       | Object   |                    | The style of the back button                                 | 2.6.3                                                    |
  | backgroundImage  | String   |                    | The following types are supported: Background image path-such as "./img/t.png", only supports local file path, relative path, relative to the host location of the current page, drawn according to the actual title bar width and height; gradient color-only Support linear gradient, two-color gradient, such as "linear-gradient(to top, #a80077, #66ff00)", where the first parameter is the direction of the gradient, which can be a value: "to right" means gradient from left to right , "To left" means gradient from right to left, "to bottom" means gradient from top to bottom, "to top" means gradient from bottom to top, "to bottom right" means from upper left corner to lower right corner, "to top" "left" means from the lower right corner to the upper left corner | 2.6.3                                                    |
  | backgroundRepeat | String   |                    | Only valid when backgroundImage is set to the image path. Possible values: "repeat"-the background image is tiled vertically and horizontally; "repeat-x"-the background image is tiled horizontally and stretched vertically; "repeat-y"-the background image is tiled vertically Shop, stretch horizontally; "no-repeat"-the background image stretches both vertically and horizontally. "No-repeat" is used by default | 2.6.3                                                    |
  | titleAlign       | String   | "auto"             | Possible values: "center"-align to the center; "left"-align to the left; "auto"-automatically select according to the platform (left-aligned on Android platform, center-aligned on iOS platform) | 2.6.3                                                    |
  | blurEffect       | String   | "none"             | This effect will display the content behind the title bar in a Gaussian blur. It is only effective when the type is "transparent" or "float". Possible values: "dark"-dark style blur, corresponding to iOS native UIBlurEffectStyleDark effect; "extralight"-highlight style blur, corresponding to iOS native UIBlurEffectStyleExtraLight effect; "light"-bright style blur, corresponding to iOS native UIBlurEffectStyleLight effect; "none" -No blur effect. Note: Avoid setting the background color when using the blur effect. Setting the background color may cover the blur effect. | 2.4.3                                                    |
  | coverage         | String   | "132px"            | The change scope of the title bar control is only valid when the type value is transparent. The transparency of the title bar background will change when the page is scrolled. The title bar background becomes completely opaque when the page scrolls to the specified offset. Support percentage, pixel value |                                                          |
  | splitLine        | Boolean  | false              | The bottom split line of the title bar (SplitLineStyles), set this property to display the split line at the bottom of the title bar control, and the color value and height can be configured. Set this property to undefined or null to hide the dividing line. The bottom dividing line is not displayed by default | 2.6.6                                                    |
  | subtitleColor    | String   |                    | The color of the subtitle text. The color value format is "#RRGGBB" and "rgba(R,G,B,A)". For example, "#FF0000" means the color of the title text is red. The default value is the same as the main title text color | 2.6.6                                                    |
  | subtitleSize     | String   | "auto"             | The font size of the subtitle text. The font size unit is pixels. For example, "14px" means the font size is 14 pixels, and the default value is 12 pixels. | 2.6.6                                                    |
  | subtitleOverflow | String   | "ellipsis"         | The processing method when the title text exceeds the display area, the possible values are: "clip"-the content is clipped when it exceeds the display area; "ellipsis"-the ellipsis (...) is displayed at the end when it exceeds the display area. | 2.6.6                                                    |
  | subtitleText     | String   |                    | Subtitle text content. After setting the subtitle, two lines of title will be displayed, and the subtitle will be displayed below the main title (titleText). Note: After setting the subtitle, it will be displayed on the left | 2.6.6                                                    |
  | titleIcon        | String   |                    | Title icon, icon path such as "./img/t.png", only supports local file path, relative path, relative to the host position of the current page, fixed width and height are logical pixel value "34px". The width and height of the pictures must be the same. Note: The title will be displayed on the left after setting the title icon. | 2.6.6                                                    |
  | titleIconRadius  | String   | No rounded corners | The rounded corners of the title icon, the value format is "XXpx", where XX is the pixel value (logical pixels), for example, "10px" means a 10-pixel radius rounded corner. | 2.6.6                                                    |

  #### SplitLineStyles

  | Attributes | Types of | Defaults | description                                                  | Version compatibility |
  | :--------- | :------- | :------- | :----------------------------------------------------------- | :-------------------- |
  | color      | String   | #CCCCCC  | The color of the bottom dividing line, which can take the value: "#RRGGBB" format string, such as "#FF0000" means drawing a red dividing line; "rgba(R,G,B,A)", where R/G/B stands for red respectively Value/green value/blue value, positive integer type, value range is 0-255, A is transparency, floating point type, value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba (255,0,0,0.5)", which means red translucent |                       |
  | height     | String   | "1px"    | Possible values: pixel value (logical pixel), decimal point is supported, such as "1px" means 1 pixel high; percentage, such as "1%", relative to the height of the title bar control. |                       |

  **Tips**

  - The page supports disabling the native navigation bar by configuring navigationStyle to custom or titleNView to false.
  - `titleNView`The `type`value of `transparent`time, the navigation bar to scroll transparent gradient navigation bar, only the default button, and scroll the title bar gradient background and title text will appear; `type`as `float`, the navigation bar title bar for the suspension, this time on top of the top of the screen to page content , Including the status bar, but the navigation bar is floating over the top of the page. Generally, in this scenario, the background color of the navigation bar will be set to the semi-transparent color of rgba.
  - `titleNView`The `type`value of `transparent`time, App-nvue 2.4.4+ support
  - In the `titleNView`configuration `buttons`, the monitor button click event, vue page and nvue of weex compilation mode reference: uni.onNavigationBarButtonTap
  - In the `titleNView`configuration `searchInput`, the related event listener Reference: onNavigationBarSearchInputChanged etc.
  - Can `[<navigation-bar>(/component/navigation-bar)]`configure
  - If the buttons of the native navigation bar under the App use font icons, pay attention to check whether the name of the font library (font-family) uses the default iconfont. This name is a reserved word and cannot be used as the name of an externally imported font library. It needs to be adjusted to self The defined name, otherwise it cannot be displayed.

  ##### Custom button

  | Attributes   | Types of | Defaults                                                     | description                                                  |
  | :----------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | type         | String   | none                                                         | Button style, see                                            |
  | color        | String   | The default color is the same as the title text              | Text color on button                                         |
  | background   | String   | The default value is gray translucent                        | The background color of the button, only takes effect when the title bar type=transparent |
  | colorPressed | String   | The default value is the color attribute value and the transparency is automatically adjusted to 0.3 | Press state button text color                                |
  | float        | String   | right                                                        | The display position of the button on the title bar, the values can be "left", "right" |
  | fontWeight   | String   | normal                                                       | The thickness of the text on the button. Possible values are "normal"-standard font, "bold"-bold font. |
  | fontSize     | String   |                                                              | The size of the text on the button                           |
  | fontSrc      | String   |                                                              | The font file path used for the text on the button. Network addresses are not supported, please use local addresses uniformly. |
  | select       | String   | false                                                        | Whether to display the selection indicator icon (down arrow), often used for city selection |
  | text         | String   |                                                              | The text displayed on the button. When using font icons, unicode characters must start with'\u', such as "\ue123" (note that it cannot be written as "\e123"). |
  | width        | String   | 44px                                                         | The width of the button, possible values: "*px"-logical pixel value, such as "10px" means 10 logical pixel value, rpx is not supported. The content of the button is displayed in the center; "auto"-customize the calculated width, and automatically adjust the button width according to the content |

  ##### Customize the style of the back button

  It takes effect when autoBackButton is set to true. Through this property, you can customize the style of the return button, such as icon size, red dot, corner label, title, etc.

  HBuilderX 2.6.3+ support

  | Attributes   | Types of | Defaults                                              | description                                                  |
  | :----------- | :------- | :---------------------------------------------------- | :----------------------------------------------------------- |
  | background   | String   | none                                                  | The background color is only effective when the title bar type=transparent. The background color of the button when the title bar is transparent. Possible values are #RRGGBB and rgba format color strings. The default value is gray and semi-transparent. |
  | badgeText    | String   |                                                       | Subscript text, display up to 3 characters, if it exceeds, it will be displayed as... |
  | color        | String   | The title text color of the window title bar control. | Icon and title color, possible values: "#RRGGBB" format string, such as "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B stands for red value/green respectively Value/blue value, positive integer type, value range is 0-255, A is transparency, floating point type, value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba(255, 0,0,0.5)", which means red translucent. |
  | colorPressed | String   |                                                       | Press the status button text color, the value can be: "#RRGGBB" format string, such as "#FF0000" means red; "rgba(R,G,B,A)", where R/G/B respectively represent the red value /Green value/blue value, positive integer type, the value range is 0-255, A is transparency, floating point type, the value range is 0-1 (0 is fully transparent, 1 is opaque), such as "rgba( 255,0,0,0.5)", which means red translucent. The default value is the color attribute value and the transparency is automatically adjusted to 0.3. |
  | fontWeight   | String   | "normal"                                              | Returns the thickness of the icon. Possible values: "normal"-standard font; "bold"-bold font. |
  | fontSize     | String   |                                                       | Returns the icon text size, possible values: font height pixel value, number plus "px" format string, such as "22px". When the window title bar is a transparent style (type="transparent"), the default value is "22px"; when the window title bar is a default style (type="default"), the default value is "27px". |
  | redDot       | Boolean  | false                                                 | Whether to display the red dot, set to true to display the red dot, false to not display the red dot. The default value is false. Note: The red dot is not displayed when the corner mark text is set. |
  | title        | String   |                                                       | The title on the back button, displayed after the back icon (font icon), is an empty string by default. |
  | ftitleWeight | String   | "normal"                                              | The thickness of the title on the return button, the possible values are: "normal"-standard font; "bold"-bold font. |
  | fontSize     | String   | "16px"                                                | The font size of the title. Possible values: font height pixel value, number plus "px" format string, such as "22px". |

  ##### Button style

  When using the type value to style the button, the fontSrc and text attributes are ignored.

  | value    | Description                                                  |
  | :------- | :----------------------------------------------------------- |
  | forward  | Forward button                                               |
  | back     | Back button                                                  |
  | share    | Share button                                                 |
  | favorite | Favorite button                                              |
  | home     | Home button                                                  |
  | menu     | Menu button                                                  |
  | close    | Close button                                                 |
  | none     | No style, you need to set the content displayed on the button through the text property, and set the font library used through the fontSrc property. |

  ##### Search box configuration

  searchInput can place a search box on the native navigation bar of titleNView. Its width adapts to surrounding elements.

  | Attributes       | Types of | Defaults               | description                                                  |
  | :--------------- | :------- | :--------------------- | :----------------------------------------------------------- |
  | autoFocus        | Boolean  | false                  | Whether to automatically get focus                           |
  | align            | String   | center                 | The alignment of the text in the non-input state. Possible values: "left"-align to the left; "right"-align to the right; "center"-align to the center. |
  | backgroundColor  | String   | rgba (255,255,255,0.5) | background color                                             |
  | borderRadius     | String   | 0px                    | The fillet radius of the input box, the value format is "XXpx", where XX is the pixel value (logical pixel), rpx is not supported. |
  | placeholder      | String   |                        | Prompt text.                                                 |
  | placeholderColor | String   | #CCCCCC                | Prompt text color                                            |
  | disabled         | Boolean  | false                  | Can input                                                    |

  **searchInput Tips**

  The life cycle of searchInput click input box onNavigationBarSearchInputClicked, text change onNavigationBarSearchInputChanged, click search button onNavigationBarSearchInputConfirmed, etc.

  - Through the parameter e.text in the life cycle, the content of the input box can be obtained. For details, see the template in the hello uni-app-the example in the top navigation bar
  - If you need to modify searchInput dynamically, or get the placehold of searchInput

  **Common titleNView configuration code examples**

  Some configurations are listed below. Regarding the comprehensive navigation bar configuration, here is a complete demonstration project that demonstrates the various effects of the navigation bar. 

  ```javascript
  {
      "pages": [{
              "path": "pages/index/index", //Home page
              "style": {
                  "app-plus": {
                      "titleNView": false //Disable native navigation
                  }
              }
          }, {
              "path": "pages/log/log", //Log pages
              "style": {
                  "app-plus": {
                      "bounce": "none", //Turn off window bounces
                      "titleNView": {
                          "buttons": [ //Native title bar button configuration,
                              {
                                  "text": "Share" // Add a Share button to the native title bar. Clicking events can be monitored by the onNavigationBarButtonTap function of the page
                              }
                          ],
                          "backButton": { //Custom backButton
                              "background": "#00FF00"
                          }
                      }
                  }
              }
          }, {
              "path": "pages/detail/detail", //Details page
              "style": {
                  "navigationBarTitleText": "Details",
                  "app-plus": {
                      "titleNView": {
                          "type": "transparent"//Transparent gradient navigation bar app-nvue 2.4.4+ support
                      }
                  }
              }
          }, {
              "path": "pages/search/search", //Search page
              "style": {
                  "app-plus": {
                      "titleNView": {
                          "type": "transparent",//Transparent gradient navigation bar app-nvue 2.4.4+ support
                          "searchInput": {
                              "backgroundColor": "#fff",
                              "borderRadius": "6px", // Rounded corner of input box
                              "placeholder": "Please enter your search ",
                              "disabled": true //When Disable, click the input box out of focus, can jump to the new page search
                          }
                      }
                  }
              }
          }
          ...
      ]
  }
  ```

  **Tips**

  - It is recommended to use font icons for the text of buttons. If you use Chinese or English, it is recommended to change the font size smaller, otherwise the text length will increase and the distance to the right of the screen will be too close.

  #### Native child form

  `subNVues`It is the native child form of the vue page. Used to solve the hierarchical coverage in the vue page in the App and the flexible customization of the native interface.

  It is not a full-screen page, nor a component, but a native child form. It is an nvue page, rendered using the weex engine, and provides more powerful native typesetting capabilities than cover-view and plus.nativeObj.view, which is convenient for customizing native navigation or covering native maps, videos, etc. 

  `subNVue`It can also be used in the nvue page. But currently it is not supported under pure nvue (render is native).

  | Attributes | Types of | description                                                  |
  | :--------- | :------- | :----------------------------------------------------------- |
  | id         | String   | The identity of subNVue native subform                       |
  | path       | String   | Configure the nvue file path, the nvue file needs to be placed in the page file directory using subNvue |
  | type       | String   | Native child window built-in style, possible values:'popup', pop-up layer; "navigationBar", navigation bar |
  | style      | Object   | The style of subNVue native sub-form, the configuration items refer to subNVuesStyle below |

  **Tips**

  - `subNVues`The `id`globally unique, can not be repeated
  - By uni.getSubNVueById ( 'id') acquired `subNVues`instance
  - `subNVues`The `path`property is only `nvue`a file path

  ##### Native child form style

  | Attributes | Types of | Defaults         | description                                                  |
  | :--------- | :------- | :--------------- | :----------------------------------------------------------- |
  | position   | String   | absolute         | The layout position of the native child form. The layout position determines the positioning method of the native child form in the parent window. Possible values: "static", the native subform is positioned normally on the page, if the page has a scroll bar, it will scroll with the window content; "absolute", the native subform is absolutely positioned on the page, if the page has a scroll bar, it will not follow the window Content scrolling; "dock", the native child form is docked in the page, and the docking position is determined by the value of the dock property. The default value is "absolute". |
  | though     | String   | bottom           | The docking method of the native child form takes effect only when the native child form’s "position" property value is set to "dock", the value can be: "top", the native child form is docked at the top of the page; "bottom", native The subform is docked at the bottom of the page; "right", the native subform is docked on the right side of the page; "left", the native subform is docked on the left side of the page. The default value is "bottom". |
  | mask       | HexColor | rgba (0,0,0,0.5) | The mask layer of the native subform will only take effect when the "type" attribute value of the native subform is set to "popup". Values are: rgba format string, which defines the solid color mask layer style, such as "rgba(0 ,0,0,0.5)", which means black translucent; |
  | width      | String   | 100%             | The width of the native child form supports percentages and pixel values. The default is 100%. When the width attribute value is not set, the left and right attribute values can be set at the same time to change the default width of the window. |
  | height     | String   | 100%             | The height of the native child form, supports percentage, pixel value, the default is 100%. When the height attribute value is not set, the top and bottom attribute values are given priority to calculate the height of the native child form. |
  | top        | String   | 0px              | The vertical downward offset of the native child form. It supports percentage and pixel value. The default value is 0px. When the top attribute value is not set, the bottom and height attribute values are first used to calculate the top position of the native child form. |
  | bottom     | String   |                  | The vertical upward offset of the native child form supports percentages and pixel values. The default value has no value (automatically calculated based on the top and height attribute values). When the top and height values are set at the same time, this attribute value is ignored; when the height value is not set, the height of the native child form can be determined by the top and bottom attribute values. |
  | left       | String   | 0px              | The horizontal leftward offset of the native child form. It supports percentage and pixel value. The default value is 0px. When the left attribute value is not set, the left position of the native child form is calculated by the right and width attribute values first. |
  | right      | String   |                  | The horizontal offset of the native child form to the right, supports percentages, pixel values, and no value by default (automatically calculated based on the left and width attribute values). When the left and width values are set, this property value is ignored; when the width value is not set, the width of the native child form can be determined by the left and bottom property values. |
  | margin     | String   |                  | The margin of the native child form is used to locate the position of the native child form. It supports auto, which means centering. If left, right, top, bottom are set, the corresponding margin value is invalid. |
  | zindex     | Number   |                  | The stacking order value of the windows of the native child form. A window with a higher stacking order will always be in front of a window with a lower stacking order, and a window with the same stacking order will be in front after the show method is called. |
  | background | String   | #FFFFFF          | For the background color of the window, the "transparent" background transparent style is only supported by Android platform 4.0 and above. For example, when subnvue is rounded, it needs to be set to transparent to see the correct effect. |

  **Code example**

  ```javascript
  {
      "pages": [{
          "path": "pages/index/index", //Home page
          "style": {
              "app-plus": {
                  "titleNView": false , //Disable native navigation
                  "subNVues":[{//Lateral spreads menu
                      "id": "drawer", //The ID of the subNVUE can be obtained via uni.getSubNVUEBYID ('drawer')
                      "path": "pages/index/drawer.nvue", // Nvue path
                      "style": { //WebView Style subsets, documents can be temporarily opened out of location, size - dependent configuration
                          "position": "popup", //Other than POPUP, refer to the 5+ WebView Position document for value fields
                          "width": "50%"
                      }
  
                  }, {//Pop-up layer
                      "id": "popup",
                      "path": "pages/index/popup",
                      "style": {
                          "position": "popup",
                          "margin":"auto",
                          "width": "150px",
                          "height": "150px"
                      }
  
                  }, {//The custom head
                      "id": "nav",
                      "path": "pages/index/nav",
                      "style": {
                          "position": "dock",
                          "height": "44px"
                      }
  
                  }]
              }
          }
      }]
  }
  ```

  #### Pull down to refresh

  Under the App platform, you can customize the partial pull-down refresh configuration `page->app-plus->pullToRefresh`.

  | Attributes     | Types of | Defaults                                                     | description                                                  |
  | :------------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | support        | Boolean  | false                                                        | Whether to enable the pull-down refresh function of the window |
  | color          | String   | # 2BD009                                                     | The color value format is "#RRGGBB". Only the "circle" style pull-down refresh supports this attribute. |
  | style          | String   | The Android platform is circle; the iOS platform is default. | Possible values: "default"-classic pull-down refresh style (the page content follows when the pull-down is dragged); "circle"-circle style pull-down refresh control style (only the refresh control follows when the pull-down drags). |
  | height         | String   |                                                              | The pull-down height of the window's pull-down refresh control to enter the refresh state. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. |
  | range          | String   |                                                              | The window can be dragged down and dropped. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. |
  | offset         | String   | 0px                                                          | Pull down to refresh the starting position of the control. It is only valid for the "circle" style pull-down refresh control, and is used to define the starting position when the refresh control pulls down. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. If you use a non-native title and need to pull down to refresh, generally use the circle method and adjust the offset to the height of the custom title |
  | contentdown    | Object   |                                                              | Currently supports one attribute: caption-pull down to refresh the title content displayed on the control when the pull-down can be refreshed. Only valid for "default" style pull-down refresh control. |
  | contentover    | Object   |                                                              | Currently supports one attribute: caption-pull down to refresh the title content displayed on the control when the refreshable state is released. Only valid for "default" style pull-down refresh control. |
  | contentrefresh | Object   |                                                              | Currently supports one attribute: caption-pull down to refresh the title content displayed on the control when the state is being refreshed. Only valid for "default" style pull-down refresh control. |

  **Pull down to refresh use note**

  - `enablePullDownRefresh`And `pullToRefresh->support`setting at the same time, which is a higher priority.
  - If it is desired on the App and open the drop-down refresh applets are then configure the page `enablePullDownRefresh`attribute to true.
  - If only expect to open the drop-down refresh on the App, you do not configure the page `enablePullDownRefresh`attributes, but the configuration `pullToRefresh->support`is true.
  - When the native pull-down refresh is turned on, the full-screen high scroll-view should not be used in the page. When the content is dragged down, the pull-down refresh will be triggered first instead of the scroll-view scroll
  - The starting position of the native pull-down refresh is below the native navigation bar. If you cancel the native navigation bar and use a custom navigation bar, the position of the native pull-down refresh will be at the top of the screen. If you want to pull below the custom navigation bar, you can only use the circle method to pull down to refresh, and set the offset parameter to adjust the starting position of the circle circle to the bottom of the custom navigation bar. There are examples in the extension component of hello uni-app.
  - If you want to achieve more complex pull-down refresh on the app side, such as the Meituan and Jingdong App, you can use nvue'sComponents. Starting from HBuilderX 2.0.3+, you can experience new projects by choosing news templates
  - If you want to implement pull-down refresh on the vue page through web front-end technology, there are examples in the plug-in market, but the performance of the front-end pull-down refresh is not as good as the original one, and the complex long list will be very stuck
  - On iOS, the default mode pull-down refresh and bounce rebound are bound. If bounce:none is set, the default pull-down refresh cannot be used.

  **Code example**

  ```javascript
  {
      "pages": [
          {
              "path": "pages/index/index", //Home page
              "style": {
                  "app-plus": {
                      "pullToRefresh": {
                          "support": true,
                          "color": "#ff3333",
                          "style": "default",
                          "contentdown": {
                              "caption": "Drop down to refresh the custom text"
                          },
                          "contentover": {
                              "caption": "Releases refreshable custom text"
                          },
                          "contentrefresh": {
                              "caption": "正在刷新自定义文本"
                          }
                      }
                  }
              }
          }
      ]
  }
  ```

  #### Navigation Bar

  | Attributes      | Types of | Defaults | description                                                  | Minimum version |
  | :-------------- | :------- | :------- | :----------------------------------------------------------- | :-------------- |
  | backgroundColor | String   | # F7F7F7 | The background color, the color value format is "#RRGGBB".   |                 |
  | buttons         | Array    |          | Custom buttons                                               |                 |
  | titleColor      | String   | #000000  | Title text color                                             |                 |
  | titleText       | String   |          | Title text content                                           |                 |
  | titleSize       | String   |          | Title text font size                                         |                 |
  | type            | String   | default  | Navigation bar style. "default"-default style; "transparent"-transparent gradient. |                 |
  | searchInput     | Object   |          | The style of the search box on the navigation bar            | 1.6.5           |

  ##### Custom button

  | Attributes                             | Types of | Defaults                                                     | description                                                  |
  | :------------------------------------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | type                                   | String   | none                                                         | Button style                                                 |
  | color                                  | String   | The default color is the same as the title text              | Text color on button                                         |
  | background                             | String   | The default value is gray translucent                        | The background color of the button, only takes effect when the title bar type=transparent |
  | badgeText                              | String   |                                                              | The subscript text displayed on the button, up to 3 characters, will be displayed as... |
  | colorPressed (not currently supported) | String   | The default value is the color attribute value and the transparency is automatically adjusted to 0.3 | Press state button text color                                |
  | float                                  | String   | right                                                        | The display position of the button on the title bar, the values can be "left", "right" |
  | fontWeight                             | String   | normal                                                       | The thickness of the text on the button. Possible values are "normal"-standard font, "bold"-bold font. |
  | fontSize                               | String   |                                                              | The size of the text on the button                           |
  | fontSrc                                | String   |                                                              | The font file path used for the text on the button.          |
  | select                                 | String   | false                                                        | Whether to display the selection indicator icon (down arrow) |
  | text                                   | String   |                                                              | The text displayed on the button. When using font icons, unicode characters must start with'\u', such as "\ue123" (note that it cannot be written as "\e123"). |
  | width                                  | String   | 44px                                                         | The width of the button, possible values: "*px"-logical pixel value, such as "10px" means 10 logical pixel value, rpx is not supported, the content of the button is displayed in the center; "auto"-self-calculated width, automatically adjusted according to the content Button width |

  ##### Button style

  When using the type value to style the button, the fontSrc and text attributes are ignored.

  | value    | Description                                                  |
  | :------- | :----------------------------------------------------------- |
  | forward  | Forward button                                               |
  | back     | Back button                                                  |
  | share    | Share button                                                 |
  | favorite | Favorite button                                              |
  | home     | Home button                                                  |
  | menu     | Menu button                                                  |
  | close    | Close button                                                 |
  | none     | No style, you need to set the content displayed on the button through the text property, and set the font library used through the fontSrc property. |

  #### Pull down to refresh

  The h5 platform pulls down to refresh the animation, only the circle type.

  | Attributes | Types of | Defaults | description                                                  |
  | :--------- | :------- | :------- | :----------------------------------------------------------- |
  | color      | String   | # 2BD009 | The color value format is "#RRGGBB"                          |
  | offset     | String   | 0px      | Pull down to refresh the starting position of the control. Support percentage, such as "10%"; pixel value, such as "50px", does not support rpx. |

  ##### Search box style

  | Attributes       | Types of | Defaults               | description                                                  |
  | :--------------- | :------- | :--------------------- | :----------------------------------------------------------- |
  | autoFocus        | Boolean  | false                  | Whether to automatically get focus                           |
  | align            | String   | center                 | The alignment of the text in the non-input state. Possible values: "left"-align to the left; "right"-align to the right; "center"-align to the center. |
  | backgroundColor  | String   | rgba (255,255,255,0.5) | background color                                             |
  | borderRadius     | String   | 0px                    | The fillet radius of the input box, the value format is "XXpx", where XX is the pixel value (logical pixel), rpx is not supported. |
  | placeholder      | String   |                        | Prompt text                                                  |
  | placeholderColor | String   | #CCCCCC                | Prompt text color                                            |
  | disabled         | Boolean  | false                  | Can input                                                    |

  **Precautions:**

  - If the `h5`node is not configured, it will use the default `app-plus`configuration of.
  - Configured `h5`nodes will override the `app-plus`configuration of.

  #### navigationBarShadow

  | Attributes | Types of | description                                                  |
  | :--------- | :------- | :----------------------------------------------------------- |
  | colorType  | String   | The color of the shadow, support: grey, blue, green, orange, red, yellow |

  # easycom

  > `HBuilderX 2.5.5`Starting to support `easycom`component mode.

  Traditional vue components need to be installed, referenced, and registered, and the components can be used after three steps. `easycom`Reduce it to one step. As long as the components are installed in the components directory of the project and conform to the `components/component name/component name.vue`directory structure. You can use it directly on the page without quoting or registering. as follows:

  ```html
  <template>
      <view class="container">
          <uni-list>
              <uni-list-item title="The first line"></uni-list-item>
              <uni-list-item title="The second line"></uni-list-item>
          </uni-list>
      </view>
  </template>
  <script>
      // There is no need to import, nor to register uni-list components with Components. Template can be used directly
      export default {
          data() {
              return {
  
              }
          }
      }
  </script>
  ```

  No matter how many components are installed in the components directory, `easycom`unused components will be automatically removed after packaging, which is particularly friendly to the use of component libraries.

  The component library is installed in batches, used at will, and automatically packaged on demand. Take the official `uni-ui`example, to select a `uni-ui`project template in the HBuilderX new project interface , just hit u in the page to pull out a large number of component code blocks, select directly, and you can use it. Significantly improve development efficiency and lower the threshold for use.

  Download components that conform to the directory structure in the `components/ component name/component name.vue` use them directly.

  `easycom`It is automatically turned on and does not need to be turned on manually. You can perform personalized settings at `pages.json`the `easycom`node when you need it , such as turning off automatic scanning, or customizing the strategy of scanning matching components. The setting parameters are as follows:

  | Attributes | Types of | Defaults | description                                                  |
  | :--------- | :------- | :------- | :----------------------------------------------------------- |
  | autoscan   | Boolean  | true     | Whether to enable automatic scanning, `components/组件名称/组件名称.vue`the components that conform to the directory structure will be automatically scanned after opening |
  | custom     | Object   | -        | Customize component matching rules in a regular manner. If you `autoscan`can’t meet your needs, you can use `custom`custom matching rules |

  **Example of custom easycom configuration**

  If you need to match the vue file in node_modules, you need to use `packageName/path/to/vue-file-$1.vue`the matching rule of the form, where `packageName`is the installed package name and `/path/to/vue-file-$1.vue`the path of the vue file in the package.

  ```
  "easycom": {
    "autoscan": true,
    "custom": {
      "^uni-(.*)": "@/components/uni-$1.vue", // Matches the VUE file in the Components directory
      "^vue-file-(.*)": "packageName/path/to/vue-file-$1.vue" // Matches the VUE file in node_modules
    }
  }
  ```

  **Description**

  - `easycom`Components of the way without having to introduce within the page `import`, do not need to `components`declare within, you can use any page
  - `easycom`The way to introduce components is not global introduction, but local introduction. For example, on the H5 side, the components used will only be loaded when the corresponding page is loaded
  - In the case that the component names are exactly the same, `easycom`the priority of introduction is lower than manual introduction (distinguish between hyphenated form and camel case form)
  - Considering the compilation speed, directly in the `pages.json`modification within `easycom`not trigger recompilation, trigger the need to change the page content.
  - `easycom`Only vue components are processed, not small program-specific components (such as WeChat's wxml format components). Components with the suffix .nvue are not processed. But vue components can also be run at all ends, including small programs and app-nvue. You can refer to uni ui, use the vue suffix, and be compatible with nvue pages.
  - `nvue``.vue`The components that refer to the suffix on the page will use native rendering in the nvue way, and the unsupported css will be ignored. This situation also supports`easycom`

  # tabBar

  If the application is a multi-tab application, you can specify the first-level navigation bar through the tabBar configuration item, and the corresponding page displayed when the tab is switched.

  Providing tabBar configuration in pages.json is not only to facilitate rapid development and navigation, but more importantly, to improve performance on App and applet terminals. On these two platforms, the underlying native engine can directly read the tabBar information configured in pages.json and render the native tab without waiting for the js engine to initialize at startup.

  **Tips**

  - When the position is set to top, the icon will not be displayed
  - The list in the tabBar is an array, and only at least 2 tabs and at most 5 tabs can be configured. The tabs are sorted in the order of the array.
  - The tabbar switch may not render in time when it is loaded for the first time. You can pop up a waiting snowflake in the onLoad life cycle of each tabbar page (hello uni-app uses this method)
  - After the tabbar page is displayed once, it remains in the memory. Switching the tabbar page again will only trigger the onShow of each page, and will not trigger the onLoad again.
  - The tabbar at the top is currently only supported on WeChat Mini Programs. If you need to use the top tab, it is recommended not to use the top setting of the tabbar, but to make the top tab yourself, please refer to hello uni-app->template->top tab.

  **Property description:**

  | Attributes      | Types of | Required | Defaults | description                                                  |
  | :-------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
  | color           | HexColor | Yes      |          | Default color of text on tab                                 |
  | selectedColor   | HexColor | Yes      |          | The color of the text on the tab when selected               |
  | backgroundColor | HexColor | Yes      |          | tab background color                                         |
  | borderStyle     | String   | no       | black    | The color of the upper border of the tabbar, optional black/white |
  | blurEffect      | String   | no       | none     | iOS Gaussian blur effect, optional value dark/extralight/light/none |
  | list            | Array    | Yes      |          | The list of tabs, see the list attribute description for details, at least 2 tabs and at most 5 tabs |

  Among them, list receives an array, each item in the array is an object, and its attribute values are as follows:

  | Attributes       | Types of | Required | Description                                                  |
  | :--------------- | :------- | :------- | :----------------------------------------------------------- |
  | pagePath         | String   | Yes      | Page path, must be defined in pages                          |
  | text             | String   | Yes      | The button text on the tab is not required in App and H5 platform. For example, you can put a + icon with no text in the middle |
  | iconPath         | String   | no       | The image path, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid. Network pictures and font icons are not supported |
  | selectedIconPath | String   | no       | The image path when selected, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid |

  **midButton property description**

  | Attributes      | Types of | Required | Defaults | description                                                  |
  | :-------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
  | width           | String   | no       | 80px     | The width of the middle button. Other tabBar items are divided equally after subtracting this width. The default value is divided equally with other items. |
  | height          | String   | no       | 50px     | The height of the middle button can be greater than the height of the tabBar to achieve the effect of convex middle |
  | text            | String   | no       |          | Middle button text                                           |
  | iconPath        | String   | no       |          | The image path of the middle button                          |
  | iconWidth       | String   | no       | 24px     | Picture width (height proportional zoom)                     |
  | backgroundImage | String   | no       |          | The background image path of the middle button               |

  midButton does not have a pagePath, it needs to listen to the click event and handle the behavior logic after the click. To monitor the click event is to call the API: uni.onTabBarMidButtonTap

  #### **Tabbar FAQ**

  - For the js api of the tabbar, see Interface-Interface-tabbar, which can realize functions such as dynamic display and hiding (such as the pop-up layer cannot cover the tabbar), content modification (such as internationalization), and item addition. There are also examples in hello uni-app.
  - For the item click event of the tabbar, see onTabItemTap of the page life cycle
  - The code jumps to the tabbar page. The api can only use uni.switchTab, not uni.navigateTo, uni.redirectTo; when using the navigator component to jump, open-type="switchTab"must be set
  - The default height of the tabbar is different on different platforms. The default height of the App has been adjusted from 56px to 50px since HBuilderX 2.3.4, which is unified with the H5 end. Developers can also set the height by themselves and adjust it back to 56px.
  - The tabbar is div-simulated on the H5 end, which is part of the front-end screen window. If you want to use the bottom positioning method, you should use css variables `--window-bottom`, such as a button floating 10px above the tabbar, the style is as follows`bottom: calc(var(--window-bottom) + 10px)`
  - An example of a tabbar template with a + sign in the middle . Can cross the end, but the + sign is not raised. If you need a middle bump, configure the midButton of the tabbar.
  - If you need to log in first and then enter the tab page, you don’t need to set the login page as the home page. The home page is still the tabbar page. You can refer to the login template when creating a uni-app project in HBuilderX.
  - The front-end pop-up mask layer cannot block the problem of the tabbar, and the tabbar is dynamically hidden during cross-end processing. You can use plus.nativeObj.view or subNVue for popup and masking on the App side.
  - There is a bug in the WeChat applet simulator version 1.02.1904090. After zooming the percentage of the simulator page, the tabbar will freeze after multiple clicks. The real machine is unobstructed, pay attention when using it. 
  - On PC widescreen, when the page has multiple window structures such as topWindow, leftWindow, or rightWindow, the tabBar is automatically hidden (HBuilderX 2.9.9). 

  **Code example**

  ```json
  "tabBar": {
      "color": "#7A7E83",
      "selectedColor": "#3cc51f",
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "list": [{
          "pagePath": "pages/component/index",
          "iconPath": "static/image/icon_component.png",
          "selectedIconPath": "static/image/icon_component_HL.png",
          "text": "组件"
      }, {
          "pagePath": "pages/API/index",
          "iconPath": "static/image/icon_API.png",
          "selectedIconPath": "static/image/icon_API_HL.png",
          "text": "接口"
      }]
  }
  ```

  #### Custom tabbar

  The native tabBar is a relatively fixed configuration method, which may not meet all scenarios, which involves custom tabBar.

  But note that except for the H5 end, the performance experience of the custom tabBar will be lower than that of the native tabBar. Do not customize apps and applets unless necessary.

  - Custom tabBar component on H5 side: There is no concept of higher performance of native tabBar on H5 side, and the common tabBar in widescreen is at the top instead of the bottom. At this time, you can use custom-tab-bar component to
  - Ordinary custom tabBar: Use view to draw tabBar by yourself. If the page is in multi-page mode, switching tabBar will not keep the bottom tabBar always displayed. Therefore, it is recommended to use the single page method in this case. Single page mode, if it is a complex page, the application performance will decrease significantly, and the page complexity needs to be reduced. If it is the App side, the performance of the nvue single page will be significantly higher than the vue page
  - WeChat applet custom tabbar: WeChat provides a solution to customize tabbar based on webview. This feature has a poor experience and is not recommended. If you want to use it, refer to the WeChat document and create a custom-tab-bar directory in the project root. Note that the code inside is wxml, wxss, not vue. The uni-app compiler will directly copy this directory to the WeChat applet
  - There is one and only one native tabbar and it is on the homepage. If you need a tab for the secondary page, you need to write a view to achieve it. Generally, the more suitable navigation for secondary pages is the segment component

  # condition

  The startup mode configuration takes effect only during the development period and is used to simulate the scenario of a direct page, such as: after a small program is forwarded, the user clicks on the opened page.

  **Property description:**

  | Attributes | Types of | Is it required | description                                                 |
  | :--------- | :------- | :------------- | :---------------------------------------------------------- |
  | current    | Number   | Yes            | The currently active mode, the index value of the list node |
  | list       | Array    | Yes            | Start mode list                                             |

  **List description:**

  | Attributes | Types of | Is it required | description                                                  |
  | :--------- | :------- | :------------- | :----------------------------------------------------------- |
  | name       | String   | Yes            | Start mode name                                              |
  | path       | String   | Yes            | Start page path                                              |
  | query      | String   | no             | Startup parameters can be obtained in the onLoad function of the page |

  **Code example:**

  ```javascript
  "condition": { //Pattern configuration, effective only during development
      "current": 0, //The currently active schema (List's index entries)
      "list": [{
              "name": "swiper", //Model name
              "path": "pages/component/swiper/swiper", //Startup page, required
              "query": "interval=4000&autoplay=false" //The startup parameters are found in the onLoad function of the page.
          },
          {
              "name": "test",
              "path": "pages/component/switch/switch"
          }
      ]
  }
  ```

  # subPackages

  Sub-package loading configuration, this configuration is the sub-package loading mechanism of the applet.

  Due to the size and resource loading limitations of applets, each applet platform provides a subcontracting method to optimize the download and start speed of applets.

  The so-called main package is to place the default startup page/TabBar page, and some common resources/JS scripts are required for all sub-packages; the sub-packages are divided according to the configuration of pages.json.

  When the applet is started, the main package will be downloaded by default and the page in the main package will be launched. When the user enters a page in the sub-package, the corresponding sub-package will be automatically downloaded and displayed after the download is complete. At this time, there will be a waiting prompt on the terminal interface.

  App defaults to the whole package. Starting from uni-app 2.7.12+, it is also compatible with the sub-package configuration of small programs. Its purpose is not to speed up the download, but to speed up the startup when the home page is vue. To enable subcontracting under the app, in addition to configuring subcontracting rules in pages.json, you also need to set in the manifest to enable subcontracting settings on the app side.

  The subPackages node receives an array. Each item in the array is an applied subpackage. Its attribute values are as follows:

  | Attributes | Types of | Is it required | description                                                  |
  | :--------- | :------- | :------------- | :----------------------------------------------------------- |
  | root       | String   | Yes            | The root directory of the subpackage                         |
  | pages      | Array    | Yes            | Which pages the sub-package consists of, the parameters are the same as pages |

  **note:**

  - `subPackages`Path in the pages of a `root`relative path, not the full path.

  - The size of each sub-package of the WeChat Mini Program is 2M, and the total volume cannot exceed 16M.

  - The size of each sub-package of Baidu Mini Program is 2M, and the total volume cannot exceed 8M.

  - The size of each sub-package of Alipay Mini Program is 2M, and the total volume cannot exceed 4M.

  - The size of each sub-package of the QQ applet is 2M, and the total volume cannot exceed 24M.

  - The size of each sub-package of the byte applet is 2M, and the total volume cannot exceed 16M (the byte applet basic library version 1.88.0 and above is supported. Please use the byte applet developer tool greater than or equal to 2.0.6 and Versions less than 3.0.0).

  - Pro-independence under sub- `static`directory for static resources subcontractors.

  - `uni-app`Internal support `WeChat applet`, `QQ small program,Baidu applet`, `Pay treasure small program`, `Byte small program(HBuilderX 3.0.3+)`sub-optimization, static resources or will soon do not take into js file within the main package size subcontracting. 

  - 

    ```
    vendor.js
    ```

    Run-time compression code can be used for too large cases

    - `HBuilderX`Check the created item`Run -- --> runs to the small program emulator -- -- BBB>ns whether to compress the code`
    - `cli`You can `pacakge.json`add parameters to the created project `--minimize`, example:`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`

  **Instructions:**

  Assume support subcontracting `uni-app`directory structure is as follows:

  ```
  ┌─pages               
  │  ├─index
  │  │  └─index.vue    
  │  └─login
  │     └─login.vue    
  ├─pagesA   
  │  ├─static
  │  └─list
  │     └─list.vue 
  ├─pagesB    
  │  ├─static
  │  └─detail
  │     └─detail.vue  
  ├─static             
  ├─main.js       
  ├─App.vue          
  ├─manifest.json  
  └─pages.json            
      
  ```

  You need to fill in pages.json

  ```javascript
  {
      "pages": [{
          "path": "pages/index/index",
          "style": { ...}
      }, {
          "path": "pages/login/login",
          "style": { ...}
      }],
      "subPackages": [{
          "root": "pagesA",
          "pages": [{
              "path": "list/list",
              "style": { ...}
          }]
      }, {
          "root": "pagesB",
          "pages": [{
              "path": "detail/detail",
              "style": { ...}
          }]
      }],
      "preloadRule": {
          "pagesA/list/list": {
              "network": "all",
              "packages": ["__APP__"]
          },
          "pagesB/detail/detail": {
              "network": "all",
              "packages": ["pagesA"]
          }
      }
  }
  ```

  # preloadRule

  Subcontract preload configuration.

  After configuring the preloadRule, when entering a page of the applet, the framework will automatically pre-download the sub-packages that may be needed to improve the startup speed when entering the subsequent sub-package pages

  `preloadRule`Middle, `key`is the page path, `value`is the pre-download configuration to enter this page, each configuration has the following items:

  | Field    | Types of    | Required | Defaults | Description                                                  |
  | -------- | ----------- | -------- | -------- | ------------------------------------------------------------ |
  | packages | StringArray | Yes      | no       | Pre-download subcontracting enter the page `root`or `name`. `__APP__`Represents the main package. |
  | network  | String      | no       | wifi     | Pre-download under designated network, optional values: all (unlimited network), wifi (only pre-download under wifi) |

  App subcontracting also supports preloadRule, but the network rules are invalid.

  ------
