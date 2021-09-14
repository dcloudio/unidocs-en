云函数中支持对云数据库的全部功能的操作。
The cloud function supports the operation of all functions of the cloud database.
云函数中不支持`jql`语法，仅支持传统MongoDB的API。
The `jql` syntax is not supported in cloud functions, only the traditional MongoDB API is supported.
## 获取集合的引用
## Get a reference to the collection
```js
const db = uniCloud.database();
// 获取 `user` 集合的引用
// Get a reference to the `user` collection
const collection = db.collection('user');
```

### 集合 Collection@collection
### Collection Collection@collection
通过 `db.collection(name)` 可以获取指定集合的引用，在集合上可以进行以下操作
Through `db.collection(name)`, the reference of the specified collection can be obtained, and the following operations can be performed on the collection

| 类型     | 接口    | 说明                                                                               |
| Type | Interface | Description |
| -------- | ------- | ---------------------------------------------------------------------------------- |
| 写       | add     | 新增记录（触发请求）                                                               |
| Write | add | add record (trigger request) |
| 计数     | count   | 获取符合条件的记录条数                                                             |
| Count | count | Get the number of records that meet the conditions |
| 读       | get     | 获取集合中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求) |
| Read | get | Get the records in the collection, if the query conditions are defined using the where statement, the matching result set will be returned (triggering the request) |
| 引用     | doc     | 获取对该集合中指定 id 的记录的引用                                                 |
| Reference | doc | Get a reference to the record with the specified id in the collection |
| 查询条件 | where   | 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用                |
| Query conditions | where | Filter matching records by specifying conditions, which can be used with query commands (eq, gt, in, ...) |
|          | skip    | 跳过指定数量的文档，常用于分页，传入 offset                                        |
| | skip | Skip a specified number of documents, often used for paging, pass in offset |
|          | orderBy | 排序方式                                                                           |
| | orderBy | Sort by |
|          | limit   | 返回的结果集(文档数量)的限制，有默认值和上限值                                     |
| | limit | The limit of the returned result set (number of documents), with a default value and an upper limit |
|          | field   | 指定需要返回的字段                                                                 |
| | field | Specify the field to be returned |


查询及更新指令用于在 `where` 中指定字段需满足的条件，指令可通过 `db.command` 对象取得。
The query and update instructions are used to specify the conditions that the field must meet in `where`, and the instructions can be obtained through the `db.command` object.

### 记录 Record / Document@doc
### Record Record / Document@doc
通过 `db.collection(collectionName).doc(docId)` 可以获取指定集合上指定 _id 的记录的引用，在记录上可以进行以下操作
Through `db.collection(collectionName).doc(docId)`, you can get the reference of the record with the specified _id on the specified collection, and the following operations can be performed on the record

| 接口| 说明	|												|
| Interface | Description | |
| ----| ------|----										|
| 写	| set		| 覆写记录							|
| Write | set | overwrite record |
|			| update| 局部更新记录(触发请求)|
| | update| Partial update record (trigger request)|
|			| remove| 删除记录(触发请求)		|
| | remove| Delete record (trigger request) |
| 读	| get		| 获取记录(触发请求)		|
| Read | get | Get records (trigger request) |
doc(docId)方法的参数只能是字符串，即数据库默认的_id字段。
The parameter of the doc(docId) method can only be a string, which is the default _id field of the database.
如需要匹配多个`_id`的记录，应使用where方法。可以在where方法里用in指令匹配一个包含`_id`的数组。
If you need to match multiple records of `_id`, you should use the where method. You can use the in instruction in the where method to match an array containing `_id`.
### 查询筛选指令 Query Command@query-command
### Query Filter Command Query Command@query-command


以下指令挂载在 `db.command` 下
The following commands are mounted under `db.command`

| 类型     | 接口 | 说明                               |
| Type | Interface | Description |
| -------- | ---- | ---------------------------------- |
| 比较运算 | eq   | 字段等于 ==                            |
| Comparison operation | eq | Field equals == |
|          | neq  | 字段不等于 !=                            |
| | neq | Field is not equal to != |
|          | gt   | 字段大于 >                             |
| | gt | Field is greater than> |
|          | gte  | 字段大于等于 >=                            |
| | gte | Field is greater than or equal to >= |
|          | lt   | 字段小于 <                             |
| | lt | Field is less than <|
|          | lte  | 字段小于等于 <=                            |
| | lte | Field is less than or equal to <= |
|          | in   | 字段值在数组里                     |
| | in | The field value is in the array |
|          | nin  | 字段值不在数组里                   |
| | nin | Field value is not in the array |
| 逻辑运算 | and  | 表示需同时满足指定的所有条件       |
| Logical operation | and | Indicates that all the specified conditions need to be met at the same time |
|          | or   | 表示需同时满足指定条件中的至少一个 |
| | or | Indicates that at least one of the specified conditions must be met at the same time |
如果你熟悉SQL，可查询[mongodb与sql语句对照表](https://blog.csdn.net/xinghebuluo/article/details/7012788/)进行学习。
If you are familiar with SQL, you can query [mongodb and sql statement comparison table](https://blog.csdn.net/xinghebuluo/article/details/7012788/) to learn.
### 字段更新指令 Update Command@update-command
### Field update command Update Command@update-command
以下指令挂载在 `db.command` 下
The following commands are mounted under `db.command`

| 类型 | 接口    | 说明                             |
| Type | Interface | Description |
| ---- | ------- | -------------------------------- |
| 字段 | set     | 设置字段值                       |
| Field | set | Set field value |
|      | remove  | 删除字段                         |
| | remove | Delete field |
|      | inc     | 加一个数值，原子自增             |
| | inc | Add a value, the atom increments |
|      | mul     | 乘一个数值，原子自乘             |
| | mul | Multiply a number, the atom multiplies by itself |
|      | push    | 数组类型字段追加尾元素，支持数组 |
| | push | Add last element to array type field, support array |
|      | pop     | 数组类型字段删除尾元素，支持数组 |
| | pop | Delete the last element of the array type field, support arrays |
|      | shift   | 数组类型字段删除头元素，支持数组 |
| | shift | Array type field delete head element, support array |
|      | unshift | 数组类型字段追加头元素，支持数组 |
| | unshift | Add header elements to array type fields, support arrays |


## 支持的数据类型@data-type
## Supported data types @data-type

数据库提供以下几种数据类型：
The database provides the following data types:
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
* Null
* Null

以下对几个特殊的数据类型做个补充说明
The following is a supplementary explanation for several special data types
### 时间 Date
### Time Date
Date 类型用于表示时间，精确到毫秒，可以用 JavaScript 内置 Date 对象创建。需要特别注意的是，连接本地云函数时，用此方法创建的时间是客户端当前时间，不是服务端当前时间，只有连接云端云函数才是服务端当前时间。
The Date type is used to represent the time, accurate to the millisecond, and can be created with the JavaScript built-in Date object. It is important to note that when connecting to a local cloud function, the time created by this method is the current time of the client, not the current time of the server. Only when connecting to the cloud function is the current time of the server.
另外，我们还单独提供了一个 API 来创建服务端当前时间，使用 serverDate 对象来创建一个服务端当前时间的标记，**该对象暂时只支持腾讯云空间**，当使用了 serverDate 对象的请求抵达服务端处理时，该字段会被转换成服务端当前的时间，更棒的是，我们在构造 serverDate 对象时还可通过传入一个有 offset 字段的对象来标记一个与当前服务端时间偏移 offset 毫秒的时间，这样我们就可以达到比如如下效果：指定一个字段为服务端时间往后一个小时。
In addition, we also provide a separate API to create the current time of the server, and use the serverDate object to create a mark of the current time of the server. **This object temporarily only supports Tencent Cloud Space**, when a request using the serverDate object arrives When the server is processing, this field will be converted into the current time of the server. What's better is that we can also pass in an object with an offset field when constructing the serverDate object to mark an offset from the current server time. Time in milliseconds, so that we can achieve such an effect as follows: Specify a field as the server time one hour later.

```js
// 服务端当前时间
// Current time of the server
new db.serverDate()
// 在云函数内使用new Date()和new db.serverDate()效果一样
// Use new Date() and new db.serverDate() in the cloud function to have the same effect
```

```js
//服务端当前时间加1S
//The current time of the server plus 1S
new db.serverDate({
  offset: 1000
})
// 在云函数内使用new Date(Date.now() + 1000)和上面的用法效果一样
// Using new Date(Date.now() + 1000) in the cloud function has the same effect as the above usage
```
  
  
如果需要对日期进行比较操作，可以使用聚合操作符将日期进行转化，比如以下示例查询所有time字段在`2020-02-02`以后的记录
If you need to compare dates, you can use aggregation operators to convert dates. For example, the following example queries all records whose time field is after `2020-02-02`
  
```js
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const dbCmd = db.command
	const $ = dbCmd.aggregate
	let res = await db.collection('unicloud-test').where(dbCmd.expr(
		$.gte(['$time',$.dateFromString({
			dateString: new Date('2020-02-02').toISOString()
		})])
	)).get()
	return res
};
```

### 地理位置
### Location
参考：[GEO地理位置](#GEO地理位置)
Reference: [GEO location](#GEO location)
## 新增文档@add
## New document @add
方法1： collection.add(data)
Method 1: collection.add(data)
参数说明
Parameter Description
| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object &#124; array | 是   | {_id: '10001', 'name': 'Ben'} _id 非必填|
| data | object &#124; array | yes | {_id: '10001','name':'Ben'} _id is not required|
响应参数
Response parameters
单条插入时
Single insert


| 参数| 类型	|  说明																			|
| Parameters | Type | Description |
| ----| ------|  ----------------------------------------	|
|id		| String|插入记录的id																|
|id | String|The id of the inserted record |
批量插入时
When inserting in bulk
| 参数		| 类型	|  说明																			|
| Parameters | Type | Description |
| ----		| ------|  ----------------------------------------	|
|ids			| Array	|批量插入所有记录的id												|
|ids | Array |Insert the id of all records in batch |
示例：
Example:

```js
// 单条插入数据
// Single insert data
let res = await collection.add({
  name: 'Ben'
})
// 批量插入数据
// Batch insert data
let res = await collection.add([{
  name: 'Alex'
},{
  name: 'Ben'
},{
  name: 'John'
}])
```

**Tips**

- 云服务商为阿里云时，若集合不存在，调用add方法会自动创建集合。注意此方式创建的集合不带索引、表结构，尽量不要依赖此方式创建集合。
- When the cloud service provider is Alibaba Cloud, if the collection does not exist, calling the add method will automatically create the collection. Note that the collection created in this way does not have an index or table structure. Try not to rely on this method to create a collection.
方法2： collection.doc().set(data)
Method 2: collection.doc().set(data)
也可通过 `set` 方法新增一个文档，需先取得文档引用再调用 `set` 方法。
You can also add a new document through the `set` method, you need to get the document reference before calling the `set` method.
如果文档不存在，`set` 方法会创建一个新文档。
If the document does not exist, the `set` method will create a new document.

**参数说明**
**Parameter Description**
| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'}|
| data | object | is | Object to update the field, {'name':'Ben'}|

**响应参数**

| 参数			| 类型	|  说明																				|
| ----			| ------|  ----------------------------------------		|
|updated		| Number| 更新成功条数，数据更新前后没变化时也会返回1	|
|upsertedId	| String| 创建的文档id																|


```js
let res = await collection.doc('doc-id').set({
  name: "Hey"
});
```

**注意**
**Notice**
- 自动生成的_id是自增的，后创建的记录的_id总是大于先生成的_id
-The automatically generated _id is self-increasing, and the _id of the record created later is always greater than the _id generated first
## 查询文档@query
## Query document @query
支持 `where()`、`limit()`、`skip()`、`orderBy()`、`get()`、`field()`、`count()` 等操作。
Support operations such as `where()`, `limit()`, `skip()`, `orderBy()`, `get()`, `field()`, `count()`, etc.
只有当调用`get()`时才会真正发送查询请求。
Only when `get()` is called, the query request is actually sent.
limit，即返回记录的最大数量，默认值为100，也就是不设置limit的情况下默认返回100条数据。
limit, the maximum number of records returned, the default value is 100, that is, 100 pieces of data are returned by default without setting limit.
设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
There is a maximum setting limit, Tencent Cloud is limited to a maximum of 1000, and Alibaba Cloud is limited to a maximum of 500.
如需查询更多数据，需要分页多次查询。
If you need to query more data, you need to page multiple queries.
如果使用clientDB传入getTree参数以返回树形数据也受上面的规则限制，不过此时limit方法仅对根节点生效（大量数据建议使用分层加载，不要使用getTree一次返回所有数据）
If you use clientDB to pass in the getTree parameter to return tree data, it is also restricted by the above rules, but at this time the limit method is only effective for the root node (a large amount of data is recommended to use hierarchical loading, do not use getTree to return all data at once)

**get响应参数**

| 参数| 类型	|  说明																			|
| ----| ------|  ----------------------------------------	|
|data	| Array	| 查询结果数组															|

### 添加查询条件@where
### Add query conditions @where
collection.where()

**在聚合操作中请使用match**
**Please use match in the aggregation operation**
设置过滤条件，where 可接收对象作为参数，表示筛选出拥有和传入对象相同的 key-value 的文档。比如筛选出所有类型为计算机的、内存为 8g 的商品：
Set the filter conditions, where can receive the object as a parameter, which means to filter out the documents that have the same key-value as the incoming object. For example, filter out all products with a computer type and 8g memory:
**get response parameters**

| Parameters | Type | Description |
| ----| ------| ------------------------------------- --- |
|data | Array | Query result array |


```js
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: 8,
  }
}).get()
```

如果要表达更复杂的查询，可使用高级查询指令，比如筛选出所有内存大于 8g 的计算机商品：
If you want to express more complex queries, you can use advanced query commands, such as filtering out all computer products with more than 8g of memory:
```js
const dbCmd = db.command // 取指令(Instruction fetch)
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.gt(8), // 表示大于 8(Means greater than 8)
  }
})
```

在SQL里使用字符串表达式操作。但在NOSQL中使用json操作。这使得 等于 的表达，从 `=` 变成了 `:`；而大于的表达，从 `>` 变成了 `dbCmd.gt()`
Use string expression operations in SQL. But use json operation in NOSQL. This makes the expression of equals changed from `=` to `:`; and the expressions of greater than changed from `>` to `dbCmd.gt()`
所有的比较符，详见[表格](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e6%9f%a5%e8%af%a2%e7%ad%9b%e9%80%89%e6%8c%87%e4%bb%a4-query-command)
For all comparison symbols, see [table](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e6%9f%a5%e8%af%a2%e7%ad%9b%e9% 80%89%e6%8c%87%e4%bb%a4-query-command)

`where` 还可以使用正则表达式来查询文档，比如一下示例查询所有`name`字段以ABC开头的用户
`where` can also use regular expressions to query documents. For example, the following example queries all users whose name field starts with ABC
```js
db.collection('user').where({
  name: new RegExp('^ABC')
})
```

**按照数组内的值查询**
**Query according to the value in the array**

mongoDB内按照数组内的值查询可以使用多种写法，以下面的数据为例
There are many ways to query according to the value in the array in mongoDB. Take the following data as an example
```js
{
  arr:[{
    name: 'item-1',
  },{
    name: 'item-2',
  }]
}

{
  arr:[{
    name: 'item-3',
  },{
    name: 'item-4',
  }]
}
```

如果想查询arr内第一个元素的name为item-1的记录可以使用如下写法
If you want to query the record whose name is item-1 of the first element in arr, you can use the following writing
```js
const res = await db.collection('test').where({
  'arr.0.name': 'item-1'
})

res = {
  data:[{
    arr:[{
      name: 'item-1',
    },{
      name: 'item-2',
    }]
  }]
}
```

如果想查询arr内某个元素的name为item-1的记录（可以是数组内的任意一条name为item-1）可以使用如下写法
If you want to query the record whose name is item-1 of an element in arr (it can be any item in the array whose name is item-1), you can use the following writing
```js
const res = await db.collection('test').where({
  'arr.name': 'item-1'
})

res = {
  data:[{
    arr:[{
      name: 'item-1',
    },{
      name: 'item-2',
    }]
  }]
}
```

### 获取查询数量@count
### Get the number of queries @count
collection.count()

```js
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: 8,
  }
}).count()
```

响应参数
Response parameters
| 字段      | 类型    | 必填 | 说明                     |
| Field | Type | Required | Description |
| --------- | ------- | ---- | ------------------------ |
| total     | Number | 否   | 计数结果                 |
| total | Number | No | Counting result |
**注意：**
**Notice:**
- 数据量很大的情况下，带条件运算count全表的性能会很差，尽量使用其他方式替代，比如新增一个字段专门用来存放总数。不加条件时count全表不存在性能问题。
- In the case of a large amount of data, the performance of the conditional calculation of the full table of count will be poor. Try to use other methods instead, such as adding a new field specifically to store the total. There is no performance problem in the count table without conditions.
### 设置记录数量@limit
### Set the number of records @limit

collection.limit()

参数说明
Parameter Description
| 参数  | 类型    | 必填 | 说明           |
| Parameters | Type | Required | Description |
| ----- | ------- | ---- | -------------- |
| value | Number | 是   | 返回的数据条数 |
| value | Number | Yes | Number of returned data |
使用示例
Example of use

```js
let res = await collection.limit(1).get() // 只返回第一条记录
```

**注意**
**Notice**
- limit不设置的情况下默认返回100条数据；设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。
- If limit is not set, 100 pieces of data are returned by default; there is a maximum value for setting limit, Tencent Cloud is limited to a maximum of 1000, and Alibaba Cloud is limited to a maximum of 500.
### 设置起始位置@skip
### Set the starting position @skip
collection.skip(value)

参数说明
Parameter Description
| 参数  | 类型    | 必填 | 说明           |
| Parameters | Type | Required | Description |
| ----- | ------- | ---- | -------------- |
| value | Number | 是   | 跳过指定的位置，从位置之后返回数据 |
| value | Number | Yes | Skip the specified position, return data from the position after |
使用示例
Example of use

```js
let res = await collection.skip(4).get()
```

**注意：数据量很大的情况下，skip性能会很差，尽量使用其他方式替代，参考：[skip性能优化](uniCloud/db-performance.md?id=skip)**
**Note: In the case of a large amount of data, skip performance will be poor, try to use other methods instead, refer to: [skip performance optimization](uniCloud/db-performance.md?id=skip)**
### 对结果排序@order-by
### Sort the results @order-by
collection.orderBy(field, orderType)

参数说明
Parameter Description
| 参数      | 类型   | 必填 | 说明                                |
| Parameters | Type | Required | Description |
| --------- | ------ | ---- | ----------------------------------- |
| field     | string | 是   | 排序的字段                          |
| field | string | is | sorted field |
| orderType | string | 是   | 排序的顺序，升序(asc) 或 降序(desc) |
| orderType | string | Yes | Sort order, ascending (asc) or descending (desc) |
如果需要对嵌套字段排序，需要用 "点表示法" 连接嵌套字段，比如 style.color 表示字段 style 里的嵌套字段 color。
If you need to sort the nested fields, you need to use "dot notation" to connect the nested fields, for example, style.color represents the nested field color in the field style.
同时也支持按多个字段排序，多次调用 orderBy 即可，多字段排序时的顺序会按照 orderBy 调用顺序先后对多个字段排序
At the same time, it also supports sorting by multiple fields. Just call orderBy multiple times. The order of multi-field sorting will sort multiple fields according to the order of calling orderBy.

使用示例
Example of use

```js
let res = await collection.orderBy("name", "asc").get()
```

**注意**
**Notice**
- 排序字段存在多个重复的值时排序后的分页结果，可能会出现某条记录在上一页出现又在下一页出现的情况。这时候可以通过指定额外的排序条件比如`.orderBy("name", "asc").orderBy("_id", "asc")`来规避这种情况。
- When there are multiple duplicate values in the sorted field, the sorted paging results may appear in the case that a record appears on the previous page and then appears on the next page. At this time, you can circumvent this situation by specifying additional sort conditions such as `.orderBy("name", "asc").orderBy("_id", "asc")`.
### 指定返回字段@field
### Specify the return field @field
collection.field()

从查询结果中，过滤掉不需要的字段，或者指定要返回的字段。
From the query results, filter out unnecessary fields, or specify the fields to be returned.
参数说明
Parameter Description

| 参数 | 类型   | 必填 | 说明                                    |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | --------------------------------------- |
| -    | object | 是   | 过滤字段对象，包含字段名和策略，不返回传false，返回传true |
|-| object | Yes | Filter the field object, including the field name and strategy. If it does not return, it will pass false. If it is returned, it will pass true |

使用示例
Example of use

```js
collection.field({ 'age': true }) //只返回age字段、_id字段，其他字段不返回(Only the age field and _id field are returned, other fields are not returned)
```

**注意**
**Notice**
- field内指定是否返回某字段时，不可混用true/false。即{'a': true, 'b': false}是一种错误的参数格式
- When specifying whether to return a certain field in the field, you cannot mix true/false. That is, {'a': true,'b': false} is a wrong parameter format
- 只有使用{ '_id': false }明确指定不要返回_id时才会不返回_id字段，否则_id字段一定会返回。
- Only when {'_id': false} is used to explicitly specify not to return _id, the _id field will not be returned, otherwise the _id field will definitely be returned.
### 查询指令@dbcmd
### Query command @dbcmd
查询指令以dbCmd.开头，包括等于、不等于、大于、大于等于、小于、小于等于、in、nin、and、or。
The query command starts with dbCmd., including equal to, not equal to, greater than, greater than or equal to, less than, less than or equal to, in, nin, and, or.

下面的查询指令以以下数据集为例：
The following query command takes the following data set as an example:

```json
// goods表(goods table)

[{
  "type": {
    "brand": "A",
    "name": "A-01",
    "memory": 16,
    "cpu": 3.2
  },
  "category": "computer",
  "quarter": "2020 Q2",
  "price": 2500
},{
  "type": {
    "brand": "X",
    "name": "X-01",
    "memory": 8,
    "cpu": 4.0
  },
  "category": "computer",
  "quarter": "2020 Q3",
  "price": 6500
},{
  "type": {
    "brand": "S",
    "name": "S-01",
    "author": "S-01-A"
  },
  "category": "book",
  "quarter": "2020 Q3",
  "price": 20
}]

```

#### eq 等于@dbcmd-eq
#### eq is equal to @dbcmd-eq

表示字段等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`。
Indicates that the field is equal to a certain value. The `eq` instruction accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`.
事实上在uniCloud的数据库中，`等于`有两种写法。
In fact, there are two ways to write `equal to` in uniCloud database.
比如筛选出所有2020 Q2季度的商品，
For example, to filter out all products in the 2020 Q2 quarter,
写法1：使用`:`来比较
Writing 1: Use `:` to compare

```js
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: '2020 Q2'
}).get()

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

写法2：使用指令`dbcmd.eq()`
Writing method 2: Use the command `dbcmd.eq()`

```js
const dbCmd = db.command
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: dbCmd.eq('2020 Q2')
}).get()

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

注意 `eq` 指令有更大的灵活性，可以用于表示字段等于某个对象的情况，比如：
Note that the `eq` instruction has greater flexibility and can be used to indicate that a field is equal to an object, such as:

```js
// 这种写法表示匹配 type.brand == 'S' 且 type.name == 'S-01'(This way of writing means to match type.brand =='S' and type.name =='S-01')
let res = await db.collection('articles').where({
  type: {
    brand: 'S',
    name: 'S-01'
  }
}).get()

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "S",
      "name": "S-01",
      "author": "S-01-A"
    },
    "category": "book",
    "quarter": "2020 Q3",
    "price": 20
  }]
}

// 这种写法表示 stat 对象等于 { brand: 'S', name: 'S-01' }
// This way of writing means that the stat object is equal to {brand:'S', name:'S-01'}
// 对象中还有其他字段时无法匹配，例如：{ brand: 'S', name: 'S-01', author: 'S-01-A' }
// Cannot match when there are other fields in the object, for example: {brand:'S', name:'S-01', author:'S-01-A'}
// 对象中字段顺序不一致也不能匹配，例如：{ name: 'S-01', brand: 'S' }
// The order of the fields in the object is inconsistent and cannot be matched, for example: {name:'S-01', brand:'S'}
const dbCmd = db.command
let res = await db.collection('articles').where({
  stat: dbCmd.eq({
    brand: 'S',
    name: 'S-01'
  })
}).get()

// 查询返回值(Query return value)
{
  "data":[]
}
```

#### neq 不等于@dbcmd-neq
#### neq is not equal to @dbcmd-neq
字段不等于。`neq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`。
The field is not equal. The `neq` instruction accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`.
如筛选出品牌不为 X 的计算机：
For example, to filter out computers whose brand is not X:

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    brand: dbCmd.neq('X')
  },
}).get()

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

#### gt 大于@dbcmd-gt
#### gt is greater than @dbcmd-gt
字段大于指定值。
The field is greater than the specified value.
如筛选出价格大于 3000 的计算机：
For example, to filter out computers with a price greater than 3000:

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  price: dbCmd.gt(3000)
}).get()

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

#### gte 大于等于@dbcmd-gte
#### gte is greater than or equal to @dbcmd-gte
字段大于或等于指定值。
The field is greater than or equal to the specified value.
#### lt 小于@dbcmd-lt
#### lt is less than @dbcmd-lt
字段小于指定值。
The field is less than the specified value.
#### lte 小于等于@dbcmd-lte
#### lte is less than or equal to @dbcmd-lte
字段小于或等于指定值。
The field is less than or equal to the specified value.
#### in 在数组中@dbcmd-in
#### in in the array @dbcmd-in
字段值在给定的数组中。
The field value is in the given array.
筛选出内存为 8g 或 16g 的计算机商品：
Filter out computer products with 8g or 16g memory:

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.in([8, 16])
  }
}).get()

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

#### nin 不在数组中@dbcmd-nin
#### nin is not in the array @dbcmd-nin
字段值不在给定的数组中。
The field value is not in the given array.
筛选出内存不是 8g 或 16g 的计算机商品：
Filter out computer products whose memory is not 8g or 16g:

```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.nin([8, 16])
  }
})

// 查询返回值(Query return value)
{
  "data":[]
}
```

#### and 且@dbcmd-and
#### and and @dbcmd-and
表示需同时满足指定的两个或以上的条件。
Indicates that two or more specified conditions must be met at the same time.
如筛选出内存大于 4g 小于 32g 的计算机商品：
For example, filter out computer products with memory greater than 4g but less than 32g:
流式写法：
Streaming writing:

```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.gt(4).and(dbCmd.lt(32))
  }
})


// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

前置写法：
Pre-writing:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.and(dbCmd.gt(4), dbCmd.lt(32))
  }
})
```

#### or 或@dbcmd-or
#### or or @dbcmd-or
表示需满足所有指定条件中的至少一个。如筛选出价格小于 4000 或在 6000-8000 之间的计算机：
Indicates that at least one of all specified conditions must be met. For example, to filter out computers with a price less than 4000 or between 6000-8000:
流式写法：
Streaming writing:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    price:dbCmd.lt(4000).or(dbCmd.gt(6000).and(dbCmd.lt(8000)))
  }
})


// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

前置写法：
Pre-writing:
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    price: dbCmd.or(dbCmd.lt(4000), dbCmd.and(dbCmd.gt(6000), dbCmd.lt(8000)))
  }
})
```

如果要跨字段 “或” 操作：(如筛选出内存 8g 或 cpu 3.2 ghz 的计算机)
If you want to "or" across fields: (such as filtering out computers with 8g memory or cpu 3.2 GHz)

```js
const dbCmd = db.command
db.collection('goods').where(dbCmd.or(
  {
    type: {
      memory: dbCmd.gt(8)
    }
  },
  {
    type: {
      cpu: 3.2
    }
  }
))

// 查询返回值(Query return value)
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

### 正则表达式查询@regexp
### Regular expression query @regexp
#### db.RegExp
#### db.RegExp
根据正则表达式进行筛选
Filter based on regular expression
例如下面可以筛选出 `version` 字段开头是 "数字+s" 的记录，并且忽略大小写：
For example, the following can filter out the records with "number+s" at the beginning of the `version` field, and ignore the case:
```js
// 可以直接使用正则表达式
// You can use regular expressions directly
db.collection('articles').where({
  version: /^\ds/i
})

// 也可以使用new RegExp
// You can also use new RegExp
db.collection('user').where({
  name: new RegExp('^\\ds', 'i')
})

// 或者使用new db.RegExp，这种方式阿里云不支持
// Or use new db.RegExp, which is not supported by Alibaba Cloud
db.collection('articles').where({
  version: new db.RegExp({
    regex: '^\\ds',   // 正则表达式为 /^\ds/，转义后变成 '^\\ds'(// The regular expression is /^\ds/, after escaping it becomes'^\\ds')
    options: 'i'    // i表示忽略大小写(// i means ignore case)
  }) 
})
```


### 查询数组字段@querywitharr
### Query array field @querywitharr

假设数据表class内有以下数据，可以使用下面两种方式查询数组内包含指定值
Assuming that the data table class has the following data, you can use the following two ways to query the array containing the specified value

```js
{
  "_id": "1",
  "students": ["li","wang"]
}
{
  "_id": "2",
  "students": ["wang","li"]
}
{
  "_id": "3",
  "students": ["zhao","qian"]
}
```

#### 指定下标查询
#### Specify subscript query
```js
const index = 1
const res = await db.collection('class').where({
  ['students.' + index]: 'wang'
})
.get()
```

```js
// 查询结果如下
// The query results are as follows
{
  data: [{
    "_id": "1",
    "students": ["li","wang"]
  }]
}
```

#### 不指定下标查询
#### Query without specifying a subscript

```js
const res = await db.collection('class').where({
  students: 'wang'
})
.get()
```

查询结果如下
The query results are as follows
```js
{
  data: [{
    "_id": "1",
    "students": ["li","wang"]
  },{
    "_id": "1",
    "students": ["wang","li"]
  }]
}
```

#### 数组内是对象
#### Array is an object

如果将上面class内的数据改为如下形式
If you change the data in the above class to the following form
```js
{
  "_id": "1",
  "students": [{
    name: "li"
  },{
    name: "wang"
  }]
}
{
  "_id": "2",
  "students": [{
    name: "wang"
  },{
    name: "li"
  }]
}
{
  "_id": "3",
  "students": [{
    name: "zhao"
  },{
    name: "qian"
  }]
}
```

不指定下标查询的写法可以修改为
The wording of the query without specifying a subscript can be modified to
```js
const res = await db.collection('class').where({
  'students.name': 'wang'
})
.get()
```

查询结果如下
The query results are as follows
```js
{
  data: [{
    "_id": "1",
    "students": [{
      name: "li"
    },{
      name: "wang"
    }]
  },
  {
    "_id": "2",
    "students": [{
      name: "wang"
    },{
      name: "li"
    }]
  }]
}
```

## 删除文档@remove
## Delete document @remove
**方式1 通过指定文档ID删除**
**Method 1 Delete by specifying the document ID**
collection.doc(_id).remove()
collection.doc(_id).remove()

```js
// 清理全部数据
// Clean up all data
let res = await collection.get()
res.data.map(async(document) => {
  return await collection.doc(document.id).remove();
});
```

**方式2 条件查找文档然后直接批量删除**
**Method 2 Conditionally search for documents and then directly delete them in batches**
collection.where().remove()

```js
// 删除字段a的值大于2的文档
// Delete documents with a value of field a greater than 2
const dbCmd = db.command
let res = await collection.where({
  a: dbCmd.gt(2)
}).remove()

// 清理全部数据
// Clean up all data
const dbCmd = db.command
let res = await collection.where({
  _id: dbCmd.exists(true)
}).remove()
```

响应参数
Response parameters
| 字段      | 类型    | 必填 | 说明                     |
| Field | Type | Required | Description |
| --------- | ------- | ---- | ------------------------ |
| deleted   | Number | 否   | 删除的记录数量              |
| deleted | Number | No | The number of deleted records |
示例：判断删除成功或失败，打印删除的记录数量
Example: Determine whether the deletion succeeded or failed, and print the number of deleted records

```js
const db = uniCloud.database();
db.collection("table1").doc("5f79fdb337d16d0001899566").remove()
	.then((res) => {
		console.log("删除成功，删除条数为: (Deleted successfully, the number of deleted items is:)",res.deleted);
	})
	.catch((err) => {
		console.log( err.message )
	})
	.finally(() => {
		
	})
```

## 更新文档@update
## Update documentation @update
### 更新指定文档@doc-update
### Update the specified document @doc-update
collection.doc().update(Object data)
collection.doc().update(Object data)
> 未使用set、remove更新操作符的情况下，此方法不会删除字段，仅将更新数据和已有数据合并。
> If the set and remove update operators are not used, this method will not delete the field, but only merge the updated data with the existing data.
**参数说明**
**Parameter Description**
| 参数 | 类型   | 必填 | 说明                                     |
| Parameters | Type | Required | Description |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'} _id 非必填|
| data | object | Yes | Object of the updated field, {'name':'Ben'} _id is not required|
**响应参数**
**Response parameters**
| 参数	| 类型	|  说明																			|
| Parameters | Type | Description |
| ----	| ------|  ----------------------------------------	|
|updated| Number| 更新成功条数，数据更新前后没变化时会返回0	|
|updated| Number| The number of successfully updated items, 0 will be returned when there is no change before and after the data is updated |

```js
let res = await collection.doc('doc-id').update({
  name: "Hey",
  count: {
    fav: 1
  }
});
```

```json
// 更新前
//Before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
//Updated
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

更新数组时，已数组下标作为key即可，比如以下示例将数组arr内下标为1的值修改为 uniCloud
When updating the array, the subscript of the array can be used as the key. For example, the following example changes the value of subscript 1 in the array arr to uniCloud

```js
let res = await collection.doc('doc-id').update({
  arr: {
    1: "uniCloud"
  }
})
```

```json
// 更新前
// Before update
{
  "_id": "doc-id",
  "arr": ["hello", "world"]
}
// 更新后
// Updated
{
  "_id": "doc-id",
  "arr": ["hello", "uniCloud"]
}
```

### 更新文档，如果不存在则创建@doc-set
### Update the document, if it does not exist, create @doc-set
collection.doc().set()

**注意：**
**Notice:**
> 此方法会覆写已有字段，需注意与`update`表现不同，比如以下示例执行`set`之后`follow`字段会被删除
> This method will overwrite the existing fields. It should be noted that the behavior is different from `update`. For example, the following example will delete the `follow` field after executing `set`
```js
let res = await collection.doc('doc-id').set({
  name: "Hey",
  count: {
    fav: 1
  }
})
```

