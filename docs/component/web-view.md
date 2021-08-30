#### web-view

`web-view` 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面（nvue 使用需要手动指定宽高）。
`web-view` It is a web browser component that can be used to host a web page container, which will automatically fill the entire page (nvue use requires manual specification of width and height).

> 各小程序平台，web-view 加载的 url 需要在后台配置域名白名单，包括内部再次 iframe 内嵌的其他 url 。
> For each applet platform, the URL loaded by the web-view needs to configure the domain name whitelist in the background, including other URLs embedded in the iframe again.

**属性说明**
**Property description**

|属性名|类型|说明|平台差异说明|
| Attribute name | Types of     | Description| Platform difference description |
|:-|:-|:-|:-|
|src|String|webview 指向网页的链接|&nbsp;|
|src|String|webview links to web pages|&nbsp;|
|allow|String|用于为 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 指定其[特征策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/策略特征)|H5|
|allow|String|Used to specify the characteristic strategy for the iframe |H5|
|sandbox|String|该属性对呈现在 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 框架中的内容启用一些额外的限制条件。|H5|
|sandbox|String|This attribute enables some additional restrictions on the content rendered in the iframe frame.|H5|
|webview-styles|Object|webview 的样式|App-vue|
|webview-styles|Object|webview style|App-vue|
|@message|EventHandler|网页向应用 `postMessage` 时，会在特定时机（后退、组件销毁、分享）触发并收到消息。|H5 暂不支持（可以直接使用 [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)）|
|@onPostMessage|EventHandler|网页向应用实时 `postMessage`|App-nvue|
|@onPostMessage|EventHandler|Web page to application real-time `postMessage`|App-nvue|

**src**

|来源|App|H5|
|:-|:-:|:-:|
|网络|√|√|
|本地|√|√|

**webview-styles**

|属性|类型|说明|
| Attributes | Types of       | Description                                                  |
|:-|:-|:-|
|progress|Object/Boolean|进度条样式。仅加载网络 HTML 时生效，设置为 `false` 时禁用进度条。|
|progress|Object/Boolean|The style of the progress bar. It takes effect only when the network load HTML, set to `false`disable the progress bar.|

**progress**

|属性|类型|默认值|说明|
| Attributes | Types of | Defaults | Description        |
|:-|:-|:-|:-|
|color|String|#00FF00|进度条颜色|
|color|String|#00FF00|Progress bar color|

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

