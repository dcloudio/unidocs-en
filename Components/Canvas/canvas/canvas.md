#### canvas

canvas.

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  |
| :------------- | :---------- | :------- | :----------------------------------------------------------- |
| canvas-id      | String      |          | The unique identifier of the canvas component                |
| disable-scroll | Boolean     | false    | When moving in the canvas and there are bound gesture events, prohibit screen scrolling and pull-down refresh |
| @touchstart    | EventHandle |          | Finger touch action starts                                   |
| @touchmove     | EventHandle |          | Move after finger touch                                      |
| @touchend      | EventHandle |          | End of finger touch                                          |
| @touchcancel   | EventHandle |          | Interrupted finger touch action, such as call reminder, pop-up window |
| @longtap       | EventHandle |          | Triggered after a long finger press for 500ms, moving after the long press event is triggered will not trigger the scrolling of the screen |
| @error         | EventHandle |          | The error event is triggered when an error occurs, detail = {errMsg:'something wrong'} |

**Precautions:**

- The canvas tag has a default width of 300px and a height of 225px. It needs to be redrawn after dynamically changing the canvas size.
- The canvas-id in the same page cannot be repeated. If a canvas-id that has already appeared is used, the canvas corresponding to the canvas tag will be hidden and no longer work normally.
- Canvas is a native component in WeChat Mini Programs, Baidu Mini Programs, and QQ Mini Programs. It has a higher level than the front-end components. Please do not use it embedded in scroll-view, swiper, picker-view, and movable-view. To solve the problem that the canvas level is too high and cannot be covered, refer to native-component. The canvas of other applets is still the canvas in the webview.
- The canvas in app-vue is still the canvas of webview. If you need to use canvas under app-nvue, you need to download the plug-in, see the chapter at the bottom of the document for details.
- Although the canvas of app-vue is the canvas that comes with webview, it has higher performance than the native canvas of nvue and WeChat applets. Note that not native = faster. The key to the smoothness of canvas animation is not the speed of the rendering engine, but the reduction of the loss caused by frequent communication from the logic layer to the view layer.
- Small programs and app-nvue, because of communication blockage, it is difficult to draw very smooth canvas animation. h5 and app-vue do not have this problem. But note that if you want to draw canvas animation smoothly under app-vue, you need to use renderjs technology to put the js logic that operates the canvas in the view layer to run, avoiding frequent communication between the logic layer and the view layer. The canvas example of hello uni-app is very typical. Running the example on the same mobile phone shows that it is very smooth on both the h5 and app sides, while the applet terminal cannot achieve such smooth animation because it does not have renderjs technology.

**Example:** View the demo

```html
<template>
	<view>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas"></canvas>
		<canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" id="secondCanvas" @error="canvasIdErrorCallback"></canvas>
	</view>
</template>
```

```javascript
export default {
	onReady: function (e) {
		var context = uni.createCanvasContext('firstCanvas')

		context.setStrokeStyle("#00ff00")
		context.setLineWidth(5)
		context.rect(0, 0, 200, 200)
		context.stroke()
		context.setStrokeStyle("#ff0000")
		context.setLineWidth(2)
		context.moveTo(160, 100)
		context.arc(100, 100, 60, 0, 2 * Math.PI, true)
		context.moveTo(140, 100)
		context.arc(100, 100, 40, 0, Math.PI, false)
		context.moveTo(85, 80)
		context.arc(80, 80, 5, 0, 2 * Math.PI, true)
		context.moveTo(125, 80)
		context.arc(120, 80, 5, 0, 2 * Math.PI, true)
		context.stroke()
		context.draw()
	},
	methods: {
		canvasIdErrorCallback: function (e) {
			console.error(e.detail.errMsg)
		}
	}
}
```

Related api: uni.createCanvasContext

**Extended reading**

canvas Common uses include charts and image processing, plug-in uni-app market has a large number of plug-in-based canvas, searchable chart , picture cropping, posters , two-dimensional code .

About the chart

- The popular echart report on the H5 end cannot be used cross-end because it involves a large number of dom operations, and wx-chart is insufficient in cross-end and update. If you are considering small programs, it is recommended to use uChart, which is available on all ends .
- If you only consider the H5 end, you can continue to use regular web charts such as echart and f2.
- If you don't consider small programs, App and H5 can also use echart, f2 and other web charts through renderjs technology, which has better functional performance than uchart. What is renderjs , an example of using echart based on renderjs

**How to use canvas on nvue page**

Starting from HBuilderX 2.2.5 (alpha), nvue pages support Canvas and W3C WebGL API WebGL 1.0

Sample project address: NvueCanvasDemo

On the App side, in terms of performance, due to the problem of communication blocking, the canvas performance of nvue cannot reach the canvas of the vue page using renderjs. On the App side, Vue's canvas is recommended.