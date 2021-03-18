#### checkbox-group
Multiple selector, composed of multiple checkboxes inside.

**Property description**

|**Attribute name**|type|**Defaults**|Describe|
|:-|:-|:-|:-|
|@change|EventHandle||`<checkbox-group>`The change of the selected item in the middle triggers the change event, detail = {value:[array of value of the selected checkbox]}|

#### checkbox
Multiple selection items.

**Property description**

|**Attribute name**|type|**Defaults**|**Description**|
|:-|:-|:-|:-|
|value|String||`<checkbox>`Identify, select trigger `<checkbox-group>`the change event and carry `<checkbox>`the value.|
|disabled|Boolean|false|Whether to disable|
|checked|Boolean|false|Whether currently selected, can be used to set the default selected|
|color|Color||The color of the checkbox, same as the color of css|

**Sample Code**

```html
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



