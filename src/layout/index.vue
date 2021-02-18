<template>
  <el-container>
    <Aside />
    <el-container>
      <el-header>
        <TheHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <!-- <el-footer>
        <TheFooter />
      </el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
  import { defineComponent } from 'vue'
  import Aside from './Aside.vue'
  import TheHeader from './TheHeader.vue'
  // import TheFooter from './TheFooter.vue'

  export default defineComponent({
    components: {
      Aside,
      TheHeader
      // TheFooter
    }
  })
</script>
