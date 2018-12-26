<template>
<section>
  <div class="home" style="height: 420px">
    <div class="home_background" style="background-image: url(/static/courses/images/vnu-bg.jpg);"></div>
    <div class="home_content">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 class="home_title" style="font-color: white"></h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-row :gutter="20">
    <el-col :span="5">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        :style="`height: ` + common_data.slide_bar_height"
        id="myMenu"
      >
        <el-menu-item index="my-courses" @click="go_to('cac-mon-hoc-cua-toi')">
          <i class="el-icon-menu"></i>
          <span>Danh sách lớp học của tôi</span>
        </el-menu-item>

        <el-menu-item index="info-user" @click="go_to('thong-tin-tai-khoan')">
          <i class="el-icon-setting"></i>
          <span>Thông tin tài khoản</span>
        </el-menu-item>
      </el-menu>

    </el-col>

    <el-col :span="19" id="courses_row">
      <router-view />
    </el-col>
  </el-row>

</section>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: ''
    }
  },
  methods: {
    go_to (path) {
      this.$router.push('/' + path)
    }
  },
  mounted () {
    let elm = document.getElementById('courses_row').offsetHeight
    document.getElementById('myMenu').style.height = elm + 'px'
  },
  created () {
    this.defaultActive = this.$route.name
  }
}
</script>

<style scoped>
@import "../../../../static/courses/styles/bootstrap4/bootstrap.min.css";
@import "../../../../static/courses/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../../static/courses/styles/courses.css";
@import "../../../../static/courses/styles/courses_responsive.css";
@import "../../../../static/courses/styles/main_styles.css";

.home-bg-handle {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(54, 84, 99, 0.7);
}
</style>
