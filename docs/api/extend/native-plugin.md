### uni.requireNativePlugin(PluginName)

引入 App 原生插件。
Introduce App native plug-ins.
平台差异说明：App
Platform difference description: App
自 HXuilderX1.4 版本起，uni-app 支持引入原生插件，使用方式如下：
Since HXuilderX1.4 version, uni-app supports the introduction of native plug-ins, and the usage is as follows:

```js 
	const PluginName = uni.requireNativePlugin(PluginName); 
	// PluginName 为原生插件名称
	// PluginName is the name of the native plug-in
```

不管是vue文件还是nvue文件，都是这个API。
Whether it is a vue file or an nvue file, it is this API.

### 内置原生插件
### Built-in native plugins

内置原生插件,uni-app已默认集成，支持直接在内置基座运行。
Built-in native plug-in, uni-app has been integrated by default, and supports running directly on the built-in dock.

仅在nvue页面，支持引入BindingX，animation， DOM.addRule等。
Only on the nvue page, support the introduction of BindingX, animation, DOM.addRule, etc.

在vue页面，支持引入clipboard，storage，stream，deviceInfo等。
On the vue page, the introduction of clipboard, storage, stream, deviceInfo, etc. is supported.


使用方式：可通过```uni.requireNativePlugin```直接使用。
Usage: It can be used directly through ```uni.requireNativePlugin```.

示例：
Example:

``` html
	<template>
		<view>
			<text class="my-iconfont">&#xe85c;</text>	
		</view>
	</template>
	<script>
		export default{
			beforeCreate() {
				const domModule = uni.requireNativePlugin('dom')
				domModule.addRule('fontFace', {
					'fontFamily': "myIconfont",
					'src': "url('http://at.alicdn.com/t/font_2234252_v3hj1klw6k9.ttf')"
				});
			}
		}
	</script>
	<style>
		.my-iconfont {
			font-family:myIconfont;
			font-size:60rpx;
			color: #00AAFF;
		}
	</style>
```




非内置原生插件，分为 [本地插件](/api/extend/native-plugin?id=本地插件非内置原生插件) 和 [云端插件](/api/extend/native-plugin?id=云端插件非内置原生插件) 。集成原生插件后，需要提交云端打包或制作自定义基座运行才会生效。
Non-built-in native plug-ins are divided into [local plug-in](/api/extend/native-plugin?id=local plug-in non-built-in native plug-in) and [cloud plug-in](/api/extend/native-plugin?id=cloud plug-in non- Built-in native plug-in). After integrating the native plug-in, you need to submit the cloud package or make a custom base to run it to take effect.

### 本地插件(非内置原生插件)
### Native plugins (not built-in native plugins)

**本地插件**，是uni-app项目nativeplugins目录(目录不存在则创建)下的原生插件。
**Local plugin** is a native plugin under the nativeplugins directory of the uni-app project (create if the directory does not exist).

##### 第一步：获取本地原生插件
##### The first step: get local native plug-ins

- 方式一：插件市场下载免费uni-app原生插件
- Method 1: Download the free uni-app native plug-in from the plug-in market

