<template>
  <el-dialog
    title="Tạo cuộc khảo sát"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <div class="" style="text-align: center">
      <span></span>
      <br/>
      <span>Xác nhận tạo cuộc khảo sát cho lớp học này</span>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
      <el-button type="primary" @click="generate_survey()" :loading="loading">Xác nhận</el-button>
    </span>
</el-dialog>
</template>

<script>
import { SURVEY } from '@/constants/endpoints'
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
    async generate_survey () {
      if (this.loading) return
      this.loading = true

      const url = SURVEY + `/${this.survey_id}`
      const response = await this.$services.do_request('post', url)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Tạo khảo sát thành công')
        this.$emit('generated_survey')
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
