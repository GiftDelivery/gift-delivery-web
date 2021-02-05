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
    path: '/test',
    component: Layout,
    children: [
      {
        path: 'helloWorld',
        component: () => import('@/views/test/HelloWorld.vue'),
        name: 'helloWorld'
      },
      {
        path: 'about',
        component: () => import('@/views/test/about.vue'),
        name: 'about'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