```json
// 更新前
// Before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1
  }
}
```

### 批量更新文档@where-update
### Batch update documents @where-update

`collection.update()`

```js
const dbCmd = db.command
let res = await collection.where({name: dbCmd.eq('hey')}).update({
  age: 18,
})
```

### 更新并返回更新后的数据@update-and-return
### Update and return the updated data @update-and-return
> 新增于HBuilderX 3.2.0-alpha
> Added in HBuilderX 3.2.0-alpha
此接口仅会操作一条数据，有多条数据匹配的情况下会只更新匹配的第一条并返回
This interface will only operate on one piece of data. If multiple pieces of data match, only the first matched piece will be updated and returned
**示例**
**Example**

```js
const db = uniCloud.database()
await db.collection('test').where({
  uid: '1'
}).updateAndReturn({
  score: db.command.inc(2)
})

// 更新前
// Before update
{
  _id: 'xx',
  uid: '1',
  score: 0
}
// 更新后
// Updated
{
  _id: 'xx',
  uid: '1',
  score: 2
}

// 接口返回值
// interface return value
{
  updated: 1,
  doc: {
    _id: 'xx',
    uid: '1',
    score: 2
  }
}
```

**注意**
**Notice**
- 使用updateAndReturn时，不可使用field方法
- When using updateAndReturn, the field method cannot be used
- 可以在事务中使用，可以使用`transaction.where().updateAndReturn()`以及`transaction.doc().updateAndReturn()`
- Can be used in transactions, you can use `transaction.where().updateAndReturn()` and `transaction.doc().updateAndReturn()`
### 更新数组内指定下标的元素@update-arr-with-index
### Update the element of the specified subscript in the array @update-arr-with-index

```js
const res = await db.collection('query').doc('1').update({
  // 更新students[1]
  // Update students[1]
  ['students.' + 1]: {
    name: 'wang'
  }
})
```

```js
// 更新前
// Before update
{
  "_id": "1",
  "students": [
    {
      "name": "zhang"
    },
    {
      "name": "li"
    }
  ]
}

// 更新后
// Updated
{
  "_id": "1",
  "students": [
    {
      "name": "zhang"
    },
    {
      "name": "wang"
    }
  ]
}
```

### 更新数组内匹配条件的元素@update-arr-matched
### Update the elements of the matching conditions in the array @update-arr-matched

**注意：只可确定数组内只会被匹配到一个的时候使用**
**Note: It can only be used when there is only one match in the array **
```js
const res = await db.collection('query').where({
	'students.id': '001'
}).update({
  // 将students内id为001的name改为li，$代表where内匹配到的数组项的序号
  // Change the name with id 001 in students to li, and $ represents the sequence number of the array item matched in where
	'students.$.name': 'li'
})
```


```js
// 更新前
// Before update
{
  "_id": "1",
  "students": [
    {
      "id": "001",
      "name": "zhang"
    },
    {
      "id": "002",
      "name": "wang"
    }
  ]
}

// 更新后
// Updated
{
  "_id": "1",
  "students": [
    {
      "id": "001",
      "name": "li"
    },
    {
      "id": "002",
      "name": "wang"
    }
  ]
}
```

### 更新操作符@update-operator
### Update operator @update-operator
更多数据库操作符请查看[数据库操作符](#dbcmd)
For more database operators, please see [Database Operators](#dbcmd)
#### set@operator-set
更新指令。用于设定字段等于指定值。这种方法相比传入纯 JS 对象的好处是能够指定字段等于一个对象：
Update instructions. Used to set the field equal to the specified value. The advantage of this method over passing in a pure JS object is that it can specify that the field is equal to an object:

```js
const dbCmd = db.command
let res = await db.collection('photo').doc('doc-id').update({
  count: dbCmd.set({
    fav: 1,
    follow: 1
  })
})
```

```json
// 更新前
// Before update
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 1,
    "follow": 1
  }
}
```

#### inc@operator-inc

更新指令。用于指示字段自增某个值，这是个原子操作，使用这个操作指令而不是先读数据、再加、再写回的好处是：
Update instructions. It is used to instruct the field to increment a certain value. This is an atomic operation. The advantages of using this operation instruction instead of reading the data first, adding it, and writing it back are:
1. 原子性：多个用户同时写，对数据库来说都是将字段加一，不会有后来者覆写前者的情况
1. Atomicity: Multiple users write at the same time. For the database, the field is incremented by one, and there will be no case that latecomers overwrite the former
2. 减少一次请求：不需先读再写
2. Reduce one request: no need to read and then write
之后的 mul 指令同理。
The same is true for the subsequent mul instruction.
在文章阅读数+1、收藏+1等很多场景会用到它。如给收藏的商品数量加一：
It will be used in many scenarios such as article reading +1, collection +1 and so on. For example, add one to the number of items in the collection:

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.inc(1)
  }
})
```

```json
// 更新前
// Before update
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

请注意并没有直接提供减法操作符，如果要实现减法，仍通过inc实现。比如上述字段减1，
Please note that there is no direct subtraction operator. If you want to implement subtraction, you still use inc. For example, the above field minus 1,
```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.inc(-1)
  }
})
```

#### mul@operator-mul
#### mul@operator-mul
更新指令。用于指示字段自乘某个值。
Update instructions. Used to indicate a field multiplied by a certain value.
以下示例将count内的fav字段乘10
The following example multiplies the fav field in count by 10

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.mul(10)
  }
})
```

```json
// 更新前
// Before update
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 2,
    "follow": 0
  }
}

// 更新后
// Updated
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 20,
    "follow": 0
  }
}
```

请注意没有直接提供除法操作符，如果要实现除法，仍通过mul实现。比如上述字段除以10，
Please note that the division operator is not directly provided. If you want to implement division, it is still implemented through mul. For example, divide the above field by 10,

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.mul(0.1)
  }
})
```

#### remove@operator-remove

更新指令。用于表示删除某个字段。如某人删除了自己一条商品评价中的评分：
Update instructions. Used to indicate to delete a field. For example, someone deletes the rating in one of their product reviews:
```js
const dbCmd = db.command
let res = await db.collection('comments').doc('comment-id').update({
  rating: dbCmd.remove()
})
```

```json
// 更新前
// Before update
{
  "_id": "comment-id",
  "rating": 5,
  "comment": "xxx"
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "comment": "xxx"
}
```

#### push@operator-push
向数组尾部追加元素，支持传入单个元素或数组
Append elements to the end of the array, support passing in a single element or an array
```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  // users: dbCmd.push('aaa')
  users: dbCmd.push(['c', 'd'])
})
```

```json
// 更新前
// Before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["a","b","c","d"]
}
```

#### pop@operator-pop
删除数组尾部元素
Delete the last element of the array
```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  users: dbCmd.pop()
})
```

```json
// 更新前
// Before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["a"]
}
```

#### unshift@operator-unshift

向数组头部添加元素，支持传入单个元素或数组。使用同push
Add elements to the head of the array, support passing in a single element or an array. Use the same push

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  // users: dbCmd.push('aaa')
  users: dbCmd.unshift(['c', 'd'])
})
```

```json
// 更新前
// Before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["c","d","a","b"]
}
```

#### shift@operator-shift

删除数组头部元素。使用同pop
Delete the head element of the array. Use the same pop

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  users: dbCmd.shift()
})
```

```json
// 更新前
// Before update
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
// Updated
{
  "_id": "comment-id",
  "users": ["b"]
}
```

## GEO地理位置@geo
## GEO Geographical Location@geo
注意：**如果需要对类型为地理位置的字段进行搜索，一定要建立地理位置索引**。
Note: **If you need to search for a field whose type is geographic location, you must create a geographic location index**.
### GEO数据类型@geo-data-type
### GEO data type @geo-data-type
#### Point@geo-point

用于表示地理位置点，用经纬度唯一标记一个点，这是一个特殊的数据存储类型。
It is used to indicate a geographical location point, and a point is uniquely marked with latitude and longitude. This is a special data storage type.
签名：`Point(longitude: number, latitude: number)`
Signature: `Point(longitude: number, latitude: number)`
示例：
Example:
```js
new db.Geo.Point(longitude, latitude)
```

#### LineString@geo-line-string

用于表示地理路径，是由两个或者更多的 `Point` 组成的线段。
It is used to represent a geographic path and is a line segment composed of two or more `Point`.
签名：`LineString(points: Point[])`
Signature: `LineString(points: Point[])`
示例：
Example:

```js
new db.Geo.LineString([
  new db.Geo.Point(lngA, latA),
  new db.Geo.Point(lngB, latB),
  // ...
])
```

#### Polygon@geo-polygon

用于表示地理上的一个多边形（有洞或无洞均可），它是由一个或多个**闭环** `LineString` 组成的几何图形。
It is used to represent a geographic polygon (with or without holes). It is a geometric figure composed of one or more **closed loop** `LineString`.
由一个环组成的 `Polygon` 是没有洞的多边形，由多个环组成的是有洞的多边形。对由多个环（`LineString`）组成的多边形（`Polygon`），第一个环是外环，所有其他环是内环（洞）。
A `Polygon` composed of a ring is a polygon without holes, and a polygon composed of multiple rings is a polygon with holes. For a polygon (`Polygon`) composed of multiple rings (`LineString`), the first ring is the outer ring, and all other rings are inner rings (holes).
签名：`Polygon(lines: LineString[])`
Signature: `Polygon(lines: LineString[])`
示例：
Example:

```js
new db.Geo.Polygon([
  new db.Geo.LineString(...),
  new db.Geo.LineString(...),
  // ...
])
```

#### MultiPoint@geo-multi-point

用于表示多个点 `Point` 的集合。
Used to represent a collection of multiple points `Point`.
签名：`MultiPoint(points: Point[])`
Signature: `MultiPoint(points: Point[])`
示例：
Example:

```js
new db.Geo.MultiPoint([
  new db.Geo.Point(lngA, latA),
  new db.Geo.Point(lngB, latB),
  // ...
])
```

#### MultiLineString@geo-multi-line-string

用于表示多个地理路径 `LineString` 的集合。
Used to represent a collection of multiple geographic paths `LineString`.
签名：`MultiLineString(lines: LineString[])`
Signature: `MultiLineString(lines: LineString[])`
示例：
Example:

```js
new db.Geo.MultiLineString([
  new db.Geo.LineString(...),
  new db.Geo.LineString(...),
  // ...
])
```


#### MultiPolygon@geo-multi-polygon

用于表示多个地理多边形 `Polygon` 的集合。
Used to represent a collection of multiple geographic polygons `Polygon`.
签名：`MultiPolygon(polygons: Polygon[])`
Signature: `MultiPolygon(polygons: Polygon[])`
示例：
Example:
```js
new db.Geo.MultiPolygon([
  new db.Geo.Polygon(...),
  new db.Geo.Polygon(...),
  // ...
])
```

### GEO操作符@geo-operator
### GEO Operator @geo-operator
#### geoNear@operator-geo-near

按从近到远的顺序，找出字段值在给定点的附近的记录。
In the order from nearest to farthest, find the records whose field value is near a given point.
签名：
sign:
```js
db.command.geoNear(options: IOptions)

interface IOptions {
  geometry: Point // 点的地理位置(Point location)
  maxDistance?: number // 选填，最大距离，米为单位(Optional, maximum distance, in meters)
  minDistance?: number // 选填，最小距离，米为单位(Optional, minimum distance, in meters)
}
```

示例：
Example:

```js
let res = await db.collection('user').where({
  location: db.command.geoNear({
    geometry: new db.Geo.Point(lngA, latA),
    maxDistance: 1000,
    minDistance: 0
  })
}).get()
```

#### geoWithin@operator-geo-within

找出字段值在指定 Polygon / MultiPolygon 内的记录，无排序
Find the records whose field value is in the specified Polygon / MultiPolygon, no sorting

签名：
sign:
```js
db.command.geoWithin(IOptions)

interface IOptions {
  geometry: Polygon | MultiPolygon // 地理位置(Geographic location)
}
```

示例：
Example:
```js
// 一个闭合的区域
//A closed area
const area = new Polygon([
  new LineString([
    new Point(lngA, latA),
    new Point(lngB, latB),
    new Point(lngC, latC),
    new Point(lngA, latA)
  ]),
])

// 搜索 location 字段在这个区域中的 user
// Search for the user whose location field is in this area
let res = await db.collection('user').where({
  location: db.command.geoWithin({
    geometry: area
  })
}).get()
```

#### geoIntersects@operator-geo-intersects

找出字段值和给定的地理位置图形相交的记录
Find the record where the field value intersects the given geographic location graph

签名：
sign:
```js
db.command.geoIntersects(IOptions)

interface IOptions {
  geometry: Point | LineString | MultiPoint | MultiLineString | Polygon | MultiPolygon // 地理位置
}
```

示例：
Example:
```js
// 一条路径
// a path
const line = new LineString([
  new Point(lngA, latA),
  new Point(lngB, latB)
])

// 搜索 location 与这条路径相交的 user
// Search for the user whose location intersects this path
let res = await db.collection('user').where({
  location: db.command.geoIntersects({
    geometry: line
  })
}).get()
```

## 事务@transaction
## Transaction@transaction
事务通常用来在某个数据库操作失败之后进行回滚。
Transactions are usually used to roll back after a database operation fails.
> 事务因为要锁行，是有时间限制的。从事务开始到事务提交/回滚，时间不可超过10s。另外注意：如果多条事务同时处理同一行数据，可能存在写冲突，进而导致失败。
> There is a time limit for transactions because they have to lock rows. From the beginning of the transaction to the commit/rollback of the transaction, the time cannot exceed 10s. Also note: If multiple transactions process the same row of data at the same time, there may be write conflicts, which may lead to failure.
### runTransaction@run-transaction
### runTransaction@run-transaction
**阿里云不支持此用法，请换成startTransaction以使用事务**
**Alibaba Cloud does not support this usage, please change to startTransaction to use transactions**
发起事务。与`startTransaction`作用类似，接收参数类型不同
Initiate a transaction. Similar to the function of `startTransaction`, the received parameter types are different
**`runTransaction` 的形式如下：**
**The form of `runTransaction` is as follows:**

```javascript
db.runTransaction(callback: function, times: number)
```

**参数**
**parameter**

|参数			|类型			|说明																																										|
|Parameter |Type |Description |
|---			|---			|---																																										|
|callback	|Function	|事务执行函数，需为 async 异步函数或返回 Promise 的函数																	|
|callback |Function |The transaction execution function, which needs to be an async asynchronous function or a function that returns a Promise |
|times		|Number		|事务执行最多次数，默认 3 次，成功后不重复执行，只有事务冲突时会重试，其他异常时不会重试|
|times |Number |The maximum number of times the transaction is executed, the default is 3 times. After success, it will not be repeated. Only when the transaction conflicts, it will be retried, and it will not be retried when other exceptions occur.|
**返回值**
**return value**
`runTransaction`返回一个`Promise`，此`Promise.resolve`的结果为`callback`事务执行函数的返回值，`reject` 的结果为事务执行过程中抛出的异常或者是 `transaction.rollback` 传入的值
`runTransaction` returns a `Promise`, the result of this `Promise.resolve` is the return value of the `callback` transaction execution function, and the result of `reject` is the exception thrown during the execution of the transaction or is passed by `transaction.rollback` Entered value
**callback 事务执行函数的说明**
**Description of callback transaction execution function**
事务执行函数由开发者传入，函数接收一个参数 transaction，其上提供 collection 方法和 rollback 方法。collection 方法用于取数据库集合记录引用进行操作，rollback 方法用于在不想继续执行事务时终止并回滚事务。
The transaction execution function is passed in by the developer, and the function receives a parameter transaction, which provides a collection method and a rollback method. The collection method is used to fetch the database collection record reference for operation, and the rollback method is used to terminate and roll back the transaction when you do not want to continue executing the transaction.
事务执行函数必须为 `async` 异步函数或返回 `Promise` 的函数，当事务执行函数返回时，uniCloud 会认为用户逻辑已完成，自动提交（`commit`）事务，因此务必确保用户事务逻辑完成后才在 `async` 异步函数中返回或 `resolve Promise`。
The transaction execution function must be an `async` asynchronous function or a function that returns a `Promise`. When the transaction execution function returns, uniCloud will consider the user logic to be completed and automatically commit the transaction (`commit`), so make sure that the user transaction logic is completed Only return or resolve Promise in the `async` asynchronous function.
事务执行函数可能会被执行多次，在内部发现事务冲突时会自动重复执行，如果超过设定的执行次数上限，会报错退出。
The transaction execution function may be executed multiple times. When a transaction conflict is found internally, it will be automatically executed repeatedly. If the upper limit of the number of execution times is exceeded, an error will be reported and exit.
在事务执行函数中发生的错误，都会认为事务执行失败而抛错。
Errors that occur in the transaction execution function will be considered as the transaction execution failure and throw an error.
事务执行函数返回的值会作为 `runTransaction` 返回的 `Promise resolve` 的值，在函数中抛出的异常会作为 `runTransaction` 返回的 `Promise reject` 的值，如果事务执行函数中调用了 `transaction.rollback`，则传入 `rollback` 函数的值会作为 `runTransaction` 返回的 `Promise reject` 的值。
The value returned by the transaction execution function will be used as the value of `Promise resolve` returned by `runTransaction`, and the exception thrown in the function will be used as the value of `Promise reject` returned by `runTransaction`. If the transaction execution function calls `transaction' .rollback`, the value passed in to the `rollback` function will be used as the value of `Promise reject` returned by `runTransaction`.

**限制**
**limit**
事务操作时为保障效率和并发性，只允许进行单记录操作，不允许进行批量操作，但可以在一个事务进行多次数据库操作。
To ensure efficiency and concurrency during transaction operations, only single-record operations are allowed, and batch operations are not allowed, but multiple database operations can be performed in one transaction.
- 对于修改和删除仅支持使用doc方法，不支持使用where方法。
- For modification and deletion, only the doc method is supported, and the where method is not supported.
- 新增时使用add方法一次只可以新增单条，不可新增多条，即不支持在add方法内传入数组
- When adding, you can only add a single item at a time using the add method, and cannot add multiple items, that is, it does not support passing in an array in the add method
- 腾讯云没有限制where的使用，但是使用where修改或删除多条会导致无法回滚
- Tencent Cloud does not restrict the use of where, but using where to modify or delete multiple entries will result in unable to rollback
**注意事项**
**Precautions**
- 开发者提供的事务执行函数正常返回时，uniCloud 会自动提交（`commit`）事务，请勿在事务执行函数内调用 `transaction.commit` 方法，该方法仅在通过 `db.startTransaction` 进行事务操作时使用
- When the transaction execution function provided by the developer returns normally, uniCloud will automatically commit (`commit`) the transaction. Please do not call the `transaction.commit` method in the transaction execution function. This method can only be used for transactions through `db.startTransaction` Use during operation
- 请注意transaction.doc().get()返回的data不是数组形式
- Please note that the data returned by transaction.doc().get() is not in the form of an array
**示例代码**
**Sample Code**
两个账户之间进行转账的简易示例
Simple example of transferring money between two accounts

```javascript
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event) => {
  try {
    const result = await db.runTransaction(async transaction => {
      const aaaRes = await transaction.collection('account').doc('aaa').get()
      const bbbRes = await transaction.collection('account').doc('bbb').get()
      if(aaaRes.data && bbbRes.data) {
        try {
          const updateAAARes = await transaction.collection('account').doc('aaa').update({
            amount: dbCmd.inc(-10)
          })

          const updateBBBRes = await transaction.collection('account').doc('bbb').update({
            amount: dbCmd.inc(10)
          })
          const aaaEndRes = await transaction.collection('account').doc('aaa').get()
          if (aaaEndRes.data.amount < 0) { 
		  // 请注意transaction.doc().get()返回的data不是数组形式
		  // Please note that the data returned by transaction.doc().get() is not in the form of an array
            await transaction.rollback(-100)
          }
          // 会作为 runTransaction resolve 的结果返回
		  // Will be returned as the result of runTransaction resolve
          return {
            aaaAccount: aaaEndRes.data.amount,
          }
        } catch(e) {
          // 会作为 runTransaction reject 的结果出去
		  // Will go out as a result of runTransaction reject
          await transaction.rollback(-100)
        }
      } else {
        await transaction.rollback(-100)
      }
    })

    return {
      success: true,
      aaaAccount: result.aaaAccount,
    }
  } catch (e) {
    console.error(`transaction error`, e)

    return {
      success: false,
      error: e
    }
  }
}
```

### startTransaction@start-transaction

发起事务。与`runTransaction`作用类似，接收参数类型不同
Initiate a transaction. Similar to the function of `runTransaction`, the received parameter types are different

**`startTransaction` 形式如下**
**`startTransaction` has the following form**
```javascript
// 与runTransaction不同，startTransaction不接收参数
// Unlike runTransaction, startTransaction does not receive parameters
db.startTransaction()
```

**返回值**
**return value**
返回一个`Promise`，此`Promise resolve`的结果为事务操作对象（**注意这里与runTransaction的区别**），其上可通过 `collection API` 操作数据库，通过 `commit`（**使用`startTransaction`需要主动`commit`**） 或 `rollback` 来结束或终止事务。
Return a `Promise`, the result of this `Promise resolve` is the transaction operation object (**note the difference here with runTransaction**), on which the database can be operated through the `collection API`, and through the `commit` (**use` startTransaction` requires active `commit`**) or `rollback` to end or terminate the transaction.
**限制**
**limit**
事务操作时为保障效率和并发性，只允许进行单记录操作，不允许进行批量操作，但可以在一个事务进行多次数据库操作。
To ensure efficiency and concurrency during transaction operations, only single-record operations are allowed, and batch operations are not allowed, but multiple database operations can be performed in one transaction.
- 对于修改和删除仅支持使用doc方法，不支持使用where方法。
- For modification and deletion, only the doc method is supported, and the where method is not supported.
- 新增时使用add方法一次只可以新增单条，不可新增多条，即不支持在add方法内传入数组
- When adding, you can only add a single item at a time using the add method, and cannot add multiple items, that is, it does not support passing in an array in the add method
- 腾讯云没有限制where的使用，但是使用where修改或删除多条会导致无法回滚
- Tencent Cloud does not restrict the use of where, but using where to modify or delete multiple entries will result in unable to rollback

**注意**
**Notice**
- 请注意transaction.doc().get()返回的data不是数组形式
- Please note that the data returned by transaction.doc().get() is not in the form of an array
**示例代码**
**Sample Code**
两个账户之间进行转账的简易示例
Simple example of transferring money between two accounts

```javascript
const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event) => {
  const transaction = await db.startTransaction()
  try {

    const aaaRes = await transaction.collection('account').doc('aaa').get()
    const bbbRes = await transaction.collection('account').doc('bbb').get()

    if (aaaRes.data && bbbRes.data) {
      const updateAAARes = await transaction.collection('account').doc('aaa').update({
        amount: dbCmd.inc(-10)
      })

      const updateBBBRes = await transaction.collection('account').doc('bbb').update({
        amount: dbCmd.inc(10)
      })
      
      const aaaEndRes = await transaction.collection('account').doc('aaa').get()
      if (aaaEndRes.data.amount < 0) { 
		// 请注意transaction.doc().get()返回的data不是数组形式
		// Please note that the data returned by transaction.doc().get() is not in the form of an array
        await transaction.rollback(-100)
        return {
          success: false,
          error: `rollback`,
          rollbackCode: -100,
        }
      } else {
        await transaction.commit()
        console.log(`transaction succeeded`)

        return {
          success: true,
          aaaAccount: aaaRes.data.amount - 10,
        }
      }

    } else {

      return {
        success: false,
        error: `rollback`,
        rollbackCode: -100,
      }
    }
  } catch (e) {
    await transaction.rollback()
    console.error(`transaction error`, e)

    return {
      success: false,
      error: e
    }
  }
}
```


