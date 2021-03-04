<template>
  <div>
    <el-card class="box-card">
      <template #header>佣金提现</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="打款状态">
          <el-select
            v-model="queryParams.status"
            filterable
            clearable
            placeholder="请选择打款状态"
            @change="handleQuery"
          >
            <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="支付宝账号">
          <el-input
            v-model="queryParams.alipayNo"
            placeholder="请输入支付宝账号"
            clearable
            @keyup.enter="handleQuery"
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
        <el-table-column prop="" label="订单号" />
        <el-table-column prop="" label="所属分站" />
        <el-table-column prop="" label="商户手机号" />
        <el-table-column prop="" label="订单标题" />
        <el-table-column prop="" label="订单描述" />
        <el-table-column prop="" label="订单金额" />
        <el-table-column prop="" label="时间" />
        <el-table-column prop="" label="支付状态" />
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
          alipayNo: '',
          status: ''
        },
        statusOptions: [
          { label: '待打款', value: 1 },
          { label: '已打款', value: 2 },
          { label: '已取消', value: 3 }
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
          id: '',
          alipayNo: '',
          status: ''
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
