**属性**
**Attributes**

**平台差异说明**
**Platform difference description**


|App|H5|
|:-:|:-:|
|√|√|

App-nvue下如需使用canvas，暂未封装为uni API，可参考[文档](https://github.com/dcloudio/NvueCanvasDemo)使用。
If you need to use canvas under App-nvue, it is not packaged as a uni API yet, you can refer to [document](https://github.com/dcloudio/NvueCanvasDemo) to use it.

### CanvasContext.fillStyle string

填充颜色。用法同 [CanvasContext.setFillStyle()](#canvascontextsetfillstyle)。
Fill color. The usage is the same as [CanvasContext.setFillStyle()](#canvascontextsetfillstyle).

### CanvasContext.strokeStyle string

边框颜色。用法同 [CanvasContext.setStrokeStyle()](#canvascontextsetstrokestyle)。
Border color. The usage is the same as [CanvasContext.setStrokeStyle()](#canvascontextsetstrokestyle).

### CanvasContext.shadowOffsetX number

阴影相对于形状在水平方向的偏移
The horizontal offset of the shadow relative to the shape

### CanvasContext.shadowOffsetY number

阴影相对于形状在竖直方向的偏移
The vertical offset of the shadow relative to the shape

### CanvasContext.shadowColor number

阴影的颜色
The color of the shadow

### CanvasContext.shadowBlur number

阴影的模糊级别
The blur level of the shadow

### CanvasContext.lineWidth number

线条的宽度。用法同 [CanvasContext.setLineWidth()](#canvascontextsetlinewidth)。
The width of the line. The usage is the same as [CanvasContext.setLineWidth()](#canvascontextsetlinewidth).

### CanvasContext.lineCap number

线条的端点样式。用法同 [CanvasContext.setLineCap()](#canvascontextsetlinecap)。
The end style of the line. The usage is the same as [CanvasContext.setLineCap()](#canvascontextsetlinecap).

### CanvasContext.lineJoin number

线条的交点样式。用法同 [CanvasContext.setLineJoin()](#canvascontextsetlinejoin)。
The intersection style of the lines. The usage is the same as [CanvasContext.setLineJoin()](#canvascontextsetlinejoin).

### CanvasContext.miterLimit number

最大斜接长度。用法同 [CanvasContext.setMiterLimit()](#canvascontextsetmiterlimit)。
Maximum miter length. The usage is the same as [CanvasContext.setMiterLimit()](#canvascontextsetmiterlimit).

### CanvasContext.lineDashOffset number

虚线偏移量，初始值为0
The offset of the dashed line, the initial value is 0

### CanvasContext.font string

当前字体样式的属性。符合 [CSS font 语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的 DOMString 字符串，至少需要提供字体大小和字体族名。默认值为 10px sans-serif。
The attributes of the current font style. A DOMString string conforming to [CSS font syntax](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font), at least the font size and font family name must be provided. The default value is 10px sans-serif.

### CanvasContext.globalAlpha number

全局画笔透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。
Global pen transparency. The range is 0-1, 0 means completely transparent, 1 means completely opaque.

### CanvasContext.globalCompositeOperation string

在绘制新形状时应用的合成操作的类型。目前安卓版本只适用于 `fill` 填充块的合成，用于 `stroke` 线段的合成效果都是 `source-over`。
The type of compositing operation applied when drawing a new shape. At present, the Android version is only suitable for the synthesis of `fill` filling blocks, and the synthesis effect used for the line segments of `stroke` is `source-over`.

目前支持的操作有
Currently supported operations are

* App和H5端：source-over、destination-over、source-in、destination-in、source-out、destination-out、source-atop、destination-atop、lighter、darker、xor、copy
* App and H5 end: source-over, destination-over, source-in, destination-in, source-out, destination-out, source-atop, destination-atop, lighter, darker, xor, copy

**方法**
**method**

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

### CanvasContext.arc

画一条弧线。创建一个圆可以用 ```arc()``` 方法指定起始弧度为0，终止弧度为 ```2 * Math.PI```。用 ```stroke()``` 或者 ```fill()``` 方法来在 ```canvas``` 中画弧线。
Draw an arc. To create a circle, you can use the ```arc()``` method to specify the starting arc as 0 and the ending arc as ```2 * Math.PI```. Use ```stroke()``` or ```fill()``` method to draw arcs in ```canvas```.

**参数**
**parameter**

|参数|类型	|说明|
|Parameter|Type |Description|
|---|---	|---	|
|x	|Number	|圆的x坐标	|
|x |Number |The x coordinate of the circle |
|y	|Number	|圆的y坐标|
|y |Number |y coordinate of the circle|
|r|Number	|圆的半径|
|r|Number |Radius of the circle|
|sAngle	|Number	|起始弧度，单位弧度（在3点钟方向）|
|sAngle |Number |Starting radian, unit radian (at 3 o'clock direction)|
|eAngle	|Number	|终止弧度|
|eAngle |Number |End radians|
|counterclockwise	|Boolean|可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。|
|counterclockwise |Boolean|Optional. Specifies whether the direction of the arc is counterclockwise or clockwise. The default is false, which is clockwise. |
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Draw coordinates
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.setFillStyle('#EEEEEE')
ctx.fill()

ctx.beginPath()
ctx.moveTo(40, 75)
ctx.lineTo(160, 75)
ctx.moveTo(100, 15)
ctx.lineTo(100, 135)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.setFontSize(12)
ctx.setFillStyle('black')
ctx.fillText('0', 165, 78)
ctx.fillText('0.5*PI', 83, 145)
ctx.fillText('1*PI', 15, 78)
ctx.fillText('1.5*PI', 83, 10)

// Draw points
ctx.beginPath()
ctx.arc(100, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(100, 25, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.arc(150, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

// Draw arc
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
ctx.setStrokeStyle('#333333')
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/687c12e0-4f28-11eb-bdc1-8bd33eb6adaa.png)

针对 ```arc(100, 75, 50, 0, 1.5 * Math.PI)```的三个关键坐标如下：
The three key coordinates for ```arc(100, 75, 50, 0, 1.5 * Math.PI)``` are as follows:
* 绿色: 圆心 (100, 75)
* Green: Center (100, 75)
* 红色: 起始弧度 (0)
* Red: starting arc (0)
* 蓝色: 终止弧度 (1.5 * Math.PI)
* Blue: Ending radian (1.5 * Math.PI)

### CanvasContext.arcTo

根据控制点和半径绘制圆弧路径。
Draw an arc path based on the control point and radius.

```javascript
CanvasContext.arcTo(x1, y1, x2, y2, radius)
```

**参数**
**parameter**
|属性值	|类型	|说明|
|Attribute value |Type |Description|
|---	|---	|---	|
|x1|Number	|第一个控制点的 x 轴坐标|
|x1|Number |The x-axis coordinate of the first control point|
|y1|Number	|第一个控制点的 y 轴坐标|
|y1|Number |The y-axis coordinate of the first control point|
|x2|Number	|第二个控制点的 x 轴坐标|
|x2|Number |The x-axis coordinate of the second control point|
|y2|Number	|第二个控制点的 y 轴坐标|
|y2|Number |The y-axis coordinate of the second control point|
|radius	|Number	|圆弧的半径	|
|radius |Number |The radius of the arc |

### CanvasContext.beginPath

开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
**Tip:** Multiple settings such as ```setFillStyle()```, ``setStrokeStyle()```, ```setLineWidth()```, etc. in the same path, subject to the last setting .
**Tip:** 在最开始的时候相当于调用了一次 ```beginPath()```。
To start creating a path, you need to call fill or stroke to fill or stroke with the path.
**Tip:** 同一个路径内的多次```setFillStyle()```、``setStrokeStyle()```、```setLineWidth()```等设置，以最后一次设置为准。
**Tip:** At the very beginning, it is equivalent to calling ```beginPath()``` once.

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1b5714b0-4f28-11eb-8a36-ebb87efcf8c0.png)
### CanvasContext.bezierCurveTo

创建三次方贝塞尔曲线路径。
Create a cubic Bézier path.
**Tip:** 曲线的起始点为路径中前一个点。
**Tip:** The starting point of the curve is the previous point in the path.
**参数**
**parameter**


|参数	|类型	|说明|
|Parameter |Type |Description|
|---	|---	|---|
|cp1x	|Number	|第一个贝塞尔控制点的 x 坐标|
|cp1x |Number |The x coordinate of the first Bezier control point|
|cp1y	|Number	|第一个贝塞尔控制点的 y 坐标|
|cp1y |Number |The y coordinate of the first Bezier control point|
|cp2x	|Number	|第二个贝塞尔控制点的 x 坐标|
|cp2x |Number |The x coordinate of the second Bezier control point|
|cp2y	|Number	|第二个贝塞尔控制点的 y 坐标|
|cp2y |Number |The y coordinate of the second Bezier control point|
|x|Number	|结束点的 x 坐标|
|x|Number |The x coordinate of the end point|
|y|Number	|结束点的 y 坐标|
|y|Number |y coordinate of the end point|

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.arc(200, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(150, 75)

ctx.moveTo(200, 20)
ctx.lineTo(200, 100)
ctx.lineTo(70, 75)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/03cf3750-4f28-11eb-b997-9918a5dda011.png)

针对 ```moveTo(20, 20)`` ```bezierCurveTo(20, 100, 200, 100, 200, 20)``` 的三个关键坐标如下：
The three key coordinates for ```moveTo(20, 20)`` ```bezierCurveTo(20, 100, 200, 100, 200, 20)``` are as follows:

* 红色：起始点(20, 20)
* Red: starting point (20, 20)
* 蓝色：两个控制点(20, 100) (200, 100)
* Blue: Two control points (20, 100) (200, 100)
* 绿色：终止点(200, 20)
* Green: End point (200, 20)

### CanvasContext.clearRect

清除画布上在该矩形区域内的内容。
Clear the content in the rectangular area on the canvas.

**参数**
**parameter**
|--- |--- |--- |
|参数|类型|说明|
|Parameter|Type|Description|
|---	|---	|---	|
|x	|Number	|矩形区域左上角的x坐标|
|x |Number |The x coordinate of the upper left corner of the rectangular area|
|y	|Number	|矩形区域左上角的y坐标|
|y |Number |y coordinate of the upper left corner of the rectangular area|
|width	|Number	|矩形区域的宽度|
|width |Number |Width of the rectangular area|
|height	|Number	|矩形区域的高度|
|height |Number |The height of the rectangular area|


**示例代码**
**Sample Code**

clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，对 canvas 加了一层背景色。
clearRect does not draw a white rectangle in the address area, but clears it. In order to have an intuitive experience, a background color is added to the canvas.

```javascript
<canvas canvas-id="myCanvas" id="myCanvas" style="border: 1px solid; background: #123456;"/>
```

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(0, 0, 150, 200)
ctx.setFillStyle('blue')
ctx.fillRect(150, 0, 150, 200)
ctx.clearRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/05afde30-4f28-11eb-a16f-5b3e54966275.png)


### CanvasContext.clip
从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。
Cut any shape and size from the original canvas. Once a certain area is cut, all subsequent drawings will be restricted to the cut area (other areas on the canvas cannot be accessed). You can save the current canvas area by using the save() method before using the clip() method, and restore it at any time in the future (via the restore() method).
**Tip:** 
用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
Use setFillStroke() to set the color of the rectangular line, if not set, the default is black.

**示例代码**
**Sample Code**

```javascript
const context = uni.createCanvasContext('myCanvas')

uni.downloadFile({
	url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png',
	success: function (res) {
context.save()
context.beginPath()
context.arc(96, 96, 48, 0, 2 * Math.PI)
context.clip()
context.drawImage(res.tempFilePath, 48, 48)
		context.restore()
		context.draw()
	}
})

```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/067a3310-4f28-11eb-b997-9918a5dda011.png)

### CanvasContext.closePath
关闭一个路径。
Close a path.

**Tip:** 
关闭路径会连接起点和终点。
The closed path will connect the start and end points.
**Tip:** 
如果关闭路径后没有调用 ```fill()``` 或者 ```stroke()``` 并开启了新的路径，那之前的路径将不会被渲染。
If the path is closed without calling ```fill()``` or ```stroke()``` and a new path is opened, the previous path will not be rendered.

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.closePath()
ctx.stroke()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/074e9a10-4f28-11eb-8a36-ebb87efcf8c0.png)


```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.closePath()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/02d34b20-4f28-11eb-b680-7980c8a877b8.png)

### CanvasContext.createCircularGradient
创建一个从圆心开始的渐变。返回的 [CanvasGradient](/api/canvas/CanvasGradient) 对象，需要使用 ```CanvasGradient.addColorStop()``` 来指定渐变点，至少要两个。
Create a gradient starting from the center of the circle. The returned [CanvasGradient](/api/canvas/CanvasGradient) object needs to use ```CanvasGradient.addColorStop()``` to specify the gradient point, at least two.

**参数**
**parameter**


|参数	|类型		|定义	|
|parameter |type |definition |
|---	|---	|---		|
|x		|Number	|圆心的x坐标|
|x |Number |x coordinate of the center of the circle|
|y		|Number	|圆心的y坐标|
|y |Number |y coordinate of the center of the circle|
|r		|Number	|圆的半径		|
|r |Number |The radius of the circle |


**示例代码**	
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/04c3f790-4f28-11eb-8a36-ebb87efcf8c0.png)

### CanvasContext.createLinearGradient
创建一个线性的渐变颜色。返回的 [CanvasGradient](/api/canvas/CanvasGradient) 对象，需要使用 ```CanvasGradient.addColorStop()``` 来指定渐变点，至少要两个。
Create a linear gradient color. The returned [CanvasGradient](/api/canvas/CanvasGradient) object needs to use ```CanvasGradient.addColorStop()``` to specify the gradient point, at least two.
**参数**
**parameter**

|参数	|类型		|定义	|
|parameter |type |definition |
|---	|---	|---		|
|x0		|Number	|起点的x坐标|
|x0 |Number |x coordinate of starting point|
|y0		|Number	|起点的y坐标|
|y0 |Number |y coordinate of starting point|
|x1		|Number	|终点的x坐标|
|x1 |Number |x coordinate of end point|
|y1		|Number	|终点的y坐标|
|y1 |Number |y coordinate of end point|

**示例代码**
**Sample Code**
```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Create linear gradient
const grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/24a94010-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.createPattern
对指定的图像创建模式的方法，可在指定的方向上重复元图像
The method of creating a pattern for a specified image, which can repeat the original image in the specified direction

**参数**
**parameter**

|参数		|类型	|说明				|
|Parameter |Type |Description |
|---		|---	|---																|
|image		|String	|重复的图像源，仅支持包内路径和临时路径								|
|image |String |Duplicate image source, only supports in-package path and temporary path |
|repetition	|String	|指定如何重复图像，有效值有: repeat, repeat-x, repeat-y, no-repeat	|
|repetition |String |Specify how to repeat the image, valid values are: repeat, repeat-x, repeat-y, no-repeat |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
const pattern = ctx.createPattern('/path/to/image', 'repeat-x')
ctx.fillStyle = pattern
ctx.fillRect(0, 0, 300, 150)
ctx.draw()
```

### CanvasContext.draw
将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
Draw the description (path, deformation, style) that was previously in the drawing context into the canvas.

**参数**
**parameter**

|参数|类型|说明|最低版本	|
|Parameter|Type|Description|Minimum Version|
|---|---|---|---|
|reserve	|Boolean	|非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false	|	|
|reserve |Boolean |Not required. Whether this drawing is continued from the previous drawing, that is, the reserve parameter is false, then the native layer should first clear the canvas before drawing on this call to drawCanvas; if the reserver parameter is true, the content on the current canvas is retained, this call The content drawn by drawCanvas is overlaid on it, the default is false | |
|callback	|Function	|绘制完成后回调|1.7.0|
|callback |Function |Callback after drawing|1.7.0|

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/33d7d100-4f28-11eb-97b7-0dc4655d6e68.png)


```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw(true)
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2ad88090-4f28-11eb-8ff1-d5dcf8779628.png)

### CanvasContext.drawImage
绘制图像到画布。
Draw the image to the canvas.

**参数**
**parameter**

|参数|类型	|说明				|
|Parameter|Type |Description|
|---	|---|---	|
|imageResource	|String	|所要绘制的图片资源				|
|imageResource |String |Image resource to be drawn |
|dx	|Number	|图像的左上角在目标canvas上 X 轴的位置		|
|dx |Number |The position of the upper left corner of the image on the X axis of the target canvas |
|dy	|Number	|图像的左上角在目标canvas上 Y 轴的位置		|
|dy |Number |The position of the upper left corner of the image on the Y axis of the target canvas |
|dWidth|Number	|在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放	|
|dWidth|Number |The width of the image drawn on the target canvas, allowing the drawn image to be scaled |
|dHeight|Number	|在目标画布上绘制图像的高度，允许对绘制的图像进行缩放	|
|dHeight|Number |The height of the image drawn on the target canvas, allowing scaling of the drawn image |
|sx	|Number	|源图像的矩形选择框的左上角 X 坐标			|
|sx |Number |The X coordinate of the upper left corner of the rectangular selection box of the source image |
|sy	|Number	|源图像的矩形选择框的左上角 Y 坐标			|
|sy |Number |The Y coordinate of the upper left corner of the rectangular selection box of the source image |
|sWidth|Number	|源图像的矩形选择框的高度		|
|sWidth|Number |The height of the rectangular selection box of the source image |
|sHeight		|Number	|源图像的矩形选择框的高度		|
|sHeight |Number |The height of the rectangular selection box of the source image |


有三个版本的写法：
There are three versions of writing:

* ```drawImage(dx, dy)```
* ```drawImage(dx, dy, dWidth, dHeight)```
* ```drawImage(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)```

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

uni.chooseImage({
  success: function(res){
    ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    ctx.draw()
  }
})
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1946d250-4f28-11eb-8a36-ebb87efcf8c0.png)

### CanvasContext.fill
对当前路径中的内容进行填充。默认的填充色为黑色。
Fill in the content in the current path. The default fill color is black.
**Tip:** 如果当前路径没有闭合，```fill()``` 方法会将起点和终点进行连接，然后填充，详情见例一。
**Tip:** If the current path is not closed, the ```fill()``` method will connect the start and end points, and then fill them. See Example 1 for details.
**Tip:** ```fill()``` 填充的的路径是从 ```beginPath()``` 开始计算，但是不会将 ```fillRect()``` 包含进去，详情见例二。
**Tip:** ```fill()``` The filled path is calculated from ```beginPath()```, but ```fillRect()``` will not be included. Details See example two.
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.fill()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1a366270-4f28-11eb-a16f-5b3e54966275.png)

```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1b5714b0-4f28-11eb-8a36-ebb87efcf8c0.png)

### CanvasContext.fillRect
填充一个矩形。
Fill a rectangle.

**Tip:** 用 ```setFillStyle()``` 设置矩形的填充色，如果没设置默认是黑色。
**Tip:** Use ```setFillStyle()``` to set the fill color of the rectangle. If not set, the default is black.

**参数**
**parameter**

|参数	|类型	|定义					|
|parameter |type |definition |
|---	|---	|---					|
|x		|Number	|矩形路径左上角的x坐标	|
|x |Number |The x coordinate of the upper left corner of the rectangular path |
|y		|Number	|矩形路径左上角的y坐标	|
|y |Number |The y coordinate of the upper left corner of the rectangular path |
|width	|Number	|矩形路径的宽度			|
|width |Number |The width of the rectangular path |
|height	|Number	|矩形路径的高度			|
|height |Number |The height of the rectangular path |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1c4656b0-4f28-11eb-a16f-5b3e54966275.png)

### CanvasContext.fillText
在画布上绘制被填充的文本。
Draw the filled text on the canvas.

**参数**
**parameter**

|参数		|类型	|说明						|
|Parameter |Type |Description |
|---		|---	|---						|
|text		|String	|在画布上输出的文本			|
|text |String |Text output on the canvas |
|x			|Number	|绘制文本的左上角x坐标位置	|
|x |Number |The x coordinate position of the upper left corner of the drawn text |
|y			|Number	|绘制文本的左上角y坐标位置	|
|y |Number |The y coordinate position of the upper left corner of the drawn text |
|maxWidth	|Number	|需要绘制的最大宽度，可选	|
|maxWidth |Number |The maximum width to be drawn, optional |
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('Hello', 20, 20)
ctx.fillText('MINA', 100, 100)

ctx.draw()
```


### CanvasContext.lineTo
增加一个新点，然后创建一条从上次指定点到目标点的线。
Add a new point, and then create a line from the last specified point to the target point.
**Tip:** 用 ```stroke()``` 方法来画线条
**Tip:** Use the ```stroke()``` method to draw lines
**参数**
**parameter**


|参数	|类型|说明			|
|Parameter |Type|Description |
|---	|---	|---	|
|x		|Number	|目标位置的x坐标|
|x |Number |x coordinate of target position|
|y		|Number	|目标位置的y坐标|
|y |Number |y coordinate of target position|

**示例代码**
**Sample Code**



```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.rect(10, 10, 100, 50)
ctx.lineTo(110, 60)
ctx.stroke()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/27097730-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.measureText
测量文本尺寸信息，目前仅返回文本宽度。同步接口。（App 端 2.8.12+ 支持）
Measure text size information, currently only the text width is returned. Synchronous interface. (App 2.8.12+ support)

**参数**
**parameter**

|参数	|类型	|说明			|
|Parameter |Type |Description |
|---	|---	|---			|
|text	|String	|要测量的文本	|
|text |String |The text to be measured |

**返回**
**return**

返回 ```TextMetrics``` 对象，结构如下：
Return the ```TextMetrics``` object, the structure is as follows:

|参数	|类型	|说明		|
|Parameter |Type |Description |
|---	|---	|---			|
|width	|Number	|文本的宽度	|
|width |Number |Width of text |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.font = 'italic bold 20px cursive'
const metrics = ctx.measureText('Hello World')
console.log(metrics.width)
```

### CanvasContext.moveTo
把路径移动到画布中的指定点，不创建线条。用 ```stroke()``` 方法来画线条。
Move the path to the specified point in the canvas without creating a line. Use the ```stroke()``` method to draw lines.

**参数**
**parameter**

|参数	|类型|说明			|
|Parameter |Type|Description |
|---	|---	|---	|
|x		|Number	|目标位置的x坐标|
|x |Number |x coordinate of target position|
|y		|Number	|目标位置的y坐标|
|y |Number |y coordinate of target position|
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)

ctx.moveTo(10, 50)
ctx.lineTo(100, 50)
ctx.stroke()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2945d2a0-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.quadraticCurveTo
创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。
Create a quadratic Bézier path. The starting point of the curve is the previous point in the path.

**参数**
**parameter**

|参数	|类型	|说明				|
|Parameter |Type |Description |
|---	|---	|---				|
|cpx	|Number	|贝塞尔控制点的x坐标|
|cpx |Number |x coordinate of Bezier control point|
|cpy	|Number	|贝塞尔控制点的y坐标|
|cpy |Number |y coordinate of Bezier control point|
|x		|Number	|结束点的x坐标		|
|x |Number |x coordinate of the end point |
|y		|Number	|结束点的y坐标		|
|y |Number |y coordinate of the end point |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(200, 20)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.quadraticCurveTo(20, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2a0a0d00-4f28-11eb-bd01-97bc1429a9ff.png)

针对 ```moveTo(20, 20)`` ```quadraticCurveTo(20, 100, 200, 20)``` 的三个关键坐标如下：
The three key coordinates for ```moveTo(20, 20)`` ```quadraticCurveTo(20, 100, 200, 20)``` are as follows:


* 红色：起始点(20, 20)
* Red: starting point (20, 20)

* 蓝色：控制点(20, 100)
* Blue: control points (20, 100)

* 绿色：终止点(200, 20)
* Green: End point (200, 20)
* 
### CanvasContext.rect
创建一个矩形。
Create a rectangle.

**Tip:** 用 fill() 或者 stroke() 方法将矩形真正的画到 canvas 中。
**Tip:** Use the fill() or stroke() method to draw the rectangle onto the canvas.

**参数**
**parameter**

|参数	|类型	|说明				|
|Parameter |Type |Description |
|---	|---	|---					|
|x		|Number	|矩形路径左上角的x坐标	|
|x |Number |The x coordinate of the upper left corner of the rectangular path |
|y		|Number	|矩形路径左上角的y坐标	|
|y |Number |The y coordinate of the upper left corner of the rectangular path |
|width	|Number	|矩形路径的宽度			|
|width |Number |The width of the rectangular path |
|height	|Number	|矩形路径的高度			|
|height |Number |The height of the rectangular path |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.rect(10, 10, 150, 75)
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1c4656b0-4f28-11eb-a16f-5b3e54966275.png)

### CanvasContext.restore
恢复之前保存的绘图上下文。
Restore the previously saved drawing context.

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// save the default fill style
ctx.save() 
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2c8d0e60-4f28-11eb-8ff1-d5dcf8779628.png)

### CanvasContext.rotate
以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
With the origin as the center, the origin can be modified with the translate method. Rotate the current coordinate axis clockwise. If rotate is called multiple times, the angle of rotation will be superimposed.

**参数**
**parameter**

|参数	|类型	|说明															|
|Parameter |Type |Description |
|---	|---	|---															|
|rotate	|Number	|旋转角度，以弧度计(degrees * Math.PI/180；degrees范围为0~360)	|
|rotate |Number |The angle of rotation, in radians (degrees * Math.PI/180; the range of degrees is 0~360) |
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2bbd8960-4f28-11eb-bd01-97bc1429a9ff.png)

### CanvasContext.save
保存当前的绘图上下文。
Save the current drawing context.

**示例代码**
**Sample Code**
```javascript
const ctx = wx.createCanvasContext('myCanvas')

// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```

### CanvasContext.scale
在调用```scale```方法后，之后创建的路径其横纵坐标会被缩放。多次调用```scale```，倍数会相乘。
After calling the ``scale``` method, the horizontal and vertical coordinates of the path created later will be scaled. Calling ```scale``` multiple times, the multiples will be multiplied.

**参数**
**parameter**

|参数		|类型	|说明												|
|Parameter |Type |Description |
|---		|---	|---												|
|scaleWidth	|Number	|横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)	|
|scaleWidth |Number |The multiple of the abscissa scaling (1 = 100%, 0.5 = 50%, 2 = 200%) |
|scaleHeight|Number	|纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)	|
|scaleHeight|Number |The zoom factor of the vertical axis (1 = 100%, 0.5 = 50%, 2 = 200%) |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2d528140-4f28-11eb-8ff1-d5dcf8779628.png)

### CanvasContext.setFillStyle
设置填充色，如果没有设置 fillStyle，默认颜色为 black。
Set the fill color. If fillStyle is not set, the default color is black.

**语法**
**grammar**

```javascript
canvasContext.setFillStyle(color)
canvasContext.fillStyle = color
```

**参数**
**parameter**

|参数	|类型|定义		|说明|
|Parameter |Type|Definition |Description|
|---|---|---|---|
|color|Color|Gradient Object|填充色	|
|color|Color|Gradient Object|fill color |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1c4656b0-4f28-11eb-a16f-5b3e54966275.png)

### CanvasContext.setFontSize
设置字体的字号。
Set the font size.

|参数	|类型	|说明					|
|Parameter |Type |Description |
|---	|---	|---					|
|fontSize	|Number	|字体的字号|
|fontSize |Number |font size|

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('20', 20, 20)
ctx.setFontSize(30)
ctx.fillText('30', 40, 40)
ctx.setFontSize(40)
ctx.fillText('40', 60, 60)
ctx.setFontSize(50)
ctx.fillText('50', 90, 90)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/1855bb90-4f28-11eb-a16f-5b3e54966275.png)


### CanvasContext.setGlobalAlpha
设置全局画笔透明度。
Set the global pen transparency.

**参数**
**parameter**

|参数	|类型	|范围|说明										|
|Parameter |Type |Scope|Description |
|---	|---	|---	|---									|
|alpha	|Number	|0~1	|透明度，0 表示完全透明，1 表示完全不透明	|
|alpha |Number |0~1 |Transparency, 0 means completely transparent, 1 means completely opaque |

**示例代码**
**Sample Code**
```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('yellow')
ctx.fillRect(100, 100, 150, 100)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/23c43740-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.setLineCap
设置线条的端点样式。
Set the end style of the line.
**参数**
**parameter**

|参数	|类型						|说明				|
|Parameter |Type |Description |
|---	|---						|---				|
|lineCap|String	|'butt'、'round'、'square'	|线条的结束端点样式	|
|lineCap|String |'butt','round','square' |The end cap style of the line |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('butt')
ctx.setLineWidth(10)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('round')
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('square')
ctx.setLineWidth(10)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2577dab0-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.setLineDash
设置线条宽度。
Set the line width.

**参数**
**parameter**

|参数	|类型	|定义													|
|parameter |type |definition |
|---	|---	|---													|
|pattern|Array	|一组描述交替绘制线段和间距（坐标空间单位）长度的数字	|
|pattern|Array |A set of numbers describing the length of alternately drawn line segments and spacing (coordinate space units) |
|offset	|Number	|虚线偏移量												|
|offset |Number |Dotted line offset |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setLineDash([10, 20], 5);

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2e1d4b50-4f28-11eb-8ff1-d5dcf8779628.png)

### CanvasContext.setLineJoin
设置线条的交点样式。
Set the intersection style of the lines.
**参数**
**parameter**
|参数	|类型						|范围				|说明|
|Parameter |Type |Scope |Description|
|---	|---						|---				|---|
|lineJoin	|String	|'bevel'、'round'、'miter'	|线条的结束交点样式	|
|lineJoin |String |'bevel','round','miter' |The end intersection style of the line |
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/264f9d10-4f28-11eb-bd01-97bc1429a9ff.png)

### CanvasContext.setLineWidth
设置线条的宽度。
Set the width of the line.

**参数**
**parameter**

|参数		|类型	|说明					|
|Parameter |Type |Description |
|---		|---	|---					|
|lineWidth	|Number	|线条的宽度(单位是px)	|
|lineWidth |Number |The width of the line (unit is px) |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(5)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(15)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/27d356e0-4f28-11eb-bd01-97bc1429a9ff.png)

### CanvasContext.setMiterLimit
设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 ``setLineJoin()`` 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
Set the maximum miter length. Miter length refers to the distance between the inner and outer corners at the intersection of two lines. Only valid when ``setLineJoin()'' is miter. If the maximum tilt length is exceeded, the connection will be displayed with lineJoin as bevel.

**参数**
**parameter**

|参数		|类型	|说明			|
|Parameter |Type |Description |
|---		|---	|---			|
|miterLimit	|Number	|最大斜接长度	|
|miterLimit |Number |Maximum miter length |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(4)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/289176c0-4f28-11eb-bd01-97bc1429a9ff.png)

### CanvasContext.setShadow
设置阴影样式。如果没有设置，offsetX 默认值为0， offsetY 默认值为0， blur 默认值为0，color 默认值为 black。
Set the shadow style. If not set, the default value of offsetX is 0, the default value of offsetY is 0, the default value of blur is 0, and the default value of color is black.

**参数**
**parameter**

|参数|类型|定义		|说明				|
|Parameter|Type|Definition |Description|
|---|---|---		|---				|
|offsetX|Number	|		|阴影相对于形状在水平方向的偏移	|
|offsetX|Number | |The horizontal offset of the shadow relative to the shape |
|offsetY|Number	|		|阴影相对于形状在竖直方向的偏移	|
|offsetY|Number | |The vertical offset of the shadow relative to the shape |
|blur|Number	|0~100	|阴影的模糊级别，数值越大越模糊	|
|blur|Number |0~100 |The blur level of the shadow, the larger the value, the more blurred |
|color	|Color	|		|阴影的颜色			|
|color |Color | |Shadow color |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.setShadow(10, 50, 50, 'blue')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/308068a0-4f28-11eb-b997-9918a5dda011.png)

### CanvasContext.setStrokeStyle
设置边框颜色。如果没有设置 fillStyle，默认颜色为 black。
Set the border color. If fillStyle is not set, the default color is black.

**参数**
**parameter**

|参数	|类型	|定义|说明		|
|Parameter |Type |Definition|Description |
|---	|---	|---|---		|
|color|Color|Gradient Object|填充色	|
|color|Color|Gradient Object|fill color |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3302cdc0-4f28-11eb-97b7-0dc4655d6e68.png)

### CanvasContext.setTextAlign
用于设置文字的对齐
Used to set the alignment of text

|参数	|类型	|定义|
|Parameter |Type |Definition|
|---	|---	|---|
|align	|String	|可选值 'left'、'center'、'right'	|
|align |String |Optional values'left','center','right' |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()

ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)

ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)

ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2ee492f0-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.setTextBaseline
用于设置文字的水平对齐
Used to set the horizontal alignment of text

