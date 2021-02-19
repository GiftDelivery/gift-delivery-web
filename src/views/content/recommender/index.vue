<template>
  <div>
    <el-card class="box-card">
      <el-table v-loading="loading" size="mini" :data="tableData">
        <el-table-column prop="" label="手机号" />
        <el-table-column prop="" label="昵称" />
        <el-table-column prop="" label="总推荐" />
        <el-table-column prop="" label="今日推荐" />
        <el-table-column prop="" label="推荐总充值(爱豆)" />
        <el-table-column prop="" label="推荐今日充值(爱豆)" />
        <el-table-column prop="" label="自身总充值(爱豆)" />
        <el-table-column prop="" label="自身今日充值(爱豆)" />
      </el-table>
      <Pagination :page="queryParams.pageNum" :limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        queryParams: {
          pageNum: 1,
          pageSize: 20
        },
        total: 0,
        loading: false,
        tableData: []
      }
    },
    created() {
      this.getList()
    },
    methods: {
      async getList() {}
    }
  })
</script>
