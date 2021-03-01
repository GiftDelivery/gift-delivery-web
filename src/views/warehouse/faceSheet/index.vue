<template>
  <div>
    <el-card class="box-card">
      <el-table v-loading="loading" size="mini" :data="tableData">
        <el-table-column prop="" label="快递" />
        <el-table-column prop="" label="成本(元)" />
        <el-table-column prop="" label="销售价(元)" />
        <el-table-column prop="" label="上下架" />
        <el-table-column prop="" label="状态" />
        <el-table-column prop="" label="类型" />
        <el-table-column prop="" label="创建时间" />
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
        <el-form-item label="成本(元)">
          <el-input v-model="dialogForm.cost" readonly />
        </el-form-item>
        <el-form-item label="售价(元)" required :show-message="false">
          <el-input v-model="dialogForm.val" placeholder="请输入售价" clearable />
          <div class="text-tips"> <i class="el-icon-warning-outline"></i>销售价不能低于 成本 + 0.01</div>
        </el-form-item>
        <el-form-item label="上下架">
          <el-switch v-model="dialogForm.status" />
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
          pageSize: 20
        },
        typeOptions: [
          { label: '固定值', value: '1' },
          { label: '比例', value: '2' }
        ],
        loading: false,
        tableData: [],
        //
        dialogVisible: false,
        dialogForm: {
          cost: 2,
          val: '',
          status: false
        }
      }
    },
    created() {
      this.handleQuery()
    },
    methods: {
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
