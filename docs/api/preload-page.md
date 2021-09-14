#### uni.preloadPage(OBJECT)

预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。
Preloading pages is a performance optimization technique. Pages that are preloaded are faster when opened.

**平台差异说明**
**Platform difference description**

|App-nvue|H5|
|:-:|:-:|
|√(2.7.12+)|√(2.7.12+)|


|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|url|string|是|预加载页面url|
|url|string|Yes|preload page url|
|complete|Function|否|预加载成功完成回调|
|complete|Function|No|Callback when preloading is completed successfully|
|fail|Function|否|预加载失败回调|
|fail|Function|No|Preload failure callback|


#### H5 平台
#### H5 platform

预加载 /pages/test/test 对应的js文件，不执行页面预渲染逻辑
Pre-load the js file corresponding to /pages/test/test without executing page pre-rendering logic
```
uni.preloadPage({url: "/pages/test/test"});
```

#### App-nvue 平台
#### App-nvue platform

预加载nvue页面 /pages/test/test
Preload the nvue page /pages/test/test
```
uni.preloadPage({url: "/pages/test/test"});
```

注意事项
Precautions
1. App平台仅支持预加载 nvue 页面，执行页面预渲染，预载时触发生命周期 `onLoad`，`onReady`，不触发 `onShow`
1. The App platform only supports pre-loading of nvue pages, performing page pre-rendering, and triggering the life cycle `onLoad`, `onReady` when preloading, and not triggering `onShow`
2. 打开新页面时，url 完全相同（包含参数）时，优先使用预加载页面，触发生命周期 onShow
2. When opening a new page, when the URLs are exactly the same (including parameters), the pre-loaded page is used first to trigger the life cycle onShow
3. tabbar页面，仅支持预加载尚未显示过的页面，否者返回 fail，提示 already exists
3. The tabbar page, only supports preloading the page that has not been displayed before, otherwise it will return to fail, prompting already exists
4. 同一时间，相同 url 仅 preloadPage 一次
4. At the same time, the same url will only preloadPage once
5. 当同一个预载页面已被打开(在路由栈)，再次打开相同url时，不再使用该预加载页面，而是打开新的非预载页面
5. When the same preloaded page has been opened (in the routing stack) and the same URL is opened again, the preloaded page is no longer used, but a new non-preloaded page is opened
6. `uni.reLanuch`, `uni.switchTab`, `uni.navigateBack`(含Android返回键) 切换页面时，预加载页面不会被销毁，仅触发生命周期 `onHide`
6. `uni.reLanuch`, `uni.switchTab`, `uni.navigateBack` (including the Android return key) When switching pages, the preloaded page will not be destroyed, only the life cycle `onHide`
7. 在预载页面使用 `uni.redirectTo` 时，预加载页面会被销毁，触发生命周期 `onUnload`
7. When using `uni.redirectTo` on the preload page, the preload page will be destroyed, triggering the life cycle `onUnload`

示例
Example
```
uni.preloadPage({url: "/pages/test/test"}); // 预加载 /pages/test/test 页面（仅触发onLoad，onReady)
uni.preloadPage({url: "/pages/test/test"}); // preload the /pages/test/test page (only trigger onLoad, onReady)
uni.navigateTo({url: "/pages/test/test"}); // url匹配，跳转预加载页面（仅触发onShow)
uni.navigateTo({url: "/pages/test/test"}); // URL matching, jump to the preloaded page (only trigger onShow)
uni.navigateTo({url: "/pages/test/test?a=b"}); // url不匹配，正常打开新页面
uni.navigateTo({url: "/pages/test/test?a=b"}); // url does not match, open a new page normally
```

HBuilderX 2.7.12+的hello uni-app，在navigator示例和uni ui的日历示例中增加了页面预载示例。
The hello uni-app of HBuilderX 2.7.12+ adds page preload examples in the navigator example and uni ui calendar example.

#### uni.unPreloadPage(OBJECT)

取消预载页面。
Cancel the preload page.

1. 仅App-nvue支持
1. Only App-nvue supports
2. 当预载页面未被打开时，使用 `unPreloadPage`时会销毁该页面，触发生命周期 `onUnload`
2. When the preload page is not opened, the page will be destroyed when using `unPreloadPage`, triggering the life cycle `onUnload`
3. 当预载页面已被打开时，使用 `unPreloadPage`时不销毁该页面，但该预加载页面不再继续存在，会随着路由变化而销毁
3. When the preload page has been opened, the page is not destroyed when using `unPreloadPage`, but the preload page no longer exists and will be destroyed as the route changes
