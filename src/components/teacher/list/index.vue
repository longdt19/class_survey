<template>
  <section>
    <el-table
      :data="dataTable"
      style="width: 100%"
      border
    >
      <el-table-column label="Tên đăng nhập" align="center" header-align="center">
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

      <el-table-column label="Thao tác" align="center" header-align="center">
        <template slot-scope="scope">
          <el-button size='mini' type="warning" @click="edit_teacher(scope.row)">Sửa</el-button>
          <el-button size='mini' type="danger" @click="delete_teacher(scope.row)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>

    <edit-component ref='edit_teacher' @edited_teacher="edited_teacher" />
    <delete-component ref='delete_teacher' />
  </section>
</template>

<script>
import EditComponent from './edition'
import DeleteComponent from './deletion'

export default {
  components: { EditComponent, DeleteComponent },
  data () {
    return {
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
  methods: {
    delete_teacher () {
      this.$refs.delete_teacher.open()
    },
    edit_teacher (teacher) {
      console.log('teacher', teacher)
      this.$refs.edit_teacher.open(teacher)
    },
    edited_teacher (teacher) {
      console.log(teacher)
    }
  }
}
</script>
