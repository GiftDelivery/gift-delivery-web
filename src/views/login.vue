<template>
  <div class="login">
    <el-card class="login-card">
      <div class="login-title">
        <span>登录</span>
      </div>
      <el-form ref="form" :model="form">
        <el-form-item required :show-message="false">
          <el-input v-model="form.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item required :show-message="false">
          <el-input v-model="form.pwd" type="password" placeholder="请输入密码" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { setToken } from '@/utils/auth'

  export default defineComponent({
    data() {
      return {
        form: {
          username: '',
          pwd: ''
        },
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      login() {
        if (this.form.username === '') return this.$message.warning('请输入用户名')
        if (this.form.pwd === '') return this.$message.warning('请输入密码')
        // TODO login
        setToken('token')
        this.$router.push({ path: this.redirect || '/' })
      }
    }
  })
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebf0f3;

    .login-title {
      margin: 10px auto 20px;
      text-align: left;
      color: #707070;
      font-weight: 700;
      & > span {
        padding-bottom: 0px;
        border-bottom: 2px solid #105cfb;
      }
    }

    .login-card {
      width: 320px;
    }
  }
</style>
