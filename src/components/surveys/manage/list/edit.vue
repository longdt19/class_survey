<template>
  <el-dialog
    title="Thông tin chi tiết phiếu"
    :visible.sync="centerDialogVisible"
    width="50%"
  >
    <div>
      <div class="" style="margin-left: 50px"
        v-for="(item_line, index_item) in item_lines" v-bind:key="index_item"
      >
        <span>{{ index_item + 1 }}. {{ item_line.name }}</span>
        <div class="" style="margin-left: 50px"
          v-for="(line, index_line) in item_line.lines" v-bind:key="index_line"
        >
          <span>{{ index_line + 1 }}. {{ line.name }}</span>
        </div>
      </div>
    </div>
    <div class="" style="margin-top: 50px">
      <el-form ref="form" label-width="120px">
        <el-form-item label="Đặt làm mặc định">
          <el-switch v-model="is_default"></el-switch>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
      <el-button type="primary" @click="update_survey()" :loading="loading">Xác nhận</el-button>
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
      item_lines: '',
      is_default: '',
      loading: false
    }
  },
  methods: {
    open (survey) {
      this.item_lines = JSON.parse(survey.fieldData)
      this.is_default = survey.isDefault === 1
      this.survey_id = survey.id
      this.centerDialogVisible = true
    },
    async update_survey () {
      if (this.loading) return
      this.loading = true

      const data = {
        'id': this.survey_id,
        'isDefault': this.is_default ? 1 : 0
      }

      const response = await this.$services.do_request('put', SURVEY_FORM, data)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Cập nhật  thành công')
        this.$emit('updated_survey')
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
