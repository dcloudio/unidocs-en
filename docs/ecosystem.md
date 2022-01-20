
`uni-app` 积极拥抱社区，创建了开放、兼容的生态系统。
`uni-app` actively embraces the community and creates an open and compatible ecosystem.

- [uni-app插件市场](https://ext.dcloud.net.cn)，有数千款插件，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型。在生态建设上远远领先于竞品。
- On the [uni-app plug-in market](https://ext.dcloud.net.cn), there are thousands of plug-ins available, supporting front-end components, js sdk, page templates, project templates, native plug-ins and other types. Far ahead of competing products in ecological construction.

- 兼容 NPM 包管理系统
- ...
uni-app完整支持 NPM ，[详见](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
The uni-app compatible with the NPM package management system fully supports NPM, [See details](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)

- 兼容 weex 插件生态
- ...
uni-app内置了`weex`，`weex`的原生插件或ui库均可使用。注意`weex`的生态不如`uni-app`丰富，一般情况建议使用`uni-app`的插件市场。
The uni-app compatible with the weex plug-in ecology has built-in `weex`, and the native plug-in or ui library of `weex` can be used. Note that the ecology of `weex` is not as rich as `uni-app`. Generally, it is recommended to use the plug-in market of `uni-app`.

- 兼容 普通 web 库
- ...
`uni-app`的H5端支持所有浏览器API。
The H5 side compatible with common web library `uni-app` supports all browser APIs.

`uni-app`的App端，一方面可通过web-view组件加载HTML，引入web相关库；另一方面可通过[renderjs](frame?id=renderjs)实现在渲染层执行js，此时完整echart、threejs等web库均可使用。
On the App side of `uni-app`, on the one hand, HTML can be loaded through the web-view component, and web-related libraries can be introduced; on the other hand, js can be executed in the rendering layer through [renderjs](frame?id=renderjs), and complete web libraries such as echart and threejs can be used at this time.
（但为了全端使用，仍然建议减少对dom库的依赖，在uni-app的插件市场可寻找全端可以的库来替代）
(However, for all-side use, it is still recommended to reduce the dependence on dom library. A fully available library can be found in the uni-app plug-in market as an alternative)

- App端支持各种调用原生能力的方式
- App side supports various methods of calling native capabilities
1. 支持 原生[混合开发](hybrid)
1. Support native [hybrid development](hybrid)
2. 支持 [原生插件扩展](https://ask.dcloud.net.cn/article/35428)
2. Support [Native plug-in extension](https://ask.dcloud.net.cn/article/35428)
3. 支持 [云打包原生插件](https://ask.dcloud.net.cn/article/35412)。
3. Support [Cloud packaged native plug-in](https://ask.dcloud.net.cn/article/35412).

- App端支持双渲染引擎
- App supports dual rendering engines
`uni-app`逻辑层在独立jscore，而渲染层可选webview渲染和weex引擎渲染。
`uni-app` The logic layer is in the independent jscore, and the rendering layer can be rendered by webview and weex engine.
1. 使用webview渲染，此时页面后缀为vue文件。
1. Use webview rendering, and the page is suffixed with a vue file at this time.
2. 使用weex引擎（经过改造）渲染，此时页面后缀为nvue文件。使用webview渲染时，可以指定由系统webview渲染还是由x5引擎渲染。
2. Use weex engine (modified) for rendering, and the page is suffixed with a nvue file at this time. When using webview rendering, you can specify system webview rendering or x5 engine rendering.

