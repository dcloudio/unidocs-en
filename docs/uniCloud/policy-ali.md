## 简介
## Introduction
云开发提供了一套简明易懂的JSON语法用来控制**客户端**对资源的访问，类似于身份验证体系里的IAM或者网络权限中的ACL。您可以在控制台上通过修改默认权限规则来管理数据表的权限。
Cloud development provides a set of concise and easy-to-understand JSON syntax to control the access of the **client** to resources, similar to the IAM in the authentication system or the ACL in network permissions. You can manage the permissions of the data table by modifying the default permission rules on the console.
**注意**
**Notice**
- 权限控制仅针对客户端
- Access control is only for the client
**阿里云侧目前实现为由开发者自行控制登录状态，所以auth相关的权限判断条件不会生效**
**Alibaba Cloud is currently implemented as the developer's own control of the login status, so auth-related permission judgment conditions will not take effect**
## 云数据库
## Cloud database
开发者可以在uniCloud控制台设置数据库权限，如下图所示
Developers can set database permissions in the uniCloud console, as shown in the figure below
**此处需补充uniCloud控制台截图【uniCloud替换标记】**
**A screenshot of uniCloud console needs to be added here [uniCloud replacement mark]**
**目前实现端上不可直接访问数据库，推荐将数据表权限设置为以下形式**
**Currently, it is not possible to directly access the database on the terminal. It is recommended to set the data table permissions to the following form**

```
{
  "db": {
    "*": {
      ".read": false,
      ".write": false,
      "*": false
    }
  }
}
```

## 云存储
## Cloud storage

阿里侧端上直接上传文件到云存储的功能正在完善中，开发者可以先将云存储配置为客户端不可读写
The function of directly uploading files to cloud storage on the Ali side is being improved. Developers can first configure the cloud storage to be non-readable and writable on the client side.
**权限配置示例**
**Permission configuration example**
```
{
  "file": {
    "*": {
      "*": false
    }
  }
}
```



