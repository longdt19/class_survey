<template>
<section>
  <!-- <div class="" style="float: right; margin-bottom: 20px">
    <el-button>Thêm khảo sát môn học</el-button>
  </div> -->
  <el-card class="box-card" style="margin-top: 20px">
    <div slot="header" class="clearfix">
      <span>Tải lên lớp môn học</span>
      <!-- <el-button style="float: right" type="button">Chọn tệp tải lên   <i class="el-icon-upload el-icon-right"></i></el-button> -->
    </div>
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"/>
    <!-- <el-table :data="tableStudentData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"/>
    </el-table> -->

    <div class="" style="text-align: center">
      <span>{{file_upload.name}}</span>
    </div>

    <div class="" style="float: right; margin-bottom: 20px; margin-top: 20px">
      <el-button type="primary" @click="upload_file()" :loading="loading">Tải lên  <i class="el-icon-upload el-icon-right"></i></el-button>
    </div>
  </el-card>
  <el-table
      :data="tableData"
      style="width: 100%; margin-top: 20px"
      border
  >
    <el-table-column  type="index"  label="STT" width="50" align="center" header-align="center">
    </el-table-column>

    <el-table-column label="Tên môn học" align="center" header-align="center">
      <template slot-scope="scope">
        <span>{{scope.row.subject.name}}</span>
      </template>
    </el-table-column>

    <el-table-column label="Mã lớp môn học" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.subject.code}}
      </template>
    </el-table-column>

    <el-table-column label="Giảng viên" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.lecturer.fullname}}
      </template>
    </el-table-column>

    <el-table-column label="Giảng đường" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.classroom}}
      </template>
    </el-table-column>

    <el-table-column label="Thao tác" align="center" header-align="center">
      <template slot-scope="scope">
        <!-- <el-button circle icon="el-icon-edit" type="warning" @click="edit_class(scope.row)"></el-button> -->
        <el-button circle icon="el-icon-search"></el-button>
        <el-button circle icon="el-icon-delete" type="danger" @click="delete_class(scope.row)"></el-button>
      </template>
    </el-table-column>
  </el-table>

  <edit-component ref='edit_class' @edited_class="edited_class" />
  <delete-component ref='delete_class' @deleted_class="deleted_class"/>
</section>
</template>

<script>
import { CLASS_UPLOAD, CLASS } from '@/constants/endpoints'
// import { STATUS } from '@/constants/status_return_code'

import UploadExcelComponent from '@/components/helpers/UploadSurveyExcel'

import EditComponent from './edition'
import DeleteComponent from './deletion'

export default {
  components: { UploadExcelComponent, EditComponent, DeleteComponent },
  data () {
    return {
      tableStudentData: [],
      tableHeader: [],
      tableData: [],
      file_upload: '',
      loading: false
    }
  },
  methods: {
    async get_list () {
      if (this.loading) return
      this.loading = true

      const data = {
        'search': {},
        'page': 0,
        'size': 20
      }
      const response = await this.$services.do_request('get', CLASS, data)
      this.loading = false
      console.log('response', response)
      if (response.status === 200) {
        this.tableData = response.data.data.content
      } else {
        console.log('bad request')
      }
    },
    async upload_file () {
      if (this.loading) return
      this.loading = true

      const formData = new FormData()
      formData.append('file', this.file_upload)
      const response = await this.$services.do_request('post', CLASS_UPLOAD, formData)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Thêm mới lớp môn học thành công')
        this.get_list()
      } else if (response.status === 400) {
        // this.$message.error(STATUS[response.data.code])
        this.$message.error('Tải lên thất bại')
      }
    },
    delete_class (_class) {
      this.$refs.delete_class.open(_class)
    },
    edit_class (class_survey) {
      this.$refs.edit_class.open(class_survey)
    },
    edited_class (class_edited) {
    },
    deleted_class () {
      this.get_list()
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
      // this.tableStudentData = results
      // this.tableHeader = header
    }
  },
  created () {
    this.get_list()
  }
}
</script>

<style lang="css">
</style>
