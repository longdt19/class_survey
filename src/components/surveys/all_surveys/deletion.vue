<template>
  <el-dialog
    title="Xác nhận xóa khảo sát môn học"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <div class="" style="text-align: center">
      <span>Sau khi xóa sẽ không thể phục hồi.</span>
      <br/>
      <span>Bạn chắc chắn muốn tiếp tục thực hiện thao tác ?</span>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">Xác nhận</el-button>
    </span>
</el-dialog>
</template>

<script>
export default {
  data () {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    open () {
      this.centerDialogVisible = true
    }
  }
}
</script>

<style lang="css">
</style>