**参数**
**parameter**

|参数	|类型|说明|
|Parameter |Type|Description|
|---	|---|---|
|textBaseline	|String	|可选值 'top'、'bottom'、'middle'、'normal'	|
|textBaseline |String |Optional values'top','bottom','middle','normal' |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()

ctx.setFontSize(20)

ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)

ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)

ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)

ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/2fba3270-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.setTransform
使用矩阵重新设置（覆盖）当前变换的方法
Use the matrix to reset (overwrite) the current transformation method

**语法**
**grammar**

```javascript
canvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
```

**参数**
**parameter**

|参数		|类型	|说明		|
|Parameter |Type |Description |
|---		|---	|---		|
|scaleX		|Number	|水平缩放	|
|scaleX |Number |Horizontal zoom |
|skewX		|Number	|水平倾斜	|
|skewX |Number |Horizontal tilt |
|skewY		|Number	|垂直倾斜	|
|skewY |Number |Vertical tilt |
|scaleY		|Number	|垂直缩放	|
|scaleY |Number |Vertical zoom |
|translateX	|Number	|水平移动	|
|translateX |Number |Horizontal movement |
|translateY	|Number	|垂直移动	|
|translateY |Number |Vertical movement |

### CanvasContext.stroke
画出当前路径的边框。默认颜色色为黑色。
Draw the border of the current path. The default color is black.
**Tip:** ``stroke()`` 描绘的的路径是从 ```beginPath()``` 开始计算，但是不会将 ```strokeRect()``` 包含进去，详情见例二。
**Tip:** The path depicted by ``stroke()`` is calculated from ```beginPath()```, but ```strokeRect()``` will not be included. See the example for details two.
**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/31473b10-4f28-11eb-bdc1-8bd33eb6adaa.png)


