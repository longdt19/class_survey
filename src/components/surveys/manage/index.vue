<template lang="html">
  <section>
    <el-card class="box-card" style="margin-top: 50px">
      <div slot="header" class="clearfix">
        <span>Tạo mới phiếu khảo sát</span>
        <!-- <el-button style="float: right" type="button">Chọn tệp tải lên   <i class="el-icon-upload el-icon-right"></i></el-button> -->
      </div>
      <div class="">
        <el-button size="mini" @click="new_item_line()">+</el-button>
      </div>

      <div class="" style="margin-top: 10px; margin-left: 50px"
        v-for="(item_line, index) in item_lines" v-bind:key="index"
      >
        <el-input style="width: 500px"/>
        <div class="" style="margin-left: 50px; margin-top: 20px"
          v-for="(line, index) in item_line.lines" v-bind:key="index"
        >
          <el-input style="width: 500px"/>
          <el-button @click="new_line_usages()">+</el-button>
        </div>
      </div>
      <!-- <el-table :data="tableStudentData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"/>
      </el-table> -->
    </el-card>
  </section>
</template>

<script>
export default {
  data () {
    return {
      item_lines: [
        {
          name: '',
          lines: []
        }
      ],
      line_usages: []
    }
  },
  methods: {
    new_item_line () {

    },
    new_line_usages () {
      this.line_usages += 1
    }
  }
}
</script>

<style lang="css">
</style>
