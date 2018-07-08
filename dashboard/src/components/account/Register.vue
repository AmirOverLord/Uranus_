<template>
    <div class="content register">
      <hr>
      <h1 class="form-title">إنشاء حساب </h1>
       <div class="loading" v-if="loading"></div>
       <span class="msg-info" v-if="message !== ''">{{message}}</span>
       <form method="post" action="/account"  @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
         <div class="styled-row">
           <label for="account">اسم المستخدم</label>
             <input type="text" id="account" name="account" v-model="form.account">
             <span class="msg-error" v-if="form.errors.has('account')" v-text="form.errors.get('account')"></span>
         </div>

         <div class="styled-row">
           <label for="password" class="styled-row">الرقم السري</label>
             <input type="password" id="password" name="password" v-model="form.password">
             <span class="msg-error" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
         </div>

         <div class="styled-row">
           <label for="password_confirm" class="styled-row">إعادة كتابة الرقم السري</label>
             <input type="password" id="password_confirm" name="password_confirm" v-model="form.password_confirm">
           <span class="msg-error" v-if="form.errors.has('password_confirm')" v-text="form.errors.get('password_confirm')"></span>
         </div>

         <div class="styled-row">
            <label for="email" class="styled-row">البريد الإلكتروني</label>
            <input type="text" id="email" name="email" value="" maxlength="30" v-model="form.email">
            <span class="msg-error" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
         </div>

         <div class="styled-row">
           <label class="styled-row">التحقق البشري</label>
             <div class="recaptcha">
                <div class="g-recaptcha" data-theme="dark"  :data-sitekey="recaptcha.key"></div>
                <span class="msg-error" v-if="recaptcha.error !== ''" v-text="recaptcha.error"></span>
             </div>
         </div>
         <br>
         <!--<h1 class ="change"><router-link to="/reset/account">تغير الرقم السري ؟</router-link></h1>-->
         <br>
         <button class="btn_m2" :disabled="form.errors.any()">
           التسجيل<span class="fa fa-user-circle"></span>
         </button>
       </form>
    </div>
</template>

<script>
    import Account from '../../api/Account'
    import Form from '../../helpers/Form'

    export default {
        name: "register",
        data() {
          return {
             form: new Form({
                 account: '',
                 email: '',
                 password: '',
                 password_confirm: ''
             }),
            message: '',
            loading: false,
            recaptcha: {
               id: 0,
               key: '6LdeqCUTAAAAAPV-L4izlm0YOTnOlgdzHFpfEu-8',
               error: ''
             }
          };
        },
        methods: {
          onSubmit() {
              let g_recaptcha_response = grecaptcha.getResponse(this.rcapt_id);
              if (g_recaptcha_response.length === 0) {
                this.recaptcha.error = `Compleate captcha challenge!.`;
                return
              } else {
                this.recaptcha.error = '';
              }

             this.loading = true;
             Account.create(this.form.data())
               .then((res) => {
                 this.loading = false;
                 if (res.status === 500) {
                   this.message = 'السيرفر مشغول الان جرب مره اخري ..';
                   return
                 }
                 if (res.status === 400) {
                   this.form.onFail(res.data.errors);
                   return
                 }
                 this.form.onSuccess(res);
                 this.message = res;
               })
               .catch((error) => {
                 //console.log('error:...');
                 //console.log(error);
                 //this.form.onFail(error.data.errors)
               });
          },
        },
        mounted() {
          if (window.grecaptcha) {
            this.recaptcha.id = grecaptcha.render( $('.g-recaptcha')[0], { sitekey : this.recaptcha.key });
          }
        }
    }
</script>

<style lang="sass" scoped>
  .loading
    position: absolute
    top: 375px
    width: 59%
    height: 48%
    background: #161415
    opacity: 0.7
    border-radius: 6%
    z-index: 2

  .loading::after
    background: url("../../assets/loading/2.svg")
    position: absolute
    content: ''
    top: 154px
    left: 214px
    width: 34%
    height: 31%


  .msg-error
    color: chocolate
    margin-left: 25%

  .msg-info
    margin-left: 25%
    font-size: 15px
    color: chartreuse

  .recaptcha
    margin-left: 105px

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

  .change
    a
      font-size: 14px
      text-decoration: none
      color: #9c8a70
      float: right
      margin: 13px -135px 10px 0
    a:hover
      color: rgba(156, 138, 112, 0.47843137254901963)

</style>
