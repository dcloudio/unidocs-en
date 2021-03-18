#### uni.navigateTo(OBJECT)

 Keep the current page, jump to a page in the app, and use `uni.navigateBack`it to return to the original page. 

  **OBJECT parameter description** 

| parameter         | Types of | Required | Defaults | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|:-|
|url|String| Yes      |          | The path of the non-tabBar page in the application that needs to be redirected. Parameters can be added after the path. The parameter and the path are separated by ?, the parameter key and parameter value are connected by =, and different parameters are separated by &; for example,'path?key=value&key2=value2', path is the path of the next page, and the onLoad function of the next page can be used Get passed parameters |:-|
|animationType|String| no       | pop-in   | The animation effect of the window display, see: Window animation |                                 |
|animationDuration|Number| no       | 300      | Duration of window animation, unit is ms                     | App                             |
|events|Object| no       |          | The communication interface between pages is used to monitor the data sent from the opened page to the current page. 2.8.9+ started to support. ||
|success|Function| no       |          | Callback function for successful interface call              ||
|fail|Function| no       |          | Callback function for interface call failure                 ||
|complete|Function| no       |          | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |&nbsp;|

 **object.success callback function**

**parameter**

**Object res**

| Attributes   | Types of                                                     | Description                      |
|:-|:-|:-|
| eventChannel | EventChannel | Communicate with the opened page |

**   **Example**  **

```javascript
//On the start page, jump to the test.vue page and pass the parameters
uni.navigateTo({
	url: 'test?id=1&name=uniapp'
});
```
```javascript
// Accept the parameters on the test.vue page
export default {
	onLoad: function (option) { //Option is of type Object and serializes the parameters passed on the previous page
		console.log(option.id); //Print out the parameters passed on the previous page.
		console.log(option.name); //Print out the parameters passed on the previous page.
	}
}
```

```
// 2.8.9+ support
uni.navigateTo({
  url: 'pages/test?id=1',
  events: {
    // Adds a listener for the specified event that fetches the data passed to the       current page by the opened page
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    }
    ...
  },
  success: function(res) {
    // Data is sent to the opened page via EventChannel
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
  }
})

// Uni. navigate To target page pages/test.vue
onLoad: function(option) {
  console.log(option.query)
  const eventChannel = this.getOpenerEventChannel()
  eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
  eventChannel.emit('someEvent', {data: 'test'});
  // Listens for the AcceptDataFromEnerPage event to retrieve the data from the previous page sent to the current page via EventChannel
  eventChannel.on('acceptDataFromOpenerPage', function(data) {
    console.log(data)
  })
}
```


 The URL has a length limit. If the string is too long, it will fail to pass. You can use form communication, global variables , or `encodeURIComponent`other methods to solve it. The following is `encodeURIComponent`an example. 
```html
<navigator :url="'/pages/test/test?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```
```javascript
// Accept the parameters on the test.vue page
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```
**note:**

- There are hierarchical restrictions on the page jump path, and you cannot jump to new pages without restrictions
- Jump to tabBar page can only use switchTab to jump
- The target page of the routing API must be the vue page registered in pages.json. If you want to open the web url, you can use plus.runtime.openURL or web-view component on the App platform ; window.open for the H5 platform; web-view component for the applet platform (url needs to be in the whitelist of the applet). There is a component ulink.vue in hello uni-app that has encapsulated multiple terminals, you can refer to it.

#### uni.redirectTo(OBJECT)

Close the current page and jump to a page in the app.

**OBJECT parameter description**

|**Parameters**|**Type**|**Required**|**Description**|
|:-|:-|:-|:-|
|url|String| Yes          | The path of the non-tabBar page in the application that needs to be jumped. Parameters can be included after the path. Use? To separate parameter and path, parameter key and parameter value are connected with =, and different parameters are separated by &; such as'path?key=value&key2=value2' |
|success|Function| no           | Callback function for successful interface call              |
|fail|Function| no           | Callback function for interface call failure                 |
|complete|Function| no           | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

** **Example** **

```javascript
uni.redirectTo({
	url: 'test?id=1'
});
```

**note:**

- Jump to tabBar page can only use switchTab to jump

#### uni.reLaunch(OBJECT)

Close all pages and open a page within the app.

**Note: If** uni.preloadPage (OBJECT) is called, it does not close, triggering only the lifecycle `onHide`

 **OBJECT parameter description** 

| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|url|String| Yes      | The path of the in-app page that needs to be jumped to, the path can be followed by parameters. Use? To separate the parameter and the path, the parameter key and the parameter value are connected with =, and the different parameters are separated by &; for example,'path?key=value&key2=value2', if the redirected page path is a tabBar page, no parameters |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **Example** 

```javascript
uni.reLaunch({
	url: 'test?id=1'
});
```
```javascript
export default {
	onLoad: function (option) {
		console.log(option.id);
	}
}
```

Tips：

* The `uni.reLaunch`previous page stack will be destroyed after the H5 end is called , but the previous history of the browser cannot be cleared, and it can `navigateBack`not be returned at this time . If there is a history, you `history.back()`can still navigate to other history of the browser by clicking the browser's return button or calling .

#### uni.switchTab(OBJECT)

 Jump to the tabBar page and close all other non-tabBar pages. 

