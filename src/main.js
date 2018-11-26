// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Cookies from 'js-cookie'
import '@/styles/index.scss'

import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'
import 'fullcalendar-scheduler'
import './mock'

import './icons'
import './permission'

window.$ = $
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
