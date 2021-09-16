### uni.onWindowResize(CALLBACK)
监听窗口尺寸变化事件
Listen to the window size change event

> 1.6.0 新增
> 1.6.0 new

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√(nvue不支持)|√|
|√(nvue not supported)|√|

**CALLBACK 参数说明**
**CALLBACK parameter description**

|属性|类型|说明|
|Attribute|Type|Description|
|---|---|---|
|size|Object|变化后的窗口的大小，单位为 px ，{windowWidth,windowHeight}|
|size|Object|The size of the changed window, in px, {windowWidth,windowHeight}|

**代码示例**
**Code Example**

```javascript
uni.onWindowResize((res) => {
    console.log('变化后的窗口宽度=' + res.size.windowWidth)
	console.log('Changed window width ='+ res.size.windowWidth)
    console.log('变化后的窗口高度=' + res.size.windowHeight)
	console.log('Changed window height=' + res.size.windowHeight)
})
```

**TIPS**
- 如App端设置软键盘弹出方式为adjustResize ，则在键盘弹出时，会触发此事件。
- If the App side sets the soft keyboard pop-up mode to adjustResize, this event will be triggered when the keyboard pops up.
- 横竖屏切换时，会触发此事件。
- This event will be triggered when the screen is switched between landscape and portrait.

### uni.offWindowResize(CALLBACK)
取消监听窗口尺寸变化事件
Cancel listening window size change event

> 1.6.0 新增
> 1.6.0 new

平台差异说明
Platform difference description

|App|H5|
|:-:|:-:|
|√|√|

**代码示例**
**Code Example**

```javascript
uni.offWindowResize(() => {
    console.log('取消监听窗口尺寸变化事件')
	console.log('Cancel listening window size change event')
})
```
