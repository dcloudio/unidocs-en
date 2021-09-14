注：本更新日志仅限uniCloud，包括uniCloud web控制台、uniCloud 云端运行环境。这些更新不跟随HBuilderX发版更新。
Note: This update log is limited to uniCloud, including uniCloud web console and uniCloud cloud operating environment. These updates do not follow the HBuilderX release update.
#### 2021-08-01
  + 云数据库 新增 updateAndReturn 方法，可以更新并返回更新后的值（仅可在云函数中使用） [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update-and-return)
  + Cloud database adds the updateAndReturn method, which can update and return the updated value (only available in cloud functions) [details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update -and-return)
  + uniCloud本地调试插件 修复 部分情况下项目启动时报 npm 安装失败的Bug
  + uniCloud local debugging plug-in fixes the bug that the npm installation fails when the project is started in some cases
  + uni-id 新增 多系统（如管理端、用户端）的配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id adds configuration isolation for multiple systems (such as management end and user end) [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id 新增 多系统用户管理，如某账户只能登录管理端，不能登录用户端 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
  + uni-id adds new system user management. For example, an account can only log in to the management terminal, but not to the user terminal. [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate- user)
	* 此版本升级需要开发者处理历史用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
    * This version upgrade requires developers to process historical user data, please refer to [Complete the user dcloud_appid field](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
  + uni-id 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id added QQ login and registration related functions [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
  + uni-id adjustment no longer supports direct binding without verification code when binding mobile phones and emails
#### 2021-07-07
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.md?id=runtime)
  + [Important] Cloud function support select nodejs version when creating [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.md?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + New content security public module, including image pornography, text content violation detection, free and fully available [details](https://ext.dcloud.net.cn/plugin?id=5460)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + The new multiSend interface for clientDB is used to combine multiple clientDB networking requests into one networking [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + The unicloud-db component and API add the getTemp interface for use in multiSend [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + uni-id 调整 3.1.1版本发布，使用兼容uniCloud响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uni-id adjustment 3.1.1 version released, using the new error code format compatible with uniCloud response body specification [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud local debugging plug-in fixes the bug of MaxListenersExceededWarning in some cases
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + uniCloud local debugging plug-in Fix the bug that the modification cannot take effect in real time when the soft chain of the file outside the project exists in the project
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + JQL database management fixes the bug that the database operation does not respond in some cases
  + 客户端SDK 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
  + The client SDK fixes the bug that the nvue page cannot trigger callbacks such as db.on('error') and db.on('refreshToken') registered in App.vue


#### 2021-07-06
  + web控制台 新增 违规文件列表
  + Web console added a list of illegal files
  + web控制台 修复 云存储删除文件总数不变的Bug
  + web console fixes the bug that the total number of deleted files in cloud storage does not change
  + web控制台 调整 云函数日志默认查询开始时间为2小时前
  + Web console adjustment The default query start time of cloud function logs is 2 hours ago
  + web控制台 腾讯云 新增 数据库导入、导出
  + web console Tencent Cloud new database import and export
  + web控制台 腾讯云 新增 前端网页托管可开启HTTP强制跳转HTTPS
  + web console Tencent Cloud New front-end web hosting can open HTTP forced redirect HTTPS
  + web控制台 腾讯云 新增 云函数url化允许 / 作为触发路径
  + Web console Tencent Cloud added cloud function urlization allowed / as the trigger path
  + web控制台 阿里云 新增 前端网页托管域名归属验证
  + web console Alibaba Cloud new front-end web hosting domain name attribution verification
#### 2021-06-23
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + Added uniCloud response body specification to facilitate unified processing and internationalization by front-end interceptors [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + Client add Add interceptor, remove interceptor API [details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17-alpha 引出的 db.on("error") 回调不执行的Bug
  + Client fixes the bug that the db.on("error") callback is not executed due to HBuilderX 3.1.17-alpha
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + Client fixes the bug that uniCloud and Tencent Cloud report errors in leftWindow and topWindow [details](https://ask.dcloud.net.cn/question/125039)
  + DB Schema 调整 enum 属性最大可枚举500条数据
  + DB Schema adjusts the enum attribute to enumerate up to 500 data


#### 2021-06-03
  + 修复 HBuilderX 3.1.16 引出的未关联服务空间时无法获取 uniCloud.mixinDatacom 的Bug
  + Fix the bug that uniCloud.mixinDatacom cannot be obtained when the service space is not associated with HBuilderX 3.1.16
  + 修复 HBuilderX 3.1.16 引出的某些情况下关联腾讯云服务空间的项目运行报错的Bug
  + Fix the bug that HBuilderX 3.1.16 leads to an error in the operation of the project associated with Tencent Cloud Service Space in some cases
  + uniCloud本地调试插件 修复 HBuilderX 3.1.16 引出的云函数日志内的文件链接点击无法跳转到对应文件的Bug
  + uniCloud local debugging plug-in Fixes the bug that the file link in the cloud function log exported by HBuilderX 3.1.16 cannot jump to the corresponding file when clicked
#### 2021-05-26
  + clientDB 新增 使用副表 foreignKey 进行联表查询时增加 _value 用于存储主表关联字段原始值 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB adds _value to store the original value of the associated fields of the primary table when using the foreignKey of the secondary table for joint table query [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign -key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + clientDB fixes the bug that action.after will be executed repeatedly in some cases
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
  + JQL data management fix the bug that the schema cannot be found when using the cloud schema [details](https://ask.dcloud.net.cn/question/123285)
  + web控制台 腾讯云 调整 云函数超时时间最大可配置为900秒
  + Web console Tencent Cloud adjust the cloud function timeout time can be configured to a maximum of 900 seconds
#### 2021-05-25
  + web控制台 腾讯云 调整 云函数Url化需要配置CNAME为腾讯云给定的域名，此前配置为默认域名 [详情](https://uniapp.dcloud.net.cn/uniCloud/http)
  + web console Tencent Cloud adjustment Urlization of cloud functions requires configuration of CNAME as the domain name given by Tencent Cloud, which was previously configured as the default domain name [details](https://uniapp.dcloud.net.cn/uniCloud/http)


#### 2021-05-18
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + [Important] Added uni-starter integrated cloud integrated project template with common functions of commercial project development [details](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + clientDB fixes the bug affected by field permissions when deleting records and counting records [details](https://ask.dcloud.net.cn/question/122846)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB fixes the bug of date type (date) data verification error [details](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + clientDB fixes the bug that the print log in action and validateFunction cannot be viewed in the web console
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
  + unicloud-db component fixes the problem that the remove method cannot be called when querying the table [details](https://ask.dcloud.net.cn/question/122934)
#### 2021-04-30
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] ClientDB table query strategy adjustment, please refer to this document for troubleshooting and adjustment: [clientDB table query strategy adjustment](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB added new table query to support the foreignKey joint check of the secondary table, that is, the foreignKey of the secondary table field points to the main table, and the data of the secondary table is hung under the main table [details](https://uniapp.dcloud.net.cn/uniCloud /clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
  + uniCloud local debugging plug-in fixes the bug that multiple requests and errors are reported when Alibaba Cloud occasionally starts up


#### 2021-04-16
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + [Important] ClientDB table query strategy adjustment, please refer to this document for troubleshooting and adjustment: [clientDB table query strategy adjustment](https://ask.dcloud.net.cn/article/38966)
  + unicloud-db组件 新增 loadtime 属性，替代 manual 属性 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + The unicloud-db component adds the loadtime attribute instead of the manual attribute [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db组件 新增 foreignKey 属性，用于存在多个foreignKey关系时指定要使用的foreignKey [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + The new foreignKey attribute of unicloud-db component is used to specify the foreignKey to be used when there are multiple foreignKey relationships [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key )
  + uniCloud.mixinDataCom 新增 foreignKey 属性，用途同上 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uniCloud.mixinDataCom added foreignKey attribute, same as above [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uni-id 修复 3.0.7 版本引出的多个用户访问时可能出现30201报错的Bug
  + uni-id fixes the bug that the 30201 error may appear when multiple users access the 3.0.7 version
  + uni-id 新增 bindMobile 接口支持通过一键登录的方式绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id added the bindMobile interface to support binding via one-click login [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id 调整 bindTokenToDevice 选项默认值改为 false，即默认不再与设备绑定，方便多设备登录
  + uni-id adjustment The default value of the bindTokenToDevice option is changed to false, that is, it is no longer bound to the device by default, which is convenient for multi-device login
  + 修复 uniCloud.chooseAndUploadFile 在iOS微信小程序真机无法唤起选择文件的Bug
  + Fixed the bug that uniCloud.chooseAndUploadFile could not evoke the selection of files on the real device of the iOS WeChat applet
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uniCloud admin optimizes many details such as error prompts and keyboard responses, and updates many dependencies such as uni-id [details](https://ext.dcloud.net.cn/plugin?id=3268)
#### 2021-04-07
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + Added [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center), which provides simple, easy-to-use, unified App management, App version management, installation package release management, and upgrade Detection and update management.
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + uniCloud local debugging plug-in Fixes the bug that Tencent Cloud connects to the local cloud function derived from version 3.1.5 reports an error after running for a period of time [details](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + Alibaba Cloud added support for setting single instance concurrency for cloud functions [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)
  + Alibaba Cloud added support for TTL index [details](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)


#### 2021-03-16
  + unicloud-db组件 add、update、remove方法新增可选参数needConfirm、needLoading、loadingTitle [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + Add optional parameters needConfirm, needLoading, loadingTitle for unicloud-db component add, update, remove methods [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + unicloud-db组件 新增 load 事件支持 pagination [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + unicloud-db component adds load event support pagination [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题
  + DB Schema fixes the problem that the default verification prompt of exclusiveMinimum|exclusiveMaximum is inaccurate
  + uniCloud本地调试插件 修复 公共模块修改之后无法立即生效的Bug
  + uniCloud local debugging plug-in fixes the bug that cannot take effect immediately after public module modification
  + schema2code 新增 导出 uni_modules
  + schema2code added export uni_modules
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code fixes the problem that the attribute file-extname type of the uni-file-picker component is incorrectly generated
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + Optimized schema2code Export the batch delete logic of the admin list page, disable the batch delete button when there is no selection
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
  + schema2code optimization The generated front-end list page, adding the no data prompt "no more data"
#### 2021-03-05
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题（重新保存schema后生效）
  + DB Schema fixes the problem that the default verification prompt of exclusiveMinimum|exclusiveMaximum is inaccurate (to take effect after resaving the schema)
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
  + schema2code optimization The generated front-end list page, adding the no data prompt "no more data"

#### 2021-03-04
  + schema2code 新增 导出 uni_modules
  + schema2code added export uni_modules
  + schema2code 调整 导出 components 目录为 uni_modules 结构
  + schema2code adjustment export components directory to uni_modules structure
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + Optimized schema2code Export the batch delete logic of the admin list page, disable the batch delete button when there is no selection
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code fixes the problem that the attribute file-extname type of the uni-file-picker component is incorrectly generated
#### 2021-03-03
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB fixes the bug of database operation method in error reporting
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB fixes the bug of abnormal performance of jql non-operation
  + clientDB 优化 部分场景下getCount性能
  + clientDB optimization getCount performance in some scenarios
  + clientDB 优化 部分场景下jql联表查询性能
  + clientDB optimization jql join table query performance in some scenarios
#### 2021-02-04
  + 修复 uniCloud.getCurrentUserInfo 报错的Bug
  + Fix the bug of uniCloud.getCurrentUserInfo reporting errors

#### 2021-02-02
  + 【重要】客户端 新增 uniCloud.mixinDatacom 混入，方便快速开发datacom组件，无需自行处理云数据绑定 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + [Important] The client side adds uniCloud.mixinDatacom mixin, which facilitates rapid development of datacom components without having to deal with cloud data binding by yourself. [Details](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 客户端 新增 uniCloud.chooseAndUploadFile API，选文件后直接上传到uniCloud云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + Clients new uniCloud.chooseAndUploadFile API, after the election upload files directly to cloud storage uniCloud [Details] (https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + 【重要】uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + [Important] uni-id adds the default cache role permissions in the token, and the cloud obtains role permissions without checking the database, improving the performance of clientDB [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id ?id=cachepermissionintoken)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + Uni-id added support for Apple Login [Details] (https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 客户端获取用户信息接口，包括权限角色 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + Uni-id new client interfaces for user information, including permission roles [Details] (https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + 云函数 新增 获取客户端标识 deviceId [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + Cloud function obtaining new client identification deviceId [Details] (https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + 阿里云 新增 云函数支持 uploadFile 接口（本地调试暂不支持）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + Ali cloud cloud + new function supports uploadFile interfaces (local debugging is not supported) [Details] (https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + 阿里云 新增 云数据库 add update 可以传入日期对象
  + Ali cloud cloud database add update new date object can be passed
  + 阿里云 新增 getTempFileURL 接口（仅为抹平和腾讯云的接口差异）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + Alibaba Cloud added the getTempFileURL interface (just to smooth out the interface difference between Tencent Cloud and Tencent Cloud) [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + web控制台 阿里云 新增 慢查询日志，有助于分析数据库设计缺陷
  + Web console Alibaba Cloud added slow query log, which helps analyze database design defects
  + uniCloud本地调试插件 新增 支持 uni_modules
  + UniCloud local debugging plug-ins add support uni_modules
  + uniCloud本地调试插件 修复 cli 项目无法使用 uniCloud 本地调试的Bug
  + UniCloud local debugging plug-cli restoration project can not use the Bug uniCloud local debugging
  + uniCloud本地调试插件 修复 客户端连接本地云函数时云函数内 callFunction 返回格式不正确的Bug
  + UniCloud local debugging plug-cli restoration project can not use the Bug uniCloud local debugging  + UniCloud local debugging plug repair callFunction cloud client function to connect the local cloud function returns an incorrect format Bug
  + DB Schema 字段类型bsonType 新增 file、date类型 [详情](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema field type bsonType new file, date type [Details] (https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema 字段类型bsonType 为 array 时，新增 arrayType 子类型，描述数组里项目的类型。比如 arrayType 设为 file，表示一组文件 [详见](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema field type is bsonType array, arrayType new subtype, describe the type of array projects. For example arrayType set to file, represents a group of files [see] (https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema 新增 count 权限 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema Add count authority [Details] (https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema 新增 validateFunction 配置是否在客户端生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + DB Schema new validateFunction configure whether the client into force [Details] (https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + clientDB 新增 数据库运算符，可在 where、field、groupBy、groupField 以及 DB Schema 的 fieldRules 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + ClientDB new database operator, using [Details] in where, field, groupBy, groupField and DB Schema of fieldRules (https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB 新增 支持 groupBy 对数据进行分组统计 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + ClientDB groupBy Added support to group the data statistics [Details] (https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB 新增 支持 distinct 对数据进行去重 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct) 
  + ClientDB Added support distinct data de-duplication [Details] (https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB 修复 JQL 写法内使用下标访问数组内的元素报错的Bug
  + clientDB fixes the bug of using subscripts to access elements in the array in JQL writing
  + unicloud-db组件 add、update 方法支持调用 action云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + Unicloud-db components add, update calls the action method to support cloud function [Details] (https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + schema2code 新增 生成前端页面时补充list.vue、detail.vue页面
  + Supplement list.vue, detail.vue page when schema2code new generation of front page
  + schema2code 调整 之前的 component 改名为 componentForEdit，并新增 componentForShow 。一个字段可以分别控制它在表单页面（add、edit）和展示页面（list、detail）所使用的组件
  + Before schema2code adjustment component renamed componentForEdit, and add componentForShow. A field control component may be used in its form page (add, edit) and display page (list, detail) respectively
  + schema2code 新增 展示页面可直接显示bool值为√或×，显示DB Schema里enum的text内容。
  + Schema2code new display page can be directly displayed or bool value √ ×, displaying text in the content DB Schema of enum.


#### 2021-02-01
  + web控制台 新增 云数据库慢查询日志，帮助开发者优化数据库查询性能，仅阿里云支持
  + web console Added slow query log of cloud database to help developers optimize database query performance, only supported by Alibaba Cloud
#### 2021-01-09
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema added support to configure trim for string type data, which can automatically remove blank characters before and after the string [details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema fixes bugs reported by enum in some cases
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + DB Schema fixes the bug that exclusiveMinimum and exclusiveMaximum are invalid
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB fixes a bug that caused an error when using startWith when querying the tree structure.
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB fixed a bug where multiple right curly braces appeared consecutively when using JQL table query syntax in the field, which caused an error to be reported
  + clientDB 修复 field 中包含`-`时报错的Bug
  + clientDB fixes the bug when the field contains `-`
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + uniCloud local debugging plugin fixed a bug that caused local debugging service to crash in some logs
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db component supports tree query, new attributes gettree, startwith, limitlevel [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)

#### 2021-01-08
  + web控制台 新增 协作者可访问被授权的空间 
  + web console added, collaborators can access authorized spaces
  + web控制台 新增 云函数批量删除
  + Web console add cloud function batch delete
  + web控制台 新增 数据表批量删除
  + web console added new data table batch deletion
  + web控制台 新增 公共模块批量删除
  + Web console added new public module batch deletion
  + web控制台 新增  action 批量删除
  + Web console adds new actions to delete in batches
#### 2020-12-30
  + uniCloud本地调试插件 修复 调试时较早请求云函数且无法连接本地调试服务时报错的Bug
  + uniCloud local debugging plug-in fixes the bug that an error was reported when the cloud function was requested earlier during debugging and the local debugging service could not be connected
  + uniCloud本地调试插件 修复 部分日志格式错误的Bug
  + uniCloud local debugging plug-in fixes the bug of some log format errors
  + uniCloud本地调试插件 修复 本地云函数向云数据库插入值为 null 的字段会报错的Bug
  + uniCloud local debugging plug-in fixes the bug that the local cloud function will report an error when inserting a null field into the cloud database
  + uniCloud本地调试插件 调整 输出调整复杂类型时调整最大展示层级为20级
  + uniCloud local debugging plug-in adjustment adjust the maximum display level to 20 when the output is adjusted for complex types


#### 2020-12-28
  + clientDB API 新增 树形数据查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
  + ClientDB API adds tree data query [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
#### 2020-12-25
  + clientDB 新增 数据库错误 error 事件 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + ClientDB added database error error event [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + clientDB 调整 refreshToken 事件由 db.auth 移至 db ，旧写法仍兼容 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + ClientDB adjusted refreshToken event moved from db.auth to db, the old writing is still compatible [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + uniCloud本地调试插件 修复 本地运行云函数运行结果显示不全的Bug
  + uniCloud local debugging plug-in fixes the bug that the running results of running cloud functions locally are incompletely displayed
#### 2020-12-23
  + uniCloud本地调试插件 修复 windows 平台未打印输出对应的文件名和行号的Bug
  + uniCloud local debugging plug-in Fix the bug that the corresponding file name and line number are not printed out on the windows platform
  + uniCloud本地调试插件 优化 多参数的 console.log 输出展现
  + uniCloud local debugging plug-in optimized multi-parameter console.log output display

#### 2020-12-19
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + [Important] Adjust the front-end built-in `<unicloud-db>` component, no need to manually introduce the [clientDB component plug-in](https://ext.dcloud.net.cn/plugin?id=3256) [Specifications] ](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + [Important] Added uniCloud local service. Support front-end project to switch to cloud environment or local service in the console. Local modifications take effect directly, and can be combined without uploading. [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + [Important] Added uniCloud local service. Support front-end project to switch to cloud environment or local service in the console. Local modifications take effect directly, and can be combined without uploading. [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)  + [Important] Adjust the directory structure of the uniCloud project. The root directory is the uniCloud directory, and there are secondary directories cloudfunctions and database under it. The database directory stores the data table schema and extended verification functions. And provides a directory structure migration guide [details](https://ask.dcloud.net.cn/article/38028)
  + 【重要】新增 HBuilderX 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + [Important] Added HBuilderX to write DB Schema locally, that is, the table structure of the data table. Support new, upload, download table structure, support code prompt.
  + 【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率 
  + [Important] Added `<unicloud-db>` component (the previous clientDB component) to support code hints. JQL syntax can be prompted, and the database table name field can be prompted when there is a local schema. Significantly improve development efficiency
  + HBuilderX 新增 编写 validateFunction，即数据库扩展校验函数。支持新建、上传、下载validateFunction
  + HBuilderX adds validateFunction, which is the database extension validation function. Support new, upload and download validateFunction
  + HBuilderX 优化 uniCloud 关联云服务空间的选择方式。并支持关联其它项目服务空间，实现多个项目连接一个服务空间 [详情](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX optimizes the selection method of uniCloud's associated cloud service space. And support to associate with other project service spaces to realize multiple projects to connect to one service space [details](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX 新增 可视化管理公共模块依赖 （对云函数点右键->管理公共模块依赖）
  + HBuilderX added a new visual management of public module dependencies (right-click on the cloud function -> manage public module dependencies)
  + HBuilderX 优化 上传uni-id公共模块时，增加校验，对比配置密钥是否一致
  + HBuilderX optimization When uploading uni-id public modules, add verification to compare whether the configuration keys are consistent
  + HBuilderX 修复 云函数本地运行 控制台日志打印`null`和`undefined`值错误的Bug
  + HBuilderX fixes the bug that the console log prints the wrong values ​​of `null` and `undefined` when running cloud functions locally
  + HBuilderX 修复 前端网页托管 某些情况下，上传网站到服务器，控制台显示(0 MB)大于上传限制(0 MB)的Bug [详情](https://ask.dcloud.net.cn/question/111228)
  + HBuilderX fixes the bug that in some cases of front-end web hosting, uploading the website to the server, the console shows that (0 MB) is greater than the upload limit (0 MB) [details](https://ask.dcloud.net.cn/question/ 111228)
  + uni-id 新增 App端一键登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + uni-id add one-click login on App [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + 其他云端更新日志另见：[https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
  + See also for other cloud update logs: [https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)


#### 2020-12-10
  + web控制台 新增 阿里云新增稀疏索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=dbindex)
  + web console added Alibaba Cloud added sparse index [details](https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=dbindex)
  + web控制台 新增 腾讯云云存储新增批量删除功能
  + Web console added Tencent cloud storage added batch delete function
  + web控制台 新增 前端网页托管批量删除
  + web console new front-end web hosting batch delete
  + web控制台 新增 腾讯云 概览页面新增clientDB资源用量
  + Web console added Tencent Cloud overview page added clientDB resource usage
  + web控制台 新增 导出 db_init.json 新增是否导出 ID
  + web console added export db_init.json added whether to export ID
  + web控制台 新增 云函数、公共模块、action 列表新增操作者邮箱
  + Added new cloud functions, public modules, and action lists in the web console. Added operator mailboxes
  + web控制台 优化 数据库记录编辑窗口
  + Web console optimization database record editing window
  + web控制台 修复 腾讯云 云存储文件夹过多时上拉加载错误的BUG
  + The web console fixes the bug of uploading and loading errors when there are too many Tencent Cloud cloud storage folders
#### 2020-11-21
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB added jql writing method to support writing aliases in the field [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + The enum in the new clientDB schema supports the use of cloud data [details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + The bsonType in the new clientDB schema supports password. After setting, all users cannot read this field
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
  + Optimized clientDB to return more friendly prompts and error codes when index conflicts [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
#### 2020-11-14
  + uni-id 调整 2.0.0版本起验证码表名改为`opendb-verify-codes`
  + uni-id adjustment The name of the verification code table from version 2.0.0 is changed to `opendb-verify-codes`
  + uni-id 调整 2.0.0版本起encryptPwd接口返回值调整 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=encrypt-password)
  + uni-id adjustment The return value of the encryptPwd interface has been adjusted since version 2.0.0 [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=encrypt-password)
  + uni-id 新增 修改passwordSecret功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=modifysecret)
  + uni-id added modify passwordSecret function [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=modifysecret)

#### 2020-11-13
  +  阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
  + Alibaba Cloud supports transactions (startTransaction mode, runTransaction is not currently supported) [details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
#### 2020-10-31
  + 新增 `<uni-clientDB>`组件支持remove方法，封装了删除确认框、删除数据库、删除前端data等操作，开发更便利 [详情](https://uniapp.dcloud.io/uniCloud/uni-clientdb-component?id=%e6%96%b9%e6%b3%95)
  + Added the `<uni-clientDB>` component to support the remove method, encapsulating the delete confirmation box, delete the database, delete the front-end data and other operations, making development more convenient [details](https://uniapp.dcloud.io/uniCloud/uni -clientdb-component?id=%e6%96%b9%e6%b3%95)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
  + Optimization Improve the execution speed of cloud functions by tens of milliseconds. The performance of non-cold start is the same as that of traditional servers (cloud functions need to be redeployed)
#### 2020-10-24
  + clientDB 去除schema内permission中的点，例：`.write`改为`write`，旧写法仍然支持。
  + clientDB removes the point in the permission in the schema, for example: `.write` is changed to `write`, the old way of writing is still supported.
  + clientDB 优化无权限操作时的报错提示
  + clientDB optimizes the error message when operating without permission

#### 2020-10-24
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/database?id=lookup)
  + [Important] Newly added clientDB supports `jql` query syntax, which greatly reduces the difficulty of database operation [details](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery), greatly simplifies table query[ Details](https://uniapp.dcloud.net.cn/uniCloud/database?id=lookup)
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + [Important] The uni-clientDB component is newly added, and the content of the cloud database is directly obtained through the component at the front end, and directly bound to the interface, which greatly improves the development efficiency [details](https://uniapp.dcloud.net.cn/uniCloud /uni-clientdb-component)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/database)
  + [Important] Adjust the built-in clientDB, the cloud no longer needs a separate clientDB cloud function, and the front end does not need to reference clientDB's js sdk, just write `const db = uniCloud.database()` on the front end [details](https:// uniapp.dcloud.net.cn/uniCloud/database)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/database?id=action)
  + [Important] Adjust the uni-clientDB-actions directory to the cloudfunctions root directory [details](https://uniapp.dcloud.net.cn/uniCloud/database?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + [Important] Adjust the permission and validator subdirectories of the clientDB cloud function to be abolished, just write the permission and validator content in the DB Schema, save it and it will take effect directly, no need to export again
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + [Important] Added `uniCloud Admin basic framework` (this template can be selected for new HBuilderX projects) [details](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率
  + [Important] New web console After the cloud database is configured with DB Schema, front-end projects can be directly generated, including data form addition, modification pages, and verification rules. Significantly improve development efficiency
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + [Important] Tencent Cloud is officially commercialized [See details](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 新增 web控制台 云数据库支持导出db_init.json
  + Added web console, cloud database supports exporting db_init.json
  + 新增 web控制台 服务空间改名
  + Added web console service space renamed
  + 新增 web控制台 云数据库支持`扩展校验函数`，可自主编程实现更复杂的数据校验逻辑，同时在 DB Schema 中引用这些`扩展校验函数`   + Added web console. Cloud database supports `Extended Validation Function`, which can be programmed to realize more complex data validation logic. At the same time, these `Extended Validation Functions` can be referenced in DB Schema.
  + 修复 阿里云 数据库set方法表现不正确的Bug
  + Fix the bug that the set method of Alibaba Cloud database behaves incorrectly
  + uni-id 新增 开发者callFunction时可自行传入uniIdToken，此时不再从storage获取token
  + uni-id is added. Developers can pass in uniIdToken by themselves when callingFunction. At this time, they will no longer get token from storage.

#### 2020-10-13
  + 腾讯云 全面开放企业用户按量计费服务空间的购买 [详情](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-info) 	
  + Tencent Cloud Fully open the purchase of pay-as-you-go billing service space for enterprise users [details](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-info)
#### 2020-09-29
  + 腾讯云 开放包年包月套餐购买 [详情](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-month)
  + Tencent Cloud is open to purchase annual and monthly packages [details](https://uniapp.dcloud.net.cn/uniCloud/price?id=price-month)
#### 2020-09-26
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + [Important] Added a fixed export IP for Tencent Cloud Cloud functions, which can be used in scenarios that require ip configuration such as WeChat official account development [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip )
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + [Important] uni-clientDB 2.0 is a major update, which allows complete and convenient control authority and data verification. Most scenarios no longer need to write cloud functions [details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + [Important] uni-id added role permissions related functions [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + [Important] Cloud database supports the JSON Schema specification, and the data format description can be performed on the database management interface of the web console [details](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
  + Alibaba Cloud removes client upload file type restrictions

#### 2020-09-16
  + 腾讯云 支持云函数固定出口IP，支持微信公众号开发 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + Tencent Cloud supports fixed export IP of cloud functions, supports WeChat official account development [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
#### 2020-09-03
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
  + Fix the bug that UI freezes when uploading public modules in some cases
  + 调整 阿里云放开文件上传类型限制
  + Adjusted Alibaba Cloud's release of file upload type restrictions
#### 2020-08-29
  + 新增 本地运行 加入显示调试行号等信息
  + Added local operation added to display debugging line number and other information
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
  + Fixed the bug that uploading some cloud functions or public modules failed when the npm mirror source was Taobao source
#### 2020-08-20
  + 阿里云 升级mongoDB到4.0版本，现已支持地理位置
  + Alibaba Cloud upgraded mongoDB to version 4.0, now supports geographic location
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + Optimization Cloud function plugin supports writing components, js_sdk, static directories
#### 2020-08-12
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web console Alibaba Cloud adds import and export functions for database collections [details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + web console Tencent Cloud New resource overview page
#### 2020-08-05
  + 阿里云 新增 支持协作者本地运行云函数
  + Alibaba Cloud added support for collaborators to run cloud functions locally
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
  + Fix the bug that the right-click menu of public modules derived from HBuilderX 2.8.0 is missing when updating the cloud function menu that depends on this module
#### 2020-08-04
  + 新增 3个内置短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + Added 3 built-in SMS templates [details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
#### 2020-08-04
  + 阿里云 新增 支持协作者本地运行云函数
  + Alibaba Cloud added support for collaborators to run cloud functions locally
#### 2020-07-24
  + 阿里云 修复 本地运行时云函数互调报错的Bug
  + Alibaba Cloud fixed a bug where cloud function intermodulation errors were reported when running locally
#### 2020-07-21
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/local)
  + [Important] Added a new local cloud function that can connect to remote databases and cloud storage, greatly improving development efficiency and facilitating data import and export [details](https://uniapp.dcloud.net.cn/uniCloud/local)
  + 【重要】新增 插件市场支持云函数付费销售，欢迎插件作者们提交高质量可售卖插件
  + [Important] New plug-in market supports paid sales of cloud functions, plug-in authors are welcome to submit high-quality and sellable plug-ins
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + [Important] Added uniCloud.sendSms SMS sending capability, which can send verification code SMS conveniently and cheaply [details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 修复 2.7.12版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + Fix the bug that uniCloud reports errors in Alipay applet and Baidu applet derived from version 2.7.12
  + 修复 2.7.12版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
  + Fix the bug that uniCloud is unusable when uniCloud is used in main.js on the H5 side derived from version 2.7.12


#### 2020-07-10
  + web控制台 新增 云数据库新增、管理记录可全屏编辑
  + web console added new cloud database, management records can be edited in full screen
  + web控制台 优化 云数据库数据的展现形式
  + Web console optimizes the display form of cloud database data
  + web控制台 修复 云数据库选项卡快速切换导致内容显示不正确的Bug
  + web console fixes the bug that the fast switching of cloud database tabs causes the content to be displayed incorrectly
#### 2020-07-01
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + [Important] Added [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) to realize a simple, unified and extensible user center. It is recommended for every uniCloud developer to use it
  + 新增 callfunction时自动携带`uni-id`的token，无需自行开发token管理方案
  + Automatically carry the token of `uni-id` when adding callfunction, no need to develop a token management scheme by yourself
  + 新增 web控制台 腾讯云 云数据库备份和恢复功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + New web console Tencent Cloud database backup and recovery function [details](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 新增 web控制台 腾讯云 云数据库集合名称修改功能
  + Added web console Tencent Cloud database collection name modification function
  + 修复 云函数内获取客户端系统类型可能为空的Bug
  + Fix the bug that the client system type in the cloud function may be empty
  + 修复 HBuilderX 导入包含common目录的云函数模板，导致原common目录被覆盖的Bug
  + Fixed the bug that HBuilderX imported the cloud function template containing the common directory, which caused the original common directory to be overwritten
  + 优化 HBuilderX 新建公共模块增加名称不能包含大写字母的限制
  + Optimize the HBuilderX new public module to increase the restriction that the name cannot contain capital letters
  * 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  * Fixed the bug that npm install failed when uploading public modules in HBuilderX in some cases
  + 修复 HBuilderX 公共模块 右键菜单出现两个上传公共模块菜单的Bug
  + Fix HBuilderX common module right-click menu appears two bugs of uploading common module menu
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
  + Fixed the bug that the error message when the appid is not filled in the HBuilderX upload public module is inconsistent with the upload cloud function


#### 2020-06-24
  + 腾讯云 新增 数据库回档功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + Tencent Cloud added database backup function [details](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 腾讯云 修复 web控制台修改日期格式字段会变成字符串的Bug，目前显示为 {$date:xxx} 形式
  + Tencent Cloud fixes the bug that the modified date format field of the web console will become a string, currently displayed in the form of {$date:xxx}
#### 2020-06-15
  + 腾讯云 优化 开发期间客户端直连云函数
  + Tencent Cloud optimized client-side direct connection cloud functions during development
#### 2020-06-13
  + 阿里云 新增 前端网站部署功能 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
  + Alibaba Cloud added front-end website deployment function [details](https://uniapp.dcloud.io/uniCloud/hosting)
#### 2020-06-10
  + 阿里云 调整 定时触发的云函数，运行超时时间上限可设置为600秒，便于大数据量的跑批任务执行
  + Alibaba Cloud adjusts the cloud function that is triggered at regular intervals. The upper limit of the running timeout period can be set to 600 seconds, which is convenient for the execution of batch tasks with large amounts of data.
  + 腾讯云 新增 前端网站部署功能 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
  + Tencent Cloud added front-end website deployment function [details](https://uniapp.dcloud.io/uniCloud/hosting)
#### 2020-06-04
  + 腾讯云 新增 云数据库支持批量插入数据 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)
  + Tencent Cloud's new cloud database supports batch insertion of data [details](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)
#### 2020-05-21
  + 新增 云函数内获取客户端ua、ip [详情](https://uniapp.dcloud.io/uniCloud/cf-functions)
  + Add new cloud function to get client ua, ip [details](https://uniapp.dcloud.io/uniCloud/cf-functions)
#### 2020-05-16
  + 开放腾讯云创建入口
  + Open Tencent Cloud creation portal
#### 2020-05-15
  + 阿里云 优化 云函数冷启动时间，经测试冷启动时间平均减少800ms
  + Alibaba Cloud optimizes the cold start time of cloud functions, and the cold start time has been reduced by an average of 800ms after testing
#### 2020-04-29
  + 阿里云 修复 某些情况下 neq 操作符无法正常使用的Bug
  + Alibaba Cloud fixes the bug that the neq operator cannot be used normally in some cases
  + web控制台 调整 阿里云去除云存储文件类型限制
  + Web console adjustment Alibaba Cloud removes cloud storage file type restrictions
#### 2020-04-23
  + 阿里云 修复 云函数无法接收微信支付回调的Bug
  + Alibaba Cloud fixes the bug that cloud functions cannot receive WeChat payment callbacks

#### 2020-04-21
  + 腾讯云 修复 云函数互调某些情况下报签名错误的Bug
  + Tencent Cloud fixes a bug where a signature error is reported in some cases of intermodulation of cloud functions
  + 腾讯云 修复 elemMatch 内使用 neq 报错的Bug [详情](https://ask.dcloud.net.cn/question/91531)
  + Tencent Cloud fixes the bug reported by neq in elemMatch [details](https://ask.dcloud.net.cn/question/91531)
  + 阿里云 调整 云函数Url化最大可返回1MB数据，调整前为4KB
  + Alibaba Cloud adjustment Urlization of cloud functions can return up to 1MB of data, up to 4KB before adjustment
#### 2020-04-08
  + web控制台 新增 阿里云支持云函数定时触发
  + Web console added Alibaba Cloud supports scheduled triggering of cloud functions
  + web控制台 优化 阿里云云函数上传并运行时会运行更新之前的云函数的问题
  + Web console optimization The problem that the cloud function before the update will run when the Alibaba Cloud cloud function is uploaded and run
#### 2020-03-27
  + web控制台 新增 阿里云支持云函数Url化
  + Web console added Alibaba Cloud supports Urlization of cloud functions
#### 2020-03-26
  + web控制台 新增 腾讯云服务空间，需发送邮件获取体验资格
  + Web console added Tencent cloud service space, you need to send an email to obtain experience qualification
  + web控制台 新增 云函数运行日志
  + web console added cloud function operation log
  + web控制台 新增 云存储权限
  + web console added cloud storage permissions
  + web控制台 新增 公共模块
  + web console new public module
  + web控制台 优化 阿里云文件存储上传体验
  + Web console optimization Alibaba Cloud file storage upload experience
  + web控制台 优化 阿里云云数据库搜索体验
  + Web console optimization Alibaba Cloud database search experience
  + web控制台 修复 阿里云删除索引报错的Bug
  + The web console fixes the bug that Alibaba Cloud deletes the index error
  + web控制台 修复 阿里云云存储文件后缀为大写文件不显示的Bug
  + The web console fixes the bug that the file suffix of Alibaba Cloud cloud storage file is not displayed when the file suffix is uppercase
  + web控制台 修复 阿里云云数据库字段为空或为 null 时显示错误的Bug
  + The web console fixes the bug that an error is displayed when the Alibaba Cloud database field is empty or null

#### 2020-03-04
  + web控制台 新增 阿里云支持云数据库分页
  + Web console added Alibaba Cloud supports cloud database paging
  + web控制台 新增 阿里云支持云数据库索引
  + Web console added Alibaba Cloud supports cloud database indexing
  + web控制台 新增 服务空间快捷切换选项卡
  + Web console new service space quick switching tab
  + web控制台 优化 云数据库长文本显示收起展开按钮
  + Web console optimization cloud database long text display collapse expand button
  + web控制台 优化 云数据库搜索体验
  + Web console optimized cloud database search experience

#### 2020-02-27
  + db_init.json 调整 添加索引方向时应使用字符串
  + db_init.json adjustment should use string when adding index direction
#### 2020-02-26
  + 阿里云 新增 云数据库支持 add 批量添加数据 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)
  + Alibaba Cloud added support for cloud database add to add data in batches [details](https://uniapp.dcloud.io/uniCloud/cf-database?id=add)
#### 2020-02-24
  + 阿里云 新增 云函数互调功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-functions?id=callbyfunction)
  + Alibaba Cloud added cloud function intermodulation function [details](https://uniapp.dcloud.io/uniCloud/cf-functions?id=callbyfunction)