
> `uni-app`支持通过 可视化界面、[`vue-cli`命令行](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c) 两种方式快速创建项目。
> `uni-app` supports through the visual interface, [`vue-cli` command line](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli% e5%91%bd%e4%bb%a4%e8%a1%8c) Two ways to quickly create a project.

### 1. 通过 HBuilderX 可视化界面
### 1. Via HBuilderX visual interface

可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。
The visualization method is relatively simple. HBuilderX has a built-in related environment, which can be used out of the box without configuring nodejs.

开始之前，开发者需先下载安装如下工具：
Before starting, developers need to download and install the following tools:

- HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)
- HBuilderX: [Official IDE download address](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。
HBuilderX is a general-purpose front-end development tool, but it is specially enhanced for `uni-app`.

下载App开发版，可开箱即用；如下载标准版，在运行或发行`uni-app`时，会提示安装`uni-app`插件，插件下载完成后方可使用。
Download the App development version, which can be used out of the box; if you download the standard version, you will be prompted to install the `uni-app` plug-in when you run or release the `uni-app`. The plug-in can be used after the download is complete.

如使用`cli`方式创建项目，可直接下载标准版，因为uni-app编译插件被安装到项目下了。
If you use the `cli` method to create a project, you can directly download the standard version, because the uni-app compilation plugin is installed under the project.


## 创建uni-app
## Create uni-app

在点击工具栏里的文件 -> 新建 -> 项目：
Click File -> New -> Project in the toolbar:
<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c16d8d70-4f37-11eb-8a36-ebb87efcf8c0.png"/>
</div>

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。
Select the `uni-app` type, enter the project name, select the template, and click Create to successfully create it.

uni-app自带的模板有 Hello uni-app ，是官方的组件和API示例。还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。
The template that comes with uni-app is Hello uni-app, which is the official component and API example. Another important template is the uni ui project template, which is recommended for daily development. A large number of commonly used components have been built-in.

<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c0966750-4f37-11eb-97b7-0dc4655d6e68.png"/>
</div>

## 运行uni-app
## Run uni-app
1. 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。
1. Browser running: Enter the hello-uniapp project, click Run on the toolbar -> Run to browser -> select the browser, you can experience the H5 version of uni-app in the browser.
  <div align=center>
  	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c2808410-4f37-11eb-97b7-0dc4655d6e68.png"/>
  </div>

2. 真机运行：连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。
2. Real machine operation: connect the mobile phone, turn on the USB debugging, enter the hello-uniapp project, click on the toolbar to run -> real machine operation -> select the running device, you can experience uni-app in the device.
	<div align=center>
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c371c1e0-4f37-11eb-97b7-0dc4655d6e68.png"/>
	</div>
	
	如手机无法识别，请点击菜单运行-运行到手机或模拟器-真机运行常见故障排查指南。
	If the mobile phone cannot be recognized, please click the menu to run-run to mobile phone or simulator-real machine running common troubleshooting guide.
	注意目前开发App也需要安装微信开发者工具。
	Note that the current App development also requires the installation of WeChat Developer Tools.
	
	
运行的快捷键是`Ctrl+r`。
The shortcut key for running is `Ctrl+r`.
HBuilderX 还提供了快捷运行菜单，可以按数字快速选择要运行的设备：
HBuilderX also provides a quick run menu, you can quickly select the device to run according to the number:
<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/aef21b70-4f37-11eb-a16f-5b3e54966275.png"/>
</div>

如需调试，可参考：[uni-app调试](/snippet?id=使用-chrome-调试)
For debugging, please refer to: [uni-app debugging](/snippet?id=use-chrome-debug)

## 发布uni-app
## Publish uni-app

### 打包为原生App（云端）
### Packaged as native App (cloud)

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：
On the HBuilderX toolbar, click Publish and select native app-cloud packaging, as shown in the figure below:

<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b8332fd0-4f37-11eb-8ff1-d5dcf8779628.png"/>
</div>
出现如下界面，点击打包即可。
The following interface appears, just click Package.
<div align=center>
  <img style="max-width:600px;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/001a20b0-d85a-11ea-81ea-f115fe74321c.png"/>
</div>

### 打包为原生App（离线）
### Packaged as native App (offline)

``uni-app`` 支持离线打包，在 HBuilderX 发行菜单里生成离线打包资源，然后参考离线打包文档操作，可以从HBuilderX的发行菜单里找到文档链接，也可以直接访问：[https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README)。
``uni-app`` supports offline packaging. Generate offline packaging resources in the HBuilderX release menu, and then refer to the offline packaging document operation. You can find the document link from the HBuilderX release menu, or you can directly visit: [https://nativesupport .dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README).

在HBuilderX工具栏，点击发行，选择本地打包，如下图，点击即可生成离线打包资源。
On the HBuilderX toolbar, click Release, select local packaging, as shown in the figure below, click to generate offline packaging resources.

<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b9269080-4f37-11eb-8a36-ebb87efcf8c0.png"/>
</div>

### 发布为H5
### Publish as H5

1. 在 ``manifest.json`` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)。
1. In the visual interface of ``manifest.json``, perform the following configuration (it is not necessary to configure the basic path of the application when publishing in the root directory of the website). At this time, the path of the publishing website is www.xxx.com/h5, such as: [https:/ /hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn).
<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/bf90de30-4f37-11eb-8ff1-d5dcf8779628.png" style="max-width:600px;height:auto;"/>
</div>
2. 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。
2. On the HBuilderX toolbar, click Release, select the website-H5 mobile version, as shown in the figure below, click to generate H5 related resource files and save them in the unpackage directory.

<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b7391860-4f37-11eb-8a36-ebb87efcf8c0.png" style="max-width:600px;height:auto;"/>
</div>

**注意**
**Notice**
- `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- The release of `history` mode requires back-end configuration support, see: [Back-end configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90% 8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- After packaging and deployment, open gzip on the server to further compress the files. For specific configuration, please refer to the online sharing: https://juejin.im/post/5af003286fb9a07aac24611b

发布的快捷键是`Ctrl+u`。同样可拉下快速发布菜单并按数字键选择。
The released shortcut key is `Ctrl+u`. You can also pull down the quick release menu and press the number keys to select.


# 2. 通过vue-cli命令行
# 2. Via vue-cli command line

除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。
In addition to the HBuilderX visual interface, you can also use the `cli` scaffolding, and you can create a `uni-app` project through `vue-cli`.

## 环境安装
## Environment installation

全局安装vue-cli
Install vue-cli globally
```
npm install -g @vue/cli
```

## 创建uni-app
## Create uni-app

**使用正式版**（对应HBuilderX最新正式版）
**Use the official version** (corresponding to the latest official version of HBuilderX)
```
vue create -p dcloudio/uni-preset-vue my-project
```

**使用alpha版**（对应HBuilderX最新alpha版）
**Use the alpha version** (corresponding to the latest alpha version of HBuilderX)

```
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

此时，会提示选择项目模板，初次体验建议选择 `hello uni-app` 项目模板，如下所示：
At this point, you will be prompted to select a project template. For the first experience, it is recommended to select the `hello uni-app` project template, as shown below:

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

#### 自定义模板
#### Custom template

选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。
When choosing a custom template, you need to fill in the uni-app template address, which is actually the address of the warehouse hosted in the cloud. Take GitHub as an example, the address format is `userName/repositoryName`, such as `dcloudio/uni-template-picture` to download a picture template.

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)
For more supported download methods, please refer to the description of this plugin: [download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### 修改依赖为指定版本
#### Modify the dependency to the specified version

1. 查看 HBuilderX 对应的 NPM 依赖版本: 打开 [NPM版本记录](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx)，版本号 2.0.0- 后面是与 HBuilderX 对应的版本号且小版本不会超过9，比如 HBuilderX 2.7.5.20200518 对应的版本号 2.0.0-27520200518001，2.0.0-271420200618 对应的为 2.0.0-27920200618002。
1. Check the NPM dependency version corresponding to HBuilderX: Open [NPM version record](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx), version number 2.0.0- followed by HBuilderX corresponds to the version number and the minor version does not exceed 9. For example, HBuilderX 2.7.5.20200518 corresponds to the version number 2.0.0-27520200518001, 2.0.0-271420200618 corresponds to 2.0.0-27920200618002.

2. 批量修改 package.json 中 uni 相关依赖为指定的版本号（去掉版本号前面 ^）。
2. Batch modify the uni-related dependencies in package.json to the specified version number (remove the ^ in front of the version number).

3. 对于有变化的依赖进行增删，提示不存指定版本的依赖可以保留原始版本或者删除，运行时提示缺少的依赖自行安装。
3. Add or delete dependencies that have changed. If the specified version of the dependency does not exist, you can keep the original version or delete it. When running, it prompts that the missing dependency is installed by itself.

## 运行、发布uni-app
## Run and publish uni-app

```
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：
The possible values of ``%PLATFORM%`` are as follows:

|值|平台|
|Value|Platform|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
|app-plus|app platform generates packaged resources (supports npm run build:app-plus, which can be used for continuous integration. Run is not supported, operation and debugging still needs to be operated in HBuilderX)|
|h5|H5|

可以自定义更多条件编译平台，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。
You can customize more conditional compilation platforms, refer to [package.json document](https://uniapp.dcloud.io/collocation/package).


**其他：**
**other:**
* 目前使用`npm run build:app-plus`会在`/dist/build/app-plus`下生成app打包资源。如需制作wgt包，将`app-plus`中的文件压缩成zip（注意：不要包含`app-plus目录`），再重命名为`${appid}.wgt`， `appid`为`manifest.json`文件中的`appid`。
* Currently using `npm run build:app-plus` will generate app packaging resources under `/dist/build/app-plus`. To make a wgt package, compress the files in `app-plus` into a zip (note: do not include the `app-plus directory`), and then rename it to `${appid}.wgt`, `appid` to `manifest The `appid` in the .json` file.
* dev 模式编译出的各平台代码存放于根目录下的 ``/dist/dev/``目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
* The code for each platform compiled in dev mode is stored in the ``/dist/dev/'' directory under the root directory. Open the development tools of each platform and select the corresponding platform directory to preview it (the h5 platform will not be in this directory, but exists in In cache);
* build 模式编译出的各平台代码存放于根目录下的 ``/dist/build/`` 目录，发布时选择此目录进行发布；
* The code for each platform compiled in build mode is stored in the ``/dist/build/'' directory under the root directory, and this directory is selected for publishing when publishing;
* dev 和 build 模式的区别：
* The difference between dev and build mode:
    1. dev 模式有 SourceMap 可以方便的进行断点调试；
    1. There is SourceMap in dev mode to facilitate breakpoint debugging;
    2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
    2. The build mode will compress the code, making it smaller and more suitable for publishing as an official version of the application;
    3. 进行 [环境判断](/frame?id=运行环境判断) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。
    3. When performing [Environment Judgment](/frame?id=Run Environment Judgment), the value of process.env.NODE_ENV in dev mode is development, and the value of process.env.NODE_ENV in build mode is production.


## 使用cli创建项目和使用HBuilderX可视化界面创建项目有什么区别
## What is the difference between using cli to create a project and using the HBuilderX visual interface to create a project

#### 编译器的区别
#### The difference between compilers

* ``cli`` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，执行 ``npm update``，或者手动修改 package.json 中的 uni 相关依赖版本后执行 ``npm install``。更新后可能会有新增的依赖并不会自动安装，手动安装缺少的依赖即可。
* For projects created by ``cli``, the compiler is installed under the project. And will not follow HBuilderX upgrade. If you need to upgrade the compiler, execute “npm update”, or manually modify the uni-related dependency version in package.json and execute “npm install”. After the update, there may be new dependencies that will not be installed automatically. You can install the missing dependencies manually.
* HBuilderX可视化界面创建的项目，编译器在HBuilderX的安装目录下的plugin目录，随着HBuilderX的升级会自动升级编译器。
* For projects created by the HBuilderX visual interface, the compiler is in the plugin directory under the HBuilderX installation directory. The compiler will be automatically upgraded with the upgrade of HBuilderX.
* 已经使用``cli``创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* For projects that have been created using ``cli'', if you want to continue to use them in HBuilderX, you can drag the project to HBuilderX. Note that if you drag the entire project into HBuilderX, the compiler under the project will be used when compiling. If you drag the src directory into HBuilderX, the compiler in the plugin directory under the HBuilderX installation directory is taken.
* ``cli``版如果想安装less、scss、ts等编译器，需自己手动npm安装。在HBuilderX的插件管理界面安装无效，那个只作用于HBuilderX创建的项目。
* If you want to install less, scss, ts and other compilers in the ``cli'' version, you need to manually install it by npm. Installation in the plug-in management interface of HBuilderX is invalid, and that only applies to projects created by HBuilderX. 

#### 开发工具的区别
#### The difference between development tools
* ``cli``创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* The project created by ``cli'' has built-in d.ts, which is the same as other regular npm libraries, available in [vscode](https://ask.dcloud.net.cn/article/36286), [webstorm]( https://ask.dcloud.net.cn/article/36307) and other development tools that support d.ts are normally developed and have syntax prompts.
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 ``npm init``，然后``npm i @types/uni-app -D``，来补充d.ts。
* Projects created using HBuilderX do not have d.ts, and HBuilderX has a built-in uni-app syntax hint library. If you need to open the project created by HBuilderX in other editors and add d.ts, you can first execute ``npm init'' under the project, and then ``npm i @types/uni-app -D'' to add d. .ts.
* 但vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* But other development tools such as vscode are not as efficient as HBuilderX in the field of vue or uni-app. For details, please refer to: [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* HBuilderX still needs to be used when publishing App. Other development tools cannot publish App, but can publish H5. If you need to develop an App, you can run it in HBuilderX first, and then modify and save the code in other editors. After the code is modified, it will be automatically synchronized to the mobile phone base.
* 如果使用``cli``创建项目，那下载HBuilderX时只需下载10M的标准版即可。因为编译器已经安装到项目下了。
* If you use ``cli'' to create a project, you only need to download the 10M standard version when downloading HBuilderX. Because the compiler has been installed under the project.
* 对 `cli` 使用有疑问，欢迎扫码加入 uni-app 微信交流群讨论：
* If you have any questions about the use of `cli`, please scan the code to join the uni-app WeChat exchange group discussion:
	<br/><img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/wx-barcode.png" width="250"/>
注意：HBuilderX创建的项目，一样可以使用npm，参考：[https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)
Note: Projects created by HBuilderX can also use npm, refer to: [https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp. dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)

