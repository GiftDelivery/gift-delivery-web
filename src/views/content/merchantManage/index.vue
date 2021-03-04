<template>
  <div>
    <el-card class="box-card">
      <template #header>商户管理</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="queryParams.phone" placeholder="请输入手机号" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="queryParams.nickname" placeholder="请输入昵称" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="queryParams.qq" placeholder="请输入QQ" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="queryParams.wx" placeholder="请输入微信" clearable @keyup.enter="handleQuery" />
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
        <el-table-column prop="" label="商户" />
        <el-table-column prop="" label="手机号" />
        <el-table-column prop="" label="昵称" />
        <el-table-column prop="" label="共计充值" />
        <el-table-column prop="" label="VIP" />
        <el-table-column prop="" label="活跃" />
        <el-table-column prop="" label="账户金额" />
        <el-table-column prop="" label="固定折扣" />
        <el-table-column prop="" label="QQ" />
        <el-table-column prop="" label="微信" />
        <el-table-column prop="" label="状态" />
        <el-table-column prop="" label="注册时间" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEditRow(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :page="queryParams.pageNum" :limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>

    <el-dialog v-model="dialogVisible" title="编辑" top="7vh">
      <el-form ref="form" :model="dialogForm" label-width="80px">
        <el-form-item label="账户金额">
          <el-input v-model="dialogForm.money" placeholder="" clearable />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            修改余额请确认，已收到款项，为最终余额
          </div>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="dialogForm.status" />
        </el-form-item>
        <el-form-item label="固定优惠" required :show-message="false">
          <el-input v-model="dialogForm.discount" placeholder="" clearable />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            每单固定优惠，不再是折扣，请自行检查，只针对快递费，如果超过快递费，则优惠无效
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
          phone: '',
          nickname: '',
          qq: '',
          wx: ''
        },
        loading: false,
        tableData: [{}],
        //
        dialogVisible: false,
        dialogForm: {
          money: '',
          status: false,
          discount: ''
        }
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
          phone: '',
          nickname: '',
          qq: '',
          wx: ''
        }
        this.handleQuery()
      },
      handleQuery() {
        this.queryParams.pageNum = 1
        this.getList()
      },
      async getList() {},
      handleEditRow(index, row) {
        this.dialogVisible = true
      },
      submit() {}
    }
  })
</script>
<style lang="scss" scoped>
  .text-tips {
    color: #737373;
    font-size: 12px;
    line-height: normal;
    margin-top: 4px;
  }
</style>
