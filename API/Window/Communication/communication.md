### uni.$emit(eventName,OBJECT)

To trigger a global custom event, additional parameters will be passed to the listener callback function.

| Attributes | Types  | description                                        |
| ---------- | ------ | -------------------------------------------------- |
| eventName  | String | Event name                                         |
| OBJECT     | Object | Additional parameters carried by the trigger event |

**Code example**

```javascript
	uni.$emit('update',{msg:'Page updates'})
```


### uni.$on(eventName,callback)

Monitor global custom events, the event `uni.$emit`is triggered, the callback function receives an incoming event trigger function parameters.

| Attributes | Types    | description             |
| ---------- | -------- | ----------------------- |
| eventName  | String   | Event name              |
| callback   | Function | Event callback function |

**Code example**

```javascript
	uni.$on('update',function(data){
		console.log('Listen for an event from UPDATE, with parameter MSG as:' + data.msg);
	})
```


### uni.$once(eventName,callback)

Monitor global custom events, the event `uni.$emit`is triggered, but the trigger once only, remove the listener after the first trigger.

| Attributes | Types    | description             |
| ---------- | -------- | ----------------------- |
| eventName  | String   | Event name              |
| callback   | Function | Event callback function |

**Code example**

```javascript
	uni.$once('update',function(data){
		console.log('Listen for an event from UPDATE, with parameter MSG as:' + data.msg);
	})
```

### uni.$off([eventName, callback])

Remove the global custom event listener.

| Attributes | Types           | description             |
| ---------- | --------------- | ----------------------- |
| eventName  | Array＜String＞ | Event name              |
| callback   | Function        | Event callback function |

**Tips**

- If uni.$off has no parameters, remove all event listeners at the App level;
- If only the event name (eventName) is provided, all listeners corresponding to the event name will be removed;
- If both an event and a callback are provided, only the listener of this event callback is removed;
- The provided callback must be the same as the callback of $on to remove the listener of this callback;

**Code example**

`$emit`, `$on`, `$off`Commonly used in the cross-page, cross-component communication, demonstrated here on the same page in order to facilitate

```html
	<template>
		<view class="content">
			<view class="data">
				<text>{{val}}</text>
			</view>
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

- **Precautions**
  - The events triggered by uni.$emit, uni.$on, uni.$once, uni.$off are all App global level, across any component, page, nvue, vue, etc.
  - When using, pay attention to destroy event listeners in time, for example, uni.$on registration listeners in onLoad of the page, uni.$off removal in onUnload, or one-time events, directly use uni.$once listeners

