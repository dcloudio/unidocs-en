### uni.setTabBarItem(OBJECT)

动态设置 tabBar 某一项的内容
Dynamically set the content of a tabBar

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|属性|类型|默认值|必填|说明|平台差异|
| Attributes       | Types of | Defaults | Required | Description  |
|:-|:-|:-|:-|:-|:-|
|index|number||是|tabBar 的哪一项，从左边算起||
| index            | number   |          | Yes      | Which item of the tabBar, counting from the left             ||
|text|String||否|tab 上的按钮文字||
| text             | String   |          | no       | button text on tab ||
|iconPath|String||否|图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片||
| iconPath         | String   |          | no       | The image path, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid and network images are not supported ||
|selectedIconPath|String||否|选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效||
| selectedIconPath | String   |          | no       | The image path when selected, the icon size is limited to 40kb, and the recommended size is 81px * 81px. When the postion is top, this parameter is invalid ||
|pagePath|String||否|页面绝对路径，必须在 [pages](/collocation/pages?id=pages) 中先定义，被替换掉的 pagePath 不会变成普通页面（仍然需要使用 uni.swichTab 跳转）|App（2.8.4+）、H5（2.8.4+）|
| pagePath         | String   |          | no       | The absolute path of the page must be defined in pages first, the replaced pagePath will not become a normal page (still need to use uni.swichTab to jump) ||
|success|Funtion||否|接口调用成功的回调函数||
| success          | Funtion  |          | no       | Callback function for successful interface call              ||
|fail|Funtion||否|接口调用失败的回调函数||
| fail             | Funtion  |          | no       | Callback function for interface call failure                 ||
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）||
| complete         | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) ||

**示例代码**
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

动态设置 tabBar 的整体样式
Dynamically set the overall style of tabBar

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|属性|类型|默认值|必填|说明|
| Attributes       | Types of | Defaults | Required | Description|
|:-|:-|:-|:-|:-|
|color|String||否|tab 上的文字默认颜色，HexColor|
| color            | String   |          | no       | The default color of the text on the tab, HexColor           |
|selectedColor|String||否|tab 上的文字选中时的颜色，HexColor|
| selectedColor    | String   |          | no       | The color when the text on the tab is selected, HexColor     |
|backgroundColor|String||否|tab 的背景色，HexColor|
| backgroundColor  | String   |          | no       | Tab background color, HexColor                               |
|backgroundImage|String||否|图片背景。支持设置本地图片或创建线性渐变如，优先级高于 backgroundColor，仅 App 2.7.1+ 支持|
| backgroundImage  | String   |          | no       | Picture background. Supports setting local pictures or creating linear gradients. For example, priority is higher than backgroundColor. |
|backgroundRepeat|String||否|背景图平铺方式。repeat：背景图片在垂直方向和水平方向平铺；repeat-x：背景图片在水平方向平铺，垂直方向拉伸；repeat-y：背景图片在垂直方向平铺，水平方向拉伸；no-repeat：背景图片在垂直方向和水平方向都拉伸。 默认使用 no-repeat。仅 App 2.7.1+ 支持|
| backgroundRepeat | String   |          | no       | The background image is tiled. repeat: the background image is tiled in the vertical and horizontal directions; repeat-x: the background image is tiled in the horizontal direction and stretched in the vertical direction; repeat-y: the background image is tiled in the vertical direction and stretched in the horizontal direction; no-repeat : The background image is stretched both vertically and horizontally. No-repeat is used by default. Only App 2.7.1+ supports |
|borderStyle|String||否|tabBar上边框的颜色， 仅支持 black/white|
| borderStyle      | String   |          | no       | The color of the upper border of the tabBar, only black/white is supported |
|success|Funtion||否|接口调用成功的回调函数|
| success          | Funtion  |          | no       | Callback function for successful interface call              |
|fail|Funtion||否|接口调用失败的回调函数|
| fail             | Funtion  |          | no       | Callback function for interface call failure                 |
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete         | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**backgroundImage创建线性渐变说明**
**BackgroundImage creates linear gradient instructions**

