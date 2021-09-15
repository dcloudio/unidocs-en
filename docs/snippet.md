
### 使用代码块直接创建组件模板
### Use code blocks to directly create component templates

为提升开发效率，HBuilderX将 ```uni-app``` 常用代码封装成了以 ```u``` 开头的代码块，如在 ```template``` 标签内输入 ```ulist``` 回车，会自动生成如下代码：
In order to improve development efficiency, HBuilderX encapsulates the common code of ```uni-app``` into code blocks beginning with ```u```, such as entering ```ulist in the ```template``` tag ``` Press Enter, the following code will be automatically generated:

```html
<uni-list>
	<uni-list-item title="" note=""></uni-list-item>
	<uni-list-item title="" note=""></uni-list-item>
</uni-list>
```
注意需保障uni-list组件在项目的components目录下。比较简单的方式，是新建项目时，选 uni ui项目模板，在里面即可随便敲所有u开头的代码块。如果不是 uni ui项目模板，那么需要去插件市场手动把[uni ui组件](https://ext.dcloud.net.cn/plugin?id=55)下载到工程里。
Note that you need to ensure that the uni-list component is in the components directory of the project. The simpler way is to select the uni ui project template when creating a new project, and you can just type all the code blocks starting with u in it. If it is not the uni ui project template, then you need to go to the plug-in market to manually download [uni ui component](https://ext.dcloud.net.cn/plugin?id=55) into the project.

代码块分为Tag代码块、JS代码块，如在 ```script``` 标签内输入 ```uShowToast``` 回车，会自动生成如下代码：
The code blocks are divided into Tag code blocks and JS code blocks. For example, if you enter ```uShowToast``` in the ```script``` tag and press Enter, the following code will be automatically generated:

```js
uni.showToast({
	title: '',
	mask: false,
	duration: 1500
});
```

```uni-app```已支持代码块见下方列表。
The supported code blocks of ```uni-app``` are shown in the list below.

#### Tag代码块
#### Tag code block

- uButton
- uCheckbox
- uGrid：宫格，需引用uni ui
- uGrid: grid grid, need to quote uni ui
- uList：列表，需引用uni ui
- uList: list, need to quote uni ui
- uListMedia
- uRadio
- uSwiper
- ......

几乎各种组件不管是内置组件还是uni ui的组件，均已封装为代码块，在HBuilderX的vue代码template区域中敲u，代码助手会提示所有可见列表。也可在HBuilderX菜单工具-代码块设置-vue代码块的左侧列表查阅所有。
Almost all kinds of components, whether they are built-in components or uni ui components, have been encapsulated as code blocks. Press u in the vue code template area of HBuilderX, and the code assistant will prompt all visible lists. You can also check all of them in the left list of HBuilderX menu tool-code block settings-vue code block.
除组件外，其他常用代码块包括：
In addition to components, other commonly used code blocks include:
- viewfor：生成一段带有v-for循环结构的视图代码块
- viewfor: Generate a view code block with a v-for loop structure
- vbase：生成一段基本的vue代码结构
- vbase: Generate a basic vue code structure

#### JS代码块
#### JS code block

##### uni api代码块
##### uni api code block
- uRequest
- uGetLocation
- uShowToast
- uShowLoading
- uHideLoading
- uShowModal
- uShowActionSheet
- uNavigateTo
- uNavigateBack
- uRedirectTo
- uStartPullDownRefresh
- uStopPullDownRefresh
- uLogin
- uShare
- uPay
- ......

几乎各种常用js api，均已封装为代码块，在HBuilderX的js代码中敲u，代码助手会提示所有可见列表。也可在HBuilderX菜单工具-代码块设置-js代码块的左侧列表查阅所有。
Almost all kinds of commonly used js APIs have been encapsulated as code blocks. Hit u in the js code of HBuilderX, and the code assistant will prompt all visible lists. You can also check all of them in the left list of HBuilderX menu tool-code block settings-js code block.

##### vue js代码块
##### vue js code block
- vImport：导入文件
- vImport: Import file
- ed：export default
- ed: export default
- vData：输出 data(){return{}}
- vData: output data(){return{}}
- vMethod：输出 methods:{}
- vMethod: Output methods:{}
- vComponents：输出 components: {}
- vComponents: output components: {}

##### 其他常用js代码块
##### Other commonly used js code blocks
- iff：简单if
- iff: simple if
- forr：for循环结构体
- forr: for loop structure
- fori：for循环结构体并包含i
- fori: for loop structure and include i
- funn：函数
- funn: function
- funa：匿名函数
- funa: anonymous function
- rt：return true
- clog：输出："console.log()"
- clog: output: "console.log()"
- clogvar：增强的日志输出，可同时把变量的名字打印出来
- clogvar: enhanced log output, which can print out the name of the variable at the same time
- varcw：输出："var currentWebview = this.$mp.page.$getAppWebview()"
- varcw: Output: "var currentWebview = this.$mp.page.$getAppWebview()"
- ifios：iOS的平台判断
- ifios: iOS platform judgment
- ifAndroid：Android的平台判断
- ifAndroid: Android platform judgment
预置代码块不满足需求的话，可以自定义代码块，教程参考[https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924)
If the preset code block does not meet your needs, you can customize the code block. Refer to the tutorial [https://ask.dcloud.net.cn/article/35924](https://ask.dcloud.net.cn/article/35924 )


### 使用HBuilderX内置浏览器调试H5
### Use HBuilderX built-in browser to debug H5

打开 ``uni-app`` 项目的页面，点HBuilderX右上角的预览按钮，可以在内置浏览器里打开H5运行结果，也可以点右键打开控制台调试。
Open the page of the ``uni-app`` project, click the preview button in the upper right corner of HBuilderX, you can open the H5 running results in the built-in browser, or you can right-click to open the console for debugging.

修改保存工程源码时，右边的浏览器内容可以自动刷新。
When you modify and save the project source code, the browser content on the right can be refreshed automatically.

在HBuilderX控制台里，可以直接看到内置浏览器打印的日志。
In the HBuilderX console, you can directly see the logs printed by the built-in browser.

打开内置浏览器的控制台的 `Sources` 栏，可以给 js 打断点调试。
Open the `Sources` column of the console of the built-in browser, and you can interrupt the debugging of js.

在 `Page` 下找到 `webpack` 里的工程目录，可直接找到对应的`vue`页面进行断点调试；或按 `Ctrl+P`搜文件名，进入页面调试；也可点击控制台的 `log` 信息，进入对应的页面进行调试。
Find the project directory in `webpack` under `Page`, you can directly find the corresponding `vue` page for breakpoint debugging; or press `Ctrl+P` to search for the file name and enter the page debugging; you can also click on the console` log` information, enter the corresponding page for debugging.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/56abde90-4f34-11eb-8a36-ebb87efcf8c0.png)

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5762ab70-4f34-11eb-bdc1-8bd33eb6adaa.png)


`点击工具栏的运行 -> 运行到浏览器 -> 选择 Chrome`，也可将 `uni-app`运行到 浏览器，可参考 [运行uni-app](/quickstart?id=运行uni-app)。
`Click Run on the toolbar -> Run to browser -> Select Chrome`, you can also run `uni-app` to the browser, please refer to [Run uni-app](/quickstart?id=Run uni-app) .


### 关于 App 的调试debug
### About App debugging debug

常规开发里，在HBuilderX的运行菜单里运行App，手机端的错误或console.log日志信息会直接打印到控制台。
In conventional development, run the App in the run menu of HBuilderX, and the error or console.log log information on the mobile phone will be directly printed to the console.

如果需要更多功能，比如审查元素、打断点debug，则需要启动调试模式。自 `HBuilderX 2.0.3+` 版本起开始支持 `App` 端的调试。
If you need more functions, such as reviewing elements and breaking point debug, you need to start the debug mode. Since `HBuilderX 2.0.3+` version, debugging on the `App` side has been supported.

#### 打开调试窗口
#### Open the debug window

在 `HBuilderX` 中，正确运行项目： `运行 --> 运行到手机或模拟器 --> 选择设备`，项目启动后，在下方的控制台选择 `debug` 图标。
In `HBuilderX`, run the project correctly: `Run --> Run to mobile phone or simulator --> Select device`, after the project is started, select the `debug` icon in the console below.

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/55245430-4f34-11eb-97b7-0dc4655d6e68.png)

