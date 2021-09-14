## 基础概念
## Basic concepts
`uniCloud`提供了一个 JSON 格式的文档型数据库。顾名思义，数据库中的每条记录都是一个 JSON 格式的文档。
`uniCloud` provides a document database in JSON format. As the name implies, each record in the database is a JSON formatted document.
它是nosql非关系型数据库，如果您之前熟悉sql关系型数据库，那么两者概念对应关系如下表：
It is a nosql non-relational database. If you are familiar with sql relational database before, the corresponding relationship between the two concepts is as follows:
|关系型					|JSON 文档型							|
|Relational |JSON Document |
|:-							|:-												|
|数据库 database|数据库 database					|
|Database database|Database database |
|表 table				|集合 collection。但行业里也经常称之为“表”。无需特意区分	
		|Table table |Collection collection. But the industry is often referred to as a "table". No need to make a special distinction |		|
|行 row					|记录 record / doc				|
|row row |record record / doc |
|字段 column		|字段 field								|
|Field column |Field field |
|使用sql语法操作|使用MongoDB语法或jql操作	|
|Use sql syntax operation|use MongoDB syntax or jql operation|
一个`uniCloud`服务空间，有且只有一个数据库。一个数据库支持多个集合（表）。一个集合可以有多个记录。每个记录可以有多个字段。
A `uniCloud` service space has one and only one database. A database supports multiple collections (tables). A collection can have multiple records. Each record can have multiple fields.
例如，数据库中有一个集合，名为user，存放用户信息。集合user的数据内容如下：
For example, there is a collection in the database named user, which stores user information. The data content of the set user is as follows:

```json
{"name":"张三","tel":"13900000000"}
{"name":"李四","tel":"13911111111"}
```

上述数据中，每行数据表示一个用户的信息，被称之为“记录(record/doc)”。name和tel称之为“字段(field)”。而“13900000000”则是第一条记录的字段tel的值。
In the above data, each row of data represents a user's information, which is called "record/doc". The name and tel are called "fields". And "13900000000" is the value of the field tel in the first record.
每行记录，都是一个完整的json文档，获取到记录后可以使用常规json方式操作。但集合并非json文档，集合是多个json文档的汇总，获取集合需要使用专门的API。
Each line of record is a complete json document. After obtaining the record, you can use the normal json method to operate. But a collection is not a json document, a collection is a collection of multiple json documents, and a special API is required to obtain the collection.
与关系型数据库的二维表格式不同，json文档数据库支持不同记录拥有不同的字段、支持多层嵌套数据。
Unlike the two-dimensional table format of a relational database, a json document database supports different records with different fields and supports multiple levels of nested data.
仍然以user集合举例，要在数据库中存储每个人的每次登录时间和登录ip，则变成如下：
Still taking the user set as an example, to store each person's login time and login ip in the database, it becomes as follows:

```json
{
	"name":"张三","tel":"13900000000","login_log":[
		{"login_date":1604186605445,"login_ip":"192.168.1.1"},
		{"login_date":1604186694137,"login_ip":"192.168.1.2"}
	]
}
{"name":"李四","tel":"13911111111"}
```

