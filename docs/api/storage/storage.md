#### uni.setStorage(OBJECT)
将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
Storing data in the specified key in the local cache will overwrite the original content corresponding to the key. This is an asynchronous interface.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description      |
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
|key|String|Yes|The specified key in the local cache|
|data|Any|是|需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象|
|data|Any|Yes|The content that needs to be stored, only supports native types and objects that can be serialized through JSON.stringify|
|success|Function|否|接口调用成功的回调函数|
|success|Function|no|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|no|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|no|Callback function for interface call failure|

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
Storing data in the specified key in the local cache will overwrite the content corresponding to the original key. This is a synchronous interface.

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
| parameter | Types  | Required | Description                                                  |
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key       | String | Yes      | The specified key in the local cache                         |
|data|Any|是|需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象|
| data      | Any    | Yes      | The content that needs to be stored, only supports native types and objects that can be serialized through JSON.stringify |

```javascript
try {
	uni.setStorageSync('storage_key', 'hello');
} catch (e) {
	// error
}
```

#### uni.getStorage(OBJECT)
从本地缓存中异步获取指定 key 对应的内容。
Obtain the content corresponding to the specified key asynchronously from the local cache.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description |
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
|key|String| Yes      | The specified key in the local cache                         |
|success|Function|是|接口调用的回调函数，res = {data: key对应的内容}|
|success|Function| Yes      | Callback function called by the interface, res = {data: content corresponding to key} |
|fail|Function|否|接口调用失败的回调函数|
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter | Types | Description               |
|:-|:-|:-|
|data|Any|key 对应的内容|
|data|Any|key corresponding content|

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

**参数说明**
**Parameter Description**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
|key|String|is the specified key in the local cache|

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
Asynchronously obtain the relevant information of the current storage.

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|HBuilderX 2.0.3+|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description |
|:-|:-|:-|:-|
|success|Function|是|接口调用的回调函数，详见返回参数说明|
|success|Function| Yes      | The callback function called by the interface, see the return parameter description for details |
|fail|Function|否|接口调用失败的回调函数|
|fail|Function| no       | Callback function for interface call failure                 |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function| no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| parameter   | Types           | Description     |
|:-|:-|:-|
|keys|Array＜String＞|当前 storage 中所有的 key|
| keys        | Array＜String＞ | All keys in the current storage                    |
|currentSize|Number|当前占用的空间大小, 单位：kb|
| currentSize | Number          | The size of the space currently occupied, unit: kb |
|limitSize|Number|限制的空间大小, 单位：kb|
| limitSize   | Number          | Restricted space size, unit: kb     |

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
Synchronously obtain the relevant information of the current storage.

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
Asynchronously remove the specified key from the local cache.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| parameter name | Types    | Required | Description  |
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key            | String   | Yes      | The specified key in the local cache                     |
|success|Function|是|接口调用的回调函数|
| success        | Function | Yes      | Callback function called by the interface                |
|fail|Function|否|接口调用失败的回调函数|
| fail           | Function | no       | Callback function for interface call failure             |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete       | Function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

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
Synchronously remove the specified key from the local cache.

**参数说明**
**Parameter Description**

|参数名|类型|必填|说明|
| parameter name | Types  | Required | Description                          |
|:-|:-|:-|:-|
|key|String|是|本地缓存中的指定的 key|
| key            | String | Yes      | The specified key in the local cache |

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
Synchronously clean up the local data cache.

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
The storage of uni-app is implemented differently on different ends:
- H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
- The H5 end is localStorage, the browser limits the size of 5M, which is a cache concept and may be cleaned up
- App端为原生的plus.storage，无大小限制，不是缓存，是持久化的
- App side is native plus.storage, no size limit, not cache, but persistent
- 非App平台清空Storage会导致uni.getSystemInfo获取到的deviceId改变
- Clearing Storage on non-App platforms will cause the deviceId obtained by uni.getSystemInfo to change
除此之外，其他数据存储方案：
In addition, other data storage solutions:
- H5端还支持websql、indexedDB、sessionStorage
- H5 also supports websql, indexedDB, sessionStorage
- App端还支持[SQLite](https://www.html5plus.org/doc/zh_cn/sqlite.html)、[IO文件](https://www.html5plus.org/doc/zh_cn/io.html)等本地存储方案。
- App also supports [SQLite](https://www.html5plus.org/doc/zh_cn/sqlite.html), [IO file](https://www.html5plus.org/doc/zh_cn/io.html ) And other local storage solutions.
从HBuilderX2.6.6+起，App-Android平台对本地storage数据存储进行了性能优化，它的具体优化方式和升级注意事项，详见：[https://ask.dcloud.net.cn/article/37071](https://ask.dcloud.net.cn/article/37071)
Starting from HBuilderX2.6.6+, the App-Android platform has optimized the performance of local storage data storage. For specific optimization methods and upgrade considerations, please see: [https://ask.dcloud.net.cn/article/37071 ](https://ask.dcloud.net.cn/article/37071)