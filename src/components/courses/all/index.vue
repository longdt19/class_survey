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
  <div class="courses">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="section_title text-center">Danh sách môn học</h2>
        </div>
      </div>
      <div class="row courses_row">

        <!-- Course -->
        <div class="col-lg-4 course_col">
          <div class="course">
            <!-- <div class="course_image"><img src="images/course_12.jpg" alt=""></div> -->
            <div class="course_body">
              <div class="course_title"><a href="course.html">Phát triển ứng dụng web</a></div>
              <div class="course_info">
                <ul>
                  <li>INT4444 1</li>
                  <li><a href="#">Lê Đình Thanh</a></li>
                </ul>
              </div>
              <div class="course_text">
                <p>Thứ 2, tiết 3-5</p>
                <p>Địa điểm: 201-G2</p>
              </div>
            </div>
            <div class="course_footer d-flex flex-row align-items-center justify-content-start">
              <div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>40</span></div>
              <div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>35</span></div>
              <div class="course_mark trans_200"><a href="/mon-hoc">Đánh giá</a></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 course_col">
          <div class="course">
            <!-- <div class="course_image"><img src="images/course_12.jpg" alt=""></div> -->
            <div class="course_body">
              <div class="course_title"><a href="course.html">Phát triển ứng dụng web</a></div>
              <div class="course_info">
                <ul>
                  <li>INT4444 1</li>
                  <li><a href="#">Lê Đình Thanh</a></li>
                </ul>
              </div>
              <div class="course_text">
                <p>Thứ 2, tiết 3-5</p>
                <p>Địa điểm: 201-G2</p>
              </div>
            </div>
            <div class="course_footer d-flex flex-row align-items-center justify-content-start">
              <div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>40</span></div>
              <div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>35</span></div>
              <div class="course_mark trans_200"><a href="/mon-hoc">Đánh giá</a></div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 course_col">
          <div class="course">
            <!-- <div class="course_image"><img src="images/course_12.jpg" alt=""></div> -->
            <div class="course_body">
              <div class="course_title"><a href="course.html">Phát triển ứng dụng web</a></div>
              <div class="course_info">
                <ul>
                  <li>INT4444 1</li>
                  <li><a href="#">Lê Đình Thanh</a></li>
                </ul>
              </div>
              <div class="course_text">
                <p>Thứ 2, tiết 3-5</p>
                <p>Địa điểm: 201-G2</p>
              </div>
            </div>
            <div class="course_footer d-flex flex-row align-items-center justify-content-start">
              <div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>40</span></div>
              <div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>35</span></div>
              <div class="course_mark trans_200"><a href="/mon-hoc">Đánh giá</a></div>
            </div>
          </div>
        </div>

      </div>

      <!-- <div class="row">
        <div class="col">
          <div class="load_more_button"><a href="#">load more</a></div>
        </div>
      </div> -->
    </div>
  </div>
</section>
</template>

<script>
export default {}
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
