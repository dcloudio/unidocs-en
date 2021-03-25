### uni.showToast(OBJECT)

A message box is displayed.

**OBJECT parameter description**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| title     | String   | Yes      | The length of the prompt content is related to the icon value. |
| icon      | String   | no       | Icon, the effective value is detailed in the description below. |
| image     | String   | no       | The local path of the custom icon                            |
| mask      | Boolean  | no       | Whether to display a transparent mask to prevent touch penetration, default: false |
| duration  | Number   | no       | Prompt delay time, in milliseconds, default: 1500            |
| position  | String   | no       | Light plain text display position, only fill the effective value of `title`property to take effect, the effective value see note below. |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**icon value description**

| value   | Description                                                  |
| :------ | :----------------------------------------------------------- |
| success | The success icon is displayed. At this time, the title text displays up to 7 Chinese characters in length. Defaults |
| none    | No icon is displayed. At this time, only single line display is supported. |

**Example**

```javascript
uni.showToast({
    title: 'Title',
    duration: 2000
});
```

**Description of position value (valid only for App)**

| value  | Description    |
| :----- | :------------- |
| top    | Top display    |
| center | Center display |
| bottom | Bottom display |

**Tips**

- can achieve more functions through plus.nativeUI.toast API.

### uni.hideToast ()

Hide the message box.

**Example**

```javascript
uni.hideToast();
```

### uni.showLoading(OBJECT)

The loading prompt box is displayed, and uni.hideLoading must be actively called to close the prompt box.

**OBJECT parameter description**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| title     | String   | Yes      | The prompt text content is displayed below loading           |
| mask      | Boolean  | no       | Whether to display a transparent mask to prevent touch penetration, default: false |
| success   | Function | no       | Callback function for successful interface call              |
| fail      | Function | no       | Callback function for interface call failure                 |
| complete  | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Example**

```javascript
uni.showLoading({
    title: 'Loading'
});
```

### uni.hideLoading ()

Hide the loading prompt box.

**Example**

```javascript
uni.showLoading({
    title: 'Loading'
});

setTimeout(function () {
    uni.hideLoading();
}, 2000);
```

### uni.showModal(OBJECT)

The display modal pop-up window can have only one OK button, or both OK and Cancel buttons. Similar to an API that integrates html: alert, confirm.

**OBJECT parameter description**

| parameter   | Types of | Required | Description                                                  |
| :---------- | :------- | :------- | :----------------------------------------------------------- |
| title       | String   | no       | Prompt title                                                 |
| content     | String   | no       | Prompt content                                               |
| showCancel  | Boolean  | no       | Whether to display the cancel button, the default is true    |
| cancelText  | String   | no       | The text of the cancel button, the default is "Cancel", up to 4 characters |
| confirmText | String   | no       | The text of the OK button, the default is "OK", up to 4 characters |
| success     | Function | no       | Callback function for successful interface call              |
| fail        | Function | no       | Callback function for interface call failure                 |
| complete    | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter | Types of | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| confirm   | Boolean  | When true, it means that the user clicked the OK button      |
| cancel    | Boolean  | When it is true, it means that the user clicked cancel (used for the Android system to distinguish between clicking the mask to close or clicking the cancel button to close) |

**Example**

```javascript
uni.showModal({
    title: 'Reminder',
    content: 'This is a modal window',
    success: function (res) {
        if (res.confirm) {
            console.log('user click for confirm');
        } else if (res.cancel) {
            console.log('user click for cancel');
        }
    }
});
```

### uni.showActionSheet (OBJECT)

Pop up the operation menu from the bottom up

**OBJECT parameter description**

| parameter | Types of      | Required | Description                                                  |
| :-------- | :------------ | :------- | :----------------------------------------------------------- |
| itemList  | Array<String> | Yes      | The text array of the button                                 |
| success   | Function      | no       | Callback function for successful interface call, see the return parameter description for details |
| fail      | Function      | no       | Callback function for interface call failure                 |
| complete  | Function      | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter | Types of | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| tapIndex  | Number   | The buttons clicked by the user, from top to bottom, starting from 0 |

**Example**

```
uni.showActionSheet({
    itemList: ['A', 'B', 'C'],
    success: function (res) {
        console.log('Selected' + (res.tapIndex + 1) + 'buttons');
    },
    fail: function (res) {
        console.log(res.errMsg);
    }
});
```
