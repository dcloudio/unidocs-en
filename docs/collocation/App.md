`App.vue`是uni-app的主组件，所有页面都是在`App.vue`下进行切换的，是页面入口文件。但`App.vue`本身不是页面，这里不能编写视图元素。
`App.vue`Is uni-app main assembly, all the pages are in `App.vue`the switch is a page entry file. But it `App.vue`is not a page itself, and view elements cannot be written here.

这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData
The role of this file includes: calling application life cycle functions, configuring global styles, configuring global storage globalData

应用生命周期仅可在`App.vue`中监听，在页面监听无效。
The application life cycle can only be `App.vue`monitored in , and monitoring on the page is invalid.
### 应用生命周期
### Application life cycle

``uni-app`` 支持 onLaunch、onShow、onHide 等应用生命周期函数，详情请参考[应用生命周期](/collocation/frame/lifecycle?id=应用生命周期)
`uni-app`Support application life cycle functions such as onLaunch, onShow, onHide, etc. 

```html
<script>  
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

**注意**
**note**
- **应用生命周期仅可在`App.vue`中监听，在其它页面监听无效**。
- **The application life cycle can only be `App.vue`monitored in , and monitoring on other pages is invalid** .
- onlaunch里进行页面跳转，如遇白屏报错，请参考[https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)
- `App.vue` 不能写模板
- `App.vue` Cannot write templates

### globalData
这是一种简单的全局变量机制。全端通用。
This is a simple global variable mechanism. and it is universal.

**以下是 App.vue 中定义globalData的相关配置：**
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

js中操作globalData的方式如下：
The way to manipulate globalData in js is as follows: 
`getApp().globalData.text = 'test'`

在应用onLaunch时，getApp对象还未获取，暂时可以使用this.$scope.globalData获取globalData。
When applying onLaunch, the getApp object has not been obtained yet, temporarily you can use this.$scope.globalData to obtain globalData.

如果需要把globalData的数据绑定到页面上，可在页面的onShow页面生命周期里进行变量重赋值。
If you need to bind globalData data to the page, you can perform variable reassignment during the onShow page life cycle of the page.

nvue的weex编译模式中使用globalData的话，由于weex生命周期不支持onShow，但熟悉5+的话，可利用监听webview的addEventListener show事件实现onShow效果，或者直接使用weex生命周期中的beforeCreate。但建议开发者使用uni-app编译模式，而不是weex编译模式。
If you use globalData in the weex compilation mode of nvue, because the weex life cycle does not support onShow, but if you are familiar with 5+, you can use the addEventListener show event of the webview to monitor the onShow effect, or use the beforeCreate in the weex life cycle directly. However, it is recommended that developers use uni-app compilation mode instead of weex compilation mode.

globalData是简单的全局变量，如果使用状态管理，请使用`vuex`（main.js中定义）
globalData is a simple global variable, if you use state management, please use `vuex`(defined in main.js)

### 全局样式
### Global style
在`App.vue`中，可以定义一些全局通用样式，例如需要加一个通用的背景色，首屏页面渲染的动画等都可以写在App.vue中。
In `App.vue`, you can define some global general styles, for example, you need to add a general background color, and the animation of the first screen page rendering can be written in App.vue.

注意如果工程下同时有vue和nvue文件，全局样式的所有css会应用于所有文件，而nvue支持的css有限，编译器会在控制台报警，提示某些css无法在nvue中支持。此时需要把nvue不支持的css写在单独的条件编译里。如：
Note that if there are both vue and nvue files under the project, all css of the global style will be applied to all files, and the css supported by nvue is limited, the compiler will alarm in the console, prompting that some css cannot be supported in nvue. At this time, you need to write the css that nvue does not support in a separate conditional compilation. Such as:
```html
<style>
    /* #ifndef APP-PLUS-NVUE */
    @import './common/uni.css';
    /* #endif*/
</style>
```