<!-- 
## 数据库实时推送
## Real-time database push
监听指定集合中符合查询条件的文档，通过onchange回调获得文档的变化详情
Monitor the documents that meet the query conditions in the specified collection, and obtain the change details of the document through the onchange callback
(where参数为查询条件 参考 [查询文档](#查询文档))
(where parameter is the query condition, refer to [query document](#query document))
```js
  const uniCloud =  uniCloud.init({
      spaceId: 'YourSpaceId
  });
  const db = uniCloud.database();
  const dbCmd = db.command
  const collection = db.collection('collName') // collName 需填当前服务空间下集合名称(collName needs to fill in the name of the collection under the current service space)

  let ref = collection.where({ test: dbCmd.gt(0) }).watch({
    onChange: snapshot => {
        console.log("收到snapshot**********(Receive snapshot**********)", snapshot)
    },
    onError: error => {
      console.log("收到error**********", error)
    }
  })
```

单个doc的监听，也可以采用doc('docId').watch()形式
```js
  let ref = collection.doc('one docId').watch({
    onChange: snapshot => {
        console.log("收到snapshot**********(Receive snapshot**********)", snapshot)
    },
    onError: error => {
      console.log("收到error**********(Receive snapshot**********)", error)
    }
  })
```

手动关闭监听，当前监听将不再收到推送
Manually turn off the monitoring, the current monitoring will no longer receive push
```js
  ref.close()
```
 -->


## 聚合操作@aggregate
## Aggregation operation @aggregate
有时候我们需要对数据进行分析操作，比如一些统计操作、联表查询等，这个时候简单的查询操作就搞不定这些需求，因此就需要使用聚合操作来完成。
Sometimes we need to perform analysis operations on data, such as some statistical operations, join table queries, etc. At this time, simple query operations cannot solve these requirements, so we need to use aggregation operations to complete.
获取数据库集合的聚合操作实例
Get the aggregation operation instance of the database collection

```js
db.collection('scores').aggregate()
```

### 聚合表达式
### Aggregation expression
表达式可以是字段路径、常量、或聚合操作符。表达式可以嵌套表达式。
The expression can be a field path, constant, or aggregation operator. Expressions can be nested expressions.
**字段路径**
**Field Path**
表达式用字段路径表示法来指定记录中的字段。字段路径的表示由一个 `$` 符号加上字段名或嵌套字段名。嵌套字段名用点将嵌套的各级字段连接起来。如 `$profile` 就表示 `profile` 的字段路径，`$profile.name` 就表示 `profile.name` 的字段路径（`profile` 字段中嵌套的 `name` 字段）。
The expression uses the field path notation to specify the field in the record. The field path is represented by a `$` symbol plus the field name or nested field name. The nested field names connect the nested fields at all levels with dots. For example, `$profile` means the field path of `profile`, and `$profile.name` means the field path of `profile.name` (the nested `name` field in the `profile` field).
例如：现有以下数据
For example: the following data is available

```json
[{
  "profile": {
    "name": "Chloe"
  },
  "status": 0
}]
```

```js
// 执行以下操作
// do the following
let res = await db.collection('scores').aggregate()
  .addFields({
    name: '$profile.name'
  })
  .end()

// 返回值为
// The return value is
{
  "data": [{
    "profile": {
      "name": "Chloe"
    },
    "status": 0,
    "name": "Chloe"
  }]
}
```


**常量**
**constant**
常量可以是任意类型。默认情况下 $ 开头的字符串都会被当做字段路径处理，如果想要避免这种行为，使用 `db.command.aggregate.literal` 声明为常量。
Constants can be of any type. By default, the string beginning with $ will be treated as a field path. If you want to avoid this behavior, use `db.command.aggregate.literal` to declare it as a constant.
**聚合操作符**
**Aggregation Operator**
参考[聚合操作符](#aggregate-operator)
Reference [aggregate operator](#aggregate-operator)
### addFields@aggregate-add-fields
### addFields@aggregate-add-fields
聚合阶段。添加新字段到输出的记录。经过 `addFields` 聚合阶段，输出的所有记录中除了输入时带有的字段外，还将带有 `addFields` 指定的字段。
The polymerization stage. Add new fields to the output record. After the aggregation stage of `addFields`, all the output records will have fields specified by `addFields` in addition to the input fields.

**API 说明**
**API description**
`addFields` 等同于同时指定了所有已有字段和新增字段的 `project` 阶段。
`addFields` is equivalent to the `project` stage where all existing fields and new fields are specified at the same time.
**`addFields` 的形式如下：**
**`addFields` has the following form:**
```js
addFields({
  <新字段>: <表达式>
  <new field>: <expression>
})
```
`addFields` 可指定多个新字段，每个新字段的值由使用的表达式决定。
`addFields` can specify multiple new fields, and the value of each new field is determined by the expression used.
如果指定的新字段与原有字段重名，则新字段的值会覆盖原有字段的值。注意 `addFields` 不能用来给数组字段添加元素。
If the specified new field has the same name as the original field, the value of the new field will overwrite the value of the original field. Note that `addFields` cannot be used to add elements to an array field.
**示例 1：连续两次 addFields**
**Example 1: addFields twice in a row**
假设集合 scores 有如下记录：
Suppose the set scores has the following records:
```js
{
  _id: 1,
  student: "Maya",
  homework: [ 10, 5, 10 ],
  quiz: [ 10, 8 ],
  extraCredit: 0
}
{
  _id: 2,
  student: "Ryan",
  homework: [ 5, 6, 5 ],
  quiz: [ 8, 8 ],
  extraCredit: 8
}
```
应用两次 `addFields`，第一次增加两个字段分别为 `homework` 和 `quiz` 的和值，第二次增加一个字段再基于上两个和值求一次和值。
Apply `addFields` twice, add two fields to the sum of `homework` and `quiz` for the first time, add a field for the second time and then calculate the sum based on the previous two sums.
```js
const $ = db.command.aggregate
let res = await db.collection('scores').aggregate()
  .addFields({
    totalHomework: $.sum('$homework'),
    totalQuiz: $.sum('$quiz')
  })
  .addFields({
    totalScore: $.add(['$totalHomework', '$totalQuiz', '$extraCredit'])
  })
  .end()
```

返回结果如下：
The returned results are as follows:
```js
{
  "_id" : 1,
  "student" : "Maya",
  "homework" : [ 10, 5, 10 ],
  "quiz" : [ 10, 8 ],
  "extraCredit" : 0,
  "totalHomework" : 25,
  "totalQuiz" : 18,
  "totalScore" : 43
}
{
  "_id" : 2,
  "student" : "Ryan",
  "homework" : [ 5, 6, 5 ],
  "quiz" : [ 8, 8 ],
  "extraCredit" : 8,
  "totalHomework" : 16,
  "totalQuiz" : 16,
  "totalScore" : 40
}
```

**示例 2：在嵌套记录里增加字段**
**Example 2: Add fields to nested records**

可以用点表示法在嵌套记录里增加字段。假设 vehicles 集合含有如下记录：
You can use dot notation to add fields to nested records. Suppose the vehicles collection contains the following records:
```js
{ _id: 1, type: "car", specs: { doors: 4, wheels: 4 } }
{ _id: 2, type: "motorcycle", specs: { doors: 0, wheels: 2 } }
{ _id: 3, type: "jet ski" }
```
可以用如下操作在 `specs` 字段下增加一个新的字段 `fuel_type`，值都设为固定字符串 `unleaded`：
You can use the following operation to add a new field `fuel_type` under the `specs` field, and set the value to a fixed string `unleaded`:
```js
let res = await db.collection('vehicles').aggregate()
  .addFields({
    'spec.fuel_type': 'unleaded'
  })
  .end()
```

返回结果如下：
The returned results are as follows:
```js
{ _id: 1, type: "car",
   specs: { doors: 4, wheels: 4, fuel_type: "unleaded" } }
{ _id: 2, type: "motorcycle",
   specs: { doors: 0, wheels: 2, fuel_type: "unleaded" } }
{ _id: 3, type: "jet ski",
   specs: { fuel_type: "unleaded" } }
```

**示例 3：设置字段值为另一个字段**
**Example 3: Set the field value to another field**
可以通过 `$` 加字段名组成的字符串作为值的表达式来设置字段的值为另一个字段的值。
You can set the value of a field to the value of another field by using `$` plus a string of field names as the value expression.
同样用上一个集合示例，可以用如下操作添加一个字段 `vehicle_type`，将其值设置为 `type` 字段的值：
Also using the previous collection example, you can add a field `vehicle_type` with the following operations, and set its value to the value of the `type` field:
```js
let res = await db.collection('vehicles').aggregate()
  .addFields({
    vehicle_type: '$type'
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{ _id: 1, type: "car", vehicle_type: "car",
   specs: { doors: 4, wheels: 4, fuel_type: "unleaded" } }
{ _id: 2, type: "motorcycle", vehicle_type: "motorcycle",
   specs: { doors: 0, wheels: 2, fuel_type: "unleaded" } }
{ _id: 3, type: "jet ski", vehicle_type: "jet ski",
   specs: { fuel_type: "unleaded" } }
```

### bucket@aggregate-bucket

聚合阶段。将输入记录根据给定的条件和边界划分成不同的组，每组即一个 `bucket`。
The polymerization stage. Divide the input records into different groups according to the given conditions and boundaries, each group is a `bucket`.
**API 说明**
**API description**
每组分别作为一个记录输出，包含一个以下界为值的 `_id` 字段和一个以组中记录数为值的 `count` 字段。`count` 在没有指定 `output` 的时候是默认输出的。
Each group is output as a record and contains a field called `_id` with the lower bound as the value and a field called `count` with the number of records in the group as the value. `count` is output by default when `output` is not specified.
`bucket` 只会在组内有至少一个记录的时候输出。
`bucket` will only output when there is at least one record in the group.
**bucket 的形式如下：**
**The form of the bucket is as follows:**
```js
bucket({
  groupBy: <expression>,
  boundaries: [<lowerbound1>, <lowerbound2>, ...],
  default: <literal>,
  output: {
    <output1>: <accumulator expr>,
    ...
    <outputN>: <accumulator expr>
  }
})
```
`groupBy` 是一个用以决定分组的表达式，会应用在各个输入记录上。可以用 `$` 前缀加上要用以分组的字段路径来作为表达式。除非用 `default` 指定了默认值，否则每个记录都需要包含指定的字段，且字段值必须在 `boundaries` 指定的范围之内。
`groupBy` is an expression used to determine the grouping and will be applied to each input record. You can use the `$` prefix plus the field path to be used for grouping as an expression. Unless a default value is specified with `default`, each record needs to contain the specified field, and the field value must be within the range specified by `boundaries`.
`boundaries` 是一个数组，每个元素分别是每组的下界。必须至少指定两个边界值。数组值必须是同类型递增的值。
`boundaries` is an array, and each element is the lower bound of each group. At least two boundary values ​​must be specified. The array value must be an increasing value of the same type.
`default` 可选，指定之后，没有进入任何分组的记录将都进入一个默认分组，这个分组记录的 `_id` 即由 `default` 决定。`default` 的值必须小于 `boundaries` 中的最小值或大于等于其中的最大值。`default` 的值可以与 `boundaries` 元素值类型不同。
`default` is optional. After specifying, records that have not entered any group will enter a default group. The `_id` of this group record is determined by `default`. The value of `default` must be less than the minimum value in `boundaries` or greater than or equal to the maximum value. The value of `default` can be different from the value type of the `boundaries` element.
`output` 可选，用以决定输出记录除了 `_id` 外还要包含哪些字段，各个字段的值必须用累加器表达式指定。当 `output` 指定时，默认的 `count` 是不会被默认输出的，必须手动指定：
`output` is optional. It is used to determine which fields the output record contains in addition to `_id`. The value of each field must be specified with an accumulator expression. When `output` is specified, the default `count` will not be output by default, and must be specified manually:

```js
output: {
  count: $.sum(1),
  ...
  <outputN>: <accumulator expr>
}
```
使用 bucket 需要满足以下至少一个条件，否则会抛出错误：
To use a bucket, at least one of the following conditions must be met, otherwise an error will be thrown:
每一个输入记录应用 groupBy 表达式获取的值都必须是一个在 boundaries 内的值
The value obtained by applying the groupBy expression to each input record must be a value within boundaries
指定一个 default 值，该值在 boundaries 以外，或与 boundaries 元素的值不同的类型。
Specify a default value that is outside of boundaries or a different type from the value of the boundaries element.
**示例**
**Example**
假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10
}
{
  _id: "2",
  price: 50
}
{
  _id: "3",
  price: 20
}
{
  _id: "4",
  price: 80
}
{
  _id: "5",
  price: 200
}
```

对上述记录进行分组，将 [0, 50) 分为一组，[50, 100) 分为一组，其他分为一组：
Group the above records, divide [0, 50) into one group, [50, 100) into one group, and the others into one group:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .bucket({
    groupBy: '$price',
    boundaries: [0, 50, 100],
    default: 'other',
    output: {
      count: $.sum(1),
      ids: $.push('$_id')
    }
  })
  .end()
```

返回结果如下：
The returned results are as follows:
```js
[
  {
    "_id": 0,
    "count": 2,
    "ids": [
      "1",
      "3"
    ]
  },
  {
    "_id": 50,
    "count": 2,
    "ids": [
      "2",
      "4"
    ]
  },
  {
    "_id": "other",
    "count": 1,
    "ids": [
      "5"
    ]
  }
]
```

### bucketAuto@aggregate-bucket-auto

聚合阶段。将输入记录根据给定的条件划分成不同的组，每组即一个 `bucket`。与 `bucket` 的其中一个不同之处在于无需指定 `boundaries`，`bucketAuto` 会自动尝试将记录尽可能平均的分散到每组中。
The polymerization stage. Divide the input records into different groups according to the given conditions, each group is a `bucket`. One of the differences with `bucket` is that there is no need to specify `boundaries`. `bucketAuto` will automatically try to distribute records into each group as evenly as possible.
**API 说明**
**API description**
每组分别作为一个记录输出，包含一个以包含组中最大值和最小值两个字段的对象为值的 _id 字段和一个以组中记录数为值的 count 字段。count 在没有指定 output 的时候是默认输出的。
Each group is output as a record, including an _id field with the object containing the maximum and minimum values in the group as the value, and a count field with the number of records in the group as the value. count is output by default when output is not specified.
**bucketAuto 的形式如下：**
**The form of bucketAuto is as follows:**
```js
bucketAuto({
  groupBy: <expression>,
  buckets: <number>,
  granularity: <string>,
  output: {
    <output1>: <accumulator expr>,
    ...
    <outputN>: <accumulator expr>
  }
})
```
`groupBy` 是一个用以决定分组的表达式，会应用在各个输入记录上。可以用 $ 前缀加上要用以分组的字段路径来作为表达式。除非用 `default` 指定了默认值，否则每个记录都需要包含指定的字段，且字段值必须在 `boundaries` 指定的范围之内。
`groupBy` is an expression used to determine the grouping and will be applied to each input record. You can use the $ prefix plus the field path to be used for grouping as an expression. Unless a default value is specified with `default`, each record needs to contain the specified field, and the field value must be within the range specified by `boundaries`.
`buckets` 是一个用于指定划分组数的正整数。
`buckets` is a positive integer used to specify the number of divided groups.
`granularity` 是可选枚举值字符串，用于保证自动计算出的边界符合给定的规则。这个字段仅可在所有 `groupBy` 值都是数字并且没有 `NaN` 的情况下使用。枚举值包括：`R5、R10、R20、R40、R80、1-2-5、E6、E12、E24、E48、E96、E192、POWERSOF2`。
`granularity` is an optional enumerated value string used to ensure that the automatically calculated boundary conforms to the given rules. This field can only be used when all `groupBy` values are numbers and there is no `NaN`. Enumeration values include: `R5, R10, R20, R40, R80, 1-2-5, E6, E12, E24, E48, E96, E192, POWERSOF2`.
`output` 可选，用以决定输出记录除了 `_id` 外还要包含哪些字段，各个字段的值必须用累加器表达式指定。当 `output` 指定时，默认的 `count` 是不会被默认输出的，必须手动指定：
`output` is optional. It is used to determine which fields the output record contains in addition to `_id`. The value of each field must be specified with an accumulator expression. When `output` is specified, the default `count` will not be output by default, and must be specified manually:
```js
output: {
  count: $.sum(1),
  ...
  <outputN>: <accumulator expr>
}
```
在以下情况中，输出的分组可能会小于给定的组数：
In the following cases, the output group may be less than the given number of groups:
输入记录数少于分组数
The number of input records is less than the number of groups
- `groupBy` 计算得到的唯一值少于分组数
- The unique value calculated by `groupBy` is less than the number of groups
- `granularity` 的间距少于分组数
- The spacing of `granularity` is less than the number of groups
- `granularity` 不够精细以至于不能平均分配到各组
- `granularity` is not granular enough to be evenly distributed to each group
**granularity 详细说明**
**granularity detailed description**
`granularity` 用于保证边界值属于一个给定的数字序列。
`granularity` is used to ensure that the boundary value belongs to a given sequence of numbers.

**Renard 序列**
**Renard sequence**
Renard 序列是以 10 的 5 / 10 / 20 / 40 / 80 次方根来推导的、在 1.0 到 10.0 (如果是 R80 则是 10.3) 之间的数字序列。
The Renard sequence is derived from 10 to the root of 5/10/20/40/80 and is a sequence of numbers between 1.0 and 10.0 (or 10.3 in the case of R80).
设置 granularity 为 R5 / R10 / R20 / R40 / R80 就把边界值限定在序列内。如果 groupBy 的值不在 1.0 到 10.0 (如果是 R80 则是 10.3) 内，则序列数字会自动乘以 10。
Set granularity to R5 / R10 / R20 / R40 / R80 to limit the boundary value within the sequence. If the value of groupBy is not between 1.0 and 10.0 (or 10.3 in the case of R80), the serial number will automatically be multiplied by 10.
**E 序列**
**E sequence**
E 序列是以 10 的 6 / 12 / 24 / 48 / 96 / 192 次方跟来推导的、带有一个特定误差的、在 1.0 到 10.0 之间的数字序列。
The E sequence is a sequence of numbers between 1.0 and 10.0 that is derived from the power of 10 to the power of 6/12/24/48/96/192 with a specific error.
**1-2-5 序列**
**1-2-5 sequence**
1-2-5 序列 表现与三值 Renard 序列一样。
The 1-2-5 sequence behaves the same as the three-value Renard sequence.
**2的次方序列**
**Sequence of Powers of 2**
由 2 的各次方组成的序列数字。
A sequence number composed of the powers of 2.
**示例**
**Example**
假设集合 items 有如下记录：
Suppose the collection items has the following records:

```js
{
  _id: "1",
  price: 10.5
}
{
  _id: "2",
  price: 50.3
}
{
  _id: "3",
  price: 20.8
}
{
  _id: "4",
  price: 80.2
}
{
  _id: "5",
  price: 200.3
}
```
对上述记录进行自动分组，分成三组：
Automatically group the above records into three groups:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .bucketAuto({
    groupBy: '$price',
    buckets: 3,
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": {
    "min": 10.5,
    "max": 50.3
  },
  "count": 2
}
{
  "_id": {
    "min": 50.3,
    "max": 200.3
  },
  "count": 2
}
{
  "_id": {
    "min": 200.3,
    "max": 200.3
  },
  "count": 1
}
```

### count@aggregate-count

聚合阶段。计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。
The polymerization stage. Calculate the number of records input to this stage in the previous aggregation stage, and output a record, where the value of the specified field is the number of records.
**API 说明**
**API description**
**count 的形式如下：**
**count has the following form:**
```js
count(<string>)
```
`<string>` 是输出记录数的字段的名字，不能是空字符串，不能以 $ 开头，不能包含 . 字符。
`<string>` is the name of the field that outputs the number of records. It cannot be an empty string, cannot start with $, and cannot contain. characters.

count 阶段等同于 group + project 的操作：
The count phase is equivalent to the group + project operation:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .group({
    _id: null,
    count: $.sum(1),
  })
  .project({
    _id: 0,
  })
  .end()
```
上述操作会输出一个包含 count 字段的记录。
The above operation will output a record containing the count field.
**示例**
**Example**
假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10.5
}
{
  _id: "2",
  price: 50.3
}
{
  _id: "3",
  price: 20.8
}
{
  _id: "4",
  price: 80.2
}
{
  _id: "5",
  price: 200.3
}
```
找出价格大于 50 的记录数：
Find the number of records with a price greater than 50:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .match({
    price: $.gt(50)
  })
  .count('expensiveCount')
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "expensiveCount": 3
}
```

### geoNear@aggregate-geo-near

聚合阶段。将记录按照离给定点从近到远输出。
The polymerization stage. The records will be output from near to far away from the given point.
|属性								|类型			|默认值	|必填	|说明																																														|
|Attribute |Type |Default value |Required |Description |
|----								|----			|----		|----	|----																																														|
|near								|GeoPoint	|				|是		|GeoJSON Point，用于判断距离的点																																|
|near |GeoPoint | |Yes |GeoJSON Point, the point used to judge the distance |
|spherical					|true			|				|是		|必填，值为 true																																								|
|spherical |true | |Yes |Required, value is true |
|maxDistance				|number		|				|否		|距离最大值																																											|
|maxDistance |number | |No |Maximum distance |
|minDistance				|number		|				|否		|距离最小值																																											|
|minDistance |number | |No |Minimum distance |
|query							|Object		|				|否		|要求记录必须同时满足该条件（语法同 where）																											|
|query |Object | |No |Requires that the record must meet this condition at the same time (syntax is the same as where) |
|distanceMultiplier	|number		|				|否		|返回时在距离上乘以该数字																																				|
|distanceMultiplier |number | |No |Multiply the distance by the number when returning |
|distanceField			|string		|				|是		|存放距离的输出字段名，可以用点表示法表示一个嵌套字段																						|
|distanceField |string | |Yes |The name of the output field that stores the distance, a nested field can be expressed in dot notation |
|includeLocs				|string		|				|否		|列出要用于距离计算的字段，如果记录中有多个字段都是地理位置时有用																|
|includeLocs |string | |No |List the fields to be used for distance calculation, useful if multiple fields in the record are all geographic locations |
|key								|string		|				|否		|选择要用的地理位置索引。如果集合由多个地理位置索引，则必须指定一个，指定的方式是指定对应的字段	|
|key |string | |No |Select the geographic index to be used. If the collection is indexed by multiple geographic locations, one must be specified. The way to specify is to specify the corresponding field |
**API 说明**
**API description**
- `geoNear` 必须为第一个聚合阶段
- `geoNear` must be the first aggregation stage
- 必须有地理位置索引。如果有多个，必须用 `key` 参数指定要使用的索引。
- Must have a geographic index. If there are more than one, the index to be used must be specified with the `key` parameter.
**示例**
**Example**
假设集合 attractions 有如下记录：
Suppose the collection attractions has the following records:
```js
{
  "_id": "geoNear.0",
  "city": "Guangzhou",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      113.30593,
      23.1361155
    ]
  },
  "name": "Canton Tower"
},
{
  "_id": "geoNear.1",
  "city": "Guangzhou",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      113.306789,
      23.1564721
    ]
  },
  "name": "Baiyun Mountain"
},
{
  "_id": "geoNear.2",
  "city": "Beijing",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      116.3949659,
      39.9163447
    ]
  },
  "name": "The Palace Museum"
},
{
  "_id": "geoNear.3",
  "city": "Beijing",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      116.2328567,
      40.242373
    ]
  },
  "name": "Great Wall"
}
```
```js
const $ = db.command.aggregate
let res = await db.collection('attractions').aggregate()
  .geoNear({
    distanceField: 'distance', // 输出的每个记录中 distance 即是与给定点的距离(The distance in each output record is the distance from the given point)
    spherical: true,
    near: new db.Geo.Point(113.3089506, 23.0968251),
    query: {
      docType: 'geoNear',
    },
    key: 'location', // 若只有 location 一个地理位置索引的字段，则不需填(If there is only one field of geographic location index, location is not required)
    includeLocs: 'location', // 若只有 location 一个是地理位置，则不需填(If only location is a geographic location, do not need to fill in)
  })
  .end()
```


返回结果如下：
The returned results are as follows:
```js
{
  "_id": "geoNear.0",
  "location": {
    "type": "Point",
    "coordinates": [
      113.30593,
      23.1361155
    ]
  },
  "docType": "geoNear",
  "name": "Canton Tower",
  "city": "Guangzhou",
  "distance": 4384.68131486958
},
{
  "_id": "geoNear.1",
  "city": "Guangzhou",
  "location": {
    "type": "Point",
    "coordinates": [
      113.306789,
      23.1564721
    ]
  },
  "docType": "geoNear",
  "name": "Baiyun Mountain",
  "distance": 6643.521654040738
},
{
  "_id": "geoNear.2",
  "docType": "geoNear",
  "name": "The Palace Museum",
  "city": "Beijing",
  "location": {
    "coordinates": [
      116.3949659,
      39.9163447
    ],
    "type": "Point"
  },
  "distance": 1894750.4414538583
},
{
  "_id": "geoNear.3",
  "docType": "geoNear",
  "name": "Great Wall",
  "city": "Beijing",
  "location": {
    "type": "Point",
    "coordinates": [
      116.2328567,
      40.242373
    ]
  },
  "distance": 1928300.3308822548
}
```

### group@aggregate-group

聚合阶段。将输入记录按给定表达式分组，输出时每个记录代表一个分组，每个记录的 _id 是区分不同组的 key。输出记录中也可以包括累计值，将输出字段设为累计值即会从该分组中计算累计值。
The polymerization stage. The input records are grouped according to the given expression, each record represents a group when outputting, and the _id of each record is the key to distinguish different groups. The accumulated value can also be included in the output record. Setting the output field to the accumulated value will calculate the accumulated value from the group.
使用group可以很方便的实现类似SQL的distinct功能
Using group can easily realize the distinct function similar to SQL
**API 说明**
**API description**
**group 的形式如下：**
**The form of group is as follows:**
```js
group({
  _id: <expression>,
  <field1>: <accumulator1>,
  ...
  <fieldN>: <accumulatorN>
})
```

`_id` 参数是必填的，如果填常量则只有一组。其他字段是可选的，都是累计值，用 `$.sum` 等累计器(`const $ = db.command.aggregate`)，但也可以使用其他表达式。
The `_id` parameter is required. If you fill in a constant, there is only one set. Other fields are optional, they are all accumulated values, use accumulators such as `$.sum` (`const $ = db.command.aggregate`), but other expressions can also be used.
累计器必须是以下操作符之一：
The accumulator must be one of the following operators:
详细使用方法见[累计器操作符](#累计器操作符)
For detailed usage, please refer to [Accumulator Operator](#Accumulator Operator)

|操作符				|说明																																																					|
|Operator |Description |
|----					|----																																																					|
|addToSet			|向数组中添加值，如果数组中已存在该值，不执行任何操作																													|
|addToSet |Add a value to the array, if the value already exists in the array, do nothing |
|avg					|返回一组集合中，指定字段对应数据的平均值																																			|
|avg |Returns the average value of the data corresponding to the specified field in a set of collections |
|sum					|计算并且返回一组字段所有数值的总和																																						|
|sum |Calculate and return the sum of all values ​​in a set of fields |
|first				|返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。			|
|first |Returns the value corresponding to the first record of the specified field in a set. This operation is meaningful only when the set of sets is sorted according to a certain definition. |
|last					|返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。		|
|last |Returns the value corresponding to the last record of the specified field in a set. This operation is meaningful only when the set of sets is sorted according to a certain definition. |
|max					|返回一组数值的最大值																																													|
|max |Returns the maximum value of a set of values ​​|
|min					|返回一组数值的最小值																																													|
|min |Returns the minimum value of a set of values ​​|
|push					|在 group 阶段，返回一组中表达式指定列与对应的值，一起组成的数组																							|
|push |In the group stage, returns an array composed of the specified column of the expression and the corresponding value in a group |
|stdDevPop		|返回一组字段对应值的标准差																																										|
|stdDevPop |Returns the standard deviation of the corresponding values ​​of a set of fields |
|stdDevSamp		|计算输入值的样本标准偏差。如果输入值代表数据总体，或者不概括更多的数据，请改用 db.command.aggregate.stdDevPop|
|stdDevSamp |Calculates the sample standard deviation of the input value. If the input value represents the overall data, or does not summarize more data, please use db.command.aggregate.stdDevPop|
|mergeObjects	|将多个文档合并为单个文档																																											|
|mergeObjects |Merge multiple documents into a single document |

**内存限制**
**Memory Limit**
该阶段有 100M 内存使用限制。
There is a 100M memory usage limit at this stage.
**示例 1：按字段值分组**
**Example 1: Group by field value**
假设集合 avatar 有如下记录：
Suppose the collection avatar has the following records:
```js
{
  _id: "1",
  alias: "john",
  region: "asia",
  scores: [40, 20, 80],
  coins: 100
}
{
  _id: "2",
  alias: "arthur",
  region: "europe",
  scores: [60, 90],
  coins: 20
}
{
  _id: "3",
  alias: "george",
  region: "europe",
  scores: [50, 70, 90],
  coins: 50
}
{
  _id: "4",
  alias: "john",
  region: "asia",
  scores: [30, 60, 100, 90],
  coins: 40
}
{
  _id: "5",
  alias: "george",
  region: "europe",
  scores: [20],
  coins: 60
}
{
  _id: "6",
  alias: "john",
  region: "asia",
  scores: [40, 80, 70],
  coins: 120
}
```
```js
const $ = db.command.aggregate
let res = await db.collection('avatar').aggregate()
  .group({
    _id: '$alias',
    num: $.sum(1)
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": "john",
  "num": 3
}
{
  "_id": "authur",
  "num": 1
}
{
  "_id": "george",
  "num": 2
}
```

**示例 2：按多个值分组**
**Example 2: Group by multiple values**

可以给 _id 传入记录的方式按多个值分组。还是沿用上面的示例数据，按各个区域（region）获得相同最高分（score）的来分组，并求出各组虚拟币（coins）的总量：
You can pass in records to _id and group them by multiple values. Still use the example data above, group the regions (regions) with the same highest score (score), and find the total amount of each group of virtual coins (coins):
```js
const $ = db.command.aggregate
let res = await db.collection('avatar').aggregate()
  .group({
    _id: {
      region: '$region',
      maxScore: $.max('$scores')
    },
    totalCoins: $.sum('$coins')
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": {
    "region": "asia",
    "maxScore": 80
  },
  "totalCoins": 220
}
{
  "_id": {
    "region": "asia",
    "maxScore": 100
  },
  "totalCoins": 40
}
{
  "_id": {
    "region": "europe",
    "maxScore": 90
  },
  "totalCoins": 70
}
{
  "_id": {
    "region": "europe",
    "maxScore": 20
  },
  "totalCoins": 60
}
```

### limit@aggregate-limit

聚合阶段。限制输出到下一阶段的记录数。
The polymerization stage. Limit the number of records output to the next stage.
**示例**
**Example**
假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10
}
{
  _id: "2",
  price: 50
}
{
  _id: "3",
  price: 20
}
{
  _id: "4",
  price: 80
}
{
  _id: "5",
  price: 200
}
```
返回价格大于 20 的记录的最小的两个记录：
Return the smallest two records with a price greater than 20:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .match({
    price: $.gt(20)
  })
  .sort({
    price: 1,
  })
  .limit(2)
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": "2",
  "price": 50
}
{
  "_id": "4",
  "price": 80
}
```

### lookup@aggregate-lookup

聚合阶段。联表查询。与同个数据库下的一个指定的集合做 left outer join(左外连接)。对该阶段的每一个输入记录，lookup 会在该记录中增加一个数组字段，该数组是被联表中满足匹配条件的记录列表。lookup 会将连接后的结果输出给下个阶段。
The polymerization stage. Union table query. Do left outer join with a specified collection in the same database. For each input record in this stage, lookup will add an array field to the record. The array is a list of records in the joined table that meet the matching conditions. Lookup will output the connected result to the next stage.
**API 说明**
**API description**
`lookup` 有两种使用方式
There are two ways to use `lookup`
#### 相等匹配
#### Equal matching
将输入记录的一个字段和被连接集合的一个字段进行相等匹配时，采用以下定义：
When matching a field of the input record with a field of the connected set, the following definitions are used:
```js
lookup({
  from: <要连接的集合名(Collection name to be connected)>,
  localField: <输入记录的要进行相等匹配的字段(Enter the field of the record to be matched equally)>,
  foreignField: <被连接集合的要进行相等匹配的字段(Fields of the connected set to be matched equally)>,
  as: <输出的数组字段名(Output array field name)>
})
```
**参数详细说明**
**Detailed description of parameters**
|参数字段			|说明																																																																										|
|Parameter field |Description |
|----					|----																																																																										|
|from					|要进行连接的另外一个集合的名字																																																													|
|from |The name of another set to be connected |
|localField		|当前流水线的输入记录的字段名，该字段将被用于与 from 指定的集合的 foreignField 进行相等匹配。如果输入记录中没有该字段，则该字段的值在匹配时会被视作 null|
|localField |The field name of the input record of the current pipeline. This field will be used for equal matching with the foreignField of the set specified by from. If there is no such field in the input record, the value of the field will be treated as null when matching
|foreignField	|被连接集合的字段名，该字段会被用于与 localField 进行相等匹配。如果被连接集合的记录中没有该字段，该字段的值将在匹配时被视作 null												|
|foreignField |The name of the field of the connected collection, which will be used for equal matching with localField. If there is no such field in the records of the connected set, the value of the field will be treated as null when matching |
|as						|指定连接匹配出的记录列表要存放的字段名，这个数组包含的是匹配出的来自 from 集合的记录。如果输入记录中本来就已有该字段，则该字段会被覆写									|
|as |Specifies the name of the field to be stored in the list of records matched by the connection. This array contains the matched records from the from collection. If the field already exists in the input record, the field will be overwritten |
这个操作等价于以下伪 SQL 操作：
This operation is equivalent to the following pseudo SQL operation:

```
SELECT *, <output array field>
FROM collection
WHERE <output array field> IN (SELECT *
                               FROM <collection to join>
                               WHERE <foreignField>= <collection.localField>);
```

**例子：**
**example:**
- 指定一个相等匹配条件
- Specify an equal matching condition
- 对数组字段应用相等匹配
- Apply equal matching to array fields
- 组合 mergeObjects 应用相等匹配
-Combine mergeObjects to apply equal matching
#### 自定义连接条件、拼接子查询
#### Custom connection conditions, splicing sub-queries
如果需要指定除相等匹配之外的连接条件，或指定多个相等匹配条件，或需要拼接被连接集合的子查询结果，那可以使用如下定义：
If you need to specify connection conditions other than equal matching, or specify multiple equal matching conditions, or need to splice the sub-query results of the connected set, you can use the following definition:
```js
lookup({
  from: <要连接的集合名(Collection name to be connected)>,
  let: { <变量1(Variable 1)>: <表达式1(Expression 1)>, ..., <变量n(Variable n)>: <表达式n(Expression n)> },
  pipeline: [ <在要连接的集合上进行的流水线操作(Pipeline operations on the collection to be connected)> ],
  as: <输出的数组字段名(Output array field name)>
})
```

**参数详细说明**
**Detailed description of parameters**
|参数字段	|说明																																																																																																																																																				|
|Parameter field |Description |
|----			|----																																																																																																																																																				|
|from			|要进行连接的另外一个集合的名字																																																																																																																																							|
|from |The name of another set to be connected |
|let			|可选。指定在 pipeline 中可以使用的变量，变量的值可以引用输入记录的字段，比如 let: { userName: '$name' } 就代表将输入记录的 name 字段作为变量 userName 的值。在 pipeline 中无法直接访问输入记录的字段，必须通过 let 定义之后才能访问，访问的方式是在 expr 操作符中用 $$变量名 的方式访问，比如 $$userName。	|
|let |Optional. Specify the variables that can be used in the pipeline. The value of the variable can refer to the field of the input record. For example, let: {userName:'$name'} represents the name field of the input record as the value of the variable userName. The input record fields cannot be accessed directly in the pipeline. They must be defined by let before they can be accessed. The access method is to use the $$ variable name in the expr operator, such as $$userName. |
|pipeline	|指定要在被连接集合中运行的聚合操作。如果要返回整个集合，则该字段取值空数组 []。在 pipeline 中无法直接访问输入记录的字段，必须通过 let 定义之后才能访问，访问的方式是在 expr 操作符中用 $$变量名 的方式访问，比如 $$userName。																																							|
|pipeline |Specifies the aggregation operation to be run in the connected collection. If you want to return the entire collection, the field takes an empty array []. The input record fields cannot be accessed directly in the pipeline. They must be defined by let before they can be accessed. The access method is to use the $$ variable name in the expr operator, such as $$userName. |
|as				|指定连接匹配出的记录列表要存放的字段名，这个数组包含的是匹配出的来自 from 集合的记录。如果输入记录中本来就已有该字段，则该字段会被覆写																																																																																			|
|as |Specifies the name of the field to be stored in the list of records matched by the connection. This array contains the matched records from the from collection. If the field already exists in the input record, the field will be overwritten |
该操作等价于以下伪 SQL 语句：
This operation is equivalent to the following pseudo SQL statement:
```
SELECT *, <output array field>
FROM collection
WHERE <output array field> IN (SELECT <documents as determined from the pipeline>
                               FROM <collection to join>
                               WHERE <pipeline> );
```

**例子**
**example**
- 指定多个连接条件
- Specify multiple connection conditions
- 拼接被连接集合的子查询
- Splice the subqueries of the connected set
**示例**
**Example**
**指定一个相等匹配条件**
**Specify an equal matching condition**
假设 orders 集合有以下记录：
Suppose the orders collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":30,"quantity":2},
  {"_id":5,"book":"science 1","price":20,"quantity":1},
  {"_id":6}
]
```
books 集合有以下记录：
The books collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","author":"author 3","category":"science","stock":40,"title":"science 2"},
  {"_id":"book2","author":"author 2","category":"novel","stock":20,"title":"novel 2"},
  {"_id":"book5","author":"author 4","category":"science","stock":50,"title":null},
  {"_id":"book6","author":"author 5","category":"novel","stock":"60"}
]
```
以下聚合操作可以通过一个相等匹配条件连接 `orders` 和 `books` 集合，匹配的字段是 `orders` 集合的 `book` 字段和 `books` 集合的 title 字段：
The following aggregation operations can connect the `orders` and the `books` collections through an equal matching condition. The matched fields are the `book` field of the `orders` collection and the title field of the `books` collection:
```js
const db = uniCloud.database()
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    localField: 'book',
    foreignField: 'title',
    as: 'bookList',
  })
  .end()
```
结果：
result:
```js
[
  {
    "_id": 4,
    "book": "novel 1",
    "price": 30,
    "quantity": 2,
    "bookList": [
      {
        "_id": "book1",
        "title": "novel 1",
        "author": "author 1",
        "category": "novel",
        "stock": 10
      }
    ]
  },
  {
    "_id": 5,
    "book": "science 1",
    "price": 20,
    "quantity": 1,
    "bookList": [
      {
        "_id": "book3",
        "category": "science",
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      }
    ]
  },
  {
    "_id": 6,
    "bookList": [
      {
        "_id": "book5",
        "category": "science",
        "author": "author 4",
        "stock": 50,
        "title": null
      },
      {
        "_id": "book6",
        "author": "author 5",
        "stock": "60",
        "category": "novel"
      }
    ]
  }
]
```
对数组字段应用相等匹配
Apply equal matching to array fields
假设 authors 集合有以下记录：
Suppose the authors collection has the following records:
```js
[
  {"_id": 1, "name": "author 1", "intro": "Two-time best-selling sci-fiction novelist"},
  {"_id": 3, "name": "author 3", "intro": "UCB assistant professor"},
  {"_id": 4, "name": "author 4", "intro": "major in CS"}
]
```
books 集合有以下记录：
The books collection has the following records:
```js
[
  {"_id":"book1","authors":["author 1"],"category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","authors":["author 3", "author 4"],"category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","authors":["author 3"],"category":"science","stock":40,"title":"science 2"}
]
```
以下操作获取作者信息及他们分别发表的书籍，使用了 lookup 操作匹配 authors 集合的 name 字段和 books 集合的 authors 数组字段：
The following operation obtains the author information and the books published by them, and uses the lookup operation to match the name field of the authors collection and the authors array field of the books collection:
```js
const db = cloud.database()
let res = await db.collection('authors').aggregate()
  .lookup({
    from: 'books',
    localField: 'name',
    foreignField: 'authors',
    as: 'publishedBooks',
  })
  .end()
```
结果
result
```js
[
  {
    "_id": 1,
    "intro": "Two-time best-selling sci-fiction novelist",
    "name": "author 1",
    "publishedBooks": [
      {
        "_id": "book1",
        "title": "novel 1",
        "category": "novel",
        "stock": 10,
        "authors": [
          "author 1"
        ]
      }
    ]
  },
  {
    "_id": 3,
    "name": "author 3",
    "intro": "UCB assistant professor",
    "publishedBooks": [
      {
        "_id": "book3",
        "category": "science",
        "title": "science 1",
        "stock": 30,
        "authors": [
          "author 3",
          "author 4"
        ]
      },
      {
        "_id": "book4",
        "title": "science 2",
        "category": "science",
        "stock": 40,
        "authors": [
          "author 3"
        ]
      }
    ]
  },
  {
    "_id": 4,
    "intro": "major in CS",
    "name": "author 4",
    "publishedBooks": [
      {
        "_id": "book3",
        "category": "science",
        "title": "science 1",
        "stock": 30,
        "authors": [
          "author 3",
          "author 4"
        ]
      }
    ]
  }
]
```

**组合 mergeObjects 应用相等匹配**
**Combine mergeObjects to apply equal matching**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":30,"quantity":2},
  {"_id":5,"book":"science 1","price":20,"quantity":1},
  {"_id":6}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","author":"author 3","category":"science","stock":40,"title":"science 2"},
  {"_id":"book2","author":"author 2","category":"novel","stock":20,"title":"novel 2"},
  {"_id":"book5","author":"author 4","category":"science","stock":50,"title":null},
  {"_id":"book6","author":"author 5","category":"novel","stock":"60"}
]
```
以下操作匹配 orders 的 book 字段和 books 的 title 字段，并将 books 匹配结果直接 merge 到 orders 记录中。
The following operation matches the book field of orders and the title field of books, and merges the matching result of books directly into the orders record.
```js
var db = cloud.database()
var $ = db.command.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: "books",
    localField: "book",
    foreignField: "title",
    as: "bookList"
  })
  .replaceRoot({
    newRoot: $.mergeObjects([ $.arrayElemAt(['$bookList', 0]), '$$ROOT' ])
  })
  .project({
    bookList: 0
  })
  .end()
```
结果
result
```js
[
  {
    "_id": 4,
    "title": "novel 1",
    "author": "author 1",
    "time": 1564456048486,
    "category": "novel",
    "stock": 10,
    "book": "novel 1",
    "price": 30,
    "quantity": 2
  },
  {
    "_id": 5,
    "category": "science",
    "title": "science 1",
    "author": "author 3",
    "stock": 30,
    "book": "science 1",
    "price": 20,
    "quantity": 1
  },
  {
    "_id": 6,
    "category": "science",
    "author": "author 4",
    "stock": 50,
    "title": null
  }
]
```

**指定多个连接条件**
**Specify multiple connection conditions**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":300,"quantity":20},
  {"_id":5,"book":"science 1","price":20,"quantity":1}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"}
]
```
以下操作连接 `orders` 和 `books` 集合，要求两个条件：
The following operation connects the `orders` and `books` collections and requires two conditions:
- orders 的 book 字段与 books 的 title 字段相等
- The book field of orders is equal to the title field of books
- books 的 stock 字段 大于或等于 orders 的 quantityorders 字段
- The stock field of books is greater than or equal to the quantityorders field of orders
```js
const db = cloud.database()
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    let: {
      order_book: '$book',
      order_quantity: '$quantity'
    },
    pipeline: $.pipeline()
      .match(dbCmd.expr($.and([
        $.eq(['$title', '$$order_book']),
        $.gte(['$stock', '$$order_quantity'])
      ])))
      .project({
        _id: 0,
        title: 1,
        author: 1,
        stock: 1
      })
      .done(),
    as: 'bookList',
  })
  .end()
```
结果：
result:
```js
[
  {
    "_id": 4,
    "book": "novel 1",
    "price": 300,
    "quantity": 20,
    "bookList": []
  },
  {
    "_id": 5,
    "book": "science 1",
    "price": 20,
    "quantity": 1,
    "bookList": [
      {
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      }
    ]
  }
]
```

**拼接被连接集合的子查询**
**Subqueries for splicing connected sets**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":30,"quantity":2},
  {"_id":5,"book":"science 1","price":20,"quantity":1}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","author":"author 3","category":"science","stock":40,"title":"science 2"}
]
```
在每条输出记录上加上一个数组字段，该数组字段的值是对 books 集合的一个查询语句的结果：
Add an array field to each output record, the value of the array field is the result of a query statement on the books collection:
```js
const db = cloud.database()
const $ = db.command.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    let: {
      order_book: '$book',
      order_quantity: '$quantity'
    },
    pipeline: $.pipeline()
      .match({
        author: 'author 3'
      })
      .project({
        _id: 0,
        title: 1,
        author: 1,
        stock: 1
      })
      .done(),
    as: 'bookList',
  })
  .end()