正确打开调试窗口后，显示如下：
After the debug window is opened correctly, the display is as follows:

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/50f7e890-4f34-11eb-b680-7980c8a877b8.png)
#### Elements

根据上一步，启动完成`debug`窗口后，可以看到`Elements`。`Elements` 主要显示当前页面的组织结构，目前`Elements`只支持`nvue`。
According to the previous step, after launching the `debug` window, you can see `Elements`. `Elements` mainly displays the organization structure of the current page. Currently `Elements` only supports `nvue`.
![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5433b2a0-4f34-11eb-8a36-ebb87efcf8c0.png)

#### console.log打日志
#### console.log

`console.log`是我们日常开发最常用的调试方法，`HBuilderX`中当然也不能少。
`console.log` is the most commonly used debugging method for our daily development, and of course it cannot be less in `HBuilderX`.
- App端提供真机运行的`console.log`日志输出，运行到真机或模拟器时，不用点`debug`按钮，操作手机，会在`HBuilderX`的控制台直接输出日志。
- App provides the log output of `console.log` running on the real machine. When running on the real machine or simulator, you don't need to click the `debug` button to operate the mobile phone, and the log will be output directly on the console of `HBuilderX`.

- 如果是比较复杂的逻辑，那就推荐使用调试工具中的`console`了。根据上一步，启动完成`debug`窗口后，执行`console.log`方法就可以看到打印的内容了。
- If the logic is more complicated, it is recommended to use the `console` in the debugging tool. According to the previous step, after launching the `debug` window, execute the `console.log` method to see the printed content.

