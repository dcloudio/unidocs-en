## 概述

`uni-push` 是 DCloud 联合个推公司推出的集成型统一推送服务，是所有uni-app开发者首选的推送服务。在介绍`uni-push` 之前，我们先来了解一下什么是push（推送服务）。

### 什么是push（推送服务）？
`push（推送服务）`，是指服务器主动向客户端发送消息的技术。无需客户端持续轮询服务器，即可获得即时数据。

客户端轮询有很多弊端：
  1) 客户端应用必须实时在线；
  2) 手机端耗电严重；
  3) 服务器负载高且浪费资源。

手机的通知栏、小程序的订阅消息都是一种push，由手机操作系统或微信在底层提供了push通道，屏蔽了轮询的各种弊端。你的应用可以被关闭，只要手机有网，操作系统提供的push通道即是实时在线的。

提醒：web浏览器的webnotification其实是一个本地通知栏功能，浏览器厂商没有提供push通道。

当客户端在线时，push通过socket协议实现。当客户端离线时，服务器找不到客户端，开发者无法自己实现推送，只能依托手机操作系统、小程序底层提供的`离线消息推送`，调用指定的手机厂商或小程序厂商的服务器接口来发送消息。

所以一个push系统需要3部分协作：开发者的业务服务器 + 专业push服务器 + 开发者的客户端应用。

其主要流程是：

1. 开发者的业务服务器向专业push服务器发送指令，告知需要向哪些客户端发送什么样的消息
2. 专业push服务器再向客户端发送消息
3. 若手机应用在线，直接收到push；若不在线，手机用户在操作系统的通知栏中看到push消息，点击后呼起客户端应用，客户端代码可以接收响应获得消息；如果是小程序的话，则是在微信消息里看到订阅消息，点击后呼起小程序并拿到启动参数。
<div style="float:clear;">
	<img width="30%" style="margin-left:5%;max-width:260px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20220325203150.jpg"/>
	<img width="30%" style="margin-left:5%;max-width:260px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3bb2b4c4-1b73-426d-b713-f076aff80868.jpg"/>
</div>

### 产品介绍

`uni-push` 是 DCloud 联合个推公司推出的集成型统一推送服务，内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌 FCM 等手机厂商的系统级推送和个推等第三方推送。

国内Android的Push是一个混乱的世界，因为 Google 的 Push 服务 FCM 被墙，所以一些国内的安卓手机厂商各自做了自己的推送，比如华为、小米、OPPO、VIVO、魅族等，但还有很多国产手机厂商没有提供官方推送方案。三方独立公司如个推，则提供了独立的 push 方案。
在没有 `uni-push` 以前，如果只使用三方 push，会在很多国产手机上因为节电设置而无法保活 push 进程，导致无法推送。
而如果每个安卓手机的官方 Push SDK 都集成开发一遍，这么多平台，工作量会非常巨大，管理维护也很麻烦。

`uni-push` 解决了这个难题，开发者只需要开发一次。系统会自动在不同手机上选择最可靠的推送通道发送 push 消息，保障送达率。

`uni-push` 即降低了开发成本、又提高了 push 送达率，并且免费，是当前推送的最佳解决方案。

### 应用场景
以下功能可以用`uni-push`实现  
- 用户消息通知  
当 APP 用户相关状态或者系统功能状态变化时（如用户订单通知、交易提醒、物流通知、升级提醒、社交互动提醒等），可对用户进行及时告知，或者促使用户完成特定操作。

- 离线语音播报  
它也是一种用户消息推送，实现原理其实是自定义通知提醒铃声

- 营销促活通知  
在日常营销推广、促销活动等场景下（如双11大促、产品上新、重要资讯等），APP可对目标用户进行定向通知栏消息+应用内消息推送，吸引用户参与活动，提升日活。

