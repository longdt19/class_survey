<template>
<div class="limiter">
  <div class="container-login100">
    <div class="wrap-login100">
      <div class="login100-form-title" style="background-image: url(/static/login/images/vnu-bg.jpg);">
        <span class="login100-form-title-1" style="margin-bottom: 80px">
        </span>
      </div>

      <form class="login100-form validate-form">
        <div class="wrap-input100 validate-input m-b-26">
          <span class="label-input100">Tài khoản</span>
          <input class="input100" type="text" name="username" placeholder="Nhập vào tên đăng nhập">
          <span class="focus-input100"></span>
        </div>

        <div class="wrap-input100 validate-input m-b-18">
          <div class="" style="display: block">
            <span class="label-input100">Mật khẩu</span>
          </div>
          <input class="input100" type="password" name="pass" placeholder="Nhập vào mật khẩu">
          <span class="focus-input100"></span>
        </div>

        <!-- <div class="flex-sb-m w-full p-b-30">
          <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
            <label class="label-checkbox100" for="ckb1">
              Remember me
            </label>
          </div>

          <div>
            <a href="#" class="txt1">
              Forgot Password?
            </a>
          </div>
        </div> -->

        <div class="container-login100-form-btn" style="margin-top: 60px">
          <button class="login100-form-btn">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped="">
@import "../../../static/login/vendor/bootstrap/css/bootstrap.min.css";
@import "../../../static/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../static/login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
@import "../../../static/login/vendor/animate/animate.css";
@import "../../../static/login/vendor/css-hamburgers/hamburgers.min.css";
@import "../../../static/login/vendor/animsition/css/animsition.min.css";
@import "../../../static/login/vendor/daterangepicker/daterangepicker.css";
@import "../../../static/login/css/util.css";
@import "../../../static/login/css/main.css";
</style>
