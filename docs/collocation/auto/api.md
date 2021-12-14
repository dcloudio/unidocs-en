### Page

Page 模块提供了控制页面的方法。
Page module provides methods to control pages.

#### 属性
#### Attribute

page.path

页面路径。
Page path.

`page.path: string`

page.query

页面参数。
Page parameters. 
`page.query: Object`


#### 方法
#### Method

page.$

获取页面元素。
Get the page element.

`page.$(selector: string): Promise<Element>`

参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(element.tagName) // 'view'
```


page.$$

获取页面元素数组。
Get an array of page elements.

`page.$$(selector: string): Promise<Element[]>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

该方法跟 $ 一样均无法选择自定义组件内的元素，请使用 element.$。
Neither this method nor $ can select elements in custom components. Please use element.$.

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const elements = await page.$$('.list-text')
  console.log(elements.length)
```

page.waitFor

等待直到指定条件成立。
Wait until the specified conditions are met.

`page.waitFor(condition: string | number | Function): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|condition|string number Function|是|-|等待条件|
| condition| string number Function| Yes| \-| Waiting condition|


如果条件是 `string` 类型，那么该参数会被当成选择器，当该选择器选中元素个数不为零时，结束等待。
If the condition is of type `string`, then this parameter will be regarded as a selector. When the number of elements selected by this selector is not zero, the waiting will end.

如果条件是 `number` 类型，那么该参数会被当成超时时长，当经过指定时间后，结束等待。
If the condition is of type `number`, then this parameter will be regarded as the timeout period. When the specified time has passed, the waiting will end.

如果条件是 `Function` 类型，那么该参数会被当成断言函数，当该函数返回真值时，结束等待。
If the condition is of type `Function`, then the parameter will be treated as an assertion function. When the function returns a true value, the waiting will end.


示例代码：
Sample code:
```
  const page = await program.currentPage()
  // 等待 5 秒
  // Wait for 5 seconds
  await page.waitFor(5000)
  // 等待页面中出现 picker 元素
  // Wait for the picker element to appear in the page.
  await page.waitFor('picker')
  await page.waitFor(async () => {
    return (await page.$$('picker')).length > 5
  // 等待页面中 picker 元素数量大于 5
  // The number of picker elements on the waiting page is greater than 5
  }) 
```

page.data

获取页面渲染数据。
Get the page rendering data.

`page.data(path?: string): Promise<Object>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|path|string|否|-|数据路径|
| path| string| No| \-| Data path|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  console.log(await page.data('list'))
```


page.setData

设置页面渲染数据。
Set the page rendering data.

`page.setData(data: Object): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|data|Object|是|-|要改变的数据|
| data| Object| Yes| \-| Data to be changed|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  await page.setData({
    text: 'changed data'
  })
```


page.size

获取页面大小。
Get the page size.

`page.size(): Promise<Object>`


返回值说明
Returned value description

|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|width|number|页面可滚动宽度|
| width| number| Page scrollable width|
|height|number|页面可滚动高度|
| height| number| Page scrollable height|


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const { width, height } = await page.size()
  console.log(width, height)
```


page.scrollTop

获取页面滚动位置。
Get the scroll position of the page.

`page.scrollTop(): Promise<number>`


示例代码：
Sample code:
```
  const page = await program.currentPage()
  await program.pageScrollTo(20)
  console.log(await page.scrollTop())
```


page.callMethod

调用页面指定方法。
Call the page specified method.

`page.callMethod(method: string, ...args: any[]): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|array|否|-|方法参数|
| ...args| array| No| \-| Method parameter|


示例代码：
Sample code:
```
  const page = await program.currentPage()
  await page.callMethod('onShareAppMessage')
```



### Element
Element 模块提供了控制页面元素的方法。
The Element module provides methods to control page elements.

#### 属性
#### Attribute

element.tagName

标签名，小写。
Tag name, lowercase.

`element.tagName: string`


#### 方法
#### Method

element.$

在元素范围内获取元素。
Get the element within the element range.

`element.$(selector: string): Promise<Element>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  let element = await page.$('.index-hd')
  element = await element.$('.index-desc')
  console.log(await element.text())
```


element.$$

在元素范围内获取元素数组。
Get the element array within the element range.

`element.$$(selector: string): Promise<Element[]>`


参数说明
Parameter Description

|字段|类型|必填	|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|selector|string|是|-|选择器|
| selector| string| Yes| \-| Selector|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const elements = await element.$$('.list-text')
  console.log(await elements[0].text())
