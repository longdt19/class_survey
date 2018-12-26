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
      <el-button type="primary" @click="delete_survey()" :loading="loading">Xác nhận</el-button>
    </span>
</el-dialog>
</template>

<script>
import { SURVEY_FORM } from '@/constants/endpoints'
import { STATUS } from '@/constants/status_return_code'

export default {
  data () {
    return {
      centerDialogVisible: false,
      survey_id: null,
      loading: false
    }
  },
  methods: {
    async delete_survey () {
      if (this.loading) return
      this.loading = true

      const url = SURVEY_FORM + `/${this.survey_id}`
      const response = await this.$services.do_request('delete', url)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Xóa  thành công')
        this.$emit('deleted_survey')
        this.centerDialogVisible = false
      } else if (response.status === 400) {
        this.$message.error(STATUS[response.data.code])
      }
    },
    open (survey) {
      this.survey_id = survey.id
      this.centerDialogVisible = true
    }
  }
}
</script>

<style lang="css">
</style>
