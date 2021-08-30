### uni.pageScrollTo(OBJECT)

将页面滚动到目标位置。
Scroll the page to the target position.

**平台差异说明**

|App|H5|
|:-:|:-:|
|√(nvue不支持)|√|


**OBJECT参数说明**
**OBJECT parameter description**

|参数名		|类型			|必填	|说明	|
| parameter name | Types of | Required | Description |
|:-				|:-				|:-		|:-|
|scrollTop|Number		|否		|滚动到页面的目标位置（单位px）			|
| scrollTop      | String   | Yes      | Scroll to the target position of the page (in px) |
|duration	|Number		|否		|滚动动画的时长，默认300ms，单位 ms			|
| duration       | Number   | no       | The duration of the scroll animation, the default is 300ms, the unit is ms |
|success	|function	|否		|接口调用成功的回调函数				|
| success        | function | no       | Callback function for successful interface call  |
|fail			|function	|否		|接口调用失败的回调函数			|
| fail           | function | no       | Callback function for interface call failure  |
|complete	|function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete       | function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**selector 语法**
**selector syntax**
selector类似于 CSS 的选择器，但仅支持下列语法。
selector is similar to CSS selector, but only supports the following syntax.

- ID选择器：#the-id
- ID selector: #the-id
- class选择器（可以连续指定多个）：`.a-class.another-class`
- Class selector (multiple can be specified consecutively):`.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- Child element selector:`.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- Descendant selector:`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant`
- Descendant selector across custom components:`.the-ancestor >>> .the-descendant`
- 多选择器的并集：`#a-node, .some-other-nodes`
- Union of multiple selectors:`#a-node, .some-other-nodes`

**示例**
**Example**

```javascript
uni.pageScrollTo({
	scrollTop: 0,
	duration: 300
});
```

