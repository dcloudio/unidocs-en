- ## console

  Print log information to the console.

  ### debug

  Print debug log to the console

  Note: In the App-side custom component mode, the debug method is equivalent to the log method.

  ### log

  Print log to the console

  ### info

  Print info log to the console

  ### warn

  Print warn log to the console

  ### error

  Print error log to the console

  note:

  - Different platforms have different support for the console method. It is recommended to use only the methods mentioned in the document during the development process.
  - There are two important code blocks in HBuilderX. Knock `clog`: can be output directly `console.log()`; Knock `clogv`: can be output `console.log(": " + );`, and double cursors appear, which is convenient for printing variable names and values at the same time.
  - HBuilderX 1.9.7 and above custom component mode supports printing object information to the console. The old version can use `clogj`code blocks to convert json objects into strings and print them out.

  ------