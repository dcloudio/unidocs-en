#### web-view

`web-view` 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面（nvue 使用需要手动指定宽高）。
`web-view` is a web browser component that can be used as a container for hosting web pages, and will automatically cover the whole page (you need to manually specify the width and height when using nvue).


**属性说明**
**Attribute description**

|属性名|类型|说明|平台差异说明|
| Attribute name| Type| Instruction| Platform difference description|
|:-|:-|:-|:-|
|src|String|webview 指向网页的链接|&nbsp;|
| src| String| webview links to web pages|  |
|allow|String|用于为 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 指定其[特征策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/策略特征)|H5|
| allow| String| Used to specify its [feature strategy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)| H5|
|sandbox|String|该属性对呈现在 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 框架中的内容启用一些额外的限制条件。|H5|
| sandbox| String| This attribute enables some additional restrictions on the content presented in the [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) frame.| H5|
|webview-styles|Object|webview 的样式|App-vue|
| webview-styles| Object| Style of webview| App-vue|
|@message|EventHandler|网页向应用 `postMessage` 时，会在特定时机（后退、组件销毁、分享）触发并收到消息。|H5 暂不支持（可以直接使用 [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)）|
| @message| EventHandler| When a web page sends `postMessage` to an application, it triggers and receives a message at a specific time (back, component destruction, sharing).| not supported by H5 temporarily (you can use [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) directly)|
|@onPostMessage|EventHandler|网页向应用实时 `postMessage`|App-nvue|
| @onPostMessage| EventHandler| Web page sends real-time `postMessage` to application| App-nvue|

**src**

|来源|App|H5|
| Source| App| H5|
|:-|:-:|:-:|
|网络|√|√|
| Network| √| √|
|本地|√|√|
| Local| √| √|

**webview-styles**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|progress|Object/Boolean|进度条样式。仅加载网络 HTML 时生效，设置为 `false` 时禁用进度条。|
| progress| Object/Boolean| Progress bar style. Only takes effect when web HTML is loaded. When set to `false`, the progress bar is disabled.|

**progress**

|属性|类型|默认值|说明|
| Attribute| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|color|String|#00FF00|进度条颜色|
| color| String| #00FF00| Progress bar color|

```html
<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>
```

注意：
Notice:

