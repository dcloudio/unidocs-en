`App.vue`是uni-app的主组件，所有页面都是在`App.vue`下进行切换的，是页面入口文件。但`App.vue`本身不是页面，这里不能编写视图元素。
`App.vue` is the main component of uni-app, and all pages are switched under `App.vue`, which is the page entry file. But `App.vue` itself is not a page, and view elements cannot be written here.

这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData
The functions of this file include: calling application life cycle function, configuring global style, and configuring global storage globalData

应用生命周期仅可在`App.vue`中监听，在页面监听无效。
The application life cycle can only be listened to in `App.vue`, and listening to on the page is invalid.
### 应用生命周期
### Application life cycle

``uni-app`` 支持 onLaunch、onShow、onHide 等应用生命周期函数，详情请参考[应用生命周期](/collocation/frame/lifecycle?id=应用生命周期)
`uni-app` supports application life cycle functions such as onLaunch, onShow and onHide. Please refer to [Application life cycle](/collocation/frame/lifecycle?id=%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F) for details.

```html
<script>  
    export default {  
        onLaunch: function() {  
            console.log('App Launch, app launches')  
        },  
        onShow: function() {  
            console.log('App Show, app is displayed in the foreground')  
        },  
        onHide: function() {  
            console.log('App Hide, app is no longer displayed in the foreground')  
        }  
    }  
</script>  
```

**注意**
**Notice**
- **应用生命周期仅可在`App.vue`中监听，在其它页面监听无效**。
- **Application life cycle can only be listened in `App.vue`, and listening on other pages is invalid**.
- onlaunch里进行页面跳转，如遇白屏报错，请参考[https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)
- Page jump can be performed in onlaunch. In case of a white screen error, please refer to [https://ask.dcloud.net.cn/article/35942](https://ask.dcloud.net.cn/article/35942)
- `App.vue` 不能写模板
- `App.vue` cannot write template

### globalData
这是一种简单的全局变量机制。全端通用。
This is a simple global variable mechanism. Universal at all sides.

**以下是 App.vue 中定义globalData的相关配置：**
**The following is the relevant configuration of defining globalData in App.vue:**

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

在应用onLaunch时，getApp对象还未获取，暂时可以使用this.globalData获取globalData。
While applying onLaunch, the getApp object has not been obtained yet, so you can use this.globalData to obtain globalData temporarily.

如果需要把globalData的数据绑定到页面上，可在页面的onShow页面生命周期里进行变量重赋值。
If you need to bind the data of globalData to the page, you can reassign variables in the life cycle of the onShow page of the page.

nvue的weex编译模式中使用globalData的话，由于weex生命周期不支持onShow，直接使用weex生命周期中的beforeCreate。但建议开发者使用uni-app编译模式，而不是weex编译模式。
If globalData is used in the weex compilation mode of nvue, for the life cycle of weex does not support onShow, beforeCreate in the life cycle of weex can be directly used. However, it is recommended that developers should use the uni-app compilation mode instead of weex compilation mode.

globalData是简单的全局变量，如果使用状态管理，请使用`vuex`（main.js中定义）
globalData is a simple global variable. If you use state management, please use `vuex` (defined in main.js)

### 全局样式
### Global style
在`App.vue`中，可以定义一些全局通用样式，例如需要加一个通用的背景色，首屏页面渲染的动画等都可以写在App.vue中。
In `App.vue`, you can define some global common styles. For example, if you need to add a common background color, the animation rendered on the first page can be written in App.vue.

注意如果工程下同时有vue和nvue文件，全局样式的所有css会应用于所有文件，而nvue支持的css有限，编译器会在控制台报警，提示某些css无法在nvue中支持。此时需要把nvue不支持的css写在单独的条件编译里。如：
Please note that if there are both vue and nvue files under the project, all css of global style will be applied to all files, while the compiler will give an alarm at the console as the css supported by nvue is limited, indicating that some css cannot be supported in nvue. At this time, css not supported by nvue needs to be written in a separate conditional compilation. For example:
```html
<style>
    /* #ifndef APP-NVUE */
    @import './common/uni.css';
    /* #endif*/
</style>
```
