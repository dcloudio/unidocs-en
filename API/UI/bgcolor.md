### uni.setBackgroundColor(OBJECT)

Dynamically set the background color of the window.

**Parameter Description**

| Attributes      | Types of | Defaults | Required | Description                                                  |
| :-------------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| backgroundColor | String   |          | no       | The background color of the window, must be a hexadecimal color value |
| success         | Function |          | no       | Callback function for successful interface call              |
| fail            | Function |          | no       | Callback function for interface call failure                 |
| complete        | Function |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Code example**

```javascript
uni.setBackgroundColor({
    backgroundColor: '#ffffff',
    backgroundColorTop: '#222222',
    backgroundColorBottom: '#333333'
});
```

