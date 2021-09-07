#### uni.hideKeyboard()

隐藏软键盘
Hide soft keyboard

隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
Hide the displayed soft keyboard, if the soft keyboard is not displayed, do nothing.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|


#### uni.onKeyboardHeightChange(CALLBACK)

监听键盘高度变化
Listening keyboard height changes

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.2.3+|x|

**CALLBACK 返回参数**
**CALLBACK Return parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|height|Number|键盘高度|
|height|Number|keyboard height|

**示例代码**
**Exemple code**

```js
uni.onKeyboardHeightChange(res => {
  console.log(res.height)
})
```

#### uni.offKeyboardHeightChange(CALLBACK)

取消监听键盘高度变化事件
Cancel listening for keyboard height change events

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 3.1.0+|x|

**示例代码**
**Exemple code**

```js
uni.offKeyboardHeightChange(callback)
```

#### uni.getSelectedTextRange(OBJECT)

在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。目前仅支持 vue 页面，nvue 可以直接使用 weex 的 [getSelectionRange](http://emas.weex.io/zh/docs/components/input.html#%E7%BB%84%E4%BB%B6%E6%96%B9%E6%B3%95)。
After the focus of input, textarea, get the cursor position of the input box. Note: This interface is only valid when calling this interface when focusing. Currently only supports vue page, nvue can be used directly weex [getSelectionRange](http://emas.weex.io/docs/components/input.html#methods)。

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.8.12+|HBuilderX 2.8.12+|

**OBJECT 参数说明：**

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|Parameter|Type|Default Value|Required|Description|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success | Function |  | no | Callback function for successful interface call |
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail | Function |  | no | Callback function for interface call failure |
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete | Function |  | no | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明：**
**success Return parameter description:**

| 属性 | 类型 | 说明 |
| Parameter | Type | Description |
| --- | --- | --- |
| start | Number | 输入框光标起始位置 |
| start | Number | The starting position of the cursor in the input box |
| end | Number | 输入框光标结束位置 |
| end | Number | The end position of the cursor in the input box |

**示例代码**
**Exemple code**

```js
uni.getSelectedTextRange({
  success: res => {
    console.log('getSelectedTextRange res', res.start, res.end)
  }
})
```
