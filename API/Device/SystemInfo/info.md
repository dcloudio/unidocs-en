### uni.getSystemInfo(OBJECT)
Get System Information.

**OBJECT parameter description:**

|Argument Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|yes|A successful callback to the interface call|
|fail|Function|no|The interface calls the callback function that failed|
|complete|Function|no|The callback function for the end of the interface call (the call will be executed if it succeeds or fails)|

**success Return parameter description:**

|Attribute|Description|
|:-|:-|
|brand|Mobile phone brand|
|model|Mobile phone models|
|pixelRatio|Device pixel ratio|
|screenWidth|The screen width|
|screenHeight|The screen height|
|windowWidth|Window widths are available|
|windowHeight|Window height can be used|
|windowTop|The top position of the window is available|
|windowBottom|The bottom position of the window is available|
|language|The language in which the Settings are applied|
|version|Engine version number|
|system|Operating system version|
|platform|Client platform,optional value:`ios`、`android`|
|SDKVersion|Client base library version|
|safeArea|The safe area in the vertical direction|
|safeAreaInsets|Insert position in the safe area under the vertical direction（2.5.3+）|

**Tips**
- The screen height = Native Navigation Bar height （Including status bar height）+ Window height can be used + Native Tab Bar height
- windowHeightdo not contain the height of NavigationBar and TabBar 
- App,windowTop height equals height of transparent NavigationBar,windowBottom height equals height of transparent TabBar
- Height information, should obtain through onReady

**safeArea structure**

|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|The upper left abscissa of the security area			|
|right	|Number	|Abscissa at the lower right corner of the security zone			|
|top	|Number	|Upper left ordinate of the security area			|
|bottom	|Number	|The vertical axis of the lower right corner of the safety zone			|
|width	|Number	|The width of the safe area, unit: pixel	|
|height	|Number	|The height of the safe zone, unit: pixel	|

**safeAreaInsets structure**

|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|Left insert position of safe zone			|
|right	|Number	|Insert position on the right side of safe zone			|
|top	|Number	|Safety zone top insertion position			|
|bottom	|Number	|Safety zone bottom insertion position			|


**Sample**

```javascript
uni.getSystemInfo({
	success: function (res) {
		console.log(res.model);
		console.log(res.pixelRatio);
		console.log(res.windowWidth);
		console.log(res.windowHeight);
		console.log(res.language);
		console.log(res.version);
		console.log(res.platform);
	}
});
```

### uni.getSystemInfoSync()
Get system information synchronization interface.

**synchronization Return parameter description**

|Attribute|Description|
|:-|:-|
|brand|Mobile phone brand|
|model|Mobile phone models|
|pixelRatio|Device pixel ratio|
|screenWidth|The screen width|
|screenHeight|The screen height|
|windowWidth|Window widths are available|
|windowHeight|Window height can be used|
|windowTop|The top position of the window is available|
|windowBottom|The bottom position of the window is available|
|statusBarHeight|The height of the status bar|
|language|The language in which the Settings are applied|
|version|Engine version number|
|system|Operating system version|
|platform|Client platform,optional value:`ios`、`android`|
|safeArea|The safe area in the vertical direction|
|safeAreaInsets|Insert position in the safe area under the vertical direction（2.5.3+）|


**Tips**
- Note the same as getSystemInfo

**safeArea structure**

|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|The upper left abscissa of the security area			|
|right	|Number	|Abscissa at the lower right corner of the security zone			|
|top	|Number	|Upper left ordinate of the security area			|
|bottom	|Number	|The vertical axis of the lower right corner of the safety zone			|
|width	|Number	|The width of the safe area, unit: pixel	|
|height	|Number	|The height of the safe zone, unit: pixel	|

**safeAreaInsets structure**

|Attribute|Type|Description|
|:-		|:-								|:-								|
|left	|Number	|Left insert position of safe zone			|
|right	|Number	|Insert position on the right side of safe zone			|
|top	|Number	|Safety zone top insertion position			|
|bottom	|Number	|Safety zone bottom insertion position			|

**Sample**

```javascript
try {
	const res = uni.getSystemInfoSync();
	console.log(res.model);
	console.log(res.pixelRatio);
	console.log(res.windowWidth);
	console.log(res.windowHeight);
	console.log(res.language);
	console.log(res.version);
	console.log(res.platform);
} catch (e) {
	// error
}
```

**Get device tag**

Android has improved user privacy protections,On a lot of new devices,When obtaining information such as IMEI, pop-up box is required for user authorization.IMEI is no longer available for Android 10.

- App iOS Platform:
IOS does not provide a API to get IMEI,through plus.device.getInfo  you can obtain the unique identity of the device (UUID),In fact, this ID is also a random number concept, similar to the UV calculation of H5. Uninstall APP and reinstall will change.

IOS also has an AD identifier called `idfa`,It is available through native.js.
- App Android Platform:
Android也可以使用UUID,同iOS.

IMEI is available under Android 10,In plus.device.getInfo The International Mobile Device Identity Number (IMEI) can be obtained for the device.Note that many new phones will pop up to ask for user authorization when obtaining IMEI.

`plus.device.getInfo` API for HBuilderX is available from HBuilderX 2.0.3+,The old version needs used plus.devide.uuid或plus.device.imei.

### uni.canIUse(String)
Determine if the application's API, callbacks, parameters, components, etc. are available in the current version.

**String Parameter Descriptiion**

Use ``${API}.${method}.${param}.${options}`` or ``${component}.${attribute}.${option}`` method to call,suchAs:

- ``${API}`` Represents the API name
- ``${method}`` Represents the invocation mode,有效值为return, success, object, callback
- ``${param}`` Represents a parameter or return value
- ``${options}`` Represents the optional value of a parameter
- ``${component}`` Represents the component name
- ``${attribute}`` Represents component properties
- ``${option}`` An optional value representing a component property

**Sample**

```javascript
uni.canIUse('getSystemInfoSync.return.screenWidth');
uni.canIUse('getSystemInfo.success.screenWidth');
uni.canIUse('showToast.object.image');
uni.canIUse('request.object.method.GET');

uni.canIUse('live-player');
uni.canIUse('text.selectable');
uni.canIUse('button.open-type.contact');
```
