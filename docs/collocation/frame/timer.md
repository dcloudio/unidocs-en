## setTimeout(callback, delay, rest)

设定一个定时器。在定时到期以后执行注册的回调函数
Set a timer. Execute the registered callback function after the time expires

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
|parameter|Types of|Required|Description|
|:-|:-|:-|:-|
|callback|Function|是|回调函数|
|callback|Function|Yes|Callback|
|delay|Number|否|延迟的时间，函数的调用会在该延迟之后发生，单位 ms|
|delay|Number|no|Delay time, the function call will occur after the delay, the unit is ms|
|rest|Any|否|param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数|
|rest|Any|no|Additional parameters such as param1, param2, ..., paramN will be passed as parameters to the callback function|


**返回值**
**return value**

|返回值|类型|说明|
| return value | Types of | Description                                                  |
|:-|:-|:-|
|timeoutID|Number|定时器的编号，这个值可以传递给 [clearTimeout](/api/timer?id=cleartimeout) 来取消该定时|
| timeoutID    | Number   | The number of the timer, this value can be passed to clearTimeout to cancel the timing |

## clearTimeout(timeoutID)

取消由 setTimeout 设置的定时器。
Cancel the timer set by setTimeout.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| parameter | Types of | Required | Description                     |
|:-|:-|:-|:-|
|timeoutID|Number|是|要取消的定时器的 ID|
| timeoutID | Number   | Yes      | ID of the timer to be cancelled |


## setInterval(callback, delay, rest)

设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
Set a timer. Execute the registered callback function according to the specified period (in milliseconds)

**参数说明**
**Parameter Description**


|参数|类型|必填|说明|
| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|callback|Function|是|回调函数|
| callback  | Function | Yes      | Callback                                                     |
|delay|Number|否|延迟的时间，函数的调用会在该延迟之后发生，单位 ms|
| delay     | Number   | no       | Delay time, the function call will occur after the delay, the unit is ms |
|rest|Any|否|param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数|
| rest      | Any      | no       | Additional parameters such as param1, param2, ..., paramN will be passed as parameters to the callback function |

**返回值**
**return value**

|返回值|类型|说明|
| return value | Types of | Description                                                  |
|:-|:-|:-|
|intervalID|Number|定时器的编号，这个值可以传递给 [clearInterval](/api/timer?id=clearinterval) 来取消该定时|
| intervalID   | Number   | The number of the timer, this value can be passed to clearInterval to cancel the timer |

## clearInterval(intervalID)

取消由 setInterval 设置的定时器。
Cancel the timer set by setInterval.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| parameter  | Types of | Required | Description                     |
|:-|:-|:-|:-|
|intervalID|Number|是|要取消的定时器的 ID|
| intervalID | Number   | Yes      | ID of the timer to be cancelled |

## 注意事项
## Precautions
* App 端返回的定时器编号可能为 String 类型，使用时无需主动转换为 Number 类型
* The timer number returned by the App may be of type String, so there is no need to actively convert to Number type when using it