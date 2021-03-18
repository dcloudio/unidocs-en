#### navigator

Page jump.

This component is similar to the component in HTML `<a>`, but it can only jump to local pages. The target page must be registered in pages.json.

The function of this component has API method, see also: API>Routing and page jump>router.md

**Property description**

|Attribute name| Types of | Defaults        | Description                                                  |Platform difference description|
|:-|:-|:-|:-|:-|
|url|String||Hoplinks within the application, is a relative or absolute path, such as: "../ first / first", "/ pages / first / first", careful not to add `.vue`the suffix||
|open-type|String|navigate|Jump way||
|delta|Number||Valid when open-type is'navigateBack', indicating the number of layers to fall back||
|animation-type|String|pop-in/out|When open-type is navigate, navigateBack, it is valid, the window display/close animation effect|App|
|animation-duration|Number|300|Valid when open-type is navigate, navigateBack, the duration of the window display/close animation.|App|
|hover-class|String|navigator-hover|Specify the style class when clicking. When hover-class="none", there is no click state effect||
|hover-stop-propagation|Boolean|false|Specify whether to prevent the click state of the ancestor node of this node||
|hover-start-time|Number|50|How long does the click state appear after pressing, in milliseconds||
|hover-stay-time|Number|600|Retention time of the click state after releasing the finger, in milliseconds|&nbsp;|
|target|String|self|On which mini program target the jump occurs, the current mini program is defaulted, and the value range is self/miniProgram||

**open-type valid value**

| value        | Description                                                  | Platform difference description |
|:-|:-|:-|
|navigate|Corresponding to the function of uni.navigateTo||
|redirect|Corresponding to the function of uni.redirectTo||
|switchTab|Corresponding to the function of uni.switchTab||
|reLaunch|Corresponding to the function of uni.reLaunch||
|navigateBack|Corresponding to the function of uni.navigateBack||
|exit|Exit the mini program, it takes effect when target="miniProgram"||

**note**

- To jump to the tabbar page, open-type="switchTab" must be set

- The navigator-hover defaults to {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, and `<navigator>`the background color of the child nodes should be transparent.

- The app-nvue platform is only supported by pure nvue projects (render is native) `<navigator>`. If the non-render is native, nvue does not support the navigator component, please use the API to jump.

  

**Example** 

```html
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">Jump to new page</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">Open on current page</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">Jump to tab page</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
```

```javascript
// navigate.vue Page accepts parameters
export default {
	onLoad: function (option) { //option is object type, it will serialize the parameters passed on the previous page
		console.log(option.id); //Print out the parameters passed on the previous page
		console.log(option.name); //Print out the parameters passed on the previous page
	}
}
```

The URL has a length limit. If the string is too long, it will fail to pass. You can use `encodeURIComponent`other methods to solve it. The following is `encodeURIComponent`an example.。
```html
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```
```javascript
// navigate.vue Page accepts parameters
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

