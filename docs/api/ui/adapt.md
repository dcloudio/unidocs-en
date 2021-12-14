## 窗口样式相关的 API
## Window style related APIs

获取对应窗口的样式，返回一个 css 属性值对象;
Get the style of the corresponding window and return a css attribute value object;
设置对应窗口的样式，传入一个 css 属性值对象
Set the style of the corresponding window and pass in a css attribute value object

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
**Code example**

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
**Code example**

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
**Code example**

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
| Parameter| Type| Instruction|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{height: '100px', backgroundColor: 'red'}|
| OBJECT| Object| Css style object. Camel css attribute is required to write, {height: '100px', backgroundColor: 'red'}|

**代码示例**
**Code example**

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
| Parameter| Type| Instruction|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{width: '500px', backgroundColor: 'blue'}|
| OBJECT| Object| Css style object. Camel css attribute is required to write, {width: '500px', backgroundColor: 'blue'}|

**代码示例**
**Code example**

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
| Parameter| Type| Instruction|
|---|---|---|
|OBJECT|Object|css 样式对象，需写驼峰css属性 ，{width: '500px', backgroundColor: 'blue'}|
| OBJECT| Object| Css style object. Camel css attribute is required to write, {width: '500px', backgroundColor: 'blue'}|

**代码示例**
**Code example**

```javascript
uni.setRightWindowStyle({
    width: '500px', 
    backgroundColor: 'blue'
})
```

