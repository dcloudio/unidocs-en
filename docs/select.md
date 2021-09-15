#### uni-app选型评估23问
#### uni-app selection evaluation 23 questions

如果你关心竞品对比，这里有几份详尽对比：
If you care about the comparison of competing products, here are a few detailed comparisons:
2. 只做App，flutter、react native等App跨平台框架对比，参考：[https://ask.dcloud.net.cn/article/36083](https://ask.dcloud.net.cn/article/36083)
2. Only do app, flutter, react native and other App cross-platform framework comparison, reference: [https://ask.dcloud.net.cn/article/36083](https://ask.dcloud.net.cn/article /36083)

**uni-app 有哪些已上线的成功案例？**
**What are the successful cases where uni-app has been launched?**
uni-app是当今主流的开发框架，DCloud有600万开发者，uni统计手机端月活10亿，华为、阿里、腾讯、字节跳动、美团、京东、快手、vivo都在用，案例参考[uni-app 应用案例](http://uniapp.dcloud.io/case)
uni-app is today’s mainstream development framework. DCloud has 6 million developers. Uni counts 1 billion monthly active mobile phones. Huawei, Alibaba, Tencent, ByteDance, Meituan, JD, Kuaishou, and vivo are all in use, case reference [uni-app application case](http://uniapp.dcloud.io/case)
**uni-app收费吗？**
**Does uni-app charge?**
```uni-app``` 是免费并且属于Apache2.0开源协议的产品。DCloud官方承诺无论HBuilderX、uni-app，面向中国人永久免费。大家可以放心使用。
```uni-app``` is a free product that belongs to the Apache2.0 open source agreement. DCloud officially promises that regardless of HBuilderX or uni-app, it will be free for Chinese people forever. You can use it with confidence.
DCloud的盈利方式在帮助开发者进行流量变现（uni-AD）和提供有价值的云服务（uniCloud）上，而不在开发工具收费上。
DCloud's profit method is to help developers monetize traffic (uni-AD) and provide valuable cloud services (uniCloud), rather than charging for development tools.

**跨端会造成功能受限制吗？**
**Will cross-terminals cause functional limitations?**
```uni-app```在跨平台的过程中，不牺牲平台特色，不限制平台的能力使用。
```uni-app``` does not sacrifice platform features or restrict the use of platform capabilities during the cross-platform process.
应用开发中，90%的常规开发，比如界面组件、联网等api，```uni-app```封装为可跨多端的API。
In application development, 90% of conventional development, such as interface components, networking and other APIs, ``uni-app``` is encapsulated as a multi-terminal API.
而各个端的特色功能，```uni-app```引入[条件编译](http://uniapp.dcloud.io/platform)。可以优雅的在一个项目里调用不同平台的特色能力。比如push，H5里不支持，但可以在App里使用，还有很多原生sdk，在App时难免涉及，这些都可以正常的在```uni-app```框架下使用。
And the characteristic function of each end, ```uni-app``` introduces [conditional compilation](http://uniapp.dcloud.io/platform). The unique capabilities of different platforms can be elegantly invoked in a project. For example, push is not supported in H5, but it can be used in App. There are also many native SDKs, which are unavoidably involved in App. These can be used normally under the framework of ```uni-app```.
下图是```uni-app```产品功能框架图，```uni-app```在保持uni规范跨平台的前提下，还可实现每个平台特有的平台能力。
The figure below is the framework diagram of the product function of ``uni-app```. On the premise of maintaining uni-specification and cross-platform, `uni-app``` can also realize the unique platform capabilities of each platform.
![](//img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png)

在做H5时，H5所有的api都可以使用；而输出到App时，原生渲染引擎、原生sdk集成和混写都支持，使得原生的所有api都可以使用。
When doing H5, all the APIs of H5 can be used; and when outputting to App, native rendering engine, native SDK integration and mixed writing are supported, so that all native APIs can be used.
同时注意，条件编译不同于代码里if逻辑判断。条件编译块里的代码或指定的文件，只有在特定平台才会被编译进去，不会把不能用的其他平台代码混在一个包里。如果大量使用if判断，会增大体积和影响性能，而条件编译则没有这些问题，减少包体积，减少互相的干扰。
At the same time, note that conditional compilation is different from if logic judgment in the code. The code in the conditional compilation block or the specified file will only be compiled on a specific platform, and the code of other platforms that cannot be used will not be mixed into one package. If a large number of if judgments are used, it will increase the size and affect performance, while conditional compilation does not have these problems, reducing the size of the package and reducing mutual interference.

**uni-app的手机端用户体验如何？**
**How is the mobile user experience of uni-app?**

```uni-app```打包成App后，支持webview渲染和weex原生渲染这2种引擎，可以任由开发者切换使用。
After ```uni-app``` is packaged as an App, it supports two engines: webview rendering and weex native rendering, which can be switched by developers.

- webview渲染方式，架构和微信小程序一样。微信小程序的Hybrid应用框架是业内体验上的标杆，实践证明这种体验足以承载一线互联网开发商获得上亿用户。uni-app的App端体验超过一般的hybrid框架。
- The webview rendering method is the same as the WeChat applet. The Hybrid application framework of the WeChat applet is the benchmark in the industry experience. Practice has proved that this experience is enough to carry the first-line Internet developers to obtain hundreds of millions of users. The App experience of uni-app exceeds the general hybrid framework.
- 原生渲染方式，是DCloud改造了weex引擎，在原生渲染引擎上实现了uni-app的组件和API。达到更优秀的用户体验。
- The native rendering method is that DCloud transforms the weex engine and implements uni-app components and APIs on the native rendering engine. Achieve a better user experience.

由于有丰富的插件市场，使得```uni-app```拥有更庞大的应用生态。
Due to the abundant plug-in market, ```uni-app``` has a larger application ecosystem.


**只开发App，需要uni-app吗？**
**Is only developing apps, do I need uni-app?**

```uni-app```是更好的跨平台开发框架，开发一次iOS、Android都有了。体验好、开发效率高。
```uni-app``` is a better cross-platform development framework, once developed for iOS and Android. Good experience and high development efficiency.

<!-- ```uni-app```在App侧可以使用weex引擎渲染，性能体验高于其他Hybrid框架。 -->
<!-- ```uni-app``` can use the weex engine to render on the App side, and the performance experience is higher than other Hybrid frameworks. -->

```uni-app```在App端，基于能力层/渲染层分离的架构设计（见下图），渲染层是webview和weex二选一，能力调用都是共同的plus api，比如蓝牙、扫码等能力；也就是weex被内置到```uni-app```中，并且被强化了。
```uni-app``` On the App side, based on the architecture design of the separation of the capability layer/rendering layer (see the figure below), the rendering layer is one of webview and weex, and the ability calls are all common plus apis, such as Bluetooth , Scan code and other capabilities; that is, weex is built into ```uni-app``` and has been enhanced.

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/frame_app.png)

过去weex有个很大的问题是api太少，开发时必须iOS、Android原生和前端3拨团队协作开发，实际上react native也如此，因为他们的核心只是高性能渲染器。
In the past, weex had a big problem with too few APIs. When developing, it was necessary to develop iOS, Android native and front-end 3 dial teams to develop collaboratively. In fact, the same is true for React Native, because their core is only a high-performance renderer.

uni-app提供了大量的扩展api解决了这个问题，并且发展了成熟多样的插件生态，大多数App的开发不再需要原生介入了，从而把跨平台开发省成本这个核心目的落地了。
Uni-app provides a large number of extended APIs to solve this problem, and has developed a mature and diverse plug-in ecology. The development of most apps no longer requires native intervention, thus realizing the core purpose of cost-saving cross-platform development.

```uni-app```的插件市场里有非常多的ui库、组件、模板，可以大幅提升开发效率。
There are a lot of UI libraries, components, and templates in the plug-in market of ```uni-app```, which can greatly improve development efficiency.

相比纯原生开发，```uni-app```体验可商用，也不会限制功能调用，但开发效率和开发成本更优于原生开发。
Compared with pure native development, the ``uni-app`'' experience can be commercialized without restricting function calls, but the development efficiency and development cost are better than native development.

如果你已经有了原生App，那么可以局部使用```uni-app```，内嵌uni小程序SDK，把部分栏目小程序化，或者直接打造自己的小程序平台。
If you already have a native app, you can partially use ```uni-app```, embedded uni applet SDK, make some columns into applets, or create your own applet platform directly.


**uni-app是多端写在一个项目统一升级维护，还是每个端不同的项目，只复用部分代码**
**Is uni-app written in multiple ends in one project for unified upgrade and maintenance, or is it a different project on each end, and only part of the code is reused**

```uni-app```是多端写在一个基础项目下，差异使用条件编译来管理。
```uni-app``` is multi-terminal written in a basic project, and differences are managed by conditional compilation.

这有个巨大的好处是一套工程代码，升级时可多端同时更新。
This has a huge advantage that a set of engineering codes can be updated at the same time when upgrading.

如果把不同端的项目分开，那么维护升级时非常麻烦，无法方便同步升级。
If the projects on different ends are separated, it is very troublesome to maintain and upgrade, and it is not convenient to synchronize the upgrade.

**uni-app 学习成本高吗？基于什么技术栈？**
**Is uni-app expensive to learn? Based on what technology stack?**

```uni-app```简单来说是 vue的语法 + 小程序的api。
```uni-app``` is simply the syntax of vue + the api of the applet.

它遵循```Vue.js```语法规范，组件和API遵循```微信小程序命名```，这些都属于通用技术栈，学习它们是前端必备技能，```uni-app```没有太多额外学习成本。
It follows the ```Vue.js``` grammar specification, components and API follow the ```WeChat applet naming```, these belong to the general technology stack, learning them is a necessary front-end skills, ```uni-app ```There is not much additional learning cost.

没学过vue的同学，也不用掌握vue的全部，只需了解vue基础语法、虚拟dom、数据绑定、组件、vuex，其他如路由、loader 不用学，cli、node.js、webpack也不需要学。
Students who have never studied vue do not need to master all of vue. They only need to understand the basic vue syntax, virtual dom, data binding, components, vuex, other things such as routing and loader do not need to learn, nor do cli, node.js, webpack study.

官方有入门培训视频，且还有众多培训渠道加入```uni-app```生态，可参考[培训教程资源汇总](http://uniapp.dcloud.io/resource)。
Officially there are introductory training videos, and there are many training channels to join the ``uni-app``` ecology, please refer to [training tutorial resource summary](http://uniapp.dcloud.io/resource).


**uni-app 开发体验如何？支持现代前端开发流程吗？**
**How is the uni-app development experience? Does it support modern front-end development processes?**

```uni-app``` 积极拥抱社区现有的现代开发流程，包括但不限于：
```uni-app``` actively embraces the existing modern development process of the community, including but not limited to:

- 内置了webpack
- Built-in webpack
- NPM 包管理系统，详见[参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- NPM package management system, see [Reference](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- es6+ 语法（发布时会自动编译为es5），详见[参考](http://uniapp.dcloud.io/frame?id=es6-%E6%94%AF%E6%8C%81)
- es6+ syntax (it will be automatically compiled to es5 when released), see [Reference](http://uniapp.dcloud.io/frame?id=es6-%E6%94%AF%E6%8C%81)
- 各种预处理器（less、scss、stylus、typescript）
- Various preprocessors (less, scss, stylus, typescript)
- uni-app的官方ide：HBuilderX，在vue、json、markdown、代码提示、操作效率上，有非常明显的优势，可帮助开发者大幅提高工作效率
- The official ide of uni-app: HBuilderX, which has obvious advantages in vue, json, markdown, code hints, and operation efficiency, which can help developers greatly improve work efficiency
- uni-app同时也提供了cli方式，可使用其他开发工具如vscode开发，当然开发效率不如HBuilderX。对比详见[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
- uni-app also provides a cli method, which can be developed with other development tools such as vscode. Of course, the development efficiency is not as good as HBuilderX. For comparison, please refer to [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)

**uni-app 生态开放性如何？能否直接利用现有前端社区资源？**
**How open is the uni-app ecosystem? Can you directly use the existing front-end community resources?**

```uni-app``` 提供了开放性的生态：
```uni-app``` provides an open ecology:

- 丰富的插件市场为开发者提供数千款现成的轮子，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- The rich plug-in market provides developers with thousands of ready-made wheels, [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- App和H5提供了renderjs，使得浏览器专用的库也可以在App和H5里使用，[参考](https://uniapp.dcloud.io/frame?id=renderjs)
- App and H5 provide renderjs, so that browser-specific libraries can also be used in App and H5, [Reference](https://uniapp.dcloud.io/frame?id=renderjs)
- 支持 NPM 包管理系统，[参考](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- Support NPM package management system, [Reference](http://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
- 支持 mpvue 项目及组件，[参考](http://ask.dcloud.net.cn/article/34945)
- Support mpvue projects and components, [Reference](http://ask.dcloud.net.cn/article/34945)
- 支持原生插件，见插件市场：[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- Support native plug-ins, see plug-in market: [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- 支持App原生工程里嵌入uni小程序sdk。
- Support for embedding uni applet sdk in App native project.


**uni-app 支持的手机版本最低到多少？**
**What is the minimum mobile phone version supported by uni-app?**

Android4.4、iOS9是官方会保障兼容的。
Android4.4 and iOS9 are officially guaranteed to be compatible.

要知道Android4.4已经是2013年发布的手机了，正常用户不会还在用这么久远的手机。
You must know that Android 4.4 is already a mobile phone released in 2013, and normal users will not still use a mobile phone that has been so long.

**uni-app成熟度高吗？**
**Is the uni-app highly mature?**

```uni-app```在2018年夏天推出，目前版本成熟，生态资源丰富，是当今主流的开发框架，案例众多，手机端引擎月活已经突破10亿！
```uni-app``` was launched in the summer of 2018. The current version is mature and the ecological resources are rich. It is the mainstream development framework today. There are many cases. The monthly life of the mobile phone engine has exceeded 1 billion!

**uni-app的社区活跃吗？**
**Is the uni-app community active?**

加入```uni-app```的群就知道，几十个QQ/微信群每天数万条聊天记录，非常活跃。论坛里每天数百个帖子。
Those who join the ``uni-app`'' group know that dozens of QQ/WeChat groups have tens of thousands of chat records every day, which are very active. There are hundreds of posts in the forum every day.

插件市场内容也非常丰富，各种轮子方便可用。[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并且很多轮子的uni-app版，性能功能都强于微信小程序版。
The content of the plug-in market is also very rich, and various wheels are easily available. [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/), and the uni-app version of many wheels has better performance and functions than the WeChat applet version.

基于```uni-app```的三方培训也很多。腾讯课堂官方亲自为uni-app制作了课程，各大培训网站均有uni-app的培训课程。
There are also many tripartite trainings based on ``uni-app```. Tencent Classroom officials personally produced courses for uni-app, and all major training websites have uni-app training courses.

**DCloud是家什么公司，是否可信赖**
**What company is DCloud, and is it trustworthy**

```DCloud```从2013年开始做HBuilder，目前800万前端开发者在使用```DCloud```的开发工具，HBuilder百度指数超过sublime、webstorm等全球知名工具。是中国唯一一家成功的开发工具厂商。
```DCloud``` has been working on HBuilder since 2013. At present, 8 million front-end developers are using the development tools of ```DCloud```. The HBuilder Baidu index exceeds that of global well-known tools such as sublime and webstorm. It is the only successful development tool manufacturer in China.

```DCloud```是明星创业公司，融资已经过了B2轮，且均为知名VC或战略投资人。
```DCloud``` is a star startup company that has passed the B2 round of financing, and all of them are well-known VCs or strategic investors.

```DCloud```是HTML5中国产业联盟的发起单位和秘书单位。该联盟隶属于工信部信通院标准所。
```DCloud``` is the initiator and secretary of the HTML5 China Industry Alliance. The alliance is affiliated to the Standards Institute of the Ministry of Industry and Information Technology.

```DCloud```产品中使用的HTML5Plus规范，为联盟的标准规范而非私有api。
The HTML5Plus specification used in the ```DCloud``` product is a standard specification of the alliance rather than a private api.

```DCloud```的产品技术一直引领业内，2015年就上线业内第一个"小程序"：DCloud流应用。随后DCloud广泛推动业内各大公司上线"小程序"，普及该技术广泛应用。
The product technology of ```DCloud``` has been leading the industry. In 2015, it launched the industry's first "small program": DCloud streaming application. Subsequently, DCloud widely promoted the launch of "small programs" by major companies in the industry to popularize the wide application of the technology.

阿里小程序IDE官方内嵌`uni-app`、腾讯课堂官方录制`uni-app`培训视频、华为腾讯阿里字节跳动京东等众多一线公司使用uni-app，uni-app没有让他们失望，也不会让你失望。
Alibaba Mini Program IDE’s official built-in `uni-app`, Tencent Classroom’s official recording of `uni-app` training videos, Huawei, Tencent, Ali Byte Beat JD and many other first-line companies use uni-app, and uni-app did not disappoint them. Will not disappoint you.


**App打包必须上传DCloud云端吗？代码会泄露吗？**
**Does App packaging have to be uploaded to the DCloud cloud? Will the code leak?**

代码可以云打包，也可以离线打包。
The code can be packaged in the cloud or offline.

使用云打包时有两种模式：
There are two modes when using cloud packaging:

1. 安心打包
1. Pack with confidence
安心打包不会上传开发者的证书、代码，[详见](https://ask.dcloud.net.cn/article/37979)。
Anxin Packaging will not upload the developer's certificate and code, [see details](https://ask.dcloud.net.cn/article/37979).
2. 传统云打包
2. Traditional cloud packaging
传统云打包仅适合没有mac电脑但需要打iOS包的开发者。在这种情况下，代码和证书会上传到DCloud的mac打包服务器，但打包后立即删除，DCloud不会持久化保存。
Traditional cloud packaging is only suitable for developers who do not have a mac computer but need to open iOS packages. In this case, the code and certificate will be uploaded to DCloud's mac packaging server, but they will be deleted immediately after packaging, and DCloud will not be persistently stored.
DCloud是一家遵纪守法的公司，不会做损害自己名誉的事情。之所以提供云打包，是方便不熟悉原生的前端工程师直接生成App安装包。包括让没有mac电脑的工程师也可以打出iOS的包。
DCloud is a law-abiding company and will not do things that damage its reputation. The reason why cloud packaging is provided is that it is convenient for front-end engineers who are not familiar with native to directly generate App installation packages. Including allowing engineers who don’t have a mac computer to type iOS packages.


**DCloud提供哪些技术支持？碰到框架bug影响业务怎么办？**
**What technical support does DCloud provide? What should I do if I encounter a framework bug that affects my business?**

```uni-app``` 是DCloud全力打造的重点产品，不是非专业公司的KPI项目。不会因为某些负责人的流动导致框架烂尾。
```uni-app``` is a key product created by DCloud, not a KPI project for non-professional companies. The framework will not be unfinished due to the flow of certain persons in charge.
```uni-app``` 的github上的dev分支是频繁更新的，可随时修复bug。并且作为开源产品，开发者也可以修改源码。
The dev branch on github of ```uni-app``` is updated frequently, and bugs can be fixed at any time. And as an open source product, developers can also modify the source code.
```uni-app``` 的app引擎，支持原生扩展，只要你会原生扩展，就不怕app引擎有限制，大不了自己补一个原生插件进去。
The app engine of ```uni-app``` supports native extensions. As long as you can extend natively, you are not afraid of the limitations of the app engine. It's a big deal to add a native plug-in yourself.
开发者碰到问题，可以通过如下途径进行反馈交流：
When developers encounter problems, they can provide feedback and communication through the following channels:
- ask社区：[https://ask.dcloud.net.cn/explore/category-12](https://ask.dcloud.net.cn/explore/category-12)
- Ask community: [https://ask.dcloud.net.cn/explore/category-12](https://ask.dcloud.net.cn/explore/category-12)
- QQ群：参考官网左侧导航显示的QQ群列表
- QQ groups: refer to the list of QQ groups displayed in the left navigation of the official website
另外，如果您确实需要商业化的保障才安心，也可以申请付费技术支持。[参考](https://ask.dcloud.net.cn/article/13015)
In addition, if you really need commercial guarantees to be at ease, you can also apply for paid technical support. [Reference](https://ask.dcloud.net.cn/article/13015)


**大型互联网公司发布的开源框架，是不是更有影响力？**
**Is the open source framework released by large Internet companies more influential?**
大型互联网公司在自用某个项目时，解决了某个问题，把它剥离出来开源，这个是众多大公司开源项目的来源和初衷。
When large Internet companies use a project for their own use, they solve a certain problem and spin it out to open source. This is the source and original intention of many large companies' open source projects.
而之所以把内部自用的框架开源出来，基本是为了在技术圈塑造形象和威望。对团队而言，有助于招聘；对负责人个人而言，有助于晋升和提升名气。
The reason why the internal self-use framework is open source is basically to create an image and prestige in the technology circle. For the team, it is helpful for recruitment; for the person in charge, it is helpful for promotion and fame.
这类开源项目被戏称为KPI项目，往往逃不开4个魔咒：
This kind of open source project is jokingly called KPI project, and it is often impossible to escape 4 curses:
1. 很多项目开源后一旦取得成绩，负责人就升职调岗，或者因为其他原因最初立项负责人离职，于是之前的开源项目就慢慢变凉。
1. Once many projects have achieved results after open source, the person in charge is promoted and transferred, or the person in charge of the initial project resigns due to other reasons, so the previous open source projects slowly become cold.
2. 其设计初衷是为公司内部使用的，不是站在广泛的开发者需求角度设计的，其他开发者使用时会遇到各种问题。
2. The original intention of its design is for the company's internal use. It is not designed from the perspective of a wide range of developer needs. Other developers will encounter various problems when using it.
3. 大型互联网公司的主业都是toC的，而不是to开发者。投很多资源持续维护这些开源项目并不是其公司目标，也不会有回报。
3. The main business of large Internet companies is toC, not to developers. Investing a lot of resources to maintain these open source projects is not the company's goal, and there will be no return.
4. 优秀的程序员和优秀的开发框架设计者是2个层面的问题，不是说某些互联网大厂的前端技术人员水平不足，而是他们缺少面向开发者设计产品的经验，这种经验需要长期为开发者提供服务的团队才能具备。经验不足者设计的产品不会好用。
4. Excellent programmers and excellent development framework designers are two levels of problems. It is not that the front-end technical personnel of some major Internet companies are insufficient, but that they lack experience in designing products for developers. This experience requires Only a team that provides services to developers for a long time can have it. Products designed by inexperienced people will not work well.
而```DCloud```这家公司就是为开发者而生的，优秀的人才和资源全部是为开发者服务的，产品立项之初广泛调研不同开发者的需求，产品发布后持续迭代，让开发者们使用的更便利。
And ```DCloud``` is a company born for developers. Excellent talents and resources are all for developers. At the beginning of the product project, the needs of different developers are extensively investigated, and the product is continuously iterated after it is released. Make it easier for developers to use.