<template>
  <section>
    <el-table
      :data="dataTable"
      style="width: 100%"
      border
    >
      <el-table-column label="Tên đăng nhập" align="center" header-align="center">
        <template slot-scope="scope">
          {{scope.row.user.username}}
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

      <el-table-column label="Mã giảng viên" align="center" header-align="center">
        <template slot-scope="scope">
          {{scope.row.lecturerCode}}
        </template>
      </el-table-column>

      <el-table-column label="Thao tác" align="center" header-align="center">
        <template slot-scope="scope">
          <el-button size='mini' type="warning" @click="edit_teacher(scope.row)">Sửa</el-button>
          <el-button size='mini' type="danger" @click="delete_teacher(scope.row)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>

    <edit-component ref='edit_teacher' @edited_teacher="edited_teacher" />
    <delete-component ref='delete_teacher' @deleted_teacher="deleted_teacher"/>
  </section>
</template>

<script>
import { TEACHER_LIST } from '@/constants/endpoints'

import EditComponent from './edition'
import DeleteComponent from './deletion'

export default {
  components: { EditComponent, DeleteComponent },
  data () {
    return {
      dataTable: []
    }
  },
  methods: {
    async get_list () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', TEACHER_LIST)
      this.loading = false

      if (response.status === 200) {
        this.dataTable = response.data.data
      } else {
        console.log('bad request')
      }
    },
    delete_teacher (teacher) {
      this.$refs.delete_teacher.open(teacher)
    },
    edit_teacher (teacher) {
      this.$refs.edit_teacher.open(teacher)
    },
    edited_teacher () {
      this.get_list()
    },
    deleted_teacher () {
      this.get_list()
    }
  },
  created () {
    this.get_list()
  }
}
</script>
