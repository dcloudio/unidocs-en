### uni.getLocale()

获取当前设置的语言
Get the currently set language

如果当前应用设置过语言，会获取到之前设置的语言，未设置会使用系统语言。
If the current application has set the language, previously set language will be applied, or otherwise the system language will be used.

### uni.setLocale(locale)

设置当前语言
Set current language

**参数说明**
**Parameter Description**

|参数名|类型|必填|
| Parameter name| Type| Required|
|:-|:-|:-|
|locale|String|是|
| locale| String| Yes|

### uni.onLocaleChange(callback)

用于监听应用语言切换
Used to listen to the application language switching

**callback返回参数说明**
**Description of callback return parameter**

|参数名|类型|说明|
| Parameter name| Type| Instruction|
|:-|:-|:-|
|locale|String|当前语言|
| locale| String| Current language|

#### 提示
#### Tip

* 组件和接口显示会根据设置的语言环境自动切换，未支持的系统语言环境会显示为英文。
* Display of components and interfaces will automatically switch according to the set language environment, and the unsupported system language environment will be displayed in English.
* 框架内置如下语言：
* The following languages are built into the framework:
  * 英语 en
  * en
  * 中文简体 zh-Hans
  * Simplified Chinese zh-Hans
  * 繁体 zh-Hant
  * Traditional Chinese zh-Hant
  * 法语 fr
  * fr
  * 西班牙语 es
  * es
* 在 [manifest.json](/collocation/manifest) -> locale 可以配置应用的默认语言。
* You can configure the default language of the application in [manifest.json](/collocation/manifest) -> locale.
* 仅 3.1.5 - 3.2.4 版本会自动使用 vue-i18n 内配置的语言。
* Only versions 3.1.5-3.2.4 will automatically apply the language configured in vue-i18n.