
# 状态管理Vuex 
# State management Vuex

## 介绍
## introduce

### Vuex 是什么？
### What is Vuex?

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
Vuex is a state management mode developed specifically for Vue.js applications. It uses centralized storage to manage the state of all components of the application, and uses corresponding rules to ensure that the state changes in a predictable manner.

uni-app 内置了 [Vuex](https://vuex.vuejs.org/zh/) 。
uni-app has built-in [Vuex](https://vuex.vuejs.org/zh/).


### 什么是“状态管理模式”？
### What is the "state management mode"?

让我们从一个简单的 Vue 计数应用开始：
Let's start with a simple Vue counting application:

```html
<!-- view 视图-->
<!-- view view-->
<template>
	<view>
		{{count}}
	</view>
</template>
<script>
	export default {
		// state 数据源
		// state data source
		data() {
			return {
				count: 0
			}
		},
		// actions 控制状态变化
		// actions control state changes
		methods: {
			increment() {
				this.count++
			}
		}
	}
</script>
```


这个状态自管理应用包含以下几个部分：
This state self-management application contains the following parts:
- state，驱动应用的数据源；
- state, the data source that drives the application;
- view，以声明方式将 state 映射到视图；
- view, which maps state to view in a declarative manner;
- actions，响应在 view 上的用户输入导致的状态变化。
- actions, respond to the state changes caused by user input on the view.
以下是一个表示“单向数据流”理念的简单示意：
The following is a simple representation of the concept of "one-way data flow":

<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b0ed6b40-45ec-11eb-bf0a-894cbc80c40a.png" />



但是，当我们的应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏：
However, when our application encounters **multiple components sharing state**, the simplicity of one-way data flow can easily be destroyed:

- 多个视图依赖于同一状态。
- Multiple views depend on the same state.
- 来自不同视图的行为需要变更同一状态。
- Actions from different views need to change the same state.

因此，我们把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！这就是vuex的产生。
Therefore, we extract the shared state of the component and manage it in a global singleton mode. In this mode, our component tree constitutes a huge "view", no matter where in the tree, any component can get state or trigger behavior! This is where vuex came into being.

通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。这就是 Vuex 背后的基本思想。
By defining and isolating various concepts in state management and maintaining independence between views and states through mandatory rules, our code will become more structured and easier to maintain. This is the basic idea behind Vuex.

Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。
Vuex is a state management library specially designed for Vue.js to use the fine-grained data response mechanism of Vue.js to perform efficient state updates.

<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/b1ba7f40-45ec-11eb-8a36-ebb87efcf8c0.png" />


如果你想交互式地学习 Vuex，可以看这个 [Scrimba 上的 Vuex 课程](https://scrimba.com/learn/vuex)，它将录屏和代码试验场混合在了一起，你可以随时暂停并尝试。
If you want to learn Vuex interactively, you can watch this [Vuex course on Scrimba](https://scrimba.com/learn/vuex), which combines screen recording and code proving grounds, and you can pause at any time And try.



## 优势与使用场景
## Advantages and usage scenarios

- Vuex的状态存储是响应式的，可跟踪每一个状态变化，一旦它改变，所有关联组件都会自动更新相对应的数据。
- Vuex's state storage is responsive and can track every state change. Once it changes, all associated components will automatically update the corresponding data.
- 共享数据，解决了非父子组件的消息传递（将数据存放在state中）。
- Sharing data, which solves the message passing of non-parent and child components (store the data in the state).
- 统一状态管理，减少了请求次数，有些情景可以直接从内存中的state获取数据。
- Unified state management reduces the number of requests. In some scenarios, data can be obtained directly from the state in the memory.

### Vuex与全局变量区别
### The difference between Vuex and global variables

|vuex	|全局变量|
|vuex |Global Variables|
|--	|--	|
|不能直接改变store里面的变量，由统一的方法修改数据	|可以任意修改	|
|The variables in the store cannot be changed directly, and the data can be modified by a unified method |Can be modified arbitrarily |
|每个组件可以根据自己vuex的变量名引用不受影响	|全局变量可能操作命名污染	|
|Each component can be referenced according to its own vuex variable name without being affected |Global variables may operate and name pollution |
|解决了多组件之间通信的问题	|跨页面数据共享	|
|Solve the problem of communication between multiple components |Cross-page data sharing |
|适用于多模块、业务关系复杂的中大型项目	|适用于demo或者小型项目	|
|Suitable for medium and large projects with multiple modules and complex business relationships |Suitable for demo or small projects |

### 什么时候需要用vuex？
### When do I need to use vuex?
- 当一个组件需要多次派发事件时。例如购物车数量加减。
- When a component needs to dispatch events multiple times. For example, adding or subtracting the number of shopping carts.
- 跨组件共享数据、跨页面共享数据。例如订单状态更新。
- Sharing data across components and data across pages. For example, order status updates.
- 需要持久化的数据。例如登录后用户的信息。
- Data that needs to be persisted. For example, the user's information after logging in.
- 当您需要开发中大型应用，适合复杂的多模块多页面的数据交互，考虑如何更好地在组件外部管理状态时。
- When you need to develop medium and large applications, suitable for complex multi-module and multi-page data interaction, when considering how to better manage the state outside the component.


## 项目结构
## Project structure

使用 Vuex 需要遵守的规则：
Rules to follow when using Vuex:
- 应用层级的状态应该集中到单个 `store` 对象中。
- Application-level state should be concentrated into a single `store` object.
- 提交 `mutation` 是更改状态的唯一方法，并且这个过程是同步的。
- Submitting `mutation` is the only way to change the state, and this process is synchronous.
- 异步逻辑都应该封装到 `action` 里面。
- Asynchronous logic should be encapsulated in `action`.
只要你遵守以上规则，如何组织代码随你便。如果你的 `store` 文件太大，只需将 `action` 、`mutation` 和 `getter` 分割到单独的文件。
As long as you follow the above rules, how to organize the code is up to you. If your `store` file is too big, just split `action`, `mutation` and `getter` into separate files.
对于大型应用，我们会希望把 `Vuex` 相关代码分割到模块中。下面是项目结构示例：
For large-scale applications, we will want to split the code related to `Vuex` into modules. The following is an example of the project structure:


```html
├── pages
├── static
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方(# Where we assemble the module and export the store)
    ├── actions.js        # 根级别的 action(# Root level action)
    ├── mutations.js      # 根级别的 mutation(# Root-level mutation)
    └── modules           # 模块文件夹(# Module folder)
        ├── cart.js       # 购物车模块(# Shopping Cart Module)
        └── products.js   # 产品模块(# Product module)
├── App.vue
├── main.js
├── manifest.json
├── pages.json
└── uni.scss
```


## 核心概念
## Core idea

每一个 `Vuex` 应用的核心就是 `store`（仓库），它包含着你的应用中大部分的状态 (`state`)。
The core of every `Vuex` application is `store`, which contains most of the state (`state`) of your application.

状态管理有5个核心：`state`、`getter`、`mutation`、`action`、`module`。
State management has 5 cores: `state`, `getter`, `mutation`, `action`, and `module`.


### State

单一状态树，定义应用状态的默认初始值，页面显示所需的数据从该对象中进行读取。
The single state tree defines the default initial value of the application state, and the data required for the page display is read from this object.

- `Vuex` 使用单一状态树，用一个对象就包含了全部的应用层级状态。它便作为一个“唯一数据源”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。
- `Vuex` uses a single state tree, and one object contains all application-level states. It exists as a "only data source". This also means that each application will only contain one store instance.
- 单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
- A single state tree allows us to directly locate any specific state segment, and easily obtain a snapshot of the entire current application state during debugging.
- 不可直接对 `state` 进行更改，需要通过 `Mutation` 方法来更改。
- The `state` cannot be changed directly, it needs to be changed by the `Mutation` method.

由于 `Vuex` 的状态存储是响应式的，从 `store` 实例中读取状态最简单的方法就是在计算属性中返回某个状态：
Since the state storage of `Vuex` is responsive, the easiest way to read the state from the `store` instance is to return a certain state in the calculated attribute:

```js
// 创建一个 Counter 组件
// Create a Counter component
const Counter = {
	computed: {
		count () {
			return store.state.count
		}
	}
}
```


每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。
Whenever `store.state.count` changes, the calculated attributes will be re-calculated and the associated DOM will be updated.

然而，这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 `state` 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。
However, this pattern causes components to rely on global state singletons. In a modular build system, every component that needs to use `state` needs to be imported frequently, and the state needs to be simulated when testing components.


Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
Vuex provides a mechanism to "inject" state from the root component into each child component through the store option (you need to call Vue.use(Vuex)):

1. 在 `uni-app` 项目根目录下，新建 `store` 目录，在此目录下新建 `index.js` 文件。在 `index.js` 文件配置如下：
1. In the root directory of the `uni-app` project, create a new `store` directory, and create a new `index.js` file in this directory. The configuration in the `index.js` file is as follows:

```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//vue的插件机制
//vue plug-in mechanism

//Vuex.Store 构造器选项
//Vuex.Store constructor options
const store = new Vuex.Store({
	state:{
		//存放状态
		//Storage status
		"username":"foo",
		"age":18
	}
})
export default store
```


2. 在 `main.js` 中导入文件。
2. Import the file in `main.js`.

```js
<!-- 页面路径：main.js -->
<!-- Page path: main.js -->
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store

// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
// Provide the store object to the "store" option, which can inject store instances into all child components
const app = new Vue({
	store,
	...App
})
app.$mount()

```

**获取state**
**Get state**

1. 通过属性访问，需要在根节点注入 `store` 。
1. To access through attributes, you need to inject `store` into the root node.
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<text>用户名：{{username}}</text>
		<text>User name: {{username}}</text>
	</view>
</template>
<script>
	import store from '@/store/index.js';
	//需要引入store
	//Need to introduce store
	export default {
		data() {
			return {}
		},
		computed: {
			username() {
				return store.state.username 
			}
		}
	}
</script>
```

2. 在组件中使用，通过 `this.$store` 访问到 `state` 里的数据。
2. Use in components, access the data in `state` through `this.$store`.

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<text>用户名：{{username}}</text>
		<text>User name: {{username}}</text>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		computed: {
			username() {
				return this.$store.state.username 
			}
		}
	}
</script>
```


#### mapState

3. 通过 `mapState` 辅助函数获取。
3. Obtained by the `mapState` helper function.
当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
When a component needs to obtain multiple states, declaring these states as calculated properties will be somewhat repetitive and redundant.
为了解决这个问题，我们可以使用 **mapState 辅助函数** 帮助我们生成计算属性，让你少按几次键：
In order to solve this problem, we can use the **mapState helper function** to help us generate calculated properties, so that you can press the key a few times less:

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>用户名：{{username}}</view>
		<view>User name: {{username}}</view>
		<view>年龄：{{age}}</view>
		<view>Age: {{age}}</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	//引入mapState
	//Introduce mapState
	export default {
		data() {
			return {}
		},
		computed: mapState({
		    // 从state中拿到数据 箭头函数可使代码更简练
			// Get data from the state arrow function can make the code more concise
		    username: state => state.username,
			age: state => state.age,
		}) 
	}
</script>
```


- 当映射的计算属性的名称与 `state` 的子节点名称相同时，我们也可以给 `mapState` 传一个字符串数组。
-When the name of the mapped calculated attribute is the same as the name of the child node of `state`, we can also pass a string array to `mapState`.

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>用户名：{{username}}</view>
		<view>User name: {{username}}</view>
		<view>年龄：{{age}}</view>
		<view>Age: {{age}}</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	//引入mapState
	//Introduce mapState
	export default {
		data() {
			return {}
		},
		computed: mapState([
			'username',
			//映射 this.username 为 store.state.username
			//Map this.username to store.state.username
			'age',
		])
	}
</script>
```


- 为了能够使用 `this` 获取组件自己的data数据，必须使用常规函数。
- In order to be able to use `this` to get the component's own data data, regular functions must be used.

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>用户名：{{username}}</view>
		<view>User name: {{username}}</view>
		<view>年龄：{{age}}</view>
		<view>Age: {{age}}</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	//引入mapState
	//Introduce mapState
	export default {
		data() {
			return {
				firstName:"Li"
			}
		},	
		computed: {
			...mapState({
				username: function (state) {
				    return this.firstName + ' ' +  state.username 
				},
				age: state => state.age,
			})
		},
	}
</script>
```


- 使用对象展开运算符
- Use the object expansion operator

`mapState` 函数返回的是一个对象。使用对象展开运算符将多个对象合并为一个，以使我们可以将最终对象传给 `computed` 属性。极大地简化写法：
The `mapState` function returns an object. Use the object expansion operator to merge multiple objects into one so that we can pass the final object to the `computed` property. Greatly simplify the writing:
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>用户名：{{username}}</view>
		<view>User name: {{username}}</view>
		<view>年龄：{{age}}</view>
		<view>Age: {{age}}</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	//引入mapState
	//Introduce mapState
	export default {
		data() {
			return {}
		},
		computed: {
			//使用对象展开运算符将此对象混入到外部对象中
			//Use the object expansion operator to mix this object into an external object
			...mapState({
				username: state => state.username,
				age: state => state.age,
			})
		},
	}
</script>
```



### Getter

可以认为是 `store` 的计算属性，对 `state` 的加工，是派生出来的数据。
It can be considered as the calculated attribute of `store`, and the processing of `state` is derived data.
- 就像 `computed` 计算属性一样，`getter` 返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。
- Just like the calculated property of `computed`, the value returned by `getter` will be cached according to its dependencies, and will be recalculated only when its dependent value changes.
- 可以在多组件中共享 `getter` 函数，这样做还可以提高运行效率。
- The `getter` function can be shared among multiple components, which can also improve operating efficiency.
在 `uni-app` 项目根目录下，`store` 目录 `index.js` 文件下：
In the root directory of the `uni-app` project, under the `index.js` file in the `store` directory:


```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		todos: [{
				id: 1,
				text: '我是内容一(Content One)',
				done: true
			},
			{
				id: 2,
				text: '我是内容二(content two)',
				done: false
			}
		]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		}
	}
})

export default store

```



在 `store` 上注册 `getter`，`getter` 方法接受以下参数：
Register the `getter` on the `store`, the `getter` method accepts the following parameters:
- state, if defined in the module, it is the local state of the module
- state, 如果在模块中定义则为模块的局部状态
- getters, 等同于 store.getters
- getters, equivalent to store.getters
```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		todos: [{
				id: 1,
				text: '我是内容一(Content one)',
				done: true
			},
			{
				id: 2,
				text: '我是内容二(Content two)',
				done: false
			}
		]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			//state ：可以访问数据
			//state: data can be accessed
			//getters：访问其他函数，等同于 store.getters
			//getters: access to other functions, equivalent to store.getters
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	}
})

export default store
```


**获取getters**
**Get getters**

1. 通过属性访问，`Getter` 会暴露为 `store.getters` 对象，你可以以属性的形式访问这些值。
1. Through property access, `Getter` will be exposed as a `store.getters` object, and you can access these values in the form of properties.

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>	
		<view v-for="(item,index) in todos">
			<view>{{item.id}}</view>
			<view>{{item.text}}</view>
			<view>{{item.done}}</view>
		</view>
	</view>
</template>
<script>
	import store from '@/store/index.js'
	//需要引入store
	//Need to introduce store
	export default {
		computed: {
			todos() {
				return store.getters.doneTodos
			}
		}
	}
</script>
```

注意，`getter` 在通过属性访问时是作为 `Vue` 的响应式系统的一部分缓存其中的。
Note that the `getter` is cached as part of the responsive system of `Vue` when accessed through attributes.

2. 通过 `this.$store` 访问。
2. Access through `this.$store`.
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>	
		<view v-for="(item,index) in todos">
			<view>{{item.id}}</view>
			<view>{{item.text}}</view>
			<view>{{item.done}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		computed: {
			todos() {
				return this.$store.getters.doneTodos
			}
		}
	}
</script>
```


3. 通过方法访问。
3. Access by method.
你也可以通过让 `getter` 返回一个函数，来实现给 `getter` 传参。在你对 `store` 里的数组进行查询时非常有用。
You can also pass parameters to the getter by letting the getter return a function. It is very useful when you are querying the array in `store`.
注意，`getter` 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
Note that when `getter` is accessed through a method, it will be called every time, and the result will not be cached.
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view v-for="(item,index) in todos">
			<view>{{item}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		computed: {
			todos() {
				return this.$store.getters.getTodoById(2) 
			}
		}
	}
</script>
```



#### mapGetters


4. 通过 `mapGetters` 辅助函数访问。
4. Access through the `mapGetters` helper function.

`mapGetters` 辅助函数仅仅是将 `store` 中的 `getter` 映射到局部计算属性：
The `mapGetters` helper function just maps the `getters` in the `store` to local calculated properties:

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>{{doneTodosCount}}</view>
	</view>
</template>
<script>
	import {mapGetters} from 'vuex' 
	//引入mapGetters
	//Introduce mapGetters
	export default {
		computed: {
			// 使用对象展开运算符将 getter 混入 computed 对象中
			// Use object expansion operator to mix getter into computed object
			...mapGetters([
				'doneTodos',
				'doneTodosCount',
				// ...
			])
		}
	}
</script>
```


如果你想将一个 `getter` 属性另取一个名字，使用对象形式：
If you want to give a getter property another name, use the object form:

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>{{doneCount}}</view>
	</view>
</template>
<script>
	import {mapGetters} from 'vuex' 
	//引入mapGetters
	//Introduce mapGetters
	export default {
		computed: {
			...mapGetters({
			  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
			  // Map `this.doneCount` to `this.$store.getters.doneTodosCount`
			  doneCount: 'doneTodosCount'
			})
		}
	}
</script>
```




### Mutation


**Vuex中store数据改变的唯一方法就是mutation**
**The only way to change store data in Vuex is mutation**


通俗的理解，`mutations` 里面装着改变数据的方法集合，处理数据逻辑的方法全部放在 `mutations` 里，使数据和视图分离。
In popular understanding, `mutations` contains a collection of methods for changing data, and methods for processing data logic are all placed in `mutations` to separate data from views.
Vuex 中的 `mutation` 非常类似于事件：每个 `mutation` 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 `state` 作为第一个参数：
The `mutation` in Vuex is very similar to events: each `mutation` has a string event type (type) and a callback function (handler). This callback function is where we actually make state changes, and it will accept `state` as the first parameter:

```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		add(state) {
			// 变更状态
			// change status
			state.count += 2
		}
	}
})
export default store

```


你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 add 的 `mutation` 时，调用此函数”，要唤醒一个 mutation handler，你需要以相应的 type 调用 `store.commit` 方法。
You cannot call a mutation handler directly. This option is more like event registration: "When a `mutation` of type add is triggered, call this function". To wake up a mutation handler, you need to call the `store.commit` method with the corresponding type.

**注意**：`store.commit` 调用 `mutation`（需要在根节点注入 store）。
**Note**: `store.commit` calls `mutation` (need to inject store at the root node).
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count}}</view>
		<view>Quantity: {{count}}</view>
		<button @click="addCount">增加</button>
		<button @click="addCount">Add</button>
	</view>
</template>
<script>
import store from '@/store/index.js'	
export default {
	computed: {
		count() {
			return this.$store.state.count
		}
	},
	methods: {
		addCount() {
			store.commit('add')
		}
	}
}
</script>
```



**传入参数**
**Incoming parameters**

你可以向 `store.commit` 传入额外的参数，即 `mutation` 的 载荷（payload）：
You can pass additional parameters to `store.commit`, namely the payload of `mutation`:
还是以累加器的例子来实现 `mutation` 函数的传参，来动态定义累加的数量。
Still take the example of accumulator to implement the parameter passing of the `mutation` function to dynamically define the amount of accumulation.

- 在 `mutation` 传参（载荷）可以传递一个参数。
- Passing a parameter (payload) in `mutation` can pass a parameter.
```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		add(state, n) {
			state.count += n
		}
	}
})
export default store
```


```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<view>Quantity: {{count }}</view>
		<button @click="addCount">增加</button>
		<button @click="addCount">Add</button>
	</view>
</template>
<script>
	import store from '@/store/index.js'
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			addCount() {
				store.commit('add', 5)
				//每次累加 5
				//Accumulate 5 each time
			}
		}
	}
</script>
```

- 在 `mutation` 传参（载荷）可以也可以传递一个对象。让我们修改上面累加器的例子：
- Passing parameters (payload) in `mutation` can also pass an object. Let us modify the above accumulator example:

```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		add(state, payload) {
			state.count += payload.amount
		}
	}
})
export default store

```


```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<view>Quantity: {{count }}</view>
		<button @click="addCount">增加</button>
		<button @click="addCount">Add</button>
	</view>
</template>
<script>
	import store from '@/store/index.js'
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			addCount () {
				//把载荷和type分开提交
				//Submit the payload and type separately
				store.commit('add', { amount: 10 })
			}
		}
	}
</script>
```


**提交方式**
**Submission method**



1. 对象风格的提交方式
1. Object style submission method
我们修改组件中 `store.commit` 提交方式：
We modify the submission method of `store.commit` in the component:
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<view>Quantity: {{count }}</view>
		<button @click="addCount">增加</button>
		<button @click="addCount">Add</button>
	</view>
</template>
<script>
	import store from '@/store/index.js'
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			addCount() {
				//整个对象都作为载荷传给 mutation 函数
				//The entire object is passed to the mutation function as a payload
				store.commit({
					type: 'add',
					amount: 6
				})
			}
		}
	}
