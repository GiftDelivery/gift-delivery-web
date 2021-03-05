<template>
  <div>
    <el-card class="box-card">
      <template #header>用户设置</template>
      <el-form ref="form" size="mini" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="" clearable />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.nickname" placeholder="" clearable />
        </el-form-item>
        <el-form-item label="头像">
          <TheUpload :file-arr="form.fileList" @changeFileList="changeFileList" @removeFileList="removeFileList" />
        </el-form-item>
        <el-form-item label="旧密码">
          <el-input v-model="form.oldPwd" placeholder="" clearable />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd" placeholder="" clearable />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.confirmPwd" placeholder="" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
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
        form: {
          username: '',
          nickname: '',
          fileList: [],
          oldPwd: '',
          pwd: '',
          confirmPwd: ''
        }
      }
    },
    created() {},
    methods: {
      changeFileList(fileList) {},
      removeFileList([file, fileList]) {},
      submit() {}
    }
  })
</script>
