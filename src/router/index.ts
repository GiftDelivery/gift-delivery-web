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
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/content/notice/index.vue'),
        meta: { title: '动态通知' }
      },
      {
        path: 'recommender',
        name: 'recommender',
        component: () => import('@/views/content/recommender/index.vue'),
        meta: { title: '推荐人统计表' }
      },
      {
        path: 'merchantManage',
        name: 'merchantManage',
        component: () => import('@/views/content/merchantManage/index.vue'),
        meta: { title: '商户管理' }
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
      },
      {
        path: 'domain/secondLevel',
        name: 'secondLevel',
        component: () => import('@/views/setting/domain/secondLevel.vue'),
        meta: { title: '二级域名' }
      },
      {
        path: 'customer',
        name: 'customer',
        component: () => import('@/views/setting/customer/index.vue'),
        meta: { title: '客服配置' }
      },
      {
        path: 'commission',
        name: 'commission',
        component: () => import('@/views/setting/commission/index.vue'),
        meta: { title: '返佣配置' }
      },
      {
        path: 'banner',
        name: 'banner',
        component: () => import('@/views/setting/banner/index.vue'),
        meta: { title: '自定义轮播图' }
      }
    ]
  },
  {
    path: '/warehouse',
    component: Layout,
    children: [
      {
        path: 'gift',
        name: 'gift',
        component: () => import('@/views/warehouse/gift/index.vue'),
        meta: { title: '我的站点' }
      },
      {
        path: 'faceSheet',
        name: 'faceSheet',
        component: () => import('@/views/warehouse/faceSheet/index.vue'),
        meta: { title: '我的面单' }
      },
      {
        path: 'packet',
        name: 'packet',
        component: () => import('@/views/warehouse/packet/index.vue'),
        meta: { title: '我的空包' }
      },
      {
        path: 'tbShop',
        name: 'tbShop',
        component: () => import('@/views/warehouse/shop/tb.vue'),
        meta: { title: '淘宝店铺管理' }
      },
      {
        path: 'pddShop',
        name: 'pddShop',
        component: () => import('@/views/warehouse/shop/pdd.vue'),
        meta: { title: '拼多多店铺管理' }
      }
    ]
  },
  {
    path: '/funds',
    component: Layout,
    children: [
      {
        path: 'merchantAccount',
        name: 'merchantAccount',
        component: () => import('@/views/funds/merchantAccount/index.vue'),
        meta: { title: '商户明细管理' }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/funds/account/index.vue'),
        meta: { title: '账户明细' }
      },
      {
        path: 'merchantRecharge',
        name: 'merchantRecharge',
        component: () => import('@/views/funds/merchantRecharge/index.vue'),
        meta: { title: '商户充值管理' }
      },
      {
        path: 'commission',
        name: 'commission',
        component: () => import('@/views/funds/commission/index.vue'),
        meta: { title: '佣金管理' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'siteRenewal',
        name: 'siteRenewal',
        component: () => import('@/views/order/siteRenewal/index.vue'),
        meta: { title: '站点续费订单' }
      },
      {
        path: 'substation',
        name: 'substation',
        component: () => import('@/views/order/substation/index.vue'),
        meta: { title: '分站充值' }
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/order/index.vue'),
        meta: { title: '订单列表' }
      },
      {
        path: 'nonAgency',
        name: 'nonAgency',
        component: () => import('@/views/order/nonAgency/index.vue'),
        meta: { title: '非代发订单' }
      }
    ]
  },
  {
    path: '/vip',
    component: Layout,
    children: [
      {
        path: 'siteVip',
        name: 'siteVip',
        component: () => import('@/views/vip/siteVip/index.vue'),
        meta: { title: '站点VIP配置' }
      }
    ]
  },
  {
    path: '/subordinateRebate',
    component: Layout,
    children: [
      {
        path: 'superiorRewards',
        name: 'superiorRewards',
        component: () => import('@/views/subordinateRebate/superiorRewards/index.vue'),
        meta: { title: '上级奖励' }
      }
    ]
  },
  {
    path: '/mySeting',
    component: Layout,
    children: [
      {
        path: 'personal',
        name: 'personal',
        component: () => import('@/views/content/personal/index.vue'),
        meta: { title: '用户设置' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
