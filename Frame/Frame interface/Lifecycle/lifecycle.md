### Application life cycle

The following application life cycle functions are supported:

| Function name        | Description                                                  |
| :------------------- | :----------------------------------------------------------- |
| onLaunch             | `uni-app`Triggered when the initialization is completed (global trigger only once) |
| onShow               | When `uni-app`started, or from the background into the foreground display |
| onHide               | As `uni-app`from the foreground into the background          |
| onError              | When the `uni-app`trigger error                              |
| onUniNViewMessage    | For `nvue`data pages sent by the monitor, refer to [nvue to communicate vue](https://uniapp.dcloud.io/nvue-api?id=communication) |
| onUnhandledRejection | Listener function for unprocessed Promise rejection event (2.8.1+) |
| onPageNotFound       | No monitoring function exists on the page                    |
| onThemeChange        | Monitor system theme changes                                 |

**note**

- The application life cycle can only be `App.vue`monitored in , and monitoring on other pages is invalid.

**Sample code**

```html
<script>
    // You can only listen for the application lifecycle in app.vue
    export default {
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>
```

### Page life cycle

The following page life cycle functions are supported:

| Function name     | Description                                                  |
| :---------------- | :----------------------------------------------------------- |
| onLoad            | Monitor page loading, its parameter is the data passed on the previous page, the parameter type is Object (used for page parameter transfer) |
| onShow            | Monitor page display. It is triggered every time the page appears on the screen, including returning from the lower page point to reveal the current page |
| onReady           | The first rendering of the monitoring page is complete. Note that if the rendering speed is fast, it will be triggered before the page enters the animation. |
| onHide            | Monitor page hiding                                          |
| onUnload          | Monitor page uninstall                                       |
| onPullDownRefresh | Monitor user pull-down actions, generally used for pull-down refresh |
| onReachBottom     | The event when the page scrolls to the bottom (not the scroll-view scroll to the bottom) is often used to pull down the next page of data. See the notes below for details |
| onPageScroll      | Monitor page scrolling, the parameter is Object              |

`onInit`Use attention

- Only Baidu applet base library above 3.260 supports onInit life cycle
- Other versions or platforms can use the onLoad life cycle to be compatible at the same time, pay attention to avoid repeating the same logic
- The logic that does not rely on page passing parameters can be directly replaced by the created life cycle

`onReachBottom`Note that you can define the trigger distance onReachBottomDistance at the bottom of the specific page in pages.json, for example, set it to 50, then the onReachBottom event will be triggered when the page is scrolled to 50px from the bottom.

If scroll-view is used and the page does not scroll, the bottoming event will not be triggered. For the event of scroll-view scrolling to the bottom, please refer to the scroll-view documentation

`onPageScroll` (Monitor scroll, scroll monitor, scroll event) parameter description:

| Attributes | Types of | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| scrollTop  | Number   | The distance the page has been scrolled in the vertical direction (in px) |

**note**

- `onPageScroll`Don't write interactive complex js, such as frequent page modification. Because this life cycle is triggered in the rendering layer, on the non-h5 side, js is executed in the logic layer, and communication between the two layers is lossy. If the data exchange between the two layers is triggered frequently during the scrolling process, it may cause stuck.
- If you want to achieve a transparent gradient of the title bar when scrolling, under App and H5, you can configure the type under titleNView as transparent in pages.json.
- If you need to scroll the ceiling to fix certain elements, it is recommended to use the sticky layout of CSS . There are also other ceiling plug-ins implemented by js in the plug-in market, but the performance is not good, you can search by yourself when you need it.
- In App, WeChat applet, and H5, you can also use wxs to monitor scrolling; in app-nvue, you can use bindingx to monitor scrolling.
- `onBackPress``async`Can’t be used on , it will prevent the default return

```js
onPageScroll : function(e) { //nvue does not support scrolling listening. BindingX can be used instead
    console.log("Rolling distance is：" + e.scrollTop);
},
```

`onTabItemTap` Description of the returned json object:

| Attributes | Types of | Description                                                 |
| ---------- | -------- | ----------------------------------------------------------- |
| index      | String   | The sequence number of the clicked tabItem, starting from 0 |
| pagePath   | String   | The page path of the clicked tabItem                        |
| text       | String   | The button text of the tabItem that was clicked             |

**note**

- onTabItemTap is often used to click the current tabitem, scroll or refresh the current page. If you click on a different tabitem, it will definitely trigger a page switch.
- If you want to click on a tabitem on the App side without jumping to the page, you can't use onTabItemTap, you can use plus.nativeObj.view to put a block to cover the original tabitem and intercept the click event.
- Alipay applet platform onTabItemTap appears to be triggered after clicking non-current tabitem, so it cannot be used to achieve the operation of clicking back to the top

```js
onTabItemTap : function(e) {
    console.log(e);
    // E is returned as a json object： {"index":0,"text":"home page","pagePath":"pages/index/index"}
},
```

`onNavigationBarButtonTap` Parameter Description:

| Attributes | Types of | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| index      | Number   | The subscript of the native title bar button array |

```js
onNavigationBarButtonTap : function (e) {
    console.log(e);
    // E is returned as a json object：{"text":"test","index":0}
}
```

`onBackPress` Description of callback parameter object:

| Attributes | Types of | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| from       | String   | The source of triggering the return behavior:'backbutton'-the upper left corner navigation bar button and the Android return key;'navigateBack'-uni.navigateBack() method. **Alipay applet does not support returning this field** |

```javascript
export default {
    data() {
        return {};
    },
    onBackPress(options) {
        console.log('from:' + options.from)
    }
}
```

**note**

- The life cycle supported by the weex compilation mode of the nvue page is the same as that of weex. 
- The real phone of Alipay applet can monitor non- `navigateBack`triggered return events (it will not be triggered when using applet development tools `onBackPress`), and the default return behavior cannot be prevented

### Component life cycle

`uni-app`The life cycle supported by the component is the same as the life cycle of the vue standard component. There is no page-level onLoad and other life cycles:

| Function name | Description                                                  | Platform difference description | Minimum version |
| :------------ | :----------------------------------------------------------- | :------------------------------ | :-------------- |
| beforeCreate  | Called after the instance is initialized. [See](https://vuejs.org/v2/api/#beforeCreate) |                                 |                 |
| created       | It is called immediately after the instance is created. [See](https://vuejs.org/v2/api/#created) |                                 |                 |
| beforeMount   | Called before the start of the mount. [See](https://vuejs.org/v2/api/#beforeMount) |                                 |                 |
| mounted       | Called after mounting to the instance. [For details, please](https://vuejs.org/v2/api/#mounted) note: It is not certain that all subcomponents are mounted here. If you need to perform operations after the subcomponents are fully mounted, you can use the `$nextTick`[official Vue documentation](https://vuejs.org/v2/api/#Vue-nextTick) |                                 |                 |
| beforeUpdate  | Called when the data is updated, before the virtual DOM is patched. [See](https://vuejs.org/v2/api/#beforeUpdate) | Only supported by H5 platform   |                 |
| updated       | The virtual DOM is re-rendered and patched due to data changes, after which the hook will be called. [See](https://vuejs.org/v2/api/#updated) | Only supported by H5 platform   |                 |
| beforeDestroy | Called before the instance is destroyed. At this step, the instance is still fully available. [See](https://vuejs.org/v2/api/#beforeDestroy) |                                 |                 |
| destroyed     | Called after the Vue instance is destroyed. After the call, everything indicated by the Vue instance will be unbound, all event listeners will be removed, and all child instances will be destroyed. [See](https://vuejs.org/v2/api/#destroyed) |                                 |                 |