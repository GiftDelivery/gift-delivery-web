import LayoutModuleTypes from '@/store/modules/layout/interface'
import UserModuleTypes from '@/store/modules/user/interface'

/**
 * root 层 state类型定义
 */
export default interface RootStateTypes {
  token: string
}

/**
 * vuex 模块state类型定义集成
 */
export interface AllStateTypes extends RootStateTypes {
  layout: LayoutModuleTypes
  user: UserModuleTypes
}
