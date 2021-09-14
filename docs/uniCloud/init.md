**若项目仅连接一个服务空间，`uniCloud`框架会自动绑定服务空间，开发者无需手动做初始化工作（可理解为类调用）。只有存在多服务空间时，才需要根据本文进行初始化**
**If the project only connects to one service space, the `uniCloud` framework will automatically bind the service space, and the developer does not need to manually initialize it (it can be understood as a class call). Only when there is a multi-service space, it needs to be initialized according to this article**

```
//项目仅连接了一个服务空间，则无需初始化
//The project is only connected to a service space, so there is no need to initialize
//可通过uniCloud直接调用云开发的API
//You can directly call cloud-developed APIs through uniCloud
uniCloud.callFunction()
uniCloud.uploadFile()
```

若项目连接了多个服务空间，`uniCloud`无法自动绑定；需开发者在客户端代码中，手动调用初始化方法`uniCloud.init`，绑定服务空间。
If the project is connected to multiple service spaces, `uniCloud` cannot be automatically bound; the developer needs to manually call the initialization method `uniCloud.init` in the client code to bind the service space.
`uniCloud.init`方法会返回一个`uniCloud`实例，之后云开发API的调用都需要通过该`uniCloud`实例发起（类似实例调用）。
The `uniCloud.init` method will return a `uniCloud` instance, and all subsequent cloud development API calls need to be initiated through this `uniCloud` instance (similar to instance calls).
`uniCloud.init`方法定义如下：
The `uniCloud.init` method is defined as follows:
```
function init(options):uniCloud
```

`uniCloud.init`方法接受一个`options`参数，返回`uniCloud`实例，`uniCloud`实例可调用云函数、云存储相关API。
The `uniCloud.init` method accepts an `options` parameter and returns a `uniCloud` instance. The `uniCloud` instance can call cloud functions and cloud storage related APIs.


**options 参数说明**
**options parameter description**
|参数名				|类型		|必填				|默认值	|说明																								|
|Parameter name |Type |Required |Default value |Description |
|:-:					|:-:		|:-:				|:-:		|:-:																								|
|provider			|String	|是					|-			|aliyun、tencent					|
|provider |String |is |- |aliyun, tencent |
|spaceId			|String	|是					|-			|服务空间ID，**注意是服务空间ID，不是服务空间名称**	|
|spaceId |String |Yes |- |Service space ID, **Note that it is the service space ID, not the service space name** |
|clientSecret	|String	|是	|-			|仅阿里云支持，可以在[uniCloud控制台](https://unicloud.dcloud.net.cn)服务空间列表中查看				|
|clientSecret |String |Yes |- |Only supported by Alibaba Cloud, you can view it in the [uniCloud console](https://unicloud.dcloud.net.cn) service space list |
|endpoint			|String	|否					|`https://api.bspapp.com`	|服务空间地址，仅阿里云侧支持																			|	
|endpoint |String |No |`https://api.bspapp.com` |Service space address, only supported by Alibaba Cloud |


<!-- |autoSignIn		|Boolean|否					|true										|是否自动匿名登录																	|仅腾讯云侧支持																																	| -->
<!-- |autoSignIn |Boolean|No |true |Whether to automatically log in anonymously |Only supported by Tencent Cloud | -->

**示例代码**
**Sample Code**
```javascript
//开发者创建了多个服务空间，则需手动初始化
//If the developer creates multiple service spaces, they need to be initialized manually
const myCloud = uniCloud.init({
  provider: 'aliyun',
  spaceId: 'xxxx-yyy',
  clientSecret: 'xxxx'
});
//通过uniCloud实例调用云开发的API
//Call cloud-developed API through uniCloud instance
myCloud.callFunction()
myCloud.uploadFile()

```

**Tips：**
- 云函数会自动识别自己所属的服务空间，无需初始化。
- Cloud function will automatically identify the service space to which it belongs, without initialization.