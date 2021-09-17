#### form
表单，将组件内的用户输入的``<switch>`` ``<input>`` ``<checkbox>`` ``<slider>`` ``<radio>`` ``<picker>`` 提交。
Form, `<switch>` `<input>` `<checkbox>` `<slider>` `<radio>` `<picker>`submit the user input in the component .

当点击 ``<form>`` 表单中 formType 为 submit 的 ``<button>`` 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。
When you click `<form>`the form to submit formType of `<button>`the component, value value will be submitted in the form component, we need to add components to the form name as key.

**属性说明**
**Property description**

|属性名|类型|说明|
| Attribute name        | Types of    | Description                                                  |
|:-|:-|:-|
|@submit|EventHandle|携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}，report-submit 为 true 时才会返回 formId|
| @submit               | EventHandle | Carrying the data in the form to trigger the submit event, event.detail = {value: {'name':'value'}, formId:''}, formId will only be returned when report-submit is true |
|@reset|EventHandle|表单重置时会触发 reset 事件|
| @reset                | EventHandle | The reset event is triggered when the form is reset          |

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/form/form)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/form/form)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp), it is recommended to use HBuilderX, create a new uni-app project, choose hello uni-app template, you can experience the complete Example.
```html
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">switch</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">radio</view>
					<radio-group name="radio">
						<label>
							<radio value="radio1" /><text>Option one</text>
						</label>
						<label>
							<radio value="radio2" /><text>Option two</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>Option one</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>Option two</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">slider</view>
					<slider value="50" name="slider" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">input</view>
					<input class="uni-input" name="input" placeholder="" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: 'data：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
				console.log('Empty data')
			}
		}
	}
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>

```
 
![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/f5e29b40-4f32-11eb-bdc1-8bd33eb6adaa.png)


**使用内置 behaviors**
**Use built-in behaviors**

无法在`form`的`submit`事件内获取组件内表单控件值，此时可以使用`behaviors`。
It is not possible to get the form control value in the component in the `submit` event of the `form`. In this case, you can use `behaviors`.

对于 form 组件，目前可以自动识别下列内置 behaviors:
For the form component, the following built-in behaviors can currently be automatically recognized:

uni://form-field

> 目前仅支持h5。
> Currently only h5 is supported.

**uni://form-field**

使自定义组件有类似于表单控件的行为。 form 组件可以识别这些自定义组件，并在 submit 事件中返回组件的字段名及其对应字段值。这将为它添加以下两个属性。
Make custom components behave like form controls. The form component can recognize these custom components, and return the component's field name and its corresponding field value in the submit event. This will add the following two properties to it.

|属性名|类型|描述|
|Attribute name|Type|Description|
|:-|:-|:-|
|name|String|在表单中的字段名|
|name|String|Field name in the form|
|value|任意|在表单中的字段值|
|value|any|field value in the form|

示例如下：
Examples are as follows:

```html
<!-- /pages/index/index.vue -->
<template>  
    <view class="content">  
        <form @submit="onSubmit">  
            <comp-input name="test" v-model="testValue"></comp-input>  
            <button form-type="submit">Submit</button>  
        </form>  
    </view>  
</template>  

<script>  
    export default {  
        data() {  
            return {  
                testValue: 'Hello'  
            }  
        },  
        methods: {  
            onSubmit(e) {  
                console.log(e)  
            }  
        }  
    }  
</script>  

<style>  

</style>
```

```html
<!-- /components/compInput/compInput.vue -->
<template>  
    <view>  
        <input name="test" style="border: solid 1px #999999;height: 80px;" type="text" @input="onInput" :value="value" />  
    </view>  
</template>  

<script>  
    export default {  
        name: 'compInput',  
        behaviors: ['uni://form-field'],
        methods: {  
            onInput(e) {  
                this.$emit('input', e.detail.value)  
            }  
        }  
    }  
</script>  

<style>  

</style>  
```


**增强的uni-forms组件**
**Enhanced uni-forms components**
- 为方便做表单验证，uni ui提供了`<uni-forms>`组件，参考：[https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net.cn/plugin?id=2773)
- To facilitate form verification, uni ui provides the `<uni-forms>` component, reference: [https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net .cn/plugin?id=2773)
- 如果使用uniCloud，其数据库提供了`DB Schema`，在schema中配置字段的格式，前端表单校验和服务器入参校验将可以复用该规则，无需在前端后端重复开发表单校验。[详见](https://uniapp.dcloud.io/uniCloud/schema)
- If you use uniCloud, its database provides `DB Schema`, configure the field format in the schema, and the front-end form check and server input check will be able to reuse this rule, and there is no need to repeat the development of form check in the front-end and back-end. [See details](https://uniapp.dcloud.io/uniCloud/schema)
- 有很多表单自助生成辅助工具
- There are many form self-generating aids
  * 如果使用uniCloud的`DB Schema`可以自动生成全套表单，包括界面、校验逻辑、提交入库，[详见](https://uniapp.dcloud.io/uniCloud/schema?id=autocode).
  * If you use uniCloud's `DB Schema`, you can automatically generate a full set of forms, including interface, verification logic, and submit to the library, [see](https://uniapp.dcloud.io/uniCloud/schema?id=autocode).
  * 不使用uniCloud的话，插件市场有可视化拖拽表单插件：[详见](https://ext.dcloud.net.cn/search?q=%E5%8F%AF%E8%A7%86%E5%8C%96)。这类插件只生成界面，没有逻辑。
  * If you don’t use uniCloud, there is a visual drag-and-drop form plugin in the plugin market: [See details](https://ext.dcloud.net.cn/search?q=%E5%8F%AF%E8%A7%86%E5% 8C%96). This type of plug-in only generates an interface without logic.
