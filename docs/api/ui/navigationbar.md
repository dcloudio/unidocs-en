### uni.setNavigationBarTitle(OBJECT)

动态设置当前页面的标题。
Dynamically set the title of the current page.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|title|String|是|页面标题|
| title     | String   | Yes      | page title                                                   |
|success|Function|否|接口调用成功的回调函数|
| success   | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数|
| fail      | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**示例**
**Example**

```javascript
uni.setNavigationBarTitle({
	title: '新的标题'
});
```

**注意**
**note**

- 如果需要在页面进入时设置标题，可以在`onReady`内执行，以避免被框架内的修改所覆盖。如果必须在`onShow`内执行需要延迟一小段时间
- If you need to enter the page title set, it may be `onReady`performed within, to avoid modifications within the framework are covered. If you must `onShow`delay the need to perform within a short time


### uni.setNavigationBarColor(OBJECT)

设置页面导航条颜色。**如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖**
Set the color of the page navigation bar. **If you need to enter the page to set the color, please delay the execution to prevent being overwritten by the color logic set in the frame**

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| parameter       | Types of | Required | Description                                                  |
|:-|:-|:-|:-|:-|
|frontColor|String|是|前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000|App、H5|
| frontColor      | String   | Yes      | Foreground color value, including button, title, status bar color, only supports #ffffff and #000000 |
|backgroundColor|String|是|背景颜色值，有效值为十六进制颜色||
| backgroundColor | String   | Yes      | Background color value, valid value is hexadecimal color     |
|success|Function|否|接口调用成功的回调函数||
| success         | Function | no       | Callback function for successful interface call              |
|fail|Function|否|接口调用失败的回调函数||
| fail            | Function | no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete        | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**注意**
**Notice**
- Android 上的 backgroundColor 参数有限制，黑色大于 rgb(30,30,30), 白色小于 rgb(235,235,235)
- The backgroundColor parameter on Android is limited, black is greater than rgb(30,30,30), white is less than rgb(235,235,235)
- 如果需要在页面进入时设置标题，可以在`onReady`内执行，以避免被框架内的修改所覆盖。如果必须在`onShow`内执行需要延迟一小段时间
- If you need to set the title when the page enters, you can execute it in `onReady` to avoid being overwritten by changes in the frame. If it must be executed in `onShow`, it needs to be delayed for a short period of time

**success返回参数说明**
**success return parameter description**

|参数名|类型|说明|
| parameter name | Types of | Description |
|:-|:-|:-|
|errMsg|String|调用结果|
| errMsg         | String   | Call result |

**示例**
**Example**

```javascript
uni.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
        duration: 400,
        timingFunc: 'easeIn'
    }
})
```

### uni.showNavigationBarLoading(OBJECT)

在当前页面显示导航条加载动画。
Display the navigation bar loading animation on the current page.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|x|√|

App平台调用此API时会在屏幕中间悬浮显示loading
When the App platform calls this API, loading will be displayed floating in the middle of the screen

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

**示例**
**Example**

```javascript
uni.showNavigationBarLoading()
```

### uni.hideNavigationBarLoading(OBJECT)

在当前页面隐藏导航条加载动画。
Hide the navigation bar loading animation on the current page.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|x|√|

App平台调用此API时会关闭屏幕中间悬浮显示的loading
When the App platform calls this API, it will turn off the loading displayed in the middle of the screen.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数|
|success|Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|Callback function at the end of the interface call (the call will be executed if the call succeeds or fails)|

**示例**
**Example**


```javascript
uni.hideNavigationBarLoading()
```
