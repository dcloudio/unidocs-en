## 概述
## Overview
选择阿里云作为服务商时，服务空间资源完全免费，每个账号最多允许创建50个服务空间。
When Alibaba Cloud is selected as the service provider, the service space resources are completely free, and each account allows up to 50 service spaces to be created.
选择腾讯云作为服务商时，可以创建一个免费的服务空间，资源详情参考[腾讯云免费额度](uniCloud/price?id=price-free)；如想提升免费空间资源配额，或创建更多服务空间，则需付费购买。
When you choose Tencent Cloud as a service provider, you can create a free service space. For resource details, refer to [Tencent Cloud Free Quota](uniCloud/price?id=price-free); if you want to increase the free space resource quota, or create more services Space, you need to pay for it.
付费用户享受腾讯云提供的服务协议SLA，[详见](https://uniapp.dcloud.net.cn/uniCloud/agreement)
Paid users enjoy the service agreement SLA provided by Tencent Cloud, [see details](https://uniapp.dcloud.net.cn/uniCloud/agreement)
uniCloud的腾讯云版的定价、套餐内容、服务SLA，是由腾讯公司直接公布的。DCloud公司不会加价，包括开发者通过DCloud充值也会直接充到开发者在腾讯云建立的子账户下。DCloud只从腾讯云等云厂商获取返佣，也不会在未来加价收割开发者。
The pricing, package content, and service SLA of uniCloud's Tencent Cloud Edition are directly announced by Tencent. DCloud will not increase the price, including the developer's recharge through DCloud, and it will also be directly charged to the developer's sub-account established in Tencent Cloud. DCloud only obtains rebates from cloud vendors such as Tencent Cloud, and will not increase prices to recruit developers in the future.
uniCloud提供包月、按量计费两种计费方式（仅腾讯云），具体说明如下：
uniCloud provides two billing methods: monthly subscription and pay-as-you-go billing (Tencent Cloud only). The specific instructions are as follows:
|计费方式	|付费方式									|计费单位																							|
|Billing method |Paying method |Billing unit |
|:-:			|:-:											|:-:																									|
|包月	|预付费										|参考 [腾讯云包月套餐](uniCloud/price?id=price-month)																|
|Monthly subscription |Prepaid |Reference [Tencent Cloud Monthly Package](uniCloud/price?id=price-month) |
|按量计费	|结算时冻结费用，每日结算	|参考 [腾讯云按量计费](uniCloud/price?id=price-info)|
|Pay by volume |Freeze fees during settlement and settle daily |Reference [Tencent Cloud Pay by volume](uniCloud/price?id=price-info)|

## 阿里云
## Ali Cloud
阿里云的服务空间是纯免费的。但为避免资源滥用，有一些限制，见下。
Alibaba Cloud's service space is purely free. But to avoid resource abuse, there are some restrictions, see below.
|资源类目					|限制			|说明																		|
|Resource category |Restrictions |Description |
|:-:						|:-:			|:-:																		|
|云函数并发限制				|1000个实例/服务空间	|实际普通项目很难达到这个并发数，阿里云可以设置单实例多并发单实例最多100，理论最大并发量1000*100=100000 (10万)	，关于单实例多并发请参考：[单实例多并发](uniCloud/cf-functions.md?id=concurrency)								|
|Cloud function concurrency limit |1000 instances/service space |It is difficult to achieve this concurrency in actual ordinary projects. Alibaba Cloud can set a single instance with multiple concurrent single instances up to 100, and the theoretical maximum concurrency is 1000*100=100000 (100,000), For single instance multiple concurrency, please refer to: [single instance multiple concurrency](uniCloud/cf-functions.md?id=concurrency) |
|每个服务空间的云函数数量		|48个			|实际项目中由于clientDB和单路由云函数，只会用到几个云函数，达不到限制数字。[详见](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions)	|
|Number of cloud functions in each service space |48 |In actual projects, only a few cloud functions are used due to clientDB and single-route cloud functions, which cannot reach the limit number. [See details](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions) |
尤其注意阿里云的cdn确实是全免费的，这些免费资源可用于正常公司业务，阿里云不允许开发者使用这些免费的存储及CDN资源来开展图床类业务。
In particular, note that Alibaba Cloud's CDN is indeed all free. These free resources can be used for normal company business. Alibaba Cloud does not allow developers to use these free storage and CDN resources to carry out image bed services.
除上面的描述外，阿里云没有其他限制。
Apart from the above description, Alibaba Cloud has no other restrictions.
因为阿里云免费向DCloud提供了硬件资源，所以DCloud也没有向开发者收费。如果阿里云后续明确了收费计划，DCloud也会第一时间公布在这里。
Because Alibaba Cloud provides hardware resources to DCloud for free, DCloud also does not charge developers. If Alibaba Cloud subsequently clarifies the charging plan, DCloud will also announce it here as soon as possible.
如有超大型应用突破阿里云资源限制，请发邮件到service@dcloud.io请求协助，可以特批扩大资源。
If there is a super-large application that breaks the resource limit of Alibaba Cloud, please send an email to service@dcloud.io to request assistance. Special approval can be given to expand the resources.

## 腾讯云
## Tencent Cloud
### 腾讯云免费空间的额度@price-free
### Tencent Cloud free space quota @price-free
腾讯云针对每个账号提供了一个有免费额度的服务空间，以方便产品开发测试及体验。具体额度请阅读下方[腾讯云付费版包月套餐](uniCloud/price.md?id=price-month)中的免费版。
Tencent Cloud provides a free service space for each account to facilitate product development, testing and experience. For the specific quota, please read the free version in [Tencent Cloud paid monthly package] (uniCloud/price.md?id=price-month) below.
**免费额度注意事项：**
**Notes on free quota:**
- 腾讯云的免费空间是以账号为维度的，若有多个服务空间，则仅有一个空间可享受免费额度。
- Tencent Cloud’s free space is based on the account number. If there are multiple service spaces, only one space can enjoy the free quota.
- 如果已创建免费版的服务空间，则其他服务空间，均无法再享受免费额度。
- If a free version of the service space has been created, other service spaces can no longer enjoy the free quota.
- 免费版服务空间付费升级为更高档的包月套餐时，系统会将该空间设置为到期自动降配免费空间（关于自动降配请阅读下面的注意事项），故此时免费额度依然被占用中，其他服务空间亦无法再享受免费额度
- When the free version of the service space is upgraded to a more high-end monthly package, the system will set the space as a free space that will be automatically reduced when it expires (for automatic reduction, please read the notes below), so the free quota is still occupied at this time , Other service spaces can no longer enjoy free quota
- 按量计费服务空间在开通时可以选择指定是否占用免费额度（如果当前账号还有免费额度的话），如果选择占用免费额度，则不可再创建包月模式的免费服务空间。
- When the pay-as-you-go service space is activated, you can choose to specify whether to occupy the free quota (if the current account still has a free quota). If you choose to occupy the free quota, you can no longer create a monthly free service space.
- 非免费包月套餐到期之后如果不进行续费会在一周后销毁
- After the non-free monthly package expires, if it is not renewed, it will be destroyed one week later
**自动降配注意事项：**
**Precautions for automatic configuration reduction:**
- 自动降配会在到期之后的24小时后开始执行
- Automatic downgrade will be executed after 24 hours after expiration
- 被设置自动降配的服务空间到期之后，会尝试自动降配，但并不能保证一定可以成功，如果你的资源超出了免费版的额度则无法降配
- After the service space that has been set to automatically reduce the allocation expires, it will try to automatically reduce the allocation, but there is no guarantee that it will be successful. If your resources exceed the quota of the free version, you cannot reduce the allocation
- 特别要注意的一点是：自动降配为免费版之后，配置的云函数固定出口IP将会失效
- One thing to note in particular: After the automatic downgrade to the free version, the configured cloud function fixed export IP will be invalid
- 腾讯云资源用量统计有延迟，请密切关注自己的业务用量，企业用户推荐直接改用按量计费
- Tencent Cloud resource usage statistics are delayed. Please pay close attention to your business usage. Enterprise users recommend that you switch to pay-as-you-go billing directly.


### 腾讯云包月套餐@price-month
### Tencent Cloud Monthly Package @price-month
包月套餐是指每个月的支付固定价格，购买一定量的服务器资源。
A monthly subscription refers to paying a fixed price every month to purchase a certain amount of server resources.
如果资源超限，则相应资源不可使用。需立即升配套餐。
If the resource exceeds the limit, the corresponding resource cannot be used. The package needs to be upgraded immediately.
包月套餐支持升配、降配。以满足资源用量上升或下降的价格调整需求。具体操作见[web控制台](https://unicloud.dcloud.net.cn)的购买套餐界面。
The monthly package supports upgrades and reductions. To meet the price adjustment needs of rising or falling resource usage. For specific operations, please refer to the purchase package interface of [web console](https://unicloud.dcloud.net.cn).
> 注意：腾讯云在 2021年1月21日进行了业务调整，下线了基础版1套餐（原免费版），同步上线了新的免费版和特惠基础版1，满足不同场景下的用户需求，免费版套餐适用于产品测试及产品体验场景。
> Note: Tencent Cloud made business adjustments on January 21, 2021. The basic version 1 package (original free version) was discontinued, and the new free version and special basic version 1 were launched simultaneously to meet the needs of users in different scenarios , The free version package is suitable for product testing and product experience scenarios.
> 本次调整不会影响现已开通基础版1套餐（原免费版）的服务空间，但新开通的免费服务空间、付费套餐自动降配到的免费服务空间均会使用新免费版的资源额度。
> This adjustment will not affect the service space of the basic version 1 package (original free version) that has been opened, but the newly opened free service space and the free service space automatically reduced to the paid package will use the resource quota of the new free version .
>自2021年3月12日后，在按量计费环境内，如果当日有资源使用，且产生的计费金额不足0.01元，将补齐按照0.01元收取。
>After March 12, 2021, in the pay-as-you-go billing environment, if there are resources used on that day and the billing amount generated is less than 0.01 yuan, the supplement will be charged at 0.01 yuan.
>针对享有免费额度的按量计费环境:
>For the pay-as-you-go billing environment with free quota:
>- 如果该环境用量未超出免费额度，该环境仍为免费环境。
>- If the usage of the environment does not exceed the free quota, the environment is still a free environment.
>- 如果该环境用量已经超出免费额度，且超量资源产生的计费金额不足0.01元，将补齐按照0.01元收取。
>- If the environmental usage has exceeded the free quota, and the billing amount generated by the excess resources is less than 0.01 yuan, the supplement will be charged at 0.01 yuan.



|资源分类			|资源细项				|基础版1（已下线）|免费版				|特惠基础版		|基础版2			|专业版1			|专业版2			|旗舰版1			|
|Resource Classification |Resource Details |Basic Edition 1 (Offline)|Free Edition |Special Basic Edition |Basic Edition 2 |Professional Edition 1 |Professional Edition 2 |Ultimate Edition 1 |
|:-:					|:-:						|:-:							|:-:					|:-:					|:-:					|:-:					|:-:					|:-:					|
|云存储				|容量						|5GB							|5GB					|8GB					|10GB					|50GB					|100GB				|500GB				|
|Cloud Storage |Capacity |5GB |5GB |8GB |10GB |50GB |100GB |500GB |
|							|下载操作次数		|150万/月					|2000/月			|10万/月			|200万/月			|750万/月			|1500万/月		|3750万/月		|
| |Number of download operations |1.5 million/month |2000/month |100,000/month |2 million/month |7.5 million/month |15 million/month |37.5 million/month |
|							|上传操作次数		|60万/月					|1000/月			|5万/月				|100万/月			|300万/月			|600万/月			|1500万/月		|
| |Number of upload operations |600,000/month |1000/month |50,000/month |1 million/month |3 million/month |6 million/month |15 million/month |
|							|CDN 回源流量		|5GB/月						|1GB/月				|2GB/月				|10GB/月			|50GB/月			|150GB/月			|500GB/月			|
| |CDN back-to-source traffic |5GB/month |1GB/month |2GB/month |10GB/month |50GB/month |150GB/month |500GB/month |
|CDN					|CDN 流量				|5GB/月						|1GB/月				|2GB/月				|25GB/月			|50GB/月			|150GB/月			|500GB/月			|
|CDN |CDN traffic |5GB/month |1GB/month |2GB/month |25GB/month |50GB/month |150GB/month |500GB/month |
|云函数				|资源使用量 GBs	|4万/月						|1000/月			|1万/月				|20万/月			|40万/月			|150万/月			|400万/月			|
|Cloud function |Resource usage GBs |40,000/month |1,000/month |10,000/month |200,000/month |400,000/month |1.5 million/month |4 million/month |
|							|外网出流量			|1GB/月						|1GB/月				|1GB/月				|3GB/月				|5GB/月				|10GB/月			|25GB/月			|
| |Outbound traffic |1GB/month |1GB/month |1GB/month |3GB/month |5GB/month |10GB/month |25GB/month |
|							|云函数并发限制	|1000个/云函数		|1000个/云函数|1000个/云函数|1000个/云函数|1000个/云函数|1000个/云函数|1000个/云函数|
| |Cloud function concurrency limit |1000/cloud function |1000/cloud function|1000/cloud function|1000/cloud function|1000/cloud function|1000/cloud function|1000/cloud function|
|							|函数数量限制		|49个							|9个					|49个					|79个					|99个					|99个					|149个				|
| |Limits on the number of functions |49 |9 |49 |79 |99 |99 |149 |
|							|固定外网 IP		|×								|×						|√						|√						|√						|√						|√						|
| |Fixed external network IP |× |× |√ |√ |√ |√ |√ |
|数据库				|容量						|2GB							|2GB					|2GB					|3GB					|5GB					|10GB					|10GB					|
|Database |Capacity |2GB |2GB |2GB |3GB |5GB |10GB |10GB |
|							|同时连接数			|20个							|5个					|20个					|50个					|100					|200个				|400个				|
| |Number of simultaneous connections |20 |5 |20 |50 |100 |200 |400 |
|							|读操作数				|5万/天						|500/天				|5万/天				|25万/天			|50万/天			|150万/天			|500万/天			|
| |Number of read operations |50,000/day |500/day |50,000/day |250,000/day |500,000/day |1.5 million/day |5 million/day |
|							|写操作数				|3万/天						|300/天				|3万/天				|15万/天			|30万/天			|100万/天			|300万/天			|
| |Number of write operations |30,000/day |300/day |30,000/day |150,000/day |300,000/day |1,000,000/day |3,000,000/day |
|							|集合限制				|100个						|15个					|50个					|150个				|200个				|300个				|400个				|
| |Set limit |100 |15 |50 |150 |200 |300 |400 |
|							|备份保留天数		|7天							|7天					|14天					|14天					|14天					|14天					|14天					|
| |Backup retention days |7 days |7 days |14 days |14 days |14 days |14 days |14 days |
|售价（元/月）|-							|免费							|免费					|6.9					|30						|104					|390					|860					|
|Price (RMB/month)|- |Free |Free |6.9 |30 |104 |390 |860 |

腾讯云完整套餐列表请参考：[腾讯云完整套餐列表](uniCloud/price.md?id=allpkg)
For the complete list of Tencent Cloud packages, please refer to: [Complete Tencent Cloud Package List](uniCloud/price.md?id=allpkg)
除了资源配量不同外，注意只有付费版才有 固定外网IP。如需在微信网页里调用js sdk，需要配置固定外网ip。
In addition to the difference in resource allocation, note that only the paid version has a fixed external network IP. If you need to call the js sdk on the WeChat webpage, you need to configure a fixed external network ip.

**部分指标说明**
**Description of some indicators**
- **云函数资源使用量：**云函数资源用量最小计费粒度为128MB*100ms，即内存使用为设定的云函数运行内存（默认256MB，最小可设置为128MB），运行时间以100ms为阶梯计算
- ** Cloud function resource usage: **The minimum billing granularity of cloud function resource usage is 128MB*100ms, that is, the memory usage is the set cloud function running memory (the default is 256MB, the minimum can be set to 128MB), and the running time is 100ms Calculate for the ladder
- **云函数并发限制：**超出云函数并发限制的请求会直接失败
- **Cloud function concurrency limit: **Requests that exceed the cloud function concurrency limit will directly fail
- **函数数量限制：**实际项目中由于clientDB和单路由云函数，只会用到几个云函数，达不到限制数字。[详见](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions)
- **Limit on the number of functions: **In the actual project, due to clientDB and single-route cloud functions, only a few cloud functions are used, which cannot reach the limit number. [See details](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions)
- **数据库读写次数：**修改或读取条数为0时也计算一次读写，即只要调用接口就计算一次。
- **Number of database reads and writes: **When the number of modified or read entries is 0, read and write are counted once, that is, once the interface is called.
### 腾讯云按量计费@price-info
### Tencent Cloud Pay-As-You-Go @price-info
按量计费，意味着不是每个月支付固定套餐，而是根据使用量付费。
Billing by volume means that instead of paying for a fixed package every month, you pay based on usage.
按量付费需要预存一定金额，每日根据前一日资源消耗生成账单，从预存金额中扣除。
Pay-as-you-go payment requires a certain amount to be pre-deposited. Daily bills are generated based on the resource consumption of the previous day and deducted from the pre-deposited amount.
如果预存金额不足，则服务空间将不可用，需要立即充值。
If the pre-deposited amount is insufficient, the service space will be unavailable and you need to recharge immediately.
按量付费目前仅企业认证用户可以开通，个人用户无法购买。
Pay-as-you-go is currently only available for enterprise-certified users, not for individual users.
腾讯云按量计费服务空间定价如下：
Tencent Cloud’s pay-per-use service space pricing is as follows:

|资源分类		|资源细项				|售价（元）	|
|Resource classification |Resource details |Price (yuan) |
|:-:			|:-:					|:-:		|
|云存储			|容量（GB/天）			|0.0043		|
|Cloud storage |Capacity (GB/day) |0.0043 |
|				|下载操作次数（万次）	|0.01		|
| |Number of download operations (10,000 times) |0.01 |
|				|上传操作次数（万次）	|0.01		|
| |Number of upload operations (10,000 times) |0.01 |
|				|CDN 回源流量（GB）		|0.15		|
| |CDN back-to-source traffic (GB) |0.15 |
|CDN			|CDN 流量（GB）			|0.18		|
|CDN |CDN Traffic (GB) |0.18 |
|云函数			|资源使用量（GBs）		|0.00011108	|
|Cloud Functions |Resource Usage (GBs) |0.00011108 |
|				|外网出流量（GB）		|0.8		|
| |Outbound traffic (GB) |0.8 |
|				|函数数量限制150个		|			|
| |The number of functions is limited to 150 | |
|				|支持固定外网 IP		|			|
| |Support fixed external network IP | |
|数据库			|容量（GB/天）			|0.07		|
|Database |Capacity (GB/day) |0.07 |
|				|读操作数（万次）		|0.015		|
| |Number of read operations (ten thousand times) |0.015 |
|				|写操作数（万次）		|0.05		|
| |Number of write operations (ten thousand times) |0.05 |
|				|同时连接数1000个		|			|
| |1000 simultaneous connections | |
|				|集合限制800个			|			|
| | Collection limit 800 | |
|				|备份保留天数14天		|			|
| | Backup retention days 14 days | |
|				|支持指定回档时间		|			|
| |Support designated rewind time | |
|前端网站托管	|容量（GB/天）			|0.0043		|
|Front-end website hosting |Capacity (GB/day) |0.0043 |
|				|流量（GB）				|0.21		|
| |Traffic (GB) |0.21 |


**注意**
**Notice**
- 如果之前没有开通免费版腾讯云服务空间，则新开通的一个按量付费服务空间可以选择是否占用免费资源。如果选择了占用免费资源将无法创建预付费免费版。
- If the free version of Tencent Cloud service space has not been activated before, a newly opened pay-as-you-go service space can choose whether to occupy free resources. If you choose to occupy free resources, you will not be able to create a prepaid free version.
- 按量计费服务空间开通时会自动开通前端网页托管，如果按量付费服务空间拥有免费额度，会默认赠送一个月前端网站托管（容量1GB、流量5GB），一个月之后会正常按量收费。
- The front-end web hosting will be automatically activated when the pay-as-you-go service space is activated. If the pay-as-you-go service space has a free quota, one month of front-end web hosting (capacity 1GB, traffic 5GB) will be given as a default. After one month, the normal pay-as-you-go will be charged .
- 按量计费服务空间删除有次数限制，每个月最多删除一次，每个账号一共可以删除4次，删除之前需要关闭前端网页托管服务并删除所有云端资源（包括云函数、数据库、云存储）
- There is a limit on the number of times you can delete the pay-as-you-go service space. You can delete up to one time per month. Each account can be deleted 4 times in total. Before deleting, you need to close the front-end web hosting service and delete all cloud resources (including cloud functions, databases, and cloud storage). )
- 按量计费是延迟结算，可能存在余额超支的情况，故创建按量付费服务空间时，需支付一定的保证金，用以抵消超支结算的情况。如果您不再申请使用uniCloud服务，可以申请退还保证金（目前需要发送邮件到service@dcloud.io）。
- Pay-as-you-go billing is a delayed settlement, and there may be a balance overrun. Therefore, when creating a pay-as-you-go service space, a certain deposit must be paid to offset the overrun settlement. If you no longer apply for the uniCloud service, you can apply for a refund of the deposit (currently you need to send an email to service@dcloud.io).
- 目前使用腾讯云包月套餐会默认自动续费，如果包月套餐到期时uniCloud腾讯云账户余额够用则自动从余额中扣除一个月的费用，近期会提供关闭选项
- Currently using Tencent Cloud monthly subscription package will automatically renew by default. If the UniCloud Tencent Cloud account balance is sufficient when the monthly subscription package expires, one month's fee will be automatically deducted from the balance. A close option will be provided in the near future
**关于云函数1000并发的说明**
**Notes on Concurrency of Cloud Function 1000**
以云函数运行（计费时间）200ms为例，1000并发的云函数，每秒处理1000*(1/0.2) = 5000次请求，即QPS为5000
Take cloud function running (billing time) 200ms as an example, 1000 concurrent cloud function, processing 1000*(1/0.2) = 5000 requests per second, that is, QPS is 5000
### 完整套餐列表@allpkg
### Complete package list @allpkg
#### 免费版
#### Free version

|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|5GB|
|Cloud storage capacity|5GB|
|云存储下载次数限制|2000次/月|
|Cloud storage download limit|2000 times/month|
|云存储上传次数限制|1000次/月|
|Cloud storage upload limit|1000 times/month|
|云存储CDN回源流量|1GB/月|    
|Cloud storage CDN back-to-source traffic|1GB/month|
|云存储CDN流量|1GB/月|        
|Cloud storage CDN traffic|1GB/month|
|云函数资源用量|1GB/月|       
|Cloud function resource usage|1GB/month|
|云函数外网出流量|1GB/月|     
|Cloud function extranet outbound traffic|1GB/month|
|云函数并发限制|1000/云函数|  
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|9个|
|Limit on the number of cloud functions|9|
|云函数支持固定出口IP|×|      
|Cloud function supports fixed export IP|×|
|数据库容量|2GB|
|Database Capacity|2GB|
|数据库同时连接数|5个|        
|Number of simultaneous database connections|5|
|数据库读操作数|500次/天|     
|Database read operations|500 times/day|
|数据库写操作数|300次/天|     
|Number of database write operations|300 times/day|
|数据库集合数量限制|15个|     
|Limit on the number of database collections|15|
|备份保留天数|7天|
|Backup retention days|7 days|

#### 特惠基础版 1
#### Special Basic Edition 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|8GB|
|Cloud storage capacity|8GB|
|云存储下载次数限制|10万次/月|
|Cloud storage download limit|100,000 times/month|
|云存储上传次数限制|5万次/月|
|Cloud storage upload limit|50,000 times/month|
|云存储CDN回源流量|2GB/月|
|Cloud storage CDN back-to-source traffic|2GB/month|
|云存储CDN流量|2GB/月|
|Cloud storage CDN traffic|2GB/month|
|云函数资源用量|2GB/月|
|Cloud function resource usage|2GB/month|
|云函数外网出流量|1GB/月|
|Cloud function extranet outbound traffic|1GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|49个|
|Limit on the number of cloud functions|49|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|2GB|
|Database Capacity|2GB|
|数据库同时连接数|20个|
|Number of simultaneous database connections|20|
|数据库读操作数|5万次/天|
|Database read operations|50,000 times/day|
|数据库写操作数|3万次/天|
|Database write operations|30,000 times/day|
|数据库集合数量限制|50个|
|Limit on the number of database collections|50|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 基础版 2
#### Basic Edition 2
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|10GB|
|Cloud storage capacity|10GB|
|云存储下载次数限制|200万次/月|
|Cloud storage download limit|2 million times/month|
|云存储上传次数限制|100万次/月|
|Cloud storage upload limit|1 million times/month|
|云存储CDN回源流量|10GB/月|
|Cloud storage CDN back-to-source traffic|10GB/month|
|云存储CDN流量|25GB/月|
|Cloud storage CDN traffic|25GB/month|
|云函数资源用量|25GB/月|
|Cloud function resource usage|25GB/month|
|云函数外网出流量|3GB/月|
|Cloud function extranet outbound traffic|3GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|79个|
|Limit on the number of cloud functions|79|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|3GB|
|Database Capacity|3GB|
|数据库同时连接数|50个|
|Number of simultaneous database connections|50|
|数据库读操作数|25万次/天|
|Database read operations|250,000 times/day|
|数据库写操作数|15万次/天|
|Database write operations|150,000 times/day|
|数据库集合数量限制|150个|
|Limit on the number of database collections|150|
|备份保留天数|14天|
|Backup retention days|14 days|

#### 数据库版 1
#### Database Edition 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|5GB|
|Cloud storage capacity|5GB|
|云存储下载次数限制|150万次/月|
|Cloud storage download limit|1.5 million times/month|
|云存储上传次数限制|60万次/月|
|Cloud storage upload limit|600,000 times/month|
|云存储CDN回源流量|5GB/月|
|Cloud storage CDN back-to-source traffic|5GB/month|
|云存储CDN流量|5GB/月|
|Cloud storage CDN traffic|5GB/month|
|云函数资源用量|5GB/月|
|Cloud function resource usage|5GB/month|
|云函数外网出流量|3GB/月|
|Cloud function extranet outbound traffic|3GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|5GB|
|Database Capacity|5GB|
|数据库同时连接数|100个|
|Number of simultaneous database connections|100|
|数据库读操作数|50万次/天|
|Database read operations|500,000 times/day|
|数据库写操作数|30万次/天|
|Database write operations|300,000 times/day|
|数据库集合数量限制|200个|
|Limit on the number of database collections|200|
|备份保留天数|14天|
|Backup retention days|14 days|



#### 云函数版 1
#### Cloud Function Edition 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|5GB|
|Cloud storage capacity|5GB|
|云存储下载次数限制|150万次/月|
|Cloud storage download limit|1.5 million times/month|
|云存储上传次数限制|60万次/月|
|Cloud storage upload limit|600,000 times/month|
|云存储CDN回源流量|5GB/月|
|Cloud storage CDN back-to-source traffic|5GB/month|
|云存储CDN流量|5GB/月|
|Cloud storage CDN traffic|5GB/month|
|云函数资源用量|5GB/月|
|Cloud function resource usage|5GB/month|
|云函数外网出流量|5GB/月|
|Cloud function extranet outbound traffic|5GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|3GB|
|Database Capacity|3GB|
|数据库同时连接数|50个|
|Number of simultaneous database connections|50|
|数据库读操作数|25万次/天|
|Database read operations|250,000 times/day|
|数据库写操作数|15万次/天|
|Database write operations|150,000 times/day|
|数据库集合数量限制|150个|
|Limit on the number of database collections|150|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 专业版 1
#### Professional Edition 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|50GB|
|Cloud storage capacity|50GB|
|云存储下载次数限制|750万次/月|
|Cloud storage download limit|7.5 million times/month|
|云存储上传次数限制|300万次/月|
|Cloud storage upload limit|3 million times/month|
|云存储CDN回源流量|50GB/月|
|Cloud storage CDN back-to-source traffic|50GB/month|
|云存储CDN流量|50GB/月|
|Cloud storage CDN traffic|50GB/month|
|云函数资源用量|50GB/月|
|Cloud function resource usage|50GB/month|
|云函数外网出流量|5GB/月|
|Cloud function extranet outbound traffic|5GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|5GB|
|Database Capacity|5GB|
|数据库同时连接数|100个|
|Number of simultaneous database connections|100|
|数据库读操作数|50万次/天|
|Database read operations|500,000 times/day|
|数据库写操作数|30万次/天|
|Database write operations|300,000 times/day|
|数据库集合数量限制|200个|
|Limit on the number of database collections|200|
|备份保留天数|14天|
|Backup retention days|14 days|


#### CDN版 1
#### CDN version 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|50GB|
|Cloud storage capacity|50GB|
|云存储下载次数限制|750万次/月|
|Cloud storage download limit|7.5 million times/month|
|云存储上传次数限制|300万次/月|
|Cloud storage upload limit|3 million times/month|
|云存储CDN回源流量|50GB/月|
|Cloud storage CDN back-to-source traffic|50GB/month|
|云存储CDN流量|500GB/月|
|Cloud storage CDN traffic|500GB/month|
|云函数资源用量|500GB/月|
|Cloud function resource usage|500GB/month|
|云函数外网出流量|3GB/月|
|Cloud function extranet outbound traffic|3GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|3GB|
|Database Capacity|3GB|
|数据库同时连接数|50个|
|Number of simultaneous database connections|50|
|数据库读操作数|25万次/天|
|Database read operations|250,000 times/day|
|数据库写操作数|15万次/天|
|Database write operations|150,000 times/day|
|数据库集合数量限制|150个|
|Limit on the number of database collections|150|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 专业版 2
#### Professional Edition 2
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|100GB|
|Cloud storage capacity|100GB|
|云存储下载次数限制|1500万次/月|
|Cloud storage download limit|15 million times/month|
|云存储上传次数限制|600万次/月|
|Cloud storage upload limit|6 million times/month|
|云存储CDN回源流量|150GB/月|
|Cloud storage CDN back-to-source traffic|150GB/month|
|云存储CDN流量|150GB/月|
|Cloud storage CDN traffic|150GB/month|
|云函数资源用量|150GB/月|
|Cloud function resource usage|150GB/month|
|云函数外网出流量|10GB/月|
|Cloud function extranet outbound traffic|10GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|10GB|
|Database Capacity|10GB|
|数据库同时连接数|200个|
|Number of simultaneous database connections|200|
|数据库读操作数|150万次/天|
|Database read operations|1.5 million times/day|
|数据库写操作数|100万次/天|
|Database write operations|1 million times/day|
|数据库集合数量限制|300个|
|Limit on the number of database collections|300|
|备份保留天数|14天|
|Backup retention days|14 days|

#### 云函数版 2
#### Cloud Function Edition 2
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|10GB|
|Cloud storage capacity|10GB|
|云存储下载次数限制|200万次/月|
|Cloud storage download limit|2 million times/month|
|云存储上传次数限制|100万次/月|
|Cloud storage upload limit|1 million times/month|
|云存储CDN回源流量|10GB/月|
|Cloud storage CDN back-to-source traffic|10GB/month|
|云存储CDN流量|25GB/月|
|Cloud storage CDN traffic|25GB/month|
|云函数资源用量|25GB/月|
|Cloud function resource usage|25GB/month|
|云函数外网出流量|25GB/月|
|Cloud function extranet outbound traffic|25GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|10GB|
|Database Capacity|10GB|
|数据库同时连接数|200个|
|Number of simultaneous database connections|200|
|数据库读操作数|150万次/天|
|Database read operations|1.5 million times/day|
|数据库写操作数|100万次/天|
|Database write operations|1 million times/day|
|数据库集合数量限制|300个|
|Limit on the number of database collections|300|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 数据库版 2
#### Database Edition 2
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|10GB|
|Cloud storage capacity|10GB|
|云存储下载次数限制|200万次/月|
|Cloud storage download limit|2 million times/month|
|云存储上传次数限制|100万次/月|
|Cloud storage upload limit|1 million times/month|
|云存储CDN回源流量|10GB/月|
|Cloud storage CDN back-to-source traffic|10GB/month|
|云存储CDN流量|25GB/月|
|Cloud storage CDN traffic|25GB/month|
|云函数资源用量|25GB/月|
|Cloud function resource usage|25GB/month|
|云函数外网出流量|10GB/月|
|Cloud function extranet outbound traffic|10GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|50GB|
|Database Capacity|50GB|
|数据库同时连接数|400个|
|Number of simultaneous database connections|400|
|数据库读操作数|500万次/天|
|Database read operations|5 million times/day|
|数据库写操作数|300万次/天|
|Database write operations|3 million times/day|
|数据库集合数量限制|400个|
|Limit on the number of database collections|400|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 专业版 3
#### Professional Edition 3
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|300GB|
|Cloud storage capacity|300GB|
|云存储下载次数限制|2500万次/月|
|Cloud storage download limit|25 million times/month|
|云存储上传次数限制|1000万次/月|
|Cloud storage upload limit|10 million times/month|
|云存储CDN回源流量|300GB/月|
|Cloud storage CDN back-to-source traffic|300GB/month|
|云存储CDN流量|300GB/月|
|Cloud storage CDN traffic|300GB/month|
|云函数资源用量|300GB/月|
|Cloud function resource usage|300GB/month|
|云函数外网出流量|20GB/月|
|Cloud function extranet outbound traffic|20GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|20GB|
|Database Capacity|20GB|
|数据库同时连接数|300个|
|Number of simultaneous database connections|300|
|数据库读操作数|300万次/天|
|Database read operations|3 million times/day|
|数据库写操作数|200万次/天|
|Database write operations|2 million times/day|
|数据库集合数量限制|400个|
|Limit on the number of database collections|400|
|备份保留天数|14天|
|Backup retention days|14 days|


#### CDN版 2
#### CDN version 2
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|100GB|
|Cloud storage capacity|100GB|
|云存储下载次数限制|1500万次/月|
|Cloud storage download limit|15 million times/month|
|云存储上传次数限制|600万次/月|
|Cloud storage upload limit|6 million times/month|
|云存储CDN回源流量|150GB/月|
|Cloud storage CDN back-to-source traffic|150GB/month|
|云存储CDN流量|3072GB/月|
|Cloud storage CDN traffic|3072GB/month|
|云函数资源用量|3072GB/月|
|Cloud function resource usage|3072GB/month|
|云函数外网出流量|5GB/月|
|Cloud function extranet outbound traffic|5GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|5GB|
|Database Capacity|5GB|
|数据库同时连接数|100个|
|Number of simultaneous database connections|100|
|数据库读操作数|50万次/天|
|Database read operations|500,000 times/day|
|数据库写操作数|30万次/天|
|Database write operations|300,000 times/day|
|数据库集合数量限制|200个|
|Limit on the number of database collections|200|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 旗舰版 1
#### Ultimate 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|500GB|
|Cloud storage capacity|500GB|
|云存储下载次数限制|3750万次/月|
|Cloud storage download limit|37.5 million times/month|
|云存储上传次数限制|1500万次/月|
|Cloud storage upload limit|15 million times/month|
|云存储CDN回源流量|500GB/月|
|Cloud storage CDN back-to-source traffic|500GB/month|
|云存储CDN流量|500GB/月|
|Cloud storage CDN traffic|500GB/month|
|云函数资源用量|500GB/月|
|Cloud function resource usage|500GB/month|
|云函数外网出流量|25GB/月|
|Cloud function extranet outbound traffic|25GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|149个|
|Limit on the number of cloud functions|149|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|10GB|
|Database Capacity|10GB|
|数据库同时连接数|400个|
|Number of simultaneous database connections|400|
|数据库读操作数|500万次/天|
|Database read operations|5 million times/day|
|数据库写操作数|300万次/天|
|Database write operations|3 million times/day|
|数据库集合数量限制|400个|
|Limit on the number of database collections|400|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 云函数版 3
#### Cloud Function Edition 3
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|50GB|
|Cloud storage capacity|50GB|
|云存储下载次数限制|750万次/月|
|Cloud storage download limit|7.5 million times/month|
|云存储上传次数限制|300万次/月|
|Cloud storage upload limit|3 million times/month|
|云存储CDN回源流量|50GB/月|
|Cloud storage CDN back-to-source traffic|50GB/month|
|云存储CDN流量|150GB/月|
|Cloud storage CDN traffic|150GB/month|
|云函数资源用量|150GB/月|
|Cloud function resource usage|150GB/month|
|云函数外网出流量|100GB/月|
|Cloud function extranet outbound traffic|100GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|20GB|
|Database Capacity|20GB|
|数据库同时连接数|300个|
|Number of simultaneous database connections|300|
|数据库读操作数|300万次/天|
|Database read operations|3 million times/day|
|数据库写操作数|200万次/天|
|Database write operations|2 million times/day|
|数据库集合数量限制|400个|
|Limit on the number of database collections|400|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 数据库版 3
#### Database Edition 3
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|50GB|
|Cloud storage capacity|50GB|
|云存储下载次数限制|750万次/月|
|Cloud storage download limit|7.5 million times/month|
|云存储上传次数限制|300万次/月|
|Cloud storage upload limit|3 million times/month|
|云存储CDN回源流量|50GB/月|
|Cloud storage CDN back-to-source traffic|50GB/month|
|云存储CDN流量|50GB/月|
|Cloud storage CDN traffic|50GB/month|
|云函数资源用量|50GB/月|
|Cloud function resource usage|50GB/month|
|云函数外网出流量|25GB/月|
|Cloud function extranet outbound traffic|25GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|200GB|
|Database Capacity|200GB|
|数据库同时连接数|500个|
|Number of simultaneous database connections|500|
|数据库读操作数|5000万次/天|
|Database read operations|50 million times/day|
|数据库写操作数|3000万次/天|
|Database write operations|30 million times/day|
|数据库集合数量限制|800个|
|Limit on the number of database collections|800|
|备份保留天数|14天|
|Backup retention days|14 days|

#### CDN版 3
#### CDN version 3
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|500GB|
|Cloud storage capacity|500GB|
|云存储下载次数限制|3750万次/月|
|Cloud storage download limit|37.5 million times/month|
|云存储上传次数限制|1500万次/月|
|Cloud storage upload limit|15 million times/month|
|云存储CDN回源流量|500GB/月|
|Cloud storage CDN back-to-source traffic|500GB/month|
|云存储CDN流量|10240GB/月|
|Cloud storage CDN traffic|10240GB/month|
|云函数资源用量|10240GB/月|
|Cloud function resource usage|10240GB/month|
|云函数外网出流量|10GB/月|
|Cloud function extranet outbound traffic|10GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|99个|
|Limit on the number of cloud functions|99|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|10GB|
|Database Capacity|10GB|
|数据库同时连接数|200个|
|Number of simultaneous database connections|200|
|数据库读操作数|150万次/天|
|Database read operations|1.5 million times/day|
|数据库写操作数|100万次/天|
|Database write operations|1 million times/day|
|数据库集合数量限制|300个|
|Limit on the number of database collections|300|
|备份保留天数|14天|
|Backup retention days|14 days|

#### 旗舰版 2
#### Ultimate 2
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|700GB|
|Cloud storage capacity|700GB|
|云存储下载次数限制|4500万次/月|
|Cloud storage download limit|45 million times/month|
|云存储上传次数限制|2000万次/月|
|Cloud storage upload limit|20 million times/month|
|云存储CDN回源流量|600GB/月|
|Cloud storage CDN back-to-source traffic|600GB/month|
|云存储CDN流量|1000GB/月|
|Cloud storage CDN traffic|1000GB/month|
|云函数资源用量|1000GB/月|
|Cloud function resource usage|1000GB/month|
|云函数外网出流量|100GB/月|
|Cloud function extranet outbound traffic|100GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|149个|
|Limit on the number of cloud functions|149|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|50GB|
|Database Capacity|50GB|
|数据库同时连接数|500个|
|Number of simultaneous database connections|500|
|数据库读操作数|1000万次/天|
|Database read operations|10 million times/day|
|数据库写操作数|500万次/天|
|Database write operations|5 million times/day|
|数据库集合数量限制|500个|
|Limit on the number of database collections|500|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 旗舰版 3
#### Ultimate 3
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|1000GB|
|Cloud storage capacity|1000GB|
|云存储下载次数限制|5000万次/月|
|Cloud storage download limit|50 million times/month|
|云存储上传次数限制|2500万次/月|
|Cloud storage upload limit|25 million times/month|
|云存储CDN回源流量|800GB/月|
|Cloud storage CDN back-to-source traffic|800GB/month|
|云存储CDN流量|2000GB/月|
|Cloud storage CDN traffic|2000GB/month|
|云函数资源用量|2000GB/月|
|Cloud function resource usage|2000GB/month|
|云函数外网出流量|200GB/月|
|Cloud function extranet outbound traffic|200GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|149个|
|Limit on the number of cloud functions|149|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|100GB|
|Database Capacity|100GB|
|数据库同时连接数|500个|
|Number of simultaneous database connections|500|
|数据库读操作数|2000万次/天|
|Database read operations|20 million times/day|
|数据库写操作数|1000万次/天|
|Database write operations|10 million times/day|
|数据库集合数量限制|600个|
|Limit on the number of database collections|600|
|备份保留天数|14天|
|Backup retention days|14 days|


#### 企业版 1
#### Enterprise Edition 1
|资源项|使用限制|
|Resource Items|Usage Restrictions|
|:-:|:-:|
|云存储容量|1300GB|
|Cloud storage capacity|1300GB|
|云存储下载次数限制|6000万次/月|
|Cloud storage download limit|60 million times/month|
|云存储上传次数限制|3000万次/月|
|Cloud storage upload limit|30 million times/month|
|云存储CDN回源流量|1000GB/月|
|Cloud storage CDN back-to-source traffic|1000GB/month|
|云存储CDN流量|4000GB/月|
|Cloud storage CDN traffic|4000GB/month|
|云函数资源用量|4000GB/月|
|Cloud function resource usage|4000GB/month|
|云函数外网出流量|400GB/月|
|Cloud function extranet outbound traffic|400GB/month|
|云函数并发限制|1000/云函数|
|Cloud function concurrency limit|1000/cloud function|
|云函数数量限制|199个|
|Limit on the number of cloud functions|199|
|云函数支持固定出口IP|√|
|Cloud function supports fixed export IP|√|
|数据库容量|200GB|
|Database Capacity|200GB|
|数据库同时连接数|500个|
|Number of simultaneous database connections|500|
|数据库读操作数|5000万次/天|
|Database read operations|50 million times/day|
|数据库写操作数|3000万次/天|
|Database write operations|30 million times/day|
|数据库集合数量限制|800个|
|Limit on the number of database collections|800|
|备份保留天数|14天|
|Backup retention days|14 days|