### CanvasGradient.addColorStop(stop,color)

创建一个颜色的渐变点。
Create a color gradient point.
- 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
- The part less than the minimum stop will be rendered according to the color of the minimum stop, and the part greater than the maximum stop will be rendered according to the color of the maximum stop.
- 需要使用 ```addColorStop()``` 来指定渐变点，至少要两个。
- Need to use ```addColorStop()``` to specify the gradient point, at least two.

#### 参数
#### Parameters

|参数|类型	|定义	|
|Parameter|Type |Definition|
|---|---|---	|
|stop	|Number(0-1)|表示渐变点在起点和终点中的位置	|
|stop |Number(0-1)|Indicates the position of the gradient point in the start and end points |
|color	|Color	|渐变点的颜色|
|color |Color |Color of gradient points|

**示例代码**
**Sample Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d1e88440-4f26-11eb-bd01-97bc1429a9ff.png)

