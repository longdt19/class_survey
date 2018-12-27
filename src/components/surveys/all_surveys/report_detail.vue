<template>
  <el-dialog title="Xem thông tin đánh giá lớp môn học" :visible.sync="dialogFormVisible">

    <el-table
        :data="tableData"
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

    <div v-if="comments.length !== 0" class="faqs" style="margin-top: 50px">
      <div class="panel_title">Ý kiến phản hồi</div>
      <div class="accordions"  style="margin-left: 50px">

        <div class="" v-for="(comment, index) in comments" v-bind:key="index">
          <span>- {{ comment }}</span>
        </div>

      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { TEACHER_SURVEY } from '@/constants/endpoints'
export default {
  data () {
    return {
      dialogFormVisible: false,
      survey_id: '',
      tableData: [],
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
      comments: []
    }
  },
  methods: {
    open (class_subject) {
      this.survey_id = class_subject.id
      // this.tableData = class_survey.studentClassSubjects
      this.dialogFormVisible = true
      this.get_survey_teacher()
    },
    async get_survey_teacher () {
      if (this.loading_teacher) return
      this.loading_teacher = true
      const url = TEACHER_SURVEY + `/${this.survey_id}`

      const response = await this.$services.do_request('get', url)
      this.loading_teacher = false
      console.log('response', response)

      if (response.data.message === 'Success') {
        this.tableData = response.data.data.rateFields
        this.comments = response.data.data.comments
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
      } else {
        console.log('error')
      }
    }
  }
}
</script>

<style scoped="">
.input_handle {
  width: 300px;
}
</style>