```
结果
result
```js
[
  {
    "_id": 4,
    "book": "novel 1",
    "price": 30,
    "quantity": 20,
    "bookList": [
      {
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      },
      {
        "title": "science 2",
        "author": "author 3",
        "stock": 40
      }
    ]
  },
  {
    "_id": 5,
    "book": "science 1",
    "price": 20,
    "quantity": 1,
    "bookList": [
      {
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      },
      {
        "title": "science 2",
        "author": "author 3",
        "stock": 40
      }
    ]
  }
]
```

### match@aggregate-match

聚合阶段。根据条件过滤文档，并且把符合条件的文档传递给下一个流水线阶段。
The polymerization stage. Filter documents based on conditions, and pass documents that meet the conditions to the next pipeline stage.
**API 说明**
**API description**
**match 的形式如下：**
The form of **match is as follows:**
```js
match(<查询条件(Query conditions)>)
```

查询条件与普通查询一致，可以用普通查询操作符，注意 match 阶段和其他聚合阶段不同，不可使用聚合操作符，只能使用查询操作符。
The query conditions are the same as ordinary queries, and ordinary query operators can be used. Note that the match phase is different from other aggregation phases. Aggregation operators cannot be used, only query operators can be used.
```js
// 直接使用字符串
// Use string directly
match({
  name: 'Tony Stark'
})
```
```js
// 使用操作符
// Use operators
const dbCmd = db.command
match({
  age: dbCmd.gt(18)
})
```

**示例**
**Example**

假设集合 articles 有如下记录：
Suppose the collection articles has the following records:
```js
{ "_id" : "1", "author" : "stark",  "score" : 80 }
{ "_id" : "2", "author" : "stark",  "score" : 85 }
{ "_id" : "3", "author" : "bob",    "score" : 60 }
{ "_id" : "4", "author" : "li",     "score" : 55 }
{ "_id" : "5", "author" : "jimmy",  "score" : 60 }
{ "_id" : "6", "author" : "li",     "score" : 94 }
{ "_id" : "7", "author" : "justan", "score" : 95 }
```

**匹配**
**match**

下面是一个直接匹配的例子：
The following is an example of a direct match:
```js
let res = await db.collection('articles')
  .aggregate()
  .match({
    author: 'stark'
  })
  .end()
```
这里的代码尝试找到所有 author 字段是 stark 的文章，那么匹配如下：
The code here tries to find all articles whose author field is stark, then the match is as follows:
```js
{ "_id" : "1", "author" : "stark", "score" : 80 }
{ "_id" : "2", "author" : "stark", "score" : 85 }
```

**计数**
**count**
match 过滤出文档后，还可以与其他流水线阶段配合使用。
After match filters out documents, it can also be used in conjunction with other pipeline stages.
比如下面这个例子，我们使用 group 进行搭配，计算 score 字段大于 80 的文档数量：
For example, in the following example, we use group for collocation to calculate the number of documents whose score field is greater than 80:
```js
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('articles')
  .aggregate()
  .match({
    score: dbCmd.gt(80)
  })
  .group({
      _id: null,
      count: $.sum(1)
  })
  .end()
```
返回值如下：	
The return value is as follows:
```js
{ "_id" : null, "count" : 3 }
```

### project@aggregate-project

聚合阶段。把指定的字段传递给下一个流水线，指定的字段可以是某个已经存在的字段，也可以是计算出来的新字段。
The polymerization stage. Pass the specified field to the next pipeline. The specified field can be an existing field or a calculated new field.
**API 说明**
**API description**
**project 的形式如下：**
**The form of the project is as follows:**
```js
project({
  <表达式>
})
```

表达式可以有以下格式：
The expression can have the following formats:
|格式									|说明																																														|
|Format |Description |
|----									|----																																														|
|<字段>: <1 或 true>	|指定包含某个已有字段																																						|
|<Field>: <1 or true> |Specify to include an existing field |
|_id: <0 或 false>		|舍弃 _id 字段																																									|
|_id: <0 or false> |Discard the _id field |
|<字段>: <表达式>			|加入一个新字段，或者重置某个已有字段																														|
|<field>: <expression> |Add a new field, or reset an existing field |
|<字段>: <0 或 false>	|舍弃某个字段（如果你指定舍弃了某个非 _id 字段，那么在此次 project 中，你不能再使用其它表达式）	|
|<Field>: <0 or false> |Discard a field (If you specify to discard a non-_id field, then in this project, you cannot use other expressions) |

**指定包含字段**
**Specify include fields**
_id 字段是默认包含在输出中的，除此之外其他任何字段，如果想要在输出中体现的话，必须在 project 中指定； 如果指定包含一个尚不存在的字段，那么 project 会忽略这个字段，不会加入到输出的文档中；
The _id field is included in the output by default, except for any other fields, if you want to be reflected in the output, you must specify it in the project; if you specify a field that does not exist yet, the project will ignore this field. Will not be added to the output document;
**指定排除字段**
**Specify excluded fields**
如果你在 project 中指定排除某个字段，那么其它字段都会体现在输出中； 如果指定排除的是非 _id 字段，那么在本次 project 中，不能再使用其它表达式；
If you specify to exclude a field in the project, then other fields will be reflected in the output; if you specify to exclude a field other than _id, then no other expressions can be used in this project;
**加入新的字段或重置某个已有字段**
**Add a new field or reset an existing field**
你可以使用一些特殊的表达式加入新的字段，或重置某个已有字段。
You can use some special expressions to add new fields, or reset an existing field.
**多层嵌套的字段**
**Multi-level nested fields**
有时有些字段处于多层嵌套的底层，我们可以使用点记法：
Sometimes some fields are at the bottom of multiple levels of nesting, we can use dot notation:
```js
"contact.phone.number": <1 or 0 or 表达式(1 or 0 or expression)>
```
也可以直接使用嵌套的格式：
You can also use the nested format directly:
```js
contact: { phone: { number: <1 or 0 or 表达式(1 or 0 or 表达式)> } }
```

**示例**
**Example**

假设我们有一个 articles 集合，其中含有以下文档：
Suppose we have an articles collection, which contains the following documents:
```js
{
    "_id": 666,
    "title": "This is title",
    "author": "Nobody",
    "isbn": "123456789",
    "introduction": "......"
}
```
**指定包含某些字段**
**Specify to include certain fields**

下面的代码使用 project，让输出只包含 _id、title 和 author 字段：
The following code uses project so that the output contains only the _id, title, and author fields:
```js
let res = await db.collection('articles')
  .aggregate()
  .project({
    title: 1,
    author: 1
  })
  .end()
```

输出如下：
The output is as follows:
```js
{ "_id" : 666, "title" : "This is title", "author" : "Nobody" }
```

**去除输出中的 _id 字段**
**Remove the _id field in the output**

_id 是默认包含在输出中的，如果不想要它，可以指定去除它：
_id is included in the output by default, if you don’t want it, you can specify to remove it:
```js
let res = await db.collection('articles')
  .aggregate()
  .project({
    _id: 0,  // 指定去除 _id 字段(Specify to remove the _id field)
    title: 1,
    author: 1
  })
  .end()
```
输出如下：(The output is as follows:)
```js
{ "title" : "This is title", "author" : "Nobody" }
```

**去除某个非 _id 字段**
**Remove a non-_id field**

我们还可以指定在输出中去掉某个非 _id 字段，这样其它字段都会被输出：
We can also specify to remove certain non-_id fields in the output, so that other fields will be output:
```js
let res = await db.collection('articles')
  .aggregate()
  .project({
    isbn: 0,  // 指定去除 isbn 字段(Specifies to remove the isbn field)
  })
  .end()
```
输出如下，相比输入，没有了 isbn 字段：
The output is as follows, compared to the input, there is no isbn field:
```js
{
    "_id" : 666,
    "title" : "This is title",
    "author" : "Nobody",
    "introduction": "......"
}
```

**加入计算出的新字段**
**Add the calculated new field**

假设我们有一个 students 集合，其中包含以下文档：
Suppose we have a students collection, which contains the following documents:
```js
{
    "_id": 1,
    "name": "小明",
    "scores": {
        "chinese": 80,
        "math": 90,
        "english": 70
    }
}
```
下面的代码，我们使用 project，在输出中加入了一个新的字段 totalScore：
In the following code, we use project and add a new field totalScore to the output:
```js
const { sum } = db.command.aggregate
let res = await db.collection('students')
  .aggregate()
  .project({
    _id: 0,
    name: 1,
    totalScore: sum([
        "$scores.chinese",
        "$scores.math",
        "$scores.english"
    ])
  })
  .end()
```
输出为：
The output is:
```js
{ "name": "小明", "totalScore": 240 }
```

**加入新的数组字段**
**Add new array field**

假设我们有一个 points 集合，包含以下文档：
Suppose we have a points collection containing the following documents:
```js
{ "_id": 1, "x": 1, "y": 1 }
{ "_id": 2, "x": 2, "y": 2 }
{ "_id": 3, "x": 3, "y": 3 }
```

下面的代码，我们使用 project，把 x 和 y 字段，放入到一个新的数组字段 coordinate 中：
In the following code, we use project to put the x and y fields into a new array field coordinate:
```js
let res = await db.collection('points')
  .aggregate()
  .project({
    coordinate: ["$x", "$y"]
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "_id": 1, "coordinate": [1, 1] }
{ "_id": 2, "coordinate": [2, 2] }
{ "_id": 3, "coordinate": [3, 3] }
```

### replaceRoot@aggregate-replace-root

聚合阶段。指定一个已有字段作为输出的根节点，也可以指定一个计算出的新字段作为根节点。
The polymerization stage. Specify an existing field as the root node of the output, or specify a new calculated field as the root node.
**API 说明**
**API description**
**replaceRoot 使用形式如下：**
**replaceRoot is used in the following form:**
```js
replaceRoot({
    newRoot: <表达式(expression)>
})
```
表达式格式如下：
The expression format is as follows:
|格式			|说明																											|
|Format |Description |
|----			|----																											|

|<字段名>	|指定一个已有字段作为输出的根节点（如果字段不存在则报错）	|
|<field name> |Specify an existing field as the root node of the output (if the field does not exist, an error will be reported) |
|<对象>		|计算一个新字段，并且把这个新字段作为根节点								|
|<Object> |Calculate a new field and use this new field as the root node |
**示例**
**Example**
**使用已有字段作为根节点**
**Use an existing field as the root node**
假设我们有一个 schools 集合，内容如下：
Suppose we have a schools collection with the following content:
```js
{
  "_id": 1,
  "name": "SFLS",
  "teachers": {
    "chinese": 22,
    "math": 18,
    "english": 21,
    "other": 123
  }
}
```
下面的代码使用 replaceRoot，把 teachers 字段作为根节点输出：
The following code uses replaceRoot to output the teachers field as the root node:
```js
let res = await db.collection('schools')
  .aggregate()
  .replaceRoot({
    newRoot: '$teachers'
  })
  .end()
```
输出如下：
The output is as follows:
```js
{
  "chinese": 22,
  "math": 18,
  "english": 21,
  "other": 123
}
```
**使用计算出的新字段作为根节点**
**Use the calculated new field as the root node**

假设我们有一个 roles 集合，内容如下：
Suppose we have a roles collection with the following content:
```js
{ "_id": 1, "first_name": "四郎", "last_name": "黄" }
{ "_id": 2, "first_name": "邦德", "last_name": "马" }
{ "_id": 3, "first_name": "牧之", "last_name": "张" }
```
下面的代码使用 replaceRoot，把 first_name 和 last_name 拼在一起：
The following code uses replaceRoot to put first_name and last_name together:
```js
const { concat } = db.command.aggregate
let res = await db.collection('roles')
  .aggregate()
  .replaceRoot({
    newRoot: {
      full_name: concat(['$last_name', '$first_name'])
    }
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "full_name": "黄四郎" }
{ "full_name": "马邦德" }
{ "full_name": "张牧之" }
```

### sample@aggregate-sample

聚合阶段。随机从文档中选取指定数量的记录。
The polymerization stage. Randomly select a specified number of records from the document.
**API 说明**
**API description**
**sample 的形式如下：**
**The form of sample is as follows:**
```js
sample({
    size: <正整数(Positive integer)>
})
```
请注意：size 是正整数，否则会出错。
Please note: size is a positive integer, otherwise an error will occur.
**示例**
**Example**
假设文档 users 有以下记录：
Suppose the document users has the following records:
```js
{ "name": "a" }
{ "name": "b" }
```

**随机选取**
**choose randomly**

如果现在进行抽奖活动，需要选出一名幸运用户。那么 sample 的调用方式如下：
If you are going to draw a lottery now, you need to select a lucky user. Then the calling method of sample is as follows:
```js
let res = await db.collection('users')
  .aggregate()
  .sample({
    size: 1
  })
  .end()
```

返回了随机选中的一个用户对应的记录，结果如下：
The record corresponding to a randomly selected user is returned, and the result is as follows:
```js
{ "_id": "696529e4-7e82-4e7f-812e-5144714edff6", "name": "b" }
```

### skip@aggregate-skip

聚合阶段。指定一个正整数，跳过对应数量的文档，输出剩下的文档。
The polymerization stage. Specify a positive integer, skip the corresponding number of documents, and output the remaining documents.

**示例**
**Example**
```js
let res = await db.collection('users')
  .aggregate()
  .skip(5)
  .end()
```

这段代码会跳过查找到的前 5 个文档，并且把剩余的文档输出。
This code will skip the first 5 documents found and output the remaining documents.
### sort@aggregate-sort

聚合阶段。根据指定的字段，对输入的文档进行排序。
The polymerization stage. Sort the input documents according to the specified fields.
**API 说明**
**API description**
**形式如下：**
**The form is as follows:**
```js
sort({
    <field name 1>: <sorting rule>,
    <field name 2>: <sorting rule>,
})
```


- 1 代表升序排列（从小到大）；
- 1 stands for descending order (from largest to smallest);

**示例**
**Example**
升序/降序排列
Sort ascending/descending
假设我们有集合 articles，其中包含数据如下：
Suppose we have a collection of articles, which contains data as follows:
```js
{ "_id": "1", "author": "stark",  "score": 80, "age": 18 }
{ "_id": "2", "author": "bob",    "score": 60, "age": 18 }
{ "_id": "3", "author": "li",     "score": 55, "age": 19 }
{ "_id": "4", "author": "jimmy",  "score": 60, "age": 22 }
{ "_id": "5", "author": "justan", "score": 95, "age": 33 }
```
```js
let res = await db.collection('articles')
  .aggregate()
  .sort({
      age: -1,
      score: -1
  })
  .end()
```
上面的代码在 students 集合中进行聚合搜索，并且将结果排序，首先根据 age 字段降序排列，然后再根据 score 字段进行降序排列。
The above code performs an aggregate search in the students collection and sorts the results, first sorting them in descending order according to the age field, and then sorting them in descending order according to the score field.

输出结果如下：
The output is as follows:
```js
{ "_id": "5", "author": "justan", "score": 95, "age": 33 }
{ "_id": "4", "author": "jimmy",  "score": 60, "age": 22 }
{ "_id": "3", "author": "li",     "score": 55, "age": 19 }
{ "_id": "1", "author": "stark",  "score": 80, "age": 18 }
{ "_id": "2", "author": "bob",    "score": 60, "age": 18 }
```

### sortByCount@aggregate-sort-by-count

聚合阶段。根据传入的表达式，将传入的集合进行分组（group）。然后计算不同组的数量，并且将这些组按照它们的数量进行排序，返回排序后的结果。
The polymerization stage. According to the incoming expression, the incoming set is grouped. Then calculate the number of different groups, and sort these groups according to their number, and return the sorted result.
**API 说明**
**API description**
**sortByCount 的调用方式如下：**
**The calling method of sortByCount is as follows:**
```js
sortByCount(<表达式(expression)>)
```

表达式的形式是：$ + 指定字段。请注意：不要漏写 $ 符号。
The form of the expression is: $ + specifies the field. Please note: Don't miss the $ sign.
**示例**
**Example**
**统计基础类型**
**Statistical Basic Type**
假设集合 passages 的记录如下：
Suppose the records of the collection passages are as follows:
```js
{ "category": "Web" }
{ "category": "Web" }
{ "category": "Life" }
```
下面的代码就可以统计文章的分类信息，并且计算每个分类的数量。即对 category 字段执行 sortByCount 聚合操作。
The following code can count the classification information of the article, and calculate the number of each category. That is, the sortByCount aggregation operation is performed on the category field.
```js
let res = await db.collection('passages')
  .aggregate()
  .sortByCount('$category')
  .end()
```

返回的结果如下所示：Web 分类下有2篇文章，Life 分类下有1篇文章。
The returned results are as follows: there are 2 articles under the Web category, and 1 article under the Life category.
```js
{ "_id": "Web", "count": 2 }
{ "_id": "Life", "count": 1 }
```
**解构数组类型**
**Destructured Array Type**

假设集合 passages 的记录如下：tags 字段对应的值是数组类型。
Suppose the records of the collection passages are as follows: the value corresponding to the tags field is an array type.
```js
{ "tags": [ "JavaScript", "C#" ] }
{ "tags": [ "Go", "C#" ] }
{ "tags": [ "Go", "Python", "JavaScript" ] }
```
如何统计文章的标签信息，并且计算每个标签的数量？因为 tags 字段对应的数组，所以需要借助 unwind 操作解构 tags 字段，然后再调用 sortByCount。
How to count the tag information of articles and calculate the number of each tag? Because the tags field corresponds to the array, you need to use the unwind operation to deconstruct the tags field, and then call sortByCount.

下面的代码实现了这个功能：
The following code implements this function:
```js
let res = await db.collection('passages')
  .aggregate()
  .unwind(`$tags`)
  .sortByCount(`$tags`)
  .end()
```
返回的结果如下所示：
The results returned are as follows:
```js
{ "_id": "Go", "count": 2 }
{ "_id": "C#", "count": 2 }
{ "_id": "JavaScript", "count": 2 }
{ "_id": "Python", "count": 1 }
```

### unwind@aggregate-unwind

聚合阶段。使用指定的数组字段中的每个元素，对文档进行拆分。拆分后，文档会从一个变为一个或多个，分别对应数组的每个元素。
The polymerization stage. Use each element in the specified array field to split the document. After splitting, the document will change from one to one or more, corresponding to each element of the array.
**API 说明**
**API description**
使用指定的数组字段中的每个元素，对文档进行拆分。拆分后，文档会从一个变为一个或多个，分别对应数组的每个元素。
Use each element in the specified array field to split the document. After splitting, the document will change from one to one or more, corresponding to each element of the array.
**unwind 有两种使用形式：**
**unwind has two forms of use:**
**参数是一个字段名**
**Parameter is a field name**
```js
unwind(<字段名(Field name)>)
```
**参数是一个对象**
**Parameter is an object**
```js
unwind({
    path: <字段名(Field name)>,
    includeArrayIndex: <string>,
    preserveNullAndEmptyArrays: <boolean>
})
```

|字段												|类型		|说明																																																																								|
|Field |Type |Description |
|----												|----		|----																																																																								|
|path												|string	|想要拆分的数组的字段名，需要以 $ 开头。																																																						|
|path |string |The field name of the array to be split must start with $. |
|includeArrayIndex					|string	|可选项，传入一个新的字段名，数组索引会保存在这个新的字段上。新的字段名不能以 $ 开头。																															|
|includeArrayIndex |string |Optional, pass in a new field name, and the array index will be saved on this new field. The new field name cannot start with $. |
|preserveNullAndEmptyArrays	|boolean|如果为 true，那么在 path 对应的字段为 null、空数组或者这个字段不存在时，依然会输出这个文档；如果为 false，unwind 将不会输出这些文档。默认为 false。|
|preserveNullAndEmptyArrays |boolean|If true, then this document will still be output when the field corresponding to path is null, empty array, or this field does not exist; if it is false, unwind will not output these documents. The default is false. |
**示例**
**Example**
**拆分数组**
**Split Array**
假设我们有一个 products 集合，包含数据如下：
Suppose we have a products collection with data as follows:
```js
{ "_id": "1", "product": "tshirt", "size": ["S", "M", "L"] }
{ "_id": "2", "product": "pants", "size": [] }
{ "_id": "3", "product": "socks", "size": null }
{ "_id": "4", "product": "trousers", "size": ["S"] }
{ "_id": "5", "product": "sweater", "size": ["M", "L"] }
```

我们根据 size 字段对这些文档进行拆分
We split these documents according to the size field
```js
db.collection('products')
  .aggregate()
  .unwind('$size')
  .end()
```

输出如下：
The output is as follows:
```js
{ "_id": "1", "product": "tshirt", "size": "S" }
{ "_id": "1", "product": "tshirt", "size": "M" }
{ "_id": "1", "product": "tshirt", "size": "L" }
{ "_id": "4", "product": "trousers", "size": "S" }
{ "_id": "5", "product": "sweater", "size": "M" }
{ "_id": "5", "product": "sweater", "size": "L" }
```

**拆分后，保留原数组的索引**
**After splitting, keep the index of the original array**

我们根据 size 字段对文档进行拆分后，想要保留原数组索引在新的 index 字段中。
After we split the document according to the size field, we want to keep the original array index in the new index field.
```js
let res = await db.collection('products')
  .aggregate()
  .unwind({
      path: '$size',
      includeArrayIndex: 'index'
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "_id": "1", "product": "tshirt", "size": "S", "index": 0 }
{ "_id": "1", "product": "tshirt", "size": "M", "index": 1 }
{ "_id": "1", "product": "tshirt", "size": "L", "index": 2 }
{ "_id": "4", "product": "trousers", "size": "S", "index": 0 }
{ "_id": "5", "product": "sweater", "size": "M", "index": 0 }
{ "_id": "5", "product": "sweater", "size": "L", "index": 1 }
```

**保留字段为空的文档**
**Reserve documents with empty fields**

注意到我们的集合中有两行特殊的空值数据：
Notice that there are two special rows of null data in our collection:
```js
...
{ "_id": "2", "product": "pants", "size": [] }
{ "_id": "3", "product": "socks", "size": null }
...
```
如果想要在输出中保留 size 为空数组、null，或者 size 字段不存在的文档，可以使用 preserveNullAndEmptyArrays 参数
If you want to keep in the output documents whose size is an empty array, null, or the size field does not exist, you can use the preserveNullAndEmptyArrays parameter
```js
let res = await db.collection('products')
  .aggregate()
  .unwind({
      path: '$size',
      preserveNullAndEmptyArrays: true
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "_id": "1", "product": "tshirt", "size": "S" }
{ "_id": "1", "product": "tshirt", "size": "M" }
{ "_id": "1", "product": "tshirt", "size": "L" }
{ "_id": "2", "product": "pants", "size": null }
{ "_id": "3", "product": "socks", "size": null }
{ "_id": "4", "product": "trousers", "size": "S" }
{ "_id": "5", "product": "sweater", "size": "M" }
{ "_id": "5", "product": "sweater", "size": "L" }
```

### end@aggregate-end

标志聚合操作定义完成，发起实际聚合操作
The definition of the flag aggregation operation is complete, and the actual aggregation operation is initiated
**返回值**
**return value**
Promise.&lt;Object&gt;

|属性	|类型							|说明					|
|Attribute |Type |Description |
|---	|---							|---					|
|list	|Array.&lt;any&gt;|聚合结果列表	|
|list |Array.&lt;any&gt;|aggregation result list |
**示例代码**
**Sample Code**
```js
const $ = db.command.aggregate
let res = await db.collection('books').aggregate()
  .group({
    // 按 category 字段分组
	// group by category field
    _id: '$category',
    // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
	// Let each set of output records have an avgSales field, whose value is the average value of the sales field of all records in the group
    avgSales: $.avg('$sales')
  })
  .end()
```

## 数据库操作符@dbcmd
## Database operator @dbcmd
### 查询·逻辑操作符@dbcmd-query
### Query·Logical Operator @dbcmd-query
#### and

查询操作符，用于表示逻辑 "与" 的关系，表示需同时满足多个查询筛选条件  
Query operator, used to express the logical "and" relationship, which means that multiple query filter conditions need to be met at the same time
     
##### 使用说明
##### Instructions for use
 `and` 有两种使用情况：  
 There are two use cases for `and`:
 

**1. 用在根查询条件**
**1. Used in the root query condition**
 此时需传入多个查询条件，表示需同时满足提供的多个完整查询条件  
 At this time, multiple query conditions need to be passed in, which means that multiple complete query conditions provided must be met at the same time

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where(dbCmd.and([
  {
    progress: dbCmd.gt(50)
  },
  {
    tags: 'cloud'
  }
])).get()
```
但以上用 `and` 组成的查询条件是不必要的，因为传入的对象的各字段隐式组成了 “与” 的关系，上述条件等价于下方更简洁的写法：  
But the above query condition composed of `and` is unnecessary, because the fields of the passed in object implicitly form an "and" relationship. The above conditions are equivalent to the more concise way of writing below:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(50),
  tags: 'cloud'
}).get()
```

通常需要显示使用 `and` 是用在有跨字段或操作的时候
Usually need to show that the use of `and` is used when there are cross-fields or operations

**2. 用在字段查询条件**
**2. Used in field query conditions**
 需传入多个查询操作符或常量，表示字段需满足或匹配给定的条件。  
 Multiple query operators or constants need to be passed in, indicating that the field needs to meet or match the given conditions.
 如以下用前置写法的方式表示 "progress 字段值大于 50 且小于 100"  
 For example, the following way of pre-writing means "progress field value is greater than 50 and less than 100"
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.and(dbCmd.gt(50), dbCmd.lt(100))
}).get()
```
还可以用后置写法的方式表示同样的条件：  
You can also express the same condition in post-positioning:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(50).and(dbCmd.lt(100))
}).get()
```
注意 `Command` 默认也可以直接链式调用其他 `Command`，默认表示多个 `Command` 的与操作，因此上述代码还可以精简为：  
Note that `Command` can also directly call other `Command` in a chain by default, which means the AND operation of multiple `Command` by default, so the above code can also be simplified as:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(50).lt(100)
}).get()
```

##### 调用风格
##### Calling style
 方法接收两种传参方式，一是传入一个数组参数，二是传入多个参数，效果一样。  
 The method receives two ways to pass parameters, one is to pass in an array parameter, and the other is to pass in multiple parameters, the effect is the same.
 
```js
// 传入数组
// Pass in the array
function and(expressions: Expression[]): Command
// 传入多参数
// Pass in multiple parameters
function and(...expressions: Expression[]): Command
```

#### or

查询操作符，用于表示逻辑 "或" 的关系，表示需同时满足多个查询筛选条件。或指令有两种用法，一是可以进行字段值的 “或” 操作，二是也可以进行跨字段的 “或” 操作。  
The query operator is used to express a logical "or" relationship, which means that multiple query filter conditions need to be met at the same time. There are two uses of the OR instruction. One is to perform an "OR" operation of field values, and the other is to perform an "OR" operation across fields.
     
##### 字段值的或操作
##### OR operation of field value
 字段值的 “或” 操作指的是指定一个字段值为多个值之一即可。  
 The "or" operation of a field value refers to assigning a field value to one of multiple values.
 如筛选出进度大于 80 或小于 20 的 todo：  
 For example, filter out todos whose progress is greater than 80 or less than 20:
 流式写法：  
 Streaming writing:
 
```js
let res = await const dbCmd = db.command
db.collection('todo').where({
  progress: dbCmd.gt(80).or(dbCmd.lt(20))
}).get()
```
前置写法：  
Pre-writing:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.or(dbCmd.gt(80), dbCmd.lt(20))
}).get()
```
前置写法也可接收一个数组：  
The pre-writing method can also receive an array:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.or([dbCmd.gt(80), dbCmd.lt(20)])
}).get()
```

##### 跨字段的或操作
##### Cross-field OR operation
 跨字段的 “或” 操作指条件 “或”，相当于可以传入多个 where 语句，满足其中一个即可。  
 The cross-field "or" operation refers to the condition "or", which is equivalent to passing in multiple where statements, and only one of them can be satisfied.
 如筛选出进度大于 80 或已标为已完成的 todo：  
 For example, filter out todos whose progress is greater than 80 or have been marked as completed:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where(dbCmd.or([
  {
    progress: dbCmd.gt(80)
  },
  {
    done: true
  }
])).get()
```

##### 调用风格
##### Calling style
 方法接收两种传参方式，一是传入一个数组参数，二是传入多个参数，效果一样。  
 The method receives two ways to pass parameters, one is to pass in an array parameter, and the other is to pass in multiple parameters, the effect is the same.
```js
// 传入数组
// Pass in the array
function or(expressions: Expression[]): Command
// 传入多参数
// Pass in multiple parameters
function or(...expressions: Expression[]): Command
```

#### not

查询操作符，用于表示逻辑 "非" 的关系，表示需不满足指定的条件。  
The query operator is used to express the logical "not" relationship, which means that the specified conditions need not be met.
     
##### 示例
##### Example
 如筛选出进度不等于100的 todo：  
 If the todo whose progress is not equal to 100 is filtered out:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.not(dbCmd.eq(100))
}).get()
```
`not` 也可搭配其他逻辑指令使用，包括 `and`, `or`, `nor`, `not`，如 `or`：  
`not` can also be used with other logic instructions, including `and`, `or`, `nor`, `not`, such as `or`:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.not(dbCmd.or([dbCmd.lt(50), dbCmd.eq(100)]))
}).get()
```

#### nor

查询操作符，用于表示逻辑 "都不" 的关系，表示需不满足指定的所有条件。如果记录中没有对应的字段，则默认满足条件。  
The query operator is used to express the logical "none" relationship, which means that all the specified conditions need not be met. If there is no corresponding field in the record, the condition is satisfied by default.
     
##### 示例 1
##### Example 1
 筛选出进度既不小于20又不大于80的 todo ：  
 Filter out todos whose progress is neither less than 20 nor greater than 80:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.nor([dbCmd.lt(20), dbCmd.gt(80)])
}).get()
```
以上同时会筛选出不存在 `progress` 字段的记录，如果要要求 `progress` 字段存在，可以用 `exists` 指令：  
The above will also filter out the records where the `progress` field does not exist. If you want the `progress` field to exist, you can use the `exists` command:
 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.exists().nor([dbCmd.lt(20), dbCmd.gt(80)])
  // 等价于以下非链式调用的写法：
  // It is equivalent to the following non-chain call writing:
  // progress: dbCmd.exists().and(dbCmd.nor([dbCmd.lt(20), dbCmd.gt(80)]))
}).get()
```

##### 示例 2
##### Example 2
 筛选出 `progress` 不小于 20 且 `tags` 数组不包含 `miniprogram` 字符串的记录：  
 Filter out records where the `progress` is not less than 20 and the `tags` array does not contain the `miniprogram` string:
 
```js
const dbCmd = db.command
db.collection('todo').where(dbCmd.nor([{
  progress: dbCmd.lt(20),
}, {
  tags: 'miniprogram',
}])).get()
```
以上会筛选出满足以下条件之一的记录：  
The above will filter out records that meet one of the following conditions:
 
1. `progress` 不小于 20 且 `tags` 数组不包含 `miniprogram` 字符串 3. `progress` 不小于 20 且 `tags` 字段不存在 5. `progress` 字段不存在 且 `tags` 数组不包含 `miniprogram` 字符串 7. `progress` 不小于 20 且 `tags` 字段不存在
1. The `progress` is not less than 20 and the `tags` array does not contain the `miniprogram` string 3. The `progress` is not less than 20 and the `tags` field does not exist 5. The `progress` field does not exist and the `tags` array does not contain `miniprogram` string 7. `progress` is not less than 20 and the `tags` field does not exist
 如果要求 `progress` 和 `tags` 字段存在，可以用 `exists` 指令：  
 If the `progress` and `tags` fields are required to exist, the `exists` command can be used:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where(
  dbCmd.nor([{
    progress: dbCmd.lt(20),
  }, {
    tags: 'miniprogram',
  }])
  .and({
    progress: dbCmd.exists(true),
    tags: dbCmd.exists(true),
  })
).get()
```

##### 调用风格
##### Calling style
 方法接收两种传参方式，一是传入一个数组参数，二是传入多个参数，效果一样。  
 The method receives two ways to pass parameters, one is to pass in an array parameter, and the other is to pass in multiple parameters, the effect is the same.

 
```js
// 传入数组
// Pass in the array
function nor(expressions: Expression[]): Command
// 传入多参数
// Pass in multiple parameters
function nor(...expressions: Expression[]): Command
```

### 查询·比较操作符@dbcmd-compare
### Query·Compare Operator @dbcmd-compare
#### eq

查询筛选条件，表示字段等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`, `Date`。  
The query filter condition indicates that the field is equal to a certain value. The `eq` command accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`, `Date`.
     
##### 使用说明
##### Instructions for use
 比如筛选出所有自己发表的文章，除了用传对象的方式：  
 For example, filter out all the articles published by yourself, except for the method of uploading objects:
 
```js
const openID = 'xxx'
let res = await db.collection('articles').where({
  _openid: openID
}).get()
```
还可以用指令：  
You can also use commands:

 
```js
const dbCmd = db.command
const openID = 'xxx'
let res = await db.collection('articles').where({
  _openid: dbCmd.eq(openid)
}).get()
```
注意 `eq` 指令比对象的方式有更大的灵活性，可以用于表示字段等于某个对象的情况，比如：  
Note that the `eq` instruction is more flexible than the object method, and can be used to indicate that the field is equal to an object, for example:
 
```js
// 这种写法表示匹配 stat.publishYear == 2018 且 stat.language == 'zh-CN'
// This writing means that it matches stat.publishYear == 2018 and stat.language
let res = await db.collection('articles').where({
  stat: {
    publishYear: 2018,
    language: 'zh-CN'
  }
}).get()
// 这种写法表示 stat 对象等于 { publishYear: 2018, language: 'zh-CN' }
// This writing means that the stat object is equal to {publishYear: 2018, language:'zh-CN'}
const dbCmd = db.command
let res = await db.collection('articles').where({
  stat: dbCmd.eq({
    publishYear: 2018,
    language: 'zh-CN'
  })
}).get()
```

#### neq

查询筛选条件，表示字段不等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`, `Date`。  
The query filter condition indicates that the field is not equal to a certain value. The `eq` command accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`, `Date`.
     
##### 使用说明
##### Instructions for use
 表示字段不等于某个值，和 [eq](Command.eq.html) 相反
 Indicates that the field is not equal to a certain value, and the opposite of [eq](Command.eq.html)
#### lt

