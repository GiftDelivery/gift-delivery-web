import router from './router'
import { getToken, removeToken } from './utils/auth'
// import { store } from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']

router.beforeEach((to: any, from: any, next: any) => {
  NProgress.start()
  // set title
  document.title = to.meta.title ? `Gift Branch | ${to.meta.title}` : 'Gift Branch'
  // 404
  if (to.matched.length === 0) return next({ path: '/404' })
  // check token
  const token = getToken()
  if (token) {
    /* has token*/
    if (to.path === '/login') {
      removeToken()
      next('/login')
    } else {
      // if (store.roles.length === 0) {
      //   // 判断当前用户是否已拉取完user_info信息
      //   store
      //     .dispatch('GetInfo')
      //     .then((res) => {
      //       // 拉取user_info
      //       const roles = res.roles
      //       store.dispatch('GenerateRoutes', { roles }).then((accessRoutes) => {
      //         // 测试 默认静态页面
      //         // store.dispatch('permission/generateRoutes', { roles }).then(accessRoutes => {
      //         // 根据roles权限生成可访问的路由表
      //         router.addRoutes(accessRoutes) // 动态添加可访问路由表
      //         next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      //       })
      //     })
      //     .catch((err) => {
      //       store.dispatch('FedLogOut').then(() => {
      //         next({ path: '/' })
      //       })
      //     })
      // } else {
      next()
      // }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      let redirectStr = to.path
      if (Object.keys(to.query).length !== 0) {
        const str = Object.keys(to.query).reduce((str, keys) => {
          return str === '' ? (str += `${keys}=${to.query[keys]}`) : (str += `&${keys}=${to.query[keys]}`)
        }, '')
        redirectStr += `?${str}`
      }
      next(`/login?redirect=${encodeURIComponent(redirectStr)}`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
