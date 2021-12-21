
> `uni-app`支持通过 可视化界面、[`vue-cli`命令行](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c) 两种方式快速创建项目。
> `uni-app` supports two ways to quickly create projects through the visual interface and [`vue-cli`command line](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c).


可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。
The visualization method is relatively simple. HBuilderX has built-in related environment, which is out of the box and does not need to configure nodejs.

开始之前，开发者需先下载安装如下工具：
Before starting, developers need to download and install the following tools:

- HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)
- HBuilderX: [Official IDE download address](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。
HBuilderX is a general front-end development tool, but it is specially enhanced for `uni-app`.

下载App开发版，可开箱即用；如下载标准版，在运行或发行`uni-app`时，会提示安装`uni-app`插件，插件下载完成后方可使用。
Download the App development version, which can be used out of the box; If you download the standard version, when running or publishing `uni-app`, you will be prompted to install the `uni-app` plug-in. The plug-in can be used after the download is complete.

如使用`cli`方式创建项目，可直接下载标准版，因为uni-app编译插件被安装到项目下了。
If you use the `cli` method to create a project, you can download the standard version directly, because the uni-app compilation plugin is installed under the project.


## 创建uni-app
## Create uni-app

在点击工具栏里的文件 -> 新建 -> 项目：
Click File -> New -> Project in the toolbar:
<div align=center>
  <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/9f53bf42-b206-437a-9cd6-333fb6af3904.jpg"/>
</div>

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。
Select the type of `uni-app`, enter the project name, select the template, and click Create to successfully create it.

uni-app自带的模板有 Hello uni-app ，是官方的组件和API示例。还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。
uni-app comes with a template called Hello uni-app, which is an official component and API example. Another important template is the uni ui project template, which is recommended for daily development and has quantities of built-in commonly used components.

<div align=center>
  <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/4da27a35-8683-46ff-b890-cb3e57c94175.jpg"/>
</div>

## 运行uni-app
## Run uni-app


1. 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。
1. Run on browser: Enter the hello-uniapp project, click Run -> Run to browser -> Select browser on the toolbar, and you can experience the H5 version of uni-app in the browser.
  <div align=center>
  	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/52e3ae83-38e7-419f-adf7-7410b80efac5.jpg"/>
  </div>

2. 真机运行：连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。
2. Run on mobile App Playground: Connect the mobile phone, turn on USB debugging, enter the hello-uniapp project, click Run -> Run on mobile App Playground -> Select the device to run, and you can experience uni-app in the device.
	<div align=center>
		<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/5d7ebe44-0146-4cce-8fa8-b57f4f39f358.jpg"/>
	</div>
	
	如手机无法识别，请点击菜单运行-运行到手机或模拟器-真机运行常见故障排查指南。
	If the mobile phone fail to be identified, please click the menu Run - Run to the mobile phone or simulator - Guide to common troubleshooting in run on mobile App Playground.

运行的快捷键是`Ctrl+r`。
The shortcut key for running is `Ctrl+r`.
HBuilderX 还提供了快捷运行菜单，可以按数字快速选择要运行的设备：
HBuilderX also provides a shortcut run menu, which allows quick selection for the equipment to run by pressing number keys:
<div align=center>
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/a8be0b4d-c81d-466a-ab30-38bc86344669.jpg"/>
</div>

如需调试，可参考：[uni-app调试](/snippet?id=使用-chrome-调试)
For debugging, please refer to: [Uni-app debugging](/snippet?id=%E4%BD%BF%E7%94%A8-chrome-%E8%B0%83%E8%AF%95)

## 发布uni-app
## Release uni-app

### 打包为原生App
### Package as a native app

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：
On the HBuilderX toolbar, click Release and select Native app - Cloud packaging, as shown in the figure below:

<div align=center>
  <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/01428666-e555-4e3d-8f08-496e0510a801.jpg"/>
</div>
出现如下界面，点击打包即可。
...
<div align=center>
  <img style="max-width:600px;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/919fc62e-936a-4a3d-8bdb-9f9670f15ed8.jpg"/>
</div>

云端打包支持安心打包，保护用户隐私，不会上传代码和证书，通过差量包制作方式实现安心打包。详见：[https://ask.dcloud.net.cn/article/37979](https://ask.dcloud.net.cn/article/37979)
Cloud packaging supports Packaging At Ease, which protects user privacy without uploading codes and certificates. It achieves Packaging At Ease by differential package production. For details, please see: [https://ask.dcloud.net.cn/article/37979](https://ask.dcloud.net.cn/article/37979)

云打包也支持cli模式，通过HBuilderX的cli方式（不是uni-app的cli），可以调用命令行打包，方便持续集成。详见：[https://hx.dcloud.net.cn/cli/pack](https://hx.dcloud.net.cn/cli/pack)
Cloud packaging also supports cli mode. The command line packaging can be called through the cli method of HBuilderX (not the cli of uni-app) to facilitate continuous integration. For details, please see: [https://hx.dcloud.net.cn/cli/pack](https://hx.dcloud.net.cn/cli/pack)

虽然安心打包已经满足需求，但如仍然希望自己使用 xcode 或 Android studio 进行离线打包，则在 HBuilderX 发行菜单里找到本地打包菜单，生成离线打包资源，然后参考离线打包文档操作：[https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README)。
Although peace of mind packaging has met the demand, if you still want to use xcode or Android studio for offline packaging, find the local packaging menu in HBuilderX release menu, generate offline packaging resources, and then proceed by referring to the offline packaging documentation: [https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README).


### 发布为H5
### Release as H5

1. 在 ``manifest.json`` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)。
1. In the visual interface of `manifest.json`, perform the following configuration (the application base path is not required when publishing in the root directory of the website). At this time, the publishing website path is www.xxx.com/h5, such as: [https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn).
<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/bf90de30-4f37-11eb-8ff1-d5dcf8779628.png" style="max-width:600px;height:auto;"/>
</div>
2. 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。
2. On the toolbar of HBuilderX, click Release, and select the Website - H5 Mobile Version, as shown in the figure below. Click to generate the H5-related resource files and save them in unpackage directory.

<div align=center>
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d6d22340-e7b6-4650-8abb-a4a605de6802.jpg" style="max-width:600px;height:auto;"/>
</div>

**注意**
**Notice**
- `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- The release of `history` mode requires back-end configuration support. For details, please refer to [Back-end configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90).
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- After packaging and deployment, open gzip on the server can further compress the file. For specific configuration, please refer to online sharing: https://juejin.im/post/5af003286fb9a07aac24611b

发布的快捷键是`Ctrl+u`。同样可拉下快速发布菜单并按数字键选择。
The shortcut key released is `Ctrl+u`. You can also pull down the quick release menu and select by pressing number keys.

