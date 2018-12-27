<template>
<div class="course" style="">
  <div class="container" v-loading="loading_survey">
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

          <div class="tab_panel description active" v-if="common_data.role === 'ROLE_LECTURER'">

            <el-row>
              <el-col :span="12">
                <div class="panel_title">Thông tin lớp</div>
                <div class="panel_text">
                  <span>Môn học: {{ teacher.subject_name }}</span> <br />
                  <span>Mã lớp môn học: {{ teacher.subject.name }}</span> <br />
                  <span>Phòng học: {{ teacher.subject.classroom }}</span> <br />
                  <span>Thứ, Tiết: {{ teacher.subject.schedule }}</span> <br />
                </div>
              </el-col>
              <el-col :span="12">
                <div class="panel_title">Thông tin đánh giá</div>
                <div class="panel_text">
                  <!-- <span>Giảng viên: {{ teacher.subject.lecturer['email'] }}</span> <br /> -->
                  <span>Số học sinh đánh giá lớp môn học: {{ rate.student_in_class_subject.rate }} / {{ rate.student_in_class_subject.total }}</span> <br />
                  <span>Số học sinh đánh giá môn học: {{ rate.student_in_subject.rate }} / {{ rate.student_in_subject.total }}</span> <br />
                  <span>Số học sinh đánh giá giảng viên: {{ rate.student_in_lecturer.rate }} / {{ rate.student_in_lecturer.total }}</span> <br />
                </div>
              </el-col>
            </el-row>

            <!-- Instructors -->
            <div class="instructors">

              <div class="panel_title">Phiếu đánh giá</div>

              <div class=" instructors_row" style="margin-left: 20px"  >
                <el-table
                    :data="teacher.dataTable"
                    style="width: 100%; margin-top: 20px"
                    border
                >
                  <el-table-column  type="index"  label="STT" width="50" align="center" header-align="center">
                  </el-table-column>

                  <el-table-column label="Tiêu chí" header-align="center">
                    <template slot-scope="scope">
                      {{ scope.row.target }}
                    </template>
                  </el-table-column>

                  <el-table-column label="M" align="center" header-align="center" width="50px">
                    <template slot-scope="scope">
                      {{ scope.row.strM }}
                    </template>
                  </el-table-column>

                  <el-table-column label="STD" align="center" header-align="center" width="50px">
                    <template slot-scope="scope">
                      {{ scope.row.strSTD }}
                    </template>
                  </el-table-column>

                  <el-table-column label="M1" align="center" header-align="center" width="50px">
                    <template slot-scope="scope">
                      {{ scope.row.strM1 }}
                    </template>
                  </el-table-column>

                  <el-table-column label="STD1" align="center" header-align="center" width="60px">
                    <template slot-scope="scope">
                      {{ scope.row.strSTD1 }}
                    </template>
                  </el-table-column>

                  <el-table-column label="M2" align="center" header-align="center" width="50px">
                    <template slot-scope="scope">
                      {{ scope.row.strM2 }}
                    </template>
                  </el-table-column>

                  <el-table-column label="STD2" align="center" header-align="center" width="60px">
                    <template slot-scope="scope">
                      {{ scope.row.strSTD2 }}
                    </template>
                  </el-table-column>

                </el-table>
              </div>
            </div>

            <div class="faqs">
              <div class="">Ghi chú</div>
              <div class="accordions" style="margin-left: 50px">

                <span>M: giá trị trung bình của các tiêu chú theo lớp học phần</span>
                <br />
                <span>STD: độ lệch chuẩn của các tiêu chí theo lớp học phần</span>
                <br />
                <span>M1: giá trị trung bình các tiêu chí dựa trên dữ liệu phản hồi của sinh viên cho các giảng viên dạy cùng môn</span>
                <br />
                <span>STD1: giá trị trung bình của các tiêu chí dựa trên ý kiến phản hồi của sinh viên cho các giảng viên dạy dùng môn</span>
                <br />
                <span>M2: giá trị trung bình của các tiêu chí dựa trên ý kiến phản hồi của sinh viên về các môn học mà thầy cô dạy</span>
                <br />
                <span>STD2: độ lệch chuẩn của các tiêu chí dựa trên ý kiến phản hồi của sinh viên về các môn học thầy cô dạy</span>

              </div>
            </div>

            <!-- FAQs -->
            <div class="faqs">
              <div class="panel_title">Ý kiến phản hồi</div>
              <div class="accordions"  style="margin-left: 50px">

                <div class="" v-for="(comment, index) in teacher.comments" v-bind:key="index">
                  <span>- {{ comment }}</span>
                </div>

              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="tab_panel description active" v-if="common_data.role === 'ROLE_STUDENT'">
            <div class="panel_title">Thông tin lớp</div>
            <div class="panel_text">
              <span>Giảng viên: Lê Đình Thanh</span> <br />
              <span>Mã lớp môn học: {{ class_info.name }}</span> <br />
              <span>Phòng học: {{ class_info.classroom }}</span> <br />
              <span>Thứ, Tiết: {{ class_info.schedule }}</span> <br />
            </div>

            <!-- Instructors -->
            <div class="instructors">
              <div class="panel_title">Phiếu đánh giá</div>

              <div class=" instructors_row" style="margin-left: 20px"
                v-for="(item_line, index_item) in item_lines" v-bind:key="index_item"
              >
                <span>{{ index_item + 1}}. {{ item_line.name }}</span>
                <br />
                <div class="panel_text" style="padding-left: 20px;">
                  <el-row v-for="(line, index_line) in item_line.lines" v-bind:key="index_line">
                    <el-col :sm="24" :md="15">
                      <span>{{ line.name }}</span>
                    </el-col>

                    <el-col :sm="24" :md="9" style="margin-top: 5px">
                      <el-radio-group v-model="line.value" style="padding-top: 3px">
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
                  <el-input type="textarea" :rows="2" placeholder="Ý kiến phản hồi" v-model="comment">
                  </el-input>

                </div>
                <div class="" style="margin-top: 50px; float: right">
                  <el-button class="accept-btn-cls" :loading="loading_update" @click.native="update_survey()">
                    <span style="font-size: 15px" >Xác nhận</span>
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
                  <div class="like_item d-flex flex-row align-items-end justify-content-start" style="">
                    <div class="like_title_container">
                      <div class="like_title">Nguyên lý hệ điều hành</div>
                      <div class="like_subtitle">INT1001 5</div>
                    </div>
                    <div class="like_price ml-auto">Đánh giá</div>
                  </div>

                  <div class="like_item d-flex flex-row align-items-end justify-content-start">
                    <div class="like_title_container">
                      <div class="like_title">Tư tưởng Hồ Chí Minh</div>
                      <div class="like_subtitle">INT3001 5</div>
                    </div>
                    <div class="like_price ml-auto">Đánh giá</div>
                  </div>

                  <div class="like_item d-flex flex-row align-items-end justify-content-start">
                    <div class="like_title_container">
                      <div class="like_title">Đại số</div>
                      <div class="like_subtitle">INT3005 5</div>
                    </div>
                    <div class="like_price ml-auto">Đánh giá</div>
                  </div>

                  <div class="like_item d-flex flex-row align-items-end justify-content-start">
                    <div class="like_title_container">
                      <div class="like_title">Giải tích 2</div>
                      <div class="like_subtitle">INT3007 3</div>
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
import { SURVEY_CLASS, TEACHER_SURVEY } from '@/constants/endpoints'

