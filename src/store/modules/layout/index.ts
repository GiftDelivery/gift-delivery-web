import { Module } from 'vuex'
import RootStateTypes from '@/store/interface'
import LayoutModuleTypes from '@/store/modules/layout/interface'

const layout: Module<LayoutModuleTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    collapse: false
  },
  mutations: {
    SET_COLLAPSE(state) {
      state.collapse = !state.collapse
    }
  },
  actions: {}
}

export default layout
