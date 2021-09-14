## 背景
## background

为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，2019年1月，中央网信办、工信部、公安部、市场监管总局等四部委发布了《关于开展App违法违规收集使用个人信息专项治理的公告》，在全国范围组织开展App违法违规收集使用个人信息专项治理，并陆续出台完善了《App违法违规收集使用个人信息行为认定方法》、《GB/T 35273-2020 信息安全技术 个人信息安全规范》等标准规范。
In order to effectively control the phenomenon of compulsory authorization of apps, excessive claims, and the collection of personal information beyond the scope, implement the requirements of the Cybersecurity Law and the Consumer Rights Protection Law to ensure the safety of personal information. In January 2019, the Central Cyberspace Administration of China, Four ministries including the Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Supervision issued the "Announcement on the Special Governance of the Collection and Use of Personal Information in Violations of App Laws", organized a nationwide special control of the collection and use of personal information in violations of App laws and regulations, and successively introduced and improved the "Announcement" Standards and regulations such as the Identification Method for the Collection and Use of Personal Information in Violations of Laws and Regulations by App, and GB/T 35273-2020 Information Security Technology Personal Information Security Specification.

根据以上规范要求，各大应用市场都加强应用的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。
According to the above specifications, all major application markets have strengthened application testing, requiring applications to comply with relevant policies, otherwise the application will risk being notified or removed from the shelves.

目前开发者最常碰到的以下问题：
The following problems most frequently encountered by developers at present:
- 违规收集个人信息
- Collection of personal information in violation of regulations
- 强制、频繁、过度索取权限
- Mandatory, frequent, and excessive requests for permissions

针对以上问题，请参考下文的解决方案，务必仔细阅读，注意各细节问题。
For the above problems, please refer to the solutions below, be sure to read them carefully and pay attention to the details.

**`首先碰到此问题请更新到HbuilderX3.1.22及以上版本`**
**`If you encounter this problem first, please update to HbuilderX3.1.22 and above`**

## 如何解决"违规收集个人信息"问题
## How to solve the problem of "collecting personal information in violation of regulations"
关于收集个人信息问题，首先应用必须配置“隐私与政策”协议框，其次必须在“隐私与政策”非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围，用户个人信息包括但不限于mac地址、设备序列号、imei、imsi、软件安装列表、通讯录信息、短信信息等。
Regarding the collection of personal information, the application must first configure the "Privacy and Policy" protocol box, and secondly, it must be very clearly and comprehensively explained in the "Privacy and Policy" (do not use vague and unclear words such as the possibility of collecting and understanding user information). The purpose, method and scope of the user’s personal information. The user’s personal information includes but is not limited to mac address, device serial number, imei, imsi, software installation list, address book information, short message information, etc.

## **注意：根据政策要求隐私提示框显示之前不能调用涉及个人信息相关API（如设备标识），因此需要更新到HBuilderX3.1.22及以上版本重新提交云端打包**
## **Note: According to the policy, the API related to personal information (such as device identification) cannot be called before the privacy prompt box is displayed, so you need to update to HBuilderX3.1.22 and above to resubmit the cloud packaging**

### 第一步：配置隐私与政策提示框
### Step 1: Configure the privacy and policy prompt box

必须确保应用存在《隐私政策》，在应用首次启动时弹出提示并取得用户同意。
It must be ensured that the application has a "Privacy Policy", a prompt will pop up when the application is launched for the first time, and the user's consent must be obtained.

## **注意：一定要配置使用`template`模式隐私与政策提示框，详情参考[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)**
## **Note: Be sure to configure the privacy and policy prompt box in `template` mode. For details, please refer to [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net. cn/article/36937)**

### 第二步：在隐私政策中添加DCloud相关条款
### Step 2: Add DCloud related terms in the privacy policy