```


element.size

获取元素大小。
Get the element size.

`element.size(): Promise<Object>`


返回值说明
Returned value description

|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|width|number|元素宽度|
| width| number| Element width|
|height|number|元素高度|
| height| number| Element height|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { width, height } = await element.size()
  console.log(width, height)
```


element.offset

获取元素绝对位置。
Get the absolute position of the element.

`element.offset(): Promise<Object>`


返回值说明
Returned value description

|字段|类型|说明|
| Field| Type| Instruction|
|:-:|:-:|:-:|
|left|number|左上角x坐标，单位：px|
| left| number| X coordinate in the upper left corner, in px|
|top|number|左上角y坐标，单位：px|
| top| number| y coordinate in the upper left corner, in px|

坐标信息以页面左上角为原点。
The coordinate information is based on the upper left corner of the page as the origin.


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-bd')
  const { left top } = await element.offset()
  console.log(left, top)
```


element.text

获取元素文本。
Get the element text.

`element.text(): Promise<string>`


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.text())
```


element.attribute

获取元素特性。
Get element properties.

`element.attribute(name: string): Promise<string>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|特性名|
| name| string| Yes| \-| Feature name|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.logo')
  console.log(await element.attribute('src')) // -> 'static/logo.png'
```


element.property

获取元素属性。
Get element attributes.

`element.property(name: string): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|属性名|
| name| string| Yes| \-| Attribute name|

`element.property` 与 `element.attribute` 主要区别如下：
The main differences between `element.property` and `element.attribute` are as follows:

`element.attribute` 获取的是标签上的值，因此它的返回类型一定是字符串，element.property 则不一定。
`element.attribute` gets the value on the label, so its return type must be a string, but element.property is not necessarily.

`element.attribute` 可以获取到 class 和 id 之类的值，element.property 不行。
`element.attribute` can get values such as class and id, but element.property cannot.

`element.property` 可以获取到文档里对应组件列举的大部分属性值，比如表单 input 等组件的 value 值。
`element.property` can get most of the attribute values listed by the corresponding components in the document, such as the value of components such as form input.


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('input')
  console.log(await element.property('value'))
```


element.html

获取元素 HTML。
Get the element HTML.

`element.html(): Promise<string>`


element.outerHtml

同 html，只是会获取到元素本身。
Same as html, except that the element itself will be obtained.

`element.outerHtml(): Promise<string>`


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.html())
  console.log(await element.outerHtml())
```


element.value

获取元素值。
Get the element value.

`element.value(): Promise<string>`


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.input')
  console.log(await element.value())
```


element.style

获取元素样式值。
Get the element style value.

`element.style(name: string): Promise<string>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|name|string|是|-|样式名|
| name| string| Yes| \-| Style name|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.index-desc')
  console.log(await element.style('color')) // -> 'rgb(128, 128, 128)'
```


element.tap

点击元素。
Click element.

`element.tap(): Promise<void>`


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('.list-item-hd')
  await element.tap()
```


element.longpress

长按元素。
Long press the element.

`element.longpress(): Promise<void>`


element.touchstart

手指开始触摸元素。
Start touching the element with your finger.

`element.touchstart(options: Object): Promise<void>`


options 字段定义如下：
The field of options is defined as follows:

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|touches|array|是|-|触摸事件，当前停留在屏幕中的触摸点信息的数组|
| touches| array| Yes| \-| Touch event, an array of information about the touch points that are currently staying on the screen|
|changedTouches|array|是|-|触摸事件，当前变化的触摸点信息的数组|
| changedTouches| array| Yes| \-| Touch events, an array of information about the touch points that are currently changing|


element.touchmove

手指触摸元素后移动。
Move after the finger touches the element.

`element.touchmove(options: Object): Promise<void>`

options 字段同 touchstart。
The field of options is the same as touchstart.


element.touchend

手指结束触摸元素。
End touching the element with your finger.

`element.touchend(options: Object): Promise<void>`

options 字段同 touchstart。
The field of options is the same as touchstart.


```
  const page = await program.currentPage()
  const element = await page.$('.touch')
  await element.touchstart({
    touches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ],
    changedTouches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ]
  })
  await element.touchend({
    touches: [],
    changedTouches: [
      {
        identifier: 1,
        pageX: 500,
        pageY: 500
      }
    ]
  })
```


element.trigger

触发元素事件。
Trigger element events.

`element.trigger(type: string, detail?: Object): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|type|string|是|-|触发事件类型|
| type| string| Yes| \-| Trigger event type|
|detail|Object|否|-|触发事件时传递的 detail 值|
| detail| Object| No| \-| The detail value passed when the event is triggered.|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('picker')
  await element.trigger('change', { value: 1 })
