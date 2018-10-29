<template>
<section>
  <div class="" style="float: right; margin-bottom: 20px">
    <el-button>Thêm khảo sát môn học</el-button>
  </div>
  <el-table
      :data="tableData"
      style="width: 100%"
      border
  >
    <el-table-column  type="index"  label="STT" width="50" align="center" header-align="center">
    </el-table-column>

    <el-table-column label="Tên môn học" align="center" header-align="center">
      <template slot-scope="scope">
        <span>{{scope.row.subject_name}}</span>
      </template>
    </el-table-column>

    <el-table-column label="Mã lớp môn học" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.subject_code}}
      </template>
    </el-table-column>

    <el-table-column label="Giảng viên" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.teacher}}
      </template>
    </el-table-column>

    <el-table-column label="Ngào tạo" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.created_at}}
      </template>
    </el-table-column>

    <el-table-column label="Ngày chỉnh sửa" align="center" header-align="center">
      <template slot-scope="scope">
        {{scope.row.modified_at}}
      </template>
    </el-table-column>

    <el-table-column label="Thao tác" align="center" header-align="center">
      <template slot-scope="scope">
        <el-button circle icon="el-icon-edit" type="warning" @click="edit_class(scope.row)"></el-button>
        <el-button circle icon="el-icon-search"></el-button>
        <el-button circle icon="el-icon-delete" type="danger" @click="delete_class()"></el-button>
      </template>
    </el-table-column>
  </el-table>

  <edit-component ref='edit_class' @edited_class="edited_class" />
  <delete-component ref='delete_class' />
</section>
</template>

<script>
import EditComponent from './edition'
import DeleteComponent from './deletion'

export default {
  components: { EditComponent, DeleteComponent },
  data () {
    return {
      tableData: [
        {
          subject_name: 'Phát triển ứng dụng web',
          subject_code: 'INT1103 1',
          teacher: 'Lê Đình Thanh',
          created_at: '1/1/2018',
          modified_at: '1/2/2018'
        }
      ]
    }
  },
  methods: {
    delete_class () {
      this.$refs.delete_class.open()
    },
    edit_class (class_survey) {
      this.$refs.edit_class.open(class_survey)
    },
    edited_class (class_edited) {
      console.log('edited_class')
    }
  }
}
</script>

<style lang="css">
</style>
