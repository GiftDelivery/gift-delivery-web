// createWebHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: { title: '仪表盘' }
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/content/notice/index.vue'),
        meta: { title: '动态通知' }
      },
      {
        path: '/recommender',
        name: 'recommender',
        component: () => import('@/views/content/recommender/index.vue'),
        meta: { title: '推荐人统计表' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: 'site/mySite',
        name: 'mySite',
        component: () => import('@/views/setting/site/mySite.vue'),
        meta: { title: '我的站点' }
      },
      {
        path: 'site/merchant',
        name: 'merchant',
        component: () => import('@/views/setting/site/merchant.vue'),
        meta: { title: '小微商户申请' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
