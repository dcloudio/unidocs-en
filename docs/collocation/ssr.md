注意：本指南仅支持 vue3 版本的 uni-app 项目（h5平台）， vue3项目的升级迁移指南参考：[uni-app 项目 H5 端支持 vue3 介绍](https://ask.dcloud.net.cn/article/37834)
Note: This guide only supports the uni-app project of the vue3 version (h5 platform). For the upgrade and migration guide of the vue3 project, please refer to: [uni-app project H5 end supports vue3 introduction](https://ask.dcloud.net.cn/ article/37834)

#### 什么是服务器端渲染 (SSR)？
#### What is server-side rendering (SSR)?
uni-app 默认情况下，是在客户端中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。
By default, uni-app outputs Vue components on the client side, generates DOM and manipulates DOM. However, you can also render the same component as a server-side HTML string, send them directly to the browser, and finally "activate" these static tags as a fully interactive application on the client.

服务器渲染的 uni-app 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。
Uni-app applications rendered by the server can also be considered "isomorphic" or "universal" because most of the code of the application can be run on both the server and the client.
#### 为什么使用服务器端渲染 (SSR)？
#### Why use server-side rendering (SSR)?
与传统 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势主要在于：
Compared with traditional SPA (Single-Page Application), the main advantages of server-side rendering (SSR) are:

- 更好的 SEO，搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
- Better SEO, search engine crawlers can directly view the fully rendered page.

- 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。无需等待所有的 JavaScript 都完成下载并执行，才显示服务器渲染的标记，所以你的用户将会更快速地看到完整渲染的页面。通常可以产生更好的用户体验，并且对于那些「内容到达时间(time-to-content) 与转化率直接相关」的应用程序而言，服务器端渲染 (SSR) 至关重要。
- Faster content arrival time (time-to-content), especially for slow network conditions or slow devices. There is no need to wait for all the JavaScript to be downloaded and executed before displaying the server-rendered markup, so your users will see the fully rendered page more quickly. It usually produces a better user experience, and server-side rendering (SSR) is critical for applications where "time-to-content is directly related to conversion rate".

使用服务器端渲染 (SSR) 时还需要有一些权衡之处：
There are some trade-offs when using server-side rendering (SSR):

- 开发条件所限。浏览器特定的代码，只能在某些生命周期钩子函数 (lifecycle hook) 中使用；一些外部扩展库 (external library) 可能需要特殊处理，才能在服务器渲染应用程序中运行。
- Limited by development conditions. Browser-specific code can only be used in certain lifecycle hooks; some external libraries may require special processing before they can be run in server rendering applications.

- 涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。
- More requirements involving build setup and deployment. Unlike a fully static single page application (SPA) that can be deployed on any static file server, the server rendering application needs to be in the Node.js server runtime environment.

- 更多的服务器端负载。在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 (high traffic) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。
- More server-side load. Rendering a complete application in Node.js obviously consumes more CPU resources (CPU-intensive-CPU intensive) than a server that only provides static files, so if you expect to use it in a high traffic environment, please Prepare the corresponding server load and use caching strategies wisely.

幸运的是，以上问题，[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) 均为您提供了解决方案，**注意：目前仅腾讯云支持，阿里云后续也会支持**
Fortunately, for the above problems, [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) provides a solution for you. **Note: Currently only Tencent Cloud supports it, and Alibaba Cloud will follow up support**
- [unicloud-db](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db) 组件是 uniCloud 提供的一个数据库查询组件，内置支持SSR，开发者无需任何额外开发。
- [unicloud-db](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db) The component is a database query component provided by uniCloud, with built-in support for SSR, and developers do not need any additional development.
- uniCloud 云函数与静态托管，提供了弹性扩容、大并发承载、防DDoS攻击的世界最顶级的IT基础设施，通过 HBuilderX 可将 uni-app 项目一键部署为支持 SSR 的 h5 网站
- UniCloud cloud functions and static hosting provide the world's top IT infrastructure with flexible capacity expansion, large concurrent hosting, and anti-DDoS attacks. Through HBuilderX, uni-app projects can be deployed as an SSR-supported h5 website with one click

#### 编写通用代码
#### Writing general code
在进一步介绍之前，让我们花点时间来讨论编写"通用"代码时的约束条件 - 即运行在服务器和客户端的代码。由于用例和平台 API 的差异，当运行在不同环境中时，我们的代码将不会完全相同。所以这里我们将会阐述你需要理解的关键事项。
Before going any further, let's take a moment to discuss the constraints when writing "universal" code-that is, code that runs on the server and the client. Due to differences in use cases and platform APIs, our code will not be exactly the same when running in different environments. So here we will explain the key things you need to understand.
##### 服务器上的数据响应
##### Data response on the server
在纯客户端应用程序 (client-only app) 中，每个用户会在他们各自的浏览器中使用新的应用程序实例。对于服务器端渲染，我们也希望如此：每个请求应该都是全新的、独立的应用程序实例，以便不会有交叉请求造成的状态污染 (cross-request state pollution)。
In a client-only app, each user will use a new instance of the application in their respective browser. For server-side rendering, we also want the same: each request should be a brand new, independent application instance, so that there is no cross-request state pollution caused by cross-request state pollution.

因为实际的渲染过程需要确定性，所以我们也将在服务器上“预取”数据 ("pre-fetching" data) - 这意味着在我们开始渲染时，我们的应用程序就已经解析完成其状态。也就是说，将数据进行响应式的过程在服务器上是多余的，所以默认情况下禁用。禁用响应式数据，还可以避免将「数据」转换为「响应式对象」的性能开销。
Because the actual rendering process requires determinism, we will also "pre-fetch" data on the server-this means that when we start rendering, our application has already parsed its state. In other words, the process of responding to data is redundant on the server, so it is disabled by default. Disabling responsive data can also avoid the performance overhead of converting "data" into "responsive objects".
##### 组件生命周期钩子函数
##### Component life cycle hook function
由于没有动态更新，所有的生命周期钩子函数中，只有 beforeCreate 和 created 会在服务器端渲染 (SSR) 过程中被调用。这就是说任何其他生命周期钩子函数中的代码（例如 beforeMount 或 mounted），只会在客户端执行。
Since there is no dynamic update, among all lifecycle hook functions, only beforeCreate and created will be called during the server-side rendering (SSR) process. This means that the code in any other lifecycle hook functions (such as beforeMount or mounted) will only be executed on the client side.

此外还需要注意的是，你应该避免在 beforeCreate 和 created 生命周期时产生全局副作用的代码，例如在其中使用 setInterval 设置 timer。在纯客户端 (client-side only) 的代码中，我们可以设置一个 timer，然后在 beforeUnmount 或 unmounted 生命周期时将其销毁。但是，由于在 SSR 期间并不会调用销毁钩子函数，所以 timer 将永远保留下来。为了避免这种情况，请将副作用代码移动到 beforeMount 或 mounted 生命周期中。
In addition, it should be noted that you should avoid code that produces global side effects during the beforeCreate and created life cycles, such as using setInterval to set timers. In the client-side only code, we can set a timer and then destroy it during the beforeUnmount or unmounted life cycle. However, since the destruction hook function will not be called during the SSR, the timer will remain forever. To avoid this situation, please move the side-effect code to the beforeMount or mounted life cycle.
##### 访问特定平台(Platform-Specific) API
##### Access to Platform-Specific API
通用代码不可接受特定平台的 API，因此如果你的代码中，直接使用了像 window 或 document，这种仅浏览器可用的全局变量，则会在 Node.js 中执行时抛出错误，反之也是如此。
Generic code cannot accept platform-specific APIs, so if your code directly uses global variables like window or document, which are only available to the browser, an error will be thrown when executed in Node.js, and vice versa. .

对于仅浏览器可用的 API，通常方式是，在「纯客户端 (client-only)」的生命周期钩子函数中惰性访问 (lazily access) 它们。
For browser-only APIs, the usual way is to access them lazily in a "client-only" lifecycle hook function.

请注意，考虑到如果第三方 library 不是以上面的通用用法编写，则将其集成到服务器渲染的应用程序中，可能会很棘手。你可能要通过模拟 (mock) 一些全局变量来使其正常运行，但这只是 hack 的做法，并且可能会干扰到其他 library 的环境检测代码。
Please note that if the third-party library is not written in the general usage above, it may be tricky to integrate it into the server-rendered application. You may have to mock some global variables to make it run normally, but this is just a hack and may interfere with the environment detection code of other libraries.

#### 数据预取和状态
#### Data prefetching and status
在服务器端渲染(SSR)期间，我们本质上是在渲染我们应用程序的"快照"，所以如果应用程序依赖于一些异步数据，那么在开始渲染过程之前，需要先预取和解析好这些数据。
During server-side rendering (SSR), we are essentially rendering a "snapshot" of our application, so if the application relies on some asynchronous data, it needs to be prefetched and parsed before starting the rendering process.

另一个需要关注的问题是在客户端，在挂载 (mount) 到客户端应用程序之前，需要获取到与服务器端应用程序完全相同的数据 - 否则，客户端应用程序会因为使用与服务器端应用程序不同的状态，然后导致混合失败。
Another issue that needs attention is that on the client side, before mounting to the client application, it needs to obtain exactly the same data as the server-side application-otherwise, the client application will use the same data as the server-side application. The different state of the program then causes the mixing to fail.

为了解决这个问题，获取的数据需要位于视图组件之外，即放置在专门的数据预取存储容器(data store)或"状态容器(state container)"中。首先，在服务器端，我们可以在渲染之前预取数据，并将数据填充到 store 中。此外，我们将在 HTML 中序列化(serialize)和内联预置(inline)状态。这样，在挂载(mount)到客户端应用程序之前，可以直接从 store 获取到内联预置(inline)状态。
In order to solve this problem, the acquired data needs to be located outside the view component, that is, placed in a special data prefetch storage container (data store) or "state container". First, on the server side, we can prefetch data before rendering and fill the data into the store. In addition, we will serialize and inline the state in HTML. In this way, before mounting to the client application, the inline state can be obtained directly from the store.

- 对于简单应用，我们可以直接使用`@dcloudio/uni-app`提供的`ssrRef`（等同于 vue3 的 [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref)）,`shallowSsrRef`（等同于 vue3 的 [shallowRef](https://v3.cn.vuejs.org/api/refs-api.html#shallowref)），来确保服务端数据与客户端数据的一致性
- For simple applications, we can directly use the `ssrRef` provided by `@dcloudio/uni-app` (equivalent to [ref](https://v3.cn.vuejs.org/api/refs-api.html #ref)), `shallowSsrRef` (equivalent to vue3's [shallowRef](https://v3.cn.vuejs.org/api/refs-api.html#shallowref)) to ensure server-side data and client-side data Consistency
  * 在非组件生命周期中使用`ssrRef`和`shallowSsrRef`时，数据将被存储在全局
  * When using `ssrRef` and `shallowSsrRef` in the non-component life cycle, the data will be stored globally
  * `ssrRef`和`shallowSsrRef`均支持第二个参数，作为数据的key
  * Both `ssrRef` and `shallowSsrRef` support the second parameter as the key of the data

示例：
Example:
```js
import { ssrRef } from '@dcloudio/uni-app'
const categories = ssrRef([], 'categories'); // 在非组件生命周期中使用时，为全局数据，可以跨组件跨页面使用(When used in a non-component life cycle, it is global data and can be used across components and pages)
export default {
	setup (){
		const items = ssrRef([]); // 在生命周期中使用时，为组件级别作用域，不指定第二个参数key的情况下，编译器会自动补充(默认，以文件+函数位置做base64生成key)(When used in the life cycle, it is a component-level scope. If the second parameter key is not specified, the compiler will automatically add it (by default, the file + function location is used as base64 to generate the key))
		return { items, categories }
	}
}
```
- 对于复杂应用，我们可以使用官方状态管理库[Vuex](https://github.com/vuejs/vuex/)
- For complex applications, we can use the official state management library [Vuex](https://github.com/vuejs/vuex/)

示例：
Example:

1. 我们先创建一个 store/index.js 文件，里面会模拟一些根据 id 获取 item 的逻辑：
1. Let's first create a store/index.js file, which will simulate some logic to get item based on id:
  ```js
  import { createStore } from 'vuex'

  // 模拟接口获取数据
  // Analog interface to get data
  function fetchItem(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          title: 'title' + id,
        })
      }, 300)
    })
  }

  export default () => {
    return createStore({
      state() {
        return {
          items: {},
        }
      },
      actions: {
        fetchItem({ commit }, id) {
          return fetchItem(id).then((item) => {
            commit('setItem', { id, item })
          })
        },
      },
      mutations: {
        setItem(state, { id, item }) {
          state.items[id] = item
        },
      },
    })
  }

  ```
2. 然后修改 main.js
2. Then modify main.js

```js
import { createSSRApp } from 'vue'
import App from './App.vue'
import createStore from './store'
export function createApp() {
  const app = createSSRApp(App)
  
  const store = createStore() // 创建 store(Create store)
  app.use(store)
  
  return {
    app,
    store,// 必须返回 store(Must return to the store)
  }
}

```
3. 在页面或组件中使用
3. Use in pages or components

```html
<template>
  <text v-if="item">{{ item.title }}</text>
  <text v-else>...</text>
</template>

<script>
const id = 1;// 模拟ID(Simulation ID)
export default {
  computed: {
    item() {
      return this.$store.state.items[id]
    }
  },
  serverPrefetch() {// 服务端预取数据的生命周期(The life cycle of server-side prefetching data)
    return this.fetchItem()
  },
  mounted() { // 仅客户端执行的生命周期(Client-only execution life cycle)
    if (!this.item) { // 判断服务端是否已正常获取，若未获取，重新调用加载数据(Determine whether the server has been obtained normally, if not, call to load the data again)
      this.fetchItem()
    }
  },
  methods: {
    fetchItem() {
      return this.$store.dispatch('fetchItem', id)
    }
  }
}
</script>
```

#### 发行与部署@distribute
#### Distribution and deployment @distribute

- 部署到`uniCloud`
- Deploy to `uniCloud`
  * 开通[uniCloud](https://unicloud.dcloud.net.cn)以及[前端网页托管](https://uniapp.dcloud.net.cn/uniCloud/hosting)
  * Open [uniCloud](https://unicloud.dcloud.net.cn) and [front-end web hosting](https://uniapp.dcloud.net.cn/uniCloud/hosting)
  * 配置`vite.config.js`中的`base`为`前端网页托管`地址
  * Configure `base` in `vite.config.js` as the address of `front-end web hosting`
```js
import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://static-xxxx.bspapp.com/', // uniCloud 前端网页托管资源地址（主要是应用编译后的js，图片等静态资源，可以配置为二级目录）(UniCloud front-end web hosting resource address (mainly static resources such as compiled js and pictures, which can be configured as a secondary directory))
	plugins: [
		uni(),
	],
})
```
  * 编译：
  * Compile:
  > cli工程：`npm run build:h5:ssr`或通过`HBuilderX 3.1.16及以上版本`的`发行菜单->网站 PC-Web或手机H5`、勾选`ssr`
  > cli project: `npm run build:h5:ssr` or through the `release menu of `HBuilderX 3.1.16 and above` -> website PC-Web or mobile phone H5`, check `ssr`
  
  ![以ssr模式发行](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/d7574ced-e253-4b73-8187-86d6a8811364.jpg)
  ![Issued in ssr mode](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/d7574ced-e253-4b73-8187-86d6a8811364.jpg)
  
  * 部署静态资源到[前端网页托管](https://uniapp.dcloud.net.cn/uniCloud/hosting)
  * Deploy static resources to [front-end web hosting](https://uniapp.dcloud.net.cn/uniCloud/hosting)
  > 将编译后的`dist/build/h5/client`中的资源上传至前端网页托管，推荐使用免费的阿里云服务空间
  > Upload the compiled resources in `dist/build/h5/client` to the front-end web hosting, it is recommended to use the free Alibaba Cloud service space
  * 部署`uni-ssr`云函数
  * Deploy the `uni-ssr` cloud function
  > 从插件市场导入[uni-ssr](https://ext.dcloud.net.cn/plugin?id=5338)，将编译后的`dist/build/h5/server`目录拷贝至`uni-ssr`云函数根目录，并上传。备注：阿里云的云函数绑定自定义域名功能正在调试中，现阶段推荐使用腾讯云版本的云函数。
  > Import [uni-ssr](https://ext.dcloud.net.cn/plugin?id=5338) from the plug-in market, and copy the compiled `dist/build/h5/server` directory to `uni-ssr `Cloud function root directory, and upload. Note: Alibaba Cloud's cloud function binding custom domain name function is under debugging. At this stage, it is recommended to use the Tencent Cloud version of the cloud function.
  * 配置`uni-ssr`的云函数URL化路径，请参考文档：[云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)
  * To configure the URLization path of the cloud function of `uni-ssr`, please refer to the document: [Cloud Function URLization](https://uniapp.dcloud.net.cn/uniCloud/http)
