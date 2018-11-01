<template>
<section>
  <div class="super_container app-wrapper">
    <header class="header wrapClass">
      <!-- Header Content -->
      <div class="header_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="header_content d-flex flex-row align-items-center justify-content-start">
                <div class="logo_container mr-auto">
                  <a href="/">
                    <div class="logo_text">UET</div>
                  </a>
                </div>
                <div class="" style="display: flex">
                  <div class="top_bar_lang" style="align-items: center; display: flex">
                    <span class="top_bar_title">14020259@vnu.edu.vn</span>
                  </div>
                  <div class="header_content_right ml-auto text-right" >

                    <!-- Hamburger -->
                    <el-dropdown trigger="click" style="margin-right: 20px">
                      <el-button size="small" class="user">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                          <el-button type="text">Đổi mật khẩu</el-button>

                        </el-dropdown-item>
                        <el-dropdown-item>
                          <el-button type="text">Đăng xuất</el-button>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </header>

    <router-view />

    <footer class="footer footer-handle">
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="copyright_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
                <span>Trường Đại học Công nghệ, Đại học Quốc Gia Hà Nội</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</section>
</template>

<script>
export default {}
</script>

<style scoped>
@import "../../../static/courses/styles/bootstrap4/bootstrap.min.css";
@import "../../../static/courses/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../static/courses/styles/course.css";
@import "../../../static/courses/styles/course_responsive.css";
@import "../../../static/courses/styles/courses.css";
@import "../../../static/courses/styles/courses_responsive.css";
@import "../../../static/courses/styles/main_styles.css";
</style>
