<template>
  <div>
    <el-card class="box-card">
      <template #header>站内信</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="queryParams.title" placeholder="请输入标题" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="queryParams.content" placeholder="请输入内容" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-table v-loading="loading" size="mini" :data="tableData">
        <el-table-column prop="" label="ID" />
        <el-table-column prop="" label="标题" />
        <el-table-column prop="" label="摘要" />
        <el-table-column prop="" label="内容" />
        <el-table-column prop="" label="时间" />
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
        total: 0,
        queryParams: {
          pageNum: 1,
          pageSize: 20,
          id: '',
          title: '',
          content: ''
        },
        loading: false,
        tableData: []
      }
    },
    created() {
      this.handleQuery()
    },
    methods: {
      resetQuery() {
        this.queryParams = {
          pageNum: 1,
          pageSize: 20,
          id: '',
          title: '',
          content: ''
        }
        this.handleQuery()
      },
      handleQuery() {
        this.queryParams.pageNum = 1
        this.getList()
      },
      async getList() {}
    }
  })
</script>
