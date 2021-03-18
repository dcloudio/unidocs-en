- `main.js`It is the entry file of uni-app. Its main function is to initialize `vue`instances, define global components, and use required plug-ins such as vuex.

  First introduced the `Vue`library and `App.vue`, created an `vue`instance, and mounted the `vue`instance.

  ```
  import Vue from 'vue'
  import App from './App'
  import pageHead from './components/page-head.vue' //Global reference to the page-head component
  
  Vue.config.productionTip = false
  Vue.component('page-head', pageHead) //Globally register the page-head component, which each page will be able to use directly
  App.mpType = 'app'
  
  const app = new Vue({
      ...App
  })
  app.$mount() //Mount the Vue instance
  ```

  Use `Vue.use`reference plugins, use `Vue.prototype`add global variables, and use `Vue.component`register global components.

  It can be cited `vuex`, because multiple files are involved, no examples are provided here, please refer to the `hello uni-app`example project for details .

  Cannot be used `vue-router`, routing must `pages.json`be configured in. 

  **note**

  - nvue does not currently support registering global components in main.js
