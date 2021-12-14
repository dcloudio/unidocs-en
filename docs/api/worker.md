#### Worker

目前需分平台编写
Currently needs to be compiled by platform

- H5：标准H5的worker仍然可以使用
- H5: the worker of standard H5 is still available
- App：App的js是在独立的jscore运行的，如果需要在另一个线程运行js，可以使用web-view组件或renderjs，这样的js运行在webview里，和jscore里的js是两个线程。但注意多个webview之间的js是一个进程，使用webview里的js时注意会影响视图层的渲染。
- App: the js of App runs in an independent jscore. If you need to run js in another thread, web-view component or renderjs can be used. Such js running in webview and js in jscore are in two threads. However, it should note that the js among multiple webviews is a process, and using js in webview will affect the rendering of the view layer.