`debug`窗口中看`console.log`的方法如下图：
The method of viewing `console.log` in the `debug` window is as follows:

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/53673ae0-4f34-11eb-a16f-5b3e54966275.jpg)



#### 调试页面
#### Debug page

在调试窗口控制台的 `Sources` （图中指示1） 栏，可以给 `js` 打断点调试。
In the `Sources` (indicated 1 in the figure) column of the console of the debug window, you can set breakpoint debugging for `js`.

在 `uniapp`（图中指示2）下找到需要调试的页面，单击打开 ，在右侧可以看到我们需要调试的内容（图中指示3）。在需要调试的代码行号的位置，点击打上断点（图中指示4）。
Find the page that needs to be debugged under `uniapp` (indication 2 in the figure), click to open, and you can see what we need to debug on the right side (indication 3 in the figure). At the position of the code line number that needs to be debugged, click to put a breakpoint (indicated 4 in the figure).

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/58f09e70-4f34-11eb-8a36-ebb87efcf8c0.png)

之后，在设备上进行操作，进入断点位置，可以方便我们跟踪调试代码。
After that, operate on the device and enter the breakpoint position, which can facilitate us to track and debug the code.

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/5839d190-4f34-11eb-8a36-ebb87efcf8c0.png)

#### 同步断点到调试器
#### Synchronize breakpoints to the debugger
在控制台众多代码中寻找要调试的代码是比较麻烦的一件事，`HBuilderX`的调试还提供一个便利的功能，可直接在编辑器中打断点，断点会自动同步到调试工具中。
It is troublesome to find the code to be debugged among the many codes in the console. The debugging of `HBuilderX` also provides a convenient function, which can directly interrupt the breakpoint in the editor, and the breakpoint will be automatically synchronized to the debugging tool. .

操作步骤：在HBuilderX编辑器中对目标行的行号处点右键，在右键菜单中选择“同步断点到调试器”，然后调试控制台会自动打开对应的代码并在指定行处标记断点。演示如下：
Operation steps: Right-click the line number of the target line in the HBuilderX editor, select "Sync breakpoint to debugger" in the right-click menu, and then the debugging console will automatically open the corresponding code and mark the breakpoint at the specified line . The demonstration is as follows:

![debug](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/55de5560-4f34-11eb-8a36-ebb87efcf8c0.gif)