**Note: If** uni.preloadPage (OBJECT) is called, it does not close, triggering only the lifecycle `onHide`

 **OBJECT parameter description** 

| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|url|String| Yes      | The path of the tabBar page to be jumped to (the page defined in the tabBar field of pages.json), no parameters can be included after the path |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

 **Example** 

pages.json
```javascript
{
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "Home page"
    },{
      "pagePath": "pages/other/other",
      "text": "other"
    }]
  }
}
```
other.vue
```javascript
uni.switchTab({
	url: '/pages/index/index'
});
```

#### uni.navigateBack(OBJECT)

Close the current page and return to the previous page or multi-level pages. Can `getCurrentPages()`get the current stack of pages, the decision needs to return several layers.

**OBJECT parameter description**

| parameter         | Types of | Required | Defaults | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|:-|
|delta|Number| no       | 1        | The number of pages returned, if delta is greater than the number of existing pages, return to the home page. ||
|animationType|String| no       | pop-out  | The animation effect of window closing, see: window animation | App                             |
|animationDuration|Number| no       | 300      | The duration of the window closing animation, in ms          | App                             |

 **Example** 

```javascript
// Note: When you call the navigateTo jump, the page that called the method is added to the stack, whereas the redirectTo method is not. See the sample code below

// This is page A
uni.navigateTo({
	url: 'B?id=1'
});

// This is page B
uni.navigateTo({
	url: 'C?id=1'
});

// NavigateBack in page C returns to page A
uni.navigateBack({
	delta: 2
});
```


#### EventChannel@event-channel
 2.8.9+ Support event communication channel between pages 

**Method**

#### EventChannel.emit(string eventName, any args)

Trigger an event

string eventName event name

any args event parameters


#### EventChannel.off(string eventName, function fn)

Cancel listening for an event. When the second parameter is given, only the given listening function is cancelled, otherwise all listening functions are cancelled

string eventName event name

function fn event monitoring function

Parameters any args trigger event parameters


#### EventChannel.on(string eventName, function fn)

Keep listening for an event

string eventName event name

function fn event monitoring function

Parameters any args trigger event parameters


#### EventChannel.once(string eventName, function fn)

Listen to an event once, and fail when triggered

string eventName event name

function fn event monitoring function

Parameters any args trigger event parameters


Tips：
* `navigateTo`, `redirectTo`Only non-tabBar pages can be opened.
* `switchTab`You can only open `tabBar`the page.
* `reLaunch` Any page can be opened.
* Bottom of the page `tabBar`by the page decision, that is, as long as it is defined as `tabBar`a page, at the bottom there `tabBar`.
* You can not `App.vue`be the page jump inside.
* After the H5 page is refreshed, the page stack will disappear and you `navigateBack`cannot return at this time . If you must return, you can use `history.back()`other history records to navigate to the browser.

**References**

- Page routing interception and management, there are many packaged tools in the plug-in market, search routing

#### Window animation

>  This API is only supported by App. The applet itself does not support custom animations. H5's window animation can use the conventional single-page animation processing scheme, see the example of single-page animation under H5

The display/close animation of the window is supported in APIs, components, pages.json, priority: .`API = Component > pages.json`

##### API

A valid routing API

- navigateTo
- navigateBack

```javascript
uni.navigateTo({
	url: '../test/test',
	animationType: 'pop-in',
	animationDuration: 200
});
uni.navigateBack({
	delta: 1,
	animationType: 'pop-out',
	animationDuration: 200
});
```
##### Component

Open-type valid value

- navigateTo
- navigateBack

```html
<navigator animation-type="pop-in" animation-duration="300" url="../test/test">navigator</navigator>
<navigator animation-type="pop-out" animation-duration="300" open-type="navigateBack" >navigator</navigator>
```
##### pages.json

The animation of the window display is configured in pages.json

```javascript
"style": {
	"app-plus": {
		"animationType": "fade-in",
		"animationDuration": 300
	}
}
```

 Show animation and turn off animation, there will be the default corresponding rules. However, if the type of animation that closes the window is configured through an API or component, the default type is not used. 

| **The animation is displayed** | **Turn off the animation** | **Show animation description (turn off animation to the opposite)** 
|:-|:-|:-|
|slide-in-right|slide-out-right| The new form enters from the right|
|slide-in-left|slide-out-left| The new form enters from the left |
|slide-in-top|slide-out-top| The new form enters from the top |
|slide-in-bottom|slide-out-bottom| The new form enters from the bottom |
|pop-in|pop-out| The new form enters from the left and the old form is squeezed out |
|fade-in|fade-out| New forms are displayed gradually from transparent to opaque |
|zoom-out|zoom-in| The new form scales from small to large |
|zoom-fade-out|zoom-fade-in| New forms zoom in from small to large and appear from transparent to opaque |
|none|none| No animation |

For detailed window animation instructions, please refer to: 
- Animation of the window:AnimationTypeShow
- Animation of window closure:AnimationTypeClose

**note**

- For pure nvue projects (render is native), the default entry animation of the window animation is popin, and the return is pop-out. If you want to modify the animation type, you can only modify it through uni.navigateTo API, and the animation type configuration in the component or pages.json is invalid
- Non-pure nvue project, App side window animation, default entry animation is slider-in-right, default return animation is pop-out
- When uni-app H5 is embedded in webview, use uni.webView.navigateTo... to jump to the page

