#### cover-image
The image view overlaid on the native component. Native components that can be overridden are the same `cover-view`, and nesting is supported `cover-view`.

**Property description**

| Attribute name | Types of    | Defaults | Description                                                  | Platform difference description |
|:-|:-|:-|:-|:-|
|src|String||Icon path. Support local path and network path. The base64 format is not supported.||
|@load|eventhandle||Triggered when the image is loaded successfully||
|@error|eventhandle||Triggered when the image fails to load||


may cover the native app-vue components: `<video>`,`<map>`

Supported events:`click`

**Unsupported CSS**

- position: fixed
- opacity
- overflow
- padding
- linebreak
- white-space

Note: nvue's cover-view is not in the above restrictions, it only supports and fully supports all nvue's css.

**Tips**

- App vue page end `cover-view`, `cover-image`the other does not support nested components, including nested again `cover-view`, only covered `video`, `map`. App-side nvue page does not have these restrictions since 2.1.5.
- App terminal `cover-image`using the local image then need to set the resource release mode Before packaging, the new node runmode app-plus in the manifest file, set the value liberate.
- AApp side can also use plus.nativeObj.view to draw native content
- App also provides more flexible and powerful `subNvue`
- On the App side, if video and map are heavily used, nvue page is recommended.
