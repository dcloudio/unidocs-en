#### uni.createCanvasContext(canvasId, this)

#### 定义
#### Definition

创建 ```canvas``` 绘图上下文（指定 canvasId）。在自定义组件下，第二个参数传入组件实例this，以操作组件内 ```<canvas/>``` 组件
Create ```canvas``` drawing context (specify canvasId). In the custom component, the second parameter is passed into the component instance this to operate the ```<canvas/>``` component in the component

**Tip:** 需要指定 canvasId，该绘图上下文只作用于对应的 `<canvas/>`
**Tip:** Need to specify canvasId, this drawing context only works on the corresponding `<canvas/>`

#### 参数
#### Parameters

|参数|类型|说明|
|Parameter|Type|Description|
|----|----|-----|
|canvasId|String	|画布表示，传入定义在 `<canvas/>` 的 canvas-id或id|
|canvasId|String |Canvas representation, pass in the canvas-id or id defined in `<canvas/>`
|componentInstance|Object	|自定义组件实例 this ，表示在这个自定义组件下查找拥有 canvas-id 的 `<canvas/>` ，如果省略，则不在任何自定义组件内查找	|
|componentInstance|Object |Custom component instance this, means to find the `<canvas/>` with canvas-id under this custom component, if omitted, it will not search in any custom component |

#### 返回值
#### return value
[CanvasContext](/api/canvas/CanvasContext.md)