</script>
```


当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：
When using the object-style submission method, the entire object is passed to the mutation function as the payload, so the handler remains unchanged:

```js
	mutations: {
		add(state, payload) {
			state.count += payload.amount
		}
	}
```


#### mapMutations

2. 通过 `mapMutations` 辅助函数提交。
2. Submit via the `mapMutations` auxiliary function.
创建组件方法提交 `mutation`。
Create a component method and submit `mutation`.
使用 `mapMutations` 辅助函数将组件中的 `methods` 映射为 `store.commit` 调用（需要在根节点注入 `store`）。
Use the `mapMutations` helper function to map the `methods` in the component to the call of `store.commit` (you need to inject `store` at the root node).

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count}}</view>
		<view>Quantity: {{count}}</view>
		<button @click="add">增加</button>
		<button @click="add">Add</button>
	</view>
</template>
<script>
	import { mapMutations } from 'vuex'
	//引入mapMutations
	//Introduce mapMutations
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			...mapMutations(['add'])
			//对象展开运算符直接拿到add
			//Object expansion operator directly get add
		}
	}
</script>
```


```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		add(state) {
			// 变更状态
			// change status
			state.count += 2
		}
	}
})
export default store
```



**遵守规则**
**Follow the rules**

既然 `Vuex` 的 `store` 中的状态是响应式的，那么当我们变更状态时，监视状态的 `Vue` 组件也会自动更新。这也意味着 `Vuex` 中的 `mutation` 也需要与使用 `Vue` 一样遵守一些注意事项：
Since the state in the `store` of `Vuex` is responsive, when we change the state, the `Vue` component that monitors the state will also be updated automatically. This also means that the `mutation` in `Vuex` also needs to follow some precautions like using `Vue`:
- 最好提前在你的 `store` 中初始化好所有所需属性。
- It is best to initialize all required attributes in your `store` in advance.
- 当需要在对象上添加新属性时，你应该
- When you need to add new properties to the object, you should
	- 使用 `Vue.set(obj, 'newProp', 123)`, 或者
	- Use `Vue.set(obj,'newProp', 123)`, or
	- 以新对象替换老对象。例如，利用对象展开运算符我们可以这样写：
	- Replace old objects with new ones. For example, using the object expansion operator we can write:


