> > Since HBuilderX 2.0.0, custom component compilation mode support.
>
> ### uni.$emit(eventName,OBJECT)
>
> Trigger global custom events. Additional parameters will be passed to the listener callback.
>
> | Attributes | Types of | description                                        |
> | ---------- | -------- | -------------------------------------------------- |
> | eventName  | String   | Event name                                         |
> | OBJECT     | Object   | Additional parameters carried by the trigger event |
>
> **Code example**
>
> ```javascript
>     uni.$emit('update',{msg:'Page updates'})
> ```
>
> ### uni.$on(eventName,callback)
>
> Listen to global custom events. The event can be triggered by uni.$emit, and the callback function will receive all the extra parameters of the incoming event trigger function.
>
> | Attributes | Types of | description             |
> | ---------- | -------- | ----------------------- |
> | eventName  | String   | Event name              |
> | callback   | Function | Event callback function |
>
> **Code example**
>
> ```javascript
>     uni.$on('update',function(data){
>         console.log('Listen for an event from UPDATE with parameter MSG as：' + data.msg);
>     })
> ```
>
> ### uni.$once(eventName,callback)
>
> Listen to global custom events. The event can be triggered by uni.$emit, but only once, the listener is removed after the first trigger.
>
> | Attributes | Types of | description             |
> | ---------- | -------- | ----------------------- |
> | eventName  | String   | Event name              |
> | callback   | Function | Event callback function |
>
> **Code example**
>
> ```javascript
>     uni.$once('update',function(data){
>         console.log('Listen for an event from UPDATE with parameter MSG as：' + data.msg);
>     })
> ```
>
> ### uni.$off([eventName, callback]\)
>
> Remove the global custom event listener.
>
> | Attributes | Types of        | description             |
> | ---------- | --------------- | ----------------------- |
> | eventName  | Array＜String＞ | Event name              |
> | callback   | Function        | Event callback function |
>
> **Tips**
>
> - If no parameters are provided, all event listeners are removed;
> - If only an event is provided, remove all listeners for that event;
> - If both events and callbacks are provided, only the listener for this callback will be removed;
> - The provided callback must be the same as the callback of $on to remove the listener of this callback;
>
> **Code example**
>
> `$emit`, `$on`, `$off`Commonly used in the cross-page, cross-component communication, demonstrated here on the same page in order to facilitate
>
> ```html
>     <template>
>         <view class="content">
>             <view class="data">
>                 <text>{{val}}</text>
>             </view>
>             <button type="primary" @click="comunicationOff">The end of the listening</button>
>         </view>
>     </template>
> 
>     <script>
>         export default {
>             data() {
>                 return {
>                     val: 0
>                 }
>             },
>             onLoad() {
>                 setInterval(()=>{
>                     uni.$emit('add', {
>                         data: 2
>                     })
>                 },1000)
>                 uni.$on('add', this.add)
>             },
>             methods: {
>                 comunicationOff() {
>                     uni.$off('add', this.add)
>                 },
>                 add(e) {
>                     this.val += e.data
>                 }
>             }
>         }
>     </script>
> 
>     <style>
>         .content {
>             display: flex;
>             flex-direction: column;
>             align-items: center;
>             justify-content: center;
>         }
> 
>         .data {
>             text-align: center;
>             line-height: 40px;
>             margin-top: 40px;
>         }
> 
>         button {
>             width: 200px;
>             margin: 20px 0;
>         }
>     </style>
> ```
>
> **Precautions**
>
> - The events triggered by uni.$emit, uni.$on, uni.$once, uni.$off are all App global level, across any component, page, nvue, vue, etc.
> - When using, pay attention to destroy event listeners in time, for example, uni.$on registration listeners in onLoad of the page, uni.$off removal in onUnload, or one-time events, directly use uni.$once listeners
