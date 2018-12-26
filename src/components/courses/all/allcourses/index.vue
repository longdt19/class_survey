<template lang="html">
  <div class="courses" id="courses_row">
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

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
