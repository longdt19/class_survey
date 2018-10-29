<template>
  <el-dialog title="Chỉnh sửa thông tin giảng viên" :visible.sync="dialogFormVisible">
    <div class="">

    </div>
    <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="ruleForm">

        <el-form-item label="Tên đăng nhập" prop="username" style="margin-top: 20px">
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
      }
    }
  },
  methods: {
    edit () {
      this.$emit('edited_teacher', this.ruleForm)
    },
    open (teacher) {
      this.ruleForm.username = teacher.username
      this.ruleForm.password = teacher.password
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
