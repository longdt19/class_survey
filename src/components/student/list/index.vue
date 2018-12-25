<template>
  <section>
    <el-table
      :data="dataTable"
      style="width: 100%"
      border
    >
      <el-table-column label="Mã sinh viên" align="center" header-align="center">
        <template slot-scope="scope">
          {{scope.row.studentCode}}
        </template>
      </el-table-column>

      <!-- <el-table-column label="Mật khẩu" align="center" header-align="center">
        <template slot-scope="scope">
          {{scope.row.password}}
        </template>
      </el-table-column> -->

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

      <el-table-column label="Thao tác" align="center" header-align="center">
        <template slot-scope="scope">
          <el-button size='mini' type="warning" @click="edit_student(scope.row)">Sửa</el-button>
          <el-button size='mini' type="danger" @click="delete_student(scope.row)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>

    <edit-component ref='edit_student' @edited_student="edited_student" />
    <delete-component ref='delete_student' @deleted_student="deleted_student"/>
  </section>
</template>

<script>
import { STUDENT_GET_ALL_URL } from '@/constants/endpoints'

import EditComponent from './edition'
import DeleteComponent from './deletion'

export default {
  components: { EditComponent, DeleteComponent },
  data () {
    return {
      loading: false,
      dataTable: []
    }
  },
  methods: {
    async get_student_list () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', STUDENT_GET_ALL_URL)
      this.loading = false

      if (response.status === 200) {
        this.dataTable = response.data.data
      } else {
        console.log('bad request')
      }
    },
    delete_student (student) {
      this.$refs.delete_student.open(student)
    },
    edit_student (student) {
      this.$refs.edit_student.open(student)
    },
    edited_student () {
      this.get_student_list()
    },
    deleted_student () {
      this.get_student_list()
    }
  },
  created () {
    this.get_student_list()
  }
}
</script>
