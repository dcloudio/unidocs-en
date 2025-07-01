## 开通 uni-push
`uni-push` 需要在 [开发者中心](https://dev.dcloud.net.cn) 申请开通后，方可使用。`uni-push 1.0`和`uni-push 2.0`开通方式基本一致，本文以`uni-push 2.0`为例进行说明。

**Tips:** 目前只有应用所有者可以操作`uni-push`。应用协作者暂不支持。

## uni-push 配置页面

有两个入口可以进入 uni-push 配置页面：
- 通过 HBuilderX 进入
- 通过开发者中心进入

### 通过 HBuilderX 进入
打开 HBuilderX，双击项目中的 “manifest.json” 文件，选择“安卓/iOS模块配置”，在配置页面中向下找到“Push(消息推送)”，勾选后，点击相应版本的配置链接，即可进入 `uni-push` 配置页面。如下图所示：
![HX开通示例](https://web-ext-storage.dcloud.net.cn/doc/uni-push/hx-push-config.png)


### 通过开发者中心进入
1. 使用 DCloud 账号登录 [开发者中心](https://dev.dcloud.net.cn) ，登录后会进入“我的应用”列表，在列表中可以看到各应用的`uni-push`开通状态。

2. 在左侧菜单点击“uni-push”，然后选择 1.0或2.0，进入uni-push 信息页，左上角显示为当前要操作的应用，点击可以切换应用。如下图所示：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniPush2-info.jpg)

**注意：** 1.0和2.0的配置页面信息略有不同，2.0开通时需要绑定服务空间，1.0不需要。


### 首次开通 `uni-push`

> 按照国家法律要求，所有提供云服务的公司在用户使用云服务时都需要验证手机号。[查看如何验证手机号](../dev/account/modify.md#verify-phone)

用户初次开通 `uni-push` 时，需要向个推同步手机号信息（DCloud开发者无需再注册个推账户），请参考页面提示信息完成业务开通。
![](https://web-ext-storage.dcloud.net.cn/doc/uni-push/create-account.png)


### 填写应用信息
应用开通`uni-push`功能时，需要提交应用相关信息，如下图所示：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniPush2-info.jpg)

关联服务空间说明：`uni-push 2.0`需要开发者开通uniCloud。不管您的业务服务器是否使用uniCloud，但专业推送服务器在uniCloud上。

- 如果您的后台业务使用uniCloud开发，那理解比较简单。
- 如果您的后台业务没有使用uniCloud，那么也需要在uni-app项目中创建uniCloud环境，在HBuilderX中和dev的uni-push配置中均绑定相同服务空间，之前的业务仍然由客户端连接原有传统服务器，push相关功能则通过uniCloud服务空间实现。如果您之前使用过三方推送服务的话，可以理解为您的服务器不再调用个推服务器，而是改为调用uniCloud服务空间。

在uniCloud的云函数中，加载扩展库 `uni-cloud-push`，直接调用相关API，无需额外的服务端配置。而传统服务器开发者需要把这个[云函数URL化](https://uniapp.dcloud.io/uniCloud/http.html)后变成http接口，再由原来的php或java代码调用这个http接口。

::: warning 注意
- `Android包名、签名（SHA1指纹）`或`iOS Bundle ID`，必须确保与客户端manifest.json配置的证书相关信息一致，否则可能会导致无法正常打包或收到推送消息。
- 如需修改包名、应用签名等信息，请在“应用详情”-“各平台信息”中进行修改。
:::

开通App的完整流程较多，但开通web和小程序的流程比较简单，即开即用。可以快速将uni-app项目运行到浏览器或小程序体验。


参考资料：
- [关于Android证书](https://ask.dcloud.net.cn/article/35985#server)
- [iOS证书申请](https://ask.dcloud.net.cn/article/152)

### 修改应用信息
`uni-push`开通完成后，后续仍可以在配置页面修改应用相关信息。

### 关闭UniPush
当应用不再使用`uni-push`时，可在配置页面关闭该功能。

### 其它配置@other-config
- iOS 平台还需要上传专用的推送证书
	+ 证书申请：如何获取推送证书请参考个推官方文档教程 [iOS证书配置指南](https://docs.getui.com/getui/mobile/ios/apns/)
	+ 证书上传入口：消息推送-“配置管理”-“应用配置”
![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/ios.png)
- APP手机厂商推送参数设置（可选，应用进程离线时推送通道）
	![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/20220728173149.png)
	uni-push集成并统一了各个手机厂商的系统级推送，目前支持魅族、OPPO、华为、小米、VIVO。如果需要使用厂商推送，需要先在各厂商开发者平台申请。详见[厂商推送应用创建配置流程](https://www.dcloud.io/docs/a/unipush/manufacturer.pdf)


## 云端打包
应用开通`uni-push`功能以后，只需要在 HBuilderX 中打开`manifest.json`，选择“安卓/iOS模块配置”，在配置页面向下找到推送功能配置，勾选“Push(消息推送)”，然后再选择相应的`uni-push`版本即可。

**注意：** `uni-app x`项目通过编译摇树来控制是否开启`uni-push`，开发者无需手动开启。

## 使用推送
推送使用方法，参考文档 
- [uni-push 2.0](unipush-v2.md)
- [uni-push 1.0](unipush-v1.md)
