
```Weex``` 提供了通过事件触发动作的能力，例如在用户点击组件时执行 ```JavaScript```。
```Weex``` provides the ability to trigger actions through events, such as executing ```JavaScript``` when the user clicks on a component.

下面列出了可被添加到 ```Weex``` 组件上以定义事件动作的属性：
The attributes that can be added to the ```Weex``` component to define event actions are listed below:

### 事件穿透
### Event penetration

> Android和iOS下原生事件传递机制不同，这里仅针对iOS
> The native event delivery mechanism is different under Android and iOS, here is only for iOS

当一个父View存在多个同级子View时，由于iOS会选择层级最高的View来响应事件，底层的View的事件永远都不会响应。
When there are multiple child Views of the same level in a parent View, since iOS will select the highest-level View to respond to events, the events of the underlying View will never respond.

Weex在```view```组件中增加了```eventPenetrationEnabled```属性，当值为true（默认为false）时，View的子View仍能正常响应事件，但View自身将不会响应事件。
Weex has added the ```eventPenetrationEnabled``` property to the ```view``` component. When the value is true (default is false), the child View of the View can still respond to the event normally, but the View itself will not respond. event.

### View交互性
### View interactivity

Weex在```view```组件中增加了```userInteractionEnabled```属性，当值为false（默认为true）时，View及其子View均不响应事件，事件向下层View传递。
Weex added the ```userInteractionEnabled``` property to the ```view``` component. When the value is false (the default is true), neither the View nor its child views respond to the event, and the event is passed to the lower view.

**longpress**
**longpress**

如果一个组件被绑定了 longpress 事件，那么当用户长按这个组件时，该事件将会被触发。
If a component is bound to a longpress event, the event will be triggered when the user long presses the component.

**事件对象**
**Event Object**

|key			|value		|备注																|
|key |value |Remarks |
|--				|--				|--																	|
|type			|longpress|																		|
|type |longpress| |
|target		|					|触发长按事件的目标组件							|
|target | |The target component that triggers the long press event |
|timestamp|					|长按事件触发时的时间戳(不支持 H5)	|
|timestamp| |The timestamp when the long press event is triggered (H5 is not supported) |

**Appear**

如果一个位于某个可滚动区域内的组件被绑定了 appear 事件，那么当这个组件的状态变为在屏幕上可见时，该事件将被触发。
If a component located in a scrollable area is bound to the appear event, the event will be triggered when the state of the component becomes visible on the screen.

**事件对象**
**Event Object**

|key		|value					|备注							|
|key |value |Remarks |
|--			|--						|--								|
|type		|appear					|								|
|type |appear | |
|target		|						|触发 Appear 事件的组件对象		|
|target | |The component object that triggered the Appear event |
|timestamp	|						|事件被触发时的时间戳(不支持 H5)|
|timestamp | |The timestamp when the event was triggered (H5 is not supported)|
|direction	| ```up```或 ```down```	|触发事件时屏幕的滚动方向		|
|direction | ```up``` or ```down``` |The scroll direction of the screen when the event is triggered |

**Disappear**

如果一个位于某个可滚动区域内的组件被绑定了 ```disappear``` 事件，那么当这个组件被滑出屏幕变为不可见状态时，该事件将被触发。
If a component located in a scrollable area is bound to the ```disappear``` event, the event will be triggered when the component is swiped off the screen and becomes invisible.

**事件对象**
**Event Object**
|key			|value									|备注														|
|key |value |Remarks |
|--				|--											|--															|
|type			|disappear							|																|
|type |disappear | |
|target		|												|触发 Disappear 事件的组件对象	|
|target | |The component object that triggers the Disappear event |
|timestamp|												|事件被触发时的时间戳(不支持 H5)|
|timestamp| |The timestamp when the event was triggered (H5 is not supported)|
|direction| ```up```或 ```down```	|触发事件时屏幕的滚动方向				|
|direction| ```up``` or ```down``` |The scroll direction of the screen when the event is triggered |
