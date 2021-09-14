#### picker

从底部弹起的滚动选择器。支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。
The scroll selector that pops up from the bottom. Supports five types of selectors, distinguished by mode, they are ordinary selector, multi-column selector, time selector, date selector, province/city selector, and the default is normal selector.

#### 普通选择器
#### Normal selector

``mode = selector``

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name | Types of| Defaults | Description |Platform difference description|
|:-|:-|:-|:-|:-|
|range|Array / Array＜Object＞|[]|mode为 selector 或 multiSelector 时，range 有效||
| range          | Array / Array＜Object＞ | []       | When mode is selector or multiSelector, range is valid       ||
|range-key|String||当 range 是一个 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容||
| range-key      | String                  |          | When range is an `Array<Object>`, use range-key to specify the value of key in Object as the selector display content ||
|value|Number|0|value 的值表示选择了 range 中的第几个（下标从 0 开始）||
| value          | Number                  | 0        | The value of value indicates which number in the range is selected (the subscript starts from 0) ||
|selector-type|String|auto|大屏时UI类型，支持 picker、select、auto，默认在 iPad 以 picker 样式展示而在 PC 以 select 样式展示|H5 2.9.9+|
| selector-type  | String                  | auto     | UI type for large screens, support picker, select, auto, by default it is displayed in picker style on iPad and select style on PC ||
|@change|EventHandle||value 改变时触发 change 事件，event.detail = {value: value}||
| @change        | EventHandle             |          | The change event is triggered when the value changes, event.detail = {value: value} ||
|disabled|Boolean|false|是否禁用||
| disabled       | Boolean                 | false    | Whether to disable                                           ||
|@cancel|EventHandle||取消选择或点遮罩层收起 picker 时触发||
| @cancel        | EventHandle             |          | Triggered when you cancel the selection or click the mask layer to retract the picker ||

- picker在各平台的实现是有UI差异的，有的平台没有取消按钮如App-iOS端。但均不影响功能使用。
- 
-There are UI differences in the implementation of picker on various platforms, and some platforms do not have a cancel button such as App-iOS. But none of them affects the use of functions.

#### 多列选择器
#### Multiple column selector

``mode = multiSelector``

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|vue支持，nvue自2.4起支持|√|
|vue support, nvue support since 2.4|√|

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
|Attribute name|Type|Default value|Description|
|:-|:-|:-|:-|
|range|二维 Array / 二维 Array＜Object＞|[]|mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a","b"], ["c","d"]]|
|range|Two-dimensional Array / Two-dimensional Array<Object>|[]| When the mode is selector or multiSelector, range is valid. Two-dimensional array, the length indicates how many columns, each item of the array indicates the data of each column, such as [["a","b"], ["c","d"]]|
|range-key|String||当 range 是一个二维 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
|range-key|String||When range is a two-dimensional Array<Object>, use range-key to specify the value of key in Object as the selector display content|
|value|Array|[]|value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）|
|value|Array|[]|value The value of each item indicates the number of the corresponding items in the range is selected (the subscript starts from 0)|
|@change|EventHandle||value 改变时触发 change 事件，event.detail = {value: value}|
|@change|EventHandle||The change event is triggered when the value changes, event.detail = {value: value}|
|@columnchange|EventHandle||某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标|
|@columnchange|EventHandle||columnchange event is triggered when the value of a certain column changes, event.detail = {column: column, value: value}, the value of column indicates which column is changed (subscript starts from 0), the value of The value represents the subscript of the changed value|
|@cancel|EventHandle||取消选择时触发|
|@cancel|EventHandle||Triggered when the selection is canceled|
|disabled|Boolean|false|是否禁用|
|disabled|Boolean|false|whether to disable|

