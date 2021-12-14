### getApp()

``getApp()`` 函数用于获取当前应用实例，一般用于获取globalData 。
The `getApp()` function is used to obtain the current application instance, generally used to obtain globalData.

**实例**
**Instance**

```javascript
const app = getApp()
console.log(app.globalData) 
```

**注意：**
**Notice:**
- 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，可以通过 `this.$scope` 获取对应的app实例
- Do not call `getApp()` in a function defined in `App()` or before calling `App`, you can get the corresponding app instance through `this.$scope`
- 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
- After obtaining the instance through `getApp()`, do not call the life cycle function privately.
- 当在首页`nvue`中使用`getApp()`不一定可以获取真正的`App`对象。对此提供了`const app = getApp({allowDefault: true})`用来获取原始的`App`对象，可以用来在首页对`globalData`等初始化
- When you use `getApp()` in the home page `nvue`, you may not necessarily get the real `App` object. For this reason, `const app = getApp({allowDefault: true})` is provided to obtain the original `App` object, which can be used to initialize `globalData` etc. on the homepage
