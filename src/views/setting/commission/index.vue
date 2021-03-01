<template>
  <div>
    <el-card class="box-card">
      <el-table v-loading="loading" size="mini" :data="tableData">
        <el-table-column prop="" label="ID" />
        <el-table-column prop="" label="佣金类型" />
        <el-table-column prop="" label="佣金(元/%)" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEditRow(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="handleDelRow(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :page="queryParams.pageNum" :limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>

    <el-dialog v-model="dialogVisible" title="编辑" top="7vh">
      <el-form ref="form" :model="dialogForm" label-width="80px">
        <el-form-item label="佣金类型" required :show-message="false">
          <el-select v-model="dialogForm.type" filterable clearable placeholder="请选择客服类型" style="width: 100%">
            <el-option v-for="(item, index) in typeOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="佣金值" required :show-message="false">
          <el-input v-model="dialogForm.val" placeholder="请输入佣金值" clearable />
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
          type: '',
          val: ''
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
      handleDelRow(index, row) {
        console.log(index, row)
      },
      handleEditRow(index, row) {
        console.log(index, row)
        this.dialogVisible = true
      },
      submit() {}
    }
  })
</script>
