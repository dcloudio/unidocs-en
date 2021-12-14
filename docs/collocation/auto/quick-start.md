#### uni-app自动化测试
#### Uni-app automated testing

uni-app提供了一批API，这些API可以操控uni-app应用，包括运行、跳转页面、触发点击等，并可以获取页面元素状态、进行截图，从而实现对uni-app项目进行自动化测试的目的。
Uni-app provides a batch of APIs, which can control uni-app applications, including running, jumping pages, triggering clicks, etc., and can obtain element states in the page as well as take screenshots, so as to realize the purpose of automated testing for uni-app projects.

本功能使用到了业内常见的测试库如jest（MIT协议）。
This function uses the common test libraries in the industry such as jest (MIT protocol).

#### 特性
#### Features
开发者可以利用API做以下事情：
Developers can utilize API to do the following things:

* 控制跳转到指定页面
* Control the jump to a specified page
* 获取页面数据
* Get page data
* 获取页面元素状态
* Get page element status
* 触发元素绑定事件
* Trigger element binding event
* 调用 uni 对象上任意接口
* Call any interface on uni object

**平台差异说明**
**Platform difference description**

|App|H5|
|:-:|:-:|
|√(ios仅支持模拟器)|√|
| √(iOS only supports simulator)| √|


目前仅 [cli](https://uniapp.dcloud.net.cn/quickstart?id=_2-通过vue-cli命令行) 工程支持。有利于持续集成。
Currently only the [cli](https://uniapp.dcloud.net.cn/quickstart?id=_2-%E9%80%9A%E8%BF%87vue-cli%E5%91%BD%E4%BB%A4%E8%A1%8C) project is supported. Facilitate continuous integration.

[HBuilderX uniapp自动化测试插件](https://ext.dcloud.net.cn/plugin?id=5708), 支持在HBuilderX内对uniapp普通项目、cli项目进行自动化测试。此插件简化了测试环境安装、测试用例创建、测试运行、测试设备选择等步骤。
[HBuilderX uniapp automated testing plug-in](https://ext.dcloud.net.cn/plugin?id=5708) supports automatic testing of uniapp common projects and cli projects in HBuilderX. This plug-in simplifies the steps such as test environment installation, test case creation, test run and test device selection.
推荐使用方式：研发提交源码到版本库后，持续集成系统自动拉取源码，自动运行自动化测试。
Recommended usage: after R&D submits the source code to the version library, the continuous integration system automatically pulls the source code and automatically runs the automated test.


创建 `cli` 工程
Create the `cli` project
```
# Globally installed vue-cli
$ npm install -g @vue/cli
// 切换到工程保存目录
// Switch to the project saving directory
$ cd ...
$ vue create -p dcloudio/uni-preset-vue#alpha my-project
```

如果之前是HBuilderX工程，则把HBuilderX工程内的文件（除 unpackage、node_modules 目录）拷贝至 vue-cli 工程的 src 目录。
If it was previously the HBuilderX project, copy the files in the HBuilderX project (except the unpackage and node_modules directories) to the src directory of the vue-cli project.
在 vue-cli 工程内重新安装 npm 依赖（如果之前使用了 npm 依赖的话）
Reinstall npm dependencies within the vue-cli project (if npm dependencies were used before)

cli创建项目时若选择`hello uni-app`模板，可看到其中已经自带部分测试例。
If you select the `hello uni-app` template when creating the project with cli, you can see that some test cases are already included in it.

已有 `cli` 工程
`cli` project is already available
1. 更新依赖包 `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
1. Update dependency package `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
2. 安装依赖包 `@dcloudio/uni-automator`
2. Install dependency package `@dcloudio/uni-automator`
```
npm install @dcloudio/uni-automator --save-dev
```
3. package.json script节点新增命令
3. Add package.json script node command
```
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i"
```

#### H5平台测试流程
#### H5 platform test process

1. 进入工程目录，安装依赖
1. Enter the project directory and install dependencies
```
npm install puppeteer --save-dev
```
注意： 从v3.0.0开始，`Puppeteer` 开始依赖于Node 10.18.1+
Notice: From v3.0.0+, `Puppeteer` depends on Node 10.18.1+


2. 根据API编写测试的js代码，参考测试用例
2. Write the js code of the test according to API,
API文档见：[https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
and refer to the test case API document: [https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api).
测试文件目录配置见 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
For the test file directory configuration, see [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)

3. 运行测试
3. Run test
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

更多配置参考 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
For more configuration, please refer to [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)


#### App-Android测试流程
#### App-Android testing process

1. 配置全局 `adb` 环境变量
1. Configure global `adb` environment variables

2. 配置 `Hbuilder` 调试基座/自定义基座 `android_base.apk` 目录，参考 `jest.config.js`
2. Configure `Hbuilder`Debug base/custom base`android_base.apk` directory, refer to `jest.config.js`

3. 创建 `cli` 工程/现有 `cli` 工程
3. Create `cli`project/existing `cli` project
切换到工程目录，安装依赖包 `adbkit`
to switch to the project directory and install the dependent package `adbkit`
```
npm install adbkit --save-dev
```

4. 编写测试代码，参考测试用例
4. Write test code and refer to test cases

5. 运行测试
5. Run test
```
npm run test:android
```


#### App-iOS测试流程
#### App-iOS testing process

目前仅支持 iOS 模拟器（需要mac电脑安装xcode）
Only iOS simulator is currently supported (requires xcode to be installed on the mac)

1. 安装依赖 `node-simctl`
1. Installation dependencies `node-simctl`
```
npm install node-simctl --save-dev
```

2. 配置模拟器id，参考 `jest.config.js`
2. Configure the simulator id, refer to `jest.config.js`

3. 配置 `Hbuilder` 调试基座/自定义基座 `Pandora_simulator.app` 目录，参考 `jest.config.js`
3. Configure `Hbuilder`Debug base/custom base`Pandora_simulator.app` directory, refer to `jest.config.js`

4. 编写测试代码，参考测试用例
4. Write test code and refer to test cases

5. 运行测试
5. Run test
```
npm run test:ios
```



#### 测试示例
#### Test example

使用 hello uni-app 工程测试 H5 平台
Testing H5 platform with helluni-app project

1. 创建 `cli` 项目，选择 `hello uni-app`
1. Create `cli` project, and select `hello uni-app`
```
$ vue create -p dcloudio/uni-preset-vue#alpha my-hello-uni-app
#Enter the project directory
$ cd my-hello-uni-app
```

2. 安装 `puppeteer`
2. Install `puppeteer`
```
npm install puppeteer
```

3. 创建测试文件 `src/pages/tabBar/component/component.test.js`，复制下面代码
3. Create a test file `src/pages/tabBar/component/component.test.js`, and copy the following code
```
describe('pages/tabBar/component/component.nvue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        // reLaunch to the home page and get the page object on home page (where program is the global object automatically injected by uni-automator)
        page = await program.reLaunch('/pages/tabBar/component/component')
        await page.waitFor(1000)
    })

    it('u-link', async () => {
        // 检测首页u-link的文本内容
        // Detect the text content of u-link on home page
        expect(await (await page.$('.hello-link')).text()).toBe('https://uniapp.dcloud.io/component/')
    })

    it('view container', async () => {
        // 检测首个 panel 是视图容器
        // Detect that the first panel is a view container
        expect(await (await page.$('.uni-panel-text')).text()).toBe('view container')
        // 检测首个 panel 切换展开
        // Detect the first panel switch expansion
        const panelH = await page.$('.uni-panel-h');
        expect(await panelH.attribute('class')).toContain('uni-panel-h')
        await panelH.tap()
        await page.waitFor(500)
        // 已展开
        //Expanded
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
      // Expand the first panel, click the first item, and verify whether the new page opened is correct.
      await listHead.tap()
      await page.waitFor(200)
      const item = await page.$('.uni-navigate-item')
      await item.tap()
      await page.waitFor(500)
      expect((await program.currentPage()).path).toBe('pages/component/view/view')
      await page.waitFor(500)

      // 执行 navigateBack 验证是否返回
      // Perform navigateBack to verify the return
      expect((await program.navigateBack()).path).toBe('pages/tabBar/component/component')
    })
})
```

4. 运行测试
4. Run test
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
    √ View container (518ms)
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
        // reLaunch to the home page and get the page object on home page (where program is the global object automatically injected by uni-automator)
        page = await program.reLaunch('/pages/API/set-navigation-bar-title/set-navigation-bar-title')
        await page.waitFor(3000)
    })

    it('.uni-hello-text', async () => {
      var image = await program.screenshot({
        // 默认项目根目录
        // Root directory of default project
        path: "set-navigation-bar-title.png"
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
      // In order to shorten the testing time, you can specify a url address of H5. If not specified, npm run dev:h5 will be executed first every time you run the test.
      url: "http://192.168.x.x:8080/h5/",
      options: {
        // 配置是否显示 puppeteer 测试窗口
        // Configure whether to display the puppeteer test window
        headless: false
      }
    },
    "app-plus": {
      // 需要安装 HBuilderX
      // HBuilderX needs to be installed
      android: {
        // apk 目录
        // apk Directory
        executablePath: "HBuilderX/plugins/launcher/base/android_base.apk"
      },
      ios: {
        // uuid 必须配置，目前仅支持模拟器，可以（xcrun simctl list）查看要使用的模拟器 uuid
        // uuid must be configured. Currently, only simulators are supported. You can execute (xcrun simctl list) to view the uuid of the simulator to be used.
        id: "",
        // ipa 目录
        // ipa Directory
        executablePath: "HBuilderX/plugins/launcher/base/Pandora_simulator.app"
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
  // 测试文件目录
  // Test file directory
  testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/']
}

```



**注意事项**
**Precautions**

1. 如果页面涉及到分包加载问题，`reLaunch` 获取的页面路径可能会出现问题 ，解决方案如下 ：
1. If the page involves sub-contracting loading, there may be a problem with the page path obtained by `reLaunch`. The solution is as follows:

    ```javascript
    // 重新 reLaunch至首页，并获取 page 对象（其中 program 是 uni-automator 自动注入的全局对象）
   // reLaunch to the page and get the page object on home page (where program is the global object automatically injected by uni-automator)
    page = await program.reLaunch('/pages/extUI/calendar/calendar')
    page = await program.currentPage()
    ```

2. 分包中的页面，打开之后要延迟时间长一点，否则不能正确获取到页面信息
2. The page in the subpackage should be opened with a longer delay, or otherwise the page information cannot be obtained correctly