```js
	state.obj = { ...state.obj, newProp: 123 }
```



**Mutation 必须是同步函数**
**Mutation must be a synchronous function**


一条重要的原则就是要记住** mutation 必须是同步函数**
An important principle is to remember that the mutation must be a synchronous function.

我们要通过提交 `mutation` 的方式来改变状态数据，是因为我们想要更明确地追踪到状态的变化。如果是类似下面这样异步的话：
We want to change the state data by submitting `mutation` because we want to track the state changes more clearly. If it is asynchronous like the following:

```js
	mutations: {
		someMutation (state) {
			api.callAsyncMethod(() => {
				state.count++
			})
		}
	}
```

我们就不知道什么时候状态会发生改变，所以也就无法追踪了，这与 `mutation` 的设计初心相悖，所以强制规定它必须是同步函数。
We don't know when the state will change, so it can't be traced. This is contrary to the original intention of `mutation`, so it must be a synchronous function.


### Action


`action` 类似于 `mutation` ，不同在于：
`action` is similar to `mutation`, the difference is:

- action 提交的是 `mutation`，通过 `mutation` 来改变 `state` ，而不是直接变更状态。
- The action submitted is `mutation`, through `mutation` to change the `state` instead of directly changing the state.
- action 可以包含任意异步操作。
- action can contain any asynchronous operation.

