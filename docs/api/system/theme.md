
### uni.onThemeChange(CALLBACK)
监听系统主题状态变化。
Monitor system theme status changes.

**CALLBACK 返回参数**
**CALLBACK return parameter**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform difference description|
|:-|:-|:-|:-|
|theme|String|主题名称(dark, light)|App2.6.5+ 仅iOS|
|theme|String|Theme name (dark, light)|App2.6.5+ iOS only|

**示例**
**Example**

```javascript
uni.onThemeChange(function (res) {
	console.log(res.theme);
});
```

**注意**
**Notice**
- 自定义基座生效
- Custom base takes effect
- 仅 V3 编译支持，参考 manifest.json 配置
- Only V3 compilation support, refer to manifest.json configuration
