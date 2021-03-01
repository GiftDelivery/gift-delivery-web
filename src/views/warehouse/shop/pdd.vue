<template>
  <div>
    <el-card class="box-card">
      <template #header>拼多多店铺管理</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="店铺名称">
          <el-input v-model="queryParams.name" placeholder="请输入店铺名称" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="平台账号名">
          <el-input
            v-model="queryParams.userName"
            placeholder="请输入平台账号名"
            clearable
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="是否默认">
          <el-select v-model="queryParams.isDefault" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option v-for="(item, index) in isDefaultOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
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
        <el-table-column prop="" label="店铺名称" />
        <el-table-column prop="" label="店铺ID" />
        <el-table-column prop="" label="平台账号名" />
        <el-table-column prop="" label="是否默认" />
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
          id: '',
          name: '',
          userName: '',
          isDefault: ''
        },
        isDefaultOptions: [],
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
          name: '',
          userName: '',
          isDefault: ''
        }
        this.handleQuery()
      },
      handleQuery() {
        this.queryParams.pageNum = 1
        this.getList()
      },
      async getList() {
        this.loading = true
        setTimeout(() => {
          this.tableData = []
          this.loading = false
        }, 666)
      }
    }
  })
</script>
