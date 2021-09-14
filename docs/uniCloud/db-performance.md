慢查询，指云数据库查询较慢，不能及时返回结果。这样的查询会收录在 uniCloud web控制台的慢查询日志栏目中。但收录不是实时的，有一定延时。
Slow query means that the cloud database query is slow and results cannot be returned in time. Such queries will be included in the slow query log column of the uniCloud web console. However, the inclusion is not real-time, and there is a certain delay.
开发者应经常查阅自己的慢查询，修复问题，保证业务系统的健康稳定。
Developers should always check their own slow queries, fix problems, and ensure the health and stability of the business system.
在数据库查询超过1秒仍不能返回结果后，阿里云甚至会报错`operation exceeded time limit`。
Alibaba Cloud will even report an error `operation exceeded time limit` after the database query exceeds 1 second and still fails to return results.
这里介绍如何进行查询优化以避免此类问题。
Here is how to optimize the query to avoid such problems.
## 设置合适的索引
## Set the appropriate index
请参阅：[数据库索引](uniCloud/db-index.md)。
Please refer to: [Database Index](uniCloud/db-index.md).

## 大量数据查询优化
## Mass data query optimization
如果您的数据量非常大，在设置合适的索引之后仍然会查询超时，您要考虑以下优化方案。
If your data volume is very large, and the query will time out after setting the appropriate index, you should consider the following optimization solutions.
尽量避免使用skip，至少不应该skip比较大的值，因为skip操作Mongo服务端依然会扫描被skip的数据，带skip操作的耗时和skip的数量线性相关。您可以考虑使用排序和范围查询功能来替代直接使用skip。
Avoid using skip as much as possible, at least not with a relatively large skip value, because the skip operation Mongo server will still scan the skipped data, and the time consumption of the skip operation is linearly related to the number of skips. You can consider using sorting and range query functions instead of skipping directly.
对于非常大的数据可以分段来查询，即通过一定的条件将一次查询拆分为多次查询操作。
For very large data, it can be queried in segments, that is, one query is split into multiple query operations through certain conditions.
### 带条件的count@count
### Conditional count@count
如果满足条件的数据特别多，where+count会特别慢，很有可能超时。我们建议不要在大数据量的集合内这样使用count方法。
If there is a lot of data that meets the conditions, where+count will be very slow, and it is likely to time out. We recommend not to use the count method like this in a large data collection.
### 使用skip方法传入较大的值@skip
### Use skip method to pass in a larger value @skip
您应该避免使用where+skip+limit的查询方式来遍历整个集合，因为这种方式随着Skip数量的增长响应时间会越来越慢，还可能会造成请求超时。
You should avoid using the where+skip+limit query method to traverse the entire collection, because this method will slow down the response time as the number of Skips grows, and may also cause the request to time out.
下面的代码给出了一个示例。**为避免示例过于复杂，先假设没有两条记录的create_date是相等，如果create_date不能唯一标识数据，可以再额外加入其他字段，比如文章作者等**
The following code gives an example. **In order to avoid the example being too complicated, first assume that the create_date of no two records are equal. If create_date cannot uniquely identify the data, additional fields can be added, such as the author of the article.**
按照create_date（创建时间）降序排序，每次查询时都指定查询条件小于上次查询结果中的最后一条记录的create_date，这样不需要使用skip即可实现分页效果，同时还能保证用户在上下翻页的时候不会因为出现新增数据而引起的前后两页数据重复的问题。
Sort by create_date (create time) in descending order. Each time the query is specified, the query condition is specified to be less than the create_date of the last record in the last query result, so that the paging effect can be achieved without using skip, and it can also ensure that the user is flipping up and down. There will be no duplication of data on the previous and next pages due to the newly added data.
```js
const db = uniCloud.database()
const dbCmd = db.command
module.exports = async function(event,context) {
  const {
    lastCreateDate = Date.now(),
    pageSize
  } = event
  if(pageSize > 100){
    throw new Error('单页数据不可超过100条(No more than 100 data in a single page)')
  }
  const res = await db.collection('book').where({
    create_date: dbCmd.lt(lastCreateDate)
  })
  .limit(pageSize)
  .get()
}
```

使用上述写法后您应该使用上一页、下一页、上n页（其中n是一个比较小的数字）、下n页的翻页功能来替换随机翻页。您可以参考百度或者谷歌的搜索结果的分页功能，当结果页数非常多时，不展示共有多少页，仅支持在前10页中支持随机翻页；再往下翻页的过程中，不再支持随机翻页，仅支持向下翻一个较小的页数，这样就可以在已经查询出结果的基础上再使用where+skip（少量）+limit+orderBy的方式来快速查询到结果。
After using the above writing method, you should use the page turning function of previous page, next page, previous n page (where n is a relatively small number), and next n page to replace random page turning. You can refer to the paging function of Baidu or Google's search results. When the number of results is very large, the total number of pages will not be displayed. It only supports random page turning in the first 10 pages; during the process of turning pages down, it is no longer supported Random page turning, only supports turning down a small number of pages, so that you can use where+skip (a small amount) + limit+orderBy to quickly query the results based on the results that have been queried.
