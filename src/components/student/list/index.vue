<template>
  <section>
    <el-row :butter="10">
      <el-col :xs="24" :md="3"><div class="grid-content bg-purple">
        <div class="group">
          <span>Tìm kiếm:</span>
        </div>
      </div></el-col>

      <el-col :xs="24" :sm="6" :md="6"><div class="grid-content bg-purple">
        <div class="group" element-loading-spinner="el-icon-loading">
          <el-input  placeholder="Tìm kiếm theo mã sinh viên" clearable v-model="student_code"/>
        </div>
      </div></el-col>

      <el-col :xs="24" :sm="2" :md="3"><div class="grid-content bg-purple" style="">
        <div class="group" style="margin-left: 50px">
          <el-button slot="append" icon="el-icon-search" @click="search_student()"></el-button>
        </div>
      </div></el-col>
    </el-row>

    <div class="" style="text-align: right">
      <el-row>
        <span>Hiển thị: </span>
        <el-select v-model="pagination.per_page" style="width: 80px">
          <el-option
            v-for="item in pagination.list"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-row>
    </div>
    <el-table
      :data="dataTable"
      style="width: 100%"
      border
      v-loading="loading"
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

    <div class="block" style="margin-top: 30px; text-align: right" align="center">
    <el-pagination
      layout="prev, pager, next"
      :page-count="pagination.totalPage"
      :current-page.sync="pagination.page"
      @current-change="change_page"
      @prev-click="prev_page"
      @next-click="next_page"
    >
    </el-pagination>
  </div>

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
      dataTable: [],
      pagination: {
        totalPage: null,
        totalElement: null,
        page: 1,
        per_page: 10,
        list: [10, 20, 30]
      },
      student_code: '',
      search: {}
    }
  },
  watch: {
    'pagination.per_page' (val) {
      this.get_student_list()
    },
    'pagination.page' (val) {
      this.get_student_list()
    },
    'student_code' (val) {
      if (val === '') {
        this.search = {}
        this.get_student_list()
      }
    }
  },
  methods: {
    search_student () {
      this.search = {
        'studentCode': this.student_code
      }
      this.get_student_list()
    },
    async get_student_list () {
      if (this.loading) return
      this.loading = true

      const data = {
        search: this.search,
        size: this.pagination.per_page,
        page: this.pagination.page - 1
      }

      const response = await this.$services.do_request('get', STUDENT_GET_ALL_URL, data)
      console.log('response', response)
      this.loading = false

      if (response.status === 200) {
        this.dataTable = response.data.data.content
        this.pagination.totalElement = response.data.data.totalElements
        this.pagination.totalPage = response.data.data.totalPages
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
    },
    prev_page () {
      if (this.pagination.page === 1) return
      this.pagination.page = this.pagination.page - 1
    },
    next_page () {
      if (this.pagination.page === this.total_page) return
      this.pagination.page = this.pagination.page + 1
    },
    change_page (val) {
      this.pagination.page = val
    }
  },
  created () {
    this.get_student_list()
  }
}
</script>
