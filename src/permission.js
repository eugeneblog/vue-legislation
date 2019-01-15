import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  // 设置导航栏状态
  store.dispatch('SetNavBarSelect', to.name)
  if (getToken()) { // 如果有登陆令牌直接跳首页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        // 重新拉取user_info
        store.dispatch('GetUserInfo').then(res => {
          const userdata = res.data
          store.dispatch('getLawsuitDataInfo', userdata.name) // 拉取用户项目列表
        }).catch((err) => {
          console.log(err)
          next({ path: '/' })
        })
      }
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