可以登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在免费的插件详情页中点击“下载for离线打包”下载原生插件（zip格式），解压到HBuilderX的uni-app项目下的“nativeplugins”目录（如不存在则创建），以下是“DCloud-RichAlert”插件举例，它的下载地址是：https://ext.dcloud.net.cn/plugin?id=36
You can log in to [uni native plug-in market](https://ext.dcloud.net.cn/?cat1=5&cat2=51), click "download for offline packaging" in the free plug-in details page to download the native plug-in (zip format) , Unzip it to the "nativeplugins" directory under the uni-app project of HBuilderX (create if it does not exist), the following is an example of the "DCloud-RichAlert" plugin, and its download address is: https://ext.dcloud.net.cn /plugin?id=36

下载解压后目录结构如下：
The directory structure after downloading and decompressing is as follows:

<img width="600px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c6b5e6d0-4f2b-11eb-b680-7980c8a877b8.png" />


- 方式二：开发者自己开发uni-app原生插件
- Method 2: Developers develop uni-app native plug-ins

原生插件开发完成后按指定格式压缩为zip包，参考[uni-app原生插件格式说明文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package)。
After the native plug-in is developed, it is compressed into a zip package according to the specified format. Refer to [uni-app native plug-in format description document](https://nativesupport.dcloud.net.cn/NativePlugin/course/package).
按上图的格式配置到uni-app项目下的“nativeplugins”目录。
Configure to the "nativeplugins" directory under the uni-app project according to the format of the above figure.

##### 第二步：配置本地原生插件
##### Step 2: Configure local native plug-ins

在manifest.json -> App原生插件配置 -> 选择本地插件 -> 选择需要打包生效的插件 -> 保存后提交云端打包生效。
In manifest.json -> App native plug-in configuration -> select local plug-in -> select the plug-in that needs to be packaged to take effect -> save and submit the cloud package to take effect.

<img width="600px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c79438e0-4f2b-11eb-8a36-ebb87efcf8c0.png" />

##### 第三步：开发调试本地原生插件
##### Step 3: Develop and debug local native plug-ins

在vue页面或nvue页面引入这个原生插件。
Introduce this native plug-in on the vue page or nvue page.

使用uni.requireNativePlugin的api，参数为插件的id。
Use the api of uni.requireNativePlugin, and the parameter is the id of the plugin.
```js 
	const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```

##### 第四步：打包发布
##### Step Four: Package Release
使用自定义基座开发调试本地原生插件后，不可直接将自定义基座apk作为正式版发布。
After using the custom base to develop and debug local native plug-ins, you cannot directly release the custom base apk as the official version.
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。
You should resubmit the cloud packaging (cannot check "custom base") to generate the official version.


### 云端插件(非内置原生插件)
### Cloud plug-in (not built-in native plug-in)

**云端插件**，已经在插件市场绑定或购买的插件，无需下载插件到工程中，云打包时会直接合并打包原生插件到APP中。（试用插件只能在自定义基座中使用）
**Cloud plug-in**, the plug-in that has been bound or purchased in the plug-in market, there is no need to download the plug-in to the project. When the cloud is packaged, the native plug-in will be directly merged and packaged into the APP. (The trial plug-in can only be used in a custom dock)


##### 第一步：购买或下载uni-app原生插件
##### The first step: purchase or download the uni-app native plug-in
使用前需先登录[uni原生插件市场](https://ext.dcloud.net.cn/?cat1=5&cat2=51)，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件。
Before using it, you need to log in to [uni native plug-in market](https://ext.dcloud.net.cn/?cat1=5&cat2=51) and purchase it from the plug-in details page. Free plug-ins can also be purchased at 0 yuan in the plug-in market. The plug-in can be packaged and used in the cloud only after purchase.
> 购买插件时请选择正确的appid，以及绑定正确包名
> When purchasing the plug-in, please select the correct appid and bind the correct package name

##### 第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）
##### Step 2: Use a custom dock to package the uni native plug-in (Note: Please use a real machine to run the custom dock)
在manifest.json -> App原生插件配置 -> 选择云端插件 -> 选择需要打包的插件 -> 保存后提交云端打包生效。
In manifest.json -> App native plug-in configuration -> select cloud plug-in -> select the plug-in to be packaged -> save and submit the cloud package to take effect.

<img width="600px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c8512040-4f2b-11eb-8a36-ebb87efcf8c0.png" />


##### 第三步：开发调试uni-app原生插件
##### Step 3: Develop and debug uni-app native plug-ins
在vue页面或nvue页面引入这个原生插件。
Introduce this native plug-in on the vue page or nvue page.
使用uni.requireNativePlugin的api，参数为插件的id。
Use the api of uni.requireNativePlugin, and the parameter is the id of the plugin.
1.在页面引入原生插件，uni.requireNativePlugin 使用后返回一个对象：
1. Introduce native plug-ins on the page, and return an object after uni.requireNativePlugin is used:

```js
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
```
2.使用原生插件
2. Use native plugins

```js
	dcRichAlert.show({
		position: 'bottom',
		title: "提示信息(Prompt information)",
		titleColor: '#FF0000',
		content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> is a front-end framework for developing cross-platform applications using Vue.js!\nFree \nfree\nfree\nimportant things three times",
		contentAlign: 'left',
		checkBox: {
			title: '不再提示(Do not remind again)',
			isSelected: true
		},
		buttons: [{
			title: '取消(Cancel)'
		}, {
			title: '否(no)'
		}, {
			title: '确认(confirm)',
			titleColor: '#3F51B5'
		}]
	}, result => {
		console.log(result)
	});
```




##### 第四步：打包发布
##### Step Four: Package Release
使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。
After using the custom dock to develop and debug the uni-app native plug-in, you cannot directly release the custom dock apk as the official version.
应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。
You should resubmit the cloud packaging (cannot check "custom base") to generate the official version.


#### 注意事项
#### Precautions
1.可以在 插件市场 查看更多插件，如需开发uni原生插件请参考 [uni原生插件开发文档](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
1. You can view more plug-ins in the plug-in market. If you need to develop uni native plug-ins, please refer to [uni native plug-in development document](https://nativesupport.dcloud.net.cn/NativePlugin/README).
2.如果插件需要传递文件路径，则需要传手机文件的绝对路径，可使用 5+ [IO模块](http://www.html5plus.org/doc/zh_cn/io.html) 的相关 API 得到文件的绝对路径。
2. If the plug-in needs to pass the file path, you need to pass the absolute path of the phone file, you can use the relevant API of 5+ [IO module](http://www.html5plus.org/doc/zh_cn/io.html) to get the file The absolute path.