```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only stoke this rect, not in current path
ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will stroke current path
ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/322c1cd0-4f28-11eb-bdc1-8bd33eb6adaa.png)

### CanvasContext.strokeRect
画一个矩形(非填充)。用 `setFillStroke()` 设置边框颜色，如果没设置默认是黑色。
Draw a rectangle (not filled). Use `setFillStroke()` to set the border color, if not set, the default is black.

**参数**
**parameter**

|参数	|类型	|范围	|说明					|
|Parameter |Type |Scope |Description |
|---	|---	|---	|---					|
|x		|Number	|		|矩形路径左上角的x坐标	|
|x |Number | |The x coordinate of the upper left corner of the rectangular path |
|y		|Number	|		|矩形路径左上角的y坐标	|
|y |Number | |y coordinate of the upper left corner of the rectangular path |
|width	|Number	|		|矩形路径的宽度			|
|width |Number | |Width of the rectangular path |
|height	|Number	|		|矩形路径的高度			|
|height |Number | |The height of the rectangular path |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/3302cdc0-4f28-11eb-97b7-0dc4655d6e68.png)


### CanvasContext.strokeText
给定的 (x, y) 位置绘制文本描边的方法
The method of drawing text strokes at a given (x, y) position

**语法**
**grammar**

```javascript
canvasContext.strokeText(text, x, y, maxWidth)
```


**参数**
**parameter**

|参数	|类型		|说明						|
|Parameter |Type |Description |
|---	|---		|---						|
|text		|String	|要绘制的文本				|
|text |String |Text to be drawn |
|x			|Number	|文本起始点的 x 轴坐标		|
|x |Number |The x-axis coordinate of the starting point of the text |
|y			|Number	|文本起始点的 y 轴坐标		|
|y |Number |The y-axis coordinate of the starting point of the text |
|maxWidth	|Number	|需要绘制的最大宽度，可选	|
|maxWidth |Number |The maximum width to be drawn, optional |
### CanvasContext.transform
使用矩阵多次叠加当前变换的方法。
The method of using a matrix to superimpose the current transformation multiple times.

**参数**
**parameter**


|参数		|类型	|说明		|
|Parameter |Type |Description |
|---		|---	|---		|
|scaleX		|Number	|水平缩放	|
|scaleX |Number |Horizontal zoom |
|skewX		|Number	|水平倾斜	|
|skewX |Number |Horizontal tilt |
|skewY		|Number	|垂直倾斜	|
|skewY |Number |Vertical tilt |
|scaleY		|Number	|垂直缩放	|
|scaleY |Number |Vertical zoom |
|translateX	|Number	|水平移动	|
|translateX |Number |Horizontal movement |
|translateY	|Number	|垂直移动	|
|translateY |Number |Vertical movement |

### CanvasContext.translate
对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
Transform the origin (0, 0) of the current coordinate system. The default coordinate system origin is the upper left corner of the page.

**参数**
**parameter**

|参数	|类型	|说明			|
|Parameter |Type |Description |
|---	|---	|---			|
|x		|Number	|水平坐标平移量	|
|x |Number |Horizontal coordinate translation amount|
|y		|Number	|竖直坐标平移量	|
|y |Number |Vertical coordinate translation |

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)

ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/34aef720-4f28-11eb-97b7-0dc4655d6e68.png)
