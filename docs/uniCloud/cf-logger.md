## 开发期间打印日志
## Print log during development

云函数内使用`console.log`、`console.info`、`console.warn`、`console.error`四种方式打印日志。
The four methods of `console.log`, `console.info`, `console.warn`, and `console.error` are used to print logs in the cloud function.

HBuilderX中查看日志的教程在 [快速上手章节](/uniCloud/quickstart?id=rundebug)
The tutorial for viewing logs in HBuilderX is in [Quick Start Chapter](/uniCloud/quickstart?id=rundebug)

## 运行期记录日志，在web控制台查看
## Record the log during runtime, view it in the web console

系统上线后，也需要记录云函数的日志。此时不是打印在HBuilderX控制台，也不是使用`console.log`，而是使用下面的API来记录日志。
After the system goes online, it is also necessary to record cloud function logs. At this time, it is not printed in the HBuilderX console, nor is it used `console.log`, but the following API is used to record the log.

调用这些API打印的日志，会记录在uniCloud的[web控制台](https://unicloud.dcloud.net.cn)。以此方式输出的日志会持久化存储（有效期30天）。
The logs printed by calling these APIs will be recorded in uniCloud's [web console](https://unicloud.dcloud.net.cn). The logs output in this way will be stored persistently (valid for 30 days).

|接口									|描述											|
|Interface |Description |
|:-:									|:-:											|
|uniCloud.logger.log	|以 log 日志等级输出日志	|
|uniCloud.logger.log |Output logs at log log level |
|uniCloud.logger.info	|以 info 日志等级输出日志	|
|uniCloud.logger.info |Output logs with info log level |
|uniCloud.logger.warn	|以 warn 日志等级输出日志	|
|uniCloud.logger.warn |Output logs with warn log level |
|uniCloud.logger.error|以 error 日志等级输出日志|
|uniCloud.logger.error|Output log with error log level|
