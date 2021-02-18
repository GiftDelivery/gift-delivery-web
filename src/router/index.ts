// createWebHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/401',
    component: () => import('@/views/error/401.vue')
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/index.vue'),
        name: 'index'
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/content/dashboard.vue')
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/content/notice.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
