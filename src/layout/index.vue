<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        Footer
        <el-button @click="goto(1)">HelloWorld</el-button>
        <el-button @click="goto(2)">about</el-button>
        <el-button @click="goto">home</el-button>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    methods: {
      goto(val) {
        switch (val) {
          case 1:
            this.$router.push({ name: 'helloWorld' })
            break
          case 2:
            this.$router.push({ name: 'about' })
            break
          default:
            this.$router.push({ name: 'index' })
            break
        }
      }
    }
  }
</script>
