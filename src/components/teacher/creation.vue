<template lang="">
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Thêm mới tài khoản giảng viên</span>
      </div>
      <div class="">
        <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="ruleForm">

          <el-row>
            <el-col :sm="24" :md="12">
              <el-form-item label="Tên đăng nhập" prop="username" style="margin-top: 20px">
                <el-input v-model="ruleForm.username" class="input_handle"></el-input>
              </el-form-item>

              <el-form-item label="Mật khẩu" prop="password" style="margin-top: 20px">
                <el-input v-model="ruleForm.password" type="password" class="input_handle"></el-input>
              </el-form-item>

              <el-form-item label="VNU email" prop="email" style="margin-top: 20px">
                <el-input v-model="ruleForm.email" class="input_handle"></el-input>
              </el-form-item>
            </el-col>

            <el-col :sm="24" :md="12">
              <el-form-item label="Họ và Tên" prop="fullname" style="margin-top: 20px">
                <el-input v-model="ruleForm.fullname" class="input_handle"></el-input>
              </el-form-item>

              <el-form-item label="Mã giảng viên" prop="teacher_code" style="margin-top: 20px">
                <el-input v-model="ruleForm.teacher_code" class="input_handle"></el-input>
              </el-form-item>

            </el-col>

          </el-row>
        </el-form>
        <div class="" style="text-align: right">
          <el-button type="primary" @click="create_teacher()" :loading="loading">Thêm mới</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>Tải lên tài khoản giảng viên</span>
        <!-- <el-button style="float: right" type="button">Chọn tệp tải lên   <i class="el-icon-upload el-icon-right"></i></el-button> -->
      </div>

      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"/>
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"/>
      </el-table>

      <div class="" style="float: right; margin-bottom: 20px; margin-top: 20px">
        <el-button type="primary" @click="upload_file()" :loading="loading">Tải lên  <i class="el-icon-upload el-icon-right"></i></el-button>
      </div>
    </el-card>

  </section>

</template>

<script>
import { TEACHER, TEACHER_UPLOAD } from '@/constants/endpoints'
import { STATUS } from '@/constants/status_return_code'

import UploadExcelComponent from '@/components/helpers/UploadExcel'

export default {
  components: { UploadExcelComponent },
  data () {
    return {
      tableData: [],
      tableHeader: [],
      ruleForm: {
        username: '',
        password: '',
        fullname: '',
        teacher_code: '',
        email: ''
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
        ],
        teacher_code: [
          { required: true, message: 'Mã giảng viên không được để trống', trigger: 'blur' }
        ]
      },
      dataTable: [],
      loading: false,
      file_upload: null
    }
  },
  watch: {
    'ruleForm.username' (val) {
      this.ruleForm.email = val + '@vnu.edu.vn'
      if (val === '') {
        this.ruleForm.email = ''
      }
    }
  },
  methods: {
    async create_teacher () {
      if (this.loading) return
      this.loading = true

      const data = {
        'username': this.ruleForm.username,
        'password': this.ruleForm.password,
        'lecturerCode': this.ruleForm.teacher_code,
        'fullName': this.ruleForm.fullname,
        'email': this.ruleForm.email
      }
      const response = await this.$services.do_request('post', TEACHER, data)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Thêm mới giảng viên thành công')
        this.ruleForm = {
          username: '',
          password: '',
          fullname: '',
          teacher_code: '',
          email: ''
        }
      } else if (response.status === 400) {
        this.$message.error(STATUS[response.data.code])
      }
    },
    async upload_file () {
      if (this.loading) return
      this.loading = true

      const formData = new FormData()
      formData.append('file', this.file_upload)
      const response = await this.$services.do_request('post', TEACHER_UPLOAD, formData)
      this.loading = false
      console.log('response', response)

      if (response.data.message === 'Success') {
        this.$message.success('Thêm mới giảng viên thành công')
      } else if (response.status === 400) {
        this.$message.error(STATUS[response.data.code])
      }
    },
    beforeUpload (file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        this.file_upload = file
        return true
      }

      this.$message({
        message: 'Vui lòng upload tệp có dung lượng nhỏ hơn 1mb',
        type: 'warning'
      })
      return false
    },
    handleSuccess ({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    }
  }
}
</script>

<style scoped="">
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .input_handle {
    width: 300px;
  }

</style>
