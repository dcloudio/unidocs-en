### 3.8.7.20230703

::: preview

> index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<script>
			var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') ||
				CSS.supports('top: constant(a)'))
			document.write(
				'<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
				(coverSupport ? ', viewport-fit=cover' : '') + '" />')
		</script>
		<title></title>
		<!--preload-links-->
		<!--app-context-->
	</head>
	<body>
		<div id="app"><!--app-html--></div>
		<script type="module" src="/src/main.js"></script>
	</body>
</html>
```

> jsconfig.json

```JS
{
	"compilerOptions": {
		"types": [
			"@dcloudio/types",
			"miniprogram-api-typings",
			"mini-types"
		]
	}
}
```

> package.json

```JS
{
	"name": "uni-preset-vue",
	"version": "0.0.0",
	"scripts": {
		"dev:app": "uni -p app",
		"dev:app-android": "uni -p app-android",
		"dev:app-ios": "uni -p app-ios",
		"dev:custom": "uni -p",
		"dev:h5": "uni",
		"dev:h5:ssr": "uni --ssr",
		"dev:mp-alipay": "uni -p mp-alipay",
		"dev:mp-baidu": "uni -p mp-baidu",
		"dev:mp-jd": "uni -p mp-jd",
		"dev:mp-kuaishou": "uni -p mp-kuaishou",
		"dev:mp-lark": "uni -p mp-lark",
		"dev:mp-qq": "uni -p mp-qq",
		"dev:mp-toutiao": "uni -p mp-toutiao",
		"dev:mp-weixin": "uni -p mp-weixin",
		"dev:quickapp-webview": "uni -p quickapp-webview",
		"dev:quickapp-webview-huawei": "uni -p quickapp-webview-huawei",
		"dev:quickapp-webview-union": "uni -p quickapp-webview-union",
		"build:app": "uni build -p app",
		"build:app-android": "uni build -p app-android",
		"build:app-ios": "uni build -p app-ios",
		"build:custom": "uni build -p",
		"build:h5": "uni build",
		"build:h5:ssr": "uni build --ssr",
		"build:mp-alipay": "uni build -p mp-alipay",
		"build:mp-baidu": "uni build -p mp-baidu",
		"build:mp-jd": "uni build -p mp-jd",
		"build:mp-kuaishou": "uni build -p mp-kuaishou",
		"build:mp-lark": "uni build -p mp-lark",
		"build:mp-qq": "uni build -p mp-qq",
		"build:mp-toutiao": "uni build -p mp-toutiao",
		"build:mp-weixin": "uni build -p mp-weixin",
		"build:quickapp-webview": "uni build -p quickapp-webview",
		"build:quickapp-webview-huawei": "uni build -p quickapp-webview-huawei",
		"build:quickapp-webview-union": "uni build -p quickapp-webview-union"
	},
	"dependencies": {
		"@dcloudio/uni-app": "3.0.0-3080720230703001",
		"@dcloudio/uni-app-plus": "3.0.0-3080720230703001",
		"@dcloudio/uni-components": "3.0.0-3080720230703001",
		"@dcloudio/uni-h5": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-alipay": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-baidu": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-jd": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-kuaishou": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-lark": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-qq": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-toutiao": "3.0.0-3080720230703001",
		"@dcloudio/uni-mp-weixin": "3.0.0-3080720230703001",
		"@dcloudio/uni-quickapp-webview": "3.0.0-3080720230703001",
		"vue": "^3.2.45",
		"vue-i18n": "^9.1.9"
	},
	"devDependencies": {
		"@dcloudio/types": "^3.3.2",
		"@dcloudio/uni-automator": "3.0.0-3080720230703001",
		"@dcloudio/uni-cli-shared": "3.0.0-3080720230703001",
		"@dcloudio/uni-stacktracey": "3.0.0-3080720230703001",
		"@dcloudio/vite-plugin-uni": "3.0.0-3080720230703001",
		"vite": "4.1.4"
	}
}
```

> vite.config.js

```JS
import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
	],
})
```

:::



### 3.8.4.20230531

::: preview

> index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<script>
			var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') ||
				CSS.supports('top: constant(a)'))
			document.write(
				'<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
				(coverSupport ? ', viewport-fit=cover' : '') + '" />')
		</script>
		<title></title>
		<!--preload-links-->
		<!--app-context-->
	</head>
	<body>
		<div id="app"><!--app-html--></div>
		<script type="module" src="/src/main.js"></script>
	</body>
</html>
```

