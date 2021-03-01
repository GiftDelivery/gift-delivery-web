<template>
  <div>
    <el-card class="box-card">
      <template #header>客服配置</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="标题">
          <el-input v-model="queryParams.title" placeholder="请输入标题" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="queryParams.accountNumber" placeholder="请输入账号" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="客服类型">
          <el-select v-model="queryParams.type" filterable clearable placeholder="请选择客服类型" @change="handleQuery">
            <el-option v-for="(item, index) in typeOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryParams.status" filterable clearable placeholder="请选择状态" @change="handleQuery">
            <el-option label="禁用" value="1" />
            <el-option label="启用" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="box-card">
      <el-row class="opera-panel">
        <el-button type="primary" @click="handleAdd"> 新增 </el-button>
      </el-row>

      <el-table v-loading="loading" size="mini" :data="tableData">
        <el-table-column prop="" label="ID" />
        <el-table-column prop="" label="客服标题" />
        <el-table-column prop="" label="客服类型" />
        <el-table-column prop="" label="账号" />
        <el-table-column prop="" label="二维码" />
        <el-table-column prop="" label="状态" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEditRow(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="handleDelRow(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :page="queryParams.pageNum" :limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>

    <el-dialog v-model="dialogVisible" title="新增" top="7vh">
      <el-form ref="form" :model="dialogForm" label-width="80px">
        <el-form-item label="客服类型" required :show-message="false">
          <el-select v-model="dialogForm.type" filterable clearable placeholder="请选择客服类型" style="width: 100%">
            <el-option v-for="(item, index) in typeOptions" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="客服标题" required :show-message="false">
          <el-input v-model="dialogForm.title" placeholder="请输入客服标题" clearable />
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="dialogForm.accountNumber" placeholder="请输入账号" clearable />
        </el-form-item>
        <el-form-item label="二维码">
          <TheUpload
            :file-arr="dialogForm.fileList"
            @changeFileList="changeFileList"
            @removeFileList="removeFileList"
          />
        </el-form-item>
        <el-form-item label="状态">
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
  import TheUpload from '@/components/Upload/index.vue'

  export default defineComponent({
    components: {
      TheUpload
    },
    data() {
      return {
        total: 0,
        queryParams: {
          pageNum: 1,
          pageSize: 20,
          title: '',
          accountNumber: '',
          status: '',
          type: ''
        },
        typeOptions: [
          { label: 'QQ', value: 'qq' },
          { label: '微信', value: 'wechat' }
        ],
        loading: false,
        tableData: [],
        //
        domainList: [],
        dialogVisible: false,
        dialogForm: {
          type: '',
          title: '',
          accountNumber: '',
          fileList: [],
          status: false
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
          title: '',
          accountNumber: '',
          status: '',
          type: ''
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
      handleAdd() {
        this.dialogVisible = true
      },
      handleDelRow(index, row) {
        console.log(index, row)
      },
      handleEditRow(index, row) {
        console.log(index, row)
      },
      changeFileList(fileList) {},
      removeFileList([file, fileList]) {},
      submit() {}
    }
  })
</script>
