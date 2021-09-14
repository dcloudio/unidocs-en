## 创建uniCloud项目
## Create uniCloud project
  - 在 [HBuilderX 2.5.8+](https://www.dcloud.io/hbuilderx.html) 新建项目，选择uni-app项目，并勾选`启用uniCloud`
  - Create a new project in [HBuilderX 2.5.8+](https://www.dcloud.io/hbuilderx.html), select the uni-app project, and check `Enable uniCloud`
  - 在右侧选择服务供应商
  - Select the service provider on the right

<img max-width="500px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/d24d7f30-4b16-11eb-bdc1-8bd33eb6adaa.jpg" />


  - 对于老的uni-app项目，也可以对项目点右键，菜单中选择“创建uniCloud云开发环境”
  - For old uni-app projects, you can also right-click the project and select "Create uniCloud development environment" from the menu
  - 新建uni-app项目的模板中，有一个`Hello uniCloud`项目模板，演示了各种云函数的使用。
  - Among the new uni-app project templates, there is a `Hello uniCloud` project template, which demonstrates the use of various cloud functions.
  uniCloud云开发环境创建成功后，项目根目录下会有一个带有云图标的特殊目录，名为“uniCloud”。（即便是cli创建的项目，云函数目录也在项目的根目录下，而不是src下）
  After the uniCloud cloud development environment is successfully created, there will be a special directory with a cloud icon named "uniCloud" under the project root directory. (Even for projects created by cli, the cloud function directory is under the root directory of the project, not under src)
  非uni-app项目也可以通过使用[云函数Url化](uniCloud/http.md)来享受云函数的带来的便利。
  Non-uni-app projects can also enjoy the convenience of cloud functions by using [Cloud Function Urlization](uniCloud/http.md).
  
  
## 目录结构@structure
## Directory structure @structure

HBuilderX 3.0起目录结构做了调整如下：
The directory structure of HBuilderX 3.0 has been adjusted as follows:

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌──uniCloud-aliyun                    云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb(Cloud space directory, Alibaba Cloud is uniCloud-aliyun, Tencent Cloud is uniCloud-tcb)
|   |——— cloudfunctions               云函数目录(Cloud function catalog)
|   |   │───common                    云函数公用模块目录 <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/cf-common">详情</a>(   Cloud function public module directory <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/cf-common">Details</a>)
|   |   |   └──hello-common           云函数公用模块(Cloud function public module)
|   |   |      │──index.js            公用模块代码(Common module code)
|   |   |      └──package.json        公用模块package.json(Public module package.json)
|   |   │───uni-clientDB-actions
|   |   │      └──new_action.js       clientDB action代码 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action">详情</a>(   clientDB action code <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action">Details</a>)
|   |   └───function-name             云函数目录(Cloud function catalog)
|   |         │──index.js             云函数代码(Cloud function code)
|   |         └──package.json         包含云函数的配置信息，如url化、定时设置、内存等内容 <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/cf-functions?id=packagejson">详情</a>(   Contains configuration information of cloud functions, such as URLization, timing settings, memory, etc. <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/cf-functions?id=packagejson">Details< /a>)
│   └──database                       云数据目录(Cloud data catalog)
│         │──validateFunction         数据库扩展校验函数目录(Database extension check function catalog)
│         │   └──new_validation.js    扩展校验函数代码 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction">详情</a>(   Extended verification function code <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction">Details</a>)
│         │──db_init.json             db_init.json初始化数据库文件，其中不再包含schema <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">详情</a>(db_init.json initializes the database file, which no longer contains schema <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">details</a>)
│         └──xxx.schema.json          数据表xxx的DB Schema <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/schema">详情</a>(DB Schema of data table xxx <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/schema">Details</a>)
根目录(Root directory)
	</code>
</pre>

#### 注意：uniCloud目录是存放服务端文件的目录，他和前端代码在同一个项目下这里只是方便管理。在发行前端部分，比如打包app、小程序、h5的代码包里并不会包含uniCloud目录。
#### Note: The uniCloud directory is the directory where the server-side files are stored. It is under the same project as the front-end code, just to facilitate management. In the distribution front-end part, such as packaged apps, applets, and h5 code packages, the uniCloud directory will not be included.

HBuilderX 3.0之前版本目录结构如下：
The directory structure of the version before HBuilderX 3.0 is as follows:
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌──cloudfunctions-aliyun            云空间目录，阿里云为cloudfunctions-aliyun,腾讯云为cloudfunctions-tcb(Cloud space directory, Alibaba Cloud is cloudfunctions-aliyun, Tencent Cloud is cloudfunctions-tcb)
|   │───function-name               云函数目录(Cloud function catalog)
|   |      │──index.js              云函数代码(Cloud function code)
|   |      └──package.json          标准package.json(Standard package.json)
|   │───common                      云函数公用模块目录 <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/cf-common">详情</a>(Cloud function public module directory <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/cf-common">Details</a>)
|   |   └──hello-common             云函数公用模块(Cloud function public module)
|   |      │──index.js              公用模块代码(Common module code)
|   |      └──package.json          公用模块package.json(Public module package.json)
|   │───uni-clientDB-actions
|   │      └──new_action.js         clientDB action代码 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action">详情</a>(clientDB action code <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action">Details</a>)
│   │───db_init.json                初始化数据库文件 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">详情</a>(Initialize the database file <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">Details</a>)
│   └───cloudfunctions_init.json    云函数初始化文件 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=init">详情</a>(Cloud function initialization file <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=init">Details</a>)
│
根目录(Root directory)
	</code>
</pre>


## 创建和绑定服务空间
## Create and bind service space

项目环境建好后，需要为这个项目选择一个服务空间。如果开发者账户没有实名认证，首先需要实名认证（这是法定要求，也是阿里云、腾讯云等云服务商的要求）。
After the project environment is established, a service space needs to be selected for this project. If the developer account does not have real-name authentication, real-name authentication is required first (this is a legal requirement and also required by cloud service providers such as Alibaba Cloud and Tencent Cloud).
一个开发者可以拥有多个服务空间，每个服务空间都是一个独立的serverless云环境，不同服务空间之间的云函数、数据库、存储都是隔离的。
A developer can have multiple service spaces. Each service space is an independent serverless cloud environment. Cloud functions, databases, and storage between different service spaces are isolated.
注：目前腾讯云仅提供1个免费服务空间，最多可创建49个收费服务空间。阿里云最多可创建50个免费服务空间。
Note: At present, Tencent Cloud only provides 1 free service space, and up to 49 paid service spaces can be created. Alibaba Cloud can create up to 50 free service spaces.
服务空间和手机端项目是多对多绑定关系。同账号下，一个项目可以关联到多个服务空间。一个服务空间也可以被多个项目访问。
The service space and the mobile terminal project are in a many-to-many binding relationship. Under the same account, a project can be linked to multiple service spaces. A service space can also be accessed by multiple projects.

  - HBuilderX 3.0起版本，在云函数目录`uniCloud`右键菜单创建服务空间，会打开web控制台[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) 进行创建
  - From HBuilderX version 3.0, create a service space in the right-click menu of the cloud function directory `uniCloud`, and the web console will open [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) Create