> jsconfig.json

```JS
{
	"compilerOptions": {
		"types": [
			"@dcloudio/types",
			"miniprogram-api-typings",
			"mini-types"
		]
	}
}
```

> package.json

```JS
{
	"name": "uni-preset-vue",
	"version": "0.0.0",
	"scripts": {
		"dev:app": "uni -p app",
		"dev:app-android": "uni -p app-android",
		"dev:app-ios": "uni -p app-ios",
		"dev:custom": "uni -p",
		"dev:h5": "uni",
		"dev:h5:ssr": "uni --ssr",
		"dev:mp-alipay": "uni -p mp-alipay",
		"dev:mp-baidu": "uni -p mp-baidu",
		"dev:mp-jd": "uni -p mp-jd",
		"dev:mp-kuaishou": "uni -p mp-kuaishou",
		"dev:mp-lark": "uni -p mp-lark",
		"dev:mp-qq": "uni -p mp-qq",
		"dev:mp-toutiao": "uni -p mp-toutiao",
		"dev:mp-weixin": "uni -p mp-weixin",
		"dev:quickapp-webview": "uni -p quickapp-webview",
		"dev:quickapp-webview-huawei": "uni -p quickapp-webview-huawei",
		"dev:quickapp-webview-union": "uni -p quickapp-webview-union",
		"build:app": "uni build -p app",
		"build:app-android": "uni build -p app-android",
		"build:app-ios": "uni build -p app-ios",
		"build:custom": "uni build -p",
		"build:h5": "uni build",
		"build:h5:ssr": "uni build --ssr",
		"build:mp-alipay": "uni build -p mp-alipay",
		"build:mp-baidu": "uni build -p mp-baidu",
		"build:mp-jd": "uni build -p mp-jd",
		"build:mp-kuaishou": "uni build -p mp-kuaishou",
		"build:mp-lark": "uni build -p mp-lark",
		"build:mp-qq": "uni build -p mp-qq",
		"build:mp-toutiao": "uni build -p mp-toutiao",
		"build:mp-weixin": "uni build -p mp-weixin",
		"build:quickapp-webview": "uni build -p quickapp-webview",
		"build:quickapp-webview-huawei": "uni build -p quickapp-webview-huawei",
		"build:quickapp-webview-union": "uni build -p quickapp-webview-union"
	},
	"dependencies": {
		"@dcloudio/uni-app": "3.0.0-3080420230531001",
		"@dcloudio/uni-app-plus": "3.0.0-3080420230531001",
		"@dcloudio/uni-components": "3.0.0-3080420230531001",
		"@dcloudio/uni-h5": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-alipay": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-baidu": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-jd": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-kuaishou": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-lark": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-qq": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-toutiao": "3.0.0-3080420230531001",
		"@dcloudio/uni-mp-weixin": "3.0.0-3080420230531001",
		"@dcloudio/uni-quickapp-webview": "3.0.0-3080420230531001",
		"vue": "^3.2.45",
		"vue-i18n": "^9.1.9"
	},
	"devDependencies": {
		"@dcloudio/types": "^3.3.2",
		"@dcloudio/uni-automator": "3.0.0-3080420230531001",
		"@dcloudio/uni-cli-shared": "3.0.0-3080420230531001",
		"@dcloudio/uni-stacktracey": "3.0.0-3080420230531001",
		"@dcloudio/vite-plugin-uni": "3.0.0-3080420230531001",
		"vite": "4.1.4"
	}
}
```

> vite.config.js

```JS
import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
	],
})
```

:::