请在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，添加如下参考条款：
Please inform users in the "Privacy Policy" that your application is developed based on DCloud uni-app (5+ App/Wap2App), and add the following reference terms:

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`
`Our product is developed based on DCloud uni-app (5+ App/Wap2App). During the application operation, you need to collect your device's unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information) to provide statistical analysis services, And through application startup data and abnormal error log analysis to improve performance and user experience, to provide users with better services. `

### 第三步：在隐私政策中添加其它三方SDK的条款
### Step 3: Add the terms of other third-party SDKs to the privacy policy

#### uni-app默认集成三方SDK
#### uni-app integrates third party SDK by default

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|官网链接|
|SDK name|SDK package name|SDK purpose|Type of personal information that may be obtained|Access to device authority|Official website link|
|:----|:----|:----|:----|:----|:----
|阿里weexSDK|com.taobao|uni-app基础模块默认集成，用于渲染uniapp的nvue页面引擎|存储的个人文件|读取外置存储器、写入外置存储器|[http://doc.weex.io/zh](http://doc.weex.io/zh/)|
|Ali weexSDK|com.taobao|uni-app basic module is integrated by default, used to render uniapp’s nvue page engine|stored personal files|read external memory, write external memory|[http://doc.weex .io/zh](http://doc.weex.io/zh/)|
|fresco图片库|com.facebook.fresco|uni-app基础模块默认集成，用于nvue页面加载图片使用|存储的个人文件|读取外置存储器、写入外置存储器|[https://www.fresco-cn.org/](https://www.fresco-cn.org/)|
|fresco image library|com.facebook.fresco|uni-app basic module is integrated by default, used for loading pictures on nvue page|stored personal files|read external memory, write external memory|[https://www .fresco-cn.org/](https://www.fresco-cn.org/)|

#### UniPush

UniPush是DCloud联合个推公司推出的集成型统一推送服务，使用了个推提供的SDK，因此需要在《隐私政策》中添加“个推消息推送SDK”相关说明。
UniPush is an integrated unified push service launched by DCloud and a push company. It uses the SDK provided by the push. Therefore, it is necessary to add a description of the "Push Message Push SDK" in the "Privacy Policy".
建议《隐私政策》添加 “与授权合作伙伴共享”条款中，将 个推的用户隐私政策 加入其中，并向终端用户逐一明示您嵌入的SDK收集使用个人信息的目的、方式和范围。参考内容如下：
It is recommended that the "Privacy Policy" add the "Share with Authorized Partners" clause, add a user privacy policy to it, and clearly indicate to end users the purpose, method, and scope of the personal information collected and used by your embedded SDK. The reference content is as follows:

`消息推送服务供应商：由每日互动股份有限公司提供推送技术服务，我们可能会将您的设备平台、设备厂商、设备品牌、设备识别码等设备信息，应用列表信息、网络信息以及位置相关信息提供给每日互动股份有限公司，用于为您提供消息推送技术服务。我们在向您推送消息时，我们可能会授权每日互动股份有限公司进行链路调节，相互促活被关闭的SDK推送进程，保障您可以及时接收到我们向您推送的消息。详细内容请访问《个推用户隐私政策》（需将《个推用户隐私政策》超链至：http://docs.getui.com/privacy）`。
`Message push service provider: Push technology service provided by Daily Interactive Co., Ltd., we may relate your device information such as your device platform, device manufacturer, device brand, device identification code, application list information, network information, and location The information is provided to Daily Interactive Co., Ltd. to provide you with news push technology services. When we push messages to you, we may authorize Daily Interactive Co., Ltd. to perform link adjustments and mutually promote the closed SDK push process to ensure that you can receive the messages we push to you in a timely manner. For details, please visit the "Privacy Policy for Individual Tweets" (the "Privacy Policy for Individual Tweets" must be hyperlinked to: http://docs.getui.com/privacy)`.

UniPush模块集成的三方SDK说明
Three-party SDK instructions for UniPush module integration

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Types of personal information that may be obtained|Called device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|个推|com.getui.gtc 、com.igexin.sdk|UniPush推送|网络信息、IMEI、openid|获取网络状态、访问Wi-Fi状态、读取手机状态和身份|[https://docs.getui.com/privacy/](https://docs.getui.com/privacy/)
|Push|com.getui.gtc, com.igexin.sdk|UniPush push|Network information, IMEI, openid|Get network status, access Wi-Fi status, read mobile phone status and identity|[https://docs. getui.com/privacy/](https://docs.getui.com/privacy/)

#### Statistic

HX3.1.14+ 友盟SDK已升级到9.3.8版本 适配合规问题
HX3.1.14+ Youmeng SDK has been upgraded to version 9.3.8

+ 当你集成了统计模块。您需要确保App有《隐私政策》，并且在用户首次启动App时就弹出《隐私政策》取得用户同意！！！
+ When you integrate the statistics module. You need to ensure that the App has a "Privacy Policy", and the "Privacy Policy" pops up when the user starts the App for the first time to obtain the user's consent! ! !
+ 您务必告知用户您选择友盟+SDK服务，请在《隐私政策》中增加如下参考条款：“我们的产品集成友盟+SDK，友盟+SDK需要收集您的设备Mac地址、唯一设备识别码（IMEI/android ID/IDFA/OPENUDID/GUID、SIM 卡 IMSI 信息）以提供统计分析服务，并通过地理位置校准报表数据准确性，提供基础反作弊能力。”
+ You must inform the user that you choose the Umeng+SDK service, please add the following reference clause in the "Privacy Policy": "Our product integrates Umeng+SDK, and Umeng+SDK needs to collect your device Mac address and unique device identification Code (IMEI/android ID/IDFA/OPENUDID/GUID, SIM card IMSI information) to provide statistical analysis services, and to calibrate report data accuracy through geographic location to provide basic anti-cheating capabilities."
+ 您务必确保用户同意《隐私政策》之后。再调用相关api！！！！
+ You must ensure that the user agrees to the "Privacy Policy" afterwards. Call the relevant api again! ! ! !

Statistic模块集成的三方SDK说明
Three-party SDK instructions for Statistic module integration

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Types of personal information that may be obtained|Called device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|友盟|com.uc.crashsdk、com.efs、com.umeng|统计|网络信息、IMEI、openid|获取网络状态、访问Wi-Fi状态、读取手机状态和身份|[https://developer.umeng.com/docs/...](https://developer.umeng.com/docs/119267/detail/182050)
|Youmeng|com.uc.crashsdk, com.efs, com.umeng|Statistics|Network information, IMEI, openid|Get network status, access Wi-Fi status, read mobile phone status and identity|[https://developer .umeng.com/docs/...](https://developer.umeng.com/docs/119267/detail/182050)

#### OAuth

OAuth模块集成的三方SDK说明
Three-party SDK instructions for OAuth module integration

|SDK名称|SDK包名|SDK用途|可能获取的信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Type of information that may be obtained|Access to device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|微信|com.tencent.mm|微信登录|存储的个人文件|读取外置存储器、写入外置存储器|[https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)|
|WeChat|com.tencent.mm|WeChat login|stored personal files|read external storage, write external storage|[https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t= weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)|
|新浪微博|com.sina.weibo|新浪微博登录|存储的个人文件、IMEI、openid|读取外置存储器、写入外置存储器|[https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1](https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1)|
|Sina Weibo|com.sina.weibo|Sina Weibo login|stored personal files, IMEI, openid|read external storage, write external storage|[https://weibo.com/signup/v5/ privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1](https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1)|
|QQ登录|com.tencent.open|QQ登录|IMEI、openid、位置信息|访问粗略位置、访问精准定位、后台访问地理位置、读取外置存储器、写入外置存储器、读取手机状态和身份|[https://ti.qq.com/agreement/qqface.html?appname=mqq_2019](https://ti.qq.com/agreement/qqface.html?appname=mqq_2019)|
|QQ login|com.tencent.open|QQ login|IMEI, openid, location information|Access rough location, access precise location, background access geographic location, read external storage, write external storage, read mobile phone status and Identity|[https://ti.qq.com/agreement/qqface.html?appname=mqq_2019](https://ti.qq.com/agreement/qqface.html?appname=mqq_2019)|
|个验一键登录|com.g.elogin、com.g.gysdk|一键登录|运营商信息|读取外置存储器、写入外置存储器|[https://docs.getui.com/privacy/](https://docs.getui.com/privacy/)|
|One-click login|com.g.elogin, com.g.gysdk|One-click login|operator information|read external storage, write external storage|[https://docs.getui.com/ privacy/](https://docs.getui.com/privacy/)|

#### Share
Share模块集成的三方SDK说明
Three-party SDK instructions for Share module integration

|SDK名称|SDK包名|SDK用途|可能获取的信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Type of information that may be obtained|Access to device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|微信|com.tencent.mm|微信分享|存储的个人文件|读取外置存储器、写入外置存储器|[https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)|
|WeChat|com.tencent.mm|Share on WeChat|Store personal files|Read external storage, write external storage|[https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t= weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)|
|新浪微博|com.sina.weibo|新浪微博分享|存储的个人文件、IMEI、openid|读取外置存储器、写入外置存储器|[https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1](https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1)|
|Sina Weibo|com.sina.weibo|Share on Sina Weibo|Store personal files, IMEI, openid|read external storage, write external storage|[https://weibo.com/signup/v5/ privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1](https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1)|
|QQ|com.tencent.open|QQ分享|IMEI、openid、位置信息|访问粗略位置、访问精准定位、后台访问地理位置、读取外置存储器、写入外置存储器、读取手机状态和身份|[https://ti.qq.com/agreement/qqface.html?appname=mqq_2019](https://ti.qq.com/agreement/qqface.html?appname=mqq_2019)|
|QQ|com.tencent.open|QQ sharing|IMEI, openid, location information|Access rough location, access precise location, background access geographic location, read external storage, write external storage, read mobile phone status and identity |[https://ti.qq.com/agreement/qqface.html?appname=mqq_2019](https://ti.qq.com/agreement/qqface.html?appname=mqq_2019)|

#### Payment

Payment模块集成的三方SDK说明
Three-party SDK instructions for payment module integration

|SDK名称|SDK包名|SDK用途|可能获取的信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Type of information that may be obtained|Access to device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|微信|com.tencent.mm|微信支付|存储的个人文件|读取外置存储器、写入外置存储器|[https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)|
|WeChat|com.tencent.mm|WeChat Pay|Store personal files|Read external storage, write external storage|[https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t= weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)|
|支付宝|com.alipay|支付宝支付|暂无|读取网络状态|[https://render.alipay.com/p/c/k2cx0tg8](https://render.alipay.com/p/c/k2cx0tg8)|
|Alipay|com.alipay|Alipay Payment|Nothing|Read network status|[https://render.alipay.com/p/c/k2cx0tg8](https://render.alipay.com/p/c/ k2cx0tg8)|

#### Speech

Speech模块集成的三方SDK说明
Three-party SDK instructions for Speech module integration

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Types of personal information that may be obtained|Called device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|百度语音识别|com.baidu.speech|语音识别|IMEI、openid|获取网络状态、访问Wi-Fi状态、读取手机状态和身份|[https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3](https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3)|
|Baidu speech recognition|com.baidu.speech|Speech recognition|IMEI, openid|Get network status, access Wi-Fi status, read mobile phone status and identity|[https://ai.baidu.com/ai-doc/ REFERENCE/Qkdykq1r3](https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3)|
|讯飞语音|com.iflytek|语音识别|IMEI、openid|获取网络状态、访问Wi-Fi状态、读取手机状态和身份|[https://www.xfyun.cn/doc/policy/privacy.html](https://www.xfyun.cn/doc/policy/privacy.html)|
|IFLYTEK Voice|com.iflytek|Voice Recognition|IMEI, openid|Get network status, access Wi-Fi status, read mobile phone status and identity|[https://www.xfyun.cn/doc/policy/privacy. html](https://www.xfyun.cn/doc/policy/privacy.html)|

#### Map & Geolocation

Map & Geolocation模块集成的三方SDK说明
Three-party SDK instructions for Map & Geolocation module integration

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Types of personal information that may be obtained|Called device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|高德|com.amap.api, com.loc, com.autonavi|地图&定位|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、访问粗略位置、访问精准定位、读取手机状态和身份|[https://lbs.amap.com/agreement/compliance](https://lbs.amap.com/agreement/compliance)|
|Amap|com.amap.api, com.loc, com.autonavi|Map & Location|IMEI, openid, location information|Get network status, access Wi-Fi status, location information, access rough location, access precise location, Read mobile phone status and identity|[https://lbs.amap.com/agreement/compliance](https://lbs.amap.com/agreement/compliance)|
|百度|com.baidu|地图&定位|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、访问粗略位置、访问精准定位、读取手机状态和身份|[https://map.baidu.com/zt/client/privacy/index.html](https://map.baidu.com/zt/client/privacy/index.html)|
|Baidu|com.baidu|Map & Location|IMEI, openid, location information|Get network status, access Wi-Fi status, location information, access rough location, access precise location, read mobile phone status and identity|[https:/ /map.baidu.com/zt/client/privacy/index.html](https://map.baidu.com/zt/client/privacy/index.html)|

#### uni-AD

uni-AD广告模块集成的三方SDK说明
Three-party SDK instructions for uni-AD advertising module integration

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Types of personal information that may be obtained|Called device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|快手|com.kwad.sdk|广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://www.kuaishou.com/about/policy](https://www.kuaishou.com/about/policy)|
|Quick Hand|com.kwad.sdk|Advertising|IMEI, openid, location information|Get network status, access Wi-Fi status, location information, read and write external storage, read mobile phone status and identity|[https://www .kuaishou.com/about/policy](https://www.kuaishou.com/about/policy)|
|优量汇|com.qq.e|广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://imgcache.qq.com/..privacy](https://imgcache.qq.com/gdt/cdn/adn/uniondoc/ylh_sdk_privacy_statement.html)|
|Youlianghui|com.qq.e|Advertising|IMEI, openid, location information|Get network status, access Wi-Fi status, location information, read and write external storage, read mobile phone status and identity|[https:/ /imgcache.qq.com/..privacy](https://imgcache.qq.com/gdt/cdn/adn/uniondoc/ylh_sdk_privacy_statement.html)|
|穿山甲|com.bytedance.sdk. openadsdk.adhost|广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://www.pangle.cn/privacy/partner](https://www.pangle.cn/privacy/partner)|
|Pangolin|com.bytedance.sdk. openadsdk.adhost|Ads|IMEI, openid, location information|Get network status, access Wi-Fi status, location information, read and write external storage, read phone status and identity|[https ://www.pangle.cn/privacy/partner](https://www.pangle.cn/privacy/partner)|

#### 腾讯x5内核
#### Tencent x5 kernel

|SDK名称|SDK包名|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接|
|SDK name|SDK package name|SDK purpose|Types of personal information that may be obtained|Called device permissions|SDK privacy policy link|
|:----|:----|:----|:----|:----|:----
|x5内核|com.tencent.tbs、com.tencent.smtt|x5内核渲染webview|IMEI、openid|读写外置存储器、读取手机状态和身份|[https://x5.tencent.com/docs/privacy.html](https://x5.tencent.com/docs/privacy.html)|
|x5 kernel|com.tencent.tbs, com.tencent.smtt|x5 kernel rendering webview|IMEI, openid|read and write external memory, read mobile phone status and identity|[https://x5.tencent.com/docs /privacy.html](https://x5.tencent.com/docs/privacy.html)|


如果您的应用使用了依赖三方SDK的模块也需要将其合规条款添加到《隐私政策》中
If your application uses a module that relies on the third-party SDK, you also need to add its compliance clauses to the "Privacy Policy"

#### uni原生插件
#### uni native plugin

如果应用使用了uni原生插件，需要注意一下几点：
If the application uses uni native plug-ins, you need to pay attention to the following points:

+ 使用插件时请查看插件详情页面中的 `隐私、权限声明` 。（插件使用什么sdk？获取了什么用户信息？都应由插件作者提供并填写在 `隐私、权限声明`中）
+ When using the plug-in, please check the `Privacy and Permission Statement` in the plug-in details page. (What SDK does the plug-in use? What user information has been obtained? All should be provided by the plug-in author and filled in in the `Privacy, Permission Statement`)
+ 将插件中用到的三方SDK信息添加到用户隐私协议中。例如集成了`百度定位`。就需要在隐私协议中说明集成了百度定位SDK。获取了xxx用户信息!用于xxx.
+ Add the three-party SDK information used in the plug-in to the user privacy agreement. For example, it integrates `Baidu Positioning`. It is necessary to indicate in the privacy agreement that the Baidu positioning SDK is integrated. Get xxx user information! Used for xxx.
+ 如果发现插件有获取用户信息而插件详情页并没有提供`隐私、权限声明`，请与插件开发者或与我们反馈共同督促进行补充。
+ If you find that the plug-in has access to user information and the plug-in details page does not provide the `Privacy, Permission Statement`, please contact the plug-in developer or feedback with us to supervise and supplement.

#### 其它
#### Other

《隐私政策》必须非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围。
The "Privacy Policy" must state very clearly and comprehensively (don't use vague words such as the possibility of collecting and understanding user information) the purpose, method and scope of collecting users' personal information.
如果应用使用“通讯录”、“短信”等相关功能，请根据应用业务场景进行描述。
If the application uses related functions such as "Contacts" and "SMS", please describe it according to the application business scenario.

## 常见问题
## common problem

#### 如何解决"强制、频繁、过度索取权限"问题
#### How to solve the problem of "mandatory, frequent, and excessive request for permissions"

对于权限问题，主要注意以下几个方面：
Regarding permissions issues, the following aspects should be paid attention to:

+ 应用中没有对应的服务或场景时，不要申请对应权限（例如没有使用到位置的服务时，不要申请定位权限）
+ When there is no corresponding service or scene in the application, do not apply for the corresponding permission (for example, when the location service is not used, do not apply for the location permission)
+ 应用申请权限时，如果用户拒绝，不要直接退出APP无法使用。千万不要将应用启动时申请“读写手机存储”和“访问设备信息”权限设置为“always”，详情参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
+ When the app applies for permission, if the user refuses, do not log out of the app and cannot use it. Do not set the permissions for "read and write phone storage" and "access device information" to "always" when the app is launched. For details, please refer to: [https://ask.dcloud.net.cn/article/36549](https: //ask.dcloud.net.cn/article/36549)
+ 调用申请权限相关时，如果用户拒绝，非用户主动触发功能，不要重复调用API触发弹出申请权限窗口影响用户使用
+ When calling for permission to apply, if the user refuses, the non-user actively triggers the function, do not call the API repeatedly to trigger a pop-up permission request window that affects the user's use

在开发uni-app中还需要注意以下问题：
The following issues need to be paid attention to in the development of uni-app:
`不要在页面生命周期onShow中调用可能触发权限提示框的API，如` [uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation)、[uni.chooseImage](https://uniapp.dcloud.io/api/media/image?id=chooseimage)`等`。
`Do not call the API that may trigger the permission prompt box in the page life cycle onShow, such as `[uni.getLocation](https://uniapp.dcloud.io/api/location/location?id=getlocation), [uni.chooseImage ](https://uniapp.dcloud.io/api/media/image?id=chooseimage)` etc`.


#### 如何解决“强制用户使用定向推送功能”问题
#### How to solve the problem of "Forcing users to use the targeted push function"

《隐私政策》中涉及到 “推荐”、“定制”、“个性化”等关键字改为“提供、展示、通知、发送、、、”等字眼，如果确实会涉及到个性化服务请在app的设置中增加个性化推送开关
In the "Privacy Policy", keywords such as "recommendation", "customization", and "personalization" have been changed to "provide, display, notify, send,,,," and other words. If personalized services are indeed involved, please log in to the app Add a personalized push switch to the settings of

#### 如何解决 用户点击《隐私政策》“同意”前，APP和SDK不要进行任何行为，包括SDK不能初始化，APP或SDK不能收集用户信息（包括但不限于IMEI、IMSI、设备MAC地址、软件列表、设备序列号、androidID）
#### How to solve the problem before the user clicks "Agree" in the "Privacy Policy", APP and SDK should not do anything, including SDK cannot be initialized, APP or SDK cannot collect user information (including but not limited to IMEI, IMSI, device MAC address, Software list, device serial number, androidID)

注意：`apk是在7月8号之前基于HX3.1.18云打包生产的apk可能存在提前获取IMIE问题，打包机已修复该问题！请使用HX3.1.18重新云打包。离线打包请更新3.1.18紧急更新的aar资源即可`
Note: The apk that was packaged and produced based on HX3.1.18 cloud before July 8 may have the problem of obtaining IMIE in advance, and the packager has fixed this problem! Please use HX3.1.18 to re-package in the cloud. For offline packaging, please update the aar resource of 3.1.18 emergency update.`

+ 请先确保APK是基于3.1.18+版本生产的！
+ Please make sure that the APK is produced based on version 3.1.18+!
+ 确保已配置使用“template”模式隐私与政策提示框！
+ Make sure that the privacy and policy prompt box is configured to use the "template" mode!
+ 可以通过小米手机 系统是MIUI12设备。安装你的应用。然后查看`应用详情`-->`应用行为记录`是否在点击“同意”前有获取权限信息等情况。
+ It can be used by Xiaomi mobile phones. The system is a MIUI12 device. Install your application. Then check `Application Details`-->`Application Behavior Record` whether there is permission information obtained before clicking "Agree".
+ 如果你 app 是离线打包请务必关闭调试开关，修改项目dcloud_control.xml中syncDebug为false
+ If your app is packaged offline, be sure to turn off the debugging switch and modify syncDebug in the project dcloud_control.xml to false
+ 以上都符合条件那就检测app是否集成三方SDK或者uni原生插件请咨询相关SDK提供方平台是否涉及有关合规问题。请更新SDK或找uni原生插件更新相关SDK合规操作。
+ If all the above conditions are met, then check whether the app integrates third-party SDK or uni native plug-in. Please consult the relevant SDK provider platform to see if there is any compliance issue. Please update SDK or find uni native plug-in to update related SDK compliance operations.
+ 都符合请重新提交平台检测。
+ Please resubmit for platform testing if they are all compliant.

**各大应用市场上架合规审查细节可能存在差异，如果开发者碰到相关问题请及时反馈，我们会及时汇总整理供大家参考**
**There may be differences in the details of the compliance review on the major application markets. If developers encounter related problems, please feedback in time, we will summarize them in time for your reference**

#### 如何解决“用户不同意强制退出应用”问题
#### How to solve the problem of "Users do not agree to forcibly quit the application"

这个问题可能是隐私弹窗显示后，用户选择了“不同意”按钮后应用退出导致的。请按以下修改。
This problem may be caused by the application exit after the user selects the "disagree" button after the privacy pop-up window is displayed. Please modify as follows.

+ 配置二次弹窗提示second，参考[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ Configure the second pop-up prompt second, refer to [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
+ 二次弹窗配置按钮信息为“同意并继续”和“退出应用”
+ The second pop-up window configuration button information is "Agree and Continue" and "Exit Application"

#### 关于离线SDK需要注意
#### Note about offline SDK

如果重写了DCloudApplication，需要注意在Application初始化的三方SDK的合规操作。防止导致启动隐私弹窗前获取了用户信息无法上架
If you rewrite DCloudApplication, you need to pay attention to the compliance operations of the three-party SDK initialized in the Application. Prevent the user information obtained before the privacy pop-up window can not be listed

#### app上架应用市场，检测集成了广告被拒的解决方案
#### The app is on the app market, and the detection integrates the solution of rejected ads

+ 使用HX云打包时是否勾选了三方广告！如果勾选了请在隐私协议添加广告隐私说明。误勾选请去除并重新打包上架。
+ Whether three-party advertising is checked when using HX cloud packaging! If checked, please add an advertisement privacy statement in the privacy agreement. Please remove and repack the wrong check.
+ 离线打包检测是否集成了相关三方广告SDK！如果集成了请在隐私协议添加广告隐私说明。误集成请去除并重新编译apk上架。
+ Offline packaging test whether the relevant third-party advertising SDK is integrated! If integrated, please add advertising privacy instructions in the privacy agreement. Please remove and recompile the apk for misintegration.

#### 应用没有勾选三方广告模块但是上架华为市场检测反馈集成了广告被拒
#### The application did not check the three-party advertising module, but the Huawei market detection feedback integrated advertising was rejected

uni-AD广告基础功能包含管理其它三方广告SDK的逻辑，会通过反射判断广告SDK是否存在，在没有勾选“360广告联盟”、“今日头条穿山甲广告联盟”、“腾讯优量汇广告联盟”、”快手广告联盟“时，也可能会被华为应用市场检测为包含奇虎360、广点通/优量汇、穿山甲等广告SDK，实际上apk中并没有包含相应的广告SDK。我们已经在优化广告基础功能实现方案来避免（请关注新版本更新日志），目前可以通过以下临时方案解决：
The basic functions of uni-AD advertising include the logic of managing other third-party advertising SDKs. It will judge whether the advertising SDK exists through reflection. If the "360 Advertising Alliance", "Today's Toutiao Pangolin Advertising Alliance" and "Tencent Youlianghui Advertising Alliance" are not checked "Kaishou Advertising Alliance" may also be detected by the Huawei App Market as including advertising SDKs such as Qihoo 360, Guangdiantong/Youlianghui, and Pangolin. In fact, the corresponding advertising SDK is not included in the apk. We are already optimizing the implementation of basic advertising functions to avoid it (please pay attention to the new version update log), and we can currently solve it through the following temporary solutions:

+ 向华为应用市场申诉，说明安装包中并没有包含广告SDK，只是存在反射判断广告SDK是否存在
+ Appeal to Huawei App Market, stating that the installation package does not contain the advertising SDK, but there is reflection to determine whether the advertising SDK exists
+ 目前我们收到此反馈此问题的都是5+ App项目，uni-app项目可能并不存在此问题，建议有条件的话将5+ App项目升级为uni-app项目
+ Currently we are receiving this feedback from the 5+ App project. This problem may not exist in the uni-app project. It is recommended to upgrade the 5+ App project to a uni-app project if possible

#### 看不懂文档不知道如何修改？
#### Can’t read the document and don’t know how to modify it?

可开通付费技术服务 参考：[https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)
Paid technical services can be opened. Reference: [https://ask.dcloud.net.cn/article/13015](https://ask.dcloud.net.cn/article/13015)

## 相关参考
## Related references
Android平台隐私与政策提示框配置方法：[https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
Android platform privacy and policy prompt box configuration method: [https://ask.dcloud.net.cn/article/36937](https://ask.dcloud.net.cn/article/36937)
Android平台应用启动时读写手机存储、访问设备信息(如IMEI)等权限策略及提示信息：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)
When the Android platform application starts, read and write mobile phone storage, access device information (such as IMEI) and other permission policies and prompt information: [https://ask.dcloud.net.cn/article/36549](https://ask.dcloud. net.cn/article/36549)
Android平台配置权限参考：[https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)
Android platform configuration permission reference: [https://ask.dcloud.net.cn/article/36982](https://ask.dcloud.net.cn/article/36982)