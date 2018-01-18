// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias. import App from './App'
import Vue from 'vue'

import Login from './App'
import store from './store/store.js'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
router.beforeEach((to, form, next) => {
  if (to.path !== '/login') {
    if (!sessionStorage.getItem('userInfo')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<Login/>',
  components: {
    Login
  }
})
