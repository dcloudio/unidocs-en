
除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。
In addition to the HBuilderX visual interface, you can also use `cli` scaffolding, and you can create an `uni-app` project through `vue-cli`.


## 环境安装
## Environmental installation

全局安装vue-cli
Globally installed vue-cli

```shell
npm install -g @vue/cli
```

## 创建uni-app
## Create uni-app

**使用正式版**（对应HBuilderX最新正式版）
**uses the official version** (corresponding to the latest official version of HBuilderX)

```shell
vue create -p dcloudio/uni-preset-vue my-project
```

**使用alpha版**（对应HBuilderX最新alpha版）
**uses the alpha version** (corresponding to the latest alpha version of HBuilderX)

```shell
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

此时，会提示选择项目模板，初次体验建议选择 `hello uni-app` 项目模板，如下所示：
At this point, you will be prompted to select a project template. It is recommended to select the `hello uni-app` project template for the first experience, as shown below:

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

#### 自定义模板
#### Custom templates
选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。
When choosing a custom template, you need to fill in the uni-app template address, which is actually the address of the repository hosted in the Cloud. Take GitHub as an example, the address format is `userName/repositoryName`, such as `dcloudio/uni-template-picture` is to download the image template.

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)
For more supported download methods, please refer to the description of this plug-in: [download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### 国内特殊情况
#### Special cases in China
模板项目存放于 Github，由于国内网络环境问题，可能下载失败。针对此问题可以尝试如下措施：
The template project is stored in Github. The download may fail due to network problems in China. To solve this problem, the following measures can be taken:
* 更换网络重试，比如使用 4g 网络
* Change the network and retry, such as using 4g network
* 在设备或路由器的网络设置中增加 DNS（如：8.8.8.8）
* Add DNS (e.g.: 8.8.8.8) to the network settings of the device or router
* 在设备中增加固定的 hosts（如：140.82.113.4 github.com）
* Add fixed hosts (e.g.: 140.82.113.4 github.com) to the equipment

#### 修改依赖为指定版本
#### Modifying dependency to the specified version

1. 查看 HBuilderX 对应的 NPM 依赖版本: 打开 [NPM版本记录](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx)，版本号 2.0.0- 后面是与 HBuilderX 对应的版本号且小版本不会超过9，比如 HBuilderX 2.7.5.20200518 对应的版本号 2.0.0-27520200518001，2.0.0-271420200618 对应的为 2.0.0-27920200618002。
1. View the NPM dependency version corresponding to HBuilderX: Open [NPM version record](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx), and the version number is 2.0.0- followed by the version number corresponding to HBuilderX. The minor version will not exceed 9. For example, the version number corresponds to HBuilderX 2.7.5.20200518 is 2.0.0-27520200518001, and 2.0.0-271420200618 corresponds to 2.0.0-27920200618002.

2. 批量修改 package.json 中 uni 相关依赖为指定的版本号（去掉版本号前面 ^）。
2. Modify the uni-related dependency in batch package.json to the specified version number (remove the ^ before the version number).

3. 对于有变化的依赖进行增删，提示不存指定版本的依赖可以保留原始版本或者删除，运行时提示缺少的依赖自行安装。
3. Add or delete the changed dependencies, keep the original version or delete the dependencies that are prompted not to store the specified version, and install the dependencies that are prompted for absence at runtime by yourself.

## 运行、发布uni-app
## Run and release uni-app

```shell
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：
The possible values of `%PLATFORM%` are as follows:

|值|平台|
| Value| Platform|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
| app-plus| app platform generates packaged resources (supports npm run build:app-plus, which can be used for continuous integration. run is not supported, and debugging still needs to be done in HBuilderX)|
|h5|H5|

