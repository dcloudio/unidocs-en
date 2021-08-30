### uni.loadFontFace(Object object)

动态加载网络字体，文件地址需为下载类型。
Load web fonts dynamically, the file address must be the download type.

注意: 

1. 引入中文字体，体积过大时会发生错误，建议抽离出部分中文，减少体积，或者用图片替代
2. App支持网络或本地的字体（本地字体需使用[平台绝对路径](http://www.html5plus.org/doc/zh_cn/io.html#plus.io.convertLocalFileSystemURL)）。
3. 工具里提示 Faild to load font可以忽略

**平台差异说明**

|5+App|H5|
|:-:|:-:|
|1.9.0+ [自定义组件编译模式](https://ask.dcloud.net.cn/article/35843)|2.3.4+|

**参数说明**
**Parameter Description**

|属性|类型|默认值|必填|说明|
| Attributes | Types of | Defaults | Required | Description  |
|:-|:-|:-|:-|:-|
|global|Boolean|false|否|是否全局生效|
|global|Boolean|false|否|是否全局生效|
|family|String||是|定义的字体名称|
| family     | String   |          | Yes      | Defined font name  |
|source|String||是|字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。|
| source     | String   |          | Yes      | The address of the font resource. The recommended formats are TTF and WOFF |
|desc|Object||否|可选的字体描述符|
| desc       | Object   |          | no       | Optional font descriptor  |
|success|Function||否|接口调用成功的回调函数|
| success    | Function |     | no       | Callback function for successful interface call     |
|fail|Function||否|接口调用失败的回调函数|
| fail       | Function |          | no       | Callback function for interface call failure       |
|complete|Function||否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete   | Function |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Object.desc 的结构**
**Structure of Object.desc**

|属性|类型|默认值|必填|说明|
| Attributes | Types of | Defaults | Required | Description  |
|:-|:-|:-|:-|:-|
|style|String|normal|否|字体样式，可选值为 normal / italic / oblique|
| style      | String   | normal   | no       | Font style, optional values are normal / italic / oblique    |
|weight|String|normal|否|字体粗细，可选值为 normal / bold / 100 / 200../ 900|
| weight     | String   | normal   | no       | Font weight, optional values are normal / bold / 100 / 200../ 900 |
|variant|String|normal|否|设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit|
| variant    | String   | normal   | no       | Set the font display text of small capital letters, optional values are normal / small-caps / inherit |

**代码示例**
**Code example**

```javascript
uni.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success() {
	  console.log('success')
  }
})
```

**Tips**

插件市场有加载字体的例子：[https://ext.dcloud.net.cn/plugin?id=954](https://ext.dcloud.net.cn/plugin?id=954)
