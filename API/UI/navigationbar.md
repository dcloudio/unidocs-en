### uni.setNavigationBarTitle(OBJECT)

Dynamically set the title of the current page.

**OBJECT parameter description**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| title     | String   | Yes      | page title                                                   |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Example**

```javascript
uni.setNavigationBarTitle({
    title: 'New title'
});
```

**note**

- If you need to enter the page title set, it may be `onReady`performed within, to avoid modifications within the framework are covered. If you must `onShow`delay the need to perform within a short time

### uni.setNavigationBarColor(OBJECT)

Set the color of the page navigation bar. **If you need to enter the page to set the color, please delay the execution to prevent being overwritten by the color logic set in the frame**

**OBJECT parameter description**

| parameter       | Types of | Required | Description                                                  |
| :-------------- | :------- | :------- | :----------------------------------------------------------- |
| frontColor      | String   | Yes      | Foreground color value, including button, title, status bar color, only supports #ffffff and #000000 |
| backgroundColor | String   | Yes      | Background color value, valid value is hexadecimal color     |
| success         | Function | no       | Callback function for successful interface call              |
| fail            | Function | no       | Callback function for interface call failure                 |
| complete        | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**note**

- If you need to enter the page title set, it may be `onReady`performed within, to avoid modifications within the framework are covered. If you must `onShow`delay the need to perform within a short time

**animation structure**

| Attributes | Types of | Defaults | Required | Description                    |
| :--------- | :------- | :------- | :------- | :----------------------------- |
| duration   | number   | 0        | no       | Animation change time, unit ms |
| timingFunc | String   | 'linear' | no       | Animation changes              |

**animation.timingFunc valid value**

| value     | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| linear    | The speed of the animation is the same from beginning to end. |
| easeIn    | Animation starts at low speed                                |
| easeOut   | The animation ends at low speed.                             |
| easeInOut | The animation starts and ends at low speed.                  |

**success return parameter description**

| parameter name | Types of | Description |
| :------------- | :------- | :---------- |
| errMsg         | String   | Call result |

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
