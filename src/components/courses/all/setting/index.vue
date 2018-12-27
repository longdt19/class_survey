<template lang="html">
  <div class="courses" style="padding-top: 0px; padding-bottom: 0px; margin-top: 50px; min-height: 450px">
    <el-form ref="form" label-width="120px">

      <el-row :gutter="20">
        <el-col :span="12">
          <!-- <el-form-item label="Họ và tên">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Mã sinh viên">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Email">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Khóa học">
            <el-input style="width: 300px"></el-input>
          </el-form-item> -->

          <!-- <el-form-item>
            <el-button>Cập nhật thông tin</el-button>
          </el-form-item> -->
        </el-col>

        <el-col :span="12">
          <el-form-item label="Mật khẩu cũ">
            <el-input style="width: 300px" type="password" v-model="old_pass"></el-input>
          </el-form-item>

          <el-form-item label="Mật khẩu mới">
            <el-input style="width: 300px" type="password" v-model="new_pass1"></el-input>
          </el-form-item>

          <el-form-item label="Mật khẩu mới">
            <el-input style="width: 300px" type="password" v-model="new_pass2"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="change_pass()" :loading="loading">Thay đổi mật khẩu</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { CHANGE_PASSWORD } from '@/constants/endpoints'

export default {
  data () {
    return {
      old_pass: '',
      new_pass1: '',
      new_pass2: '',
      loading: false
    }
  },
  methods: {
    async change_pass () {
      if (this.loading) return
      this.loading = true

      const data = {
        'password': this.old_pass,
        'newPassword': this.new_pass1,
        'confirmPassword': this.new_pass2,
        'username': this.common_data.username
      }

      const response = await this.$services.do_request('put', CHANGE_PASSWORD, data)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Thay đổi mật khẩu thành công')
        this.old_pass = ''
        this.new_pass1 = ''
        this.new_pass2 = ''
      } else {
        this.$message.error('Thay đổi mật khẩu thất bại')
      }
    }
  },
  mounted () {
    let elm_height = document.getElementById('courses_row').offsetHeight + 'px'
    this.$store.commit('Common/slide_bar_height', elm_height)
  }
}
</script>

<style lang="css" scoped="">

</style>
