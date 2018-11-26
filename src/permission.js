import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  // 设置导航栏状态
  store.dispatch('SetNavBarSelect', to.name)
  if (getToken()) { //  如果有登陆令牌直接跳首页
    if (store.getters.roles.length === 0) {
      // store.dispatch('GetUserInfo').then(res => {
      //   const roles = res.data.roles
      //   store.dispatch('GenerateRoutes', { roles })
      // }).catch((err) => {
      //   Message.error(err || 'Verification failed, please login again')
      //   next('/login')
      // })
    }
    next()
  } else { // 不需要令牌判断的路由白名单
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login`)
    }
  }
})