```
该方法无法改变组件状态，仅触发响应方法，也无法触发用户操作事件，即 `tap`，`longpress` 等事件，请使用对应的其它方法调用。
This method only triggers the response method, and can neither change the component state nor trigger user action events, namely `tap`, `longpress` and other events. Please call with other corresponding methods.


element.input

输入文本，仅 input、textarea 组件可以使用。
Enter the text, only available for the input and textarea components.

`element.input(value: string): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|value|string|是|-|需要输入的文本|
| value| string| Yes| \-| Text to be entered|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('input')
  await element.input('test')
```


element.callMethod

调用组件实例指定方法，仅自定义组件可以使用。
Call the specified method of component instance, only available for the custom components.

`element.callMethod(method: string, ...args: any[]): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|array|否|-|方法参数|
| ...args| array| No| \-| Method parameter|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await element.callMethod('navigateBack')
```


element.data

获取组件实例渲染数据，仅自定义组件可以使用。
Get rendering data of component instance, only available for the custom components.

`element.data(path?: string): Promise<Object>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|path|string|否|-|数据路径|
| path| string| No| \-| Data path|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  console.log(await element.data('hasSetTabBarBadge'))
```


element.setData

设置组件实例渲染数据，仅自定义组件可以使用。
Set rendering data of component instance, only available for the custom components.

`element.setData(data: Object): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|data|Object|是|-|要改变的数据|
| data| Object| Yes| \-| Data to be changed|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('set-tab-bar')
  await page.setData({
    hasSetTabBarBadge: true
  })
```


element.callContextMethod

调用上下文 Context 对象方法，仅 video 组件可以使用。
Call the Context object method, only available for the video component.

`element.callContextMethod(method: string, ...args: any[]): Promise<any>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|method|string|是|-|需要调用的方法名|
| method| string| Yes| \-| Name of the method to be called|
|...args|array|否|-|方法参数|
| ...args| array| No| \-| Method parameter|

video 组件必须设置了 id 才能使用。
video component is only available for those having set the id's.

```
  const page = await program.currentPage()
  const element = await page.$('video')
  await element.callContextMethod('play')
```


element.scrollWidth

获取滚动宽度，仅 scroll-view 组件可以使用。
Get the scroll width, only available for the scroll-view component.

`element.scrollWidth(): Promise<number>`


element.scrollHeight

获取滚动高度，仅 scroll-view 组件可以使用。
Get the scroll height, only available for the scroll-view component.

`element.scrollHeight(): Promise<number>`


element.scrollTo

滚动到指定位置，仅 scroll-view 组件可以使用。
Scroll to the specified location, only available for the scroll-view component.

`element.scrollTo(x: number, y: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|x|number|是|-|横向滚动位置|
| x| number| Yes| \-| Horizontal scroll location|
|y|number|是|-|纵向滚动位置|
| y| number| Yes| \-| Vertical scroll location|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('scroll-view')
  const y = (await element.scrollHeight()) - 50
  await element.scrollTo(0, y)
```


element.swipeTo

滑动到指定滑块，仅 swiper 组件可以使用。
Slide the slider to the specified position, only available for the swiper component.

`element.swipeTo(index: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|index|number|是|-|目标滑块的 index|
| index| number| Yes| \-| index of the target slider|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('swiper')
  await element.swipeTo(2)
```


element.moveTo

移动视图容器，仅 movable-view 组件可以使用。
Move the view container, only available for the movable-view component.

`element.moveTo(x: number, y: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|x|number|是|-|x 轴方向的偏移|
| x| number| Yes| \-| Offset in the x-axis direction|
|y|number|是|-|y 轴方向的偏移|
| y| number| Yes| \-| Offset in the y-axis direction|

示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('movable-view')
  await element.moveTo(40, 40)
```


element.slideTo

滑动到指定数值，仅 slider 组件可以使用。
Slide to the specified value, only available for the slider component.

`element.slideTo(value: number): Promise<void>`


参数说明
Parameter Description

|字段|类型|必填|默认值|说明|
| Field| Type| Required| Defaults| Instruction|
|:-:|:-:|:-:|:-:|:-:|
|value|number|是|-|要设置的值|
| value| number| Yes| \-| Value to be set|


示例代码：
Sample code:
```
  const page = await program.currentPage()
  const element = await page.$('slider')
  await element.slideTo(10)
```



**平台差异**
**Platform differences**

