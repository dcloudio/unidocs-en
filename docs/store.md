## 国内应用市场上架
## On the domestic application market

最近为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，各大应用市场都加强应用审核的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。
Recently, in order to effectively control the phenomenon of compulsory authorization of apps, excessive claims, and the collection of personal information beyond the scope, the requirements of the Cybersecurity Law and the Consumer Rights Protection Law have been implemented to protect personal information security, and all major application markets have strengthened application audits. For detection, the application must comply with relevant policies, otherwise the application will risk being notified or removed.

**应用市场上架审核合规指南：**[https://ask.dcloud.net.cn/article/39073](https://ask.dcloud.net.cn/article/39073)
**App market launch review compliance guide:**[https://ask.dcloud.net.cn/article/39073](https://ask.dcloud.net.cn/article/39073)

## Google Play上架
## Available on Google Play

首先App提交云端打包时请务必勾选“GooglePlay”渠道：
First, when submitting the App for cloud packaging, be sure to check the "GooglePlay" channel:
![](https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/uni-app/doc/channel-google.png)

Google Play上架审核要求比较严格，需要注意以下问题：
The Google Play listing review requirements are relatively strict, and the following issues need to be paid attention to:
- 应用中不能存在下载/安装apk的行为，不要勾选android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES权限‘
- Download/install apk cannot exist in the application, do not check android.permission.INSTALL_PACKAGES, android.permission.REQUEST_INSTALL_PACKAGES permissions’
- 应用中的任何功能都不能引导用户下载其它应用，以下模块不能使用：
- No function in the application can guide users to download other applications, and the following modules cannot be used:
  + QQ登录、QQ分享：手机没有安装QQ应用时，会引导用户安装
  + QQ login, QQ sharing: when the mobile phone does not have QQ application installed, the user will be guided to install it
  + uni-AD 增强广告SDK：广告中存在下载安装其它三方应用的行为。**uni-AD 广告基础功能不受影响**
  + uni-AD Enhanced Advertising SDK: There is the behavior of downloading and installing other third-party apps in the advertisement. **The basic functions of uni-AD advertising are not affected**
- 应用中不能使用动态加载代码，因此无法配置使用X5内核，详情：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)
- Dynamic loading code cannot be used in the application, so the X5 kernel cannot be configured. Details: [https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/ 36806)

**应用必须适配Android11，设置targetSdkVersion大于等于30：**[https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193#targetsdkversion)
**The application must be compatible with Android11, and set targetSdkVersion to be greater than or equal to 30:**[https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193# targetsdkversion)
**上传安装包使用Android App Bundle（AAB）格式：**[https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)
**Upload the installation package using the Android App Bundle (AAB) format:**[https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)

## App Store上架
## Available on the App Store

>再次说明：uni-app并不是简单的使用Webview套壳，Webview仅负责vue页面的UI渲染，nvue页面则完全由原生UI渲染，业务逻辑代码是运行在独立的JS引擎（JSCore）中，并且封装了很多JS API调用原生能力（OC代码实现），完全可以上架苹果应用市场。
>Note again: uni-app is not simply a Webview shell. Webview is only responsible for the UI rendering of the vue page. The nvue page is completely rendered by the native UI. The business logic code is run in an independent JS engine (JSCore), and It encapsulates a lot of JS API call native capabilities (OC code implementation), which can be put on the Apple application market.

苹果App Store上架审核规范比较细，提交审核前建议仔细阅读苹果官方[App Store审核指南](https://developer.apple.com/cn/app-store/review/guidelines/)。
Apple’s App Store review specifications are relatively detailed. It is recommended to read Apple’s official [App Store Review Guidelines](https://developer.apple.com/cn/app-store/review/guidelines/) before submitting for review.

需要注意以下问题：
Need to pay attention to the following issues:
- 应用功能不能过于简单
- Application functions cannot be too simple
- 应用功能不能跟已经上架的应用相似，就是不能做马甲包
- The application function cannot be similar to the application already on the shelf, just can’t make a vest bag

**使用广告标识（IDFA）相关说明：**[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
**Instructions for using IDFA:**[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
**UIWebview API 已废弃：**[https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)
**UIWebview API is obsolete:**[https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)
