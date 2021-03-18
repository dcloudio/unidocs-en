#### Button

button.

**Property description**

|**Attribute name**|**Types of**|**Defaults**|**Description**|**Effective time**|
|:-|:-|:-|:-|:-|
|size|String|default|Button size||
|type|String|default|Button style type||
|plain|Boolean|false|Whether the button is hollowed out and the background color is transparent||
|disabled|Boolean|false|Whether to disable||
|loading|Boolean|false|Whether there is a loading icon before the name||

- **Note1：``button-hover`` default is ``{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}``**

**size valid value**

|**value**|**Description**|
|:-|:-|
|default|Default size|
|mini|Small size|

**type valid value**

|value|Description|
|:-|:-|
|primary|please use default instead, and then write your own style.|
|default|white|
|warn|red|

**form-type valid value**

|Value|Description|
|:-|:-|
|submit|submit Form|
|reset|Reset Form|



**Button click**

The click of the button component follows the @click event of the vue standard.

The button component has no url attribute. If you want to jump to the page, you can write it in @click, or you can put a layer of navigator component outside the button component. For example, if you need to jump to the about page, you can execute the following code writing methods:

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">Jump to the about page through the navigator component</button></navigator>
		<button type="default" @click="goto('/pages/about/about')">Jump to the about page by function</button>
		<button type="default" @click="navigateTo('/pages/about/about')">Jump to about page</button>
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```

**Sample Code**

```html

<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary">Main page operation Normal</button>
			<button type="primary" loading="true">Main page operation Loading</button>
			<button type="primary" disabled="true">Main page operation Disabled</button>
			<button type="default">Page secondary action Normal</button>
			<button type="default" disabled="true">Page secondary action Disabled</button>
			<button type="warn">Warning operations Normal</button>
			<button type="warn" disabled="true">Warning operations Disabled</button>
			<view class="button-sp-area">
				<button type="primary" plain="true">button</button>
				<button type="primary" disabled="true" plain="true">Non-clickable button</button>
				<button type="default" plain="true">button</button>
				<button type="default" disabled="true" plain="true">button</button>
				<button class="mini-btn" type="primary" size="mini">button</button>
				<button class="mini-btn" type="default" size="mini">button</button>
				<button class="mini-btn" type="warn" size="mini">button</button>
			</view>
		</view>
	</view>
</template>
```

**note**

The event must use vue syntax, such as the following example of obtaining a mobile phone number

```html
<button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">get phone number</button>
```
