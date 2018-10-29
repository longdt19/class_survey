<template>
  <el-dialog title="Chỉnh sửa thông tin lớp môn học" :visible.sync="dialogFormVisible">
    <div class="">

    </div>
    <el-form :model="ruleForm" :rules="rules" label-width="150px" ref="ruleForm">

        <el-form-item label="Tên môn học" prop="subject_name" style="margin-top: 20px">
          <el-input v-model="ruleForm.subject_name" class="input_handle"></el-input>
        </el-form-item>

        <el-form-item label="Mã lớp môn học" prop="subject_code" style="margin-top: 20px">
          <el-input v-model="ruleForm.subject_code" class="input_handle"></el-input>
        </el-form-item>

        <el-form-item label="Tên giảng viên" prop="teacher" style="margin-top: 20px">
          <el-input v-model="ruleForm.teacher" class="input_handle"></el-input>
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
      class_survey: {},
      ruleForm: {
        subject_name: '',
        subject_code: '',
        teacher: ''
      },
      rules: {
        subject_name: [
          { required: true, message: 'Tên môn học không được để trống', trigger: 'blur' }
        ],
        teacher: [
          { required: true, message: 'Tên giảng viên không được để  trống' }
        ],
        subject_code: [
          { required: true, message: 'Mã lớp môn học không được để trống', trigger: ['change', 'blur'] }
        ]
      }
    }
  },
  methods: {
    open (class_survey) {
      this.ruleForm.subject_name = class_survey.subject_name
      this.ruleForm.subject_code = class_survey.subject_code
      this.ruleForm.fullname = class_survey.fullname
      this.ruleForm.teacher = class_survey.teacher
      this.class_survey = class_survey
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
