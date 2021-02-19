<template>
  <div class="layout-header">
    <div>
      <i :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="change"></i>
    </div>
    <div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link sync-data"> 同步数据 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="syncData(1)">同步空包</el-dropdown-item>
            <el-dropdown-item @click="syncData(2)">同步快递</el-dropdown-item>
            <el-dropdown-item @click="syncData(3)">同步礼品</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click">
        <div class="el-dropdown-link user-info">
          <span>{{ user.name }}</span>
          <img :src="user.avatar" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="fadeOut(1)">设置</el-dropdown-item>
            <el-dropdown-item @click="fadeOut(2)">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
        change: () => store.commit('layout/SET_COLLAPSE')
      }
    },
    methods: {
      syncData(val) {
        console.log(val)
      },
      fadeOut(val) {
        switch (val) {
          case 1:
            break
          case 2:
            this.$router.push({ name: 'login' })
            break
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  .layout-header {
    height: 60px;

    display: flex;

    & > div:first-child {
      width: 30%;
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
      .sync-data {
        margin-right: 14px;
        color: #626262;
        font-size: 14px;
      }
      .user-info {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 40px;
          height: auto;
          border-radius: 50%;
          display: block;
          margin-left: 4px;
        }
      }
    }
  }
</style>