让我们来注册一个简单的 `action` ：
Let's register a simple action:


```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations:{
		add(state) {
			// 变更状态
			// change status
			state.count += 2
		}
	},
	actions:{
		addCountAction (context) {
		    context.commit('add')
		}
	}
})
export default store
```

`action` 函数接受一个与 `store` 实例具有相同方法和属性的 `context` 对象，因此你可以调用 `context.commit` 提交一个 `mutation`，或者通过 `context.state` 和 `context.getters` 来获取 `state` 和 `getters`。
The `action` function accepts a `context` object with the same methods and properties as the `store` instance, so you can call `context.commit` to submit a `mutation`, or pass `context.state` and `context.getters` To get `state` and `getters`.

实践中，我们会经常用到 ES2015 的参数解构来简化代码（特别是我们需要调用 `commit` 很多次的时候）：
In practice, we often use ES2015 parameter destructuring to simplify the code (especially when we need to call `commit` many times):

```js
	actions: {
		//参数解构
		//Parameter deconstruction
		addCountAction ({commit}) {
		    commit('add')
		}
	}
```




**分发 Action**
**Distribute Action**

1. `actions` 通过 `store.dispatch` 方法触发。
1. The `actions` are triggered by the `store.dispatch` method.
```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count}}</view>
		<view>Quantity: {{count}}</view>
		<button @click="add">增加</button>
		<button @click="add">Add</button>
	</view>
</template>
<script>
	import store from '@/store/index.js';
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			add () {
				store.dispatch('addCountAction')
			}
		}
	}
</script>

```



