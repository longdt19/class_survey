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

            </el-col>

          </el-row>
        </el-form>
        <div class="" style="text-align: right">
          <el-button type="primary">Thêm mới</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>Tải lên tài khoản sinh viên</span>
        <!-- <el-button style="float: right" type="button">Chọn tệp tải lên   <i class="el-icon-upload el-icon-right"></i></el-button> -->
      </div>

      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"/>
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"/>
      </el-table>

      <div class="" style="float: right; margin-bottom: 20px; margin-top: 20px">
        <el-button type="primary">Thêm mới  <i class="el-icon-upload el-icon-right"></i></el-button>
      </div>
    </el-card>

  </section>

</template>

<script>
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
        ]
      },
      dataTable: [
        {
          username: 14020259,
          password: 123465,
          fullname: 'Đặng Tùng Long',
          email: '14020259@vnu.edu.vn'
        },
        {
          username: 14020259,
          password: 123465,
          fullname: 'Đặng Tùng Long',
          email: '14020259@vnu.edu.vn'
        },
        {
          username: 14020259,
          password: 123465,
          fullname: 'Đặng Tùng Long',
          email: '14020259@vnu.edu.vn'
        }
      ]
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
    beforeUpload (file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
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
