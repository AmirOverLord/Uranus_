<template>
  <div class="content account-recovery">
    <hr>
    <h1 class="form-title">إسترجاع معلومات الحساب</h1>
    <form>

      <div class="styled-row">
        <label for="email" class="styled-row"> البريد الإلكتروني أو اسم المستخدم </label>
        <input type="text" id="email" name="email" value="" maxlength="30">
      </div>

      <div class="styled-row">
        <label class="styled-row">التحقق البشري</label>
        <div align="center">
        </div>
      </div>
      <br>
      <button class="btn_m2">
        إسترجاع<span class="fa fa-reply"></span>
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "account-recovery"
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
