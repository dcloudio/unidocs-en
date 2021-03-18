- - vue.config.js is an optional configuration file. If this file exists in the root directory of the project, it will be automatically loaded. It is generally used to configure compilation options such as webpack. For specific specifications, refer to: [vue.config.js](https://cli.vuejs.org/config/#global-cli-config)

    **Support situation**

    - CLI project
    - HBuilderX 2.1.5 and above

    **Precautions**

    - Only the vue page takes effect

    Some configuration items will be overwritten by the compiled configuration, for example:

    - PublicPath does not support. If you need to configure it, please configure it in manifest.json->h5->router->base
    - outputDir does not support
    - assetsDir fixed static
    - pages not supported
    - runtimeCompiler fixed false
    - productionSourceMap fixed false
    - css.extract H5 platform fixed false, other platforms fixed true
    - parallel fixed false
    - When using the cli project, babel-loader will ignore all files in node_modules by default. If you want to explicitly translate a dependency through Babel, you can list it in transpileDependencies. [For details](https://cli.vuejs.org/config/#transpiledependencies)

    **Usage example**

    **Custom static resource directory**

    ```js
    const path = require('path')
    const CopyWebpackPlugin = require('copy-webpack-plugin') //The latest version of the copy-webpack-plugin is currently not compatible. V5.0.0 is recommended
    
    module.exports = {
        configureWebpack: {
            plugins: [
                new CopyWebpackPlugin([
                    {
                        from: path.join(__dirname, 'src/images'),
                        to: path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, 'images')
                    }
                ])
            ]
        }
    }
    ```

    **Inject global dependencies**

    ```js
    const webpack = require('webpack')
    
    module.exports = {
        configureWebpack: {
            plugins: [
                new webpack.ProvidePlugin({
                    'localStorage': ['mp-storage', 'localStorage'],
                    'window.localStorage': ['mp-storage', 'localStorage']
                })
            ]
        }
    }
    ```

    **Delete console when publishing**

    `HBuilderX 2.6.8+`stand by

    ```js
    module.exports = {
        chainWebpack: (config) => {
            // This takes effect when compression is enabled at release or runtime
            config.optimization.minimizer('terser').tap((args) => {
                const compress = args[0].terserOptions.compress
                // Non-App platforms remove Console code (including all Console methods, such as log,debug,info...)
                compress.drop_console = true
                compress.pure_funcs = [
                    '__f__', // App platform VUE removes logging code
                    // 'console.debug' //Removes the specified Console method
                ]
                return args
            })
        }
    }
    ```

    How to enable compression:

    - The project created by HBuilderX is checked to run-->Run to the Mini Program Simulator-->Whether to compress the code during runtime
    - The project created by cli can `pacakge.json`add parameters `--minimize`, example:`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`
