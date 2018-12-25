<template>
  <el-dialog
    title="Xác nhận xóa sinh viên"
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
      <el-button type="primary" @click="delete_teacher()" :loading="loading">Xác nhận</el-button>
    </span>
</el-dialog>
</template>

<script>
import { TEACHER } from '@/constants/endpoints'
import { STATUS } from '@/constants/status_return_code'

export default {
  data () {
    return {
      centerDialogVisible: false,
      teacher_id: null,
      loading: false
    }
  },
  methods: {
    open (teacher) {
      this.teacher_id = teacher.id
      this.centerDialogVisible = true
    },
    async delete_teacher () {
      if (this.loading) return
      this.loading = true

      const url = TEACHER + `/${this.teacher_id}`
      const response = await this.$services.do_request('delete', url)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Xóa giảng viên thành công')
        this.$emit('deleted_teacher')
        this.centerDialogVisible = false
      } else if (response.status === 400) {
        this.$message.error(STATUS[response.data.code])
      }
    }
  }
}
</script>

<style lang="css">
</style>
