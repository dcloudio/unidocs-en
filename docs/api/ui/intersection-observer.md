节点布局交叉状态 API 可用于监听两个或多个组件节点在布局位置上的相交状态。这一组API常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。
The Node Layout Intersection State API can be used to monitor the intersection state of two or more component nodes in the layout position. This set of APIs can often be used to infer whether certain nodes can be seen by users and what percentage of them can be seen by users.

### uni.createIntersectionObserver([this], [options])
创建并返回一个 ``IntersectionObserver`` 对象实例。
Creates and returns an `IntersectionObserver`object instance.

**this说明：**
**this description:**

自定义组件实例。
Custom component instance.

**options 的可选参数为：**
**The optional parameters of options are:**

|字段名|类型|说明|
| Field name   | Types of | Description                                                  |
|:-|:-|:-|
|thresholds|Array|一个数值数组，包含所有阈值。默认为 ``[0]``。|
| thresholds   | Array    | A numeric array containing all thresholds. The default is `[0]`. |
|initialRatio|Number|初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。默认为 ``0``。|
| initialRatio | Number   | The initial intersecting ratio. If the intersecting ratio detected when calling is not equal to this value and reaches the threshold, a callback function of the listener will be triggered. The default is `0`. |
|observeAll|Boolean|是否同时观测多个参照节点（而非一个），如果设为 ``true``，``observe`` 的 ``targetSelector`` 将选中多个节点（注意：同时选中过多节点将影响渲染性能）|
| observeAll   | Boolean  | While observing whether a plurality of reference nodes (instead of one), if set `true`, `observe`of `targetSelector`the selected plurality of nodes (note: also selected too many nodes will affect the rendering performance) |

### IntersectionObserver 对象的方法列表
### Method list of IntersectionObserver object

|方法|说明|
| method   | Description |
|:-|:-|
|IntersectionObserver.relativeTo(selector,[margins])|使用选择器指定一个节点，作为参照区域之一。|
| IntersectionObserver.relativeTo(selector,[margins]) | Use the selector to specify a node as one of the reference areas. |
|IntersectionObserver.relativeToViewport([margins])|指定页面显示区域作为参照区域之一|
| IntersectionObserver.relativeToViewport([margins])  | Specify the page display area as one of the reference areas  |
|IntersectionObserver.observe(selector,[callback])|指定目标节点并开始监听相交状态变化情况。回调函数 ``callback`` 包含一个参数 ``result``|
| IntersectionObserver.observe(selector,[callback])   | Specify the target node and start monitoring changes in the intersection state. The callback function `callback`contains a parameter`result` |
|IntersectionObserver.disconnect()|停止监听。回调函数将不再触发。|
| IntersectionObserver.disconnect()                   | Stop monitoring. The callback function will no longer trigger. |

**margins 参数：** 用来扩展（或收缩）参照节点布局区域的边界。
**Margins parameter:** used to expand (or shrink) the border of the reference node layout area.

|属性|类型|默认值|是否必填|说明|
| Attributes | Types of | Defaults | Is it required | Description                                |
|:-|:-|:-|:-|:-|
|left|number||否|节点布局区域的左边界|
| left       | number   |          | no             | The left boundary of the node layout area  |
|right|number||否|节点布局区域的右边界|
| right      | number   |          | no             | The right boundary of the node layout area |
|top|number||否|节点布局区域的上边界|
| top        | number   |          | no             | The upper boundary of the node layout area |
|bottom|number||否|节点布局区域的下边界|
| bottom     | number   |          | no             | The lower boundary of the node layout area |

下面的示例代码中，如果目标节点 ``".test"`` 进入 ``".scroll"`` 区域以下 100px 时，就会触发回调函数。
The sample code below, if the target node `".test"`enters `".scroll"`when the following 100px region, the callback function will be triggered.

```
uni.createIntersectionObserver(this).relativeTo('.scroll',{bottom: 100}).observe('.test', (res) => {
  console.log(res);
})
```

**observe 回调函数 result 包含的字段**
**Fields included in the observe callback function result**

|字段名|类型|说明|
| Field name   | Types of | Description  |
|:-|:-|:-|
|intersectionRatio|Number|相交比例|
| intersectionRatio  | Number   | Intersection ratio                                           |
|intersectionRect|Object|相交区域的边界，包含 ``left``、``right``、``top``、``bottom`` 四项|
| intersectionRect   | Object   | The intersection of the boundary region, comprising `left`, `right`, `top`, `bottom`four |
|boundingClientRect|Object|目标节点布局区域的边界，包含 ``left``、``right``、``top``、``bottom`` 四项|
| boundingClientRect | Object   | Boundary of the layout area of the target node, comprising `left`, `right`, `top`, `bottom`four |
|relativeRect|Object|参照区域的边界，包含 ``left``、``right``、``top``、``bottom`` 四项|
| relativeRect       | Object   | Referring to the boundary region, comprising `left`, `right`, `top`, `bottom`four |
|time|Number|相交检测时的时间戳|
| time               | Number   | Timestamp of intersection detection                          |


**Tips**

- 与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如 fixed 定位的节点）。
- The intersection area with the page display area does not accurately represent the area visible to the user, because the area involved in the calculation is the "layout area", and the layout area may be cropped and hidden by other nodes when drawing (such as the node with the overflow style hidden in the ancestor node) ) Or cover (such as fixed location nodes).
- 节点交互状态 ``API`` 建议在 ``onReady`` 生命周期里监听，因为此 ``API`` 需要查找页面元素，``onReady`` 时页面已经完成初次渲染，已经能查找到对应的元素。
- Interactive node status `API`recommend `onReady`listening life cycle, because the `API`need to find elements on the page, `onReady`the page has finished rendering the first time, been able to find the corresponding element.

### 代码示例
### Code example

```html
<template>
	<view class="container">
		<text>{{appear ? '小球出现' : '小球消失'}}</text>
		<text>{{appear?'Small ball appears':'Small ball disappears'}}</text>
		<view class="page-section">
			<scroll-view class="scroll-view" scroll-y>
				<view class="scroll-area">
					<text class="notice">向下滚动让小球出现</text>	
					<text class="notice">Scroll down to make the ball appear</text>
					<view class="ball"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	let observer = null;
	export default {
		data() {
			return {
				appear: false
			}
		},
		onReady() {
			observer = uni.createIntersectionObserver(this);
            observer.relativeTo('.scroll-view').observe('.ball', (res) => {
              if (res.intersectionRatio > 0 && !this.appear) {
                this.appear = true;
              } else if (!res.intersectionRatio > 0 && this.appear) {
                this.appear = false;
              }
            })
		},
		onUnload() {
			if (observer) {
				observer.disconnect()
			}
		}
	}
</script>
<style>
	view,page {
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		height: 400rpx;
		background: #fff;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.scroll-area {
		height: 1300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: .5s;
	}

	.notice {
		margin-top: 150rpx;
		margin: 150rpx 0 400rpx 0;
	}

	.ball {
		width: 200rpx;
		height: 200rpx;
		background: #1AAD19;
		border-radius: 50%;
	}
</style>

```
