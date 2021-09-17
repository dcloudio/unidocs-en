#### icon

图标。
icon.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√(2.2.3+)|

**Tips**

* 由于 icon 组件各端表现存在差异，可以通过使用 [字体图标](/frame?id=字体图标) 的方式来弥补各端差异。
* Due to differences in each end of the icon component performance, by using the Fonts icon to compensate for differences in the way each end.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|
| Attribute name | Types of | Defaults     | Description                   |
|---|---|---|---|
|type|String||icon的类型|
| type           | String   |              | icon type                     |
|size|Number|23|icon的大小，单位px|
| size           | Number   | twenty three | icon size, unit px            |
|color|Color||icon的颜色，同css的color|
| color          | Color    |              | icon color, same as css color |

各平台 type 有效值说明：
Valid value description of each platform type:

|平台|type 有效值|
|platform|type valid value|
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
        // #ifdef APP-PLUS|| MP-WEIXIN
        this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
        // #endif
        // #ifdef MP-ALIPAY
        this.iconType = ['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success', 'success_no_circle', 'loading']
        // #endif
        // #ifdef MP-BAIDU
        this.iconType = ['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal', 'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect']
        // #endif
    }
}

```

**效果展示**
**Show results**

<div style="display:flex;align-items: flex-start;justify-content: center;flex-wrap: wrap;">
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d2562ea0-4f30-11eb-97b7-0dc4655d6e68.png" width="375"/>
</div>
