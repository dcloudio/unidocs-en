## setTimeout(callback, delay, rest)

Set a timer. Execute the registered callback function after the time expires

**Parameter Description**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| callback  | Function | Yes      | Callback                                                     |
| delay     | Number   | no       | Delay time, the function call will occur after the delay, the unit is ms |
| rest      | Any      | no       | Additional parameters such as param1, param2, ..., paramN will be passed as parameters to the callback function |

**return value**

| return value | Types of | Description                                                  |
| :----------- | :------- | :----------------------------------------------------------- |
| timeoutID    | Number   | The number of the timer, this value can be passed to clearTimeout to cancel the timing |

## clearTimeout(timeoutID)

Cancel the timer set by setTimeout.

**Parameter Description**

| parameter | Types of | Required | Description                     |
| :-------- | :------- | :------- | :------------------------------ |
| timeoutID | Number   | Yes      | ID of the timer to be cancelled |

## setInterval(callback, delay, rest)

Set a timer. Execute the registered callback function according to the specified period (in milliseconds)

**Parameter Description**

| parameter | Types of | Required | Description                                                  |
| :-------- | :------- | :------- | :----------------------------------------------------------- |
| callback  | Function | Yes      | Callback                                                     |
| delay     | Number   | no       | Delay time, the function call will occur after the delay, the unit is ms |
| rest      | Any      | no       | Additional parameters such as param1, param2, ..., paramN will be passed as parameters to the callback function |

**return value**

| return value | Types of | Description                                                  |
| :----------- | :------- | :----------------------------------------------------------- |
| intervalID   | Number   | The number of the timer, this value can be passed to clearInterval to cancel the timer |

## clearInterval(intervalID)

Cancel the timer set by setInterval.

**Parameter Description**

| parameter  | Types of | Required | Description                     |
| :--------- | :------- | :------- | :------------------------------ |
| intervalID | Number   | Yes      | ID of the timer to be cancelled |

|      |      |      |      |
|:-|:-|:-|:-|
|      |      |      |      |