<template lang="html">
  <section>
    <el-card class="box-card" style="margin-top: 50px">
      <div slot="header" class="clearfix">
        <span>Tạo mới phiếu khảo sát</span>
      </div>

      <el-button @click="new_item_line()">+</el-button>
      <div style="margin-top: 10px; margin-left: 50px;"
        v-for="(item_line, index_item) in item_lines" v-bind:key="index_item"
      >
        <span>{{index_item + 1}}. </span>

        <el-input v-model="item_line.name" style="width: 500px; margin-top:30px"/>

        <el-button style="margin-left: 130px" @click="remove_item_line(index_item)">-</el-button>

        <el-button style="margin-left: 130px" @click="new_line_usage(index_item)">+</el-button>

        <div class="" style="margin-left: 50px; margin-top: 20px"
          v-for="(line, index_line) in item_line.lines"
          v-bind:key="index_line"
        >
          <span>{{index_line + 1}}. </span>
          <el-input v-model="line.name" style="width: 500px"/>

          <el-button size="mini" @click="remove_line_usage(index_item, index_line)">-</el-button>
        </div>
      </div>
      <div class="" style="margin-top: 50px; text-align: right">
        <el-button @click="create_survey()">Thêm mới </el-button>
      </div>
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
          lines: [{ name: '' }]
        }
      ]
    }
  },
  watch: {},
  methods: {
    create_survey () {
      console.log('data', this.item_lines)
    },
    new_item_line () {
      this.item_lines.push({
        name: '',
        lines: [{ name: '' }]
      })
    },
    new_line_usage (index_item) {
      this.item_lines[index_item].lines.push({ name: '' })
    },
    remove_line_usage (index_item, index_line) {
      this.item_lines[index_item].lines.splice(index_line, 1)
    },
    remove_item_line (index_item) {
      this.item_lines.splice(index_item, 1)
    }
  }
}
</script>

<style lang="css">
</style>
