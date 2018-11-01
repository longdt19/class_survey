<template>
<div class="course" style="">
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

              <div class=" instructors_row" style="margin-left: 20px">
                <span>1. Cơ sở vật chất</span>
                <br />
                <div class="panel_text" style="padding-left: 20px;">
                  <el-row>
                    <el-col :sm="24" :md="15">
                      <span>Giảng đường đáp ứng nhu cầu môn học</span>
                    </el-col>

                    <el-col :sm="24" :md="9" style="margin-top: 5px">
                      <el-radio-group v-model="radio1" style="padding-top: 3px">
                        <el-radio v-for="i in 5" :key='i' :label="i"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :sm="24" :md="15">
                      <span>Các trang thiết bị giảng đường đáp ứng nhu cầu giảng dạy và học tập</span>
                    </el-col>

                    <el-col :sm="24" :md="9" style="margin-top: 5px">
                      <el-radio-group v-model="radio2">
                        <el-radio v-for="i in 5" :key='i' :label="i"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :sm="24" :md="15">
                      <span>Các trang thiết bị giảng đường đáp ứng nhu cầu giảng dạy và học tập</span>
                    </el-col>

                    <el-col :sm="24" :md="9" style="margin-top: 5px">
                      <el-radio-group v-model="radio2">
                        <el-radio v-for="i in 5" :key='i' :label="i"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-row>
                </div>
              </div>

              <div class=" instructors_row" style="margin-left: 20px">
                <span>2. Môn học</span>
                <br />
                <div class="panel_text" style="padding-left: 20px;">
                  <el-row>
                    <el-col :sm="24" :md="15">
                      <span>Bạn được hỗ trợ kịp thời trong quá trình học môn này</span>
                    </el-col>

                    <el-col :sm="24" :md="9" style="margin-top: 5px">
                      <el-radio-group v-model="radio1" style="padding-top: 3px">
                        <el-radio v-for="i in 5" :key='i' :label="i"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :sm="24" :md="15">
                      <span>Mục tiêu của môn học nêu rõ kiến thức và kỹ năng người học cần đạt được</span>
                    </el-col>

                    <el-col :sm="24" :md="9" style="margin-top: 5px">
                      <el-radio-group v-model="radio2">
                        <el-radio v-for="i in 5" :key='i' :label="i"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>

            <!-- FAQs -->
            <div class="faqs">
              <div class="panel_title">Ý kiến phản hồi</div>
              <div class="accordions">

                <div class="elements_accordions">
                  <el-input type="textarea" :rows="2" placeholder="Ý kiến phản hồi" v-model="textarea">
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
          <div class="sidebar_background" style="margin-top: 81.5px"></div>
          <div class="sidebar_content" style="padding-top: 20px">
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
      textarea: '',
      radio1: '',
      radio2: '',
      radio3: '',
      radio4: ''
    }
  },
  watch: {
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