- 基于uniCloud的IM、聊天、客服、棋牌游戏交互等  
例如：DCloud基于`uni-push 2.0`开发并开源了`uni-im`，详情：[https://doc.dcloud.net.cn/uniCloud/uni-im.html](https://doc.dcloud.net.cn/uniCloud/uni-im.html)  
另外棋牌游戏等，需要客户端被动接收消息的需求都可以用`uni-push`实现。

### 技术架构

![img](https://native-res.dcloud.net.cn/images/uniapp/push/architecture.png)

### 名词解释

| 名词     | 解释                                                         |
| -------- | ------------------------------------------------------------ |
| 通知消息 | 指定通知标题和内容后，由个推SDK自动处理在系统通知栏中展示通知栏消息，同时响铃或震动提醒用户(响铃和震动受手机系统的设置状态影响)。 |
| 透传消息 | 即自定义消息，消息体格式客户可以自己定义，如纯文本、json 串等。透传消息个推只传递数据，不做任何处理，客户端接收到透传消息后需要自己去做后续动作处理，如通知栏展示、弹框等。 |
| ClientId | 个推业务层中的对外用户标识，用于标识客户端身份，由第三方客户端获取并保存到第三方服务端，是个推 SDK 的唯一识别号，简称 CID。 |
| 在线推送 | app 在前台打开运行时，通过个推渠道下发消息。                 |
| 离线推送 | app在后台、锁屏、进程关闭时，通过厂商渠道下发消息。若未集成 android 多厂商、未配置 ios 推送证书，则该机型无法使用离线推送。 |

更多名词解释参考：[个推名词解释](https://docs.getui.com/getui/more/word/)

### 消息推送流程

![img](https://native-res.dcloud.net.cn/images/uniapp/push/dispatch.svg)

## 产品版本
`uni-push` 当前有2个版本，分别是`uni-push 1.0`和`uni-push 2.0`。`uni-push 2.0`是DCloud推出的、全端的(App、小程序、Web)、云端一体的统一推送服务，推荐开发者优先选择`uni-push 2.0`。
- 2.0版文档地址（推荐）：[https://uniapp.dcloud.net.cn/unipush-v2.html](https://uniapp.dcloud.net.cn/unipush-v2.html)
- 1.0版文档地址：[https://uniapp.dcloud.net.cn/unipush-v1.html](https://uniapp.dcloud.net.cn/unipush-v1.html)

## 注意事项
### 推送通道选择逻辑  
- Android平台  
  **APP在线（个推推送通道可用）**  
  推送通知和透传消息都使用个推的推送通道下发推送消息。  
  **APP离线（个推推送通道不可用）**  
  推送通知，使用个推离线推送通道，离线消息会存储在消息离线库，离线时间内APP在线后下发推送消息。
  透传消息，如果符合厂商推送的厂商手机（配置了手机厂商推送参数并且在对应厂商的手机上），则使用厂商推送通道下发推送消息；否则使用个推的离线推送通道，离线消息会存储在消息离线库，离线时间内APP在线后下发推送消息。

- iOS平台  
推送通知，`uni-push`后台管理界面中不支持下发此类型，个推提供的服务端API支持下发推送通知（设置APN参数则通过苹果的APNS通道，否则使用个推通道）。  
透传消息，设置APN参数则通过苹果的APNS通道下发推送消息，没有设置APN参数则使用个推的推送通道下发。

### Android平台厂商通道
#### 华为厂商通道
在华为手机上必须安装“华为移动服务”才能使用华为的厂商推送通道，首先确保手机上已经安装“华为移动服务”应用。
如果在华为手机应用退出后无法接收到推送消息，需要确保：

1. 机型版本要求：华为rom且华为rom版本大于等于 emui4.1, 华为移动服务(可在应用列表或华为应用市场中查看)版本大于等于 2.5.2。
2. 需要提交云打包，打自有证书-签名包（包名要确认与华为平台一致）。
3. 华为平台【我的项目】-【项目设置】-【常规】中填写“SHA256证书指纹”，点右侧对勾保存证书指纹。
4. emui10的华为手机，检查手机通知权限设置，将【营销通知】的权限也打开，不要默认静默，静默的话是需要下拉通知栏才能看到。
5. 手机通知栏消息是否有存满，清除已存的通知栏消息看下新的消息是否能展示。
6. 清除华为移动服务（HMS Core）（apk（手机设置--应用--应用管理--点击显示系统进程--搜索（华为移动服务）--存储--清空缓存））的缓存


HBuilderX 3.0.7 之后，华为除了配置原有的厂商信息之外，需要新增配置`agconnect-services.json`文件。

该文件，需要从华为开发者后台--项目设置界面下载  
![](https://native-res.dcloud.net.cn/images/uniapp/push/huawei-apconnect-services.png)


#### VIVO厂商通道
**需要在VIVO应用商店上线才能申请VIVO的厂商推送**
注意事项：

- vivo【运营消息】，一个设备一天只能收到5条离线消息
- vivo要求：通知文案中不能带 “包含测试、test字符”、“纯数字”、“纯表情”、“符号”或者“符号+数 字”、“表情+数字”、“表情＋符号” 。
- 1个自然日内相同文案的运营消息给同个设备发，vivo会在客户端做去重处理，导致消息不展示
- 支持vivo推送功能HBuilderX最低版2.1.0及以上。

具体请参考图中数据  
![](https://native-res.dcloud.net.cn/images/uniapp/push/vivo-datas.png)


#### OPPO厂商通道
**需要在OPPO应用商店上线才能申请OPPO的厂商推送**

并且有以下要求：
- 机型系统要求：oppo colorOS rom且版本号大于等于3.1
- 检查手机通知权限是否打开，oppo是默认关闭的，将通知权限下的【Default】通道权限也打开。
- 手机系统时间是否正常


#### 小米厂商通道
- 机型版本要求：小米rom且小米服务框架（包名：com.xiaomi.xmsf）版本号⼤于等于 105 
- 检查手机通知权限设置，小米有不重要通知功能，部分消息可能会存在通知栏不重要通知里

#### 魅族厂商通道
- 机型版本要求：魅族rom且魅族rom版本⼤于等于5.x
- 检查消息是否存入了魅族手机右上角【魅族消息盒子】中
- 清除缓存：魅族手机在设置 ---> 应用管理 ---> 所有应用 ---> 推送服务 ，点击里面的清除数据，然后再重新安装一下应用。


#### 谷歌FCM通道
需Android手机已经安装GMS，且手机网络可以连通谷歌FCM推送服务器。
详细教程另见：[如何使用FCM](uni-push/google-fcm.md)。

#### 其它厂商通道
如果应用在线可以接收到推送消息，离线时使用厂商通道无法接收到推送消息，可参考**`uni-push`厂商通道常见问题[https://ask.dcloud.net.cn/article/36611](https://ask.dcloud.net.cn/article/36611)**


## 其他相关资源
- 检查应用是否被授予推送权限：[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 开启关闭推送服务：[https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- 自定义推送铃声：[https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- 如何自定义推送通知的图标：[https://uniapp.dcloud.net.cn/unipush-custom-icon.html](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#unipush-icons)

## 常见问题@faq

有了`uni-push`，开发者不应该再使用其他push方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。

- “uni-push的专业性，和专业的个推、极光等服务可相比吗？”

	uni-push 是由个推将其本来收费的 push 产品，免费提供给了DCloud的开发者。它与个推vip push的只有3个区别：
        
    - 免费；
    - 账户使用的是DCloud开发者账户，而无需再重新注册个推账户；
    - 开发文档看DCloud的。

- “uni-push好麻烦，我就喜欢个推、极光这种简单sdk，不想去各个rom厂商去申请一圈”

	uni-push不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的push是一样的。但是要特别注意，推送行业的现状就是：不集成rom厂商的推送，就无法在App离线时发送push。按照普通push模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。

- “uni-push的送达率高吗？是否可以付费来提升送达率，个推是有付费提升送达率的方法的”

	前文已经做过相关说明，个推的付费提升送达率的产品就是vip push，而uni-push就是个推的vip Push。DCloud通过谈判免费给DCloud的开发者使用了。

- uni-push可以完整替代socket吗？

	能部分替代。uni-push客户端接收消息的通讯协议属于websocket；但业务服务端向uni-push服务发送消息用的是http通讯协议，会有1-2秒的延时。需要超低延迟的应用场景，如多人交互远程画板不合适。但对于普通的im消息、聊天、通知都没有问题。

- 5+app和wap2app支持`uni-push`吗？  
	
	HBuilderX 2.0.3起，5+app和wap2app可以使用`uni-push 1.0`，暂不支持使用`uni-push 2.0`。5+app和wap2app升级`uni-push`不需要改动app前端代码，只需要在HBuilderX中打开manifest.json的“模块配置”页，在“Push(消息推送)”下勾选“uniPush”，并点击“配置”，在后台开通`uni-push`服务，配置好厂商推送参数重新提交云端打包即可。后端服务器需要参考[uni-push 1.0文档](unipush-v1.md#request-getui)中的第二步对接个推推送服务。

- uni-app x项目如何使用`uni-push`？
  
    uni-app x项目只支持`uni-push 2.0`，开发文档参考：[https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html](https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html)

- 离线打包如何配置？  
    
    - [Android平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=unipush)
    - [iOS平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push?id=unipush)

- iOS平台如何实现应用启动后不立即弹出“发送通知”系统授权框？  
    
    参考：[https://ask.dcloud.net.cn/article/36955](https://ask.dcloud.net.cn/article/36955#push)

- 为什么Android应用进入后台后（App未销毁），点击通知消息无法拉起App？
    
    检查设备是否有禁止后台弹出界面，路径>>设置-应用管理-测试应用-权限管理-后台弹出界面，(一般是小米、oppo、vivo设备)。

- 如何开通Google FCM？
  
    参考文档，[uni-push支持谷歌推送FCM配置指南](uni-push/google-fcm.md)
