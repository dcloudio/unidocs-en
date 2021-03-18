### uni.createCameraContext()
Create and return the context cameraContext object of the camera component.

This API is a js API supporting the camera component. It has the same platform compatibility as the camera component and can realize non-full-screen cameras. App can realize full-screen camera through plus.camera

**method list of cameraContext object**

| method        | parameter | Description                                                  |
|:-|:-|:-|
|takePhoto|Object|Take a picture, you can specify the quality, and return the picture path if successful.|
|setZoom|Object|Set the zoom level|
|startRecord|Object|Start recording|
|stopRecord|Object|End the video, and return to the cover and video if successful.|
|onCameraFrame|Function|Get Camera real-time frame data. Only`WeChat Mini Program Platform`supported|

### cameraContext.takePhoto
 **The Object parameter list of takePhoto:** 

| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|quality|String| no       | Image quality, the value is high (high quality), normal (normal quality), low (low quality), the default is normal |
|success|Function| no       | The callback function of the successful interface call, returns the temporary path of the photo file, res = {tempImagePath} |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### cameraContext.setZoom
 **Object parameter list of setZoom:** 

| parameter | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|zoom|String| Yes      | The zoom level, range [1, maxZoom]. zoom can take decimals, accurate to one decimal place. maxZoom can be obtained in the return value of @initdone. |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### cameraContext.startRecord
 **Object parameter list of startRecord:** 

| parameter       | Types of | Required | Description                                                  |
|:-|:-|:-|:-|
|timeoutCallback|Function| no       | The recording will end when the connection exceeds 30s or the page is onHide |
|success|Function| no       | Callback function for successful interface call              |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

### cameraContext.stopRecord
** **Object parameter list of stopRecord:** ：**

| **parameter** | **Types of** | **Defaults** | **Required** | **Description** |
|:-|:-|:-|:-|:-|
|compressed|Boolean|false| no | Start video compression, the compression effect is the same `chooseVideo`
|success|Function|| no | The interface successfully calls the callback function, and returns the temporary path of the cover and video, res = {tempThumbPath, tempVideoPath }. |
|fail|Function|| no | Callback function for interface call failure |
|complete|Function|| no | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

note**

- Realize OCR and other credential identification requirements under the App. Native plug-ins can be obtained in the plug-in market
- OCR and other documents to achieve recognition and other requirements under the micro-channel applets, plug-in package market also search ocr visible.
- You can use the user authorization API to determine whether the user grants the app the access to the camera