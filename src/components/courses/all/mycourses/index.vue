<template>
  <div class="courses" style="min-height: 500px">
    <div class="container" v-loading="loading">
      <div class="row">
        <div class="col">
          <h2 class="section_title text-center">Danh sách môn học</h2>
        </div>
      </div>

      <div class="row courses_row" v-if="teacher_class_list">
        <div class="col-lg-4 course_col"
          v-for="(cls, index) in teacher_class_list" v-bind:key="index"
        >
          <div class="course">
            <div class="course_body">
              <div class="course_title"><a href="course.html">{{ cls.subject.name }}</a></div>
              <div class="course_info">
                <ul>
                  <li>{{ cls.name }}</li>
                  <li><a href="#">Lê Đình Thanh</a></li>
                </ul>
              </div>
              <div class="course_text">
                <p>Thứ, tiết: {{ cls.schedule }}</p>
                <p>Địa điểm: {{ cls.classroom}}</p>
              </div>
            </div>
            <div class="course_footer d-flex flex-row align-items-center justify-content-start">
              <div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span></span></div>
              <div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span></span></div>
              <div v-if="cls.isStartSurvey === 1" class="course_mark trans_200"><a :href=" '/mon-hoc/' + cls.id ">Xem</a></div>
            </div>
          </div>
        </div>

      </div>

      <div class="row courses_row" v-if="student_class_list">
        <div class="col-lg-4 course_col"
          v-for="(cls, index) in student_class_list" v-bind:key="index"
        >
          <div class="course">
            <div class="course_body">
              <div class="course_title"><a href="course.html">{{ cls.classSubject.subject.name }}</a></div>
              <div class="course_info">
                <ul>
                  <li>{{ cls.classSubject.name }}</li>
                  <li><a href="#">{{ cls.classSubject.lecturer.fullname }}</a></li>
                </ul>
              </div>
              <div class="course_text">
                <p>Thứ, tiết: {{ cls.classSubject.schedule }}</p>
                <p>Địa điểm: {{ cls.classSubject.classroom}}</p>
              </div>
            </div>
            <div class="course_footer d-flex flex-row align-items-center justify-content-start">
              <div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span></span></div>
              <div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span></span></div>
              <div v-if="cls.survey" class="course_mark trans_200"><a :href=" '/mon-hoc/' + cls.survey.id ">Đánh giá</a></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { STUDENT_CLASS_LIST, TEACHER_CLASS_LIST } from '@/constants/endpoints'

export default {
  data () {
    return {
      loading: '',
      student_class_list: [],
      teacher_class_list: []
    }
  },
  methods: {
    async get_list_student_class () {
      if (this.loading) return
      this.loading = true

      const response = await this.$services.do_request('get', STUDENT_CLASS_LIST)
      this.loading = false

      if (response.data.message === 'Success') {
        this.student_class_list = response.data.data.content
      } else {
        console.log('error')
      }
    },
    async get_list_teacher_class () {
      if (this.loading) return
      this.loading = true

      const response = await this.$services.do_request('get', TEACHER_CLASS_LIST)
      this.loading = false

      if (response.data.message === 'Success') {
        this.teacher_class_list = response.data.data.content
      } else {
        console.log('error')
      }
    }
  },
  mounted () {
    let elm_height = document.getElementById('courses_row').offsetHeight + 'px'
    this.$store.commit('Common/slide_bar_height', elm_height)
  },
  created () {
    console.log('created')
    if (this.common_data.role === 'ROLE_STUDENT') {
      this.get_list_student_class()
    } else if (this.common_data.role === 'ROLE_LECTURER' || this.common_data.role === 'ROLE_ADMIN') {
      this.get_list_teacher_class()
    } else {
      this.$router.push('/dang-nhap')
    }
  }
}
</script>

<style lang="css" scoped="">
@import "../../../../../static/courses/styles/bootstrap4/bootstrap.min.css";
@import "../../../../../static/courses/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../../../static/courses/styles/courses.css";
@import "../../../../../static/courses/styles/courses_responsive.css";
@import "../../../../../static/courses/styles/main_styles.css";

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
