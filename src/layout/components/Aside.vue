<template>
  <el-collapse-transition>
    <el-aside :width="!isCollapse ? '240px' : '65px'" class="aside collapse-transition">
      <div class="banner"> {{ !isCollapse ? 'Gift Branch' : 'GB' }} </div>
      <el-menu class="menu" :collapse="isCollapse" :unique-opened="true" :router="true" :default-active="activeMenu">
        <template v-for="(item, index) in menu" :key="index">
          <el-submenu v-if="item.children && item.children.length !== 0" :index="`/${item.path}`">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="(it, ind) in item.children" :key="ind">
              <el-submenu v-if="it.children && it.children.length !== 0" :index="`/${item.path}/${it.path}`">
                <template #title>
                  <i v-if="it.icon" :class="it.icon"></i>
                  <span>{{ it.title }}</span>
                </template>
                <el-menu-item
                  v-for="(sub, subIndex) in it.children"
                  :key="subIndex"
                  :index="`/${item.path}/${it.path}/${sub.path}`"
                >
                  <i v-if="sub.icon" :class="sub.icon"></i>
                  <span>{{ sub.title }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="`/${item.path}/${it.path}`">
                <i v-if="it.icon" :class="it.icon"></i>
                <span>{{ it.title }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else :index="`/${item.path}`">
            <i v-if="item.icon" :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
  </el-collapse-transition>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from '@/store'

  export default defineComponent({
    name: 'Aside',
    setup() {
      const store = useStore()
      const isCollapse = computed(() => store.state.layout.collapse)
      return {
        isCollapse
      }
    },
    data() {
      return {
        menu: [
          {
            title: '仪表盘',
            icon: 'el-icon-setting',
            path: ''
          },
          {
            title: '动态通知',
            icon: 'el-icon-setting',
            path: 'notice'
          },
          {
            title: '推荐人统计表',
            icon: 'el-icon-setting',
            path: 'recommender'
          },
          {
            title: '配置管理',
            icon: 'el-icon-setting',
            path: 'setting',
            children: [
              {
                title: '站点管理',
                path: 'site',
                children: [
                  {
                    title: '我的站点',
                    path: 'mySite'
                  },
                  {
                    title: '小微商户申请',
                    path: 'merchant'
                  }
                ]
              },
              {
                title: '域名管理',
                path: 'domain',
                children: [
                  {
                    title: '二级域名',
                    path: 'secondLevel'
                  }
                ]
              },
              {
                title: '客服配置',
                path: 'customer'
              },
              {
                title: '返佣配置',
                path: 'commission'
              },
              {
                title: '自定义轮播图',
                path: 'banner'
              }
            ]
          },
          {
            title: '仓库管理',
            icon: 'el-icon-setting',
            path: 'warehouse',
            children: [
              {
                title: '我的礼品',
                path: 'gift'
              },
              {
                title: '我的面单',
                path: 'faceSheet'
              },
              {
                title: '我的空包',
                path: 'packet'
              },
              {
                title: '淘宝店铺管理',
                path: 'tbShop'
              },
              {
                title: '拼多多店铺管理',
                path: 'pddShop'
              }
            ]
          },
          {
            title: '商户管理',
            icon: 'el-icon-setting',
            path: 'merchantManage'
          },
          {
            icon: 'el-icon-setting',
            title: '资金管理',
            path: 'funds',
            children: [
              {
                title: '商户账户管理',
                path: 'merchantAccount'
              },
              {
                title: '账户明细',
                path: 'account'
              },
              {
                title: '商户充值管理',
                path: 'merchantRecharge'
              },
              {
                title: '佣金提现',
                path: 'commission'
              }
            ]
          },
          {
            icon: 'el-icon-setting',
            title: '订单管理',
            path: 'order',
            children: [
              {
                title: '站点续费订单',
                path: 'siteRenewal'
              },
              {
                title: '分站充值',
                path: 'substation'
              },
              {
                title: '订单列表',
                path: 'orderList'
              },
              {
                title: '非代发订单',
                path: 'nonAgency'
              }
            ]
          },
          {
            icon: 'el-icon-setting',
            title: 'VIP 系统',
            path: 'vip',
            children: [
              {
                title: '站点VIP配置',
                path: 'siteVip'
              }
            ]
          },
          {
            icon: 'el-icon-setting',
            title: '上下级返佣',
            path: 'subordinateRebate',
            children: [
              {
                title: '上级奖励',
                path: 'superiorRewards'
              }
            ]
          }
        ]
      }
    },
    computed: {
      activeMenu() {
        const route = this.$route
        const { path } = route
        // if set path, the sidebar will highlight the path you set
        return path
      }
    },
    methods: {}
  })
</script>

<style lang="scss" scoped>
  .aside {
    display: flex;
    flex-direction: column;
    transition: width 0.3s;

    .banner {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #5c6bc6;
      font-size: 18px;
      font-weight: bold;
    }
    .menu {
      flex: 1;
    }
  }
</style>