![创建服务空间1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b16f9740-4c05-11eb-8a36-ebb87efcf8c0.jpg)
![Create Service Space 1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b16f9740-4c05-11eb-8a36-ebb87efcf8c0.jpg)

  - HBuilderX 3.0之前版本，在云函数目录`cloudfunctions`右键菜单创建服务空间，会打开web控制台[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) 进行创建
  - Before HBuilderX 3.0, create a service space in the right-click menu of the cloud function directory `cloudfunctions`, and the web console will open [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) Create
![创建服务空间2](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-space.png)
![Create Service Space 2](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-space.png)

  - 创建好服务空间后，HBuilderX 3.0起版本对目录`uniCloud`点右键（HBuilderX 3.0之前版本对目录`cloudfunctions`点右键），菜单中点击`选择云服务空间`，绑定你之前创建的服务空间。
  - After the service space is created, right-click the directory `uniCloud` in HBuilderX version 3.0 (right-click the directory `cloudfunctions` in the version before HBuilderX 3.0), and click `Select Cloud Service Space` in the menu to bind the service space you created before .
  
**说明**
**illustrate**
- 如果未进行实名认证，会跳转至实名认证页面进行实名认证，等待实名认证审核之后可以开通服务空间。若腾讯云实名认证提示身份证下已创建过多账户，则需要在腾讯云官网注销不用的账户。
- If the real-name authentication has not been carried out, it will jump to the real-name authentication page for real-name authentication, and the service space can be opened after the real-name authentication review. If Tencent Cloud real-name authentication prompts that too many accounts have been created under the ID card, you need to log off unused accounts on the Tencent Cloud official website.
- 创建服务空间可能需要几十秒的时间，可以在web控制台查看是否创建完成。
- It may take tens of seconds to create a service space. You can check whether the creation is complete in the web console.
- 一个应用，可以在[dev.dcloud.net.cn](https://dev.dcloud.net.cn)设置协作者（选择应用->设置项目成员），实现多人共同使用一个云服务空间。（需 HBuilderX 2.5.9+）。协作者可以在HBuilderX和web控制台中操作被授权的服务空间，除了删除服务空间，其他功能均可正常操作。授权其他用户访问的详细步骤请参考：[授权其他用户访问服务空间](https://uniapp.dcloud.net.cn/uniCloud/faq?id=collaborator)
- An application, you can set up a collaborator in [dev.dcloud.net.cn](https://dev.dcloud.net.cn) (select application->set project members), so that multiple people can share a cloud service space . (Requires HBuilderX 2.5.9+). Collaborators can operate the authorized service space in HBuilderX and the web console. Except for deleting the service space, other functions can be operated normally. For detailed steps to authorize other users to access, please refer to: [Authorize other users to access the service space](https://uniapp.dcloud.net.cn/uniCloud/faq?id=collaborator)
- 多个项目可以复用一个服务空间，比如一个应用的用户端和管理端，在HBuilderX里可以创建成2个项目，但2个项目的服务空间可以指向一个，或者干脆把其中一个项目的服务空间绑定到另一个项目上，[详见](https://ask.dcloud.net.cn/article/37949)
- Multiple projects can reuse a service space. For example, the user side and management side of an application can be created into 2 projects in HBuilderX, but the service space of 2 projects can be pointed to one, or the service of one of the projects can be used altogether. The space is bound to another project, [see details](https://ask.dcloud.net.cn/article/37949)

## 创建云函数
## Create a cloud function
`uniCloud`项目创建并绑定服务空间后，开发者可以创建云函数。
After the `uniCloud` project is created and bound to the service space, developers can create cloud functions.
HBuilderX 3.0起版本请在`uniCloud/cloudfunctions`目录右键创建云函数
From HBuilderX 3.0, please right-click the `uniCloud/cloudfunctions` directory to create a cloud function
![新建云函数1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/a18b3bb0-53d8-11eb-8ff1-d5dcf8779628.jpg)
![New Cloud Function 1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/a18b3bb0-53d8-11eb-8ff1-d5dcf8779628.jpg)

HBuilderX 3.0之前版本在 `cloudfunctions` 目录右键创建云函数
Before HBuilderX 3.0, right-click to create a cloud function in the `cloudfunctions` directory
![新建云函数2](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-02.png)
![New Cloud Function 2](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-02.png)

创建后会以云函数名称为名生成一个特殊目录，该目录下自动生成index.js，是该云函数的入口文件，不可改名。如果该云函数还需要引入其他js，可在index.js入口文件中引用。
After creation, a special directory will be generated under the name of the cloud function. Index.js is automatically generated in this directory, which is the entry file of the cloud function and cannot be renamed. If the cloud function needs to introduce other js, it can be referenced in the index.js entry file.
**注意**
**Notice**
- 不同项目使用同一个服务空间时，不可使用同名云函数，可以在uniCloud的web控制台手动删除重名云函数释放函数名。
- When different projects use the same service space, the cloud function with the same name cannot be used. You can manually delete the cloud function with the same name in the uniCloud web console to release the function name.
- 在HBuilderX创建云函数时，如果新云函数与服务器上已存在同名云函数，会用新函数覆盖。
- When creating a cloud function in HBuilderX, if a new cloud function and a cloud function with the same name already exist on the server, it will be overwritten with the new function.
- 单个云函数大小限制为10M（包含node_modules）
- The size of a single cloud function is limited to 10M (including node_modules)
- 云函数内使用commonjs规范，不可使用import、export，参考：[commonjs模块](http://nodejs.cn/api/modules.html#modules_modules_commonjs_modules)
- Commonjs specification is used in cloud functions, import and export are not allowed, refer to: [commonjs module](http://nodejs.cn/api/modules.html#modules_modules_commonjs_modules)

## 编写云函数
## Writing cloud functions

云函数的语法，是在普通的Node.js基础上补充了uniCloud的专用API。可参考API开发文档编写，也可以直接新建项目时选择`hello uniCloud`模板体验。
The syntax of cloud functions is based on ordinary Node.js supplemented with uniCloud's dedicated API. You can refer to the API development documentation to write, or you can directly select the `hello uniCloud` template experience when creating a new project.
HBuilderX为uniCloud开发提供了良好的语法提示和转到定义支持，对于代码中的API，选中并按下F1，也可以直接查看相应的文档。
HBuilderX provides good syntax hints and transition definition support for uniCloud development. For APIs in the code, select and press F1, and you can also directly view the corresponding documents.
如下为一个云函数示例
The following is an example of a cloud function
```javascript
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// Get 10 pieces of data in the table, and the result is in json format
	const collection = db.collection('unicloud-test') 
	// 获取表'unicloud-test'的集合对象
	// Get the collection object of table'unicloud-test'
	const res = await collection.limit(10).get() 
	// 获取表中的10条数据，结果为json格式
	//event is the parameter uploaded by the client
	return res 
	// 返回json给客户端
	// Return json to the client
};

```

## 运行和调试云函数@rundebug
## Run and debug cloud functions @rundebug
编写云函数后，在项目管理器里右键点击该云函数的目录，在弹出菜单中可选择“本地运行云函数”、“上传部署云函数”、“上传并运行云函数”。
After writing a cloud function, right-click the cloud function directory in the project manager, and select "Run Cloud Function Locally", "Upload and Deploy Cloud Function", and "Upload and Run Cloud Function" in the pop-up menu.
如果使用`HBuilderX 3.0.0`及以上版本还可以使用客户端连接本地云函数的方式，不同于上面三种，客户端连接本地云函数需要在运行起来的客户端对应的HBuilderX控制台上切换连接云端还是本地云函数，如下图
If you use `HBuilderX 3.0.0` and above, you can also use the client to connect to the local cloud function. Different from the above three, the client needs to switch the connection on the HBuilderX console corresponding to the running client. Cloud or local cloud function, as shown below
![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/28f84f90-3f69-11eb-8ff1-d5dcf8779628.jpg)

- 上传部署云函数：将云函数部署到uniCloud服务空间，不会运行。（快捷键Ctrl+u）
- Upload and deploy cloud functions: Deploy cloud functions to the uniCloud service space and will not run. (Shortcut Ctrl+u)
- 上传并运行云函数：先上传云函数，并在云端立即执行该云函数。在部署后同时运行，并打印日志出来。有延时，调试时不如本地运行云函数快捷。
- Upload and run the cloud function: upload the cloud function first, and execute the cloud function immediately in the cloud. Run at the same time after deployment, and print out the log. There is a delay, and it is not as fast as running cloud functions locally when debugging.
- 本地运行云函数：在HBuilderX自带的node环境中运行选中的云函数。云函数连接的数据库和云存储，仍然在云端。（快捷键Ctrl+u）（从HBuilderX 2.8.1起支持）
- Run cloud functions locally: Run the selected cloud functions in the node environment that comes with HBuilderX. The database and cloud storage connected by the cloud function are still in the cloud. (Shortcut Ctrl+u) (supported from HBuilderX 2.8.1)
- 客户端连接本地云函数：开启一个uniCloud本地服务，运行前端项目时在HBuilderX控制台可切换访问云端云函数还是本地云函数。（从HBuilderX 3.0.0起支持）
- Client connection to local cloud functions: Open a uniCloud local service, and you can switch access to cloud cloud functions or local cloud functions in the HBuilderX console when running front-end projects. (Supported from HBuilderX 3.0.0)

**模式差异**
**Mode difference**
**上传部署云函数**
**Upload and deploy cloud functions**
云函数会被上传到服务空间，不会执行。如果要测试需使用客户端调用此云函数。
The cloud function will be uploaded to the service space and will not be executed. If you want to test, you need to use the client to call this cloud function.
**上传并运行云函数**
**Upload and run cloud functions**
云函数会被上传到服务空间，然后执行一次，可以在HBuilderX内uniCloud控制台看到结果及日志。如果有配置运行测试参数，会使用配置的参数调用云函数。
The cloud function will be uploaded to the service space, and then executed once, you can see the results and logs in the uniCloud console in HBuilderX. If there are configured running test parameters, the cloud function will be called with the configured parameters.
上传并运行使用的资源全部都是云端资源。包括云函数、数据库、云存储。
All resources used for uploading and running are cloud resources. Including cloud functions, databases, and cloud storage.
**本地运行云函数**
**Run cloud functions locally**
云函数不会被上传到服务空间，只在本地运行，可以在HBuilderX内uniCloud控制台看到结果及日志。
Cloud functions will not be uploaded to the service space, but only run locally. You can see the results and logs in the uniCloud console in HBuilderX.
这是一种独立测试云函数的方法，如需要配置前端参数，则需配置json文件，[详见](/uniCloud/quickstart?id=runparam)
This is a way to test cloud functions independently. If you need to configure front-end parameters, you need to configure a json file, [see details](/uniCloud/quickstart?id=runparam)
本地运行时只有当前云函数会使用本地的。如果在当前云函数内使用callFunction调用其他云函数会调用云端已部署的云函数，云存储、数据库均会使用云端数据。
When running locally, only the current cloud function will use the local one. If you use callFunction to call other cloud functions in the current cloud function, the cloud function that has been deployed in the cloud will be called, and the cloud storage and database will use cloud data.

**客户端连接本地云函数**
**Client connection local cloud function**
云函数不会被上传到服务空间，由本地调试服务调用云函数，可以在HBuilderX内uniCloud控制台看到结果及日志。
The cloud function will not be uploaded to the service space. The cloud function is called by the local debugging service. You can see the result and log in the uniCloud console in HBuilderX.
这是一种前后端联调的方法，可较大提升联调效率。
This is a method of front-end and back-end joint debugging, which can greatly improve the efficiency of joint debugging.
使用clientDB操作数据库时，表结构（schema.json文件）、扩展校验函数、clientDB-actions均使用本地项目下的代码，但所操作的数据依然是云端数据，索引也是以云端为准。
When using clientDB to operate a database, the table structure (schema.json file), extended verification function, and clientDB-actions all use the code under the local project, but the data operated is still cloud data, and the index is also based on the cloud.
客户端连接本地云函数时云函数内的callFunction也会调用本地云函数，除非目标云函数是插件市场售卖的加密云函数，此时仍会调用云端。
When the client connects to the local cloud function, the callFunction in the cloud function will also call the local cloud function. Unless the target cloud function is an encrypted cloud function sold in the plug-in market, the cloud will still be called at this time.
虽然云函数、数据库schema、validatefunction在本地了，但云存储、数据库的数据和索引，仍然在云端。也就是开发机不能纯脱线开发。
Although cloud functions, database schema, and validatefunction are local, the data and indexes of cloud storage and database are still in the cloud. That is, the development machine cannot be developed purely offline.
**注意**
**Notice**

- HBuilderX 3.0.0版本云函数目录有调整，请参考：[目录结构说明](uniCloud/quickstart.md?id=structure)
- HBuilderX 3.0.0 version of the cloud function catalog has been adjusted, please refer to: [Directory structure description](uniCloud/quickstart.md?id=structure)
### 上传并运行云函数@uploadandrun
### Upload and run cloud functions @uploadandrun
在项目管理器里右键点击云函数的目录，在弹出菜单中可选择“上传并运行云函数”。此外也可以打开此目录下的文件然后使用快捷键`Ctrl+r`，在弹出菜单中选择“上传并运行云函数”。上传并运行时会自动带上配置的运行测试参数。
Right-click the cloud function directory in the project manager, and select "Upload and Run Cloud Function" in the pop-up menu. In addition, you can also open the file in this directory and use the shortcut key `Ctrl+r` to select "Upload and Run Cloud Function" from the pop-up menu. When uploading and running, it will automatically bring the configured running test parameters.
如需配置运行测试参数请参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runparam)
If you need to configure running test parameters, please refer to: [Configure running test parameters](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runparam)
### 客户端连接本地云函数@calllocalfunction
### The client connects to the local cloud function @calllocalfunction
自`HBuilderX 3.0.0`起支持客户端连接本地云函数，由客户端访问本地调试服务调用云函数。方便前后端联调、方便schema联调。
Since `HBuilderX 3.0.0`, the client is supported to connect to the local cloud function, and the client can access the local debugging service to call the cloud function. Convenient for front-end and back-end joint debugging, and convenient for schema joint debugging.
**只支持本地运行打日志。暂不支持断点debug**
**Only supports local running and logging. Does not support breakpoint debug at the moment**
**虽然云函数、数据库schema、validatefunction在本地，但云存储、数据库的数据和索引，仍然在云端。也就是开发机不能完全脱线开发。只是代码可以在本地写，免上传就能联调。**
**Although the cloud functions, database schema, and validatefunction are local, the data and indexes of cloud storage and database are still in the cloud. That is, the development machine cannot be developed completely offline. It's just that the code can be written locally and can be combined without uploading. **
**使用方式**
**How ​​to use**
运行客户端后可以在HBuilderX控制台切换是连接本地云函数还是云端云函数，如下图所示
After running the client, you can switch whether to connect to local cloud functions or cloud cloud functions in the HBuilderX console, as shown in the figure below

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/28f84f90-3f69-11eb-8ff1-d5dcf8779628.jpg)

**日志查看**
**Log View**
切换为本地云函数之后客户端的callFunction会直接调用cloudfunctions目录下的云函数。此时云函数的日志会在HBuilderX uniCloud控制台打印。如下图
After switching to a local cloud function, the client's callFunction will directly call the cloud function in the cloudfunctions directory. At this time, the cloud function log will be printed on the HBuilderX uniCloud console. As shown below
![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b6f52050-3f7a-11eb-8a36-ebb87efcf8c0.jpg)

切换连接云端云函数还是本地云函数之后会在项目下的`.hbuilderx`目录创建一个`launch.json`文件。关于此文件的说明请参考：【链接待补充】
After switching the connection to the cloud cloud function or the local cloud function, a `launch.json` file will be created in the `.hbuilderx` directory under the project. For the description of this file, please refer to: [link to be added]
一个典型的`launch.json`是如下形式的（无需手动创建此文件）
A typical `launch.json` has the following form (no need to create this file manually)

```js
{
    "version": "0.0.1",
    "configurations": [
      {
        "app-plus": {
          "launchtype" : "local" 
		  // app平台连接本地云函数
		  // App platform connects to local cloud functions
        },
        "default": {
          "launchtype" : "remote" 
		  // 未配置的平台连接云端云函数
		  // Unconfigured platforms connect to cloud cloud functions
        },
        "h5": {
          "launchtype" : "remote" 
		  // h5平台连接云端云函数
		  // h5 platform connects to cloud cloud functions
        },
        "provider" : "aliyun", 
		// 如果项目仅关联一个服务空间无需此参数
		// If the project is only associated with one service space, this parameter is not required
        "type" : "uniCloud" 
		// 标识此项配置为uniCloud配置，必填
		// Identifies that this configuration is uniCloud configuration, required
     }
    ]
}

```

**注意事项**
**Precautions**
- 虽然云函数、数据库schema、validatefunction在本地，但云存储、数据库的数据和索引，仍然在云端。也就是开发机不能完全脱线开发。只是代码可以在本地写，免上传就能联调。
-Although cloud functions, database schema, and validatefunction are local, the data and indexes of cloud storage and database are still in the cloud. That is, the development machine cannot be developed completely offline. It's just that the code can be written locally and can be combined without uploading.
- 连接线上环境时请记得上传本地的schema、validatefunction、action
-Please remember to upload the local schema, validate function, action when connecting to the online environment
- 切换云端、本地，无需重新运行客户端
-Switch between cloud and local without re-running the client
- 不同平台可以有不同的配置。但同一平台，如安卓和iOS都是app-plus，则对应着同一个配置，或者两台安卓手机也只能有一个配置
-Different platforms can have different configurations. But the same platform, if both Android and iOS are app-plus, it corresponds to the same configuration, or two Android phones can only have one configuration
- 客户端在每次发送云函数请求之前，会发送一条请求到本地调试服务，本地服务会根据当前用户选择来通知客户端该访问本地云函数还是云端云函数
- The client will send a request to the local debugging service every time before sending a cloud function request, and the local service will notify the client whether to access the local cloud function or the cloud cloud function according to the current user selection
- 客户端连接本地云函数时，云函数内的callFunction也会调用本地云函数。除非目标云函数是插件市场售卖的加密云函数，此时不会调用本地，仍会调用云端
- When the client connects to the local cloud function, the callFunction in the cloud function will also call the local cloud function. Unless the target cloud function is an encrypted cloud function sold in the plug-in market, the local will not be called at this time, but the cloud will still be called
- 如果云函数或云函数依赖的公共模块有加密（在插件市场销售），则会忽略本地配置，请求云端已部署的云函数。请留意控制台输出
- If the cloud function or the public module that the cloud function depends on is encrypted (sold in the plug-in market), the local configuration will be ignored and the cloud function deployed in the cloud will be requested. Please pay attention to the console output
- 发送clientDB请求时，如果使用了加密的action（在插件市场销售），当前请求会使用云端已部署资源而不是本地资源（包括schema、validateFunction、action），请留意控制台输出
- When sending a clientDB request, if an encrypted action (sold in the plug-in market) is used, the current request will use cloud deployed resources instead of local resources (including schema, validateFunction, action), please pay attention to the console output
- 如果项目内关联了两个服务空间，需要在`.hbuilderx/launch.json`内配置provider参数指定哪个服务空间使用本地调试
- If two service spaces are associated in the project, you need to configure the provider parameter in `.hbuilderx/launch.json` to specify which service space uses local debugging
- 当前项目运行的所有客户端都停止运行时，对本项目的调试服务会关闭，已经运行到手机的客户端将无法连接本地云函数
- When all clients running in the current project stop running, the debugging service for this project will be closed, and clients already running on the phone will not be able to connect to local cloud functions
- 在h5端network面板的会看到一些`Request Method: OPTION`的请求，这些是跨域预检请求，忽略即可。请参考：[HTTP 的 OPTIONS 方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)
- On the network panel of the h5 end, you will see some requests for `Request Method: OPTION`, these are cross-domain pre-check requests, just ignore them. Please refer to: [HTTP OPTIONS Method](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)
- 云函数超时时间、运行内存配置，在本地调试时不会生效
- Cloud function timeout time and running memory configuration will not take effect during local debugging
- 目前不支持使用了腾讯云自定义登录的场景
- Currently, scenarios where Tencent Cloud custom login is used are not supported
- 开发小程序时如果想使用本地云函数进行调试，请开启小程序的忽略安全域名校验
- If you want to use local cloud functions for debugging when developing a mini program, please enable the ignore security domain name check of the mini program
- 如果在使用HBuilderX过程中切换了电脑网络后本地调试服务无法访问，则需要重启一次HBuilderX
- If the local debugging service cannot be accessed after switching the computer network while using HBuilderX, you need to restart HBuilderX once
- 小程序体验版无法连接本地服务，如果发布成小程序体验版请务必使用发行模式
- The Mini Program Trial Version cannot connect to local services. If you publish the Mini Program Trial Version, please be sure to use the release mode


### 本地运行云函数@runlocal
### Run cloud functions locally @runlocal
自2.8.1版本起HBuilderX支持云函数本地运行，调试云函数更加方便快捷。此外还可以方便批量导入数据及文件，不再受云函数超时限制。
Since version 2.8.1, HBuilderX supports local operation of cloud functions, making it easier and faster to debug cloud functions. In addition, it is convenient to import data and files in batches, and is no longer restricted by the timeout of cloud functions.
**目前只支持本地运行打日志。暂不支持断点debug**
**Currently, it only supports local running and logging. Does not support breakpoint debug at the moment**
**使用方式**
**How ​​to use**
在项目管理器选择要本地运行的云函数，右键选择本地运行。或者打开这个云函数内的文件，按`ctrl+r`回车。
In the project manager, select the cloud function to be run locally, right-click and select run locally. Or open the file in this cloud function and press `ctrl+r` to enter.
- 如果没有安装本地运行插件，按照提示安装即可
- If you have not installed the local running plug-in, just follow the prompts to install it
- 如需配置运行参数请参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runparam)
- If you need to configure running parameters, please refer to: [Configure running test parameters](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runparam)
![本地运行](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/cb5457a0-4b19-11eb-8ff1-d5dcf8779628.jpg)
![Local operation](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/cb5457a0-4b19-11eb-8ff1-d5dcf8779628.jpg)
在云函数编辑器里，按`Ctrl+r`运行快捷键（或点工具栏的运行），可看到运行云函数的若干菜单。`Ctrl+r`然后回车或选`0`，即可高效的在控制台看到运行结果和日志输出。如下图所示：
In the cloud function editor, press `Ctrl+r` to run the shortcut key (or click Run on the toolbar), and you can see several menus for running cloud functions. `Ctrl+r` and then press Enter or select `0`, you can efficiently see the running results and log output on the console. As shown below:
![运行快捷键](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/723ec000-4b1a-11eb-b680-7980c8a877b8.jpg)
![Run Shortcut](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/723ec000-4b1a-11eb-b680-7980c8a877b8.jpg)
云函数目前无法断点debug，只能打印`console.log`看日志。
Cloud functions currently cannot debug with breakpoints, and can only print `console.log` to see the log.
![日志](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/caddd2a0-4b1a-11eb-b680-7980c8a877b8.jpg)
![Log](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/caddd2a0-4b1a-11eb-b680-7980c8a877b8.jpg)
运行云函数时，如需要给云函数传参，除了在前端传参外，在调试阶段，可以通过配置json文件来传测试参数。
When running a cloud function, if you need to pass parameters to the cloud function, in addition to passing the parameters at the front end, you can pass the test parameters through the configuration json file during the debugging phase.
在云函数对应的目录右键可以配置运行测试参数，如下图，选择之后会生成一个形如`${函数名}.param.json`的文件，此文件内容会在云函数`上传并运行`以及`本地运行云函数`时作为参数传入云函数内。详细用法可参考：[配置运行测试参数](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runparam)
Right-click the directory corresponding to the cloud function to configure the running test parameters, as shown in the figure below. After selecting it, a file like `${function name}.param.json` will be generated. The content of this file will be uploaded and run in the cloud function `upload and run` and When `Run cloud function locally`, it is passed into the cloud function as a parameter. For detailed usage, please refer to: [Configure Run Test Parameters](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runparam)


## 调用本地云函数注意事项
## Precautions for calling local cloud functions
**本章节注意事项包括本地运行云函数、客户端连接本地云函数**
**The precautions in this chapter include running cloud functions locally and connecting the client to local cloud functions**
**使用公用模块**
**Use common modules**
本地运行的云函数使用公用模块时需注意：
Note when using public modules for locally running cloud functions:
- 需要在云函数内执行`npm install ../common/xxx`安装公共模块，详细请参考[云函数公用模块](uniCloud/cf-common.md)
- You need to execute `npm install ../common/xxx` in the cloud function to install the common module. For details, please refer to [Cloud Function Common Module](uniCloud/cf-common.md)
- 如果使用`HBuilderX 3.0.0`及以上版本，可以直接在云函数目录右键选择“管理公共模块依赖”进行公共模块的引入
- If you use `HBuilderX 3.0.0` and above, you can directly right-click in the cloud function catalog and select "Manage Public Module Dependencies" to import public modules
- 如果使用到加密的公共模块则此云函数不可本地运行
- If an encrypted public module is used, this cloud function cannot be run locally
- `HBuilderX 3.0.0`版本运行uniCloud项目时，uniCloud本地调试插件会自动进行云函数依赖安装（包括公共模块和package.json里面的其他依赖）
- When running a uniCloud project in `HBuilderX 3.0.0` version, the uniCloud local debugging plugin will automatically install cloud function dependencies (including public modules and other dependencies in package.json)

**时区问题**
**Time zone issue**

uniCloud云端的云函数使用的时区是utc+0，本地运行时使用的是本机时间，中国一般是+8。在使用“时间戳”时两者没有差异，但如果要获取年、月、日、小时要注意时区的差异。
The time zone used by uniCloud cloud functions is utc+0, and the local time is used when running locally, which is generally +8 in China. There is no difference between the two when using "time stamp", but if you want to get the year, month, day, and hour, pay attention to the time zone difference.
以下方式可以获取指定时区的年、月、日、小时，可以参考一下
The following ways can get the year, month, day, hour of the specified time zone, you can refer to it
```js
// 获取偏移后的Date对象，例如utc+x时offset就传x
// Get the offset Date object, for example, when utc+x, offset will pass x
function getOffsetDate (offset) {
  return new Date(
    Date.now() + (new Date().getTimezoneOffset() + (offset || 0) * 60) * 60000
  )
}

// 获取utc+8的小时数
// Get the hours of utc+8
const hour = getOffsetDate(8).getHours()

// 获取时间戳无需使用此方式utc+0时间戳是与utc+8时间戳一致的
// No need to use this method to get the timestamp utc+0 timestamp is consistent with utc+8 timestamp
```

推荐使用`<uni-dateformat>`组件格式化显示日期，[详情](https://ext.dcloud.net.cn/plugin?id=3279)
It is recommended to use the `<uni-dateformat>` component to format the display date, [details](https://ext.dcloud.net.cn/plugin?id=3279)
**调用其他云函数**
**Call other cloud functions**
“本地运行云函数”时云函数内callFunction会调用云端已部署的云函数
When "Run Cloud Function Locally", callFunction in the cloud function will call the cloud function that has been deployed in the cloud
“客户端连接本地云函数时”云函数内callFunction会调用本地云函数
"When the client connects to the local cloud function" callFunction in the cloud function will call the local cloud function
**数据与存储**
**Data and Storage**
请务必注意云函数在本地运行时依然是连接的云端数据库与存储
Please note that the cloud function is still connected to the cloud database and storage when running locally
云函数上传文件到云存储只有腾讯云支持。当然也可以在前端直接上传文件，此时阿里云腾讯云均支持。
Cloud function uploading files to cloud storage is only supported by Tencent Cloud. Of course, you can also upload files directly on the front end. At this time, Alibaba Cloud and Tencent Cloud all support it.


**Nodejs版本**
**Nodejs version**
服务空间所使用的nodejs版本为8.9，本地运行时使用的本地nodejs可能与服务空间的nodejs版本并不一致，在本地测试之后部署到云端也务必测试一下兼容性。
The nodejs version used in the service space is 8.9. The local nodejs used in the local runtime may not be consistent with the nodejs version of the service space. After the local test is deployed to the cloud, you must also test the compatibility.
## 运行云函数时配置运行测试参数@runparam
## Configure running test parameters when running cloud functions @runparam
在云函数的上传运行菜单或右键菜单中，有`配置运行测试参数`的功能。
In the upload operation menu or right-click menu of the cloud function, there is a function of `configure running test parameters`.
可以打开一个json，配置运行参数。配置该json后，运行云函数时会将该json作为云函数调用的上行参数处理，可以在云函数中接收到参数。
You can open a json and configure the operating parameters. After configuring the json, the json will be treated as the uplink parameter of the cloud function call when running the cloud function, and the parameter can be received in the cloud function.
![配置运行参数](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/37245420-4b1b-11eb-b997-9918a5dda011.jpg)
![Configuration operating parameters](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/37245420-4b1b-11eb-b997-9918a5dda011.jpg)
在云函数目录右键运行云函数，也可以在云函数编辑器里，按`Ctrl+r`运行快捷键，或点工具栏的运行
Right-click in the cloud function directory to run the cloud function, or in the cloud function editor, press `Ctrl+r` to run the shortcut key, or click on the toolbar to run
![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/run-function-with-param-1.jpg)

此时云函数运行会携带所配置的运行参数
At this time, the cloud function operation will carry the configured operating parameters
![运行参数](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/84352e10-4b1b-11eb-8ff1-d5dcf8779628.jpg)
![Operating parameters](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/84352e10-4b1b-11eb-8ff1-d5dcf8779628.jpg)
**模拟客户端类型**
**Simulate client type**
如果需要模拟客户端类型可以在运行参数内添加clientInfo字段
If you need to simulate the client type, you can add the clientInfo field in the operating parameters



```
{
  "otherParam": "***",
  "clientInfo":{
    OS: "ios" // 系统类型 ios、android(System type ios, android)
    PLATFORM: "h5" // 客户端类型 app-plus、h5、mp-weixin、mp-alipay等(Client type app-plus, h5, mp-weixin, mp-alipay, etc.)
  }
}
```

## 手机端调用云函数
## Call cloud functions on mobile

在uni-app的前端代码中，通过`uniCloud.callFunction`方法调用云函数。详见[callFunction文档](https://uniapp.dcloud.io/uniCloud/functions?id=callfunction)
In the front-end code of uni-app, cloud functions are called through the `uniCloud.callFunction` method. See [callFunction document](https://uniapp.dcloud.io/uniCloud/functions?id=callfunction) for details
如下代码中，调用了名为`test`的云函数，并发送了`data`的json数据作为上行参数。
In the following code, the cloud function named `test` is called, and the json data of `data` is sent as the uplink parameter.
```javascript
// promise方式
// promise method
uniCloud.callFunction({
    name: 'test',
    data: { a: 1 }
  })
  .then(res => {});

// callback方式
// callback method
uniCloud.callFunction({
	name: 'test',
	data: { a: 1 },
	success(){},
	fail(){},
	complete(){}
});
```

## 手机端看日志
## View log on mobile

uni-app运行在HBuilderX内置浏览器和App环境时，在HBuilderX的控制台中，除了可以看普通手机端日志外，还可以直接看到云端的云函数里打印的console.log日志。
When uni-app runs in the HBuilderX built-in browser and App environment, in the HBuilderX console, in addition to the ordinary mobile phone logs, you can also directly see the console.log log printed in the cloud function of the cloud.
**示例**
**Example**
所执行云函数代码
Cloud function code executed
```javascript
'use strict';
exports.main = async (event, context) => {
	console.log('------------');
	console.log('云函数日志输出(Cloud function log output)');
	console.log('------------');
	return {
		action: 'log demo'
	}
};
```

H5端HBuilderX内置浏览器输出云函数日志，如下图所示（注意：日志在HBuilderX控制台输出）：
The HBuilderX built-in browser on the H5 side outputs the cloud function log, as shown in the following figure (note: the log is output in the HBuilderX console):
![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/uniCloud-function-log-h5.jpg)

App端真机调试输出云函数日志，如下图所示：
App terminal real machine debugging output cloud function log, as shown in the figure below:
![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/uniCloud-function-log.png)


- 如运行到小程序开发工具或外部浏览器，仅能在这些软件的调试控制台查看本地日志，不包含云函数里的console.log。
- If you run into a small program development tool or an external browser, you can only view the local log in the debugging console of these software, excluding the console.log in the cloud function.
uniCloud的[web控制台](https://unicloud.dcloud.net.cn/)可以查看线上云函数的所有运行日志，而不仅仅是开发时的运行日志。
UniCloud's [web console](https://unicloud.dcloud.net.cn/) can view all running logs of online cloud functions, not just running logs during development.
## clientDB - 前端直接操作数据库

uniCloud支持云函数，但其实大多数场景下并不需要写云函数，可以通过clientDB直接操作云数据库。
uniCloud supports cloud functions, but in most scenarios, you do not need to write cloud functions, and you can directly operate cloud databases through clientDB.

1. 在HBuilderX中，uniCloud\database目录下编写数据表的schema文件。上传到uniCloud。
1. In HBuilderX, compile the schema file of the data table in the uniCloud\database directory. Upload to uniCloud.
2. 在前端通过clientDB组件或api，直接读写数据表。
2. Directly read and write data tables through clientDB components or api at the front end.
详细文档另见：[clientDB](https://uniapp.dcloud.io/uniCloud/database)
See also for detailed documentation: [clientDB](https://uniapp.dcloud.io/uniCloud/database)

## 小程序中使用uniCloud的白名单配置
## Use uniCloud whitelist configuration in applets
各家小程序平台，均要求在小程序管理后台配置小程序应用的联网服务器域名，否则无法联网。
Each applet platform requires the configuration of the Internet server domain name of the applet application in the applet management background, otherwise it cannot be connected to the Internet.
使用uniCloud后，开发者将不再需要自己购买、备案域名，直接将uniCloud的域名填写在小程序管理后台即可。
After using uniCloud, developers will no longer need to purchase and record domain names by themselves, and simply fill in the domain name of uniCloud in the mini program management background.
根据下表，在小程序管理后台设置request合法域名、uploadFile合法域名（如没有上传文件业务，可不设置）。下表的域名均为阿里云或腾讯云自有域名，并非DCloud所属域名。
According to the following table, set the request legal domain name and uploadFile legal domain name in the small program management background (if there is no upload file service, you don't need to set it). The domain names in the following table are all owned by Alibaba Cloud or Tencent Cloud, not the domain name of DCloud.
|服务提供商	|request合法域名			|uploadFile合法域名					|download合法域名｜
|Service provider |request legal domain name |uploadFile legal domain name |download legal domain name｜
|:-:		|:-:						|:-:								|:-:|
|阿里云		|api.bspapp.com				|bsppub.oss-cn-shanghai.aliyuncs.com|需要从云存储下载文件的时候才需要配置，不同服务空间域名不同，可以在web控制台查看文件详情里面看到|
|Alibaba Cloud |api.bspapp.com |bsppub.oss-cn-shanghai.aliyuncs.com|You only need to configure when you need to download files from cloud storage. Different service spaces have different domain names. You can view the file details in the web console. To|
|腾讯云		|tcb-api.tencentcloudapi.com|cos.ap-shanghai.myqcloud.com		|需要从云存储下载文件的时候才需要配置，不同服务空间域名不同，可以在web控制台查看文件详情里面看到|
|Tencent Cloud |tcb-api.tencentcloudapi.com|cos.ap-shanghai.myqcloud.com |You only need to configure when you need to download files from cloud storage. Different service spaces have different domain names. You can view the file details in the web console. To|


**如果需要用uni.request请求云存储内的文件，需要将云存储域名（即上表中的download合法域名）配置到request合法域名内**
**If you need to use uni.request to request files in cloud storage, you need to configure the cloud storage domain name (that is, the download legal domain name in the above table) into the request legal domain name**

小程序开发工具的真机预览功能，必须添加上述域名白名单，否则无法调用云函数。模拟器的PC端预览、真机调试不受此影响。
For the real machine preview function of the Mini Program Development Tool, the above-mentioned domain name whitelist must be added, otherwise the cloud function cannot be called. The PC preview of the simulator and the debugging on the real machine are not affected by this.
如果遇到正确配置了合法域名但是依然报`url not in domain list`，请尝试删除手机上的小程序、清理小程序所在的客户端缓存、重启对应的小程序开发工具后重试
If you encounter the correct configuration of the legal domain name but still report `url not in domain list`, please try to delete the applet on the phone, clear the cache of the client where the applet is located, restart the corresponding applet development tool and try again

## H5中使用uniCloud的跨域处理@useinh5
## Use uniCloud cross-domain processing in H5 @useinh5
H5前端js访问云函数，涉及跨域问题，导致前端js无法连接云函数服务器。处理方式如下：。
The H5 front-end js accesses the cloud function, which involves cross-domain issues, and the front-end js cannot connect to the cloud function server. The processing method is as follows:
- 运行到H5端时，使用HBuilderX内置浏览器，可以忽略跨域问题（mac版需2.5.10+）。
- When running to the H5 end, use the HBuilderX built-in browser to ignore cross-domain issues (the mac version requires 2.5.10+).
- 发行到H5端时，需要在uniCloud后台操作，绑定安全域名（在部署云函数的服务空间配置部署h5的域名作为安全域名），否则会因为跨域问题而无法访问。（在`cloudfunctions`目录右键可打开uniCloud后台）
- When publishing to the H5 end, you need to operate in the background of uniCloud and bind a secure domain name (configure the domain name of h5 as a secure domain name in the service space where the cloud function is deployed), otherwise it will not be accessible due to cross-domain issues. (Right-click in the `cloudfunctions` directory to open the uniCloud background)
> 注意跨域配置需要带上端口信息。例如：前端页面运行于：www.xxx.com:5001，跨域配置内配置：www.xxx.com不会对此页面生效，需要配置为：www.xxx.com:5001
> Note that the cross-domain configuration requires port information. For example: the front-end page runs at: www.xxx.com:5001, the configuration in the cross-domain configuration: www.xxx.com will not take effect on this page, it needs to be configured as: www.xxx.com:5001
**uniCloud后台跨域配置：**
**uniCloud background cross-domain configuration:**

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/uniCloud-add-domain.png)

- 如果运行时，想使用外部浏览器运行，方案如下：
- If you want to use an external browser when running, the plan is as follows:
  * 方式1：在uniCloud web控制台绑定测试期的地址为安全域名，如配置：localhost:8080、192.168.0.1:8080（建议直接使用内置浏览器测试）
  * Method 1: Bind the address during the test period to a secure domain name in the uniCloud web console, such as configuration: localhost:8080, 192.168.0.1:8080 (it is recommended to use the built-in browser to test directly)
  * 方式2：在外部浏览器安装跨域插件，详见：[https://ask.dcloud.net.cn/article/35267](https://ask.dcloud.net.cn/article/35267)。要跨域的地址，详见上述文档中小程序配置安全域名章节。
  * Method 2: Install the cross-domain plug-in in an external browser, see: [https://ask.dcloud.net.cn/article/35267](https://ask.dcloud.net.cn/article/35267) . For cross-domain addresses, please refer to the mini program configuration security domain name chapter in the above document for details.
**注意**
**Notice**
- 目前阿里云跨域配置不对云存储及前端网页托管生效，表现为云存储中图片绘制到canvas会[污染画布](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#Using_other_canvas_elements)，前端网页托管的网页不可在iframe中使用
- Currently, Alibaba Cloud's cross-domain configuration does not take effect for cloud storage and front-end web hosting. The performance is that drawing images from cloud storage to canvas will [pollute the canvas](https://developer.mozilla.org/zh-CN/docs/Web/API /Canvas_API/Tutorial/Using_images#Using_other_canvas_elements), the webpage hosted by the front-end webpage cannot be used in an iframe


## cli项目中使用uniCloud
## Use uniCloud in the cli project
如果要在cli项目中使用uniCloud，可以参考以下步骤
If you want to use uniCloud in the cli project, you can refer to the following steps
1. 将cli项目导入`HBuilderX`
1. Import the cli project into `HBuilderX`
2. 在项目根目录（src同级）创建`cloudfunctions-aliyun`或者`cloudfunctions-tcb`目录（HBuilderX 3.0以上版本请创建`uniCloud-aliyun`、`uniCloud-tcb`目录）
2. Create the `cloudfunctions-aliyun` or `cloudfunctions-tcb` directory in the project root directory (src equivalent) (for HBuilderX 3.0 and above, please create the `uniCloud-aliyun` and `uniCloud-tcb` directories)
3. 打开`src/manifest.json`，在`基础配置-->uni-app应用标示`处点击`重新获取`
3. Open `src/manifest.json`, and click `Reacquire` at `Basic Configuration-->uni-app Application Mark`
4. 在步骤2创建的目录右键关联服务空间
4. Right-click the directory created in step 2 to associate the service space
5. 完成
5. Finish

**注意**
**Notice**
- 运行与发行云函数只能使用HBuilderX的菜单，不可使用`package.json`内的命令
- Only the menu of HBuilderX can be used to run and publish cloud functions, and the commands in `package.json` cannot be used
- 如果HBuilderX菜单运行不能满足需求可以考虑自行初始化服务空间[服务空间初始化](uniCloud/init.md)
- If the HBuilderX menu operation cannot meet the requirements, you can consider initializing the service space by yourself [Service Space Initialization](uniCloud/init.md)
**H5前端页面部署问题**
**H5 front-end page deployment problem**
uniCloud支持前端页面部署，在HBuilderX中点发行菜单，生成H5，将生成的前端文件部署在uniCloud的前端网页托管内即可[详情参考](uniCloud/hosting.md)。
uniCloud supports front-end page deployment. Click the release menu in HBuilderX to generate H5, and deploy the generated front-end files in uniCloud's front-end web hosting [for details] (uniCloud/hosting.md).
需要注意的是你仍在[uniCloud web控制台](https://unicloud.dcloud.net.cn) 配置H5安全域名。
Note that you are still configuring the H5 secure domain name in [uniCloud web console](https://unicloud.dcloud.net.cn).

**Tips**
- 虽然uni-app支持vscode等其他ide开发，但因为uniCloud对安全性要求极高，仅支持使用HBuilderX开发。
- Although uni-app supports the development of other IDEs such as vscode, because uniCloud has extremely high security requirements, it only supports HBuilderX development.
## web控制台@webcp
## web console@webcp
web控制台网址：[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)，在HX中对云函数目录点右键，或者在帮助菜单中，均有入口链接。
Web console URL: [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn), right-click the cloud function directory in HX, or in the help menu, both Entry link.

### 编辑数据库数据@editdb
### Edit database data @editdb


在web控制台可以对数据库进行编辑。在json文档中，输入字符串、数字、bool值都是常规的操作。但有2种特殊数据类型，时间和地理位置，在编辑时有特殊的写法，请注意：
The database can be edited in the web console. In json documents, inputting strings, numbers, and bool values are all regular operations. However, there are two special data types, time and geographic location. There are special writing methods when editing. Please note:

#### 添加日期@editdb-date
#### Add date @editdb-date

在web控制台添加/修改数据时，如果输入`"2020-12-02 12:12:12"`会变成字符串，而不是日期格式。此时需通过以下方式添加日期类型数据。
When adding/modifying data in the web console, if you enter `"2020-12-02 12:12:12"`, it will become a string instead of a date format. At this time, the date type data needs to be added in the following way.
<!-- {
  "create_date": {
    "$date": "2020-12-02 12:12:12" // 添加utc+8时区对应的日期对象作为create_date(Add the date object corresponding to the utc+8 time zone as create_date)
  }
} -->

```js
{
  "create_date": {
    "$date": 1606910053154 // 添加此时间戳对应的日期对象作为create_date(Add the date object corresponding to this timestamp as create_date)
  }
}
```
注：时间戳无需如此复杂。时间戳只需直接输入不加引号的数字即可。
Note: The timestamp does not need to be so complicated. You only need to directly enter the number without quotation marks for the timestamp.

#### 添加地理位置点@editdb-geopoint
#### Add geographic point @editdb-geopoint
```js
// 将location字段设置为经度116、纬度38的地理位置点
// Set the location field to a geographic location point with longitude 116 and latitude 38
{
  "location": {
    "type": "Point",
    "coordinates": [116,38]
  }
}
```
