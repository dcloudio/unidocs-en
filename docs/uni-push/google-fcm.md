> HBuilderX 2.7.10+ 版本以上支持FCM

## 概述
在海外网络环境下，部分网络在连接`uni-push`技术支持供应商个推的推送服务时，可能出现不稳定的情况。此时，开发者可以接入 FCM 辅助通道，当在个推服务断线的情况下，通过谷歌的 FCM 推送通道下发消息，提升推送到达率。

**使用FCM时手机端需安装Google移动服务（GMS），并且可以正常连接Google服务（国内网络需要翻墙）**

使用FCM必须先开通使用`uni-push`：
- 开通`uni-push`服务参考：[如何开通uni-push](uni-push/open.md)
- App端使用`uni-push`参考：
  - [uni-push 2.0](../unipush-v2.md)
  - [uni-push 1.0](../unipush-v1.md)

## 从谷歌后台申请key信息
进入 [Firebase官网](https://firebase.google.com/)创建项目，获取`google-services.json`文件及`Server key`。

登录google账号，如果没有账号请先注册
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/signin.png)

登录后点击右上角的“Go to console”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/gotoconsole.png)

打开项目列表页面，点击“Add project”创建项目
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/addproject.png)

输入项目名称（根据自己应用取名），点击“Continue”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject1.png)

确认是否需要使用Google Analytics服务（根据自己需要开启或关闭），点击“Continue”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject2.png)

确认后创建项目，点击“Continue”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject3.png)

进入项目详情页面，点击“Android”图标添加Android应用
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/android.png)

输入Android应用信息（包名、昵称、证书SHA-1），点击“Register App”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/regapp.png)

注册Android应用后下载配置文件“google-services.json”，**保存google-services.json文件后面需要使用**
点击“Next”继续
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/download.png)

此步骤中的操作云端打包机已经处理，忽略提示信息，继续点击“Next”，进入下一步
完成注册Android应用，点击“Continue to console”回到项目详情页面
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/continuetoconsole.png)

点击“Project settings”，进入项目设置页面
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/settings.png)

切换到“Cloud Messaging”项，获取“Server key”，**保存Server key后面需要使用**

由于新版`Firebase Cloud Messaging API (V1)`不提供`Server key`, 所以需要手动开启旧版 `Cloud Messaging API` 。
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_get_server_key.png)

跳转到Api管理页面启动`Cloud Messaging API`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_open_old_api.png)

启动`Cloud Messaging API`后即可得到`Server key`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_server_key.png)

## `uni-push`后台配置FCM参数
参考文档 [配置厂商推送参数](open.md#other-config) 完成FCM参数配置。

配置保存成功后在HBuilderX中重新提交云端打包，并在“App-云打包”界面选择`google play`渠道：
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_package.png)

如果你已经完成了`uni-push`的代码开发，只需完成上述配置和打包即可，不用修改代码。


## 本地离线打包
Android平台离线sdk集成`uni-push`支持FCM可参考：[Push(消息推送)](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=%e8%b0%b7%e6%ad%8c%e6%8e%a8%e9%80%81)

## 注意事项

**FCM 离线消息仅支持GOOGLE 推送，暂不支持国内设备商的海外发行版本**


