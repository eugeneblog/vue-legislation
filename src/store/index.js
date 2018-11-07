import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import calendar from './modules/calendar'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    calendar
  }
})

export default store
