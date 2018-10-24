<template lang="">
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Thêm mới tài khoản sinh viên</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
      </div>
      <div class="">
        <span>Mã sinh viên</span>
        <el-input placeholder="Please input" v-model="username" style="width: 50%"></el-input>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>Tải lên tài khoản sinh viên</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
      </div>
    </el-card>

  </section>

</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
