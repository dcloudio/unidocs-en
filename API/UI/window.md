### uni.onWindowResize(CALLBACK)

Listen to the window size change event

**CALLBACK parameter description**

| Attributes | Types of | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| size       | Object   | The size of the changed window, in px, {windowWidth,windowHeight} |

**Code example**

```javascript
uni.onWindowResize((res) => {
    console.log('Changed the width of window=' + res.size.windowWidth)
    console.log('Changed the height of window=' + res.size.windowHeight)
})
```

**TIPS**

- If the App side sets the soft keyboard pop-up mode to adjustResize, this event will be triggered when the keyboard pops up.
- This event will be triggered when the screen is switched between landscape and portrait.

### uni.offWindowResize(CALLBACK)

Cancel listening window size change event

**Code example**

```javascript
uni.offWindowResize(() => {
    console.log('Cancel listening window size change event')
})
```