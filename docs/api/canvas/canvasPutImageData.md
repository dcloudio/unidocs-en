#### uni.canvasPutImageData(OBJECT,this)

将像素数据绘制到画布的方法，在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件
The method of drawing pixel data to the canvas. Under the custom component, the second parameter is passed into the custom component instance this to operate the `<canvas>` component in the component

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|最低版本|
|Parameter|Type|Required|Description|Minimum version|
|---|---|---|---|--|
|canvasId|String|是|画布标识，传入 ```<canvas />``` 的 canvas-id（支付宝小程序是id、其他平台是canvas-id）||
|canvasId|String|is|Canvas ID, pass in the canvas-id of ```<canvas />``` (Alipay applet is id, other platforms are canvas-id)||
|data|Uint8ClampedArray|是|图像像素点数据，一维数组，每四项表示一个像素点的rgba||
|data|Uint8ClampedArray|is|Image pixel data, a one-dimensional array, every four items represent a pixel rgba||
|x|Number|是|源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）||
|x|Number|is|The position offset of the source image data in the target canvas (the offset in the x-axis direction)||
|y|Number|是|源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）||
|y|Number|is|The position offset of the source image data in the target canvas (the offset in the y-axis direction)||
|width|Number|是|源图像数据矩形区域的宽度||
|width|Number|is the width of the rectangular area of the source image data||
|height|Number|否|源图像数据矩形区域的高度||
|height|Number|No|The height of the rectangular area of the source image data||
|success|Function|否|接口调用成功的回调函数||
|success|Function|No|Callback function for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|Callback function at the end of the interface call (it will be executed if the call succeeds or fails)|&nbsp;|

**示例代码**
**Sample Code**

```javascript
const data = new Uint8ClampedArray([255, 0, 0, 255])
uni.canvasPutImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 1,
  data: data,
  success(res) {}
})
```
