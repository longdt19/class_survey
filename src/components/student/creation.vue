<template lang="">
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Thêm mới tài khoản sinh viên</span>
      </div>
      <div class="">
        <el-form :model="ruleForm" :rules="rules" label-width="120px" ref="ruleForm">

          <el-row>
            <el-col :sm="24" :md="12">
              <el-form-item label="Mã sinh viên" prop="username" style="margin-top: 20px">
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

              <el-form-item label="Khóa học" prop="course" style="margin-top: 20px">
                <el-input v-model="ruleForm.course" class="input_handle"></el-input>
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
        <el-button style="float: right" type="button">Chọn tệp tải lên   <i class="el-icon-upload el-icon-right"></i></el-button>
      </div>
        <el-table
          :data="dataTable"
          style="width: 70%"
          border
        >
          <el-table-column label="Mã sinh viên" align="center" header-align="center">
            <template slot-scope="scope">
              {{scope.row.username}}
            </template>
          </el-table-column>

          <el-table-column label="Mật khẩu" align="center" header-align="center">
            <template slot-scope="scope">
              {{scope.row.password}}
            </template>
          </el-table-column>

          <el-table-column label="Họ và tên" align="center" header-align="center">
            <template slot-scope="scope">
              {{scope.row.fullname}}
            </template>
          </el-table-column>

          <el-table-column label="VNU email" align="center" header-align="center">
            <template slot-scope="scope">
              {{scope.row.email}}
            </template>
          </el-table-column>

          <el-table-column label="Khóa đào tạo" align="center" header-align="center">
            <template slot-scope="scope">
              {{scope.row.course}}
            </template>
          </el-table-column>
        </el-table>

        <div class="" style="float: right; margin-bottom: 20px">
          <el-button type="primary">Thêm mới  <i class="el-icon-upload el-icon-right"></i></el-button>
        </div>
    </el-card>

  </section>

</template>

<script>
export default {
  data () {
    return {
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
      dataTable: [
        {
          username: 14020259,
          password: 123465,
          fullname: 'Đặng Tùng Long',
          email: '14020259@vnu.edu.vn',
          course: 'QHI-2014'
        },
        {
          username: 14020259,
          password: 123465,
          fullname: 'Đặng Tùng Long',
          email: '14020259@vnu.edu.vn',
          course: 'QHI-2014'
        },
        {
          username: 14020259,
          password: 123465,
          fullname: 'Đặng Tùng Long',
          email: '14020259@vnu.edu.vn',
          course: 'QHI-2014'
        }
      ]
    }
  },
  watch: {
    'ruleForm.username' (val) {
      this.ruleForm.email = val + '@vnu.edu.vn'
    }
  },
  methods: {
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
