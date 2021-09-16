#### uni-app自动化测试
#### uni-app automated testing

uni-app提供了一批API，这些API可以操控uni-app应用，包括运行、跳转页面、触发点击等，并可以获取页面元素状态、进行截图，从而实现对uni-app项目进行自动化测试的目的。
uni-app provides a batch of APIs. These APIs can control uni-app applications, including running, jumping to pages, triggering clicks, etc., and can obtain page element status and take screenshots, thereby realizing automated testing of uni-app projects Purpose.

本功能使用到了业内常见的测试库如jest（MIT协议）。
This function uses common test libraries in the industry such as jest (MIT protocol).

#### 特性
#### Features

开发者可以利用API做以下事情：
Developers can use the API to do the following:

* 控制跳转到指定页面
* Control jump to the specified page
* 获取页面数据
* Get page data
* 获取页面元素状态
* Get the status of page elements
* 触发元素绑定事件
* Trigger element binding events
* 调用 uni 对象上任意接口
* Call any interface on the uni object

**平台差异说明**
**Platform difference description**
|App|H5|
|:-:|:-:|
|√(ios仅支持模拟器)|√|
|√(ios only supports simulator)|√|

目前仅 [cli](https://uniapp.dcloud.net.cn/quickstart?id=_2-通过vue-cli命令行) 工程支持。有利于持续集成。
Currently only [cli](https://uniapp.dcloud.net.cn/quickstart?id=_2-via vue-cli command line) project support. Conducive to continuous integration.

[HBuilderX uniapp自动化测试插件](https://ext.dcloud.net.cn/plugin?id=5708), 支持在HBuilderX内对uniapp普通项目、cli项目进行自动化测试。此插件简化了测试环境安装、测试用例创建、测试运行、测试设备选择等步骤。
[HBuilderX uniapp automated testing plug-in](https://ext.dcloud.net.cn/plugin?id=5708), supports automated testing of uniapp common projects and cli projects in HBuilderX. This plug-in simplifies the steps of test environment installation, test case creation, test operation, and test equipment selection.

推荐使用方式：研发提交源码到版本库后，持续集成系统自动拉取源码，自动运行自动化测试。
Recommended method of use: After R&D submits the source code to the repository, the continuous integration system automatically pulls the source code and automatically runs automated tests.

创建 `cli` 工程
Create a `cli` project
```
# 全局安装vue-cli
$ npm install -g @vue/cli
$ cd ... // 切换到工程保存目录
$ vue create -p dcloudio/uni-preset-vue#alpha my-project
```

如果之前是HBuilderX工程，则把HBuilderX工程内的文件（除 unpackage、node_modules 目录）拷贝至 vue-cli 工程的 src 目录。
If it was an HBuilderX project before, copy the files (except unpackage and node_modules directories) in the HBuilderX project to the src directory of the vue-cli project.

在 vue-cli 工程内重新安装 npm 依赖（如果之前使用了 npm 依赖的话）
Reinstall npm dependencies in the vue-cli project (if npm dependencies were used before)

cli创建项目时若选择`hello uni-app`模板，可看到其中已经自带部分测试例。
If you select the `hello uni-app` template when creating a project with cli, you can see that some test cases are already included in it.

已有 `cli` 工程
Existing `cli` project

1. 更新依赖包 `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
1. Update dependency package `@dcloudio/*` >= `2.0.0-alpha-27920200613002`

2. 安装依赖包 `@dcloudio/uni-automator`
2. Install the dependency package `@dcloudio/uni-automator`
```
npm install @dcloudio/uni-automator --save-dev
```
3. package.json script节点新增命令
3. New commands for package.json script node
```
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i"
```

#### H5平台测试流程
#### H5 platform test process

1. 进入工程目录，安装依赖
1. Enter the project directory, install dependencies
```
npm install puppeteer --save-dev
```
注意： 从v3.0.0开始，`Puppeteer` 开始依赖于Node 10.18.1+
Note: Starting from v3.0.0, `Puppeteer` depends on Node 10.18.1+

2. 根据API编写测试的js代码，参考测试用例
2. Write test js code according to API, refer to test case
API文档见：[https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
API documentation see: [https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
测试文件目录配置见 [jest.config.js](collocation/auto/api?id=jestconfigjs)
For the test file directory configuration, see [jest.config.js](collocation/auto/api?id=jestconfigjs)
3. 运行测试
3. Run the test
```
npm run test:h5
```

4. 测试结果
4. Test results
```
>> cross-env UNI_PLATFORM=h5 jest -i
...
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```

更多配置参考 [jest.config.js](collocation/auto/api?id=jestconfigjs)
For more configuration reference [jest.config.js](collocation/auto/api?id=jestconfigjs)

#### App-Android测试流程
#### App-Android test process

1. 配置全局 `adb` 环境变量
1. Configure the global `adb` environment variable

2. 配置 `Hbuilder` 调试基座/自定义基座 `android_base.apk` 目录，参考 `jest.config.js`
2. Configure `Hbuilder` debug base/custom base `android_base.apk` directory, refer to `jest.config.js`

3. 创建 `cli` 工程/现有 `cli` 工程
3. Create `cli` project/existing `cli` project
切换到工程目录，安装依赖包 `adbkit`
Switch to the project directory and install the dependency package `adbkit`

```
npm install adbkit --save-dev
```

4. 编写测试代码，参考测试用例
4. Write test code, refer to test case

5. 运行测试
5. Run the test
```
npm run test:android
```


#### App-iOS测试流程
#### App-iOS testing process


目前仅支持 iOS 模拟器（需要mac电脑安装xcode）
Currently only supports iOS simulator (requires mac computer to install xcode)

1. 安装依赖 `node-simctl`
1. Installation depends on `node-simctl`
```
npm install node-simctl --save-dev
```

2. 配置模拟器id，参考 `jest.config.js`
2. Configure the simulator id, refer to `jest.config.js`

3. 配置 `Hbuilder` 调试基座/自定义基座 `Pandora_simulator.app` 目录，参考 `jest.config.js`
3. Configure `Hbuilder` debugging base/custom base `Pandora_simulator.app` directory, refer to `jest.config.js`

4. 编写测试代码，参考测试用例
4. Write test code, refer to test case

5. 运行测试
5. Run the test
```
npm run test:ios
```



#### 测试示例
#### Test example


使用 hello uni-app 工程测试 H5 平台
Use the hello uni-app project to test the H5 platform

1. 创建 `cli` 项目，选择 `hello uni-app`
1. Create a `cli` project, select `hello uni-app`
```
$ vue create -p dcloudio/uni-preset-vue#alpha my-hello-uni-app
# 进入项目目录
# Enter the project directory
$ cd my-hello-uni-app
```

2. 安装 `puppeteer`
2. Install `puppeteer`
```
npm install puppeteer
```

3. 创建测试文件 `src/pages/tabBar/component/component.test.js`，复制下面代码
3. Create the test file `src/pages/tabBar/component/component.test.js`, copy the following code

```
describe('pages/tabBar/component/component.nvue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        // ReLaunch to the home page and get the home page page object (where program is a global object automatically injected by uni-automator)
		page = await program.reLaunch('/pages/tabBar/component/component')
        await page.waitFor(1000)
    })

    it('u-link', async () => {
        // 检测首页u-link的文本内容
		// Detect the text content of the homepage u-link
        expect(await (await page.$('.hello-link')).text()).toBe('https://uniapp.dcloud.io/component/')
    })

    it('视图容器', async () => {
        // 检测首个 panel 是视图容器
		// Detect that the first panel is a view container
        expect(await (await page.$('.uni-panel-text')).text()).toBe('视图容器')
        // 检测首个 panel 切换展开
		// Detect the first panel to switch to expand
        const panelH = await page.$('.uni-panel-h');
        expect(await panelH.attribute('class')).toContain('uni-panel-h')
        await panelH.tap()
        await page.waitFor(500)
        // 已展开
		// expanded
        expect(await panelH.attribute('class')).toContain('uni-panel-h-on')
    })

    it('.uni-panel', async () => {
      const lists = await page.$$('.uni-panel')
      expect(lists.length).toBe(9)
    })

    it('.uni-panel action', async () => {
      const listHead = await page.$('.uni-panel-h')
      expect(await listHead.attribute('class')).toContain('uni-panel-h-on')
      await listHead.tap()
      await page.waitFor(200)
      expect(await listHead.attribute('class')).toContain(
        'uni-panel-h',
      )

      // 展开第一个 panel，点击第一个 item，验证打开的新页面是否正确
	  // Expand the first panel and click on the first item to verify that the new page opened is correct
      await listHead.tap()
      await page.waitFor(200)
      const item = await page.$('.uni-navigate-item')
      await item.tap()
      await page.waitFor(500)
      expect((await program.currentPage()).path).toBe('pages/component/view/view')
      await page.waitFor(500)

      // 执行 navigateBack 验证是否返回
	  // Execute navigateBack to verify whether it returns
      expect((await program.navigateBack()).path).toBe('pages/tabBar/component/component')
    })
})
```

4. 运行测试
4. Run the test
```
npm run test:h5
```

5. 测试结果
5. Test results
```
> cross-env UNI_PLATFORM=h5 jest -i
 PASS  src/pages/tabBar/component/component.test.js (14.789s)
  pages/tabBar/component/component.nvue
    √ u-link (8ms)
    √ 视图容器 (518ms)
    √ .uni-panel (2ms)
    √ .uni-panel action (4447ms)
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```



##### 屏幕截图示例
##### Screenshot example
```
describe('pages/API/set-navigation-bar-title/set-navigation-bar-title.vue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        // ReLaunch to the home page and get the home page page object (where program is a global object automatically injected by uni-automator)
		page = await program.reLaunch('/pages/API/set-navigation-bar-title/set-navigation-bar-title')
        await page.waitFor(3000)
    })

    it('.uni-hello-text', async () => {
      var image = await program.screenshot({
        path: "set-navigation-bar-title.png"  
		// 默认项目根目录
		// Default project root directory
      })
      console.log(image)
    })
})
```

更多测试示例见： hello uni-app
For more test examples, see: hello uni-app

GitHub： [https://github.com/dcloudio/hello-uniapp](https://github.com/dcloudio/hello-uniapp)



#### jest.config.js

```
module.exports = {
  globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
  testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
  testEnvironmentOptions: {
    compile: true,
    h5: { 
		// 为了节省测试时间，可以指定一个 H5 的 url 地址，若不指定，每次运行测试，会先 npm run dev:h5
        // In order to save test time, you can specify a H5 url address. If you don’t specify it, each time you run the test, it will first npm run dev:h5
	  url: "http://192.168.x.x:8080/h5/",
      options: {
        headless: false 
		// 配置是否显示 puppeteer 测试窗口
		// Configure whether to display the puppeteer test window
      }
    },
    "app-plus": { 
		// 需要安装 HBuilderX
        // Need to install HBuilderX
	  android: {
        executablePath: "HBuilderX/plugins/launcher/base/android_base.apk" // apk 目录
      },
      ios: {
        // uuid 必须配置，目前仅支持模拟器，可以（xcrun simctl list）查看要使用的模拟器 uuid
        // uuid must be configured, currently only supports simulators, you can (xcrun simctl list) to view the simulator to be used uuid
		id: "",
        executablePath: "HBuilderX/plugins/launcher/base/Pandora_simulator.app" // ipa 目录
      }
    }
  },
  testTimeout: 15000,
  reporters: [
    'default'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'], // 测试文件目录
  testPathIgnorePatterns: ['/node_modules/']
}

```



**注意事项**
**Precautions**

1. 如果页面涉及到分包加载问题，`reLaunch` 获取的页面路径可能会出现问题 ，解决方案如下 ：
1. If the page involves sub-package loading, there may be problems with the page path obtained by `reLaunch`. The solution is as follows:

    ```javascript
    // 重新 reLaunch至首页，并获取 page 对象（其中 program 是 uni-automator 自动注入的全局对象）
    // ReLaunch to the home page and get the page object (where program is a global object automatically injected by uni-automator)
	page = await program.reLaunch('/pages/extUI/calendar/calendar')
    page = await program.currentPage()
    ```

2. 分包中的页面，打开之后要延迟时间长一点，否则不能正确获取到页面信息
2. After opening the pages in the subcontract, the delay time should be longer, otherwise the page information cannot be obtained correctly