上述数据表示张三登录了2次，login_date里的值是时间戳(timestamp)格式，后续会讲解timestamp。而李四没有登录过。
The above data indicates that Zhang San has logged in twice, and the value in login_date is in timestamp format. Timestamp will be explained later. And Li Si has not logged in.
可以看出json文档数据库相对于关系型数据库的灵活，李四可以没有login_log字段，也可以有这个字段但登录次数记录与张三不同。
It can be seen that the json document database is more flexible than the relational database. Li Si may not have the login_log field, or it may have this field. However, the number of login records is different from that of Zhang San.
_此处仅为举例，实际业务中，登录日志单独存放在另一个集合更好_
_This is just an example. In actual business, it is better to store the login logs separately in another collection_
对于初学者，如果不了解数据库设计，可以参考[opendb](https://gitee.com/dcloud/opendb)，已经预置了大量常见的数据库设计。
For beginners, if you don’t understand database design, you can refer to [opendb](https://gitee.com/dcloud/opendb), which has already preset a large number of common database designs.
对于不熟悉传统数据库，但掌握json的js工程师而言，uniCloud的云数据库更亲切，没有传统数据库高昂的学习成本。
For js engineers who are not familiar with traditional databases but master json, uniCloud's cloud database is more cordial and does not have the high learning costs of traditional databases.
在uniCloud web控制台新建表时，在下面的模板中也可以选择各种`opendb`表模板，直接创建。
When creating a table in the uniCloud web console, you can also select various `opendb` table templates in the following templates and create them directly.


**字段的值，支持以下类型：**
**The value of the field, supports the following types:**
* String：字符串
* String: string
* Number：数字
* Number: Number
* Object：对象
* Object: Object
* Array：数组
* Array: array
* Bool：布尔值
* Bool: Boolean value
* GeoPoint：地理位置点
* GeoPoint: geographic point
* GeoLineStringL: 地理路径
* GeoLineStringL: geographic path
* GeoPolygon: 地理多边形
* GeoPolygon: Geographic polygon
* GeoMultiPoint: 多个地理位置点
* GeoMultiPoint: multiple geographic points
* GeoMultiLineString: 多个地理路径
* GeoMultiLineString: multiple geographic paths
* GeoMultiPolygon: 多个地理多边形
* GeoMultiPolygon: Multiple geographic polygons
* Date：时间
* Date: time
* Null：相当于一个占位符，表示一个字段存在但是值为空。
* Null: equivalent to a placeholder, indicating that a field exists but the value is empty.

DB Schema中还扩展了其他字段类型，但其实都是基本类型的扩展，比如file类型其实是一种特殊的object，而password类型是一种特殊的string类型。
Other field types are also extended in DB Schema, but they are all extensions of basic types. For example, the file type is actually a special object, and the password type is a special string type.
uniCloud同时支持阿里云和腾讯云，它们的数据库大体相同，有细微差异。阿里云的数据库是mongoDB4.0，腾讯云则使用自研的文档型数据库（兼容mongoDB 4.0版本）。uniCloud基本抹平了不同云厂商的差异，有差异的部分会在文档中单独标注。
uniCloud supports both Alibaba Cloud and Tencent Cloud, and their databases are roughly the same with slight differences. Alibaba Cloud's database is mongoDB4.0, while Tencent Cloud uses a self-developed document database (compatible with mongoDB 4.0 version). uniCloud has basically smoothed out the differences between different cloud vendors, and the differences will be marked separately in the document.
如果想在云函数连接其他数据库，如mysql/redis，用法和nodejs连接这些数据库是一样的。插件市场已经有人提供了插件，见下。但注意这些用法推荐用于数据导入，主业务开发不建议这么使用。因为其他服务器上的数据库和云函数环境物理上不在一起，连接会比较慢。
If you want to connect to other databases in the cloud function, such as mysql/redis, the usage is the same as nodejs to connect to these databases. Someone has already provided plug-ins in the plug-in market, see below. But note that these usages are recommended for data import, not recommended for main business development. Because the database and cloud function environment on other servers are not physically together, the connection will be slower.
- [云函数连接Mysql数据库示例](https://ext.dcloud.net.cn/plugin?id=1925)
- [Example of connecting to Mysql database by cloud function](https://ext.dcloud.net.cn/plugin?id=1925)
- [云函数连接Redis数据库示例](https://ext.dcloud.net.cn/plugin?id=1846)
- [Example of Cloud Function Connection to Redis Database](https://ext.dcloud.net.cn/plugin?id=1846)

## 操作数据库的2种方法
## 2 ways to manipulate the database
云数据库支持通过云函数访问，也支持在客户端访问云数据库。
The cloud database supports access through cloud functions, and also supports access to the cloud database on the client.
- 云函数操作数据库是较为传统的开发方式，使用nodejs写云函数、使用传统的MongoDB的API操作云数据库。
- Cloud function operation database is a more traditional development method, using nodejs to write cloud functions and traditional MongoDB API to operate cloud databases.
- 客户端访问云数据库，称为[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)。这种开发方式可大幅提升开发效率，避免开发者开发服务器代码，并且支持更易用的`jql`语法操作数据库，是更为推荐的开发方式。[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)有单独一套权限和字段值控制系统，无需担心数据库安全。（使用[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)推荐HBuilderX 2.9.5以上版本。2.9.5以下的版本需单独下载插件，并且不支持`jql`，不再推荐使用。）
- The client accesses the cloud database, which is called [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb). This development method can greatly improve development efficiency, avoid developers from developing server code, and support the easier-to-use `jql` syntax to manipulate the database, which is a more recommended development method. [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb) has a separate set of permissions and field value control system, no need to worry about database security. (Using [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb) recommends HBuilderX 2.9.5 and above. Versions below 2.9.5 need to download the plug-in separately, and do not support `jql`, no longer Recommended Use.)
不管使用哪种方法，都有很多公共的概念或功能。本文档将讲述这些公共的内容。
No matter which method is used, there are many common concepts or functions. This document will describe these common contents.
同时左侧导航有2种方法的专项链接，描述它们各自特有的功能。
At the same time, there are two special links in the left navigation, describing their respective unique functions.
- [云函数使用传统MongoDB语法操作数据库](uniCloud/cf-database)
- [Cloud functions use traditional MongoDB syntax to manipulate databases](uniCloud/cf-database)
- [前端操作数据库，clientDB和jql](uniCloud/clientdb)
- [Front-end operation database, clientDB and jql] (uniCloud/clientdb)

## 获取数据库对象@database
## Get database object @database
想要通过代码操作数据库，第一步要获取服务空间里的数据库对象。
To manipulate the database through code, the first step is to obtain the database objects in the service space.
不管云函数还是前端，获取数据库连接都是如下写法。前端写法需2.9.5起支持。
Regardless of the cloud function or the front-end, access to the database connection is written as follows. The front-end writing needs to be supported from 2.9.5 onwards.

```js
const db = uniCloud.database(); //代码块为cdb(The code block is cdb)
```

js中敲下代码块`cdb`，即可快速输入上述代码。
Type the code block `cdb` in js to quickly enter the above code.
**DBOptions参数说明**
**DBOptions parameter description**
> DBOptions仅腾讯云在云函数内可用
> DBOptions is only available in Tencent Cloud in cloud functions
|字段		|类型		|必填	|描述											|平台差异说明	|
|Field |Type |Required |Description |Platform difference description |
|:-:		|:-:		|:-:	|:-:											|:-:					|
|spaceId|String	|否		|同一账号下的，服务空间ID	|仅腾讯云支持	|
|spaceId|String |No |Service space ID under the same account |Only supported by Tencent Cloud |
```js
// 如果ID为tcb-space-demo的服务空间也在你的账号下，可以通过这种方式访问tcb-space-demo的数据库。调用此接口的服务空间和tcb-space-demo对应的服务空间均为腾讯云才可以正常使用
// If the service space with ID tcb-space-demo is also under your account, you can access the database of tcb-space-demo in this way. The service space that calls this interface and the service space corresponding to tcb-space-demo can be used normally by Tencent Cloud.
const db = uniCloud.database({
  spaceId: 'tcb-space-demo'
});
```

 
## 创建一个集合/数据表@createCollection
## Create a collection/data table @createCollection
新建的服务空间，没有数据表。需要首先创建集合/数据表。
There is no data table in the newly created service space. The collection/data table needs to be created first.
可以在uniCloud的web控制台([https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn))在web页面创建数据表，也可以通过代码创建数据表。
You can create a data table on the web page of uniCloud's web console ([https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)), or you can create a data table through code.
通过代码创建数据表的方式，阿里云和腾讯云有差别：
There are differences between Alibaba Cloud and Tencent Cloud in the way of creating data tables through code:
- 阿里云
- Ali Cloud
调用add方法，给某数据表新增数据记录时，如果该数据表不存在，会自动创建该数据表。如下代码给table1数据表新增了一条数据，如果table1不存在，会自动创建。
When calling the add method to add data records to a data table, if the data table does not exist, the data table will be created automatically. The following code adds a new piece of data to the table1 data table. If table1 does not exist, it will be created automatically.

```js
const db = uniCloud.database();
db.collection("table1").add({name: 'Ben'})
```

- 腾讯云
- Tencent Cloud

腾讯云提供了专门的创建数据表的API，此API仅支持云函数内运行，不支持clientDB调用。
Tencent Cloud provides a special API for creating data tables. This API only supports running in cloud functions and does not support clientDB calls.
```js
const db = uniCloud.database();
db.createCollection("table1")
```

**注意**
**Notice**
* 如果数据表已存在，腾讯云调用createCollection方法会报错
* If the data table already exists, Tencent Cloud will report an error when calling the createCollection method
* 腾讯云调用collection的add方法不会自动创建数据表，不存在的数据表会报错
* Tencent Cloud will not automatically create a data table when calling the add method of collection, and an error will be reported if a data table does not exist
* 阿里云没有createCollection方法
* Alibaba Cloud does not have a createCollection method
## 集合/数据表的3个组成部分
## The 3 components of the collection/data table
每个数据表，其实包含3个部分：
Each data table actually contains 3 parts:
- data：数据内容
- data: data content
- index：索引
- index: index
- schema：数据表格式定义
- schema: data table format definition
在uniCloud的web控制台可以看到一个数据表的3部分内容。
You can see 3 parts of a data table in the uniCloud web console.


### 数据内容@dbdata
### Data content @dbdata
data很简单，就是存放的数据记录(record)。
Data is very simple, it is the stored data record (record).
实际上，创建一条新记录，是不管在web控制台创建，还是通过API创建，每条记录都会自带一个`_id`字段用以作为该记录的唯一标志。
In fact, when creating a new record, whether it is created in the web console or through the API, each record will have its own `_id` field as the unique identifier of the record.
`_id`字段是每个数据表默认自带且不可删除的字段。同时，它也是数据表的索引。
The `_id` field is a default field that cannot be deleted in each data table. At the same time, it is also the index of the data table.
阿里云使用的是标准的mongoDB，`_id`是自增的，后创建的记录的`_id`总是大于先生成的`_id`。传统数据库的自然数自增字段在多物理机的大型数据库下很难保持同步，大型数据库均使用`_id`这种长度较长、不会重复且仍然保持自增规律的方式。
Alibaba Cloud uses standard mongoDB, `_id` is self-incremented, and the `_id` of the record created later is always greater than the `_id` generated first. The natural number auto-increment fields of traditional databases are difficult to keep in sync under large databases with multiple physical machines. Large databases all use `_id`, which is a long, non-repetitive, and still maintains auto-increment law.
**腾讯云使用的是兼容mongoDB的自研数据库，`_id`并非自增**
**Tencent Cloud uses a self-developed database compatible with mongoDB, `_id` is not self-increasing**
插入/导入数据时也可以自行指定`_id`而不使用自动生成的`_id`，这样可以很方便的将其他数据库的数据迁移到uniCloud云数据库
When inserting/importing data, you can also specify `_id` by yourself instead of using the automatically generated `_id`, which can easily migrate data from other databases to uniCloud cloud database


### 数据库索引@dbindex
### Database index @dbindex
所谓索引，是指在数据表的众多字段中挑选一个或多个字段，让数据库引擎优先处理这些字段。设置为索引的字段，在通过该字段查询记录时可以获得更快的查询速度。但设置过多索引也不合适，会造成数据新增和删除变慢。
The so-called index refers to the selection of one or more fields from the many fields in the data table, so that the database engine will give priority to these fields. Set as the index field, you can get faster query speed when querying records through this field. However, setting too many indexes is also inappropriate, which will slow down data addition and deletion.
一个数据表可以有多个字段被设为索引。
A data table can have multiple fields set as indexes.
索引分唯一型和非唯一型。
Indexes are divided into unique and non-unique types.
唯一型索引要求整个数据表多个记录的该字段的值不能重复。比如`_id`就是唯一型索引。
The unique index requires that the value of this field in multiple records of the entire data table cannot be repeated. For example, `_id` is a unique index.
假使有2个人都叫“张三”，那么他们在user数据表里的区分就是依靠不同的`_id`来区分。
If there are two people named "Zhang San", then their distinction in the user data table is based on different `_id` to distinguish.
如果我们要根据name字段来查询，为了提升查询速度，此时可以把name字段设为非唯一索引。
If we want to query based on the name field, in order to improve the query speed, the name field can be set as a non-unique index at this time.
索引内容较多，还有“组合索引”、“稀疏索引”、“地理位置索引”、“TTL索引”等概念。有单独的文档详细讲述索引，另见：[数据库索引](/uniCloud/db-index)
The index content is more, and there are concepts such as "combined index", "sparse index", "geographic index", "TTL index" and so on. There is a separate document that describes the index in detail, see also: [Database Index](/uniCloud/db-index)

**在web控制台添加上述索引**
**Add the above index in the web console**

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/fca53140-1d91-11eb-880a-0db19f4f74bb.jpg)

**注意**
**Notice**
- 如果记录中已经存在多个记录某字段相同的情况，那么将该字段设为唯一型索引会失败。
- If there are multiple records with the same field in the record, setting the field as a unique index will fail.
- 如果已经设置某字段为唯一索引，在新增和修改记录时如果该字段的值之前在其他记录已存在，会失败。
- If a field has been set as a unique index, when adding and modifying records, if the value of the field already exists in other records, it will fail.
- 假如记录中不存在某个字段，则对索引字段来说其值默认为 null，如果该索引字段设为唯一型索引，则不允许存在两个或以上的该字段为null或不存在该字段的记录。此时需要设置稀疏索引来解决多个null重复的问题
- If a field does not exist in the record, the value of the index field is null by default. If the index field is set as a unique index, two or more fields are not allowed to be null or do not exist. record of. At this time, you need to set up a sparse index to solve the problem of multiple null repetitions

### 数据表格式定义@dbschema
### Data table format definition @dbschema
`DB Schema`是集合的表结构描述。描述数据表有哪些字段、值域类型是什么、是否必填、数据操作权限等很多内容。
`DB Schema` is the description of the table structure of the collection. Describe which fields are in the data table, what is the type of value range, whether it is required, data operation permissions, etc.
因为json文档数据库的灵活性，data数据的字段可以不在schema的描述范围内。
Because of the flexibility of the json document database, the fields of the data data may not fall within the description scope of the schema.
`DB Schema`更多是为搭配clientDB使用的，如果使用clientDB则需要详细阅读`DB Schema`的文档。
`DB Schema` is more for use with clientDB. If you use clientDB, you need to read the documentation of `DB Schema` in detail.
`DB Schema`涉及内容较多，另见文档：[https://uniapp.dcloud.io/uniCloud/schema](uniCloud/schema)
`DB Schema` involves more content, see also the document: [https://uniapp.dcloud.io/uniCloud/schema](uniCloud/schema)

## 获取集合/数据表对象
## Get collection/data table object
创建好数据表后，可以通过API获取数据表对象。
After the data table is created, the data table object can be obtained through the API.

```js
const db = uniCloud.database();
// 获取名为 `table1` 数据表的引用
// Get a reference to the data table named `table1`
const collection = db.collection('table1');
```

**集合/数据表 Collection 的方法**
**Method of Collection/Data Table Collection**
通过 `db.collection(name)` 可以获取指定数据表的引用，在数据表上可以进行以下操作
Through `db.collection(name)`, the reference of the specified data table can be obtained, and the following operations can be performed on the data table
| 类型		| 接口		| 说明																														|
| Type | Interface | Description |
| --------	| -------	| ----------------------------------------------------------------------------------										|
| 写		| add		| 新增记录（触发请求）																										|
| Write | add | add record (trigger request) |
| 计数		| count		| 获取符合条件的记录条数																									|
| Count | count | Get the number of records that meet the conditions |
| 读		| get		| 获取数据表中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求)										|
| Read | get | Get the records in the data table, if the query conditions are defined using the where statement, the matching result set will be returned (triggering the request) |
| 引用		| doc		| 获取对该数据表中指定 id 的记录的引用																						|
| Reference | doc | Get a reference to the record of the specified id in the data table |
| 查询条件	| where		| 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用														|
| Query conditions | where | Filter matching records by specifying conditions, which can be used with query commands (eq, gt, in, ...) |
|			| skip		| 跳过指定数量的文档，常用于分页，传入 offset。clientDB组件有封装好的更易用的分页，[另见](uniCloud/uni-clientdb-component)	|
| | skip | Skip a specified number of documents, often used for paging, pass in offset. The clientDB component has encapsulated and easier-to-use pagination, [see also](uniCloud/uni-clientdb-component) |
|			| orderBy	| 排序方式																													|
| | orderBy | Sort by |
|			| limit		| 返回的结果集(文档数量)的限制，有默认值和上限值																			|
| | limit | The limit of the returned result set (number of documents), there are default values ​​and upper limit values ​​|
|			| field		| 指定需要返回的字段																										|
| | field | Specify the field to be returned |
collection对象的方法可以增和查数据，删和改不能直接操作，需要collection对象通过doc或get得到指定的记录后再调用remove或update方法进行删改。
The methods of the collection object can add and check data. Delete and modify cannot be directly operated. The collection object needs to get the specified record through doc or get and then call the remove or update method to delete and modify.
具体前端clientDB和云函数各自增删改查的方法，请单独参考文档：
For specific front-end clientDB and cloud functions, please refer to the document separately:
- [云函数使用传统MongoDB语法操作数据库](uniCloud/cf-database)
- [Cloud functions use traditional MongoDB syntax to manipulate databases](uniCloud/cf-database)
- [前端操作数据库，clientDB和jql](uniCloud/clientdb)
- [Front-end operation database, clientDB and jql] (uniCloud/clientdb)


## 数据导入导出和备份@dbmigration
## Data import, export and backup @dbmigration
uniCloud数据库提供了多种数据导入导出和备份方案。
The uniCloud database provides a variety of data import, export and backup solutions.
- db\_init.json：常用于插件市场的插件做环境初始化。完整支持数据、索引、schema三部分。不适合处理大量数据，操作可能超时
- db\_init.json: Plug-ins often used in the plug-in market to initialize the environment. Fully supports three parts: data, index, and schema. Not suitable for processing large amounts of data, the operation may time out
- 数据库回档备份和恢复。仅腾讯云支持。支持数据和索引，不支持schema
- Database back-up and recovery. Only supported by Tencent Cloud. Support data and index, does not support schema
- 数据库导入导出。仅阿里云支持，适用于大数据量操作。仅支持数据，不支持索引和schema
- Database import and export. Only supported by Alibaba Cloud, suitable for large data volume operations. Only supports data, does not support indexes and schema
除上述三种方法外，开发者还可以编程处理数据的导入导出。如进行大量数据操作，建议在HBuilderX的本地运行云函数环境中操作，这样可以避免触发云端的云函数超时限制。
In addition to the above three methods, developers can also program the import and export of data. For large amounts of data operations, it is recommended to operate in the local cloud function environment of HBuilderX to avoid triggering the cloud function timeout limit in the cloud.
下面对三种方法的使用方式进行详细说明：
The following is a detailed description of the use of the three methods:
### `db_init.json`初始化数据库@db-init
### `db_init.json` Initialize the database @db-init
`db_init.json`定义了一个json格式，里面包含了表名、表数据、表索引等表的相关数据。
`db_init.json` defines a json format, which contains table name, table data, table index and other table related data.
在HBuilderX中，项目的cloudfunctions目录（HBuilderX 2.5.11 - 2.9.11版本） 或 uniCloud/database 目录（HBuilderX 3.0+版本），可以放置`db_init.json`文件，对该文件点右键，可以按`db_init.json`的描述，在云服务空间创建相应的表、初始化表中的数据、索引和schema。
In HBuilderX, in the project's cloudfunctions directory (HBuilderX 2.5.11-2.9.11 version) or uniCloud/database directory (HBuilderX 3.0+ version), you can place the `db_init.json` file, right-click the file, and press `db_init .json` description, create the corresponding table in the cloud service space, initialize the data, index and schema in the table.
这个功能尤其适合插件作者，可以快速初始化插件所需的数据库环境。
This feature is especially suitable for plug-in authors, which can quickly initialize the database environment required by the plug-in.
**`db_init.json`的数据格式**
**Data format of `db_init.json`**
`db_init.json`包含三部分：数据内容(data)、数据表索引(index)、数据表结构(schema)，形式如下
`db_init.json` contains three parts: data content (data), data table index (index), data table structure (schema), the form is as follows
**注意：HBuilderX 3.0.0以上版本schema不再放在db_init.json内，而是独立放在uniCloud/database/目录下。**
**Note: The schema of HBuilderX 3.0.0 and above is no longer stored in db_init.json, but independently stored in the uniCloud/database/ directory. **
详细调整如下：
The detailed adjustments are as follows:
- db_init.json位置由`cloudfunctions/db_init.json`移至`uniCloud/database/db_init.json`
- The location of db_init.json has been moved from `cloudfunctions/db_init.json` to `uniCloud/database/db_init.json`
- schema不再放在db_init.json内，每个表都有一个单独的schema文件，比如news表对应的schema为`uniCloud/database/news.schema.json`
- The schema is no longer placed in db_init.json. Each table has a separate schema file. For example, the schema corresponding to the news table is `uniCloud/database/news.schema.json`
- schema可以在`uniCloud/database`目录上右键创建
- The schema can be created by right-clicking on the `uniCloud/database` directory
- `db_init.json`文件右键初始化云数据库时依然会带上schema进行数据库的初始化，除schema外HBuilderX3.0.0以上版本使用db_init.json初始化数据库还会带上扩展校验函数，扩展校验函数位于`uniCloud/database/validateFunction`目录下，扩展校验函数文档详见：[validateFunction](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
- When you right-click the `db_init.json` file to initialize the cloud database, the schema will still be used to initialize the database. In addition to the schema, HBuilderX3.0.0 and above will use db_init.json to initialize the database and will also bring the extended check function. The extended check function is located at In the `uniCloud/database/validateFunction` directory, the extended validation function documentation is detailed in: [validateFunction](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
**HBuilderX 3.0.0版本之前的db_init.json示例**
**Example of db_init.json before HBuilderX 3.0.0 version**



```json
{
  "collection_test": { // 集合（表名）(Collection (table name))
    "data": [ // 数据(data)
      {
        "_id": "da51bd8c5e37ac14099ea43a2505a1a5", // 一般不带_id字段，防止导入时数据冲突。(Generally, there is no _id field to prevent data conflicts during import.)
        "name": "tom"
      }
    ],
    "index": [{ // 索引(Index)
      "IndexName": "index_a", // 索引名称(Index name)
      "MgoKeySchema": { // 索引规则(  Index rule)
        "MgoIndexKeys": [{
          "Name": "index", // 索引字段(  Index field)
          "Direction": "1" // 索引方向，1：ASC-升序，-1：DESC-降序，2dsphere：地理位置(Index direction, 1: ASC-ascending order, -1: DESC-descending order, 2dsphere: geographic location)
        }],
        "MgoIsUnique": false, // 索引是否唯一(Is the index unique)
        "MgoIsSparse": false // 是否为稀疏索引，请参考 https://uniapp.dcloud.net.cn/uniCloud/db-index.md?id=sparse(Whether it is a sparse index, please refer to https://uniapp.dcloud.net.cn/uniCloud/db-index.md?id=sparse)
      }
    }],
    "schema": { // HBuilderX 3.0.0以上版本schema不在此处，而是放在database目录下单独的`表名.schema.json`文件内(The schema of HBuilderX 3.0.0 and above is not here, but placed in a separate `table name.schema.json` file in the database directory)
      "bsonType": "object",
      "permission": {
        ".read": true,
        ".create": false,
        ".update": false,
        ".delete": false
      },
      "required": [
        "image_url"
      ],
      "properties": {
        "_id": {
          "description": "ID，系统自动生成(ID, automatically generated by the system)"
        },
        "image_url": {
          "bsonType": "string",
          "description": "可以是在线地址，也支持本地地址(It can be an online address or a local address)",
          "label": "图片url(Image url)"
        }
      }
    }
  }
}

```

在HBuilderX中对上述`db_init.json`点右键，可初始化数据库到云服务空间，创建`collection_test`表，并按上述json配置设置该表的index索引和schema，以及插入data下的数据。
Right-click the above `db_init.json` in HBuilderX to initialize the database to the cloud service space, create the `collection_test` table, set the index index and schema of the table according to the above json configuration, and insert the data under data.
[opendb](https://gitee.com/dcloud/opendb)的表，在`db_init.json`中初始化时，不建议自定义index和schema。系统会自动从opendb规范中读取最新的index和schema。
[opendb](https://gitee.com/dcloud/opendb) When initializing the table in `db_init.json`, it is not recommended to customize the index and schema. The system will automatically read the latest index and schema from the opendb specification.
**使用`db_init.json`导入数据库**
**Import the database using `db_init.json`**
在HBuilderX中，对项目下的cloudfunctions目录下的`db_init.json`点右键，即可选择`初始化云数据库`。将`db_init.json`里的内容导入云端。
In HBuilderX, right-click `db_init.json` in the cloudfunctions directory under the project to select `Initialize Cloud Database`. Import the content in `db_init.json` into the cloud.
注意事项：
Precautions:
- 目前`db_init.json`为同步导入形式，无法导入大量数据。导入大量数据请使用web控制台的数据库的导入功能。
- Currently `db_init.json` is a synchronous import format, so large amounts of data cannot be imported. To import large amounts of data, please use the database import function of the web console.
- 如果`db_init.json`中的表名与opendb中任意表名相同，且`db_init.json`中该表名内没有编写schema和index，则在初始化时会自动拉取最新的opendb规范内对应表的schema和index。
- If the table name in `db_init.json` is the same as any table name in opendb, and no schema and index are written in the table name in `db_init.json`, the corresponding in the latest opendb specification will be automatically pulled during initialization The schema and index of the table.
- 如果`db_init.json`中的数据表在服务空间已存在，且`db_init.json`中该表含有schema和index，则在初始化时schema会被替换，新增索引会被添加，已存在索引不受影响。
- If the data table in `db_init.json` already exists in the service space, and the table in `db_init.json` contains schema and index, the schema will be replaced during initialization, the new index will be added, and the index already exists Not affected.
**生成`db_init.json`的方式**
**How ​​to generate `db_init.json`**
在uniCloud web控制台的数据库界面，左侧导航点击 生成`db_init.json`，会将选择的表的内容、索引、表结构导出为`db_init.json`文件。
On the database interface of the uniCloud web console, click on the left navigation to generate `db_init.json`, the content, index, and table structure of the selected table will be exported as a `db_init.json` file.
注意事项：
Precautions:
- 如果表名与opendb中任意表名相同，web控制台导出时将不会带上schema和index。
- If the table name is the same as any table name in opendb, the schema and index will not be included when exporting from the web console.
- web控制台导出时默认不包括`_id`字段，在导入时，数据库插入新记录时会自动补`_id`字段。如果需要指定`_id`，需要手工补足数据。
- The `_id` field is not included by default when the web console is exported. When importing, the database will automatically fill in the `_id` field when inserting a new record. If you need to specify `_id`, you need to fill in the data manually.
在db_init.json内可以使用以下形式定义Date类型的数据：
The following forms can be used to define Date type data in db_init.json:


```js
{
  "dateObj": { // dateObj字段就是日期类型的数据(The dateObj field is date type data)
    "$date": "2020-12-12T00:00:00.000Z" // ISO标准日期字符串(ISO standard date string)
  }
}
```

### 数据库回档备份和恢复@backup
### Database back-up backup and recovery @backup
uniCloud腾讯云版会在每天自动备份一次数据库，最多保留7天。这让开发者不再担心数据丢失。
UniCloud Tencent Cloud will automatically back up the database once a day for up to 7 days. This allows developers to no longer worry about data loss.
**操作说明**
**Instructions**
1. 登录[uniCloud后台](https://unicloud-dev.dcloud.net.cn/)
1. Log in to [uniCloud background](https://unicloud-dev.dcloud.net.cn/)
2. 点击左侧菜单`云数据库 --> 数据库回档`，点击`新建回档`
2. Click on the left menu `Cloud Database --> Database Back File`, click on `New Back File`
3. 选择可回档时间
3. Select the retrievable time
4. 选择需要回档的集合（注意：回档后集合不能与现有集合重名，如需对集合重命名可以在集合列表处操作）
4. Select the collection that needs to be backed (note: the collection cannot have the same name as the existing collection after backing up, if you need to rename the collection, you can operate at the collection list)
![数据库回档](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-db-backup.jpg)
![Database Backup](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-db-backup.jpg)

### 数据导出为文件@export
### Export data as file @export
**此功能暂时只有阿里云支持**
**This feature is temporarily only supported by Alibaba Cloud**
此功能主要用于导出整个集合的数据
This function is mainly used to export the data of the entire collection
**用法**
**usage**

1. 进入[uniCloud web控制台](https://unicloud.dcloud.net.cn/home)，选择服务空间，或者直接在HBuilderX云函数目录`cloudfunctions`上右键打开uniCloud web控制台
1. Enter [uniCloud web console](https://unicloud.dcloud.net.cn/home), select the service space, or directly right-click on the HBuilderX cloud function directory `cloudfunctions` to open the uniCloud web console
2. 进入云数据库选择希望导入数据的集合
2. Enter the cloud database and select the collection of data you want to import
3. 点击导出按钮
3. Click the Export button
4. 选择导出格式，如果选择csv格式还需要选择导出字段
4. Select the export format, if you choose csv format, you also need to select the export field
5. 点击确定按钮等待下载开始即可
5. Click the OK button and wait for the download to start
**注意**
**Notice**
- 导出的json文件并非一般情况下的json，而是每行一条json数据的文本文件
- The exported json file is not json under normal circumstances, but a text file with one json data per line
- 导出为csv时必须填写字段选项。字段之间使用英文逗号隔开。例如：`_id, name, age, gender`
- When exporting to csv, you must fill in the field options. Use commas to separate the fields. For example: `_id, name, age, gender`
- 数据量较大时可能需要等待一段时间才可以开始下载
- When the amount of data is large, it may take a while to start downloading


### 从文件导入数据@import
### Import data from a file @import
**此功能暂时只有阿里云支持**
**This feature is temporarily only supported by Alibaba Cloud**
uniCloud提供的`db_init.json`主要是为了对数据库进行初始化，并不适合导入大量数据。与`db_init.json`不同，数据导入功能可以导入大量数据，目前支持导入 CSV、JSON 格式（关于json格式看下面注意事项）的文件数据。
The `db_init.json` provided by uniCloud is mainly for initializing the database and is not suitable for importing large amounts of data. Unlike `db_init.json`, the data import function can import a large amount of data. Currently, it supports importing file data in CSV and JSON formats (see the notes below for the json format).
**用法**
**usage**
1. 进入[uniCloud web控制台](https://unicloud.dcloud.net.cn/home)，选择服务空间，或者直接在HBuilderX云函数目录`cloudfunctions`上右键打开uniCloud web控制台
1. Enter [uniCloud web console](https://unicloud.dcloud.net.cn/home), select the service space, or directly right-click on the HBuilderX cloud function directory `cloudfunctions` to open the uniCloud web console
2. 进入云数据库选择希望导入数据的集合
2. Enter the cloud database and select the collection of data you want to import
3. 点击导入，选择json文件或csv文件
3. Click Import, select json file or csv file
4. 选择处理冲突模式（关于处理冲突模式请看下方注意事项）
4. Select the conflict handling mode (please see the notes below for the conflict handling mode)
5. 点击确定按钮等待导入完成即可
5. Click the OK button and wait for the import to complete


**注意**
**Notice**
- 目前导入文件最大限制为50MB
- The current maximum limit of imported files is 50MB
- 导入导出文件无法保留索引和schema
- Import and export files cannot retain indexes and schemas
- 导入导出csv时数据类型会丢失，即所有字段均会作为字符串导入
- The data type will be lost when importing and exporting csv, that is, all fields will be imported as strings
- 冲突处理模式为设定记录_id冲突时的处理方式，`insert`表示冲突时依旧导入记录但是是新插入一条，`upsert`表示冲突时更新已存在的记录
- Conflict handling mode is the way to deal with setting record _id conflict, `insert` means that the record is still imported but a new one is inserted when conflicting, and `upsert` means that the existing record is updated when conflicting
- 这里说的json文件并不是标准的json格式，而是形如下面这样每行一个json格式的数据库记录的文件
- The json file mentioned here is not a standard json format, but a file with a json format database record in each line like the following
  ```json
  {"a":1}
  {"a":2}
  ```

> 如果是自己拼接的json格式数据请注意：如果存在集合A关联集合B的字段的场景需要保证关联字段在A、B内是一致的（特别需要注意的是各种与_id关联的字段）
> If it is self-spliced json format data, please note: if there is a scene where the fields of set A are associated with set B, it is necessary to ensure that the associated fields are consistent in A and B (special attention is paid to the various fields associated with _id)


例：
example:
**正确示例**
**Correct example**
```js
// 这里为了方便看数据进行了格式化，实际导入所需的json文件是每行一条记录
// Here is formatted for the convenience of viewing the data, the actual json file required for importing is one record per line
// article集合
// article collection
{
  "user_id": {
    $oid: "601cf1dbf194b200018ed8ec"
  }
}
// user集合
// user collection
{
  "_id": {
    $oid: "601cf1dbf194b200018ed8ec"
  }
}
```

**错误示例**
**Error example**
```js
// 这里为了方便看数据进行了格式化，实际导入所需的json文件是每行一条记录
// Here is formatted for the convenience of viewing the data, the actual json file required for importing is one record per line
// article集合
// article collection
{
  "user_id": "601cf1dbf194b200018ed8ec"
}
// user集合
// user collection
{
  "_id": {
    $oid: "601cf1dbf194b200018ed8ec"
  }
}
```