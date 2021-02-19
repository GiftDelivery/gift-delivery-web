/* eslint-disable */
// import type { DefineComponent } from 'vue'

// declare module '*.vue' {
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module 'vue'
declare module 'element-plus'
declare module 'element-plus/lib/locale/lang/zh-cn'
declare module 'nprogress'
