## 简介
## Introduction
**本文档是腾讯云自定义登录的配套权限说明问题。uniCloud中并不推荐这种用法，[详见](/uniCloud/authentication)。**
**This document is a description of the supporting permissions for Tencent Cloud custom login. This usage is not recommended in uniCloud, [see details](/uniCloud/authentication).**
如需在前端直接删除云存储，那么为了数据安全，需要一套权限规则，开发者可以在uniCloud web控制台上自定义安全规则，限制**客户端**对云存储的访问权限。本文档主要介绍如何配置安全规则以及表达式的相关说明。
If you need to delete cloud storage directly on the front end, for data security, you need a set of permission rules. Developers can customize security rules on the uniCloud web console to restrict the **client**'s access to cloud storage. This document mainly introduces how to configure security rules and related descriptions of expressions.
**注意**
**Notice**
- 权限控制仅针对客户端
- Access control is only for the client
## 安全规则示例
## Examples of security rules
**规则示例**
**Rules example**

```
// 云存储
// cloud storage
// 所有人可读，仅创建者可写
// Everyone can read, only the creator can write
{
  "read": true,
  "write": "resource.openid == auth.uid"
}
// 非匿名用户可读，仅创建者可写
// Readable by non-anonymous users, only the creator can write
{
  "read": "auth.loginType != 'ANONYMOUS'",
  "write": "resource.openid == auth.uid"
}
```

以上 json 配置中解释如下：
The explanation in the above json configuration is as follows:
- key：指用户的操作类型。
- key: refers to the type of user's operation.
- value：指一个表达式。
- value: refers to an expression.
## 配置说明
## Configuration instructions
开发者可以在uniCloud控制台设置云存储权限。如下图所示，可以使用默认的四条规则，也可以点击`切换到安全规则`自行配置JSON格式的权限规则。
Developers can set cloud storage permissions in the uniCloud console. As shown in the figure below, you can use the default four rules, or you can click `Switch to Security Rules` to configure your own permission rules in JSON format.
**关于创建者的说明**
**Notes about creator**
- 如果没有使用云token，那么每次客户端开启都会让用户匿名登录，即每次用户都会拥有一个临时身份。如果用户在一个临时身份下上传了文件，这个文件的创建者就是这个临时身份，用户重新打开应用再次获取的临时身份无法确保与上次的临时身份一致。如果需要配置创建者权限，建议使用云token。
- If the cloud token is not used, the user will be logged in anonymously every time the client is turned on, that is, every time the user will have a temporary identity. If the user uploads a file under a temporary identity, the creator of the file is the temporary identity, and the temporary identity obtained by the user after reopening the application cannot be guaranteed to be consistent with the last temporary identity. If you need to configure creator permissions, it is recommended to use cloud tokens.
![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/uniCloud-tcb-storage-policy.png)

## 云存储操作类型
## Cloud storage operation type
|操作类型	|说明											|默认值	|
|Operation Type |Description |Default Value |
|:-:			|:-:											|:-:		|
|read			|读取文件，例如：getTempFileURL	|-			|
|read |Read the file, for example: getTempFileURL |- |
|write		|上传/覆盖文件，删除文件	|-			|
|write |Upload/overwrite files, delete files |- |

## 表达式
## Expression
表达式是伪代码的语句，配置的时候不能过长。
The expression is a pseudo-code statement and cannot be too long when configured.
### 变量
### Variables
**全局变量**
**Global Variables**
|变量名		|类型		|说明																				|
|Variable name |Type |Description |
|:-:			|:-:		|:-:																				|
|auth			|object	|用户登录信息，字段说明参见下文							|
|auth |object |User login information, see below for field descriptions |
|now			|number	|当前时间的时间戳														|
|now |number |The timestamp of the current time |
|resource	|object	|云存储资源																	|
|resource |object |Cloud storage resources |
|doc			|any		|数据库文档资源（目前不开放数据库权限配置）	|
|doc |any |Database documentation resources (database permission configuration is not currently open) |


