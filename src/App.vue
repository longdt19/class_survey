<template>
  <div id="app" style="margin-left: -10px; margin-right: -10px">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App'
}
</script>
<style lang="scss" src="./assets/sass/app.scss"></style>
<style lang="scss" src="./assets/sass/custom.scss"></style>

<style>
.el-loading-mask {
  top: -10px;
  left: -10px
}
</style>
<style media="screen">
  .el-loading-spinner {
    top: 50%
  }
</style>
