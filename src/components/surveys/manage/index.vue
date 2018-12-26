<template lang="html">
  <section>
    <div class="">
      <el-button @click="show_create_survey()">Thêm mới phiếu khảo sát</el-button>
    </div>
    <el-card class="box-card" style="margin-top: 20px" v-if="display_create">
      <div slot="header" class="clearfix">
        <span>Tạo mới phiếu khảo sát</span>
      </div>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-form ref="form" label-width="120px">
            <el-form-item label="Tên phiếu">
              <el-input style="width: 200px;" v-model="name"></el-input>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="8">
          <el-form ref="form" label-width="120px">
            <el-form-item label="Mã phiếu">
              <el-input style="width: 200px;" v-model="code"></el-input>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="8">
          <el-form ref="form" label-width="120px">
            <el-form-item label="Đặt làm mặc định">
              <el-switch v-model="is_default"></el-switch>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-form ref="form" >
        <el-form-item label="Thêm thông tin các trường phiếu khảo sát">
        </el-form-item>
      </el-form>

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
        <el-button @click="create_survey()" :loading="loading">Thêm mới </el-button>
      </div>
    </el-card>

    <list-surveys ref='list_surveys' />
  </section>
</template>

<script>
import { SURVEY_FORM } from '@/constants/endpoints'

import ListSurveys from './list'

export default {
  components: { ListSurveys },
  data () {
    return {
      item_lines: [],
      is_default: false,
      name: '',
      code: '',
      loading: false,
      display_create: false
    }
  },
  watch: {},
  methods: {
    show_create_survey () {
      this.display_create = !this.display_create
    },
    async create_survey () {
      if (this.loading) return
      this.loading = true

      const data = {
        'name': this.name,
        'code': this.code,
        'isDefault': this.is_default ? 1 : 0,
        'fieldData': JSON.stringify(this.item_lines)
      }

      const response = await this.$services.do_request('post', SURVEY_FORM, data)
      this.loading = false

      if (response.data.message === 'Success') {
        this.$message.success('Thêm mới phiếu khảo sát thành công')
        this.item_lines = []
        this.name = ''
        this.code = ''
        this.is_default = false
        this.$refs.list_surveys.get_list()
      } else {
        this.$message.error('Thêm mới thất bại')
      }
    },
    new_item_line () {
      this.item_lines.push({
        name: '',
        lines: [{ name: '', value: '' }]
      })
    },
    new_line_usage (index_item) {
      this.item_lines[index_item].lines.push({ name: '', value: '' })
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