- 补充说明：app-vue下web-view组件不支持自定义样式，而v-show的本质是改变组件的样式。即组件支持v-if而不是支持v-show。
- App 端使用 `自定义组件模式` 时，uni.web-view.js 的最低版为 [uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- App 平台同时支持网络网页和本地网页，但本地网页及相关资源（js、css等文件）必须放在 `uni-app 项目根目录->hybrid->html` 文件夹下或者 `static` 目录下，如下为一个加载本地网页的`uni-app`项目文件目录示例：
- nvue `web-view` 必须指定样式宽高
- V3 编译模式，网页向应用 `postMessage` 为实时消息
- app-nvue `web-view` 默认没有大小，可以通过样式设置大小，如果想充满整个窗口，设置 `flex: 1` 即可，标题栏不会自动显示 `web-view` 页面中的 title。如果想充满整个窗口且想要显示标题推荐使用 vue 页面的 `web-view`(默认充满屏幕不可控制大小), 想自定义 `web-view` 大小使用 nvue `web-view`

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
```html
<template>
	<view>
		<web-view src="/hybrid/html/local.html"></web-view>
	</view>
</template>
```

`<web-view>` 加载的网页中支持调用部分 uni 接口：
`<web-view>` Some uni interfaces are supported in the loaded webpage:

|方法名|说明|平台差异说明|
| Method name| Description| Platform difference description|
|:-|:-|:-|
|uni.navigateTo|[navigateTo](/api/router?id=navigateto)||
|uni.redirectTo|[redirectTo](/api/router?id=redirectto)||
|uni.reLaunch|[reLaunch](/api/router?id=relaunch)||
|uni.switchTab|[switchTab](/api/router?id=switchtab)||
|uni.navigateBack|[navigateBack](/api/router?id=navigateback)||
|uni.postMessage|向应用发送消息|H5 暂不支持（可以直接使用 [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)）|
|uni.getEnv|获取当前环境||

##### uni.postMessage(OBJECT)
网页向应用发送消息，在 `<web-view>` 的 `message` 事件回调 `event.detail.data` 中接收消息。
Page, in a message sent to the application `<web-view>`'s `message`event callback `event.detail.data`receives the message.

**Tips**

- 传递的消息信息，必须写在 data 对象中。
- The message information passed must be written in the data object.
- `event.detail.data` 中的数据，以数组的形式接收每次 post 的消息。
- `event.detail.data` The data in each post is received in the form of an array.。

##### uni.getEnv(CALLBACK)

**callback 返回的对象**

|属性|类型|说明|
|:-|:-|:-|
|plus|Boolean|App|


**示例**

在 `<web-view>` 加载的 HTML 中，添加以下代码：
In the `<web-view>`loaded HTML, add the following code:

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
    <p class="desc">The web-view component loads the web html example. Click the button below to jump to other pages.</p>
    <div class="btn-list">
      <button class="btn" type="button" data-action="navigateTo">navigateTo</button>
      <button class="btn" type="button" data-action="redirectTo">redirectTo</button>
      <button class="btn" type="button" data-action="navigateBack">navigateBack</button>
      <button class="btn" type="button" data-action="reLaunch">reLaunch</button>
      <button class="btn" type="button" data-action="switchTab">switchTab</button>
    </div>
    <div class="post-message-section">
      <p class="desc">The webpage sends a message to the application. Note: The applet-side application will receive the message when the page is backed.</p>
      <div class="btn-list">
        <button class="btn btn-red" type="button" id="postMessage">postMessage</button>
      </div>
    </div>
    <!-- uni's SDK -->
    <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
    <script type="text/javascript">
      // After the `UniAppJSBridgeReady` event is triggered, uni's API can be called.
      document.addEventListener('UniAppJSBridgeReady', function() {
        uni.postMessage({
            data: {
                action: 'message'
            }
        });
        uni.getEnv(function(res) {
            console.log('Current environment：' + JSON.stringify(res));
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


##### **App端web-view的扩展**
##### **App-side web-view extension**
App端的webview是非常强大的，可以更灵活的控制和拥有更丰富的API。
The webview on the App side is very powerful and can be controlled more flexibly and has a richer API.

每个vue页面，其实都是一个webview，而vue页面里的web-view组件，其实是webview里的一个子webview。这个子webview被append到父webview上。
Each vue page is actually a webview, and the web-view component in the vue page is actually a sub-webview in the webview. This child webview is appended to the parent webview.

通过以下方法，可以获得这个web-view组件对应的js对象，然后参考[https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject)，可以进一步重设这个web-view组件的样式，比如调整大小

```html
<template>
	<view>
		<web-view src="https://www.baidu.com"></web-view>
	</view>
</template>
<script>
var wv;//Plan to create webview
export default {
	onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$scope.$getAppWebview() //This object is equivalent to plus.webview.currentWebview() in html5plus. It is invalid to use plus.webview.currentWebview() directly on the vue page in uni-app, and use this.$mp.page.$getAppWebview() in non-v3 compilation mode
		setTimeout(function() {
			wv = currentWebview.children()[0]
			wv.setStyle({top:150,height:300})
		}, 1000); //If it is the page initialization call, you need to delay
		// #endif
		}
	};
</script>
```

甚至可以不用`web-view`组件，直接js创建一个子webview来加载html。比如不希望远程网页使用plus的API，不管是因为安全原因还是因为back监听冲突，可以使用如下代码：
You can even `web-view`create a sub-webview directly to load html without using components. For example, if you don't want the remote webpage to use the plus API, whether for security reasons or because of back monitoring conflicts, you can use the following code:
```html
<template>
	<view>
	</view>
</template>
<script>
var wv;//计划创建的webview
export default {
	onLoad() {
		// #ifdef APP-PLUS
		wv = plus.webview.create("","custom-webview",{
			plusrequire:"none", //Forbid remote webpages to use the plus API. Some webpages made with mui may listen to plus.key and cause confusion when closing the page. You can disable it in this way
      'uni-app': 'none', //Do not load the uni-app rendering layer framework to avoid style conflicts
			top:uni.getSystemInfoSync().statusBarHeight+44 //Place it below titleNView. If you want to add an address bar or something above the webview, you can continue to lower the TOP value
		})
		wv.loadURL("https://www.baidu.com")
		var currentWebview = this.$scope.$getAppWebview(); //This object is equivalent to plus.webview.currentWebview() in html5plus. It is invalid to use plus.webview.currentWebview() directly on the vue page in uni-app, and use this.$mp.page.$getAppWebview() in non-v3 compilation mode
		currentWebview.append(wv);//Be sure to append to the current page! ! ! In order to animate with the current page and close together
		setTimeout(function() {
			console.log(wv.getStyle())
		}, 1000);//If the onload call of the home page needs to be delayed, the secondary page does not need to be delayed, and can be obtained directly
		// #endif
	}
};
</script>
```

如果想设置web-view组件可双指缩放，可参考如下代码：
If you want to set the web-view component to zoom with two fingers, you can refer to the following code:
```js
onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$mp.page.$getAppWebview() //Get the webview object of the current page
		setTimeout(function() {
			wv = currentWebview.children()[0]
			wv.setStyle({scalable:true})
		}, 1000); //If it is the page initialization call, you need to delay
		// #endif
		}
	};
```

##### `web-view`组件的层级问题解决
##### `web-view`Component level problem solving
web-view组件在App和小程序中层级较高，如需要在vue页面中写代码为web-view组件覆盖内容，小程序端无解，只能由web-view的组件自己弹出div。App端有如下若干方案：
The web-view component has a higher level in App and applet. If you need to write code in the vue page to cover the content of the web-view component, the applet has no solution, and the div can only be popped up by the web-view component. There are several solutions on the App side:
1. 比较简单的方式是actionsheet等原生弹出菜单（小程序也可以使用此方案）
1. The simpler way is native pop-up menus such as actionsheet (small programs can also use this scheme)
2. 使用plus.nativeObj.view。这里有一个底部图标菜单的示例，可参考[https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)
3. 使用[原生子窗体subNvue](/api/window/subNVues)
3. [Raw child window used subNvue](/api/window/subNVues)
4. 可以在web-view组件内嵌的网页中弹出z-index更高的div。如果是外部网页，可以在vue中获得子webview对象后，通过[evalJS](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.evalJS)为这个子webview注入一段js，操作其弹出div层。
4. You can pop up a div with a higher z-index in the webpage embedded in the web-view component. If it is an external webpage, after obtaining the sub-webview object in vue, inject a section of js into this sub-webview through [evalJS](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.evalJS) , and operate it to pop up the div layer.

##### web-view组件的浏览器内核说明
- H5端的web-view其实是被转为iframe运行，使用的是当前的浏览器
- 小程序的web-view使用的是小程序自带的浏览器内核，不同厂商不一样，[详见](https://ask.dcloud.net.cn/article/1318)
- App端，Android，默认使用的是os自带的浏览器内核，在设置-所有应用里，显示系统服务，可查看Android System Webview的版本。在Android5+，系统webview支持安装升级。
- App端，Android，支持在manifest中配置选用腾讯X5浏览器内核。使用x5内核需要一些注意事项！具体请参考[详见](https://ask.dcloud.net.cn/article/36806)
- App端，iOS，是分为UIWebview和WKWebview的，2.2.5+起默认为WKWebview，之前版本[详见](https://ask.dcloud.net.cn/article/36348)


**注意事项**
- `<web-view>` 组件默认铺满全屏并且层级高于前端组件。App端想调节大小或在其上覆盖内容需使用plus规范。
- `<web-view>` 组件所在窗口的标题，跟随页面的 `<title>` 值的变化而变化（不含H5端）。
- App-vue的`web-view`加载的html页面可以运行plus的api，但注意如果该页面调用了plus.key的API监听了back按键（或使用mui的封装），会造成back监听冲突。需要该html页面移除对back的监听。或按照上面的示例代码禁止网页使用plus对象。app-nvue页面的`web-view`组件不能运行plus API。
- `uni.webview.js` 最新版地址：[https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- 小程序平台，个人类型与海外类型的小程序使用 `web-view` 组件，提交审核时注意微信等平台是否允许使用
- 小程序平台， `src` 指向的链接需登录小程序管理后台配置域名白名单。`App`和`H5` 无此限制。

##### FAQ

Q：web-view 的页面怎么和应用内的页面交互？
Q: How do web-view pages interact with pages in the application?
A：调用 uni 相关的 API，就可以实现页面切换及发送消息。参考：[在 web-view 加载的 HTML 中调用 uni 的 API](https://ask.dcloud.net.cn/article/35083)
A: Call uni-related APIs to switch pages and send messages. 

Q：web-view 加载的 HTML 中，能够调用 5+ 的能力么？
Q: Can the 5+ capabilities be used in the HTML loaded by the web-view?
A：加载的 HTML 中是有 5+ 环境的，在 plusready 后调用即可。参考：[一个简单实用的 plusready 方法](https://ask.dcloud.net.cn/article/34922)
A: There are 5+ environments in the loaded HTML, which can be called after plusready. 

Q: web-view 加载 uni-app H5，内部跳转冲突如何解决
A：使用 uni.webView.navigateTo...


uni.webView.navigateTo 示例，注意uni sdk放到body下面
uni.webView.navigateTo example, note that uni sdk is placed under the body
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
  <!-- uni's SDK -->
  <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
  <script>
    document.addEventListener('UniAppJSBridgeReady', function() {
      uni.webView.getEnv(function(res) {
        console.log('Current environment：' + JSON.stringify(res));
      });
      // uni.webView.navigateTo(...)
    });
  </script>
</html>
```

nvue webview通信示例
```
<template>
	<view>
		<web-view ref="webview" class="webview" @onPostMessage="handlePostMessage"></web-view>
		<button class="button" @click="evalJs">evalJs(改变webview背景颜色)</text>
	</view>
</template>

<script>
	module.exports = {
		data: {
		},
		methods: {
			// webview向外部发送消息
			handlePostMessage: function(data) {
				console.log("接收到消息：" + JSON.stringify(data.detail));
			},
			// 调用 webview 内部逻辑
			evalJs: function() {
				this.$refs.webview.evalJs("document.body.style.background ='#00FF00'");
			}
		}
	}
</script>
```
