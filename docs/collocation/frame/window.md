### getApp()

```getApp()``` 函数用于获取当前应用实例，一般用于获取globalData 。
`getApp()` The function is used to obtain the current application instance, generally used to obtain globalData.

**示例：**
**Example:**

```javascript
const app = getApp()
console.log(app.globalData) 
```

**注意：**
**note:**
- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，可以通过 `this.$scope` 获取对应的app实例
- Do not defined in the `App()`in the function, or calling `App`before the call `getApp()`, by `this.$scope`app corresponding instance Get
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
- By `getApp()`then obtain an instance, the life cycle Do not attempt to call the function.
- v3模式加速了首页`nvue`的启动速度，当在首页`nvue`中使用`getApp()`不一定可以获取真正的`App`对象。对此v3版本提供了`const app = getApp({allowDefault: true})`用来获取原始的`App`对象，可以用来在首页对`globalData`等初始化
- The v3 mode accelerates the `nvue`startup speed of the homepage , and when used on the homepage `nvue`, it `getApp()`may not be possible to obtain real `App`objects. For this v3 version, it is `const app = getApp({allowDefault: true})`used to obtain the original `App`object, which can be used to `globalData`initialize on the home page .

### getCurrentPages()

```getCurrentPages()``` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
`getCurrentPages()` The function is used to obtain the instance of the current page stack, which is given in the order of the stack in the form of an array, the first element is the home page, and the last element is the current page.

**注意：** ``getCurrentPages()``仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。
**Note: It** `getCurrentPages()` is only used to display the page stack. Please do not modify the page stack to avoid causing page status errors.

每个页面实例的方法属性列表：
List of method attributes for each page instance:

|方法|描述|平台说明|
|method|description|Platform description|
|---|---|---|
|page.$getAppWebview()|获取当前页面的webview对象实例|App|
|page.$getAppWebview()|Get the webview object instance of the current page|App|
|page.route|获取当前页面的路由|&nbsp;|
|page.route|Get the route of the current page|&nbsp;|

Tips：
* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* `navigateTo`, `redirectTo`Only non-tabBar pages can be opened.
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* `switchTab`You can only open `tabBar`the page.
* ``reLaunch`` 可以打开任意页面。
* `reLaunch` Any page can be opened.
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* Bottom of the page `tabBar`by the page decision, that is, as long as it is defined as `tabBar`a page, at the bottom there `tabBar`.
* 不能在 ```App.vue``` 里面进行页面跳转。
* You can not `App.vue`be the page jump inside.

### $getAppWebview()

```uni-app``` 在 ```getCurrentPages()```获得的页面里内置了一个方法 ```$getAppWebview()``` 可以得到当前webview的对象实例，从而实现对 webview 更强大的控制。在 html5Plus 中，plus.webview具有强大的控制能力，可参考：[WebviewObject](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject)。
`uni-app`In `getCurrentPages()`page obtained in a built-in method `$getAppWebview()`can be an object instance of the current webview, webview order to achieve greater control. In html5Plus, plus.webview has powerful control capabilities.

但`uni-app`框架有自己的窗口管理机制，请不要自己创建和销毁webview，如有需求覆盖子窗体上去，请使用[原生子窗体subNvue](/api/window/subNVues)。
But the `uni-app`framework has its own window management mechanism, please do not create and destroy the webview yourself.

**注意：此方法仅 App 支持**
**Note: This method is only supported by App**

**示例：**
**Example:**

获取当前页面 webview 的对象实例
Get the object instance of the current page webview
```javascript
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    // #ifdef APP-PLUS
    //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
    //This object is equivalent to the html5plus plus. Webview. CurrentWebview (). In uni - app directly using the vue page plus. Webview. CurrentWebview () is invalid, the v3 compilation mode using this. $mp. Page $getAppWebview ()
    const currentWebview = this.$scope.$getAppWebview();
    //动态重设bounce效果
    //Dynamically reset the bounce effect
    currentWebview.setBounce({position:{top:'100px'},changeoffset:{top:'0px'}});
    // #endif
  }
}
```

获取指定页面 webview 的对象实例
Get the object instance of the webview of the specified page

`getCurrentPages()`可以得到所有页面对象，然后根据数组，可以取指定的页面webview对象
`getCurrentPages()`You can get all the page objects, and then according to the array, you can get the specified page webview object
```javascript
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
//获得当前webview的id
//Get the ID of the current WebView
console.log(currentWebview.id);
//查询当前webview是否可见
//Query whether the current WebView is visible
console.log(currentWebview.isVisible());
);
// #endif
```

uni-app自带的web-view组件，是页面中新插入的一个子webview。获取该对象的方法见：[https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)
The web-view component that comes with uni-app is a new sub-webview inserted in the page. For the method of obtaining this object.[https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)