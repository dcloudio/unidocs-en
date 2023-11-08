# 计费模式

## 计费规则

uni实人认证采用 **阶梯累进** 的方式进行计费，即按照调用次数划分费率区间，根据不同区间费率分别计算价格，相加之和为最终收费总额。具体计费规则详见下。

|调用次数	|0 < 调用量 ≤ 1 万	|1 万 < 调用量 ≤ 10 万	|10 万 < 调用量 ≤ 20 万|20 万 < 调用量 ≤ 30 万|30 万 < 调用量 ≤ 50 万|50 万以上	|
|:----:		|:----:				|:----:					|:----:					|:----:	|:----:				|:----:		|
|区间费率	|0.85 元/次			|0.8 元/次				|0.7 元/次				|0.6 元/次		|0.5 元/次		|0.4 元/次	|

对比其它主流厂商的同类产品，uni实人认证有明显的价格优势：

- uni实人认证**比云厂商的按量计费便宜**：
	* 阿里云金融级实人认证产品的标准价（即按量计费定价，也可以称为后付费）为1元/次，腾讯云为1.2元/次，调用次数多，也没有折扣；uni实人认证从0.85元/次起步，采用阶梯定价，调用越多，价格越便宜。详见：[阿里云金融级实人认证产品定价](https://help.aliyun.com/document_detail/146581.html#section-o3s-rcb-645)、[腾讯云增强版人脸核身价格说明](https://cloud.tencent.com/document/product/1007/84321#.E5.A2.9E.E5.BC.BA.E7.89.88.E4.BA.BA.E8.84.B8.E6.A0.B8.E8.BA.AB.E4.BB.B7.E6.A0.BC.E8.AF.B4.E6.98.8E)
- uni实人认证**比云厂商的资源包便宜**：
	* 以1万次调用为例：购买阿里云资源包需1万元，折合1.0元/次；购买腾讯云资源包需11000元，折合1.1元/次；uni实人认证为0.85元/次；
	* 以10万次调用为例：购买阿里云资源包需要9万元，折算0.9元/次；购买腾讯云资源包需要10万元，折算1.0元/次；使用uni实人阶梯定价，10万次的费用为：`0.85*10000 + 0.8*90000 = 80500`，折算0.805元/次；
	* 以100万次调用为例：购买阿里云资源包需要70万元（两个50万次资源包），折算0.7元/次；购买腾讯云资源包需要80万元，折算0.8元/次；使用uni实人阶梯定价，100万次的费用为：`0.85*10000 + 0.8*90000 + 0.7*100000 + 0.6*100000 + 0.5*200000 + 0.4*500000 = 510500`，折算0.511元/次；
	* 可以看到，调用量越大，uni实人认证的阶梯计费越便宜；
	* 另外，云厂商的资源包都是有有效期的（通常为1年），过期未用完，资源包会自动作废；而uni实人认证不存在有效期的概念；
- 如果您的App调用uni实人认证超过100万次，或承诺在短期内消耗完毕，可以联系bd@dcloud.io沟通限时资源包折扣。
- 如果您是外包厂商，或者希望作为渠道商代销uni实人认证产品，也欢迎联系bd@dcloud.io


下方为其他同类型产品报价参考。

- [阿里云官方报价](https://help.aliyun.com/document_detail/146875.html)

**金融级实人认证流量包**

<table>
  <thead>
	 <tr>
		<th>规格（次数）</th>
		<th>目录价（元）</th>
		<th>相对后付费方式的折扣比例</th>
	 </tr>
  </thead>
  <tbody>
	 <tr>
		<td>100</td>
		<td>100</td>
		<td>无</td>
	 </tr>
	 <tr>
		<td>1万</td>
		<td>10,000</td>
		<td>无</td>
	 </tr>
	 <tr>
		<td>5万</td>
		<td>50,000</td>
		<td>无</td>
	 </tr>
	 <tr>
		<td>10万</td>
		<td>90,000</td>
		<td>9折</td>
	 </tr>
	 <tr>
		<td>20万</td>
		<td>160,000</td>
		<td>8折</td>
	 </tr>
	 <tr>
		<td>50万</td>
		<td>350,000</td>
		<td>7折</td>
	 </tr>
	 <tr>
		<td>150万</td>
		<td>1,050,000</td>
		<td>7折</td>
	 </tr>
  </tbody>
</table>

- [腾讯云官方报价](https://cloud.tencent.com/document/product/1007/84321#.E5.A2.9E.E5.BC.BA.E7.89.88.E4.BA.BA.E8.84.B8.E6.A0.B8.E8.BA.AB.E4.BB.B7.E6.A0.BC.E8.AF.B4.E6.98.8E)

<table style="width: 100%">
    <tbody>
        <tr>
            <th rowspan="2">计费标签</th>
            <th>后付费</th>
            <th colspan="2">
                <center>预付费</center>
            </th>
        </tr>
        <tr>
            <th>单价</th>
            <th>资源包规格</th>
            <th>资源包价格</th>
        </tr>
        <tr>
            <td rowspan="6">增强版人脸核身（权威库）-APP</td>
            <td rowspan="6">1.2元/次</td>
            <td>1千次</td>
            <td>1,150元</td>
        </tr>
        <tr>
            <td>1万次</td>
            <td>11,000元</td>
        </tr>
        <tr>
            <td>10万次</td>
            <td>100,000元</td>
        </tr>
        <tr>
            <td>20万次</td>
            <td>180,000元</td>
        </tr>
        <tr>
            <td>50万次</td>
            <td>400,000元</td>
        </tr>
        <tr>
            <td>100万次</td>
            <td>800,000元</td>
        </tr>
    </tbody>
</table>
说明：
illustrate:

- 调用次数：协议期限内成功调用实人认证服务的总次数。协议期限指从开通实人认证服务之日起延后一年，每年重新执行阶梯计费。例如：用户在 2023年01月29日 开通的实人认证，那么在 2023年01月29日 到 2024年01月28日 期间产生的调用次数会持续累加，2024年01月29日 后将会重新计算，以此类推。
- Number of calls: the total number of successful calls to the real person authentication service within the agreement period. The term of the agreement refers to the extension of one year from the date of opening the real person authentication service, and the step billing will be re-executed every year. For example: if the user opened the real-person authentication on January 29, 2023, the number of calls generated during the period from January 29, 2023 to January 28, 2024 will continue to accumulate, and will be recalculated after January 29, 2024 , and so on.

::: warning 注意
::: warning note
- 成功调用指的是请求已经成功进行过人脸核身认证，无论最终核对结果是否匹配都会计费。也就是说，成功返回了结果，证明这个操作者输入的身份证和人脸并不匹配，也一样会计费。这是业内通用规则。
- A successful call means that the request has been successfully authenticated by face verification, and it will be billed no matter whether the final verification result matches or not. That is to say, the result is successfully returned, which proves that the ID card entered by the operator does not match the face, and the bill is also charged. This is a common rule in the industry.
:::

## 结算方式

开发者完成充值后进行调用，实人认证的充值余额与uniCloud其他产品的余额不互通。
The developer calls after completing the recharge, and the recharge balance of real-person authentication is not interoperable with the balance of other uniCloud products.

因认证结果反馈有时差，会先冻结余额再解冻清算。即：
Due to the time difference in the feedback of the verification results, the balance will be frozen first and then unfrozen for liquidation. Right now:

1. 每次请求实人认证服务后，计费系统首先判断未冻结余额是否足够，不足会返回错误，开发者需充值余额。
1. After each request for real-person authentication service, the billing system first judges whether the unfrozen balance is sufficient. If it is insufficient, an error will be returned, and the developer needs to recharge the balance.
2. 如未冻结余额足够本次调用的费用，则将该次调用对应的费用从余额中先冻结，然后请求认证。
2. If the unfrozen balance is sufficient for the fee of this call, the fee corresponding to this call will be frozen from the balance first, and then request authentication.
3. 认证完成，如调用成功（包括人脸不匹配），从冻结余额中扣除本次费用；如果调用失败，则需要等待本次请求产生的认证凭证过期失效后，再解冻并返还本次请求所冻结的金额。
3. After the authentication is completed, if the call is successful (including face mismatch), the fee will be deducted from the frozen balance; if the call fails, you need to wait for the authentication certificate generated by this request to expire before unfreezing and returning this request The frozen amount.

::: warning 注意
- 认证凭证有效期为`30分钟`
- 当余额全部被冻结时，会出现有余额但无法调用服务的情况
- When the balance is all frozen, there will be a situation where there is a balance but the service cannot be called
:::


## 费用计算示例

在协议期限内，开发者将用户的身份信息发给实人认证服务，无论发送多少次，收费都按实际成功调用次数（不是成功匹配）扣取。
During the term of the agreement, the developer sends the user's identity information to the real person authentication service. No matter how many times it is sent, the fee will be deducted according to the actual number of successful calls (not successful matching).

- 如果调用成功 10000 次，则费用金额 = 10000 次 x 0.85 元/次 = 8500 元
- 如果调用成功 110000 次，则费用金额 = 10000 次 x 0.85 元/次+100000 次 x 0.8 元/次 = 88500 元
- 如果调用成功 560000 次，则费用金额 = 10000 次 x 0.85 元/次+100000 次 x 0.8 元/次+100000 次 x 0.7 元/次+100000 次 x 0.6 元/次 +200000 次 x 0.5 元/次  + 50000 次 x 0.4 元/次=338500 元

## 配套uniCloud成本

实人认证需要依赖`uniCloud`云服务。如果开发者的业务不在uniCloud上，需中转到开发者自己的业务服务器上，会产生额外的uniCloud云函数费用。但这个成本可以忽略不计，因为每次云函数的调用非常便宜。

举例，使用uniCloud阿里云版，每次实人认证需要调用2次云函数，大约需要消耗uniCloud费用0.0000278元，**可以忽略不计**。

如果您使用的实人认证档位是0.85元/次，那么加上云函数的费用，就是0.8500278元/次。

如果您需要了解详细的云函数费用计算过程，如下：

`实人认证`业务涉及费用的部分主要是云函数/云对象的使用量、调用次数、和出网流量。
接下来，我们对不同资源，分别进行费用评估。

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以简单得出如下公式：

`云函数/云对象费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`

其中：
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- 调用次数 = 认证次数*2


我们假设如下数据模型：

- 云函数内存：512M，即0.5G （云函数内存默认为512M，用户可以自定义设置，最低可设置为128M。如果您仅使用实人认证，没有其他复杂业务，那么内存设为128M可以进一步的降低费用）
- 云函数平均单次执行时长：200毫秒，即0.2秒
- 实人认证业务平均每日调用次数：10000次
- 出网流量：单次请求 2 KB

按照如上公式，其`实人认证`业务云函数每天的费用为：

```
云函数费用（天） = (资源使用量 * 0.000110592  + 云函数调用次数 * 0.0133 / 10000 + 出网流量 * 0.8) * 2
			  = (云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8) * 2
			  = (0.5G * 0.2S * 10000 * 0.000110592 + 10000 * 0.0133/10000 + 10000 * 2 * 0.8 / (1024 * 1024) ) * 2
			  = (0.110592 + 0.0133 + 0.0152587890625) * 2
			  = 0.1391507890625 * 2（元）
			  ≈ 0.278（元）
```

结论：如果你的`实人认证`业务平均每天进行认证次数为10000次，使用阿里云正式版云服务空间后，对应云函数每天大概消耗0.278元，对比之前的实人认证单次费用，平均每次调用多花0.0000278元，可忽略不计。