- `actions` 支持以载荷形式分发:
- `actions` supports distribution in the form of payload:

```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations:{
		add(state, payload) {
			state.count += payload.amount
		} 
	},
	actions:{
		addCountAction (context , payload) {
		    context.commit('add',payload)
		}
	}
})
export default store
```


```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<view>Quantity: {{count }}</view>
		<button @click="add">增加</button>
		<button @click="add">Add</button>
	</view>
</template>
<script>
	import store from '@/store/index.js';
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			add () {
				// 以载荷形式分发
				// Distribute in the form of payload
				store.dispatch('addCountAction', {amount: 10})
			}
		}
	}
</script>
```


- `actions` 支持以对象形式分发:
- `actions` supports distribution as objects:

```js
	methods: {
		add () {
			// 以对象形式分发
			// Distributed as an object
			store.dispatch({
				type: 'addCountAction',
				amount: 5
			})
		}
	}
```



`action` 可以执行任意的同步和异步操作
`action` can perform arbitrary synchronous and asynchronous operations

我们可以在 `action` 内部执行异步操作：
We can perform asynchronous operations inside `action`:

```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations:{
		add(state) {
			// 变更状态
			// change status
			state.count += 2
		}
	},
	actions:{
		addCountAction (context) {
			//在执行累加的时候，会等待两秒才执行
			//When performing accumulation, it will wait for two seconds before executing
		    setTimeout(function () {
				context.commit('add')
		    }, 2000)
		}
	}
})
export default store
```