`backgroundImage: linear-gradient(to top, #a80077, #66ff00);`

目前暂不支持 radial-gradient（径向渐变）。
Currently, radial-gradient is not supported.

目前只支持两种颜色的渐变，渐变方向如下：
Currently, only two color gradients are supported, and the gradient directions are as follows:

- to right：从左向右渐变
- to right: gradient from left to right
- to left：从右向左渐变
- to left: gradient from right to left
- to bottom：从上到下渐变
- to bottom: gradient from top to bottom
- to top：从下到上渐变
- to top: gradient from bottom to top
- to bottom right：从左上角到右下角
- to bottom right: from the upper left corner to the lower right corner
- to top left：从右下角到左上角
- to top left: from the lower right corner to the upper left corner

**示例代码**
**Sample code**

```js
uni.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

### uni.hideTabBar(OBJECT)

隐藏 tabBar
Hide tabBar

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**

|属性|类型|默认值|必填|说明|
| Attributes | Types of | Defaults | Required | Description    |
|:-|:-|:-|:-|:-|
|success|Funtion||否|接口调用成功的回调函数|
| success    | Funtion  |          | no       | Callback function for successful interface call              |
|fail|Funtion||否|接口调用失败的回调函数|
| fail       | Funtion  |          | no       | Callback function for interface call failure                 |
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete   | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.showTabBar(OBJECT)

显示 tabBar
Show tabBar

**平台差异说明**
**OBJECT parameter description:**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**

|属性|类型|默认值|必填|说明|
| Attributes | Types of | Defaults | Required | Description  |
|:-|:-|:-|:-|:-|
|success|Funtion||否|接口调用成功的回调函数|
| success    | Funtion  |          | no       | Callback function for successful interface call              |
|fail|Funtion||否|接口调用失败的回调函数|
| fail       | Funtion  |          | no       | Callback function for interface call failure                 |
|complete|Funtion||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete   | Funtion  |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.setTabBarBadge(OBJECT)
为 tabBar 某一项的右上角添加文本。
Add text to the upper right corner of an item in the tabBar.

**平台差异说明**
**OBJECT parameter description:**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**

|参数|类型|必填|说明|
| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
|text|String|是|显示的文本，不超过 3 个半角字符|
| text      | String   | Yes      | The displayed text, no more than 3 characters                |
|success|Function|否|接口调用成功的回调函数|
| success   | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
| fail      | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**示例代码**
**Sample code**

```javascript
uni.setTabBarBadge({
  index: 0,
  text: '1'
})
```

### uni.removeTabBarBadge(OBJECT)
移除 tabBar 某一项右上角的文本。
Remove the text in the upper right corner of a tabBar item.

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
|success|Function|否|接口调用成功的回调函数|
| success   | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
| fail      | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.showTabBarRedDot(OBJECT)
显示 tabBar 某一项的右上角的红点。
Display the red dot in the upper right corner of an item in the tabBar.

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
| parameter | Types of | Required | Description       |
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
|success|Function|否|接口调用成功的回调函数|
| success   | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
| fail      | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.hideTabBarRedDot(OBJECT)
隐藏 tabBar 某一项的右上角的红点。
Hide the red dot in the upper right corner of a tabBar item.

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|index|Number|是|tabBar的哪一项，从左边算起|
| index     | Number   | Yes      | Which item of the tabBar, counting from the left             |
|success|Function|否|接口调用成功的回调函数|
| success   | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
| fail      | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### uni.onTabBarMidButtonTap(CALLBACK)
监听中间按钮的点击事件
Listen to the click event of the middle button

**平台差异说明**

|App|H5|
|:-:|:-:|
|√（HBuilderX 2.3.4+）|x|


**Tip**
- tabbar是原生的，层级高于前端元素
- [uni-app插件市场](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95)有封装的前端tabbar，但性能不如原生tabbar
- 如果想要一个中间带+号的tabbar，在HBuilderX中新建uni-app项目、选择 底部选项卡 模板
- 以上大部分操作 tabbar 的 API 需要在 tabbar 渲染后才能使用，避免在 tabbar 未初始化前使用
