### uni.onWindowResize(CALLBACK)
监听窗口尺寸变化事件
listen to window size change events

> 1.6.0 新增
> 1.6.0 New

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√(nvue不支持)|√|
| √ (not supported by nvue)| √|

**CALLBACK 参数说明**
**CALLBACK parameter description**

|属性|类型|说明|
| Attribute| Type| Instruction|
|---|---|---|
|size|Object|变化后的窗口的大小，单位为 px ，{windowWidth,windowHeight}|
| size| Object| The size of the changed window, in px, {windowWidth,windowHeight}|

**代码示例**
**Code example**

```javascript
uni.onWindowResize((res) => {
    console.log('changed window width =' + res.size.windowWidth)
    console.log('changed window height =' + res.size.windowHeight)
})
```

**TIPS**
- 如App端设置软键盘弹出方式为adjustResize ，则在键盘弹出时，会触发此事件。
- If the App side sets the soft keyboard pop-up mode to adjustResize, this event will be triggered when the keyboard pops up.
- 横竖屏切换时，会触发此事件。
- This event will be triggered when the screen is switched between portrait and landscape.

### uni.offWindowResize(CALLBACK)
取消监听窗口尺寸变化事件
Cancel listening to window size change events

> 1.6.0 新增
> 1.6.0 New

平台差异说明
Platform difference description

|App|H5|
|:-:|:-:|
|√|√|

**代码示例**
**Code example**

```javascript
uni.offWindowResize(() => {
    console.log('Cancel to listen to window size change events')
})
```
