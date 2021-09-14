#### Worker

目前需分平台编写
Currently need to be compiled by platform

- H5：标准H5的worker仍然可以使用
- H5: Standard H5 workers can still be used
- App：App的js是在独立的jscore运行的，如果需要在另一个线程运行js，可以使用web-view组件或renderjs，这样的js运行在webview里，和jscore里的js是两个线程。但注意多个webview之间的js是一个进程，使用webview里的js时注意会影响视图层的渲染。
- App: App's js runs in a separate jscore. If you need to run js in another thread, you can use web-view component or renderjs. Such js runs in webview, and js in jscore is two threads. But note that the js between multiple webviews is a process. When using js in the webview, it will affect the rendering of the view layer.