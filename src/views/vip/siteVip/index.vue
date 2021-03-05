<template>
  <div>
    <el-card class="box-card">
      <template #header>站点VIP配置</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入" clearable @keyup.enter="handleQuery" />
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
        <el-table-column prop="" label="单笔充值" />
        <el-table-column prop="" label="累计充值" />
        <el-table-column prop="" label="等级" />
        <el-table-column prop="" label="折扣%" />
        <el-table-column prop="" label="状态" />
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
        <el-form-item label="单笔充值" required :show-message="false">
          <el-input v-model="dialogForm.xx" placeholder="" clearable />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            为了防止恶意扰乱市场，调节浮动范围只能在 -20% ~ 20%
          </div>
        </el-form-item>
        <el-form-item label="累计充值" required :show-message="false">
          <el-input v-model="dialogForm.xx" placeholder="" clearable />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            为了防止恶意扰乱市场，调节浮动范围只能在 -20% ~ 20%
          </div>
        </el-form-item>
        <el-form-item label="VIP等级">
          <el-input v-model="dialogForm.xx" placeholder="" clearable />
        </el-form-item>
        <el-form-item label="折扣率">
          <el-input v-model="dialogForm.xx" placeholder="" clearable />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            0 - 100， 无需加 %， 超过 100 默认 100，小于 0 默认 0, 100 表示不打折，0 表示不收费
          </div>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="dialogForm.status" />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            隐藏后将不再显示
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
        tableData: [{}],
        //
        dialogVisible: false,
        dialogForm: {}
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
      async getList() {},
      handleEditRow(index, row) {
        this.dialogVisible = true
      }
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
