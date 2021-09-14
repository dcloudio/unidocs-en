通过在`package.json`文件中增加`uni-app`扩展节点，可实现自定义条件编译平台（如钉钉小程序、微信服务号等平台）。
By adding the `uni-app` extension node in the `package.json` file, a custom conditional compilation platform (such as DingTalk applet, WeChat service account, etc.) can be realized.

package.json扩展配置用法（拷贝代码记得去掉注释！）：
Package.json extended configuration usage (remember to remove the comment when copying the code!):

```json
{
    /**
     package.json其它原有配置 
	 Other original configuration of package.json
     */
    "uni-app": {// 扩展配置(Extended configuration)
        "scripts": {
            "custom-platform": { //自定义编译平台配置，可通过cli方式调用(Customized compilation platform configuration, which can be called through cli)
                "title":"自定义扩展名称", // 在HBuilderX中会显示在 运行/发行 菜单中(It will be displayed in the Run/Release menu in HBuilderX)
                "BROWSER":"",  //运行到的目标浏览器，仅当UNI_PLATFORM为h5时有效(The target browser to run, only valid when UNI_PLATFORM is h5)
                "env": {//环境变量(Environment variable)
                    "UNI_PLATFORM": "",  //基准平台(Benchmark platform)
                    "MY_TEST": "", // ... 其他自定义环境变量(...Other custom environment variables)
                 },
                "define": { //自定义条件编译(Custom conditional compilation)
                    "CUSTOM-CONST": true //自定义条件编译常量，建议为大写(Custom conditional compilation constants, uppercase is recommended)
                }
            }
        }    
    }
}


```

Tips：

- `UNI_PLATFORM`仅支持填写`uni-app`默认支持的基准平台，目前仅限如下枚举值：`h5`、`mp-weixin`、`mp-alipay`、`mp-baidu`、`mp-toutiao`、`mp-qq`
- `UNI_PLATFORM` only supports filling in the base platform supported by `uni-app` by default, currently only the following enumerated values: `h5`, `mp-weixin`, `mp-alipay`, `mp-baidu`, `mp -toutiao`, `mp-qq`
- `BROWSER` 仅在`UNI_PLATFORM`为`h5`时有效,目前仅限如下枚举值：`Chrome`、`Firefox`、`IE`、`Edge`、`Safari`、`HBuilderX`
- `BROWSER` is only valid when `UNI_PLATFORM` is `h5`, and currently limited to the following enumerated values: `Chrome`, `Firefox`, `IE`, `Edge`, `Safari`, `HBuilderX`
- `package.json`文件中不允许出现注释，否则扩展配置无效
- Comments are not allowed in the `package.json` file, otherwise the extended configuration will be invalid
- `vue-cli`需更新到最新版，HBuilderX需升级到 2.1.6+ 版本
- `vue-cli` needs to be updated to the latest version, HBuilderX needs to be upgraded to version 2.1.6+

#### 示例：钉钉小程序
#### Example: Dingding Mini Program

如下是一个自定义钉钉小程序（MP-DINGTALK）的package.json示例配置（拷贝代码记得去掉注释）：
The following is a sample configuration of package.json for a custom DingTalk applet (MP-DINGTALK) (remember to remove the comments when copying the code):

```json
"uni-app": {
	"scripts": {
		"mp-dingtalk": { 
		"title":"钉钉小程序", 
			"env": { 
				"UNI_PLATFORM": "mp-alipay" 
			},
			"define": { 
				"MP-DINGTALK": true 
			}
		}
	}
}
```

**在代码中使用自定义平台**
**Use a custom platform in the code**

开发者可在代码中使用`MP-DINGTALK`进行条件编译，如下：
Developers can use `MP-DINGTALK` in the code for conditional compilation, as follows:
```javascript
// #ifdef MP
小程序平台通用代码（含钉钉）
Mini Program Platform General Code (including DingTalk)
// #endif
// #ifdef MP-ALIPAY
支付宝平台通用代码（含钉钉）
Alipay platform general code (including DingTalk)
// #endif
// #ifdef MP-DINGTALK
钉钉平台特有代码
Dingding platform unique code
// #endif
```

**运行及发布项目**
**Run and release the project**

`vue-cli`开发者可通过如下命令，启动钉钉小程序平台的编译：
Developers of `vue-cli` can start the compilation of the DingTalk applet platform through the following command:
```
npm run dev:custom mp-dingtalk 
npm run build:custom mp-dingtalk
```

`HBuilderX`会根据`package.json`的扩展配置，在`运行`、`发行`菜单下，生成自定义菜单（钉钉小程序），开发者点击对应菜单编译运行即可，如下图：
`HBuilderX` will generate a custom menu (Dingding applet) under the `Run` and `Release` menus according to the extension configuration of `package.json`, and the developer can click the corresponding menu to compile and run, as shown in the figure below:

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/package-dingding.png)
![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/package-dingding.png)

Tips：钉钉小程序编译目录依然是`mp-alipay`，需通过支付宝开发者工具，选择“钉钉小程序”，然后打开该目录进行预览及发布。
Tips: The compiling directory of Dingding applet is still `mp-alipay`, you need to use Alipay developer tools, select "Dingding applet", and then open the directory to preview and publish.

#### 示例：微信服务号
#### Example: WeChat service account

如下是一个自定义微信服务号平台（H5-WEIXIN）的示例配置：
The following is an example configuration of a custom WeChat service account platform (H5-WEIXIN):
 
```json
"uni-app": {
    "scripts": {
        "h5-weixin": { 
            "title":"微信服务号",
            "BROWSER":"Chrome",  
            "env": {
                "UNI_PLATFORM": "h5"  
             },
            "define": { 
                "H5-WEIXIN": true 
            }
        }
    }    
}
```

开发者可在代码块中使用`H5-WEIXIN`变量，如下：
Developers can use the `H5-WEIXIN` variable in the code block as follows:

```
// #ifdef H5
H5平台通用代码（含微信服务号）
H5 platform general code (including WeChat service account)
// #endif
// #ifdef H5-WEIXIN
微信服务号特有代码
Unique code for WeChat service account
// #endif
```

`vue-cli`开发者可通过如下命令，启动微信服务号平台（H5-WEIXIN）平台的编译：
Developers of `vue-cli` can start the compilation of WeChat service account platform (H5-WEIXIN) platform through the following command:
```
npm run dev:custom h5-weixin 
npm run build:custom h5-weixin
```

`HBuilderX`会根据`package.json`的扩展配置，在`运行`、`发行`菜单下，生成自定义菜单（微信服务号），开发者点击对应菜单编译运行即可，如下图：
`HBuilderX` will generate a custom menu (WeChat service account) under the `Run` and `Release` menus according to the extension configuration of `package.json`, and the developer can click the corresponding menu to compile and run, as shown in the figure below:

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/package-h5-weixin.png)