**bug & tips**
- 由于 JavaScript 的限制 vue 不能观测如下方式设置 value：``this.value[0] = 0`` （[vue 注意事项](https://cn.vuejs.org/v2/guide/list.html#注意事项)），解决方式参考：[hello-uniapp 示例](https://github.com/dcloudio/hello-uniapp/commit/59264474172a591c865431d02a2a1e3583978827)
-Due to the limitation of JavaScript, vue cannot observe and set the value in the following way: ``this.value[0] = 0'' ([vue Note](https://cn.vuejs.org/v2/guide/list.html# Note)), refer to the solution: [hello-uniapp example](https://github.com/dcloudio/hello-uniapp/commit/59264474172a591c865431d02a2a1e3583978827)

#### 时间选择器
#### Time Picker

``mode = time``

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

- 时间选择在App端调用的是os的原生时间选择控件，在不同平台有不同的ui表现
-Time selection calls the native time selection control of os on the App side, which has different UI performance on different platforms

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
|Attribute name|Type|Default value|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|value|String||表示选中的时间，格式为"hh:mm"||
|value|String|| represents the selected time, the format is "hh:mm"||
|start|String||表示有效时间范围的开始，字符串格式为"hh:mm"|App 不支持|
|start|String||Indicates the beginning of the valid time range, the string format is "hh:mm"|App does not support|
|end|String||表示有效时间范围的结束，字符串格式为"hh:mm"|App 不支持|
|end|String||Indicates the end of the valid time range, the string format is "hh:mm"|App does not support|
|@change|EventHandle||value 改变时触发 change 事件，event.detail = {value: value}||
|@change|EventHandle||The change event is triggered when value changes, event.detail = {value: value}||
|@cancel|EventHandle||取消选择时触发||
|@cancel|EventHandle||Triggered when the selection is canceled||
|disabled|Boolean|false|是否禁用|&nbsp;|
|disabled|Boolean|false|Whether to disable|&nbsp;|

#### 日期选择器
#### Date Picker

``mode = date``

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√|√|

日期选择默认在App端和H5端（PC版Chrome以及PC版FireFox）调用的是os的原生日期选择控件，在不同平台有不同的ui表现，当配置fields参数后使用统一的展示方式。
By default, the date selection calls the native date selection control of os on the App side and H5 side (Chrome for PC and FireFox for PC). There are different UI performances on different platforms. When the fields parameter is configured, a unified display method is used.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
|Attribute name|Type|Default value|Description|Platform difference description|
|:-|:-|:-|:-|:-|
|value|String|0|表示选中的日期，格式为"YYYY-MM-DD"||
|value|String|0|represents the selected date, the format is "YYYY-MM-DD"||
|start|String||表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"||
|start|String||Indicates the beginning of the valid date range, the string format is "YYYY-MM-DD"||
|end|String||表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"||
|end|String||Indicates the end of the valid date range, the string format is "YYYY-MM-DD"||
|fields|String|day|有效值 year、month、day，表示选择器的粒度，默认为 day，App 端未配置此项时使用系统 UI|H5、App 2.6.3+|
|fields|String|day|Valid values year, month, day, indicate the granularity of the selector, the default is day, the system UI is used when this item is not configured on the App side|H5, App 2.6.3+|
|@change|EventHandle||value 改变时触发 change 事件，event.detail = {value: value}||
|@change|EventHandle||The change event is triggered when value changes, event.detail = {value: value}||
|@cancel|EventHandle||取消选择时触发||
|@cancel|EventHandle||Triggered when the selection is canceled||
|disabled|Boolean|false|是否禁用|&nbsp;|
|disabled|Boolean|false|Whether to disable|&nbsp;|

**fields 有效值**
**fields valid value**

|值|说明|
|Value|Description|
|:-|:-|
|year|选择器粒度为年|
|year|The selector granularity is year|
|month|选择器粒度为月份|
|month|The granularity of the selector is month|
|day|选择器粒度为天|
|day|The granularity of the selector is day|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/picker/picker)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/picker/picker)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp), it is recommended to use HBuilderX, create a new uni-app project, choose hello uni-app template, you can experience the complete Example.
```html
<!-- This example does not include the complete css, please refer to the above to obtain the external css, check it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-title uni-common-pl">Region selector</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					Current selection
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">Time selector</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					Current selection
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">Date picker</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					Current selection
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
</template>
```
```javascript
export default {
    data() {
        const currentDate = this.getDate({
            format: true
        })
        return {
            title: 'picker',
            array: ['China', 'United States', 'Brazil', 'Japan'],
            index: 0,
            date: currentDate,
            time: '12:01'
        }
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
    methods: {
        bindPickerChange: function(e) {
            console.log('Picker sends the selection change, and the carry value is', e.target.value)
            this.index = e.target.value
        },
        bindDateChange: function(e) {
            this.date = e.target.value
        },
        bindTimeChange: function(e) {
            this.time = e.target.value
        },
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        }
    }
}
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/42826b40-4f30-11eb-b680-7980c8a877b8.png)

示例代码说明：以上示例代码从hello uni-app示例中复制，涉及的css样式在hello uni-app的app.vue和uni.css中
Sample code description: The above sample code is copied from the hello uni-app example, the css style involved is in the app.vue and uni.css of the hello uni-app

预览H5效果：使用浏览器的手机模式访问[https://hellouniapp.dcloud.net.cn/pages/component/picker/picker](https://hellouniapp.dcloud.net.cn/pages/component/picker/picker)
Preview H5 effect: use the mobile phone mode of the browser to access [https://hellouniapp.dcloud.net.cn/pages/component/picker/picker](https://hellouniapp.dcloud.net.cn/pages/component/picker /picker)

**注意**
**Notice**
- 在picker内容还在滚动时或滚动回弹动画还未结束时，点确定关闭弹出的picker，数据无法及时更新。需等待一下，或手动触停滚动再点确定。所有平台均如此
- -When the picker content is still scrolling or the scrolling rebound animation has not ended, click OK to close the pop-up picker, and the data cannot be updated in time. You need to wait for a while, or manually stop scrolling and click OK. This is true for all platforms

**扩展**
**Extensions**
- uni ui提供了增强版`<uni-data-picker>`组件，详见：[https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net.cn/plugin?id=3796)
- -uni ui provides an enhanced version of `<uni-data-picker>` component, see: [https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net .cn/plugin?id=3796)
- 该组件优势如下：
- -The advantages of this component are as follows:
  * 符合[datacom](/component/datacom)规范，只需传入data，就可以自动生成界面
  * Conforms to the [datacom](/component/datacom) specification, you only need to pass in data, and the interface can be automatically generated
  * 符合[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)，表单校验规范
  * Comply with [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773), form verification specifications
  * 突破多列picker的3列限制，可以承载更多列数据
  * Break through the 3-column limit of the multi-column picker, which can carry more columns of data
  * 选择区域面积更高更大
  * Choose the area to be higher and larger
  * 支持多列数据分级加载，比如省市区选择，先选择省，然后动态联网加载该省的市。
  * Supports multi-column data hierarchical loading, such as selecting provinces and districts, first select the province, and then dynamically load the provinces and cities online.
  * uniCloud自带了[opendb](https://gitee.com/dcloud/opendb)表，[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)，包括全国的省市区数据。在`<uni-data-picker>`组件上可直接绑定该数据，生成全端可用的、联网懒加载的省市区选择。
  * uniCloud comes with [opendb](https://gitee.com/dcloud/opendb) table, [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb -city-china), including data of provinces and municipalities across the country. The data can be directly bound to the `<uni-data-picker>` component to generate a fully-available, lazy-loaded networked province and city selection.
  * unicloud数据库提供了[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)，还提供了[schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)自动生成全套表单页面，包括界面、校验逻辑、提交入库。在schema中配置字段的格式，比如在用户地址表[uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address)的字段`area_code`配置值域指向[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)表，即可自动生成该用户地址的生成页面
  * The unicloud database provides [DB Schema](https://uniapp.dcloud.io/uniCloud/schema), and also provides [schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id= autocode) Automatically generate a full set of form pages, including interface, verification logic, and submit to storage. Configure the field format in the schema, such as the field `area_code` in the user address table [uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address) The configuration value domain points to the [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china) table, and the user address generation page can be automatically generated