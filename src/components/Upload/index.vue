<template>
  <!-- 图片上传 -->
  <el-upload
    ref="upload"
    class="upload-demo"
    multiple
    :list-type="type === 'img' ? 'picture-card' : ''"
    :auto-upload="false"
    :file-list="fileList"
    :action="actionUrl"
    :on-change="handChange"
    :on-preview="handPrevie"
    :on-remove="handRemove"
    :accept="accept"
    :headers="uploadHeaders"
  >
    <template v-if="type !== 'img'" #trigger>
      <el-button size="mini" type="primary">{{ btnTxt }}</el-button>
    </template>
    <br />
    <template v-if="type !== 'img'" #tip>
      <div class="el-upload__tip">{{ tips }}</div>
    </template>
    <template v-if="type === 'img'" #default>
      <i class="el-icon-plus"></i>
    </template>
  </el-upload>
  <div v-if="type === 'img'">
    <span class="el-upload__tip">{{ tips }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      btnTxt: {
        type: String,
        default: '选择文件'
      },
      type: {
        type: String,
        default: 'img'
      },
      actionUrl: {
        type: String,
        default: '#'
      },
      fileArr: {
        type: Array,
        default: () => {
          return []
        }
      },
      tips: {
        type: String,
        default: ''
      },
      accept: {
        type: String,
        default: '.jpg, .png, .gif, .jpeg'
      },
      limit: {
        type: Number,
        default: 1
      }
    },
    emits: ['changeFileList', 'removeFileList'],
    data() {
      return {
        // upload
        uploadHeaders: {},
        fileList: this.fileArr
      }
    },
    computed: {},
    watch: {
      fileArr(val) {
        this.fileList = val
      }
    },
    methods: {
      handCheckAccept(fileList) {
        const flag = fileList.every((item) => this.accept.indexOf(item.name.substr(item.name.lastIndexOf('.'))) !== -1)
        if (!flag) {
          this.$message.warning('文件格式不正确,请重新选择')
          this.fileList = []
          this.changeFileList()
        }
        return flag
      },
      handChange(file, fileList) {
        if (!this.handCheckAccept(fileList)) return
        if (fileList.length > this.limit) {
          this.$message.warning(
            `当前限制选择${this.limit}个文件，共选择了 ${fileList.length} 个文件,默认从第一个文件替换`
          )
        }
        this.fileList = fileList.slice(-this.limit)
        this.changeFileList()
      },
      handRemove(file, fileList) {
        this.fileList = fileList
        this.$emit('removeFileList', [file, this.fileList])
      },
      handPrevie(file) {
        window.open(file.url)
      },
      clearFiles() {
        this.fileList = []
        this.$refs.upload.clearFiles()
      },
      changeFileList() {
        this.$emit('changeFileList', this.fileList)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .upload-demo {
    display: inline;
    vertical-align: top;
  }
</style>

<style lang="scss">
  .el-upload__tip {
    color: #999;
    font-weight: 400;
  }
</style>
