<template>
  <div>
    <el-card class="box-card">
      <template #header>我的空包</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="空包名称">
          <el-input v-model="queryParams.name" placeholder="请输入空包名称" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryParams.status" filterable clearable placeholder="请选择状态" @change="handleQuery">
            <el-option label="上架" value="1" />
            <el-option label="下架" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="渠道">
          <el-select v-model="queryParams.channel" filterable clearable placeholder="请选择渠道" @change="handleQuery">
            <el-option v-for="(item, index) in channelOptions" :key="index" :label="item.label" :value="item.value" />
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
        <el-table-column prop="" label="主图" />
        <el-table-column prop="" label="空包名称" />
        <el-table-column prop="" label="成本(元)" />
        <el-table-column prop="" label="销售价(元)" />
        <el-table-column prop="" label="描述" />
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
          name: '',
          status: '',
          channel: ''
        },
        channelOptions: [{ label: '空包', value: '1' }],
        loading: false,
        tableData: [],
        //
        dialogVisible: false,
        dialogForm: {
          cost: 2,
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
      handleEditRow(index, row) {
        console.log(index, row)
        this.dialogVisible = true
      },
      submit() {}
    }
  })
</script>
