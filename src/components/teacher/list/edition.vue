<template>
  <el-dialog title="Chỉnh sửa thông tin giảng viên" :visible.sync="dialogFormVisible">
    <div class="">

    </div>
    <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="ruleForm">

        <el-form-item label="Tên đăng nhập" prop="username" style="margin-top: 20px">
          <el-input v-model="ruleForm.username" class="input_handle"></el-input>
        </el-form-item>

        <!-- <el-form-item label="Mật khẩu" prop="password" style="margin-top: 20px">
          <el-input v-model="ruleForm.password" type="password" class="input_handle"></el-input>
        </el-form-item> -->

        <el-form-item label="VNU email" prop="email" style="margin-top: 20px">
          <el-input v-model="ruleForm.email" class="input_handle"></el-input>
        </el-form-item>

        <el-form-item label="Họ và Tên" prop="fullname" style="margin-top: 20px">
          <el-input v-model="ruleForm.fullname" class="input_handle"></el-input>
        </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
      <el-button type="primary" @click="edit()" :loading="loading">Xác nhận</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { TEACHER } from '@/constants/endpoints'
import { STATUS } from '@/constants/status_return_code'

export default {
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      teacher: {},
      ruleForm: {
        username: '',
        password: '',
        fullname: '',
        email: '',
        course: ''
      },
      rules: {
        username: [
          { required: true, message: 'Tên đăng nhập không được để trống', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Mật khẩu không được để trống' }
        ],
        email: [
          { type: 'email', message: 'VNU email không hợp lệ', trigger: ['change', 'blur'] }
        ]
      },
      loading: false
    }
  },
  methods: {
    check_befor_create () {
      if (this.ruleForm.username === '') {
        this.$message.error('Tên đăng nhập không được để trống')
        return false
      }
      if (this.ruleForm.fullname === '') {
        this.$message.error('Họ tên không được để trống')
        return false
      }
      if (this.ruleForm.teacher_code === '') {
        this.$message.error('Mã giảng viên không được để trống')
        return false
      } if (this.ruleForm.email === '') {
        this.$message.error('Email giảng viên không được để trống')
        return false
      }
      return true
    },
    async edit () {
      if (this.loading) return
      if (this.check_befor_create() === false) {
        return
      }
      this.loading = true

      const data = {
        'username': this.ruleForm.username,
        'lecturerCode': this.teacher.lecturerCode,
        'fullName': this.ruleForm.fullname,
        'email': this.ruleForm.email,
        'id': this.teacher.id
      }

      const response = await this.$services.do_request('put', TEACHER, data)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Sửa giảng viên thành công')
        this.ruleForm = {
          username: '',
          password: '',
          fullname: '',
          email: '',
          course: ''
        }
        this.$emit('edited_teacher')
        this.dialogFormVisible = false
      } else if (response.status === 400) {
        this.$message.error(STATUS[response.data.code])
      }
    },
    open (teacher) {
      this.ruleForm.username = teacher.user.username
      this.ruleForm.fullname = teacher.fullname
      this.ruleForm.email = teacher.email
      this.teacher = teacher
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped="">
.input_handle {
  width: 300px;
}
</style>