来看一个更加实际的购物车示例，涉及到**调用异步 API** 和**分发多重 mutation**：
Let's look at a more practical shopping cart example, involving **calling asynchronous API** and **distributing multiple mutations**:


```js
	actions: {
		checkout ({ commit, state }, products) {
			// 把当前购物车的物品备份起来
			// Back up the items in the current shopping cart
			const savedCartItems = [...state.cart.added]
			// 发出结账请求，然后乐观地清空购物车
			// Send a checkout request, then empty the shopping cart optimistically
			commit(types.CHECKOUT_REQUEST)
			// 购物 API 接受一个成功回调和一个失败回调
			// Shopping API accepts a success callback and a failure callback
			shop.buyProducts(
				products,
				// 成功操作
				// Successful operation
				() => commit(types.CHECKOUT_SUCCESS),
				// 失败操作
				// failed operation
				() => commit(types.CHECKOUT_FAILURE, savedCartItems)
			)
		}
	}
```

注意我们正在进行一系列的异步操作，并且通过提交 `mutation` 来记录 `action` 产生的状态变更。
Note that we are performing a series of asynchronous operations and submitting a mutation to record the state changes made by the action.

#### mapActions 

2. 通过 `mapActions` 辅助函数分发。
2. Distributed through the `mapActions` helper function.
创建组件方法分发 `action`。
Create a component method to distribute the `action`.

