#### 云函数公用模块
#### Cloud function public module

云函数支持公共模块。多个云函数的共享部分，可以抽离为公共模块，然后被多个云函数引用。
Cloud functions support public modules. The shared part of multiple cloud functions can be extracted as a common module and then referenced by multiple cloud functions.

> 版本要求：HBuilderX 2.6.6+
> Version requirement: HBuilderX 2.6.6+

以下面的目录结构为例，介绍一下如何使用。
Take the following directory structure as an example to introduce how to use it.

```
cloudfunctions
  ├─common // 云函数公用模块目录(Cloud function public module directory)
  |  └─hello-common // 云函数公用模块(Cloud function public module)
  |     ├─package.json
  |     └─index.js // 公用模块代码，可以不使用index.js，修改 package.json 内的 main 字段可以指定此文件名(Common module code, index.js can be omitted, the file name can be specified by modifying the main field in package.json)
  └─use-common // 使用公用模块的云函数(Cloud functions using common modules)
     ├─package.json // 在 use-common 目录执行 npm init -y 生成(Execute npm init -y in the use-common directory to generate)
     └─index.js // 云函数入口文件(Cloud function entry file)
```
**创建并引入公用模块**
**Create and import common modules**

1. 在`cloudfunctions`目录下创建`common`目录
1. Create a `common` directory under the `cloudfunctions` directory
2. 在`common`目录右键创建公用模块目录（本例中为`hello-common`，见下方示例图），会自动创建入口`index.js`文件和`package.json`，**不要修改此package.json的name字段**
2. Right-click the `common` directory to create a common module directory (in this example, it is `hello-common`, see the example diagram below), the entry `index.js` file and `package.json` will be automatically created, **do not modify The name field of this package.json**
3. 在`hello-common`右键上传公用模块
3. Right-click on `hello-common` to upload common modules
4. 在要引入公用模块的云函数目录（本例中为`use-common`）执行`npm init -y`生成`package.json`文件
4. Execute `npm init -y` in the cloud function directory (`use-common` in this example) to import the common module to generate the `package.json` file
5. 在`use-common`目录执行`npm install ../common/hello-common`引入`hello-common`模块
5. In the `use-common` directory, execute `npm install ../common/hello-common` to introduce the `hello-common` module
**在`HBuilderX 3.0.0`以上版本上述步骤4、5可以在云函数上右键选择`管理公共模块依赖`来实现，如下图**
**In `HBuilderX 3.0.0` and above, the above steps 4 and 5 can be realized by right-clicking on the cloud function and selecting `Manage Common Module Dependencies`, as shown in the figure below**
![管理公共模块依赖](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/fc2da708-304e-4c92-9a0a-dc48fa5e73ed.png)
![Manage public module dependencies](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/fc2da708-304e-4c92-9a0a-dc48fa5e73ed.png)
公共模块依赖其他公共模块同理
The same is true for public modules that depend on other public modules
![创建公用模块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-common-module.jpg)
![Create common module](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/create-common-module.jpg)

**注意事项**
**Precautions**

- 使用npm之前要安装nodejs，[nodejs下载](http://nodejs.cn/download/)
- Install nodejs before using npm, [nodejs download](http://nodejs.cn/download/)
- 如需修改公用模块需要在`common`目录下修改，修改之后不需要重新执行`npm install`。
- If you need to modify the common module, you need to modify it in the `common` directory. After the modification, you don't need to execute `npm install` again.
- 如果要更新所有依赖某公用模块的云函数，可以在`common`目录下的公用模块目录（本例中为`hello-common`）右键选择`更新依赖本模块的云函数`
- If you want to update all cloud functions that depend on a common module, you can right-click the common module directory under the `common` directory (`hello-common` in this example) and select `Update cloud functions that depend on this module`
- 公用模块命名不可与nodejs内置模块重名
- The name of the public module cannot be the same as the nodejs built-in module
- 安装公用模块时不推荐使用yarn，与`npm install`表现不一样，yarn不会创建软链接而是直接拷贝文件到node_modules，这样会导致修改公用模块云函数内引用的公用模块不会同步修改
- Yarn is not recommended when installing public modules. Unlike `npm install`, yarn does not create soft links but directly copies files to node_modules. This will cause the public modules referenced in the public module cloud function to be modified without synchronization.
- 从插件市场导入或者其他地方复制项目可能会导致`npm install`创建的软链接失效，如果遇到这种情况请删除`node_modules`和`package-lock.json`重新`npm install`
- Importing from the plug-in market or copying projects from other places may cause the soft link created by `npm install` to become invalid. If you encounter this situation, please delete `node_modules` and `package-lock.json` and re-`npm install`
![更新公用模块](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/update-common-module.jpg)
![Update common module](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/update-common-module.jpg)

**使用公用模块**
**Use common modules**

仍以上面的目录为例，在公用模块内`exports`，在云函数内`require`即可。示例代码如下：
Still taking the above directory as an example, `exports` in the public module, and `require` in the cloud function. The sample code is as follows:

```js
// common/hello-common/index.js
function getVersion() {
  return '0.0.1'
}
module.exports = {
  getVersion,
  secret: 'your secret'
}
```

```js
// use-common/index.js
'use strict';
const {
  secret,
  getVersion
} = require('hello-common')
exports.main = async (event, context) => {
  let version = getVersion()
  return {
    secret,
    version
  }
}
```

如果仅需要导出一个function还可以使用以下写法
If you only need to export one function, you can also use the following wording

```js
// common/hello-common/index.js
module.exports = function(e){
  return e
}
```

```js
// use-common/index.js
'use strict';
const echo = require('hello-common')
exports.main = async (event, context) => {
  let eventEcho = echo(event)
  return {
    eventEcho
  }
}
```