- 补充说明：app-vue下web-view组件不支持自定义样式，而v-show的本质是改变组件的样式。即组件支持v-if而不是支持v-show。
- Supplement: web-view components under app-vue do not support custom styles, and the essence of v-show is to change the styles of components. That is to say, components support v-if instead of v-show.
- App 端使用 uni.web-view.js 的最低版为 [uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- The minimum version of uni.web-view.js used on the App side is [uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- App 平台同时支持网络网页和本地网页，但本地网页及相关资源（js、css等文件）必须放在 `uni-app 项目根目录->hybrid->html` 文件夹下或者 `static` 目录下，如下为一个加载本地网页的`uni-app`项目文件目录示例：
- Web pages and local pages are simultaneously supported on the App platform. However, local web pages and related resources (js, css and other files) must be placed under the `uni-app project root directory->hybrid->html` folder or under the `static` directory. The following is an example of a `uni-app` project file directory that loads a local web page:
- nvue `web-view` 必须指定样式宽高
- nvue `web-view` must specify the style width and height
- App 网页向应用 `postMessage` 为实时消息
- App web page sends `postMessage` as real-time message to the application
- app-nvue `web-view` 默认没有大小，可以通过样式设置大小，如果想充满整个窗口，设置 `flex: 1` 即可，标题栏不会自动显示 `web-view` 页面中的 title。如果想充满整个窗口且想要显示标题推荐使用 vue 页面的 `web-view`(默认充满屏幕不可控制大小), 想自定义 `web-view` 大小使用 nvue `web-view`
- app-nvue `web-view` has no size by default. You can set the size by style. If you want to fill the entire window, just set `flex: 1`. The title bar will not automatically display the title in the `web-view` page. If you want to fill the whole window and display the title, the `web-view` of the vue page is recommended (the default is to fill the screen with no controllable size); If you want to customize the size of the `web-view`, nvue `web-view` is recommended.

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─components           
├─hybrid              
│  └─html
│     ├─css
│     │  └─test.css
│     ├─img
│     │  └─icon.png
│     ├─js
│     │  └─test.js
│     └─local.html
├─pages              
│  └─index
│     └─index.vue  
├─static              
├─main.js             
├─App.vue              
├─manifest.json      
└─pages.json         
	</code>
</pre>

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/web-view/web-view)
**Example** [View examples](https://hellouniapp.dcloud.net.cn/pages/component/web-view/web-view)
```html
<template>
	<view>
		<web-view src="/hybrid/html/local.html"></web-view>
	</view>
</template>
```

`<web-view>` 加载的网页中支持调用部分 uni 接口：
The webpage loaded by `<web-view>` supports calling some uni interfaces:

|方法名|说明|平台差异说明|
| Method name| Instruction| Platform difference description|
|:-|:-|:-|
|uni.navigateTo|[navigateTo](/api/router?id=navigateto)||
|uni.redirectTo|[redirectTo](/api/router?id=redirectto)||
|uni.reLaunch|[reLaunch](/api/router?id=relaunch)||
|uni.switchTab|[switchTab](/api/router?id=switchtab)||
|uni.navigateBack|[navigateBack](/api/router?id=navigateback)||
|uni.postMessage|向应用发送消息|H5 暂不支持（可以直接使用 [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)）|
| uni.postMessage| Send messages to the application| not supported by H5 temporarily (you can use [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) directly)|
|uni.getEnv|获取当前环境||
| uni.getEnv| Get the current environment| |

##### uni.postMessage(OBJECT)
网页向应用发送消息，在 `<web-view>` 的 `message` 事件回调 `event.detail.data` 中接收消息。
The web page sends a message to the application, and receives the message in the `message`Event callback`event.detail.data` of `<web-view>`.

**Tips**

- 传递的消息信息，必须写在 data 对象中。
- The message and information passed by must be written in the data object.
- `event.detail.data` 中的数据，以数组的形式接收每次 post 的消息。
- The data in `event.detail.data` receives the message of each post in the form of an array.

##### uni.getEnv(CALLBACK)

**callback 返回的对象**
**The object returned by callback**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|plus|Boolean|App|


**示例**
**Example**

在 `<web-view>` 加载的 HTML 中，添加以下代码：
In the HTML loaded by `<web-view>`, add the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Web page</title>
    <style type="text/css">
      .btn {
        display: block;
        margin: 20px auto;
        padding: 5px;
        background-color: #007aff;
        border: 0;
        color: #ffffff;
        height: 40px;
        width: 200px;
      }
      .btn-red {
        background-color: #dd524d;
      }
      .btn-yellow {
        background-color: #f0ad4e;
      }
      .desc {
        padding: 10px;
        color: #999999;
      }
      .post-message-section {
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <p class="desc">Web-view component loads the web html samples. Click the following button to jump to other pages. </p>
    <div class="btn-list">
      <button class="btn" type="button" data-action="navigateTo">navigateTo</button>
      <button class="btn" type="button" data-action="redirectTo">redirectTo</button>
      <button class="btn" type="button" data-action="navigateBack">navigateBack</button>
      <button class="btn" type="button" data-action="reLaunch">reLaunch</button>
      <button class="btn" type="button" data-action="switchTab">switchTab</button>
    </div>
    <div class="post-message-section">
      <p class="desc">Web page sends a message to the application</p>
      <div class="btn-list">
        <button class="btn btn-red" type="button" id="postMessage">postMessage</button>
      </div>
    </div>
    <!-- uni 的 SDK -->
    <!-- SDK of uni -->
    <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
    <script type="text/javascript">
      // 待触发 `UniAppJSBridgeReady` 事件后，即可调用 uni 的 API。
      //After the 'UniAppJSBridgeReady' event is triggered, the API of uni can be called.
      document.addEventListener('UniAppJSBridgeReady', function() {
        uni.postMessage({
            data: {
                action: 'message'
            }
        });
        uni.getEnv(function(res) {
            console.log ('Current environment:' + JSON.stringify(res));
        });

        document.querySelector('.btn-list').addEventListener('click', function(evt) {
          var target = evt.target;
          if (target.tagName === 'BUTTON') {
            var action = target.getAttribute('data-action');
            switch (action) {
              case 'switchTab':
                uni.switchTab({
                  url: '/pages/tabBar/API/API'
                });
                break;
              case 'reLaunch':
                uni.reLaunch({
                  url: '/pages/tabBar/component/component'
                });
                break;
              case 'navigateBack':
                uni.navigateBack({
                  delta: 1
                });
                break;
              default:
                uni[action]({
                  url: '/pages/component/button/button'
                });
                break;
            }
          }
        });
        document.getElementById('postMessage').addEventListener('click', function() {
          uni.postMessage({
            data: {
              action: 'message'
            }
          });
        });
      });
    </script>
  </body>
</html>

```

##### `web-view`组件的层级问题解决
##### Solution to the level problem of the `web-view` component
web-view组件在App中层级较高，如需要在vue页面中写代码为web-view组件覆盖内容，只能由web-view的组件自己弹出div。App端有如下若干方案：
web-view component has a higher level in App. If you need to write code in the vue page to cover the content for web-view component, you can only pop up div by web-view component itself. There are several schemes available on the App side as follows:
1. 比较简单的方式是actionsheet等原生弹出菜单
1. The simpler way is the native pop-up menu such as actionsheet
2. 使用[原生子窗体subNvue](/api/window/subNVues)
2. Use [Native sub-form subNvue](/api/window/subNVues)

##### web-view组件的浏览器内核说明
##### Browser kernel description of the web-view component
- H5端的web-view其实是被转为iframe运行，使用的是当前的浏览器
- The web-view on the H5 side is actually converted to an iframe to run with the current browser
- App端，Android，默认使用的是os自带的浏览器内核，在设置-所有应用里，显示系统服务，可查看Android System Webview的版本。系统webview支持安装升级。
- On the App side, Android uses the browser kernel that comes with os by default. In Settings - All Applications, system services is displayed, and the version of Android System Webview can be viewed. System webview supports installation and upgradation.
- App端，Android，支持在manifest中配置选用腾讯X5浏览器内核。使用x5内核需要一些注意事项！具体请参考[详见](https://ask.dcloud.net.cn/article/36806)
- On the App side, Android supports the configuration and selection of Tencent X5 browser kernel in the manifest. Precautions for using the X5 kernel! [See details](https://ask.dcloud.net.cn/article/36806)
- App端，iOS，是分为UIWebview和WKWebview的，2.2.5+起默认为WKWebview，之前版本[详见](https://ask.dcloud.net.cn/article/36348)
- On the App side, iOS is divided into UIWebview and WKWebview. From 2.2.5+, the default is WKWebview. For the previous version, [See details](https://ask.dcloud.net.cn/article/36348)


**注意事项**
**Precautions**
- `<web-view>` 组件默认铺满全屏并且层级高于前端组件。
- The `<web-view>` component fills up the full screen by default and has a higher level than the front-end component.
- `<web-view>` 组件所在窗口的标题，跟随页面的 `<title>` 值的变化而变化（不含H5端）。
- The title of the window where the `<web-view>` component is located will change with the change of the `<title>` value of the page (excluding the H5 side).
- `uni.webview.js` 最新版地址：[https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- Address of the latest version of `uni.webview.js`: [https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)


##### FAQ

Q：web-view 的页面怎么和应用内的页面交互？
Q: How do pages of web-view interact with pages in the application?
A：调用 uni 相关的 API，就可以实现页面切换及发送消息。参考：[在 web-view 加载的 HTML 中调用 uni 的 API](https://ask.dcloud.net.cn/article/35083)
A: Call the API related to uni to switch pages and send messages. Refer to: [Call the API of uni in the HTML loaded by web-view](https://ask.dcloud.net.cn/article/35083)

Q: web-view 加载 uni-app H5，内部跳转冲突如何解决
Q: How to solve internal jump conflicts when web-view loads uni-app H5
A：使用 uni.webView.navigateTo...
A: Use uni.webView.navigateTo...


uni.webView.navigateTo 示例，注意uni sdk放到body下面
uni.webView.navigateTo example, note that the uni sdk is placed under the body
```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    <noscript>
      <strong>Please enable JavaScript to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
  <!-- uni 的 SDK -->
  <!-- SDK of uni -->
  <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
  <script>
    document.addEventListener('UniAppJSBridgeReady', function() {
      uni.webView.getEnv(function(res) {
        console.log ('Current environment:' + JSON.stringify(res));
      });
      // uni.webView.navigateTo(...)
    });
  </script>
</html>
```

nvue webview通信示例
Example of nvue webview communication
```
<template>
	<view>
		<web-view ref="webview" class="webview" @onPostMessage="handlePostMessage"></web-view>
		<button class="button" @click="evalJs">evalJs (change the background color of webview)</button>
	</view>
</template>

<script>
	module.exports = {
		data: {
		},
		methods: {
			// webview向外部发送消息
			//webview sends messages to the outside
			handlePostMessage: function(data) {
				console.log("Received message:" + JSON.stringify(data.detail));
			},
			// 调用 webview 内部逻辑
			//Call internal logic of webview
			evalJs: function() {
				this.$refs.webview.evalJs("document.body.style.background ='#00FF00'");
			}
		}
	}
</script>
```
