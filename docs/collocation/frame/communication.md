> 自 HBuilderX 2.0.0 起自定义组件编译模式支持，[使用指南](https://ask.dcloud.net.cn/article/36010)
> Since HBuilderX 2.0.0, custom component compilation mode support.

### uni.$emit(eventName,OBJECT)

触发全局的自定事件。附加参数都会传给监听器回调。
Trigger global custom events. Additional parameters will be passed to the listener callback.

|属性		|类型	|描述				|
| Attributes | Types of | description                                        |
|---		|---	|---				|
|eventName	|String	|事件名				|
| eventName  | String   | Event name                                         |
|OBJECT		|Object	|触发事件携带的附加参数	|
| OBJECT     | Object   | Additional parameters carried by the trigger event |

**代码示例**
**Code example**
```javascript
	uni.$emit('update',{msg:'msg'})
```


### uni.$on(eventName,callback)

监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数。
Listen to global custom events. The event can be triggered by uni.$emit, and the callback function will receive all the extra parameters of the incoming event trigger function.

|属性		|类型		|描述			|
| Attributes | Types of | description             |
|---		|---		|---			|
|eventName	|String		|事件名			|
| eventName  | String   | Event name              |
|callback	|Function	|事件的回调函数	|
| callback   | Function | Event callback function |


**代码示例**
**Code example**
```javascript
	uni.$on('update',function(data){
		console.log('msg: ' + data.msg);
	})
```


### uni.$once(eventName,callback)

监听全局的自定义事件。事件可以由 uni.$emit 触发，但是只触发一次，在第一次触发之后移除监听器。
Listen to global custom events. The event can be triggered by uni.$emit, but only once, the listener is removed after the first trigger.

|属性		|类型		|描述			|
| Attributes | Types of | description             |
|---		|---		|---			|
|eventName	|String		|事件名			|
| eventName  | String   | Event name              |
|callback	|Function	|事件的回调函数	|
| callback   | Function | Event callback function |


**代码示例**
**Code example**
```javascript
	uni.$once('update',function(data){
		console.log('msg: ' + data.msg);
	})
```

### uni.$off([eventName, callback])

移除全局自定义事件监听器。
Remove the global custom event listener.

|属性		|类型			|描述			|
| Attributes | Types of        | description             |
|---		|---			|---			|
|eventName	|Array＜String＞ |事件名			|
| eventName  | Array＜String＞ | Event name              |
|callback	|Function		|事件的回调函数	|
| callback   | Function        | Event callback function |

**Tips**
- 如果没有提供参数，则移除所有的事件监听器；
- If no parameters are provided, all event listeners are removed;
- 如果只提供了事件，则移除该事件所有的监听器；
- If only an event is provided, remove all listeners for that event;
- 如果同时提供了事件与回调，则只移除这个回调的监听器；
- If both events and callbacks are provided, only the listener for this callback will be removed;
- 提供的回调必须跟$on的回调为同一个才能移除这个回调的监听器；
- The provided callback must be the same as the callback of $on to remove the listener of this callback;

**代码示例**
**Code example**

`$emit`、`$on`、`$off`常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面
`$emit`, `$on`, `$off`Commonly used in the cross-page, cross-component communication, demonstrated here on the same page in order to facilitate

```html
	<template>
		<view class="content">
			<view class="data">
				<text>{{val}}</text>
			</view>
			<button type="primary" @click="comunicationOff">结束监听</button>
      <button type="primary" @click="comunicationOff">The end of the listening</button>
		</view>
	</template>
	
	<script>
		export default {
			data() {
				return {
					val: 0
				}
			},
			onLoad() {
				setInterval(()=>{
					uni.$emit('add', {
						data: 2
					})
				},1000)
				uni.$on('add', this.add)
			},
			methods: {
				comunicationOff() {
					uni.$off('add', this.add)
				},
				add(e) {
					this.val += e.data
				}
			}
		}
	</script>
	
	<style>
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	
		.data {
			text-align: center;
			line-height: 40px;
			margin-top: 40px;
		}
	
		button {
			width: 200px;
			margin: 20px 0;
		}
	</style>
	
```


**注意事项**
**Precautions**
- uni.$emit、 uni.$on 、 uni.$once 、uni.$off 触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等
- The events triggered by uni.$emit, uni.$on, uni.$once, uni.$off are all App global level, across any component, page, nvue, vue, etc.
- 使用时，注意及时销毁事件监听，比如，页面 onLoad 里边 uni.$on 注册监听，onUnload 里边 uni.$off 移除，或者一次性的事件，直接使用 uni.$once 监听
- When using, pay attention to destroy event listeners in time, for example, uni.$on registration listeners in onLoad of the page, uni.$off removal in onUnload, or one-time events, directly use uni.$once listeners
