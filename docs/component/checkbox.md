#### checkbox-group
多项选择器，内部由多个 checkbox 组成。
Multiple selector, composed of multiple checkboxes inside.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|
|**Attribute name**|type|**Defaults**|Describe|
|:-|:-|:-|:-|
|@change|EventHandle||``<checkbox-group>``中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}|
|@change|EventHandle||`<checkbox-group>`The change of the selected item in the middle triggers the change event, detail = {value:[array of value of the selected checkbox]}|

#### checkbox
多选项目。
Multiple selection items.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|
|**Attribute name**|type|**Defaults**|**Description**|
|:-|:-|:-|:-|
|value|String||``<checkbox>`` 标识，选中时触发 ``<checkbox-group>`` 的 change 事件，并携带 ``<checkbox>`` 的 value。|
|value|String||`<checkbox>`Identify, select trigger `<checkbox-group>`the change event and carry `<checkbox>`the value.|
|disabled|Boolean|false|是否禁用|
|disabled|Boolean|false|Whether to disable|
|checked|Boolean|false|当前是否选中，可用来设置默认选中|
|checked|Boolean|false|Whether currently selected, can be used to set the default selected|
|color|Color||checkbox的颜色，同css的color|
|color|Color||The color of the checkbox, same as the color of css|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/checkbox/checkbox)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">Default style</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" checked="true" />Selected
					</label>
					<label>
						<checkbox value="cb" />Unselected
					</label>
				</checkbox-group>
			</view>
			<view class="uni-title uni-common-mt">Checkboxes of different colors and sizes</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />seleced
					</label>
					<label>
						<checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />Unselected
					</label>
				</checkbox-group>
			</view>
		</view>
		
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				Recommended display style
				<text>\nUse uni-list layout</text>
			</view>
		</view>
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'checkbox',
				items: [{
						value: 'USA',
						name: 'United States'
					},
					{
						value: 'CHN',
						name: 'China',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: 'Brazil'
					},
					{
						value: 'JPN',
						name: 'Japan'
					},
					{
						value: 'ENG',
						name: 'England'
					},
					{
						value: 'FRA',
						name: 'France'
					}
				]
			}
		},
		methods: {
			checkboxChange: function (e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if(values.includes(item.value)){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				}
			}
		}
	}
</script>

<style>
.uni-list-cell {
	justify-content: flex-start
}
</style>
```
 

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f4db8b80-4f32-11eb-bdc1-8bd33eb6adaa.png)


**注意**
- 如需调节checkbox大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`

**扩展**
- uni-ui提供了增强的uni-data-checkbox组件，基于[datacom规范](/component/datacom)，只需传入data数据，即可自动生成一组复选框，使用方式更简洁，并且支持[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)的表单验证。uni-data-checkbox组件详见[https://ext.dcloud.net.cn/plugin?id=3456](https://ext.dcloud.net.cn/plugin?id=3456)
