import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import calendar from './modules/calendar'
import permission from './modules/permission'
import lawsuit from './modules/lawsuit'
import setting from './modules/setting'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    calendar,
    permission,
    lawsuit,
    setting
  },
  getters
})

export default store
