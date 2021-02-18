<template>
  <div class="layout-header">
    <div>
      <i :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="change"></i>
    </div>
    <div>
      <span>同步数据</span>
      <span>{{ user.name }}</span>
      <img :src="user.avatar" />
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from '@/store'

  export default defineComponent({
    setup() {
      const store = useStore()
      const isCollapse = computed(() => store.state.layout.collapse)
      const user = computed(() => store.state.user.user)
      return {
        isCollapse,
        user,
        change: () => store.commit('layoutModule/SET_COLLAPSE')
      }
    }
  })
</script>

<style lang="scss" scoped>
  .layout-header {
    height: 60px;

    display: flex;

    & > div:first-child {
      width: 30px;
      & > i {
        line-height: 60px;
        cursor: pointer;
      }
    }
    & > div:last-child {
      flex: 1;
      text-align: right;
      display: inline-flex;
      justify-content: flex-end;
      align-items: center;
      span {
        display: inline-block;
        margin: 0 4px;
        color: #626262;
        font-size: 12px;
        cursor: pointer;
      }
      img {
        width: 40px;
        height: auto;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
      }
    }
  }
</style>
