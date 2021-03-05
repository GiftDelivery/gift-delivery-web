<template>
  <div>
    <el-card class="box-card">
      <template #header>非代发订单</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="快递单号">
          <el-input v-model="queryParams.expressNo" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="批次单号">
          <el-input v-model="queryParams.batchNo" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="商品名称">
          <el-select v-model="queryParams.goods" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option v-for="(item, index) in goodsOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="快递公司">
          <el-input v-model="queryParams.expressName" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="平台类型">
          <el-select v-model="queryParams.platform" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option v-for="(item, index) in platformOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="打单状态">
          <el-select
            v-model="queryParams.intimidateStatus"
            filterable
            clearable
            placeholder="请选择"
            @change="handleQuery"
          >
            <el-option
              v-for="(item, index) in intimidateStatusOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
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
        <el-table-column prop="" label="批次编号" />
        <el-table-column prop="" label="平台类型" />
        <el-table-column prop="" label="第三方平台订单号" />
        <el-table-column prop="" label="商品名称" />
        <el-table-column prop="" label="快递单号" />
        <el-table-column prop="" label="快递公司" />
        <el-table-column prop="" label="快递单价" />
        <el-table-column prop="" label="总金额" />
        <el-table-column prop="" label="收货地址" />
        <el-table-column prop="" label="打单状态" />
        <el-table-column prop="" label="下单时间" />
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
          expressNo: '',
          batchNo: '',
          goods: '',
          expressName: '',
          platform: '',
          intimidateStatus: ''
        },

        platformOptions: [
          { label: '淘宝', value: 1 },
          { label: '拼多多', value: 2 },
          { label: '京东', value: 3 }
        ],
        intimidateStatusOptions: [
          { label: '未打单', value: 1 },
          { label: '已打单', value: 2 }
        ],
        goodsOptions: [],

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
          expressNo: '',
          batchNo: '',
          goods: '',
          expressName: '',
          platform: '',
          intimidateStatus: ''
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
