<template>
  <div class="content password-reset">
    <hr>
    <h1 class="form-title">تغير كلمة المرور</h1>
    <form>

      <div class="styled-row">
        <label for="password" class="styled-row">الرقم السري</label>
        <input type="password" id="password" name="password">
      </div>

      <div class="styled-row">
        <label for="password_confirm" class="styled-row">إعادة كتابة الرقم السري</label>
        <input type="password" id="password_confirm" name="password_confirm">
      </div>

      <div class="styled-row">
        <label class="styled-row">التحقق البشري</label>
        <div align="center">
        </div>
      </div>
      <br>
      <button class="btn_m2">
        حفظ<span class="fa fa-save"></span>
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "password-reset"
  }
</script>

<style lang="sass" scoped>
  .form-title
    margin-bottom: 30px

  .styled-row
    label
      font-family: 'Lemonada', sans-serif
      color: #9c8a70
      margin: 10px 8px 10px 0
      float: right
      font-size: 18px
  .btn_m2
    span
      margin-left: 3px
</style>
