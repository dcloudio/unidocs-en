`App.vue`Is uni-app main assembly, all the pages are in `App.vue`the switch is a page entry file. But it `App.vue`is not a page itself, and view elements cannot be written here.

The role of this file includes: calling application life cycle functions, configuring global styles, configuring global storage globalData

The application life cycle can only be `App.vue`monitored in , and monitoring on the page is invalid.

### Application life cycle

`uni-app`Support application life cycle functions such as onLaunch, onShow, onHide, etc. 

```html
<script>  
    export default {  
        onLaunch: function() {  
            console.log('App Launch，The app launched')  
        },  
        onShow: function() {  
            console.log('App Show，The app is displayed in the foreground')  
        },  
        onHide: function() {  
            console.log('App Hide，Apps no longer appear in the foreground')  
        }  
    }  
</script>
```

**note**

- **The application life cycle can only be `App.vue`monitored in , and monitoring on other pages is invalid** .
- `App.vue` Cannot write templates

### globalData

The applet has globalData, which is a simple global variable mechanism. This mechanism can also be used in uni-app, and it is universal.

**The following is the relevant configuration of globalData defined in App.vue:**

```html
<script>  
    export default {  
        globalData: {  
            text: 'text'  
        }
    }  
</script>
```

The way to manipulate globalData in js is as follows: `getApp().globalData.text = 'test'`

When applying onLaunch, the getApp object has not been obtained yet, temporarily you can use this.$scope.globalData to obtain globalData.

If you need to bind globalData data to the page, you can perform variable reassignment during the onShow page life cycle of the page.

If you use globalData in the weex compilation mode of nvue, because the weex life cycle does not support onShow, but if you are familiar with 5+, you can use the addEventListener show event of the webview to monitor the onShow effect, or use the beforeCreate in the weex life cycle directly. However, it is recommended that developers use uni-app compilation mode instead of weex compilation mode.

globalData is a simple global variable, if you use state management, please use `vuex`(defined in main.js)

### Global style

In `App.vue`, you can define some global general styles, for example, you need to add a general background color, and the animation of the first screen page rendering can be written in App.vue.

Note that if there are both vue and nvue files under the project, all css of the global style will be applied to all files, and the css supported by nvue is limited, the compiler will alarm in the console, prompting that some css cannot be supported in nvue. At this time, you need to write the css that nvue does not support in a separate conditional compilation. Such as:

```html
<style>
    /* #ifndef APP-PLUS-NVUE */
    @import './common/uni.css';
    /* #endif*/
</style>
```

```html
<style>
    /* #ifndef APP-PLUS-NVUE */
    @import './common/uni.css';
    /* #endif*/
</style>
```

