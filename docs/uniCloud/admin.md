# uniCloud admin 框架
# uniCloud admin framework

### 什么是 uniCloud admin
### What is uniCloud admin

uniCloud admin 框架，是基于 uni-app 和 uniCloud 的应用后台管理的开源框架。
The uniCloud admin framework is an open source framework based on uni-app and uniCloud's application background management.

对于uniCloud的开发者而言，其后台管理系统应该使用本框架。
For uniCloud developers, their background management system should use this framework.

版本支持：HBuilderX 3.0+
Version support: HBuilderX 3.0+

演示地址：https://unicloudadmindemo.dcloud.net.cn
Demo address: https://unicloudadmindemo.dcloud.net.cn

下载地址：[https://ext.dcloud.net.cn/plugin?id=3268](https://ext.dcloud.net.cn/plugin?id=3268)
Download link: [https://ext.dcloud.net.cn/plugin?id=3268](https://ext.dcloud.net.cn/plugin?id=3268)

[github 仓库可查看最新提交及修改](https://github.com/dcloudio/uniCloud-admin)，欢迎 issues、pr、star ！
[github repository can view the latest submissions and modifications](https://github.com/dcloudio/uniCloud-admin), welcome issues, pr, star!

- 它基于 uni-app 的宽屏适配，可自动适配 PC 宽屏和手机各端。了解[宽屏适配](https://uniapp.dcloud.io/adapt)
- It is based on uni-app's widescreen adaptation, which can automatically adapt to PC widescreen and mobile phones. Understand [widescreen adaptation](https://uniapp.dcloud.io/adapt)
- 它基于 uniCloud，是 serverless 的云开发。了解[uniCloud](https://uniapp.dcloud.io/uniCloud/README)
- It is based on uniCloud and is serverless cloud development. Understand [uniCloud](https://uniapp.dcloud.io/uniCloud/README)
- 它基于 uni-id，使用 uni-id 的用户账户、角色、权限系统。了解[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id)
- It is based on uni-id, using uni-id user accounts, roles, and permissions system. Understand [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id)

### uniCloud admin 功能介绍
### uniCloud admin function introduction
uniCloud admin有预置功能、插件生态和数据表管理的代码生成工具。
uniCloud admin has code generation tools with preset functions, plug-in ecology and data table management.

有这套组合，管理端系统的开发变的前所未有的简单、高效、低成本。
With this combination, the development of the management system has never been simple, efficient, and low-cost.

1. 预置功能
2. Preset function

- 管理员账户初始化、登录、修改密码
- Administrator account initialization, login, and password modification
- 基于uni-id的用户管理（注册、修改信息、停用启用、删除）、角色管理、权限管理
- Uni-id-based user management (register, modify information, disable activation, delete), role management, and authority management
- 顶部 topWindow 的设置：比如 logo 更换、右上角部分链接更换。详见项目根目录的`admin.config.js`文件
- The settings of the top window at the top: such as changing the logo and changing the links in the upper right corner. See the `admin.config.js` file in the project root directory for details
- 左侧 leftWindow 的菜单设置：菜单包括两类，一类是动态菜单，具备业务和权限功能；另一类是静态菜单，不会根据登录用户角色变化
- The menu setting of leftWindow on the left: The menu includes two types, one is a dynamic menu, with business and authority functions; the other is a static menu, which will not change according to the role of the logged-in user
- 动态菜单的数据存储在数据库表opendb-admin-menus中，基于uni-id角色权限，在菜单管理中可以对菜单进行增删改查
- The data of the dynamic menu is stored in the database table opendb-admin-menus, based on the uni-id role permissions, the menu can be added, deleted, modified and checked in the menu management
- 开发模式下的 debug 功能，帮助开发者及时发现报错和搜索错误信息，可在`admin.config.js`文件中配置
- uniCloud admin supports plug-in ecology, including cms plug-in, banner management plug-in, log management plug-in, chart examples, etc. For details, please refer to [Plugin Market](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate )

2. 扩展插件
2. Extension

- uniCloud admin支持插件生态，包括cms插件、banner管理插件、日志管理插件、图表示例等，详见[插件市场](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)
- The debug function in development mode helps developers discover and search for error messages in time, which can be configured in the `admin.config.js` file

3. 数据表管理的代码生成工具
3. Code generation tool for data table management

- 对于数据表的管理，如列表浏览、分页搜索、详情修改、新增删除，这些代码都无需自己开发。建好数据表的schema表结构，利用schema2code工具，即可自动生成该表的管理页面的代码。详见[schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)
- For data table management, such as list browsing, page search, detail modification, addition and deletion, these codes do not need to be developed by themselves. Build the schema table structure of the data table, and use the schema2code tool to automatically generate the code for the management page of the table. See [schema2code](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode) for details

uniCloud admin是完整开源的一个uni-app项目，任何熟悉uni-app的工程师都可以自行开发扩展功能。
uniCloud admin is a complete open source uni-app project. Any engineer familiar with uni-app can develop extended functions by themselves.

### 支持响应式布局
### Support responsive layout

uniCloud admin 同时支持 PC 端 和移动端。基础模块是全端可用的，但注意有的插件不是全端的。
uniCloud admin supports both PC and mobile terminals. The basic module is available at all ends, but note that some plug-ins are not all end.

PC 端如下图：
The PC end is as follows:

![pc](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c2a69410-15db-11eb-880a-0db19f4f74bb.png)

移动端如下图：
The mobile terminal is as follows:

<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/2766a010-11d7-11eb-8bd0-2998ac5bbf7e.png" width="375"/>

- 在线演示地址：[https://unicloudadmindemo.dcloud.net.cn](https://unicloudadmindemo.dcloud.net.cn)
- Online demo address: [https://unicloudadmindemo.dcloud.net.cn](https://unicloudadmindemo.dcloud.net.cn)

### 使用
### use

#### 创建
#### Create

[HBuilderX](https://www.dcloud.io/hbuilderx.html) 3.0+版本新建 uni-app 项目，选择 uniCloud admin 项目模板，如下图
[HBuilderX](https://www.dcloud.io/hbuilderx.html) To create a uni-app project in version 3.0+, select the uniCloud admin project template, as shown below

![download-admin](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c2085840-15db-11eb-880a-0db19f4f74bb.png)
![download-admin](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c2085840-15db-11eb-880a-0db19f4f74bb.png)

创建完成后，可以跟随`云服务空间初始化向导`初始化项目，创建并绑定云服务空间
After the creation is complete, you can follow the `Cloud Service Space Initialization Wizard` to initialize the project, create and bind the cloud service space

![download-admin](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/2baaddd0-11f5-11eb-81ea-f115fe74321c.png)

<!-- 除了可视化向导外，也可以从[https://github.com/dcloudio/uniCloud-admin](https://github.com/dcloudio/uniCloud-admin)获取代码。 -->
<!-- In addition to the visualization wizard, you can also get the code from [https://github.com/dcloudio/uniCloud-admin](https://github.com/dcloudio/uniCloud-admin). -->

#### 运行
#### Run

1. 进入 admin 项目
1. Enter the admin project
2. 在uniCloud/cloudfunctions/common/uni-id/config.json 文件中填写自己的 `passwordSecret` 字段 (用于加密密码入库的密钥) 和 `tokenSecret` 字段 (为生成 token 需要的密钥，测试期间跳过本条也可以)
2. Fill in your own `passwordSecret` field (the key used to encrypt passwords into the database) and `tokenSecret` field (the key required to generate tokens in the uniCloud/cloudfunctions/common/uni-id/config.json file) You can skip this item during the test)
3. 右键 uniCloud目录 运行云服务空间初始化向导，初始化数据库和上传部署云函数（如已创建并绑定云服务空间，则跳过此步）
3. Right-click the uniCloud directory to run the cloud service space initialization wizard, initialize the database and upload and deploy cloud functions (if the cloud service space has been created and bound, skip this step)
4. 点击HBuilderX工具栏的运行【Ctrl+r】 -> 运行到浏览器。如果是连接本地云函数调试环境，上一步可以不上传云函数，但数据库仍需初始化。
4. Click Run [Ctrl+r] on the HBuilderX toolbar -> Run to the browser. If you are connecting to the local cloud function debugging environment, you don't need to upload the cloud function in the previous step, but the database still needs to be initialized.
5. 从启动后的登录页面的底部，进入创建管理员页面（仅允许注册一次管理员账号）
5. From the bottom of the login page after startup, enter the create administrator page (only allow to register an administrator account once)

**注意**：
**Notice**:

- 在 HBuilderX 中运行需在插件市场在安装 [sass 插件](https://ext.dcloud.net.cn/plugin?id=2046)
- To run in HBuilderX, you need to install [sass plugin](https://ext.dcloud.net.cn/plugin?id=2046) in the plug-in market
- 浏览器联网-The browser fails to connect to the Internet and reports `request: fail`. You need to go to the `Cross-domain configuration` of the cloud service space to configure a cross-domain domain name, and you need to bring a port. [See details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)失败，报 `request：fail`，需要去云服务空间的`跨域配置`配置跨域域名，需带端口。[详见](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- The browser fails to connect to the Internet and reports `request: fail`. You need to go to the `Cross-domain configuration` of the cloud service space to configure a cross-domain domain name, and you need to bring a port. [See details](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- 如从未接触过uniCloud，是无法直接上手uniCloud admin的，建议先通读下uniCloud文档的概念介绍和快速上手章节。[详见](https://uniapp.dcloud.net.cn/uniCloud/README)
- If you have never been in contact with uniCloud, you cannot get started with uniCloud admin directly. It is recommended to read through the concept introduction and quick start chapters of the uniCloud document first. [See details](https://uniapp.dcloud.net.cn/uniCloud/README)
### 目录结构
### Directory Structure

```bash
├── cloudfunctions              # 云函数(# Cloud function)
├── common
│   │── uni.css                 # 公共样式(# Public style)
│   └── uni-icons.css           # icon样式(# icon style)
├── components                  # 自定义组件(# Custom component)
├── js_sdk                      # js sdk(# js sdk)
├── pages                       # 页面(# Page)
│   │── index                   # 首页(# front page)
│   └── login                   # 登录页(# Login page)
├── static
├── store                       # vuex
├── windows
│   │── component               # 项目中使用的组件(# Components used in the project)
│   │── leftWindow.vue          # 左侧窗口（菜单栏）(# Left window (menu bar))
│   └── topWindow.vue           # 顶部窗口（导航栏）(# Top window (navigation bar))
├── admin.config.js             # 系统配置（配置导航，菜单等）(# System configuration (configuration navigation, menu, etc.))
├── App.vue()
├── main.js
├── mainfest.json
├── pages.json
├── postcss.config.js           # postcss 配置（浏览器兼容性）(# postcss configuration (browser compatibility))
└── uni.scss
```
   
### 登录页
### Login page

首次使用，可以通过登录页面底部链接创建一个超级管理员（仅允许创建一次），该接口会判断系统里如果有 admin 角色的用户，就不再允许添加新的超级管理员。
For the first use, you can create a super administrator through the link at the bottom of the login page (only allowed to be created once). This interface will determine that if there is a user with the admin role in the system, it will no longer be allowed to add a new super administrator.

> 注意：注册完毕后，建议从登录页面移除该链接
> Note: After registration, it is recommended to remove the link from the login page

![login](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c3f33850-15db-11eb-8ff1-d5dcf8779628.png)

### 分栏窗体介绍
### Introduction to the column form

登录后我们会看到如下窗体, 窗体分为三个部分，topWindow 顶部窗口（导航栏），leftwindow 左侧窗口（菜单栏），右侧的内容主窗体
After logging in, we will see the following form, which is divided into three parts, topWindow top window (navigation bar), leftwindow left window (menu bar), right content main form

![index](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/c3591b30-15db-11eb-8ff1-d5dcf8779628.png)

#### 顶部窗口（导航栏）
#### Top window (navigation bar)

顶部窗口默认在左侧展示系统 Logo、右侧显示导航链接，效果如上图。展示内容可通过项目根目录下的`admin.config.js`文件进行配置，如下为示例：
By default, the top window displays the system logo on the left and navigation links on the right. The effect is shown in the figure above. The display content can be configured through the `admin.config.js` file in the root directory of the project. The following is an example:
```js
# admin.config.js
export default {
  navBar: {// 顶部导航(Top navigation)
    logo:"https://www.example.com/logo.png",//左侧 Logo(Logo on the left)
    links: [ // 右侧链接(Right link)
      {
        text: "Admin框架文档(Admin framework document)",
        url: "https://uniapp.dcloud.net.cn/uniCloud/admin",
      },
      {
        text: "浏览更多Admin插件(Browse more Admin plugins)",
        url: "https://ext.dcloud.net.cn/?cat1=7&cat2=74",
      }
    ],
  },
};
```

顶部导航栏的样式，可通过项目根目录下的`uni.scss`进行自定义，如下：
The style of the top navigation bar can be customized through `uni.scss` in the project root directory, as follows:

```css
#uni.scss $top-window-bg-color: #fff; /* 背景色(Background color) */
$top-window-text-color: #999; /* 文字颜色(Text color) */
```

#### 左侧窗口（菜单栏）
#### Left window (menu bar)

左侧窗口内主要是菜单，菜单包含静态菜单和动态菜单，支持无限层级嵌套，但建议层级不要超过三级
The menu on the left is mainly the menu, the menu contains static menu and dynamic menu, supports unlimited levels of nesting, but it is recommended that the level should not exceed three levels

- 静态菜单: 所有登录用户角色都能看到
- Static menu: all logged-in user roles can be seen
- 动态菜单: 根据角色的权限自动生成
- Dynamic menu: automatically generated according to role permissions

  > 用户登录时，会根据用户的 _角色_ 去查找其拥有的 _权限_ ，再根据 _权限_ 去查找对应的 _菜单_
  > When the user logs in, it will look up the _permissions that the user has according to the user's _role_, and then look for the corresponding _menu_ according to the _permission_

##### 管理静态菜单
##### Manage static menus

通过 [admin.config.js](https://github.com/dcloudio/uniCloud-admin/blob/master/admin.config.js) 配置侧边栏内容，所有用户都能看到静态菜单。
Through [admin.config.js](https://github.com/dcloudio/uniCloud-admin/blob/master/admin.config.js) configure the sidebar content, all users can see the static menu.
```js
export default {
  // 侧边栏
  sideBar: {
    // 配置静态菜单列表（放置在用户被授权的菜单列表下边）
    staticMenu: [
      {
        menu_id: "demo",
        name: "静态功能演示(Static function demonstration)",
        icon: "uni-icons-list",
        children: [
          {
            menu_id: "icons",
            name: "图标(icon)",
            url: "/pages/demo/icons/icons"
          },
          {
            menu_id: "table",
            name: "表格(table)",
            url: "/pages/demo/table/table"
          }
        ]
      }
    ]
  }
};
```

##### 管理动态菜单
##### Manage dynamic menus

在左侧导航菜单中，找到`系统管理 -> 菜单管理`，可视化的维护菜单。
In the left navigation menu, find `System Management -> Menu Management`, the visual maintenance menu.

菜单数据存储在云数据库的 `opendb-admin-menus` 表中。该表字段说明如下：
The menu data is stored in the `opendb-admin-menus` table of the cloud database. The fields of this table are described as follows:

_菜单表字段解释:_
_Menu table field explanation:_

| 字段        | 类型      | 必填 | 描述                                                 |
| Field | Type | Required | Description |
| :---------- | :-------- | :--- | :--------------------------------------------------- |

| menu_id     | Object ID | 是   | 菜单 Id                                              |
| menu_id | Object ID | Yes | Menu Id |
| name        | String    | 是   | 菜单文字                                             |
| name | String | Yes | Menu text |
| icon        | String    | 否   | 菜单图标                                             |
| icon | String | No | Menu icon |
| url         | String    | 否   | 菜单对应的页面链接（只有没有子菜单的菜单项可以配置） |
| url | String | No | The page link corresponding to the menu (only menu items without sub-menus can be configured) |
| sort        | Integer   | 否   | 在同级菜单中的排序，数组越大越靠后                   |
| sort | Integer | No | Sort in the same level menu, the larger the array, the lower the |
| parent_id   | String    | 否   | 父级菜单 Id                                          |
| parent_id | String | No | Parent Menu Id |
| permission  | Array     | 否   | 菜单权限（只有没有子菜单的菜单项可以配置）           |
| permission | Array | No | Menu permission (only menu items without sub-menus can be configured) |
| enable      | Boolean   | 是   | 菜单状态：false 禁用 true 启用                       |
| enable | Boolean | Yes | Menu status: false disable true enable |
| create_date | Timestamp | 是   | 创建时间                                             |
| create_date | Timestamp | yes | creation time |

_添加菜单记录需要注意：_
_Add menu records need attention:_

菜单项分目录菜单和页面菜单。
Menu items are divided into directory menu and page menu.

- 目录菜单项：非叶子节点，点击后展开子菜单，自身没有 `URL` 。需至少一个子菜单的 `url` 字段不能为空，该菜单才能在页面显示
- -Directory menu item: non-leaf node, click to expand the sub-menu, there is no `URL` itself. The `url` field of at least one submenu must not be empty for the menu to be displayed on the page
- 页面菜单项：叶子节点，无子菜单，且 `url` 字段不能为空，点击该菜单项会转到`url`页面。如果 `url` 为空则该菜单无法显示。
-Page menu item: leaf node, no sub-menu, and the `url` field cannot be empty, clicking this menu item will go to the `url` page. If `url` is empty, the menu cannot be displayed.

##### 侧边栏样式管理
##### Sidebar style management

通过 [uni.scss](https://github.com/dcloudio/uniCloud-admin/blob/master/uni.scss) 配置侧边栏样式
Configure the sidebar style through [uni.scss](https://github.com/dcloudio/uniCloud-admin/blob/master/uni.scss)

> 调整菜单颜色时，只需设置菜单背景色 `$menu-bg-color`，自行搭配文字前景色即可
> When adjusting the menu color, you only need to set the menu background color `$menu-bg-color` and match the text foreground color by yourself

```css
$left-window-bg-color: #fff; /* 左侧窗口背景色(The background color of the left window) */
$menu-bg-color: #fff; /* 一级菜单背景色(Level 1 menu background color) */
$sub-menu-bg-color: darken($menu-bg-color, 8%); /* 二级以下菜单背景色(Menu background color below level 2) */
$menu-bg-color-hover: darken($menu-bg-color, 15%); /* 菜单 hover 背景颜色(Menu hover background color) */
$menu-text-color: #333; /* 菜单前景色(Menu foreground color) */
$menu-text-color-actived: #409eff; /* 菜单激活前景色(Menu activation foreground color) */
```

#### 右侧窗口（内容主窗体)
#### Right window (content main form)

右侧窗口是内容主窗体，和 uni-app 保持一致，用户登录后看到的第一个页面，默认是 pages 数组中第一项表示应用启动页。
The window on the right is the main form of content, which is consistent with uni-app. The first page the user sees after logging in, the default is the first item in the pages array, which represents the application startup page.

如果想将自己开发的页面调到登录后首页，可在 page.json 调整。
If you want to transfer the page developed by yourself to the home page after login, you can adjust it in page.json.

### icon 图标
### icon icon

admin 框架内置了一套 icon 图标，在`静态功能演示-图标`菜单中，点击图标即可复制图标的 class 定义。
The admin framework has built-in a set of icon icons. In the `Static Function Demo-Icon` menu, click the icon to copy the icon's class definition.

选中样式后，在新建菜单页面的表单中输入样式名称。没有样式的菜单项将没有图标。
After selecting the style, enter the style name in the form on the new menu page. Menu items without styles will have no icons.

当然，你也可以使用三方 icon 库。以使用 `elementUI` 的图标为例，在 `app.vue` 中导入图标库的样式文件：
Of course, you can also use the third party icon library. Take the icon of `elementUI` as an example, import the style file of the icon library in `app.vue`:

```javascript
<style>
  /* 注意此处仅为 icon 使用示例，建议引入纯净图标库，避免增加不必要的 css(Note that this is only an example of icon usage, it is recommended to introduce a pure icon library to avoid adding unnecessary css) */
  @import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';
</style>
```

在标签上使用图标的 class 名称即可：``el-icon-s-tools``
Just use the class name of the icon on the label: ``el-icon-s-tools``

### 用户-角色-权限
### User-Role-Permission

uniCloud admin 框架基于 uni-id，复用 uni-id 的用户、角色、权限系统，详见[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id)。
The uniCloud admin framework is based on uni-id and reuses the uni-id user, role, and permission system. For details, see [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id).

需要注意的是，admin 框架的动态菜单同样依赖 uni-id 的权限表（uni-id-permissions）。
It should be noted that the dynamic menu of the admin framework also relies on the uni-id permission table (uni-id-permissions).

菜单表(opendb-admin-menus)定义如下：
The menu table (opendb-admin-menus) is defined as follows:

| 字段        | 类型      | 必填 | 描述                                                 |
| Field | Type | Required | Description |
| :---------- | :-------- | :--- | :--------------------------------------------------- |
| menu_id     | Object ID | 是   | 菜单 Id                                              |
| menu_id | Object ID | Yes | Menu Id |
| name        | String    | 是   | 菜单文字                                             |
| name | String | Yes | Menu text |
| icon        | String    | 否   | 菜单图标                                             |
| icon | String | No | Menu icon |
| url         | String    | 否   | 菜单对应的页面链接（只有没有子菜单的菜单项可以配置） |
| url | String | No | The page link corresponding to the menu (only menu items without sub-menus can be configured) |
| sort        | Integer   | 否   | 在同级菜单中的排序，数组越大越靠后                   |
| sort | Integer | No | Sort in the same level menu, the larger the array, the lower the |
| parent_id   | String    | 否   | 父级菜单 Id                                          |
| parent_id | String | No | Parent Menu Id |
| permission  | Array     | 否   | 菜单权限（只有没有子菜单的菜单项可以配置）           |
| permission | Array | No | Menu permission (only menu items without sub-menus can be configured) |
| enable      | Boolean   | 是   | 菜单状态：false 禁用 true 启用                       |
| enable | Boolean | Yes | Menu status: false disable true enable |
| create_date | Timestamp | 是   | 创建时间                                             |
| create_date | Timestamp | yes | creation time |

admin 提供了两个内置方法，方便在页面中鉴定登录用户权限和角色:
admin provides two built-in methods to facilitate the identification of login user permissions and roles on the page:

| 方法             | 作用                       | 入参   | 返回值  |
| Method | Function | Input Parameters | Return Value |
| :--------------- | :------------------------- | :----- | :------ |
| `$hasPermission` | 鉴定登录用户是否具有某权限 | String | Boolean |
| `$hasPermission` | Verify whether the logged-in user has a certain permission | String | Boolean |
| `$hasRole`       | 鉴定登录用户是否具有某角色 | String | Boolean |
| `$hasRole` | Verify whether the logged-in user has a role | String | Boolean |

```html
<template>
  <view>
    <!-- 包含 user/add 权限的用户可以看到新增按钮 -->
	<!-- Users with user/add permissions can see the new button -->
    <button v-if="$hasPermission('USER_ADD')">新增(add)</button>
    <!-- 包含 admin 角色的用户可以看到删除按钮 -->
	<!-- Users with the admin role can see the delete button -->
    <button v-if="$hasRole('admin')">删除(delete)</button>
  </view>
</template>
```

#### 给系统创建多个登录账户并设置不同的权限@mutiladmin
#### Create multiple login accounts for the system and set different permissions @mutiladmin
下面以增加一个普通成员的角色为例，该角色的用户登录admin系统后只能看用户表数据，不能改动数据。
Let's take the role of adding an ordinary member as an example. After logging in to the admin system, users of this role can only view the user table data, but cannot change the data.
##### 1. 先用admin账户登陆admin系统。
##### 1. Use the admin account to log in to the admin system.
- admin示例项目地址：[https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login](https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login)
- admin example project address: [https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login](https://unicloudadmindemo.dcloud.net.cn/#/pages/login/login)
- 体验账号：admin      密码：123456
- Experience account: admin Password: 123456

##### 2. 创建权限。在uniCloud admin左侧菜单的权限管理，新增权限“查询信息”，标识为“read”
##### 2. Create permissions. In the permission management on the left side menu of uniCloud admin, a new permission "Query Information" is added, which is marked as "read"
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ab997406-d36e-4d42-87ab-339bd5a8a50a.jpg)
##### 3. 创建角色。在左侧菜单的角色管理里，新增角色“普通成员”，标识为“member”，绑定上面的“查询信息”权限
##### 3. Create a role. In the role management in the left menu, a new role "ordinary member", marked as "member", is bound to the "query information" permission above
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/f3b563b3-3e86-4823-9373-64c9bebdd51c.jpg)
##### 4. 创建账户并赋予角色。在左侧菜单的用户管理里，添加用户“张三”，然后给用户赋予角色“普通成员”
##### 4. Create an account and assign roles. In the user management of the left menu, add the user "Zhang San", and then assign the user the role "ordinary member"
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/18676740-4be8-419b-8c12-40559ded1413.jpg)
##### 5.如果你退出账户，登陆刚刚创建的账户张三。我们发现会提示：该账户没有被赋予登录admin系统的权限, 请联系系统管理员绑定角色赋权限。因为：你登陆的账户没有访问任何admin系统菜单的权限，所以不能访问admin系统。
##### 5. If you log out of your account, log in to the account Zhang San you just created. We found that it will prompt: the account is not given the permission to log in to the admin system, please contact the system administrator to bind the role and grant permissions. Because: the account you log in does not have the authority to access any admin system menu, so you cannot access the admin system.
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0b627d45-da68-435b-995b-a191e7330624.jpg)
##### 6.设置有查询信息权限的人，拥有访问admin系统菜单"用户管理"的权限。在左侧菜单的菜单管理里，找到菜单“用户管理”，点修改，在权限列表里勾选“查询信息”，也就是有查询信息权限的人，可以看到本菜单
##### 6. The person who has the authority to query information has the authority to access the "User Management" of the admin system menu. In the menu management of the left menu, find the menu "User Management", click Modify, and check "Query Information" in the permission list, that is, those who have the permission to query information can see this menu
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/74c48248-d8ae-4427-9abb-8a6c5d54c53d.jpg)
##### 7.这时你用账户“张三”登陆，就能进入到admin系统。但你会看到如下图提示“权限校验未通过”。因为刚刚仅为该用户赋予了访问菜单的权限。还未赋予访问uni-id-users表的阅读权限
##### 7. At this time, you log in with the account "Zhang San" and you can enter the admin system. But you will see the prompt "Permission verification failed" as shown in the figure below. This is because only the user has just been given the right to access the menu. The read permission to access the uni-id-users table has not been granted
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/37d1604e-bcb1-4096-a373-90397b9a96c0.jpg)
##### 8. 需要在hbuilderx中将表uni-id-users的schema文件中设置新角色的权限，将permission下的read节点配置为`"read": "'read' in auth.permission"`，并上传到云端。当然这在示例项目不能实现，需要你自己搭建admin系统，重复以上步骤，[点此下载uniCloud admin](https://ext.dcloud.net.cn/plugin?id=3268)
##### 8. You need to set the permissions of the new role in the schema file of the table uni-id-users in hbuilderx, and configure the read node under permission as `"read": "'read' in auth.permission" `, and upload to the cloud. Of course, this cannot be achieved in the sample project, you need to build the admin system yourself, repeat the above steps, [click here to download uniCloud admin](https://ext.dcloud.net.cn/plugin?id=3268)
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/81e38081-9507-4e00-bafd-7dab26e9a119.png)
##### 9.此时你再刷新页面即可访问用户管理的数据列表
##### 9. At this time, you can refresh the page to access the user management data list

### 新增页面
### New page

新增页面可以自己开发页面，也可以从插件市场下载插件。页面如需添加菜单，参见上文的[菜单管理](#静态菜单和动态菜单)。
You can develop the new page by yourself, or download the plug-in from the plug-in market. If you need to add a menu to the page, see [Menu Management] (#Static Menu and Dynamic Menu) above.

开发页面不局限开发方式：
The development page is not limited to the development method:

- 可以新增普通的页面，在前端 callfunction，后台搭配云函数操作
- You can add ordinary pages, call function in the front end, and operate with cloud functions in the background
- 可以使用云函数单文件路由，在项目中默认包含了一个[uni-cloud-router](https://uniapp.dcloud.io/uniCloud/uni-cloud-router) 的单文件路由，也可以使用插件市场的其他单文件路由
- You can use cloud function single file routing, a single file routing of [uni-cloud-router](https://uniapp.dcloud.io/uniCloud/uni-cloud-router) is included by default in the project, or you can use it Other single-file routing in the plug-in market
- 可以使用 clientdb，在前端直接操作数据库，后台配置 db schema 进行权限和格式校验
- You can use clientdb to directly operate the database on the front end, and configure the db schema in the background for permission and format verification
- 可以使用schema2code生成uniCloud admin页面。这是最为常用、最高效的页面开发模式。[详见](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)
- You can use schema2code to generate uniCloud admin pages. This is the most commonly used and most efficient page development mode. [See details](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)
> 注意：在使用 uni-cloud-router 时，controller 下的文件夹和文件，不要命名相同，例如：app/room 这个写法目前分辨不了 `app` 是文件 `app.js`，还是文件夹 `app`
> Note: When using uni-cloud-router, the folders and files under the controller should not be named the same, for example: app/room This way of writing currently cannot distinguish whether `app` is the file `app.js` or the folder `app. `

#### 自己开发页面
#### Develop your own page

admin 中开发页面，和 uni-app 开发 vue 页面是一致的。
The development page in admin is the same as the uni-app development page in vue.

#### 从插件市场下载插件，并注册到 admin 的左侧动态菜单中
#### Download the plug-in from the plug-in market and register it in the dynamic menu on the left side of admin

_使用步骤:_
_Steps for usage:_

1. 从[插件市场](https://ext.dcloud.net.cn/)导入插件
1. Import the plugin from [Plugin Market](https://ext.dcloud.net.cn/)
2. 在 HBuilder X 3.1+ 中选择添加插件的项目
2. Select the project to add the plug-in in HBuilder X 3.1+
3. 在插件的 db_init.json 文件上右键，点击“初始化云数据库”
3. Right-click on the db_init.json file of the plug-in and click "Initialize Cloud Database"
4. 在菜单管理中的添加【待添加菜单】
4. Add [Menu to be added] in the menu management
5. 刷新 admin 即可在菜单栏看到新增的菜单
5. Refresh admin to see the new menu in the menu bar

---------------------------------- 分割线 ----------------------------------------
---------------------------------- split line-------------- --------------------------

### admin 插件开发
### admin plugin development

我们不仅是插件的使用者，也可以是插件的开发者，那么如何开发一款 uniCloud admin 插件呢？
We are not only plug-in users, but also plug-in developers, so how to develop a uniCloud admin plug-in?

对于 admin 插件来说，可以项目中开发完成功能，再将这项功能剥离成一个插件。其他开发者使用插件的过程，就是将插件还原成项目中的一项功能。
For the admin plug-in, the function can be developed in the project, and then this function can be separated into a plug-in. The process for other developers to use the plug-in is to restore the plug-in to a function in the project.

admin 插件包含云函数、前端页面、pages.json，它必须基于 uni-id 的账户和权限体系，它不限制云函数的开发方式，可以自己写普通云函数、可以用任何单路由云函数框架、也可以用 clientDB。
The admin plug-in includes cloud functions, front-end pages, pages.json. It must be based on uni-id account and permission system. It does not limit the development of cloud functions. You can write ordinary cloud functions by yourself, and you can use any single-route cloud function framework, You can also use clientDB.

admin插件不能是整体工程，不能包含manifest。它更类似于页面模板，这里的pages.json也仅仅包括与插件有关的页面。插件里的pages.json内容，导入项目后，会与项目下的pages.json合并。
The admin plug-in cannot be a whole project and cannot contain a manifest. It is more similar to a page template, here pages.json only includes pages related to the plugin. The content of pages.json in the plug-in will be merged with pages.json under the project after importing the project.

_admin 插件的目录结构：_
The directory structure of the _admin plugin: _

```bash
├── uniCloud
│   ├── cloudfunctions          # 云函数(# Cloud function)
│   └── database
│       ├── xxx.schema.json     # 数据库schema文件(# Database schema file)
│       └── db_init.json        # 数据库初始化文件(# Database initialization file)
├── js_sdk                      # js sdk
├── pages                       # 页面(# Page)
│   └── your-page               # 你的页面(# Your page)
├── pages.json                  # 插件包含的页面的路由配置(# The routing configuration of the page included in the plug-in)
└── %pluginId%-menu.json        # 向uniCloud admin左侧菜单注册新菜单的声明文件。pluginId 为你上传插件市场时填的插件id。uni_module下不需要pluginId，直接就是menu.json(# Register the declaration file of the new menu to the left menu of uniCloud admin. pluginId is the plug-in id filled in when you upload the plug-in market. There is no need for pluginId under uni_module, just menu.json)
```

**page.json 配置:**
**page.json configuration:**

插件里的 pages.json 内容，导入项目后，会与项目下的 pages.json 合并，不会整体文件替换。
The content of pages.json in the plug-in will be merged with pages.json under the project after importing the project, and the entire file will not be replaced.

**%pluginId%-menu.json 配置**
**%pluginId%-menu.json configuration**

本文件用于插件注册 uniCloud admin左侧的动态菜单。
This file is used for plug-in registration on the dynamic menu on the left side of uniCloud admin.

pluginId 为你上传插件市场时填的插件id（插件市场每个插件都有一个唯一id）。
pluginId is the id of the plugin you fill in when you upload the plugin market (each plugin in the plugin market has a unique id).

假使你的插件id为“xxx-yyy”，那么在插件的根目录放置 xxx-yyy-menu.json ，按下文格式配置内容。（uni_module下不需要pluginId，直接就是menu.json）
If your plug-in id is "xxx-yyy", put xxx-yyy-menu.json in the root directory of the plug-in and configure the content in the following format. (PluginId is not needed under uni_module, it is directly menu.json)

```json
[
  {
    "menu_id": "xxx-yyy",
    "name": "显示名称(show name)",
    "icon": "",
    "url": "/pages/system/permission/list",
    "sort": 1,
    "parent_id": "system_management",
    "permission": []
  }
]
```

上述示例中：
In the above example:
- `menu_id` 与之前的admin系统中的menu_id不重复即可。一个admin插件可以注册多个menu
- `menu_id` is not the same as the previous menu_id in the admin system. One admin plugin can register multiple menus
- `icon` 是uni-ui里的[uni-icons](https://ext.dcloud.net.cn/plugin?id=28)的class名称
- `icon` is the class name of [uni-icons](https://ext.dcloud.net.cn/plugin?id=28) in uni-ui
- `sort` 菜单的排序，数字越小排序越靠前
- The sorting of the `sort` menu, the smaller the number, the higher the sort
- `parent_id` 该菜单的父级菜单的`menu_id`。如不需要父菜单，即注册到根菜单中，请删除`parent_id`。示例中的"system_management"是uniCloud admin自带的系统管理菜单的`menu_id`
- `parent_id` The `menu_id` of the parent menu of this menu. If the parent menu is not needed, that is, to register to the root menu, please delete `parent_id`. The "system_management" in the example is the `menu_id` of the system management menu that comes with uniCloud admin
- `permission`是权限管理，一般情况下插件作者不配置此项，而是由插件的使用者在其具体项目上决定如何控制权限。
- `permission` is permission management. Under normal circumstances, the plug-in author does not configure this item, but the user of the plug-in decides how to control the permissions on their specific items.
包含%pluginId%-menu.json的插件导入项目后，运行起来uniCloud admin，菜单管理模块会自动读取这个json文件中的菜单配置，生成【待添加菜单】，配置与 admin【管理动态菜单】同理。插件作者可以在界面上可视化的点击确认添加，即可把菜单加入到他的项目下。
After the plugin containing %pluginId%-menu.json is imported into the project, run uniCloud admin, the menu management module will automatically read the menu configuration in this json file, and generate [menu to be added], the configuration is the same as admin [manage dynamic menu] reason. The plug-in author can click to confirm the addition visually on the interface, and then add the menu to his project.
虽然也可以通过`db_init.json`来进行菜单初始化，但不建议这么操作。很容易发生和用户的数据库的冲突。仍然推荐使用%pluginId%-menu.json方式。
Although you can also use `db_init.json` to initialize the menu, it is not recommended. It is easy to conflict with the user's database. The %pluginId%-menu.json method is still recommended.
**关于uni-admin和uni-cloud-router公共模块**
**About the common modules of uni-admin and uni-cloud-router**

uniCloud admin自带了一个单路由框架，uni-cloud-router，然后自带了一个uni-admin云函数使用了这个uni-cloud-router。但插件作者的插件，不能写在uni-admin的目录下。插件的云函数，要有插件id前缀，如果你想把你的插件的所有云函数合并成一个云函数，可以新建一个你自己的云函数，在里面引用uni-cloud-router公共模块。
uniCloud admin comes with a single routing framework, uni-cloud-router, and then comes with a uni-admin cloud function that uses this uni-cloud-router. But the plug-in of the plug-in author cannot be written in the uni-admin directory. The cloud function of the plug-in must have the plug-in id prefix. If you want to merge all the cloud functions of your plug-in into one cloud function, you can create a new cloud function of your own and reference the uni-cloud-router public module in it.

**使用schema2code生成admin页面**
**Use schema2code to generate admin page**

大多数的 admin 插件的表单页面是可以用uniCloud自带的schema2code工具自动生成的，可以直接生成数据库的增删改查的完整页面。所以在 uniCloud admin 中制作一个插件非常简单。
Most of the form pages of the admin plug-in can be automatically generated using the schema2code tool that comes with uniCloud, and can directly generate a complete page of additions, deletions, and changes to the database. So making a plug-in in uniCloud admin is very simple.

首先在数据库中配好[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)，然后使用 uniCloud web 控制台提供的schema2code生成代码工具，即可快速的生成数据的展示、新建、修改、删除的页面代码，并且自带表单校验。详见：[schema2code](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)
First configure [DB Schema](https://uniapp.dcloud.io/uniCloud/schema) in the database, and then use the schema2code generation code tool provided by the uniCloud web console to quickly generate data display, new creation, Modified and deleted page code, and comes with form verification. See: [schema2code](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)

为防止和用户工程的文件冲突，插件的页面应该有插件的前缀，比如 pages/xxx-page。自带的数据库schema文件也推荐带上前缀。
To prevent conflicts with user project files, the plug-in page should have the prefix of the plug-in, such as pages/xxx-page. The built-in database schema file is also recommended to carry a prefix.

以下为已存在的 uniCloud admin 插件列表，可以参考：[https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate](https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate)
The following is a list of existing uniCloud admin plugins, you can refer to: [https://ext.dcloud.net.cn/?cat1=7&cat2=74&orderBy=UpdatedDate](https://ext.dcloud.net.cn/?cat1 =7&cat2=74&orderBy=UpdatedDate)

**插件开发后如何上传插件市场**
**How ​​to upload the plugin market after plugin development**

插件上传等更多信息，参考 [DCloud 插件开发指南汇总](https://ask.dcloud.net.cn/article/35408) 及其中的 `admin 插件`部分，插件作者可以按此文档提交插件，在插件市场的上传发布页面选择`uniCloud` 分类的 `Admin 插件` 。
For more information about uploading plugins, please refer to [Summary of DCloud Plugin Development Guide](https://ask.dcloud.net.cn/article/35408) and the `admin plugins` part in it. Plugin authors can submit plugins according to this document. On the upload and release page of the plug-in market, select the `Admin plug-in` of the `uniCloud` category.

### uniCloud admin中使用三方组件库
### Use third party component library in uniCloud admin

uniCloud admin 支持所有三方的 Vue UI 库，包括 elementUI 等非 uni-app 的 UI 库，但注意这些 for h5 的 ui 库只能在浏览器中使用，无法适配 App 和小程序，按如下操作。
uniCloud admin supports all three-party Vue UI libraries, including elementUI and other non-uni-app UI libraries, but note that these for h5 ui libraries can only be used in the browser and cannot be adapted to apps and applets. Follow the steps below.

以使用 element-ui 框架为例：
Take the element-ui framework as an example:

1. 安装 UI 框架
2. Install the UI framework

   > npm i element-ui -S
   > npm i element-ui -S

2. 在 main.js 中引用
2. Reference in main.js

   ```javascript
   import elementUI from "element-ui";
   import "element-ui/lib/theme-chalk/index.css";

   Vue.use(elementUI);
   ```

注意：
Notice:

1. uni-app的button、input等组件，是在html的button、input等标签的外面包了一层，做法与微信小程序相同。如果使用for html的库，其css元素选择器可能需要调整后才能符合预期。
1. The button, input and other components of uni-app are wrapped around the button, input and other tags of html. The method is the same as that of the WeChat applet. If you use the for html library, its css element selector may need to be adjusted to meet expectations.
2. uniCloud Admin暂不支持vue3的三方库。
2. uniCloud Admin does not support vue3 third party libraries.

### 常见问题
### common problem

- 问： 使用unicloud admin新建用户无法登录，会提示“该账号暂无权限登录” ？
- Question: If you can't log in to create a new user with unicloud admin, it will prompt "This account does not have permission to log in"?
  > 答：用户登录逻辑：登陆时系统检测没有菜单会提示“暂无权限登录”，需要给新账号绑定角色，角色有菜单方可登录
  > Answer: User login logic: When logging in, the system detects that there is no menu and it will prompt "No permission to log in", you need to bind a role to the new account, and the role has a menu to log in