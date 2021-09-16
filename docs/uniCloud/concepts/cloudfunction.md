云函数即在云端（服务器端）运行的函数。
Cloud functions are functions that run in the cloud (server-side).

开发者无需购买、搭建服务器，只需编写函数代码并部署到云端即可在客户端（App/H5/小程序等）调用，同时云函数之间也可互相调用。
Developers don't need to buy or set up a server, just write function code and deploy it to the cloud to call it on the client (App/H5/small program, etc.), and cloud functions can also call each other.

一个云函数的写法与一个在本地定义的 `JavaScript` 方法无异，代码运行在云端 `Node.js` 中。当云函数被客户端调用时，定义的代码会被放在 `Node.js` 运行环境中执行。
The writing of a cloud function is no different from a `JavaScript` method defined locally, and the code runs in the cloud `Node.js`. When the cloud function is called by the client, the defined code will be placed in the `Node.js` runtime environment for execution.

开发者可以如在 `Node.js` 环境中使用 `JavaScript` 一样在云函数中进行网络请求等操作，而且还可以通过云函数服务端 SDK 搭配使用多种服务，比如使用云函数 SDK 中提供的数据库和存储 API 进行数据库和存储的操作，这部分可参考数据库和存储后端 API 文档。
Developers can perform network requests and other operations in the cloud function just like using JavaScript in the `Node.js` environment, and they can also use a variety of services through the cloud function server SDK, such as using the cloud function SDK provided Database and storage API For database and storage operations, please refer to the database and storage back-end API documentation for this part.

HBuilderX 3.0起版本，在`uniCloud/cloudfunctions`目录右键创建云函数，如下：
Starting from HBuilderX 3.0, right-click the `uniCloud/cloudfunctions` directory to create cloud functions, as follows:

![新建云函数1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/a18b3bb0-53d8-11eb-8ff1-d5dcf8779628.jpg)
![New Cloud Function 1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/a18b3bb0-53d8-11eb-8ff1-d5dcf8779628.jpg)


HBuilderX 3.0之前版本，在项目下的`cloudfunctions`目录上右键、新建云函数，如下：
Before HBuilderX 3.0, right-click on the `cloudfunctions` directory under the project to create a new cloud function, as follows:
![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-02.png)

注：从HBuilderX 3.0起，`cloudfunctions`目录位于项目下的 `uniCloud` 目录下。
Note: Since HBuilderX 3.0, the `cloudfunctions` directory is located under the `uniCloud` directory under the project.
云函数修改后，可以本地运行。只有上传到云端，方可在云端生效。
After the cloud function is modified, it can be run locally. Only upload to the cloud can it take effect in the cloud.
更多云函数介绍参考[规范](uniCloud/cf-functions)。
For more cloud functions introduction, please refer to [Specification](uniCloud/cf-functions).
