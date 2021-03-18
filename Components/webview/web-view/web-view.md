#### web-view

`web-view` It is a web browser component that can be used to host a web page container, which will automatically fill the entire page (nvue use requires manual specification of width and height).

> For each applet platform, the URL loaded by the web-view needs to configure the domain name whitelist in the background, including other URLs embedded in the iframe again.

**Property description**

| Attribute name | Types of     | Description                                                  | Platform difference description |
|:-|:-|:-|:-|
|src|String|webview links to web pages|&nbsp;|
|allow|String|Used to specify the characteristic strategy for the iframe 
|sandbox|String|This attribute enables some additional restrictions on the content rendered in the iframe frame.
|webview-styles|Object|webview style|App-vue|
|@onPostMessage|EventHandler|Web page to application real-time `postMessage`|App-nvue|



**webview-styles**

| Attributes | Types of       | Description                                                  |
|:-|:-|:-|
|progress|Object/Boolean|The style of the progress bar. It takes effect only when the network load HTML, set to `false`disable the progress bar.|

**progress**

| Attributes | Types of | Defaults | Description        |
|:-|:-|:-|:-|
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
**Example** 

```html
<template>
	<view>
		<web-view src="/hybrid/html/local.html"></web-view>
	</view>
</template>
```

`<web-view>` Some uni interfaces are supported in the loaded webpage:

| Method name      | Description                                 | Platform difference description                              |
|:-|:-|:-|
|uni.navigateTo|navigateTo||
|uni.redirectTo|redirectTo||
|uni.reLaunch|reLaunch||
|uni.switchTab|switchTab ||
|uni.navigateBack| navigateBack ||
|uni.getEnv|Get the current environment||

##### uni.postMessage(OBJECT)
Page, in a message sent to the application `<web-view>`'s `message`event callback `event.detail.data`receives the message.

**Tips**

- The message information passed must be written in the data object.
- `event.detail.data` The data in each post is received in the form of an array.。

##### uni.getEnv(CALLBACK)

**Example**

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
    <script type="text/javascript">
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf('AlipayClient') > -1) {
        // The JS-SDK of the Alipay applet prevents the 404 from being dynamically loaded. If you do not need to be compatible with the Alipay applet, you do not need to quote this JS file.
        document.writeln('<script src="https://appx/web-view.min.js"' + '>' + '<' + '/' + 'script>');
      } else if (/QQ/i.test(userAgent) && /miniProgram/i.test(userAgent)) {
        // QQ applet
        document.write(
          '<script type="text/javascript" src="https://qqq.gtimg.cn/miniprogram/webview_jssdk/qqjssdk-1.0.0.js"><\/script>'
        );
      } else if (/miniProgram/i.test(userAgent) && /micromessenger/i.test(userAgent)) {
        // WeChat Mini Program JS-SDK If you do not need to be compatible with WeChat Mini Program, you do not need to quote this JS file.
        document.write('<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"><\/script>');
      } else if (/toutiaomicroapp/i.test(userAgent)) {
        // Toutiao Mini Program JS-SDK If you don’t need to be compatible with Toutiao Mini Program, you don’t need to quote this JS file.
        document.write(
          '<script type="text/javascript" src="https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js"><\/script>');
      } else if (/swan/i.test(userAgent)) {
        // Baidu Mini Program JS-SDK If you do not need to be compatible with Baidu Mini Program, you do not need to quote this JS file.
        document.write(
          '<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.18.js"><\/script>'
        );
      } else if (/quickapp/i.test(userAgent)) {
        // quickapp
        document.write('<script type="text/javascript" src="https://quickapp/jssdk.webview.min.js"><\/script>');
      }
      if (!/toutiaomicroapp/i.test(userAgent)) {
        document.querySelector('.post-message-section').style.visibility = 'visible';
      }
    </script>
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


##### **App-side web-view extension**
The webview on the App side is very powerful and can be controlled more flexibly and has a richer API.

Each vue page is actually a webview, and the web-view component in the vue page is actually a sub-webview in the webview. This child webview is appended to the parent webview.


```html
<template>
	<view>
		<web-view src="https://www.xxx.com"></web-view>
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

You can even `web-view`create a sub-webview directly to load html without using components. For example, if you don't want the remote webpage to use the plus API, whether for security reasons or because of back monitoring conflicts, you can use the following code:
```html
<template>
	<view>
	</view>
</template>
<script>
var wv;//Plan to create webview
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

##### `web-view`Component level problem solving
The web-view component has a higher level in App and applet. If you need to write code in the vue page to cover the content of the web-view component, the applet has no solution, and the div can only be popped up by the web-view component. There are several solutions on the App side:
1. The simpler way is native pop-up menus such as actionsheet (small programs can also use this scheme)
2. Use plus.nativeObj.view.
3. Raw child window used subNvue
4. You can pop up a div with a higher z-index in the webpage embedded in the web-view component. If it is an external webpage, after obtaining the sub-webview object in vue, inject a section of js into this sub-webview through evalJS , and operate it to pop up the div layer.

**Precautions**

- `<web-view>`By default, the components fill the full screen and are higher level than the front-end components. If you want to adjust the size or overwrite content on the App, you need to use the plus specification.
- `<web-view>`The title of the components of the window, the page following the `<title>`variation value changes .
- `web-view`The html page loaded by App-vue can run the plus API, but note that if the page calls the plus.key API to monitor the back button (or uses mui encapsulation), it will cause back monitoring conflicts. The html page needs to remove the back monitoring. Or follow the example code above to prohibit web pages from using the plus object. The `web-view`components of the app-nvue page cannot run the plus API.
- `uni.webview.js`The latest version address: https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js
- Applet platform, the individual types of small type with overseas programs use `web-view`components, submit review attention to micro-channel platforms such as whether to allow the use of

##### FAQ

Q: How do web-view pages interact with pages in the application?
A: Call uni-related APIs to switch pages and send messages. 

Q: Can the 5+ capabilities be used in the HTML loaded by the web-view?
A: There are 5+ environments in the loaded HTML, which can be called after plusready. 


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
