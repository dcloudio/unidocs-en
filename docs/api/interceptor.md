### uni.addInterceptor(STRING, OBJECT)
添加拦截器
Add interceptor

**STRING 参数说明**
**STRING parameter description**

需要拦截的`api`名称，如：`uni.addInterceptor('request', OBJECT)` ，将拦截 `uni.request()`
Name of the `api` that needs to be intercepted, such as `uni.addInterceptor('request', OBJECT)`, which will intercept `uni.request()`

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名		|类型			|必填	|默认值	|说明					|平台差异说明	|
| Parameter name| Type| Required| Defaults| Instruction| Platform difference description|
|:-				|:-				|:-		|:-			|:-						|:-						|
|invoke		|Function	|否		|				|拦截前触发		|							|
| invoke| Function| No| | Trigger before interception| |
|success	|Function	|否		|				|成功回调拦截	|							|
| success| Function| No| | Successful callback interception| |
|fail			|Function	|否		|				|失败回调拦截	|							|
| fail| Function| No| | Failed callback interception| |
|complete	|Function	|否		|				|完成回调拦截	|							|
| complete| Function| No| | Complete callback interception| |


**示例**
**Example**

```javascript
uni.request({
    //仅为示例，并非真实接口地址。
    //Only for illustration, not a true interface address.
    url: 'request/login',
    success: (res) => {
        console.log(res.data);
        // 打印： {code:1,...}
        //Print: {code:1,...}
    }
});


uni.addInterceptor('request', {
  invoke(args) {
    // request 触发前拼接 url 
    //Splice url before triggering request 
    args.url = 'https://www.example.com/'+args.url
  },
  success(args) {
    // 请求成功后，修改code值为1
    //After a successful request, modify the code value to 1
    args.data.code = 1
  }, 
  fail(err) {
    console.log('interceptor-fail',err)
  }, 
  complete(res) {
    console.log('interceptor-complete',res)
  }
})

```

### uni.removeInterceptor(STRING)
删除拦截器
Remove interceptor

**STRING 参数说明**
**STRING parameter description**

需要删除拦截器的`api`名称
Name of `api` that needs to delete the interceptor

**示例**
**Example**

```javascript

uni.removeInterceptor('request')

```

##### 拦截器的适用场景非常多，比如路由拦截，权限引导等。
##### Interceptors can be used in many scenarios including route interception, authority booting and so on.
> 你可以参考插件市场,拦截器应用示例：图片选择api时无权限，引导用户快捷打开系统设置：[https://ext.dcloud.net.cn/plugin?id=5095](https://ext.dcloud.net.cn/plugin?id=5095)
> You can refer to the plug-in market for an example of the application of the interceptor: the picture has no permission when selecting api, and guide the user to quickly open the system settings: [https://ext.dcloud.net.cn/plugin?id=5095](https://ext.dcloud.net.cn/plugin?id=5095)