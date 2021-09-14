### uniCloud和微信小程序云开发、支付宝小程序云开发有何区别？
### What is the difference between uniCloud and WeChat applet cloud development and Alipay applet cloud development?
微信、支付宝、百度的小程序，均提供了云开发。但它们都仅支持自家小程序，无法在其他端使用。
WeChat, Alipay, and Baidu's small programs all provide cloud development. But they only support their own small programs and cannot be used on other ends.
`uniCloud`和微信小程序云开发、支付宝小程序云开发使用相同的基础建设平台，微信小程序云开发背后是腾讯云的TCB团队，支付宝小程序云开发背后是阿里小程序云团队。`uniCloud`是DCloud和阿里小程序云团队、腾讯云的TCB团队直接展开深层次合作，在他们底层资源的基础上进行二次封装，提供的跨端云开发方案。
`uniCloud` uses the same infrastructure platform as WeChat applet cloud development and Alipay applet cloud development. Behind the development of WeChat applet cloud is the TCB team of Tencent Cloud, and behind the development of Alipay applet cloud is the Ali applet cloud team. `uniCloud` is a cross-terminal cloud development solution provided by DCloud, the Alibaba Mini Program Cloud team, and the TCB team of Tencent Cloud.
简单来说，uniCloud和微信小程序云开发、支付宝小程序云开发一样稳定健壮，但有更多优势：
Simply put, uniCloud is as stable and robust as WeChat applet cloud development and Alipay applet cloud development, but has more advantages:
- 跨平台。不管你在uniCloud里选择了阿里还是腾讯的serverless，均可以跨uni-app的全端使用。从pc到h5，从Android到iOS，以及各家小程序快应用，十几个平台全端支持
- Cross-platform. Regardless of whether you choose Ali or Tencent's serverless in uniCloud, you can use it all across uni-apps. From pc to h5, from Android to iOS, as well as various small programs and fast applications, more than a dozen platforms are fully supported
- uniCloud提供了`clientDB`神器，减少90%的服务器开发工作量，且保障数据安全。[详见](/uniCloud/database)
- uniCloud provides the `clientDB` artifact, which reduces the workload of server development by 90% and guarantees data security. [See details](/uniCloud/database)
- uniCloud提供了[uni-id](/uniCloud/uni-id)、[uniPay](/uniCloud/unipay)等重要框架，大幅减少开发者的相应功能开发量。
- uniCloud provides important frameworks such as [uni-id](/uniCloud/uni-id) and [uniPay](/uniCloud/unipay), which greatly reduces the amount of corresponding function development for developers.
- uniCloud提供了[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)，客户端开发工作量大幅减少。
- uniCloud provides [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057), which greatly reduces the workload of client development.
- uniCloud提供了[uniCloud admin](/uniCloud/admin)，管理端开发工作量大幅减少。
- uniCloud provides [uniCloud admin](/uniCloud/admin), which greatly reduces the management-side development workload.
- uniCloud提供了[schema2code](/uniCloud/schema?id=autocode)，只需编制数据库schema文件，用户端和管理端的数据列表、分页、搜索、详情查看、修改、删除，全套代码均能自动生成。
- uniCloud provides [schema2code](/uniCloud/schema?id=autocode), you only need to compile the database schema file, the data list, paging, search, detailed view, modification, and deletion of the client and management side, and the full set of codes can be automatically generated .
- 更易学。uniCloud提供了`JQL`查询语言，比SQL和MongoDB的查询语法更简单易掌握，尤其是联表查询非常简单。[详见](https://uniapp.dcloud.io/uniCloud/database?id=jsquery)
- Easier to learn. uniCloud provides the `JQL` query language, which is simpler and easier to master than the query syntax of SQL and MongoDB, especially the join table query is very simple. [See details](https://uniapp.dcloud.io/uniCloud/database?id=jsquery)
- 更完善的工具链。前端uni-app、云端uniCloud、还有ide端的HBuilderX，互相紧密搭配，打造闭环的优秀开发体验
- A more complete tool chain. Front-end uni-app, cloud uniCloud, and ide-side HBuilderX are closely matched with each other to create an excellent closed-loop development experience
- 更丰富的生态。插件市场有大量现成的轮子和资源 [详见](https://ext.dcloud.net.cn/?cat1=7&orderBy=TotalDownload)
- A richer ecology. There are a large number of ready-made wheels and resources in the plug-in market [see details](https://ext.dcloud.net.cn/?cat1=7&orderBy=TotalDownload)


如果你已经使用过微信小程序云开发，想进一步了解对比差异或如何从微信小程序云迁移到uniCloud，[详见](uniCloud/wx2unicloud.md)
If you have used WeChat applet cloud development and want to know more about the difference or how to migrate from WeChat applet cloud to uniCloud, [see details](uniCloud/wx2unicloud.md)
### uniCloud稳定吗？DCloud服务器异常会影响我的线上业务吗？
### Is uniCloud stable? Will the abnormal DCloud server affect my online business?
`uniCloud`是 DCloud 和阿里云、腾讯云等成熟云厂商合作推出的云服务产品，阿里云、腾讯云等提供云端基础资源，DCloud提供API设计、前端框架、IDE工具支持、管理控制台、插件生态等服务，开发者的云函数直接托管在阿里云等服务商的serverless平台。
`uniCloud` is a cloud service product launched by DCloud in cooperation with mature cloud vendors such as Alibaba Cloud and Tencent Cloud. Alibaba Cloud and Tencent Cloud provide basic cloud resources. DCloud provides API design, front-end framework, IDE tool support, management console, and plug-ins. For services such as ecology, developers’ cloud functions are directly hosted on serverless platforms of service providers such as Alibaba Cloud.
用户终端上的应用在运行时，直连云服务商serverless平台，不会经过DCloud服务器，开发者无需担心因DCloud服务器负载而影响自己业务的问题。
When the application on the user terminal is running, it is directly connected to the serverless platform of the cloud service provider, and does not pass through the DCloud server. Developers do not need to worry about the problem of affecting their business due to the load of the DCloud server.
尤其是腾讯云付费版，享受腾讯云的SLA。如果真出问题，腾讯云会负责赔偿（实际上不太会出现故障）
Especially the paid version of Tencent Cloud enjoys Tencent Cloud’s SLA. If there is a problem, Tencent Cloud will be responsible for compensation (actually it is unlikely to fail)

### 云函数 和 传统 Node.js 开发有何区别？
### What is the difference between cloud function and traditional Node.js development?
云函数相当于 Node.js + Serverless + DCloud改进。
Cloud function is equivalent to Node.js + Serverless + DCloud improvement.
- 传统Node.js开发需要购买服务器，安装Node.js环境，部署 pm2 等守护进程；云函数无需考虑服务器环境，只需专心实现业务代码，然后将云函数一键上传，云服务商负责云函数运行环境的准备。
- Traditional Node.js development requires purchasing a server, installing the Node.js environment, deploying pm2 and other daemons; cloud functions do not need to consider the server environment, only need to concentrate on implementing the business code, and then upload the cloud function with one click, and the cloud service provider is responsible for the cloud Preparation of the function running environment.
- 传统Node.js开发模式，开发者需监控服务器参数，比如硬盘使用率，避免服务器负载过高导致业务中断；云函数模式下，开发者无需关心云函数运行的宿主环境，云厂商会实现服务调配及硬件监控。
- In the traditional Node.js development mode, developers need to monitor server parameters, such as hard disk usage, to avoid business interruption caused by excessive server load; in cloud function mode, developers do not need to care about the host environment where cloud functions run, and cloud vendors will implement services Deployment and hardware monitoring.
- 用户量较大时，传统Node.js开发需考虑购买更多服务器并实现负载均衡；云函数模式下，云服务商自动弹性扩容，开发者无需担心服务器扛不住压力。
- When the number of users is large, traditional Node.js development needs to consider purchasing more servers and achieving load balancing; in the cloud function mode, cloud service providers automatically and elastically expand capacity, and developers do not need to worry about the server being unable to bear the pressure.
- 传统Node.js开发模式，需考虑安全防护，比如DDos攻击；云函数模式，云厂商的API网关会做拦截防护，开发者无需关心，并可节省高防IP等费用
- Traditional Node.js development mode requires security protection, such as DDos attacks; cloud function mode, cloud vendors’ API gateways will do interception protection, developers do not need to care, and can save high-defense IP and other costs
总结一下，前端同学即便可熟练编写Node.js代码，但对于DB优化、弹性扩容、攻击防护、灾备处理等方面还是有经验欠缺的，但`uniCloud`将这些都封装好了，真正做到仅专注业务实现，其它都委托云厂商服务。
To sum up, even if front-end students can write Node.js code proficiently, they still lack experience in DB optimization, elastic expansion, attack protection, disaster recovery, etc., but `uniCloud` encapsulates all of these and really does it. Only focus on business realization, and all other services are entrusted to cloud vendors.
另外，在 Node.js 代码实现上，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合，建议通过云数据库或云存储的方案替代。
In addition, in the implementation of Node.js code, the host environment (which can be simply understood as a virtual machine or server hardware) for each execution of a cloud function may be the same or different. Therefore, part of the information is stored locally in the traditional `Node.js` development. The hard disk or memory solution is no longer suitable, and it is recommended to replace it with a cloud database or cloud storage solution.
当然还有最重要的一点，在uniCloud中，推荐大量业务使用clientDB，一个应用中写不了太多云函数。
Of course, there is the most important point. In uniCloud, clientDB is recommended for a large number of businesses. You cannot write too many cloud functions in one application.

### uniCloud只支持uni-app，怎么开发web界面？
### UniCloud only supports uni-app, how to develop web interface?
uni-app可以开发web界面，详见：[uni-app宽屏适配指南](https://uniapp.dcloud.io/adapt)
uni-app can develop web interface, see: [uni-app widescreen adaptation guide](https://uniapp.dcloud.io/adapt)
如果是需要pc版admin的话，uniCloud提供了[uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)
If you need the PC version of admin, uniCloud provides [uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)
插件市场有很多uniCloud Admin系统可搜索：[https://ext.dcloud.net.cn/search?q=admin&cat1=7&orderBy=UpdatedDate](https://ext.dcloud.net.cn/search?q=admin&cat1=7&orderBy=UpdatedDate)
There are many uniCloud Admin systems in the plug-in market to search: [https://ext.dcloud.net.cn/search?q=admin&cat1=7&orderBy=UpdatedDate](https://ext.dcloud.net.cn/search?q= admin&cat1=7&orderBy=UpdatedDate)
### 可否通过http url方式访问云函数或云数据库？
### Can I access cloud functions or cloud databases through http url?
- 场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
- Scenario 1: For example, WeChat payment on the App side requires a server callback address, and an HTTP URL is required at this time.
- 场景2：非uni-app开发的系统，想要连接uniCloud，读取数据，也需要通过HTTP URL方式访问。
- Scenario 2: A system that is not developed by uni-app. If you want to connect to uniCloud and read data, you also need to access it through an HTTP URL.
uniCloud提供了`云函数URL化`，来满足上述需求。[详见](https://uniapp.dcloud.io/uniCloud/http)
uniCloud provides `Cloud function URLization` to meet the above requirements. [See details](https://uniapp.dcloud.io/uniCloud/http)


### 微信云开发支持客户端直接操作数据库，uniCloud支持吗？
### WeChat Cloud Development supports the client to directly manipulate the database, does uniCloud support it?
uniCloud提供了比微信云开发更优秀的前端操作数据库方案，见：[clientDB](https://uniapp.dcloud.net.cn/uniCloud/database)
uniCloud provides a better front-end operation database solution than WeChat Cloud development, see: [clientDB](https://uniapp.dcloud.net.cn/uniCloud/database)
### 云开发是nodejs+改良版MongoDB组合，对比php+mysql的传统组合怎么样？
### Cloud development is a combination of nodejs+improved version of MongoDB, how does it compare to the traditional combination of php+mysql?
nodejs的性能优于php，MongoDB的性能也优于mysql。
The performance of nodejs is better than that of php, and the performance of MongoDB is also better than that of mysql.
对于前端而言，MongoDB这种类json的文档数据库更加易用，且有更高的灵活性。
For the front end, MongoDB, a json-like document database, is easier to use and has higher flexibility.
操作MongoDB仍然使用js的方法。
The operation of MongoDB still uses the js method.
MongoDB非常灵活，可以对大数据量的表随便增加字段。而mysql的表数据量一旦变大，每增加一个字段，数据库的体积和性能都会造成负面影响。
MongoDB is very flexible and can add fields to tables with large amounts of data at will. Once the mysql table data volume becomes larger, each additional field will have a negative impact on the volume and performance of the database.
MongoDB的字段可以嵌套，表达tree型的数据非常方便，扩展起来随心所欲。
MongoDB's fields can be nested, which is very convenient to express tree-type data and can be expanded as you like.
对于希望增加数据冗余以提高性能的开发者而言，nosql数据库则是利器。
For developers who want to increase data redundancy to improve performance, nosql database is a powerful tool.
当然，对于喜欢传统数据库的开发者而言，仍然可以按传统方式设计数据库表结构。
Of course, for developers who like traditional databases, the database table structure can still be designed in the traditional way.
MongoDB的功能要比mysql强大很多。sql太简单的了，一段sql语句其实就是一个字符串，写不了复杂的逻辑。
MongoDB is much more powerful than mysql. sql is too simple, a sql statement is actually a string, and complex logic cannot be written.
而MongoDB有非常多的js api，各种聚合运算符，它是可编程的，而不是仅靠一段字符串sql语句来表达。
And MongoDB has a lot of js api, various aggregation operators, it is programmable, rather than just relying on a string of SQL statements to express.
举个例子，商品数据表中有4个字段：浏览量、收藏量、购买量、评价。需要生成一个近期热门商品列表，4个字段各占25%的权重，加权后排序。这种需求sql是无法直接实现的。而MongoDB里可以一个查询直接返回排序好的结果。
For example, there are 4 fields in the product data table: pageviews, collections, purchases, and evaluations. A list of recent hot products needs to be generated, with 4 fields each accounting for 25% of the weight, and sorting after weighting. This kind of demand SQL cannot be directly realized. In MongoDB, a query can directly return the sorted results.
SQL的模糊查询也很弱，like只有前后%，导致很多开发者不得不再使用ElastciSearch这些三方数据库。虽然后期版本的mysql也支持有限正则。但MongoDB的正则查询还是超过开发者预期的强大。
SQL's fuzzy query is also very weak, like is only before and after %, causing many developers to use ElastciSearch these third-party databases. Although later versions of mysql also support limited regularization. But MongoDB's regular query is still more powerful than developers expected.
MongoDB虽然强大，但易用性不佳，尤其是聚合运算写起来非常复杂。
Although MongoDB is powerful, it is not easy to use, especially the aggregation operation is very complicated to write.
uniCloud在MongoDB的基础上改良，进一步提供了`DB Schema`和`JQL`。
uniCloud is improved on the basis of MongoDB, and further provides `DB Schema` and `JQL`.
`DB Schema`是一个json文件，可以对数据进行描述、约定字段值域、控制操作权限、描述字段之间的关系，让数据库管理更高效，并且大幅降低了服务端的代码开发工作量。[详见](https://uniapp.dcloud.io/uniCloud/schema)
`DB Schema` is a json file that can describe data, agree on field value ranges, control operation permissions, and describe the relationship between fields, making database management more efficient, and greatly reducing the workload of server-side code development. [See details](https://uniapp.dcloud.io/uniCloud/schema)
`JQL`是一套操作uniCloud数据库的方法，它更符合js开发者的习惯，并且极大的降低了学习成本和代码量。
`JQL` is a set of methods for operating uniCloud database, which is more in line with the habits of js developers, and greatly reduces the cost of learning and the amount of code.
比如联表查询、tree查询，都变的非常简单。像tree查询是以往只有oracle才有的功能。`JQL`文档[详见](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)
For example, join table query and tree query have become very simple. Like tree query is a function that only Oracle has in the past. `JQL` document [see details](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)
曾经DCloud官方也推进过阿里云和腾讯云提供serverless的mysql。但经过对MongoDB的深入研究和改良，DCloud已经放弃了难用的mysql。推荐开发者了解uniCloud的云数据库，用起来更强大和方便。
In the past, DCloud officials also promoted Alibaba Cloud and Tencent Cloud to provide serverless mysql. But after in-depth research and improvement on MongoDB, DCloud has given up the difficult to use mysql. It is recommended that developers understand uniCloud's cloud database, which is more powerful and convenient to use.


### 支持websocket吗？
### Does it support websocket?
websocket的实时特性导致serverless化比较复杂，目前曲线方案有：
The real-time characteristics of websocket make serverlessization more complicated. The current curve schemes include:
1. 如果使用三方sdk服务，比如推送、腾讯或声网等实时音视频方案，由于是连接三方服务器，不是连接uniCloud，这些方案仍然可以继续使用。
1. If you use third-party SDK services, such as push, Tencent, or Shengwang and other real-time audio and video solutions, because you are connecting to a third-party server instead of uniCloud, these solutions can still be used.
2. 一些三方专业的websocket服务也可以使用，比如：[https://ext.dcloud.net.cn/plugin?id=1334](https://ext.dcloud.net.cn/plugin?id=1334)
2. Some third-party professional websocket services are also available, such as: [https://ext.dcloud.net.cn/plugin?id=1334](https://ext.dcloud.net.cn/plugin?id= 1334)
3. 如果是im方面的需求，那么基于uniPush的im服务是非常推荐的选择：[https://ext.dcloud.net.cn/plugin?id=2670](https://ext.dcloud.net.cn/plugin?id=2670)
3. If it is an im requirement, then the im service based on uniPush is a very recommended choice: [https://ext.dcloud.net.cn/plugin?id=2670](https://ext.dcloud.net .cn/plugin?id=2670)
4. 前端轮询获取服务器数据：[https://ext.dcloud.net.cn/plugin?id=2740](https://ext.dcloud.net.cn/plugin?id=2740)
4. Front-end polling to obtain server data: [https://ext.dcloud.net.cn/plugin?id=2740](https://ext.dcloud.net.cn/plugin?id=2740)
### 如何导入老数据库的数据？
### How to import data from the old database?
- 方式1：可以在HBuilderX里用db_init.json来批量创建云数据库和插入表内容，[详见](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e4%bd%bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae%e5%ba%93)
- Method 1: You can use db_init.json in HBuilderX to create cloud databases and insert table contents in batches, [see details](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e4%bd% bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae% e5%ba%93)
- 方式2：阿里云支持在uniCloud web控制台界面直接导入导出数据
- Method 2: Alibaba Cloud supports direct import and export of data on the uniCloud web console interface
- 方式3：在云函数里，使用nodejs标准写法，连接老数据库，如使用mysql的[插件](https://ext.dcloud.net.cn/plugin?id=1925)，把数据读出来，再批量写入云数据库
- Method 3: In the cloud function, use nodejs standard notation to connect to the old database, such as using mysql [plugin](https://ext.dcloud.net.cn/plugin?id=1925) to read out the data, Write to the cloud database in batches
- 方式4：将一个云函数URL化，用其他语言读取老数据库，通过http方式提交到云函数，云函数将接收到的数据存入云数据库
- Method 4: URLize a cloud function, read the old database in other languages, submit it to the cloud function via http, and the cloud function will store the received data in the cloud database


### 云函数访问时快时慢怎么回事？
### Why does the cloud function access fast and slow?
云函数对应的资源，如果长时间不使用，会被阿里云或腾讯云平台从内存中释放。一旦被释放，启动云函数时会有一个冷启动的过程。
The resources corresponding to cloud functions will be released from the memory by Alibaba Cloud or Tencent Cloud if they are not used for a long time. Once released, there will be a cold start process when starting the cloud function.
表现为：隔了很久不用，第一次用就会比较慢，然后立即访问第二次，则很快，毫秒级响应。
The performance is: if it is not used for a long time, the first use will be slower, and then the second time will be accessed immediately, it will be very fast, with a millisecond response.
冷启动的速度一般不会超过1.5秒，如超过1.5秒应该是云函数写的有问题或网络有问题。
The cold start speed generally does not exceed 1.5 seconds. If it exceeds 1.5 seconds, there should be a problem with the writing of the cloud function or a problem with the network.
资源回收策略方面，阿里云是15分钟内没有第二次访问的云函数，就会被回收。腾讯云是半小时。
In terms of resource recycling strategy, Alibaba Cloud is a cloud function that is not accessed for the second time within 15 minutes, and it will be recycled. Tencent Cloud is half an hour.
两家云厂商仍然在优化这个问题。目前如果开发者在意这个问题，给开发者的建议是：
The two cloud vendors are still optimizing this problem. At present, if developers care about this issue, the advice to developers is:
1. 使用clientDB可以减少遇到冷启动问题的概率
1. Using clientDB can reduce the probability of encountering cold start problems
2. 非高频访问的云函数，合并到高频云函数中。有的开发者使用纯单页方式编写云函数，即在一个云函数中通过路由处理实现了整个应用的所有后台逻辑。参考[插件](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)
2. Cloud functions for non-high-frequency access are merged into high-frequency cloud functions. Some developers use a pure single-page method to write cloud functions, that is, in a cloud function, all the background logic of the entire application is realized through routing processing. Reference [plugin](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)
3. 非高频访问的云函数，可以通过定时任务持续运行它（注意腾讯云可以使用这个方式完全避开冷启动，而阿里云的定时任务最短周期大于资源回收周期）
3. Non-high-frequency access cloud functions can be continuously run through timing tasks (note that Tencent Cloud can use this method to completely avoid cold start, while the shortest period of Alibaba Cloud's timing tasks is greater than the resource recovery period)
4. 配置云函数的单实例多并发
4. Configure single instance multiple concurrency of cloud functions

### uniCloud访问速度感觉不如传统服务器？@slow
### UniCloud access speed is not as good as traditional servers? @slow
有开发者在一台单机上安装php或java，连接同电脑的mysql。然后与uniCloud比较速度，认为uniCloud偏慢。这里需要澄清如下差异：
Some developers install php or java on a single computer and connect to mysql on the same computer. Then compare the speed with uniCloud and think that uniCloud is slow. The following differences need to be clarified here:
- 原因1. 冷启动。具体分析见上一问题
- Reason 1. Cold start. See the previous question for specific analysis
- 原因2. 代码和数据库不在一台服务器
- Reason 2. Code and database are not on the same server
在一台单机上安装php或java，同时安装数据库，访问速度确实快。但在使用云数据库时，即数据库是单独的服务器，和运行代码不在一台服务器上时，就会略微造成些延迟。但商业应用的数据库肯定都是独立服务器。
Install php or java on a single machine, and install the database at the same time, the access speed is really fast. But when using a cloud database, that is, the database is a separate server, and the running code is not on the same server, it will cause a slight delay. But the databases for commercial applications are definitely independent servers.
- 原因3. 拦截器
- Reason 3. Interceptor
后端开发的请求一般都有路由管理框架或拦截器，每个请求都要拦截，校验权限。使用这类框架肯定会增加耗时。
Requests for back-end development generally have routing management frameworks or interceptors, and each request must be intercepted to verify permissions. Using this type of framework will definitely increase time-consuming.
clientDB就是这种情况，因为clientDB内部有权限校验系统，某些权限的验证还需要数据库查询。
This is the case for clientDB, because clientDB has a permission verification system inside, and some permission verification also requires database query.
所以虽然clientDB的速度慢一些，但实际上开发者在自己写了路由拦截和权限管理的框架后，速度也一样会下降。
So although the speed of clientDB is slower, in fact, after developers write their own routing interception and permission management framework, the speed will also drop.
从uni-id 3.0起，用户的角色权限缓存在token里，不再查库。clientDB的速度比之前提升了100毫秒左右。如果还未升级，请尽快[升级](https://ext.dcloud.net.cn/plugin?id=2116)。同时注意如果用了uniCloud admin，也要配套升级。如果自己在云函数里编写过相关业务逻辑，请务必阅读升级注意事项。
Starting from uni-id 3.0, the user's role permissions are cached in the token, and the database is no longer checked. The speed of clientDB is about 100 milliseconds faster than before. If you have not upgraded yet, please [upgrade](https://ext.dcloud.net.cn/plugin?id=2116) as soon as possible. At the same time, please note that if you use uniCloud admin, you must upgrade it. If you have written relevant business logic in cloud functions, please be sure to read the upgrade notes.
- 原因4. 数据库索引
- Reason 4. Database index
查询表的索引要正确配置，需要在where里查询的字段都建议配上索引。
The index of the query table must be configured correctly, and the fields that need to be queried in where are recommended to be equipped with an index.


### 发布H5时还得自己找个服务器部署前端网页，可以不用自己再找服务器吗？
### When H5 is released, I still have to find a server to deploy the front-end webpage. Can I find a server by myself?
uniCloud支持[前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting)，并且免费！
uniCloud supports [front-end web hosting](https://uniapp.dcloud.io/uniCloud/hosting), and it’s free!
- 如果你已经有备案过的域名，直接解析过来即可；
- If you already have a registered domain name, just resolve it directly;
- 如果你要新注册域名，备案流程和传统云主机略有不同，涉及一个uniCloud没有固定ip的问题。此时可以去买花生壳的备案服务；也可以临时买一个短期固定ip，走固定ip备案。这里有开发者分享的[经验贴](https://ask.dcloud.net.cn/article/38116)
- If you want to register a new domain name, the registration process is slightly different from that of traditional cloud hosting, which involves a problem that uniCloud does not have a fixed IP. At this time, you can buy the filing service of peanut shells; you can also temporarily buy a short-term fixed ip and go to the fixed ip for filing. Here is the [experience post] shared by the developer(https://ask.dcloud.net.cn/article/38116)
如果是因为微信js sdk等服务要求配置固定ip白名单，那么腾讯云收费空间已经支持固定ip，[详见](https://uniapp.dcloud.io/uniCloud/cf-functions?id=eip)
If it is because services such as WeChat js sdk require the configuration of a fixed IP whitelist, then Tencent Cloud’s charging space already supports fixed IP, [see details](https://uniapp.dcloud.io/uniCloud/cf-functions?id=eip)
### uniCloud云数据库如何实现全文检索
### How uniCloud cloud database realizes full-text search
uniCloud的云数据库本身就是文档型数据库，可以全文检索，无需额外配置ElastciSearch等三方数据库。
UniCloud's cloud database itself is a document database, which can be searched in full text, without the need to configure third-party databases such as ElastciSearch.
查询数据时可以传入正则表达式。相比sql的like只有前后的%，正则表达式要强大的多。详情请参考[正则表达式查询](https://uniapp.dcloud.io/uniCloud/cf-database?id=regexp)
You can pass in regular expressions when querying data. Compared with SQL's "like", which only has% before and after, regular expressions are much more powerful. For details, please refer to [Regular Expression Query](https://uniapp.dcloud.io/uniCloud/cf-database?id=regexp)

### uniCloud内如何使用formdata
### How to use formdata in uniCloud


nodejs本身不支持formdata，但是可以通过手动拼装formdata的方式来进行支持，[参考](https://www.npmjs.com/package/form-data)
nodejs itself does not support formdata, but it can be supported by manually assembling formdata, [Reference](https://www.npmjs.com/package/form-data)
结合`uniCloud.httpclient.request`使用的示例
Example used in conjunction with `uniCloud.httpclient.request`
```js
const FormData = require('form-data');
let form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));

form.append('img', new Buffer(10), {
  filename: `${Date.now()}.png`,
  contentType: 'image/png'
})

uniCloud.httpclient.request('https://example.com',{
  content: form.getBuffer(),
  headers: form.getHeaders()
})
```

### 腾讯、阿里的serverless有什么大案例？
### What are the big cases of Tencent and Alibaba's serverless?

- 微信小程序云开发，已经有50万开发者，包括腾讯自有的很多大日活应用都构建在腾讯云serverless上，如微信生活缴费、乘车码、微信读书、腾讯新闻、腾讯相册等。
- WeChat applet cloud development, there are already 500,000 developers, including many of Tencent's own big daily life applications are built on Tencent Cloud serverless, such as WeChat life payment, ride code, WeChat reading, Tencent News, Tencent Album, etc.
- 2019年双11，阿里部分业务已经迁移在serverless上。支付宝小程序也提供了云开发功能。
- On Double 11 in 2019, part of Ali's business has been migrated to serverless. The Alipay applet also provides cloud development functions.

### 如何控制云函数数量？云函数是否可以按多级目录整理@merge-functions
### How to control the number of cloud functions? Can cloud functions be organized in multi-level directories @merge-functions
不需要控制数量，实际开发中不会突破限制。
There is no need to control the quantity, and the limit will not be broken in actual development.
因为实际开发中会使用框架而不是真的一个一个开发云函数。
Because the framework will be used in actual development instead of developing cloud functions one by one.
1. 使用[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)。这种方式是在前端直接操作数据库，此时一个云函数都不需要写。开发效率远超传统开发模式。包括它配套的action云函数是不占用云函数数量的。
1. Use [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb). In this way, the database is directly operated on the front end, and a cloud function does not need to be written at this time. The development efficiency far exceeds the traditional development model. Including its supporting action cloud function does not occupy the number of cloud functions.
2. 使用[uni-cloud-router单路由云函数框架](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-router)，这种方式只有一个云函数，所有接口都是这个云函数的不同参数，它有统一的路由管理。
2. Use [uni-cloud-router single-route cloud function framework](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-router), this method has only one cloud function, all interfaces are this Different parameters of cloud function, it has unified routing management.
以免费空间的48个云函数举例，一般情况下：
Take 48 cloud functions in free space as an example, in general:
- 后台管理系统使用[uniCloud admin](https://uniapp.dcloud.net.cn/uniCloud/admin)，会自带一个uni-admin的云函数；
- The background management system uses [uniCloud admin](https://uniapp.dcloud.net.cn/uniCloud/admin), which will bring a uni-admin cloud function;
- 前端项目，会有一个[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)配套的user-center云函数。如果和uniCloud admin复用一个服务空间，此云函数也不需要；
- For the front-end project, there will be a [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) supporting user-center cloud function. If you reuse a service space with uniCloud admin, this cloud function is not needed either;
- 如果有热搜词统计跑批，[uni-search](https://ext.dcloud.net.cn/plugin?id=3851)配套一个云函数uni-analyse-searchhot；
- If there is a running batch of popular search terms, [uni-search](https://ext.dcloud.net.cn/plugin?id=3851) is equipped with a cloud function uni-analyse-searchhot;
上述几个是官方推荐的几个常用框架所带的云函数，然后开发者自己的代码里，大多数业务使用clientDB开发，不写云函数，或者写了配套的action云函数也不占用云函数数量；如果还需要自己写一些云函数，再加上uni-cloud-router，用这个单路由云函数搞定剩余需求；另外如果有跑批数据的需求可以再来一个云函数。所以无论如何48个云函数都占不满。
The above are the cloud functions that are officially recommended by several commonly used frameworks. Then, in the developer's own code, most businesses are developed using clientDB, without writing cloud functions, or writing supporting action cloud functions without occupying cloud functions. Quantity; if you still need to write some cloud functions yourself, plus uni-cloud-router, use this single-route cloud function to handle the remaining demand; in addition, if you need to run batch data, you can add another cloud function. So anyway, 48 cloud functions are dissatisfied.
uniCloud的每个云函数是一个独立进程，不存在云函数级别的多级目录概念。
Each cloud function of uniCloud is an independent process, and there is no concept of multi-level directory of cloud function level.
每个云函数下可以有子目录，但它们都属于这个云函数的一部分，而不是另一个云函数。
Each cloud function can have subdirectories, but they all belong to this cloud function, not another cloud function.
单路由云函数框架不止是官方提供的uni-cloud-router，插件市场有很多类似框架：[详见](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=TotalDownload)
The single-route cloud function framework is not only the official uni-cloud-router, but there are many similar frameworks in the plug-in market: [See details](https://ext.dcloud.net.cn/search?q=%E8%B7%AF %E7%94%B1&cat1=7&orderBy=TotalDownload)

### 海外用户访问比较慢怎么办
### What to do if overseas users visit slowly
国外用户需要使用全球加速。uniCloud服务商为阿里云时支持配置全球加速，步骤如下：
Foreign users need to use global acceleration. When the uniCloud service provider is Alibaba Cloud, it supports configuring global acceleration. The steps are as follows:
1. 参考[阿里云全球加速](https://help.aliyun.com/document_detail/153198.html)文档，开通服务并对`自有域名`进行加速
1. Refer to the [Aliyun Global Acceleration](https://help.aliyun.com/document_detail/153198.html) document to activate the service and accelerate the `own domain name`
2. 将上述域名CNAME到`api.bspapp.com`
2. CNAME the above domain name to `api.bspapp.com`
3. [自行初始化uniCloud](uniCloud/init.md)传入endpoint参数，其值为开通全球加速的自有域名
3. [Initialize uniCloud by yourself](uniCloud/init.md) Pass in the endpoint parameter, the value of which is your own domain name for global acceleration
### 腾讯云提示当前实名主体已经有三个账号怎么办
### What if Tencent Cloud prompts that the current real-name entity already has three accounts?
开通腾讯云服务空间时实名认证提示实名主体已有三个账号，这往往是开发者在微信小程序开发工具里不小心开通了多个免费的小程序云，此时可以参考以下流程注销不用的账号：
The real-name authentication prompts that the real-name entity has three accounts when opening the Tencent Cloud service space. This is often caused by the developer accidentally opening multiple free applet clouds in the WeChat applet development tool. At this time, you can refer to the following process to log off unused accounts :
1. 打开[腾讯云找回账号](https://cloud.tencent.com/services/forgotAccount)页面
1. Open the [Tencent Cloud Retrieve Account](https://cloud.tencent.com/services/forgotAccount) page
2. 选择找回账号方式为实名信息
2. Choose the real-name information to retrieve the account
3. 操作完成之后可以看到自己实名信息对应的全部腾讯云账号
3. After the operation is completed, you can see all Tencent Cloud accounts corresponding to your real-name information
4. 选择不使用的账号登录之后注销即可，参考文档：[注销腾讯云账号](https://cloud.tencent.com/document/product/378/30253)
4. Choose an account you don’t want to log in and log out. Refer to the document: [Logout Tencent Cloud Account](https://cloud.tencent.com/document/product/378/30253)
同时，如果付费购买腾讯云服务空间，每个账号可以最多拥有50个腾讯云服务空间（注意其中仅有一个享受免费额度）。
At the same time, if you pay for Tencent Cloud service space, each account can have up to 50 Tencent Cloud service spaces (note that only one of them enjoys a free quota).

### 高并发下简单的防止超卖
### Simple prevention of oversold under high concurrency

高并发时很多用户同时对一条数据读写，很容易造成数据混乱，表现在秒杀抢购等场景就是超卖。以秒杀为例，开发者可以从扣除库存这步入手对超卖进行很大程度的限制，下面是一个简单的示例
When high concurrency, many users read and write a piece of data at the same time, which can easily cause data confusion, which is oversold in scenarios such as flash sales. Take seckill as an example. Developers can start by deducting inventory to limit oversold to a large extent. Here is a simple example
```js
// 云函数
// Cloud function
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async function(event){
  const transaction = await db.startTransaction()
  // 其他业务逻辑...
  // Other business logic...
  // 库存减一
  // Inventory minus one
  const reduceRes = await db.collection('goods').where({
    _id: 'goods_id', 
	// 商品ID
	// Commodity ID
    stock: dbCmd.gt(1) 
	// 限制库存大于1的才允许扣除库存
	// Restrict inventory greater than 1 to allow inventory deduction
  }).update({
    stock: dbCmd.inc(-1)
  })
  if(reduceRes.updated === 0) { 
	  // 如果没成功更新库存就认为下单失败
	  // If the inventory is not updated successfully, the order is considered failed
    await transaction.rollback()
    return {
      code: 1001,
      message: '下单失败(Order failed)'
    }
  }
}
```


### 云存储、数据库还没有使用就多了几次
### Cloud storage and database have not been used several times
关于云存储：这里的读写次数，并不一定是针对文件的：包括：上传文件、修改Policy、修改ACL、修改CORS 等操作，都会被认为是COS写。环境初始化时也会执行很多次初始化操作，写入 policy/acl/cors 等配置信息。用户每次操作 修改安全域名、修改静态域名等，也会触发 CORS 的写入。
Regarding cloud storage: The number of reads and writes here is not necessarily specific to files: including: uploading files, modifying Policy, modifying ACL, modifying CORS, etc., are all considered to be COS writes. Many initialization operations are also performed when the environment is initialized, and configuration information such as policy/acl/cors is written. Every time the user operates to modify the secure domain name, modify the static domain name, etc., it will also trigger the writing of CORS.
关于数据库：开发者通过uniCloud web控制台访问数据库也会增加少量读写次数
About the database: Developers accessing the database through the uniCloud web console will also increase the number of reads and writes.
### 部署网站到前端网页托管报“The requested file was not found on this server.”
### Deploy the website to the front-end web hosting report "The requested file was not found on this server."
- 部署history模式的uni-app项目时，如果未修改前端网页托管的配置，直接访问子页面时就会遇到上面的错误。如何配置请参考[部署uni-app项目](uniCloud/hosting.md?id=host-uni-app)
- When deploying a uni-app project in history mode, if the front-end web hosting configuration is not modified, the above error will be encountered when directly accessing the sub-page. For how to configure, please refer to [Deploy uni-app project](uniCloud/hosting.md?id=host-uni-app)
### 使用腾讯云报未登录Cloudbase
### Use Tencent Cloud to log in to Cloudbase
腾讯云会在本地storage存储一些信息，请不要在应用使用过程中使用clearStorage等接口直接删除storage。
Tencent Cloud will store some information in the local storage. Please do not use interfaces such as clearStorage to directly delete the storage during application use.

### 阿里云前端网页托管域名报错指引@ali-hosting-domain
### Alibaba Cloud front-end web hosting domain name error guidelines @ali-hosting-domain
1. 错误信息：`该域名已经被添加过，不能重复添加`
1. Error message: `The domain name has already been added and cannot be added again`
  前端网页托管会和阿里云上其他的CDN业务（包括但不限于CDN）冲突，如需绑定到前端网页托管请先将此域名与其他业务解除关联。
  Front-end web hosting will conflict with other CDN services (including but not limited to CDN) on Alibaba Cloud. If you need to bind to front-end web hosting, please disassociate this domain name from other services first.
2. 错误信息：`The root domain of your domain is reserved by another account`
2. Error message: `The root domain of your domain is reserved by another account`
  当前域名有在阿里云开通全站加速相关业务（可能配置了泛域名加速），与前端网页托管冲突。可以考虑使用三级域名或去除泛域名加速改为单独配置需要加速的域名。
  The current domain name has a site-wide acceleration related business (may be configured with pan-domain name acceleration) in Alibaba Cloud, which conflicts with front-end web hosting. You can consider using a third-level domain name or removing the pan-domain name acceleration and changing to a separate configuration of the domain name that needs to be accelerated.

### 授权其他用户访问服务空间@collaborator
### Authorize other users to access the service space @collaborator
开发期间经常需要多人共用同一个服务空间，此时可以在[DCloud开发者中心](https://dev.dcloud.net.cn/)将特定应用及其关联的服务空间共享给协作者，详细步骤如下
During development, it is often necessary for multiple people to share the same service space. At this time, you can share a specific application and its associated service space with collaborators in [DCloud Developer Center](https://dev.dcloud.net.cn/), The detailed steps are as follows
1. 在开发者中心`我创建的应用`列表页面选择特定的应用，如果应用过多可以使用AppId进行查找
1. Select a specific application on the list page of `Apps I Created` in the Developer Center. If there are too many applications, you can use AppId to find them
  ![我创建的应用](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/865a0df3-3169-48df-8b4c-8acacf1a621f.jpg)
  ![The application I created](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/865a0df3-3169-48df-8b4c-8acacf1a621f.jpg)
2. 在第一步选择的应用详情页面左侧菜单点击`项目成员管理`
2. On the left menu of the application details page selected in the first step, click `Project Member Management`
3. 输入协作者邮箱并点击`添加协作者按钮`，下方会出现协作者权限配置界面
3. Enter the collaborator’s mailbox and click the `Add collaborator button`, the collaborator permission configuration interface will appear below
  ![项目成员管理](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2e59ce9b-f202-4432-954c-d6182187ef94.jpg)
  ![Project Member Management](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/2e59ce9b-f202-4432-954c-d6182187ef94.jpg)
4. 勾选uniCloud并点击`设置授权服务空间`，在弹出界面勾选希望此协作者访问的服务空间
4. Check uniCloud and click `Set Authorized Service Space`, and check the service space that you want this collaborator to access in the pop-up interface
  ![设置授权服务空间](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b3c234a7-e514-4b14-b33d-e7322130bd7d.jpg)
  ![Set Authorized Service Space](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b3c234a7-e514-4b14-b33d-e7322130bd7d.jpg)
5. 点击第4步弹出界面的`保存按钮`以及第3步的`保存权限设置`按钮
5. Click the `Save button` on the pop-up interface in step 4 and the `Save permission settings` button in step 3
6. 协作者如需在uni-app项目关联此服务空间，需要在项目的`manifest.json`内配置上共享的应用的AppId（需要在源码视图编辑manifest.json）
6. If collaborators need to associate this service space in the uni-app project, they need to configure the AppId of the shared application in the `manifest.json` of the project (you need to edit the manifest.json in the source view)

### 如何使用promise/async/await@promise
### How to use promise/async/await@promise

uniCloud客户端callFunction及数据库相关接口会返回Promise类型结果，请参考以下写法使用：
UniCloud client callFunction and database related interfaces will return Promise type results, please refer to the following writing methods:
```html
// index.vue
<template>
  <view class="content">
    <button type="default" @click="testThen">promise+then</button>
    <button type="default" @click="testAwait">async+await</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      testThen() {
        uniCloud.callFunction({
          name: 'test'
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.error(err)
        })
      },
      async testAwait() {
        const res = await uniCloud.callFunction({
          name: 'test'
        })
        console.log(res)

        // 如需捕获错误需使用如下写法
		// If you want to catch errors, you need to use the following writing
        // try {
        //   const res = await uniCloud.callFunction({
        //     name: 'test'
        //   })
        //   console.log(res)
        // } catch (err) {
        //   console.error(err)
        // }

      }
    }
  }
</script>

<style>
</style>
```

### 常见数据库错误
### Common database errors

**`operation exceeded time limit`、`云数据库执行时间超限`错误**
**`operation exceeded time limit`, `cloud database execution time limit` error**
此错误一般由数据库操作超时引发，具体如何优化请参考：[性能优化](db-performance.md)
This error is generally caused by database operation timeout. For details on how to optimize, please refer to: [Performance Optimization](db-performance.md)
**使用事务时出现`WriteConflict`错误**
**`WriteConflict` error when using transaction**
事务的执行会锁行，同时执行的不同事务在操作同一行数据是会存在冲突导致写入失败。尽量优化流程，避免事务互相冲突
The execution of the transaction will lock the row, and different transactions that are executed at the same time will conflict with the same row of data and cause the write to fail. Try to optimize the process to avoid conflicts between transactions