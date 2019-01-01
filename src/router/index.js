import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    redirect: 'calenDar',
    component: Layout,
    children: [{
      path: 'calenDar',
      name: 'CalenDar',
      component: () => import('@/views/calendar/CalenDar.vue'),
      meta: { title: 'calenDar', icon: 'dashboard', noCache: true }
    }, {
      path: 'lawsuit', // 诉讼
      name: 'Lawsuit',
      component: () => import('@/views/lawsuit')
    }, {
      path: 'special', // 专项
      name: 'Special',
      component: () => import('@/views/special/Special')
    }, {
      path: 'perennial', // 常年
      name: 'Perennial',
      component: () => import('@/views/perennial/Perennial')
    }, {
      path: 'setting',
      name: 'Setting',
      component: () => import('@/views/setting/Setting')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    children: [{
      path: '/redirect/:path*',
      name: 'Lawsuit',
      component: () => import('@/views/detail/Detail')
    }]
  }
]

export const asyncRouterMap = [
  {
    path: '/dashboard/:id',
    component: Layout,
    children: [{
      path: 'calenDar',
      name: 'CalenDar',
      component: () => import('@/views/calendar/CalenDar.vue')
    }, {
      path: 'lawsuit', // 诉讼
      name: 'Lawsuit',
      component: () => import('@/views/lawsuit')
    }, {
      path: 'special', // 专项
      name: 'Special',
      component: () => import('@/views/special/Special')
    }, {
      path: 'perennial', // 常年
      name: 'Perennial',
      component: () => import('@/views/perennial/Perennial')
    }, {
      path: 'setting',
      name: 'Setting',
      component: () => import('@/views/setting/Setting')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  }
]

export default new Router({
  routes: constantRouterMap
})
