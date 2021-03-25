subNvue is the native sub-form of the vue page. The native interface rendered by weex is used as the sub-form of the vue page to overlay the page. It is not a full-screen page, it provides a more powerful and flexible solution for the hierarchical coverage and native interface customization in the vue page of the App platform. It is not a component, but a native child form.

> subNvue is supported since 1.9.10 and only supports app platform

### uni.getSubNVueById(subNvueId)

By `ID`acquiring `subNVues`examples of original children form. subNVues configuration

| parameter | Types  | Description                 |
| --------- | ------ | --------------------------- |
| subNvueId | String | ID of the native child form |

**Code example**

```javascript
const subNVue = uni.getSubNVueById('popup');
```

#### Return value
Return a subNVue object


### uni.getCurrentSubNVue()

Nvue page code in the form of a subnvue, obtain the current `subNVues`instance of the original Son form.

**Code sample (note that the execution is in the nvue page)**

```javascript
const subNVue = uni.getCurrentSubNVue();
```

#### Return value

Return a subNVue object

#### List of methods of subNVue object

| method   | Description                            |
| -------- | -------------------------------------- |
| show     | Show native child form                 |
| hide     | Hide native child form                 |
| setStyle | Set the style of the native child form |

### subNVue.show (aniShow, duration, showedCB)

Show native child form

| parameter | Types    | Defaults | Description                                                  |
| --------- | -------- | -------- | ------------------------------------------------------------ |
| aniShow   | String   | auto     | Display the animation effect of the native child form. If the window animation type is not specified, the default value "auto" is used, that is, the animation effect of the last displayed window is automatically selected. If it has not been displayed before, the "none" animation effect is used. [See animation types for details](https://uniapp.dcloud.io/api/window/subNVues?id=动画类型) |
| duration  | Number   | 600      | The animation duration of the native child form is displayed in ms. If it is not set, the default window animation time is 600ms. |
| showedCB  | Function |          | The callback function for display completion. The callback function is triggered when the specified native subform display animation is completed, and the callback function is also triggered when the window has no animation effect (such as "none" animation effect). |

**Code example**

```javascript
subNVue.show('slide-in-left',200,()=>{
	console.log('subNVue The primary child window displayed successfully');
})
```


### subNVue.hide (aniShow,duration)
Hide native child form

| parameter | Types of | Defaults | Description                                                  |
| --------- | -------- | -------- | ------------------------------------------------------------ |
| aniShow   | String   | auto     | Hide the animation effect of the native child form. If the window animation type is not specified, the default value "auto" is used, that is, the animation effect of the last displayed window is automatically selected. If it has not been displayed before, the "none" animation effect is used. [See animation types for details](https://uniapp.dcloud.io/api/window/subNVues?id=动画类型) |
| duration  | Number   | 600      | The animation duration of the hidden native sub-form is in ms. If it is not set, the default window animation time is 600ms. |

**Code example**

```javascript
subNVue.hide('slide-out-left',200);
```


### subNVue.setStyle (style)
Set the style of the native child form

| parameter | Types of | Description                        |
| --------- | -------- | ---------------------------------- |
| style     | Object   | The style of the native child form |

**The style of the native child form**

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

**Code example**

```javascript

subNVue.setStyle({
	"position": "absolute", //Except popup, refer to the 5+ WebView Position document for value fields
	"width": "50%",
	"height": "50%",
	"left":"20px",
	"top":"100px"
})
```


### subNVue.postMessage(OBJECT)

Send a message, this communication method is outdated, please use `uni.$emit`for communication

**Code example**

```javascript

const subNVue = uni.getSubNVueById('subNvue');
subNvue.postMessage({
	id:'1'
	name:'subNvues'
})
```

### subNVue.onMessage(CallBack)

Monitor messages, this communication method is outdated, please use `uni.$on`for communication

**Code example**

```javascript

const subNVue = uni.getSubNVueById('subNvue');
subNvue.onMessage(function(data){
	console.log('Listens for messages from the page' + JSON.stringify(data));
})
```

- ### Animation type

  There will be default corresponding rules for displaying animation and closing animation. However, if the close animation type of the native child form through the API, the default type will not be used.

  | Show animation  | Close animation  | Show animation description (the opposite of closing animation) |
  | :-------------- | :--------------- | :----------------------------------------------------------- |
  | slide-in-right  | slide-out-right  | The new form enters from the right                           |
  | slide-in-left   | slide-out-left   | Enter the new form from the left                             |
  | slide-in-top    | slide-out-top    | The new form enters from the top                             |
  | slide-in-bottom | slide-out-bottom | The new form enters from the bottom                          |
  | fade-in         | fade-out         | The new form is gradually displayed from transparent to opaque |
  | zoom-out        | zoom-in          | The new window zooms from small to large                     |
  | zoom-fade-out   | zoom-fade-in     | The new window is gradually enlarged from small to large and gradually displayed from transparent to opaque |
  | pop-in          | pop-out          | The new form enters from the left, and the old form is squeezed out |
  | none            | none             | No animation                                                 |

  For detailed window animation instructions, please refer to:

  - Animation displayed in the window: AnimationTypeShow
  - Animation of window closing: AnimationTypeClose

  **Precautions**

  - Learn more `subNVue`original purposes of the children of the form, please read the subNVues original form twins Development Guide
  - In the interface-interface-native sub-form of hello uni-app, there are complete subNVue examples, including the native navigation bar with gradient, the side-slide menu that can cover the map, the pop-up that can be popped from the top, and the video Scrolling message list
  - Each `subNVue`page must be registered in pages.json in. If you need a global pop-up window, you can also directly pop up the nvue page
  - `subNVue`More powerful than the cover-view and plus.nativeObj.view, also take up more memory, in order to ensure a better performance experience, a vue pages do not load too much `subNVue`child form, recommended control in less than three

