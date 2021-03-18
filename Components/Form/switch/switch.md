#### [switch](https://uniapp.dcloud.io/component/switch?id=switch)

Switch selector.

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  |
| :------------- | :---------- | :------- | :----------------------------------------------------------- |
| checked        | Boolean     | false    | Whether selected                                             |
| disabled       | Boolean     | false    | Whether to disable                                           |
| type           | String      | switch   | Style, valid values: switch, checkbox                        |
| @change        | EventHandle |          | The change event is triggered when checked changes, event.detail={ value:checked} |
| color          | Color       |          | The color of switch, same as the color of css                |

**Example**

```html
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Default style</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">Recommended display style</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Opening</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">shut down</view>
				<switch />
			</view>
		</view>
	</view>
</template>
```

```javascript
export default {
    data() {
        return {}
    },
    methods: {
        switch1Change: function (e) {
            console.log('A change event occurs in switch1, and the carry value is', e.target.value)
        },
        switch2Change: function (e) {
            console.log('switch2 has a change event, and the value carried is', e.target.value)
        }
    }
}
```

**note**

- If you need to adjust the switch size, you can adjust it through the CSS scale method, such as reducing it to 70%`style="transform:scale(0.7)"`