可以自定义更多条件编译平台，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。
You can customize more conditional compilation platforms, refer to [package.json document](https://uniapp.dcloud.io/collocation/package).

**其他：**
**Others:**

* 目前使用`npm run build:app-plus`会在`/dist/build/app-plus`下生成app打包资源。如需制作wgt包，将`app-plus`中的文件压缩成zip（注意：不要包含`app-plus目录`），再重命名为`${appid}.wgt`， `appid`为`manifest.json`文件中的`appid`。
* Currently using `npm run build:app-plus` will generate app packaging resources under `/dist/build/app-plus`. To make a wgt package, compress the files in `app-plus` into zip (note: do not include `app-plus directory`), and rename it to `${appid}.wgt`. `appid` is the `appid` in `manifest.json` file.
* dev 模式编译出的各平台代码存放于根目录下的 ``/dist/dev/``目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
* The code for each platform compiled in dev mode is stored in the `/dist/dev/` directory under the root directory. Open the development tools of each platform and select the corresponding platform directory to preview (the h5 platform will not be in this directory, but will exist in the cache);
* build 模式编译出的各平台代码存放于根目录下的 ``/dist/build/`` 目录，发布时选择此目录进行发布；
* The code for each platform compiled in build mode is stored in the `/dist/build/` directory under the root directory, and this directory is selected for publishing when publishing;
* dev 和 build 模式的区别：
* Differences between dev and build mode:
    1. dev 模式有 SourceMap 可以方便的进行断点调试；
    1. dev mode has SourceMap for easy breakpoint debugging;
    2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
    2. build mode will compress the code to be smaller and more suitable for releasing as official application;
    3. 进行 [环境判断](/frame?id=运行环境判断) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。
    3. When performing [environment judgment](/frame?id=%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83%E5%88%A4%E6%96%AD), the value of process.env.NODE_ENV in dev mode is development, and the value of process.env.NODE_ENV in build mode is production.

## 使用cli创建项目和使用HBuilderX可视化界面创建项目有什么区别
## What is the difference between creating a project using the cli and creating a project using the HBuilderX visual interface?

#### 编译器的区别
#### Differences among compilers

* ``cli`` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，执行 ``npm update``，或者手动修改 package.json 中的 uni 相关依赖版本后执行 ``npm install``。更新后可能会有新增的依赖并不会自动安装，手动安装缺少的依赖即可。
* For the project created by `cli`, the compiler is installed under the project. It will not upgrade following with HBuilderX. To upgrade the compiler, execute `npm update`, or manually modify the uni-related dependency version in package.json and execute `npm install`. After the update, there may be new dependencies, which will not be automatically installed, but the missing dependencies can be installed manually.
* HBuilderX可视化界面创建的项目，编译器在HBuilderX的安装目录下的plugin目录，随着HBuilderX的升级会自动升级编译器。
* The project created by the visual interface of HBuilderX and the plugin directory of the compiler in the installation directory of HBuilderX will automatically upgrade the compiler with the upgrade of HBuilderX.
* 已经使用``cli``创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* If you want to continue using the project created with `cli` in HBuilderX, you can drag the project to HBuilderX. Note that if the whole project is dragged into HBuilderX, the compiler under the project will be used when compiling. If the src directory is dragged into HBuilderX, the compiler in plugin directory under HBuilderX installation directory will be used.
* ``cli``版如果想安装less、scss、ts等编译器，需自己手动npm安装。在HBuilderX的插件管理界面安装无效，那个只作用于HBuilderX创建的项目。
* If you want to install less, scss, ts and other compilers in the `cli` version, you need to manually install them with npm. Installation of plug-in management interface in HBuilderX is invalid, and that only works on projects created by HBuilderX.
 
#### 开发工具的区别
#### Differences among development tools
* ``cli``创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* The project created by `cli` has built-in d.ts. Like other regular npm libraries, it can be normally developed in [vscode](https://ask.dcloud.net.cn/article/36286), [webstorm](https://ask.dcloud.net.cn/article/36307) development tools that support d.ts and there are grammar hints.
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 ``npm init``，然后``npm i @types/uni-app -D``，来补充d.ts。
* Projects created with HBuilderX are not suffixed with d.ts. HBuilderX has a built-in uni-app syntax prompt library. If you need to open the project created by HBuilderX in other editors and add d.ts, you can first execute `npm init` and then `npm i @types/uni-app -D` under the project to add d.ts.
* 但vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* However, other development tools, such as vscode, are less efficient than HBuilderX in vue or uni-app fields. For details, please see: [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* When releasing App, HBuilderX is still needed. Other development tools cannot release App, but can release H5. If you need to develop App, you can first run it in HBuilderX, then modify and save the code in other editors. The modified code will automatically be synchronized to the mobile phone base.
* 如果使用``cli``创建项目，那下载HBuilderX时只需下载10M的标准版即可。因为编译器已经安装到项目下了。
* If you use `cli` to create a project, you only need to download the 10M standard version when downloading HBuilderX. Because the compiler has been installed under the project.


注意：HBuilderX创建的项目，一样可以使用npm，参考：[https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)
Note: Projects created by HBuilderX can also use npm, please refer to: [https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)
