The Node Layout Intersection State API can be used to monitor the intersection state of two or more component nodes in the layout position. This set of APIs can often be used to infer whether certain nodes can be seen by users and what percentage of them can be seen by users.

### uni.createIntersectionObserver([this\], [options])

Creates and returns an `IntersectionObserver`object instance.

**The optional parameters of options are:**

| Field name   | Types of | Description                                                  |
| :----------- | :------- | :----------------------------------------------------------- |
| thresholds   | Array    | A numeric array containing all thresholds. The default is `[0]`. |
| initialRatio | Number   | The initial intersecting ratio. If the intersecting ratio detected when calling is not equal to this value and reaches the threshold, a callback function of the listener will be triggered. The default is `0`. |
| observeAll   | Boolean  | While observing whether a plurality of reference nodes (instead of one), if set `true`, `observe`of `targetSelector`the selected plurality of nodes (note: also selected too many nodes will affect the rendering performance) |

### Method list of IntersectionObserver object

| method                                              | Description                                                  |
| :-------------------------------------------------- | :----------------------------------------------------------- |
| IntersectionObserver.relativeTo(selector,[margins]) | Use the selector to specify a node as one of the reference areas. |
| IntersectionObserver.relativeToViewport([margins])  | Specify the page display area as one of the reference areas  |
| IntersectionObserver.observe(selector,[callback])   | Specify the target node and start monitoring changes in the intersection state. The callback function `callback`contains a parameter`result` |
| IntersectionObserver.disconnect()                   | Stop monitoring. The callback function will no longer trigger. |

**Margins parameter:** used to expand (or shrink) the border of the reference node layout area.

| Attributes | Types of | Defaults | Is it required | Description                                |
| :--------- | :------- | :------- | :------------- | :----------------------------------------- |
| left       | number   |          | no             | The left boundary of the node layout area  |
| right      | number   |          | no             | The right boundary of the node layout area |
| top        | number   |          | no             | The upper boundary of the node layout area |
| bottom     | number   |          | no             | The lower boundary of the node layout area |

The sample code below, if the target node `".test"`enters `".scroll"`when the following 100px region, the callback function will be triggered.

```javascript
uni.createIntersectionObserver(this).relativeTo('.scroll',{bottom: 100}).observe('.test', (res) => {
  console.log(res);
})
```

**Fields included in the observe callback function result**

| Field name         | Types of | Description                                                  |
| :----------------- | :------- | :----------------------------------------------------------- |
| intersectionRatio  | Number   | Intersection ratio                                           |
| intersectionRect   | Object   | The intersection of the boundary region, comprising `left`, `right`, `top`, `bottom`four |
| boundingClientRect | Object   | Boundary of the layout area of the target node, comprising `left`, `right`, `top`, `bottom`four |
| relativeRect       | Object   | Referring to the boundary region, comprising `left`, `right`, `top`, `bottom`four |
| time               | Number   | Timestamp of intersection detection                          |

**Tips**

- The intersection area with the page display area does not accurately represent the area visible to the user, because the area involved in the calculation is the "layout area", and the layout area may be cropped and hidden by other nodes when drawing (such as the node with the overflow style hidden in the ancestor node) ) Or cover (such as fixed location nodes).
- Interactive node status `API`recommend `onReady`listening life cycle, because the `API`need to find elements on the page, `onReady`the page has finished rendering the first time, been able to find the corresponding element.

### Code example

```html
<template>
    <view class="container">
        <text>{{appear ? 'ball show' : 'ball disappear'}}</text>
        <view class="page-section">
            <scroll-view class="scroll-view" scroll-y>
                <view class="scroll-area">
                    <text class="notice">Scroll down the ball to appear</text>
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

