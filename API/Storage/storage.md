#### uni.setStorage(OBJECT)
Storing data in the specified key in the local cache will overwrite the original content corresponding to the key. This is an asynchronous interface.

**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|key|String|Yes|The specified key in the local cache|
|data|Any|Yes|The content that needs to be stored, only supports native types and objects that can be serialized through JSON.stringify|
|success|Function|no|Callback function for successful interface call|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|no|Callback function for interface call failure|

**Exampel **

```javascript
uni.setStorage({
	key: 'storage_key',
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

#### uni.setStorageSync(KEY,DATA)
Storing data in the specified key in the local cache will overwrite the content corresponding to the original key. This is a synchronous interface.

**Parameter Description**

| parameter | Types  | Required | Description                                                  |
|:-|:-|:-|:-|
| key       | String | Yes      | The specified key in the local cache                         |
| data      | Any    | Yes      | The content that needs to be stored, only supports native types and objects that can be serialized through JSON.stringify |

```javascript
try {
	uni.setStorageSync('storage_key', 'hello');
} catch (e) {
	// error
}
```

#### uni.getStorage(OBJECT)
Obtain the content corresponding to the specified key asynchronously from the local cache.

**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|key|String| Yes      | The specified key in the local cache                         |
|success|Function| Yes      | Callback function called by the interface, res = {data: content corresponding to key} |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter | Types | Description               |
|:-|:-|:-|
|data|Any|key corresponding content|

**Example**

```javascript
uni.getStorage({
	key: 'storage_key',
	success: function (res) {
		console.log(res.data);
	}
});
```

#### uni.getStorageInfo(OBJECT)
Asynchronously obtain the relevant information of the current storage.

**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
|:-|:-|:-|:-|
|success|Function| Yes      | The callback function called by the interface, see the return parameter description for details |
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success return parameter description**

| parameter   | Types           | Description                                        |
| :---------- | :-------------- | :------------------------------------------------- |
| keys        | Array＜String＞ | All keys in the current storage                    |
| currentSize | Number          | The size of the space currently occupied, unit: kb |
| limitSize   | Number          | Restricted space size, unit: kb                    |

**Example**

```javascript
uni.getStorageInfo({
	success: function (res) {
		console.log(res.keys);
		console.log(res.currentSize);
		console.log(res.limitSize);
	}
});
```

#### uni.removeStorage(OBJECT)
Asynchronously remove the specified key from the local cache.

**OBJECT parameter description**

| parameter name | Types    | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| key            | String   | Yes      | The specified key in the local cache                         |
| success        | Function | Yes      | Callback function called by the interface                    |
| fail           | Function | no       | Callback function for interface call failure                 |
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Example**

```javascript
uni.removeStorage({
	key: 'storage_key',
	success: function (res) {
		console.log('success');
	}
});
```

#### uni.removeStorageSync(KEY)
Synchronously remove the specified key from the local cache.

**Parameter Description**

| parameter name | Types  | Required | Description                          |
| :------------- | :----- | :------- | :----------------------------------- |
| key            | String | Yes      | The specified key in the local cache |

**Example**

```javascript
try {
	uni.removeStorageSync('storage_key');
} catch (e) {
	// error
}
```

#### uni.clearStorage()
Clean up the local data cache.

**Example**

```javascript
uni.clearStorage();
```

#### uni.clearStorageSync()
Synchronously clean up the local data cache.

**Example**

```javascript
try {
	uni.clearStorageSync();
} catch (e) {
	// error
}
```
