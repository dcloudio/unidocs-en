## 窗口样式相关的 API
## Window style related API

获取对应窗口的样式，返回一个 css 属性值对象;
Get the style of the corresponding window and return a css property value object;
设置对应窗口的样式，传入一个 css 属性值对象
Set the style of the corresponding window, and pass in a css property value object

### uni.getTopWindowStyle()

获取 topWindow 的样式
Get the style of topWindow

> 3.1.0 新增
> 3.1.0 New

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|x|√|

**代码示例**
**Code Example**

```javascript
uni.getTopWindowStyle()
```

### uni.getLeftWindowStyle()

获取 leftWindow 的样式
Get the style of leftWindow

> 3.1.0 新增
> 3.1.0 New

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|x|√|

**代码示例**
**Code Example**

```javascript
uni.getLeftWindowStyle()
```

### uni.getRightWindowStyle()

获取 rightWindow 的样式
Get the style of rightWindow

> 3.1.0 新增
> 3.1.0 New

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|x|√|

**代码示例**
**Code Example**

```javascript
uni.getRightWindowStyle()
```

### uni.setTopWindowStyle(OBJECT)

设置 topWindow 的样式
Set the style of topWindow

> 3.0.5 新增
> 3.0.5 New

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{height: '100px', backgroundColor: 'red'}|
|OBJECT|Object|css style object, need to write hump css property, {height: '100px', backgroundColor:'red'}|

**代码示例**
**Code Example**

```javascript
uni.setTopWindowStyle({
    height: '100px', 
    backgroundColor: 'red'
})
```

### uni.setLeftWindowStyle(OBJECT)

设置 leftWindow 的样式
Set the style of leftWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**
|App|H5|
|:-:|:-:|
|x|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{width: '500px', backgroundColor: 'blue'}|
|OBJECT|Object|css style object, need to write camel case css property, {width: '500px', backgroundColor:'blue'}|

**代码示例**
**Code Example**

```javascript
uni.setLeftWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```

### uni.setRightWindowStyle(OBJECT)

设置 rightWindow 的样式
Set the style of rightWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**
|App|H5|
|:-:|:-:|
|x|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{width: '500px', backgroundColor: 'blue'}|
|OBJECT|Object|css style object, need to write camel case css property, {width: '500px', backgroundColor:'blue'}|

**代码示例**
**Code Example**

```javascript
uni.setRightWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```

<!-- 
## 显示或隐藏窗口的 API
## API to show or hide windows

显示或隐藏对应的窗口
Show or hide the corresponding window

### uni.showTopWindow()

显示 topWindow
Show topWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|
|App|H5|WeChat Mini Program|Alipay Mini Program|Baidu Mini Program|Byte Beat Mini Program|QQ Mini Program|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code Example**

```javascript
uni.showTopWindow()
```

### uni.showLeftWindow()

显示 leftWindow
Show leftWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|
|App|H5|WeChat Mini Program|Alipay Mini Program|Baidu Mini Program|Byte Beat Mini Program|QQ Mini Program|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code Example**

```javascript
uni.showLeftWindow()
```

### uni.showRightWindow()

显示 rightWindow
Show rightWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|
|App|H5|WeChat Mini Program|Alipay Mini Program|Baidu Mini Program|Byte Beat Mini Program|QQ Mini Program|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code Example**

```javascript
uni.showRightWindow()
```

### uni.hideTopWindow()

隐藏 topWindow
Hide topWindow

> 3.0.5 新增
> 3.0.5 New
> 
**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|
|App|H5|WeChat Mini Program|Alipay Mini Program|Baidu Mini Program|Byte Beat Mini Program|QQ Mini Program|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code Example**

```javascript
uni.hideTopWindow()
```

### uni.hideLeftWindow()

隐藏 leftWindow
Hide leftWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|
|App|H5|WeChat Mini Program|Alipay Mini Program|Baidu Mini Program|Byte Beat Mini Program|QQ Mini Program|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code Example**

```javascript
uni.hideLeftWindow()
```

### uni.hideRightWindow()

隐藏 rightWindow
Hide rightWindow

> 3.0.5 新增
> 3.0.5 New

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|
|App|H5|WeChat Mini Program|Alipay Mini Program|Baidu Mini Program|Byte Beat Mini Program|QQ Mini Program|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|√|x|x|x|x|x|

**代码示例**
**Code Example**

```javascript
uni.hideRightWindow()
``` 
-->
