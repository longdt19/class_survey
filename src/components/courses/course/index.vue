<template>
<div class="course">
  <div class="course_top"></div>
  <div class="container">
    <div class="row row-lg-eq-height">
      <!-- Panels -->
      <div class="col-lg-9">
        <div class="tab_panels">
          <!-- Tabs -->
          <div class="course_tabs_container" style="margin-bottom: 50px">
            <div class="container">
              <div class="row">
                <div class="col-lg-9">
                  <div class="tabs d-flex flex-row align-items-center justify-content-start">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Description -->
          <div class="tab_panel description active">
            <div class="panel_title">Thông tin lớp</div>
            <div class="panel_text">
              <span>Giảng viên: Lê Đình Thanh</span> <br />
              <span>Mã lớp môn học: INT111 11</span> <br />
              <span>Phòng học: 301 G2</span> <br />
              <span>Tiết: 2-5</span> <br />

            </div>
            <!-- Instructors -->
            <div class="instructors">
              <div class="panel_title">Phiếu đánh giá</div>
              <div class="row instructors_row">

              </div>
            </div>
            <!-- FAQs -->
            <div class="faqs">
              <div class="panel_title">Ý kiến phản hồi</div>
              <div class="accordions">

                <div class="elements_accordions">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="Ý kiến phản hồi"
                    v-model="textarea">
                  </el-input>

                </div>
                <div class="" style="margin-top: 50px; float: right">
                  <el-button class="accept-btn-cls">
                    <span style="font-size: 15px">Xác nhận</span>
                  </el-button>
                </div>

              </div>
            </div>
          </div>
          <!-- Members -->
          <div class="tab_panel members">
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-lg-3">
        <div class="sidebar">
          <div class="sidebar_background"></div>
          <div class="sidebar_content">
            <!-- You may like -->
            <div class="sidebar_section like" style="width: 290px; margin-top: 80px">
              <div class="" style="margin-top: 50px">
                <div class="sidebar_title">Lớp môn học khác</div>
                <div class="like_items">
                  <!-- Like Item -->
                  <div class="like_item d-flex flex-row align-items-end justify-content-start" style="margin-bottom: 50px">
                    <div class="like_title_container">
                      <div class="like_title">Nguyên lý hệ điều hành</div>
                      <div class="like_subtitle">INT1001 5</div>
                    </div>
                    <div class="like_price ml-auto">Đánh giá</div>
                  </div>

                  <div class="like_item d-flex flex-row align-items-end justify-content-start">
                    <div class="like_title_container">
                      <div class="like_title">Nguyên lý hệ điều hành</div>
                      <div class="like_subtitle">INT1001 5</div>
                    </div>
                    <div class="like_price ml-auto">Đánh giá</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      textarea: ''
    }
  }
}
</script>

<style scoped="">
@import "../../../../static/courses/styles/bootstrap4/bootstrap.min.css";
@import "../../../../static/courses/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../../static/courses/styles/course.css";
@import "../../../../static/courses/styles/course_responsive.css";

.accept-btn-cls {
  width: 120px;
  height: 50px;
  border-radius: 5px;
}
.el-textarea__inner {
  height: 200px
}
</style>