export default {
  data () {
    return {
      textarea: '',
      radio1: '',
      radio2: '',
      radio3: '',
      radio4: '',
      survey_id: '',
      class_info: {},
      comment: '',
      item_lines: [],
      teacher: {
        subject: {},
        dataTable: [],
        comments: [],
        subject_name: ''
      },
      rate: {
        student_in_class_subject: {
          total: null,
          rate: null
        },
        student_in_subject: {
          total: null,
          rate: null
        },
        student_in_lecturer: {
          total: null,
          rate: null
        }
      },
      loading_survey: false,
      loading_update: false,
      loading_teacher: false
    }
  },
  methods: {
    async get_survey_teacher () {
      if (this.loading_teacher) return
      this.loading_teacher = true
      const url = TEACHER_SURVEY + `/${this.survey_id}`

      const response = await this.$services.do_request('get', url)
      this.loading_teacher = false

      if (response.data.message === 'Success') {
        this.teacher.subject = response.data.data.classSubject
        this.teacher.comments = response.data.data.comments
        this.teacher.dataTable = response.data.data.rateFields
        this.teacher.subject_name = response.data.data.classSubject.subject.name
        this.rate = {
          student_in_class_subject: {
            total: response.data.data.totalStudentInClassSubject,
            rate: response.data.data.rateStudentInClassSubject
          },
          student_in_subject: {
            total: response.data.data.totalStudentInSubject,
            rate: response.data.data.rateStudentInSubject
          },
          student_in_lecturer: {
            total: response.data.data.totalStudentInLecturer,
            rate: response.data.data.rateStudentInSubject
          }
        }
        console.log('teacher', this.teacher)
      } else {
        console.log('error')
      }
    },
    check_befor_update () {
      let check = true
      this.item_lines.forEach(item_line => {
        item_line.lines.forEach(line => {
          console.log('ine.value', line.value === '')
          if (line.value === '') {
            this.$message.error('Các trường đánh giá không được để trống')
            check = false
          }
        })
      })
      return check
    },
    async update_survey () {
      if (this.loading_update) return
      if (this.check_befor_update() === false) {
        return
      }
      this.loading_update = true

      const data = {
        'id': this.survey_id,
        'comment': this.comment,
        'data': JSON.stringify(this.item_lines)
      }

      const response = await this.$services.do_request('put', SURVEY_CLASS, data)
      this.loading_update = false

      if (response.data.message === 'Success') {
        this.$message.success('Đánh giá thành công')
      } else {
        console.log('error')
      }
    },
    async get_survey () {
      if (this.loading_survey) return
      this.loading_survey = true
      const url = SURVEY_CLASS + `/${this.survey_id}`

      const response = await this.$services.do_request('get', url)
      this.loading_survey = false

      if (response.data.message === 'Success') {
        this.class_info = response.data.data.studentClassSubject.classSubject
        this.comment = response.data.data.comment
        if (response.data.data.data) {
          this.item_lines = JSON.parse(response.data.data.data)
        } else {
          this.item_lines = JSON.parse(response.data.data.formSurvey.fieldData)
        }
      } else {
        console.log('error')
      }
    }
  },
  beforeMount () {
    this.survey_id = this.$route.params.id
    if (this.common_data.role === 'ROLE_STUDENT') {
      this.get_survey()
    } else if (this.common_data.role === 'ROLE_LECTURER' || this.common_data.role === 'ROLE_ADMIN') {
      this.get_survey_teacher()
    } else {
      this.$router.push('/dang-nhap')
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
