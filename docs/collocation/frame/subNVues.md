subNvue，是 vue 页面的原生子窗体，把weex渲染的原生界面当做 vue 页面的子窗体覆盖在页面上。它不是全屏页面，它给App平台vue页面中的层级覆盖和原生界面自定义提供了更强大和灵活的解决方案。它也不是组件，就是一个原生子窗体。
subNvue is the native sub-form of the vue page. The native interface rendered by weex is used as the sub-form of the vue page and overlaid on the page. It is not a full-screen page. It provides a more powerful and flexible solution for hierarchical coverage and native interface customization in the vue page of the App platform. It is not a component, but a native child form.

它的设计背景和用途详见：[subNVue 原生子窗体开发指南](https://ask.dcloud.net.cn/article/35948)
For its design background and usage, please refer to: [subNVue Native Subform Development Guide](https://ask.dcloud.net.cn/article/35948)

> subNvue 自1.9.10 起支持 ，仅支持 app 平台
> subNvue has been supported since 1.9.10 and only supports app platform

### uni.getSubNVueById(subNvueId)@app-getsubnvuebyid

通过 `ID` 获取 `subNVues` 原生子窗体的实例。  [subNVues 配置](/collocation/pages?id=app-subNVues)
Obtain an instance of the native child form of `subNVues` through `ID`. [subNVues configuration](/collocation/pages?id=app-subNVues)

|参数	|类型	|说明				|
|Parameter |Type |Description |
|---	|---	|---				|
|subNvueId |String	| 原生子窗体的 ID|
|subNvueId |String | ID of the native subform|

**代码示例**
**Code Example**

```javascript
const subNVue = uni.getSubNVueById('popup');
```

#### 返回值
#### return value
返回一个 [subNVue](/api/window/subNVues?id=subnvue) 对象
Return a [subNVue](/api/window/subNVues?id=subnvue) object

### uni.getCurrentSubNVue()@app-getCurrentSubNVue

在一个subnvue窗体的nvue页面代码中，获取当前 `subNVues` 原生子窗体的实例。
In the nvue page code of a subnvue form, get the instance of the current `subNVues` native subform.

**代码示例（注意执行在nvue页面中）**
**Code example (note that the execution is in the nvue page)**

```javascript
const subNVue = uni.getCurrentSubNVue();
```

#### 返回值
#### return value

返回一个 [subNVue](/api/window/subNVues?id=subnvue) 对象
Return a [subNVue](/api/window/subNVues?id=subnvue) object

#### subNVue 对象的方法列表@subNVue
#### Method list of subNVue object @subNVue

|方法			|说明				|
|Method |Description |
|---			|---				|
|show			| 显示原生子窗体		|
|show | Show native child form |
|hide			| 隐藏原生子窗体		|
|hide | Hide native child form |
|setStyle		| 设置原生子窗体的样式	|
|setStyle | Set the style of the native child form |

### subNVue.show (aniShow,duration,showedCB)
显示原生子窗体
Show native child form

|参数		|类型|默认值	|说明								|
|Parameter |Type|Default value |Description|
|---		|---	|---		|---																|
|aniShow	|String| auto	|显示原生子窗体的动画效果 ，如果没有指定窗口动画类型，则使用默认值“auto”，即自动选择上一次显示窗口的动画效果，如果之前没有显示过，则使用“none”动画效果。[详见动画类型](/api/window/subNVues?id=动画类型)|
|aniShow |String| auto |Display the animation effect of the native child form. If the window animation type is not specified, the default value "auto" is used, that is, the animation effect of the last displayed window is automatically selected. If it has not been displayed before, use "None" animation effect. [See animation type for details](/api/window/subNVues?id=Animation type)|
|duration	|Number| 600	|显示原生子窗体的动画持续时间，单位为ms，如果没有设置则使用默认窗口动画时间 600ms。|
|duration |Number| 600 |Display the animation duration of the native child form, the unit is ms, if not set, the default window animation time of 600ms will be used. |
|showedCB	|Function|		|显示完成的回调函数，当指定原生子窗体显示动画执行完毕时触发回调函数，窗口无动画效果（如"none"动画效果）时也会触发此回调。	|
|showedCB |Function| |Display the completed callback function. The callback function is triggered when the specified native subform display animation is completed. The callback function is also triggered when the window has no animation effect (such as "none" animation effect). |

**代码示例**
**Code Example**

```javascript
subNVue.show('slide-in-left',200,()=>{
	console.log('subNVue 原生子窗体显示成功');
	console.log('subNVue native child form displayed successfully');
})
```


### subNVue.hide (aniShow,duration)
隐藏原生子窗体
Hide native child form

|参数		|类型|默认值	|说明																																																												|
|Parameter |Type|Default value |Description|
|---		|---|---	|---																		|
|aniShow	|String| auto	|隐藏原生子窗体的动画效果 ，如果没有指定窗口动画类型，则使用默认值“auto”，即自动选择上一次显示窗口的动画效果，如果之前没有显示过，则使用“none”动画效果。[详见动画类型](/api/window/subNVues?id=动画类型)|
|aniShow |String| auto |Hide the animation effect of the native child form. If the window animation type is not specified, the default value "auto" is used, that is, the animation effect of the last displayed window is automatically selected. If it has not been displayed before, use "None" animation effect. [See animation type for details](/api/window/subNVues?id=Animation type)|
|duration	|Number| 600	|隐藏原生子窗体的动画持续时间，单位为ms，如果没有设置则使用默认窗口动画时间 600ms。	|
|duration |Number| 600 |Hide the animation duration of the native child form, the unit is ms, if not set, the default window animation time 600ms will be used. |

**代码示例**
**Code Example**


```javascript
subNVue.hide('slide-out-left',200);
```


### subNVue.setStyle (style)
设置原生子窗体的样式
Set the style of the native child form

|参数	|类型	|说明					|
|Parameter |Type |Description |
|---	|---	|---					|
|style	|Object	| 原生子窗体的样式	|
|style |Object | The style of the native child form |

**原生子窗体的样式**
**The style of the native child form**



|属性|类型|默认值|描述|
|Attribute|Type|Default Value|Description|
|:-|:-|:-|:-|
|position|String|absolute|原生子窗体的排版位置，排版位置决定原生子窗体在父窗口中的定位方式。 可取值："static"，原生子窗体在页面中正常定位，如果页面存在滚动条则随窗口内容滚动；"absolute"，原生子窗体在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动；"dock"，原生子窗体在页面中停靠，停靠的位置由dock属性值决定。 默认值为"absolute"。|
|position|String|absolute|The layout position of the native child form. The layout position determines the positioning method of the native child form in the parent window. Possible values: "static", the native subform is positioned normally on the page, if the page has a scroll bar, it will scroll with the window content; "absolute", the native subform is absolutely positioned on the page, if the page has a scroll bar, it will not follow the window Content scrolling; "dock", the native child form is docked on the page, and the docking position is determined by the value of the dock property. The default value is "absolute". |
|dock|String|bottom|原生子窗体的停靠方式,仅当原生子窗体 "position" 属性值设置为 "dock" 时才生效，可取值："top"，原生子窗体停靠则页面顶部；"bottom"，原生子窗体停靠在页面底部；"right"，原生子窗体停靠在页面右侧；"left"，原生子窗体停靠在页面左侧。 默认值为"bottom"。|
|dock|String|bottom|The docking method of the native subform, it takes effect only when the native subform "position" property value is set to "dock", the possible value is "top", the page is docked when the native subform is docked Top; "bottom", the native child form is docked at the bottom of the page; "right", the native child form is docked on the right side of the page; "left", the native child form is docked on the left side of the page. The default value is "bottom". |
|mask|HexColor|rgba(0,0,0,0.5)|原生子窗体的遮罩层,仅当原生子窗体 "type" 属性值设置为 "popup" 时才生效，可取值： rgba格式字符串，定义纯色遮罩层样式，如"rgba(0,0,0,0.5)"，表示黑色半透明；|
|mask|HexColor|rgba(0,0,0,0.5)|The mask layer of the native child form, only takes effect when the "type" attribute value of the native child form is set to "popup", the possible value is rgba A format string that defines the style of the solid color mask layer, such as "rgba(0,0,0,0.5)", which means black is semi-transparent; |
|width|String|100%|原生子窗体的宽度,支持百分比、像素值，默认为100%。未设置width属性值时，可同时设置left和right属性值改变窗口的默认宽度。|
|width|String|100%|The width of the native child form, supports percentage and pixel value, the default is 100%. When the width property value is not set, the left and right property values ​​can be set at the same time to change the default width of the window. |
|height|String|100%|原生子窗体的高度,支持百分比、像素值，默认为100%。 当未设置height属性值时，优先通过top和bottom属性值来计算原生子窗体的高度。|
|height|String|100%|The height of the native child form, supports percentage and pixel value, the default is 100%. When the height attribute value is not set, the top and bottom attribute values ​​are given priority to calculate the height of the native child form. |
|top|String|0px|原生子窗体垂直向下的偏移量，支持百分比、像素值，默认值为0px。 未设置top属性值时，优先通过bottom和height属性值来计算原生子窗体的top位置。|
|top|String|0px|The vertical downward offset of the native child form. It supports percentage and pixel value. The default value is 0px. When the top attribute value is not set, the bottom and height attribute values ​​are first used to calculate the top position of the native child form. |
|bottom|String||原生子窗体垂直向上偏移量,支持百分比、像素值，默认值无值（根据top和height属性值来自动计算）。 当同时设置了top和height值时，忽略此属性值； 当未设置height值时，可通过top和bottom属性值来确定原生子窗体的高度。|
|bottom|String||The vertical upward offset of the native sub-form, which supports percentage and pixel value, the default value is no value (automatically calculated based on the top and height attribute values). When the top and height values ​​are set at the same time, this attribute value is ignored; when the height value is not set, the height of the native child form can be determined by the top and bottom attribute values. |
|left|String|0px|原生子窗体水平向左的偏移量，支持百分比、像素值，默认值为0px。 未设置left属性值时，优先通过right和width属性值来计算原生子窗体的left位置。|
|left|String|0px|The horizontal offset of the native child form to the left. Percentage and pixel values ​​are supported. The default value is 0px. When the left attribute value is not set, the left position of the native child form is calculated by the right and width attribute values ​​first. |
|right|String||原生子窗体水平向右的偏移量，支持百分比、像素值，默认无值（根据left和width属性值来自动计算）。 当设置了left和width值时，忽略此属性值； 当未设置width值时，可通过left和bottom属性值来确定原生子窗体的宽度。|
|right|String||The horizontal offset of the native child form to the right, which supports percentages and pixel values, and no value by default (automatically calculated based on the values ​​of the left and width attributes). When the left and width values ​​are set, this property value is ignored; when the width value is not set, the width of the native child form can be determined by the left and bottom property values. |
|margin|String||原生子窗体的边距，用于定位原生子窗体的位置，支持auto，auto表示居中。若设置了left、right、top、bottom则对应的边距值失效。|
|margin|String||The margin of the native child form, used to locate the position of the native child form, support auto, auto means centered. If left, right, top, bottom are set, the corresponding margin value is invalid. |
|zindex|Number||原生子窗体的窗口的堆叠顺序值，拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show方法则在前面。||zindex|Number||The stacking order value of the windows of the native child form. A window with a higher stacking order will always be in front of a window with a lower stacking order. After a window with the same stacking order is called, the show method will be in front. . |


**代码示例**
**Code Example**


```javascript

subNVue.setStyle({
	"position": "absolute", 
	//除 popup 外，其他值域参考 5+ webview position 文档
	//Except for popup, please refer to the 5+ webview position document for other value ranges
	"width": "50%",
	"height": "50%",
	"left":"20px",
	"top":"100px"
})
```


### subNVue.postMessage(OBJECT)
发送消息
send messages

**代码示例**
**Code Example**

```javascript

const subNVue = uni.getSubNVueById('subNvue');
subNvue.postMessage({
	id:'1'
	name:'subNvues'
})
```

### subNVue.onMessage(CallBack)
监听消息
Listen for messages

**代码示例**
**Code Example**


```javascript

const subNVue = uni.getSubNVueById('subNvue');
subNvue.onMessage(function(data){
	console.log('监听来自所属页面的 message' + JSON.stringify(data));
	console.log('Monitor messages from the page they belong to' + JSON.stringify(data));
})
```


### 动画类型
### Animation type
显示动画与关闭动画，会有默认的对应规则。但是如果通过 API 原生子窗体的关闭动画类型，则不会使用默认的类型。
There will be default corresponding rules for displaying animation and closing animation. However, if the close animation type of the native child form is passed through the API, the default type will not be used.

|显示动画|关闭动画|显示动画描述（关闭动画与之相反）
|Show animation|Close animation|Show animation description (close animation is the opposite)
|:-|:-|:-|
|slide-in-right|slide-out-right|新窗体从右侧进入|
|slide-in-right|slide-out-right|The new form enters from the right side|
|slide-in-left|slide-out-left|新窗体从左侧进入|
|slide-in-left|slide-out-left|The new form enters from the left|
|slide-in-top|slide-out-top|新窗体从顶部进入|
|slide-in-top|slide-out-top|The new form enters from the top|
|slide-in-bottom|slide-out-bottom|新窗体从底部进入|
|slide-in-bottom|slide-out-bottom|The new form enters from the bottom|
|fade-in|fade-out|新窗体从透明到不透明逐渐显示|
|fade-in|fade-out|The new window is gradually displayed from transparent to opaque|
|zoom-out|zoom-in|新窗体从小到大缩放显示|
|zoom-out|zoom-in|The new window zooms from small to large|
|zoom-fade-out|zoom-fade-in|新窗体从小到大逐渐放大并且从透明到不透明逐渐显示|
|zoom-fade-out|zoom-fade-in|The new window is gradually enlarged from small to large and gradually displayed from transparent to opaque|
|pop-in|pop-out|新窗体从左侧进入，且老窗体被挤压而出|
|pop-in|pop-out|The new form enters from the left, and the old form is squeezed out|
|none|none|无动画|
|none|none|no animation|


详细的窗口动画说明，请参考：
For detailed window animation instructions, please refer to:

- 窗口显示的动画：[AnimationTypeShow](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow)
- Animation displayed in the window: [AnimationTypeShow](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow)
- 窗口关闭的动画：[AnimationTypeClose](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose)
- Animation of window closing: [AnimationTypeClose](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose)

**注意事项**
**Precautions**

- 了解更多 `subNVue` 原生子窗体的用途，请详读[subNVues 原生子窗体开发指南](https://ask.dcloud.net.cn/article/35948)
- To learn more about the use of `subNVue` native subforms, please read [subNVues Native Subform Development Guide](https://ask.dcloud.net.cn/article/35948)
- 在hello uni-app的接口-界面-原生子窗体中，有完整的subNVue示例，包括带渐变色的原生导航栏、可遮盖地图的侧滑菜单、可从顶部弹出的popup、可在视频上滚动的消息列表
- In the interface-interface-native sub-form of hello uni-app, there are complete subNVue examples, including the native navigation bar with gradient, the side-slide menu that can cover the map, the pop-up that can pop up from the top, and the video Scrolling message list
- 每个 `subNVue` 页面都要在 pages.json 中注册
- Every `subNVue` page must be registered in pages.json
- `subNVue` 比cover-view和plus.nativeObj.view更强大，也占用更多内存，为了保证更好的性能体验，一个vue页面不要加载太多 `subNVue` 子窗体，建议控制在三个以内
- `subNVue` is more powerful than cover-view and plus.nativeObj.view, and it also takes up more memory. To ensure a better performance experience, a vue page should not load too many `subNVue` subforms. It is recommended to control it in three Within
- `getSubNVueById` 需要在页面生命周期 `onReady` 中调用
- `getSubNVueById` needs to be called in the page life cycle `onReady`