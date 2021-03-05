<template>
  <div>
    <el-card class="box-card">
      <template #header>分站充值</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="订单号">
          <el-input v-model="queryParams.orderNo" placeholder="请输入订单号" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="订单标题">
          <el-input
            v-model="queryParams.orderTitle"
            placeholder="请输入订单标题"
            clearable
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="支付类型">
          <el-select
            v-model="queryParams.status"
            filterable
            clearable
            placeholder="请选择支付类型"
            @change="handleQuery"
          >
            <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label" :value="item.value" />
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
        <el-table-column prop="" label="订单号" />
        <el-table-column prop="" label="订单标题" />
        <el-table-column prop="" label="订单描述" />
        <el-table-column prop="" label="订单金额" />
        <el-table-column prop="" label="时间" />
        <el-table-column prop="" label="支付状态" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
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
          orderNo: '',
          orderTitle: '',
          status: ''
        },
        statusOptions: [
          { label: '待支付', value: 1 },
          { label: '支付成功', value: 2 },
          { label: '支付失败', value: 3 },
          { label: '取消订单', value: 4 }
        ],
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
          orderNo: '',
          orderTitle: '',
          status: ''
        }
        this.handleQuery()
      },
      handleQuery() {
        this.queryParams.pageNum = 1
        this.getList()
      },
      async getList() {},
      handleDelRow() {}
    }
  })
</script>
