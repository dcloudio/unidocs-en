### onPullDownRefresh
在 js 中定义 onPullDownRefresh 处理函数（和onLoad等生命周期函数同级），监听该页面用户下拉刷新事件。
Define the onPullDownRefresh processing function in js (at the same level as onLoad and other life cycle functions) to monitor the pull-down refresh event of the page user.

- 需要在 ``pages.json`` 里，找到的当前页面的pages节点，并在 ``style`` 选项中开启 ``enablePullDownRefresh``。
- Need `pages.json`, pages node of the current page to find, and in `style`open option `enablePullDownRefresh`.
- 当处理完数据刷新后，``uni.stopPullDownRefresh`` 可以停止当前页面的下拉刷新。
- After processing the data refresh, `uni.stopPullDownRefresh`you can stop the pull-down refresh of the current page.

### uni.startPullDownRefresh(OBJECT)
开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
The pull-down refresh starts, and the pull-down refresh animation is triggered after the call. The effect is consistent with the user's manual pull-down refresh.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| parameter name | Types of | Required | Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success        | Function | no       | Callback for successful interface call                    |
|fail|Function|否|接口调用失败的回调函数|
| fail           | Function | no       | Callback function for interface call failure              |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter | Types of | Description           |
|:-|:-|:-|
|errMsg|String|接口调用结果|
| errMsg    | String   | Interface call result |

### uni.stopPullDownRefresh()
停止当前页面下拉刷新。
Stop the pull-down refresh of the current page.

**示例**
**Example**

pages.json

```javascript
{
    "pages": [
        {
        	"path": "pages/index/index",
        	"style": {
        		"navigationBarTitleText": "uni-app",
        		"enablePullDownRefresh": true
        	}
        }
    ],
    "globalStyle": {
    	"navigationBarTextStyle": "white",
    	"navigationBarBackgroundColor": "#0faeff",
    	"backgroundColor": "#fbf9fe"
    }
}
```

index.vue
```javascript
// 仅做示例，实际开发中延时根据需求来使用。
// Is only for example, to use the actual delay in the development on demand
export default {
	data() {
		return {
			text: 'uni-app'
		}
	},
	onLoad: function (options) {
		setTimeout(function () {
			console.log('start pulldown');
		}, 1000);
		uni.startPullDownRefresh();
	},
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	}
}
```


### FAQ
Q：如何暂时禁用掉下拉刷新，待需要的时候再重新开启？

A：`App` 平台下可以处理此类场景，详细参考：[uni-app 中实现动态禁用/开启下拉刷新](https://ask.dcloud.net.cn/article/35134)

Q：自定义title如何让下拉刷新在title之下

A：App和H5端使用circle方式的下拉刷新，设offset在title高度之下。hello uni-app的模板-导航栏中有示例。

Q：如何自定义下拉刷新样式

A：App端原生的下拉刷新有2种样式可选择，下拉漏出雪花和下拉circle圈。如果使用nvue，可以使用[refresh组件](https://uniapp.dcloud.io/component/refresh)自定义下拉刷新，都是原生渲染。如果想使用scroll-view在前端实现自定义下拉刷新，需要注意列表不可太长和太复杂，否则会有性能问题。[插件市场](https://ext.dcloud.net.cn/)搜索下拉刷新有示例。