#### program(全局对象)
#### program(global object)

|方法							|APP-NVUE	|APP-VUE|H5	|说明																																|
| Method| APP-NVUE| APP-VUE| H5| Instruction|
|--								|--				|--			|--	|--																																	|
|pageStack				|√				|√			|√	|获取页面堆栈																									|
| pageStack| √| √| √| Get the page stack|
|navigateTo				|√				|√			|√	|保留当前页面，跳转到应用内的某个页面，同`uni.navigateTo`						|
| navigateTo| √| √| √| Keep the current page and jump to a page in the application, the same as `uni.navigateTo`|
|redirectTo				|√				|√			|√	|关闭当前页面，跳转到应用内的某个页面，同`uni.redirectTo`						|
| redirectTo| √| √| √| Close the current page and jump to a page in the application, the same as `uni.redirectTo`|
|navigateBack			|√				|√			|√	|关闭当前页面，返回上一页面，同`uni.navigateBack`										|
| navigateBack| √| √| √| Close the current page and return to the previous page, the same as `uni.navigateBack`|
|reLaunch					|√				|√			|√	|关闭所有页面，打开到应用内的某个页面，同`uni.reLaunch`							|
| reLaunch| √| √| √| Close all pages and open to a page in the application, the same as `uni.reLaunch`|
|switchTab				|√				|√			|√	|跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，同`uni.switchTab`|
| switchTab| √| √| √| Jump to tabBar page and close all other non-tabBar pages, the same as `uni.switchTab`|
|currentPage			|√				|√			|√	|获取当前页面																												|
| currentPage| √| √| √| Get the current page|
|systemInfo				|√				|√			|√	|获取系统信息，同`uni.getSystemInfo`																|
| systemInfo| √| √| √| Get system information, the same as `uni.getSystemInfo`|
|pageScrollTo			|x				|√			|√	|将页面滚动到目标位置，同`uni.pageScrollTo`													|
| pageScrollTo| x| √| √| Scroll the page to the target location, the same as `uni.pageScrollTo`|
|callUniMethod		|√				|√			|√	|调用 uni 对象上的指定方法																					|
| callUniMethod| √| √| √| Call the specified method on the uni object|
|screenshot				|√				|√			|√	|对当前页面截图，目前只有开发者工具模拟器支持，客户端无法使用				|
| screenshot| √| √| √| At present, only the developer tool simulator supports taking screenshot of the current page, and it is not available on the client|
|mockUniMethod		|√				|√			|√	|覆盖 uni 对象上指定方法的调用结果																	|
| mockUniMethod| √| √| √| Override the call result of the specified method on the uni object|
|restoreUniMethod	|√				|√			|√	|重置 uni 指定方法，消除 mockUniMethod 调用的影响										|
| restoreUniMethod| √| √| √| Reset the method specified by uni to eliminate the influence of mockUniMethod call.|

#### Page

|属性	|APP-NVUE	|APP-VUE|H5	|说明			|
| Attribute| APP-NVUE| APP-VUE| H5| Instruction|
|--		|--				|--			|--	|--				|
|path	|√				|√			|√	|页面路径	|
| path| √| √| √| Page path|
|query|√				|√			|√	|页面参数	|
| query| √| √| √| Page parameter|

|方法				|APP-NVUE	|APP-VUE|H5	|说明												|
| Method| APP-NVUE| APP-VUE| H5| Instruction|
|--					|--				|--			|-- |--													|
|$					|√				|√			|√	|获取页面元素								|
| $| √| √| √| Get page elements|
|$$					|√				|√			|√	|获取页面元素数组						|
| $$| √| √| √| Get an array of page elements|
|waitFor		|√				|√			|√	|等待直到指定条件成立				|
| waitFor| √| √| √| Wait until the specified conditions are met|
|data				|√				|√			|√	|获取页面渲染数据						|
| data| √| √| √| Get the page rendering data|
|setData		|√				|√			|√	|设置页面渲染数据						|
| setData| √| √| √| Set the page rendering data|
|size				|√				|√			|√	|获取页面大小(width,height)	|
| size| √| √| √| Get the page size (width, height)|
|scrollTop	|√				|√			|√	|获取页面滚动位置						|
| scrollTop| √| √| √| Get the page scroll location|
|callMethod	|√				|√			|√	|调用页面指定方法						|
| callMethod| √| √| √| Call page specified method|

#### Element
|属性		|APP-NVUE	|APP-VUE|H5	|说明					|
| Attribute| APP-NVUE| APP-VUE| H5| Instruction|
|--			|--				|--			|--	|--						|
|tagName|√				|√			|√	|标签名，小写	|
| tagName| √| √| √| Label name, lowercase|