- 你在组件中使用 `this.$store.dispatch('xxx')` 分发 `action`
- You use `this.$store.dispatch('xxx')` in the component to distribute the `action`
- 或者使用 `mapActions` 辅助函数将组件的 `methods` 映射为 `store.dispatch` 调用（需要先在根节点注入 `store` ）
- Or use the `mapActions` helper function to map the component's `methods` to `store.dispatch` calls (you need to inject `store` at the root node first)

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<view>Quantity: {{count }}</view>
		<button @click="addCountAction">增加</button>
		<button @click="addCountAction">Add</button>
	</view>
</template>
<script>
	import { mapActions } from 'vuex'
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			...mapActions([
			    'addCountAction', 
				// 将 `this.addCountAction()` 映射为 `this.$store.dispatch('addCountAction')`
				// Map `this.addCountAction()` to `this.$store.dispatch('addCountAction')`
			])
		}
	}
</script>

```



- `mapActions` 也支持传入参数（载荷）：
- `mapActions` also supports incoming parameters (payload):

```js
	methods: {
		...mapActions([
		    'addCountAction' 
			// 将 `this.addCountAction(amount)` 映射为 
			//`this.$store.dispatch('addCountAction', amount)`
		]),
	}
```

- `mapActions` 也支持传递一个对象：
- `mapActions` also supports passing an object:

```js
	methods: {
		...mapActions({
			addCount: 'addCountAction',
			// 将 `this.addCount()` 映射为 `this.$store.dispatch('addCountAction')`
			// Map `this.addCount()` to `this.$store.dispatch('addCountAction')`
		})
	}
```


**组合 Action**
**Combination Action**

`action` 通常是异步的，那么如何知道 `action` 什么时候结束呢？更重要的是，我们如何才能组合多个 `action`，以处理更加复杂的异步流程？
The `action` is usually asynchronous, so how do you know when the `action` ends? More importantly, how can we combine multiple `actions` to handle more complex asynchronous processes?

首先，你需要明白 `store.dispatch` 可以处理被触发的 `action` 的处理函数返回的 `Promise`，并且 `store.dispatch` 仍旧返回 `Promise` ：
First of all, you need to understand that `store.dispatch` can handle the `Promise` returned by the triggered `action` processing function, and `store.dispatch` still returns `Promise`:

```js
	actions: {
		actionA ({ commit }) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('someMutation')
					resolve()
				}, 1000)
			})
		}
	}
```

现在你可以在组件中使用：
Now you can use in the component:

```js
	store.dispatch('actionA').then(() => {
		// ...
	})
```


在另外一个 `action` 中也可以：
It is also possible in another `action`:


```js
	actions: {
		// ...
		actionB ({ dispatch, commit }) {
			return dispatch('actionA').then(() => {
				commit('someOtherMutation')
			})
		}
	}
```


最后，如果我们利用 `async / await`，我们可以如下组合 `action` ：
Finally, if we use `async / await`, we can combine `action` as follows:


```js
	// 假设 getData() 和 getOtherData() 返回的是 Promise
	// Assuming getData() and getOtherData() return Promise
	actions: {
		async actionA ({ commit }) {
			commit('gotData', await getData())
		},
		async actionB ({ dispatch, commit }) {
			await dispatch('actionA') 
			// 等待 actionA 完成
			// wait for actionA to complete
			commit('gotOtherData', await getOtherData())
		}
	}
```


> 一个 `store.dispatch` 在不同模块中可以触发多个 `action` 函数。在这种情况下，只有当所有触发函数完成后，返回的 `Promise` 才会执行。
>  A `store.dispatch` can trigger multiple `action` functions in different modules. In this case, the returned `Promise` will only be executed when all trigger functions are completed.


### Module

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，`store` 对象就有可能变得相当臃肿。
Due to the use of a single state tree, all the states of the application will be concentrated into a relatively large object. When the application becomes very complex, the `store` object may become quite bloated.
为了解决以上问题，`Vuex` 允许我们将 `store` 分割成模块（module）。每个模块拥有自己的 `state`、`mutation`、`action`、`getter`、甚至是嵌套子模块——从上至下进行同样方式的分割：
In order to solve the above problems, `Vuex` allows us to divide `store` into modules. Each module has its own `state`, `mutation`, `action`, `getter`, and even nested submodules-split in the same way from top to bottom:
1. 在 `store` 文件夹下新建 `modules` 文件夹，并在下面新建 `moduleA.js` 和 `moduleB.js` 文件用来存放 `vuex` 的 `modules` 模块。
1. Create a new `modules` folder under the `store` folder, and create new `moduleA.js` and `moduleB.js` files below to store the `modules` modules of `vuex`.

```html
├── components             # 组件文件夹(# Component folder)
    └── myButton 
        └── myButton.vue   # myButton组件(  # myButton component)
