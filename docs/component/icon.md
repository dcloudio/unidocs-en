#### icon

图标。
Icon.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√(2.2.3+)|

**Tips**

* 由于 icon 组件各端表现存在差异，可以通过使用 [字体图标](/frame?id=字体图标) 的方式来弥补各端差异。
* Due to the differences in the performance of each end of the icon component, you can use [font icons](/frame?id=%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87) to make up for the differences at each end.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|---|---|---|---|
|type|String||icon的类型|
| type| String| | icon type|
|size|Number|23|icon的大小，单位px|
| size| Number| 23| icon size, in px|
|color|Color||icon的颜色，同css的color|
| color| Color| | The color of the icon is the same as that of css.|

各平台 type 有效值说明：
Description of valid values of type on different platforms:

|平台|type 有效值|
| Platform| type valid value|
|:-:|:-:|
|App、H5|success, success_no_circle, info, warn, waiting, cancel, download, search, clear|


**示例**
**Example**
```html
<view class="item" v-for="(value,index) in iconType" :key="index">
    <icon :type="value" size="26"/>
    <text>{{value}}</text>
</view>
```
```javascript
export default {
    data() {
        return {
            iconType: ['success']
        }
    },
    onLoad() {
        // #ifdef APP
        this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
        // #endif
    }
}

```

**效果展示**
**Effect illustration**

<div style="display:flex;align-items: flex-start;justify-content: center;flex-wrap: wrap;">
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d188f390-4f30-11eb-97b7-0dc4655d6e68.png" width="375" style="margin-right:20px;"/>
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d2562ea0-4f30-11eb-97b7-0dc4655d6e68.png" width="375"/>
</div>
