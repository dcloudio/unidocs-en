#### form
Form, `<switch>` `<input>` `<checkbox>` `<slider>` `<radio>` `<picker>`submit the user input in the component .

When you click `<form>`the form to submit formType of `<button>`the component, value value will be submitted in the form component, we need to add components to the form name as key.

**Property description**

| Attribute name        | Types of    | Description                                                  |
| :-------------------- | :---------- | :----------------------------------------------------------- |
| report-submit         | Boolean     | Whether to return formId for sending [template message](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html) |
| report-submit-timeout | number      | Wait for a period of time (milliseconds) to confirm whether the formId is valid. If this parameter is not specified, there is a small probability that formId is invalid (such as network failure). Specifying this parameter will check whether the formId is valid, and use the time of this parameter as the timeout period for this check. If it fails, it will return the formId starting with requestFormId:fail |
| @submit               | EventHandle | Carrying the data in the form to trigger the submit event, event.detail = {value: {'name':'value'}, formId:''}, formId will only be returned when report-submit is true |
| @reset                | EventHandle | The reset event is triggered when the form is reset          |

**Sample**

```html
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
				var formdata = e.detail.value
				uni.showModal({
					content: 'data：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
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

**Use built-in behaviors**

Applet end `form`inner custom assembly in `input`the form is the control, or implemented with a normal label form controls, for example , etc., can not be in `form`the `submit`acquired form control events within a value within the assembly, it may be used at this time `behaviors`.

Make custom components behave like form controls. The form component can identify these custom components, and return the field name of the component and its corresponding field value in the submit event. This will add the following two properties to it.

| Attribute name | Types of  | description             |
| :------------- | :-------- | :---------------------- |
| name           | String    | Field name in the form  |
| value          | Arbitrary | Field value in the form |

Examples are as follows：

```html
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

