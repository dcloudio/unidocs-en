**本章内容仅针对腾讯云，阿里云暂不支持**
**The content in this chapter is only for Tencent Cloud, and Alibaba Cloud does not support it temporarily**

### uniCloud.auth()

获取`auth`的引用
Get a reference to `auth`

```js
const auth = uniCloud.auth();
```

### auth.getUserInfo()

获取用户信息
Get user information

```js
const {
  uid, //云开发用户唯一ID(Cloud development user unique ID)
  customUserId //自定义登录传入的用户Id(User ID passed in by custom login)
} = auth.getUserInfo()
```

### auth.getClientIP()

获取客户端IP地址，上传并运行时返回空
Get the client IP address, and return empty when uploading and running

```js
const IP = auth.getClientIP()
```

### auth.createTicket(String customUserId, Object createTicketOptions)@createticket

此Api现在直接调用有问题，正在修复。可以先使用下面的方式调用
There is a problem with the direct call of this Api, and it is being fixed. You can first use the following method to call

```js
const app = uniCloud.init({
  spaceId: 'your-space-id',
  credentials: require('./credentials.json')
})

const auth = app.auth();

let customUserId = '123456';

const ticket = auth.createTicket(customUserId, {
  refresh: 10 * 60 * 1000 // 每十分钟刷新一次登录态， 默认为一小时(Refresh the login status every ten minutes, the default is one hour)
});
```


开发者可以使用云函数创建登录凭证，提供给客户端进行登录操作。[详见](uniCloud/authentication.md#自定义登录)
Developers can use cloud functions to create login credentials and provide them to the client for login operations. [See details](uniCloud/authentication.md#Custom login)

**createTicketOptions参数说明**
**createTicketOptions parameter description**

|参数名	|类型		|必填	|默认值	|说明					|平台差异说明	|
|Parameter name |Type |Required |Default value |Description |Platform difference description |
|:-			|:-			|:-		|:-			|:-						|:-						|
|refresh|Number	|否		|3600000|token刷新间隔|-						|
|refresh|Number |No |3600000|token refresh interval|- |

```js
let customUserId = '123456';

const ticket = auth.createTicket(customUserId, {
  refresh: 10 * 60 * 1000 // 每十分钟刷新一次登录态， 默认为一小时(Refresh the login status every ten minutes, the default is one hour)
});
// 然后把 ticket 发送给客户端，由客户端调用auth.signInWithTicket()使用
// Then send the ticket to the client, which is used by the client by calling auth.signInWithTicket()
```
