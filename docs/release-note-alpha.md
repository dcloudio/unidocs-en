#### 3.2.1.20210811-alpha
* 【uni-app】
  + App-Andriod平台 优化 uni.chooseImage 图片选择界面增加`原图`按钮
  + App-Andriod platform optimization uni.chooseImage image selection interface adds `Original image` button
  + App-Android平台 修复 3.2.0 版本引出的 uni.scanCode 可能无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/128311)
  + App-Android platform Fix the bug that uni.scanCode derived from version 3.2.0 may not be used normally [details](https://ask.dcloud.net.cn/question/128311)
  + App-Android平台 修复 uni.saveFile 保存通过 uni.chooseImage 选择的图片在 Android11 设备上可能失败的Bug [详情](https://ask.dcloud.net.cn/question/128442)
  + App-Android platform Fix the bug that uni.saveFile may fail to save the image selected by uni.chooseImage on Android11 ​​devices [details](https://ask.dcloud.net.cn/question/128442)
  + App-iOS平台 修复 uni.chooseImage 图片选择界面`原图`按钮操作逻辑不正确的Bug
  + App-iOS platform fixes the bug that the operation logic of the `Original Image` button on the uni.chooseImage image selection interface is incorrect
  + 小程序平台 修复 作用域插槽内使用事件后默认使用新版作用域插槽编译模式的Bug [详情](https://ask.dcloud.net.cn/question/127297)
  + Mini Program Platform Fix the bug that the new version of the scope slot compilation mode is used by default after using events in the scope slot [details](https://ask.dcloud.net.cn/question/127297)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 【重要】Android平台 新增 androidPrivacy.json 文件配置隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36937)
  + 【Important】 Android platform added androidPrivacy.json file to configure the privacy policy prompt box [details](https://ask.dcloud.net.cn/article/36937)
  + Android平台 修复 3.1.19 版本引出的 直播推流 LivePusher 无法全屏预览的Bug [详情](https://ask.dcloud.net.cn/question/127987)
  + Android platform fixes the bug that the LivePusher cannot be previewed in full screen, introduced by version 3.1.19 [details](https://ask.dcloud.net.cn/question/127987)
  + Android平台 修复 5+App项目打包后提交华为应用市场审核会误报包含三方广告SDK的Bug [详情](https://ask.dcloud.net.cn/question/126498)
  + Android platform fixes 5+App projects submitted to the Huawei app market review after packaging will falsely report the bug containing the three-party advertising SDK [details](https://ask.dcloud.net.cn/question/126498)
  + Android平台 修复 申请权限被用户拒绝后，引导用户跳转设置界面开启权限后返回应用依然无法获取权限的Bug [详情](https://ask.dcloud.net.cn/question/128369)
  + Android platform fixes the bug that after the application for permission is rejected by the user, guide the user to jump to the setting interface to open the permission and return to the application and still cannot obtain the permission [details](https://ask.dcloud.net.cn/question/128369)
  + iOS平台 修复 3.2.0 版本引出的 图片选择界面中部分按钮文字在系统语言为中文时依然显示英文的Bug [详情](https://ask.dcloud.net.cn/question/128285)
  + iOS platform fixes the bug that some button texts in the picture selection interface derived from version 3.2.0 still display English when the system language is Chinese [details](https://ask.dcloud.net.cn/question/128285)
  + iOS平台 修复 Downloader 下载文件名称出现乱码或包含特殊字符，导致保存文件无法读取的Bug
  + iOS platform fixes the bug that the downloader download file name appears garbled or contains special characters, which causes the saved file to be unreadable

#### 3.2.0.20210801-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件 type 支持 tel 类型
  + App platform, H5 platform new input component type supports tel type
  + App平台、H5平台 新增 input 组件支持 text-content-type 属性
  + App platform, H5 platform added input component to support text-content-type attribute
  + App平台、H5平台 修复 3.1.22 版本引出的 scroll-view 组件下拉刷新失效的Bug
  + App platform, H5 platform Fix the bug of scroll-view component pull-down refresh caused by version 3.1.22
  + App-iOS平台 修复 压缩后的视频无法通过 plus.io 接口操作的Bug
  + App-iOS platform fixes the bug that the compressed video cannot be operated through the plus.io interface
  + App-iOS平台 修复 3.1.22 版本引出的 softinputMode 配置为 adjustResize 无效的Bug
  + App-iOS platform fixes the bug that the softinputMode is set to adjustResize which is invalid in version 3.1.22
  + App-iOS平台 修复 nvue map 组件 marker 设置 label 的 bgColor 为透明值无效的Bug [详情](https://ask.dcloud.net.cn/question/126459)
  + App-iOS platform fixes the bug that the nvue map component marker sets the bgColor of the label to a transparent value that is invalid [details](https://ask.dcloud.net.cn/question/126459)
  + H5平台 优化 导航栏搜索框增加清除按钮
  + H5 platform optimization, add a clear button in the search box of the navigation bar
  + 支付宝小程序平台 修复 部分内置组件事件当做自定义事件处理的Bug
  + Alipay applet platform fixes the bug that some built-in component events are handled as custom events
  + 【重要】 uniad广告的ad组件 支持h5平台  [详情](https://uniapp.dcloud.net.cn/component/ad)
  + 【Important】 The ad component of uniad advertising supports the h5 platform [details](https://uniapp.dcloud.net.cn/component/ad)
  + 【重要】 uni ui 支持 vue3 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + 【Important】 uni ui supports vue3 [details](https://ext.dcloud.net.cn/plugin?id=55)
  + HBuilder官方预置项目全面支持 vue3，包括hello uni-app、hello uniCloud、uniCloud admin、uni-starter等
  + HBuilder official preset projects fully support vue3, including hello uni-app, hello uniCloud, uniCloud admin, uni-starter, etc.
  + 新增 VUE3 条件编译，方便一套代码同时兼容vue2和vue3 [详情](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + Added VUE3 conditional compilation to facilitate a set of codes compatible with both vue2 and vue3 [details](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + uni-ui uni-collapse 修复 由1.2.0版本引起的 change 事件返回 undefined 的Bug
  + uni-ui uni-collapse fixes the bug that the change event caused by version 1.2.0 returns undefined
  + uni-ui uni-collapse 优化 组件示例
  + uni-ui uni-collapse optimization component example
  + uni-ui uni-collapse 新增 组件折叠动画
  + uni-ui uni-collapse new component folding animation
  + uni-ui uni-collapse 新增 value\v-model 属性 ，动态修改面板折叠状态
  + uni-ui uni-collapse adds value\v-model attribute to dynamically modify the collapsed state of the panel
  + uni-ui uni-collapse 新增 title 插槽 ，可定义面板标题
  + uni-ui uni-collapse adds a title slot to define the title of the panel
  + uni-ui uni-collapse 新增 border 属性 ，显示隐藏面板内容分隔线
  + uni-ui uni-collapse new border property, display hidden panel content divider
  + uni-ui uni-collapse 新增 title-border 属性 ，显示隐藏面板标题分隔线
  + uni-ui uni-collapse adds the title-border attribute to show the title divider of the hidden panel
  + uni-ui uni-collapse 修复 resize 方法失效的Bug
  + uni-ui uni-collapse fix the bug that the resize method fails
  + uni-ui uni-collapse 修复 change 事件返回参数不正确的Bug
  + uni-ui uni-collapse fix the bug that the return parameter of the change event is incorrect
  + uni-ui uni-collapse 优化 H5、App 平台自动更具内容更新高度，无需调用 reszie() 方法
  + uni-ui uni-collapse optimization H5, App platform automatically updates the height of the content, no need to call the reszie() method
  + uni-ui uni-data-checkbox 优化 在uni-forms组件，与label不对齐的问题
  + uni-ui uni-data-checkbox optimization In the uni-forms component, the problem of misalignment with the label
  + uni-ui uni-data-checkbox 修复 单选默认值为0不能选中的Bug
  + uni-ui uni-data-checkbox fixes the bug that the default value of single selection is 0 and cannot be selected
  + uni-ui uni-easyinput 优化 errorMessage 属性支持 Boolean 类型
  + uni-ui uni-easyinput optimization errorMessage attribute supports Boolean type
  + uni-ui uni-file-picker 修复 return-type为object下，返回值不正确的Bug
  + uni-ui uni-file-picker fixes the bug that the return value is incorrect when the return-type is object
  + uni-ui uni-file-picker 修复（重要） H5 平台下如果和uni-forms组件一同使用导致页面卡死的问题
  + uni-ui uni-file-picker fixes (important) the problem of page stuck if used with uni-forms under H5 platform
  + uni-ui uni-file-picker 优化 h5平台下上传文件导致页面卡死的问题
  + uni-ui uni-file-picker optimizes the problem of page jam caused by uploading files under the h5 platform
  + uni-ui uni-forms 修复 vue2 下条件编译导致destroyed生命周期失效的Bug
  + uni-ui uni-forms fixes the bug that conditional compilation in vue2 causes the destroyed life cycle to fail
  + uni-ui uni-forms 修复 1.2.1 引起的示例在小程序平台报错的Bug
  + uni-ui uni-forms fixes the bug that the example caused by 1.2.1 reports an error on the applet platform
  + uni-ui uni-forms 修复 动态校验表单，默认值为空的情况下校验失效的Bug
  + uni-ui uni-forms fixes the bug of dynamic verification form, the verification is invalid when the default value is empty
  + uni-ui uni-forms 修复 不指定name属性时，运行报错的Bug
  + uni-ui uni-forms fix the bug that the error is reported when the name attribute is not specified
  + uni-ui uni-forms 优化 label默认宽度从65调整至70，使required为true且四字时不换行
  + uni-ui uni-forms optimization The default width of the label is adjusted from 65 to 70, so that required is true and the four characters do not wrap
  + uni-ui uni-forms 优化 组件示例，新增动态校验示例代码
  + uni-ui uni-forms optimization component example, new dynamic verification example code
  + uni-ui uni-forms 优化 组件文档，使用方式更清晰
  + uni-ui uni-forms optimized component documentation, clearer usage
  + uni-ui uni-list 修复 与其他组件嵌套使用时，点击失效的Bug
  + uni-ui uni-list fixes the bug that the click becomes invalid when used in nesting with other components
  + uni-ui uni-swipe-action 修复 跨页面修改组件数据 ，导致不能滑动的问题
  + uni-ui uni-swipe-action fixes the problem of not being able to slide by modifying component data across pages
  + hello-uniapp 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + hello-uniapp added to adapt vue2 and vue3 at the same time (HBuilder X 3.2.0+ supports vue3)
  + uniCloud admin 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin added to adapt vue2 and vue3 at the same time (HBuilder X 3.2.0+ supports vue3)
  + uniCloud admin 新增 应用管理功能，管理用户可登录的应用，如某账户只能登录管理端、不能登录用户端（uni-id@3.3.1+ 支持）
  + uniCloud admin adds the application management function, which manages the applications that users can log in. For example, an account can only log in to the management terminal but not the user terminal (uni-id@3.3.1+ support)
  + uniCloud admin 新增 升级系统管理 list 页的表格功能，支持数据排序、筛选、搜索等功能
  + uniCloud admin added a table function to upgrade the system management list page, supporting data sorting, filtering, search and other functions
  + uniCloud admin 修复 刷新页面时，左侧菜单丢失高亮状态的 bug
  + uniCloud admin fixes the bug that the left menu loses its highlight state when refreshing the page
  + uniCloud admin 修复 修改密码失败的 bug
  + uniCloud admin fixes the bug that failed to modify the password
  + 新增 插件市场 支持前端文件加密 限付费的云端一体项目类型的前端文件 [详情](https://ask.dcloud.net.cn/article/35408)
  + New plug-in market supports front-end file encryption, front-end files of only paid cloud integrated project type [details](https://ask.dcloud.net.cn/article/35408)
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 一键登录 服务协议项样式支持设置复选框图标 [详情](https://uniapp.dcloud.io/univerify)
  + Added one-click login service agreement item style supports setting checkbox icon [details](https://uniapp.dcloud.io/univerify)
  + 优化 新浪微博 登录、分享 模块配置，去掉appsecret参数
  + Optimized Sina Weibo login, share module configuration, remove appsecret parameter
  + 修复 一键登录 应用横屏显示时打开一键登录页面UI显示异常的Bug [详情](https://ask.dcloud.net.cn/question/126597)
  + Fix the bug that the UI of the one-click login page is displayed abnormally when the application is displayed on the horizontal screen [details](https://ask.dcloud.net.cn/question/126597)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK为3.8.0.6版；腾讯优量汇广告SDK为4.380.1250版；快手广告联盟SDK为3.3.12版，快手内容联盟SDK为3.3.20版
  + Android platform update uni-AD Today’s Toutiao pangolin advertising SDK is version 3.8.0.6; Tencent Youlianghui advertising SDK is version 4.380.1250; Kuaishou Advertising Alliance SDK is version 3.3.12, Kuaishou Content Alliance SDK is version 3.3.20
  + Android平台 更新 腾讯X5内核版本为 4.3.0.176_44076，解决在部分设备无法加载使用X5内核的问题
  + Android platform update. Tencent X5 kernel version is 4.3.0.176_44076, which solves the problem that X5 kernel cannot be loaded on some devices
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.2.0，个推核心组件SDK版本为3.1.2.0
  + Android platform update UniPush uses a push SDK version 3.2.2.0, a push core component SDK version is 3.1.2.0
  + Android平台 修复 3.1.22 版本引出的 template 原生隐私政策提示框内容过多时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/127582)
  + Android platform fixes the bug that the template original privacy policy prompt box derived from version 3.1.22 is displayed abnormally when the content is too much [details](https://ask.dcloud.net.cn/question/127582)
  + Android平台 修复 3.1.19 版本引出的 UniPush 云端打包设置 GooglePlay(AAB) 渠道，getClientInfo 无法获取推送标识信息的Bug [详情](https://ask.dcloud.net.cn/question/127434)
  + Android platform Fixed the bug that the UniPush cloud package setting GooglePlay (AAB) channel, which was introduced in version 3.1.19, could not obtain push identification information with getClientInfo [details](https://ask.dcloud.net.cn/question/127434)
  + Android平台 修复 页面中 input 标签 type 为 file 时，应用没有读写手机存储权限不会主动申请导致无法正常使用的Bug
  + Android platform fixes the bug that when the input tag type on the page is file, the application does not have read and write permissions to read and write the phone storage and will not actively apply for a bug that can not be used normally
  + Android平台 修复 VideoPlayer 播放带方向信息的视频源，暂停时显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/125783)
  + Android platform Fixed the bug that VideoPlayer played a video source with direction information and displayed incorrect direction when paused [details](https://ask.dcloud.net.cn/question/125783)
  + Android平台 修复 VideoPlayer 播放部分视频源，暂停时可能显示黑边的Bug [详情](https://github.com/dcloudio/uni-app/issues/2779)
  + Android platform Fixed a bug where VideoPlayer played some video sources, and black bars might be displayed when paused [details](https://github.com/dcloudio/uni-app/issues/2779)
  + Android平台 修复 LivePusher 推流设置的本地缓冲池过大导致延迟时间过长的Bug
  + Android platform fixes the bug that the local buffer pool set by LivePusher is too large and the delay time is too long
  + iOS平台 更新 QQ 登录、分享SDK版本为V3.5.3；新浪微博 登录、分享SDK版本为3.3.1；微信 登录、分享、支付SDK版本为1.9.1
  + iOS platform update QQ login and sharing SDK version is V3.5.3; Sina Weibo login and sharing SDK version is 3.3.1; WeChat login, sharing, payment SDK version is 1.9.1
  + iOS平台 更新 UniPush 使用的个推SDK为2.5.10.0无IDFA版
  + iOS platform update UniPush uses a push SDK to 2.5.10.0 without IDFA version
  + iOS平台 修复 一键登录 设置服务协议复选框默认不勾选时授权按钮背景颜色显示不正确的Bug
  + iOS platform fixed the bug that the background color of the authorization button displayed incorrectly when the check box of the service agreement setting is not checked by default with one-click login
  + iOS平台 修复 Downloader 下载文件返回的请求头 Content-Range 数据为空时引起应用崩溃的Bug
  + iOS platform Fixed the bug that caused the application to crash when the Content-Range header of the request header returned by the Downloader downloaded file was empty when the data was empty
  + iOS平台 修复 百度语音识别在用户拒绝录音权限时没有返回错误回调的Bug
  + iOS platform fixed the bug that Baidu speech recognition did not return an error callback when the user refused the recording permission
  + iOS平台 修复 在 iOS14 设备使用 5G 网络可能引起崩溃的Bug
  + iOS platform fixes a bug that may cause a crash when using a 5G network on iOS14 devices

#### 3.1.22.20210707-alpha
* 【uni-app】
  + 【重要】调整 App平台、H5平台 input 组件 number 类型在 iOS 平台改用仅数字键盘（九宫格），如需输入负数和小数请改用 digit 类型
  + 【Important】 Adjust the number type of the input component of the App platform and H5 platform. On the iOS platform, use a numeric keyboard only (jiugong grid). If you need to enter negative numbers and decimals, please use the digit type instead.
  + App平台、H5平台 修复 image 组件使用 transform 样式后，大小计算错误的Bug [详情](https://ask.dcloud.net.cn/question/125987)
  + App platform, H5 platform Fix the bug that the size of the image component is calculated incorrectly after using the transform style [details](https://ask.dcloud.net.cn/question/125987)
  + App平台、H5平台 修复 scroll-view 下拉刷新错误触发的Bug [详情](https://ask.dcloud.net.cn/question/124430)
  + App platform, H5 platform Fix the bug triggered by scroll-view pull-down refresh error [details](https://ask.dcloud.net.cn/question/124430)
  + App平台、H5平台 优化 input 组件移除 verifyNumber 属性，改由框架自动处理
  + App platform, H5 platform optimization input component remove the verifyNumber attribute, and it will be processed automatically by the framework
  + App-Android平台 修复 nvue  页面 swiper 组件嵌套 list 组件时 source 信息错误的Bug [详情](https://ask.dcloud.net.cn/question/121039)
  + App-Android platform Fix the bug that the source information is wrong when the swiper component is nested in the list component on the nvue page [details](https://ask.dcloud.net.cn/question/121039)
  + App-iOS平台 修复 iOS14.6 键盘弹出卡顿的Bug [详情](https://ask.dcloud.net.cn/question/125870)
  + App-iOS platform fixes the bug that the keyboard pops up and freezes in iOS14.6 [details](https://ask.dcloud.net.cn/question/125870)
  + H5平台 修复 input 组件设置 confirm-type 为 search 时，无法自动获取焦点的Bug
  + H5 platform fixes the bug that the focus cannot be automatically obtained when the input component is set to confirm-type as search
  + 小程序平台 修复 v-for 嵌套 slot 编译报错的Bug [详情](https://ask.dcloud.net.cn/question/125108)
  + Mini Program Platform Fix the bug of v-for nested slot compilation error [details](https://ask.dcloud.net.cn/question/125108)
  + 小程序平台 修复 v-for 中含有复杂表达式时，事件接收的 item 参数错误的Bug
  + Mini Program Platform Fix the bug that the item parameter received by the event is wrong when there are complex expressions in v-for
  + 小程序平台 修复 部分数值变更无法更新的Bug [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + Mini Program Platform Fix the bug that some value changes cannot be updated [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + 小程序平台 修复 新版作用域插槽编译模式嵌套自定义组件不显示的Bug [详情](https://ask.dcloud.net.cn/question/126058)
  + Mini Program Platform Fix the bug that nested custom components do not display in the compilation mode of the new scope slot [details](https://ask.dcloud.net.cn/question/126058)
  + 字节小程序平台 修复 新版开发者工具中 uni.request 发送请求失败的Bug
  + Byte applet platform fixes the bug that uni.request fails to send the request in the new version of the developer tool
* 【uniCloud】
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + 【Important】 Cloud function support select nodejs version when creating [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + New content security public module, including image pornography, text content violation detection, free and fully available [details](https://ext.dcloud.net.cn/plugin?id=5460)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + The new multiSend interface for clientDB is used to combine multiple clientDB networking requests into one networking [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + The unicloud-db component and API add the getTemp interface for use in multiSend [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + uni-id 调整 3.1.1版本发布，使用兼容 uniCloud 响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uni-id adjustment 3.1.1 version is released, using a new error code format compatible with uniCloud response body specification [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud local debugging plug-in fixes the bug of MaxListenersExceededWarning in some cases
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + uniCloud local debugging plug-in Fix the bug that the modification cannot take effect in real time when the soft chain of the file outside the project exists in the project
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + JQL database management fixes the bug that the database operation does not respond in some cases
  + 客户端 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
  + Client fixes the bug that the nvue page cannot trigger callbacks such as db.on('error') and db.on('refreshToken') registered in App.vue
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 优化 通知栏操作逻辑，解决提交 Google Play 审核可能提示 Implicit PendingIntent Vulnerability 的问题 [详情](https://ask.dcloud.net.cn/question/126207)
  + Optimize the operation logic of the notification bar on the Android platform to solve the problem of Implicit PendingIntent Vulnerability that may be prompted for Google Play review [details](https://ask.dcloud.net.cn/question/126207)
  + Android平台 优化 template 原生隐私政策提示框UI样式
  + Android platform optimization template native privacy policy prompt box UI style
  + iOS平台 修复 uni-AD 开屏广告在部分应用中可能引起曝光率较低的Bug
  + iOS platform fixes the bug that uni-AD on-screen ads may cause low exposure in some apps
  + iOS平台 修复 在部分情况下 WKWebView 同步共享 cookie 可能引起崩溃的Bug
  + iOS platform fixes a bug that may cause a crash when WKWebView synchronizes and shares cookies in some cases


#### 3.1.21.20210624-alpha
* 【uni-app】
  + App平台 修复 3.1.20 引出的 uni.showToast 接口 icon 固定为 error 类型的Bug [详情](https://ask.dcloud.net.cn/question/125773)
  + App platform Fix the bug that the uni.showToast interface icon derived from 3.1.20 is fixed to the error type [details](https://ask.dcloud.net.cn/question/125773)

#### 3.1.20.20210623-alpha
* 【uni-app】
  + App平台、H5平台 修复 input 组件同时设置 type=number 和 maxlength 时，部分情况 value 同步错误的Bug
  + App platform, H5 platform Fix the bug of value synchronization error in some cases when the input component sets type=number and maxlength at the same time
  + App平台、H5平台 修复 textarea 组件设置 min-height 后高度异常的Bug
  + App platform, H5 platform fix the bug that the height of the textarea component is abnormal after setting min-height
  + App平台 新增 uni.showToast 接口 icon 支持 error 类型
  + App platform added uni.showToast interface icon to support error type
  + App平台 优化 nvue 页面中去除 display:flex 相关警告
  + App platform optimization to remove display:flex related warnings from the nvue page
  + App平台 优化 uni.chooseLocation 搜索结果按综合排序 [详情](https://ask.dcloud.net.cn/question/125044)
  + App platform optimization uni.chooseLocation search results are sorted comprehensively [details](https://ask.dcloud.net.cn/question/125044)
  + App-Android平台 优化 快速频繁操作应用启动/关闭可能出现白屏现象的问题
  + App-Android platform optimization. Quick and frequent operation of the application startup/closing problem may cause a white screen phenomenon
  + App-Android平台 修复 uni.previewImage 长按保存图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android platform fixes the bug that uni.previewImage may fail to save pictures by long pressing [details](https://ask.dcloud.net.cn/question/125357)
  + App-iOS平台 修复 调用 uni.hideKeyboard 后点击页面任意位置 input 组件自动聚焦的Bug [详情](https://ask.dcloud.net.cn/question/125233)
  + App-iOS platform fixes the bug that the input component is automatically focused after clicking on any position of the page after calling uni.hideKeyboard [details](https://ask.dcloud.net.cn/question/125233)
  + App-iOS平台 修复 nvue textarea 组件不设置 padding 时 placeholder 显示位置不正常的Bug [详情](https://ask.dcloud.net.cn/question/122376)
  + App-iOS platform fixed the bug that the placeholder display position is abnormal when the nvue textarea component is not set to padding [details](https://ask.dcloud.net.cn/question/122376)
  + 百度小程序平台 修复 部分 class 写法编译后失效的Bug
  + Baidu applet platform fixes the bug that some class writing methods become invalid after compilation
  + QQ小程序平台 修复 默认启用 nodeModules 导致作用域插槽编译后运行报错的Bug
  + QQ applet platform fixes a bug where nodeModules is enabled by default, which causes an error to be reported after the scope slot is compiled
* 【uniCloud】
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + Added uniCloud response body specification to facilitate unified processing by front-end interceptors and facilitate internationalization [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + Client Add new add interceptor, remove interceptor API [details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17-alpha 引出的 db.on("error") 回调不执行的Bug
  + Client fixes the bug that the db.on("error") callback is not executed due to HBuilderX 3.1.17-alpha
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + Client Fix the bug that uniCloud and Tencent Cloud report errors in leftWindow and topWindow [details](https://ask.dcloud.net.cn/question/125039)
  + DB Schema 调整 enum 属性最大可枚举500条数据
  + DB Schema adjusts the enum attribute to enumerate up to 500 data
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 更新 uni-AD 快手广告联盟SDK Android为3.3.10.2版，iOS为3.3.10 版；快手内容联盟SDK Android为3.3.18.1版，iOS为3.3.19版
  + Update uni-AD Kuaishou Advertising Alliance SDK Android to version 3.3.10.2, iOS to version 3.3.10; Kuaishou Content Alliance SDK Android to version 3.3.18.1, iOS to version 3.3.19
  + Android平台 修复 手机语言设置为阿拉伯文后无法操作页面返回的Bug [详情](https://ask.dcloud.net.cn/question/124914)
  + Android platform fixes the bug that the page cannot be returned after the phone language is set to Arabic [details](https://ask.dcloud.net.cn/question/124914)
  + Android平台 修复 H5页面中 intent:// 协议无法拉起三方App的Bug [详情](https://ask.dcloud.net.cn/question/124597)
  + Android platform Fix the bug that the intent:// protocol in the H5 page cannot pull up the third-party App [details](https://ask.dcloud.net.cn/question/124597)
  + Android平台 修复 云端打包 提交 Google Play 审核提示包含无法识别的语言的Bug [详情](https://ask.dcloud.net.cn/question/125203)
  + Android platform fix cloud packaging Submit Google Play review prompts containing bugs in unrecognized languages ​​[details](https://ask.dcloud.net.cn/question/125203)
  + Android平台 修复 getVideoInfo 方法调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/122739)
  + Android platform fix the bug that the getVideoInfo method call does not respond [details](https://ask.dcloud.net.cn/question/122739)
  + Android平台 修复 3.1.14版本引出的 微博登录取消授权后再次调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/125273)
  + Android platform fixes the bug of unresponsive Weibo login after canceling authorization, which was introduced by version 3.1.14 [details](https://ask.dcloud.net.cn/question/125273)
  + Android平台 修复 targetSdkVersion 设置为 30 在部分 Android 11 设备可能无法正常拉起支付App的Bug
  + Android platform fixes the bug that the targetSdkVersion is set to 30, and some Android 11 devices may not be able to properly pull up the payment App
  + iOS平台 新增 安全区域配置 safearea 支持 backgroundDark 属性设置暗黑模式的背景颜色 [详情](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS platform new safe area configuration safearea supports backgroundDark property to set the background color of dark mode [details](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS平台 更新 云端打包环境为XCode12.5，解决在 iOS15 设备无法安装的Bug
  + iOS platform update The cloud packaging environment is XCode12.5, which solves the bug that cannot be installed on iOS15 devices


#### 3.1.19.20210613-alpha
* 【uni-app】
  + App平台、H5平台 新增 input 组件添加 verifyNumber 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App platform, H5 platform Added input component to add verifyNumber attribute [details](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 修复 editor 组件 insertImage 多次触发 input 事件的Bug [详情](https://ask.dcloud.net.cn/question/124809)
  + App platform, H5 platform Fix the bug that the editor component insertImage triggers the input event multiple times [details](https://ask.dcloud.net.cn/question/124809)
  + App平台 新增 一键登录自定义按钮添加 provider 属性，用于动态生成 buttons 时区分按钮 [详情](https://uniapp.dcloud.io/univerify?id=用户点击一键登录自定义按钮)
  + App platform added one-click login custom buttons to add provider attribute, used to dynamically generate buttons when distinguishing buttons [details](https://uniapp.dcloud.io/univerify?id=Users click one-click login custom buttons)
  + App平台 新增 uni.chooseImage 支持 crop 配置 [详情](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App platform added uni.chooseImage to support crop configuration [details](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App平台 新增 video 组件支持 header 配置 [详情](https://uniapp.dcloud.io/component/video)
  + App platform added video component to support header configuration [details](https://uniapp.dcloud.io/component/video)
  + App-Android平台 修复 uni.request 请求 header 中设置自定义 content-type 会添加 charset 的Bug [详情](https://ask.dcloud.net.cn/question/123961)
  + App-Android platform Fix the bug that setting custom content-type in uni.request request header will add charset [details](https://ask.dcloud.net.cn/question/123961)
  + App-Android平台 修复 websocket 请求过多可能引起崩溃的Bug
  + App-Android platform fixes a bug where too many websocket requests may cause a crash
  + App-Android平台 修复 nvue webview 组件设置 background 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/117845)
  + App-Android platform fix the bug that the background property setting of the nvue webview component does not take effect [details](https://ask.dcloud.net.cn/question/117845)
  + App-Android平台 修复 nvue video 组件暂定播放后可能出现黑边的Bug [详情](https://ask.dcloud.net.cn/question/124152)
  + App-Android platform Fix the bug that black borders may appear after the nvue video component is tentatively played [details](https://ask.dcloud.net.cn/question/124152)
  + 小程序平台 优化 作用域插槽内支持使用作用域外数据 [#495](https://github.com/dcloudio/uni-app/issues/495)
  + Mini program platform optimization supports the use of out-of-scope data in the scope slot [#495](https://github.com/dcloudio/uni-app/issues/495)
  + 百度小程序平台 修复 基础库 3.290.33 以上页面 mounted 执行两次的Bug [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + Baidu applet platform fixes the bug of base library 3.290.33 and above page mounted execution twice [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + 百度小程序平台 修复 使用 usingComponents 后代码上传报错的Bug [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + Baidu applet platform fixes the bug of code upload error after using usingComponents [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + 支付宝小程序平台 优化 支持 useDynamicPlugins 配置 [详情](https://ask.dcloud.net.cn/article/39114)
  + Optimized Alipay applet platform to support useDynamicPlugins configuration [details](https://ask.dcloud.net.cn/article/39114)
  + 字节小程序平台 修复 基础库 2.0 以上组件关系错乱的Bug [#2651](https://github.com/dcloudio/uni-app/issues/2651)
  + Byte applet platform Fix the bug that the components of the basic library 2.0 and above are disordered [#2651](https://github.com/dcloudio/uni-app/issues/2651)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 拍照和本地相册选择 支持设置 crop 裁剪编辑图片 [规范](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + Add new photo and local album selection support crop crop editing pictures [Specification](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + 新增 视频播放控件 VideoPlayer 播放http/https协议视频资源时支持设置请求的 header [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Added video playback control VideoPlayer supports setting the requested header [Specification](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles) when playing http/https protocol video resources
  + 新增 登录鉴权服务对象支持 nativeClient 属性标识依赖的客户端App是否已安装 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + Newly added that the login authentication service object supports the nativeClient attribute to identify whether the client App that it depends on has been installed [Specification](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + Android平台 更新 LivePusher 直播推流模块基于开源项目[yasea](https://github.com/begeekmyfriend/yasea)，支持 srs4.x
  + Android platform update LivePusher live streaming push module is based on the open source project [yasea](https://github.com/begeekmyfriend/yasea), supports srs4.x
  + Android平台 更新 uni-AD 穿山甲SDK 为3.7.0.2版
  + Android platform update uni-AD pangolin SDK to version 3.7.0.2
  + Android平台 修复 storage 数据存储键值 key 中包含特殊字符时可能存取失败的Bug
  + Android platform fixes a bug that may fail to access when the key contains special characters in the storage data storage key
  + Android平台 修复 getFileInfo 在 Android11 设备上可能无法正常获取文件信息的Bug [详情](https://ask.dcloud.net.cn/question/124440)
  + Android platform fix the bug that getFileInfo may not get file information normally on Android11 ​​devices [details](https://ask.dcloud.net.cn/question/124440)
  + iOS平台 更新 uni-AD 腾讯优量汇SDK 为4.12.71版
  + iOS platform update uni-AD Tencent Youlianghui SDK to version 4.12.71
  + iOS平台 更新 视频播放控件 VideoPlayer 使用的 FFmpeg 版本为 ff4.0--ijk0.8.8--20210426--001
  + iOS platform update Video playback control VideoPlayer uses FFmpeg version ff4.0--ijk0.8.8--20210426--001
  + iOS平台 修复 uni-AD 应用从后台切换到前台开屏广告可能被其它界面覆盖的Bug
  + iOS platform fixes the bug that uni-AD application switching from the background to the foreground may be covered by other interfaces
  + iOS平台 修复 plus.sqlite.isOpenDatabase 不传入参数可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/114091)
  + iOS platform fixes the bug that the plus.sqlite.isOpenDatabase does not pass in parameters, which may cause freezing or crashing [details](https://ask.dcloud.net.cn/question/114091)
  + iOS平台 修复 Geolocation 定位模块在用户未授权或设备关闭定位功能时返回错误码与规范不一致的Bug
  + iOS platform fixes the bug that the Geolocation positioning module returns an error code that is inconsistent with the specification when the user is not authorized or the device turns off the positioning function
* 【UniMPSDK】
* 【UniMPSDK】
  + iOS平台 修复 push 方式打开小程序手势返回关闭后偶现无法再次打开小程序页面的Bug
  + iOS platform fixes the bug that the applet page can't be opened again after the gesture of push mode to open the applet returns and closes
  + iOS平台 修复 动态设置 titleNView 样式后可能导致胶囊菜单按钮弹出的 actionSheet 部分 item 显示空白的Bug
  + iOS platform fixes the bug that the actionSheet part of the capsule menu button pops up after the titleNView style is dynamically set to display a blank bug



#### 3.1.17.20210603-alpha
* 【uni-app】
  + App-Android平台 新增 nvue ad-content-page组件支持页面内显示快手短视频内容联盟 [规范](https://uniapp.dcloud.net.cn/component/ad-content-page)
  + App-Android platform added nvue ad-content-page component to support the display of fast hand short video content alliance in the page [Specification](https://uniapp.dcloud.net.cn/component/ad-content-page)
  + App-Android平台 修复 nvue map 组件 marker 上的 label 可能会被 marker 本身覆盖的Bug [详情](https://ask.dcloud.net.cn/question/122872)
  + App-Android platform fix the bug that the label on the marker of the nvue map component may be covered by the marker itself [details](https://ask.dcloud.net.cn/question/122872)
  + uni-ui uni-data-checkbox 新增 map 属性，可以方便映射text/value属性
  + uni-ui uni-data-checkbox adds a new map attribute, which can easily map text/value attributes
  + uni-ui uni-data-checkbox 修复 不关联服务空间的情况下组件报错的Bug
  + uni-ui uni-data-checkbox fixes the bug that the component reports errors when the service space is not associated
  + uni-ui uni-data-picker 修复 上个版本引出的本地数据无法选择带有children的2级节点
  + uni-ui uni-data-picker fixes the local data derived from the previous version cannot select level 2 nodes with children
  + uni-ui uni-forms 修复 动态删减数据导致报错的问题
  + uni-ui uni-forms fixes the problem of dynamically deleting data causing errors
  + uni-ui uni-forms 新增 modelValue 属性 ，value 即将废弃
  + uni-ui uni-forms add modelValue attribute, value will be obsolete soon
  + uni-ui uni-forms 新增 uni-forms-item 可以设置单独的 rules
  + uni-ui uni-forms new uni-forms-item can set separate rules
  + uni-ui uni-forms 新增 validate 事件增加 keepitem 参数，可以选择那些字段不过滤
  + uni-ui uni-forms added the validate event to add the keepitem parameter, you can select those fields without filtering
  + uni-ui uni-forms 优化 submit 事件重命名为 validate
  + uni-ui uni-forms optimized submit event renamed to validate
  + uni-ui uni-data-picker 修复 无法加载云端数据的问题
  + uni-ui uni-data-picker fixes the problem that cloud data cannot be loaded
  + uni-ui uni-data-picker 修复 v-model 无效问题
  + uni-ui uni-data-picker fixes the invalid problem of v-model
  + uni-ui uni-data-picker 修复 loaddata 为空数据组时加载时间过长问题
  + uni-ui uni-data-picker fixes the problem of too long loading time when loaddata is empty data group
  + uni-ui uni-datetime-picker 修复 图标在小程序上不显示的 bug
  + uni-ui uni-datetime-picker fixes the bug that the icon is not displayed on the applet
  + uni-ui uni-datetime-picker 优化 重命名引用组件，避免潜在组件命名冲突
  + uni-ui uni-datetime-picker optimization renaming referenced components to avoid potential component naming conflicts
  + uni-ui uni-datetime-picker 优化 代码目录扁平化
  + uni-ui uni-datetime-picker optimization code directory flattening
  + uni-ui uni-tag 修复 未定义 sass 变量 "$uni-color-royal" 的bug
  + uni-ui uni-tag fixes the bug of undefined sass variable "$uni-color-royal"
* 【uniCloud】
  + 修复 HBuilderX 3.1.16 引出的未关联服务空间时无法获取 uniCloud.mixinDatacom 的Bug
  + Fix the bug that uniCloud.mixinDatacom cannot be obtained when the service space is not associated with HBuilderX 3.1.16
  + 修复 HBuilderX 3.1.16 引出的某些情况下关联腾讯云服务空间的项目运行报错的Bug
  + Fix the bug that HBuilderX 3.1.16 leads to an error in the operation of the project associated with Tencent Cloud Service Space in some cases
  + uniCloud本地调试插件 修复 HBuilderX 3.1.16 引出的云函数日志内的文件链接点击无法跳转到对应文件的Bug
  + uniCloud local debugging plug-in Fix the bug that the file link in the cloud function log derived from HBuilderX 3.1.16 cannot jump to the corresponding file when clicked
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 优化 云端打包googleplay渠道使用 Android App Bundle (AAB) 格式 [详情](https://ask.dcloud.net.cn/article/39052)
  + Android platform optimization, cloud packaging googleplay channel uses Android App Bundle (AAB) format [details](https://ask.dcloud.net.cn/article/39052)
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 playbackRate 方法设置倍数播放值为 1.25、1.5 不生效的Bug [详情](https://ask.dcloud.net.cn/question/107802)
  + iOS platform fixes the video playback control VideoPlayer calls the playbackRate method to set the multiple playback value to 1.25, 1.5 does not take effect [details](https://ask.dcloud.net.cn/question/107802)
  + iOS平台 修复 扫码时息屏后再次打开引起扫描线动画停止的Bug [详情](https://ask.dcloud.net.cn/question/124001)
  + iOS platform fixed the bug that caused the scan line animation to stop when the code was scanned and the screen was reopened [details](https://ask.dcloud.net.cn/question/124001)


#### 3.1.16.20210526-alpha
* 【uni-app】
  + 【重要】H5端 新增 支持在 CLI 工程使用 vue3/vite [详情](https://ask.dcloud.net.cn/article/37834)
  + 【Important】 Added support for the use of vue3/vite in CLI project on H5 terminal [details](https://ask.dcloud.net.cn/article/37834)
  + 补充 addInterceptor 拦截器文档 [详情](https://uniapp.dcloud.io/api/interceptor)
  + Supplement the addInterceptor interceptor documentation [details](https://uniapp.dcloud.io/api/interceptor)
  + App-Android平台 修复 nvue swiper 组件动态加载数据时会跳到第一个 swiper-item 的bug [详情](https://ask.dcloud.net.cn/question/121687)
  + App-Android platform Fix the bug that the nvue swiper component will jump to the first swiper-item when dynamically loading data [details](https://ask.dcloud.net.cn/question/121687)
* 【uniCloud】
  + clientDB 新增 使用副表 foreignKey 进行联表查询时增加 _value 用于存储主表关联字段原始值 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB adds _value to store the original value of the associated fields of the primary table when using the foreignKey of the secondary table for joint table query [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign -key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + clientDB fixes the bug that action.after will be executed repeatedly in some cases
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
  + JQL data management fix the bug that the schema cannot be found when using the cloud schema [details](https://ask.dcloud.net.cn/question/123285)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 3.1.15 版本引出的 云端打包同时勾选 UniPush 和 一键登录 模块会引起打包失败的Bug
  + Android platform fixes the bug that the cloud packaging derived from version 3.1.15 will cause the packaging to fail if the UniPush and one-click login modules are checked at the same time
  + iOS平台 更新 百度语音识别 SDK 为 3.0.10.0 版
  + iOS platform update Baidu speech recognition SDK version 3.0.10.0
  + iOS平台 优化 相册目录选择操作界面
  + Optimized for iOS platform, album catalog selection interface



#### 3.1.15.20210518-alpha
* 【uni-app】
  + App平台 新增 uni-AD 互动游戏，无需自行设计激励视频场景，快速嵌入激励视频变现 [详情](https://uniapp.dcloud.net.cn/api/a-d/interactive)
  + App platform adds uni-AD interactive game, no need to design incentive video scene by yourself, quickly embed incentive video to realize [details](https://uniapp.dcloud.net.cn/api/a-d/interactive)
  + App平台 新增 激励视频服务器回调 [详情](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video?id=callback)
  + App platform new rewarded video server callback [details](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video?id=callback)
  + App平台、H5平台 修复 3.1.10 版本引出的 textarea 组件固定 box-sizing 导致部分情况显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121893)
  + App platform, H5 platform Fix the bug that fixed box-sizing of textarea component derived from version 3.1.10 causes abnormal display in some situations [details](https://ask.dcloud.net.cn/question/121893)
  + App平台 修复 3.1.10 版本引出的 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/122328)
  + App platform Fix the bug that the input component type derived from version 3.1.10 is number when the lower version of the webview loses focus [details](https://ask.dcloud.net.cn/question/122328)
  + App平台 修复 3.1.0 版本引出的 dataset 使用驼峰写法时获取数据格式与其他平台不一致的Bug [详情](https://ask.dcloud.net.cn/question/119034)
  + App platform Fix the bug that the dataset derived from version 3.1.0 is inconsistent with other platforms when using camel case [details](https://ask.dcloud.net.cn/question/119034)
  + App-Android平台 修复 3.1.14 版本引出的 nvue web-view 组件无法加载本地 html 页面的Bug [详情](https://ask.dcloud.net.cn/question/122944)
  + App-Android platform fixes the bug that the nvue web-view component derived from version 3.1.14 cannot load the local html page [details](https://ask.dcloud.net.cn/question/122944)
  + App-Android平台 修复 nvue map 组件 markers 中的 id 属性值重复导致标记点显示异常的Bug
  + App-Android platform fixes the bug that the id attribute value in the markers of the nvue map component is repeated, which causes the marker points to display abnormally
  + App-iOS平台 修复 uni.downloadFile 下载文件名称存在中文时无法通过 uni.saveFile 保存的Bug [详情](https://ask.dcloud.net.cn/question/122212)
  + App-iOS platform Fix the bug that uni.downloadFile cannot be saved through uni.saveFile when the download file name exists in Chinese [details](https://ask.dcloud.net.cn/question/122212)
  + App-iOS平台 修复 nvue video 组件播放 mov 格式视频时显示尺寸会变小的Bug [详情](https://ask.dcloud.net.cn/question/121175)
  + App-iOS platform fixed the bug that the display size of the nvue video component would become smaller when playing mov format videos [details](https://ask.dcloud.net.cn/question/121175)
  + H5平台 修复 3.1.0 版本引出的样式中包含媒体查询时部分 rpx 单位失效的Bug [#2600](https://github.com/dcloudio/uni-app/issues/2600)
  + H5 platform fixes the bug that some rpx units fail during media query in the style derived from version 3.1.0 [#2600](https://github.com/dcloudio/uni-app/issues/2600)
  + uni-ui 发布新版本 1.3.1
  + uni-ui releases new version 1.3.1
    * uni-badge 新增 uni-badge 的 absolute 属性，支持定位
    * uni-badge adds uni-badge absolute attribute to support positioning
	* uni-badge 新增 uni-badge 的 offset 属性，支持定位偏移
    * uni-badge adds uni-badge offset attribute to support positioning offset
	* uni-badge 新增 uni-badge 的 is-dot 属性，支持仅显示有一个小点
    * uni-badge adds uni-badge’s is-dot attribute, which supports displaying only a dot
	* uni-badge 新增 uni-badge 的 max-num 属性，支持自定义封顶的数字值，超过 99 显示99+
    * uni-badge adds uni-badge's max-num attribute, supports custom capped numeric values, more than 99 displays 99+
	* uni-badge 优化 uni-badge 属性 custom-style， 支持以对象形式自定义样式
    * uni-badge optimizes the uni-badge attribute custom-style, supports custom styles in the form of objects
	* uni-badge 修复 uni-badge 在 App 端，数字小于10时不是圆形的bug
    * uni-badge fixes the bug that uni-badge is not round when the number is less than 10 on the App side
	* uni-badge 修复 uni-badge 在父元素不是 flex 布局时，宽度缩小的bug
    * uni-badge fixes the bug that uni-badge shrinks in width when the parent element is not in flex layout
	* uni-badge 新增 uni-badge 属性 custom-style， 支持自定义样式
    * uni-badge add uni-badge attribute custom-style, support custom style
	* uni-datetime-picker 修复 ios 下不识别 '-' 日期格式的 bug
    * uni-datetime-picker fixes the bug that the'-' date format is not recognized under ios
	* uni-datetime-picker 优化 pc 下弹出层添加边框和阴影
    * uni-datetime-picker optimizes the pop-up layer under the pc to add borders and shadows
	* uni-datetime-picker 修复 在 admin 中获取弹出层定位错误的bug
    * uni-datetime-picker fixes the bug of getting pop-up layer positioning error in admin
	* uni-datetime-picker 修复 type 属性向下兼容，默认值从 date 变更为 datetime
    * uni-datetime-picker fixes the downward compatibility of the type attribute, the default value is changed from date to datetime
	* uni-datetime-picker 支持日历形式的日期+时间的范围选择
    * uni-datetime-picker supports date+time range selection in calendar form
	* uni-steps 修复 uni-steps 横向布局时，多行文字高度不合理的 bug
    * uni-steps fixes the bug that the height of multi-line text is unreasonable in uni-steps horizontal layout
	* uni-countdown 修复 uni-countdown 不能控制倒计时的 bug
    * uni-countdown fixes the bug that uni-countdown cannot control the countdown
	* uni-tag 修复 royal 类型无效的bug
    * uni-tag fixes the bug that the royal type is invalid
	* uni-tag 修复 uni-tag 宽度不自适应的bug
    * uni-tag fixes the bug that uni-tag width is not adaptive
	* uni-tag 新增 uni-tag 支持属性 custom-style 自定义样式
    * uni-tag add uni-tag support attribute custom-style custom style
	* uni-link 新增 href 属性支持 tel:|mailto:
    * uni-link added href attribute to support tel:|mailto:
	* uni-popup 修复 组件内放置 input 、textarea 组件，无法聚焦的问题
    * uni-popup fixes the problem that the input and textarea components cannot be focused when placed in the component
	* uni-popup 新增 type 属性的 left\right 值，支持左右弹出
    * uni-popup adds the left\right value of the type attribute, which supports pop-up from left to right
	* uni-popup 新增 open(String:type) 方法参数 ，可以省略 type 属性 ，直接传入类型打开指定弹窗
    * uni-popup adds open(String:type) method parameter, you can omit the type attribute, and directly pass in the type to open the specified popup
	* uni-popup 新增 backgroundColor 属性，可定义主窗口背景色,默认不显示背景色
    * uni-popup adds the backgroundColor property, which can define the background color of the main window, and the background color is not displayed by default
	* uni-popup 新增 safeArea 属性，是否适配底部安全区
    * uni-popup fixes the bug that the security area at the bottom of the App\h5\WeChat applet is incorrectly occupied
	* uni-popup 修复 App\h5\微信小程序底部安全区占位不对的Bug
    * uni-popup adds safeArea attribute, whether it fits the bottom safe area
	* uni-popup 修复 App 端弹出等待的Bug
    * uni-popup fixes the bug of pop-up waiting on the App side
	* uni-popup 优化 提升低配设备性能，优化动画卡顿问题
    * Uni-popup optimization Improve the performance of low-configuration equipment and optimize the animation freeze problem
	* uni-popup 优化 更简单的组件自定义方式
    * uni-popup optimization, simpler way of component customization
	* uni-table 修复 示例项目缺少组件的Bug
    * uni-table fixes the bug that the sample project lacks components
	* uni-forms 修复 自定义检验器失效的问题
    * uni-forms fix the problem that the custom checker fails
	* uni-title 修复 示例项目缺少组件的Bug
    * uni-title fixes the bug that the sample project lacks components
	* uni-transition 修复 示例项目缺少组件的Bug
    * uni-transition fixes the bug of missing components in the sample project
	* uni-swiper-dot 修复 示例项目缺少组件的Bug
    * uni-swiper-dot fixes the bug that the sample project lacks components
	* uni-ui 新增 组件示例地址
    * uni-ui new component example address
* 【uniCloud】
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + 【Important】 Added uni-starter integrated cloud integrated project template with common functions of commercial project development [details](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + clientDB fixes the bug affected by field permissions when deleting records and counting records [details](https://ask.dcloud.net.cn/question/122846)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB fixes the bug of date type (date) data verification error [details](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + clientDB fixes the bug that the print log in action and validateFunction cannot be viewed in the web console
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
  + unicloud-db component fixes the problem that the remove method cannot be called when querying the table [details](https://ask.dcloud.net.cn/question/122934)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 uni-AD 快手广告联盟支持插屏广告
  + Added uni-AD Kuaishou Advertising Alliance to support interstitial ads
  + 更新 uni-AD 快手广告联盟SDK 为3.3.9 版；快手内容联盟SDK 为3.3.16 版；腾讯优量汇SDK Android为4.360.1230版；穿山甲SDK Android为3.6.1.3版，iOS为3.6.1.2版
  + Update uni-AD Kuaishou Advertising Alliance SDK to version 3.3.9; Kuaishou Content Alliance SDK to version 3.3.16; Tencent Youlianghui SDK Android to version 4.360.1230; Pangolin SDK Android to version 3.6.1.3 and iOS to version 3.6. Version 1.2
  + Android平台 更新 腾讯X5内核版本为 4.3.0.93，解决X5内核渲染页面时获取的UA中不包含 MQQBrowser 关键字的Bug
  + Android platform update. Tencent X5 kernel version is 4.3.0.93, which solves the bug that the UA obtained when the X5 kernel renders the page does not contain the MQQBrowser keyword
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.0.0，提升在Android高版本设备上的推送消息到达率
  + Android platform Update the version of the push SDK used by UniPush to 3.2.0.0, which improves the arrival rate of push messages on devices with high versions of Android
  + Android平台 修复 QQ登录获取用户信息 getUserInfo 返回的昵称可能出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/120265)
  + Android platform Fixed the bug that the nickname returned by QQ login to obtain user information may appear garbled [details](https://ask.dcloud.net.cn/question/120265)
  + iOS平台 更新 高德地图 SDK 为 1.6.4无IDFA版，适配 iOS14.5 开始 AppStore 审核要求用户许可访问IDFA数据
  + iOS platform update AutoNavi Maps SDK is version 1.6.4 without IDFA, adapting to iOS 14.5 Start AppStore review requires user permission to access IDFA data
  + iOS平台 修复 3.1.11 版本引出的 横屏状态 toast 消息提示框 和 loading 提示框显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121979)
  + iOS platform fixes the bug that the toast message prompt box and loading prompt box in the horizontal screen state introduced by version 3.1.11 are displayed abnormally [details](https://ask.dcloud.net.cn/question/121979)
  + iOS平台 修复 保存文件名称中存在中文时报错的Bug
  + iOS platform fix the bug that there is an error when there is Chinese in the save file name
  + iOS平台 修复 一键登录 授权登录时需要读取IDFA的Bug
  + iOS platform fixes the bug that one-click login needs to read IDFA when authorizing login


#### 3.1.14.20210430-alpha
* 【uni-app】
  + App平台、小程序平台 新增 uni.getUserProfile 方法用于获取用户信息 [详情](https://uniapp.dcloud.io/api/plugins/login?id=getuserprofile)
  + App platform, applet platform newly added uni.getUserProfile method for obtaining user information [details](https://uniapp.dcloud.io/api/plugins/login?id=getuserprofile)
  + App平台、H5平台 优化 progress 组件支持 duration 参数
  + App platform, H5 platform optimization progress component supports duration parameters
  + App平台 优化 uni.getVideoInfo 返回信息增加 orientation、type、bitrate 属性
  + App platform optimization uni.getVideoInfo returns information to add orientation, type, bitrate attributes
  + App平台 修复 3.1.10 版本引出的 uni.chooseVideo 选取视频失败的Bug
  + App platform fixes the bug that uni.chooseVideo fails to select video from version 3.1.10
  + App-Android平台 新增 uni.request 网络请求支持 TLS 双向认证 [详情](https://ask.dcloud.net.cn/article/38981)
  + App-Android platform added uni.request network request to support TLS mutual authentication [details](https://ask.dcloud.net.cn/article/38981)
  + App-Android平台 修复 nvue map 组件 marker 执行移动动画时 callout 可能不会跟随的Bug [详情](https://ask.dcloud.net.cn/question/120985)
  + App-Android platform fix the bug that the callout may not follow when the nvue map component marker executes the moving animation [details](https://ask.dcloud.net.cn/question/120985)
  + App-Android平台 修复 nvue video 组件在调用分享功能返回后，视频封面会消失的Bug [详情](https://ask.dcloud.net.cn/question/121364)
  + App-Android platform fixes the bug that the video cover will disappear after the nvue video component returns after calling the sharing function [details](https://ask.dcloud.net.cn/question/121364)
  + H5平台 修复 getSystemInfoSync()获取windowBottom的高度错误 [详情](https://ask.dcloud.net.cn/question/121154)
  + H5 platform fix getSystemInfoSync() to get the height error of windowBottom [details](https://ask.dcloud.net.cn/question/121154)
  + 小程序平台 修复 v-for 表达式包含方法时事件编译错误的Bug
  + Mini Program Platform Fix the bug of event compilation error when v-for expression contains method
  + uni-ui 优化 为依赖 uni-icons 的 ui 组件添加依赖, 导入后自动下载依赖
  + uni-ui optimization Add dependencies for ui components that depend on uni-icons, and automatically download dependencies after import
  + uni-ui 修复 uni-data-picker 非树形数据有 where 属性查询报错的问题
  + uni-ui fix uni-data-picker non-tree data with where attribute query error
  + uni-ui 新增 uni-datetime-picker 日历形式的日期时间选择
  + uni-ui adds uni-datetime-picker date and time selection in calendar form
  + uni-ui 新增 uni-number-box v-model 双向绑定
  + uni-ui add uni-number-box v-model two-way binding
  + uni-ui 修复 uni-number-box 浮点数运算不精确的Bug
  + uni-ui fixes the bug that uni-number-box floating-point arithmetic is inaccurate
  + uni-ui 修复 uni-number-box change 事件触发不正确的Bug
  + uni-ui fix the bug that uni-number-box change event triggers incorrectly
  + uni-ui 修复 uni-rate 布局变化后星星计算不准确的Bug
  + uni-ui fixes the bug that the star calculation is inaccurate after uni-rate layout changes
  + uni-ui 新增 uni-transition 通过方法自定义动画
  + uni-ui adds uni-transition to customize animation through methods
  + uni-ui 新增 uni-transition custom-class 非 NVUE 平台支持自定义 class 定制样式
  + uni-ui adds uni-transition custom-class non-NVUE platform supports custom class customization style
  + uni-ui 优化 uni-transition 动画触发逻辑，使动画更流畅
  + uni-ui optimizes uni-transition animation trigger logic to make the animation smoother
  + uni-ui 优化 uni-transition 支持单独的动画类型
  + uni-ui optimization uni-transition supports separate animation types
  + uni-ui 优化 uni-transition 文档示例
  + uni-ui optimized uni-transition document example
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + 【Important】 ClientDB table query strategy adjustment, please refer to this document for troubleshooting and adjustment: [clientDB table query strategy adjustment](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + ClientDB added new table query to support the foreignKey joint check of the secondary table, that is, the foreignKey of the secondary table field points to the main table, and the data of the secondary table is hung under the main table [details]( https://uniapp.dcloud.net.cn/uniCloud /clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
  + uniCloud local debugging plug-in fixes the bug that multiple requests and errors are reported when Alibaba Cloud occasionally starts up
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 一键登录 全屏模式支持在登录界面添加自定义登录按钮 [详情](https://uniapp.dcloud.io/univerify)
  + Added one-click login Full screen mode supports adding custom login buttons in the login interface [details](https://uniapp.dcloud.io/univerify)
  + 新增 获取视频信息 getVideoInfo 支持获取画面方向 orientation、视频格式 type、视频码率 bitrate [文档](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + Added Get video information. getVideoInfo supports getting screen orientation, video format type, video bitrate [document](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + Android平台 优化 原生模板隐私政策提示框逻辑，解决部分应用市场检测到弹出隐私政策框之前读取mac地址和应用列表的问题 [文档](https://ask.dcloud.net.cn/article/36937)
  + The Android platform optimizes the logic of the privacy policy prompt box of the native template, and solves the problem of reading the mac address and application list before the privacy policy box pops up in some application markets [document](https://ask .dcloud.net.cn/article/ 36937)
  + Android平台 更新 新浪微博分享、授权登录 SDK 为 10.10.0 版，适配支持 Android11 设备
  + Android platform update, Sina Weibo sharing, authorized login SDK is version 10.10.0, adapt to support Android11 ​​​​devices
  + Android平台 更新 高德地图 SDK 为 7.9.1 版，高德定位 SDK 为 5.3.1 版，友盟统计 SDK 为 9.3.8 版
  + Android platform update AutoNavi Map SDK is version 7.9.1, AutoNavi Positioning SDK is version 5.3.1, Youmeng Statistics SDK is version 9.3.8
  + Android平台 修复 腾讯云等安全检测平台报的部分高风险漏洞 [详情](https://ask.dcloud.net.cn/article/39020)
  + Android platform Fix some high-risk vulnerabilities reported by security detection platforms such as Tencent Cloud [details](https://ask.dcloud.net.cn/article/39020)
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android platform fixes the bug that uni-AD opened basic screen ads may cause a crash in a weak network state
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug
  + Android platform fixes the bug that uni-AD Kuaishou Alliance's information flow advertisement may return incorrect height and cause abnormal display
  + Android平台 修复 uni原生插件在原生模板隐私政策提示框之前可能进行初始化违规读取用户数据的Bug
  + Android platform fixes the bug that uni native plugin may be initialized before the original template privacy policy prompt box to read user data in violation of regulations
  + 【重要】iOS平台 优化 广告标识 IDFA 操作逻辑，适配从 iOS14.5 开始 AppStore 审核要求用户许可收集跟踪数据 [详情](https://ask.dcloud.net.cn/article/36107)
  + 【Important】 iOS platform optimizes the advertising logo IDFA operation logic, and adapts to start from iOS 14.5 AppStore review requires user permission to collect tracking data [details](https://ask.dcloud.net.cn/article/36107)
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS platform fixed a bug where the default rounded values ​​​​of the one-click login login and other login buttons are inconsistent [details](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 微信授权登录调用 authorize 动态传入 appid 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/121292)
  + iOS platform fixes the bug that the authorize dynamic incoming appid parameter does not take effect when wechat authorized login call authorize [details](https://ask.dcloud.net.cn/question/121292)



#### 3.1.10.20210416-alpha
* 【uni-app】
  + App平台 新增 插屏广告 uni.createInterstitialAd [详情](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App platform add interstitial ads uni.createInterstitialAd [details](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App平台、H5平台 新增 支持 uni.getVideoInfo 用于获取视频信息 [详情](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App platform, H5 platform added support uni.getVideoInfo for obtaining video information [details](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App平台、H5平台 优化 uni.chooseLocation 地图选点支持搜索更大范围
  + App platform, H5 platform optimization uni.chooseLocation map selection to support a larger search
  + App平台、H5平台 优化 input 组件支持 cursor、selectionStart、selectionEnd 属性
  + App platform, H5 platform optimization input component supports cursor, selectionStart, selectionEnd attributes
  + App平台、H5平台 修复 uni.canvasToTempFilePath 参数 quality 无效的Bug [详情](https://ask.dcloud.net.cn/question/119596)
  + App platform, H5 platform Fix the bug that the parameter quality of uni.canvasToTempFilePath is invalid [details](https://ask.dcloud.net.cn/question/119596)
  + App平台、H5平台 修复 checkbox 组件 disabled 属性无相关样式的Bug
  + App platform, H5 platform Fix the bug that the disabled attribute of the checkbox component has no related styles
  + App平台 新增 支持 uni.compressVideo 用于压缩视频 [详情](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App platform added support uni.compressVideo for compressing video [details](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App平台 优化 uni.chooseVideo 支持 compressed 参数
  + App platform optimization uni.chooseVideo supports compressed parameters
  + App平台 优化 video 组件支持 enable-play-gesture 属性
  + App platform optimization video component support enable-play-gesture attribute
  + App平台 修复 image 组件加载后导致其他原生组件显示错位的Bug
  + App platform fixed a bug that caused other native components to display misalignment after the image component was loaded
  + App平台 修复 多列 picker 组件未设置 value 报错的Bug [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App platform Fix the bug that the value of multi-column picker component is not set to report an error [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App平台 修复 uni.getStorageInfo 获取信息中部分 key 未包含的Bug [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App platform Fix bug that uni.getStorageInfo is not included in some keys in the information obtained [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App平台 修复 uni.getSystemInfo 返回的 system 信息未包含系统名称的Bug
  + App platform fix the bug that the system information returned by uni.getSystemInfo does not contain the system name
  + App-Android平台 修复 部分设备 input 组件设置 focus 属性为 true 时键盘收回的Bug
  + App-Android platform fixes the bug that the keyboard is retracted when the focus attribute is set to true in the input component of some devices
  + App-Android平台 修复 nvue onLoad 事件调用 plus.navigator.hideSystemNavigation 可能出现页面高度异常的Bug
  + App-Android platform Fix the bug that the page height may be abnormal when the nvue onLoad event calls plus.navigator.hideSystemNavigation
  + App-Android平台 修复 nvue list 组件中加载大量图片上下滚动可能引起崩溃的Bug
  + App-Android platform fixes the bug that loading a large number of pictures in the nvue list component may cause a crash
  + App-Android平台 修复 nvue map 组件中多个 marker 切换后 callout 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100883)
  + App-Android platform Fix the bug that the callout may display abnormally after switching multiple markers in the nvue map component [details](https://ask.dcloud.net.cn/question/100883)
  + App-Android平台 修复 nvue map 组件与页面拖拽滚动手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/120600)
  + App-Android platform Fix the bug of conflict between nvue map component and page drag and scroll gesture [details](https://ask.dcloud.net.cn/question/120600)
  + App-Android平台 修复 nvue picker-view 组件在部分设备可能显示不正常的Bug
  + App-Android platform fixes the bug that the nvue picker-view component may display abnormally on some devices
  + App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
  + App-iOS platform fixes the bug that adding too many sub-components under the nvue scroll-view component will cause obvious lag [details](https://ask.dcloud.net.cn/question/118444)
  + App-iOS平台 修复 nvue map 组件 marker 标注的 label 设置 anchorY 偏移值无效的Bug [详情](https://ask.dcloud.net.cn/question/120953)
  + App-iOS platform fixes the bug that the anchorY offset value of the label marked by the marker of the nvue map component is invalid [details](https://ask.dcloud.net.cn/question/120953)
  + App-iOS平台 修复 nvue image 组件加载网络图片发送请求时没有携带 cookie 的Bug
  + App-iOS platform fixes the bug that the nvue image component does not carry cookies when loading network images and sending requests
  + H5平台 优化 uni.getSystemInfo 返回的 system 信息支持 Windows、Mac、Linux
  + H5 platform optimization uni.getSystemInfo returns system information to support Windows, Mac, Linux
  + H5平台 修复 picker-view-column 中的元素无法触发 click 等事件的Bug [详情](https://ask.dcloud.net.cn/question/119346)
  + H5 platform Fix the bug that elements in picker-view-column cannot trigger events such as click [details](https://ask.dcloud.net.cn/question/119346)
  + H5平台 修复 innerAudio.stop 触发 onCanplay 的Bug [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + H5 platform fix the bug that innerAudio.stop triggers onCanplay [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + 小程序平台 修复 含有逻辑运算的复杂表达式编译后和预期不一致的Bug [详情](https://ask.dcloud.net.cn/question/118651)
  + Mini Program Platform Fixes a bug where complex expressions containing logical operations are inconsistent with expectations after compilation [details](https://ask.dcloud.net.cn/question/118651)
  + 支付宝小程序平台 修复 默认插槽默认内容一直显示的Bug [详情](https://ask.dcloud.net.cn/question/116404)
  + Alipay applet platform fixed the bug that the default content of the default slot is always displayed [details](https://ask.dcloud.net.cn/question/116404)
  + uni-ui 新增 uni-data-picker 支持云端非树形表结构数据 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui added uni-data-picker to support cloud non-tree table structure data [details](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-data-checkbox nvue 下无法选中的问题 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui fixes the problem that uni-data-checkbox cannot be selected under nvue [details](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 uni-data-picker 根节点 parent_field 字段等于null时选择界面错乱问题 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui Fix the problem of the selection interface confusion when the parent_field field of the root node of uni-data-picker is equal to null [details](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-file-picker 选择的文件非 file-extname 字段指定的扩展名报错的Bug [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui Fix the bug that the file selected by uni-file-picker is not the extension specified by the file-extname field [details](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-file-picker file-extname 字段支持字符串写法，多个扩展名需要用逗号分隔 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui optimization uni-file-picker file-extname field supports string writing, multiple extensions need to be separated by commas [details](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 修复 微信小程序 nv_navigator is not defined 报错的bug
  + uni-ui fix the bug that the WeChat applet nv_navigator is not defined reports an error
  + uni-ui 修复 uni-load-more 在首页使用时，h5 平台报 'uni is not defined' 的 bug [详情](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui fixes the bug that the h5 platform reports'uni is not defined' when uni-load-more is used on the homepage [details](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui 优化 uni-pagination PC 和 移动端适配不同的 ui [详情](https://ext.dcloud.net.cn/plugin?id=32)
  + uni-ui optimization uni-pagination PC and mobile end adapt to different ui [details](https://ext.dcloud.net.cn/plugin?id=32)
  + uni升级中心 App端 新增 call-check-version.js，可用于单独检测是否有更新 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
  + Uni upgrade center App side added call-check-version.js, which can be used to separately check whether there is an update [details](https://ext.dcloud.net.cn/plugin?id=4542)
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + 【Important】 ClientDB table query strategy adjustment, please refer to this document for troubleshooting and adjustment: [clientDB table query strategy adjustment](https://ask.dcloud.net.cn/article/38966)
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
  + Fixed the bug that uniCloud.chooseAndUploadFile could not evoke the selected file on the real device of the iOS WeChat applet
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
  + uniCloud admin optimizes many details such as error prompts and keyboard responses, and updates many dependencies such as uni-id [details](https://ext.dcloud.net.cn/plugin?id=3268)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 uni-AD支持插屏广告 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + Added uni-AD to support interstitial ads [Specification](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.12.4 版，穿山甲SDK 为 3.5.5.0 版；快手联盟SDK Android为 3.3.8 版
  + Update uni-AD Tencent Youlianghui SDK iOS to version 4.12.4, Pangolin SDK to version 3.5.5.0; Kuaishou Alliance SDK Android to version 3.3.8
  + 新增 离线打包支持 AppKey 管理 [文档](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + Added offline packaging support AppKey management [document](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + 新增 压缩视频支持 filename 属性设置压缩后文件保存路径功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + New Compressed video supports the filename attribute to set the file save path function after compression [Specification](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + 优化 一键登录 未通过审核时云端打包后调用API返回 -7 错误 [规范](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7%a0%81)
  + Optimized that when one-click login fails the audit, calling API after cloud packaging returns -7 error [Specification](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7 %a0%81)
  + 修复 一键登录 授权界面显示后，调用原生模态窗口无法正常显示的Bug
  + Fix the bug that the native modal window cannot be displayed normally after the authorization interface is displayed after one-click login
  + 修复 存在开屏广告时 splashclosed 事件可能在启动界面关闭前触发的Bug
  + Fix the bug that the splashclosed event may be triggered before the startup interface is closed when there are open screen ads
  + Android平台 更新 公共测试证书，解决某些检测机构报病毒的问题 [文档](https://ask.dcloud.net.cn/article/36522)
  + Android platform update public test certificate, solve the problem of virus reporting by some testing agencies [document](https://ask.dcloud.net.cn/article/36522)
  + Android平台 更新 gif图片库 android-gif-drawable 为 1.2.23 版，解决安全检测报存在远程代码执行漏洞的问题
  + Android platform update the gif picture library android-gif-drawable to version 1.2.23 to solve the problem of remote code execution vulnerabilities reported by security inspections
  + Android平台 修复 申请权限被用户拒绝后可能无法再次正常申请权限的Bug [详情](https://ask.dcloud.net.cn/question/120747)
  + Android platform fixes the bug that the user may not be able to normally apply for the permission again after the application for permission is rejected by the user [details](https://ask.dcloud.net.cn/question/120747)
  + Android平台 修复 UniPush个推模块过度申请权限的Bug [详情](https://ask.dcloud.net.cn/question/119240)
  + Android platform Fix the bug of excessive application permission of the UniPush push module [details](https://ask.dcloud.net.cn/question/119240)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频的 cookie 与 X5 内核 webview 页面没有同步共享的Bug
  + Android platform fixes the bug that the video playback control is not synchronized and shared with the cookies of the http/https address video and the X5 kernel webview page
  + Android平台 修复 一键登录 在部分设备上服务协议文本字体显示过大的Bug
  + Android platform fixes the bug that the font of the service agreement text is displayed too large on some devices with one-click login
  + Android平台 修复 一键登录 显示和关闭授权界面动画时间过长的Bug
  + Android platform fixes the bug that the one-click login shows and closes the authorization interface animation time is too long
  + Android平台 修复 Downloader 下载较大文件时可能引起页面无法更新的Bug
  + Android platform fixes the bug that the Downloader may cause the page to fail to update when downloading large files
  + Android平台 修复 部分华为手机调用相机录像成功后无法找到视频文件的Bug
  + Android platform fixes the bug that some Huawei phones cannot find the video file after successfully calling the camera to record
  + iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
  + iOS platform fixes uni-AD only opening enhanced screen ads may cause the bug that the spalsh page cannot be closed
  + iOS平台 修复 Apple应用内支付 IAP 某些情况丢单无法恢复的Bug [文档](https://ask.dcloud.net.cn/article/497)
  + iOS platform Fix the bug that Apple's in-app payment IAP cannot be recovered in some cases [document](https://ask.dcloud.net.cn/article/497)
  + iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
  + iOS platform fixes the bug that a white screen may appear after the application is overwritten and installed
  + iOS平台 修复 从本地相册选择保存在 iCloud 的视频在下载失败时可能引起崩溃的Bug
  + iOS platform fixes a bug that may cause a crash when the video saved in iCloud is selected from the local album and the download fails
  + iOS平台 修复 从本地相册选择gif图片预览时不能播放的Bug
  + iOS platform fixes a bug that cannot be played when previewing gif images from local albums
  + iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
  + iOS platform fix the bug that the bottom security area is not adapted to the iPhone12 series devices [details](https://ask.dcloud.net.cn/question/119291)
  + iOS平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + iOS platform fixes the bug that the video playback control playback http/https address video does not sync and share the cookie bug
  + iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug
  + iOS platform fixes the bug that the video playback control VideoPlayer may play some videos and the display direction may be incorrect



#### 3.1.8.20210407-alpha
* 【uni-app】
  + App-Android平台 修复 3.1.6 版本引出的 nvue scroll-view组件设置 scroll-x 为 true 时可能引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/119858)
  + App-Android platform fixes the bug that may cause crash when setting scroll-x of the nvue scroll-view component derived from version 3.1.6 to true [details](https://ask.dcloud.net.cn/question/119858)
  + App-iOS平台 修复 picker 组件部分情况下显示异常的Bug [详情](https://ask.dcloud.net.cn/question/119591)
  + App-iOS platform Fix the bug that the picker component displays abnormally in some cases [details](https://ask.dcloud.net.cn/question/119591)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 uni-AD 激励视频播放超过30秒的穿山甲广告点击跳过按钮 onClose 回调中 isEnd 属性值为 false 的Bug
  + Android platform fixes the bug where the isEnd attribute value is false in the onClose callback of the pangolin ad when the uni-AD rewarded video is played for more than 30 seconds.
  + iOS平台 修复 一键登录 授权登录界面使用浅色背景可能看不到 loading 显示效果的Bug
  + iOS platform fixes the bug that the loading display effect may not be seen when using a light background on the authorized login interface with one-click login
* 【uniCloud】
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + Added [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center), which provides simple, easy-to-use, unified App management, App version management, installation package release management, and upgrade Detection and update management.
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + uniCloud local debugging plug-in Fixes the bug that Tencent Cloud connects to the local cloud function derived from version 3.1.5 reports an error after running for a period of time [details](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + Alibaba Cloud added support for setting single instance concurrency for cloud functions [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)
  + Alibaba Cloud added support for TTL index [details](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)



#### 3.1.6.20210318-alpha
* 【uni-app】
  + 百度小程序平台 修复 使用基础库 3.260+ 时，复杂表达式不显示的Bug [详情](https://ask.dcloud.net.cn/question/118213)
  + Baidu applet platform fixes the bug that complex expressions are not displayed when using basic library 3.260+ [details](https://ask.dcloud.net.cn/question/118213)
  + 百度小程序平台 修复 使用 usingComponents 引入部分动态库组件无效的Bug [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + Baidu applet platform fixes the bug that using usingComponents to introduce some dynamic library components is invalid [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
  + App-iOS platform fixes the bug that the nvue web-view component does not take effect when the app setting allowsInlineMediaPlayback is true [details](https://ask.dcloud.net.cn/question/106864)
  + App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)
  + App-iOS platform fixes the bug that setting arrowIconPath to custom arrow icon in nvue map component polyline is invalid [details](https://ask.dcloud.net.cn/question/118538)
  + 【重要】uni-ui 新增 调整为uni_modules目录规范，支持在HBuilderX里直接发布、更新、删除等;
  + 【Important】 uni-ui is newly added and adjusted to uni_modules directory specification, supporting direct publishing, updating, deleting, etc. in HBuilderX;
  + uni-ui 新增 uni-row 组件，栅格系统;
  + uni-ui adds uni-row component, grid system;
  + uni-ui 新增 uni-datetime-picker 的 hide-second 属性、border 属性;
  + uni-ui adds the hide-second attribute and border attribute of uni-datetime-picker;
  + uni-ui 修复 uni-datetime-picker 选择跟显示的日期不一样的 bug，
  + uni-ui fixes the bug that uni-datetime-picker chooses different dates from the displayed date,
  + uni-ui 修复 uni-datetime-picker change事件触发2次的 bug
  + uni-ui fix the bug that uni-datetime-picker change event is triggered twice
  + uni-ui 修复 uni-datetime-picker 分、秒 end 范围错误的 bug
  + uni-ui fix the bug that uni-datetime-picker has the wrong end range of minutes and seconds
  + uni-ui 新增 uni-tr selectable 属性，用于 type=selection 时，设置某行是否可由全选按钮控制
  + uni-ui adds uni-tr selectable attribute, used to set whether a row can be controlled by the select all button when type=selection
  + uni-ui 新增 uni-data-checkbox 新增 disabled属性，支持nvue
  + uni-ui add uni-data-checkbox add disabled attribute, support nvue
  + uni-ui 优化 uni-data-checkbox  无选项时提示“暂无数据”
  + uni-ui optimization uni-data-checkbox prompts "No data temporarily" when there is no option
  + uni-ui 优化 uni-data-checkbox  默认颜色显示
  + uni-ui optimization uni-data-checkbox default color display
  + uni-ui 新增 uni-link href 属性支持 tel:|mailto:
  + uni-ui adds uni-link href attribute support tel:|mailto:
  + uni-ui 新增 uni-table 示例demo
  + uni-ui add uni-table example demo
  + uni-ui 修复 uni-data-picker 微信小程序某些情况下无法选择的问题，事件无法触发的问题
  + uni-ui fixes the problem that the uni-data-picker WeChat applet cannot be selected in some cases, and the event cannot be triggered
  + uni-ui 修复 uni-nav-bar easycom 下，找不到 uni-status-bar 的bug
  + uni-ui fix the bug that uni-status-bar cannot be found under uni-nav-bar easycom
  + uni-ui 修复 uni-easyinput 示例在 qq 小程序上的bug
  + uni-ui fix the bug of uni-easyinput example on qq applet
  + uni-ui 修复 uni-forms 动态显示uni-forms-item的情况下，submit 方法获取值错误的Bug
  + uni-ui fixes the bug that the submit method gets the wrong value when uni-forms dynamically displays uni-forms-item
  + uni-ui 修复 uni-forms schema 默认提示语不准确的问题
  + uni-ui fix the problem of inaccurate default prompts in uni-forms schema
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui fixes the bug that uni-forms occasionally gets incorrect form values
  + uni-ui 修复 uni-forms 校验 uni-data-picker value 为 0 时，返回值错误的Bug
  + uni-ui fixes the bug that the return value is wrong when uni-forms check uni-data-picker value is 0
  + uni-ui 修复 uni-forms uni-forms-item 组件隐藏时依然触发校验的bug
  + uni-ui fix the bug that the verification is still triggered when the uni-forms uni-forms-item component is hidden
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui fixes the bug that uni-forms occasionally gets incorrect form values
  + uni-ui 调整 cli 项目 建议使用 easycom 方式引用组件，如使用按需引用，需手动维护组件内部引用
  + Uni-ui adjustment cli project It is recommended to use easycom to reference components. If you use on-demand reference, you need to manually maintain the internal reference of the component
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 应用无法正常运行的Bug
  + Android platform fixes the bug that wap2app application cannot run normally due to version 3.1.0
  + Android平台 修复 一键登录 在部分双卡设备可能无法调起授权页面的Bug [详情](https://ask.dcloud.net.cn/question/117826)
  + Android platform fixes the bug that one-click login may not be able to bring up the authorization page on some dual-card devices [details](https://ask.dcloud.net.cn/question/117826)


#### 3.1.5.20210316-alpha
* 【uni-app】
  + App平台、H5平台 优化 uni.showModal、uni.showActionSheet 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App platform, H5 platform optimization uni.showModal, uni.showActionSheet and other API built-in internationalization support [details](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 应用退出提示内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App platform optimization App exit prompt Built-in internationalization support [details](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 uni.scanCode、uni.previewImage 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App platform optimization uni.scanCode, uni.previewImage and other API built-in internationalization support [details](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 修复 SelectorQuery.exec 在安卓 4.x 系统报错的 Bug
  + App platform Fixed the bug that SelectorQuery.exec reported an error in Android 4.x system
  + App-iOS平台 修复 nvue ad-draw 组件播放优量汇视频广告可能无声音的Bug
  + App-iOS platform fixes the bug that the nvue ad-draw component may have no sound when playing Youlianghui video ads
  + App-iOS平台 修复 subNVue input 组件获取焦点后隐藏页面时软键盘不会关闭的Bug [详情](https://ask.dcloud.net.cn/question/117872)
  + App-iOS platform fix the bug that the soft keyboard will not close when the page is hidden after the subNVue input component gets the focus [details](https://ask.dcloud.net.cn/question/117872)
  + H5平台 优化 picker、video 组件内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + H5 platform optimization picker, video components built-in internationalization support [details](https://uniapp.dcloud.io/collocation/i18n)
* 【uniCloud】
  + unicloud-db组件 add、update、remove方法新增可选参数needConfirm、needLoading、loadingTitle [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + Add optional parameters needConfirm, needLoading, loadingTitle for unicloud-db component add, update, and remove methods [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
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
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 相册选择界面的预览界面中补充图片编辑功能，支持裁剪、涂鸦、马赛克、添加文字等。无需调用API，升级新版即可。
  + Added the image editing function in the preview interface of the album selection interface, supporting cropping, graffiti, mosaic, adding text, etc. No need to call API, just upgrade the new version.
  + 新增 一键登录 支持全屏模式
  + Added one-click login to support full screen mode
  + 新增 uni-AD 支持快手内容联盟 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + Added uni-AD to support Kuaishou Content Alliance [Specification](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + 新增 plus.zip.compressVideo 支持压缩视频功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
  + Added plus.zip.compressVideo to support compressed video function [Specification](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.333.1203版；穿山甲SDK iOS为3.4.2.8版；快手联盟SDK Android为3.3.7版
  + Update uni-AD Tencent Youlianghui SDK Android version 4.333.1203; Pangolin SDK iOS version 3.4.2.8; Kuaishou Alliance SDK Android version 3.3.7
  + Android平台 更新 QQ 分享、登录SDK版本为3.5.2，解决在 Android11 设备无法分享图片的Bug [详情](https://ask.dcloud.net.cn/question/118510)
  + Android platform update QQ sharing, login SDK version to 3.5.2, solve the bug that pictures cannot be shared on Android11 ​​devices [details](https://ask.dcloud.net.cn/question/118510)
  + Android平台 优化 云端打包 启动界面样式为自定义启动图时的显示速度
  + Android platform optimization cloud packaging startup interface style is the display speed of the custom startup map
  + Android平台 优化 一键登录 服务协议复选框勾选操作不灵敏的Bug [详情](https://ask.dcloud.net.cn/question/118305)
  + Android platform optimization One-click login Service agreement check box to check the bug that the operation is not sensitive [details](https://ask.dcloud.net.cn/question/118305)
  + Android平台 修复 一键登录 在部分设备服务协议项超过两行可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/116873)
  + Android platform fix one-click login. In some devices, the service agreement items may display abnormal bugs with more than two lines [details](https://ask.dcloud.net.cn/question/116873)
  + Android平台 优化 视频播放控件 设置 playStrategy 属性m3u8视频播放速度 [详情](https://ask.dcloud.net.cn/question/117115)
  + Android platform optimization video playback control set playStrategy attribute m3u8 video playback speed [details](https://ask.dcloud.net.cn/question/117115)
  + Android平台 修复 视频播放控件 动态设置 controls 属性延时生效的Bug [详情](https://ask.dcloud.net.cn/question/117457)
  + Android platform fixes the bug that the dynamic setting of the controls attribute of the video playback control takes effect after a delay [details](https://ask.dcloud.net.cn/question/117457)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + Android platform fixes the bug that the video playback control playback http/https address video does not share the cookie synchronously
  + Android平台 修复 Webview窗口在部分场景加载 html 页面可能出现 plus 对象为空的Bug
  + Android platform fix the bug that the plus object may be empty when the html page is loaded in some scenes in the Webview window
  + iOS平台 新增 uni原生插件云端打包支持iOS Extension [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS platform New uni native plug-in cloud packaging support iOS Extension [document](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS平台 修复 从系统相册选择视频文件返回的大小和宽高不正确的Bug [详情](https://ask.dcloud.net.cn/question/117975)
  + iOS platform fixed the bug that the size and width of the video file returned from the system album were incorrect [details](https://ask.dcloud.net.cn/question/117975)
  + iOS平台 修复 在 iOS14 系统返回安全区域的top不正确引起界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/117849)
  + iOS platform fixes the bug that the top of the iOS14 system returns to the safe area incorrectly causes the interface to display abnormally [details](https://ask.dcloud.net.cn/question/117849)
* 【UniMPSDK】
  + Android平台 修复 部分直达nvue页面中本地路径图片无法正常加载显示的Bug
  + Android platform fixes the bug that the local path pictures in some direct nvue pages cannot be loaded and displayed normally

#### 3.1.4.20210303-alpha
* 【uni-app】
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 subNvue 页面根节点 class 无效的 Bug
  + App platform fix the bug that the root node class of subNvue page is invalid when nvueStyleCompiler is set to uni-app
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 nvue 页面样式中 !important 前不含空格时报错的Bug [详情](https://ask.dcloud.net.cn/question/117212)
  + App platform Fix the bug that an error is reported when nvueStyleCompiler is set to uni-app when there is no space before !important [details](https://ask.dcloud.net.cn/question/117212)
  + H5平台 修复 部分情况下获取 wxs 实例错误的的Bug [详情](https://ask.dcloud.net.cn/question/117097)
  + H5 platform fixed the bug of getting wxs instance error in some cases [details](https://ask.dcloud.net.cn/question/117097)
* 【uniCloud】
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB fixes the bug of database operation method in error report
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB fixes the bug of abnormal performance of jql non-operation
  + clientDB 优化 部分场景下getCount性能
  + clientDB optimization getCount performance in some scenarios
  + clientDB 优化 部分场景下jql联表查询性能
  + clientDB optimization jql join table query performance in some scenarios
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 微信分享本地图片在部分 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/117050)
  + Android platform fixes the bug that WeChat sharing local pictures may fail on some Android11 ​​devices [details](https://ask.dcloud.net.cn/question/117050)
  + Android平台 修复 页面中 input 标签 type 为 tel/email 时，弹出软键盘上方的辅助输入栏内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/118051)
  + Android platform fixes the bug that when the input tag type on the page is tel/email, the content of the auxiliary input field above the pop-up soft keyboard may display abnormally [details](https://ask.dcloud.net.cn/question/118051)
  + iOS平台 修复 保存 gif 图片到系统相册可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/117814)
  + iOS platform fixes the bug that saving gif pictures to the system album may cause freezing or crashing [details](https://ask.dcloud.net.cn/question/117814)


#### 3.1.3.20210219-alpha
* 【uni-app】
  + App平台、H5平台 修复 3.1.0 版本引出的 canvasGetImageData、canvasToTempFilePath 获取高度错误Bug [详情](https://ask.dcloud.net.cn/question/117082)
  + App platform, H5 platform Fix the canvasGetImageData, canvasToTempFilePath get height error bug introduced by version 3.1.0 [details](https://ask.dcloud.net.cn/question/117082)
  + App平台、H5平台 修复 3.1.0 版本引出的获取自定义组件 dataset 数据缺失的Bug [详情](https://ask.dcloud.net.cn/question/117206)
  + App platform, H5 platform Fix the bug of missing data for obtaining custom component dataset, which is derived from version 3.1.0 [details](https://ask.dcloud.net.cn/question/117206)
  + App平台 修复 input 组件在安卓设备上 focus 事件触发错乱的Bug [详情](https://ask.dcloud.net.cn/question/116576)
  + App platform Fix the bug that the focus event of the input component triggers confusion on Android devices [details](https://ask.dcloud.net.cn/question/116576)
  + App-Android平台 修复 3.1.0 版本引出的 nvue input 组件设置 ajust-position 为 false 后，keyboardheightchange 事件返回软键盘高度为0的Bug [详情](https://ask.dcloud.net.cn/question/117295)
  + App-Android platform fixes the bug that the keyboardheightchange event of the nvue input component derived from version 3.1.0 sets ajust-position to false [details](https://ask.dcloud.net.cn/question /117295)
  + App-Android平台 修复 nvue input 组件 focus 事件可能触发两次的Bug
  + App-Android platform fix the bug that the focus event of nvue input component may be triggered twice
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 项目真机运行页面标题栏无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/117278)
  + Android platform Fix the bug that the title bar of the wap2app project on real machine cannot be displayed normally in the 3.1.0 version of the project [details](https://ask.dcloud.net.cn/question/117278)


#### 3.1.2.20210206-alpha
* 【uni-app】
  + App平台 修复 nvueStyleCompiler 配置为 uni-app 时 list 组件内 class 动态更新失效的Bug [详情](https://ask.dcloud.net.cn/question/116913)
  + App platform Fix the bug that the dynamic update of the class in the list component fails when nvueStyleCompiler is configured as uni-app [details](https://ask.dcloud.net.cn/question/116913)
  + H5平台 修复 应用初始化以前调用 uni.getSystemInfoSync 报错的Bug [详情](https://ask.dcloud.net.cn/question/116612)
  + H5 platform fixes the bug of calling uni.getSystemInfoSync before application initialization [details](https://ask.dcloud.net.cn/question/116612)


#### 3.1.1.20210204-alpha
* 【uni-app】
  + 【重要】App平台 新增 nvue 组件支持 render-whole 属性。可以按组件整体渲染，而不是从上到下逐行渲染 [详情](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + 【Important】 App platform newly added nvue component to support render-whole attribute. It can be rendered by components as a whole, instead of rendering line by line from top to bottom [details](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + App平台 新增 manifest.json 支持 nvue css 编译新旧版本配置 app-plus -> nvueStyleCompiler。可切换老版的nvue css 编译器 [详情](https://ask.dcloud.net.cn/article/38751)
  + App platform added manifest.json to support nvue css to compile new and old versions to configure app-plus -> nvueStyleCompiler. Switch to the old version of nvue css compiler [details](https://ask.dcloud.net.cn/article/38751)
  + App平台 修复 纯 nvue 编译模式下 pages.json 缺少 style 节点编译报错的Bug
  + App platform fixes the bug that pages.json lacks style node compilation error in pure nvue compilation mode
  + App平台 修复 3.1.0 版本引出的 nvue 页面中样式与 app.vue 样式冲突的Bug [详情](https://ask.dcloud.net.cn/question/116787)
  + App platform Fix the bug that the style conflicts with app.vue style in the nvue page introduced by version 3.1.0 [details](https://ask.dcloud.net.cn/question/116787)
  + App平台 修复 3.1.0 版本引出的 nvue 页面中 border-color 使用 rgb 类型时解析报错的Bug [详情](https://ask.dcloud.net.cn/question/116746)
  + App platform Fix the bug of parsing error when using rgb type border-color in the nvue page that was introduced by version 3.1.0 [details](https://ask.dcloud.net.cn/question/116746)
  + H5平台 新增 image 组件支持 draggable 属性
  + H5 platform added image component to support draggable attribute
  + H5平台 优化 swiper、movable 组件拖动时禁止 click 事件触发
  + H5 platform optimizes swiper and movable components to prohibit click event triggering when dragging
* 【uniCloud】
  + 修复 uniCloud.getCurrentUserInfo 报错的Bug
  + Fix the bug of uniCloud.getCurrentUserInfo reporting errors
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 更新 uni-AD 腾讯优量汇SDK为4.332.1202版
  + Android platform update uni-AD Tencent Youlianghui SDK to version 4.332.1202

#### 3.1.0.20210202-alpha
* 【uni-app】
  + 新增 uni.getSystemInfo 支持获取 deviceId 作为设备标识。App 端根据设备信息生成，非 App 端由 uni-app 框架生成基于随机数的 id
  + Added uni.getSystemInfo to support obtaining deviceId as device identification. The App side is generated according to the device information, and the non-App side is generated by the uni-app framework to generate an id based on a random number
  + App平台、H5平台 优化 dataset 获取逻辑，完善非 string 类型支持
  + App platform, H5 platform optimize dataset acquisition logic, improve non-string type support
  + App平台、H5平台 修复 css 媒体查询内的 rpx 单位不生效的Bug [详情](https://ask.dcloud.net.cn/question/112279)
  + App platform, H5 platform Fix the bug that the rpx unit in css media query does not take effect [details](https://ask.dcloud.net.cn/question/112279)
  + App平台、H5平台 修复 picker 组件特定情况下设置 start、end 表现异常的Bug [详情](https://ask.dcloud.net.cn/question/114223)
  + App platform, H5 platform Fix the bug that the picker component sets start and end abnormally under certain circumstances [details](https://ask.dcloud.net.cn/question/114223)
  + App平台、H5平台 修复 部分时机获取 input、textarea 组件值不正确的Bug [详情](https://ask.dcloud.net.cn/question/115897)
  + App platform, H5 platform fix the bug that the input and textarea component values ​​are incorrect at some occasions [details](https://ask.dcloud.net.cn/question/115897)
  + 【重要】App平台 新增 nvue css 支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）
  + 【Important】 App platform newly added nvue css to support combination selectors (adjacent brother selector, normal brother selector, child selector, descendant selector)
  + App平台 新增 manifest.json 支持全屏配置 app-plus -> fullscreen
  + App platform added manifest.json to support full screen configuration app-plus -> fullscreen
  + App平台 新增 支持 uni.offNetworkStatusChange 方法
  + App platform added support uni.offNetworkStatusChange method
  + App平台 新增 支持 uni.offKeyboardHeightChange 方法
  + App platform added support uni.offKeyboardHeightChange method
  + App平台 新增 input、textarea 组件支持 keyboardheightchange 事件
  + App platform added input and textarea components to support keyboardheightchange event
  + App平台 新增 nvue map 组件支持展示 POI 点、建筑物、个性化地图等新特性 [详情](https://uniapp.dcloud.io/component/map)
  + App platform added nvue map component to support new features such as POI points, buildings, personalized maps, etc. [details](https://uniapp.dcloud.io/component/map)
  + App平台 新增 video 组件新增属性 codec、http-cache、play-strategy
  + App platform added video component added new attributes codec, http-cache, play-strategy
  + 【重要】App平台 优化 nvue 支持更多简写样式：border、border-top、border-right、border-bottom、border-left、border-style、border-width、border-color、border-radius、flex-flow、font、background
  + 【Important】 App platform optimization nvue supports more shorthand styles: border, border-top, border-right, border-bottom, border-left, border-style, border-width, border-color, border-radius, flex- flow, font, background
  + App平台 优化 uni.getNetworkType 支持获取 5g 网络类型
  + App platform optimization uni.getNetworkType supports obtaining 5g network types
  + App平台 优化 uni.saveImageToPhotosAlbum 支持返回保存路径
  + App platform optimization uni.saveImageToPhotosAlbum supports returning to the save path
  + App平台 修复 uni.canvasToTempFilePath 配置的大小超过 canvas 大小时获取的图像空白的Bug [详情](https://ask.dcloud.net.cn/question/111225)
  + App platform Fix the bug that the size of uni.canvasToTempFilePath configuration exceeds the size of canvas and the image obtained is blank [details](https://ask.dcloud.net.cn/question/111225)
  + App平台 修复 cover-view 样式动态变更未生效的Bug
  + App platform fixed the bug that the dynamic change of cover-view style did not take effect
  + App平台 修复 部分情况下组件递归调用内部 v-for 报错的Bug
  + App platform fixes the bug that components recursively call internal v-for in some cases
  + App平台 修复 特定分辨率（iPhone12 Pro）下文字换行错误的Bug [详情](https://ask.dcloud.net.cn/question/114636)
  + App platform Fix the bug of text wrapping error under certain resolution (iPhone12 Pro) [details](https://ask.dcloud.net.cn/question/114636)
  + App平台 修复 部分情况下 v-for 渲染列表事件错乱的Bug [详情](https://ask.dcloud.net.cn/question/112100)
  + App platform fixes the bug of v-for rendering list event disorder in some cases [details](https://ask.dcloud.net.cn/question/112100)
  + App平台 修复 v-for 渲染 Map、Set 数据类型错乱的Bug [详情](https://ask.dcloud.net.cn/question/115506)
  + App platform Fix the bug of v-for rendering Map and Set data types disorder [details](https://ask.dcloud.net.cn/question/115506)
  + App平台 修复 uni.compressImage 传入本地路径失败的Bug [详情](https://ask.dcloud.net.cn/question/115315)
  + App platform Fixed the bug that uni.compressImage failed to pass in the local path [details](https://ask.dcloud.net.cn/question/115315)
  + App-Android平台 修复 页面生命周期 onshow 中调用 getLocation 可能会引起死循环的Bug
  + App-Android platform fixes the bug that calling getLocation in the onshow page life cycle may cause an infinite loop
  + App-Android平台 修复 软键盘弹出后，切换输入法软键盘高度发生变化时不会正常触发 onKeyboardHeightChange 事件的Bug
  + App-Android platform fixes the bug that the onKeyboardHeightChange event will not be triggered normally when the height of the soft keyboard of the switching input method changes after the soft keyboard pops up
  + App-Android平台 修复 软键盘弹出后，返回到之前的页面可能显示高度不正确的bug [详情](https://ask.dcloud.net.cn/question/115772)
  + App-Android platform fixes the bug that after the soft keyboard pops up, returning to the previous page may display the incorrect height [details](https://ask.dcloud.net.cn/question/115772)
  + App-Android平台 修复 previewImage 预览网络图片长按保存到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/115727)
  + App-Android platform fixes the bug that previewImage previewing network pictures failed to be saved to the system album by long press [details](https://ask.dcloud.net.cn/question/115727)
  + App-Android平台 修复 subNVues 设置 popup 模式后，再设置 left 执行动画会卡顿的Bug [详情](https://ask.dcloud.net.cn/question/114631)
  + App-Android platform Fix the bug that after setting popup mode in subNVues, ​​the animation will freeze after setting left [details](https://ask.dcloud.net.cn/question/114631)
  + App-Android平台 修复 nvue css 中设置 transform 属性值中使用百分比无效的Bug [详情](https://ask.dcloud.net.cn/question/115728)
  + App-Android platform fixes the bug of invalid percentage used in setting transform attribute value in nvue css [details](https://ask.dcloud.net.cn/question/115728)
  + App-Android平台 修复 nvue live-pusher 组件横屏预览时上传视频方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/115673)
  + App-Android platform fixes the bug that the upload video direction is incorrect when the nvue live-pusher component is previewed in landscape mode [details](https://ask.dcloud.net.cn/question/115673)
  + App-Android平台 修复 nvue map 组件动态绘制 polyline 路径轨迹可能会闪烁的Bug [详情](https://ask.dcloud.net.cn/question/90676)
  + App-Android platform Fix the bug that the nvue map component dynamically draws the polyline path trajectory may flicker [details](https://ask.dcloud.net.cn/question/90676)
  + App-Android平台 修复 nvue input 组件设置 cursor-spacing 属性无效的Bug
  + App-Android platform fixes the bug that the cursor-spacing property setting of the nvue input component is invalid
  + App-Android平台 修复 3.0.7 版本引出的 canvas 组件绘制网络图片失败的Bug
  + App-Android platform fixes the bug that the canvas component derived from version 3.0.7 failed to draw network pictures
  + App-iOS平台 修复 nvue css 中设置 transform 执行动画可能引起崩溃的Bug
  + App-iOS platform fixes a bug that may cause a crash when the transform execution animation is set in nvue css
  + App-iOS平台 修复 nvue 使用 animation 对组件执行动画期间，组件绑定的点击事件可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/98554)
  + App-iOS platform fixes the bug that the click event bound to the component may not be triggered during the animation of the component by nvue using animation [details](https://ask.dcloud.net.cn/question/98554)
  + App-iOS平台 修复 nvue ad-draw 组件加载快手联盟广告时，在 list 中滚动后可能无法正常显示的Bug
  + App-iOS platform fixes the bug that the nvue ad-draw component may not be displayed normally after scrolling in the list when loading the Kuaishou alliance ads
  + App-iOS平台 修复 nvue image 组件在 iOS14 系统设置 placeholder 后无法正常显示 src 图片的Bug [详情](https://ask.dcloud.net.cn/question/115531)
  + App-iOS platform fixes the bug that the nvue image component cannot display the src image normally after the placeholder is set in the iOS14 system [details](https://ask.dcloud.net.cn/question/115531)
  + App-iOS平台 修复 nvue video 组件使用 exitFullScreen 无法正常退出全屏的Bug [详情](https://ask.dcloud.net.cn/question/111855)
  + App-iOS platform Fix the bug that the nvue video component cannot exit the full screen normally using exitFullScreen [details](https://ask.dcloud.net.cn/question/111855)
  + App-iOS平台 修复 nvue web-view 组件加载的网页中 a 标签 target 属性值为 _blank 时，点击 a 标签链接无反应的Bug [详情](https://github.com/dcloudio/hello-uniapp/issues/37)
  + App-iOS platform fixes the bug that when the target attribute value of the a tag in the webpage loaded by the nvue web-view component is _blank, clicking the a tag link does not respond. [Details](https://github.com/dcloudio/hello-uniapp /issues/37)
  + H5平台 新增 EditorContext 支持 blur、getSelectionText、scrollIntoView 方法
  + H5 platform added EditorContext to support blur, getSelectionText, scrollIntoView methods
  + H5平台 新增 getTopWindowStyle、getLeftWindowStyle、getRightWindowStyle 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5 platform adds getTopWindowStyle, getLeftWindowStyle, getRightWindowStyle methods [details](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5平台 修复 ActionSheet 数据量多无法滚动的Bug
  + H5 platform fixes the bug that ActionSheet has too much data and cannot be scrolled
  + H5平台 修复 特定情况下 uni.showModal 内容区域出现横向滚动条的Bug
  + H5 platform fixes a bug where a horizontal scroll bar appears in the uni.showModal content area under certain circumstances
  + H5平台 修复 image 组件使用 require 方式引用的资源在配置基础路径为相对路径时，编译后不显示的Bug
  + H5 platform fixes the bug that the resources referenced by the require method of the image component are not displayed after compilation when the base path is configured as a relative path
  + 【重要】小程序平台 新增 发行时支持混合分包模式，将 uni-app 项目发行为小程序分包，集成到已有的原生开发的小程序 [详情](https://uniapp.dcloud.net.cn/hybrid)
  + 【Important】 When the Mini Program platform is newly released, it supports the mixed subcontracting mode, and the uni-app project is issued as a Mini Program subcontract and integrated into the existing natively developed Mini Program [details](https://uniapp.dcloud .net.cn/hybrid)
  + 小程序平台 修复 事件回调内 arguments 获取到多余参数的Bug [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + Mini Program Platform Fix the bug that the arguments in the event callback get redundant parameters [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + 小程序平台 修复 修复 v-for 循环 wxs 模块内容报错的Bug [详情](https://ask.dcloud.net.cn/question/115658)
  + Mini Program Platform Fix Fix the bug that the content of the v-for loop wxs module reports an error [details](https://ask.dcloud.net.cn/question/115658)
  + 支付宝平台、头条小程序平台 修复 部分情况下无法正确编译模板中 class 的Bug [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + Alipay platform and Toutiao applet platform fixed the bug that the class in the template could not be compiled correctly in some cases [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + 支付宝小程序平台 优化 组件支持 vue 事件监听方式（需启用 component2）[详情](https://ask.dcloud.net.cn/question/110978)
  + Optimized Alipay applet platform. The component supports vue event monitoring mode (component2 needs to be enabled) [details](https://ask.dcloud.net.cn/question/110978)
  + 支付宝小程序平台 修复 内置组件部分事件无法监听的Bug [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + Alipay applet platform fixed the bug that some events of built-in components could not be monitored [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + 【重要】百度小程序平台 新增 支持 onInit 生命周期
  + 【Important】 Baidu applet platform added support onInit life cycle
  + 百度小程序平台 优化 支持使用 usingComponents 引入插件（原名称 usingSwanComponents 仍然保留）
  + Optimized Baidu applet platform to support the use of usingComponents to introduce plug-ins (the original name usingSwanComponents is still retained)
  + 【重要】uni-ui 新增 所有组件适配 PC 端，适配宽屏、拖动、支持enter和esc按键响应 [详情](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)
  + 【Important】 uni-ui adds all new components to adapt to PC, adapt to widescreen, drag, support enter and esc button response [details](https://hellouniapp.dcloud.net.cn/pages/extUI/badge /badge)
  + uni-ui 新增 uni-file-picker 文件直传uniCloud云空间的组件 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui adds uni-file-picker file direct transfer to uniCloud cloud space component [details](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-forms、uni-easyinput、uni-group 兼容 nvue 页面
  + uni-ui optimized uni-forms, uni-easyinput, uni-group compatible nvue pages
  + 【重要】新增 云端一体搜索模板。无需自行开发搜索 [详情](https://ext.dcloud.net.cn/plugin?id=3851)
  + 【Important】 Added cloud integrated search template. No need to develop your own search [details](https://ext.dcloud.net.cn/plugin?id=3851)
  + 【重要】新增 uni-captcha 基于uniCloud的图片验证码 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + 【Important】 Added uni-captcha image verification code based on uniCloud [details](https://ext.dcloud.net.cn/plugin?id=4048)
  + 【重要】新增 网赚游戏合成猫项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=4095)
  + 【Important】 Added a new project template for Wangzhuan game synthesis cat [details](https://ext.dcloud.net.cn/plugin?id=4095)
  + 【重要】hello uniCloud 新增 clientDB、schema2code示例 [详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + 【Important】 hello uniCloud adds clientDB and schema2code examples [details](https://ext.dcloud.net.cn/plugin?id=4082)
  + 新增 uniCloud-banner模板 支持管理员上传修改banner [详情](https://ext.dcloud.net.cn/plugin?id=4117)
  + Added uniCloud-banner template, support administrator to upload and modify banner [details](https://ext.dcloud.net.cn/plugin?id=4117)
  + 云端一体登录模板 新增 用户名密码连续登录失败时要求输入图形验证码
  + Cloud integrated login template Added user name and password when consecutive login failures require input of graphic verification codes
* 【uniCloud】
  + 【重要】客户端 新增 uniCloud.mixinDatacom 混入，方便快速开发datacom组件，无需自行处理云数据绑定 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 【Important】 The client side adds uniCloud.mixinDatacom mixin to facilitate rapid development of datacom components without having to deal with cloud data binding by yourself [details](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 客户端 新增 uniCloud.chooseAndUploadFile API，选文件后直接上传到uniCloud云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + Client add uniCloud.chooseAndUploadFile API, select the file and upload it directly to uniCloud cloud storage [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + 【重要】uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + 【Important】 uni-id adds the default cache role permissions in the token, and the cloud obtains role permissions without checking the database, improving the performance of clientDB [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id ?id=cachepermissionintoken)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id added support for Apple login [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 客户端获取用户信息接口，包括权限角色 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + uni-id added a new interface for the client to obtain user information, including permissions and roles [details](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + 云函数 新增 获取客户端标识 deviceId [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + Cloud functions added Get client ID deviceId [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + 阿里云 新增 云函数支持 uploadFile 接口（本地调试暂不支持）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + Alibaba Cloud's new cloud function supports uploadFile interface (local debugging is not supported temporarily) [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + 阿里云 新增 云数据库 add update 可以传入日期对象
  + Alibaba Cloud's new cloud database add update can pass in date objects
  + 阿里云 新增 getTempFileURL 接口（仅为抹平和腾讯云的接口差异）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + Alibaba Cloud added the getTempFileURL interface (just to smooth out the interface difference between Tencent Cloud and Tencent Cloud) [details](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + web控制台 阿里云 新增 慢查询日志，有助于分析数据库设计缺陷
  + Web console Alibaba Cloud added slow query log, which helps analyze database design defects
  + uniCloud本地调试插件 新增 支持 uni_modules
  + uniCloud local debugging plugin added support uni_modules
  + uniCloud本地调试插件 修复 cli 项目无法使用 uniCloud 本地调试的Bug
  + uniCloud local debugging plug-in fixes the bug that uniCloud local debugging cannot be used in cli projects
  + uniCloud本地调试插件 修复 客户端连接本地云函数时云函数内 callFunction 返回格式不正确的Bug
  + uniCloud local debugging plug-in fixes the bug that the callFunction in the cloud function returns an incorrect format when the client connects to the local cloud function
  + DB Schema 字段类型bsonType 新增 file、date类型 [详情](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema field type bsonType added file and date types [details](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema 字段类型bsonType 为 array 时，新增 arrayType 子类型，描述数组里项目的类型。比如 arrayType 设为 file，表示一组文件 [详见](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + When the DB Schema field type bsonType is array, a new subtype of arrayType is added to describe the type of items in the array. For example, if arrayType is set to file, it means a group of files [see details](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema added fieldRules to describe the relationship between fields, such as the field "start time" must be less than the field "end time" [details](https://uniapp.dcloud.net.cn/uniCloud/schema?id= field-rules)
  + DB Schema 新增 count 权限 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema added count permission [details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema 新增 validateFunction 配置是否在客户端生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + DB Schema added validateFunction configuration to take effect on the client side [details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + clientDB 新增 数据库运算符，可在 where、field、groupBy、groupField 以及 DB Schema 的 fieldRules 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + ClientDB adds new database operators, which can be used in where, field, groupBy, groupField and fieldRules of DB Schema [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB 新增 支持 groupBy 对数据进行分组统计 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + ClientDB added support groupBy to group data statistics [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB 新增 支持 distinct 对数据进行去重 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB added support for distinct to de-duplicate data [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB 修复 JQL 写法内使用下标访问数组内的元素报错的Bug
  + clientDB fixes the bug of using subscripts to access elements in the array in JQL writing
  + unicloud-db组件 add、update 方法支持调用 action云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + The unicloud-db component add and update methods support calling action cloud functions [details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + schema2code 新增 生成前端页面时补充list.vue、detail.vue页面
  + schema2code added Add list.vue and detail.vue pages when generating front-end pages
  + schema2code 调整 之前的 component 改名为 componentForEdit，并新增 componentForShow 。一个字段可以分别控制它在表单页面（add、edit）和展示页面（list、detail）所使用的组件
  + The previous component of schema2code adjustment was renamed to componentForEdit, and componentForShow was added. A field can separately control the components used in the form page (add, edit) and display page (list, detail)
  + schema2code 新增 展示页面可直接显示bool值为√或×，显示DB Schema里enum的text内容。
  + schema2code added. The display page can directly display the bool value as √ or ×, and display the text content of enum in DB Schema.
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + uni-AD 更新 腾讯优量汇SDK Android为4.330.1200版、iOS为4.12.3版；穿山甲SDK iOS为3.4.2.3版；快手联盟SDK iOS为3.3.6版
  + uni-AD update Tencent Youlianghui SDK Android version 4.330.1200, iOS version 4.12.3; Pangolin SDK iOS version 3.4.2.3; Kuaishou Alliance SDK iOS version 3.3.6
  + 一键登录 新增 defaultCheckBoxState 属性设置默认是否勾选同意使用服务条款框
  + One-click login Added the defaultCheckBoxState property to set whether to check the agree to the terms of service box by default
  + 微信分享 新增 分享音乐支持 href 属性设置音乐网页地址
  + Share on WeChat Add to share music support href attribute to set music web address
  + Android平台 新增 视频播放控件支持 codec 属性设置是否开启硬解码，解决某些视频播放不清晰的问题 [详情](https://ask.dcloud.net.cn/question/95568)
  + Android platform added video playback control to support the codec attribute setting whether to enable hard decoding, to solve the problem of unclear video playback [details](https://ask.dcloud.net.cn/question/95568)
  + Android平台 新增 视频播放控件支持 httpCache 属性设置是否开启缓存，解决重复播放网络视频无法复用缓存的问题 [详情](https://ask.dcloud.net.cn/question/105515)
  + Android platform new video playback control supports httpCache attribute setting whether to enable caching, to solve the problem that repeated playback of network videos cannot reuse caching [details](https://ask.dcloud.net.cn/question/105515)
  + Android平台 新增 视频播放控件支持 playStrategy 属性设置视频优化策略，解决播放在线高清视频卡顿、音视频脱轨的问题 [详情](https://ask.dcloud.net.cn/question/116249)
  + Android platform added video playback control to support the playStrategy property to set video optimization strategies to solve the problems of online HD video freezes and audio and video derailment [details](https://ask.dcloud.net.cn/question/116249)
  + Android平台 修复 视频播放控件 seek 跳转不准确的Bug [详情](https://ask.dcloud.net.cn/question/115171)
  + Android platform fixes the bug that the seek jump of the video playback control is not accurate [details](https://ask.dcloud.net.cn/question/115171)
  + Android平台 修复 微信分享图片在 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/115153)
  + Android platform fixes the bug that WeChat sharing pictures may fail on Android11 ​​devices [details](https://ask.dcloud.net.cn/question/115153)
  + Android平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + Android platform fixes the bug that the UniPush server is not synchronized to the UniPush server when setting the app corner number
  + iOS平台 优化 uni-AD 信息流广告内存管理机制，解决显示广告过多时内存泄露引起崩溃的Bug
  + Optimize the memory management mechanism of uni-AD information flow advertisement on iOS platform to solve the bug of crash caused by memory leak when too many advertisements are displayed
  + iOS平台 修复 uni-AD 调用 plus.ad.releaseAdData 释放广告数据可能引起崩溃的Bug
  + iOS platform fixes a bug that uni-AD calls plus.ad.releaseAdData to release advertising data that may cause a crash
  + iOS平台 更新 高德地图SDK为 7.8.0 版，解决在 iOS14 系统拖动地图时卡顿的Bug [详情](https://ask.dcloud.net.cn/question/113674)
  + iOS platform update AutoNavi Maps SDK is version 7.8.0, which solves the bug when dragging the map in iOS14 system [details](https://ask.dcloud.net.cn/question/113674)
  + iOS平台 修复 QQ分享音乐，点击分享内容跳转到的是音乐播放页面而不是 href 设置的音乐网页的Bug
  + iOS platform fixes the bug of QQ sharing music, click to share content to jump to the music playback page instead of the music page set by href
  + iOS平台 修复 图片轮播控件 ImageSlider 设置样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/116068)
  + iOS platform fixes the bug that the image carousel control ImageSlider setting style may not take effect [details](https://ask.dcloud.net.cn/question/116068)
  + iOS平台 修复 从系统相册选择 iCloud 视频文件没有触发回调的Bug [详情](https://ask.dcloud.net.cn/question/115448)
  + iOS platform fixed the bug that selecting iCloud video files from the system album did not trigger the callback [details](https://ask.dcloud.net.cn/question/115448)
  + iOS平台 修复 视频播放控件横向全屏播放后，调用 exitFullScreen 退出全屏可能界面显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/115775)
  + iOS platform fixes the bug that after the video playback control is played in full-screen horizontally, call exitFullScreen to exit the full-screen and the interface may display abnormally. [Details](https://ask.dcloud.net.cn/question/115775)
  + iOS平台 修复 视频播放控件拖动进度条可能引起进度显示不正常，不触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/115300)
  + iOS platform fixes the bug that dragging the progress bar of the video playback control may cause the progress to be displayed abnormally and not trigger the timeupdate event [details](https://ask.dcloud.net.cn/question/115300)
* 【UniMPSDK】
  + iOS平台 修复 关闭当前小程序立刻打开另一个小程序后，小程序可能无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/115243)
  + iOS platform fix the bug that the applet may not be closed after closing the current applet and opening another applet immediately [details](https://ask.dcloud.net.cn/question/115243)
  + iOS平台 新增 小程序页面关闭时支持动态设置原生导航栏的显隐方法 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)
  + iOS platform added support for dynamically setting the explicit and hidden method of the native navigation bar when the applet page is closed [details](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)



#### 3.0.7.20210109-alpha
* 【uni-app】
  + App平台 修复 windows 系统部分情况下，查找 Chrome 失败，导致无法正常 debug 的Bug
  + App platform Fix the bug that failed to find Chrome in some cases of windows system, which led to the failure to debug normally
  + App平台 修复 包含微信小程序组件时，部分情况下首次编译触发热刷新的Bug
  + App platform fixes the bug that triggered hot refresh when compiling for the first time in some cases when including WeChat applet components
  + App-Android平台 修复 nvue list 组件调用 setSpecialEffects 设置吸顶后，input 子组件无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/114511)
  + App-Android platform Fix the bug that the input subcomponent cannot get the focus after the nvue list component calls setSpecialEffects to set the ceiling [details](https://ask.dcloud.net.cn/question/114511)
  + App-Android平台 修复 nvue list/waterfall 组件使用 refresh 并设置 background-color 属性后会出现白边的Bug [详情](https://ask.dcloud.net.cn/question/105800)
  + App-Android platform Fix the bug that white borders will appear after refresh and setting the background-color property of the nvue list/waterfall component [details](https://ask.dcloud.net.cn/question/105800)
  + App-iOS平台 修复 nvue refresh 组件处于刷新状态时显示位置向下偏移0.5像素的Bug
  + App-iOS platform fixes the bug that the display position of the nvue refresh component is shifted downward by 0.5 pixels when the component is in the refresh state
  + 快应用 修复 华为快应用IDE V3.0.2无法识别项目类型的Bug
  + Quick app fixes the bug that Huawei Quick App IDE V3.0.2 cannot recognize the project type
* 【uniCloud】
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
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 一键登录 优化 错误回调返回数据格式，添加 appid、metadata、uid 属性，便于排查错误 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + One-click login optimization Error callback return data format, add appid, metadata, uid attributes, easy to troubleshoot errors [Specification](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.6版，腾讯优量汇SDK为4.310.1180版，今日头条穿山甲SDK为3.4.1.0版
  + Android platform update uni-AD Kuaishou Alliance SDK version 3.3.6, Tencent Youlianghui SDK version 4.310.1180, and Toutiao pangolin SDK version 3.4.1.0
  + Android平台 更新 腾讯X5内核版本为 v4.3.0.67_43967 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android platform update Tencent X5 kernel version is v4.3.0.67_43967 [details](https://ask.dcloud.net.cn/article/36806)
  + Android平台 更新 UniPush 华为厂商推送 SDK 版本为 v4:2.0.0，适配 HMS4.0+ [详情](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android platform update UniPush Huawei manufacturer push SDK version is v4:2.0.0, adapted to HMS4.0+ [details](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android平台 调整 应用主 Activity 为 FragmentActivity [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android platform adjust the application main activity to FragmentActivity [details](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android平台 修复 native.js 调用 requestPermissions 请求的权限已被允许可能引起其它功能无法正常申请系统权限的Bug [详情](https://ask.dcloud.net.cn/question/114645)
  + Android platform Fix the bug that the permission requested by native.js calling requestPermissions has been allowed, which may cause other functions to not normally apply for system permissions [details](https://ask.dcloud.net.cn/question/114645)
  + Android平台 修复 云端打包 更新 com.android.tools.build:gradle 版本后可能引起安装包文件变大、运行显示白屏的Bug [详情](https://ask.dcloud.net.cn/question/114496)
  + Android platform fixes the bug that the cloud package update com.android.tools.build:gradle version may cause the installation package file to become larger and display a white screen when running [details](https://ask.dcloud.net.cn/question/ 114496)
  + Android平台 修复 uploader 上传文件监听上传进度变化返回数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/101035)
  + Android platform fix the bug that uploader upload file monitor upload progress change returns inaccurate data [details](https://ask.dcloud.net.cn/question/101035)
  + Android平台 修复 监听按键事件 keydown、keyup 不触发回调的Bug
  + Android platform fixes the bug that listening to key events keydown and keyup does not trigger callbacks
  + Android平台 修复 video 封面图片 poster 拉伸变形显示的Bug [详情](https://ask.dcloud.net.cn/question/114952)
  + Android platform fixes the bug that the video cover image poster is stretched and deformed [details](https://ask.dcloud.net.cn/question/114952)
  + Android平台 修复 video 设置显示默认播放控件 controls 属性为 false 时手势操作失效的Bug
  + Android platform fixes the bug that the gesture operation fails when the video settings display the default playback control controls attribute is false
  + Android平台 修复 previewImage 预览图片可能显示模糊的Bug [详情](https://ask.dcloud.net.cn/question/113520)
  + Android platform fixes the bug that previewImage may display blurry pictures [details](https://ask.dcloud.net.cn/question/113520)
  + Android平台 修复 2.9.9版本引出的 native.js 获取到原生对象可能无法执行器内部函数的Bug [详情](https://ask.dcloud.net.cn/article/38648)
  + Android platform Fix the bug that native.js derived from version 2.9.9 may not be able to execute internal functions of the native object [details](https://ask.dcloud.net.cn/article/38648)
  + iOS平台 修复 previewImage 预览网络图片地址中包含query参数过多可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/98259)
  + iOS platform fix the bug that the preview image address contains too many query parameters and may not be displayed [details](https://ask.dcloud.net.cn/question/98259)
  + iOS平台 修复 audio 音频资源地址中包含中文字符时无法正常播放的Bug [详情](https://ask.dcloud.net.cn/question/103421)
  + iOS platform Fix the bug that the audio resource address cannot be played normally when Chinese characters are included [details](https://ask.dcloud.net.cn/question/103421)
  + iOS平台 修复 video 动态更新 src 属性值域名相同时无法正常切换视频的Bug [详情](https://ask.dcloud.net.cn/question/110386)
  + iOS platform fixes the bug that the video cannot be switched normally when the domain name of the src attribute value is the same in the dynamic update of video [details](https://ask.dcloud.net.cn/question/110386)
  + iOS平台 修复 video 视频资源地址中包含中文字符时无法正常播放的Bug
  + iOS platform fixes the bug that the video cannot be played normally when the video resource address contains Chinese characters
  + iOS平台 修复 titleNView 标题文字在隐藏软键盘时可能出现抖动的Bug
  + iOS platform fix the bug that titleNView title text may jitter when the soft keyboard is hidden



#### 3.0.4.20201230-alpha
* 【uniCloud】
  + uniCloud本地调试插件 修复 调试时较早请求云函数且无法连接本地调试服务时报错的Bug
  + uniCloud local debugging plug-in fixes the bug that an error was reported when the cloud function was requested earlier during debugging and the local debugging service could not be connected
  + uniCloud本地调试插件 修复 部分日志格式错误的Bug
  + uniCloud local debugging plug-in fixes the bug of some log format errors
  + uniCloud本地调试插件 修复 本地云函数向云数据库插入值为 null 的字段会报错的Bug
  + uniCloud local debugging plug-in fixes the bug that the local cloud function will report an error when inserting a null field into the cloud database
  + uniCloud本地调试插件 调整 输出调整复杂类型时调整最大展示层级为20级
  + uniCloud local debugging plug-in adjustment adjust the maximum display level to 20 when the output is adjusted for complex types
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 更新 云端打包 com.android.tools.build:gradle 版本为 4.1.1，适配Android11，修复无法准确检查uni原生插件需要兼容启用AndroidX [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android platform update cloud packaging com.android.tools.build: gradle version is 4.1.1, adapted to Android11, repair can not accurately check uni native plug-in needs to be compatible with AndroidX [details](https://nativesupport.dcloud.net. cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + iOS平台 修复 uni-AD 快手联盟 激励视频广告的奖励倒计时完成后关闭广告事件 onClose 的 isEnded 属性值可能为 false 的Bug
  + iOS platform fixes the bug that uni-AD Kuaishou Alliance closes the ad event after the reward countdown for rewarded video ads is completed and the isEnded attribute value of onClose may be false


#### 3.0.3.20201228-alpha
* 【uni-app】
  + App-iOS平台 修复 nvue video 组件动态更新 src 属性无法播放本地视频的Bug [详情](https://ask.dcloud.net.cn/question/113920)
  + App-iOS platform fixes the bug that the nvue video component dynamically updates the src attribute and cannot play local videos [details](https://ask.dcloud.net.cn/question/113920)
  + H5平台 修复 unicloud-db 组件 开发环境下 设置属性 :getone="true" 时报错的Bug
  + H5 platform Fix the bug when setting attribute :getone="true" under unicloud-db component development environment
  + 微信小程序平台 修复 unicloud-db 组件某些情况下无效的Bug
  + WeChat applet platform fixes the bug that unicloud-db component is invalid in some cases
  + 字节小程序平台 新增 支持分包加载 [详情](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
  + Byte applet platform added support subpackage loading [details](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
* 【uniCloud】
  + clientDB API 新增 树形数据查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
  + ClientDB API adds tree data query [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + iOS平台 修复 保存路径中包含特殊字符的图片到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/113990)
  + iOS platform Fixed the bug that failed to save pictures with special characters in the path to the system album [details](https://ask.dcloud.net.cn/question/113990)
  + iOS平台 修复 一键登录 设置多个自定义服务协议时中文语法不正确的Bug
  + iOS platform fixes the bug that the Chinese grammar is incorrect when multiple custom service agreements are set by one-click login


#### 3.0.2.20201225-alpha
* 【uni-app】
  + App平台 修复 一键登录 univerifyStyle 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/113997)
  + App platform fix the bug that the univerifyStyle property of one-click login does not take effect [details](https://ask.dcloud.net.cn/question/113997)
* 【uniCloud】
  + clientDB 新增 数据库错误 error 事件 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + ClientDB added database error error event [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + clientDB 调整 refreshToken 事件由 db.auth 移至 db ，旧写法仍兼容 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + ClientDB adjusted refreshToken event moved from db.auth to db, the old writing is still compatible [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + uniCloud本地调试插件 修复 本地运行云函数运行结果显示不全的Bug
  + uniCloud local debugging plug-in fixes the bug that the running results of local running cloud functions are incompletely displayed
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 更新 支付宝SDK为15.8.00，解决提交 GooglePlay 审核报存在不安全的加密模式的Bug [详情](https://ask.dcloud.net.cn/question/114053)
  + Android platform update Alipay SDK is 15.8.00, to solve the bug of insecure encryption mode submitted to the GooglePlay audit report [details](https://ask.dcloud.net.cn/question/114053)
  + Android平台 修复 uni-AD 开屏广告在部分设备可能触发崩溃的Bug
  + Android platform fixes the bug that uni-AD open screen ads may trigger a crash on some devices
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 修复 小程序跳转其他原生页面再返回小程序时，对应生命周期事件 onShow、onHide 没有触发的Bug
  + iOS platform fixes the bug that the corresponding life cycle events onShow and onHide are not triggered when the applet jumps to other native pages and then returns to the applet


#### 3.0.1.20201223-alpha
* 【uni-app】
  + App平台 修复 3.0.0 版本引出的 match-media 组件失效的Bug
  + App platform Fix the bug that the match-media component fails in version 3.0.0
  + App-Android平台 修复 nvue image 组件加载图片过多可能引起内存溢出导致页面滚动卡顿的Bug
  + App-Android platform fixes the bug that the nvue image component loads too many images, which may cause memory overflow and cause page scrolling to freeze
  + App-iOS平台 修复 3.0.0 版本引出的 nvue image 组件在iOS14以下系统 webp 格式图片无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/113840)
  + App-iOS platform fixes the bug that the nvue image component derived from version 3.0.0 cannot display normally in webp format pictures in systems below iOS14 [details](https://ask.dcloud.net.cn/question/113840)
  + App-iOS平台 修复 3.0.0 版本引出的 iOS13.7 设备上 canvas 组件绘制图像会导致应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113820)
  + App-iOS platform fixes the bug that the canvas component drawing images on the iOS13.7 device introduced by version 3.0.0 will cause the app to crash [details](https://ask.dcloud.net.cn/question/113820)
  + 微信小程序平台 修复 unicloud-db 组件无效的Bug
  + WeChat applet platform fixed the bug that unicloud-db component is invalid
* 【uniCloud】
  + uniCloud本地调试插件 修复 windows 平台未打印输出对应的文件名和行号的Bug
  + uniCloud local debugging plug-in Fix the bug that the corresponding file name and line number are not printed out on the windows platform
  + uniCloud本地调试插件 优化 多参数的 console.log 输出展现
  + uniCloud local debugging plug-in optimized multi-parameter console.log output display
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 3.0.0版本引出的 native.js 获取 runtimeMainActivity 对象执行 registerReceiver 不生效的Bug [详情](https://ask.dcloud.net.cn/question/113807)
  + Android platform fixes the bug that the native.js version 3.0.0 derived from obtaining runtimeMainActivity objects does not take effect when executing registerReceiver [details](https://ask.dcloud.net.cn/question/113807)
  + iOS平台 新增 mediaPlaybackRequiresUserAction 属性控制H5页面支持自动播放音频 [详情](https://ask.dcloud.net.cn/article/94)
  + iOS platform added mediaPlaybackRequiresUserAction property to control H5 page to support automatic audio playback [details](https://ask.dcloud.net.cn/article/94)
  + iOS平台 修复 3.0.0版本引出的 获取当前地理位置弹出系统授权框时，用户拒绝授权后没有触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/113696)
  + iOS platform fixes the bug that when the system authorization box for obtaining the current geographic location pops up when the system authorization box is popped up from the version 3.0.0, the failure callback is not triggered after the user refuses the authorization [details](https://ask.dcloud.net.cn/question/113696)
  + iOS平台 修复 一键登录授权界面自定义样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/113894)
  + iOS platform fix the bug that the custom style of the one-click login authorization interface does not take effect [details](https://ask.dcloud.net.cn/question/113894)


#### 3.0.0.20201219-alpha
* 【uni-app】
  + App、H5平台 优化 input 组件 number 和 digit 类型支持输入负数（注意之前依赖键盘不能输入负数而没有校验输入内容应用应补充校验规则） [详情](https://ask.dcloud.net.cn/question/62987)
  + App, H5 platform optimization input component number and digit types support input of negative numbers (note that before relying on the keyboard to input negative numbers without verifying the input content, applications should add verification rules) [details](https://ask.dcloud.net. cn/question/62987)
  + App、H5平台 修复 slider 组件 step 设置为小数时精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/112749)
  + App, H5 platform Fix the bug that the precision is lost when the slider component step is set to a decimal [details](https://ask.dcloud.net.cn/question/112749)
  + App平台 新增 uni-AD 支持 Draw信息流广告 [详情](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App platform added uni-AD to support Draw information flow advertisement [details](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App平台 新增 uni-AD ad 组件支持 adclicked 事件
  + App platform added uni-AD ad component to support adclicked event
  + App平台 优化 input、textarea 组件去除隐藏键盘自动失去焦点的逻辑并开放相关属性：auto-blur [详情](https://ask.dcloud.net.cn/question/111152)
  + App platform optimization input and textarea components remove the logic of hiding the keyboard and automatically lose focus and open related attributes: auto-blur [details](https://ask.dcloud.net.cn/question/111152)
  + App平台 优化 uni.compressImage 支持 width、height 设置
  + App platform optimization uni.compressImage supports width and height settings
  + App平台 优化 uni.canvasGetImageData、uni.canvasSetImageData 等接口执行效率（注意：需更新自定义基座或离线SDK） [详情](https://ask.dcloud.net.cn/question/110948)
  + App platform optimizes the execution efficiency of uni.canvasGetImageData, uni.canvasSetImageData and other interfaces (note: need to update custom base or offline SDK) [details](https://ask.dcloud.net.cn/question/110948)
  + App平台 优化 uni.previewImage 弹出菜单底部的取消按钮文字根据系统语言进行国际化适配
  + App platform optimization uni.previewImage The cancel button text at the bottom of the pop-up menu is internationalized according to the system language
  + App平台 修复 uni.setNavigationBarColor 部分时机不生效的Bug [详情](https://ask.dcloud.net.cn/question/110894)
  + App platform Fix the bug that uni.setNavigationBarColor does not take effect in some timings [details](https://ask.dcloud.net.cn/question/110894)
  + App平台 修复 非 popup 类型的 subnvue 对象调用 setStyle 方法报错的Bug [详情](https://ask.dcloud.net.cn/question/110922)
  + App platform Fix the bug of non-popup type subnvue object calling setStyle method to report an error [details](https://ask.dcloud.net.cn/question/110922)
  + App平台 修复 nvue progress组件 设置属性 active=true 时报错的Bug [详情](https://ask.dcloud.net.cn/question/113041)
  + App platform Fix the bug of nvue progress component when setting the property active=true [details](https://ask.dcloud.net.cn/question/113041)
  + App平台 修复 mainfest.json 配置 flex-direction:row 时部分内置组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/102195)
  + App platform Fix the bug that the style of some built-in components is disordered when configuring flex-direction:row in mainfest.json [details](https://ask.dcloud.net.cn/question/102195)
  + App-Android平台 修复 页面存在 subnvue 时 web-view 组件无法返回的Bug [详情](https://ask.dcloud.net.cn/question/111213)
  + App-Android platform fixes the bug that the web-view component cannot return when there is subnvue on the page [details](https://ask.dcloud.net.cn/question/111213)
  + App-Android平台 修复 应用版本名称包含中文时，uni.request 可能引起请求失败的Bug [详情](https://ask.dcloud.net.cn/question/112326)
  + App-Android platform Fix the bug that uni.request may cause the request to fail when the app version name contains Chinese [details](https://ask.dcloud.net.cn/question/112326)
  + App-Android平台 修复 nvue map 组件 getScale 获取地图缩放等级可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/85722)
  + App-Android platform fix the bug that the nvue map component getScale may not get accurate map zoom level [details](https://ask.dcloud.net.cn/question/85722)
  + App-Android平台 修复 nvue input 组件不设置 confirm-type 属性时 confirm 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/112729)
  + App-Android platform Fix the bug that the confirm event does not trigger when the confirm-type attribute is not set in the nvue input component [details](https://ask.dcloud.net.cn/question/112729)
  + App-iOS平台 修复 生物认证 人脸识别 在未录入FaceID的情况下可能检查为已录入的Bug [详情](https://ask.dcloud.net.cn/question/112383)
  + App-iOS platform fixes biometric authentication. Face recognition may be checked as an entered bug when FaceID is not entered [details](https://ask.dcloud.net.cn/question/112383)
  + App-iOS平台 修复 nvue text 组件设置相同的字体大小，不同文字内容高度不一致的Bug [详情](https://ask.dcloud.net.cn/question/112175)
  + App-iOS platform Fix the bug that the nvue text component is set to the same font size and the height of different text content is inconsistent [details](https://ask.dcloud.net.cn/question/112175)
  + App-iOS平台 修复 调用 getScreenBrightness、setScreenBrightness 会触发 onShow、onHide 的Bug
  + App-iOS platform fixes the bug that calling getScreenBrightness and setScreenBrightness will trigger onShow and onHide
  + H5平台 优化 tabBar 支持配置更多属性，如：fontSize、height、midButton
  + H5 platform optimization tabBar supports configuring more attributes, such as fontSize, height, midButton
  + H5平台 修复 canvas 组件绘制跨域图像后调用 uni.canvasToTempFilePath 失败的Bug
  + H5 platform fixed a bug where the canvas component failed to call uni.canvasToTempFilePath after drawing a cross-domain image
  + H5平台 修复 uni.chooseFile 在微信小程序内置浏览器失效的Bug
  + H5 platform fixed the bug that uni.chooseFile failed in the built-in browser of WeChat applet
  + H5平台 修复 使用 uni.chooseLocation 时摇树优化报错的Bug [详情](https://ask.dcloud.net.cn/question/111785)
  + H5 platform Fix the bug of tree shaking optimization error reporting when using uni.chooseLocation [details](https://ask.dcloud.net.cn/question/111785)
  + H5平台 修复 picker 组件在 PC 版 Chrome 浏览器点击不显示的Bug
  + H5 platform fixes the bug that the picker component does not display when clicked on the PC version of the Chrome browser
  + H5平台 修复 picker-view 组件 indicator-class 设置不生效的Bug
  + H5 platform fix the bug that the picker-view component indicator-class setting does not take effect
  + H5平台 修复 iOS9 平台浏览器访问报错的Bug [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + H5 platform Fix the bug of iOS9 platform browser access error [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + 小程序平台 修复 for 循环中遍历数组表达式时部分事件编译后执行报错的Bug [详情](https://ask.dcloud.net.cn/question/110706)
  + Mini Program Platform Fix the bug that some events are executed after compilation when traversing the array expression in the for loop [details](https://ask.dcloud.net.cn/question/110706)
  + uni-ui 新增 uni-easyinput 组件，提供更强大、易用的输入框封装组件，内置表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui adds uni-easyinput component, provides more powerful and easy-to-use input box package components, built-in form verification [details](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui 新增 uni-data-checkbox 组件，简化单选复选框的使用 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui adds uni-data-checkbox component to simplify the use of radio checkboxes [details](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 forms、list、dateformat、indexed-list等组件的问题 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + uni-ui fixes issues with components such as forms, list, dateformat, indexed-list [details](https://ext.dcloud.net.cn/plugin?id=55)
  + hello uni-app 新增 App端一键登录示例（API分类login示例中）
  + hello uni-app adds a one-click login example on the App side (in the API category login example)
  + 前后一体登录项目模板 新增 App端一键登录、修改密码
  + Front and rear integrated login project templates Added one-click login and password modification on the App side
* 【uniCloud】
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【Important】 Adjust the front-end built-in `<unicloud-db>` component, no need to manually introduce the [clientDB component plug-in](https://ext.dcloud.net.cn/plugin?id=3256) [Specifications] ](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【Important】 Added uniCloud local service. Support front-end project to switch to cloud environment or local service in the console. Local modifications take effect directly, and can be combined without uploading. [Details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + 【Important】 Adjust the directory structure of the uniCloud project. The root directory is the uniCloud directory, and there are secondary directories cloudfunctions and database under it. The database directory stores the data table schema and extended verification functions. And provides a directory structure migration guide [details](https://ask.dcloud.net.cn/article/38028)
  + 【重要】新增 HBuilderX 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + 【Important】 Added HBuilderX to write DB Schema locally, that is, the table structure of the data table. Support new, upload, download table structure, support code prompt.
  + 【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率
  + 【Important】 Added `<unicloud-db>` component (the previous clientDB component) to support code hints. JQL syntax can be prompted, and the database table name field can be prompted when there is a local schema. Significantly improve development efficiency
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
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 【重要】新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录 [详情](https://uniapp.dcloud.net.cn/univerify)
  + 【Important】 Added one-key login, operator gateway authentication, SMS verification to obtain mobile phone number, one-key password-free login [details](https://uniapp.dcloud.net.cn/univerify)
  + 新增 UniPush 华为手机，厂家通道离线推送可在服务端设置角标[参考插件](https://ext.dcloud.net.cn/plugin?id=1680)
  + Newly added UniPush Huawei mobile phone, the factory channel offline push can be set on the server side [reference plug-in](https://ext.dcloud.net.cn/plugin?id=1680)
  + 新增 uni-AD 编程控制开屏广告的开启或关闭 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + Added uni-AD programming to control the opening or closing of screen ads [Specification](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + 新增 uni-AD 激励视频、全屏视频、信息流广告支持监听点击广告事件
  + Added uni-AD rewarded video, full-screen video, and information stream ads to support monitoring click ad events
  + 新增 4个安全类API，推荐客户端安全要求较高的应用（如使用了激励视频），使用如下4个API并且搭配js原生混淆和App加固，防止客户端被篡改
  + 4 new security APIs are added. Applications with higher client security requirements (such as using rewarded video) are recommended. Use the following 4 APIs with js native obfuscation and App reinforcement to prevent client tampering
	* 新增 plus.navigator.getSignature 获取应用签名标识。可用于判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
    * Added plus.navigator.getSignature to obtain application signature. It can be used to determine whether the App's certificate has been resigned [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
	* 新增 plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
    * Added plus.navigator.isSimulator to determine whether the App is running in the simulator environment [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
	* 新增 plus.navigator.isRoot 判断设备是否被root [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
    * Added plus.navigator.isRoot to determine whether the device is rooted [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
	* 新增 plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
    * Added plus.networkinfo.isSetProxy to determine whether the device's network has a proxy [Specification](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
  + 新增 QQ登录获取授权信息支持获取用户统一标识 unionid 属性 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + Added QQ login to obtain authorization information, support for obtaining the unionid attribute of the user's unified identity [Specification](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + 更新 uni-AD 快手联盟SDK为3.3.5版
  + Update uni-AD Kuaishou Alliance SDK to version 3.3.5
  + Android平台 优化 应用启动时申请读写手机存储权限策略默认值为 once [详情](https://ask.dcloud.net.cn/article/36549)
  + Android platform optimization The policy of applying for read and write mobile phone storage permissions when the application is launched, the default value is once [details](https://ask.dcloud.net.cn/article/36549)
  + Android平台 修复 系统分享 sendWithSystem 分享应用资源图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/111836)
  + Android platform fixes the bug that the system sharing sendWithSystem may fail to share application resource pictures [details](https://ask.dcloud.net.cn/question/111836)
  + Android平台 修复 在Android10及以上设备无法保存视频文件到相册的Bug [详情](https://ask.dcloud.net.cn/question/112970)
  + Android platform fixes the bug that the video file cannot be saved to the album on Android10 and above devices [details](https://ask.dcloud.net.cn/question/112970)
  + Android平台 修复 相册选择图片视频时超过 180M 的文件无法显示的Bug
  + Android platform fixes the bug that files exceeding 180M cannot be displayed when selecting pictures and videos in the album
  + Android平台 修复 UniPush 第一次启动可能无法获取clientid的Bug [详情](https://ask.dcloud.net.cn/question/112318)
  + Android platform fixes the bug that UniPush may not be able to obtain clientid the first time it starts [details](https://ask.dcloud.net.cn/question/112318)
  + Android平台 修复 UniPush 消息对象 payload 属性值可能没有转换为JSON对象的Bug
  + Android platform fixes the bug that the payload attribute value of the UniPush message object may not be converted to a JSON object
  + Android平台 修复 Downloader 下载的链接地址无效时不会触发回调的Bug [详情](https://ask.dcloud.net.cn/question/111826)
  + Android platform Fix the bug that the callback will not be triggered when the download link address of Downloader is invalid [details](https://ask.dcloud.net.cn/question/111826)
  + Android平台 修复 getCookie setCookie等操作 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/111426)
  + Android platform Fix the bug that operations such as getCookie setCookie are not synchronized and shared with the X5 kernel webview page [details](https://ask.dcloud.net.cn/question/111426)
  + Android平台 修复 设置窗口标题栏搜索框失去焦点时，光标仍然显示的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + Android platform fixes the bug that the cursor still displays when the search box in the title bar of the setting window loses focus [details](https://ask.dcloud.net.cn/question/111045)
  + Android平台 修复 关闭窗口页面动画在部分设备上可能出现闪烁的Bug [详情](https://ask.dcloud.net.cn/question/112882)
  + Android platform fixes the bug that the animation of closing the window page may appear flickering on some devices [details](https://ask.dcloud.net.cn/question/112882)
  + iOS平台 修复 QQ分享进入安全校验后，可能无法再次拉起手机QQ完成分享操作的Bug [详情](https://ask.dcloud.net.cn/question/103383)
  + iOS platform fixes the bug that after QQ sharing enters the security check, the mobile QQ may not be able to be pulled up again to complete the sharing operation [details](https://ask.dcloud.net.cn/question/103383)
  + iOS平台 修复 iPhone12、iPad 系列设备获取手机设备信息的 model 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/112922)
  + iOS platform Fix the bug that the model attribute value of iPhone12 and iPad series devices to obtain mobile device information is incorrect [details](https://ask.dcloud.net.cn/question/112922)
  + iOS平台 修复 iOS14 第一次获取位置信息弹出系统授权提示框时无法获取详细地址的Bug  [详情](https://ask.dcloud.net.cn/question/111570)
  + iOS platform fixes the bug that the detailed address cannot be obtained when the system authorization prompt box pops up when obtaining the location information for the first time in iOS14 [details](https://ask.dcloud.net.cn/question/111570)
  + iOS平台 修复 iOS13 打开文档文件名称没有后缀时无任何响应的Bug
  + iOS platform fixes the bug that there is no response when the file name of iOS13 opens without a suffix
  + iOS平台 修复 真机运行时 plus.runtime.getProperty 返回的 appid 属性值不正确的Bug
  + iOS platform fixes the bug that the appid attribute value returned by plus.runtime.getProperty is incorrect when running on a real device
  + iOS平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS platform fixes the bug that the UniPush server is not synchronized to the UniPush server when setting the app corner number
  + iOS平台 修复 从微信小程序打开App时，plus.runtime.launcher 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/111212)
  + iOS platform Fix the bug that the plus.runtime.launcher property value is incorrect when opening the App from the WeChat applet [details](https://ask.dcloud.net.cn/question/111212)
  + iOS平台 修复 设置窗口标题栏搜索框失去焦点时，搜索框内容会被清除掉的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + iOS platform fix the bug that the content of the search box will be cleared when the search box in the title bar of the setting window loses focus [details](https://ask.dcloud.net.cn/question/111045)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放时进度条可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/112150)
  + iOS platform fixes the bug that the progress bar of the video playback control VideoPlayer may be inaccurate during playback [details](https://ask.dcloud.net.cn/question/112150)
  + iOS平台 修复 uni原生插件开发可能出现 SimplePing 类冲突的Bug
  + iOS platform Fix the bug that SimplePing conflict may occur in uni native plug-in development
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 新增 小程序的打开方式支持 push 方式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%96%b9%e5%bc%8f)
  + The opening method of the new applet on the iOS platform supports the push method [details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8% e6%96%b9%e5%bc%8f)
  + iOS平台 新增 支持开启侧滑手势关闭小程序 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91%e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + Added support for the iOS platform to open the slide gesture to close the applet [details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91% e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)



#### 2.9.11.20201121-alpha
* 【uniCloud】
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB added jql writing method to support writing aliases in the field [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + The enum in the new clientDB schema supports the use of cloud data [details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + The bsonType in the new clientDB schema supports password. After setting, all users cannot read this field
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)
  + Optimized clientDB to return more friendly prompts and error codes when index conflicts [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)


#### 2.9.10.20201117-alpha
* 【uni-app】
  + App平台 修复 atob 解码 base64 字符串返回结果可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/110758)
  + App platform Fix the bug that the returned result of atob decoding base64 string may be incorrect [details](https://ask.dcloud.net.cn/question/110758)
  + App-Android平台 修复 nvue ad 组件频繁打开、关闭页面操作可能引起崩溃的Bug
  + App-Android platform fixes the bug that the frequent opening and closing operations of the nvue ad component may cause a crash
  + App-iOS平台 修复 2.9.9版本引出的 nvue swiper 组件中嵌套 video 后页面无法滑动的Bug [详情](https://ask.dcloud.net.cn/question/111145)
  + App-iOS platform Fix the bug that the page cannot slide after the video is nested in the nvue swiper component derived from version 2.9.9 [details](https://ask.dcloud.net.cn/question/111145)
  + App-iOS平台 修复 nvue input 组件设置 focus 为 true 时频繁打开、关闭页面操作可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110809)
  + App-iOS platform fixes a bug that may cause a crash when the focus is set to true for the nvue input component. [Details](https://ask.dcloud.net.cn/question/110809)
  + hello uni-app 修复 在 H5 下【设置 tabBar】示例页面设置背景色时颜色错误的Bug
  + hello uni-app fixes the bug that the background color of the sample page is set in the [Setting tabBar] example page under H5 is wrong
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 视频播放控件 VideoPlayer 支持 show-mute-btn 属性设置是否显示静音按钮 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + New video playback control VideoPlayer supports the show-mute-btn property to set whether to display the mute button [Specification](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 修复 Android11上调用相机录像后无法播放视频文件的Bug [详情](https://ask.dcloud.net.cn/question/110762)
  + Android platform Fix the bug that the video file cannot be played after calling the camera recording on Android11 ​​[details](https://ask.dcloud.net.cn/question/110762)
  + iOS平台 修复 扫描部分二维码无法识别的Bug [详情](https://ask.dcloud.net.cn/question/110878)
  + iOS platform fixed the bug that cannot be recognized by scanning some QR codes [details](https://ask.dcloud.net.cn/question/110878)
  + iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
  + iOS platform fixes the bug that the button style displayed on the ActionSheet is abnormal when the titleNView of the window title bar is set to transparent.
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
  + iOS platform fixes the bug that the button style displayed on the ActionSheet is abnormal when the titleNView of the window title bar is set to transparent.
  + iOS平台 修复 从相册选择视频后调用 uni.navigateBack() 关闭页面时会退出小程序的Bug
  + iOS platform fixes the bug that calling uni.navigateBack() after selecting a video from the album will exit the applet when the page is closed


#### 2.9.9.20201114-alpha
* 【uni-app】
  + App、H5平台 新增 vue 页面中的 input、textarea 在新版浏览器内核（Chrome81+、Safari13.7+）中 confirm-type（即键盘右下角按钮文字）支持更多配置（send、next、done）
  + App, H5 platform Added input and textarea in vue page. In the new browser kernel (Chrome81+, Safari13.7+), confirm-type (the button text in the lower right corner of the keyboard) supports more configurations (send, next, done)
  + App、H5平台 新增 网络请求相关接口 uni.request、uni.uploadFile、uni.downloadFile 支持 timeout 参数
  + App, H5 platform added new network request related interfaces uni.request, uni.uploadFile, uni.downloadFile support timeout parameter
  + App、H5平台 修复 slider 组件显示最大值时拖动不跟手的Bug
  + App, H5 platform fix the bug that the slider component does not follow the hand when the slider component shows the maximum value
  + App-Android平台 修复 uni 原生插件扩展 Component 组件 bindData 回调不触发的Bug
  + App-Android platform fixes the bug that the uni native plug-in extension Component component does not trigger the bindData callback
  + App-Android平台 修复 华为更新系统后 canvas 绘制本地图像跨域的Bug [详情](https://ask.dcloud.net.cn/question/110676)
  + App-Android platform fixed the cross-domain bug of canvas drawing local images after Huawei updated the system [details](https://ask.dcloud.net.cn/question/110676)
  + App-Android平台 修复 uni.request 请求超时不准确的Bug，优化请求最大并发数为10 [详情](https://ask.dcloud.net.cn/question/109996)
  + App-Android platform Fix the bug of uni.request request timeout inaccurate, optimize the maximum number of concurrent requests to 10 [details](https://ask.dcloud.net.cn/question/109996)
  + App-Android平台 修复 websocket 在5.0以下设备强制使用 LTSv1.2 导致无法建立连接的Bug [详情](https://ask.dcloud.net.cn/question/110367)
  + App-Android platform fixes the bug that the websocket is forced to use LTSv1.2 on devices below 5.0, causing the connection to be unable to be established [details](https://ask.dcloud.net.cn/question/110367)
  + App-Android平台 修复 nvue input组件设置 focus 属性值为 false 时依然会自动获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/110553)
  + App-Android platform fixes the bug that the nvue input component will still automatically get the focus when the focus attribute is set to false [details](https://ask.dcloud.net.cn/question/110553)
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
  + App-iOS platform Fix the bug that the input component cannot pop up the soft keyboard when clicked. [Details](https://ask.dcloud.net.cn/question/110491)
  + App-iOS平台 修复 canvas 组件绘制字体部分属性未生效的Bug [详情](https://ask.dcloud.net.cn/question/110227)
  + App-iOS platform fixed a bug where some attributes of canvas component drawing fonts did not take effect [details](https://ask.dcloud.net.cn/question/110227)
  + App-iOS平台 修复 nvue video 组件的子组件点击事件会透传到 video 组件上的Bug [详情](https://ask.dcloud.net.cn/question/110601)
  + App-iOS platform Fix the bug that the click event of the child component of the nvue video component will be transparently transmitted to the video component [details](https://ask.dcloud.net.cn/question/110601)
  + App-iOS平台 修复 uni.openLocation 页面使用 Apple 地图导航目的地错误的Bug
  + App-iOS platform fixes the bug that the uni.openLocation page uses the Apple map navigation destination error bug
  + H5平台 新增 custom-tab-bar 组件，可自由定义 tabBar 的位置和样式，比如在宽屏浏览器上显示在 topWindow 中 [详情](https://uniapp.dcloud.io/component/custom-tab-bar)
  + The custom-tab-bar component is added to the H5 platform, which allows you to freely define the position and style of the tabBar, such as displaying it in topWindow on a widescreen browser [details](https://uniapp.dcloud.io/component/custom-tab -bar)
  + H5平台 新增 uni.chooseFile 接口。用于替代 input type=file [详情](https://uniapp.dcloud.io/api/media/file)
  + Added uni.chooseFile interface on H5 platform. Used to replace input type=file [details](https://uniapp.dcloud.io/api/media/file)
  + H5平台 优化 uni.getLocation 支持通过 IP 定位
  + H5 platform optimization uni.getLocation supports positioning via IP
  + H5平台 优化 uni.chooseLocation、uni.openLocation 在大屏模式的显示效果
  + Optimize the display effect of uni.chooseLocation and uni.openLocation in the large screen mode on the H5 platform
  + H5平台 优化 日期类型 picker 组件在PC版Chrome和FireFox上使用浏览器自带日期选择控件
  + H5 platform optimization date type picker component to use the browser's own date selection control on the PC version of Chrome and FireFox
  + H5平台 优化 单列 picker 组件在大屏设备默认使用 select 样式
  + H5 platform optimization Single-column picker component uses select style by default on large screen devices
  + H5平台 修复 topWindow 存在时，下方window页面的 navigationBar 无法显示的Bug
  + H5 platform fixes the bug that the navigationBar of the lower window page cannot be displayed when the topWindow exists
  + H5平台 修复 picker 组件在宽屏模式显示错位的Bug
  + H5 platform fix the bug that the picker component is displayed misplaced in widescreen mode
  + H5平台 修复 tabBar 的 iconPath 使用带协议的图像路径不显示的Bug
  + H5 platform fixes the bug that the iconPath of tabBar is not displayed when using the image path with protocol
  + 微信小程序平台 优化 跳转页面路径中不再自动增加 __id__ 参数
  + Optimized the WeChat Mini Program platform, the __id__ parameter is no longer automatically added to the jump page path
  + hello uni-app 优化 适配PC宽屏，参考：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
  + hello uni-app optimized to adapt to PC widescreen, reference: [https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
* 【uniCloud】
  + 阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
  + Alibaba Cloud supports transactions (startTransaction mode, runTransaction is not currently supported) [details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 QQ分享支持 type 为 web 类型分享网页链接
  + Added QQ sharing support type as web type to share webpage links
  + 修复 打开新页面后，手机无障碍功能的屏幕阅读器可浏览到底层页面元素的Bug [详情](https://ask.dcloud.net.cn/question/109916)
  + Fix the bug that screen readers with mobile phone accessibility can browse to the underlying page elements after opening a new page [details](https://ask.dcloud.net.cn/question/109916)
  + Android平台 新增 设置应用图标角标数字 plus.runtime.setBadgeNumber 支持 vivo 手机 [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)
  + Android platform Newly added to set the corner label number of the application icon plus.runtime.setBadgeNumber support vivo mobile phone [document](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)
  + Android平台 修复 多次调用 getImageInfo 获取网络图片信息返回的路径可能会重复的Bug [详情](https://ask.dcloud.net.cn/question/110487)
  + Android platform fix the bug that the path returned by calling getImageInfo multiple times to obtain network image information may be repeated [details](https://ask.dcloud.net.cn/question/110487)
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110303)
  + Android platform fixes the bug that compressed images plus.zip.compressImage may cause a crash on Android10 [details](https://ask.dcloud.net.cn/question/110303)
  + Android平台 修复 storage 存储中文数据内容后读取可能出现乱码的Bug
  + Android platform fixes the bug that garbled characters may appear after reading the contents of Chinese data stored in storage
  + Android平台 修复 频繁多次调用 Audio 播放音频可能引起崩溃的Bug
  + Android platform fixes a bug that may cause a crash when calling Audio multiple times to play audio
  + iOS平台 修复 2.9.1版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)
  + iOS platform fixes the bug that the AutoNavi positioning setting geocode is true and the address information cannot be returned by version 2.9.1 [details](https://ask.dcloud.net.cn/question/110474)
  + iOS平台 修复 关闭页面窗口时底部区域可能出现闪动的Bug [详情](https://ask.dcloud.net.cn/question/110153)
  + iOS platform Fixed a bug that may flash in the bottom area when closing the page window [details](https://ask.dcloud.net.cn/question/110153)
  + iOS平台 修复 打开系统内置地图导航时，传入的位置和名称与地图实际显示不一致的Bug [详情](https://ask.dcloud.net.cn/question/109998)
  + iOS platform fixes the bug that when opening the system's built-in map navigation, the incoming location and name are inconsistent with the actual map display [details](https://ask.dcloud.net.cn/question/109998)
  + iOS平台 修复 native.js 使用 plus.ios.invoke 调用方法时传入参数为 jsonObject 不执行的Bug
  + iOS platform fixes the bug that when the native.js uses plus.ios.invoke to call the method, the input parameter is jsonObject not executed


#### 2.9.6.20201031-alpha
* 【uni-app】
  + 【重要】 更新文档 2.9.0+ 后 rpx、rem 样式变形的处理办法 [详情](https://ask.dcloud.net.cn/article/37911)
  + 【Important】 How to deal with rpx and rem style deformation after document 2.9.0+ is updated [details](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.offCompassChange、uni.offAccelerometerChange 用于移除相关事件监听
  + App platform, H5 platform added support uni.offCompassChange, uni.offAccelerometerChange to remove related event monitoring
  + App平台 优化 uni.connectSocket 支持配置 header
  + App platform optimization uni.connectSocket supports configuration header
  + App-Android平台 修复 部分设备 uni.chooseVideo 无法选择视频的Bug [详情](https://ask.dcloud.net.cn/question/109301)
  + App-Android platform fixes the bug that uni.chooseVideo cannot select video on some devices [details](https://ask.dcloud.net.cn/question/109301)
  + App-Android平台 修复 nvue map 组件 markers 的 width、height属性不生效的bug [详情](https://ask.dcloud.net.cn/question/108778)
  + App-Android platform fix the bug that the width and height attributes of the markers of the nvue map component do not take effect [details](https://ask.dcloud.net.cn/question/108778)
  + App-Android平台 修复 nvue map 组件 translateMarker 方法中 rotate 参数值设置 `px` 单位后无法正常执行的Bug [详情](https://ask.dcloud.net.cn/question/109630)
  + App-Android platform Fix the bug that the rotate parameter value in the translateMarker method of the nvue map component cannot be executed normally after the unit of `px` is set [details](https://ask.dcloud.net.cn/question/109630)
  + App-Android平台 修复 2.9.5版本引出的 nvue 部分组件 border-radius 属性设置圆角无效的Bug [详情](https://ask.dcloud.net.cn/question/109597)
  + App-Android platform fixes the bug that the border-radius property of some components of nvue introduced in version 2.9.5 is invalid. [Details](https://ask.dcloud.net.cn/question/109597)
  + App-iOS平台 修复 iOS14 上新页面自动获取焦点导致页面变形的Bug [详情](https://ask.dcloud.net.cn/question/107820)
  + App-iOS platform fixes the bug that the new page on iOS14 automatically gets the focus and the page is deformed [details](https://ask.dcloud.net.cn/question/107820)
  + App-iOS平台 修复 nvue web-view 组件加载 html 页面中 js 调用 alert 不显示提示框的Bug [详情](https://ask.dcloud.net.cn/question/109791)
  + App-iOS platform fixes the bug that js calls alert in the html page loaded by the nvue web-view component and does not display the prompt box [details](https://ask.dcloud.net.cn/question/109791)
  + H5平台 优化 鼠标事件支持返回坐标信息
  + H5 platform optimization, mouse events support return coordinate information
  + H5平台 优化 uni.showToast 在 宽屏的显示效果
  + Optimize the display effect of uni.showToast in widescreen on H5 platform
  + H5平台 优化 弹出类接口和组件支持响应 esc、enter 按键
  + H5 platform optimization, pop-up interface and components support response esc, enter button
  + H5平台 修复 启用 leftWindow 后 web-view 组件显示错位的Bug
  + H5 platform fixes the bug that the web-view component is displayed misaligned after enabling leftWindow
* 【uniCloud】
  + 新增 `<uni-clientDB>`组件支持remove方法，封装了删除确认框、删除数据库、删除前端data等操作，开发更便利 [详情](https://uniapp.dcloud.io/uniCloud/uni-clientdb-component?id=%e6%96%b9%e6%b3%95)
  + Added the `<uni-clientDB>` component to support the remove method, encapsulating the delete confirmation box, delete the database, delete the front-end data and other operations, making development more convenient [details](https://uniapp.dcloud.io/uniCloud/uni -clientdb-component?id=%e6%96%b9%e6%b3%95)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
  + Optimization Improve the execution speed of cloud functions by tens of milliseconds. The performance of non-cold start is the same as that of traditional servers (cloud functions need to be redeployed)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 uni-AD 腾讯广点通视频开屏广告可能造成应用闪退，或关闭广告后点击屏幕部分区域仍然打开落地页的Bug
  + Android platform fixes the bug that the uni-AD Tencent Guangdiantong video opening advertisement may cause the app to crash, or the landing page is still opened after the advertisement is closed and some areas of the screen are clicked
  + Android平台 修复 UniPush 云端打包 GooglePlay 渠道默认添加定位权限的Bug [详情](https://ask.dcloud.net.cn/question/105068)
  + Android platform Fix the bug that the UniPush cloud package GooglePlay channel adds location permission by default [details](https://ask.dcloud.net.cn/question/105068)
  + iOS平台 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + iOS platform new QR code scanning supports autoDecodeCharset parameter to solve the problem of garbled characters in non-UTF-8 encoded data [details](https://ask.dcloud.net.cn/question/66886)
  + iOS平台 修复 微信登录用户选择拒绝授权可能不触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/109305)
  + iOS platform fixed the bug that the WeChat login user choosing to refuse authorization may not trigger the failure callback [details](https://ask.dcloud.net.cn/question/109305)
  + iOS平台 修复 无法保存文件路径包含中文的图片到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/109168)
  + iOS platform fixes the bug that the file path containing Chinese pictures cannot be saved to the system album [details](https://ask.dcloud.net.cn/question/109168)


#### 2.9.5.20201024-alpha
* 【uni-app】
  + App平台、H5平台 修复 Safari 14 输入组件禁用状态文字颜色变浅的Bug [详情](https://ask.dcloud.net.cn/question/109013)
  + App platform, H5 platform Fix the bug that the text color of the input component disabled status in Safari 14 becomes lighter [details](https://ask.dcloud.net.cn/question/109013)
  + App平台 新增 全屏视频 uni.createFullScreenVideoAd [详情](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App platform new full screen video uni.createFullScreenVideoAd [details](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App-Android平台 修复 uni.request 请求 cookie 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/108639)
  + App-Android platform fixed the bug that uni.request request cookie and X5 kernel webview page were not shared synchronously [details](https://ask.dcloud.net.cn/question/108639)
  + App-Android平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 不生效的Bug
  + App-Android platform fixes the bug that the mode setting of nvue image component to widthFix and heightFix does not take effect
  + App-Android平台 修复 nvue map 组件使用 translateMarker 移动 maker 后气泡文本没有跟随移动的Bug [详情](https://ask.dcloud.net.cn/question/95239)
  + App-Android platform fixes the bug that the bubble text does not follow the movement after the nvue map component uses translateMarker to move the maker [details](https://ask.dcloud.net.cn/question/95239)
  + App-Android平台 修复 nvue map 组件动态删除 marker 的 callout 属性不生效的Bug
  + App-Android platform fixes the bug that the nvue map component dynamically deletes the marker's callout attribute not to take effect
  + App-iOS平台 修复 canvas 组件绘制 uni.getImageInfo 临时路径跨域的Bug [详情](https://ask.dcloud.net.cn/question/108817)
  + App-iOS platform fixes the bug that the canvas component draws uni.getImageInfo temporary path cross-domain bug [details](https://ask.dcloud.net.cn/question/108817)
  + App-iOS平台 修复 nvue scroll-view 组件使用下拉刷新 refresh 隐藏时没有动画效果的Bug [详情](https://ask.dcloud.net.cn/question/108681)
  + App-iOS platform fixes the bug that the nvue scroll-view component has no animation effect when using the pull-down refresh refresh to hide [details](https://ask.dcloud.net.cn/question/108681)
  + App-iOS平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 时透明区域填充红色背景的Bug [详情](https://ask.dcloud.net.cn/question/108774)
  + App-iOS platform Fix the bug that the transparent area is filled with red background when the mode of the nvue image component is set to widthFix, heightFix [details](https://ask.dcloud.net.cn/question/108774)
  + App-iOS平台 修复 web-view 组件加载的页面 title 为空时，返回按钮不显示的Bug [详情](https://ask.dcloud.net.cn/question/108887)
  + App-iOS platform Fix the bug that the back button does not display when the title of the page loaded by the web-view component is empty [details](https://ask.dcloud.net.cn/question/108887)
  + H5平台 修复 Chrome 使用自动填充时 placeholder 仍然可见的Bug
  + H5 platform fixes the bug that the placeholder is still visible when Chrome uses autofill
  + uni-ui 新增 uni-forms 组件，支持表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui adds uni-forms component to support form verification [details](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui 新增 uni-group 组件，用于表单项分组显示 [详情](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui adds uni-group component for group display of form items [details](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui 新增 uni-table 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3270)
  + uni-ui adds uni-table component [details](https://ext.dcloud.net.cn/plugin?id=3270)
  + uni-ui 新增 uni-dateformat 组件，支持各种日期格式化，以及1分钟前、刚刚等形式 [详情](https://ext.dcloud.net.cn/plugin?id=3279)
  + uni-ui adds uni-dateformat component, supports various date formatting, and formats such as 1 minute ago and just now [details](https://ext.dcloud.net.cn/plugin?id=3279)
* 【uniCloud】
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + 【Important】 New clientDB supports `jql` query syntax, which greatly reduces the difficulty of database operation [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery), greatly simplifies table query[ Details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + 【Important】 The uni-clientDB component is newly added, and the content of the cloud database is directly obtained through the component at the front end, and directly bound to the interface, which greatly improves the development efficiency [details](https://uniapp.dcloud.net.cn/uniCloud /uni-clientdb-component)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb)
  + 【Important】 Adjust the built-in clientDB, the cloud no longer needs a separate clientDB cloud function, and the front end does not need to reference clientDB's js sdk, just write `const db = uniCloud.database()` on the front end [details](https:// uniapp.dcloud.net.cn/uniCloud/clientdb)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + 【Important】 Adjust the uni-clientDB-actions directory to the cloudfunctions root directory [details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + 【Important】 Adjust the permission and validator sub-directories of the clientDB cloud function to abolish, just write the permission and validator content in the DB Schema, save it and it will take effect directly, no need to export again
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【Important】 Added `uniCloud Admin basic framework` (this template can be selected for new HBuilderX projects) [details](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率
  + 【Important】 New web console After the cloud database is configured with DB Schema, front-end projects can be directly generated, including data form addition, modification pages, and verification rules. Significantly improve development efficiency
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 【Important】 Tencent Cloud is officially commercialized [See details](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 新增 web控制台 云数据库支持导出db_init.json
  + Added web console, cloud database supports exporting db_init.json
  + 新增 web控制台 服务空间改名
  + Added web console service space renamed
  + 新增 web控制台 云数据库支持`扩展校验函数`，可自主编程实现更复杂的数据校验逻辑，同时在 DB Schema 中引用这些`扩展校验函数`
  + Added web console. Cloud database supports `Extended Validation Function`, which can be programmed to realize more complex data validation logic. At the same time, these `Extended Validation Functions` can be referenced in DB Schema.
  + 修复 阿里云 数据库set方法表现不正确的Bug
  + Fix the bug that the set method of Alibaba Cloud database behaves incorrectly
  + uni-id 新增 开发者callFunction时可自行传入uniIdToken，此时不再从storage获取token
  + uni-id is added. Developers can pass in uniIdToken by themselves when callingFunction. At this time, they will no longer get token from storage.
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 uni-AD 支持全屏视频广告 [详情](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + Added uni-AD to support fullscreen video ads [details](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + 优化 uni-AD 基础开屏广告显示效果，适配各种分辨率屏幕设备
  + Optimize uni-AD basic open-screen advertising display effect, adapt to various resolution screen devices
  + Android平台 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + Android platform new QR code scanning supports autoDecodeCharset parameter to solve the problem of garbled characters in non-UTF-8 encoded data [details](https://ask.dcloud.net.cn/question/66886)
  + Android平台 更新 高德地图SDK为7.6.0版
  + Android platform update AutoNavi Map SDK to version 7.6.0
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.4.2版
  + Android platform update uni-AD Kuaishou Alliance SDK to version 3.3.4.2
  + Android平台 修复 uni-AD 应用从后台切换到前台显示开屏广告时，系统状态栏可能遮挡跳过按钮的Bug
  + Android platform fixes the bug that the system status bar may block the skip button when the uni-AD application switches from the background to the foreground to display the open-screen advertisement
  + Android平台 修复 多次调用二维码扫码时，因复用扫码提示音频播放对象导致概率闪退的Bug [详情](https://ask.dcloud.net.cn/question/108776)
  + Android platform fixes the bug that when the QR code scan is called multiple times, the audio playback object is prompted by the multiple scan code [details](https://ask.dcloud.net.cn/question/108776)
  + Android平台 修复 获取屏幕亮度 getBrightness 在小米手机上可能返回数据异常的Bug [详情](https://ask.dcloud.net.cn/question/108691)
  + Android platform fix the bug that get screen brightness getBrightness may return abnormal data on Xiaomi phones [details](https://ask.dcloud.net.cn/question/108691)
  + Android平台 修复 storage 存储数据内容超过 2M 后可能无法正常存取非ASCII字符的Bug
  + Android platform fixes the bug that non-ASCII characters may not be accessed normally after the storage data content exceeds 2M
  + Android平台 修复 Geolocation 定位模块默认添加后台定位权限 ACCESS_BACKGROUND_LOCATION 的Bug [详情](https://ask.dcloud.net.cn/question/109442)
  + Android platform Fix the bug that the Geolocation positioning module adds the background positioning permission ACCESS_BACKGROUND_LOCATION by default [details](https://ask.dcloud.net.cn/question/109442)
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、快手联盟SDK为3.3.3版
  + iOS platform update uni-AD today's headline pangolin SDK is version 3.3.0.0, Kuaishou Alliance SDK is version 3.3.3
  + iOS平台 更新 云端打包环境XCode为12.1版，uni原生插件兼容支持swift代码
  + iOS platform update Cloud packaging environment XCode is version 12.1, uni native plug-in compatible supports swift code
  + iOS平台 优化 本地相册选择照片界面，新增支持 permissionAlert 参数配置权限检测，适配 iOS14 上用户设置为访问`选中的照片`权限时引导修改为访问`所有照片` [文档](http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.GalleryOptions)
  + The iOS platform optimizes the local photo album selection interface, adds support for permissionAlert parameter configuration permission detection, and adapts to the guide when the user is set to access the `selected photos` permission on iOS14 and is modified to access `all photos` [Document](http:// www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.GalleryOptions)
  + iOS平台 修复 本地相册选择照片界面，在 iOS14 上如果选中的图片在 iCloud 会触发刷新导致排序混乱的Bug [详情](https://ask.dcloud.net.cn/question/108502)
  + iOS platform fixes the local photo album selection interface. On iOS14, if the selected picture is in iCloud, it will trigger a bug that causes the sorting confusion [details](https://ask.dcloud.net.cn/question/108502)
  + iOS平台 修复 本地相册选择照片界面，选择视频文件出现错误提示框，预览视频文件只显示首帧的Bug
  + iOS platform fixes the local photo album selection interface, an error message box appears when selecting a video file, and the preview video file only shows the bug of the first frame
  + iOS平台 修复 本地相册选择照片界面，设置 filename 参数后选中多张图片后返回路径不正确的Bug
  + iOS platform fixes the bug that the path is incorrect after selecting multiple pictures after setting the filename parameter in the local photo album selection interface
  + iOS平台 修复 获取当前地理位置设置 geocode 为 true 时可能无法返回数据的Bug [详情](https://ask.dcloud.net.cn/question/109170)
  + iOS platform fixes the bug that data may not be returned when the geocode is set to true for obtaining the current location [details](https://ask.dcloud.net.cn/question/109170)
  + iOS平台 修复 获取图片信息 getImageInfo 返回的 width、height 值类型不正确的Bug [详情](https://ask.dcloud.net.cn/question/108893)
  + iOS platform fixes the bug that the width and height values ​​returned by getImageInfo are not correct for obtaining image information [details](https://ask.dcloud.net.cn/question/108893)
  + iOS平台 修复 视频播放控件横向全屏时唤起软键盘还是竖屏模式的Bug [详情](https://ask.dcloud.net.cn/question/107036)
  + iOS platform fixes the bug that the soft keyboard or the portrait mode is invoked when the video playback control is in full screen horizontally [details](https://ask.dcloud.net.cn/question/107036)
  + iOS平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + iOS platform fixes the bug that the Bluetooth subscription feature value notifyBLECharacteristicValueChange method does not take effect when the state property is set
  + iOS平台 修复 蓝牙同时读取和订阅特征值可能引起数据返回混乱的Bug [详情](https://ask.dcloud.net.cn/question/108107)
  + iOS platform fixed the bug that reading and subscribing to the characteristic value of Bluetooth at the same time may cause confusion in the data return [details](https://ask.dcloud.net.cn/question/108107)
  + iOS平台 修复 Webview窗口标题栏搜索框的光标在 iOS13+ 上显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/103205)
  + iOS platform fixed the bug that the cursor in the search box of the title bar of the Webview window displayed incorrectly on iOS13+ [details](https://ask.dcloud.net.cn/question/103205)

#### 2.9.2.20200913-alpha
* 【uni-app】
  + App平台、H5平台 修复 获取节点信息未包含 computedStyle 的Bug [详情](https://ask.dcloud.net.cn/question/108387)
  + App platform, H5 platform Fix the bug that the computedStyle is not included in the obtained node information [details](https://ask.dcloud.net.cn/question/108387)
  + App平台 修复 高频调用 uni.saveFile 保存失败的Bug [详情](https://ask.dcloud.net.cn/question/106233)
  + App platform fixes the bug that the high-frequency call to uni.saveFile fails to save [details](https://ask.dcloud.net.cn/question/106233)
  + App-Android平台 修复 系统 webview 更新到 Chrome84 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug
  + App-Android platform fixes the bug that the canvas component draws a local image uni.canvasToTempFilePath after the system webview is updated to Chrome84
  + App-Android平台 修复 nvue web-view 组件部分https地址页面无法加载http地址资源的Bug [详情](https://ask.dcloud.net.cn/question/108527)
  + App-Android platform fix the bug that the https address page of the nvue web-view component cannot load the http address resource [details](https://ask.dcloud.net.cn/question/108527)
  + App-iOS平台 修复 nvue image 组件 mode 设置 widthFix、heightFix 不生效的Bug [详情](https://ask.dcloud.net.cn/question/98827)
  + App-iOS platform fixed the bug that the widthFix and heightFix settings of the nvue image component mode did not take effect [details](https://ask.dcloud.net.cn/question/98827)
  + App-iOS平台 修复 nvue map 组件中添加 polyline 边线总是带个箭头的Bug [详情](https://ask.dcloud.net.cn/question/91041)
  + App-iOS platform Fix the bug that the polyline side line always has an arrow in the nvue map component [details](https://ask.dcloud.net.cn/question/91041)
  + H5平台 调整 picker 组件宽屏下默认垂直居中
  + H5 platform adjusts the picker component to be vertically centered by default under widescreen
  + H5平台 调整 uni.showActionSheet 宽屏下默认垂直居中，支持 popover 参数调节位置
  + H5 platform adjust uni.showActionSheet, default vertical centering under widescreen, support popover parameter adjustment position
  + H5平台 修复 image 组件 mode="heightFix" 图像变形的Bug [详情](https://ask.dcloud.net.cn/question/107022)
  + H5 platform fix the bug of image component mode="heightFix" image distortion [details](https://ask.dcloud.net.cn/question/107022)
  + H5平台 修复 rich-text 组件无法渲染 section 等标签的Bug
  + H5 platform fixes the bug that the rich-text component cannot render section and other tags
 * 【App插件(含5+App和uni-app的App端)】
 * 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 更新 uni-AD 今日头条穿山甲SDK版本为3.3.0.0，快手联盟SDK版本为3.3.4
  + Android platform update uni-AD Today's headline pangolin SDK version is 3.3.0.0, Kuaishou Alliance SDK version is 3.3.4
  + Android平台 修复 2.9.0 版本引出的 选择文件或拍照后可能会显示开屏广告的Bug
  + Android platform fixes the bug that may display an open screen advertisement after selecting a file or taking a photo.
  + Android平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + Android platform fixes the bug that the Bluetooth subscription feature value notifyBLECharacteristicValueChange method does not take effect when the state property is set
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上报传入参数错误的Bug [详情](https://ask.dcloud.net.cn/question/108010)
  + Android platform fixes the bug that the compressed image plus.zip.compressImage reports the wrong input parameter in Android10 [details](https://ask.dcloud.net.cn/question/108010)
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.11
  + iOS platform update uni-AD Tencent Guangdiantong SDK version is 4.11.11
  + iOS平台 修复 wgt热更新后 plus.runtime.getProperty 获取的 versionCode 不正确的Bug [详情](https://ask.dcloud.net.cn/question/108425)
  + iOS platform Fix the bug that the versionCode obtained by plus.runtime.getProperty is incorrect after the wgt hot update [details](https://ask.dcloud.net.cn/question/108425)
  + iOS平台 修复 云端打包不支持最新WWDR中间证书生成的企业版证书的Bug [详情](https://ask.dcloud.net.cn/question/106866)
  + iOS platform fixes the bug that cloud packaging does not support the enterprise version certificate generated by the latest WWDR intermediate certificate [details](https://ask.dcloud.net.cn/question/106866)



#### 2.9.1.20200927-alpha
* 【uni-app】
  + App平台 修复 tabbar 动态显示或隐藏时可能出现闪白的Bug [详情](https://ask.dcloud.net.cn/question/80898)
  + App platform Fix the bug that may flash white when the tabbar is dynamically displayed or hidden [details](https://ask.dcloud.net.cn/question/80898)
  + App-iOS平台 修复 2.9.0版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
  + App-iOS platform Fix the bug that the dynamic setting style of the nvue image component derived from version 2.9.0 is not displayed in the device pictures below iOS14 [details](https://ask.dcloud.net.cn/question/107884)
  + App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)
  + App-iOS platform Fix the bug that the text in the tabbar cannot be displayed completely on iOS14 [#2146](https://github.com/dcloudio/uni-app/issues/2146)
  + H5平台 修复 2.9.0 版本引出的内置 css 变量 --window-bottom 在 部分浏览器中失效的Bug [详情](https://ask.dcloud.net.cn/question/107976)
  + H5 platform Fix the bug that the built-in css variable derived from version 2.9.0 --window-bottom is invalid in some browsers [details](https://ask.dcloud.net.cn/question/107976)
  + H5平台 修复 2.9.0 版本引出的部分事件写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/107940)
  + H5 platform fixes the bug that some event writing compilation errors are reported in version 2.9.0 [details](https://ask.dcloud.net.cn/question/107940)
  + 小程序平台 修复 属性值为空的对象表达式时编译报错的Bug
  + Mini Program Platform Fix the bug that compile error is reported when the attribute value is empty object expression
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 更新 高德定位SDK版本为5.2.0
  + Android platform update AutoNavi positioning SDK version is 5.2.0
  + iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
  + iOS platform update AutoNavi Maps SDK version is 7.6.0, AutoNavi positioning SDK version is 2.6.7, to solve the problem of applying for `connect to devices on local network` permission when displaying maps on iOS14
  + iOS平台 修复 uni-AD 腾讯广点通的信息流广告样式可能不正确的Bug
  + iOS platform fixes the bug that uni-AD Tencent Guangdiantong's information flow advertising style may be incorrect
  + iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)
  + iOS platform fix the bug that get the address book plus.contacts.getAddressBook causes the app to crash on iOS14 [details](https://ask.dcloud.net.cn/question/107339)


#### 2.9.0.20200926-alpha
* 【uni-app】
  + 【重要】新增 大屏适配指南 [详情](https://uniapp.dcloud.net.cn/adapt)
  + 【Important】 New large screen adaptation guide [details](https://uniapp.dcloud.net.cn/adapt)
  + 【重要】新增 leftWindow、rightWindow、topWindow，用于宽屏适配 [详情](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + 【Important】 Added leftWindow, rightWindow, and topWindow for widescreen adaptation [details](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + 【重要】新增 match-media 媒体查询适配组件，用于动态屏幕适配 [详情](https://uniapp.dcloud.net.cn/component/match-media)
  + 【Important】 Added match-media media query adaptation component for dynamic screen adaptation [details](https://uniapp.dcloud.net.cn/component/match-media)
  + 新增 支持 uni.createMediaQueryObserver 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + Added support for uni.createMediaQueryObserver method [details](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + 【重要】App平台、H5平台 新增 rpx 配置，默认限定了 rpx 生效的最大屏幕宽度为 px。可在 pages.json -> globalStyle 配置 rpxCalcMaxDeviceWidth、rpxCalcBaseDeviceWidth、rpxCalcIncludeWidth 等参数 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【Important】 App platform, H5 platform newly added rpx configuration, by default, the maximum screen width for rpx to take effect is limited to px. You can configure rpxCalcMaxDeviceWidth, rpxCalcBaseDeviceWidth, rpxCalcIncludeWidth and other parameters in pages.json -> globalStyle [Details](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【重要】App平台、H5平台 优化 调整根字体大小为系统默认大小与微信小程序平台一致 [详情](https://ask.dcloud.net.cn/article/37911)
  + 【Important】 App platform, H5 platform optimization Adjust the root font size to the system default size consistent with the WeChat applet platform [details](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.getSelectedTextRange 方法 [详情](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App platform, H5 platform added support uni.getSelectedTextRange method [details](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App平台、H5平台 修复 部分 base64 路径的图像无法显示的Bug [详情](https://ask.dcloud.net.cn/question/106591)
  + App platform, H5 platform Fix the bug that some base64 path images cannot be displayed [details](https://ask.dcloud.net.cn/question/106591)
  + App平台 修复 weex 编译模式 vue 页面中的 picker 组件 change 事件有时无法触发的Bug [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App platform Fix the bug that the picker component change event in the vue page of weex compilation mode sometimes cannot be triggered [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App平台 修复 低版本系统上 canvas 组件绘制坐标比实际值小的Bug [详情](https://ask.dcloud.net.cn/question/105866)
  + App platform Fix the bug that canvas component drawing coordinates on lower version systems are smaller than actual values ​​[details](https://ask.dcloud.net.cn/question/105866)
  + App平台 修复 canvasContext.measureText 无效的Bug [详情](https://ask.dcloud.net.cn/question/107032)
  + App platform Fix the bug that canvasContext.measureText is invalid [details](https://ask.dcloud.net.cn/question/107032)
  + App平台 修复 data-set 部分数据为 String 类型时显示错误的Bug [详情](https://ask.dcloud.net.cn/question/100073)
  + App platform Fix the bug of displaying errors when some data in data-set is of String type [details](https://ask.dcloud.net.cn/question/100073)
  + App平台 修复 蓝牙事件监听可以重复添加的Bug [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App platform Fix the bug that Bluetooth event monitoring can be added repeatedly [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App平台 修复 云打包后某些情况下启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/107332)
  + App platform Fix the bug of white screen startup in some cases after cloud packaging [details](https://ask.dcloud.net.cn/question/107332)
  + App平台 修复 获取系统外观样式 plus.navigator.getUIStyle 无法调用的Bug [详情](https://ask.dcloud.net.cn/question/103886)
  + App platform fix the bug that can't call the system appearance style plus.navigator.getUIStyle [details](https://ask.dcloud.net.cn/question/103886)
  + App-Android平台 修复 系统 webview 更新到 Chrome85+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/103303)
  + App-Android platform fixes the bug that the canvas component draws local images uni.canvasToTempFilePath after the system webview is updated to Chrome85+ [details](https://ask.dcloud.net.cn/question/103303)
  + App-Android平台 修复 web-view 组件内 input 被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/92008)
  + App-Android platform fix the bug that the input in the web-view component is blocked by the soft keyboard [details](https://ask.dcloud.net.cn/question/92008)
  + App-Android平台 修复 uni.request 请求 firstIpv4 属性可能不生效的Bug
  + App-Android platform fixes the bug that uni.request request firstIpv4 attribute may not take effect
  + App-Android平台 修复 2.8.4版引出的 uni.request 重定向后 cookie 可能丢失的Bug [详情](https://ask.dcloud.net.cn/question/106697)
  + App-Android platform fixes the bug that uni.request introduced in version 2.8.4 may lose cookies after redirection [details](https://ask.dcloud.net.cn/question/106697)
  + App-Android平台 修复 2.8.4版引出的 uni.request tcp连接没有复用的Bug [详情](https://ask.dcloud.net.cn/question/106167)
  + App-Android platform fix the bug that uni.request tcp connection is not reused in version 2.8.4 [details](https://ask.dcloud.net.cn/question/106167)
  + App-Android平台 修复 2.8.11版引出的 uni-AD 腾讯广点通SDK更新后在X86模拟器上无法正常启动的Bug [详情](https://ask.dcloud.net.cn/question/106532)
  + App-Android platform fixes the bug that uni-AD and Tencent Guangdiantong SDK introduced by version 2.8.11 cannot start normally on the X86 emulator after the update [details](https://ask.dcloud.net.cn/question/ 106532)
  + App-Android平台 修复 nvue v-if 切换 template 可能出现 tap 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/106258)
  + App-Android platform fixed a bug where the tap event could not be triggered when switching template nvue v-if [details](https://ask.dcloud.net.cn/question/106258)
  + App-iOS平台 修复 nvue 使用await请求网络赋值后页面无法渲染的bug [详情](https://ask.dcloud.net.cn/question/107670)
  + App-iOS platform fixes the bug that the page cannot be rendered after nvue uses await to request network assignment [details](https://ask.dcloud.net.cn/question/107670)
  + App-iOS平台 修复 iPhoneX 横屏启动时页面宽度异常Bug
  + App-iOS platform fixes the bug that the page width is abnormal when the iPhoneX is launched in landscape mode
  + App-iOS平台 修复 iOS12 以下 :adjust-position="false" 不生效的Bug
  + App-iOS platform fixes the bug below iOS12: adjust-position="false" does not take effect
  + App-iOS平台 修复 部分情况 input 事件未触发的Bug [详情](https://ask.dcloud.net.cn/question/101135)
  + App-iOS platform fixes the bug that the input event is not triggered in some cases [details](https://ask.dcloud.net.cn/question/101135)
  + App-iOS平台 修复 nvue video 组件无法播放相对路径的本地视频的Bug [详情](https://ask.dcloud.net.cn/question/107215)
  + App-iOS platform fix the bug that the nvue video component cannot play the local video with relative path [details](https://ask.dcloud.net.cn/question/107215)
  + App-iOS平台 修复 uni原生插件 UniPluginProtocol 协议方法可能不触发回调的Bug
  + App-iOS platform fixes the bug that uni native plug-in UniPluginProtocol protocol method may not trigger callback
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
  + App-iOS platform fixes a bug where uni native plug-in may conflict with internal method names and cause some functional abnormalities
  + App-iOS平台 修复 离线打包使用 XCode12 编译运行到 iOS14 上 nvue 页面图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/107320)
  + App-iOS platform fixes the bug that the pictures on the nvue page cannot be displayed when compiled and run on iOS14 using XCode12 for offline packaging [details](https://ask.dcloud.net.cn/question/107320)
  + H5平台 修复 video 组件全屏时 slot 不显示的Bug [详情](https://ask.dcloud.net.cn/question/105724)
  + H5 platform fix the bug that the slot does not display when the video component is full screen [details](https://ask.dcloud.net.cn/question/105724)
  + H5平台 修复 iOS9 系统 uni.uploadFile 传入 base64 报错的Bug
  + H5 platform fixes the bug that uni.uploadFile is passed into base64 in iOS9 system
  + 新闻模版 适配PC宽屏 (新建uni-app项目可选择该模板体验)
  + News template adapted to PC widescreen (new uni-app project can choose this template experience)
  + 小程序平台 新增 cli版本支持 vue3 [详情](https://ask.dcloud.net.cn/article/37834)
  + Mini Program Platform Added cli version to support vue3 [details](https://ask.dcloud.net.cn/article/37834)
  + 小程序平台 修复 部分事件使用箭头函数表达式执行报错的Bug [#2132](https://github.com/dcloudio/uni-app/issues/2132)
  + Mini Program Platform Fix a bug where some events use arrow function expressions to report errors [#2132](https://github.com/dcloudio/uni-app/issues/2132)
* 【uniCloud】
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + 【Important】 Added a fixed export IP of Tencent Cloud Cloud functions, which can be used in scenarios that require IP configuration such as WeChat official account development [details](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip )
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【Important】 uni-clientDB 2.0 is a major update, which allows complete and convenient control authority and data verification. Most scenarios no longer need to write cloud functions [details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【Important】 uni-id added role permissions related functions [details](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 【Important】 Cloud database supports the JSON Schema specification, and the data format description can be performed on the database management interface of the web console [details](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
  + Alibaba Cloud removes client upload file type restrictions
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用 [详情](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + Added uni-AD support for apps to switch from the background to the foreground to display open screen ads, and it is enabled by default [details](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
  + Add uni-AD to support the information flow advertisement of the Kuaishou Alliance, and increase the advertisement filling of the information flow
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色 [规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + Added the searchInput search box of the native navigation title bar titleNView to support the color attribute to set the text color [Specification](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + New video playback control VideoPlayer supports show-loading property to set whether to display loading control [Specification](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 适配 Android10+系统 `分区存储` 机制 [详情](https://ask.dcloud.net.cn/article/36199)
  + Android platform adapted to Android10+ system `partition storage` mechanism [details](https://ask.dcloud.net.cn/article/36199)
  + Android平台 更新 uni-AD 穿山甲SDK为3.2.5.1版；腾讯广告联盟SDK为4.270.1140版、快手联盟SDK为3.3.1版
  + Android platform update uni-AD pangolin SDK version 3.2.5.1; Tencent Advertising Alliance SDK version 4.270.1140, Kuaishou Alliance SDK version 3.3.1
  + Android平台 修复 视频播放控件 VideoPlayer 设置 show-progress 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/106150)
  + Android platform Fix the bug that the video player control VideoPlayer setting show-progress may not take effect [details](https://ask.dcloud.net.cn/question/106150)
  + Android平台 修复 Webview窗口设置 videoFullscreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/106499)
  + Android platform fix the bug that the videoFullscreen setting of the Webview window does not take effect [details](https://ask.dcloud.net.cn/question/106499)
  + Android平台 修复 页面中 input 标签 type 为 file 且 accept 为 video 时点击打开不是启动摄像的Bug [详情](https://ask.dcloud.net.cn/question/104931)
  + Android platform fixes the bug that clicking to open when the input tag type is file and accept is video on the page is not starting the camera [details](https://ask.dcloud.net.cn/question/104931)
  + Android平台 修复 File 文件对象的 slice 方法无法获取指定数据内容的Bug [详情](https://ask.dcloud.net.cn/question/106427)
  + Android platform Fix the bug that the slice method of File object cannot obtain the specified data content [details](https://ask.dcloud.net.cn/question/106427)
  + Android平台 修复 设置targetversion为29+时，在Android10及以上设备调用 uni.shareWithSystem 分享图片可能报 `多文件分享只支持照片` 的Bug
  + Android platform fixes when setting targetversion to 29+, calling uni.shareWithSystem to share pictures on Android10 and above devices may report a bug that `multi-file sharing only supports photos`
  + Android平台 修复 安全检测可能报apk安装包的Activity、Service组件存在导出风险的Bug
  + Android platform fixes the bug that security detection may report that there is a risk of exporting the Activity and Service components of the apk installation package
  + 【重要】iOS平台 适配 iOS14 解决应用启动时申请 `连接到本地网络上的设备` 权限导致无法通过AppStore审核的问题 [详情](https://ask.dcloud.net.cn/question/107530)
  + 【Important】 The iOS platform adapts to iOS14 to solve the problem of failing to pass the AppStore review when applying for the `connect to the device on the local network` permission when the app starts [details](https://ask.dcloud.net.cn/question/107530 )
  + iOS平台 适配 iOS14 下拉刷新的雪花样式调整问题
  + iOS platform adapts to iOS14, the snowflake style adjustment problem of pull-down refresh
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.9，解决 iOS14 上应用启动时提示读取剪切板的问题
  + iOS platform update Alipay SDK version is 15.7.9, which solves the problem of prompting to read the clipboard when the app starts on iOS14
  + iOS平台 优化 uni-AD 快手联盟SDK引用库，减少安装包ipa大小约20M
  + iOS platform optimization uni-AD Kuaishou Alliance SDK reference library, reducing the installation package ipa size by about 20M
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 exitFullScreen 可能导致页面横屏设置失效的Bug [详情](https://ask.dcloud.net.cn/question/105520)
  + iOS platform fixes the bug that the video playback control VideoPlayer calling exitFullScreen may cause the page horizontal screen setting to fail [details](https://ask.dcloud.net.cn/question/105520)
  + iOS平台 修复 从本地相册选择图片在 iOS14 上可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/107745)
  + iOS platform fixes the bug that selecting pictures from local albums may display abnormally on iOS14 [details](https://ask.dcloud.net.cn/question/107745)
  + iOS平台 修复 2.7.12版引出的 原生控件对象 plus.nativeObj.View 调用 drawRichText 设置 align 属性为 center 不居中显示的Bug [详情](https://ask.dcloud.net.cn/question/103328)
  + iOS platform Fix the bug that the native control object plus.nativeObj.View derived from version 2.7.12 calls drawRichText and sets the align property to center. [Details](https://ask.dcloud.net.cn/question/103328)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 修复 小程序前后台切换或跳转其他原生页面再返回小程序页面时，对应的应用生命周期 onShow、onHide 没有触发的Bug
  + iOS platform fixes the bug that the corresponding application life cycle onShow and onHide is not triggered when switching between the front and back of the Mini Program or jumping to other native pages and then returning to the Mini Program page
  + iOS平台 修复 安装App后偶现首次无法正常启动小程序的Bug
  + iOS platform Fixed the bug that occasionally failed to start the applet for the first time after installing the App


#### 2.8.11.20200904-alpha
* 【uni-app】
  + App-Android 修复 2.8.9版引出的 uni-AD 小概率出现获取广告配置数据失败导致无法显示开屏广告的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 2.8.9版升级 QQ SDK引出的 在部分手机上无法正常分享到 QQ 的Bug [详情](https://ask.dcloud.net.cn/question/103383)

#### 2.8.10.20200903-alpha
* 【uni-app】
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求默认超时时间过长的Bug
  + App-Android platform Fix the bug that uni.request request default timeout time is too long due to version 2.8.4
* 【uniCloud】
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
  + Fix the bug that UI freezes when uploading public modules in some cases
  + 调整 阿里云放开文件上传类型限制
  + Adjusted Alibaba Cloud's release of file upload type restrictions

#### 2.8.9.20200829-alpha
* 【uni-app】
  + 新增 uni.navigateTo 增加参数 events 支持页面间通信 [详情](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + Add uni.navigateTo and add parameter events to support inter-page communication [details](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + App平台、H5平台 优化 image 组件支持 mode="heightFix"
  + App platform, H5 platform optimization image component support mode="heightFix"
  + App平台 优化 uni.canvasToTempFilePath 提高执行速度
  + App platform optimization uni.canvasToTempFilePath to improve execution speed
  + App平台 修复 app.vue 生命周期 onshow 某些情况下无参数的Bug [详情](https://ask.dcloud.net.cn/question/103903)
  + App platform Fix the bug with no parameters in the life cycle of app.vue onshow in some cases [details](https://ask.dcloud.net.cn/question/103903)
  + App平台 修复 input 组件修改 password 属性后 adjust-position 配置失效的Bug [详情](https://ask.dcloud.net.cn/question/103435)
  + App platform Fix the bug that the adjust-position configuration fails after the password attribute of the input component is modified [details](https://ask.dcloud.net.cn/question/103435)
  + App平台 修复 临时文件未清理的Bug [详情](https://ask.dcloud.net.cn/question/103456)
  + App platform fix the bug that temporary files are not cleaned up [details](https://ask.dcloud.net.cn/question/103456)
  + App平台 修复 nvue refresh 组件偶现下拉刷新结束后不复位的Bug [详情](https://github.com/dcloudio/uni-app/issues/1107)
  + App platform Fix the bug that the nvue refresh component occasionally does not reset after the pull-down refresh is over [details](https://github.com/dcloudio/uni-app/issues/1107)
  + App-Android平台 修复 Android11 设备运行白屏的Bug [详情](https://ask.dcloud.net.cn/question/105319)
  + App-Android platform Fix the bug of white screen running on Android11 ​​devices [details](https://ask.dcloud.net.cn/question/105319)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 与 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/103956)
  + App-Android platform fixes the bug that uni.request, which is introduced in version 2.8.4, is not synchronized and shared with the webview page [details](https://ask.dcloud.net.cn/question/103956)
  + App-Android平台 修复 2.8.4版引出的 nvue 无法加载网络字体图标文件 iconfont 的Bug [详情](https://ask.dcloud.net.cn/question/104655)
  + App-Android platform fixes the bug that nvue can't load web font icon file iconfont introduced by version 2.8.4 [details](https://ask.dcloud.net.cn/question/104655)
  + App-Android平台 修复 调用监听加速度、陀螺仪等 API 可能报`e.setInterval is not a function`错误的Bug [详情](https://ask.dcloud.net.cn/question/105584)
  + App-Android platform fixes the bug that `e.setInterval is not a function` error may be reported when calling APIs such as monitoring acceleration and gyroscope [details](https://ask.dcloud.net.cn/question/105584)
  + App-Android平台 修复 没有获取到位置权限时，调用 uni.chooseLocation 可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/105312)
  + App-Android platform Fix the bug that calling uni.chooseLocation may cause the app to crash when the location permission is not obtained [details](https://ask.dcloud.net.cn/question/105312)
  + App-iOS平台 修复 scroll-view 组件在 iOS13 触摸交互卡顿的Bug [详情](https://ask.dcloud.net.cn/question/98881)
  + App-iOS platform fix the bug that the scroll-view component is stuck in iOS13 touch interaction [details](https://ask.dcloud.net.cn/question/98881)
  + App-iOS平台 修复 nvue map 组件 controltap 事件返回数据参数名不正确的Bug [详情](https://ask.dcloud.net.cn/question/99769)
  + App-iOS platform fix the bug that the data parameter name returned by the controltap event of the nvue map component is incorrect [details](https://ask.dcloud.net.cn/question/99769)
  + H5平台 优化 uni.previewImage 支持手势缩放
  + H5 platform optimization uni.previewImage supports gesture zoom
  + H5平台 修复 多个 editor 组件会重复加载依赖的Bug
  + H5 platform fixes the bug that multiple editor components will repeatedly load dependencies
  + H5平台 修复 从首页调用 uni.redirectTo 切换其他页面后首页未销毁的Bug [详情](https://ask.dcloud.net.cn/question/103503)
  + H5 platform fixes the bug that the homepage is not destroyed after calling uni.redirectTo from the homepage to switch other pages [details](https://ask.dcloud.net.cn/question/103503)
  + H5平台 修复 切换页面导致 textarea 组件 auto-height 属性失效的Bug
  + H5 platform fixed a bug that caused the auto-height property of textarea component to fail when switching pages
  + 小程序平台 修复 v-for 遍历复杂表达式不显示的Bug [#2012](https://github.com/dcloudio/uni-app/issues/2012)
  + Mini Program Platform Fix the bug that v-for does not display when traversing complex expressions [#2012](https://github.com/dcloudio/uni-app/issues/2012)
* 【uniCloud】
  + 新增 本地运行 加入显示调试行号等信息
  + Added local operation added to display debugging line number and other information
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
  + Fixed the bug that uploading some cloud functions or public modules failed when the npm mirror source was Taobao source
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 uni-AD 支持快手联盟的开屏和激励视频广告
  + Added uni-AD to support screen opening and rewarded video advertisements of the Kuaishou Alliance
  + 修复 下载文件设置的临时存储文件名过长时无法正常下载的Bug [详情](https://ask.dcloud.net.cn/question/103336)
  + Fix the bug that the download file settings cannot be downloaded normally when the temporary storage file name is too long [details](https://ask.dcloud.net.cn/question/103336)
  + Android平台 修复 UniPush 在部分魅族手机可能无法获取cid的Bug [详情](https://ask.dcloud.net.cn/question/102774)
  + Android platform fixes the bug that UniPush may not be able to get cid on some Meizu phones [details](https://ask.dcloud.net.cn/question/102774)
  + Android平台 修复 设置targetversion为29时，从相册选择图片返回路径不正确的Bug [详情](https://ask.dcloud.net.cn/question/105269)
  + Android platform fixes the bug that when the targetversion is set to 29, the return path is incorrect when selecting pictures from the album [details](https://ask.dcloud.net.cn/question/105269)
  + Android平台 修复 设置targetversion为29时，在部分 Android10 设备无法正常定位的Bug
  + Android platform fixes the bug that some Android10 devices cannot be positioned normally when targetversion is set to 29
  + iOS平台 更新 QQ 分享、登录SDK版本为3.3.9-Lite，解决分享到 QQ 显示未授权应用的问题
  + iOS platform update QQ sharing and login SDK version to 3.3.9-Lite, solving the problem of displaying unauthorized applications when sharing to QQ
  + iOS平台 修复 设置页面横屏 landscape 显示时，在 iPad 设备上不显示状态栏的Bug [详情](https://ask.dcloud.net.cn/question/103386)
  + iOS platform fix the bug that the status bar is not displayed on the iPad device when the landscape is displayed on the setting page [details](https://ask.dcloud.net.cn/question/103386)
  + iOS平台 修复 视频播放控件 VideoPlayer 动态修改 objectFit 属性不生效的Bug
  + iOS platform fixed the bug that the video player control VideoPlayer dynamically modified the objectFit property to not take effect


#### 2.8.7.20200820-alpha
* 【uni-app】
  + App-Android平台 修复 调用 plus.io.requestFileSystem 概率性出现`Failed to find taskCenter`错误信息的Bug [详情](https://ask.dcloud.net.cn/question/103902)
  + App-Android platform fixes the bug that the error message `Failed to find taskCenter` appears probabilistically when calling plus.io.requestFileSystem [details](https://ask.dcloud.net.cn/question/103902)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 未正确处理可能引起网络请求失败的Bug [详情](https://ask.dcloud.net.cn/question/105139)
  + App-Android platform fixes the bug that uni.request, which is introduced in version 2.8.4, is incorrectly processed and may cause network request failure [details](https://ask.dcloud.net.cn/question/105139)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求返回的 http 响应头数据中 key 名称变成小写的Bug [详情](https://ask.dcloud.net.cn/question/103995)
  + App-Android platform Fix the bug that the key name in the http response header data returned by the uni.request request from version 2.8.4 becomes lowercase [details](https://ask.dcloud.net.cn/question/103995)
  + 小程序平台 修复 v-for 中事件使用部分复杂的表达式编译报错的Bug
  + Small program platform Fix the bug that some complex expressions are used to compile errors in events in v-for
  + 小程序平台 修复 v-for 中嵌套 v-if 时部分复杂表达式编译后运行报错的Bug [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + Mini Program Platform Fix a bug where some complex expressions are compiled and run after compiling errors when v-if is nested in v-for [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + 小程序平台 修复 修复部分自定义事件无参数时报错的Bug [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + Mini Program Platform Fix Fix the bug that some custom events report errors when there are no parameters [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + 微信小程序平台 修复 属性使用复杂的对象表达式小程序开发工具编译报错的Bug [详情](https://ask.dcloud.net.cn/question/103944)
  + WeChat applet platform Fix the bug that the property uses complex object expression applet development tools to compile errors [details](https://ask.dcloud.net.cn/question/103944)
* 【uniCloud】
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + Optimization Cloud function plugin supports writing components, js_sdk, static directories
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web console Alibaba Cloud adds import and export functions for database collections [details](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + web console Tencent Cloud New resource overview page
  + 短信发送 新增 3个通知类短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + SMS sending 3 new notification SMS templates [details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + uni-AD 新增 信息流和激励视频的多广告源在App同次启动时随机穿插，可提升广告收益
  + uni-AD added. Multi-ad sources of information flow and rewarded videos are randomly interspersed when the App is launched at the same time, which can increase advertising revenue
  + uni-AD 新增 设置开屏全屏显示
  + uni-AD added to set full-screen display on open screen
  + Android平台 修复 uni-AD 开屏显示穿山甲广告点击跳过按钮后，再点击splash页面可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/103601)
  + Android platform Fixed a bug that caused the app to crash after clicking the skip button on the uni-AD screen when displaying pangolin ads and clicking the splash page [details](https://ask.dcloud.net.cn/question/103601)
  + iOS平台 更新 UniPush 使用的个推SDK版本为2.4.5.1，解决在部分设备上获取唯一标识可能重复的问题
  + iOS platform update the version of the push SDK used by UniPush to 2.4.5.1, to solve the problem that the unique identifier may be duplicated on some devices
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.10，今日头条穿山甲SDK版本为3.1.0.5
  + iOS platform update uni-AD Tencent Guangdiantong SDK version is 4.11.10, today's Toutiao pangolin SDK version is 3.1.0.5
  + iOS平台 修复 直播推流 LivePusher 监听事件后不触发回调的Bug
  + iOS platform fixed the bug that the LivePusher did not trigger the callback after listening to the event



#### 2.8.4.20200805-alpha
* 【uni-app】
  + App平台、H5平台 优化 uni.setTabBarItem 支持 pagePath 配置
  + App platform, H5 platform optimization uni.setTabBarItem supports pagePath configuration
  + App平台、H5平台 修复 picker 组件设置 value 为 -1 时表现异常的Bug [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App platform, H5 platform Fix the bug that the picker component behaves abnormally when the value is set to -1 [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App平台、H5平台 修复 editor 组件粘贴文字报错的Bug [详情](https://ask.dcloud.net.cn/question/102948)
  + App platform, H5 platform Fix the bug that the editor component pastes text error [details](https://ask.dcloud.net.cn/question/102948)
  + App平台 新增 支持蓝牙相关接口 uni.setBLEMTU、uni.getBLEDeviceRSSI
  + App platform added support for Bluetooth related interfaces uni.setBLEMTU, uni.getBLEDeviceRSSI
  + App平台 优化 uni.request 支持返回 cookies 属性与微信小程序拉齐（基础库版本 2.10.0+）
  + App platform optimization uni.request supports returning cookies attributes and wechat applet align (base library version 2.10.0+)
  + App平台 修复 ibeacon 相关事件回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/102136)
  + App platform Fix the bug that ibeacon related event callbacks are not triggered [details](https://ask.dcloud.net.cn/question/102136)
  + App平台 修复 当前 tab 页面不是配置的首页时，热刷新后 tabBar 消失的Bug [详情](https://ask.dcloud.net.cn/question/101612)
  + App platform Fix the bug that the tabBar disappears after hot refresh when the current tab page is not the configured homepage [details](https://ask.dcloud.net.cn/question/101612)
  + App平台 修复 从 nvue 页面调用 uni.reLaunch 切换到 vue 页面后无法设置状态栏的Bug [详情](https://ask.dcloud.net.cn/question/102594)
  + App platform fixes the bug that the status bar cannot be set after calling uni.reLaunch from the nvue page and switching to the vue page [details](https://ask.dcloud.net.cn/question/102594)
  + App-Android平台 更新 网络请求底层实现库 OKHttp 版本为3.12.11，提升 websocket 传输效率
  + App-Android platform update The OKHttp version of the underlying implementation library for network requests is 3.12.11, which improves websocket transmission efficiency
  + 【重要】App-Android平台 修复 targetSdkVersion 设置为 29 时在 Android10 运行白屏的Bug，满足谷歌应用商店上架对targetSdkVersion的要求 [详情](https://ask.dcloud.net.cn/question/103166)
  + 【Important】 App-Android platform fixes the bug of running white screen on Android10 when targetSdkVersion is set to 29 to meet the requirements of targetSdkVersion on Google App Store [details](https://ask.dcloud.net.cn/question/103166 )
  + App-Android平台 修复 nvue input组件绑定值带小数点时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/97745)
  + App-Android platform Fix the bug that displays abnormally when the binding value of nvue input component has a decimal point [details](https://ask.dcloud.net.cn/question/97745)
  + App-iOS平台 修复 nvue 页面 在 iOS9 系统白屏的Bug
  + App-iOS platform fixes the bug of the white screen of the nvue page in the iOS9 system
  + H5平台 修复 picker 组件配置 mode="date" 且 fields="year" 时报错的Bug [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + H5 platform Fix the bug when picker component configuration mode="date" and fields="year" report an error [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + 小程序平台 修复 v-for 中方法使用复杂表达式报错的Bug [#373](https://github.com/dcloudio/uni-app/issues/373)
  + Mini Program Platform Fix the bug of v-for method using complex expressions to report errors [#373](https://github.com/dcloudio/uni-app/issues/373)
  + 小程序平台 修复 v-for 中模板插值使用复杂表达式报错的Bug [详情](https://ask.dcloud.net.cn/question/102443)
  + Mini Program Platform Fix the bug that the template interpolation in v-for uses complex expressions to report errors [details](https://ask.dcloud.net.cn/question/102443)
  + 小程序平台 修复 v-for 遍历对象表达式报错的Bug [#449](https://github.com/dcloudio/uni-app/issues/449)
  + Mini Program Platform Fix the bug of v-for traversal object expression error [#449](https://github.com/dcloudio/uni-app/issues/449)
  + 小程序平台 修复 v-for 中属性值为对象表达式报错的Bug [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + Mini Program Platform Fix a bug where the attribute value in v-for is reported as an object expression error [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + 小程序平台 修复 v-for 遍历数值时模板中有复杂表达式不显示的Bug
  + Small program platform fixes the bug that complex expressions in the template are not displayed when v-for traverses values
  + 小程序平台 修复 v-if="false" 时标签内部的方法和过滤器仍然会执行的Bug [#334](https://github.com/dcloudio/uni-app/issues/334)
  + Mini Program Platform Fix the bug that methods and filters inside tags will still be executed when v-if="false" [#334](https://github.com/dcloudio/uni-app/issues/334)
  + 微信小程序平台、QQ小程序平台、字节跳动小程序平台 优化 自定义组件支持 v-show 指令 [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + WeChat applet platform, QQ applet platform, ByteDance applet platform optimization Custom components support v-show command [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + 支付宝小程序平台 修复 v-for 部分情况 key 不生效的Bug
  + Alipay applet platform fixes the bug that the v-for key does not take effect in some cases
  + 支付宝小程序平台 修复 支持 uni.getSavedFileList 接口
  + Alipay applet platform repair support uni.getSavedFileList interface
  + 支付宝小程序平台 修复 sjs 中 callMethod 不能正确调用的Bug
  + Alipay applet platform fixed the bug that callMethod in sjs could not be called correctly
  + 头条小程序平台 修复 修复解构插槽不显示的Bug [详情](https://ask.dcloud.net.cn/question/80187)
  + Toutiao Mini Program Platform Fix Fix the bug that the deconstructed slot is not displayed [details](https://ask.dcloud.net.cn/question/80187)
  + uni-ui 新增 uni-list 组件的 clickable 属性，是否开启点击反馈
  + uni-ui adds the clickable attribute of uni-list component, whether to enable click feedback
  + uni-ui 新增 uni-list 组件的 link 属性，显示右侧箭头并开启点击反馈
  + uni-ui adds the link attribute of the uni-list component, displays the arrow on the right and turns on click feedback
  + uni-ui 新增 uni-list 组件的 to 属性，直接跳转到指定页面
  + uni-ui adds the to attribute of the uni-list component to jump directly to the specified page
  + uni-ui 新增 uni-list 组件的 border 属性，是否显示列表分割线
  + uni-ui adds the border property of uni-list component, whether to display the list dividing line
  + uni-ui 新增 uni-rate 组件的 disabled 属性，可设置组件禁用状态（之前版本的不可点击状态）
  + uni-ui adds the disabled attribute of the uni-rate component, which can set the disabled state of the component (the unclickable state of the previous version)
  + uni-ui 新增 uni-rate 组件的 disabledColor 属性，可设置禁用颜色
  + uni-ui adds the disabledColor attribute of uni-rate component, which can set the disabled color
  + uni-ui 新增 uni-rate 组件的 readonly 属性，可设置组件只读属性
  + uni-ui adds readonly attribute of uni-rate component, which can set readonly attribute of component
  + uni-ui 新增 uni-rate 组件的 allowHalf 属性，可设置组件是否开启半星选择
  + uni-ui adds the allowHalf attribute of uni-rate component, which can set whether to enable half-star selection
  + uni-ui 新增 uni-rate 组件的 touchable 属性，可设置组件是否支持滑动手势
  + uni-ui adds the touchable attribute of uni-rate component, which can set whether the component supports sliding gestures
  + uni-ui 修复 uni-rate 组件动态传值不更新的问题
  + uni-ui fixes the problem that uni-rate components do not update dynamically when passing values
  + uni-ui 优化 uni-rate 组件的 value 属性可使用 v-model 双向绑定数据
  + uni-ui optimization uni-rate component value attribute can use v-model two-way binding data
  + uni-ui 优化 uni-popup 组件的扩展组件支持 easycom
  + uni-ui optimization uni-popup component expansion components support easycom
  + uni-ui 新增 uni-swipe-action 组件的左侧滑动使用方式
  + uni-ui added uni-swipe-action component to use the left side sliding mode
  + uni-ui 新增 uni-swipe-action 组件的插槽使用方式
  + uni-ui adds the slot usage method of uni-swipe-action component
  + uni-ui 新增 uni-swipe-action 组件的 threshold 属性，可以控制滑动缺省值
  + uni-ui adds the threshold attribute of uni-swipe-action component, which can control the default value of sliding
  + uni-ui 修复 uni-swipe-aciotn 组件的滚动页面时触发滑动的Bug
  + uni-ui fixes the bug that triggers sliding when scrolling the page of the uni-swipe-aciotn component
  + uni-ui 优化 uni-swipe-action 组件的长列表滚动性能
  + uni-ui optimizes the long list scrolling performance of uni-swipe-action component
* 【uniCloud】
  + 阿里云 新增 支持协作者本地运行云函数
  + Alibaba Cloud adds support for collaborators to run cloud functions locally
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
  + Fix the bug that the right-click menu of public modules derived from HBuilderX 2.8.0 is missing when updating the cloud function menu that depends on this module
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 蓝牙设置最大传输单元 setBLEMTU，获取设备信号强度 getBLEDeviceRSSI 等功能 [文档](https://www.html5plus.org/doc/zh_cn/bluetooth.html#plus.bluetooth.setBLEMTU)
  + 修复 Webview窗口标题栏 titleNView 设置为透明样式时按钮的背景区域无法自适应的Bug
  + Fix the bug that the background area of ​​the button cannot be adaptive when the titleNView of the Webview window title bar is set to a transparent style
  + Android平台 更新 UniPush 使用的个推SDK国内渠道版本为2.14.1.0，提升消息推送到达率
  + Android platform Update the domestic channel version of the personal push SDK used by UniPush to 2.14.1.0, which improves the arrival rate of message push
  + Android平台 调整 UniPush 和 个推推送 谷歌渠道默认不显示隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36479)
  + Android platform adjust UniPush and individual tweets, Google channels do not display the privacy policy prompt box by default [details](https://ask.dcloud.net.cn/article/36479)
  + Android平台 修复 UniPush 谷歌渠道设置不显示隐私政策提示框可能导致获取推送标识信息失败的Bug
  + Android platform fixes the bug that the privacy policy prompt box is not displayed in the UniPush Google channel settings, which may cause the failure to obtain the push identification information
  + Android平台 优化 native.js 自动回收对象 autoCollection 机制，避免应用长时间运行内存回收不及时的问题
  + The Android platform optimizes the autoCollection mechanism of native.js to automatically reclaim objects to avoid the problem of untimely memory reclaiming when the application runs for a long time
  + Android平台 修复 从相册图片中扫描二维码识别率低的Bug [详情](https://ask.dcloud.net.cn/question/88500)
  + Android platform fixes the bug of low recognition rate of scanning QR code from photo album [details](https://ask.dcloud.net.cn/question/88500)
  + Android平台 修复 保存部分视频文件添加至相册可能无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/102669)
  + Android platform fix the bug that saving some video files added to the album may not be displayed normally [details](https://ask.dcloud.net.cn/question/102669)
  + Android平台 修复 自定义基座 wap2app 真机运行 tab 无法切换的Bug [详情](https://ask.dcloud.net.cn/question/102492)
  + Android platform fixes the bug that the tab can't be switched when the custom dock wap2app is running on the real machine [details](https://ask.dcloud.net.cn/question/102492)
  + iOS平台 修复 直播推流 LivePusher 设置 whiteness 美白属性值不生效的Bug [详情](https://ask.dcloud.net.cn/question/102761)
  + iOS platform fixes the bug that the LivePusher setting whiteness property value does not take effect. [Details](https://ask.dcloud.net.cn/question/102761)
  + iOS平台 修复 状态栏样式设置为非沉浸式在 iPad 设备上横屏时状态栏显示不正常的Bug
  + iOS platform fixes the bug that the status bar is not displayed properly when the status bar style is set to non-immersive when the iPad device is landscaped
* 【uni小程序SDK】
* 【Uni applet SDK】
  + Android平台 优化 小程序后台运行功能，支持关闭多任务窗口 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Optimized background running function of Mini Program on Android platform, supports closing multitasking window [details](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Android平台 修复 小程序在manifest.json配置固定横屏或竖屏方向无效的Bug
  + Android platform fixes the bug that the fixed landscape or portrait orientation of the mini program in the manifest.json configuration is invalid



#### 2.8.3.20200727-alpha
* 【uni-app】
  + H5平台 修复 启用摇树优化后 audio 组件编译报错的Bug [#1943](https://github.com/dcloudio/uni-app/issues/1943)
  + H5 platform fixes the bug of audio component compilation error after enabling tree shake optimization [#1943](https://github.com/dcloudio/uni-app/issues/1943)

#### 2.8.2.20200724-alpha
* 【uni-app】
  + 支付宝小程序平台 修复 使用 await/async 报错的Bug [详情](https://ask.dcloud.net.cn/question/101714)
  + Alipay applet platform fixed the bug of using await/async to report errors [details](https://ask.dcloud.net.cn/question/101714)
  + App-iOS平台 修复 2.8.1版引出的 nvue video 组件中 cover-view 无法覆盖显示的Bug [详情](https://ask.dcloud.net.cn/question/102165)
  + App-iOS platform fixes the bug that the cover-view cannot cover the display in the nvue video component derived from version 2.8.1 [details](https://ask.dcloud.net.cn/question/102165)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时传入初始值高度没有自适应的Bug [详情](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS platform fixed the bug that the initial value of the input height is not adaptive when the auto-height of the nvue textarea component is set to true [details](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS平台 修复 nvue textarea 组件 linechange 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/91477)
  + App-iOS platform fixes the bug that the linechange event of the nvue textarea component does not trigger [details](https://ask.dcloud.net.cn/question/91477)
* 【uniCloud】
  + 阿里云 修复 本地运行时云函数互调报错的Bug
  + Alibaba Cloud fixed a bug where cloud function intermodulation errors were reported when running locally
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + iOS平台 修复 previewImage 预览图片在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100379)
  + iOS platform fixed the bug that previewImage preview image caused app crash on iOS14 [details](https://ask.dcloud.net.cn/question/100379)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + Android平台 修复 2.8.1版引出的 通过 DCUniMPSDK.getInstance().startApp 运行小程序丢失启动参数的Bug
  + Android platform fixes the bug of missing startup parameters when running the applet through DCUniMPSDK.getInstance().startApp introduced in version 2.8.1


#### 2.8.1.20200721-alpha
* 【uni-app】
  + App平台 修复 audio 组件不显示的Bug
  + App platform fix the bug that the audio component is not displayed
  + App平台 修复 backgroundAudioManager onCanPlay 事件失效的Bug
  + App-Android平台 修复 部分平板设备 rpx 计算错误的Bug  [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android platform Fix the bug of rpx calculation error on some tablet devices [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android平台 修复 系统日期选择框 pickDate 设置默认、最大、最小日期不生效的Bug [详情](https://ask.dcloud.net.cn/question/95065)
  + App-Android platform Fix the bug that the pickDate setting of the system date selection box does not take effect by setting the default, maximum, and minimum dates [details](https://ask.dcloud.net.cn/question/95065)
  + App-Android平台 修复 2.8.0版引出的 页面切换后 input 组件设置 focus 属性可能无法正常输入的Bug [详情](https://ask.dcloud.net.cn/question/100771)
  + App-Android platform fixes the bug that the focus attribute of the input component may not be input normally after the page switch caused by version 2.8.0 [details](https://ask.dcloud.net.cn/question/100771)
  + App-Android平台 修复 2.8.0版引出的 uni.request 请求部分网络接口可能失败的Bug
  + App-Android platform fixes the bug that some network interfaces of uni.request derived from version 2.8.0 may fail
  + App-Android平台 修复 tabBar 页面首次启动可能显示区域不正常的Bug [详情](https://ask.dcloud.net.cn/question/100898)
  + App-Android platform Fix the bug that the tabBar page may display abnormally in the first launch [Details](https://ask.dcloud.net.cn/question/100898)
  + App-Android平台 修复 软键盘弹出时执行 uni.reLaunch 在Android10上会导致应用闪退的Bug [详情](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android platform fixed the bug that executing uni.reLaunch when the soft keyboard pops up will cause the app to crash on Android10 [details](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android平台 修复 subNvue 原生子窗体动态显示隐藏可能引起 map 组件显示异常的Bug
  + App-Android platform fixes the bug that the dynamic display and hiding of subNvue's native subforms may cause the map component to display abnormally
  + App-iOS平台 修复 2.8.0版引出的 页面中使用 video 组件跳转到其他页面会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100806)
  + App-iOS platform Fix the bug that using the video component to jump to other pages in the page derived from version 2.8.0 will cause the application to crash [details](https://ask.dcloud.net.cn/question/100806)
  + App-iOS平台 修复 nvue video 组件在页面关闭后仍在后台播放，再次打开页面出现播放异常的Bug [详情](https://ask.dcloud.net.cn/question/100943)
  + App-iOS platform fixes the bug that the nvue video component is still playing in the background after the page is closed, and the page is opened again. [Details](https://ask.dcloud.net.cn/question/100943)
  + App-iOS平台 修复 nvue 页面开启下拉刷新 enablePullDownRefresh 后，配置自定义导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100506)
  + App-iOS platform Fix the bug that the custom navigation bar is not displayed properly after the pull-down refresh enablePullDownRefresh is turned on on the nvue page [details](https://ask.dcloud.net.cn/question/100506)
  + 小程序平台 修复 组件的部分写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/101132)
  + Mini Program Platform Fix the bug that some of the component's wording compiles errors [details](https://ask.dcloud.net.cn/question/101132)
  + 小程序平台 修复 作用域插槽中定义的 class 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/100724)
  + Mini Program Platform Fix the bug that the class style defined in the scope slot does not take effect [details](https://ask.dcloud.net.cn/question/100724)
  + 小程序平台 修复 修复组件嵌套时解构插槽内事件报错的Bug [详情](https://ask.dcloud.net.cn/question/99063)
  + Mini Program Platform Fix Fix the bug that the event reporting error in the deconstructed slot when components are nested [details](https://ask.dcloud.net.cn/question/99063)
  + 小程序平台 修复 匿名插槽和具名插槽 default 不等同的Bug
  + Mini program platform fixes the bug that the anonymous slot and the named slot default are not equivalent
  + 微信小程序平台 新增 支持生命周期 onUnhandleRejection、onShareTimeline（分享小程序到朋友圈）、onAddToFavorites
  + WeChat applet platform added support life cycle onUnhandleRejection, onShareTimeline (share the applet to the circle of friends), onAddToFavorites
  + 微信小程序平台 优化 支持作用域插槽当作普通插槽使用 [详情](https://ask.dcloud.net.cn/question/98634)
  + Optimized WeChat applet platform to support the use of scoped slots as normal slots [details](https://ask.dcloud.net.cn/question/98634)
  + 支付宝小程序平台 修复 作用域插槽不显示的Bug [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + Alipay applet platform fix the bug that the scope slot is not displayed [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + 新建uni-app项目模板，新增来自插件市场腾讯云提供的discus!Q模板 [详情](https://ext.dcloud.net.cn/plugin?id=2336)
  + Create a new uni-app project template, add a discuss! Q template from the plug-in market Tencent Cloud [details](https://ext.dcloud.net.cn/plugin?id=2336)
* 【uniCloud】
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runlocal)
  + 【Important】 Added local running cloud functions, which can connect to remote databases and cloud storage, which greatly improves development efficiency and facilitates data import and export [details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id =runlocal)
  + 【重要】新增 插件市场支持云函数付费销售，欢迎插件作者们提交高质量可售卖插件
  + 【Important】 New plug-in market supports paid sales of cloud functions, plug-in authors are welcome to submit high-quality and sellable plug-ins
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 【Important】 Added uniCloud.sendSms SMS sending capability, which can send verification code SMS conveniently and cheaply [details](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 修复 2.7.12版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + Fix the bug that uniCloud reports errors in Alipay applet and Baidu applet derived from version 2.7.12
  + 修复 2.7.12版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
  + Fix the bug that uniCloud is unusable when uniCloud is used in main.js on the H5 side derived from version 2.7.12
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 uni-AD 更新 360广告SDK版本为5.17.3157
  + Android platform uni-AD updated 360 advertising SDK version to 5.17.3157
  + Android平台 修复 视频播放 VideoPlayer 的 src 属性无法切换相同ip不同端口的流媒体链接地址的Bug [详情](https://ask.dcloud.net.cn/question/95951)
  + Android platform fixes the bug that the src attribute of VideoPlayer cannot switch the streaming media link addresses of the same ip and different ports [details](https://ask.dcloud.net.cn/question/95951)
  + Android平台 修复 消息提示框 toast 在 MIUI12 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100601)
  + Android platform fixed the bug that the toast of the message prompt box displayed abnormally in MIUI12 [details](https://ask.dcloud.net.cn/question/100601)
  + Android平台 修复 Webview窗口的 iframe 中调用请求权限 requestPermissions 报错的Bug [详情](https://ask.dcloud.net.cn/question/100592)
  + Android platform Fix the bug of requestPermissions reporting error in the iframe of the Webview window [details](https://ask.dcloud.net.cn/question/100592)
  + Android平台 修复 Webview窗口设置 scrollIndicator 属性可能不生效的Bug
  + Android platform fix the bug that the scrollIndicator property setting of the Webview window may not take effect
  + Android平台 修复 连接蓝牙设备 createBLEConnection 设置 timeout 属性无效的Bug
  + Android platform fixes the bug that the timeout property of createBLEConnection is invalid when connecting to a Bluetooth device
  + Android平台 修复 获取蓝牙设备指定服务特征值的 write 属性值可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99149)
  + Android platform fix the bug that the write attribute value of the specified service characteristic value of the Bluetooth device may be incorrect [details](https://ask.dcloud.net.cn/question/99149)
  + iOS平台 修复 uni-AD 开屏广告点击特定基础广告时可能引起应用卡死的Bug
  + iOS platform fixes the bug that may cause the app to freeze when uni-AD open screen ads click on specific basic ads
  + iOS平台 修复 连接多个蓝牙设备时，特征值变化事件 onBLECharacteristicValueChange 回调触发异常的Bug [详情](https://ask.dcloud.net.cn/question/99858)
  + iOS platform Fix the bug that the feature value change event onBLECharacteristicValueChange triggers an exception when multiple Bluetooth devices are connected [details](https://ask.dcloud.net.cn/question/99858)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 big integer 类型数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/100234)
  + iOS platform fix the bug that sqlite executes query SQL statement to read big integer type data is inaccurate [details](https://ask.dcloud.net.cn/question/100234)
  + iOS平台 修复 音频 audio 连接 airpods 等外接设备时依然使用手机扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/100719)
  + iOS platform fixes the bug that audio is still played on the phone speaker when connected to external devices such as airpods [details](https://ask.dcloud.net.cn/question/100719)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + Android平台 优化 小程序进程为应用私有进程，名称调整为`宿主包名:io.dcloud.unimp`，防止其他APP调用
  + Android platform optimization The applet process is a private application process, and the name is adjusted to `host package name: io.dcloud.unimp` to prevent other apps from calling
  + Android平台 修复 小程序启动界面可能出现闪屏的Bug
  + Android platform fixes the bug that the splash screen may appear on the startup interface of the applet
  + iOS平台 优化 小程序启动流程，Hello uni-app 示例应用启动速度提升2倍，在iPhone11设备实测400ms内打开应用首页
  + iOS platform optimization of the small program startup process, the Hello uni-app sample application startup speed is increased by 2 times, the application homepage is opened within 400ms of the iPhone11 device measurement
  + iOS平台 修复 发送短信 sendMessage API无效的Bug
  + iOS platform fixes the bug that the sendMessage API is invalid for sending SMS



#### 2.8.0.20200701-alpha
* 【uni-app】
  + 优化 编译错误提示更准确，新增采集未知的编译器错误
  + Optimization Compiler error prompts are more accurate, and unknown compiler errors are newly collected
  + App平台 修复 uni.hideLoading 会把 uni.showToast 隐藏掉的Bug
  + App platform fix the bug that uni.hideLoading will hide uni.showToast
  + App平台 修复 uploadTask.abort 无效的Bug [详情](https://ask.dcloud.net.cn/question/99364)
  + App platform fix the invalid bug of uploadTask.abort [details](https://ask.dcloud.net.cn/question/99364)
  + App平台 修复 nvue 页面 Promise 不支持 finally 方法的Bug
  + App platform fixes the bug that the Promise on the nvue page does not support the finally method
  + App平台 修复 局部组件 props 中的 id 会覆盖根节点 id 属性的问题 [详情](https://ask.dcloud.net.cn/question/99900)
  + App platform Fix the problem that the id in the local component props will overwrite the id attribute of the root node [details](https://ask.dcloud.net.cn/question/99900)
  + 【重要】App-Android平台 调整 JS引擎默认从 jscore 改为 V8，提升运算性能 [详情](https://ask.dcloud.net.cn/article/37465)
  + 【Important】 App-Android platform adjusts the default JS engine from jscore to V8 to improve computing performance [details](https://ask.dcloud.net.cn/article/37465)
  + App-Android平台 新增 支持DNS解析时优先使用ipv4 [详情](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android platform Added support for DNS resolution in priority to use ipv4 [details](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android平台 修复 启动分包后云端打包可能出现页面无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100023)
  + App-Android platform fixes the bug that the page cannot be displayed normally when the cloud packaging is started [details](https://ask.dcloud.net.cn/question/100023)
  + App-Android平台 修复 map 组件 position 样式设置为 fixed 后可能出现地图控件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100128)
  + App-Android platform fix the bug that the map control cannot be displayed normally after the position style of the map component is set to fixed [details](https://ask.dcloud.net.cn/question/100128)
  + App-Android平台 修复 tabbar 页面中 webview 组件在 wgt 升级后可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99253)
  + App-Android platform Fix the bug that the webview component in the tabbar page may have a white screen after the wgt upgrade [details](https://ask.dcloud.net.cn/question/99253)
  + App-Android平台 修复 nvue 页面使用 video 组件切换到其它 vue 页面后 input 组件无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/97197)
  + App-Android platform Fixed the bug that the input component could not evoke the soft keyboard after using the video component on the nvue page to switch to other vue pages [details](https://ask.dcloud.net.cn/question/97197)
  + App-Android平台 修复 nvue input、textarea 组件设置 adjust-position 为 false 后切换页面可能无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/99416)
  + App-Android platform Fix the bug that the soft keyboard may not be evoked after switching the page after setting the adjust-position of the nvue input and textarea components to false [details](https://ask.dcloud.net.cn/question/99416)
  + App-Android平台 修复 nvue webview 组件设置 webview-styles 的 progress 属性值后进度条显示不正常的Bug
  + App-Android platform fixes the bug that the progress bar of the nvue webview component setting the progress property value of webview-styles is not normal
  + App-Android平台 修复 全面屏手机横屏时页面宽高可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99365)
  + App-Android platform fixes the bug that the page width and height may be incorrect when the full screen mobile phone is horizontally screened [details](https://ask.dcloud.net.cn/question/99365)
  + App-iOS平台 修复 iOS12以下版本 切换到深色背景页面出现闪白的Bug。需注意当 pages.json 文件中配置窗口背景色与页面 style 节点设置背景色不一致时仍可能会闪屏 [详情](https://ask.dcloud.net.cn/question/99453)
  + App-iOS platform Fix the bug of flashing white when switching to dark background page in iOS12 and below. It should be noted that when the background color of the window configured in the pages.json file is inconsistent with the background color of the page style node, the screen may still flash. [Details](https://ask.dcloud.net.cn/question/99453)
  + App-iOS平台 修复 video 组件中使用 cover-image 退出全屏后不显示的Bug [详情](https://ask.dcloud.net.cn/question/98498)
  + App-iOS platform Fix the bug that the video component does not display after using cover-image to exit the full screen [details](https://ask.dcloud.net.cn/question/98498)
  + App-iOS平台 修复 nvue map 组件 moveToLocation 方法不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/99638)
  + App-iOS platform fixed the bug that the moveToLocation method of the nvue map component did not trigger the callback [details](https://ask.dcloud.net.cn/question/99638)
  + App-iOS平台 修复 nvue web-view 组件 schemes 无法跳转打开其他应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-iOS platform fixes the bug that the nvue web-view component schemes cannot jump to open other applications [details](https://ask.dcloud.net.cn/question/99331)
  + App-iOS平台 修复 nvue 页面 picker-view 组件滚动错位的Bug
  + App-iOS platform fixed the bug that the picker-view component scrolling misplaced on the nvue page
  + H5平台 修复 onPageNotFound 生命周期无效的Bug [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5 platform Fix the bug that the life cycle of onPageNotFound is invalid [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5平台 修复 iOS微信内置浏览器打开位置相关页面后无法后退的Bug [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + H5 platform Fix the bug that the iOS WeChat built-in browser cannot go back after opening the location-related page [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + 微信小程序 修复 多个 v-for 嵌套时部分情况下绑定事件报错的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + WeChat Mini Program Fix the bug that the binding event reports error in some cases when multiple v-for are nested [details](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + 登录模版 升级 集成 uni-id 补充云函数，实现前后一体、功能完整的登录注册模板 [详情](https://github.com/dcloudio/uni-template-login)
  + Login template upgrade Integrate uni-id supplementary cloud function, realize front and back integration, complete function login registration template [details](https://github.com/dcloudio/uni-template-login)
* 【uniCloud】
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + 【Important】 Added [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) to realize a simple, unified and extensible user center. It is recommended for every uniCloud developer to use it
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
  + Optimize HBuilderX new public module to increase the restriction that the name cannot contain capital letters
  + 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  + Fixed the bug that npm install failed when uploading public modules in HBuilderX in some cases
  + 修复 HBuilderX 公共模块 右键菜单出现两个上传公共模块菜单的Bug
  + Fix HBuilderX common module right-click menu appears two bugs of uploading common module menu
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
  + Fix the bug that the error message when the appid is not filled in the HBuilderX upload public module is inconsistent with the upload cloud function
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + uni-AD 更新 穿山甲SDK Android更新为3.1.0.0版、iOS更新为3.1.0.1版；腾讯广告联盟SDK Android更新为4.232.1102版、iOS更新为4.11.9版。请使用广告的开发者尽早升级，老版本在部分新手机上有闪退现象
  + uni-AD update Pangolin SDK Android is updated to version 3.1.0.0, iOS is updated to version 3.1.0.1; Tencent Advertising Alliance SDK Android is updated to version 4.232.1102, iOS is updated to version 4.11.9. Please upgrade as soon as possible for developers who use ads. The old version may crash on some new phones.
  + Android平台 修复 请求权限 plus.android.requestPermissions 传入无效权限可能引起应用崩溃的Bug
  + Android platform fix request permission plus.android.requestPermissions incoming invalid permission may cause application crash bug
  + Android平台 修复 视频播放 安卓9及以下的刘海屏手机上全屏播放引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/99064)
  + Android platform fixes the bug of video playback caused by full-screen playback on Android 9 and below Liu Haiping mobile phones [details](https://ask.dcloud.net.cn/question/99064)
  + Android平台 修复 从系统相册选择文件设置最多选择图片数量 maximum 后不会触发 onmaxed 事件的Bug [详情](https://ask.dcloud.net.cn/question/100062)
  + Android platform Fix the bug that the onmaxed event will not be triggered after selecting the file from the system album and setting the maximum number of pictures. [Details](https://ask.dcloud.net.cn/question/100062)
  + 【重要】iOS平台 新增 云端打包支持配置自定义storyboard启动界面 [详情](https://ask.dcloud.net.cn/article/37475)
  + 【Important】 Newly added on iOS platform Cloud packaging supports configuring custom storyboard launch interface [details](https://ask.dcloud.net.cn/article/37475)
  + iOS平台 修复 uni-AD 同时并发调用多次获取信息流广告可能导致无法返回广告数据的Bug
  + iOS platform fixes the bug that uni-AD concurrently calls multiple times to obtain information flow ads at the same time, which may cause the bug that advertising data cannot be returned
  + iOS平台 修复 应用首页加载网络页面在启动时可能偶现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99572)
  + iOS platform fix the bug that the white screen may occasionally appear when the web page is loaded on the application homepage [details](https://ask.dcloud.net.cn/question/99572)
  + iOS平台 修复 Webview窗口直接加载mp4视频可能显示错误页面的Bug
  + iOS platform fixes the bug that the Webview window directly loads the mp4 video and may display the error page
  + iOS平台 修复 sqlite 执行查询SQL语句读取 blob 类型数据返回乱码的Bug [详情](https://ask.dcloud.net.cn/question/98721)
  + iOS platform fix the bug that sqlite executes query SQL statement to read blob type data and returns garbled [details](https://ask.dcloud.net.cn/question/98721)
  + iOS平台 修复 连接蓝牙设备 createBLEConnection 超时不触发错误回调的Bug
  + iOS platform fixes the bug that the createBLEConnection timeout does not trigger the error callback when connecting to the Bluetooth device
  + iOS平台 修复 连接蓝牙设备后 可能无法写入数据的Bug
  + iOS platform fixes the bug that data may not be able to be written after connecting to a Bluetooth device
  + iOS平台 修复 连接蓝牙设备断开后 可能无法再次连接的Bug
  + iOS platform fixes the bug that the connection to the Bluetooth device may not be able to connect again after disconnection
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 新增 预加载小程序功能，可提升初次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a%a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + The new pre-loaded applet function on the iOS platform can increase the initial startup speed [details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a %a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 新增 小程序支持后台运行功能，可提升二次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5%90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)
  + New small programs on the iOS platform support background operation, which can increase the speed of secondary startup [details](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5 %90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)


#### 2.7.13.20200615-alpha
* 【uni-app】
  + App-nvue平台 修复 HBuilderX 2.7.12 alpha 版引发的 纯 nvue 项目编译出错的Bug [详情](https://ask.dcloud.net.cn/question/99356)
  + App-nvue platform Fix the bug of pure nvue project compilation error caused by HBuilderX 2.7.12 alpha version [details](https://ask.dcloud.net.cn/question/99356)
  + App-Android平台 修复 nvue web-view 组件 schemes 无法跳转打开其它应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-Android platform fix the bug that the nvue web-view component schemes cannot jump to open other applications [details](https://ask.dcloud.net.cn/question/99331)

#### 2.7.12.20200613-alpha
* 【uni-app】
  + 【重要】新增 自动化测试 [详情](https://uniapp.dcloud.io/collocation/auto/quick-start)
  + 【Important】 Added automated test [details](https://uniapp.dcloud.io/collocation/auto/quick-start)
  + 【重要】新增 运行和发布到快应用联盟 [详情](https://uniapp.dcloud.io/quickstart?id=quickapp-webview)
  + 【Important】 Added Run and publish to QuickApp Alliance [details](https://uniapp.dcloud.io/quickstart?id=quickapp-webview)
  + App-nvue平台、H5平台 新增 API uni.preloadPage 预加载页面 [详情](https://uniapp.dcloud.net.cn/api/preload-page)
  + App-nvue platform, H5 platform new API uni.preloadPage preload page [details](https://uniapp.dcloud.net.cn/api/preload-page)
  + App-vue平台 新增 分包支持，可提升大型App启动速度 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
  + App-vue platform adds subcontracting support, which can improve the startup speed of large apps [details](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
  + 补充 uni-app 部署 H5 到相对路径/使用file协议教程 [详情](https://ask.dcloud.net.cn/article/37432)
  + Supplement the uni-app deployment H5 to relative path/use file protocol tutorial [details](https://ask.dcloud.net.cn/article/37432)
  + App平台、H5平台 修复 -1rpx、-1upx被错误的计算为1px的Bug [详情](https://ask.dcloud.net.cn/question/98270)
  + App platform and H5 platform fix the bug where -1rpx and -1upx are incorrectly calculated as 1px [details](https://ask.dcloud.net.cn/question/98270)
  + App平台 修复 map 组件 markers 无 id 时无法移除的Bug
  + App platform fixes the bug that the map component markers cannot be removed when there is no id
  + App平台 修复 map 组件 监听 regionchange 事件报错的Bug
  + App platform fixes the bug that the map component listens to the regionchange event and reports an error
  + App平台 修复 textarea 组件初始化时配置 focus 属性无法获取焦点的Bug
  + App platform Fix the bug that the focus property cannot be obtained when the focus property is configured when the textarea component is initialized
  + App-Android平台 修复 map 组件可能无法正常显示的Bug
  + App-Android platform fix the bug that the map component may not be displayed normally
  + App-Android平台 修复 nvue map 组件 markers 上的气泡 callout 会跟随旋转的Bug [详情](https://ask.dcloud.net.cn/question/98195)
  + App-Android platform fix the bug that the bubble callout on the markers of the nvue map component will follow the rotation [details](https://ask.dcloud.net.cn/question/98195)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时选择拍照后可能无法返回图片路径的Bug
  + App-Android platform fixes the bug that the image path may not return to the image path when the input tag in the nvue web-view component is set to file when the type is selected to take a photo
  + App-iOS平台 修复 uni.request 参数 data 为非字符串时请求失败的Bug
  + App-iOS platform fixed the bug that the request failed when the uni.request parameter data is a non-string
  + App-iOS平台 修复 uni.showToast 部分情况文本显示不全的Bug [详情](https://ask.dcloud.net.cn/question/98349)
  + App-iOS platform Fix the bug that uni.showToast text is incomplete in some cases [details](https://ask.dcloud.net.cn/question/98349)
  + H5平台 修复 picker-view 组件某些情况设置 value 不生效的Bug
  + H5 platform fixes the bug that the setting value of picker-view component does not take effect in some cases
  + hello uni-app 新增 在navigator示例和日历扩展ui示例中增加页面预载示例
  + hello uni-app add page preload example in navigator example and calendar extension ui example
* 【uniCloud】
  + 【重要】新增 前端网页部署。uni-app的H5页面或普通html网站，均可免费部署到uniCloud，不用再购买传统云，高速、省钱、省心。 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
  + 【Important】 Added front-end web page deployment. Uni-app's H5 page or ordinary html website can be deployed to uniCloud for free, no need to buy traditional cloud, high speed, money and worry. [Details](https://uniapp.dcloud.io/uniCloud/hosting)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能出现填充率过低的Bug
  + Android platform fixed the bug that the fill rate of uni-AD Tencent Guangdiantong opening screen ads may be too low
  + Android平台 修复 uni-AD 创建多个激励视频广告引起 onLoad onClose onError 事件回调错乱的Bug
  + Android platform fixes the bug that uni-AD creates multiple rewarded video ads and causes the onLoad onClose onError event callback to be confused
  + Android平台 修复 选择按钮框 actionSheet 设置 title 并且 buttons 设置过多可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/98476)
  + Android platform Fix the bug that the title of the actionSheet button box is selected and the buttons are set too many may be displayed abnormally [details](https://ask.dcloud.net.cn/question/98476)
  + Android平台 修复 原生导航标题栏 titleNView 的 searchInput 搜索框动态更新后可能触发多次输入内容更新事件的Bug [详情](https://ask.dcloud.net.cn/question/98190)
  + Android platform fixes the bug that the searchInput search box of the titleNView of the native navigation title bar may trigger multiple input content update events after the dynamic update [details](https://ask.dcloud.net.cn/question/98190)
  + Android平台 修复 音频 audio 的 seek 操作不触发 seeked 事件的Bug [详情](https://ask.dcloud.net.cn/question/78711)
  + Android platform fixes the bug that the seek operation of audio does not trigger the seeked event [details](https://ask.dcloud.net.cn/question/78711)
  + Android平台 修复 图片预览 previewImage 无法显示bmp格式图片文件的Bug
  + Android platform fixes the bug that previewImage cannot display bmp format picture files
  + Android平台 修复 HBuilderX2.6.11 引出的 Webview窗口设置 background 为 transparent 不生效的Bug
  + Android platform fixes the bug that setting background to transparent in the Webview window of HBuilderX2.6.11 does not take effect
  + iOS平台 修复 视频播放 VideoPlayer 与 直播推流 LivePusher 同时使用时没有声音的Bug [详情](https://ask.dcloud.net.cn/question/97479)
  + iOS platform fixes the bug that there is no sound when the video playback VideoPlayer and LivePusher are used at the same time [details](https://ask.dcloud.net.cn/question/97479)
  + iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 可能不触发 onBluetoothAdapterStateChange 事件的Bug
  + iOS platform fixes the bug that search for Bluetooth devices startBluetoothDevicesDiscovery may not trigger the onBluetoothAdapterStateChange event
  + iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 连续调用多次触发失败回调的Bug
  + iOS platform fixes the bug that search for Bluetooth devices startBluetoothDevicesDiscovery calls multiple consecutive calls to trigger the failure callback


#### 2.7.11.20200602-alpha
* 【uni-app】
  + 【重要】支持运行和发布到 华为快应用 [详情](https://uniapp.dcloud.io/matter?id=quickapp-webview-huawei)
  + 【Important】 Support running and publishing to Huawei Quick App [details](https://uniapp.dcloud.io/matter?id=quickapp-webview-huawei)
  + App平台 修复 使用小程序组件时局部组件不显示的Bug
  + App platform fix the bug that some components are not displayed when using small program components
  + App平台 修复 canvasContext.fillText 部分设备多次调用失败的Bug [详情](https://ask.dcloud.net.cn/question/97609)
  + App platform Fix the bug that canvasContext.fillText failed to be called multiple times on some devices [details](https://ask.dcloud.net.cn/question/97609)
  + App平台 修复 canvasContext.drawImage 无法绘制 base64 格式图像的Bug [详情](https://ask.dcloud.net.cn/question/95050)
  + App platform Fix the bug that canvasContext.drawImage cannot draw base64 format images [details](https://ask.dcloud.net.cn/question/95050)
  + App平台 修复 videoContext.stop 无效的Bug
  + App platform fixes the bug that videoContext.stop is invalid
  + App-Android平台 修复 HBuilderX2.7.8引出的 tabBar 页面无法动态更新原生导航标题栏 titleNView 的Bug
  + App-Android platform fixes the bug that the tabBar page derived from HBuilderX2.7.8 cannot dynamically update the native navigation title bar titleNView
  + App-Android平台 修复 uni.reLaunch 关闭所有页面打开应用内某个页面后，uni.hideTabBar失效的Bug [详情](https://ask.dcloud.net.cn/question/97140)
  + App-Android platform fix uni.reLaunch close all pages and open a page in the app, uni.hideTabBar fails [details](https://ask.dcloud.net.cn/question/97140)
  + App-Android平台 修复 uni.scanCode 二维码扫描预览界面在横屏状态下变形的Bug [详情](https://ask.dcloud.net.cn/question/96473)
  + App-Android platform Fix the bug that uni.scanCode QR code scanning preview interface is deformed in landscape mode [details](https://ask.dcloud.net.cn/question/96473)
  + App-Android平台 修复 uni.setNavigationBarTitle 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/97791)
  + App-Android platform Fix the bug that uni.setNavigationBarTitle may not take effect [details](https://ask.dcloud.net.cn/question/97791)
  + App-Android平台 修复 wgt热更新后 uni.navigateTo 可能返回找不到访问页面错误的Bug [详情](https://ask.dcloud.net.cn/question/97930)
  + App-Android platform fixes the bug that uni.navigateTo may return the error that the access page cannot be found after the wgt hot update [details](https://ask.dcloud.net.cn/question/97930)
  + App-Android平台 修复 nvue video 组件 controls 设置为 false 时 click 事件在非全屏状态下无法触发的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android platform fixes the bug that the click event cannot be triggered in non-full screen state when the nvue video component controls is set to false [details](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue video 组件 seek 后再设置 src 属性会导致进度跳到视频末尾的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android platform Fix the bug that setting the src attribute after nvue video component seek will cause the progress to jump to the end of the video [details](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue livepusher 组件 device-position 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/96784)
  + App-Android platform fix the bug that the device-position property of nvue livepusher component does not take effect [details](https://ask.dcloud.net.cn/question/96784)
  + App-Android平台 修复 nvue webview 组件加载网页中使用 schemes 跳转就会报错的Bug [详情](https://ask.dcloud.net.cn/question/97271)
  + App-Android platform Fix the bug that the nvue webview component will report an error when using schemes to load the web page [details](https://ask.dcloud.net.cn/question/97271)
  + App-iOS平台 修复 nvue waterfall、list、scroll-view 组件中的 loading 组件可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/93128)
  + App-iOS platform Fix the bug that the loading component in the nvue waterfall, list, scroll-view components may display abnormally [details](https://ask.dcloud.net.cn/question/93128)
  + App-iOS平台 修复 nvue video 组件在 list 中滑动后视频可能无法正常播放的Bug
  + App-iOS platform fixes the bug that the video may not play normally after the nvue video component slides in the list
  + H5平台 修复 启用摇树优化后部分 es6 语法未转换成 es5 的Bug [详情](https://ask.dcloud.net.cn/question/98104)
  + H5 platform fixes the bug that some es6 syntax is not converted to es5 after tree shake optimization is enabled [details](https://ask.dcloud.net.cn/question/98104)
  + H5平台 修复 PC 端获取屏幕宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/97721)
  + H5 platform Fix the bug of getting the screen width and height error on the PC side [details](https://ask.dcloud.net.cn/question/97721)
  + 支付宝小程序 修复 nvue 页面编译后部分样式失效的Bug
  + Alipay applet fixes the bug that some styles of the nvue page are invalid after compilation
  + 钉钉小程序 修复 真机使用 uni.request 发送 content-type 为 application/json 的请求时报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
  + Dingding applet fixes the bug that the real machine uses uni.request to send a request with content-type of application/json to report an error [details](https://ask.dcloud.net.cn/question/97570)
* 【uniCloud】
  + 新增 HBuilderX 支持上传所有云函数及公共模块 （cloudfunctions目录，右键菜单，上传所有云函数及公共模块）
  + Added HBuilderX to support uploading all cloud functions and public modules (cloudfunctions directory, right-click menu, upload all cloud functions and public modules)
  + 新增 HBuilderX 限制新建云函数名称不能为common，避免与公共模块冲突
  + Added HBuilderX to restrict the name of the newly created cloud function cannot be common to avoid conflicts with common modules
  + 修复 钉钉小程序真机上传文件到云存储报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
  + Fix the bug that the Dingding applet uploads files to cloud storage on the real machine and reports an error [details](https://ask.dcloud.net.cn/question/97570)
  + 腾讯云 优化 HBuilderX开发调试期间访问云函数的性能
  + Tencent Cloud optimizes the performance of accessing cloud functions during HBuilderX development and debugging
  + 腾讯云 修复 上传文件时不进入onUploadProgress的Bug [详情](https://ask.dcloud.net.cn/question/97532)
  + Tencent Cloud fixed the bug of not entering onUploadProgress when uploading files [details](https://ask.dcloud.net.cn/question/97532)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 【重要】Android平台 新增 UniPush 支持谷歌推送FCM [文档](https://ask.dcloud.net.cn/article/37356)
  + 【Important】 Android platform added UniPush to support Google Push FCM [document](https://ask.dcloud.net.cn/article/37356)
  + Android平台 修复 uni-AD 腾讯广点通信息流广告可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/97376)
  + Android platform fixes the bug that uni-AD Tencent Guangdiantong information stream ads may not be displayed completely [details](https://ask.dcloud.net.cn/question/97376)
  + Android平台 修复 uni-AD 今日头条穿山甲点击广告开始下载后不能暂停或取消的Bug
  + Android platform fixes the bug that uni-AD Toutiao pangolin cannot be paused or canceled after clicking the ad to start downloading
  + Android平台 修复 uni-AD 创建信息流广告控件 createAdView 没有设置 id 时可能导致在当前页面无法再次创建的Bug
  + Android platform fixes the bug that uni-AD creates the information flow advertising control createAdView without setting the id, which may cause the bug that cannot be created again on the current page
  + Android平台 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/97070)
  + Android platform fixes the bug that the callback does not trigger after the keyboardchange of the soft keyboard state change event is monitored [details](https://ask.dcloud.net.cn/question/97070)
  + iOS平台 修复 原生导航标题栏动态更新按钮样式 setTitleNViewButtonStyle 可能导致图标显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96426)
  + iOS platform fixed the bug that the native navigation title bar dynamically updated the button style setTitleNViewButtonStyle may cause the icon to display abnormally [details](https://ask.dcloud.net.cn/question/96426)

#### 2.7.8.20200525-alpha
* 【uni-app】
  + 小程序平台 修复 组件 class 属性无值时报错的Bug
  + Mini Program Platform Fix the bug that the component's class attribute has no value when it reports an error
  + uni统计 修复 2.7.0.20200501-alpha 引出的统计数据上报不完整，导致uni统计日活偏少的Bug
  + uni statistic fixes the bug that the statistical data derived from 2.7.0.20200501-alpha is incomplete, which leads to the low daily activity of uni statistic
  + App-Android平台 修复 tabbar 页面在部分手机可能高度显示不正确的Bug
  + App-Android platform fixes the bug that the tabbar page may be displayed incorrectly on some phones


#### 2.7.7.20200522-alpha
* 【uni-app】
  + App平台 修复 HBuilderX 2.7.6 引出的纯nvue项目编译出错的Bug [详情](https://ask.dcloud.net.cn/question/97264)
  + App platform Fix the bug of compilation error of pure nvue project derived from HBuilderX 2.7.6 [details](https://ask.dcloud.net.cn/question/97264)
  + App-Android平台 修复 HBuilderX2.7.0 引出的 uni.request 网络请求 header 设置参数设置 content-type 无效的Bug [详情](https://ask.dcloud.net.cn/question/97246)
  + App-Android platform fixes the bug that the uni.request network request header set by HBuilderX2.7.0 is invalid. The content-type setting parameter is invalid. [Details](https://ask.dcloud.net.cn/question/97246)
  + App-iOS平台 修复 pages.json 设置窗口背景色 backgroundColor 可能引起页面背景色不正确的Bug
  + App-iOS platform Fix the bug that setting the background color of the window backgroundColor in pages.json may cause the page background color to be incorrect
#### 2.7.6.20200521-alpha
* 【uni-app】
  + 【重要】支持运行和发布到 360小程序 [详情](https://uniapp.dcloud.io/matter?id=mp-360)
  + 【Important】 Support running and publishing to 360 applet [details](https://uniapp.dcloud.io/matter?id=mp-360)
  + App平台 修复  class 名称中含有 rpx、upx 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/96981)
  + App platform Fix the bug that does not take effect when rpx and upx are included in the class name [details](https://ask.dcloud.net.cn/question/96981)
  + App-Android平台 修复 HBuilderX2.7.0 引出的 uni.hideTabBar 隐藏 tabbar 后页面高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/96244)
  + App-Android platform fixes the bug that the page height may be incorrect after the uni.hideTabBar is hidden by HBuilderX2.7.0 [details](https://ask.dcloud.net.cn/question/96244)
  + App-Android平台 修复 nvue textarea 组件获取焦点后在部分手机可能会被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/96914)
  + App-Android platform fixes the bug that the nvue textarea component may be blocked by the soft keyboard on some phones after getting the focus [details](https://ask.dcloud.net.cn/question/96914)
  + App-Android平台 修复 nvue live-pusher 组件调用 pause 方法暂停推流后依然录音的Bug [详情](https://ask.dcloud.net.cn/question/96411)
  + App-Android platform Fix the bug that the nvue live-pusher component calls the pause method to pause the push and still records the bug [details](https://ask.dcloud.net.cn/question/96411)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时无法选择文件的Bug [详情](https://ask.dcloud.net.cn/question/95220)
  + App-Android platform Fix the bug that the file cannot be selected when the input tag type is set to file in the nvue web-view component [details](https://ask.dcloud.net.cn/question/95220)
  + App-iOS平台 修复 vue 页面回弹无效果的Bug [详情](https://ask.dcloud.net.cn/question/91356)
  + App-iOS platform fixes the bug that the vue page rebound has no effect [details](https://ask.dcloud.net.cn/question/91356)
  + App-iOS平台 修复 nvue ad 组件在 list 中使用可能引起滚动卡顿的Bug
  + App-iOS platform fixes the bug that the use of nvue ad components in the list may cause scrolling lag
  + App-iOS平台 修复 nvue web-view 组件在页面关闭时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/97064)
  + App-iOS platform fixes the bug that the nvue web-view component may cause the app to crash when the page is closed [details](https://ask.dcloud.net.cn/question/97064)
  + H5平台 修复 配置基础路径为 ./ 打包后 image 组件显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96767)
  + H5 platform fixes the bug that the basic path of configuration is ./ after packaging the image component displays abnormally [details](https://ask.dcloud.net.cn/question/96767)
* 【uniCloud】
  + 【重要】 腾讯云开放，不再需要邮件申请
  + 【Important】 Tencent Cloud is open, no email application is required
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 原生导航标题栏 titleNView 的 titleIconWidth 支持设置标题图标宽度
  + Added the titleIconWidth of the native navigation title bar titleNView to support setting the width of the title icon
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持清除按钮
  + Added support for clear button in searchInput search box of native navigation title bar titleNView
  + 修复 原生导航标题栏 titleNView 的 titleIcon 设置 base64 图标无法支持 gif 格式图片的Bug
  + Fix the bug that the base64 icon of the titleIcon of the titleNView of the native navigation title bar cannot support gif format images
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.211.1081
  + Android platform update uni-AD Tencent Guangdiantong SDK version is 4.211.1081
  + Android平台 更新 UniPush 使用的个推SDK谷歌渠道版本为4.3.8.0
  + Android platform update the Google channel version of the push SDK used by UniPush to 4.3.8.0
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能拉伸变形显示的Bug
  + Android platform fixes the bug that uni-AD Tencent Guangdiantong open screen advertisement may be stretched and deformed
  + Androad平台 修复 uni-AD 开屏广告在刘海屏手机上跳过按钮可能被遮挡的Bug
  + Androad platform fixes the bug that uni-AD open screen ads may be blocked by skip button on Liu Haiping mobile phones
  + Android平台 修复 视频播放 video 全屏时在刘海屏手机上控制栏可能被遮挡的Bug
  + Android platform fixes the bug that the control bar on Liu Haiping mobile phone may be blocked when playing video in full screen
  + Android平台 修复 页面中 input 标签 type 为 file 点击打开的选择页面不支持国际化的Bug
  + Android platform fixes the bug that the input tag type in the page is file clicked to open the selection page does not support internationalization
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK版本为3.0.0.1
  + iOS platform update uni-AD today's headline pangolin SDK version is 3.0.0.1
  + iOS平台 修复 初始化蓝牙模块 openBluetoothAdapter 可能在没有打开蓝牙时也会返回成功回调的Bug
  + iOS platform fixes the bug that initializing the Bluetooth module openBluetoothAdapter may return a success callback even when Bluetooth is not turned on
  + iOS平台 修复 previewImage 预览图片连续快速滑动时可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96445)
  + iOS platform Fix the bug that previewImage may display abnormally when the preview image is continuously and quickly swiped [details](https://ask.dcloud.net.cn/question/96445)
  + iOS平台 修复 原生导航标题栏 titleNView 动态设置 type 为 transparent 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96556)
  + iOS platform fixes the bug that the titleNView of the native navigation title bar dynamically set type to transparent may be displayed abnormally [details](https://ask.dcloud.net.cn/question/96556)



#### 2.7.4.20200515-alpha
* 【uni-app】
  + App-Android平台 修复 真机运行时提示HBuilderX版本与手机端SDK版本不匹配的Bug
  + App-Android platform fixes the bug that the HBuilderX version does not match the mobile phone SDK version when the real device is running
* 【uniCloud】
  + 阿里云 优化 云函数冷启动时间，经测试冷启动时间平均减少800ms
  + Alibaba Cloud optimizes the cold start time of cloud functions, and the cold start time has been reduced by an average of 800ms after testing

#### 2.7.3.20200514-alpha
* 【uni-app】
  + App平台 修复 css 中静态资源路径解析不正确的Bug
  + App platform fix the bug that the static resource path parsing in css is incorrect
  + App-iOS平台 修复 HBuilderX2.7.0 引出的配置底部安全区原生占位后，tabbar 动态更新 backgroundColor、backgroundImage 不生效的Bug
  + App-iOS platform Fixed the bug that the backgroundColor and backgroundImage did not take effect when the tabbar dynamically updated the backgroundColor and backgroundImage after the original placeholder in the security zone at the bottom of the configuration derived from HBuilderX2.7.0
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.8，解决在部分设备可能出现启动时崩溃的Bug
  + iOS platform update uni-AD Tencent Guangdiantong SDK version is 4.11.8, solve the bug that some devices may crash during startup

#### 2.7.2.20200513-alpha
* 【uni-app】
  + 优化 pages.json 兼容 subPackages 与 subpackages 写法
  + Optimize pages.json to be compatible with subPackages and subpackages writing
  + App平台、H5平台 修复 swiper 组件设置 current 时滚动方向错误的Bug [详情](https://ask.dcloud.net.cn/question/94961)
  + App platform, H5 platform Fix the bug that the scroll direction is wrong when the swiper component is set to current [details](https://ask.dcloud.net.cn/question/94961)
  + App平台 修复 页面 onLoad 参数部分情况不正确的Bug
  + App platform fixes the bug that the onLoad parameter part of the page is incorrect
  + App平台 修复 cover-image 组件部分情况显示不全的Bug [详情](https://ask.dcloud.net.cn/question/94554)
  + App platform Fix the bug of incomplete display of cover-image components [details](https://ask.dcloud.net.cn/question/94554)
  + App平台 修复 storage 中读取 Array 类型数据解析不正确的Bug [详情](https://ask.dcloud.net.cn/question/96139)
  + App platform Fix the bug that the Array type data read in storage is not correctly parsed [details](https://ask.dcloud.net.cn/question/96139)
  + App-Android平台 修复 v3版本 真机运行修改代码保存后应用重启，可能无法直接显示应用重启前页面的Bug
  + App-Android platform fix v3 version. After running the modified code on the real machine, the application restarts after saving, and the bug on the page before the application restart may not be displayed directly
  + App-iOS平台 修复 nvue richtext 组件 lines、text-overflow 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/94667)
  + App-iOS platform Fix the bug that the lines and text-overflow attributes of the nvue richtext component do not take effect [details](https://ask.dcloud.net.cn/question/94667)
  + App-iOS平台 修复 tabBar 同时设置 blurEffect 和 backgroundColor 时 uni.getSystemInfo 获取到 windowBottom 错误的Bug
  + App-iOS platform fixes the bug that uni.getSystemInfo gets windowBottom error when blurEffect and backgroundColor are set at the same time on tabBar
  + H5平台 优化 video 组件支持 show-center-play-btn 配置
  + H5 platform optimized video component support show-center-play-btn configuration
  + H5平台 修复 storage 中读取 Date 类型数据解析不正确的Bug [#1661](https://github.com/dcloudio/uni-app/issues/1661)
  + H5 platform fix the bug that the Date type data is read incorrectly in storage [#1661](https://github.com/dcloudio/uni-app/issues/1661)
  + H5平台 修复 Safari 浏览器横屏状态获取宽度错误的Bug [详情](https://ask.dcloud.net.cn/question/95997)
  + H5 platform fixes the bug that the width of the Safari browser is incorrectly obtained in the horizontal screen state [details](https://ask.dcloud.net.cn/question/95997)
  + 微信小程序平台 修复 页面中同一个组件多个实例相同作用域插槽异常的Bug [#1662](https://github.com/dcloudio/uni-app/issues/1662)
  + WeChat applet platform Fix the bug of the same scope slot exception of multiple instances of the same component on the page [#1662](https://github.com/dcloudio/uni-app/issues/1662)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + iOS平台 修复 音频 audio 播放网络音频资源缓冲时间过长的Bug [详情](https://ask.dcloud.net.cn/question/93427)
  + iOS platform fixes the bug that the buffering time of audio audio playing network audio resources is too long [details](https://ask.dcloud.net.cn/question/93427)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 修复 video 组件退出全屏后页面布局错位的Bug
  + iOS platform fixes the bug that the page layout is misplaced after the video component exits the full screen


#### 2.7.1.20200510-alpha
* 【uni-app】
  + 修复 easycom 组件优先级高于用户组件同名组件的Bug
  + Fix the bug that the priority of easycom component is higher than that of user component with the same name
  + App平台 新增 tabbar 支持 backgroundImage 属性设置背景图片及渐变色
  + App platform added tabbar support backgroundImage property to set background image and gradient
  + App平台 优化 短时间内调用 uni.navigateTo 避免重复跳转页面
  + App platform optimization Call uni.navigateTo in a short time to avoid repeated page jumps
  + App平台 修复 页面生命周期 onUnload 部分表现与旧版表现不一致的Bug [详情](https://ask.dcloud.net.cn/question/94649)
  + App platform Fix the bug that the performance of onUnload part of the page life cycle is inconsistent with the performance of the old version [details](https://ask.dcloud.net.cn/question/94649)
  + App平台 修复 picker 组件点击事件不冒泡的Bug [详情](https://ask.dcloud.net.cn/question/95716)
  + App platform Fix the bug that the picker component click event does not bubble [details](https://ask.dcloud.net.cn/question/95716)
  + App平台 修复 picker 组件打包后不显示的Bug [详情](https://ask.dcloud.net.cn/question/96014)
  + App platform Fix the bug that the picker component is not displayed after packaging [details](https://ask.dcloud.net.cn/question/96014)
  + App平台 修复 video 组件打包后不显示进度条的Bug [详情](https://ask.dcloud.net.cn/question/95946)
  + App platform Fix the bug that the progress bar is not displayed after the video component is packaged [details](https://ask.dcloud.net.cn/question/95946)
  + App平台 修复 editor 组件 br 标签不解析的Bug [详情](https://ask.dcloud.net.cn/question/95819)
  + App platform fix the bug that the editor component br tag does not resolve [details](https://ask.dcloud.net.cn/question/95819)
  + H5平台 修复 tabBar 页面 redirectTo 到其他页面，tabBar 仍然显示的Bug [详情](https://ask.dcloud.net.cn/article/36364)
  + H5 platform fixes the bug that tabBar page redirectTo to other pages, tabBar still displays [details](https://ask.dcloud.net.cn/article/36364)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持 GIF 格式动图
  + Added the titleIcon of the title bar of the Webview window titleNView to support GIF format animation
  + Android平台 修复 数据库执行查询SQL语句读取 REAL、BIGINT 等类型数值丢失精度的Bug [详情](https://ask.dcloud.net.cn/question/92964)
  + Android platform fix the bug that the database executes the query SQL statement to read the value of REAL, BIGINT and other types of values. [Details](https://ask.dcloud.net.cn/question/92964)
  + Android平台 修复 plus.gallery.save 保存网络图片成功后在系统相册中可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/75901)
  + Android platform Fix the bug that plus.gallery.save may not be displayed in the system photo album after successfully saving network pictures [details](https://ask.dcloud.net.cn/question/75901)
  + Android平台 修复 使用 X5 Webview 内核渲染时，标题栏搜索框 searchinput 设置 autoFocus 为 true 可能无法自动获取焦点的Bug
  + Android platform fixes the bug that the title bar search box searchinput set autoFocus to true when using the X5 Webview kernel rendering, may not automatically get the focus bug
  + Android平台 修复 使用 X5 Webview 内核渲染时，广告、视频等原生组件可能无法滚动的Bug
  + Android platform fixes a bug where native components such as advertisements and videos may not scroll when the X5 Webview kernel is used for rendering
  + iOS平台 修复 在 iPad 设备横屏时 getSafeAreaInsets 获取安全区域的 top 值不正确的Bug [详情](https://ask.dcloud.net.cn/question/95645)
  + iOS platform fixes the bug that getSafeAreaInsets gets the top value of the safe area incorrect when the iPad device is in landscape orientation [details](https://ask.dcloud.net.cn/question/95645)
  + iOS平台 修复 Webview窗口标题栏搜索框 searchinput 动态修改 align 属性不生效的Bug
  + iOS platform fixed the bug that the searchinput dynamic modification of the searchinput in the title bar of the Webview window did not take effect on the align attribute


#### 2.7.0.20200501-alpha
* 【uni-app】
  + 【重要】 调整 App平台 自定义组件编译模式下线，应用默认以v3编译模式运行。并在manifest去除相关概念。包体积减少3M [详情](https://ask.dcloud.net.cn/article/36988)
  + 【Important】 Adjust the App platform and the custom component compilation mode is offline, and the application runs in v3 compilation mode by default. And remove related concepts in the manifest. Package size reduced by 3M [details](https://ask.dcloud.net.cn/article/36988)
  + 【重要】 调整 uni统计默认不再自动开启，需要此服务请手动在manifest中打开 [详情](https://ask.dcloud.net.cn/article/37234)
  + 【Important】 Adjust uni statistics is no longer automatically turned on by default. If you need this service, please manually open it in the manifest [details](https://ask.dcloud.net.cn/article/37234)
  + uni-app cli版支持发行到快应用平台 [详情](https://ask.dcloud.net.cn/article/37182)
  + The uni-app cli version supports publishing to the fast application platform [details](https://ask.dcloud.net.cn/article/37182)
  + App平台、H5平台 修复 textarea 组件 word-break 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/95172)
  + App platform, H5 platform Fix the bug that the word-break style of textarea component does not take effect [details](https://ask.dcloud.net.cn/question/95172)
  + App平台、H5平台 新增 支持 onNavigationBarSearchInputFocusChanged 生命周期
  + App platform, H5 platform added support onNavigationBarSearchInputFocusChanged life cycle
  + App平台 优化 在去掉自定义组件模式的情况下保证 weex 编译模式仍然可用（nvueCompiler：weex）。但推荐开发者尽快迁移到uni-app编译模式
  + App platform optimization Ensure that the weex compilation mode is still available when the custom component mode is removed (nvueCompiler: weex). But it is recommended that developers migrate to uni-app compilation mode as soon as possible
  + App平台 修复 input、textarea 组件快速输入时光标抖动的Bug [详情](https://ask.dcloud.net.cn/question/90460)
  + App platform Fix the bug of cursor jitter when input and textarea components are quickly input [details](https://ask.dcloud.net.cn/question/90460)
  + App平台 修复 pages.json 缺少 globalStyle 节点白屏的Bug
  + App platform fix the bug that pages.json lacks the white screen of globalStyle node
  + App平台 修复 picker 组件日期模式缺少 start 或 end 无法选择的Bug
  + App platform fixes the bug that the picker component date mode is missing start or end and cannot be selected
  + App平台 修复 uni.onKeyboardHeightChange 重复监听的Bug [详情](https://ask.dcloud.net.cn/question/91818)
  + App platform Fix the bug of uni.onKeyboardHeightChange repeated monitoring [details](https://ask.dcloud.net.cn/question/91818)
  + App平台 修复 downloadTask.abort 不生效的Bug [详情](https://ask.dcloud.net.cn/question/93342)
  + App platform Fix the bug that downloadTask.abort does not take effect [details](https://ask.dcloud.net.cn/question/93342)
  + App平台 修复 uni.showModal 方法 content 不可为空的Bug [详情](https://ask.dcloud.net.cn/question/87180)
  + App platform Fix the bug that uni.showModal method content cannot be empty [details](https://ask.dcloud.net.cn/question/87180)
  + App平台 修复 nvue button 组件某些情况下 loading 样式异常的Bug [详情](https://ask.dcloud.net.cn/question/95422)
  + App platform Fix the bug that the loading style of the nvue button component is abnormal in some cases [details](https://ask.dcloud.net.cn/question/95422)
  + App平台 新增 nvue scrollview、list、waterfall、recycle-list等组件支持 scroll-top、scroll-left 属性
  + App platform added nvue scrollview, list, waterfall, recycle-list and other components to support scroll-top and scroll-left properties
  + App平台 新增 video 组件支持 controlstoggle 事件
  + App platform added video component to support controlstoggle event
  + H5平台 修复 启用摇树优化后可能导致uniCloud功能不正常的Bug [详情](https://ask.dcloud.net.cn/question/94993)
  + H5 platform fixes a bug that may cause uniCloud to function abnormally after enabling tree shake optimization [details](https://ask.dcloud.net.cn/question/94993)
  + 支付宝小程序 修复 uni.scanCode 设置 scanType 无效的Bug [#1578](https://github.com/dcloudio/uni-app/issues/1578)
  + Alipay applet fix the bug that uni.scanCode setting scanType is invalid [#1578](https://github.com/dcloudio/uni-app/issues/1578)
  + uni-ui 新增 uni-drawer 组件 width 属性（仅在 vue 页面生效）、maskClick 属性，点击遮罩是否关闭抽屉
  + uni-ui adds uni-drawer component width attribute (only effective on vue page), maskClick attribute, click on the mask to close the drawer
  + uni-ui 新增 uni-goods-nav 组件角标的前景色和背景色设置
  + uni-ui added uni-goods-nav component corner label's foreground and background color settings
  + uni-ui 新增 uni-popup 组件的信息提示、对话框、底部分享示例三种组件扩展样式
  + uni-ui adds uni-popup component information prompt, dialog box, and bottom sharing example three component expansion styles
  + uni-ui 优化 uni-drawer 组件废弃 visible 属性，改用 open()、close() 方法开关抽屉，避免在某些场景不能正常关闭的 Bug
  + uni-ui optimization uni-drawer component discards the visible property and uses open() and close() methods to switch drawers to avoid bugs that cannot be closed normally in some scenes
  + uni-ui 优化 uni-popup 组件部分代码逻辑，可支持自定义扩展组件
  + uni-ui optimizes part of the code logic of uni-popup components and supports custom expansion components
  + uni-ui 修复 uni-drawer 组件 close 回调执行两遍的 Bug
  + uni-ui fixes the bug that the close callback of uni-drawer component is executed twice
  + uni-ui 修复 uni-goods-nav 组件 buttonGroup 属性修改 color 颜色不生效的 Bug 
  + uni-ui fixes the bug that the uni-goods-nav component buttonGroup attribute modification color does not take effect
  + uni-ui 修复 uni-popup 组件内放置 input/textarea 获取不到焦点的 Bug
  + uni-ui fix the bug that the input/textarea in the uni-popup component cannot get the focus
  + uni-ui 修复 uni-swipe-action 组件在 iOS13 中按钮点击失效或点击错位的 Bug
  + uni-ui fixes the bug that the uni-swipe-action component fails or clicks misplaced in iOS13
* 【uniCloud】
  + web控制台 调整 取消云存储文件类型限制。可用于托管App的apk或wgt下载
  + Web console adjustment Cancel the cloud storage file type restriction. Can be used to download apk or wgt hosting App
  + 阿里云 修复 某些情况下 neq 操作符无法正常使用的Bug
  + Alibaba Cloud fixes the bug that the neq operator cannot be used normally in some cases
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 修复 Webview窗口标题栏 titleNView 调用 setTitleNViewButtonStyle 动态更新按钮属性可能不生效的Bug
  + Fix the bug that the dynamic update of button properties by calling setTitleNViewButtonStyle in titleNView of Webview window title bar may not take effect
  + 【重要】Android平台 调整 云端打包时默认不再包含 x86 CPU类型库，减少apk包体积 [详情](https://ask.dcloud.net.cn/article/36195#nox86)
  + 【Important】 Android platform adjustment The x86 CPU type library is no longer included by default when the cloud is packaged, reducing the size of the apk package [details](https://ask.dcloud.net.cn/article/36195#nox86)
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.191.1061，今日头条穿山甲SDK版本为2.9.5.5，360广告SDK版本为4.14.3151
  + Android platform update uni-AD Tencent Guangdiantong SDK version is 4.191.1061, Toutiao pangolin SDK version is 2.9.5.5, 360 advertising SDK version is 4.14.3151
  + Android平台 更新 UniPush 使用的个推SDK版本为2.14.0.0，解决由于部分厂商推送SDK版本过低导致在新设备无法接收离线推送消息的问题
  + Android platform update UniPush uses a push SDK version to 2.14.0.0, to solve the problem of not being able to receive offline push messages on new devices due to the low SDK version pushed by some manufacturers
  + Android平台 优化 提交应用市场检查可能误报 Trojan-Dropper.AndroidOS.Agent 病毒的问题
  + Optimized for Android platform. Submitting application market inspection may falsely report Trojan-Dropper.AndroidOS.Agent virus problem
  + Android平台 修复 storage 存储数据内容超过 2M 后无法正常获取的Bug [详情](https://ask.dcloud.net.cn/question/93875)
  + Android platform fix the bug that the storage data cannot be obtained normally after the storage data content exceeds 2M [details](https://ask.dcloud.net.cn/question/93875)
  + Android平台 修复 input 输入框获取焦点后可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/95119)
  + Android platform fix the bug that the soft keyboard may not pop up after the input box gets the focus [details](https://ask.dcloud.net.cn/question/95119)
  + Android平台 修复 setUserAgent 设置 UA 可能引起应用概率性卡死的Bug [详情](https://ask.dcloud.net.cn/question/94668)
  + Android platform fix the bug that setUserAgent setting UA may cause the application to hang up probabilistically [details](https://ask.dcloud.net.cn/question/94668)
  + Android平台 修复 previewImage 预览图片界面顶部数字指示器在刘海屏手机上被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/90222)
  + Android platform fix the bug that the digital indicator at the top of previewImage preview image interface is blocked on Liu Haiping mobile phone [details](https://ask.dcloud.net.cn/question/90222)
  + Android平台 修复 应用锁定横屏或竖屏后 previewImage 预览图片界面仍然可以横竖屏切换的Bug [详情](https://ask.dcloud.net.cn/question/94686)
  + Android platform fixes the bug that the previewImage preview image interface can still be switched between horizontal and vertical screens after the app is locked in landscape or portrait mode [details](https://ask.dcloud.net.cn/question/94686)
  + iOS平台 修复 Webview窗口标题栏 titleNView 上按钮设置 select 属性，点击后下拉指示图标消失的Bug [详情](https://ask.dcloud.net.cn/question/92505)
  + iOS platform Fix the bug that the button on the title bar of the Webview window titleNView sets the select attribute, and the drop-down indicator disappears after clicking [details](https://ask.dcloud.net.cn/question/92505)
  + iOS平台 修复 pick 从相册选择视频文件时只能使用默认压缩模式，无法选取原始视频的Bug [详情](https://ask.dcloud.net.cn/question/93738)
  + iOS platform fixes the bug that pick can only use the default compression mode when selecting a video file from an album, and cannot select the original video [details](https://ask.dcloud.net.cn/question/93738)
  + iOS平台 修复 在 iPad 设备横屏时状态栏消失的Bug [详情](https://ask.dcloud.net.cn/question/95284)
  + iOS platform fix the bug that the status bar disappears when the iPad device is horizontally screened [details](https://ask.dcloud.net.cn/question/95284)



#### 2.6.16.20200427-alpha
* 【uni-app】
  + App平台、H5平台 修复 text 组件调整换行解析导致兼容问题的Bug [详情](https://ask.dcloud.net.cn/question/94473)
  + App platform, H5 platform Fix the bug of compatibility problem caused by text component adjustment and line break parsing [details](https://ask.dcloud.net.cn/question/94473)
  + App平台、H5平台 修复 input、textarea 组件失去焦点时导致页面滚动到顶部的Bug [详情](https://ask.dcloud.net.cn/question/94065)
  + App platform, H5 platform Fix the bug that caused the page to scroll to the top when the input and textarea components lose focus [details](https://ask.dcloud.net.cn/question/94065)
  + App平台、H5平台 修复 部分组件文本前后出现多余空格或换行的Bug [详情](https://ask.dcloud.net.cn/question/94802)
  + App platform, H5 platform Fix bugs with extra spaces or line breaks before and after the text of some components [details](https://ask.dcloud.net.cn/question/94802)
  + App平台 修复 非v3编译模式小程序组件事件监听报错的Bug [详情](https://ask.dcloud.net.cn/question/94377)
  + App platform Fix the bug of non-v3 compilation mode small program component event monitoring error [details](https://ask.dcloud.net.cn/question/94377)
  + H5平台 修复 manifes.json 内 template 配置的模板文件不存在时框架样式错误的Bug
  + H5 platform Fix the bug that the frame style is wrong when the template file configured by template in manifes.json does not exist
  + H5平台 修复 uni.chooseImage 返回的 tempFilePaths 为空Bug [详情](https://ask.dcloud.net.cn/question/94805)
  + H5 platform Fix the bug that the tempFilePaths returned by uni.chooseImage is empty [details](https://ask.dcloud.net.cn/question/94805)
* 【uniCloud】
  + 修复 某些情况下，公共模块上传失败的Bug [详情](https://ask.dcloud.net.cn/question/93580)
  + Fix the bug that uploading of public modules fails in some cases [details](https://ask.dcloud.net.cn/question/93580)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 使用 X5 Webview 内核渲染 plus.navigator.getUserAgent 获取 UA 不正确的Bug
  + Android platform fixes the bug of using X5 Webview kernel to render plus.navigator.getUserAgent to get UA incorrect
  + Android平台 修复 新浪微博登录时选择不授权，返回后无法再次调用登录授权的Bug [详情](https://ask.dcloud.net.cn/question/93971)
  + Android platform fixes the bug that Sina Weibo chooses not to authorize when logging in, and the login authorization cannot be called again after returning [details](https://ask.dcloud.net.cn/question/93971)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + Android平台 修复 小程序启动直达 nvue 页面 query 参数丢失的Bug
  + Android platform fixes the bug that the query parameter is missing when the mini program is launched directly to the nvue page



#### 2.6.14.20200420-alpha
* 【uni-app】
  + 【重要】App平台 修复 v3版本 组件之间样式隔离，解决历史项目升级v3后，部分样式错乱问题 [详情](https://ask.dcloud.net.cn/question/91501)
  + 【Important】 App platform fix v3 version of the style isolation between components, solve the problem of some styles disorder after upgrading to v3 of historical projects [details](https://ask.dcloud.net.cn/question/91501)
  + App平台、H5平台 新增 EditorContext.insertImage 支持 width、height、extClass、data 配置
  + App platform, H5 platform added EditorContext.insertImage to support width, height, extClass, data configuration
  + App平台、H5平台 修复 scroll-view 子元素使用百分比尺寸时大小不正确的Bug
  + App platform, H5 platform Fix the bug that the size of scroll-view child element is incorrect when the percentage size is used
  + App平台、H5平台 修复 input 组件设置 value 为 null 时显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/93729)
  + App platform, H5 platform Fix the bug that the input component is displayed incorrectly when the value is set to null [details](https://ask.dcloud.net.cn/question/93729)
  + App平台、H5平台 修复 iOS设备键盘收起可能引起页面显示与点击位置错位的Bug [详情](https://ask.dcloud.net.cn/question/93818)
  + App platform, H5 platform Fix a bug that may cause the page display and the click position to be misaligned when the keyboard of the iOS device is folded [details](https://ask.dcloud.net.cn/question/93818)
  + App平台 优化 v3版本 事件对象，支持 json 序列化输出 [详情](https://github.com/dcloudio/uni-app/issues/1559)
  + App platform optimization v3 version event object, support json serialized output [details](https://github.com/dcloudio/uni-app/issues/1559)
  + App平台 修复 vue 页面与 nvue 页面引用相同组件，条件编译失效的Bug
  + App platform Fix the bug that the vue page and the nvue page refer to the same components, and the conditional compilation fails
  + App平台 修复 v3版本 button 组件 open-type 为 feedback 不生效的Bug 
  + App platform fixes the bug that the button component of the v3 version does not take effect when the open-type is feedback
  + App平台 修复 v3版本 picker-view 组件嵌套在 uni-pop 组件内渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/93606)
  + App platform Fix the bug that the picker-view component nested in the uni-pop component of v3 version is not rendered correctly [details](https://ask.dcloud.net.cn/question/93606)
  + App平台 修复 v3版本 webview 组件 src 为空时显示错误页面的Bug
  + App platform fixes the bug that the error page is displayed when the src of the webview component of the v3 version is empty
  + App平台 修复 v3版本 map 组件更新 marker 影响 polyline 的Bug [详情](https://ask.dcloud.net.cn/question/93944)
  + App platform Fix the bug of v3 version map component update marker affecting polyline [details](https://ask.dcloud.net.cn/question/93944)
  + App平台 修复 v3版本 image 组件 widthFix 模式动态修改大小时不生效的Bug [详情](https://ask.dcloud.net.cn/question/93874)
  + App platform fixes the bug that does not take effect when the widthFix mode of the image component is dynamically modified in the v3 version [details](https://ask.dcloud.net.cn/question/93874)
  + App平台 修复 uni.openLocation 显示位置错误的Bug [详情](https://ask.dcloud.net.cn/question/85402)
  + App platform Fix the bug that uni.openLocation shows the wrong location [details](https://ask.dcloud.net.cn/question/85402)
  + App-Android平台 修复 nvue rich-text 组件 img 标签可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93388)
  + App-Android platform fix the bug that the img tag of nvue rich-text component may not be displayed [details](https://ask.dcloud.net.cn/question/93388)
  + App-Android平台 修复 nvue input 组件 font-size 值设置过大时光标可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93283)
  + App-Android platform fix the bug that the cursor may not be displayed when the font-size value of the nvue input component is set too large [details](https://ask.dcloud.net.cn/question/93283)
  + App-Android平台 修复 vue map 组件 marker 属性打包后图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/92358)
  + App-Android platform fix the bug that the picture does not display after the marker attribute of the vue map component is packaged [details](https://ask.dcloud.net.cn/question/92358)
  + App-Android平台 修复 nvue 页面跳转到 vue 页面后，input 组件获得焦点时可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/89769)
  + App-Android platform Fix the bug that the soft keyboard may not pop up when the input component gets the focus after the nvue page jumps to the vue page [details](https://ask.dcloud.net.cn/question/89769)
  + App-iOS 修复 uni.onBLEConnectionStateChange 不触发的bug
  + App-iOS fixes the bug that uni.onBLEConnectionStateChange does not trigger
  + App-iOS 修复 uni.chooseImage 从相机选择图片分辨率过低的Bug [详情](https://ask.dcloud.net.cn/question/91502)
  + App-iOS fixes the bug that uni.chooseImage selects the image from the camera and the resolution is too low [details](https://ask.dcloud.net.cn/question/91502)
  + 小程序平台 修复 map 组件 @markertap 事件获取不到 markerId 的Bug
  + Mini Program Platform Fix the bug that the markerId cannot be obtained in the @markertap event of the map component
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.6
  + iOS platform update uni-AD Tencent Guangdiantong SDK version is 4.11.6
  + iOS平台 修复 uni-AD 腾讯广点通的信息流视频广告自动播放时没有静音的Bug
  + iOS platform fixes the bug that uni-AD and Tencent Guangdiantong’s information stream video ads are not muted when they are automatically played
  + iOS平台 修复 iOS 13.4.1及以上版本在 iPad 设备应用第一次启动获取不到所有窗口对象的Bug [详情](https://ask.dcloud.net.cn/question/93308)
  + iOS platform fix the bug that iOS 13.4.1 and above cannot get all window objects when the iPad device app is launched for the first time [details](https://ask.dcloud.net.cn/question/93308)
  + iOS平台 修复 视频播放控件 VideoPlayer 全屏时在 iPhoneX 可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
  + iOS platform fixes the bug that the position of the brightness control view may be disordered on iPhoneX when the video player control VideoPlayer is full screen [details](https://ask.dcloud.net.cn/question/87370)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + iOS平台 补齐 wgt 编译版本与js框架版本校验，不一致会弹窗提示 [详情](https://ask.dcloud.net.cn/article/35627)
  + iOS platform complete the verification of the compiled version of wgt and the js framework version, a pop-up prompt will appear if inconsistencies are displayed [details](https://ask.dcloud.net.cn/article/35627)
  + iOS平台 修复 小程序内 wgt 热更新资源后启动会显示一下 LaunchScreen.storyboard 页面的Bug
  + iOS platform fixes the bug that the LaunchScreen.storyboard page will be displayed after the wgt hot update resource in the applet is started


#### 2.6.13.20200414-alpha
* 【uni-app】
  + 支付宝小程序平台 修复 部分情况下编译失败的Bug
  + Alipay applet platform fixes the bug of compilation failure in some cases
  + App-Android平台 修复 v2版本apk使用wgt升级资源后，用v3版本apk覆盖安装无法进入应用的Bug [详情](https://ask.dcloud.net.cn/question/93426)
  + App-Android platform Fix the bug that the v3 version apk cannot enter the application after the v2 version apk uses wgt to upgrade resources. [Details](https://ask.dcloud.net.cn/question/93426)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 修复 打包模块勾选 iOS UIWebview/Android X5 Webview 后，wgt升级更新失败触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/93447)
  + Fix the bug that triggered the error callback when the wgt upgrade failed after the iOS UIWebview/Android X5 Webview was checked in the packaging module [details](https://ask.dcloud.net.cn/question/93447)
  + Android平台 修复 确认模态框 confirm 显示时会弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/93574)
  + Android platform fix the bug that the soft keyboard will pop up when the confirm modal box confirm is displayed [details](https://ask.dcloud.net.cn/question/93574)
  + iOS平台 修复 HBuilderX2.6.8 引出的Webview窗口 userAgent 不正确可能导致加载的页面内部逻辑不正确的Bug [详情](https://ask.dcloud.net.cn/question/93284)
  + iOS platform Fix the bug that the incorrect userAgent of the Webview window that is brought up by HBuilderX2.6.8 may cause the internal logic of the loaded page to be incorrect [details](https://ask.dcloud.net.cn/question/93284)
  + iOS平台 修复 uni-AD 腾讯广点通部分视频激励广告点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + iOS platform fixes the bug that the isEnded attribute in the onClose event parameter may be false when the onClose event parameter is triggered by some video rewarded advertisements of uni-AD Tencent Guangdiantong


#### 2.6.12.20200412-alpha
* 【uni-app】
  + App平台 修复 无法获取音频暂停状态的Bug [详情](https://ask.dcloud.net.cn/question/92714)
  + App platform fixes the bug that the audio pause status cannot be obtained [details](https://ask.dcloud.net.cn/question/92714)
  + App平台 修复 renderjs 中未绑定到 change:prop 的数据变更也会触发 change 事件的Bug [详情](https://ask.dcloud.net.cn/question/91887)
  + App platform Fix the bug that the data change in renderjs that is not bound to change:prop will also trigger the change event [details](https://ask.dcloud.net.cn/question/91887)
  + App平台 修复 v3版本 uni.arrayBufferToBase64 某些参数无法支持的Bug [详情](https://ask.dcloud.net.cn/question/92720)
  + App platform Fix the bug that some parameters of uni.arrayBufferToBase64 in v3 version cannot be supported [details](https://ask.dcloud.net.cn/question/92720)
  + App平台 修复 v3版本 使用小程序组件在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92561)
  + App platform Fix the bug of v3 version using small program components to report errors in lower version systems [details](https://ask.dcloud.net.cn/question/92561)
  + App平台 修复 v3版本 text 组件首尾换行解析不正确的Bug
  + App platform fixes the bug of incorrect parsing of the beginning and end of the text component of the v3 version
  + App平台 修复 v3版本 uni.canvasToTempFilePath 在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + App platform Fix the bug that uni.canvasToTempFilePath of v3 version reported an error in the lower version system [details](https://ask.dcloud.net.cn/question/92189)
  + App平台 修复 v3版本 调用 socketTask.close 不传参数报错的Bug
  + App platform fixes the bug of v3 version calling socketTask.close without passing parameters and reporting errors
  + App平台 修复 v3版本 RecorderManager 事件重复执行的Bug [详情](https://ask.dcloud.net.cn/question/91885)
  + App platform Fix the bug of repeated execution of RecorderManager events in v3 version [details](https://ask.dcloud.net.cn/question/91885)
  + App平台 修复 v3版本 form 组件 submit 事件内无法获取 picker 值的Bug [#1545](https://github.com/dcloudio/uni-app/issues/1545)
  + App platform Fix the bug that the picker value cannot be obtained in the submit event of the form component of the v3 version [#1545](https://github.com/dcloudio/uni-app/issues/1545)
  + App平台 修复 v3版本 uni.createBLEConnection 没有被 Promisify 的Bug [#1543](https://github.com/dcloudio/uni-app/issues/1543)
  + App platform Fix the bug that uni.createBLEConnection in v3 version is not Promisify [#1543](https://github.com/dcloudio/uni-app/issues/1543)
  + App-Android平台 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/92700)
  + App-Android platform fixed the bug that uni.sendSocketMessage could not send some bytebuffer data [details](https://ask.dcloud.net.cn/question/92700)
  + App-Android平台 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug [详情](https://ask.dcloud.net.cn/question/93190)
  + App-Android platform Fix the bug that @loading event cannot be triggered normally when loading more at the bottom of nvue list/waterfall component [details](https://ask.dcloud.net.cn/question/93190)
  + App-Android平台 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug [详情](https://ask.dcloud.net.cn/question/92872)
  + App-Android platform Fix the bug that the value range of the parameter contentOffset.y returned by the @scroll event of the nvue list component is incorrect [details](https://ask.dcloud.net.cn/question/92872)
  + App-Android平台 修复 nvue input 组件设置 type 为 digit/number 时弹出键盘类型不正确的问题
  + App-Android platform fixed the problem of incorrect keyboard type when the nvue input component is set to digit/number
  + App-Android平台 修复 tabBar 页面设置 titleNView 的 type 为 transparent 滚动时标题栏透明度不发生变化的Bug
  + App-Android platform fix the bug that the titleNView type of the tabBar page is set to transparent and the transparency of the title bar does not change when scrolling
  + App-iOS平台 修复 nvue video 组件设置 @click 事件后，视频底部控制栏上除进度条以外的其他按钮失效的Bug [详情](https://ask.dcloud.net.cn/question/92727)
  + App-iOS platform Fix the bug that after the @click event of the nvue video component is set, the buttons on the control bar at the bottom of the video, except for the progress bar, fail [details](https://ask.dcloud.net.cn/question/92727)
  + App-iOS平台 修复 v3模式 movable-area 组件嵌套 scroll-view 组件点击事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/92638)
  + App-iOS platform Fix the bug that the movable-area component nested scroll-view component in v3 mode does not trigger the click event of the scroll-view component [details](https://ask.dcloud.net.cn/question/92638)
  + H5平台 优化 uni.request 增加 withCredentials 参数，支持配置跨域请求时是否携带凭证（cookies）
  + H5 platform optimization uni.request adds withCredentials parameter, supports configuring whether to carry credentials (cookies) when cross-domain requests
  + H5平台 优化 uni.uploadFile 增加 files 参数，支持上传多个文件
  + H5 platform optimization uni.uploadFile adds files parameter, supports uploading multiple files
  + H5平台 优化 uni.uploadFile 增加 file 参数，支持上传原始 File 对象
  + H5 platform optimization uni.uploadFile adds file parameter, supports uploading original File objects
  + H5平台 优化 uni.chooseVideo、uni.chooseImage 支持返回原始 File 对象
  + H5 platform optimization uni.chooseVideo, uni.chooseImage support returning the original File object
  + H5平台 修复 base为相对路径 ./ 时，相对路径的静态资源加载失败的Bug [详情](https://ask.dcloud.net.cn/question/92910)
  + H5 platform Fix the bug that the static resource of the relative path fails to load when the base is a relative path ./ [details](https://ask.dcloud.net.cn/question/92910)
  + 小程序平台 修复 条件编译中引用静态资源始终生效的Bug [#1542](https://github.com/dcloudio/uni-app/issues/1542)
  + Mini Program Platform Fix the bug that references to static resources in conditional compilation always take effect [#1542](https://github.com/dcloudio/uni-app/issues/1542)
  + 小程序平台 修复 启用分包优化后，当分包路径相似时 vendor 生成不正确Bug [#1440](https://github.com/dcloudio/uni-app/issues/1440)
  + Mini Program Platform Fix bug [#1440](https://github.com/dcloudio/uni-app/issues/1440) When subcontracting optimization is enabled, when the subcontracting path is similar, vendor generates incorrectly
  + 支付宝小程序平台 修复 uni.getFileInfo 提示参数不正确的Bug
  + Alipay applet platform fixed the bug that uni.getFileInfo prompts incorrect parameters
* 【uniCloud】
  + 阿里云 新增 支持云函数定时触发
  + Alibaba Cloud adds support for timing triggering of cloud functions
  + 阿里云 新增 HBuilderX内置浏览器运行H5项目时，可在前端控制台直接打印云函数的日志
  + Alibaba Cloud added HBuilderX built-in browser when running H5 projects, you can print cloud function logs directly on the front-end console
  + 阿里云 优化 云函数上传并运行时有时不能立即生效的问题
  + Alibaba Cloud optimizes the problem that cloud functions sometimes cannot take effect immediately when uploading and running
  + 阿里云 修复 字节跳动小程序iOS端上传文件失败的Bug [详情](https://ask.dcloud.net.cn/question/93130)
  + Alibaba Cloud fixes the bug that the ByteDance applet fails to upload files on the iOS side [details](https://ask.dcloud.net.cn/question/93130)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 原生导航标题栏的 titleIcon 支持 base64 图标，方便页面里已经存在的图标在滚动时绘制在原生导航栏上
  + Added that the titleIcon of the native navigation title bar supports base64 icons, so that the icons that already exist on the page are drawn on the native navigation bar when scrolling
  + 新增 actionSheet 取消按钮文字国际化（如设置按钮文字，则以设置文字为准，如未设置，则根据手机系统的语言显示）
  + Added actionSheet to cancel the button text internationalization (if the button text is set, the set text shall prevail, if not set, it will be displayed according to the language of the mobile phone system)
  + Android平台 新增 pop-in/pop-out 动画时通过 animationAlphaBGColor 设置动画蒙层背景色，可用于避免暗色风格页面转场动画的蒙层偏白 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)
  + When pop-in/pop-out animation is added to the Android platform, the background color of the animation mask is set through animationAlphaBGColor, which can be used to avoid the whiteness of the mask of the dark style page transition animation [document](https://www.html5plus.org /doc/zh_cn/webview.html#plus.webview.WebviewStyles)
  + Android平台 修复 uni-AD 腾讯广点通部分视频激励广告播放 30 秒后点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + Android platform fixes the bug that the isEnded attribute in the onClose event parameter may be false when the onClose event parameter is triggered by clicking the close button after some video rewarded advertisements of uni-AD Tencent Guangdiantong play for 30 seconds
  + Android平台 修复 Webview窗口对象 loadURL 方法没有触发 overrideUrlLoading 拦截回调函数的Bug [详情](https://ask.dcloud.net.cn/question/92689)
  + Android platform fixed the bug that the loadURL method of the Webview window object did not trigger the overrideUrlLoading interception callback function [details](https://ask.dcloud.net.cn/question/92689)
  + Android平台 修复 显示系统软键盘 plus.key.showSoftKeybord 多次调用会触发关闭软键盘的Bug
  + Android platform fixes the bug that the soft keyboard of the display system plus.key.showSoftKeybord will be triggered to close the soft keyboard after multiple calls
  + Android平台 修复 storage存储键值通过 setItem 方法传入 value 为空字符串后，通过 getItem 方法返回 null 的Bug
  + Android platform fixes the bug that the storage key value passed in the setItem method is an empty string, and the getItem method returns null
  + Android平台 修复 同时创建两个音频播放对象，其中一个音频暂停后另一个无法播放的Bug
  + Android platform fixes the bug where two audio playback objects are created at the same time, one of which cannot be played after the audio is paused
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtmp 链接可能无声音的Bug
  + Android platform fixes the video playback control VideoPlayer playback part of the rtmp link may have no sound bug
  + iOS平台 修复 原生导航标题栏 设置 type 为 float 时，backgroundColor 的半透明效果显示不正确的Bug
  + iOS platform fixes the bug that the translucent effect of backgroundColor is not displayed correctly when the type of the native navigation title bar is set to float



#### 2.6.10.20200403-alpha
* 【uni-app】
  + 【重要】 App平台 调整 manifest中默认的编译模式为v3模式。如需要切换为老版自定义组件模式，需要在 manifest可视化界面 - App其他常用设置 中，去掉v3编译模式
  + 【Important】 App platform Adjust the default compilation mode in the manifest to v3 mode. If you need to switch to the old version of the custom component mode, you need to remove the v3 compilation mode in the manifest visualization interface-App other common settings
  + 【重要】 App平台 新增 v3版本 支持纯 nvue 编译模式。两种模式不再互斥
  + 【Important】 App platform added v3 version to support pure nvue compilation mode. The two modes are no longer mutually exclusive
  + 【重要】 App平台 调整 v3版本 template 节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
  + 【Important】 App platform adjust the v3 version of the template node when referencing static resource files (such as pictures), adjust the search strategy to [Search based on the path of the current file], which is consistent with other platforms
  + App平台、H5平台 优化 v3版本 uni.moveToLocation 支持 latitude、longitude 参数
  + App platform, H5 platform optimization v3 version uni.moveToLocation supports latitude, longitude parameters
  + App平台、H5平台 修复 多列 picker 组件部分情况修改 value 不生效的Bug
  + App platform, H5 platform Fix the bug that the modified value of multi-column picker components does not take effect in some cases
  + App平台 新增 激励视频广告支持服务器回调 [详情](https://uniapp.dcloud.io/api/ad/rewarded-video-ad)
  + App platform newly added Rewarded video ads support server callback [details](https://uniapp.dcloud.io/api/ad/rewarded-video-ad)
  + App平台 优化 控制台日志支持打印数组类型
  + App platform optimization Console log supports printing array type
  + App平台 修复 自定义组件编译模式使用 easycom 后在低版本设备白屏的Bug [详情](https://ask.dcloud.net.cn/question/92473)
  + App platform Fix the bug of white screen on low version devices after using easycom in custom component compilation mode [details](https://ask.dcloud.net.cn/question/92473)
  + App平台 修复 v3版本 判断浏览器专用 API（如：navigator）报错的Bug
  + App platform fixes the v3 version. Judges the bug of the browser-specific API (such as navigator) reporting errors
  + App平台 修复 v3版本 uni.openLocation 点击导航栏返回后退2次的Bug [#1465](https://github.com/dcloudio/uni-app/issues/1465)
  + App platform Fix the bug of uni.openLocation in v3 version [#1465](https://github.com/dcloudio/uni-app/issues/1465)
  + App平台 修复 v3版本 uni.moveToLocation 不执行回调的Bug
  + App platform fixes the bug that uni.moveToLocation does not execute callback in v3 version
  + App平台 修复 v3版本 webview 组件无法收到 @message 的Bug [详情](https://ask.dcloud.net.cn/question/92296)
  + App platform Fix the bug that the webview component of v3 version cannot receive @message [details](https://ask.dcloud.net.cn/question/92296)
  + App平台 修复 v3版本 navigation-bar 组件 非首页某些属性无效的Bug
  + App platform fixes the bug that some attributes of the navigation-bar component of the v3 version are not valid for the home page
  + App-Android平台 修复 v3版本 SocketTask.onMessage 接收数据类型为 ArrayBuffer 时解析错误的Bug
  + App-Android platform fixes the bug of parsing error when the v3 version of SocketTask.onMessage receives the data type as ArrayBuffer
  + App-Android平台 修复 nvue web-view 组件 src 属性的链接地址中带 query 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/92043)
  + App-Android platform Fixed a bug with invalid query parameter in the link address of the src attribute of the nvue web-view component [details](https://ask.dcloud.net.cn/question/92043)
  + App-Android平台 修复 nvue web-view、image 等组件 src 属性资源地址为_doc、_download路径时可能无法正常载入的Bug
  + App-Android platform fixes the bug that the src attribute resource address of nvue web-view, image and other components may not be loaded normally when the resource address is _doc, _download path
  + App-iOS平台 修复 textarea 组件在 iOS13.4 系统报错的Bug
  + App-iOS platform fixed the bug that the textarea component reported an error in the iOS 13.4 system
  + App-iOS平台 修复 nvue web-view 组件 src 属性加载本地 html 文件路径中带 query 参数时无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/91311)
  + App-iOS platform Fix the bug that the src attribute of the nvue web-view component cannot be displayed normally when the query parameter in the local html file path is loaded [details](https://ask.dcloud.net.cn/question/91311)
  + App-iOS平台 修复 锁定横屏后打开 nvue 页面使用 plus.screen 获取屏幕宽高值不对的Bug
  + App-iOS platform fixes the bug that when the horizontal screen is locked, open the nvue page and use plus.screen to get the wrong screen width and height values
  + App-iOS平台 修复 v3版本 uni.canvasToTempFilePath 在 ios 9.3.4 报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + App-iOS platform fixed the bug that uni.canvasToTempFilePath of v3 version reported an error in ios 9.3.4 [details](https://ask.dcloud.net.cn/question/92189)
  + H5平台 修复 image 组件 某些情况下相对路径无法显示的Bug [详情](https://ask.dcloud.net.cn/question/92366)
  + H5 platform fixes the bug that the relative path cannot be displayed in some cases in the image component [details](https://ask.dcloud.net.cn/question/92366)
  + 小程序平台 修复 调用取消事件监听类接口报错的Bug [#1511](https://github.com/dcloudio/uni-app/issues/1511)
  + Mini Program Platform Fixes the bug of calling the cancel event listener class interface to report an error [#1511](https://github.com/dcloudio/uni-app/issues/1511)
* 【uniCloud】
  + 修复 使用阿里云时运行到App端不输出运行日志的Bug
  + Fix the bug that the running log is not output when running to the App side when using Alibaba Cloud
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 uni-AD 激励视频广告支持服务器回调（限今日头条穿山甲广告） [文档](https://ask.dcloud.net.cn/article/37108)
  + Added uni-AD rewarded video ads to support server callbacks (limited to today’s headline pangolin ads) [document](https://ask.dcloud.net.cn/article/37108)
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持网络图标路径
  + Added the titleIcon of the title bar of the Webview window titleNView to support the network icon path
  + 新增 获取当前屏幕宽高信息接口 plus.screen.getCurrentSize [文档](https://www.html5plus.org/doc/zh_cn/device.html#plus.screen.getCurrentSize)
  + New interface for obtaining current screen width and height information plus.screen.getCurrentSize [document](https://www.html5plus.org/doc/zh_cn/device.html#plus.screen.getCurrentSize)
  + Android平台 修复 Webview窗口对象 loadURL 方法 headers 参数设置无效的Bug [详情](https://ask.dcloud.net.cn/question/87597)
  + Android platform fix the bug that the headers parameter setting of the loadURL method of the Webview window object is invalid [details](https://ask.dcloud.net.cn/question/87597)
  + Android平台 修复 在Android10上第一次安装后启动可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90361)
  + Android platform fixes the bug that may cause the app to crash after the first installation on Android10 [details](https://ask.dcloud.net.cn/question/90361)
  + Android平台 修复 应用标识 AppID 使用www结尾时导致部分资源无法正常载入的Bug [详情](https://ask.dcloud.net.cn/question/91217)
  + Android platform fix the bug that some resources cannot be loaded normally when the app ID AppID ends with www [details](https://ask.dcloud.net.cn/question/91217)
  + Android平台 修复 百度语音识别时在部分设备可能返回 4004 app name unknown 错误的Bug [详情](https://ask.dcloud.net.cn/question/90982)
  + Android platform fixed the bug that some devices may return 4004 app name unknown error during Baidu speech recognition [details](https://ask.dcloud.net.cn/question/90982)
  + Android平台 修复 设置应用图标显示角标数字 plus.runtime.setBadgeNumber 在部分设备超过100时仍然显示99的Bug [详情](https://ask.dcloud.net.cn/question/91452)
  + Android platform fixed the bug that set the app icon to display the corner mark number plus.runtime.setBadgeNumber still shows 99 when some devices exceed 100 [details](https://ask.dcloud.net.cn/question/91452)
  + Android平台 修复 文件系统目录对象 DirectoryEntry 的 getFile 方法返回错误信息不准确的Bug
  + Android platform fixes the bug that the getFile method of the file system directory object DirectoryEntry returns inaccurate error information
  + Android平台 修复 调用 plus.gellay.pick 通过QQ浏览器选择图片或视频在部分设备可能无响应的Bug
  + Android platform fixes the bug that calling plus.gellay.pick to select pictures or videos through QQ browser may not respond on some devices
  + Android平台 修复 HBuilderX2.5.4引出的获取Cookie值 plus.navigator.getCookie 返回数据不正确的Bug
  + Android platform fixes the bug that HBuilderX2.5.4 leads to get cookie value plus.navigator.getCookie returns incorrect data
  + iOS平台 新增 Webview窗口使用WKWebview内核在iOS11及以上设备支持js原生混淆 [详情](https://ask.dcloud.net.cn/article/36437#wkwebview)
  + iOS platform new Webview window uses WKWebview kernel to support js native obfuscation on iOS11 and above devices [details](https://ask.dcloud.net.cn/article/36437#wkwebview)
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.4，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS platform update Alipay SDK version is 15.7.4, which solves the problem of using abandoned UIWebview APIs in AppStore audit report
  + iOS平台 更新 新浪微博登录、分享SDK版本为3.2.7，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS platform update. Sina Weibo login and sharing SDK version is 3.2.7, which solves the problem of using obsolete UIWebview APIs in AppStore audit report
  + iOS平台 更新 今日头条穿山甲广告SDK版本为V2.9.5.0
  + iOS platform update Today's headline pangolin ad SDK version is V2.9.5.0
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 plus.webview.all 无法获取所有Webview窗口的Bug [详情](https://ask.dcloud.net.cn/question/90517)
  + iOS platform Fix the bug that iOS 13.3 and above cannot get all Webview windows on iPad device plus.webview.all [details](https://ask.dcloud.net.cn/question/90517)
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 mui.openWindow 设置的窗口参数获取不到的Bug [详情](https://ask.dcloud.net.cn/question/91746)
  + iOS platform Fix the bug that the window parameters set in mui.openWindow on iPad devices cannot be obtained in iOS 13.3 and above [details](https://ask.dcloud.net.cn/question/91746)
  + iOS平台 修复 iOS 13及以上版本视频播放控件 VideoPlayer 全屏时可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
  + iOS platform fixes the bug that the brightness control view position may be disordered when the video player control of iOS 13 and above version VideoPlayer is full screen [details](https://ask.dcloud.net.cn/question/87370)
  + iOS平台 修复 视频播放控件 VideoPlayer 在下拉通知栏页面后依然播放的Bug [详情](https://ask.dcloud.net.cn/question/90627)
  + iOS platform fixes the bug that the video playback control VideoPlayer still plays after pulling down the notification bar page [details](https://ask.dcloud.net.cn/question/90627)
  + iOS平台 修复 预览图片 plus.nativeUI.previewImage 传入长图时显示不清楚的Bug [详情](https://ask.dcloud.net.cn/question/92083)
  + iOS platform fixes the bug that the preview image plus.nativeUI.previewImage is not clear when the long image is imported [details](https://ask.dcloud.net.cn/question/92083)
  + iOS平台 修复 应用安装后第一次启动 splash 界面显示不正常的Bug
  + iOS platform fixes the bug that the splash interface is not displayed normally after the application is installed for the first time
  + iOS平台 修复 Webview窗口 setStyle 设置 {titleNView: false} 后通过 getSytle 获取的 titleNView 数据不正确的Bug
  + iOS platform fixed the bug that the titleNView data obtained by getSytle after setting {titleNView: false} in the Webview window setStyle was incorrect
  + iOS平台 修复 Webview窗口标题栏 titleNView 动态设置 titleText 在某些情况下可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/92494)
  + iOS platform Fix the bug that the dynamic setting of titleText in the title bar of the Webview window titleNView may not take effect in some cases [details](https://ask.dcloud.net.cn/question/92494)
* 【uni小程序SDK】
* 【Uni applet SDK】
  + 新增 宿主与小程序通讯机制 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37122)
  + New communication mechanism between host and applet [details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37122)
  + iOS平台 修复 在监听小程序被关闭的方法中紧接着在打开小程序可能会崩溃的Bug
  + iOS platform fixes the bug that may crash when the applet is closed immediately after the applet is opened
  + iOS平台 修复 uni.chooseImage 引起内存泄露的Bug
  + iOS platform fixed the bug of uni.chooseImage causing memory leak



#### 2.6.7.20200326-alpha
* 【uni-app】
  + App平台 新增 v3版本 支持动态插槽名
  + App platform added v3 version to support dynamic slot name
  + App平台 新增 v3版本 navigation-bar 组件 titleNView 配置 [详情](https://uniapp.dcloud.io/component/navigation-bar)
  + App platform adds navigation-bar component titleNView configuration of v3 version [details](https://uniapp.dcloud.io/component/navigation-bar)
  + App平台 修复 v3版本 部分情况自定义组件内事件监听无效的Bug [详情](https://ask.dcloud.net.cn/question/91519)
  + App platform fixes the bug of invalid event monitoring in custom components in some cases in the v3 version [details](https://ask.dcloud.net.cn/question/91519)
  + App平台 修复 v3版本 动态绑定ref报错的Bug [#1458](https://github.com/dcloudio/uni-app/issues/1458)
  + App platform Fix the bug of dynamically binding ref in v3 version [#1458](https://github.com/dcloudio/uni-app/issues/1458)
  + App平台 修复 v3版本 textarea 组件 placeholder-class 无默认值的Bug [详情](https://ask.dcloud.net.cn/question/91373)
  + App platform Fix the bug that placeholder-class of textarea component of v3 version has no default value [details](https://ask.dcloud.net.cn/question/91373)
  + App平台 修复 v3版本 cover-view、cover-image 组件无法在自定义组件内使用的Bug [详情](https://ask.dcloud.net.cn/question/91345)
  + App platform Fix the bug that cover-view and cover-image components of v3 version cannot be used in custom components [details](https://ask.dcloud.net.cn/question/91345)
  + App平台 修复 v3版本 低功耗蓝牙某些接口在返回 ArrayBuffer 时被转为 base64 的Bug
  + App platform fixes the bug of v3 version that some Bluetooth low energy interfaces are converted to base64 when returning ArrayBuffer
  + App平台 修复 v3版本 uni.canvasPutImageData 无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/91672)
  + App platform Fix the bug that uni.canvasPutImageData in v3 version cannot be used normally [details](https://ask.dcloud.net.cn/question/91672)
  + App平台 修复 v3版本 video 组件 timeupdate 事件回调错误的Bug [详情](https://ask.dcloud.net.cn/question/91769)
  + App platform Fix the bug of the timeupdate event callback error of the video component of the v3 version [details](https://ask.dcloud.net.cn/question/91769)
  + App-Android平台 修复 国产安卓模拟器 uni.getSystemInfo 获取设备宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/90270)
  + App-Android platform fixes the bug that the domestic Android emulator uni.getSystemInfo gets the wrong width and height of the device [details](https://ask.dcloud.net.cn/question/90270)
  + App-Android平台 修复 HBuilderX2.6.6引出的 tabBar 设置图标云端打包后可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/91426)
  + App-Android platform fixes the bug that the tabBar settings icon derived from HBuilderX2.6.6 may not be displayed after cloud packaging [details](https://ask.dcloud.net.cn/question/91426)
  + App-iOS平台 修复 设备上使用第三方输入法收起键盘输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/91254)
  + App-iOS platform fixes the bug that the keyboard input box cannot lose focus when using a third-party input method on the device [details](https://ask.dcloud.net.cn/question/91254)
  + App-iOS平台 修复 部分情况 page 设置 height 为 100% 无法全屏的Bug
  + App-iOS platform fixes the bug that the page setting height is 100% cannot be full screen in some cases
  + App-iOS平台 修复 含 tabBar 页面使用原生占位时在 iPhoneX 获取窗口高度错误的Bug
  + App-iOS platform fixes the bug of getting the window height error on iPhoneX when using native placeholder on the page with tabBar
  + App-iOS平台 修复 picker 设置 value 过大时会滚动到空白位置的Bug [详情](https://ask.dcloud.net.cn/question/89539)
  + App-iOS platform fix the bug that the picker will scroll to a blank position when the value is too large [details](https://ask.dcloud.net.cn/question/89539)
  + App-iOS平台 修复 nvue 页面中加载 base64 格式 iconfont 文件在iOS13.4系统崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91721)
  + App-iOS platform Fix the bug that the base64 format iconfont file loaded in the nvue page crashed on iOS 13.4 [details](https://ask.dcloud.net.cn/question/91721)
  + H5平台 修复 带参数 url 直达部分情况参数解析失败的Bug [#1082](https://github.com/dcloudio/uni-app/issues/1082)
  + H5 platform fixes a bug where parameter parsing fails in some cases with parameter url [#1082](https://github.com/dcloudio/uni-app/issues/1082)
  + H5平台 修复 editor 组件 input 事件重复触发的Bug [详情](https://ask.dcloud.net.cn/question/91453)
  + H5 platform fix the bug that the editor component input event repeatedly triggers [details](https://ask.dcloud.net.cn/question/91453)
  + H5平台 修复 editor 组件 statuschange 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/91314)
  + H5 platform fix the bug that the editor component statuschange event cannot be triggered [details](https://ask.dcloud.net.cn/question/91314)
  + H5平台 修复 picker 组件未设置 value 时报错的Bug [#1422](https://github.com/dcloudio/uni-app/issues/1422)
  + H5 platform Fix the bug that error is reported when the picker component does not set a value [#1422](https://github.com/dcloudio/uni-app/issues/1422)
  + H5平台 修复 textarea 组件 placeholder-class 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/86851)
  + H5 platform Fix the bug that the placeholder-class configuration of the textarea component is invalid [details](https://ask.dcloud.net.cn/question/86851)
* 【uniCloud】
  + 新增 腾讯云（限受邀内测用户）
  + Added Tencent Cloud (limited to invited internal beta users)
  + 新增 uniCloud 支持通过模板创建公共模块（common目录，右键菜单，新建公共模块）
  + Added uniCloud support for creating public modules through templates (common directory, right-click menu, new public module)
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + Android平台 修复 系统选择按钮框底部取消按钮UI显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/91265)
  + Android platform Fix the bug that the UI of the cancel button at the bottom of the system selection button box is not displayed properly [details](https://ask.dcloud.net.cn/question/91265)
  + iOS平台 修复 云端打包启动页面中应用图标显示不清晰的Bug [详情](https://ask.dcloud.net.cn/question/91032)
  + iOS platform fix the bug that the application icon in the cloud packaging startup page is not clearly displayed [details](https://ask.dcloud.net.cn/question/91032)


#### 2.6.6.20200320-alpha
* 【uni-app】
  + 优化 静态资源引入方式 [详情](https://uniapp.dcloud.io/frame?id=resource)
  + Optimize the introduction of static resources [details](https://uniapp.dcloud.io/frame?id=resource)
  + 修复 内联 wxs 里包含“!”符号时报错的Bug [详情](https://ask.dcloud.net.cn/question/90581)
  + Fix the bug that an error is reported when the inline wxs contains the "!" symbol [details](https://ask.dcloud.net.cn/question/90581)
  + 修复 TypeScript 项目部分情况(存在 easycom 组件)，内置组件报未注册的Bug [#1400](https://github.com/dcloudio/uni-app/issues/1400)
  + Fix part of the TypeScript project (there are easycom components), the built-in components report unregistered bugs [#1400](https://github.com/dcloudio/uni-app/issues/1400)
  + 修复 uni.scss 内条件编译失效的Bug [详情](https://ask.dcloud.net.cn/question/90454)
  + Fix the bug that the conditional compilation fails in uni.scss [details](https://ask.dcloud.net.cn/question/90454)
  + 修复 vue.config.js 设置 transpileDependencies 失效的Bug [详情](https://ask.dcloud.net.cn/question/90068)
  + Fix the bug that the transpileDependencies setting in vue.config.js is invalid [details](https://ask.dcloud.net.cn/question/90068)
  + App平台、H5平台 修复 createAnimation 时 backgroundColor无效的Bug [详情](https://ask.dcloud.net.cn/question/91190)
  + App platform, H5 platform Fix the bug that backgroundColor is invalid when createAnimation [details](https://ask.dcloud.net.cn/question/91190)
  + App平台 调整 v3版本 使用 wx.xxx 方式调用接口不进行 Promise 封装
  + App platform adjust the v3 version to use the wx.xxx method to call the interface without Promise encapsulation
  + App平台 修复 热刷新页面参数被 encode 多次的Bug
  + App platform fixes the bug that the parameters of the hot refresh page are encoded multiple times
  + App平台 修复 vue 页面 ad 组件 无法销毁的Bug
  + App platform fixes the bug that the ad component of the vue page cannot be destroyed
  + App平台 修复 uni.setNavigationBarColor 无法设置返回按钮的颜色的Bug
  + App platform fixed the bug that uni.setNavigationBarColor could not set the color of the back button
  + App平台 修复 tabBar 的 midButton 点击高出tabBar高度区域无响应的Bug [详情](https://ask.dcloud.net.cn/question/87821)
  + App platform Fix the bug that the midButton of the tabBar does not respond when clicking on the area higher than the height of the tabBar [details](https://ask.dcloud.net.cn/question/87821)
  + App平台 修复 纯 nvue 模式 uni.relaunch 会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/89364)
  + App platform fixes the bug that the pure nvue mode uni.relaunch will cause the app to crash [details](https://ask.dcloud.net.cn/question/89364)
  + App平台 修复 非v3编译模式 uni.getImageInfo 返回 path 不是本地路径的Bug [详情](https://ask.dcloud.net.cn/question/90689)
  + App platform fixes the bug that uni.getImageInfo returns path is not a local path in non-v3 compilation mode [details](https://ask.dcloud.net.cn/question/90689)
  + App平台 修复 v3版本 部分情况组件事件监听混乱，导致页面渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/91169)
  + App platform fixes a bug in the v3 version of component event monitoring in some cases, causing abnormal page rendering [details](https://ask.dcloud.net.cn/question/91169)
  + App平台 修复 v3版本 fast 模式 storage相关API报错的Bug [详情](https://ask.dcloud.net.cn/question/90554)
  + App platform Fix the bug of v3 version of fast mode storage related API error [details](https://ask.dcloud.net.cn/question/90554)
  + App平台 修复 v3版本 通过 v-if 切换部分组件时报错的Bug [详情](https://ask.dcloud.net.cn/question/90200)
  + App platform Fix the bug of v3 version when switching some components through v-if [details](https://ask.dcloud.net.cn/question/90200)
  + App平台 修复 v3版本 css 条件编译为非 nvue 页面报错 may not be supported 的Bug [详情](https://ask.dcloud.net.cn/question/90523)
  + App platform Fix the bug of v3 version css conditional compilation as non-nvue page error may not be supported [details](https://ask.dcloud.net.cn/question/90523)
  + App平台 修复 v3版本 await this.$nextTick() 触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/87434)
  + App platform Fix the bug of incorrect trigger timing of await this.$nextTick() in v3 version [details](https://ask.dcloud.net.cn/question/87434)
  + App平台 修复 v3版本 切换到已显示 tabBar 页面时触发该页面 onHide 的Bug [详情](https://ask.dcloud.net.cn/question/91106)
  + App platform fixes the v3 version of the bug that triggers the onHide page when switching to a tabBar page that is already displayed [details](https://ask.dcloud.net.cn/question/91106)
  + App平台 修复 v3版本 从非 tabBar 页面调用 uni.switchTab 切换到一个已存在的 tabBar 页面，onShow 不执行的Bug
  + App platform fixes the bug of v3 version calling uni.switchTab from a non-tabBar page to switch to an existing tabBar page, and onShow does not execute the bug
  + App平台 修复 v3版本 nvue 页面 swiper 组件的 @transition 事件在某些情况下回调不正确的Bug [详情](https://ask.dcloud.net.cn/question/88906)
  + App platform Fix the bug that the @transition event of the swiper component of the v3 version of the nvue page is incorrectly called back in some cases [details](https://ask.dcloud.net.cn/question/88906)
  + App平台 修复 v3版本 swiper 组件作为插槽内容在其他组件中表现不正常的Bug [详情](https://ask.dcloud.net.cn/question/89853)
  + App platform Fix the bug that the v3 version of the swiper component as the slot content does not behave normally in other components [details](https://ask.dcloud.net.cn/question/89853)
  + App平台 修复 v3版本 map 组件 @markertap、@callouttap 事件回调值错误的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App platform Fix the bug of the v3 version map component @markertap, @callouttap event callback value error [details](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 map 组件 @regionchange 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App platform Fix the bug that the @regionchange event of the map component of v3 version is invalid [details](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 nvue 页面 map 相关API：getRegion，getCenterLocation 无效的Bug [详情](https://ask.dcloud.net.cn/question/90327)
  + App platform Fix the bug of v3 version nvue page map related API: getRegion, getCenterLocation invalid [details](https://ask.dcloud.net.cn/question/90327)
  + App平台 修复 v3版本 canvas 组件宽度或高度为0时报错的Bug [详情](https://ask.dcloud.net.cn/question/90647)
  + App platform Fix the bug that the canvas component of the v3 version reports an error when the width or height is 0 [details](https://ask.dcloud.net.cn/question/90647)
  + App平台 修复 v3版本 部分情况下绘制 canvas 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/90328)
  + App platform fixes the bug of drawing canvas component in some cases in v3 version [details](https://ask.dcloud.net.cn/question/90328)
  + App平台 修复 v3版本 uni.canvasToTempFilePath 配置 fileType 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/89273)
  + App platform Fix the bug that the fileType parameter of uni.canvasToTempFilePath configuration in v3 version does not take effect [details](https://ask.dcloud.net.cn/question/89273)
  + App平台 修复 v3版本 uni.previewImage 参数 longPressActions 无效的Bug
  + App platform fixes the bug that the uni.previewImage parameter longPressActions is invalid in the v3 version
  + App平台 修复 v3版本 uni.sendSocketMessage 发送 ArrayBuffer 类型数据报错的Bug [详情](https://ask.dcloud.net.cn/question/90434)
  + App platform Fix the bug that uni.sendSocketMessage sends ArrayBuffer type data error in v3 version [details](https://ask.dcloud.net.cn/question/90434)
  + App平台 修复 v3版本 socketTask.onOpen 内调用 socketTask.send 报错的Bug
  + App platform Fix the bug of calling socketTask.send in v3 version of socketTask.onOpen
  + App平台 修复 v3版本 uni.createBLEConnection 回调不触发的Bug
  + App platform fixes the bug that uni.createBLEConnection callback does not trigger in v3 version
  + App平台 修复 v3版本 uni.readBLECharacteristicValue 无法读取特征值数据的Bug
  + App platform fixes the bug that uni.readBLECharacteristicValue cannot read characteristic value data in v3 version
  + App平台 修复 v3版本 uni.writeBLECharacteristicValue 写入二进制数据报错的Bug
  + App platform fixes the bug that uni.writeBLECharacteristicValue writes binary data in v3 version and reports errors
  + App平台 修复 v3版本 subNvue style 内的 mask 属性被错误的应用在 subNvue 上的Bug [详情](https://ask.dcloud.net.cn/question/91097)
  + App platform Fix the bug that the mask attribute in subNvue style of v3 version was incorrectly applied to subNvue [details](https://ask.dcloud.net.cn/question/91097)
  + App平台 新增 nvue 页面 list 组件支持 setSpecialEffects 方法，实现 swiper-list 吸顶滚动效果 [文档](https://uniapp.dcloud.io/component/list?id=setSpecialEffects)
  + App platform added nvue page list component to support the setSpecialEffects method to achieve the swiper-list ceiling scroll effect [document](https://uniapp.dcloud.io/component/list?id=setSpecialEffects)
  + App平台 修复 nvue 页面 v-slot:slotname 值为空时报错的Bug
  + App platform Fix the bug that the v-slot: slotname value of the nvue page is empty when an error is reported
  + App平台 修复 nvue 页面 修复部分情况下 createLivePusherContext 无法正确获取 live-pusher 上下文的Bug
  + App platform Fix the nvue page Fix the bug that createLivePusherContext cannot obtain the live-pusher context correctly in some cases
  + App平台 修复 nvue 页面 map 组件 markers、polyline、polygons、circles 属性无法重置的Bug [详情](https://ask.dcloud.net.cn/question/86786)
  + App platform Fix the bug that the markers, polyline, polygons and circles attributes of the map component of the nvue page cannot be reset [details](https://ask.dcloud.net.cn/question/86786)
  + App平台 修复 nvue 页面 自定义组件中无法正常使用 video 相关 API 的Bug [详情](https://ask.dcloud.net.cn/question/90877)
  + App platform Fix the bug that the video related API cannot be used normally in the custom component of the nvue page [details](https://ask.dcloud.net.cn/question/90877)
  + App-Android平台 优化 storage 相关 API 性能 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + Optimize storage-related API performance on App-Android platform [Notes](https://ask.dcloud.net.cn/article/37071)
  + App-Android平台 修复 pages.json 内配置 softinputMode 为 adjustResize 部分情况下失效的Bug [详情](https://ask.dcloud.net.cn/question/90145)
  + App-Android platform Fix the bug that the softinputMode in pages.json is set to adjustResize in some cases [details](https://ask.dcloud.net.cn/question/90145)
  + App-Android平台 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug [详情](https://ask.dcloud.net.cn/question/88718)
  + App-Android platform fixed the bug that there are multiple nvue video components in the page and the cover-view crashes when playing in full screen [details](https://ask.dcloud.net.cn/question/88718)
  + App-Android平台 修复 nvue video 组件设置 click 事件后视频操作按钮无法触发的Bug [详情](https://ask.dcloud.net.cn/question/90291)
  + App-Android platform fixes the bug that the video operation button cannot be triggered after the click event of the nvue video component is set [details](https://ask.dcloud.net.cn/question/90291)
  + App-Android平台 修复 nvue waterfall 组件加入 Refresh 后item排版错乱的Bug [详情](https://ask.dcloud.net.cn/question/83130)
  + App-Android platform Fix the bug that the item layout is disorderly after adding Refresh to the nvue waterfall component [details](https://ask.dcloud.net.cn/question/83130)
  + App-Android平台 修复 tabBar 的 midButton 设置 backgroundImage 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/89800)
  + App-Android platform Fix the bug that the backgroundImage of the midButton setting of tabBar is not displayed properly [details](https://ask.dcloud.net.cn/question/89800)
  + App-Android平台 修复 v3版本 map 组件绑定宽高后无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/89771)
  + App-Android platform fixes the bug that the map component of v3 version cannot be dynamically modified after binding the width and height [details](https://ask.dcloud.net.cn/question/89771)
  + App-Android平台 修复 v3版本 nvue 为首页时 autoclose 设置为 false 也会自动关闭启动页的Bug [详情](https://ask.dcloud.net.cn/question/90080)
  + App-Android platform fixes the bug that when autoclose is set to false when v3 version nvue is the homepage, the startup page will be closed automatically [details](https://ask.dcloud.net.cn/question/90080)
  + App-iOS平台 新增 API uni.onUIStyleChange 监听系统主题状态变化（限v3） [详情](https://uniapp.dcloud.io/api/system/theme?id=onuistylechange)
  + App-iOS platform added API uni.onUIStyleChange to monitor system theme status changes (only v3) [details](https://uniapp.dcloud.io/api/system/theme?id=onuistylechange)
  + App-iOS平台 优化 API uni.showActionSheet 在 iPad 设备支持 popover 设置弹出指示区域（限v3）
  + App-iOS platform optimization API uni.showActionSheet supports popover on iPad devices to set pop-up indication area (only v3)
  + App-iOS平台 修复 HBuilderX2.6.4引出的调用 API uni.setClipboardData 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90439)
  + App-iOS platform Fix the bug that calling API uni.setClipboardData derived from HBuilderX2.6.4 may cause the application to crash [details](https://ask.dcloud.net.cn/question/90439)
  + App-iOS平台 修复 HBuilderX2.6.4引出的调用 uni.showToast 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90520)
  + App-iOS platform Fix the bug that the call uni.showToast induced by HBuilderX2.6.4 may cause the application to crash [details](https://ask.dcloud.net.cn/question/90520)
  + App-iOS平台 修复 配置底部安全区原生占位后，非 tabBar 页面获取的窗口高度错误的Bug
  + App-iOS platform fixes the bug that the height of the window obtained by the non-tabBar page is incorrect after configuring the native placeholder in the bottom safety zone
  + H5平台 优化 支持 manifest.json 配置 h5->router->base 值为 "./" 部署到相对路径
  + H5 platform optimization support manifest.json configuration h5->router->base value is "./" deployed to relative path
  + H5平台 修复 pages.json 配置 navigationBarShadow 无效的Bug [#607](https://github.com/dcloudio/uni-app/issues/607)
  + H5 platform Fix the bug that the navigationBarShadow configuration in pages.json is invalid [#607](https://github.com/dcloudio/uni-app/issues/607)
  + H5平台 修复 配置 transparentTitle 为 always 失效的Bug [详情](https://ask.dcloud.net.cn/question/91135)
  + H5 platform fix the bug that the configuration transparentTitle is always invalid [details](https://ask.dcloud.net.cn/question/91135)
  + H5平台 修复 解决PC模式图像预览页面滑动会关闭的Bug
  + H5 platform fix to solve the bug that the PC mode image preview page will be closed when sliding
  + H5平台 修复 部分情况下 webview 组件位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/90987)
  + H5 platform fixes the bug that the webview component position is incorrect in some cases [details](https://ask.dcloud.net.cn/question/90987)
  + H5平台 修复 picker 组件 mode=time 失效的Bug [#1421](https://github.com/dcloudio/uni-app/issues/1421)
  + H5 platform Fix the bug that the picker component mode=time fails [#1421](https://github.com/dcloudio/uni-app/issues/1421)
  + 微信小程序平台 修复 组件缺少 script 节点时运行报错的Bug [#1411](https://github.com/dcloudio/uni-app/issues/1411)
  + Wechat applet platform fix the bug of running error when component lacks script node [#1411](https://github.com/dcloudio/uni-app/issues/1411)
  + hello uni-app 新增 swiper-list 模板
  + hello uni-app added swiper-list template
* 【uniCloud】
  + 新增 公共函数功能 [详情](https://uniapp.dcloud.io/uniCloud/quickstart?id=common)
  + Added public function function [details](https://uniapp.dcloud.io/uniCloud/quickstart?id=common)
  + 修复 客户端上传文件在web控制台显示大小为0的Bug
  + Fix the bug that the size of the file uploaded by the client is displayed as 0 in the web console
* 【App插件(含5+App和uni-app的App端)】
* 【App plug-in (App side including 5+App and uni-app)】
  + 新增 原生标题栏支持自定义返回按钮角标、标题图标、副标题等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + Newly added native title bar supports custom back button corner labels, title icons, subtitles and other functions [document](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + 修复 Webview窗口的 WebviewEvent 事件回调函数参数没有 target 属性的Bug [详情](https://ask.dcloud.net.cn/question/90403)
  + Fix the bug that the callback function parameter of the WebviewEvent event of the Webview window does not have a target attribute [details](https://ask.dcloud.net.cn/question/90403)
  + Android平台 优化 本地数据存储 plus.storage 性能，新增异步操作接口 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + Android platform optimization Local data storage plus.storage performance, new asynchronous operation interface [Notes](https://ask.dcloud.net.cn/article/37071)
  + Android平台 修复 uni-AD 激励视频云端打包勾选穿山甲，广告平台没有通过审核时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91251)
  + Android platform fix uni-AD rewarded video cloud packaging and check the pangolin, the bug that may cause the application to crash when the advertising platform fails the review [details](https://ask.dcloud.net.cn/question/91251)
  + Android平台 修复 提交华为应用市场检查可能误报 TrojanDropper.Agent.EIY 病毒的Bug
  + Android platform fixes the bug that may falsely report the TrojanDropper.Agent.EIY virus when submitted to the Huawei app market for inspection
  + Android平台 修复 页面中a标签设置非法链接后，点击可能出现应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/90425)
  + Android platform fix after setting an illegal link in the a tag on the page, click on the bug that may cause the application to crash [details](https://ask.dcloud.net.cn/question/90425)
  + Android平台 修复 在部分华为手机上修改文件名之后，使用input标签type为file时获取文件名称可能为随机数字的Bug
  + Android platform fixes the bug that the file name may be a random number when the input tag type is file after the file name is modified on some Huawei phones
  + Android平台 修复 Webview窗口标题栏（titleNView）设置type为transparent时，其它原生控件（如VideoPlayer）可能会覆盖标题栏的Bug [详情](https://github.com/dcloudio/uni-app/issues/1298)
  + Android platform fixes the bug that other native controls (such as VideoPlayer) may cover the title bar when the Webview window title bar (titleNView) is set to transparent. [Details](https://github.com/dcloudio/uni-app/issues /1298)
  + Android平台 修复 页面中input标签触发软键盘收回时可能影响 WebviewStyles 中的top属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/91003)
  + Android platform fixed a bug that may affect the top attribute in WebviewStyles not taking effect when the input tag triggers the soft keyboard retract on the page [details](https://ask.dcloud.net.cn/question/91003)
  + Android平台 修复 HBuilderX2.6.4引出的Webview窗口标题栏（titleNView）动态修改 titleColor 不生效的Bug
  + Android platform fixes the bug that the title bar (titleNView) of the Webview window derived from HBuilderX2.6.4 does not take effect when dynamically modifying the titleColor
  + Android平台 修复 获取UA值 plus.navigator.getUserAgent 返回为空的Bug [详情](https://ask.dcloud.net.cn/question/89762)
  + Android platform fix to get the UA value plus.navigator.getUserAgent returns an empty bug [details](https://ask.dcloud.net.cn/question/89762)
  + Android平台 修复 视频播放控件 VideoPlayer 跳转到指定位置之后，弹幕仍然按照之前的进度播放的Bug
  + Android platform fixes the bug that after the video playback control VideoPlayer jumps to the specified position, the barrage still plays according to the previous progress
  + Android平台 修复 视频播放控件 VideoPlayer 未指定 direction 时没有根据视频的宽高自动选择 direction 的Bug [详情](https://ask.dcloud.net.cn/question/89600)
  + Android platform fixes the bug that the video playback control VideoPlayer does not automatically select the direction according to the width and height of the video when the direction is not specified [details](https://ask.dcloud.net.cn/question/89600)
  + Android平台 修复 地图控件 setCenter 后不触发 onstatuschanged 事件的Bug [详情](https://ask.dcloud.net.cn/question/48182)
  + Android platform fixed the bug that the onstatuschanged event was not triggered after the map control setCenter [details](https://ask.dcloud.net.cn/question/48182)
  + Android平台 修复 在Android4.4系统设备无法正常运行的Bug
  + Android platform fixes the bug that the device cannot run normally on the Android 4.4 system
  + 【重要】iOS平台 新增 UIWebview独立模块，默认不再包含UIWebview相关代码 [详情](https://ask.dcloud.net.cn/article/36348#uiwebview)
  + 【Important】 New UIWebview independent module for iOS platform, which no longer includes UIWebview related code by default [details](https://ask.dcloud.net.cn/article/36348#uiwebview)
  + iOS平台 新增 系统选择按钮框 plus.nativeUI.actionSheet 在iPad设备支持 popover 设置弹出指示区域 [文档](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
  + The iOS platform adds the system selection button box plus.nativeUI.actionSheet to support popover setting pop-up indication area on iPad devices [document](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles )
  + iOS平台 新增 本地数据存储 plus.storage 异步操作接口 [文档](https://www.html5plus.org/doc/zh_cn/storage.html)
  + iOS platform new local data storage plus.storage asynchronous operation interface [document](https://www.html5plus.org/doc/zh_cn/storage.html)
  + iOS平台 更新 友盟统计SDK版本为6.1.0
  + iOS platform update, Youmeng Statistics SDK version is 6.1.0
  + iOS平台 更新 微信登录、分享、支付SDK版本为1.8.6.2
  + iOS platform update WeChat login, sharing, payment SDK version is 1.8.6.2
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 show-center-play-btn 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/90673)
  + iOS platform fixes the bug that the show-center-play-btn property setting of the video player control VideoPlayer does not take effect [details](https://ask.dcloud.net.cn/question/90673)
  + iOS平台 修复 Webview窗口标题栏（titleNView）中 button 按钮设置 colorPressed 不生效的Bug [详情](https://ask.dcloud.net.cn/question/90616)
  + iOS platform Fix the bug that the button button in the title bar of the Webview window (titleNView) does not take effect. [Details](https://ask.dcloud.net.cn/question/90616)
  + iOS平台 修复 新浪微博分享 type 为 web 类型时 pictures 属性不生效的Bug
  + iOS platform fixes the bug that the pictures attribute does not take effect when the sharing type of Sina Weibo is web type
  + iOS平台 修复 系统选择按钮框 plus.nativeUI.actionSheet 显示后不关闭，通过HBuilderX真机运行更新资源可能引起崩溃的Bug
  + iOS platform fixes the bug that the system selection button box plus.nativeUI.actionSheet does not close after being displayed, and running the update resource through the real machine of HBuilderX may cause a crash
* 【uni小程序SDK】
* 【Uni applet SDK】
  + 新增 获取当前显示小程序页面直达Url方法（用于启动直达二级页面）[iOS](https://ask.dcloud.net.cn/article/37068#getCurrentPageUrl)、[Android](https://ask.dcloud.net.cn/article/36984#getCurrentPageUrl)
  + Added a new method to get the direct Url of the current displayed applet page (used to start the direct secondary page) [iOS](https://ask.dcloud.net.cn/article/37068#getCurrentPageUrl), [Android](https: //ask.dcloud.net.cn/article/36984#getCurrentPageUrl)
  + 新增 获取已部署的小程序资源版本信息方法 [iOS](https://ask.dcloud.net.cn/article/37068#getUniMPVersionInfo)、[Android](https://ask.dcloud.net.cn/article/36984#getAppVersionInfo)
  + Added new method to obtain resource version information of deployed applets [iOS](https://ask.dcloud.net.cn/article/37068#getUniMPVersionInfo), [Android](https://ask.dcloud.net. cn/article/36984#getAppVersionInfo)
  + 新增 胶囊按钮添加点击效果
  + New capsule button to add click effect
  + 开放 小程序内部调用 plus.runtime.install 热更新wgt资源 [详情](https://ask.dcloud.net.cn/article/35667)
  + Open the mini program internal call plus.runtime.install hot update wgt resource [details](https://ask.dcloud.net.cn/article/35667)
  + iOS平台 修复 原生工程勾选 'Hide status bar' 导致小程序页面导航栏被系统状态栏挡住的Bug
  + iOS platform fixes the bug that the native project checked'Hide status bar' which caused the navigation bar of the Mini Program page to be blocked by the system status bar
  + iOS平台 修复 pickDate、pickTime 无法显示的Bug
  + iOS platform fixes the bug that pickDate and pickTime cannot be displayed

#### 2.6.4.20200310-alpha
* 【uni-app】
  + App平台 新增 uni.shareWithSystem 调用系统分享组件发送分享消息 [详情](https://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem)
  + App platform added uni.shareWithSystem to call the system sharing component to send sharing messages [details](https://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem)
  + App平台 修复 非 v3编译模式 webview 组件高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/89683)  
  + App platform Fix the bug that the height of webview component in non-v3 compilation mode is incorrect [details](https://ask.dcloud.net.cn/question/89683)
  + App平台 修复 v3版本 uni.request 的 header 内使用小写的 content-type 会报错的Bug [详情](https://ask.dcloud.net.cn/question/90214)
  + App platform Fix the bug that using lowercase content-type in the header of uni.request v3 version will report an error [details](https://ask.dcloud.net.cn/question/90214)
  + App平台 修复 v3版本 vue 页面热刷新时 onLoad 参数被重复编码的Bug
  + App platform Fix the bug that the onLoad parameter is repeatedly coded when the vue page is hot refreshed in the v3 version
  + App平台 修复 v3版本 vue map 组件 scale 属性和 tap 事件无效问题 [详情](https://ask.dcloud.net.cn/question/89491)
  + App platform fix the v3 version of the vue map component scale attribute and tap event invalid problem [details](https://ask.dcloud.net.cn/question/89491)
  + App-Android平台 修复 v3版本 wgt热更新后无法打开新增页面的Bug [详情](https://ask.dcloud.net.cn/question/88829)
  + App-Android platform fixes the bug that the new page cannot be opened after the wgt hot update of the v3 version [details](https://ask.dcloud.net.cn/question/88829)
  + App-iOS平台 修复 v3版本 wgt热更新后 plus.runtime.restart 卡在启动页的Bug [详情](https://ask.dcloud.net.cn/question/89966)
  + App-iOS platform fixes the bug that plus.runtime.restart is stuck on the startup page after the v3 version wgt hot update [details](https://ask.dcloud.net.cn/question/89966)
  + App-iOS平台 修复 v3版本 video 组件部分情况无法显示的bug
  + App-iOS platform fixes the bug that the video component of the v3 version cannot be displayed in some cases
  + App-iOS平台 修复 nvue web-view 组件加载本地文件显示空白的Bug [详情](https://ask.dcloud.net.cn/question/90114)
  + App-iOS platform fixed the bug that the nvue web-view component loaded local files and displayed a blank bug [details](https://ask.dcloud.net.cn/question/90114)
* 【5+App插件】
* 【5+App plug-in】
  + 优化 uni-AD 激励视频广告内部加载逻辑，完善错误信息 [详情](https://ask.dcloud.net.cn/article/36718#rewarderror)
  + Optimize the internal loading logic of uni-AD rewarded video ads and improve the error message [details](https://ask.dcloud.net.cn/article/36718#rewarderror)


#### 2.6.3.20200305-alpha
* 【uni-app】
  + 新增 页面属性配置节点 page-meta [详情](https://uniapp.dcloud.io/component/page-meta)
  + New page attribute configuration node page-meta [details](https://uniapp.dcloud.io/component/page-meta)
  + App平台、H5平台 调整 canvas 组件大小改变时不再丢失内容
  + App platform, H5 platform, adjust the canvas component size and no longer lose content
  + App平台 【重要】 老版自定义组件编译模式将于4月1日下线 [详情](https://ask.dcloud.net.cn/article/36988)
  + App platform 【Important】 The old version of custom component compilation mode will be offline on April 1 [details](https://ask.dcloud.net.cn/article/36988)
  + App平台 【重要】 新增 vue页面引用的js，支持原生混淆（限v3） [详情](https://ask.dcloud.net.cn/article/36437)
  + App platform 【Important】 Added js referenced on the vue page to support native obfuscation (only v3) [details](https://ask.dcloud.net.cn/article/36437)
  + App平台 新增 video 组件全屏点击事件 fullscreenclick
  + App platform added video component full screen click event fullscreenclick
  + App平台 优化 真机运行时，强化错误提示，输出vue警告日志（限v3）[详情](https://ask.dcloud.net.cn/question/89193)
  + App platform optimization When the real machine is running, strengthen the error prompt and output the vue warning log (only v3) [details](https://ask.dcloud.net.cn/question/89193)
  + App平台 优化 vue 页面 input、textarea 组件支持 show-confirm-bar 属性（限v3）
  + App platform optimization vue page input, textarea components support show-confirm-bar attributes (only v3)
  + App平台 优化 picker 组件支持 fields 属性
  + App platform optimization picker component supports fields attribute
  + App平台 优化 支持更多 crypto 加密库 [详情](https://ask.dcloud.net.cn/question/89334)
  + App platform optimization supports more crypto encryption libraries [details](https://ask.dcloud.net.cn/question/89334)
  + App平台 修复 v3版本 uni.getStorage 部分情况下获取数据格式错误的Bug [详情](https://ask.dcloud.net.cn/question/87866)
  + App platform Fix the bug that the v3 version uni.getStorage gets the data format error in some cases [details](https://ask.dcloud.net.cn/question/87866)
  + App平台 修复 v3版本 $nextTick 无法返回 Promise 的Bug
  + App platform fixes the bug that the v3 version of $nextTick cannot return Promise
  + App平台 修复 v3版本 点击 tabBar 会重复触发 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/87497)
  + App platform fixes the v3 version of the bug that clicking on tabBar will trigger onShow repeatedly [details](https://ask.dcloud.net.cn/question/87497)
  + App平台 修复 v3版本 input、textarea 组件 cursor-spacing 属性为字符串时报错的Bug
  + App platform fixes the bug that error is reported when the cursor-spacing attribute of the input and textarea components of the v3 version is a string
  + App平台 修复 v3版本 picker-view 组件内的 navigator 组件无法跳转的Bug [详情](https://ask.dcloud.net.cn/question/87794)
  + App platform Fix the bug that the navigator component in the picker-view component of v3 version cannot jump [details](https://ask.dcloud.net.cn/question/87794)
  + App平台 修复 v3版本 input 组件使用 v-model 后 input 事件会重复触发的Bug
  + App platform Fix the bug that the input event will be triggered repeatedly after the v3 version of the input component uses v-model
  + App平台 修复 v3版本 多个 tabBar 页面同时使用 subNvue 时，点击蒙层关闭不正常的Bug [详情](https://ask.dcloud.net.cn/question/89050)
  + App platform fix v3 version When multiple tabBar pages use subNvue at the same time, click the mask to close the abnormal bug [details](https://ask.dcloud.net.cn/question/89050)
  + App平台 修复 v3版本 部分情况组件渲染不正确的Bug [#1334](https://github.com/dcloudio/uni-app/issues/1334)
  + App platform Fix the bug of incorrect component rendering in some cases in v3 version [#1334](https://github.com/dcloudio/uni-app/issues/1334)
  + App平台 修复 v3版本 部分情况文本节点渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89557)
  + App platform fixes the bug of incorrect rendering of text nodes in some cases in the v3 version [details](https://ask.dcloud.net.cn/question/89557)
  + App平台 修复 v3版本 vue map 组件动态修改 v-if 无效隐藏的Bug [详情](https://ask.dcloud.net.cn/question/89986)
  + App platform Fix the bug of v3 version vue map component dynamic modification v-if invalid hidden bug [details](https://ask.dcloud.net.cn/question/89986)
  + App平台 修复 v3版本 nvue map API translateMarker 无效的Bug
  + App platform fixes the bug that v3 version nvue map API translateMarker is invalid
  + App平台 修复 v3版本 cover-view 组件部分样式渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89609)
  + App platform Fix the bug of incorrect rendering of cover-view component in v3 version [details](https://ask.dcloud.net.cn/question/89609)
  + App平台 修复 v3版本 使用 renderjs 后，低版本系统运行异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/1373)
  + App platform Fix the bug that the lower version system runs abnormally after using renderjs in v3 version [details](https://github.com/dcloudio/uni-app/issues/1373)
  + App平台 修复 v3版本 真机运行 修改 pages.json 触发多次同步手机端文件的Bug
  + App platform fix v3 version running on real machine modify pages.json to trigger the bug of multiple synchronization of mobile phone files
  + App平台 修复 非v3模式 app.vue 中使用 css 变量不生效的Bug [详情](https://ask.dcloud.net.cn/question/89367)
  + App platform Fix the bug that the css variable in non-v3 mode app.vue does not take effect [details](https://ask.dcloud.net.cn/question/89367)
  + App平台 修复 uni.uploadFile 的 formData 属性中不能包含数值类型的Bug [详情](https://ask.dcloud.net.cn/question/87951)
  + App platform Fix the bug that the formData attribute of uni.uploadFile cannot contain numeric types [details](https://ask.dcloud.net.cn/question/87951)
  + App平台 修复 nvue页面 movable-view 组件 inertia 属性不生效的Bug   + App platform fix the bug that the inertia property of the movable-view component of the nvue page does not take effect
  + App平台 修复 uni.request 在 content-type 为 application/json 时自动对 data 序列化 [详情](https://ask.dcloud.net.cn/question/89474)
  + App platform fix uni.request automatically serialize data when content-type is application/json [details](https://ask.dcloud.net.cn/question/89474)
  + App平台 修复 某些情况下事件接收参数不正确的Bug [详情](https://ask.dcloud.net.cn/question/89818)
  + App platform fixes the bug that the event receiving parameters are incorrect in some cases [details](https://ask.dcloud.net.cn/question/89818)
  + App-Android平台 修复 nvue map 组件不设置 markers 属性导致tap事件不触发的Bug
  + App-Android platform fixes the bug that the tap event is not triggered because the nvue map component does not set the markers property
  + App-Android平台 修复 云打包后 uni.getImageInfo() 获取本地图片信息可能会触发失败回调的Bug
  + App-Android platform fixes the bug that uni.getImageInfo() obtaining local image information may trigger the failure callback after cloud packaging
  + App-iOS平台 修复 nvue image 组件使用相对路径加载图片可能会不显示的Bug [详情](https://ask.dcloud.net.cn/question/89117)
  + App-iOS platform Fix the bug that the nvue image component may not be displayed when loading images using relative paths [details](https://ask.dcloud.net.cn/question/89117)
  + App-iOS平台 修复 video 组件设置 muted 为0静音后再设置为1时无法重新开启声音的bug [详情](https://ask.dcloud.net.cn/question/89106)
  + App-iOS platform fixes the bug that the video component cannot be turned on when muted is set to 0 and then set to 1 [details](https://ask.dcloud.net.cn/question/89106)
  + H5平台 优化 内置组件响应鼠标事件，可在PC浏览器正常拖动和滚动
  + H5 platform optimization. Built-in components respond to mouse events and can be dragged and scrolled normally in the PC browser
  + H5平台 优化 “网络不给力”现象，调整页面加载超时时间和提示文案
  + H5 platform optimizes the phenomenon of "network failure", adjusts the page load timeout time and prompt copy
  + H5平台 优化 修改代码后提升页面热更新速度
  + H5 platform optimization Improve the hot update speed of the page after modifying the code
  + H5平台 修复 picker 组件设置 fields 属性后返回值格式错误的Bug
  + H5 platform fixes the bug that the picker component returns the wrong format after setting the fields attribute
  + H5平台 修复 picker 组件设置 value 部分情况无法触发视图更新的Bug [#1162](https://github.com/dcloudio/uni-app/issues/1162)
  + H5 platform fix the bug that the picker component setting value cannot trigger the view update bug [#1162](https://github.com/dcloudio/uni-app/issues/1162)
  + H5平台 修复 uni.createSelectorQuery 返回的节点信息中 bottom 值错误的Bug [详情](https://ask.dcloud.net.cn/question/85968)
  + H5 platform Fix the bug of the wrong bottom value in the node information returned by uni.createSelectorQuery [details](https://ask.dcloud.net.cn/question/85968)
  + H5平台 修复 map 组件无法同时加载多个实例的Bug [详情](https://ask.dcloud.net.cn/question/88735)
  + H5 platform fix the bug that the map component cannot load multiple instances at the same time [details](https://ask.dcloud.net.cn/question/88735)
  + H5平台 修复 movable-view 组件限制移动方向后，拖动操作会出现中断的Bug
  + H5 platform fixes the bug that the drag operation will be interrupted after the movable-view component restricts the moving direction
  + H5平台 修复 tranparentTitle 失效的Bug [详情](https://ask.dcloud.net.cn/question/89354)
  + H5 platform Fix the bug of invalid tranparentTitle [details](https://ask.dcloud.net.cn/question/89354)
  + H5平台 修复 部分浏览器中 uni.getSystemInfo 获取 windowTop、windowHeight 值错误的Bug [#1348](https://github.com/dcloudio/uni-app/issues/1348)
  + H5 platform fixes the bug that uni.getSystemInfo gets wrong windowTop and windowHeight values ​​in some browsers [#1348](https://github.com/dcloudio/uni-app/issues/1348)
  + H5平台 修复 在页面 onReady 生命周期内绘制canvas 绘制内容会一闪消失的Bug [详情](https://ask.dcloud.net.cn/question/81675)
  + H5 platform fixes the bug that the drawing content of canvas will disappear in a flash during the onReady life cycle of the page [details](https://ask.dcloud.net.cn/question/81675)
  + 小程序平台 修复 easycom 无法正常使用驼峰式命名组件的Bug [详情](https://ask.dcloud.net.cn/question/87925)
  + Mini Program Platform Fix the bug that easycom cannot use camel case named components normally [details](https://ask.dcloud.net.cn/question/87925)
  + 小程序平台 修复 App.vue 包含 template 节点时，导致 app.json 生成错误的Bug [#1351](https://github.com/dcloudio/uni-app/issues/1351)
  + Mini Program Platform Fix the bug that caused app.json to generate errors when App.vue contains template nodes [#1351](https://github.com/dcloudio/uni-app/issues/1351)
  + 微信小程序平台 修复 控制台没有输出生命周期内异常的Bug [详情](https://ask.dcloud.net.cn/question/89440)
  + WeChat applet platform fixed the bug that the console did not output the abnormal bug during the life cycle [details](https://ask.dcloud.net.cn/question/89440)
  + 钉钉小程序平台 调整 uni.request 在 content-type 为 application/json 时自动序列化 data
  + Dingding applet platform adjusted uni.request to automatically serialize data when content-type is application/json
  + uni-ui 修复 NoticeBar 通告栏组件关闭按钮不显示的Bug
  + uni-ui fix the bug that the close button of the NoticeBar component does not display
  + uni-ui 修复 IndexedList 索引列表组件非全屏显示时，右侧索引位置与点击位置偏移的Bug
  + uni-ui fixes the bug that the index position on the right side is offset from the click position when the IndexedList component is not displayed in full screen
* 【5+App插件】
* 【5+App plug-in】
  + 新增 原生标题栏支持自定义返回按钮、标题居左、标题栏背景图、背景渐变色等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + Added native title bar to support custom back button, title left, title bar background image, background gradient and other functions [Document](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview .WebviewTitleNViewStyles)
  + 新增 视频播放控件 VideoPlayer 支持全屏播放时点击事件 fullscreenclick [文档](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerEvents)
  + New video playback control VideoPlayer supports fullscreenclick event fullscreenclick [document](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerEvents)
  + Android平台 新增 原生隐私与政策提示框配置 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android platform Added native privacy and policy prompt box configuration [details](https://ask.dcloud.net.cn/article/36937)
  + Android平台 优化 云端打包默认需要的系统权限，支持配置是否自动添加第三方SDK需要的权限 [详情](https://ask.dcloud.net.cn/article/36982)
  + Android platform optimization System permissions required by default for cloud packaging, and support for configuring whether to automatically add permissions required by third-party SDKs [details](https://ask.dcloud.net.cn/article/36982)
  + Android平台 优化 Webview窗口加载可缩放页面时默认隐藏系统缩放控制条 [详情](https://ask.dcloud.net.cn/question/89088)
  + Android platform optimization The system zoom control bar is hidden by default when the Webview window loads a zoomable page [details](https://ask.dcloud.net.cn/question/89088)
  + Android平台 修复 获取系统语言信息 plus.os.language 字符中没有包含地区信息的Bug
  + Android platform fix to get system language information plus.os.language character does not contain area information bug
  + iOS平台 新增 适配iOS13+引入的暗黑模式 DarkMode [文档](https://ask.dcloud.net.cn/article/36995)
  + iOS platform Added to adapt to the dark mode introduced by iOS13+ DarkMode [Document](https://ask.dcloud.net.cn/article/36995)
  + iOS平台 新增 应用使用Push（消息推送）模块后启动时不弹出“发送通知”系统授权框的配置方法 [详情](https://ask.dcloud.net.cn/article/36955#push)
  + New iOS platform configuration method that does not pop up the "send notification" system authorization box when the application starts using the Push module [details](https://ask.dcloud.net.cn/article/36955#push)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性不生效的bug [详情](https://ask.dcloud.net.cn/question/88221)
  + iOS platform fixes the bug that the objectFit attribute of the video player control VideoPlayer does not take effect [details](https://ask.dcloud.net.cn/question/88221)
  + iOS平台 修复 使用WKWebview内核 plus.orientation.getCurrentOrientation 无法获取设备方向信息的Bug
  + iOS platform fixes the bug that the device orientation information cannot be obtained using the WKWebview core plus.orientation.getCurrentOrientation
* 【uni小程序SDK】
* 【Uni applet SDK】
  + 新增 启动小程序支持传入参数及直达指定页面 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37010)
  + Newly added Startup applet supports incoming parameters and direct access to the specified page [details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37010)
  + 新增 关闭当前小程序方法及小程序关闭回调方法 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37014)
  + Added the method of closing the current applet and the callback method of closing the applet [details](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37014)
  + 新增 获取当前运行的小程序appid方法
  + New method to get the appid of the currently running applet
  + Android平台 修复启动小程序后调用扫码可能引起的闪退问题 [详情](https://ask.dcloud.net.cn/question/89827)
  + Android platform Fix the crash problem that may be caused by calling the scan code after starting the applet [details](https://ask.dcloud.net.cn/question/89827)


#### 2.5.11.20200212-alpha
* 【uni-app】
  + App平台 新增 API uni.createRewardedVideoAd，激励视频广告 [详情](https://uniapp.dcloud.io/component/ad-rewarded-video)
  + App platform new API uni.createRewardedVideoAd, rewarded video advertising [details](https://uniapp.dcloud.io/component/ad-rewarded-video)
  + hello uni-app 新增 ad 组件示例
  + hello uni-app add ad component example
  + hello uni-app 新增 激励视频广告 API示例
  + hello uni-app new rewarded video advertising API example
* 【5+App插件】
* 【5+App plug-in】
  + 新增 uni-AD 支持激励视频广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createRewardedVideoAd)
  + Added uni-AD to support rewarded video ads [document](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createRewardedVideoAd)
  + 新增 推送 支持异步获取客户端推送标识接口 plus.push.getClientInfoAsync，解决同步接口可能返回空数据的问题 [文档](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfoAsync)
  + Added push support to asynchronously obtain the client push identification interface plus.push.getClientInfoAsync to solve the problem that the synchronous interface may return empty data [document](https://www.html5plus.org/doc/zh_cn/push.html#plus .push.getClientInfoAsync)
  + iOS平台 修复 HBuilderX2.5.8引出的视频播放控件无法播放直播地址的Bug [详情](https://ask.dcloud.net.cn/question/88393)
  + iOS platform Fix the bug that the video playback control derived from HBuilderX2.5.8 cannot play the live broadcast address [details](https://ask.dcloud.net.cn/question/88393)


#### 2.5.10.20200205-alpha
* 【uni-app】
  + APP平台、H5平台 优化 默认请求超时时间（request、connectSocket、uploadFile、downloadFile）对齐微信小程序由6秒改为60秒
  + APP platform, H5 platform optimization The default request timeout time (request, connectSocket, uploadFile, downloadFile) to align the WeChat applet is changed from 6 seconds to 60 seconds
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 修复 调用系统分享消息 plus.share.sendWithSystem 标题不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/87936)
  + Android platform fixes the bug that the title of the system sharing message plus.share.sendWithSystem does not support internationalization [details](https://ask.dcloud.net.cn/question/87936)


#### 2.5.9.20200203-alpha
* 【uni-app】
  + uniCloud 支持 H5平台的发布
  + uniCloud supports the release of H5 platform
  + uniCloud 支持设置协作者，多人使用相同AppID的项目，可绑定同一服务空间。方法：[开发者中心](https://dev.dcloud.net.cn) -> 选择应用 -> 项目成员管理。
  + uniCloud supports setting up collaborators, and multiple people using the same AppID project can be bound to the same service space. Method: [Developer Center](https://dev.dcloud.net.cn) -> select application -> project member management.
  + uniCloud 修复 H5平台 main.js 内使用 uniCloud 报错的Bug
  + uniCloud fixes the bug that uniCloud reports errors in main.js on the H5 platform
  + uniCloud 修复 App平台 callback 方式调用云函数报错的Bug
  + uniCloud fixes the bug of calling cloud functions in the callback mode of the App platform and reporting errors
  + uniCloud 修复 上传 mp3 文件报错的Bug
  + uniCloud fixed the bug of uploading mp3 files
  + uni-ui 新增 uni-combox 组合框组件
  + uni-ui add uni-combox combo box component

#### 2.5.8.20200128-alpha
* 【uni-app】
  + 【重要】uniCloud公测。serverless模式，全端云开发，js编写后端代码 [详情](https://uniapp.dcloud.io/uniCloud/README)
  + 【Important】 UniCloud public beta. Serverless mode, full-end cloud development, js writing back-end code [details](https://uniapp.dcloud.io/uniCloud/README)
  + App-Android平台 修复 tabBar 设置 midButton 可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/87744)
  + App-Android platform fixes the bug that the midButton setting of tabBar may not be displayed completely [details](https://ask.dcloud.net.cn/question/87744)
  + App-iOS平台 修复 video 组件未播放时调用 seek 可能导致界面不正常的bug [详情](https://ask.dcloud.net.cn/question/80013)
  + App-iOS platform fixes the bug that calling seek when the video component is not playing may cause the interface to be abnormal [details](https://ask.dcloud.net.cn/question/80013)
  + App-iOS平台 修复 nvue input 组件 placeholder-style 和 placeholder-class 设置 fontSize 不生效的Bug
  + App-iOS platform fixed the bug that the fontSize setting of the placeholder-style and placeholder-class of the nvue input component did not take effect
  + App-iOS平台 修复 页面中使用字体图标时可能无法正常显示的Bug
  + App-iOS platform fixes the bug that the font icon may not be displayed normally when the font icon is used in the page
* 【5+App插件】
* 【5+App plug-in】
  + iOS平台 修复 视频播放控件 VideoPlayer 暂停播放后手势快进或后退操作时，没有更新进度条上显示时间的Bug
  + iOS platform fixes the bug that the video playback control does not update the time displayed on the progress bar when the video player controls the video player to fast forward or rewind after the playback is paused.


#### 2.5.7.20200116-alpha
* 【uni-app】
  + App平台 修复 v3版本 原生组件 fixed 定位无效的Bug [详情](https://ask.dcloud.net.cn/question/87475)
  + App platform fixes the bug of v3 version of native component fixed positioning invalid [details](https://ask.dcloud.net.cn/question/87475)
  + App平台 修复 v3版本 uni.createSelectorQuery 无法查询到 id 的Bug [详情](https://ask.dcloud.net.cn/question/87644)
  + App platform Fix the bug that the v3 version of uni.createSelectorQuery cannot find the id [details](https://ask.dcloud.net.cn/question/87644)
  + App平台 修复 v3版本 非 tab 首页（nvue）显示 tabBar 的Bug [详情](https://ask.dcloud.net.cn/question/87536)
  + App platform fixes the bug of tabBar displayed on the non-tab homepage (nvue) of v3 version [details](https://ask.dcloud.net.cn/question/87536)
  + App平台 修复 v3版本 div、span 等 H5 组件样式不生效的Bug
  + App platform fixes the bug that the styles of H5 components such as div, span, etc. do not take effect in the v3 version
  + App平台 修复 v3版本 videoContext.requestFullScreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/87202)
  + App platform Fix the bug that videoContext.requestFullScreen does not take effect in v3 version [details](https://ask.dcloud.net.cn/question/87202)
  + App平台 修复 v3版本 vue map 组件 API 不支持通过 $getAppMap 获取原生 map 对象的Bug
  + App platform fixes the bug that v3 version vue map component API does not support obtaining native map objects through $getAppMap
  + App-Android平台 修复 nvue map 组件 markers 更新频繁可能出现失败的Bug [详情](https://ask.dcloud.net.cn/question/87625)
  + App-Android platform fixes the bug that frequent updates of markers of the nvue map component may fail [details](https://ask.dcloud.net.cn/question/87625)
  + H5平台 修复 启用摇树优化后 页面样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/87495)
  + H5 platform fixes the bug that the page style is disordered after the tree shake optimization is enabled [details](https://ask.dcloud.net.cn/question/87495)
  + uni-ui 修复 v3版本 app-vue 页面中 swipe-action 组件无法滑动的Bug
  + uni-ui fixes the bug that the swipe-action component in the app-vue page of v3 version cannot slide
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 优化 uni-AD 使用今日头条穿山甲广告，在Android8及以上版本华为手机没有访问设备信息权限时只显示抖音广告的Bug
  + Android platform optimization uni-AD uses today’s Toutiao pangolin ads, a bug that only displays TikTok ads when Huawei phones with Android 8 and above do not have the permission to access device information
  + Android平台 修复 音频播放对象 AudioPlayer 触发end事件之后，调用 stop 和 destroy 方法会出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/73227)
  + Android platform fixes after the audio playback object AudioPlayer triggers the end event, the stop and destroy methods will be called a crash bug [details](https://ask.dcloud.net.cn/question/73227)


#### 2.5.6.20200113-alpha
* 【uni-app】
  + App平台 修复 非v3编译模式 自定义组件失效的Bug [#1271](https://github.com/dcloudio/uni-app/issues/1271)
  + App platform Fix the bug that custom components fail in non-v3 compilation mode [#1271](https://github.com/dcloudio/uni-app/issues/1271)
  + App平台 修复 v3版本 组件 dataset 属性可能导致运行报错的Bug
  + App platform fixes the bug that the dataset property of the v3 version of the component may cause an error when running
  + App平台 优化 v3版本 uni.request API 失败回调中返回详细信息
  + App platform optimization v3 version uni.request API fails to return detailed information in the callback
  + App-Android平台 修复 nvue textarea 组件设置 maxlength 为 -1 时无法输入文字的Bug [详情](https://ask.dcloud.net.cn/question/87503)
  + App-Android platform Fix the bug that text cannot be entered when the maxlength of the nvue textarea component is set to -1 [details](https://ask.dcloud.net.cn/question/87503)
  + App-iOS平台 修复 nvue list 组件设置 bounce 为 false 可能导致页面无法滚动的Bug
  + App-iOS platform fixes the bug that setting bounce of nvue list component to false may cause the page to fail to scroll
  + H5平台 修复 input 组件设置 placeholder 的 top 样式显示错位的Bug [#1222](https://github.com/dcloudio/uni-app/issues/1222)
  + H5 platform Fix the bug that the top style of the placeholder of the input component setting is misplaced [#1222](https://github.com/dcloudio/uni-app/issues/1222)
* 【5+App插件】
* 【5+App plug-in】
  + 新增 Webview窗口样式支持设置禁止调用plus属性 disablePlus，解决加载外部页面时可能调用plus对应用造成危害的隐患 [详情](https://ask.dcloud.net.cn/question/85390)
  + Added support for setting the Webview window style to prohibit the calling of plus attribute disablePlus, which solves the hidden danger of calling plus to the application when loading external pages [details](https://ask.dcloud.net.cn/question/85390)


#### 2.5.5.20200111-alpha
* 【uni-app】
  + 【重要】easycom 支持自动扫描组件，符合目录规则的组件，无需在pages.json配置即可直接使用 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【Important】 easycom supports automatic scanning of components, components that comply with directory rules can be used directly without configuration in pages.json [details](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】App平台、H5平台 新增 支持 renderjs，替代 wxs ，以 vue 组件的写法运行在视图层 [详情](https://uniapp.dcloud.io/frame?id=renderjs)
  + 【Important】 App platform, H5 platform added support for renderjs, instead of wxs, running in the view layer as a vue component [details](https://uniapp.dcloud.io/frame?id=renderjs)
  + App平台、H5平台、字节跳动小程序平台 新增 swiper 组件支持 disable-touch 属性
  + App platform, H5 platform, ByteDance applet platform Added swiper component to support disable-touch attribute
  + App平台 修复 自定义组件模式 vue 文件不包含 script 节点时运行报错的Bug [详情](https://ask.dcloud.net.cn/question/87323)
  + App platform Fix the bug of running error when the custom component mode vue file does not contain the script node [details](https://ask.dcloud.net.cn/question/87323)
  + APP平台 修复 nvue 页面 picker 组件时间、日期类型使用默认值报错的Bug [详情](https://ask.dcloud.net.cn/question/87203)
  + APP platform Fix the bug that the picker component time and date type on the nvue page uses the default value to report an error [details](https://ask.dcloud.net.cn/question/87203)
  + APP平台 修复 nvue 页面 appear、disappear 事件不返回 direction 的Bug
  + APP platform fixes the bug that the direction is not returned in the appear and disappear events of the nvue page
  + App平台 修复 v3版本 vue 页面 map 组件 部分API无效及属性无法动态更新的Bug [详情](https://ask.dcloud.net.cn/question/86872)
  + App platform Fix the bug that some APIs of the map component of the vue page of v3 version are invalid and the attributes cannot be dynamically updated [details](https://ask.dcloud.net.cn/question/86872)
  + App平台 修复 v3版本 uni.request 在 content-type 为 urlencoded 时传入非 Object 的 data 时参数处理不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/1218)
  + App platform fixes the bug of incorrect parameter handling in v3 version uni.request when non-Object data is passed in when content-type is urlencoded [details](https://github.com/dcloudio/uni-app/issues/1218 )
  + App平台 修复 v3版本 alwaysShowBeforeRender 为 false 时无法关闭启动界面的Bug [详情](https://ask.dcloud.net.cn/question/87038)
  + App platform Fix the bug that the startup interface cannot be closed when alwaysShowBeforeRender is false in the v3 version [details](https://ask.dcloud.net.cn/question/87038)
  + App平台 修复 v3版本 InnerAudioContext 对象的 seek、onTimeUpdate 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/86891)
  + App platform Fix the bug that the seek and onTimeUpdate methods of the InnerAudioContext object of v3 version are invalid [details](https://ask.dcloud.net.cn/question/86891)
  + App-Android平台 修复 uni.request 在 responseType 为 arraybuffer 时，返回数据可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/86405)
  + App-Android platform fixes the bug that uni.request may return inaccurate data when responseType is arraybuffer [details](https://ask.dcloud.net.cn/question/86405)
  + App-iOS平台 修复 tabBar 自定义高度时红点和角标显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/87344)
  + App-iOS platform Fix the bug that the red dot and corner mark are displayed incorrectly when the height of the tabBar is customized [details](https://ask.dcloud.net.cn/question/87344)
  + H5平台 修复 启用摇树优化后 easycom 组件失效的Bug [详情](https://ask.dcloud.net.cn/question/87170)
  + H5 platform fixes the bug that easycom components fail after tree shake optimization is enabled [details](https://ask.dcloud.net.cn/question/87170)
  + H5平台 修复 启用摇树优化后 uni.previewImage 失效的Bug [#1168](https://github.com/dcloudio/uni-app/issues/1168)
  + H5 platform fixes the bug that uni.previewImage fails after the tree shake optimization is enabled [#1168](https://github.com/dcloudio/uni-app/issues/1168)
  + H5平台 修复 启用摇树优化后 animation 属性失效的Bug [#1231](https://github.com/dcloudio/uni-app/issues/1231)
  + H5 platform fix the bug that the animation property is invalid after the tree shake optimization is enabled [#1231](https://github.com/dcloudio/uni-app/issues/1231)
  + H5平台 修复 部分浏览器上 Object.assign 报错的Bug [#1116](https://github.com/dcloudio/uni-app/issues/1116)
  + H5 platform Fix the bug of Object.assign reporting errors on some browsers [#1116](https://github.com/dcloudio/uni-app/issues/1116)
  + H5平台 修复 部分浏览器上 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/87032)
  + H5 platform fixed the bug of uni.canvasToTempFilePath reporting errors on some browsers [details](https://ask.dcloud.net.cn/question/87032)
  + Hello uni-app 优化 canvas 组件示例使用renderjs实现
  + Hello uni-app optimization canvas component example is implemented using renderjs
* 【5+App插件】
* 【5+App plug-in】
  + 新增 数据库执行SQL语句 plus.sqlite.executeSql 支持一次传入多条语句，解决Android平台一条SQL语句中不支持以分号分割多条命令的需求 [详情](https://ask.dcloud.net.cn/article/36810)
  + Add new database to execute SQL statements plus.sqlite.executeSql support to pass in multiple statements at a time, to solve the need to split multiple commands with semicolons in one SQL statement on the Android platform [details](https://ask.dcloud. net.cn/article/36810)
  + Android平台 修复 在定时器回调函数中调用 plus.screen.lockOrientation 可能会引起应用闪退的Bug
  + Android platform fixes the bug that calling plus.screen.lockOrientation in the timer callback function may cause the app to crash
  + Android平台 修复 在部分手机上获取OAID可能触发错误回调，错误信息提示不支持的Bug [详情](https://ask.dcloud.net.cn/question/87441)
  + Android platform fix. Obtaining OAID on some mobile phones may trigger an error callback, and the error message indicates a bug that is not supported [details](https://ask.dcloud.net.cn/question/87441)
  + iOS平台 修复 调用 plus.gallery.pick 选择相册中的照片后, 连续快速点击完成按钮可能会引起应用崩溃的bug [详情](https://ask.dcloud.net.cn/question/87123)
  + iOS platform fixes the bug that after calling plus.gallery.pick to select a photo in the album, clicking the Finish button in quick succession may cause the application to crash [details](https://ask.dcloud.net.cn/question/87123)


#### 2.5.3-20200107-alpha
* 【uni-app】
  + 【重要】新增 easycom 组件模式，简化组件使用。无需在页面里引入和注册组件，打包时会自动剔除没有使用的组件 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【Important】 Added easycom component mode to simplify component usage. There is no need to introduce and register components in the page. Unused components will be automatically removed when packaging. [Details](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多SDK [详情](https://uniad.dcloud.net.cn/)
  + 【Important】 Added uni-AD advertising alliance. Integrate multi-end advertising such as apps and mini programs, and integrate many SDKs such as Tencent Guangdiantong, Toutiao Pangolin, 360 Advertising Alliance, etc. [details](https://uniad.dcloud.net.cn/)
  + 【重要】App平台 新增 ad 组件，支持信息流、banner等应用内自定义广告 [详情](https://uniapp.dcloud.io/component/ad)
  + 【Important】 App platform adds ad component to support in-app custom advertising such as information flow and banner [details](https://uniapp.dcloud.io/component/ad)
  + 【重要】App平台 优化 v3版本 运行时修改 vue 页面，手机端重启后可直达修改页面，无需手动配置 condition
  + 【Important】 App platform optimization v3 version modify the vue page when running, after restarting the mobile terminal, you can directly modify the page without manually configuring the condition
  + 优化 非 scoped 样式支持 >>>、/deep/、::v-deep 语法[详情](https://github.com/dcloudio/uni-app/issues/1143)
  + Optimize non-scoped style support >>>, /deep/, ::v-deep syntax [details](https://github.com/dcloudio/uni-app/issues/1143)
  + App平台、H5平台、微信小程序 新增 uni.getSystemInfo 返回数据支持属性 safeAreaInsets
  + App platform, H5 platform, WeChat applet added uni.getSystemInfo to return data to support the attribute safeAreaInsets
  + App平台 优化 调试控制台日志输出
  + App platform optimization debug console log output
  + App平台 优化 支持 CSS 变量 --window-top
  + App platform optimization supports CSS variables --window-top
  + App平台 优化 uni.getSystemInfo 获取的 windowHeight 不含 windowTop、windowBottom
  + App platform optimization uni.getSystemInfo obtains windowHeight without windowTop, windowBottom
  + App平台 修复 v3版本 行内样式设置背景图无效的Bug [详情](https://ask.dcloud.net.cn/question/86898)
  + App platform fixes the bug that the inline style setting background image is invalid in v3 version [details](https://ask.dcloud.net.cn/question/86898)
  + App平台 修复 v3版本 app-plus 下配置 pullToRefresh 无效的Bug
  + App platform fixes the bug that the pullToRefresh configuration under the v3 version of app-plus is invalid
  + App平台 修复 v3版本 subNvue mask 无法遮盖 tabBar 的Bug
  + App platform fixes the bug that subNvue mask cannot cover tabBar in v3 version
  + App平台 修复 v3版本 vue map 组件动态更新中心点 latitude、longitude 无效的Bug [详情](https://ask.dcloud.net.cn/question/86963)
  + App platform Fix the bug that the v3 version of the vue map component dynamically updates the central point latitude and longitude. [Details](https://ask.dcloud.net.cn/question/86963)
  + App-Android平台 修复 HBuilderX2.4.7引出的 nvue swiper 组件设置 autoplay 属性时最后一页会跳掉不显示的Bug [详情](https://ask.dcloud.net.cn/question/86856)
  + App-Android platform Fix the bug that the last page of the nvue swiper component derived from HBuilderX2.4.7 will not be displayed when the autoplay attribute is set [details](https://ask.dcloud.net.cn/question/86856)
  + App-Android平台 修复 websocket 发送内容中包含特殊字符可能导致发送失败的Bug [详情](https://ask.dcloud.net.cn/question/86670)
  + App-Android platform fixes a bug where special characters in websocket sending content may cause sending failure [details](https://ask.dcloud.net.cn/question/86670)
  + App-Android平台 修复 nvue 页面中组件设置 hover-class 后，页面关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/87016)
  + App-Android platform Fix the bug that the hover-class component in the nvue page may crash when the page is closed [details](https://ask.dcloud.net.cn/question/87016)
  + App-Android平台 修复 nvue video 组件下使用 cover-view 后，视频全屏后可能出现排版混乱的Bug [详情](https://ask.dcloud.net.cn/question/86879)
  + App-Android platform Fix the bug that the layout may appear chaotic after using cover-view under nvue video component [details](https://ask.dcloud.net.cn/question/86879)
  + App-iOS平台 修复 nvue map 组件使用 controls 控件提交云端打包后可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/86521)
  + App-iOS platform fixes the bug that may cause a crash after the nvue map component uses the controls control to submit the cloud package [details](https://ask.dcloud.net.cn/question/86521)
  + App-iOS平台 修复 v3版本 部分情况下 rpx 计算错误的Bug
  + App-iOS platform fixes the bug of rpx calculation error in some cases in v3 version
  + H5平台 修复 video 组件销毁报错的Bug [详情](https://ask.dcloud.net.cn/question/86959)
  + H5 platform Fix the bug of video component destruction report error [details](https://ask.dcloud.net.cn/question/86959)
  + H5平台 修复 audio 组件无法显示的Bug [详情](https://ask.dcloud.net.cn/question/87045)
   + H5 platform fix the bug that the audio component cannot be displayed [details](https://ask.dcloud.net.cn/question/87045)
  + H5平台 修复 uni.chooseVideo 在微信内置浏览器无法触发回调的Bug [详情](https://ask.dcloud.net.cn/question/86968)
   + H5 platform fixed the bug that uni.chooseVideo could not trigger the callback in the WeChat built-in browser [details](https://ask.dcloud.net.cn/question/86968)
  + 新增 uni-ui 项目模板。该项目通过 easycom 引入所有 uni-ui 组件，可方便的开发项目
  + Added uni-ui project template. This project introduces all uni-ui components through easycom, which can facilitate the development of the project
* 【5+App插件】
* 【5+App plug-in】
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多SDK [详情](https://uniad.dcloud.net.cn/)
  + 【Important】 Added uni-AD advertising alliance. Integrate multi-end advertising such as apps and mini programs, and integrate many SDKs such as Tencent Guangdiantong, Toutiao Pangolin, 360 Advertising Alliance, etc. [details](https://uniad.dcloud.net.cn/)
  + 【重要】新增 plus.ad 广告模块，支持信息流、banner等应用内自定义广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html)
  + 【Important】 Added the plus.ad advertising module to support in-app custom advertising such as information flow and banner [Document](https://www.html5plus.org/doc/zh_cn/ad.html)
  + 【重要】Android平台 新增 腾讯X5内核。可解决rom自定义主题字体适配、低端机浏览器兼容性等问题 [详情](https://ask.dcloud.net.cn/article/36806)
  + 【Important】 Added Tencent X5 kernel on Android platform. It can solve problems such as rom custom theme font adaptation, low-end machine browser compatibility, etc. [details](https://ask.dcloud.net.cn/article/36806)
  + Android平台 修复 Webview窗口创建并显示后立即关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/86918)
  + Android platform Fix the bug that may crash after the Webview window is created and displayed. [Details](https://ask.dcloud.net.cn/question/86918)
  + iOS平台 修复 在非刘海屏手机获取应用的安全区域 plus.navigator.getSafeAreaInsets 返回 deviceTop 数据可能不正确的Bug
  + iOS platform fixes the bug that getting the safe area of ​​the application on mobile phones other than Liu Haiping plus.navigator.getSafeAreaInsets may return deviceTop data incorrectly



#### 2.5.0.20191231-alpha
* 【uni-app】
  + App平台 新建项目默认使用v3编译器，如不需要v3编译，请在【manifest-App常用其他配置】取消
  + App platform New projects use the v3 compiler by default. If v3 compilation is not required, please cancel in [manifest-App common other configurations]
  + App平台 新增 v3版本 支持配置 nvue 首页 fast 启动模式，即不等待逻辑层初始化完毕，直接启动渲染层 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-plus)
  + The new v3 version of the App platform supports configuring the nvue homepage fast startup mode, that is, without waiting for the logic layer to initialize, directly start the rendering layer [details](https://uniapp.dcloud.io/collocation/manifest?id=app-plus )
  + App平台 修复 v3版本 globalStyle 内配置页面动画不生效的Bug [详情](https://ask.dcloud.net.cn/question/85654)
  + App platform Fix the bug that the configuration page animation in the v3 version of globalStyle does not take effect [details](https://ask.dcloud.net.cn/question/85654)
  + App平台 修复 v3版本 无法读取非v3版本存储的 storage 数据的Bug
  + App platform fixes the bug that v3 version cannot read storage data stored in non-v3 version
  + App平台 修复 picker 组件内容为空字符串时排版错位的Bug [详情](https://ask.dcloud.net.cn/question/85682)
  + App platform Fix the bug of misalignment when the content of picker component is empty string [details](https://ask.dcloud.net.cn/question/85682)
  + App-iOS平台 修复 tabbar及标题栏上设置字体图标可能无法正常显示的Bug
  + App-iOS platform fixes the bug that the font icon set on the tabbar and title bar may not be displayed normally
  + App-iOS平台 修复 nvue map 组件不设置 marker 的 title 及 callout 时会显示空白标注的Bug [详情](https://ask.dcloud.net.cn/question/85874)
  + App-iOS platform fixed the bug that blank label will be displayed when the title and callout of marker are not set in the nvue map component [details](https://ask.dcloud.net.cn/question/85874)
  + App-iOS平台 修复使用 uni.hideKeyboard 输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/85681)
  + App-iOS platform Fix the bug that the input box cannot lose focus when using uni.hideKeyboard [details](https://ask.dcloud.net.cn/question/85681)
  + H5平台 新增 video 组件支持 @loadedmetadata、@progress 事件
  + H5 platform added video component to support @loadedmetadata, @progress events
  + H5平台 优化 video 组件全屏展示效果 [详情](https://ask.dcloud.net.cn/question/85223)
  + Optimize the full-screen display effect of video components on the H5 platform [details](https://ask.dcloud.net.cn/question/85223)
  + H5平台 优化 canvas 组件内存占用
  + Optimize the memory usage of canvas component on H5 platform
  + H5平台 修复 globalStyle 下 h5 节点配置不生效的Bug
  + H5 platform fix the bug that h5 node configuration under globalStyle does not take effect
  + H5平台 修复 editor 组件未配置图像控件时报错的Bug
  + H5 platform fixes the bug when the editor component is not configured with image controls
  + H5平台 修复 在不支持 localStorage 的环境运行时框架报错的Bug [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + H5 platform Fix the bug that the framework reports an error when running in an environment that does not support localStorage [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + 支付宝小程序平台 新增 支持 onBackPress [详情](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
  + Alipay applet platform added support for onBackPress [details](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F% E5%91%BD%E5%91%A8%E6%9C%9F)
  + 支付宝小程序平台 修复 使用 createSelectorQuery().in(this) 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/1190)
  + Alipay applet platform fixes the bug reported using createSelectorQuery().in(this) [details](https://github.com/dcloudio/uni-app/issues/1190)
  + 支付宝小程序平台 新增 支持配置 mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + Alipay Mini Program Platform added support configuration mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + uni-ui 新增vue doc，在HBuilderX中可以给予更完善的代码提示 [什么是vue doc](https://ask.dcloud.net.cn/article/35814)
  + uni-ui adds vue doc, which can give more complete code hints in HBuilderX [What is vue doc](https://ask.dcloud.net.cn/article/35814)
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 修复 HBuilderX2.4.9引出的在无网环境下应用启动可能崩溃的Bug
  + Android platform fixes the bug that HBuilderX2.4.9 may cause the application to start crashing in a non-network environment
  + Android平台 修复 真机运行默认将日志保存到SD卡中，长时间运行可能出现日志文件过大的Bug
  + Android platform fixes the log will be saved to the SD card by default when running on the real machine, a bug that the log file may be too large may occur for a long time running
  + iOS平台 修复 录音对象（AudioRecorder）录制mp3格式音频设置 channels 参数值为 mono 不生效的Bug [详情](https://ask.dcloud.net.cn/question/85493)
  + iOS platform fixes the bug that the audio recording object (AudioRecorder) records mp3 format audio settings. The channels parameter value is mono and does not take effect. [Details](https://ask.dcloud.net.cn/question/85493)
  + iOS平台 修复 录音对象（AudioRecorder）设置音频播放模式 setSessionCategory 可能不生效的Bug
  + iOS platform fixes the bug that the audio recording object (AudioRecorder) setting the audio playback mode setSessionCategory may not take effect
  + iOS平台 修复 iOS13调用 plus.screen.setBrightness 方法可能会导致页面失去响应的Bug
  + iOS platform fixes the bug that calling the plus.screen.setBrightness method on iOS13 may cause the page to become unresponsive

#### 2.4.9.20191223-alpha
* 【uni-app】
  + App平台 修复 v3版本 uCharts 某些图表类型无法显示的Bug
  + App platform fixes the bug that some chart types cannot be displayed in uCharts version v3
  + App-Android平台 修复 HBuilderX2.4.8引出的 nvue list 组件的下拉刷新功能无法使用的Bug
  + App-Android platform fixes the bug that the pull-down refresh function of the nvue list component derived from HBuilderX2.4.8 cannot be used
  + App-Android平台 修复 tabBar 动态设置某一项的内容会导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)
  + App-Android platform fix the bug that dynamically setting a certain item of tabBar will cause the selected state to be invalid [details](https://ask.dcloud.net.cn/question/80941)

#### 2.4.8.20191220-alpha
* 【uni-app】
  + App平台 修复 v-for 中监听事件某些情况参数不正确的Bug
  + App platform fixes the bug that the parameters of monitoring events in v-for are incorrect in some cases
  + App平台 修复 uni.login 微信登录提示“没有这些scope权限”的Bug [详情](https://ask.dcloud.net.cn/question/85417)
  + App platform Fix the bug that uni.login WeChat login prompts "there are no scope permissions" [details](https://ask.dcloud.net.cn/question/85417)
  + App-Android平台 修复 nvue map 组件中标注点设置 translateMarker 旋转角度后，点气泡也会随之旋转的Bug [详情](https://ask.dcloud.net.cn/question/84676)
  + App-Android platform Fix the bug that the point bubble will also rotate after the translateMarker rotation angle is set for the label point in the nvue map component [details](https://ask.dcloud.net.cn/question/84676)
  + App-Android平台 修复 nvue 页面中使用 animation 动画，关闭页面可能会闪退的Bug [详情](https://ask.dcloud.net.cn/question/84902)
  + App-Android platform fixes the bug that using animation in the nvue page may crash after closing the page [details](https://ask.dcloud.net.cn/question/84902)
  + App-Android平台 优化 应用退出后不清掉后台，反复热启动导致底层通信timeout引起的白屏问题
  + App-Android platform optimization The background is not cleared after the application exits, and the white screen problem caused by the underlying communication timeout caused by repeated hot restarts
  + App-Android平台 修复 nvue scroll-view 组件中嵌套 list 组件，list高度大于scroll-view剩余高度时高度可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/85496)
  + App-Android platform fixes the bug that the list component nested in the nvue scroll-view component, the height of the list may be abnormal when the height is greater than the remaining height of the scroll-view [details](https://ask.dcloud.net.cn/question/ 85496)
  + App-iOS平台 新增 nvue 普通 view 组件支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617#view)
  + App-iOS platform added nvue ordinary view component to support setting Gaussian blur (frosted glass) effect [details](https://ask.dcloud.net.cn/article/36617#view)
  + H5平台 优化 发行时 index.css 文件名包含 hash 以便更好的控制缓存 [详情](https://ask.dcloud.net.cn/question/84990)
  + H5 platform optimization The index.css file name contains hash at the time of release to better control the cache [details](https://ask.dcloud.net.cn/question/84990)
  + H5平台 修复 tabBar 文字较多时角标（红点）错位的Bug [详情](https://ask.dcloud.net.cn/question/83293)
  + H5 platform Fix the bug that the corner mark (red dot) is misplaced when the tabBar has too many text [details](https://ask.dcloud.net.cn/question/83293)
  + H5平台 修复 textarea 组件未设置 line-height 时 linechange 事件 lineCount 值错误的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5 platform Fix the bug that the lineCount value of the linechange event is incorrect when the line-height is not set in the textarea component [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5平台 修复 swiper 组件动画过程中销毁组件会报错的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5 platform Fix the bug that the destruction of the component during the animation process of the swiper component will report an error [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5平台 修复 image 组件 src 包含英文括号时无法正常的Bug [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + H5 platform Fix the bug that the image component src cannot be normal when it contains English brackets [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + 支付宝小程序平台 修复 使用 createIntersectionObserver 报错的Bug
  + Alipay applet platform fixes the bug of using createIntersectionObserver to report errors
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 更新 高德地图SDK（7.1.0）
  + Android platform update AutoNavi Map SDK (7.1.0)
  + iOS平台 修复 应用切换到后台，从其它应用传参数激活到前台时 plus.runtime.arguments 可能不更新的Bug 
  + iOS platform fixes the bug that the plus.runtime.arguments may not be updated when the application is switched to the background and the parameters are activated from other applications to the foreground


#### 2.4.7.20191216-alpha
* 【uni-app】
  + 【重要】H5平台、QQ小程序 支持运行微信小程序组件 [详情](https://hellouniapp.dcloud.net.cn/pages/template/vant-button/vant-button)
  + 【Important】 H5 platform, QQ applet support running WeChat applet components [details](https://hellouniapp.dcloud.net.cn/pages/template/vant-button/vant-button)
  + 【重要】App平台 新增 pages.json 配置屏幕方向。横屏应用请在这里配置，app.vue里生效较晚 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【Important】 App platform added pages.json to configure screen orientation. For horizontal screen applications, please configure here, it takes effect later in app.vue [details](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App平台 优化 选择位置 支持在搜索结果中选择
  + App platform optimization Select location Support selection in search results
  + App平台 优化 picker 组件按钮文字增加多语言支持
  + App platform optimization picker component button text increase multi-language support
  + App平台 优化 v3版本 支持微信小程序组件
  + App platform optimization v3 version support WeChat applet components
  + App平台 修复 v3版本 uni.getBackgroundAudioManager 不触发 onTimeUpdate 回调的Bug
  + App platform fixes the bug that uni.getBackgroundAudioManager in v3 version does not trigger the onTimeUpdate callback
  + App平台 修复 v3版本 onTabItemTap 生命周期不触发的Bug
  + App platform fixes the bug that the life cycle of onTabItemTap is not triggered in the v3 version
  + App平台 修复 image 组件初始值为空字符串时会执行一次@error事件的Bug
  + App platform Fix the bug that the @error event will be executed once when the initial value of the image component is an empty string
  + App平台 修复 input 组件失焦时会触发一次@input的Bug [详情](https://ask.dcloud.net.cn/question/84456)
  + App platform Fix the bug that @input will be triggered once when the input component is out of focus [details](https://ask.dcloud.net.cn/question/84456)
  + App平台 修复 webview 组件在非沉浸式状态栏下高度不正确的Bug
  + App platform fix the bug that the height of the webview component under the non-immersive status bar is incorrect
  + App平台 修复 chooseImage 传入字符串格式 sizeType 导致报错的Bug
  + App platform Fix the bug that chooseImage incoming string format sizeType causes an error
  + App平台 修复 纯 nvue 环境 uni.request 数据格式错误的Bug [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App platform Fix the bug of uni.request data format error in pure nvue environment [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App平台 修复 nvue input 组件动态设置 password 属性不生效的Bug
  + App platform fixes the bug that the password attribute of the nvue input component dynamically set does not take effect
  + App-Android平台 新增 nvue 通用属性 elevation 设置组件的层级阴影，解决 box-shadow 样式在设置圆角或动画时显示不正常的问题 [详情](https://uniapp.dcloud.io/nvue-css?id=android-box-shadow)
  + App-Android platform adds the nvue general property elevation to set the level shadow of the component, and solve the problem that the box-shadow style is displayed abnormally when setting rounded corners or animation [details](https://uniapp.dcloud.io/nvue- css?id=android-box-shadow)
  + App-Android平台 修复 部分使用64位CPU的手机上可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android platform fixes the bug that white screen may appear on some phones with 64-bit CPU [details](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 nvue image 组件在部分手机上设置 fade-show 属性值为false可能仍然会闪烁的Bug 
  + App-Android platform fixes the bug that the nvue image component may still flicker when the fade-show attribute value is set to false on some phones
  + App-Android平台 修复 nvue swipe 组件设置 circular 属性值为true时从首页直接跳到最后一页可能出现页面无法正常渲染的Bug
  + App-Android platform fixes the bug that when the circular property value of the nvue swipe component is set to true, the page may not be rendered normally when jumping from the homepage to the last page
  + App-Android平台 修复 tabbar 的 midButton 不设置图片时显示默认图片的Bug [详情](https://ask.dcloud.net.cn/question/84908)
  + App-Android platform Fix the bug that the default picture is displayed when the midButton of the tabbar is not set to the picture [details](https://ask.dcloud.net.cn/question/84908)
  + 【重要】App-iOS平台 新增 uni.login 支持Apple登录 [详情](https://ask.dcloud.net.cn/article/36651)
  + 【Important】 App-iOS platform added uni.login to support Apple login [details](https://ask.dcloud.net.cn/article/36651)
  + App-iOS平台 修复 nvue input 组件设置 maxlength 属性后，@input事件返回value值与实际显示值不一致的Bug [详情](https://github.com/dcloudio/uni-app/issues/1073)
  + App-iOS platform Fix the bug that the value returned by the @input event is inconsistent with the actual displayed value after the maxlength attribute is set for the nvue input component [details](https://github.com/dcloudio/uni-app/issues/1073)
  + H5平台 新增 支持 editor 组件 [详情](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
  + Added support for the editor component on the H5 platform [details](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
  + H5平台 新增 支持使用 nodesRef.context 获取 VideoContext、CanvasContext 和 MapContext 对象
  + Added support for H5 platform to use nodesRef.context to get VideoContext, CanvasContext and MapContext objects
  + H5平台 修复 css 变量 --window-bottom 在全面屏设备不准确的Bug [详情](https://ask.dcloud.net.cn/question/83069)
  + H5 platform fix the bug of css variable --window-bottom inaccurate in full screen devices [details](https://ask.dcloud.net.cn/question/83069)
  + H5平台 修复 canvasContext.measureText 报错的Bug [详情](https://ask.dcloud.net.cn/question/84858)
  + H5 platform Fix the bug of canvasContext.measureText error [details](https://ask.dcloud.net.cn/question/84858)
  + H5平台 修复 uni.createAnimation 动画不正确的Bug [详情](https://ask.dcloud.net.cn/question/84862)
  + H5 platform fix the bug that uni.createAnimation animation is not correct [details](https://ask.dcloud.net.cn/question/84862)
  + H5平台 修复 webview 页面调用 uni API 无效的Bug [详情](https://ask.dcloud.net.cn/question/84977)
  + H5 platform fix the bug that the uni API call on the webview page is invalid [details](https://ask.dcloud.net.cn/question/84977)
  + hello uni-app 新增 canvas 组件示例(App端使用wxs实现高性能动画)
  + hello uni-app adds a new canvas component example (App side uses wxs to achieve high-performance animation)
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 修复 Webview窗口关闭后可能出现内存占用不释放的Bug [详情](https://ask.dcloud.net.cn/question/83587)
  + Android platform Fix the bug that the memory usage may not be released after the Webview window is closed [details](https://ask.dcloud.net.cn/question/83587)
  + 【重要】iOS平台 新增 支持苹果授权登录（Sign in with Apple） [教程](https://ask.dcloud.net.cn/article/36651)
  + 【Important】 iOS platform is newly added to support Apple authorized login (Sign in with Apple) [Tutorial](https://ask.dcloud.net.cn/article/36651)
  + iOS平台 修复 音频播放对象（AudioPlayer）播放网络音频时，缓存完成恢复播放时没有触发 onPlay 事件的Bug
  + iOS platform fixes the bug that the onPlay event is not triggered when the audio player (AudioPlayer) is playing network audio, the onPlay event is not triggered when the buffer is completed and the playback is resumed
  + iOS平台 修复 Webview窗口的titleUpdate事件可能不触发导致无法修改页面标题的Bug [详情](https://ask.dcloud.net.cn/question/84115)
  + iOS platform Fix the bug that the titleUpdate event of the Webview window may not be triggered and the page title cannot be modified [details](https://ask.dcloud.net.cn/question/84115)
  + iOS平台 修复 Webview窗口的标题栏（titleNView）设置titleSize属性不生效的Bug
  + iOS platform fix the bug that the title bar (titleNView) of the Webview window does not take effect when the titleSize property is set
  + iOS平台 修复 系统日期选择框（plus.nativeUI.pickDate）、时间选择框（plus.nativeUI.pickTime）在横屏时显示不正常的Bug
  + iOS platform Fixed the bug that the system date selection box (plus.nativeUI.pickDate) and time selection box (plus.nativeUI.pickTime) were displayed abnormally in landscape mode


#### 2.4.4.20191129-alpha
* 【uni-app】
  + App平台 优化 选择位置，全新UI、新增参数 latitude、longitude，一键到达当前位置
+ App platform optimization Select location, new UI, new parameters latitude, longitude, one-click to reach the current location
  + App平台 修复 真机运行指定页面为首页时白屏的Bug
  + App platform fixes the bug of the white screen when the specified page is the homepage when running on the real machine
  + App平台 修复 v3版本 webview 组件返回不正确的Bug
  + App platform fixes the bug that the webview component of v3 version returns incorrectly
  + App平台 修复 v3版本 uni.request header 属性 Content-Type=application/x-www-form-urlencoded 时请求异常的Bug
  + App platform Fix the bug of request exception when uni.request header property Content-Type=application/x-www-form-urlencoded in v3 version
  + App平台 修复 v3版本 隐藏原生导航栏的 tabBar 页面状态栏颜色不正确的Bug
  + App platform fixes the bug of the incorrect color of the status bar on the tabBar that hides the native navigation bar in the v3 version
  + App平台 修复 weex 编译模式 uni.scanCode 打开扫码页面空白的Bug [详情](https://ask.dcloud.net.cn/question/83820)
  + App platform Fix weex compilation mode uni.scanCode open the bug that the scan code page is blank [details](https://ask.dcloud.net.cn/question/83820)
  + App平台 修复 nvue 页面导航栏 titleNView 的 type 属性设置为 transparent 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/66907)
  + App platform Fix the bug that does not take effect when the type attribute of titleNView in the navigation bar of nvue page is set to transparent [details](https://ask.dcloud.net.cn/question/66907)
  + App-Android平台 修复 首页为 nvue 时反复启动应用后可能出现假死状态的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android platform fixes the bug that may appear suspended animation after repeatedly launching the app when the homepage is nvue [details](https://ask.dcloud.net.cn/question/83611)
  + App-iOS平台 新增 tabbar 支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617)
  + App-iOS platform added tabbar support to set Gaussian blur (frosted glass) effect [details](https://ask.dcloud.net.cn/article/36617)
  + App-iOS平台 修复 网络请求 uni.request 设置请求的 header 中存在非字符串值可能会引起崩溃的Bug
  + App-iOS platform fixes a bug where a non-string value in the header of the network request uni.request setting request may cause a crash
  + H5平台 新增 uni.chooseImage 、uni.chooseVideo 支持返回文件名
  + H5 platform added uni.chooseImage and uni.chooseVideo to support returning file names
  + H5平台 新增 支持使用 uni.loadFontFace 加载字体
  + H5 platform added support for loading fonts using uni.loadFontFace
* 【5+App插件】
* 【5+App plug-in】
  + iOS平台 修复 苹果应用内支付IAP恢复购买接口（restoreComplateRequest）有可能不会返回恢复购买凭证的Bug
  + iOS platform fixes the bug that Apple's in-app payment IAP restore purchase interface (restoreComplateRequest) may not return the restore purchase certificate
  + iOS平台 修复 预览图片（previewImage）可能无法正常显示部分网络地址图片的Bug [详情](https://ask.dcloud.net.cn/question/83542)
  + iOS platform fixes the bug that the preview image (previewImage) may not display part of the network address image normally [details](https://ask.dcloud.net.cn/question/83542)


#### 2.4.3.20191125-alpha
* 【uni-app】
  + 【重要】App端重大架构升级 “v3编译器”，更快的启动速度、更好的性能、更多vue语法支持、可webview调试视图层。可通过设置`manifest.json`文件中`app-plus`节点下的`compilerVersion:3 `启用新架构 [详情](https://ask.dcloud.net.cn/article/36599)
  + 【Important】 App-side major architecture upgrade "v3 compiler", faster startup speed, better performance, more vue syntax support, and webview debugging view layer. The new architecture can be enabled by setting the `compilerVersion: 3` under the `app-plus` node in the `manifest.json` file [details](https://ask.dcloud.net.cn/article/36599)
  + 新增 支持在页面文件调用 `App.vue` 中定义的函数方法 [#665](https://github.com/dcloudio/uni-app/issues/665)
  + Added support for calling functions defined in `App.vue` in page files [#665](https://github.com/dcloudio/uni-app/issues/665)
  + 修复 发行模式下使用 scss ，部分情况条件编译不生效的 Bug [1013](https://github.com/dcloudio/uni-app/issues/1013)
  + Fix the bug that conditional compilation does not take effect when scss is used in release mode [1013](https://github.com/dcloudio/uni-app/issues/1013)
  + 优化 `babel.config.js` 文件里的 `@vue/babel-preset-app` 支持配置 `modules:false` ，让打包出来的代码体积更小，运行更快 [#929](https://github.com/dcloudio/uni-app/issues/929)
  + Optimize the `@vue/babel-preset-app` in the `babel.config.js` file to support the configuration of `modules:false` to make the packaged code smaller and run faster [#929](https:/ /github.com/dcloudio/uni-app/issues/929)
  + App平台 新增 uni-app编译模式的nvue页面 控制是否自动包裹 scroll 组件（通过 pages.json 里 style 的 `disableScroll` 属性配置页面) [详见](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App platform newly added uni-app compilation mode nvue page to control whether to automatically wrap the scroll component (through the `disableScroll` property configuration page of style in pages.json) [see details](https://uniapp.dcloud.io/collocation /pages?id=style)
  + App平台 新增 uni-app编译模式的nvue页面 webview 组件加载的HTML支持调用部分uni API [详情](https://ask.dcloud.net.cn/question/83399)
  + App platform New uni-app compilation mode nvue page webview component loaded HTML supports calling part of uni API [details](https://ask.dcloud.net.cn/question/83399)
  + App平台 修复 nvue 页面中 picker 组件多次打开后无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/83417)
  + App platform Fix the bug that the picker component on the nvue page cannot be closed after being opened multiple times [details](https://ask.dcloud.net.cn/question/83417)
  + App-Android平台 优化 应用退出后不清掉后台，再热启动可能出现白屏的问题 [详情](https://ask.dcloud.net.cn/question/77397)
  + Optimized for App-Android platform. After the application is exited, the background is not cleared, and the white screen may appear after the hot restart. [Details](https://ask.dcloud.net.cn/question/77397)
  + App-Android平台 修复 应用在 tabbar 页面跳转到其它页面在Android10上可能出现图片闪烁的Bug
  + App-Android platform fixes the bug that pictures may flicker when the app jumps to other pages on the tabbar page on Android10
  + App-Android平台 修复 nvue scroll-view 组件无法触发 touchstart/touchend 事件及动态设置 scroll-left 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/83256)
  + App-Android platform fixes the bug that the nvue scroll-view component cannot trigger touchstart/touchend events and the dynamic setting of the scroll-left property may not take effect [details](https://ask.dcloud.net.cn/question/83256)
  + App-Android平台 修复 nvue input 组件设置 autofocus 属性为 true 在subnvue页面可能出现软键盘弹出后自动隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83014)
  + App-Android platform Fix the bug that the autofocus attribute of the nvue input component is set to true and the soft keyboard pops up on the subnvue page may be automatically hidden [details](https://ask.dcloud.net.cn/question/83014)
  + App-Android平台 修复 nvue map 组件下的view子节点不显示的Bug [详情](https://ask.dcloud.net.cn/question/83719)
  + App-Android platform Fix the bug that the view sub-nodes under the nvue map component are not displayed [details](https://ask.dcloud.net.cn/question/83719)
  + App-Android平台 修复 nvue live-pusher 组件推流成功后拉流可能显示绿屏或卡在首帧的Bug [详情](https://ask.dcloud.net.cn/question/83198)
  + App-Android platform fixes the bug that the nvue live-pusher component may display a green screen or get stuck in the first frame after the stream is successfully pushed [details](https://ask.dcloud.net.cn/question/83198)
  + App-iOS平台 修复 nvue view 组件设置 border 属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/83206)
  + App-iOS platform Fix the bug that setting border property of nvue view component may cause app crash [details](https://ask.dcloud.net.cn/question/83206)
  + App-iOS平台 修复 iOS 13 系统中 textarea 输入的内容，比 placeholder 偏左一点的Bug [详情](https://ask.dcloud.net.cn/question/83373)
  + App-iOS platform Fix the bug that the content entered in the textarea in the iOS 13 system is a bit to the left than the placeholder [details](https://ask.dcloud.net.cn/question/83373)
  + App-iOS平台 修复 faceID 识别成功时不能正确触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/83068)
  + App-iOS platform Fix the bug that the success callback cannot be triggered correctly when faceID recognition is successful [details](https://ask.dcloud.net.cn/question/83068)
  + H5平台 修复 webview 组件 加载的HTML中调用 uni.getEnv 错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/1011)
  + H5 platform fix the bug of calling uni.getEnv in the loaded HTML of the webview component [details](https://github.com/dcloudio/uni-app/issues/1011)
  + H5平台 修复 h5 平台组件的自定义事件无法接收多个参数的Bug [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5 platform Fix the bug that custom events of h5 platform components cannot receive multiple parameters [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5平台 修复 在企业微信中 uni.chooseImage 无法使用的Bug [详情](https://github.com/dcloudio/uni-app/issues/82872)
  + H5 platform fixes the bug that uni.chooseImage cannot be used in enterprise WeChat [details](https://github.com/dcloudio/uni-app/issues/82872)
  + 小程序平台 修复 不能直接在模版内使用 $emit 的 Bug [详情](https://ask.dcloud.net.cn/question/82865)
  + Mini Program Platform Fix the bug that you cannot use $emit directly in the template [details](https://ask.dcloud.net.cn/question/82865)
  + 微信小程序平台 修复在发行模式使用 lodash@4.17.15 ，运行报错的 Bug[#994](https://github.com/dcloudio/uni-app/issues/994)
  + WeChat applet platform Fix the bug that reported errors when using lodash@4.17.15 in release mode[#994](https://github.com/dcloudio/uni-app/issues/994)
  + 支付宝小程序平台 修复 for 循环中 ref 生成的多个组件数组长度不准确的Bug [#930](https://github.com/dcloudio/uni-app/issues/930)
  + Alipay applet platform fix the bug that the length of multiple component arrays generated by ref in the for loop is inaccurate [#930](https://github.com/dcloudio/uni-app/issues/930)
  + 字节跳动小程序平台 修复 当 rpx 后跟着 !important 时，发行模式下 rpx 未被编译成px的Bug [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + Byte Beat Mini Program Platform Fix the bug that rpx is not compiled into px in release mode when rpx is followed by !important [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + 百度小程序平台 修复 页面 onShow 只能触发一次的Bug
  + Baidu applet platform fixes the bug that onShow page can only be triggered once
  + uni-ui 新增 uni-transition 过渡动画组件
  + uni-ui adds uni-transition transition animation component
  + uni-ui 新增 uni-fab 悬浮按钮支持nvue
  + uni-ui added uni-fab floating button to support nvue
  + uni-ui 修复 uni-calendar 动态获取 selected 属性就会导致切换不了月份的Bug
  + uni-ui fixes the bug that uni-calendar dynamically obtains the selected attribute, which will cause the month to not be switched
  + uni-ui 修复 uni-calendar H5 端选择月份按钮不能点击的Bug
  + uni-ui fixes the bug that the month selection button on uni-calendar H5 cannot be clicked
  + uni-ui 优化 uni-calendar 切换月份必选中每月1号的Bug
  + uni-ui optimization uni-calendar change month must select the bug on the 1st of each month
  + uni-ui 优化 uni-calendar 视图样式,优化逻辑代码实现,使性能更好
  + uni-ui optimizes uni-calendar view style, optimizes logic code implementation, and makes performance better
  + uni-ui 优化 uni-calendar 切换月份返回事件
  + uni-ui optimization uni-calendar switch month return event
  + uni-ui 修复 uni-grid 正方形宫格显示不正确的Bug
  + uni-ui fix the bug that uni-grid square grid is not displayed correctly
  + uni-ui 修复 uni-grid 动态数据不渲染的Bug
  + uni-ui fixes the bug that uni-grid dynamic data is not rendered
  + uni-ui 优化 uni-grid 用户可自定义宫格内容，如添加角标、红点、修改背景色等
  + uni-ui optimization uni-grid users can customize grid content, such as adding corner marks, red dots, modifying background colors, etc.
  + uni-ui 优化 uni-load-more 支持调整图标大小
  + uni-ui optimization uni-load-more supports resizing icons
  + uni-ui 修复 uni-popup 点击蒙版关闭后，再次打开弹框失败的Bug
  + uni-ui fixes the bug that uni-popup failed to open the popup again after clicking the mask to close it
  + uni-ui 修复 uni-popup type 属性为静态值时导致弹出层错误的Bug
  + uni-ui Fix the bug that caused the popup layer error when the uni-popup type attribute is a static value
  + uni-ui 优化 uni-popup 弹出层动画，使动画更流畅
  + uni-ui optimized uni-popup pop-up layer animation to make the animation smoother
  + uni-ui 修复 uni-swipe-action autoClose 属性开启状态下滑动不正常的Bug
  + uni-ui fixes the bug that the uni-swipe-action autoClose attribute does not slide normally when the autoClose attribute is turned on
  + uni-ui 优化 uni-swipe-action 组件间联动效果更流畅
  + uni-ui optimization uni-swipe-action has smoother linkage effect between components
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 优化 启动时申请手机存储权限，若用户拒绝则会弹出说明文字。满足部分应用商店要求的权限申请需申明的要求 [详情](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Optimized for Android platform, apply for mobile phone storage permission when starting, if the user refuses, an explanatory text will pop up. Satisfy the requirements of certain application store requirements to be declared [details](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Android平台 修复 Webview窗口设置drag滑屏操作手势，快速滑动操作可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/82668)
  + Android platform Fix the bug of setting drag sliding operation gestures in Webview window, fast sliding operation may cause white screen [details](https://ask.dcloud.net.cn/question/82668)
  + Android平台 修复 视频播放控件（VideoPlayer）可能无法播放某些本地视频文件的Bug
  + Android platform fixes the bug that the video player control (VideoPlayer) may not be able to play some local video files
  + Andrpid平台 修复 数据库执行SQL语句（plus.sqlite.executeSql）传入错误sql语句时，可能在控制台输出错误日志且不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/83203)
  + Andrpid platform fixes the bug that when the database executes the SQL statement (plus.sqlite.executeSql) and the error SQL statement is passed in, the error log may be output on the console and the error callback is not triggered. [Details](https://ask.dcloud.net. cn/question/83203)
  + iOS平台 新增 Webview窗口原生标题栏样式属性 blurEffect，支持模糊毛玻璃）效果 [详情](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS platform added the original title bar style attribute blurEffect of the Webview window, which supports fuzzy frosted glass) effect [details](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS平台 补齐 直播推流（LivePusher）控件支持设置最小码率（min-bitrate）和最大码率（max-bitrate）
  + iOS platform Completion The LivePusher control supports setting the minimum bitrate (min-bitrate) and the maximum bitrate (max-bitrate)
  + iOS平台 修复 Webview窗口原生标题栏的搜索框（searchInput）获取焦点会导致placeholder文字移位的Bug [详情](https://ask.dcloud.net.cn/question/83027)
  + iOS platform Fix the bug that the focus of the search box (searchInput) of the native title bar of the Webview window will cause the placeholder text to shift [details](https://ask.dcloud.net.cn/question/83027)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能出现长图片不能滚动的Bug [详情](https://ask.dcloud.net.cn/question/82455)
  + iOS platform fixes the bug that the picture preview (plus.nativeUI.previewImage) may not scroll the long picture [details](https://ask.dcloud.net.cn/question/82455)
  + iOS平台 修复 使用UniPush或个推推送在后台统计数据中没有展示数和点击数的Bug [详情](https://ask.dcloud.net.cn/question/83292)
  + iOS platform Fix the bug that there is no impression and click count in the background statistics using UniPush or push push [details](https://ask.dcloud.net.cn/question/83292)
  + iOS平台 修复 用户拒绝访问相机后，调用摄像头拍照或录像时不会触发错误回调的Bug
  + iOS platform fixes the bug that after the user denies access to the camera, the error callback will not be triggered when the camera is called to take photos or record videos
  + iOS平台 修复 配置使用高德或百度地图后，定位默认没有使用gcj02坐标的Bug
  + iOS platform fixes the bug that the positioning does not use gcj02 coordinates by default after using AutoNavi or Baidu map
  + iOS平台 修复 系统日期（plus.nativeUI.pickDate）、时间（plus.nativeUI.pickTime）选择框与系统提示框遮罩颜色不一致的Bug
  + iOS platform Fix the bug that the color of the system date (plus.nativeUI.pickDate) and time (plus.nativeUI.pickTime) is inconsistent with the mask color of the system prompt box
* 【mui】
  + iOS平台 wkwebview下，plusready未触发时调用mui.ajax，在控制台输出正确的告警提醒
  + Under wkwebview on iOS platform, mui.ajax is called when plusready is not triggered, and the correct alarm reminder is output on the console


#### 2.4.2.20191115-alpha
* 【uni-app】
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，picker 组件文字超出无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83048)
  + APP platform fixes the bug that the text of the picker component exceeds and cannot be hidden when the configuration item of `nvueCompiler` in `manifest.json` is not `weex` [details](https://ask.dcloud.net.cn/question/83048)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.scanCode 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82984)
  + APP platform fixes the bug that uni.scanCode interface cannot be called back when the configuration item of `nvueCompiler` in `manifest.json` is not `weex` [details](https://ask.dcloud.net.cn/question/82984)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.chooseLocation 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82988)
  + APP platform fixes the bug that uni.chooseLocation interface cannot be called back when the configuration item of `nvueCompiler` in `manifest.json` is not `weex` [details](https://ask.dcloud.net.cn/question/82988)
  + App-Android平台 修复 nvue barcode 组件设置 autostart 为true时在部分设备可能出现黑屏的Bug
  + App-Android platform fixes the bug that a black screen may appear on some devices when the autostart of the nvue barcode component is set to true
  + App-iOS平台 修复 纯nvue项目 侧滑关闭后无法触发上个页面生命周期 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/81830)
  + App-iOS platform fixes the bug that the last page life cycle onShow cannot be triggered after the sideslip is closed for the pure nvue project [details](https://ask.dcloud.net.cn/question/81830)
  + H5平台 修复 uni.getImageInfo 回调信息中 path 错误的Bug [详情](https://ask.dcloud.net.cn/question/82793)
  + H5 platform Fix the bug of path error in uni.getImageInfo callback information [details](https://ask.dcloud.net.cn/question/82793)
  + H5平台 修复 路由后退时弹出的 picker 无法自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/82684)
  + H5 platform fixed the bug that the picker that pops up when the route is backed cannot be closed automatically [details](https://ask.dcloud.net.cn/question/82684)
  + H5平台 修复 在夸克浏览器（iOS）onReachBottom 生命周期只触发一次的Bug [详情](https://ask.dcloud.net.cn/question/67636)
  + H5 platform fixes the bug that onReachBottom is only triggered once in the life cycle of Quark browser (iOS) [details](https://ask.dcloud.net.cn/question/67636)
  + H5平台 修复 在手机QQ浏览器 onReachBottom 无法触发的Bug [详情](https://ask.dcloud.net.cn/question/82795)
  + H5 platform fixed the bug that onReachBottom could not be triggered in the mobile QQ browser [details](https://ask.dcloud.net.cn/question/82795)
  + H5平台 修复 在网络断开的情况下 SocketTask.send 回调不正确的Bug [#744](https://github.com/dcloudio/uni-app/issues/744)
  + H5 platform fixes the bug that the SocketTask.send callback is incorrect when the network is disconnected [#744](https://github.com/dcloudio/uni-app/issues/744)
  + 微信小程序 调整微信基础库版本为2.9.2，解决微信2.9.3基础库input事件不触发的Bug [详情](https://developers.weixin.qq.com/community/develop/doc/000a067cd0c6102d0d79558e65bc00?highLine=bindinput)
  + WeChat applet adjusts the WeChat basic library version to 2.9.2, and solves the bug that the input event of the WeChat 2.9.3 basic library does not trigger [details](https://developers.weixin.qq.com/community/develop/doc/000a067cd0c6102d0d79558e65bc00 ?highLine=bindinput)
  + 钉钉小程序 修复 多层组件嵌套的情况下，子组件生命周期不触发的Bug
  + Dingding applet fixes the bug that the life cycle of sub-components is not triggered in the case of multi-layer component nesting
  + 百度小程序 修复 onShow在onLoad之前触发的Bug [详情](https://ask.dcloud.net.cn/question/82822)
  + Baidu Mini Program Fix the bug triggered by onShow before onLoad [details](https://ask.dcloud.net.cn/question/82822)
* 【5+App插件】
* 【5+App plug-in】
  + iOS平台 修复 创建本地消息（plus.push.createMessage）在iOS10及以上系统只显示最后一条的Bug [详情](https://ask.dcloud.net.cn/question/82560)
  + iOS platform fixes the bug of creating a local message (plus.push.createMessage) in iOS10 and above, only showing the last one [details](https://ask.dcloud.net.cn/question/82560)



#### 2.4.1.20191114-alpha
* 【uni-app】
  + App-iOS平台 修复 picker 组件 range 数据量较大时无法打开的Bug
  + App-iOS platform fixes the bug that the picker component range cannot be opened when the data volume is large

#### 2.4.0.20191112-alpha
* 【uni-app】
  + 【重要】nvue文件编译模式默认从 weex 模式修改为 uni-app 模式。推荐使用多端可用、更成熟、组件更丰富的 uni-app 模式。如仍需使用 weex 模式，需在manifest中手动配置
  + 【Important】 The compilation mode of nvue files is changed from weex mode to uni-app mode by default. It is recommended to use the uni-app mode that is more available, more mature, and richer in components. If you still need to use weex mode, you need to manually configure it in the manifest
  + 【重要】uni ui 新版正式发布，同时兼容vue和nvue。欢迎插件市场作者也升级自己的组件，同时兼容nvue [详情](https://uniapp.dcloud.io/component/README?id=uniui)
  + 【Important】 The new version of uni ui is officially released, compatible with both vue and nvue. Authors of the plug-in market are welcome to upgrade their own components and be compatible with nvue [details](https://uniapp.dcloud.io/component/README?id=uniui)
  + 【重要】自定义组件模式新增 crypto.getRandomValues 方法，获取符合密码学要求的安全随机值
  + 【Important】 The crypto.getRandomValues ​​method is added to the custom component mode to obtain secure random values ​​that meet the requirements of cryptography
  + H5平台 修复 wxs getDataset() 函数获取不到参数的Bug。uni ui 的 swiperaction 组件的问题也因此得到修复 [详情](https://ask.dcloud.net.cn/question/82718)
  + H5 platform fixed the bug that the wxs getDataset() function could not get the parameters. The problem of uni ui's swiperaction component has also been fixed [details](https://ask.dcloud.net.cn/question/82718)
  + APP平台 新增 nvue picker 组件支持多列
  + APP platform added nvue picker component to support multiple columns
  + APP平台 优化 picker、扫码、选择位置、打开位置API的界面通过原生实现，提升性能体验（nvue为weex编译模式时未优化）
  + APP platform optimization The interface of picker, scan code, select location, open location API is implemented natively to improve performance experience (not optimized when nvue is in weex compilation mode)
  + APP平台 修复 swiper 设置为autoplay时滑动导致速度加快的BUG [详情](https://ask.dcloud.net.cn/question/82431)
  + APP platform fixes the bug that the speed is accelerated by sliding when swiper is set to autoplay [details](https://ask.dcloud.net.cn/question/82431)
  + App-iOS平台 修复 nvue页面在iOS13及以上系统默认字体不对的Bug
  + App-iOS platform fixed the bug that the default font of the nvue page on iOS13 and above is incorrect
  + App-iOS平台 修复 nvue list 组件 scroll 事件返回的 isDragging 属性不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/932)
  + App-iOS platform Fix the bug that the isDragging attribute returned by the scroll event of the nvue list component is incorrect [details](https://github.com/dcloudio/uni-app/issues/932)
  + App-iOS平台 修复 nvue swiper 组件动态修改 current 属性触发 transition 事件返回的参数不准确的Bug
  + App-iOS platform fixes the bug that the nvue swiper component dynamically modifies the current property to trigger the transition event and the parameters returned are inaccurate
  + 百度小程序平台 修复 新版百度小程序生命周期下组件内mounted不触发的BUG
  + Baidu applet platform fixes the bug that the mounted component does not trigger under the new version of Baidu applet life cycle
  + uni ui 优化 uni-swipe-action 组件在nvue中使用 BindingX ，使跟手动画更流畅
  + uni ui optimization uni-swipe-action component uses BindingX in nvue to make the hand animation smoother
  + uni ui 优化 uni-list 组件在nvue中使用原生list组件，提升性能
  + uni ui optimization uni-list components use native list components in nvue to improve performance
  + 新闻模板 优化 顶部tab栏目增加下滑横线（支持app-nvue、app-vue、h5、微信小程序、qq小程序，其他端暂无下滑横线）
  + News template optimization Add a horizontal line on the top tab column (app-nvue, app-vue, h5, WeChat applet, qq applet are supported, and there is no horizontal line on other ends)
* 【5+App插件】
* 【5+App plug-in】
  + Android平台 新增 获取移动智能设备标识公共服务平台提供的匿名设备标识符[OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)、开发者匿名设备标识符VAID、及应用匿名设备标识符AAID，可用于解决Android10无法获取设备标识（如IMEI、IMSI、Wi-Fi MAC地址等）的问题
  + The Android platform adds an anonymous device identifier [OAID] (https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID) provided by the public service platform for obtaining mobile smart device identification, developers The anonymous device identifier VAID and the application anonymous device identifier AAID can be used to solve the problem that Android 10 cannot obtain the device identification (such as IMEI, IMSI, Wi-Fi MAC address, etc.)
  + Android平台 修复 创建视频播放控件（VideoPlayer）时，没有开始播放视频也会停止后台背景音频的Bug [详情](https://ask.dcloud.net.cn/question/82034)
  + Android platform fixes the bug that the background audio will be stopped when the video player control (VideoPlayer) is created [details](https://ask.dcloud.net.cn/question/82034)
  + Android平台 优化 视频播放的操作条的拖动误触和图标美化问题
  + Optimized the Android platform, the dragging error of the operation bar of video playback and the beautification of icons
  + iOS平台 修复 平台绝对路径转换成本地URL路径（plus.io.convertAbsoluteFileSystem）可能返回null的Bug [详情](https://ask.dcloud.net.cn/question/51954)
  + iOS platform fixed the bug that the platform absolute path conversion to the local URL path (plus.io.convertAbsoluteFileSystem) may return null [details](https://ask.dcloud.net.cn/question/51954)
 