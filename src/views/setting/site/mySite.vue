<template>
  <div>
    <el-card class="box-card">
      <template #header>分站申请</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="授权码">
          <el-input v-model="queryParams.code" placeholder="请输入授权码" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="网站名称">
          <el-input v-model="queryParams.title" placeholder="请输入网站名称" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="运营状态">
          <el-select
            v-model="queryParams.operationStatus"
            filterable
            clearable
            placeholder="请选择运营状态"
            @change="handleQuery"
          >
            <el-option label="停运" value="1" />
            <el-option label="运行中" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="VIP">
          <el-select v-model="queryParams.vip" filterable clearable placeholder="请选择VIP" @change="handleQuery">
            <el-option label="禁用VIP" value="1" />
            <el-option label="启用VIP" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryParams.status" filterable clearable placeholder="请选择状态" @change="handleQuery">
            <el-option label="未启用" value="1" />
            <el-option label="启用" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="支付状态">
          <el-select
            v-model="queryParams.payStatus"
            filterable
            clearable
            placeholder="请选择支付状态"
            @change="handleQuery"
          >
            <el-option label="未支付" value="1" />
            <el-option label="已支付" value="2" />
            <el-option label="支付失败" value="2" />
            <el-option label="已取消" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否删除">
          <el-select v-model="queryParams.isDel" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option label="已删除" value="1" />
            <el-option label="取消" value="2" />
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
        <el-table-column prop="" label="授权码" />
        <el-table-column prop="" label="联系电话" />
        <el-table-column prop="" label="授权人" />
        <el-table-column prop="" label="名称" />
        <el-table-column prop="" label="域名" />
        <el-table-column prop="" label="自定义域名" width="100" />
        <el-table-column prop="">
          <template #header>
            <div style="display: flex">
              <el-tooltip class="item" content="注册送体验金,默认0.00元" placement="bottom">
                <div>体验金<i class="el-icon-info"></i></div>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="" label="运营状态" />
        <el-table-column prop="" label="VIP" />
        <el-table-column prop="" label="旺旺查询" />
        <el-table-column prop="" label="爱查号" />
        <el-table-column prop="" label="状态" />
        <el-table-column prop="" label="支付状态" />
        <el-table-column prop="" label="审核状态" />
        <el-table-column prop="" label="过期时间" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEditRow(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="handleDelRow(scope.$index, scope.row)">删除</el-button>
            <el-button type="text" size="mini" @click="handleRenewRow(scope.$index, scope.row)">续费</el-button>
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
          code: '',
          title: '',
          operationStatus: '',
          vip: '',
          status: '',
          payStatus: '',
          isDel: ''
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
          code: '',
          title: '',
          operationStatus: '',
          vip: '',
          status: '',
          payStatus: '',
          isDel: ''
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
          this.tableData = [{}]
          this.loading = false
        }, 1111)
      },
      handleEditRow(index, row) {
        console.log(index, row)
      },
      handleDelRow(index, row) {
        console.log(index, row)
      },
      handleRenewRow(index, row) {
        console.log(index, row)
      }
    }
  })
</script>
