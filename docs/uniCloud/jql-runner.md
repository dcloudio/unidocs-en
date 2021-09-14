## HBuilderX的JQL数据库管理器
## HBuilderX's JQL database manager
为方便开发者调试查询语句，`HBuilderX 3.1.5`起内置了JQL查询调试器。用法如下
In order to facilitate developers to debug query statements, the JQL query debugger is built-in since `HBuilderX 3.1.5`. Usage is as follows
1. 在`uniCloud/database`目录右键选择`新建JQL数据库管理`（HBuilderX创建项目时勾选uniCloud会自带一个jql文件，直接使用自带的jql文件也可以）
1. Right-click on the `uniCloud/database` directory and select `New JQL Database Management` (HBuilderX will bring a jql file when you check uniCloud when creating a project, or you can directly use the jql file that comes with it)
2. 在jql文件内写上自己的语句
2. Write your own statement in the jql file
3. 使用工具栏上的运行按钮运行（快捷键：Ctrl+R 或 F5）即可
3. Use the run button on the toolbar to run (shortcut key: Ctrl+R or F5)
![jql-runner](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/030341b0-b86d-43bf-ac59-86d2483f4cda.jpg)

**注意**
**Notice**
- 编写clientDB的js API（也支持常规js语法，比如var），可以对云数据库进行增删改查操作。不支持uniCloud-db组件写法
- Write clientDB's js API (also supports regular js syntax, such as var), which can add, delete, modify, and check cloud databases. Does not support uniCloud-db component writing
- 可以全部运行，也可以选中部分代码运行。点击工具栏上的运行按钮或者按下【F5】键运行代码
- You can run all or select part of the code to run. Click the run button on the toolbar or press the [F5] key to run the code
- 如果文档中存在多条JQL语句，只有最后一条语句生效
- If there are multiple JQL statements in the document, only the last statement takes effect
- 如果混写了普通js，最后一条语句需是数据库操作语句
- If common js is mixed, the last statement must be a database operation statement
- 此处代码运行不受DB Schema的权限控制，移植代码到实际业务中注意在schema中配好permission
- The code running here is not controlled by the permission of DB Schema, transplant the code to the actual business, pay attention to the permission in the schema
- 不支持clientDB的action
- ClientDB action is not supported
- 数据库查询有最大返回条数限制，详见：[limit](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=limit)
- There is a limit on the maximum number of returned entries for database queries, see: [limit](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=limit)
- 详细JQL语法，请参考：[JQL](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)
- For detailed JQL syntax, please refer to: [JQL](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)