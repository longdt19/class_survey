<template>
  <el-dialog
    title="Xác nhận xóa khảo sát môn học"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <div class="" style="text-align: center">
      <span>Sau khi xóa sẽ không thể phục hồi.</span>
      <br/>
      <span>Bạn chắc chắn muốn tiếp tục thực hiện thao tác ?</span>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
      <el-button type="primary" @click="delete_class()" :loading="loading">Xác nhận</el-button>
    </span>
</el-dialog>
</template>

<script>
import { CLASS } from '@/constants/endpoints'

export default {
  data () {
    return {
      centerDialogVisible: false,
      class_id: null,
      loading: false
    }
  },
  methods: {
    async delete_class () {
      if (this.loading) return
      this.loading = true

      const url = CLASS + `/${this.class_id}`
      const response = await this.$services.do_request('delete', url)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Xóa lớp học thành công')
        this.$emit('deleted_class')
        this.centerDialogVisible = false
      } else if (response.status === 400) {
        // this.$message.error(STATUS[response.data.code])
      }
    },
    open (_class) {
      this.class_id = _class.id
      this.centerDialogVisible = true
    }
  }
}
</script>

<style lang="css">
</style>
