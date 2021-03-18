### uni.showToast(OBJECT)

Displays a message prompt box.

**OBJECT Parameter description **

| parameter name | Types    | Required |Description|
|:-|:-|:-|:-|
|title|String|Yes|The length of the prompt is related to the value of icon.|
|icon|String|no|Icon, effective value see below.|
|duration|Number|no|The prompt delay time, in milliseconds, default: 1500|
|success|Function|no|Interface calls a successful callback function|
|fail|Function|no|Interface calls a failed callback function|
|complete|Function|no|Callback function at the end of interface call (executed on success or failure)|

**Icon Value description**

|Value|Description|
|:-|:-|
|success|When the success icon is displayed, the title text can be displayed up to 7 characters in length. The default value|
|loading|Display the loading icon. At this time, the title text can display up to 7 characters in length.|
|none|No icon is displayed. At this time, title text can be displayed in 'small program' at most two lines, while 'App' only supports single-line display.|

**Sample**

```javascript
uni.showToast({
	title: 'Title',
	duration: 2000
});
```

**Description of position value (for App only)**

|Value|Description|
|:-|:-|
|top|Display on top|
|center|Display in center|
|bottom|Display on bottom|

### uni.hideToast()

Hide the message prompt box.

**Sample**

```javascript
uni.hideToast();
```


### uni.showLoading(OBJECT)

Loading prompt box is displayed.

**OBJECT Parameters description**

| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|title|String|Yes|The text content of the prompt is displayed below the Loading|
|success|Function|no|Interface calls a successful callback function|
|fail|Function|no|Interface calls a failed callback function|
|complete|Function|no|Callback function at the end of interface call (executed on success or failure)|

**Sample**

```javascript
uni.showLoading({
	title: 'Loading'
});
```

### uni.hideLoading()

Hide the Loading prompt box.

**Sample**

```javascript
uni.showLoading({
	title: 'Loading'
});

setTimeout(function () {
	uni.hideLoading();
}, 2000);
```

### uni.showModal(OBJECT)

Display modal pop-ups, which can have only one OK button, or both OK and cancel buttons. It's like an API that integrates HTML: alert, confirm.

**OBJECT Parameters description**

| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|title|String|no| Title of the prompt                                          |
|content|String|no|Content of the prompt|
|showCancel|Boolean|no|Whether or not to display the showCancel. Default is true|
|cancelText|String|no|Cancel button text, default "cancel", up to 4 characters|
|confirmText|String|no|The text of the confirm button, default to "Confirm", is up to 4 characters|
|success|Function|no|Interface calls a successful callback function|
|fail|Function|no|Interface calls a failed callback function|
|complete|Function|no|Callback function at the end of interface call (executed on success or failure)|

**success returns parameter description **

|parameter name|Types|Description|
|:-|:-|:-|
|confirm|Boolean|True indicates that the user clicked the OK button|
|cancel|Boolean|If true, it means that the user has clicked Cancel (used in Android system to distinguish between clicking the mask to close or clicking the Cancel button to close)|

**Sample**

```javascript
uni.showModal({
	title: 'Prompt',
	content: 'This is a modal popover',
	success: function (res) {
		if (res.confirm) {
			console.log('The user hits OK');
		} else if (res.cancel) {
			console.log('The user hits Cancel');
		}
	}
});
```

Note
- When the pop-up is used at the same time to confirm cancel, it should be noted that the position of the confirm cancel button is different on different platforms. In WeChat, H5, the confirm button is on the right by default. In the App, the iOS Confirm button is on the right by default, while the Android Confirm button is on the left. The reason for this difference is that uni. ShowModa calls natively provided pop-ups on apps and applets, and the native platform's policy is different. If you need to adjust, you can control the text of the button by yourself, that is, the text of the "OK" button can actually be set to "cancel".
- When showModal does not meet the requirements, it can develop component pop-up frames by itself. There are many custom pop-up components in the plug-in market. Note that on non-H5 platforms, front-end components cannot cover native components (such as maps and videos), and masks cannot cover Tabbar and NavigationBar. If you want to cover the native components or mask tabbar, App side is recommended to use subNvue.
- There is a difference between the performance of the real program and the simulator. The title and content of the real program are required


### uni.showActionSheet(OBJECT)

The action menu pops up from the bottom

**OBJECT Parameters description**

| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|success|Function|no|Interface calls a successful callback function, See the return parameter description for details|
|fail|Function|no|Interface calls a failed callback function|
|complete|Function|no|Callback function at the end of interface call (executed on success or failure)|

**Popover value description (App only)**

| parameter name | Types  | Description                                                  |
|:-|:-|:-|
|top|Number|Indicates the coordinates of the region. When using the native NavigationBar, the height of the NavigationBar is generally added|
|left|Number|Indicating area coordinates|
|width|Number|Indicated area width|
|height|Number|Indicated area height|

**SUCCESS returns parameters description**

| parameter name | Types  | Description                                                  |
|:-|:-|:-|
|tapIndex|Number|Buttons that the user clicks, in top to bottom order, starting at 0|

**Sample**

```javascript
uni.showActionSheet({
	itemList: ['A', 'B', 'C'],
	success: function (res) {
		console.log('Select the' + (res.tapIndex + 1) + 'button');
	},
	fail: function (res) {
		console.log(res.errMsg);
	}
});
```

