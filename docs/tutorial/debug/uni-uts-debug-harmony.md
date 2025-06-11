HBuilderX 4.61+ 运行到鸿蒙，支持Debug调试。包括uvue、uts、混编的ets都支持。

## 开启调试

如下图所示，运行uni-app x项目到鸿蒙，运行成功后，HBuilderX控制台点击`红色虫子`图标，下拉菜单选择【开启调试】，即可开启鸿蒙调试功能。

<img src="https://web-ext-storage.dcloud.net.cn/hx/harmony/harmony-debug.png" style="zoom: 72%;" />

> 注意：鸿蒙调试，依赖鸿蒙调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。

> 注意：如果需要触发应用初始化中的断点，比如App.uvue的onLaunch中，需要点击`红色虫子`图标右边的`重启应用`按钮，重启之后应用初始化中的断点才会生效

> 注意：目前部分变量的显示可能还是以ets的方式显示，因为uts编译结果是ets

## 打断点@add-breakpoint

打开要调试的uts、uvue、ets文件，在代码行号上，鼠标右击或双击添加断点。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add-breakpoint.png" style="zoom: 50%;" />

## 调试视图@debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

下图中包含了uvue、uts、ets的调试步骤

<img src="https://web-ext-storage.dcloud.net.cn/hx/debug/harmony-debug.gif" style="zoom: 60%;" />

调试视图分为5部分:

- [调试工具栏](#debugactions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

## 调试操作@DebugActions

- 继续 `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-action.jpg" style="zoom: 50%;" />

## 数据检查和查看变量@data

### 添加到监视@add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add_to_monitor.png" style="zoom: 50%;" />

### 悬停显示@hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-hovering_window.jpg" style="zoom: 60%;" />

## 联编调试
> HBuilderX 4.71+ 版本支持联编调试，针对 uni-app x 项目有效。

在 HX 里面把 uni-app x 项目运行到鸿蒙时，不仅支持在 uni-app x 项目中进行断点调试，也同时支持对鸿蒙工程目录中的源代码（比如 `.ets` 文件）进行断点调试。

### 开启方式

在 uni-app x 项目根目录中的 `.hbuilderx/launch.json` 文件中添加如下内容（如果文件不存在则手动创建）：

联编功能的介绍可参考线上文档 [项目根目录与鸿蒙工程目录](https://doc.dcloud.net.cn/uni-app-x/native/debug/harmony.html)

```json
{
  "version" : "1.0",
  "configurations": [
    {
      "type": "uni-app:app-harmony",
      "debugWithNativeHarmony": true,
      "nativeHarmonyProjectPath": "D:/native-harmony-project"
    }
  ]
}
```

其中：
- `type` 固定值为 `"uni-app:app-harmony"`。
- `debugWithNativeHarmony` 用于开启联编调试功能，缺省为 `false` 不开启。
- `nativeHarmonyProjectPath` 用于指定调试运行的时候使用的鸿蒙工程目录（即导入 HbuilderX 的那个宿主应用项目的根目录），无缺省值，如果开启了联编调试则此项必填，且指向的目录必须已存在。

