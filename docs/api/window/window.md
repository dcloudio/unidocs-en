
### getCurrentPages()

``getCurrentPages()`` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
The `getCurrentPages()` function is used to obtain an instance of the stack of the current page, which is given in the order of stack in array, with the first element as the home page and the last element as the current page.

**注意：** ``getCurrentPages()``仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。
**Notice:** `getCurrentPages()` is only used to display the page stack. Please do not modify the page stack to avoid page status errors.

每个页面实例的方法属性列表：
List of method attributes for each page instance:

|方法|描述|平台说明|
| Method| Describe| Platform description|
|---|---|---|
|page.route|获取当前页面的路由|&nbsp;|
| page.route| Get the route of the current page|  |

Tips：
* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* `navigateTo` and `redirectTo` can only open non-tabBar pages.
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* `switchTab` can only open the `tabBar` page.
* ``reLaunch`` 可以打开任意页面。
* `reLaunch` can open any page.
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* The `tabBar` at the bottom of the page is determined by the page, i.e., as long as the page is defined as `tabBar`, there will be `tabBar` at the bottom.
* 不能在 ```App.vue``` 里面进行页面跳转。
* You cannot jump to other pages in `App.vue`.
