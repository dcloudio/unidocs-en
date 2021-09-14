## console
向控制台打印日志信息。
Print log information to the console.
### debug
向控制台打印 debug 日志
Print debug log to the console

注：App 端自定义组件模式下，debug 方法等同于 log 方法。
Note: In the App-side custom component mode, the debug method is equivalent to the log method.
### log
向控制台打印 log 日志
Print log to the console
### info
向控制台打印 info 日志
Print info log to the console
### warn
向控制台打印 warn 日志
Print warn log to the console
### error
向控制台打印 error 日志
Print error log to the console

注意：
Notice:

- 不同平台对于 console 方法的支持存在差异，建议在开发过程中只使用文档中提到的方法。
- Different platforms have different support for the console method. It is recommended to use only the methods mentioned in the documentation during the development process.
- HBuilderX中有2个重要的代码块，敲`clog`：可直接输出`console.log()`；敲`clogv`：可输出`console.log(": " + );`，并且出现双光标，方便把变量名称和值同时打印出来。
- There are two important code blocks in HBuilderX. Knock on `clog`: you can directly output `console.log()`; hit `clogv`: you can output `console.log(": "+ );`, and double The cursor is convenient to print out the variable name and value at the same time.
- HBuilderX 1.9.7 以上的自定义组件模式，在App端支持打印对象信息到控制台。老版本可使用`clogj`代码块将json对象转为字符串打印出来。
- The custom component mode of HBuilderX 1.9.7 and above supports printing object information to the console on the App side. The old version can use the `clogj` code block to convert the json object into a string and print it out.