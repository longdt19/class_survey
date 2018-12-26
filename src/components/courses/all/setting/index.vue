<template lang="html">
  <div class="courses" style="padding-top: 0px; padding-bottom: 0px; margin-top: 50px; min-height: 450px">
    <el-form ref="form" label-width="120px">

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Họ và tên">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Mã sinh viên">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Email">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Khóa học">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button>Cập nhật thông tin</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="Mật khẩu cũ">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Mật khẩu mới">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item label="Mật khẩu mới">
            <el-input style="width: 300px"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button>Thay đổi mật khẩu</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  mounted () {
    let elm_height = document.getElementById('courses_row').offsetHeight + 'px'
    this.$store.commit('Common/slide_bar_height', elm_height)
  }
}
</script>

<style lang="css" scoped="">

</style>