|方法							|APP-NVUE	|APP-VUE|H5	|说明																								|
| Method| APP-NVUE| APP-VUE| H5| Instruction|
|--								|--				|--			|--	|--																									|
|$								|√				|√			|√	|在元素范围内获取元素																|
| $| √| √| √| Get the element within the element range|
|$$								|√				|√			|√	|在元素范围内获取元素数组														|
| $$| √| √| √| Get the element array within the element range|
|size							|√				|√			|√	|获取元素大小(width,height)													|
| size| √| √| √| Get the element size (width, height)|
|offset						|√				|√			|√	|获取元素绝对位置(left,top)													|
| offset| √| √| √| Get the absolute position (left, top) of the element|
|text							|√				|√			|√	|获取元素文本																				|
| text| √| √| √| Get the element text|
|attribute				|√				|√			|√	|获取元素特性																				|
| attribute| √| √| √| Get element properties|
|style						|√				|√			|√	|获取元素样式值																			|
| style| √| √| √| Get the element style value|
|tap							|√				|√			|√	|点击元素																						|
| tap| √| √| √| Click element|
|value						|√				|√			|√	|获取元素值																					|
| value| √| √| √| Get the element value|
|callMethod				|√				|√			|√	|调用组件实例指定方法，仅自定义组件可以使用					|
| callMethod| √| √| √| Call the specified method of component instance, only available for the custom components|
|html							|√				|√			|√	|获取元素 HTML																			|
| html| √| √| √| Get the element HTML|
|outerHtml				|√				|√			|√	|同 html，只是会获取到元素本身											|
| outerHtml| √| √| √| Same as html, except that the element itself will be obtained|
|data							|√				|√			|√	|获取组件实例渲染数据，仅自定义组件可以使用					|
| data| √| √| √| Get rendering data of component instance, only available for the custom components|
|setData					|√				|√			|√	|设置组件实例渲染数据，仅自定义组件可以使用					|
| setData| √| √| √| Set rendering data of component instance, only available for the custom components|
|property					|√				|√			|√	|获取元素属性																				|
| property| √| √| √| Get element attributes|
|touchstart				|√				|√			|√	|手指开始触摸元素																		|
| touchstart| √| √| √| Start touching the element with your finger.|
|touchmove				|√				|√			|√	|手指触摸元素后移动																	|
| touchmove| √| √| √| Move after the finger touches the element|
|touchend					|√				|√			|√	|手指结束触摸元素																		|
| touchend| √| √| √| End touching the element with your finger.|
|longpress				|√				|√			|√	|获取元素文本																				|
| longpress| √| √| √| Get the element text|
|trigger					|√				|√			|√	|触发元素事件																				|
| trigger| √| √| √| Trigger element events|
|input						|√				|√			|√	|输入文本，仅 input、textarea 组件可以使用					|
| input| √| √| √| Enter the text, only available for the input and textarea components|
|callContextMethod|x				|x			|x	|调用上下文 Context 对象方法，仅 video 组件可以使用	|
| callContextMethod| x| x| x| Call the Context object method, only available for the video component|
|scrollWidth			|x				|√			|√	|获取滚动宽度，仅 scroll-view 组件可以使用					|
| scrollWidth| x| √| √| Get the scroll width, only available for the scroll-view component|
|scrollHeight			|x				|√			|√	|获取滚动高度，仅 scroll-view 组件可以使用					|
| scrollHeight| x| √| √| Get the scroll height, only available for the scroll-view component|
|scrollTo					|x				|√			|√	|滚动到指定位置，仅 scroll-view 组件可以使用				|
| scrollTo| x| √| √| Scroll to the specified location, only available for the scroll-view component|
|swipeTo					|√				|√			|√	|滑动到指定滑块，仅 swiper 组件可以使用							|
| swipeTo| √| √| √| Slide the slider to the specified position, only available for the swiper component|
|moveTo						|√				|√			|√	|移动视图容器，仅 movable-view 组件可以使用					|
| moveTo| √| √| √| Move the view container, only available for the movable-view component|
|slideTo					|√				|√			|√	|滑动到指定数值，仅 slider 组件可以使用							|
| slideTo| √| √| √| Slide to the specified value, only available for the slider component|


#### 测试平台判断
#### Test platform judgment
```
if (process.env.UNI_PLATFORM === "h5") {}
if (process.env.UNI_PLATFORM === "app-plus") {}
```
