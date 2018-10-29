<template>
  <el-dialog title="Chỉnh sửa thông tin sinh viên" :visible.sync="dialogFormVisible">
    <div class="">

    </div>
    <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="ruleForm">

        <el-form-item label="Mã sinh viên" prop="username" style="margin-top: 20px">
          <el-input v-model="ruleForm.username" class="input_handle"></el-input>
        </el-form-item>

        <el-form-item label="Mật khẩu" prop="password" style="margin-top: 20px">
          <el-input v-model="ruleForm.password" type="password" class="input_handle"></el-input>
        </el-form-item>

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
      <el-button type="primary" @click="dialogFormVisible = false">Xác nhận</el-button>
    </span>
  </el-dialog>
</template>

<script>
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
      }
    }
  },
  watch: {
    'ruleForm.username' (val) {
      this.ruleForm.email = val + '@vnu.edu.vn'
    }
  },
  methods: {
    edit () {
      this.$emit('edited_student', this.ruleForm)
    },
    open (student) {
      this.ruleForm.username = student.username
      this.ruleForm.password = student.password
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
