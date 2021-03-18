### getCurrentPages()

`getCurrentPages()` The function is used to obtain the instance of the current page stack, which is given in the order of the stack in the form of an array, the first element is the home page, and the last element is the current page.

**Note: It** `getCurrentPages()` is only used to display the page stack. Please do not modify the page stack to avoid causing page status errors.

List of method attributes for each page instance:

| method                | description                                         | Platform description |
| --------------------- | --------------------------------------------------- | -------------------- |
| page.$getAppWebview() | Get the webview object instance of the current page | App                  |
| page.route            | Get the route of the current page                   |                      |

Tips：

- `navigateTo`, `redirectTo`Only non-tabBar pages can be opened.
- `switchTab`You can only open `tabBar`the page.
- `reLaunch` Any page can be opened.
- Bottom of the page `tabBar`by the page decision, that is, as long as it is defined as `tabBar`a page, at the bottom there `tabBar`.
- You can not `App.vue`be the page jump inside.

### $getAppWebview()

`uni-app`In `getCurrentPages()`page obtained in a built-in method `$getAppWebview()`can be an object instance of the current webview, webview order to achieve greater control. In html5Plus, plus.webview has powerful control capabilities.

But the `uni-app`framework has its own window management mechanism, please do not create and destroy the webview yourself. If you need to overwrite the subform, please use the native subform subNvue.

**Note: This method is only supported by App**

**Example:**

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
    const currentWebview = this.$scope.$getAppWebview(); // this object is equivalent to the html5plus plus. Webview. CurrentWebview (). In uni - app directly using the vue page plus. Webview. CurrentWebview () is invalid, the v3 compilation mode using this. $mp. Page $getAppWebview ()
    currentWebview.setBounce({position:{top:'100px'},changeoffset:{top:'0px'}}); // dynamically reset the bounce effect
    // #endif
  }
}
```

Get the object instance of the webview of the specified page

`getCurrentPages()`You can get all the page objects, and then according to the array, you can get the specified page webview object

```javascript
var pages = getCurrentPages();
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
console.log(currentWebview.id);//Get the ID of the current WebView
console.log(currentWebview.isVisible());//Query whether the current WebView is visible
);
// #endif
```


