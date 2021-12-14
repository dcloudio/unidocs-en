**uni-app和原生App混合开发问题：** 
**Mixed development issues of uni-app and native App:**

首先务必确认uni-app和原生代码，谁是主谁是从的问题。
First of all, please be sure to confirm the question of who is the master and who is the slave between uni-app and native code.

- 如果你的应用是uni-app开发的，需要扩展一些原生能力，那么首先去[插件市场](https://ext.dcloud.net.cn/)看看有没有现成的插件，如果没有，就自己开发，开发文档请参考[原生插件开发教程](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
- If your application is developed by uni-app and needs to expand some native capabilities, then first search for ready-made plugins in the [plugin market](https://ext.dcloud.net.cn/). If not, just develop it yourself. For development documents, please refer to [Native Plug-in Development Tutorial](https://nativesupport.dcloud.net.cn/NativePlugin/README).
- 如果你的App是原生开发的，部分功能栏目想通过uni-app实现，有2种方式
- If your App is native developed, there are two ways to realize some function columns through uni-app
  * 在原生App里集成uni小程序sdk，[参考](https://nativesupport.dcloud.net.cn/README)
  * Integrate the uni applet SDK in the native App, [Refer to](https://nativesupport.dcloud.net.cn/README)
  * 如果不想集成原生sdk，那就把uni-app代码发布成H5方式，在原生App里通过webview打开。
  * If you do not want to integrate the native sdk, publish the uni-app code in H5 mode and open it in the native app via webview.

如果应用是uni-app开发为主，只是想离线打包，那么不应该使用uni小程序sdk，而是使用App离线打包SDK，[参考](https://nativesupport.dcloud.net.cn/AppDocs/README)。
If the application is developed mainly by uni-app and you just want to package it offline, then you should not use the uni applet SDK but the App offline packaging SDK, [refer to](https://nativesupport.dcloud.net.cn/AppDocs/README). Also note that offline packaging cannot enjoy paid native plug-ins in the plug-in market. If you have relevant requirements, you need to develop your own native plug-ins.
