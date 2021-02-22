<template>
  <div>
    <el-card class="box-card">
      <template #header>小微商户申请</template>
      <el-form :inline="true" size="mini" :model="queryParams">
        <el-form-item label="ID">
          <el-input v-model="queryParams.id" placeholder="请输入ID" clearable @keyup.enter="handleQuery" />
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
        <el-table-column prop="" label="姓名" />
        <el-table-column prop="" label="身份证" />
        <el-table-column prop="" label="正面" />
        <el-table-column prop="" label="反面" />
        <el-table-column prop="" label="开户行" />
        <el-table-column prop="" label="银行卡" />
        <el-table-column prop="" label="店头" />
        <el-table-column prop="" label="门头" />
        <el-table-column prop="" label="店内" />
        <el-table-column prop="" label="简称" />
        <el-table-column prop="" label="客服电话" />
        <el-table-column prop="" label="服务类" />
        <el-table-column prop="" label="费率" />
        <el-table-column prop="" label="管理员" />
        <el-table-column prop="" label="状态" />
        <el-table-column prop="" label="时间" />
        <el-table-column label="操作" fixed="right" width="100">
          <template #default="scope">
            <el-button type="text" size="mini" @click="handleEditRow(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="handleDelRow(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :page="queryParams.pageNum" :limit="queryParams.pageSize" :total="total" @pagination="getList" />
    </el-card>

    <el-dialog v-model="dialogVisible" title="新增小微商户" width="70%" top="7vh">
      <el-form ref="form" :model="dialogForm" label-width="125px">
        <el-form-item label="真实姓名" required :show-message="false">
          <el-input v-model="dialogForm.xxx" placeholder="请输入真实姓名" clearable />
          <div class="text-tips"> <i class="el-icon-warning-outline"></i>必须是身份证真实姓名</div>
        </el-form-item>
        <el-form-item label="身份证号" required :show-message="false">
          <el-input v-model.number="dialogForm.xxx" type="number" placeholder="请输入身份证号" clearable />
          <div class="text-tips"> <i class="el-icon-warning-outline"></i>身份证号</div>
        </el-form-item>
        <el-form-item label="身份证有效期" required :show-message="false">
          <!-- value-format="YYYY-MM-DD" -->
          <el-date-picker
            v-model="dialogForm.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
            style="width: 100%"
          />
          <div class="text-tips"> <i class="el-icon-warning-outline"></i> 身份证反面有效期 </div>
        </el-form-item>
        <el-form-item label="身份证人像面照片">
          <TheUpload
            :file-arr="dialogForm.positiveList"
            @changeFileList="(arg) => changeFileList(arg, 1)"
            @removeFileList="(arg) => removeFileList(arg, 1)"
          />
        </el-form-item>
        <el-form-item label="身份证国徽面照片">
          <TheUpload
            :file-arr="dialogForm.oppositeList"
            @changeFileList="(arg) => changeFileList(arg, 2)"
            @removeFileList="(arg) => removeFileList(arg, 2)"
          />
        </el-form-item>
        <el-form-item label="开户人" required :show-message="false">
          <el-input v-model="dialogForm.xxx" placeholder="请输入开户人" clearable />
          <div class="text-tips"> <i class="el-icon-warning-outline"></i>开户人必须与真实姓名一致</div>
        </el-form-item>
        <el-form-item label="开户行" required :show-message="false">
          <el-select v-model="dialogForm.xxx" filterable clearable placeholder="请选择开户行" style="width: 100%">
            <el-option v-for="(item, index) in bankList" :key="index" :label="item.label" :value="item.value" />
          </el-select>
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            仅支持【工商银行,交通银行,招商银行,民生银行,中信银行,浦发银行,兴业银行,光大银行,广发银行,平安银行,北京银行,华夏银行,农业银行,建设银行,邮政储蓄银行,中国银行,宁波银行】
          </div>
        </el-form-item>
        <el-form-item label="银行账号" required :show-message="false">
          <el-input v-model.number="dialogForm.xxx" type="number" placeholder="请输入银行账号" clearable />
          <div class="text-tips">
            <i class="el-icon-warning-outline"></i>
            不支持一下开头的银行账号【623501;621468;620522;625191;622384;623078;940034;622150;622151;622181;622188;955100;621095;620062;621285;621798;621799;621797;622199;621096;62215049;62215050;62215051;62218849;62218850;62218851;621622;623219;621674;623218;621599;623698;623699;623686;621098;620529;622180;622182;622187;622189;621582;623676;623677;622812;622810;622811;628310;625919;625368;625367;518905;622835;625603;625605;518905】
          </div>
        </el-form-item>
        <el-form-item label="开户行地址" required :show-message="false">
          <el-cascader
            v-model="dialogForm.xxx"
            :options="areaOptions"
            :props="{ value: 'label' }"
            filterable
            clearable
            placeholder="请选择开户行地址"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="门店名称" required :show-message="false">
          <el-input v-model="dialogForm.xxx" placeholder="请输入门店名称" clearable />
        </el-form-item>
        <el-form-item label="门店地区" required :show-message="false">
          <el-cascader
            v-model="dialogForm.xxx"
            :options="areaOptions"
            :props="{ value: 'label' }"
            filterable
            clearable
            placeholder="请选择门店地区"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="门店街道" required :show-message="false">
          <el-input v-model="dialogForm.xxx" placeholder="请输入门店街道" clearable />
        </el-form-item>
        <el-form-item label="门店门口照片">
          <TheUpload
            :file-arr="dialogForm.storeDoorList"
            @changeFileList="(arg) => changeFileList(arg, 3)"
            @removeFileList="(arg) => removeFileList(arg, 3)"
          />
        </el-form-item>
        <el-form-item label="店内环境照片">
          <TheUpload
            :file-arr="dialogForm.storeInList"
            @changeFileList="(arg) => changeFileList(arg, 4)"
            @removeFileList="(arg) => removeFileList(arg, 4)"
          />
        </el-form-item>
        <el-form-item label="商户简称" required :show-message="false">
          <el-input v-model="dialogForm.xxx" placeholder="请输入商户简称" clearable />
        </el-form-item>
        <el-form-item label="客服电话" required :show-message="false">
          <el-input v-model.number="dialogForm.xxx" type="number" placeholder="请输入客服电话" clearable />
        </el-form-item>
        <el-form-item label="服务类型" required :show-message="false">
          <el-select v-model="dialogForm.xxx" filterable clearable placeholder="请选择服务类型" style="width: 100%">
            <el-option v-for="(item, index) in serviceList" :key="index" :label="item.label" :value="item.value" />
          </el-select>
          <div class="text-tips"> <i class="el-icon-warning-outline"></i>推荐选择零售 </div>
        </el-form-item>
        <el-form-item label="费率" required :show-message="false">
          <el-input v-model="dialogForm.rate" readonly clearable />
          <div class="text-tips"> <i class="el-icon-warning-outline"></i>入账周期T+1 </div>
        </el-form-item>
        <el-form-item label="超级管理员姓名" required :show-message="false">
          <el-input v-model="dialogForm.xxx" placeholder="请输入超级管理员姓名" clearable />
        </el-form-item>
        <el-form-item label="管理员联系电话" required :show-message="false">
          <el-input v-model.number="dialogForm.xxx" type="number" placeholder="请输入管理员联系电话" clearable />
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
  import regionData from '@/utils/area.js'

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
          id: '',
          title: '',
          content: ''
        },
        loading: false,
        tableData: [],
        //
        dialogVisible: false,
        dialogForm: {
          rate: '0.6%',
          xxx: '',
          time: [],
          positiveList: [],
          oppositeList: [],
          storeDoorList: [],
          storeInList: []
        },
        bankList: [
          { label: '工商银行', value: '工商银行' },
          { label: '交通银行', value: '交通银行' },
          { label: '招商银行', value: '招商银行' },
          { label: '民生银行', value: '民生银行' },
          { label: '中信银行', value: '中信银行' },
          { label: '浦发银行', value: '浦发银行' },
          { label: '兴业银行', value: '兴业银行' },
          { label: '光大银行', value: '光大银行' },
          { label: '广发银行', value: '广发银行' },
          { label: '平安银行', value: '平安银行' },
          { label: '北京银行', value: '北京银行' },
          { label: '华夏银行', value: '华夏银行' },
          { label: '农业银行', value: '农业银行' },
          { label: '建设银行', value: '建设银行' },
          { label: '邮政储蓄银行', value: '邮政储蓄银行' },
          { label: '中国银行', value: '中国银行' },
          { label: '宁波银行', value: '宁波银行' }
        ],
        serviceList: [
          { label: '餐饮', value: 1 },
          { label: '线下零售', value: 2 },
          { label: '居民生活服务', value: 3 },
          { label: '休闲娱乐', value: 4 },
          { label: '交通出行', value: 5 },
          { label: '其他', value: 6 }
        ],
        areaOptions: regionData
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
          title: '',
          content: ''
        }
        this.handleQuery()
      },
      handleQuery() {
        this.queryParams.pageNum = 1
        this.getList()
      },
      async getList() {},
      handleAdd() {
        this.dialogVisible = true
      },
      submit() {
        console.log(this.dialogForm)
      },
      changeFileList(fileList, index) {
        switch (index) {
          case 1:
            this.dialogForm.positiveList = fileList
            break
          case 2:
            this.dialogForm.oppositeList = fileList
            break
          case 3:
            this.dialogForm.storeDoorList = fileList
            break
          case 4:
            this.dialogForm.storeInList = fileList
            break
        }
      },
      removeFileList([file, fileList], index) {
        switch (index) {
          case 1:
            this.dialogForm.positiveList = fileList
            break
          case 2:
            this.dialogForm.oppositeList = fileList
            break
          case 3:
            this.dialogForm.storeDoorList = fileList
            break
          case 4:
            this.dialogForm.storeInList = fileList
            break
        }
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
