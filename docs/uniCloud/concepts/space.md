一个服务空间对应一整套独立的云开发资源，包括数据库、存储空间、云函数等资源。服务空间之间彼此隔离。
A service space corresponds to a set of independent cloud development resources, including resources such as databases, storage spaces, and cloud functions. The service spaces are isolated from each other.

每个服务空间都有一个全局唯一的space ID。
Each service space has a globally unique space ID.

开发者可在 HBuilderX 中新建服务空间，如下：
Developers can create new service spaces in HBuilderX as follows:

HBuilderX 3.0起版本，在云函数目录 `uniCloud` 右键菜单创建服务空间
Starting from HBuilderX 3.0, create a service space in the right-click menu of the cloud function directory `uniCloud`

![创建服务空间1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b16f9740-4c05-11eb-8a36-ebb87efcf8c0.jpg)
![Create Service Space 1](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b16f9740-4c05-11eb-8a36-ebb87efcf8c0.jpg)

HBuilderX 3.0之前版本，在云函数目录 `cloudfunctions` 右键菜单创建服务空间
Before HBuilderX 3.0, create a service space in the right-click menu of the cloud function directory `cloudfunctions`

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-01.png)


或者在uniCloud的web控制台[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn) 创建服务空间。
Or create a service space in uniCloud's web console [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn).

开发者需先为项目绑定服务空间，然后才能上传云函数、操作服务空间下的数据库、存储等资源。
Developers need to bind the service space for the project before uploading cloud functions, operating databases, storage and other resources in the service space.