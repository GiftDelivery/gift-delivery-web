<template>
  <div>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      total: {
        required: true,
        type: Number
      },
      page: {
        type: Number,
        default: 0
      },
      limit: {
        type: Number,
        default: 20
      },
      pageSizes: {
        type: Array,
        default() {
          return [20, 50, 80, 100]
        }
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      }
    },
    emits: ['update:page', 'update:limit', 'pagination'],
    computed: {
      currentPage: {
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      },
      pageSize: {
        get() {
          return this.limit
        },
        set(val) {
          this.$emit('update:limit', val)
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        this.$emit('pagination', { page: this.currentPage, limit: val })
      },
      handleCurrentChange(val) {
        this.$emit('pagination', { page: val, limit: this.pageSize })
      }
    }
  }
</script>

<style>
  .el-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
</style>
