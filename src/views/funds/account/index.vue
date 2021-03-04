<template>
  <div>
    <el-card class="box-card">
      <template #header>账户明细</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="类型">
          <el-input v-model="queryParams.type" placeholder="请输入类型" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="queryParams.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
            style="width: 100%"
            @change="handleQuery"
          />
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
        <el-table-column prop="" label="用户名称" />
        <el-table-column prop="" label="变动金额(元)" />
        <el-table-column prop="" label="前置金额(元)" />
        <el-table-column prop="" label="后置金额(元)" />
        <el-table-column prop="" label="行为" />
        <el-table-column prop="" label="创建时间" />
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
          type: '',
          time: []
        },
        loading: false,
        tableData: [{}]
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
          type: '',
          time: []
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
