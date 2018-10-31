<template>
<section>
<div class="super_container">
  <header class="header wrapClass">
    <!-- Header Content -->
    <div class="header_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="logo_container mr-auto">
                <a href="#">
                  <div class="logo_text">Lingua</div>
                </a>
              </div>

              <div class="header_content_right ml-auto text-right">
                <div class="header_search">
                  <div class="search_form_container">
                    <form action="#" id="search_form" class="search_form trans_400">
                      <input type="search" class="header_search_input trans_400" placeholder="Type for Search" required="required">
                      <div class="search_button">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </div>
                    </form>
                  </div>
                </div>

                <!-- Hamburger -->

                <div class="user"><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></div>
                <div class="hamburger menu_mm">
                  <i class="fa fa-bars menu_mm" aria-hidden="true"></i>
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
.footer-handle {
}
</style>