查询筛选操作符，表示需小于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, which means that it needs to be less than the specified value. You can pass in a `Date` object for date comparison.
     
##### 示例代码
##### Sample code
 找出进度小于 50 的 todo  
 Find todos whose progress is less than 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.lt(50)
})
.get()
```

#### lte

查询筛选操作符，表示需小于或等于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, which means that it needs to be less than or equal to the specified value. You can pass in a `Date` object for date comparison.
     
##### 示例代码
##### Sample code
 找出进度小于或等于 50 的 todo  
 Find todos whose progress is less than or equal to 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.lte(50)
})
.get()
```

#### gt

查询筛选操作符，表示需大于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, which means that it needs to be greater than the specified value. You can pass in a `Date` object for date comparison.

##### 示例代码
##### Sample code
 找出进度大于 50 的 todo  
 Find todos whose progress is greater than 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.gt(50)
})
.get()
```

#### gte

查询筛选操作符，表示需大于或等于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, which means that it needs to be greater than or equal to the specified value. You can pass in a `Date` object for date comparison.
     
##### 示例代码
##### Sample code
 找出进度大于或等于 50 的 todo  
 Find todos whose progress is greater than or equal to 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.gte(50)
})
.get()
```

#### in

查询筛选操作符，表示要求值在给定的数组内。  
The query filter operator indicates that the required value is in the given array.
     
##### 示例代码
##### Sample code
 找出进度为 0 或 100 的 todo  
 Find the todo whose progress is 0 or 100

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.in([0, 100])
})
.get()
```

#### nin

查询筛选操作符，表示要求值不在给定的数组内。  
The query filter operator indicates that the required value is not in the given array.
     
##### 示例代码
##### Sample code
 找出进度不是 0 或 100 的 todo  
 Find the todo whose progress is not 0 or 100

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.nin([0, 100])
})
.get()
```

### 查询·字段操作符@dbcmd-field
### Query·Field Operator @dbcmd-field
#### exists

判断字段是否存在  
Determine whether the field exists
     
##### 示例代码
##### Sample code
 找出存在 tags 字段的记录  
 Find the records where the tags field exists

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  tags: dbCmd.exists(true)
})
.get()
```

#### mod

查询筛选操作符，给定除数 divisor 和余数 remainder，要求字段作为被除数时 value % divisor = remainder。  
Query filter operator, given the divisor and remainder, when the field is required as the dividend, value% divisor = remainder.
      
##### 示例代码
##### Sample code
 找出进度为 10 的倍数的字段的记录  
 Find the record of the field whose progress is a multiple of 10

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.mod(10, 0)
})
.get()
```

### 查询·数组操作符@dbcmd-array
### Query·Array Operator @dbcmd-array
#### all

数组查询操作符。用于数组字段的查询筛选条件，要求数组字段中包含给定数组的所有元素。  
Array query operator. The query filter condition for the array field requires that the array field contains all the elements of the given array.
     
##### 示例代码 1：普通数组
##### Sample code 1: Ordinary array
 找出 tags 数组字段同时包含 cloud 和 database 的记录  
 Find the records where the tags array field contains both cloud and database

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  tags: dbCmd.all(['cloud', 'database'])
})
.get()
```

##### 示例代码 2：对象数组
##### Sample code 2: Object array
 如果数组元素是对象，则可以用 `dbCmd.elemMatch` 匹配对象的部分字段  
 If the array element is an object, you can use `dbCmd.elemMatch` to match some fields of the object
 假设有字段 `places` 定义如下：  
 Suppose there is a field `places` defined as follows:

 
```js
{
  "type": string
  "area": number
  "age": number
}
```
找出数组字段中至少同时包含一个满足 “area 大于 100 且 age 小于 2” 的元素和一个满足 “type 为 mall 且 age 大于 5” 的元素  
Find out that the array field contains at least one element that satisfies "area greater than 100 and age less than 2" and one element that satisfies "type is mall and age is greater than 5"
 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: dbCmd.all([
    dbCmd.elemMatch({
      area: dbCmd.gt(100),
      age: dbCmd.lt(2),
    }),
    dbCmd.elemMatch({
      type: 'mall',
      age: dbCmd.gt(5),
    }),
  ]),
})
.get()
```

#### elemMatch

用于数组字段的查询筛选条件，要求数组中包含至少一个满足 `elemMatch` 给定的所有条件的元素  
Query filter conditions for array fields. The array must contain at least one element that satisfies all the conditions given by `elemMatch`
      
##### 示例代码：数组是对象数组的情况
##### Sample code: The case where the array is an array of objects
 假设集合示例数据如下：  
 Assume that the sample data of the collection is as follows:

 
```js
{
  "_id": "a0",
  "city": "x0",
  "places": [{
    "type": "garden",
    "area": 300,
    "age": 1
  }, {
    "type": "theatre",
    "area": 50,
    "age": 15
  }]
}
```
找出 `places` 数组字段中至少同时包含一个满足 “area 大于 100 且 age 小于 2” 的元素  
Find out that the `places` array field contains at least one element that satisfies "area greater than 100 and age less than 2"
 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: dbCmd.elemMatch({
    area: dbCmd.gt(100),
    age: dbCmd.lt(2),
  })
})
.get()
```
*注意**：如果不使用 `elemMatch` 而直接如下指定条件，则表示的是 `places` 数组字段中至少有一个元素的 `area` 字段大于 100 且 `places` 数组字段中至少有一个元素的 `age` 字段小于 2：  
*Note**: If you do not use `elemMatch` and directly specify the conditions as follows, it means that the `area` field with at least one element in the `places` array field is greater than 100 and there is at least one element in the `places` array field The `age` field is less than 2:
 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: {
    area: dbCmd.gt(100),
    age: dbCmd.lt(2),
  }
})
.get()
```

##### 示例代码：数组元素都是普通数据类型的情况
##### Sample code: the case where the array elements are all common data types
 假设集合示例数据如下：  
 Assume that the sample data of the collection is as follows:
 
```js
{
  "_id": "a0",
  "scores": [60, 80, 90]
}
```
找出 `scores` 数组字段中至少同时包含一个满足 “大于 80 且小于 100” 的元素  
Find out that the `scores` array field contains at least one element satisfying "greater than 80 and less than 100" at the same time
 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  scores: dbCmd.elemMatch(dbCmd.gt(80).lt(100))
})
.get()
```

#### size

更新操作符，用于数组字段的查询筛选条件，要求数组长度为给定值  
Update operator, used in the query filter condition of the array field, requires the array length to be a given value

##### 示例
##### Example
 找出 tags 数组字段长度为 2 的所有记录  
 Find all the records where the length of the tags array field is 2

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: dbCmd.size(2)
})
.get()
```

### 查询·地理位置操作符@dbcmd-geo
### Query·Geographic Location Operator@dbcmd-geo
#### geoNear
#### geoNear
按从近到远的顺序，找出字段值在给定点的附近的记录。  
In the order from nearest to farthest, find the records whose field value is near a given point.
     
##### 索引要求
##### Index Requirements
 需对查询字段建立地理位置索引  
 Need to build a geographic index on the query field
 
##### 示例代码
##### Sample code
 找出离给定位置 1 公里到 5 公里范围内的记录  
 Find records within 1 km to 5 km from a given location

 
```js
const dbCmd = db.command
let res = await db.collection('restaurants').where({
  location: dbCmd.geoNear({
    geometry: new db.Geo.Point(113.323809, 23.097732),
    minDistance: 1000,
    maxDistance: 5000,
  })
}).get()
```

#### geoWithin

找出字段值在指定区域内的记录，无排序。指定的区域必须是多边形（Polygon）或多边形集合（MultiPolygon）。  
Find the records whose field value is in the specified area, without sorting. The specified area must be a polygon (Polygon) or a collection of polygons (MultiPolygon).
     
##### 索引要求
##### Index Requirements
 需对查询字段建立地理位置索引  
 Need to build a geographic index on the query field
 
##### 示例代码 1：给定多边形
##### Sample code 1: Given polygon
 
```js
const dbCmd = db.command
const { Point, LineString, Polygon } = db.Geo
let res = await .collection('restaurants').where({
  location: dbCmd.geoWithin({
    geometry: new Polygon([
      new LineString([
        new Point(0, 0),
        new Point(3, 2),
        new Point(2, 3),
        new Point(0, 0)
      ])
    ]),
  })
}).get()
```

##### 示例代码 2：给定圆形
##### Sample code 2: Given circle
 可以不用 `geometry` 而用 `centerSphere` 构建一个圆形。  
 You can use `centerSphere` instead of `geometry` to construct a circle.
  `centerSphere` 对应的值的定义是：`[ [经度, 纬度], 半径 ]`  
  The definition of the value corresponding to `centerSphere` is: `[ [longitude, latitude], radius]`
 半径需以弧度计，比如需要 10km 的半径，则用距离除以地球半径 6378.1km 得出的数字。  
 The radius needs to be measured in radians. For example, if a radius of 10km is required, divide the distance by the earth's radius of 6378.1km.
 
```js
const dbCmd = db.command
let res = await db.collection('restaurants').where({
  location: dbCmd.geoWithin({
    centerSphere: [
      [-88, 30],
      10 / 6378.1,
    ]
  })
}).get()
```

#### geoIntersects

找出给定的地理位置图形相交的记录  
Find the records where a given geographic location graph intersects
     
##### 索引要求
##### Index Requirements
 需对查询字段建立地理位置索引  
 Need to build a geographic index on the query field

 
##### 示例代码：找出和一个多边形相交的记录
##### Sample code: Find the record that intersects a polygon

 
```js
const dbCmd = db.command
const { Point, LineString, Polygon } = db.Geo
let res = await db.collection('restaurants').where({
  location: dbCmd.geoIntersects({
    geometry: new Polygon([
      new LineString([
        new Point(0, 0),
        new Point(3, 2),
        new Point(2, 3),
        new Point(0, 0)
      ])
    ]),
  })
}).get()
```

### 查询·表达式操作符@dbcmd-expr
### Query·Expression Operator @dbcmd-expr
#### expr

查询操作符，用于在查询语句中使用聚合表达式，方法接收一个参数，该参数必须为聚合表达式  
The query operator is used to use aggregate expressions in the query statement. The method receives a parameter, which must be an aggregate expression  
##### 使用说明
##### Instructions for use
1. `expr` 可用于在聚合 [`match`](../aggregate/Aggregate.match.html) 流水线阶段中引入聚合表达式 3. 如果聚合 [`match`](../aggregate/Aggregate.match.html) 阶段是在 [`lookup`](../aggregate/Aggregate.lookup.html) 阶段内，此时的 `expr` 表达式内可使用 `lookup` 中使用 `let` 参数定义的变量，具体示例可见 [`lookup`](../aggregate/Aggregate.lookup.html) 的 `指定多个连接条件` 例子 5. `expr` 可用在普通查询语句（`where`）中引入聚合表达式
1. `expr` can be used to introduce aggregation expressions in the aggregation [`match`](../aggregate/Aggregate.match.html) pipeline stage 3. If aggregation [`match`](../aggregate/Aggregate. The match.html) stage is in the [`lookup`](../aggregate/Aggregate.lookup.html) stage. At this time, the `expr` expression can use the variables defined by the `let` parameter in `lookup` For specific examples, please refer to `Specify multiple connection conditions` in [`lookup`](../aggregate/Aggregate.lookup.html) Example 5. `expr` can be used to introduce aggregate expressions in ordinary query statements (`where`)
##### 示例代码 1：比较同一个记录中的两个字段
##### Sample code 1: Compare two fields in the same record
 假设 `items` 集合的数据结构如下：  
 Suppose the data structure of the `items` collection is as follows:

 
```js
{
  "_id": string,
  "inStock": number, // 库存量(inventory)
  "ordered": number  // 被订量(Ordered)
}
```
找出被订量大于库存量的记录：  
Find the records where the ordered quantity is greater than the inventory quantity:
 
```js
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('items').where(dbCmd.expr($.gt(['$ordered', '$inStock']))).get()
```

##### 示例代码 2：与条件语句组合使用
##### Sample code 2: Used in combination with conditional statements
 假设 `items` 集合的数据结构如下：  
 Suppose the data structure of the `items` collection is as follows:
 
```json
{
  "_id": string,
  "price": number
}
```
假设加个小于等于 10 的打 8 折，大于 10 的打 5 折，让数据库查询返回打折后价格小于等于 8 的记录：  
Suppose you add a 20% discount for less than or equal to 10, and a 50% discount for more than 10, and let the database query return records with a discounted price less than or equal to 8:
 
```js
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('items').where(dbCmd.expr(
  $.lt([
    $.cond({
      if: $.gte(['$price', 10]),
      then: $.multiply(['$price', '0.5']),
      else: $.multiply(['$price', '0.8']),
    })
    ,
    8
  ])
).get()
```

### 更新·字段操作符@dbcmd-update-field
### Update·Field Operator @dbcmd-update-field
#### set

更新操作符，用于设定字段等于指定值。  
Update operator, used to set the field equal to the specified value.
     
##### 使用说明
##### Instructions for use
 这种方法相比传入纯 JS 对象的好处是能够指定字段等于一个对象  
 The advantage of this method compared to passing in a pure JS object is that it can specify that the field is equal to an object
 
##### 示例
##### Example
 
```js
// 以下方法只会更新 style.color 为 red，而不是将 style 更新为 { color: 'red' }，即不影响 style 中的其他字段
// The following method will only update style.color to red, instead of updating style to {color:'red' }, which does not affect other fields in style
let res = await db.collection('todos').doc('doc-id').update({
  style: {
    color: 'red'
  }
})

// 以下方法更新 style 为 { color: 'red', size: 'large' }
// The following method updates style to {color:'red', size:'large'}
let res = await db.collection('todos').doc('doc-id').update({
  style: dbCmd.set({
    color: 'red',
    size: 'large'
  })
})
```

#### remove

更新操作符，用于表示删除某个字段。  
Update operator, used to indicate the deletion of a field.
   
##### 示例代码
##### Sample code
 删除 style 字段：  
 Delete the style field:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('todo-id').update({
  style: dbCmd.remove()
})
```

#### inc

更新操作符，原子操作，用于指示字段自增  
Update operator, atomic operation, used to indicate field self-increment
      
##### 原子自增
##### Atomic self-increment
 多个用户同时写，对数据库来说都是将字段自增，不会有后来者覆写前者的情况  
 Multiple users write at the same time. For the database, the fields are automatically incremented, and there will be no case that latecomers overwrite the former
 
##### 示例代码
##### Sample code
 将一个 todo 的进度自增 10：  
 Increase the progress of a todo by 10:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('todo-id').update({
  progress: dbCmd.inc(10)
})
```

#### mul

更新操作符，原子操作，用于指示字段自乘某个值  
Update operator, atomic operation, used to instruct the field to multiply a certain value
      
##### 原子自乘
##### Atomic Multiplication
 多个用户同时写，对数据库来说都是将字段自乘，不会有后来者覆写前者的情况  
 Multiple users write at the same time, for the database, the field is multiplied, and there will be no case that latecomers overwrite the former
 
##### 示例代码
##### Sample code
 将一个 todo 的进度自乘 10：  
 Multiply the progress of a todo by 10:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('todo-id').update({
  progress: dbCmd.mul(10)
})
```

#### min

更新操作符，给定一个值，只有该值小于字段当前值才进行更新。  
Update operator, given a value, only the value is less than the current value of the field will be updated.
     
##### 示例代码
##### Sample code
 如果字段 progress > 50，则更新到 50  
 If the field progress> 50, update to 50
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  progress: dbCmd.min(50)
})
```

#### max

更新操作符，给定一个值，只有该值大于字段当前值才进行更新。  
Update operator, given a value, only if the value is greater than the current value of the field will be updated.

     
     
##### 示例代码
##### Sample code
 如果字段 progress < 50，则更新到 50  
 If the field progress <50, update to 50
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  progress: dbCmd.max(50)
})
```

#### rename

更新操作符，字段重命名。如果需要对嵌套深层的字段做重命名，需要用点路径表示法。不能对嵌套在数组里的对象的字段进行重命名。  
Update operator, field rename. If you need to rename the deeply nested fields, you need to use dot path notation. You cannot rename the fields of objects nested in an array.
     
##### 示例 1：重命名顶层字段
##### Example 1: Rename the top-level field
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  progress: dbCmd.rename('totalProgress')
})
```

##### 示例 2：重命名嵌套字段
##### Example 2: Rename a nested field
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  someObject: {
    someField: dbCmd.rename('someObject.renamedField')
  }
})
```

或：
or:
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  'someObject.someField': dbCmd.rename('someObject.renamedField')
})
```

### 更新·数组操作符@dbcmd-update-array
### Update·Array Operator @dbcmd-update-array
#### push

数组更新操作符。对一个值为数组的字段，往数组添加一个或多个值。或字段原为空，则创建该字段并设数组为传入值。  
Array update operator. For a field whose value is an array, add one or more values to the array. Or the field was originally empty, then create the field and set the array as the incoming value.
     
##### 参数说明
##### Parameter Description

**position 说明**
**position description**
 要求必须同时有 `each` 参数存在。  
 It is required that the `each` parameter exists at the same time.
 非负数代表从数组开始位置数的位置，从 0 开始计。如果数值大于等于数组长度，则视为在尾部添加。负数代表从数组尾部倒数的位置，比如 -1 就代表倒数第二个元素的位置。如果负数数值的绝对值大于等于数组长度，则视为从数组头部添加。  
 A non-negative number represents the position counted from the beginning of the array, counting from 0. If the value is greater than or equal to the length of the array, it is considered to be added at the end. Negative numbers represent the position of the countdown from the end of the array, for example, -1 represents the position of the second-to-last element. If the absolute value of the negative value is greater than or equal to the length of the array, it is considered to be added from the head of the array.

**sort 说明**
**sort description**
 要求必须同时有 `each` 参数存在。给定 1 代表升序，-1 代表降序。  
 It is required that the `each` parameter exists at the same time. Given 1 means ascending order, -1 means descending order.
 如果数组元素是记录，则用 `{ <字段>: 1 | -1 }` 的格式表示根据记录中的什么字段做升降序排序。  
 If the array element is a record, the format of `{ <field>: 1 | -1 }` is used to indicate which field in the record is sorted in ascending and descending order.
 

**slice** 说明**
**slice** Description**
 要求必须同时有 `each` 参数存在  
 It is required that the `each` parameter exists at the same time
|值		|说明									|
|Value |Description |
|:-:	|:-:									|
|0		|将字段更新为空数组		|
|0 |Update the field to an empty array |
|正数	|数组只保留前 n 个元素|
|Positive number |Only the first n elements are kept in the array|
|负数	|数组只保留后 n 个元素|
|Negative number |The array retains only the last n elements|


##### 示例 1：尾部添加元素
##### Example 1: Add an element to the end
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push(['mini-program', 'cloud'])
})
```

##### 示例 2：从第二个位置开始插入
##### Example 2: Insert from the second position
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    position: 1,
  })
})
```

##### 示例 3：排序
##### Example 3: Sorting

插入后对整个数组做排序  
Sort the entire array after insertion

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    sort: 1,
  })
})
```

不插入，只对数组做排序  
Do not insert, only sort the array
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: [],
    sort: 1,
  })
})
```
如果字段是对象数组，可以如下根据元素对象里的字段进行排序：  
If the field is an object array, you can sort according to the fields in the element object as follows:
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: [
      { name: 'miniprogram', weight: 8 },
      { name: 'cloud', weight: 6 },
    ],
    sort: {
      weight: 1,
    },
  })
})
```

##### 示例 4：截断保留
##### Example 4: Truncate reservation
 插入后只保留后 2 个元素  
 Only the last 2 elements are retained fter insertion

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    slice: -2,
  })
})
```

##### 示例 5：在指定位置插入、然后排序、最后只保留前 2 个元素
##### Example 5: Insert at the specified position, then sort, and finally keep only the first 2 elements
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    position: 1,
    slice: 2,
    sort: 1,
  })
})
```

#### pop

数组更新操作符，对一个值为数组的字段，将数组尾部元素删除，仅可以删除末尾一个
Array update operator, for a field whose value is an array, delete the last element of the array, only the last one can be deleted

##### 示例代码
##### Sample code
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pop()
})
```

#### unshift

数组更新操作符，对一个值为数组的字段，往数组头部添加一个或多个值。或字段原为空，则创建该字段并设数组为传入值。  
The array update operator adds one or more values to the head of the array for a field whose value is an array. Or the field was originally empty, then create the field and set the array as the incoming value.

##### 示例代码
##### Sample code
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.unshift(['mini-program', 'cloud'])
})
```

#### shift

数组更新操作符，对一个值为数组的字段，将数组头部元素删除。  
The array update operator deletes the head element of the array for a field whose value is an array.

##### 示例代码
##### Sample code
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.shift()
})
```

#### pull

数组更新操作符。给定一个值或一个查询条件，将数组中所有匹配给定值或查询条件的元素都移除掉。  
Array update operator. Given a value or a query condition, remove all elements in the array that match the given value or query condition.

##### 示例代码 1：根据常量匹配移除
##### Sample code 1: Remove based on constant matching
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pull('database')
})
```

##### 示例代码 2：根据查询条件匹配移除
##### Sample code 2: Remove according to query conditions
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pull(dbCmd.in(['database', 'cloud']))
})
```

##### 示例代码 3：对象数组时，根据查询条件匹配移除
##### Sample code 3: In the case of an object array, remove it according to the query conditions
 假设有字段 `places` 数组中的元素结构如下  
 Assuming there is a field `places`, the element structure in the array is as follows
 
```json
{
  "type": string
  "area": number
  "age": number
}
```

```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  places: dbCmd.pull({
    area: dbCmd.gt(100),
    age: dbCmd.lt(2),
  })
})
```

##### 示例代码 4：有嵌套对象的对象数组时，根据查询条件匹配移除
##### Sample code 4: When there is an object array with nested objects, remove them according to the query conditions
 假设有字段 `cities` 数组中的元素结构如下  
 Suppose there is a field `cities` The element structure in the array is as follows
 
```json
{
  "name": string
  "places": Place[]
}
```
`Place` 结构如下：  
The structure of `Place` is as follows:
 
```json
{
  "type": string
  "area": number
  "age": number
}
```
可用 `elemMatch` 匹配嵌套在对象数组里面的对象数组字段 places  
You can use `elemMatch` to match the object array field places nested in the object array
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  cities: dbCmd.pull({
    places: dbCmd.elemMatch({
      area: dbCmd.gt(100),
      age: dbCmd.lt(2),
    })
  })
})
```

#### pullAll

数组更新操作符。给定一个值或一个查询条件，将数组中所有匹配给定值的元素都移除掉。跟 `pull` 的差别在于只能指定常量值、传入的是数组。  
Array update operator. Given a value or a query condition, remove all elements in the array that match the given value. The difference with `pull` is that only constant values can be specified, and arrays are passed in.
      
##### 示例代码：根据常量匹配移除
##### Sample code: Remove based on constant matching
 从 tags 中移除所有 database 和 cloud 字符串  
 Remove all database and cloud strings from tags
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pullAll(['database', 'cloud'])
})
```

#### addToSet

数组更新操作符。原子操作。给定一个或多个元素，除非数组中已存在该元素，否则添加进数组。  
Array update operator. Atomic operation. Given one or more elements, unless the element already exists in the array, add it to the array.

##### 示例代码 1：添加一个元素
##### Sample code 1: Add an element
 如果 tags 数组中不包含 database，添加进去 
 If the tags array does not contain database, add it

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.addToSet('database')
})
```

##### 示例代码 2：添加多个元素
##### Sample code 2: Add multiple elements

需传入一个对象，其中有一个字段 `each`，其值为数组，每个元素就是要添加的元素  
Need to pass in an object, which has a field `each` whose value is an array, and each element is the element to be added
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.addToSet({
    each: ['database', 'cloud']
  })
})
```

## 数据库运算方法@aggregate-operator
## Database operation method @aggregate-operator
**等同于mongoDB聚合操作符概念**
**Equivalent to mongoDB aggregation operator concept**
### 算术操作符
### Arithmetic operators
#### abs

返回一个数字的绝对值。  
Returns the absolute value of a number.
##### API 说明
##### API description
语法如下：  
The syntax is as follows:

 
```js
db.command.aggregate.abs(<number>)
```
`abs` 传入的值除了数字常量外，也可以是任何最终解析成一个数字的表达式。  
In addition to numeric constants, the value passed by `abs` can also be any expression that ultimately resolves to a number.

 如果表达式解析为 `null` 或者指向一个不存在的字段，则 `abs` 的结果是 `null`。如果值解析为 `NaN`，则结果是 `NaN`。  
 If the expression resolves to `null` or points to a non-existent field, the result of `abs` is `null`. If the value parses as `NaN`, the result is `NaN`.
 
#####  示例代码
##### Sample code
 假设集合 `ratings` 有如下记录：  
 Suppose the set `ratings` has the following records:
 
```json
{ _id: 1, start: 5, end: 8 }
{ _id: 2, start: 4, end: 4 }
{ _id: 3, start: 9, end: 7 }
{ _id: 4, start: 6, end: 7 }
```
···
可以用如下方式求得各个记录的 `start` 和 `end` 之间的绝对差异大小：  
The absolute difference between `start` and `end` of each record can be obtained as follows:
 
```js
const $ = db.command.aggregate
let res = await db.collection('ratings').aggregate()
  .project({
    delta: $.abs($.subtract(['$start', '$end']))
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```json
{ "_id" : 1, "delta" : 3 }
{ "_id" : 2, "delta" : 0 }
{ "_id" : 3, "delta" : 2 }
{ "_id" : 4, "delta" : 1 }
```

#### add

将数字相加或将数字加在日期上。如果数组中的其中一个值是日期，那么其他值将被视为毫秒数加在该日期上。  
Add numbers or add numbers to dates. If one of the values in the array is a date, then the other values will be treated as milliseconds added to the date.
      
#####  API 说明
##### API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.add([<表达式1(Expression 1)>, <表达式2(Expression 2)>, ...])
```
表达式可以是形如 `$ + 指定字段`，也可以是普通字符串。只要能够被解析成字符串即可。  
The expression can be in the form of `$ + specified field`, or it can be a normal string. As long as it can be parsed into a string.
 
#####  示例代码
##### Sample code
 假设集合 `staff` 有如下记录：  
 Suppose the collection `staff` has the following records:
 
```json
{ _id: 1, department: "x", sales: 5, engineer: 10, lastUpdate: ISODate("2019-05-01T00:00:00Z") }
{ _id: 2, department: "y", sales: 10, engineer: 20, lastUpdate: ISODate("2019-05-01T02:00:00Z") }
{ _id: 3, department: "z", sales: 20, engineer: 5, lastUpdate: ISODate("2019-05-02T03:00:00Z") }
```


**数字求和**
**Number Summation**

 可以用如下方式求得各个记录人数总数：  
 The total number of people in each record can be obtained as follows:
 
