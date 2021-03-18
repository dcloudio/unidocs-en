### uni.getLocation(OBJECT)
Get the current geographic location and speed.

 In the WeChat Mini Program, after the user leaves the application, this interface cannot be called unless the background continuous positioning permission is requested; when the user clicks "display at the top of the chat", this interface can continue to be called.

**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| type           | String   | no       | The default is wgs84 return gps coordinates, gcj02 return to the country office coordinate measurement can be used to `uni.openLocation`coordinate, app platform high moral SDK only supports returning gcj02 |
| success        | Function | Yes      | Callback function for successful interface call. For details, see the return parameter description. |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter          | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| latitude           | Latitude, floating point number, range -90~90, negative number means south latitude |
| longitude          | Longitude, floating point number, range -180~180, negative number means west longitude |
| speed              | Speed, floating point number, unit m/s                       |
| accuracy           | Position accuracy                                            |
| altitude           | Height, unit m                                               |
| verticalAccuracy   | Vertical accuracy, unit m (Android can’t get it, return 0)   |
| horizontalAccuracy | Horizontal accuracy, unit m                                  |

**address information description**

| Attributes | Types  | description                   | Description                                                  |
| :--------- | :----- | :---------------------------- | :----------------------------------------------------------- |
| country    | String | country                       | Such as "China", if this information cannot be obtained, undefined will be returned |
| province   | String | Province name                 | Such as "Beijing", if the information cannot be obtained, undefined will be returned |
| city       | String | city name                     | Such as "Beijing", if the information cannot be obtained, undefined will be returned |
| district   | String | District (county) name        | Such as "Chaoyang District", if this information cannot be obtained, undefined will be returned |
| street     | String | Street information            | Such as "Jiuxianqiao Road", if this information cannot be obtained, undefined will be returned |
| streetNum  | String | Get street number information | Such as "No. 3", if this information cannot be obtained, undefined will be returned |
| poiName    | String | POI information               | Such as "Electronic City. International Electronic Headquarters", if this information cannot be obtained, undefined will be returned |
| postalCode | String | Postal code                   | Such as "100016", if this information cannot be obtained, undefined will be returned |
| cityCode   | String | City code                     | Such as "010", if this information cannot be obtained, undefined will be returned |

**Example**

```javascript
uni.getLocation({
	type: 'wgs84',
	success: function (res) {
		console.log('Longitude of current position:' + res.longitude);
		console.log('Longitude of current position:' + res.latitude);
	}
});
```

### uni.chooseLocation(OBJECT)
Open the map and select a location.

**OBJECT parameter description**

| parameter name | Types of | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| success        | Function | Yes      | Callback function for successful interface call. For details, see the return parameter description. |
| fail           | Function | no       | Callback function for interface call failure (triggered when the location fails to obtain, the user cancels, etc.) |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| name      | Location name                                                |
| address   | Address                                                      |
| latitude  | Latitude, floating point number, range -90~90, negative number means south latitude, use gcj02 China National Surveying Bureau coordinate system. |
| longitude | Longitude, floating point number, range -180~180, negative number means west longitude, use gcj02 China National Surveying Bureau coordinate system. |

**Example**

```javascript
uni.chooseLocation({
	success: function (res) {
		console.log('Location Name:' + res.name);
		console.log('Detailed address:' + res.address);
		console.log('Latitude:' + res.latitude);
		console.log('Longitude:' + res.longitude);
	}
});
```

