<template>
  <div>
    <el-card class="box-card">
      <template #header>二级域名</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="域名">
          <el-input v-model="queryParams.title" placeholder="请输入域名" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryParams.status" filterable clearable placeholder="请选择状态" @change="handleQuery">
            <el-option label="未启用" value="1" />
            <el-option label="启用" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="解析状态">
          <el-select
            v-model="queryParams.operationStatus"
            filterable
            clearable
            placeholder="请选择解析状态"
            @change="handleQuery"
          >
            <el-option label="未解析" value="1" />
            <el-option label="已解析" value="2" />
          </el-select>
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
        <el-form-item label="是否删除">
          <el-select v-model="queryParams.isDel" filterable clearable placeholder="请选择" @change="handleQuery">
            <el-option label="已删除" value="1" />
            <el-option label="取消" value="2" />
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
        <el-table-column prop="" label="全域名" />
        <el-table-column prop="" label="站长" />
        <el-table-column prop="" label="状态" />
        <el-table-column prop="" label="解析状态" />
        <el-table-column prop="" label="过期时间" />
        <el-table-column prop="" label="下单时间" />
        <el-table-column label="操作" fixed="right" width="120">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleDelRow(scope.$index, scope.row)">删除</el-button>
            <el-button type="text" size="mini" @click="handleRenewRow(scope.$index, scope.row)">续费</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :page="queryParams.pageNum" :limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>

    <el-dialog v-model="dialogVisible" title="创建" width="70%" top="7vh">
      <el-form ref="form" :model="dialogForm" label-width="80px">
        <el-form-item label="选择域名">
          <el-select v-model="dialogForm.xxx" filterable clearable placeholder="请选择可用域名" style="width: 100%">
            <el-option v-for="(item, index) in domainList" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="申请域名" required :show-message="false">
          <el-input
            v-model="dialogForm.xxx"
            placeholder="请输入申请域名"
            clearable
            minlength="2"
            maxlength="10"
            show-word-limit
          />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>2-10位，gback/gpay/www 无效，不能包含 . _ - 等字符
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
          title: '',
          operationStatus: '',
          status: '',
          time: [],
          isDel: ''
        },
        loading: false,
        tableData: [],
        //
        domainList: [],
        dialogVisible: false,
        dialogForm: {
          xxx: ''
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
          code: '',
          title: '',
          operationStatus: '',
          vip: '',
          status: '',
          payStatus: '',
          isDel: ''
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
      handleRenewRow(index, row) {
        console.log(index, row)
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