**auth**

|字段名		|类型		|说明																												|
|Field name |Type |Description |
|:-:			|:-:		|:-:																												|
|loginType|string	|登录方式，取值为ANONYMOUS（匿名登录）、CUSTOM（自定义登录）|
|loginType|string |Login type, the value is ANONYMOUS (anonymous login), CUSTOM (custom login)|
|uid			|string	|用户唯一 ID（对应云存储的resource.openid），见下面示例			|
|uid |string |User unique ID (corresponding to resource.openid of cloud storage), see the example below |
**resource**

|字段名	|类型		|说明										|
|Field name |Type |Description |
|:-:		|:-:		|:-:										|
|openid	|string	|资源创建者的用户唯一ID	|
|openid |string |The unique user ID of the resource creator |

```
//云存储
//Cloud storage
{
  "read": "resource.openid == auth.uid", 
  //仅创建者可读
  //Only readable by the creator
  "write": "resource.openid == auth.uid" 
  //仅创建者可写
  //Only the creator can write
}
```

### 运算符
### Operator
|运算符				|说明																								|示例																							|示例解释（集合查询）														|
|Operator |Description |Example |Example explanation (set query) |
|:-:					|:-:																								|:-:																							|:-:																						|
|==						|等于																								|auth.uid == 'zzz'																|用户的 uid 为 zzz															|
|== |Equal to |auth.uid =='zzz' |The user's uid is zzz |
|!=						|不等于																							|auth.uid != 'zzz'																|用户的 uid 不为 zzz														|
|!= |Not equal to |auth.uid !='zzz' |The user's uid is not zzz |
|>						|大于																								|doc.age>10																				|查询条件的 age 属性大于10											|
|> |Greater than |doc.age>10 |The age attribute of the query condition is greater than 10 |
|>=						|大于等于																						|doc.age>=10																			|查询条件的 age 属性大于等于10									|
|>= |Greater than or equal to |doc.age>=10 |The age attribute of the query condition is greater than or equal to 10 |
|<						|小于																								|doc.age>10																				|查询条件的 age 属性小于10											|
|< |Less than |doc.age>10 |The age attribute of the query condition is less than 10 |
|<=						|小于等于																						|doc.age>=10																			|查询条件的 age 属性小于等于10									|
|<= |Less than or equal to |doc.age>=10 |The age attribute of the query condition is less than or equal to 10 |
|in						|存在于集合中																				|auth.uid in ['zzz','aaa']												|用户的 uid 是['zzz','aaa']中的一个							|
|in |Exists in the set |auth.uid in ['zzz','aaa'] |The user's uid is one of ['zzz','aaa'] |
|!(xx in [])	|不存在于集合中，使用 in 的方式描述 !(a in [1,2,3])	|!(auth.uid in ['zzz','aaa'])											|用户的 uid 不是['zzz','aaa']中的任何一个				|
|!(xx in []) |does not exist in the set, use in to describe! (a in [1,2,3]) |!(auth.uid in ['zzz','aaa']) | The user's uid is not any of ['zzz','aaa'] |
|&&						|与																									|auth.uid == 'zzz' && resource.openid == 'xxx'		|用户的 uid 为 zzz 并且资源的创建者id为 xxx	|
|&& |and |auth.uid =='zzz' && resource.openid =='xxx' |The user's uid is zzz and the resource creator id is xxx |
|&#124;&#124;	|或者																								|auth.uid == 'zzz' &#124;&#124; auth.uid == 'xxx'	|用户的 uid 为 zzz 或者用户的 uid 为 xxx				|
|&#124;&#124; | or |auth.uid =='zzz' &#124;&#124; auth.uid =='xxx' |The user's uid is zzz or the user's uid is xxx |
|.						|对象元素访问符																			|auth.uid																					|用户的 uid																			|
|. |Object element accessor |auth.uid |User's uid |
**注意**
**Notice**
- 比较运算符的右值必须为数值。
- The rvalue of the comparison operator must be a numeric value.
