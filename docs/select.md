#### uni-app选型评估常见问题
#### uni-app selection evaluation FAQ

**uni-app 有哪些已上线的成功案例？**
**What are the success stories of uni-app that have gone live?**

uni-app是当今主流的开发框架，DCloud有800万开发者，uni统计手机端月活10亿，阿里、腾讯、字节跳动、美团、京东、vivo都在用，案例参考[uni-app 应用案例](http://uniapp.dcloud.io/case)
uni-app is the mainstream development framework today. DCloud has 8 million developers. Uni statistics claim that there are 1 billion monthly active mobile users, including Alibaba, Tencent, ByteDance, Meituan, JD, Vivo and other large enterprises. For the case, please refer to [uni-app application case](http://uniapp.dcloud.io/case)

**uni-app收费吗？**
**Does uni-app charge?**

`uni-app` 是免费并且属于Apache2.0开源协议的产品。DCloud官方承诺无论HBuilderX、uni-app，面向全球程序员永久免费。大家可以放心使用。
`uni-app` is a free product that belongs to the Apache2.0 open source protocol. DCloud officially promises that it will be free for programmers worldwide, regardless of HBuilderX and uni-app. Please feel free to use it.

DCloud的盈利方式在帮助开发者进行流量变现（uni-AD）和提供有价值的云服务（uniCloud）上，而不在开发工具收费上。
DCloud is profitable by helping developers to monetize traffic (uni-AD) and provide valuable cloud services (uniCloud), instead of charging for development tools.

**跨端会造成功能受限制吗？**
**Will cross-side cause function limitation?**

`uni-app`在跨平台的过程中，不牺牲平台特色，不限制平台的能力使用。
In the process of cross-platform, `uni-app` neither sacrifices platform features nor restricts the use of platform capabilities.

应用开发中，90%的常规开发，比如界面组件、联网等api，`uni-app`封装为可跨多端的API。
In application development, 90% of routine development, such as interface components, networking and other APIs, `uni-app` is encapsulated as a multi-terminal API.

而各个端的特色功能，`uni-app`引入[条件编译](http://uniapp.dcloud.io/platform)。可以优雅的在一个项目里调用不同平台的特色能力。有很多原生sdk，在App时难免涉及，这些都可以正常的在`uni-app`框架下使用。
As for the characteristic functions of each end, `uni-app` introduces [conditional compilation](http://uniapp.dcloud.io/platform). It is possible to elegantly call the featured capabilities of different platforms in one project. There are a lot of native SDKs, which are inevitably involved in the App, and these can be used normally under the `uni-app` framework.

下图是`uni-app`产品功能框架图，`uni-app`在保持uni规范跨平台的前提下，还可实现每个平台特有的平台能力。
The figure below is the framework diagram of the product function of `uni-app`. `uni-app` can also realize the unique platform capabilities of each platform under the premise of maintaining the uni standard and cross-platform.

![](//img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png)

在做H5时，H5所有的api都可以使用；而输出到App时，原生渲染引擎、原生sdk集成和混写都支持，使得原生的所有api都可以使用。
On the H5 side, all APIs of the H5 side can be used; When output to App, native rendering engine, native sdk integration and mixed writing are all supported, so that all native APIs are available.

同时注意，条件编译不同于代码里if逻辑判断。条件编译块里的代码或指定的文件，只有在特定平台才会被编译进去，不会把不能用的其他平台代码混在一个包里。如果大量使用if判断，会增大体积和影响性能，而条件编译则没有这些问题，减少包体积，减少互相的干扰。
Also note that conditional compilation is different from if logic judgment in code. The code or specified file in the conditional compilation block will only be compiled in a specific platform, and the unusable code of other platforms will not be mixed in a package. If if judgment is used extensively, it will increase the volume and affect the performance. In contrast, conditional compilation does not have these problems, which can reduce packet size and reduce mutual interference.

**uni-app的手机端用户体验如何？**
**How is the user experience on the mobile side of uni-app?**

`uni-app`打包成App后，支持webview渲染和weex原生渲染这2种引擎，可以任由开发者切换使用。原生渲染方式，是DCloud改造了`weex`引擎，在原生渲染引擎上实现了uni-app的组件和API。
`uni-app` supports webview rendering and weex native rendering engines after being packaged into an App, which can be switched by developers. The native rendering method is that DCloud transforms the `weex` engine, and implements uni-app components and APIs on the native rendering engine.

由于有丰富的插件市场，使得`uni-app`拥有更庞大的应用生态。
`uni-app` has a larger application ecology due to its rich plug-in market.

**只开发App，需要uni-app吗？**
**Is uni-app needed for App-only development?**

`uni-app`是更好的跨平台开发框架，开发一次iOS、Android都有了。体验好、开发效率高。
`uni-app` is a better cross-platform framework. It is available on both iOS and Android after only one development. Good experience and high development efficiency.

<!-- `uni-app`在App侧可以使用weex引擎渲染，性能体验高于其他Hybrid框架。 -->
<!-- ... -->

`uni-app`在App端，基于能力层/渲染层分离的架构设计（见下图），渲染层是webview和weex二选一，能力调用都是共同的api，比如蓝牙、扫码等能力；也就是weex被内置到`uni-app`中，并且被强化了。
`uni-app`On the App side, based on the architecture design of capability layer/rendering layer separation (see the figure below), the rendering layer is either webview or weex, and capability calls are common APIs, such as Bluetooth, code scanning and other capabilities; That is, weex is built into`uni-app` and has been strengthened.

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/frame_app.png)

过去weex有个很大的问题是api太少，开发时必须iOS、Android原生和前端3拨团队协作开发，实际上react native也如此，因为他们的核心只是高性能渲染器。
A big problem of weex in the past was that there were too few APIs and the development had to be done collaboratively by 3 teams: iOS, Android native and front-end. In fact, the same is true of react native, because their core is just a high-performance renderer.

uni-app提供了大量的扩展api解决了这个问题，并且发展了成熟多样的插件生态，大多数App的开发不再需要原生介入了，从而把跨平台开发省成本这个核心目的落地了。
uni-app solves this problem by providing a large number of extended APIs, and has developed a mature and diverse plug-in ecology. Most developments of App no longer requires native intervention, thus realizing the core purpose of cross-platform development to save costs.

`uni-app`的插件市场里有非常多的ui库、组件、模板，可以大幅提升开发效率。
A wide variety of ui libraries, components, and templates are available in the plug-in market of `uni-app`, which can greatly improve development efficiency.

相比纯原生开发，`uni-app`体验可商用，也不会限制功能调用，但开发效率和开发成本更优于原生开发。
Compared with pure native development,`uni-app` experience is commercially available and does not limit function calls, but it is superior to native development in terms of development efficiency and development cost.

如果你已经有了原生App，那么可以局部使用`uni-app`。
If you already have a native App in hand, you can use `uni-app` locally.

**uni-app是多端写在一个项目统一升级维护，还是每个端不同的项目，只复用部分代码**
**Is uni-app written on multiple ends in one project for unified upgrade and maintenance, or is it a different project on each end and only part of the code is reused?**

`uni-app`是多端写在一个基础项目下，差异使用条件编译来管理。
`uni-app` is written by multiple terminals in a basic project, and the differences are managed by conditional compilation.

这有个巨大的好处是一套工程代码，升级时可多端同时更新。
It has a huge advantage that a set of engineering codes can be updated at the same time when upgrading.

如果把不同端的项目分开，那么维护升级时非常麻烦，无法方便同步升级。
If the projects on different sides are separated, it is very troublesome for maintenance and upgradation, and it is not easy to upgrade synchronously.

**uni-app 学习成本高吗？基于什么技术栈？**
**Is uni-app costly to learn? What technology stack is it based on?**

`uni-app`简单来说是 `Vue`的语法 + API，没有太多额外学习成本。
In short, `uni-app` is the syntax of `Vue` + API, and there is not much additional learning cost.

没学过vue的同学，也不用掌握vue的全部，只需了解vue基础语法、虚拟dom、数据绑定、组件、vuex，其他如路由、loader 不用学，cli、node.js、webpack也不需要学。
Novices who have never learned vue do not need to master all of vue, they only need to learn about are the basic syntax of vue, virtual dom, data binding, components and vuex. Others such as routing, loader, cli, node.js, webpack are not within the scope of learning

**uni-app 开发体验如何？支持现代前端开发流程吗？**
**How is the development experience of uni-app? Does it support modern front-end development process?**

`uni-app` 积极拥抱社区现有的现代开发流程，包括但不限于：
`uni-app` actively embraces the existing modern development process in the community, including but not limited to:

- 内置了webpack
- Built-in webpack
- NPM 包管理系统，详见[参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- NPM package management system, see [Reference](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81) for details
- es6+ 语法（发布时会自动编译为es5），详见[参考](http://uniapp.dcloud.io/frame?id=es6-%E6%94%AF%E6%8C%81)
- Es6+ syntax (it will be automatically compiled into es5 when publishing), see [Reference](http://uniapp.dcloud.io/frame?id=es6-%E6%94%AF%E6%8C%81) for details
- 各种预处理器（less、scss、stylus、typescript）
- Various preprocessors (less, scss, stylus, typescript)
- uni-app的官方ide：HBuilderX，在vue、json、markdown、代码提示、操作效率上，有非常明显的优势，可帮助开发者大幅提高工作效率
- Official ide of uni-app: HBuilderX, has obvious advantages in vue, json, markdown, code prompt and operation efficiency, which can greatly improve the productivity of developers
- uni-app同时也提供了cli方式，可使用其他开发工具如vscode开发，当然开发效率不如HBuilderX。对比详见[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
- uni-app also provides the cli mode, which can be developed by using other development tools such as vscode. Certainly, the development efficiency is not as good as that of HBuilderX. For comparison, see [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)


**uni-app 生态开放性如何？能否直接利用现有前端社区资源？**
**How open is the uni-app ecosystem? Can the existing front-end community resources be directly utilized?**

`uni-app` 提供了开放性的生态：
`uni-app` provides an open ecology:

- 丰富的插件市场为开发者提供数千款现成的轮子，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- Rich plug-in market provides developers with thousands of ready-made wheels, [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- App和H5提供了renderjs，使得浏览器专用的库也可以在App和H5里使用，[参考](https://uniapp.dcloud.io/frame?id=renderjs)
- App and H5 provide renderjs so that browser-specific libraries can also be used in App and H5. [Reference](https://uniapp.dcloud.io/frame?id=renderjs)
- 支持 NPM 包管理系统，[参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- Support NPM package management system, [refer to](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- 支持原生插件，见插件市场：[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- Support native plug-ins, see plug-in market: [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)



**uni-app 支持的手机版本最低到多少？**
**What is the minimum mobile phone version supported by uni-app?**

Android4.4、iOS9是官方会保障兼容的。
Android4.4 and iOS9 are officially guaranteed to be compatible.
要知道Android4.4已经是2013年发布的手机了，正常用户不会还在用这么久远的手机。
It is important to know that Android4.4 was released in 2013, and normal users won't still use such an old phone.

**uni-app成熟度高吗？**
**Is uni-app mature?**

`uni-app`在2018年夏天推出，目前版本成熟，生态资源丰富，是当今主流的开发框架，案例众多，手机端引擎月活已经突破10亿！
`uni-app` was launched in the summer of 2018. The current version is mature and rich in ecological resources. It is the mainstream development framework today with many cases. The monthly active users of mobile engines have exceeded 1 billion!


**uni-app的社区活跃吗？**
**Is the community of uni-app active?**

`uni-app`问答社区每天新增数百个帖子。
Hundreds of posts are added to the `uni-app` Q&A community every day.

插件市场内容也非常丰富，各种轮子方便可用。[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并且很多轮子的uni-app版。
The content of plug-ins market is also very rich, and various wheels are conveniently available. [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/), and a uni-app version of many wheels.

基于`uni-app`的三方培训也很多。腾讯课堂官方亲自为uni-app制作了课程，各大培训网站均有uni-app的培训课程。
There are also many tripartite trainings based on `uni-app`. Tencent Classroom officials personally produced courses for uni-app, and uni-app training courses are available on major training sites.


**App打包必须上传DCloud云端吗？代码会泄露吗？**
**Does App packaging have to be uploaded to DCloud Cloud Service? Will the code be leaked out?**

代码可以云打包，也可以离线打包。
Code can be packaged in cloud packaging or offline.

使用云打包时有两种模式：
There are two modes when using cloud packaging:
1. 安心打包
1. Pack with ease
安心打包不会上传开发者的证书、代码，[详见](https://ask.dcloud.net.cn/article/37979)。
Pack with ease does not upload the developer's certificate and code, [See details](https://ask.dcloud.net.cn/article/37979).
2. 传统云打包
2. Traditional cloud packaging
传统云打包仅适合没有mac电脑但需要打iOS包的开发者。在这种情况下，代码和证书会上传到DCloud的mac打包服务器，但打包后立即删除，DCloud不会持久化保存。
Traditional cloud packaging is only suitable for developers who don't have mac computers but need iOS packaging. In this case, codes and certificates will be uploaded to the mac packaging server of DCloud, but will be deleted immediately after packaging. DCloud will not persistently save them.

DCloud是一家遵纪守法的公司，不会做损害自己名誉的事情。之所以提供云打包，是方便不熟悉原生的前端工程师直接生成App安装包。包括让没有mac电脑的工程师也可以打出iOS的包。
DCloud is a law-abiding company and will not do anything to damage its reputation. The reason for providing cloud packaging is to facilitate front-end engineers who are unfamiliar with native products to directly generate App installation packages. It also allows engineers who do not have a mac computer to do iOS packaging.

**DCloud提供哪些技术支持？碰到框架bug影响业务怎么办？**
**What technical support does DCloud provide? What if encountering framework bugs that affects the business?**

`uni-app` 的github上的dev分支是频繁更新的，可随时修复bug。并且作为开源产品，开发者也可以修改源码。
The dev branch on github of `uni-app` is updated frequently, and bugs can be fixed at any time. What’s more, as an open source product, developers can also modify the source code. The app engine of `uni-app` supports native extension. As long as you can extend natively, you are not afraid of app engine limitations. Even so, you can add a native plug-in yourself.
`uni-app` 的app引擎，支持原生扩展，只要你会原生扩展，就不怕app引擎有限制，大不了自己补一个原生插件进去。
Developers can submit any issues they encounter at [github](https://github.com/dcloudio/uni-app).

