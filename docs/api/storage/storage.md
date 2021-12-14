#### uni.setStorage(OBJECT)
将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
Storing data in the key specified in the local cache will overwrite the original content corresponding to the key, which is an asynchronous interface.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key| String| Yes| key specified in the local cache|
|data|Any|是|需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象|
| data| Any| Yes| Content to be stored, only supporting native types and objects that can be serialized through JSON.stringify.|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
**Example**

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
将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
Storing data in the key specified in the local cache will overwrite the original content corresponding to the key, which is a synchronous interface.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key| String| Yes| key specified in the local cache|
|data|Any|是|需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象|
| data| Any| Yes| Content to be stored, only supporting native types and objects that can be serialized through JSON.stringify.|

```javascript
try {
	uni.setStorageSync('storage_key', 'hello');
} catch (e) {
	// error
}
```

#### uni.getStorage(OBJECT)
从本地缓存中异步获取指定 key 对应的内容。
Get the content corresponding to the specified key asynchronously from the local cache.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key| String| Yes| key specified in the local cache|
|success|Function|是|接口调用的回调函数，res = {data: key对应的内容}|
| success| Function| Yes| callback function called by the interface, res = {data: Content corresponding to the key}|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|data|Any|key 对应的内容|
| data| Any| Content corresponding to the key|

**示例**
**Example**

```javascript
uni.getStorage({
	key: 'storage_key',
	success: function (res) {
		console.log(res.data);
	}
});
```

#### uni.getStorageSync(KEY)
从本地缓存中同步获取指定 key 对应的内容。
Get the content corresponding to the specified key synchronously from the local cache.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key| String| Yes| key specified in the local cache|

**示例**
**Example**

```javascript
try {
	const value = uni.getStorageSync('storage_key');
	if (value) {
		console.log(value);
	}
} catch (e) {
	// error
}
```

#### uni.getStorageInfo(OBJECT)
异步获取当前 storage 的相关信息。
Get information about the current storage asynchronously.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.0.3+|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|是|接口调用的回调函数，详见返回参数说明|
| success| Function| Yes| Callback function for interface calling. See the notices on returning parameter description.|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|keys|Array＜String＞|当前 storage 中所有的 key|
| keys| Array＜String＞| All keys in the current storage|
|currentSize|Number|当前占用的空间大小, 单位：kb|
| currentSize| Number| Size of the space currently occupied, in kb|
|limitSize|Number|限制的空间大小, 单位：kb|
| limitSize| Number| Limited size of the space, in kb|

**示例**
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

#### uni.getStorageInfoSync()
同步获取当前 storage 的相关信息。
Get information about the current storage synchronously.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.0.3+|√|

**示例**
**Example**

```javascript
try {
	const res = uni.getStorageInfoSync();
	console.log(res.keys);
	console.log(res.currentSize);
	console.log(res.limitSize);
} catch (e) {
	// error
}
```

#### uni.removeStorage(OBJECT)
从本地缓存中异步移除指定 key。
Removes the specified key asynchronously from the local cache.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key| String| Yes| key specified in the local cache|
|success|Function|是|接口调用的回调函数|
| success| Function| Yes| Callback function for interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**示例**
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
从本地缓存中同步移除指定 key。
Removes the specified key synchronously from the local cache.

**参数说明**
**Parameter Description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key| String| Yes| key specified in the local cache|

**示例**
**Example**

```javascript
try {
	uni.removeStorageSync('storage_key');
} catch (e) {
	// error
}
```

#### uni.clearStorage()
清理本地数据缓存。
Clean up the local data cache.

**示例**
**Example**

```javascript
uni.clearStorage();
```

#### uni.clearStorageSync()
同步清理本地数据缓存。
Clean up the local data cache synchronously.

**示例**
**Example**

```javascript
try {
	uni.clearStorageSync();
} catch (e) {
	// error
}
```

**注意**
**Notice**

uni-app的Storage在不同端的实现不同：
uni-app Storage is implemented differently at different sides:
- H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
- H5 side uses the localStorage, which, as a cache concept, is limited up to 5M, and may be cleaned up.
- App端为原生的storage，无大小限制，不是缓存，是持久化的
- App side uses the native storage, which has no size limitation, and is not a cache but a persistent storage.
- 非App平台清空Storage会导致uni.getSystemInfo获取到的deviceId改变
- Clearing up the Storage for non-APP platforms will cause the deviceId obtained by uni.getSystemInfo being replaced

除此之外，其他数据存储方案：
In addition, other data storage schemes:
- H5端还支持websql、indexedDB、sessionStorage
- H5 side also supports websql, indexedDB and sessionStorage.