├── pages
    └── index 
	    └── index.vue      # index页面(  # index page)
├── static
├── store
    ├── index.js          # 我们组装模块并导出 store 的地方(# Where we assemble the module and export the store)
    └── modules           # 模块文件夹(# Module folder)
        ├── moduleA.js    # 模块moduleA(# Module moduleA)
        └── moduleB.js    # 模块moduleB(# Module moduleB)
├── App.vue
├── main.js
├── manifest.json
├── pages.json
└── uni.scss
```

2. 在 `main.js` 文件中引入 `store`。
2. Introduce `store` in the `main.js` file.

```js
<!-- 页面路径：main.js -->
<!-- Page path: main.js -->
	import Vue from 'vue'
	import App from './App'
	import store from './store'

	Vue.prototype.$store = store

	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	// Provide the store object to the "store" option, which can inject store instances into all child components
	const app = new Vue({
		store,
		...App
	})
	app.$mount()
```


3. 在项目根目录下，新建 `store` 文件夹，并在下面新建 `index.js` 文件，作为模块入口，引入各子模块。
3. In the project root directory, create a new `store` folder, and create a new `index.js` file below, as the module entry, introduce each sub-module.

```js
<!-- 页面路径：store/index.js -->
<!-- Page path: store/index.js -->
	import Vue from 'vue'
	import Vuex from 'vuex'

	import moduleA from '@/store/modules/moduleA'
	import moduleB from '@/store/modules/moduleB'

	Vue.use(Vuex)
	export default new Vuex.Store({
		modules:{
			moduleA,moduleB
		}
	})
```

4. 子模块 `moduleA` 页面内容。
4. Submodule `moduleA` page content.
```js
<!-- 子模块moduleA路径：store/modules/moduleA.js -->
<!-- Submodule moduleA path: store/modules/moduleA.js -->
export default {
	state: {
		text:"我是moduleA模块下state.text的值(I am the value of state.text under moduleA module)"
	},
	getters: {
		
	},
	mutations: {
		
	},
	actions: { 
		
	}
}
```

5. 子模块 `moduleB` 页面内容。
5. Submodule `moduleB` page content.

```js
<!-- 子模块moduleB路径：store/modules/moduleB.js -->
<!-- Path of submodule moduleB: store/modules/moduleB.js -->
export default {
	state: {
		timestamp: 1608820295
		//初始时间戳
		//Initial timestamp
	},
	getters: {
		timeString(state) {
			//时间戳转换后的时间
			//Time after timestamp conversion
			var date = new Date(state.timestamp);
			var year = date.getFullYear();
			var mon  = date.getMonth()+1;
			var day  = date.getDate();
			var hours = date.getHours();
			var minu = date.getMinutes();
			var sec = date.getSeconds();
			var trMon = mon<10 ? '0'+mon : mon
			var trDay = day<10 ? '0'+day : day
			return year+'-'+trMon+'-'+trDay+" "+hours+":"+minu+":"+sec;
		}
	},
	mutations: {
		updateTime(state){
			//更新当前时间戳
			//Update the current timestamp
			state.timestamp = Date.now()
		}
	},
	actions: {

	}
}
```


6. 在页面中引用组件 myButton ，并通过 `mapState` 读取 `state` 中的初始数据。
6. Reference the component myButton in the page, and read the initial data in `state` through `mapState`.

```html
<!-- 页面路径：pages/index/index.vue -->
<!-- Page path: pages/index/index.vue -->
<template>
	<view class="content">
		<view>{{text}}</view>
		<view>时间戳：{{timestamp}}</view>
		<view>Time stamp: {{timestamp}}</view>
		<view>当前时间:{{timeString}}</view>
		<view>Current time: {{timeString}}</view>
		<myButton></myButton>
	</view>
</template>
<script>
	import {mapState,mapGetters} from 'vuex' 
	export default {
		computed: {
			...mapState({
				text: state => state.moduleA.text,
				timestamp: state => state.moduleB.timestamp
			}),
			...mapGetters([
				'timeString'
			])
		}
	}
</script>
```

7. 在组件 `myButton`中，通过 `mutations` 操作刷新当前时间。
7. In the component `myButton`, use the `mutations` operation to refresh the current time.
```html
<!-- 组件路径：components/myButton/myButton.vue -->
<!-- Component path: components/myButton/myButton.vue -->
<template>
	<view>
		<button type="default" @click="updateTime">刷新当前时间</button>
		<button type="default" @click="updateTime">Refresh the current time</button>
	</view>
</template>
<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {}
		},
		methods: {
			...mapMutations(['updateTime'])
		}
	}
</script>

```

vue是单向数据流，子组件不能直接修改父组件的数据，而通过vuex状态管理实现：把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！
Vue is a one-way data flow. The child component cannot directly modify the data of the parent component, but is implemented through vuex state management: the shared state of the component is extracted and managed in a global singleton mode. In this mode, our component tree constitutes a huge "view", no matter where in the tree, any component can get state or trigger behavior!


