<template>
  <div>
    <el-card class="box-card">
      <template #header>账户明细</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="序号">
          <el-input v-model="queryParams.no" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="平台">
          <el-select v-model="queryParams.platform" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option v-for="(item, index) in platformOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="单号">
          <el-input v-model="queryParams.orderNo" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="发货人">
          <el-input v-model="queryParams.userName" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="发货人手机">
          <el-input v-model="queryParams.phone" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="下单时间">
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
        <el-form-item label="退款状态">
          <el-select v-model="queryParams.refundStatus" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option
              v-for="(item, index) in refundStatusOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
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
        <el-form-item label="商品数量">
          <el-input v-model="queryParams.goodsNum" placeholder="请输入" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="商品">
          <el-select v-model="queryParams.goods" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option v-for="(item, index) in goodsOptions" :key="index" :label="item.label" :value="item.value" />
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
        <el-table-column prop="" label="分站" />
        <el-table-column prop="" label="商户" />
        <el-table-column prop="" label="快递名称" />
        <el-table-column prop="" label="快递单号" />
        <el-table-column prop="" label="收件信息" />
        <el-table-column prop="" label="商品名称" />
        <el-table-column prop="" label="礼品别名" />
        <el-table-column prop="" label="商品数量" />
        <el-table-column prop="" label="打单状态" />
        <el-table-column prop="" label="打单时间" />
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
          no: '',
          platform: '',
          orderNo: '',
          userName: '',
          phone: '',
          time: [],
          refundStatus: '',
          intimidateStatus: '',
          goodsNum: '',
          goods: ''
        },

        platformOptions: [
          { label: '淘宝', value: 1 },
          { label: '拼多多', value: 2 },
          { label: '京东', value: 3 }
        ],
        refundStatusOptions: [
          { label: '未退款', value: 1 },
          { label: '退款中', value: 2 },
          { label: '已退款', value: 3 },
          { label: '拒绝退款', value: 4 }
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
          no: '',
          platform: '',
          orderNo: '',
          userName: '',
          phone: '',
          time: [],
          refundStatus: '',
          intimidateStatus: '',
          goodsNum: '',
          goods: ''
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
