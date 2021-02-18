import { InjectionKey } from 'vue'
import RootStateTypes, { AllStateTypes } from '@/store/interface'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { getToken } from '@/utils/auth'
import layout from '@/store/modules/layout/index'
import user from '@/store/modules/user/index'

export const key: InjectionKey<Store<RootStateTypes>> = Symbol()

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}

export const store = createStore<RootStateTypes>({
  state() {
    return {
      token: getToken()
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    user
  }
})
