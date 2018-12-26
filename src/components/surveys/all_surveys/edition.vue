<template>
  <el-dialog title="Xem thông tin lớp môn học" :visible.sync="dialogFormVisible">

      <el-table
          :data="tableData"
          style="width: 100%; margin-top: 20px; margin-bottom: 30px"
          border
      >
        <el-table-column  type="index"  label="STT" width="50" align="center" header-align="center">
        </el-table-column>

        <el-table-column label="Họ và tên" align="center" header-align="center">
          <template slot-scope="scope">
            {{ scope.row.student.fullname}}
          </template>
        </el-table-column>

        <el-table-column label="Mã sinh viên" align="center" header-align="center">
          <template slot-scope="scope">
            {{ scope.row.student.studentCode}}
          </template>
        </el-table-column>

        <el-table-column label="Email" align="center" header-align="center">
          <template slot-scope="scope">
            {{ scope.row.student.email}}
          </template>
        </el-table-column>

        <el-table-column label="Khóa học" align="center" header-align="center">
          <template slot-scope="scope">
            {{ scope.row.student.course}}
          </template>
        </el-table-column>

      </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      class_survey: {},
      tableData: []
    }
  },
  methods: {
    open (class_survey) {
      this.class_survey = class_survey
      this.tableData = class_survey.studentClassSubjects
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped="">
.input_handle {
  width: 300px;
}
</style>
