<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      :show-timeout="200"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      class="el-menu-vertical-demo"
      mode="vertical"
    >
      <el-submenu index="Survey">
        <template slot="title">
          <span>Quản lý khảo sát</span>
        </template>

        <el-menu-item index="all-surveys" @click.native="go_to('quan-tri/danh-sach-cac-cuoc-khao-sat')">
          <span>Danh sách khảo sát</span>
        </el-menu-item>

        <el-menu-item index="surveys-creation" @click.native="go_to('quan-tri/quan-ly-phieu-khao-sat')">
          <span>Phiếu khảo sát</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="Student">

        <template slot="title">
          <span>Quản lý sinh viên</span>
        </template>
        <el-menu-item index="student-list" @click.native="go_to('quan-tri/danh-sach-sinh-vien')">
          <span>Danh sách sinh viên</span>
        </el-menu-item>

        <el-menu-item index="student-creation" @click.native="go_to('quan-tri/tao-moi-tai-khoan-sinh-vien')">
          <span>Tạo mới</span>
        </el-menu-item>

      </el-submenu>

      <el-submenu index="Teacher">
        <template slot="title">
          <span>Quản lý giảng viên</span>
        </template>

        <el-menu-item index="teacher-list" @click.native="go_to('quan-tri/danh-sach-giang-vien')">
          <span>Danh sách giảng viên</span>
        </el-menu-item>

        <el-menu-item index="teacher-creation" @click.native="go_to('quan-tri/tao-moi-tai-khoan-giang-vien')">
          <span>Tạo mới</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: { },
  data () {
    return {
      defaultActive: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
    go_to (path) {
      this.$router.push('/' + path)
    }
  },
  created () {
    console.log('this.$route.name', this.$route.name)
    this.defaultActive = this.$route.name
  }
}
</script>
<style media="screen">
  #app .hideSidebar .el-submenu > .el-submenu__title {
    text-align: right;
  }
</style>
<style scoped="">
</style>