```js
const $ = db.command.aggregate
let res = await db.collection('staff').aggregate()
  .project({
    department: 1,
    total: $.add(['$sales', '$engineer'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```json
{ _id: 1, department: "x", total: 15 }
{ _id: 2, department: "y", total: 30 }
{ _id: 3, department: "z", total: 25 }
```


**增加日期值**
**Increase date value**

 如下操作可以获取各个记录的 `lastUpdate` 加一个小时之后的值：  
 The following operations can get the value of the `lastUpdate` of each record plus one hour:
 
```js
const $ = db.command.aggregate
let res = await db.collection('staff').aggregate()
  .project({
    department: 1,
    lastUpdate: $.add(['$lastUpdate', 60*60*1000])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```json
{ _id: 1, department: "x", lastUpdate: ISODate("2019-05-01T01:00:00Z") }
{ _id: 2, department: "y", lastUpdate: ISODate("2019-05-01T03:00:00Z") }
{ _id: 3, department: "z", lastUpdate: ISODate("2019-05-02T04:00:00Z") }
```

#### ceil

向上取整，返回大于或等于给定数字的最小整数。  
Round up and return the smallest integer greater than or equal to the given number.
      
##### API 说明
##### API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.ceil(<number>)
```
`<number>` 可以是任意解析为数字的表达式。如果表达式解析为 `null` 或指向一个不存在的字段，则返回 `null`，如果解析为 `NaN`，则返回 `NaN`。  
`<number>` can be any expression that resolves to a number. If the expression resolves to `null` or points to a non-existent field, then `null` is returned, and if it is resolved to `NaN`, then `NaN` is returned.
 
#####  示例代码
#####  Sample code
 假设集合 `sales` 有如下记录：  
 Suppose the collection `sales` has the following records:

 
```json
{ _id: 1, sales: 5.2 }
{ _id: 2, sales: 1.32 }
{ _id: 3, sales: -3.2 }
```
可以用如下方式取各个数字的向上取整值：  
You can take the rounded up value of each number in the following way:
 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .project({
    sales: $.ceil('$sales')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```json
{ _id: 1, sales: 6 }
{ _id: 2, sales: 2 }
{ _id: 3, sales: -3 }
```

#### divide

传入被除数和除数，求商。  
Pass in the dividend and the divisor to find the quotient.

#####  API 说明
#####  API description
 语法如下： 
 The syntax is as follows:

 
```js
db.command.aggregate.divide([<被除数表达式(Dividend expression)>, <除数表达式(Divisor expression)>])
```
表达式可以是任意解析为数字的表达式。  
The expression can be any expression that resolves to a number.
 
#####  示例代码
#####  Sample code
 假设集合 `railroads` 有如下记录：  
 Suppose the collection `railroads` has the following records:
 
```js
{ _id: 1, meters: 5300 }
{ _id: 2, meters: 64000 }
{ _id: 3, meters: 130 }
```
可以用如下方式取各个数字转换为千米之后的值：  
You can use the following method to get the value after each number is converted to kilometers:
 
```js
const $ = db.command.aggregate
let res = await db.collection('railroads').aggregate()
  .project({
    km: $.divide(['$meters', 1000])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ _id: 1, km: 5.3 }
{ _id: 2, km: 64 }
{ _id: 3, km: 0.13 }
```

#### exp

取 e（自然对数的底数，欧拉数） 的 n 次方。  
Take e (the base of natural logarithm, Euler's number) to the power of n.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.exp(<exponent>)
```
`<exponent>` 可以是任意解析为数字的表达式。如果表达式解析为 `null` 或指向一个不存在的字段，则返回 `null`，如果解析为 `NaN`，则返回 `NaN`。  
`<exponent>` can be any expression that resolves to a number. If the expression resolves to `null` or points to a non-existent field, then `null` is returned, and if it is resolved to `NaN`, then `NaN` is returned.
 
#####  示例代码
##### Sample code
 假设集合 `math` 有如下记录：  
 Suppose the collection `math` has the following records:
 
```js
{ _id: 1, exp: 0 }
{ _id: 2, exp: 1 }
{ _id: 3, exp: 2 }
```

```js
const $ = db.command.aggregate
let res = await db.collection('math').aggregate()
  .project({
    result: $.exp('$exp')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ _id: 1, result: 1 }
{ _id: 2, result: 2.71828182845905 }
{ _id: 3, result: 7.38905609893065 }
```

#### floor

向下取整，返回大于或等于给定数字的最小整数。  
Round down and return the smallest integer greater than or equal to the given number.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.floor(<number>)
```
`<number>` 可以是任意解析为数字的表达式。如果表达式解析为 `null` 或指向一个不存在的字段，则返回 `null`，如果解析为 `NaN`，则返回 `NaN`。  
`<number>` can be any expression that resolves to a number. If the expression resolves to `null` or points to a non-existent field, then `null` is returned, and if it is resolved to `NaN`, then `NaN` is returned.
#####  示例代码
#####  Sample code
 假设集合 `sales` 有如下记录：  
 Suppose the collection `sales` has the following records:
 
```js
{ _id: 1, sales: 5.2 }
{ _id: 2, sales: 1.32 }
{ _id: 3, sales: -3.2 }
```
可以用如下方式取各个数字的向下取整值：  
You can take the rounded down value of each number in the following way:
 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .project({
    sales: $.floor('$sales')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ _id: 1, sales: 5 }
{ _id: 2, sales: 1 }
{ _id: 3, sales: -6 }
```

#### ln

计算给定数字在自然对数值。  
Calculate the given number in the natural logarithm.

#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.ln(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.
 `ln` 等价于 `log([<number>, Math.E])`，其中 `Math.E` 是 `JavaScript` 获取 `e` 的值的方法。  
 `ln` is equivalent to `log([<number>, Math.E])`, where `Math.E` is the method for `JavaScript` to get the value of `e`.
 
#####  示例代码
##### Sample code
#####  db.command.aggregate.ln
 聚合操作符。计算给定数字在自然对数值。  
 Aggregation operator. Calculate the given number in the natural logarithm.
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.ln(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.
 `ln` 等价于 `log([<number>, Math.E])`，其中 `Math.E` 是 `JavaScript` 获取 `e` 的值的方法。
 `ln` is equivalent to `log([<number>, Math.E])`, where `Math.E` is the method for `JavaScript` to get the value of `e`.
#### log

计算给定数字在给定对数底下的 log 值。  
Calculate the log value of the given number under the given logarithm.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.log([<number>, <base>])
```
`<number>` 可以是任意解析为非负数字的表达式。`<base>` 可以是任意解析为大于 1 的数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number. `<base>` can be any expression that resolves to a number greater than 1.
 如果任一参数解析为 `null` 或指向任意一个不存在的字段，`log` 返回 `null`。如果任一参数解析为 `NaN`，`log` 返回 `NaN`。  
 If any parameter resolves to `null` or points to any non-existent field, `log` returns `null`. If any parameter resolves to `NaN`, `log` returns `NaN`.
 
#####  示例代码
#####  Sample code
 假设集合 `curve` 有如下记录：  
 Suppose the collection `curve` has the following records:

```js
{ _id: 1, x: 1 }
{ _id: 2, x: 2 }
{ _id: 3, x: 3 }
```
计算 `log2(x)` 的值：  
Calculate the value of `log2(x)`:
 
```js
const $ = db.command.aggregate
let res = await db.collection('curve').aggregate()
  .project({
    log: $.log(['$x', 2])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ _id: 1, log: 0 }
{ _id: 2, log: 1 }
{ _id: 3, log: 1.58496250072 }
```

#### log10

计算给定数字在对数底为 10 下的 log 值。  
Calculate the log value of a given number with a logarithmic base of 10.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.log(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.
 `log10` 等同于 `log` 方法的第二个参数固定为 10。  
 `log10` is equivalent to the second parameter of the `log` method. The second parameter is fixed at 10.
 
#####  示例代码
##### Sample code
#####  db.command.aggregate.log10
 聚合操作符。计算给定数字在对数底为 10 下的 log 值。  
 Aggregation operator. Calculate the log value of a given number with a logarithmic base of 10.
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.log(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.
 `log10` 等同于 `log` 方法的第二个参数固定为 10。
 `log10` is equivalent to the second parameter of the `log` method. The second parameter is fixed at 10.
#### mod

取模运算，取数字取模后的值。  
Modulo operation, take the value after the number is modulo.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:



 
```js
db.command.aggregate.mod([<dividend>, <divisor>])
```
第一个数字是被除数，第二个数字是除数。参数可以是任意解析为数字的表达式。  
The first number is the dividend, and the second number is the divisor. The parameter can be any expression that resolves to a number.
 
#####  示例代码
#####  Sample code
 假设集合 `shopping` 有如下记录：  
 Suppose the collection `shopping` has the following records:

 
```js
{ _id: 1, bags: 3, items: 5 }
{ _id: 2, bags: 2, items: 8 }
{ _id: 3, bags: 5, items: 16 }
```
各记录取 `items` 除以 `bags` 的余数（`items % bags`）：  
Each record takes the remainder of dividing `items` by `bags` (`items% bags`):
 
```js
const $ = db.command.aggregate
let res = await db.collection('shopping').aggregate()
  .project({
    overflow: $.mod(['$items', '$bags'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ _id: 1, log: 2 }
{ _id: 2, log: 0 }
{ _id: 3, log: 1 }
```

#### multiply

取传入的数字参数相乘的结果。  
Take the result of multiplying the passed-in digital parameters.
      
#####  API 说明
#####  API description
 语法如下： 
 The syntax is as follows:

 
```js
db.command.aggregate.multiply([<expression1>, <expression2>, ...])
```
参数可以是任意解析为数字的表达式。  
The parameter can be any expression that resolves to a number.

#####  示例代码
#####  Sample code
 假设集合 `fruits` 有如下记录：  
 Suppose the collection `fruits` has the following records:
 
```js
{ "_id": 1, "name": "apple", "price": 10, "quantity": 100 }
{ "_id": 2, "name": "orange", "price": 15, "quantity": 50 }
{ "_id": 3, "name": "lemon", "price": 5, "quantity": 20 }
```
求各个水果的的总价值：  
Find the total value of each fruit:
 
```js
const $ = db.command.aggregate
let res = await db.collection('fruits').aggregate()
  .project({
    name: 1,
    total: $.multiply(['$price', '$quantity']),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "name": "apple", "total": 1000 }
{ "_id": 2, "name": "orange", "total": 750 }
{ "_id": 3, "name": "lemo", "total": 100 }
```

#### pow

求给定基数的指数次幂。  
Raise the given base to the power of the exponent.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.pow([<base>, <exponent>])
```
参数可以是任意解析为数字的表达式。  
The parameter can be any expression that resolves to a number.
 
#####  示例代码
#####  Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{ "_id": 1, "x": 2, "y": 3 }
{ "_id": 2, "x": 5, "y": 7 }
{ "_id": 3, "x": 10, "y": 20 }
```
求 `x` 和 `y` 的平方和：  
Find the sum of the squares of `x` and `y`:
 
```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    sumOfSquares: $.add([$.pow(['$x', 2]), $.pow(['$y', 2])]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "sumOfSquares": 13 }
{ "_id": 2, "sumOfSquares": 74 }
{ "_id": 3, "sumOfSquares": 500 }
```

#### sqrt

求平方根。  
Find the square root.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.sqrt([<number>])
```
参数可以是任意解析为非负数字的表达式。  
The parameter can be any expression that resolves to a non-negative number.
 
#####  示例代码
#####  Sample code
 假设直角三角形集合 `triangle` 有如下记录：  
 Suppose the right-angled triangle set `triangle` has the following records:
```js
{ "_id": 1, "x": 2, "y": 3 }
{ "_id": 2, "x": 5, "y": 7 }
{ "_id": 3, "x": 10, "y": 20 }
```
假设 `x` 和 `y` 分别为两直角边，则求斜边长：  
Assuming that `x` and `y` are two right-angle sides respectively, find the length of the hypotenuse:
 
```js
const $ = db.command.aggregate
let res = await db.collection('triangle').aggregate()
  .project({
    len: $.sqrt([$.add([$.pow(['$x', 2]), $.pow(['$y', 2])])]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "len": 3.605551275463989 }
{ "_id": 2, "len": 8.602325267042627 }
{ "_id": 3, "len": 22.360679774997898 }
```

#### subtract

将两个数字相减然后返回差值，或将两个日期相减然后返回相差的毫秒数，或将一个日期减去一个数字返回结果的日期。  
Subtract two numbers and return the difference, or subtract two dates and return the number of milliseconds between them, or subtract a number from a date to return the date of the result.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.subtract([<expression1>, <expression2>])
```
参数可以是任意解析为数字或日期的表达式。  
The parameter can be any expression that resolves to a number or a date.

#####  示例代码
#####  Sample code
 假设集合 `scores` 有如下记录：  
 Suppose the collection `scores` has the following records:
 
```js
{ "_id": 1, "max": 10, "min": 1 }
{ "_id": 2, "max": 7, "min": 5 }
{ "_id": 3, "max": 6, "min": 6 }
```
求各个记录的 `max` 和 `min` 的差值。：  
Find the difference between `max` and `min` for each record. :
 
```js
const $ = db.command.aggregate
let res = await db.collection('scores').aggregate()
  .project({
    diff: $.subtract(['$max', '$min'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "diff": 9 }
{ "_id": 2, "diff": 2 }
{ "_id": 3, "diff": 0 }
```

#### trunc

将数字截断为整形。  
Truncate the number to integer.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.trunc(<number>)
```
参数可以是任意解析为数字的表达式。  
The parameter can be any expression that resolves to a number.
 
#####  示例代码
#####  Sample code
 假设集合 `scores` 有如下记录：  
 Suppose the collection `scores` has the following records:

 
```js
{ "_id": 1, "value": 1.21 }
{ "_id": 2, "value": 3.83 }
{ "_id": 3, "value": -4.94 }
```

```js
const $ = db.command.aggregate
let res = await db.collection('scores').aggregate()
  .project({
    int: $.trunc('$value')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "value": 1 }
{ "_id": 2, "value": 3 }
{ "_id": 3, "value": -4 }
```

### 数组操作符
### Array Operator
#### arrayElemAt

返回在指定数组下标的元素。  
Returns the element at the index of the specified array.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.arrayElemAt([<array>, <index>])
```
`<array>` 可以是任意解析为数组的表达式。  
`<array>` can be any expression that resolves to an array.
 `<index>` 可以是任意解析为整形的表达式。如果是正数，`arrayElemAt` 返回在 `index` 位置的元素，如果是负数，`arrayElemAt` 返回从数组尾部算起的 `index` 位置的元素。  
 `<index>` can be any expression that resolves to an integer. If it is a positive number, `arrayElemAt` returns the element at the `index` position, if it is a negative number, `arrayElemAt` returns the element at the `index` position from the end of the array.
 
#####  示例代码
#####  Sample code
 假设集合 `exams` 有如下记录：  
 Suppse the collection `exams` has the following records:
 
```js
{ "_id": 1, "scores": [80, 60, 65, 90] }
{ "_id": 2, "scores": [78] }
{ "_id": 3, "scores": [95, 88, 92] }
```
求各个第一次考试的分数和和最后一次的分数：  
Find the scores of each first exam and the last score:
 
```js
const $ = db.command.aggregate
let res = await db.collection('exams').aggregate()
  .project({
    first: $.arrayElemAt(['$scores', 0]),
    last: $.arrayElemAt(['$scores', -1]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "first": 80, "last": 90 }
{ "_id": 2, "first": 78, "last": 78 }
{ "_id": 3, "first": 95, "last": 92 }
```

#### arrayToObject

将一个数组转换为对象。  
Convert an array to an object.
#####  API 说明
#####  API description
 语法可以取两种： 
 There are two kinds of grammar:

 第一种：传入一个二维数组，第二维的数组长度必须为 2，其第一个值为字段名，第二个值为字段值  
 The first type: Pass in a two-dimensional array, the length of the second-dimensional array must be 2, the first value is the field name, and the second value is the field value
 
```js
db.command.aggregate.arrayToObject([
  [<key1>, <value1>],
  [<key2>, <value2>],
  ...
])
```
第二种：传入一个对象数组，各个对象必须包含字段 `k` 和 `v`，分别指定字段名和字段值  
The second type: pass in an array of objects, each object must contain the fields `k` and `v`, specify the field name and field value respectively
 
```js
db.command.aggregate.arrayToObject([
  { "k": <key1>, "v": <value1> },
  { "k": <key2>, "v": <value2> },
  ...
])
```
传入 `arrayToObject` 的参数只要可以解析为上述两种表示法之一即可。  
The parameter passed in `arrayToObject` only needs to be parsed into one of the above two notations.

#####  示例代码
#####  Sample code
 假设集合 `shops` 有如下记录：  
 Suppose the collection `shops` has the following records:
 
```js
{ "_id": 1, "sales": [ ["max", 100], ["min", 50] ] }
{ "_id": 2, "sales": [ ["max", 70], ["min", 60] ] }
{ "_id": 3, "sales": [ { "k": "max", "v": 50 }, { "k": "min", "v": 30 } ] }
```
求各个第一次考试的分数和和最后一次的分数：  
Find the scores of each first exam and the last score:
 
```js
const $ = db.command.aggregate
let res = await db.collection('shops').aggregate()
  .project({
    sales: $.arrayToObject('$sales'),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "sales": { "max": 100, "min": 50 } }
{ "_id": 2, "sales": { "max": 70, "min": 60 } }
{ "_id": 3, "sales": { "max": 50, "min": 30 } }
```

#### concatArrays

将多个数组拼接成一个数组。  
Concatenate multiple arrays into one array.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.concatArrays([ <array1>, <array2>, ... ])
```
参数可以是任意解析为数组的表达式。  
The parameter can be any expression that resolves to an array.
#####  示例代码
#####  Sample code
 假设集合 `items` 有如下记录：  
 Suppose the collection `items` has the following records:
 
```js
{ "_id": 1, "fruits": [ "apple" ], "vegetables": [ "carrot" ] }
{ "_id": 2, "fruits": [ "orange", "lemon" ], "vegetables": [ "cabbage" ] }
{ "_id": 3, "fruits": [ "strawberry" ], "vegetables": [ "spinach" ] }
```

```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    list: $.concatArrays(['$fruits', '$vegetables']),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "list": [ "apple", "carrot" ] }
{ "_id": 2, "list": [ "orange", "lemon", "cabbage" ] }
{ "_id": 3, "list": [ "strawberry", "spinach" ] }
```

#### filter

根据给定条件返回满足条件的数组的子集。  
Returns a subset of the array that meets the conditions according to the given conditions.
     
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.filter({
  input: <array>,
  as: <string>,
  cond: <expression>
})
```

|字段	|说明																																																											|
|Field |Description |
|----	|----																																																											|
|input|一个可以解析为数组的表达式																																																|
|input|An expression that can be parsed as an array |
|as		|可选，用于表示数组各个元素的变量，默认为 this																																						|
|as |Optional, used to represent the variables of each element of the array, the default is this |
|cond	|一个可以解析为布尔值的表达式，用于判断各个元素是否满足条件，各个元素的名字由 as 参数决定（参数名需加 $$ 前缀，如 $$this）|
|cond |An expression that can be parsed as a Boolean value is used to determine whether each element meets the condition. The name of each element is determined by the as parameter (the parameter name needs to be prefixed with $$, such as $$this)|
参数可以是任意解析为数组的表达式。  
The parameter can be any expression that resolves to an array.
#####  示例代码
#####  Sample code
 假设集合 `fruits` 有如下记录：  
 Suppose the collection `fruits` has the following records:

 
```json
{
  "_id": 1,
  "stock": [
    { "name": "apple", "price": 10 },
    { "name": "orange", "price": 20 }
  ],
}
{
  "_id": 2,
  "stock": [
    { "name": "lemon", "price": 15 },
  ],
}
```

```js
const _ = db.command
const $ = db.command.aggregate
let res = await db.collection('fruits').aggregate()
  .project({
    stock: $.filter({
      input: '$stock',
      as: 'item',
      cond: $.gte(['$$item.price', 15])
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "stock": [ { "name": "orange", "price": 20} ] }
{ "_id": 2, "stock": [ { "name": "lemon", "price": 15 } ] }
```

#### in

给定一个值和一个数组，如果值在数组中则返回 `true`，否则返回 `false`。  
Given a value and an array, it returns `true` if the value is in the array, otherwise it returns `false`.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.in([<value>, <array>])
```
`<value>` 可以是任意表达式。  
`<value>` can be any expression.
 `<array>` 可以是任意解析为数组的表达式。  
 `<array>` can be any expression that resolves to an array.
 
#####  示例代码
#####  Sample code
 假设集合 `shops` 有如下记录：  
 Suppose the collection `shops` has the following records:

 
```js
{ "_id": 1, "topsellers": ["bread", "ice cream", "butter"] }
{ "_id": 2, "topsellers": ["ice cream", "cheese", "yagurt"] }
{ "_id": 3, "topsellers": ["croissant", "cucumber", "coconut"] }
```
标记销量最高的商品包含 `ice cream` 的记录。  
Mark the record of the highest-selling product containing `ice cream`.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    included: $.in(['ice cream', '$topsellers'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "included": true }
{ "_id": 2, "included": true }
{ "_id": 3, "included": false }
```

#### indexOfArray

在数组中找出等于给定值的第一个元素的下标，如果找不到则返回 -1。  
Find the index of the first element equal to the given value in the array, and return -1 if not found.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.indexOfArray([ <array expression>, <search expression>, <start>, <end> ])
```

|字段	|类型		|说明																																						|
|Field |Type |Description |
|----	|----		|----																																						|
|-		|string	|一个可以解析为数组的表达式，如果解析为 null，则 indexOfArray 返回 null					|
|- |string |An expression that can be parsed as an array, if parsed as null, indexOfArray returns null |
|-		|string	|对数据各个元素应用的条件匹配表达式																							|
|- |string | Conditional matching expression applied to each element of the data |
|-		|integer|可选，用于指定搜索的开始下标，必须是非负整数																		|
|- |integer|Optional, used to specify the starting index of the search, must be a non-negative integer |
|-		|integer|可选，用于指定搜索的结束下标，必须是非负整数，指定了 时也应指定 ，否则 默认当做|
|- |integer| is optional, used to specify the ending index of the search, it must be a non-negative integer, and should also be specified when specified, otherwise it will be treated as | by default
参数可以是任意解析为数组的表达式。  
The parameter can be any expression that resolves to an array.
 
#####  示例代码
#####  Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```json
{
  "_id": 1,
  "sales": [ 1, 6, 2, 2, 5 ]
}
{
  "_id": 2,
  "sales": [ 4, 2, 1, 5, 2 ]
}
{
  "_id": 3,
  "sales": [ 2, 5, 3, 3, 1 ]
}
```

```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    index: $.indexOfArray(['$sales', 2, 2])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "index": 2 }
{ "_id": 2, "index": 4 }
{ "_id": 3, "index": -1 }
```

#### isArray

判断给定表达式是否是数组，返回布尔值。  
Determine whether the given expression is an array, and return a boolean value.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.isArray(<expression>)
```
参数可以是任意表达式。  
The parameter can be any expression.
 
#####  示例代码
#####  Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:
 
```js
{
  "_id": 1,
  "base": 10,
  "sales": [ 1, 6, 2, 2, 5 ]
}
{
  "_id": 2,
  "base": 1,
  "sales": 100
}
```
计算总销量，如果 `sales` 是数字，则求 `sales * base`，如果 `sales` 是数组，则求数组元素之和与 `base` 的乘积。  
Calculate the total sales. If `sales` is a number, then find `sales * base`, if `sales` is an array, then find the product of the sum of the array elements and `base`.
 
```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    sum: $.cond({
      if: $.isArray('$sales'),
      then: $.multiply([$.sum(['$sales']), '$base']),
      else: $.multiply(['$sales', '$base']),
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "index": 160 }
{ "_id": 2, "index": 100 }
```

#### map

类似 JavaScript Array 上的 `map` 方法，将给定数组的每个元素按给定转换方法转换后得出新的数组。  
Similar to the `map` method on JavaScript Array, each element of the given array is converted according to the given conversion method to get a new array.

#####  API 说明
##### API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.map({
  input: <expression>,
  as: <string>,
  in: <expression>
})
```

|字段	|说明																																																			|
|Field |Description |
|----	|----																																																			|
|input|一个可以解析为数组的表达式																																								|
|input|An expression that can be parsed as an array |
|as		|可选，用于表示数组各个元素的变量，默认为 this																														|
|as |Optional, used to represent the variables of each element of the array, the default is this |
|in		|一个可以应用在给定数组的各个元素上的表达式，各个元素的名字由 as 参数决定（参数名需加 $$ 前缀，如 $$this）|
|in |An expression that can be applied to each element of a given array. The name of each element is determined by the as parameter (the parameter name needs to be prefixed with $$, such as $$this)|
#####  示例代码
#####  Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:
 
```js
{
  "_id": 1,
  "sales": [ 1.32, 6.93, 2.48, 2.82, 5.74 ]
}
{
  "_id": 2,
  "sales": [ 2.97, 7.13, 1.58, 6.37, 3.69 ]
}
```
将各个数字截断为整形，然后求和  
Truncate each number into an integer, and then sum

```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    truncated: $.map({
      input: '$sales',
      as: 'num',
      in: $.trunc('$$num'),
    })
  })
  .project({
    total: $.sum('$truncated')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "index": 16 }
{ "_id": 2, "index": 19 }
```

#### objectToArray

将一个对象转换为数组。方法把对象的每个键值对都变成输出数组的一个元素，元素形如 `{ k: <key>, v: <value> }`。  
Convert an object to an array. The method turns each key-value pair of the object into an element of the output array, and the element is shaped like `{ k: <key>, v: <value> }`.

     
     
##### API 说明
##### API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.objectToArray(<object>)
```

#####  示例代码
#####  Sample code
 假设集合 `items` 有如下记录：  
 Suppose the collection `items` has the following records:
 
```js
{ "_id": 1, "attributes": { "color": "red", "price": 150 } }
{ "_id": 2, "attributes": { "color": "blue", "price": 50 } }
{ "_id": 3, "attributes": { "color": "yellow", "price": 10 } }
```

```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    array: $.objectToArray('$attributes')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "array": [{ "k": "color", "v": "red" }, { "k": "price", "v": 150 }] }
{ "_id": 2, "array": [{ "k": "color", "v": "blue" }, { "k": "price", "v": 50 }] }
{ "_id": 3, "array": [{ "k": "color", "v": "yellow" }, { "k": "price", "v": 10 }] }
```

#### range

返回一组生成的序列数字。给定开始值、结束值、非零的步长，`range` 会返回从开始值开始逐步增长、步长为给定步长、但不包括结束值的序列。  
Returns a set of generated sequence numbers. Given a start value, an end value, and a non-zero step size, `range` will return a sequence that gradually increases from the start value and the step size is the given step size, but does not include the end value.

#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.range([<start>, <end>, <non-zero step>])
```

|字段					|说明																									|
|Field |Description |
|----					|----																									|
|start				|开始值，一个可以解析为整形的表达式										|
|start |Start value, an expression that can be parsed as an integer |
|end					|结束值，一个可以解析为整形的表达式										|
|end |End value, an expression that can be parsed as an integer |
|non-zero step|可选，步长，一个可以解析为非零整形的表达式，默认为 1	|
|non-zero step|Optional, step size, an expression that can be parsed as a non-zero integer, the default is 1 |
#####  示例代码
##### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:
 
```js
{ "_id": 1, "max": 52 }
{ "_id": 2, "max": 38 }
```

```js
const $ = db.command.aggregate
db.collection('stats').aggregate()
  .project({
    points: $.range([0, '$max', 10])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "points": [0, 10, 20, 30, 40, 50] }
{ "_id": 2, "points": [0, 10, 20, 30] }
```

#### reduce

类似 JavaScript 的 `reduce` 方法，应用一个表达式于数组各个元素然后归一成一个元素。  
Similar to JavaScript's `reduce` method, an expression is applied to each element of the array and then normalized into one element.
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.reduce({
  input: <array>
  initialValue: <expression>,
  in: <expression>
})
```

|字段					|说明																																																				|
|Field |Description |
|----					|----																																																				|
|input				|输入数组，可以是任意解析为数组的表达式																																			|
|input |The input array, which can be any expression parsed as an array |
|initialValue	|初始值																																																			|
|initialValue |Initial Value |
|in						|用来作用于每个元素的表达式，在 in 中有两个可用变量，value 是表示累计值的变量，this 是表示当前数组元素的变量|
|in |The expression used to act on each element. There are two available variables in in, value is the variable that represents the cumulative value, and this is the variable that represents the current array element|
#####  示例代码
##### Sample code

**简易字符串拼接**
**Easy string splicing**
 假设集合 `player` 有如下记录：  
 Suppose the collection `player` has the following records:

 
```js
{ "_id": 1, "fullname": [ "Stephen", "Curry" ] }
{ "_id": 2, "fullname": [ "Klay", "Thompsom" ] }
```
获取各个球员的全名，并加 `Player:` 前缀：  
Get the full name of each player and prefix it with `Player:`:
 
```js
const $ = db.command.aggregate
let res = await db.collection('player').aggregate()
  .project({
    info: $.reduce({
      input: '$fullname',
      initialValue: 'Player:',
      in: $.concat(['$$value', ' ', '$$this']),
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "info": "Player: Stephen Curry" }
{ "_id": 2, "info": "Player: Klay Thompson" }
```
获取各个球员的全名，不加前缀：  
Get the full name of each player without prefix:
 
```js
const $ = db.command.aggregate
let res = await db.collection('player').aggregate()
  .project({
    name: $.reduce({
      input: '$fullname',
      initialValue: '',
      in: $.concat([
        '$$value',
        $.cond({
          if: $.eq(['$$value', '']),
          then: '',
          else: ' ',
        }),
        '$$this',
      ]),
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "name": "Stephen Curry" }
{ "_id": 2, "name": "Klay Thompson" }
```

#### reverseArray

返回给定数组的倒序形式。  
Returns the reversed form of the given array.

#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.reverseArray(<array>)
```
参数可以是任意解析为数组表达式。  
Parameters can be arbitrarily parsed as array expressions.

#####  示例代码
#####  Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:
 
```js
{
  "_id": 1,
  "sales": [ 1, 2, 3, 4, 5 ]
}
```
取 `sales` 倒序：  
Take `sales` in reverse order:
 
```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    reversed: $.reverseArray('$sales'),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "reversed": [5, 4, 3, 2, 1] }
```

#### size

返回数组长度。  
Returns the length of the array.
     
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.size(<array>)
```
`<array>` 可以是任意解析为数组的表达式。  
`<array>` can be any expression that resolves to an array.

 
 
#####  示例代码
#####  Sample code
 假设集合 `shops` 有如下记录：  
 Suppose the collection `shops` has the following records:
 
```js
{ "_id": 1, "staff": [ "John", "Middleton", "George" ] }
{ "_id": 2, "staff": [ "Steph", "Jack" ] }
```
计算各个商店的雇员数量：  
Calculate the number of employees in each store:
 
```js
const $ = db.command.aggregate
let res = await db.collection('shops').aggregate()
  .project({
    totalStaff: $.size('$staff')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "totalStaff": 3 }
{ "_id": 2, "totalStaff": 2 }
```

#### slice

类似 JavaScritp 的 `slice` 方法。返回给定数组的指定子集。  
Similar to the `slice` method of JavaScritp. Returns the specified subset of the given array.
      
#####  API 说明
#####  API description
 语法有两种：  
 There are two kinds of syntax:
 返回从开头或结尾开始的 `n` 个元素：  
 Return `n` elements from the beginning or end:
 
```js
db.command.aggregate.slice([<array>, <n>])
```
返回从指定位置算作数组开头、再向后或向前的 `n` 个元素：  
Return the `n` elements counted as the beginning of the array from the specified position, and then backward or forward:
 
```js
db.command.aggregate.slice([<array>, <position>, <n>])
```
`<array>` 可以是任意解析为数组的表达式。  
`<array>` can be any expression that resolves to an array.
 `<position>` 可以是任意解析为整形的表达式。如果是正数，则将数组的第 `<position>` 个元素作为数组开始；如果 `<position>` 比数组长度更长，`slice` 返回空数组。如果是负数，则将数组倒数第 `<position>` 个元素作为数组开始；如果 `<position>` 的绝对值大于数组长度，则开始位置即为数组开始位置。  
 `<position>` can be any expression that resolves to an integer. If it is a positive number, the `<position>` element of the array is used as the beginning of the array; if `<position>` is longer than the length of the array, `slice` returns an empty array. If it is a negative number, the last element `<position>` of the array is taken as the beginning of the array; if the absolute value of `<position>` is greater than the length of the array, the starting position is the beginning of the array.
 `<n>` 可以是任意解析为整形的表达式。如果 `<position>` 有提供，则 `<n>` 必须为正整数。如果是正数，`slice` 返回前 `n` 个元素。如果是负数，`slice` 返回后 `n` 个元素。  
 `<n>` can be any expression that resolves to an integer. If `<position>` is provided, then `<n>` must be a positive integer. If it is a positive number, `slice` returns the first `n` elements. If it is a negative number, `slice` returns the last `n` elements.
 
#####  示例代码
#####  Sample code
 假设集合 `people` 有如下记录：  
 Suppose the collection `people` has the following records:
 
```js
{ "_id": 1, "hobbies": [ "basketball", "football", "tennis", "badminton" ] }
{ "_id": 2, "hobbies": [ "golf", "handball" ] }
{ "_id": 3, "hobbies": [ "table tennis", "swimming", "rowing" ] }
```
统一返回前两个爱好：  
Return to the first two hobbies:
 
```js
const $ = db.command.aggregate
let res = await db.collection('fruits').aggregate()
  .project({
    hobbies: $.slice(['$hobbies', 2]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "hobbies": [ "basketball", "football" ] }
{ "_id": 2, "hobbies": [ "golf", "handball" ] }
{ "_id": 3, "hobbies": [ "table tennis", "swimming" ] }
```

#### zip

把二维数组的第二维数组中的相同序号的元素分别拼装成一个新的数组进而组装成一个新的二维数组。如可将 `[ [ 1, 2, 3 ], [ "a", "b", "c" ] ]` 转换成 `[ [ 1, "a" ], [ 2, "b" ], [ 3, "c" ] ]`。  
The elements of the same serial number in the second-dimensional array of the two-dimensional array are assembled into a new array and then assembled into a new two-dimensional array. For example, `[ [1, 2, 3 ], ["a", "b", "c"] ]` can be converted to `[ [1, "a" ], [2, "b" ], [3 , "c"] ]`.
     
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.zip({
  inputs: [<array1>, <array2>, ...],
  useLongestLength: <boolean>,
  defaults: <array>
})
```
`inputs` 是一个二维数组（`inputs` 不可以是字段引用），其中每个元素的表达式（这个可以是字段引用）都可以解析为数组。如果其中任意一个表达式返回 `null`，`<inputs>` 也返回 `null`。如果其中任意一个表达式不是指向一个合法的字段 / 解析为数组 / 解析为 `null`，则返回错误。  
`inputs` is a two-dimensional array (`inputs` cannot be a field reference), and the expression of each element (this can be a field reference) can be parsed as an array. If any of these expressions returns `null`, `<inputs>` also returns `null`. If any of the expressions does not point to a legal field / parsed as an array / parsed as `null`, an error is returned.
 `useLongestLength` 决定输出数组的长度是否采用输入数组中的最长数组的长度。默认为 `false`，即输入数组中的最短的数组的长度即是输出数组的各个元素的长度。  
 `useLongestLength` determines whether the length of the output array adopts the length of the longest array in the input array. The default is `false`, that is, the length of the shortest array in the input array is the length of each element of the output array.
 `defaults` 是一个数组，用于指定在输入数组长度不一的情况下时采用的数组各元素默认值。指定这个字段则必须指定 `useLongestLength`，否则返回错误。如果 `useLongestLength` 是 `true` 但是 `defaults` 是空或没有指定，则 `zip` 用 `null` 做数组元素的缺省默认值。指定各元素默认值时 `defaults` 数组的长度必须是输入数组最大的长度。  
 `defaults` is an array, which is used to specify the default value of each element of the array when the length of the input array is different. Specifying this field must specify `useLongestLength`, otherwise an error will be returned. If `useLongestLength` is `true` but `defaults` is empty or not specified, `zip` uses `null` as the default default value for the array elements. When specifying the default value of each element, the length of the `defaults` array must be the maximum length of the input array.
 
#####  示例代码
#####  Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:
 
```js
{ "_id": 1, "zip1": [1, 2], "zip2": [3, 4], "zip3": [5, 6] ] }
{ "_id": 2, "zip1": [1, 2], "zip2": [3], "zip3": [4, 5, 6] ] }
{ "_id": 3, "zip1": [1, 2], "zip2": [3] ] }
```


**只传 inputs**
**Only pass inputs**

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    zip: $.zip({
      inputs: [
        '$zip1', // 字段引用(字段引用)
        '$zip2',
        '$zip3',
      ],
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "zip": [ [1, 3, 5], [2, 4, 6] ] }
{ "_id": 2, "zip": [ [1, 3, 4] ] }
{ "_id": 3, "zip": null }
```


**设置 useLongestLength**
**Set useLongestLength**

 如果设 `useLongestLength` 为 `true`：  
 If you set `useLongestLength` to `true`:
 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    zip: $.zip({
      inputs: [
        '$zip1', // 字段引用(Field reference)
        '$zip2',
        '$zip3',
      ],
      useLongestLength: true,
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "zip": [ [1, 3, 5], [2, 4, 6] ] }
{ "_id": 2, "zip": [ [1, 3, 4], [2, null, 5], [null, null, 6] ] }
{ "_id": 3, "zip": null }
```


**设置 defaults**
**Set defaults**
 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    zip: $.zip({
      inputs: [
        '$zip1', // 字段引用(Field reference)
        '$zip2',
        '$zip3',
      ],
      useLongestLength: true,
      defaults: [-300, -200, -100],
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "zip": [ [1, 3, 5], [2, 4, 6] ] }
{ "_id": 2, "zip": [ [1, 3, 4], [2, -200, 5], [-300, -200, 6] ] }
{ "_id": 3, "zip": null }
```

### 布尔操作符
### Boolean operators
#### and

给定多个表达式，`and` 仅在所有表达式都返回 `true` 时返回 `true`，否则返回 `false`。  
Given multiple expressions, `and` returns `true` only if all expressions return `true`, otherwise it returns `false`.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.and([<expression1>, <expression2>, ...])
```
如果表达式返回 `false`、`null`、`0`、或 `undefined`，表达式会解析为 `false`，否则对其他返回值都认为是 `true`。  
If the expression returns `false`, `null`, `0`, or `undefined`, the expression will be parsed as `false`, otherwise it will be considered as `true` for other return values.
 
#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "min": 10, "max": 100 }
{ "_id": 2, "min": 60, "max": 80 }
{ "_id": 3, "min": 30, "max": 50 }
```
求 `min` 大于等于 30 且 `max` 小于等于 80 的记录。  
Find the records where `min` is greater than or equal to 30 and `max` is less than or equal to 80.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    fullfilled: $.and([$.gte(['$min', 30]), $.lte(['$max', 80])])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "fullfilled": false }
{ "_id": 2, "fullfilled": true }
{ "_id": 3, "fullfilled": true }
```

#### not

给定一个表达式，如果表达式返回 `true`，则 `not` 返回 `false`，否则返回 `true`。注意表达式不能为逻辑表达式（`and`、`or`、`nor`、`not`）。  
Given an expression, if the expression returns `true`, then `not` returns `false`, otherwise it returns `true`. Note that the expression cannot be a logical expression (`and`, `or`, `nor`, `not`).
      
#####  API 说明
#####  API description
 语法如下：
 The syntax is as follows:

 
```js
db.command.aggregate.not(<expression>)
```
如果表达式返回 `false`、`null`、`0`、或 `undefined`，表达式会解析为 `false`，否则对其他返回值都认为是 `true`。  
If the expression returns `false`, `null`, `0`, or `undefined`, the expression will be parsed as `false`, otherwise it will be considered as `true` for other return values.
 
#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "min": 10, "max": 100 }
{ "_id": 2, "min": 60, "max": 80 }
{ "_id": 3, "min": 30, "max": 50 }
```
求 `min` 不大于 40 的记录。  
Find the records where `min` is not greater than 40.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    fullfilled: $.not($.gt(['$min', 40]))
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "fullfilled": true }
{ "_id": 2, "fullfilled": false }
{ "_id": 3, "fullfilled": true }
```

#### or

给定多个表达式，如果任意一个表达式返回 `true`，则 `or` 返回 `true`，否则返回 `false`。  
Given multiple expressions, if any one of the expressions returns `true`, then `or` returns `true`, otherwise it returns `false`.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.or([<expression1>, <expression2>, ...])
```
如果表达式返回 `false`、`null`、`0`、或 `undefined`，表达式会解析为 `false`，否则对其他返回值都认为是 `true`。  
If the expression returns `false`, `null`, `0`, or `undefined`, the expression will be parsed as `false`, otherwise it will be considered as `true` for other return values.
 
#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "min": 10, "max": 100 }
{ "_id": 2, "min": 60, "max": 80 }
{ "_id": 3, "min": 30, "max": 50 }
```
求 `min` 小于 40 且 `max` 大于 60 的记录。  
Find the records where `min` is less than 40 and `max` is greater than 60.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    fullfilled: $.or([$.lt(['$min', 30]), $.gt(['$max', 60])])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "fullfilled": true }
{ "_id": 2, "fullfilled": false }
{ "_id": 3, "fullfilled": true }
```

### 比较操作符
### Comparison operators
#### cmp

给定两个值，返回其比较值：  
Given two values, return the comparison value:
      
#####  API 说明
#####  API description
如果第一个值小于第二个值，返回 -1
 If the first value is less than the second value, return -1
如果第一个值大于第二个值，返回 1
If the first value is greater than the second value, return 1
如果两个值相等，返回 0  
If the two values are equal, return 0
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.cmp([<expression1>, <expression2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "shop1": 10, "shop2": 100 }
{ "_id": 2, "shop1": 80, "shop2": 20 }
{ "_id": 3, "shop1": 50, "shop2": 50 }
```
求 `shop1` 和 `shop2` 的各个物品的价格对比。  
Find the price comparison of each item in shop1 and shop2.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    compare: $.cmp(['$shop1', '$shop2']))
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "compare": -1 }
{ "_id": 2, "compare": 1 }
{ "_id": 3, "compare": 0 }
```

#### eq

匹配两个值，如果相等则返回 `true`，否则返回 `false`。  
Match two values and return `true` if they are equal, otherwise `false`.

#####  API 说明
#####  API description
 语法如下： 
 The syntax is as follows:

 
```js
db.command.aggregate.eq([<value1>, <value2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
求 `value` 等于 50 的记录。  
Find records where `value` is equal to 50.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.eq(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "matched": false }
{ "_id": 2, "matched": false }
{ "_id": 3, "matched": true }
```

#### gt

匹配两个值，如果前者大于后者则返回 `true`，否则返回 `false`。  
Match two values, if the former is greater than the latter, it returns `true`, otherwise it returns `false`.
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.gt([<value1>, <value2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否大于 50。  
Determine whether `value` is greater than 50.
 
```js
const $ = db.command.aggregate
db.collection('price').aggregate()
  .project({
    matched: $.gt(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "matched": false }
{ "_id": 2, "matched": true }
{ "_id": 3, "matched": false }
```

#### gte

匹配两个值，如果前者大于或等于后者则返回 `true`，否则返回 `false`。  
Match two values, if the former is greater than or equal to the latter, it returns `true`, otherwise it returns `false`.

#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.gte([<value1>, <value2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否大于或等于 50。  
Determine whether `value` is greater than or equal to 50.
 
```js
const $ = db.command.aggregate
let res = await b.collection('price').aggregate()
  .project({
    matched: $.gte(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "matched": false }
{ "_id": 2, "matched": true }
{ "_id": 3, "matched": true }
```

#### lt

匹配两个值，如果前者小于后者则返回 `true`，否则返回 `false`。  
Match two values, if the former is less than the latter, it returns `true`, otherwise it returns `false`.

#####  API 说明
#####  API description
 语法如下：
 The syntax is as follows:

 
```js
db.command.aggregate.lt([<value1>, <value2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否小于 50。  
Determine whether `value` is less than 50.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.lt(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "matched": true }
{ "_id": 2, "matched": false }
{ "_id": 3, "matched": false }
```

#### lte

匹配两个值，如果前者小于或等于后者则返回 `true`，否则返回 `false`。  
Match two values, if the former is less than or equal to the latter, it returns `true`, otherwise it returns `false`.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.lte([<value1>, <value2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否小于 50。  
Determine whether `value` is less than 50.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.lte(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "matched": true }
{ "_id": 2, "matched": false }
{ "_id": 3, "matched": true }
```

#### neq

匹配两个值，如果不相等则返回 `true`，否则返回 `false`。  
Match two values and return `true` if they are not equal, otherwise `false`.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.neq([<value1>, <value2>])
```

#####  示例代码
#####  Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:
 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
求 `value` 不等于 50 的记录。  
Find records where `value` is not equal to 50.
 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.neq(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "matched": true }
{ "_id": 2, "matched": true }
{ "_id": 3, "matched": false }
```

### 条件操作符
### Conditional Operator
#### cond

计算布尔表达式，返回指定的两个值其中之一。  
Evaluate a Boolean expression and return one of the two specified values.
     
#####  API 说明
#####  API description
 `cond` 的使用形式如下：  
 The usage form of `cond` is as follows:
 
```js
cond({ if: <布尔表达式(Boolean expression)>, then: <真值(Truth value)>, else: <假值(False value)>  })
```
或者：  
or:
 
```js
cond([ <布尔表达式(Boolean expression)>, <真值(Truth value)>, <假值(False value)> ])
```
两种形式中，三个参数（`if`、`then`、`else`）都是必须的。  
In both forms, the three parameters (`if`, `then`, `else`) are all required.

 如果布尔表达式为真，那么 `$cond` 将会返回 `<真值>`，否则会返回 `<假值>`  
 If the boolean expression is true, then `$cond` will return `<true value>`, otherwise it will return `<false value>`
 
#####  示例代码
#####  Sample code
 假设集合 `items` 的记录如下：  
 Suppose the records of the collection `items` are as follows:
 
```js
{ "_id": "0", "name": "item-a", "amount": 100 }
{ "_id": "1", "name": "item-b", "amount": 200 }
{ "_id": "2", "name": "item-c", "amount": 300 }
```
我们可以使用 `cond`，根据 `amount` 字段，来生成新的字段 `discount`：  
We can use `cond` to generate a new field `discount` based on the `amount` field:
 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    name: 1,
    discount: $.cond({
        if: $.gte(['$amount', 200]),
        then: 0.7,
        else: 0.9
    })
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": "0", "name": "item-a", "discount": 0.9 }
{ "_id": "1", "name": "item-b", "discount": 0.7 }
{ "_id": "2", "name": "item-c", "discount": 0.7 }
```

#### ifNull

计算给定的表达式，如果表达式结果为 null、undefined 或者不存在，那么返回一个替代值；否则返回原值。  
Calculate the given expression, and if the result of the expression is null, undefined, or does not exist, then return a substitute value; otherwise, return the original value.
      
#####  API 说明
#####  API description
 `ifNull` 的使用形式如下：  
 The usage form of `ifNull` is as follows:
 
```js
ifNull([ <表达式(expression)>, <替代值(Substitute value)> ])
```

#####  示例代码
#####  Sample code
 假设集合 `items` 的记录如下：  
 Suppose the records of the collection `items` are as follows:
 
```js
{ "_id": "0", "name": "A", "description": "这是商品A" }
{ "_id": "1", "name": "B", "description": null }
{ "_id": "2", "name": "C" }
```
我们可以使用 `ifNull`，对不存在 `desc` 字段的文档，或者 `desc` 字段为 `null` 的文档，补充一个替代值。  
We can use `ifNull` to add a substitute value for documents where the `desc` field does not exist, or for documents where the `desc` field is `null`.
 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    _id: 0,
    name: 1,
    description: $.ifNull(['$description', '商品描述空缺'])
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "name": "A", "description": "这是商品A" }
{ "name": "B", "description": "商品描述空缺" }
{ "name": "C", "description": "商品描述空缺" }
```

#### switch

根据给定的 `switch-case-default` 计算返回值、  
Calculate the return value according to the given `switch-case-default`,
     
#####  API 说明
#####  API description
 `switch` 的使用形式如下：  
 The usage form of `switch` is as follows:
 
```js
switch({
    branches: [
        case: <表达式(expression)>, then: <表达式(expression)>,
        case: <表达式(expression)>, then: <表达式(expression)>,
        ...
    ],
    default: <表达式(expression)>
})
```

#####  示例代码
#####  Sample code
 假设集合 `items` 的记录如下：  
 Suppose the records of the collection `items` are as follows:
 
```js
{ "_id": "0", "name": "item-a", "amount": 100 }
{ "_id": "1", "name": "item-b", "amount": 200 }
{ "_id": "2", "name": "item-c", "amount": 300 }
```
我们可以使用 `switch`，根据 `amount` 字段，来生成新的字段 `discount`：  
We can use `switch` to generate a new field `discount` based on the `amount` field:
 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    name: 1,
    discount: $.switch({
        branches: [
            { case: $.gt(['$amount', 250]), then: 0.8 },
            { case: $.gt(['$amount', 150]), then: 0.9 }
        ],
        default: 1
    })
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": "0", "name": "item-a", "discount": 1 }
{ "_id": "1", "name": "item-b", "discount": 0.9 }
{ "_id": "2", "name": "item-c", "discount": 0.8 }
```

### 日期操作符
### Date Operator
**注意**
**Notice**
- 以下日期操作符中`timezone`均支持以下几种形式
- The following date operators in `timezone` all support the following forms
```js
timezone: "Asia/Shanghai" // Asia/Shanghai时区(Asia/Shanghai时区)
timezone: "+08" // utc+8时区(utc+8时区)
timezone: "+08:30" // 时区偏移8小时30分(时区偏移8小时30分)
timezone: "+0830" // 时区偏移8小时30分，同上(时区偏移8小时30分，同上)
```

#### dateFromParts

给定日期的相关信息，构建并返回一个日期对象。  
Given information about the date, construct and return a date object.
     
#####  API 说明
#####  API dscription
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.dateFromParts({
    year: <year>,
    month: <month>,
    day: <day>,
    hour: <hour>,
    minute: <minute>,
    second: <second>,
    millisecond: <ms>,
    timezone: <tzExpression>
})
```
你也可以使用 ISO 8601 的标准：  
You can also use the ISO 8601 standard:
 
```js
db.command.aggregate.dateFromParts({
    isoWeekYear: <year>,
    isoWeek: <week>,
    isoDayOfWeek: <day>,
    hour: <hour>,
    minute: <minute>,
    second: <second>,
    millisecond: <ms>,
    timezone: <tzExpression>
})
```

#####  示例代码
#####  Sample code
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    date: $.dateFromParts({
        year: 2017,
        month: 2,
        day: 8,
        hour: 12,
        timezone: 'America/New_York'
    }),
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{
    "date": ISODate("2017-02-08T17:00:00.000Z")
}
```

#### dateFromString

将一个日期/时间字符串转换为日期对象  
Convert a date/time string to a date object

#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
db.command.aggregate.dateFromString({
    dateString: <dateStringExpression>,
    timezone: <tzExpression>
})
```

#####  示例代码
#####  Sample code
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    date: $.dateFromString({
        dateString: "2019-05-14T09:38:51.686Z"
    })
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

#### dateToString

根据指定的表达式将日期对象格式化为符合要求的字符串。  
Format the date object into a string that meets the requirements according to the specified expression.

#####  API 说明
#####  API description
 `dateToString` 的调用形式如下：  
 The calling form of `dateToString` is as follows:
 
```js
db.command.aggregate.dateToString({
  date: <日期表达式(Date expression)>,
  format: <格式化表达式(Formatting expression)>,
  timezone: <时区表达式(Time zone expression)>,
  onNull: <空值表达式(Null expression)>
})
```


下面是四种表达式的详细说明：  
The following is a detailed description of the four expressions:
|名称					|描述																																																																																																											|
|Name |Description |
|----					|----																																																																																																											|
|日期表达式		|必选。指定字段值应该是能转化为字符串的日期。																																																																																							|
|Date expression|Required. The specified field value should be a date that can be converted into a string. |
|格式化表达式	|可选。它可以是任何包含“格式说明符”的有效字符串。																																																																																				|
|Formatting expression|Optional. It can be any valid string containing a "format specifier". |
|时区表达式		|可选。指明运算结果的时区。它可以解析格式为 [UTC Offset](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) 或者 [Olson Timezone Identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 的字符串。|
|Time zone expression |Optional. Specify the time zone of the calculation result. It can parse strings in the format [UTC Offset](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) or [Olson Timezone Identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |
|空值表达式		|可选。当 <日期表达式> 返回空或者不存在的时候，会返回此表达式指明的值。																																																																										|
|Null value expression|Optional. When <date expression> returns empty or does not exist, the value specified by this expression will be returned. |
下面是格式说明符的详细说明：  
The following is a detailed description of the format specifier:

|说明符	|描述															|合法值			|
|Specifier |Description |Legal Values ​​|
|----		|----															|----				|
|%d			|月份的日期（2位数，0填充）				|01 - 31		|
|%d |Day of the month (2 digits, filled with 0) |01-31 |
|%G			|ISO 8601 格式的年份							|0000 - 9999|
|%G |Year in ISO 8601 format |0000-9999|
|%H			|小时（2位数，0填充，24小时制）		|00 - 23		|
|%H |Hour (2 digits, filled with 0, 24-hour clock) |00-23 |
|%j			|一年中的一天（3位数，0填充）			|001 - 366	|
|%j |Day of the year (3 digits, filled with 0) |001-366 |
|%L			|毫秒（3位数，0填充）							|000 - 999	|
|%L |Milliseconds (3 digits, 0 padding) |000-999 |
|%m			|月份（2位数，0填充）							|01 - 12		|
|%m |Month (2 digits, filled with 0) |01-12 |
|%M			|分钟（2位数，0填充）							|00 - 59		|
|%M |Minutes (2 digits, filled with 0) |00-59 |
|%S			|秒（2位数，0填充）								|00 - 60		|
|%S |Seconds (2 digits, filled with 0) |00-60 |
|%w			|星期几														|1 - 7			|
|%w |Day of the week |1-7 |
|%u			|ISO 8601 格式的星期几						|1 - 7			|
|%u |Day of the week in ISO 8601 format |1-7 |
|%U			|一年中的一周（2位数，0填充）			|00 - 53		|
|%U |Week of the year (2 digits, filled with 0) |00-53 |
|%V			|ISO 8601 格式的一年中的一周			|1 - 53			|
|%V |Week of the year in ISO 8601 format |1-53 |
|%Y			|年份（4位数，0填充）							|0000 - 9999|
|%Y |Year (4 digits, filled with 0) |0000-9999|
|%z			|与 UTC 的时区偏移量							|+/-[hh][mm]|
|%z |Time zone offset from UTC |+/-[hh][mm]|
|%Z			|以分钟为单位，与 UTC 的时区偏移量|+/-mmm			|
|%Z |Time zone offset from UTC in minutes |+/-mmm |
|%%			|百分号作为字符										|%					|
|%% |Percent sign as a character |% |

#####  示例代码
#####  Sample code
 假设集合 `students` 有如下记录：  
 Suppose the collection `students` has the following records:

 
```js
{ "date": "1999-12-11T16:00:00.000Z", "firstName": "Yuanxin", "lastName": "Dong" }
{ "date": "1998-11-10T16:00:00.000Z", "firstName": "Weijia", "lastName": "Wang" }
{ "date": "1997-10-09T16:00:00.000Z", "firstName": "Chengxi", "lastName": "Li" }
```


**格式化日期**
**Format Date**

 下面是将 `date` 字段的值，格式化成形如 `年份-月份-日期` 的字符串：  
 The following is to format the value of the `date` field into a string like `year-month-date`:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    formatDate: $.dateToString({
      date: '$date',
      format: '%Y-%m-%d'
    })
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "formatDate": "1999-12-11" }
{ "formatDate": "1998-11-10" }
{ "formatDate": "1997-10-09" }
```


**时区时间**
**Time zone time**

 下面是将 `date` 字段值格式化为上海时区时间的例子：  
 The following is an example of formatting the value of the `date` field to Shanghai time zone time:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    formatDate: $.dateToString({
      date: '$date',
      format: '%H:%M:%S',
      timezone: 'Asia/Shanghai'
    })
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "formatDate": "00:00:00" }
{ "formatDate": "00:00:00" }
{ "formatDate": "00:00:00" }
```


**缺失情况的默认值**
**Default value for missing cases**

 当指定的 `<日期表达式>` 返回空或者不存在的时候，可以设置缺失情况下的默认值：  
 When the specified `<date expression>` returns empty or does not exist, you can set the default value in the absence of it:
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    formatDate: $.dateToString({
      date: '$empty',
      onNull: 'null'
    })
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "formatDate": "null" }
{ "formatDate": "null" }
{ "formatDate": "null" }
```

#### dayOfMonth

返回日期字段对应的天数（一个月中的哪一天），是一个介于 1 至 31 之间的数字。  
Returns the number of days (the day in a month) corresponding to the date field, which is a number between 1 and 31.

#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
 
```js
db.command.aggregate.dayOfMonth(<日期字段(Date field)>)

db.command.aggregate.dayOfMonth({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
#####  Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `dayOfMonth()` 对 `date` 字段进行投影，获取对应的日期：  
We use `dayOfMonth()` to project the `date` field to obtain the corresponding date:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    dayOfMonth: $.dayOfMonth('$date')
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{
    "dayOfMonth": 14
}
```

#### dayOfWeek

返回日期字段对应的天数（一周中的第几天），是一个介于 1（周日）到 7（周六）之间的整数。  
Returns the number of days (day of the week) corresponding to the date field, which is an integer between 1 (Sunday) and 7 (Saturday).
      
#####  API 说明
##### API description
**注意：周日是每周的第 1 天**  
**Note: Sunday is the first day of the week**
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
 
```js
db.command.aggregate.dayOfWeek(<日期字段(Date field)>)

db.command.aggregate.dayOfWeek({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
``` 

#####  示例代码
#####  Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `dayOfWeek()` 对 `date` 字段进行投影，获取对应的天数（一周中的第几天）：  
We use `dayOfWeek()` to project the `date` field to obtain the corresponding number of days (day of the week):
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    dayOfWeek: $.dayOfWeek('$date')
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{
    "dayOfWeek": 3
}
```

#### dayOfYear

返回日期字段对应的天数（一年中的第几天），是一个介于 1 到 366 之间的整数。  
Returns the number of days (day of the year) corresponding to the date field, which is an integer between 1 and 366.

#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.dayOfYear(<日期字段(Date field)>)

db.command.aggregate.dayOfYear({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
#####  Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `dayOfYear()` 对 `date` 字段进行投影，获取对应的天数（一年中的第几天）：  
We use `dayOfYear()` to project the `date` field to obtain the corresponding number of days (day of the year):
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    dayOfYear: $.dayOfYear('$date')
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{
    "dayOfYear": 134
}
```

#### hour

返回日期字段对应的小时数，是一个介于 0 到 23 之间的整数。  
Returns the number of hours corresponding to the date field, which is an integer between 0 and 23.
#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.hour(<日期字段(Date field)>)

db.command.aggregate.hour({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
#####  Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `hour()` 对 `date` 字段进行投影，获取对应的小时数：  
We use `hour()` to project the `date` field to get the corresponding hour:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    hour: $.hour('$date')
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{
    "hour": 9
}
```

#### isoDayOfWeek

返回日期字段对应的 ISO 8601 标准的天数（一周中的第几天），是一个介于 1（周一）到 7（周日）之间的整数。  
Returns the ISO 8601 standard days (day of the week) corresponding to the date field, which is an integer between 1 (Monday) and 7 (Sunday).

#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.isoDayOfWeek(<日期字段(Date field)>)

db.command.aggregate.isoDayOfWeek({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `isoDayOfWeek()` 对 `date` 字段进行投影，获取对应的 ISO 8601 标准的天数（一周中的第几天）：  
We use `isoDayOfWeek()` to project the `date` field to obtain the corresponding ISO 8601 standard days (day of the week):
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    isoDayOfWeek: $.isoDayOfWeek('$date')
  })
  .end()
```

输出如下：
The output is as follows:
```js
{
    "isoDayOfWeek": 2
}
```

#### isoWeek

返回日期字段对应的 ISO 8601 标准的周数（一年中的第几周），是一个介于 1 到 53 之间的整数。  
Returns the ISO 8601 week number (the week of the year) corresponding to the date field. It is an integer between 1 and 53.
      
#####  API 说明
##### API description
根据 ISO 8601 标准，周一到周日视为一周，本年度第一个周四所在的那周，视为本年度的第 1 周。  
According to the ISO 8601 standard, Monday to Sunday are regarded as a week, and the week of the first Thursday of the current year is regarded as the first week of the current year.
例如：2016 年 1 月 7 日是那年的第一个周四，那么 2016.01.04（周一）到 2016.01.10（周日） 即为第 1 周。同理，2016 年 1 月 1 日的周数为 53。  
For example: January 7, 2016 is the first Thursday of that year, then 2016.01.04 (Monday) to 2016.01.10 (Sunday) is the first week. In the same way, the week number of January 1, 2016 is 53.
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:

  
```js
db.command.aggregate.isoWeek(<日期字段(Date field)>)

db.command.aggregate.isoWeek({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：  
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `isoWeek()` 对 `date` 字段进行投影，获取对应的 ISO 8601 标准的周数（一年中的第几周）：  
We use `isoWeek()` to project the `date` field to obtain the corresponding ISO 8601 week number (week of the year):
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    isoWeek: $.isoWeek('$date')
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "isoWeek": 20
}
```

#### isoWeekYear

返回日期字段对应的 ISO 8601 标准的天数（一年中的第几天）。  
Returns the number of days in the ISO 8601 standard corresponding to the date field (the day of the year).
#####  API 说明
##### API description
此处的“年”以第一周的周一为开始，以最后一周的周日为结束。  
The "year" here starts on Monday of the first week and ends on Sunday of the last week.
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:  
```js
db.command.aggregate.isoWeekYear(<日期字段(Date field)>)

db.command.aggregate.isoWeekYear({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：  
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `isoWeekYear()` 对 `date` 字段进行投影，获取对应的 ISO 8601 标准的天数（一年中的第几天）：  
We use `isoWeekYear()` to project the `date` field to obtain the corresponding ISO 8601 standard days (day of the year):
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    isoWeekYear: $.isoWeekYear('$date')
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "isoWeekYear": 2019
}
```

#### millisecond

返回日期字段对应的毫秒数，是一个介于 0 到 999 之间的整数。  
Returns the number of milliseconds corresponding to the date field, which is an integer between 0 and 999.

#####  API 说明
#####  API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.millisecond(<日期字段(Date field)>)

db.command.aggregate.millisecond({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `millisecond()` 对 `date` 字段进行投影，获取对应的毫秒数：  
We use `millisecond()` to project the `date` field to obtain the corresponding number of milliseconds:
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    millisecond: $.millisecond('$date'),
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "millisecond": 686
}
```

#### minute

返回日期字段对应的分钟数，是一个介于 0 到 59 之间的整数。  
Returns the number of minutes corresponding to the date field, which is an integer between 0 and 59.

#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.minute(<日期字段(Date field)>)

db.command.aggregate.minute({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `minute()` 对 `date` 字段进行投影，获取对应的分钟数：
We use `minute()` to project the `date` field to get the corresponding minutes:
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    minute: $.minute('$date')
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "minute": 38
}
```

#### month

返回日期字段对应的月份，是一个介于 1 到 12 之间的整数。  
Returns the month corresponding to the date field, which is an integer between 1 and 12.

#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.month(<日期字段(Date field)>)

db.command.aggregate.month({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
#####  Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `month()` 对 `date` 字段进行投影，获取对应的月份：  
We use `month()` to project the `date` field to get the corresponding month:
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    month: $.month('$date')
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "month": 5
}
```

#### second

返回日期字段对应的秒数，是一个介于 0 到 59 之间的整数，在特殊情况下（闰秒）可能等于 60。  
Returns the number of seconds corresponding to the date field. It is an integer between 0 and 59. In special cases (leap seconds), it may be equal to 60.
#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.second(<日期字段(Date field)>)

db.command.aggregate.second({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `second()` 对 `date` 字段进行投影，获取对应的秒数：  
We use `second()` to project the `date` field to get the corresponding number of seconds:
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    second: $.second('$date')
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "second": 51
}
```

#### week

返回日期字段对应的周数（一年中的第几周），是一个介于 0 到 53 之间的整数。  
Returns the week number (the week of the year) corresponding to the date field, which is an integer between 0 and 53.

#####  API 说明
##### API description
每周以周日为开头，**每年的第一个周日**即为 `week 1` 的开始，这天之前是 `week 0`。  
Every week starts with Sunday. **The first Sunday of each year** is the start of `week 1`, before this day is `week 0`.
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.week(<日期字段(Date field)>)

db.command.aggregate.week({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：  
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `week()` 对 `date` 字段进行投影，获取对应的周数（一年中的第几周）：  
We use `week()` to project the `date` field to get the corresponding week number (the week of the year):
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    week: $.week('$date')
  })
  .end()
```

输出如下：  
The output is as follows:
```js
{
    "week": 19
}
```

#### year

返回日期字段对应的年份。  
Returns the year corresponding to the date field.
#####  API 说明
##### API description
该接口有以下两种用法，语法如下：  
The interface has the following two uses, the syntax is as follows:
```js
db.command.aggregate.year(<日期字段(Date field)>)

db.command.aggregate.year({date:<日期字段(Date field)>,timezone:<时区(Time zone)>})
```

#####  示例代码
##### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `year()` 对 `date` 字段进行投影，获取对应的年份：
We use `year()` to project the `date` field to get the corresponding year:
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    year: $.year('$date')
  })
  .end()
```

输出如下：	
The output is as follows:
```js
{
    "year": 2019
}
```

#### subtract

见[subtract](#subtract)
See [subtract](#subtract)
### 常量操作符
### Constant operator
#### literal
#### literal
直接返回一个值的字面量，不经过任何解析和处理。  
The literal value of a value is returned directly, without any parsing and processing.
     
#####  API 说明
#####  API description
 `literal` 使用形式如下：  
 The form of `literal` is as follows:
 
```js
literal(<值(value)>)
```
如果 `<值>` 是一个表达式，那么 `literal` **不会**解析或者计算这个表达式，而是直接返回这个表达式。  
If `<value>` is an expression, then `literal` ** will not** parse or evaluate this expression, but will return this expression directly.

#####  示例代码
#####  Sample code
 比如我们有一个 `items` 集合，其中数据如下：  
 For example, we have an `items` collection with the following data:
 
```js
{ "_id": "0", "price": "$1" }
{ "_id": "1", "price": "$5.60" }
{ "_id": "2", "price": "$8.90" }
```


**以字面量的形式使用 $**
**Used as a literal $**

 下面的代码使用 `literal`，生成了一个新的字段 `isOneDollar`，表示 `price` 字段是否严格等于 `"$1"`。  
 The following code uses `literal` to generate a new field `isOneDollar`, indicating whether the `price` field is strictly equal to `"$1"`.
 注意：我们这里无法使用 `eq(['$price', '$1'])`，因为 `"$1"` 是一个表达式，代表 `"1"` 字段对应的值，而不是字符串字面量 `"$1"`。  
 Note: We cannot use `eq(['$price','$1'])` here, because `"$1"` is an expression, representing the value corresponding to the `"1"` field, not a string literal `"$1"`.
 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    isOneDollar: $.eq(['$price', $.literal('$1')])
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": "0", "isOneDollar": true }
{ "_id": "1", "isOneDollar": false }
{ "_id": "2", "isOneDollar": false }
```


**投影一个字段，对应的值为 1**
**Project a field, the corresponding value is 1**

 下面的代码使用 `literal`，投影了一个新的字段 `amount`，其值为 `1`。  
 The following code uses `literal` to project a new field `amount` with a value of `1`.
 
```js
const $ = db.command.aggregate
db.collection('items').aggregate()
  .project({
    price: 1,
    amount: $.literal(1)
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": "0", "price": "$1", "amount": 1 }
{ "_id": "1", "price": "$5.60", "amount": 1 }
{ "_id": "2", "price": "$8.90", "amount": 1 }
```

### 对象操作符
### Object Operator
#### mergeObjects
#### mergeObjects
将多个文档合并为单个文档。  
Combine multiple documents into a single document.
#####  API 说明
#####  API description
 使用形式如下：
 The usage form is as follows:
在 `group()` 中使用时：  
When used in `group()`:
 
```js
mergeObjects(<document>)
```
在其它表达式中使用时：  
When used in other expressions:
 
```js
mergeObjects([<document1>, <document2>, ...])
```

#####  示例代码
##### Sample code
**搭配 `group()` 使用**
**Use with `group()`**
 假设集合 `sales` 存在以下文档：  
 Suppose the following documents exist in the collection `sales`:
 
```js
{ "_id": 1, "year": 2018, "name": "A", "volume": { "2018Q1": 500, "2018Q2": 500 } }
{ "_id": 2, "year": 2017, "name": "A", "volume": { "2017Q1": 400, "2017Q2": 300, "2017Q3": 0, "2017Q4": 0 } }
{ "_id": 3, "year": 2018, "name": "B", "volume": { "2018Q1": 100 } }
{ "_id": 4, "year": 2017, "name": "B", "volume": { "2017Q3": 100, "2017Q4": 250 } }
```
下面的代码使用 `mergeObjects()`，将用相同 `name` 的文档合并：  
The following code uses `mergeObjects()` to merge documents with the same `name`:
 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .group({
    _id: '$name',
    mergedVolume: $.mergeObjects('$volume')
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": "A", "mergedVolume": { "2017Q1": 400, "2017Q2": 300, "2017Q3": 0, "2017Q4": 0, "2018Q1": 500, "2018Q2": 500 } }
{ "_id": "B", "mergedVolume": { "2017Q3": 100, "2017Q4": 250, "2018Q1": 100 } }
```


**一般用法**
**General usage**

假设集合 `test` 存在以下文档：  
Suppose the following documents exist in the collection `test`:
 
```js
{ "_id": 1, "foo": { "a": 1 }, "bar": { "b": 2 } }
{ "_id": 2, "foo": { "c": 1 }, "bar": { "d": 2 } }
{ "_id": 3, "foo": { "e": 1 }, "bar": { "f": 2 } }
```
下面的代码使用 `mergeObjects()`，将文档中的 `foo` 和 `bar` 字段合并为 `foobar`：  
The following code uses `mergeObjects()` to merge the `foo` and `bar` fields in the document into `foobar`:
 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .project({
    foobar: $.mergeObjects(['$foo', '$bar'])
  })
  .end()
```
输出结果如下：  
The output is as follows:
 
```js
{ "_id": 1, "foobar": { "a": 1, "b": 2 } }
{ "_id": 2, "foobar": { "c": 1, "d": 2 } }
{ "_id": 3, "foobar": { "e": 1, "f": 2 } }
```

#### objectToArray

见[objectToArray](#objectToArray)
See [objectToArray](#objectToArray)
### 集合操作符
### Set operator
#### allElementsTrue
#### allElementsTrue
输入一个数组，或者数组字段的表达式。如果数组中所有元素均为真值，那么返回 `true`，否则返回 `false`。空数组永远返回 `true`。  
Enter an array, or an expression for an array field. If all elements in the array are true values, return `true`, otherwise return `false`. An empty array always returns `true`.
#####  API 说明
#####  API description
语法如下：
The syntax is as follows:
 
```js
allElementsTrue([<expression>])
```

#####  示例代码
##### Sample code

假设集合 `test` 有如下记录：  
Suppose the collection `test` has the following records:
```js
{ "_id": 1, "array": [ true ] }
{ "_id": 2, "array": [ ] }
{ "_id": 3, "array": [ false ] }
{ "_id": 4, "array": [ true, false ] }
{ "_id": 5, "array": [ 0 ] }
{ "_id": 6, "array": [ "stark" ] }
```
下面的代码使用 `allElementsTrue()`，判断 `array` 字段中是否均为真值：  
The following code uses `allElementsTrue()` to determine whether all the fields of `array` are true values:
 
```js
const $ = db.command.aggregate
let res = await db.collection('price')
  .aggregate()
  .project({
    isAllTrue: $.allElementsTrue(['$array'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "isAllTrue": true }
{ "_id": 2, "isAllTrue": true }
{ "_id": 3, "isAllTrue": false }
{ "_id": 4, "isAllTrue": false }
{ "_id": 5, "isAllTrue": false }
{ "_id": 6, "isAllTrue": true }
```

#### anyElementTrue

输入一个数组，或者数组字段的表达式。如果数组中任意一个元素为真值，那么返回 `true`，否则返回 `false`。空数组永远返回 `false`。  
Enter an array, or an expression for an array field. If any element in the array is true, return `true`, otherwise return `false`. An empty array always returns `false`.
      
#####  API 说明
#####  API description
 语法如下：  
 The syntax is as follows:
 
```js
anyElementTrue([<expression>])
```

#####  示例代码
#####  Sample code
 假设集合 `test` 有如下记录：  
 Suppose the collection `test` has the following records:
 
```js
{ "_id": 1, "array": [ true ] }
{ "_id": 2, "array": [ ] }
{ "_id": 3, "array": [ false ] }
{ "_id": 4, "array": [ true, false ] }
{ "_id": 5, "array": [ 0 ] }
{ "_id": 6, "array": [ "stark" ] }
```
下面的代码使用 `anyElementTrue()`，判断 `array` 字段中是否含有真值：  
The following code uses `anyElementTrue()` to determine whether the `array` field contains a true value:
 
```js
const $ = db.command.aggregate
let res = await db.collection('price')
  .aggregate()
  .project({
    isAnyTrue: $.anyElementTrue(['$array'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "_id": 1, "isAnyTrue": true }
{ "_id": 2, "isAnyTrue": false }
{ "_id": 3, "isAnyTrue": false }
{ "_id": 4, "isAnyTrue": true }
{ "_id": 5, "isAnyTrue": false }
{ "_id": 6, "isAnyTrue": true }
```

#### setDifference

输入两个集合，输出只存在于第一个集合中的元素。  
Input two sets, and output only the elements that exist in the first set.
      
#####  API 说明
#####  API description
 使用形式如下：  
 The usage form is as follows:
 
```js
setDifference([<expression1>, <expression2>])
```

#####  示例代码
#####  Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:
 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setDifference`，找到只存在于 `B` 中的数字：  
The following code uses `setDifference` to find numbers that only exist in `B`:
 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    isBOnly: $.setDifference(['$B', '$A'])
  })
  .end()
```

```js
{ "_id": 1, "isBOnly": [] }
{ "_id": 2, "isBOnly": [] }
{ "_id": 3, "isBOnly": [3] }
{ "_id": 4, "isBOnly": [3] }
{ "_id": 5, "isBOnly": [] }
{ "_id": 6, "isBOnly": [{}, []] }
{ "_id": 7, "isBOnly": [] }
{ "_id": 8, "isBOnly": [1] }
```

#### setEquals

输入两个集合，判断两个集合中包含的元素是否相同（不考虑顺序、去重）。  
Enter two sets to determine whether the elements contained in the two sets are the same (regardless of order, deduplication).
      
#####  API 说明
#####  API description
 使用形式如下：  
 The usage form is as follows:
 
```js
setEquals([<expression1>, <expression2>])
```

#####  示例代码
#####  Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:
 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setEquals`，判断两个集合中包含的元素是否相同：  
The following code uses `setEquals` to determine whether the elements contained in the two sets are the same:
 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    sameElements: $.setEquals(['$A', '$B'])
  })
  .end()
```

```js
{ "_id": 1, "sameElements": true }
{ "_id": 2, "sameElements": true }
{ "_id": 3, "sameElements": false }
{ "_id": 4, "sameElements": false }
{ "_id": 5, "sameElements": false }
{ "_id": 6, "sameElements": false }
{ "_id": 7, "sameElements": true }
{ "_id": 8, "sameElements": false }
```

#### setIntersection

输入两个集合，输出两个集合的交集。  
Input two sets, and output the intersection of the two sets.

#####  API 说明
#####  API description
 使用形式如下：  
 The usage form is as follows:
 
```js
setIntersection([<expression1>, <expression2>])
```

#####  示例代码
#####  Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setIntersection`，输出两个集合的交集：  
The following code uses `setIntersection` to output the intersection of two sets:
 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    commonToBoth: $.setIntersection(['$A', '$B'])
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": 1, "commonToBoth": [ 1, 2 ] }
{ "_id": 2, "commonToBoth": [ 1, 2 ] }
{ "_id": 3, "commonToBoth": [ 1, 2 ] }
{ "_id": 4, "commonToBoth": [ 1 ] }
{ "_id": 5, "commonToBoth": [ ] }
{ "_id": 6, "commonToBoth": [ ] }
{ "_id": 7, "commonToBoth": [ ] }
{ "_id": 8, "commonToBoth": [ ] }
```

#### setIsSubset

输入两个集合，判断第一个集合是否是第二个集合的子集。  
Enter two sets and determine whether the first set is a subset of the second set.

#####  API 说明
#####  API description
 使用形式如下：  
 The usage form is as follows:
 
```js
setIsSubset([<expression1>, <expression2>])
```

#####  示例代码
#####  Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:
 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setIsSubset`，判断第一个集合是否是第二个集合的子集：  
The following code uses `setIsSubset` to determine whether the first set is a subset of the second set:
 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    AisSubsetOfB: $.setIsSubset(['$A', '$B'])
  })
  .end()
```

```js
{ "_id": 1, "AisSubsetOfB": true }
{ "_id": 2, "AisSubsetOfB": true }
{ "_id": 3, "AisSubsetOfB": true }
{ "_id": 4, "AisSubsetOfB": false }
{ "_id": 5, "AisSubsetOfB": false }
{ "_id": 6, "AisSubsetOfB": false }
{ "_id": 7, "AisSubsetOfB": true }
{ "_id": 8, "AisSubsetOfB": true }
```

#### setUnion

输入两个集合，输出两个集合的并集。  
Input two sets, and output the union of the two sets.
#####  API 说明
#####  API description
 使用形式如下：  
 The usage form is as follows:
 
```js
setUnion([<expression1>, <expression2>])
```

#####  示例代码
#####  Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:
 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setUnion`，输出两个集合的并集：  
The following code uses `setUnion` to output the union of two sets:
 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    AB: $.setUnion(['$A', '$B'])
  })
  .end()
```
输出如下：  
The output is as follows:
 
```js
{ "_id": 1, "AB": [ 1, 2 ] }
{ "_id": 2, "AB": [ 1, 2 ] }
{ "_id": 3, "AB": [ 1, 2, 3 ] }
{ "_id": 4, "AB": [ 1, 2, 3 ] }
{ "_id": 5, "AB": [ 1, 2 ] }
{ "_id": 6, "AB": [ 1, 2, {}, [] ] }
{ "_id": 7, "AB": [ ] }
{ "_id": 8, "AB": [ 1 ] }
```

### 字符串操作符
### String operators
#### concat

连接字符串，返回拼接后的字符串。  
Connect the string and return the spliced string.
      
#####  API 说明
#####  API description
 `concat` 的语法如下：  
 The syntax of `concat` is as follows:
 
```js
db.command.aggregate.concat([<表达式1(expression 1)>, <表达式2(expression 2)>, ...])
```
表达式可以是形如 `$ + 指定字段`，也可以是普通字符串。只要能够被解析成字符串即可。  
The expression can be in the form of `$ + specified field`, or it can be a normal string. As long as it can be parsed into a string.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `concat` 可以拼接 `lastName` 和 `firstName` 字段，得到每位学生的名字全称：  
With the help of `concat`, the `lastName` and `firstName` fields can be spliced to get the full name of each student:
 
```js
const $ = db.command.aggregate
db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    fullName: $.concat(['$firstName', ' ', '$lastName'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "fullName": "Yuanxin Dong" }
{ "fullName": "Weijia Wang" }
{ "fullName": "Chengxi Li" }
```

#### dateFromString

见[dateFromString](#dateFromString)
See [dateFromString](#dateFromString)

#### dateToString

见[dateToString](#dateToString)
See [dateToString](#dateToString)

#### indexOfBytes

在目标字符串中查找子字符串，并返回第一次出现的 `UTF-8` 的字节索引（从0开始）。如果不存在子字符串，返回 -1。  
Find the substring in the target string and return the byte index of the first occurrence of `UTF-8` (starting from 0). If there is no substring, return -1.
      
#####  API 说明
 `indexOfBytes` 的语法如下：  
 The syntax of `indexOfBytes` is as follows:

```js
db.command.aggregate.indexOfBytes([<目标字符串表达式(target string expression)>, <子字符串表达式(substring expression)>, <开始位置表达式(start position expression)>, <结束位置表达式(end position expression)>])
```
下面是 4 种表达式的详细描述：  
The following is a detailed description of the four expressions:
|表达式						|描述															|
|Expression |Description |
|----							|----															|
|目标字符串表达式	|任何可以被解析为字符串的表达式		|
|Target string expression |Any expression that can be parsed as a string |
|子字符串表达式		|任何可以被解析为字符串的表达式		|
|Substring expression |Any expression that can be parsed as a string |
|开始位置表达式		|任何可以被解析为非负整数的表达式	|
|Start position expression |Any expression that can be parsed as a non-negative integer |
|结束位置表达式		|任何可以被解析为非负整数的表达式	|
|End position expression |Any expression that can be parsed as a non-negative integer |
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `indexOfBytes` 查找字符 `"a"` 在字段 `firstName` 中的位置：  
Use `indexOfBytes` to find the position of the character `"a"` in the field `firstName`:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    aStrIndex: $.indexOfBytes(['$firstName', 'a'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "aStrIndex": 2 }
{ "aStrIndex": 5 }
{ "aStrIndex": -1 }
```

#### indexOfCP

在目标字符串中查找子字符串，并返回第一次出现的 `UTF-8` 的 `code point` 索引（从0开始）。如果不存在子字符串，返回 -1。  
Find the substring in the target string and return the `code point` index of the first occurrence of `UTF-8` (starting from 0). If there is no substring, return -1.

      

      
#####  API 说明
#####  API description
 `code point` 是“码位”，又名“编码位置”。这里特指 `Unicode` 包中的码位，范围是从0（16进制）到10FFFF（16进制）。  
 `code point` is "code point", also known as "code position". This specifically refers to the code points in the `Unicode` package, and the range is from 0 (hexadecimal) to 10FFFF (hexadecimal).
 `indexOfCP` 的语法如下：  
 The syntax of `indexOfCP` is as follows:
 
 
```js
db.command.aggregate.indexOfCP([<目标字符串表达式(target string expression)>, <子字符串表达式(substring expression)>, <开始位置表达式(start position expression)>, <结束位置表达式(end position expression)>])
```
下面是 4 种表达式的详细描述：  
The following is a detailed description of the four expressions:
|表达式						|描述															|
|Expression |Description |
|----							|----															|
|目标字符串表达式	|任何可以被解析为字符串的表达式		|
|Target string expression |Any expression that can be parsed as a string |
|子字符串表达式		|任何可以被解析为字符串的表达式		|
|Substring expression |Any expression that can be parsed as a string |
|开始位置表达式		|任何可以被解析为非负整数的表达式	|
|Start position expression |Any expression that can be parsed as a non-negative integer |
|结束位置表达式		|任何可以被解析为非负整数的表达式	|
|End position expression |Any expression that can be parsed as a non-negative integer |
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `indexOfCP` 查找字符 `"a"` 在字段 `firstName` 中的位置：  
Use `indexOfCP` to find the position of the character `"a"` in the field `firstName`:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    aStrIndex: $.indexOfCP(['$firstName', 'a'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "aStrIndex": 2 }
{ "aStrIndex": 5 }
{ "aStrIndex": -1 }
```

#### split

按照分隔符分隔数组，并且删除分隔符，返回子字符串组成的数组。如果字符串无法找到分隔符进行分隔，返回原字符串作为数组的唯一元素。  
Separate the array according to the delimiter, delete the delimiter, and return an array composed of substrings. If the string cannot be separated by a delimiter, the original string is returned as the only element of the array.
      
#####  API 说明
#####  API description
 `split` 的语法如下：  
 The syntax of `split` is as follows:
 
```js
db.command.aggregate.split([<字符串表达式(String expression)>, <分隔符表达式(Delimiter expression)>])
```
字符串表达式和分隔符表达式可以是任意形式的表达式，只要它可以被解析为字符串即可。  
The string expression and the separator expression can be any form of expression, as long as it can be parsed as a string.

#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "birthday": "1999/12/12" }
{ "birthday": "1998/11/11" }
{ "birthday": "1997/10/10" }
```
通过 `split` 将每条记录中的 `birthday` 字段对应值分隔成数组，每个数组分别由代表年、月、日的3个元素组成：  
Separate the corresponding value of the `birthday` field in each record into an array by `split`, each array is composed of 3 elements representing the year, month, and day:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    birthday: $.split(['$birthday', '/'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "birthday": [ "1999", "12", "12" ] }
{ "birthday": [ "1998", "11", "11" ] }
{ "birthday": [ "1997", "10", "10" ] }
```

#### strLenBytes

计算并返回指定字符串中 `utf-8` 编码的字节数量。  
Calculate and return the number of bytes encoded by `utf-8` in the specified string.
      
#####  API 说明
#####  API description
 `strLenBytes` 的语法如下：  
 The syntax of `strLenBytes` is as follows:
 
```js
db.command.aggregate.strLenBytes(<表达式(expression)>)
```
只要表达式可以被解析成字符串，那么它就是有效表达式。  
As long as the expression can be parsed into a string, then it is a valid expression.

#####  示例代码
##### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "name": "dongyuanxin", "nickname": "心谭" }
```
借助 `strLenBytes` 计算 `name` 字段和 `nickname` 字段对应值的字节长度：  
Use `strLenBytes` to calculate the byte length of the corresponding values of the `name` field and the `nickname` field:
 
```js
const $ = db.command.aggregate
db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    nameLength: $.strLenBytes('$name'),
    nicknameLength: $.strLenBytes('$nickname')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "nameLength": 11, "nicknameLength": 6 }
```

#### strLenCP

计算并返回指定字符串的UTF-8 [code points<span></span>](http://www.unicode.org/glossary/#code_point) 数量。  
Calculate and return the number of UTF-8 [code points<span></span>](http://www.unicode.org/glossary/#code_point) of the specified string.

#####  API 说明
#####  API description
 `strLenCP` 的语法如下：  
 The syntax of `strLenCP` is as follows:
 
```js
db.command.aggregate.strLenCP(<表达式(expression)>)
```
只要表达式可以被解析成字符串，那么它就是有效表达式。  
As long as the expression can be parsed into a string, then it is a valid expression.

#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "name": "dongyuanxin", "nickname": "心谭" }
```
借助 `strLenCP` 计算 `name` 字段和 `nickname` 字段对应值的UTF-8 [code points<span></span>](http://www.unicode.org/glossary/#code_point)的数量：  
Calculate the number of UTF-8 [code points<span></span>](http://www.unicode.org/glossary/#code_point) with the help of `strLenCP`:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    nameLength: $.strLenCP('$name'),
    nicknameLength: $.strLenCP('$nickname')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "nameLength": 11, "nicknameLength": 2 }
```

#### strcasecmp

对两个字符串在不区分大小写的情况下进行大小比较，并返回比较的结果。  
Compare the size of two strings without being case-sensitive, and return the result of the comparison.
      
#####  API 说明
#####  API description
 `strcasecmp` 的语法如下：  
 The syntax of `strcasecmp` is as follows:
 
```js
db.command.aggregate.strcasecmp([<表达式1(expression 1)>, <表达式2(expression 2)>])
```
只要 `表达式1`和 `表达式2` 可以被解析成字符串，那么它们就是有效的。  
As long as `expression 1` and `expression 2` can be parsed into strings, they are valid.
 返回的比较结果有1，0和-1三种：  
 The comparison results returned are 1, 0 and -1:
 
- 1：`表达式1` 解析的字符串 > `表达式2` 解析的字符串 - 0：`表达式1` 解析的字符串 = `表达式2` 解析的字符串 - -1：`表达式1` 解析的字符串 < `表达式2` 解析的字符串
- 1: `Expression 1` parsed string> `Expression 2` parsed string-0: `Expression 1` parsed string = `Expression 2` parsed string--1: `Expression Equation 1` parsed string <`expression 2` parsed string
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `strcasecmp` 比较 `firstName` 字段值和 `lastName` 字段值的大小：  
Use `strcasecmp` to compare the size of the `firstName` field value and the `lastName` field value:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    result: $.strcasecmp(['$firstName', '$lastName']),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:
 
```js
{ "result": 1 }
{ "result": 1 }
{ "result": -1 }
```

#### substr

返回字符串从指定位置开始的指定长度的子字符串。它是 `db.command.aggregate.substrBytes` 的别名，更推荐使用后者。  
Returns a substring of the specified length starting from the specified position of the string. It is an alias of `db.command.aggregate.substrBytes`, the latter is more recommended.

#####  API 说明
#####  API description
 `substr` 的语法如下：  
 The syntax of `substr` is as follows:
 
```js
db.command.aggregate.substr([<表达式1(expression 1)>, <表达式2(expression 2)>, <表达式3(expression 3)>])
```
`表达式1` 是任何可以解析为字符串的有效表达式，`表达式2` 和 `表达式3` 是任何可以解析为数字的有效表达式。  
`Expression 1` is any valid expression that can be parsed as a string, and `Expression 2` and `Expression 3` are any valid expression that can be parsed as a number.
 如果 `表达式2` 是负数，返回的结果为 `""`。  
 If `expression2` is negative, the returned result is `""`.
 如果 `表达式3` 是负数，返回的结果为从 `表达式2` 指定的开始位置以及之后其余部分的子字符串。  
 If `expression3` is negative, the returned result is the substring from the beginning position specified by `expression2` and the rest afterwards.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:

 
```js
{ "birthday": "1999/12/12", "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "birthday": "1998/11/11", "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "birthday": "1997/10/10", "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `substr` 可以提取 `birthday` 中的年、月、日信息，代码如下：  
With the help of `substr`, the year, month, and day information in `birthday` can be extracted. The code is as follows:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    year: $.substr(['$birthday', 0, 4]),
    month: $.substr(['$birthday', 5, 2]),
    day: $.substr(['$birthday', 8, -1])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "day": "12", "month": "12", "year": "1999" }
{ "day": "11", "month": "11", "year": "1998" }
{ "day": "10", "month": "10", "year": "1997" }
```

#### substrBytes

返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 `UTF-8` 字节索引的字符开始，长度为指定的字节数。  
Returns a substring of the specified length starting from the specified position of the string. The substring starts with the character indexed by the specified `UTF-8` byte in the string, and the length is the specified number of bytes.

#####  API 说明
#####  API description
 `substrBytes` 的语法如下：  
 The syntax of `substrBytes` is as follows:
 
```js
db.command.aggregate.substrBytes([<表达式1(expression 1)>, <表达式2(expression 2)>, <表达式3(expression 3)>])
```
`表达式1` 是任何可以解析为字符串的有效表达式，`表达式2` 和 `表达式3` 是任何可以解析为数字的有效表达式。  
`Expression 1` is any valid expression that can be parsed as a string, and `Expression 2` and `Expression 3` are any valid expression that can be parsed as a number.
 如果 `表达式2` 是负数，返回的结果为 `""`。  
 If `expression2` is negative, the returned result is `""`.
 如果 `表达式3` 是负数，返回的结果为从 `表达式2` 指定的开始位置以及之后其余部分的子字符串。  
 If `expression3` is negative, the returned result is the substring from the beginning position specified by `expression2` and the rest afterwards.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
```js
{ "birthday": "1999/12/12", "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "birthday": "1998/11/11", "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "birthday": "1997/10/10", "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `substrBytes` 可以提取 `birthday` 中的年、月、日信息，代码如下：  
With the help of `substrBytes`, the year, month, and day information in `birthday` can be extracted. The code is as follows:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    year: $.substrBytes(['$birthday', 0, 4]),
    month: $.substrBytes(['$birthday', 5, 2]),
    day: $.substrBytes(['$birthday', 8, -1])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "day": "12", "month": "12", "year": "1999" }
{ "day": "11", "month": "11", "year": "1998" }
{ "day": "10", "month": "10", "year": "1997" }
```

#### substrCP

返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 `UTF-8` 字节索引的字符开始，长度为指定的字节数。  
Returns a substring of the specified length starting from the specified position of the string. The substring starts with the character indexed by the specified `UTF-8` byte in the string, and the length is the specified number of bytes.

#####  API 说明
#####  API description
 `substrCP` 的语法如下：  
 The syntax of `substrCP` is as follows:
 
```js
db.command.aggregate.substrCP([<表达式1(expression 1)>, <表达式2(expression 2)>, <表达式3(expression 3)>])
```
`表达式1` 是任何可以解析为字符串的有效表达式，`表达式2` 和 `表达式3` 是任何可以解析为数字的有效表达式。  
`Expression 1` is any valid expression that can be parsed as a string, and `Expression 2` and `Expression 3` are any valid expression that can be parsed as a number.
 如果 `表达式2` 是负数，返回的结果为 `""`。  
 If `expression2` is negative, the returned result is `""`.
 如果 `表达式3` 是负数，返回的结果为从 `表达式2` 指定的开始位置以及之后其余部分的子字符串。  
 If `expression3` is negative, the returned result is the substring from the beginning position specified by `expression2` and the rest afterwards.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:

 
```js
{ "name": "dongyuanxin", "nickname": "心谭" }
```
借助 `substrCP` 可以提取 `nickname` 字段值的第一个汉字：  
With the help of `substrCP`, the first Chinese character of the field value of `nickname` can be extracted:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    firstCh: $.substrCP(['$nickname', 0, 1])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "firstCh": "心" }
```

#### toLower

将字符串转化为小写并返回。  
Convert the string to lowercase and return.

#####  API 说明
#####  API description
 `toLower` 的语法如下：  
 The syntax of `toLower` is as follows:
 
```js
db.command.aggregate.toLower(表达式(expression))
```
只要表达式可以被解析成字符串，那么它就是有效表达式。例如：`$ + 指定字段`。  
As long as the expression can be parsed into a string, then it is a valid expression. For example: `$ + specified field`.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `toLower` 将 `firstName` 的字段值转化为小写：  
Use `toLower` to convert the field value of `firstName` to lowercase:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    result: $.toLower('$firstName'),
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "result": "yuanxin" }
{ "result": "weijia" }
{ "result": "chengxi" }
```

#### toUpper

将字符串转化为大写并返回。  
Convert the string to uppercase and return.

     
     
#####  API 说明
#####  API description
 `toUpper` 的语法如下：  
 The syntax of `toUpper` is as follows:
 
```js
db.command.aggregate.toUpper(表达式(expression))
```
只要表达式可以被解析成字符串，那么它就是有效表达式。例如：`$ + 指定字段`。  
As long as the expression can be parsed into a string, then it is a valid expression. For example: `$ + specified field`.

#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `toUpper` 将 `lastName` 的字段值转化为大写：  
Use `toUpper` to convert the field value of `lastName` to uppercase:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    result: $.toUpper('$lastName'),
  })
  .end()
```
返回的结果如下：
The results returned are as follows:

```js
{ "result": "DONG" }
{ "result": "WANG" }
{ "result": "LI" }
```

### 分组运算方法@accumulator
### Group operation method @accumulator
#### addToSet

聚合运算符。向数组中添加值，如果数组中已存在该值，不执行任何操作。它只能在 `group stage` 中使用。  
Aggregation operator. Add a value to the array. If the value already exists in the array, no operation is performed. It can only be used in `group stage`.
#####  API 说明
##### API description
`addToSet` 语法如下：  
The syntax of `addToSet` is as follows:
 
```js
db.command.aggregate.addToSet(<表达式(expression)>)
```

表达式是形如 `$ + 指定字段` 的字符串。如果指定字段的值是数组，那么整个数组会被当作一个元素。  
The expression is a string of the form `$ + specified field`. If the value of the specified field is an array, then the entire array will be treated as one element.
#####  示例代码
##### Sample code
假设集合 `passages` 的记录如下：  
Suppose the records of the collection `passages` are as follows:
 
```js
{ "category": "web", "tags": [ "JavaScript", "CSS" ], "title": "title1" }
{ "category": "System", "tags": [ "C++", "C" ], "title": "title2" }
```


**非数组字段**
**Non-array field**

 每条记录的 `category` 对应值的类型是非数组，利用 `addToSet` 统计所有分类：  
 The type of the corresponding value of the `category` of each record is non-array. Use `addToSet` to count all categories:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('passages')
  .aggregate()
  .group({
    _id: null,
    categories: $.addToSet('$category')
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "_id": null, "categories": [ "System", "web" ] }
```


**数组字段**
**Array Field**

 每条记录的 `tags` 对应值的类型是数组，数组不会被自动展开：  
 The type of the corresponding value of the `tags` of each record is an array, and the array will not be expanded automatically:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('passages')
  .aggregate()
  .group({
    _id: null,
    tagsList: $.addToSet('$tags')
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:
 
```js
{ "_id": null, "tagsList": [ [ "C++", "C" ], [ "JavaScript", "CSS" ] ] }
```

#### avg

返回一组集合中，指定字段对应数据的平均值。  
Returns the average value of the data corresponding to the specified field in a set of sets.
      
#####  API 说明
#####  API description
 `avg` 的语法如下：  
 The syntax of `avg` is as follows:
 
```js
db.command.aggregate.avg(<number>)
```
`avg` 传入的值除了数字常量外，也可以是任何最终解析成一个数字的表达式。它会忽略非数字值。  
In addition to numeric constants, the value passed in by `avg` can also be any expression that ultimately resolves to a number. It ignores non-numeric values.

 
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `avg` 可以计算所有记录的 `score` 的平均值：  
With the help of `avg`, the average value of the `score` of all records can be calculated:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: null,
    average: $.avg('$score')
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "_id": null, "average": 90 }
```

#### first

返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ `sort` ）后，此操作才有意义。  
Returns the value corresponding to the first record of the specified field in a set. This operation only makes sense if the set of sets is sorted according to a certain definition (`sort`).
      
#####  API 说明
#####  API description
 `first` 的语法如下：  
 The syntax of `first` is as follows:
 
```js
db.command.aggregate.first(<表达式(expression)>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
The expression is a string of the form `$ + specified field`.
 
 `first` 只能在 `group` 阶段被使用，并且需要配合 `sort` 才有意义。  
 `first` can only be used in the `group` stage, and it is meaningful if it needs to cooperate with `sort`.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
如果需要得到所有记录中 `score` 的最小值，可以先将所有记录按照 `score` 排序，然后取出第一条记录的 `first`。  	
If you need to get the minimum value of `score` in all records, you can sort all records according to `score` first, and then take out the `first` of the first record.
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .sort({
    score: 1
  })
  .group({
    _id: null,
    min: $.first('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```js
{ "_id": null, "min": 80 }
```

#### last

返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ `sort` ）后，此操作才有意义。  
Returns the value corresponding to the last record of the specified field in a set. This operation only makes sense if the set of sets is sorted according to a certain definition (`sort`).
      
#####  API 说明
#####  API description
 `last` 的语法如下：  
 The syntax of `last` is as follows:
 
```js
db.command.aggregate.last(<表达式(expression)>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
The expression is a string of the form `$ + specified field`.

 `last` 只能在 `group` 阶段被使用，并且需要配合 `sort` 才有意义。  
 `last` can only be used in the `group` phase, and it is meaningful if it needs to cooperate with `sort`.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
如果需要得到所有记录中 `score` 的最大值，可以先将所有记录按照 `score` 排序，然后取出最后一条记录的 `last`。  
If you need to get the maximum value of `score` in all records, you can sort all records according to `score` first, and then get the last record of `last`.
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .sort({
    score: 1
  })
  .group({
    _id: null,
    max: $.last('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```js
{ "_id": null, "max": 100 }
```

#### max

返回一组数值的最大值。  
Returns the maximum value of a set of values.

#####  API 说明
#####  API description
 `max` 的语法如下：  
 The syntax of `max` is as follows:
 
```js
db.command.aggregate.max(<表达式(expression)>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
The expression is a string of the form `$ + specified field`.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `max` 可以统计不同组（ `group` ）中成绩的最高值，代码如下：  
With the help of `max`, the highest scores in different groups (`group`) can be counted. The code is as follows:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: '$group',
    maxScore: $.max('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```js
{ "_id": "b", "maxScore": 100 }
{ "_id": "a", "maxScore": 96 }
...
```

#### mergeObjects

见[mergeObjects](#mergeObjects)
See [mergeObjects](#mergeObjects)
      
#### min

返回一组数值的最小值。  
Returns the minimum value of a set of values.
#####  API 说明
#####  API description
 `min` 的语法如下：  
 The syntax of `min` is as follows:
 
```js
db.command.aggregate.min(<表达式(expression)>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
The expression is a string of the form `$ + specified field`.

#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `min` 可以统计不同组（ `group` ）中成绩的最低值，代码如下：  
With the help of `min`, the lowest scores in different groups (`group`) can be counted. The code is as follows:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: '$group',
    minScore: $.min('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```js
{ "_id": "b", "minScore": 80 }
{ "_id": "a", "minScore": 84 }
```

#### push

在 `group` 阶段，返回一组中表达式指定列与对应的值，一起组成的数组。  
In the `group` stage, an array composed of the specified column of the expression and the corresponding value in a group is returned.
     
#####  API 说明
#####  API description
 `push` 语法如下：  
 The syntax of `push` is as follows:
 
```js
db.command.aggregate.push({
  <field name 1>: <specified field 1>,
  <field name 2>: <specified field 2>,
  ...
})
```


#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:
 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `push` 操作，对不同分组( `group` )的所有记录，聚合所有数据并且将其放入一个新的字段中，进一步结构化和语义化数据。  
With the help of the `push` operation, all records in different groups (`group`) are aggregated and put into a new field to further structure and semanticize the data.
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: '$group',
    students: $.push({
      name: '$name',
      score: '$score'
    })
  })
  .end()
```
输出结果如下：  
The output is as follows:
 
```js
{ "_id": "b", "students": [{ "name": "stu3", "score": 80 }, { "name": "stu4", "score": 100 }] }
{ "_id": "a", "students": [{ "name": "stu1", "score": 84 }, { "name": "stu2", "score": 96 }] }
```

#### stdDevPop

返回一组字段对应值的标准差。  
Returns the standard deviation of the corresponding values of a set of fields.
#####  API 说明
#####  API description
 `stdDevPop` 的使用形式如下：  
 The usage form of `stdDevPop` is as follows:
 
```js
db.command.aggregate.stdDevPop(<表达式(expression)>)
```
表达式传入的是指定字段，指定字段对应的值的数据类型必须是 `number` ，否则结果会返回 `null`。  
The expression passed in is the specified field, and the data type of the value corresponding to the specified field must be `number`, otherwise the result will return `null`.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：`a` 组同学的成绩分别是84和96，`b`组同学的成绩分别是80和100。  
 Suppose the records of the set `students` are as follows: the scores of students in group `a` are 84 and 96, and the scores of students in group `b` are 80 and 100, respectively.
 
```js
{ "group":"a", "score":84 }
{ "group":"a", "score":96 }
{ "group":"b", "score":80 }
{ "group":"b", "score":100 }
```
可以用 `stdDevPop` 来分别计算 `a` 和 `b` 两组同学成绩的标准差，以此来比较哪一组同学的成绩更稳定。代码如下：  
You can use `stdDevPop` to calculate the standard deviation of the scores of the two groups of students in `a` and `b` respectively, so as to compare which group of students has more stable results. code show as below:
 
```js
const $ = db.command.aggregate
let res = await db.collection('students').aggregate()
  .group({
    _id: '$group',
    stdDev: $.stdDevPop('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```js
{ "_id": "b", "stdDev": 10 }
{ "_id": "a", "stdDev": 6 }
```

#### stdDevSamp

计算输入值的样本标准偏差。如果输入值代表数据总体，或者不概括更多的数据，请改用 `db.command.aggregate.stdDevPop`。  
Calculate the sample standard deviation of the input value. If the input value represents the overall data, or does not summarize more data, please use `db.command.aggregate.stdDevPop` instead.
      
#####  API 说明
#####  API description
 `stdDevSamp` 的使用形式如下：  
 The usage form of `stdDevSamp` is as follows:
 
```js
db.command.aggregate.stdDevSamp(<表达式(expression)>)
```
表达式传入的是指定字段，`stdDevSamp` 会自动忽略非数字值。如果指定字段所有的值均是非数字，那么结果返回 `null`。  
The expression passed in is the specified field, `stdDevSamp` will automatically ignore non-numeric values. If all values of the specified field are non-numeric, then the result returns `null`.
 
#####  示例代码
#####  Sample code
 假设集合 `students` 的记录如下：  
 Suppose the records of the collection `students` are as follows:

 
```js
{ "score": 80 }
{ "score": 100 }
```
可以用 `stdDevSamp` 来计算成绩的标准样本偏差。代码如下：  
You can use `stdDevSamp` to calculate the standard sample deviation of the score. code show as below:
 
```js
const $ = db.command.aggregate
let res = await db.collection('students').aggregate()
  .group({
    _id: null,
    ageStdDev: $.stdDevSamp('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```js
{ "_id": null, "ageStdDev": 14.142135623730951 }
```
如果向集合 `students` 添加一条新记录，它的 `score` 字段类型是 `string`：  
If you add a new record to the collection `students`, its `score` field type is `string`:
 
```js
{ "score": "aa" }
```
用上面代码计算标准样本偏差时，`stdDevSamp` 会自动忽略类型不为 `number` 的记录，返回结果保持不变。
When using the above code to calculate the standard sample deviation, `stdDevSamp` will automatically ignore records whose type is not `number`, and the returned result remains unchanged.
#### sum

计算并且返回一组字段所有数值的总和。  
Calculate and return the sum of all values in a set of fields.
      
#####  API 说明
#####  API description
 `sum` 的使用形式如下：  
 The usage form of `sum` is as follows:
 
```js
db.command.aggregate.sum(<表达式(expression)>)
```
表达式可以传入指定字段，也可以传入指定字段组成的列表。`sum` 会自动忽略非数字值。如果字段下的所有值均是非数字，那么结果返回 0。若传入数字常量，则当做所有记录该字段的值都给给定常量，在聚合时相加，最终值为输入记录数乘以常量。  
The expression can be passed in the specified field or a list of specified fields. `sum` will automatically ignore non-numeric values. If all the values under the field are non-numeric, the result returns 0. If a numeric constant is passed in, the value of this field is treated as a given constant for all records, and added during aggregation, and the final value is the number of input records multiplied by the constant.
 
#####  示例代码
#####  Sample code
 假设代表商品的集合 `goods` 的记录如下：`price` 代表商品销售额，`cost` 代表商品成本  
 Assume that the record of the collection of goods representing the product `goods` is as follows: `price` represents the sales of the product, and `cost` represents the cost of the product
 
```js
{ "cost": -10, "price": 100 }
{ "cost": -15, "price": 1 }
{ "cost": -10, "price": 10 }
```


**单独字段**
**Single field**

 借助 `sum` 可以计算所有商品的销售总和，代码如下：  
 With the help of `sum`, the total sales of all commodities can be calculated, the code is as follows:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('goods')
  .aggregate()
  .group({
    _id: null,
    totalPrice: $.sum('$price')
  })
  .end()
```
返回的数据结果如下：销售额是 111  
The returned data results are as follows: Sales is 111
 
```js
{ "_id": null, "totalPrice": 111 }
```


**字段列表**
**Field List**


 如果需要计算所有商品的利润总额，那么需要将每条记录的 `cost` 和 `price` 相加得到此记录对应商品的利润。最后再计算所有商品的利润总额。  
 If you need to calculate the total profit of all products, you need to add the `cost` and `price` of each record to get the profit of the corresponding product in this record. Finally, calculate the total profit of all commodities.
 借助 `sum`，代码如下：  
 With the help of `sum`, the code is as follows:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('goods')
  .aggregate()
  .group({
    _id: null,
    totalProfit: $.sum(
      $.sum(['$price', '$cost'])
    )
  })
  .end()
```
返回的数据结果如下：利润总额为 76  
The returned data results are as follows: the total profit is 76
 
```js
{ "_id": null, "totalProfit": 76 }
```

### 变量操作符
### Variable operators
#### let

自定义变量，并且在指定表达式中使用，返回的结果是表达式的结果。  
Custom variables, and used in the specified expression, the returned result is the result of the expression.
     
#####  API 说明
#####  API description
 `let` 的语法如下： 
 The syntax of `let` is as follows:

 
```js
db.command.aggregate.let({
  vars: {
    <variable 1>: <Variable expression>,
    <variable 2>: <Variable expression>,
    ...
  },
  in: <Result expression>
})
```
`vars` 中可以定义多个变量，变量的值由 `变量表达式` 计算而来，并且被定义的变量只有在 `in` 中的 `结果表达式` 才可以访问。  
Multiple variables can be defined in `vars`, the value of the variable is calculated by `variable expression`, and the defined variable can only be accessed by the `result expression` in `in`.
 在 `in` 的结果表达式中访问自定义变量时候，请在变量名前加上双美元符号( `$$` )并用引号括起来。  
 When accessing a custom variable in the result expression of `in`, please add a double dollar sign (`$$`) in front of the variable name and enclose it in quotation marks.
 
#####  示例代码
#####  Sample code
 假设代表商品的集合 `goods` 的记录如下：`price` 代表商品价格，`discount` 代表商品折扣率，`cost` 代表商品成本  
 Assume that the record of the collection of goods representing the product `goods` is as follows: `price` represents the price of the product, `discount` represents the discount rate of the product, and `cost` represents the cost of the product
 
```js
{ "cost": -10, "discount": 0.95, "price": 100 }
{ "cost": -15, "discount": 0.98, "price": 1 }
{ "cost": -10, "discount": 1, "price": 10 }
```
借助 `let` 可以定义并计算每件商品实际的销售价格，并将其赋值给自定义变量 `priceTotal`。最后再将 `priceTotal` 与 `cost` 进行取和( `sum` )运算，得到每件商品的利润。  
With the help of `let`, the actual sales price of each item can be defined and calculated, and assigned to the custom variable `priceTotal`. Finally, calculate the sum (`sum`) of `priceTotal` and `cost` to get the profit of each item.

 代码如下：  
 code show as below:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('goods')
  .aggregate()
  .project({
    profit: $.let({
      vars: {
        priceTotal: $.multiply(['$price', '$discount'])
      },
      in: $.sum(['$$priceTotal', '$cost'])
    })
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:
 
```
{ "profit": 85 }
{ "profit": -14.02 }
{ "profit": 0 }
```

