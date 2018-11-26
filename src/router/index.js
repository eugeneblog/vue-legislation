import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
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
