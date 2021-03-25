`manifest.json`The file is the configuration file of the application, used to specify the name, icon, permissions, etc. of the application. The project created by HBuilderX is in the root directory, and the project created by CLI is in the src directory.

### List of configuration items

| Attributes        | Types of | Defaults                                                    | description                                                  | Minimum version |
| :---------------- | :------- | :---------------------------------------------------------- | :----------------------------------------------------------- | :-------------- |
| name              | String   |                                                             | Application Name                                             |                 |
| appid             | String   | When creating a new uni-app project, DCloud will assign it. | Application ID                                               |                 |
| screenOrientation | Array    |                                                             | Gravity sensing, horizontal and vertical screen configuration, possible values: "portrait-primary": vertical screen forward direction; "portrait-secondary": vertical screen reverse direction; "landscape-primary": horizontal screen forward direction; "landscape-secondary": The reverse direction of horizontal screen. |                 |
| description       | String   |                                                             | Application description                                      |                 |
| versionName       | String   |                                                             | Version name, for example: 1.0.0. See the Tips description below for details |                 |
| versionCode       | String   |                                                             | Version number, for example: 36                              |                 |
| transformPx       | Boolean  | true                                                        | Whether to convert the px of the project, when true, convert px to rpx, when false, px is the traditional actual pixel |                 |
| networkTimeout    | Object   |                                                             | Network timeout time                                         |                 |
| debug             | Boolean  | false                                                       | Debug mode is turned on, after opening the debug information `info`given in the form, the information pages have registered, page routing, data updates, event triggers, etc. |                 |
| uniStatistics     | Object   |                                                             | Whether to enable uni statistics, global configuration       | 2.2.3+          |

**Tips**

- uni-app of `appid`the cloud DCloud allocated, mainly for DCloud related cloud service, do not modify. 
- Note the distinction between uni-app `appid`with other platforms WeChat applets, iOS like distribution `appid`, and the third party SDK `appid`.
- versionName is used when cloud packaging App and generating wgt application resources. If you need to upgrade the App version, first modify this and then cloud packaging. Exporting wgt resources for offline packaging and hot updates will also be based on this version.
- During local packaging and hot update, the App version and wgt application resource version will no longer be consistent. By this time plus.runtime.version available App version, by plus.runtime.getProperty get wgt resource version.

#### networkTimeout

The timeout period of various network requests, in milliseconds.

| Attributes    | Types of | Required | Defaults | Description                                              |
| ------------- | -------- | -------- | -------- | -------------------------------------------------------- |
| request       | Number   | no       | 60000    | The timeout period of uni.request, in milliseconds.      |
| connectSocket | Number   | no       | 60000    | Uni.connectSocket timeout time, in milliseconds.         |
| uploadFile    | Number   | no       | 60000    | The timeout period of uni.uploadFile, in milliseconds.   |
| downloadFile  | Number   | no       | 60000    | The timeout period of uni.downloadFile, in milliseconds. |

Since `HBuilderX 2.5.10`then, the above-mentioned default timeout period has been changed from 6 seconds to 60 seconds, aligning with the WeChat applet platform.

### uniStatistics

uni statistics configuration items

| Attributes | Types of | Required | Defaults | Description                      |
| ---------- | -------- | -------- | -------- | -------------------------------- |
| enable     | Boolean  | Yes      | true     | Whether to enable uni statistics |

#### optimization

The subcontracting of the applet can reduce the number of js loaded at startup and increase the startup speed in addition to the segmented download on the Internet.

Starting from uni-app 2.7.12+, the App-vue platform is also compatible with the sub-package configuration of applets, but it is not enabled by default.

Configure the following nodes in the manifest to start subcontracting on the App side.

| Attributes  | Types of | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| subPackages | Boolean  | Whether to enable subcontracting optimization |

```
"app-plus": {
  "optimization": {
    "subPackages": true
  },
  "runmode" : "liberate" // After the subcontracting optimization is enabled, the resource release mode must be configured
}
```

After starting the subpackage in the manifest, you need to configure specific subpackage rules in pages.json, which are the same as the configuration of the applet.

That is, once subcontracting is configured in pages.json, the applet must take effect, and whether the app takes effect depends on whether it is enabled in the manifest.

note:

- After the app is sub-packaged, each sub-package is separately compiled into a js file (all included in the app and will not be downloaded on the Internet). When the home page of the App is vue, the startup loading file size can be reduced and the startup speed can be improved.
- When the homepage is nvue, subcontracting will not increase the startup speed, and the startup speed of nvue itself is faster than vue, and faster than the application whose homepage is vue after opening the subcontracting. If you pursue the ultimate startup speed, you should still use nvue as the home page and enable fast mode in the manifest.
- When there are few App pages, the optimization of startup speed by subcontracting is not obvious.

#### nvue

`nvue` Initial page layout settings

| Attributes     | Types of | description                                                  |
| :------------- | :------- | :----------------------------------------------------------- |
| flex-direction | String   | The arrangement direction of flex member items, support items, row: from left to right; row-reverse: from right to left; column: from top to bottom; column-reverse: opposite to column, the default value is column. |
