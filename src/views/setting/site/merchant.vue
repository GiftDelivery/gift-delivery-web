<template>
  <div>
    <el-card class="box-card">
      <template #header>小微商户申请</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-row class="opera-panel">
        <el-button type="primary" @click="handleAdd"> 新增 </el-button>
      </el-row>
      <el-table v-loading="loading" size="mini" :data="tableData">
        <el-table-column prop="" label="ID" />
        <el-table-column prop="" label="姓名" />
        <el-table-column prop="" label="身份证" />
        <el-table-column prop="" label="正面" />
        <el-table-column prop="" label="反面" />
        <el-table-column prop="" label="开户行" />
        <el-table-column prop="" label="银行卡" />
        <el-table-column prop="" label="店头" />
        <el-table-column prop="" label="门头" />
        <el-table-column prop="" label="店内" />
        <el-table-column prop="" label="简称" />
        <el-table-column prop="" label="客服电话" />
        <el-table-column prop="" label="服务类" />
        <el-table-column prop="" label="费率" />
        <el-table-column prop="" label="管理员" />
        <el-table-column prop="" label="状态" />
        <el-table-column prop="" label="时间" />
        <el-table-column label="操作" fixed="right" width="100">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEditRow(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="handleDelRow(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
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
      async getList() {},
      handleAdd() {}
    }
  })
</script>
