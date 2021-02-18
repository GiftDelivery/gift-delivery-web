import { Module } from 'vuex'
import RootStateTypes from '@/store/interface'
import UserModuleTypes from '@/store/modules/user/interface'

const user: Module<UserModuleTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    user: {
      name: '测试',
      avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1152782983,3789942410&fm=11&gp=0.jpg'
    }
  },
  mutations: {
    SET_USER_INFO(state, val) {
      state.user = { ...val }
    }
  },
  actions: {}
}

export default user
