## Global configuration

| Vue global configuration         | description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| Vue.config.silent                | Cancel all logging and warning Vue                           |
| Vue.config.optionMergeStrategies | Custom options into policy [details](https://vuejs.org/v2/api/#optionMergeStrategies) |
| Vue.config.errorHandler          | Uncaught error handler specified component during rendering and viewing [details](https://vuejs.org/v2/api/#errorHandler) |
| Vue.config.warnHandler           | Vue to run when a warning given to a custom handler [details](https://vuejs.org/v2/api/#warnHandler) |
| Vue.config.ignoredElements       | Vue must ignore the custom elements outside the Vue's [details](https://vuejs.org/v2/api/#ignoredElements) |
| Vue.config.productionTip         | Set to false to prevent vue generate production tips on startup [details](https://vuejs.org/v2/api/#productionTip) |

## Global API

| Vue Global API | description                                                  |
| -------------- | ------------------------------------------------------------ |
| Vue.extend     | Use the basic Vue constructor to create a "subclass" [details](https://vuejs.org/v2/api/#Vue-extend) |
| View.set       | Add a property to the responsive object and ensure that the new property is also responsive, and trigger a view update [details](https://vuejs.org/v2/api/#Vue-set) |
| Vue.delete     | Delete the property of the object. If the object is responsive to ensure delete trigger update view [details](https://vuejs.org/v2/api/#Vue-delete) |
| View.directive | Register or obtain global directive [details](https://vuejs.org/v2/api/#Vue-directive) |
| Vue.filter     | Register or obtain global filters [Details](https://vuejs.org/v2/api/#Vue-filter) |
| Vue.component  | Register or get global components. Registration will automatically use the given name of the component's id [details](https://vuejs.org/v2/api/#Vue-component) |
| Vue.use        | Vue.js plug-in installation [details](https://vuejs.org/v2/api/#Vue-use) |
| Vue.mixin      | A mixed global registration, all created after the impact of every registered Vue instance [details](https://vuejs.org/v2/api/#Vue-mixin) |
| Vue.version    | Providing a string version of Vue installation [details](https://vuejs.org/v2/api/#Vue-version) |

## Options

| Vue options    | description                                                  |
| -------------- | ------------------------------------------------------------ |
| data           | Vue instance of a data object [details](https://vuejs.org/v2/api/#data) |
| props          | props can be an array or an object, for receiving data from the parent component [details](https://vuejs.org/v2/api/#props) |
| propsData      | Pass props when creating an instance. The main role is to facilitate the testing [details](https://vuejs.org/v2/api/#propsData) |
| computed       | Calculated attribute will be mixed into the Vue in Example [details](https://vuejs.org/v2/api/#computed) |
| methods        | It will be incorporated into the methods in Example Vue [details](https://vuejs.org/v2/api/#methods) |
| watch          | An object key is an expression of the need to observe the value of the callback function corresponding [details](https://vuejs.org/v2/api/#watch) |
| directives     | Examples of useful instructions comprising Vue hash table [Details](https://vuejs.org/v2/api/#directives) |
| filters        | Examples of useful filter comprising Vue hash table [Details](https://vuejs.org/v2/api/#filters) |
| components     | Examples of useful components comprising Vue hash table [Details](https://vuejs.org/v2/api/#components) |
| parent         | Parent instance of the specified instance has been created to establish a parent-child relationship between the two [details](https://vuejs.org/v2/api/#parent) |
| mixins         | Option to receive a mixed array of objects [details](https://vuejs.org/v2/api/#mixins) |
| extends        | Another component allows declaring an extension [details](https://vuejs.org/v2/api/#extends) |
| provide/inject | A dependent component allows an ancestor to all future generations injection, no matter how deep the component level, and always take effect in its upstream and downstream relationships established time [details](https://vuejs.org/v2/api/#provide-inject) |
| name           | Allow the component template calls itself recursively [details](https://vuejs.org/v2/api/#name) |
| model          | Allows a custom component to customize prop and event [details](https://vuejs.org/v2/api/#model) when using v-model |
| inheritAttrs   | inheritAttrs attribute default value is true, indicating that allows components of the root node contains the properties inherited $ attrs [details](https://vuejs.org/v2/api/#inheritAttrs) |

## Instance attributes

| Vue instance properties | description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| vm.$data                | Examples of data objects viewed Vue [details](https://vuejs.org/v2/api/#vm-data) |
| vm.$props               | Current props object components received [details](https://vuejs.org/v2/api/#vm-props) |
| vm.$options             | Vue initialization options for the current instance [details](https://vuejs.org/v2/api/#vm-options) |
| vm.$parent              | Parent instance, if the current instance of any [details](https://vuejs.org/v2/api/#vm-parent) |
| vm.$root                | Vue current component tree root instance [details](https://vuejs.org/v2/api/#vm-root) |
| vm.$children            | The immediate children of the current instance [details](https://vuejs.org/v2/api/#vm-children) |
| vm.$slots               | Slot for accessing content is distributed [details](https://vuejs.org/v2/api/#vm-slots) |
| vm.$scopedSlots         | Scope slot for accessing [details](https://vuejs.org/v2/api/#vm-scopedSlots) |
| vm.$refs                | An object that holds the [details](https://vuejs.org/v2/api/#vm-refs) of all DOM elements and component instances that have registered ref attribute |

## Instance method

| Instance method   | description                                                  |
| ----------------- | ------------------------------------------------------------ |
| vm.$watch()       | A change in expression or function observed in the example of calculation result Vue [details](https://vuejs.org/v2/api/#vm-watch) |
| vm.$set()         | This is the alias of the global Vue.set [details](https://vuejs.org/v2/api/#vm-set) |
| vm.$delete()      | This is the alias of the global Vue.delete [details](https://vuejs.org/v2/api/#vm-delete) |
| vm.$on()          | Custom event listeners on the current instance [details](https://vuejs.org/v2/api/#vm-on) |
| vm.$once()        | Listening on a custom event, but only triggered once [details](https://vuejs.org/v2/api/#vm-once) |
| vm.$off()         | Remove custom event listeners [details](https://vuejs.org/v2/api/#vm-off) |
| vm.$emit()        | Examples of trigger events on the current [details](https://vuejs.org/v2/api/#vm-emit) |
| vm.$mount()       | Examples of a manually mount unmounted [Details](https://vuejs.org/v2/api/#vm-mount) |
| vm.$forceUpdate() | Examples of forced re-render Vue [details](https://vuejs.org/v2/api/#vm-forceUpdate) |
| vm.$nextTick()    | After the execution delayed until next update cycle callback DOM [details](https://vuejs.org/v2/api/#vm-nextTick) |
| vm.$destroy()     | An example of the complete destruction of [details](https://vuejs.org/v2/api/#vm-destroy) |

## Template directive

| Vue instructions | description                                                  |
| ---------------- | ------------------------------------------------------------ |
| v-text           | Update the textContent [details of the](https://vuejs.org/v2/api/#v-text) element |
| v-html           | Update the innerHTML [details of the](https://vuejs.org/v2/api/#v-html) element |
| v-show           | According truth value of the expression, display CSS attribute switching elements [Details](https://vuejs.org/v2/api/#v-show) |
| v-if             | According truthiness value of an expression to conditionally render elements [Details](https://vuejs.org/v2/api/#v-if) |
| v-else           | Add "else block" [details](https://vuejs.org/v2/api/#v-else) for v-if or v-else-if |
| v-else-if        | Represents the "else if block" of v-if. You can be chained call [details](https://vuejs.org/v2/api/#v-else-if) |
| v-for            | Render Elements or multiple template block data based on the source [details](https://vuejs.org/v2/api/#v-for) |
| v-on             | Bind event listeners [details](https://vuejs.org/v2/api/#v-on) |
| v-bind           | Dynamically bind one or more attribute, or a component to prop expressions [details](https://vuejs.org/v2/api/#v-bind) |
| v-model          | Create a two-way binding controls on the form or component [details](https://vuejs.org/v2/api/#v-model) |
| v-pre            | Skip the compilation process this element and its child elements [Details](https://vuejs.org/v2/api/#v-pre) |
| v-once           | Only render elements and components once [details](https://vuejs.org/v2/api/#v-once) |

## Special attributes

| Special attributes | description                                                  |
| ------------------ | ------------------------------------------------------------ |
| key                | Mainly used in Vue's virtual DOM algorithm to identify the [details of](https://vuejs.org/v2/api/#key) VNodes when comparing new and old nodes |
| ref                | ref is used to reference the element or sub-component registration information [details](https://vuejs.org/v2/api/#ref) |
| is                 | For dynamic components and template-based restrictions in the DOM to work [details](https://vuejs.org/v2/api/#is) |

## Built-in components

| Built-in components | description                                                  |
| ------------------- | ------------------------------------------------------------ |
| component           | Render a "meta component" as a dynamic component. According to the value is to determine which components are rendered [details](https://vuejs.org/v2/api/#component) |
| slot                | As a content distribution among the component template slot [details](https://vuejs.org/v2/api/#slot) |

## Global variable

The way to implement global variables needs to follow the development specifications of Vue single file mode.

## Other configuration

When a VUE component is compiled to a small program platform, it will be compiled as a component of the corresponding platform. Some small program platforms support options (refer to the Custom Components section of the corresponding small program platform documentation for specific options). In general, it is acceptable by default.

```js
export default {
  props: ['data'],
  data(){ return { } },
  options: {
    // Options in the WeChat applet
    multipleSlots: true, //  Enable multi-slot support in the option at component definition time, enabled by default
    styleIsolation: "isolated",  //  Start style isolation. Configuration may be required when you use page customization components where you want the parent to influence the style of the child components. Specific configuration options refer to: WeChat applet custom component style
    addGlobalClass: true, //  Represents that the page style affects the custom component, but the style specified in the custom component does not affect the page. This option is equivalent to setting style Isolation: apply-shared
    virtualHost: true,  //  Set the custom node to be virtual, closer to how the Vue component behaves. We don't want the node of the custom component to be able to set the style, respond to the Flex layout, etc. Instead, we want the first layer node inside the custom component to respond to the Flex layout or the style to be completely determined by the custom component itself
  }
}
```

## Common problem

### 1. How to get the data passed on the previous page

Obtained in onLoad, the parameter of onLoad is the data passed by other pages to open the current page.

```javaScript
    //store.js
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const store = new Vuex.Store({
        state: {...},
        mutations: {...},
        actions: {...}
    })

    export default store

    //main.js
    ...
    import store from './store'
    Vue.prototype.$store = store
    const app = new Vue({
        store,...
    })
    ...

    //test.vue When using:
    import {mapState,mapMutations} from 'vuex'
```

### 3. How to catch onError of app

Since onError is not a complete life cycle, only a method of catching errors is provided, and a callback function named onError can be added to the root component of the app. as follows:

```javaScript
    export default {
       // Only apps have an onLaunch lifecycle
        onLaunch () {
           // ...
        },

        // capture app error
        onError (err) {
           console.log(err)
        }
    }
```

### 4. Component property settings do not take effect

When some properties are repeatedly set to the same value, they are not synchronized to the View layer. For example, every time you set the scroll-top property of a scroll-view component to 0, it only gets back to the top the first time. This is due to the props unidirectional data flow feature. When the actual value of scroll top inside the component changes, the binding properties do not change with it.

There are two solutions (take the scroll-view component as an example):

\1. Monitor the scroll event, record the value of the internal change of the component, and set the current value of the record before setting the new value

```html
    <scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="scroll"></scroll-view>
export default {
    data() {
        return {
            scrollTop: 0,
            old: {
                scrollTop: 0
            }
        }
    },
    methods: {
        scroll: function(e) {
            this.old.scrollTop = e.detail.scrollTop
        },
        goTop: function(e) {
            this.scrollTop = this.old.scrollTop
            this.$nextTick(function() {
                this.scrollTop = 0
            });
        }
    }
}
```

\2. Monitor the scroll event, get the value of the internal change of the component, and update its binding value in real time

```html
    <scroll-view scroll-y="true" :scroll-top="scrollTop" @scroll="scroll"></scroll-view>
    export default {
        data() {
            return {
                scrollTop: 0,
            }
        },
        methods: {
            scroll: function(e) {
                // If using this method, add your own anti-shake treatment
                this.scrollTop = e.detail.scrollTop
            },
            goTop: function(e) {
                this.scrollTop = 0
            }
        }
    }
```

The second solution may cause jitter in some components, and the **first solution is recommended** .