Tip 
- `debug`仅支持自定义组件模式。如果是非自定义组件模式，请在`manifest`里配置选为自定义组件模式。非自定义组件模式即将停止支持，[详见](https://ask.dcloud.net.cn/article/36385)
-`debug` only supports custom component mode. If it is a non-custom component mode, please configure it as a custom component mode in the `manifest`. The non-custom component mode will stop supporting, [see details](https://ask.dcloud.net.cn/article/36385)
- `vue` 和 `nvue` 页面均支持断点调试
- Both `vue` and `nvue` pages support breakpoint debugging
- 目前仅支持 `nvue` 页面审查元素，`vue` 页面暂不支持，以及 `Android` 平台的 `nvue` 审查元素暂不支持查看 `style`
- Currently only the `nvue` page review element is supported, the `vue` page does not currently support, and the `nvue` review element of the `Android` platform does not currently support viewing `style`
- App端提供真机运行的`console.log`日志输出，运行到真机或模拟器时，不用点`debug`按钮，运行手机App，会在`HBuilderX`的控制台直接输出日志。
- App provides the log output of `console.log` running on the real machine. When running on the real machine or simulator, you don't need to click the `debug` button to run the mobile app, and the log will be output directly on the console of `HBuilderX`.
- 如果是调试`App`的界面和常规API，推荐编译到H5端，点`HBuilderX`右上角的预览，在内置浏览器里调`Dom`，保存后立即看到结果，调试更方便。并且H5端也支持`titleNView`的各种复杂设置。唯一要注意的就是`css`兼容性，使用太新的`css`在`pc`上预览可能正常，但低端`Android`上异常，具体可查询`caniuse`等网站。
- For debugging the interface and regular API of `App`, it is recommended to compile to the H5 end, click the preview in the upper right corner of `HBuilderX`, adjust `Dom` in the built-in browser, and see the result immediately after saving, making debugging more convenient. And the H5 terminal also supports various complex settings of `titleNView`. The only thing to pay attention to is `css` compatibility. Using too new `css` to preview on `pc` may be normal, but it is abnormal on the low-end `Android`. For details, please check websites such as `caniuse`.
- 常用的开发模式就是`pc`上使用内置浏览器预览调dom，运行到真机上看`console.log`。如果是很复杂的问题才使用`debug`。
- The commonly used development mode is to use the built-in browser to preview and adjust the dom on the `pc`, and run it on the real machine to see the `console.log`. Use `debug` only if it is a very complicated problem.
- uni-app的App端的webkit remote debug，只能调试视图层，不能调试逻辑层。因为uni-app的js不是运行在webview里，而是独立的jscore里。
- The webkit remote debug on the App side of uni-app can only debug the view layer, not the logic layer. Because the js of uni-app is not running in the webview, but in the independent jscore.
- 部分manifest配置，如三方sdk配置，需要打包后生效的，可以打包一个自定义运行基座。打包自定义基座后运行这个自定义基座，同样可以真机运行和debug。打包正式包将无法真机运行和debug。
- Part of the manifest configuration, such as the three-party SDK configuration, which needs to be packaged to take effect, can be packaged with a custom running base. After packaging a custom dock, run this custom dock, and it can also be run and debugged on a real machine. Packing the official package will not be able to run and debug on the real machine.

### 持续集成
### Continuous Integration

很多公司的开发人员提交代码后，需要自动打包或持续集成。
After the developers of many companies submit code, they need to be automatically packaged or continuously integrated.

此时需要在服务器安装uni-app的cli版本来发布。
At this time, you need to install the cli version of uni-app on the server to release.

HBuilderX版与cli版互转指南参考：[https://ask.dcloud.net.cn/article/35750](https://ask.dcloud.net.cn/article/35750)
HBuilderX version and cli version conversion guide reference: [https://ask.dcloud.net.cn/article/35750](https://ask.dcloud.net.cn/article/35750)

如果是发布App，还需要使用[离线打包](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/508)，配置原生环境，来实现持续集成。
If you are publishing an App, you also need to use [Offline Packaging](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/508) to configure the native environment to achieve continuous integrated.