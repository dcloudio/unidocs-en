### onPullDownRefresh

Define the onPullDownRefresh processing function in js (at the same level as onLoad and other life cycle functions) to monitor the pull-down refresh event of the page user.

- Need `pages.json`, pages node of the current page to find, and in `style`open option `enablePullDownRefresh`.
- After processing the data refresh, `uni.stopPullDownRefresh`you can stop the pull-down refresh of the current page.

### uni.startPullDownRefresh(OBJECT)

The pull-down refresh starts, and the pull-down refresh animation is triggered after the call. The effect is consistent with the user's manual pull-down refresh.

**OBJECT parameter description**

| parameter name | Types of | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| success        | Function | no       | Callback for successful interface call                       |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter | Types of | Description           |
| :-------- | :------- | :-------------------- |
| errMsg    | String   | Interface call result |

### uni.stopPullDownRefresh ()

Stop the pull-down refresh of the current page.

**Example**

pages.json

```javascript
{
    "pages": [
        {
            "path": "pages/index/index",
            "style": {
                "navigationBarTitleText": "uni-app",
                "enablePullDownRefresh": true
            }
        }
    ],
    "globalStyle": {
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#0faeff",
        "backgroundColor": "#fbf9fe"
    }
}
```

index.vue

```javascript
// Is only for example, to use the actual delay in the development on demand
export default {
    data() {
        return {
            text: 'uni-app'
        }
    },
    onLoad: function (options) {
        setTimeout(function () {
            console.log('start pulldown');
        }, 1000);
        uni.startPullDownRefresh();
    },
    onPullDownRefresh() {
        console.log('refresh');
        setTimeout(function () {
            uni.stopPullDownRefresh();
        }, 1000);
    }
}
```
