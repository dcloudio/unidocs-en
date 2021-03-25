### uni.setTabBarItem(OBJECT)

Dynamically set the content of a tabBar

**OBJECT parameter description:**

| Attributes       | Types of | Defaults | Required | Description                                                  |
| :--------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| index            | number   |          | Yes      | Which item of the tabBar, counting from the left             |
| text             | String   |          | no       | button text on tab                                           |
| iconPath         | String   |          | no       | The image path, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid and network images are not supported |
| selectedIconPath | String   |          | no       | The image path when selected, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid |
| pagePath         | String   |          | no       | The absolute path of the page must be defined in pages first, the replaced pagePath will not become a normal page (still need to use uni.swichTab to jump) |
| success          | Funtion  |          | no       | Callback function for successful interface call              |
| fail             | Funtion  |          | no       | Callback function for interface call failure                 |
| complete         | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Sample code**

```js
uni.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})
```

### uni.setTabBarStyle(OBJECT)

Dynamically set the overall style of tabBar

**OBJECT parameter description:**

| Attributes       | Types of | Defaults | Required | Description                                                  |
| :--------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| color            | String   |          | no       | The default color of the text on the tab, HexColor           |
| selectedColor    | String   |          | no       | The color when the text on the tab is selected, HexColor     |
| backgroundColor  | String   |          | no       | Tab background color, HexColor                               |
| backgroundImage  | String   |          | no       | Picture background. Supports setting local pictures or creating linear gradients. For example, priority is higher than backgroundColor. |
| backgroundRepeat | String   |          | no       | The background image is tiled. repeat: the background image is tiled in the vertical and horizontal directions; repeat-x: the background image is tiled in the horizontal direction and stretched in the vertical direction; repeat-y: the background image is tiled in the vertical direction and stretched in the horizontal direction; no-repeat : The background image is stretched both vertically and horizontally. No-repeat is used by default. Only App 2.7.1+ supports |
| borderStyle      | String   |          | no       | The color of the upper border of the tabBar, only black/white is supported |
| success          | Funtion  |          | no       | Callback function for successful interface call              |
| fail             | Funtion  |          | no       | Callback function for interface call failure                 |
| complete         | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**BackgroundImage creates linear gradient instructions**

```
backgroundImage: linear-gradient(to top, #a80077, #66ff00);
```

Currently, radial-gradient is not supported.

Currently, only two color gradients are supported, and the gradient directions are as follows:

- to right: gradient from left to right
- to left: gradient from right to left
- to bottom: gradient from top to bottom
- to top: gradient from bottom to top
- to bottom right: from the upper left corner to the lower right corner
- to top left: from the lower right corner to the upper left corner

**Sample code**

```js
uni.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

### uni.hideTabBar (OBJECT)

Hide tabBar

**OBJECT parameter description:**

| Attributes | Types of | Defaults | Required | Description                                                  |
| :--------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| success    | Funtion  |          | no       | Callback function for successful interface call              |
| fail       | Funtion  |          | no       | Callback function for interface call failure                 |
| complete   | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.showTabBar(OBJECT)

Show tabBar

**OBJECT parameter description:**

| Attributes | Types of | Defaults | Required | Description                                                  |
| :--------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| success    | Funtion  |          | no       | Callback function for successful interface call              |
| fail       | Funtion  |          | no       | Callback function for interface call failure                 |
| complete   | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.setTabBarBadge(OBJECT)

Add text to the upper right corner of an item in the tabBar.

**OBJECT parameter description:**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
| text      | String   | Yes      | The displayed text, no more than 3 characters                |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Sample code**

```javascript
uni.setTabBarBadge({
  index: 0,
  text: '1'
})
```

### uni.removeTabBarBadge(OBJECT)

Remove the text in the upper right corner of a tabBar item.

**OBJECT parameter description:**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.showTabBarRedDot (OBJECT)

Display the red dot in the upper right corner of an item in the tabBar.

**OBJECT parameter description:**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.hideTabBarRedDot (OBJECT)

Hide the red dot in the upper right corner of a tabBar item.

**OBJECT parameter description:**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.onTabBarMidButtonTap(CALLBACK)

Listen to the click event of the middle button

**Tip**

- The tabbar is native, and the level is higher than the front-end elements
- Most of the above APIs for tabbar operations can only be used after the tabbar is rendered. Avoid using it before the tabbar is initialized.