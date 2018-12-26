<template>
<section>
  <el-card class="box-card" style="margin-top: 20px">
    <el-table
        :data="tableData"
        style="width: 100%; margin-top: 20px"
        border
    >
      <el-table-column  type="index"  label="STT" width="50" align="center" header-align="center">
      </el-table-column>

      <el-table-column label="Ngày tạo" align="center" header-align="center">
        <template slot-scope="scope">
          {{ formatDate(scope.row.created) }}
        </template>
      </el-table-column>

      <el-table-column label="Tên phiếu" align="center" header-align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>

      <el-table-column label="Mã phiếu" align="center" header-align="center">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>

      <el-table-column label="Đặt làm mặc định" align="center" header-align="center">
        <template slot-scope="scope">
          <i
            :class=" scope.row.isDefault === 1 ? 'el-icon-success' : 'el-icon-error' "
            :style=" scope.row.isDefault === 1 ? 'color: green' : 'color: red'"
          ></i>
        </template>
      </el-table-column>

      <el-table-column label="Người tạo" align="center" header-align="center">
        <template slot-scope="scope">
          {{ scope.row.creator }}
        </template>
      </el-table-column>

      <el-table-column label="Thao tác" align="center" header-align="center">
        <template slot-scope="scope">
          <!-- <el-button circle icon="el-icon-edit" type="warning" @click="edit_class(scope.row)"></el-button> -->
          <el-button circle icon="el-icon-search" @click="open_edit(scope.row)"></el-button>
          <el-button circle icon="el-icon-delete" type="danger" @click="open_delete(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <delete-component ref='delete_survey' @deleted_survey='deleted_survey' />
    <edit-component ref='edit_survey' @updated_survey="update_survey"/>
  </el-card>
</section>
</template>

<script>
import { SURVEY_FORM } from '@/constants/endpoints'
import formatDate from '@/utils/formatDate'
import DeleteComponent from './delete'
import EditComponent from './edit'

export default {
  components: { DeleteComponent, EditComponent },
  data () {
    return {
      tableData: [],
      loading: false
    }
  },
  methods: {
    formatDate,
    async get_list () {
      if (this.loading) return
      this.loading = true

      const response = await this.$services.do_request('get', SURVEY_FORM)
      this.loading = false

      if (response.data.message === 'Success') {
        this.tableData = response.data.data.content
      } else {
        this.$message.error('Thêm mới thất bại')
      }
    },
    open_delete (survey) {
      this.$refs.delete_survey.open(survey)
    },
    deleted_survey () {
      this.get_list()
    },
    open_edit (survey) {
      this.$refs.edit_survey.open(survey)
    },
    update_survey () {
      this.get_list()
    }
  },
  created () {
    this.get_list()
  }
}
</script>

<style lang="css">
</style>
