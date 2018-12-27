<template>
  <el-dialog title="Chỉnh sửa thông tin sinh viên" :visible.sync="dialogFormVisible">
    <div class="">

    </div>
    <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="ruleForm">

        <el-form-item label="Mã sinh viên" prop="username" style="margin-top: 20px">
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

        <el-form-item label="Khóa học" prop="course" style="margin-top: 20px">
          <el-input v-model="ruleForm.course" class="input_handle"></el-input>
        </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
      <el-button type="primary" @click="edit()" :loading="loading">Xác nhận</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { STUDENT } from '@/constants/endpoints'
import { STATUS } from '@/constants/status_return_code'

export default {
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      student: {},
      ruleForm: {
        username: '',
        password: '',
        fullname: '',
        email: '',
        course: ''
      },
      rules: {
        username: [
          { required: true, message: 'Mã sinh viên không được để trống', trigger: 'blur' },
          { pattern: /^\d+$/, message: 'Mã sinh viên không hợp lệ', trigger: ['change', 'blur'] }
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
  watch: {
    'ruleForm.username' (val) {
      if (val === '') {
        this.ruleForm.email = val
      } else {
        this.ruleForm.email = val + '@vnu.edu.vn'
      }
    }
  },
  methods: {
    check_befor_create () {
      if (this.ruleForm.username === '') {
        this.$message.error('Mã sinh viên không được để trống')
        return false
      }
      if (this.ruleForm.fullname === '') {
        this.$message.error('Họ tên không được để trống')
        return false
      }
      if (this.ruleForm.course === '') {
        this.$message.error('Khóa học không được để trống')
        return false
      }
      if (this.ruleForm.email === '') {
        this.$message.error('Email không được để trống')
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
        'studentCode': this.ruleForm.username,
        'fullName': this.ruleForm.fullname,
        'course': this.ruleForm.course,
        'email': this.ruleForm.email,
        'id': this.student.id
      }

      const response = await this.$services.do_request('put', STUDENT, data)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Sửa sinh viên thành công')
        this.ruleForm = {
          username: '',
          password: '',
          fullname: '',
          email: '',
          course: ''
        }
        this.$emit('edited_student')
        this.dialogFormVisible = false
      } else if (response.status === 400) {
        this.$message.error(STATUS[response.data.code])
      }
    },
    open (student) {
      this.ruleForm.username = student.studentCode
      this.ruleForm.fullname = student.fullname
      this.ruleForm.email = student.email
      this.ruleForm.course = student.course
      this.student = student
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
