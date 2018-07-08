<template>
  <div class="row login">
    <div class="loading" v-if="loading">
      جاري تنفيذ طلبك.......
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>
    <span class="alert message" :class="message.class" v-if="message.text !== ''">{{message.text}}</span>
    <div class="title-login z-depth-9 card-panel">
        <span> لوحة تحكم الادارة</span>
    </div>
    <div class="col s12 z-depth-6 card-panel">
      <form class="login-form" method="post" action=""  @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_box</i>
            <input class="validate" name="account" id="account" type="text" v-model="form.account">
            <label for="account" data-error="wrong" data-success="right">اسم المستخدم</label>
            <div class="alert alert-danger" v-if="form.errors.has('account')" v-text="form.errors.get('account')"></div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input class="validate" name="password" id="password" type="password" v-model="form.password">
            <label for="password" data-error="wrong" data-success="right">كلمة المرور</label>
            <div class="alert alert-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <button class="btn waves-effect waves-light col s12" :disabled="form.errors.any()">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
   import Account from '../../api/Account'
   import Form from '../../helpers/Form'
   import Auth from '../../helpers/Auth'

    export default {
        name: "login",
        data() {
          return {
             form: new Form({
                account: '',
                password: ''
             }),
             message: {
               text: '',
               class: ''
             },
             loading: false
          }
        },
        methods: {
          onSubmit() {
             this.loading = true;
             Account.login(this.form.data())
               .then((res) => {
                   this.loading = false;

                   if (res.status === 500) {
                     this.message.text = 'السيرفر مشغول الان جرب مره اخري ..';
                     this.message.class = 'alert-danger';
                     return
                   }

                   if (res.status === 400) {
                     this.form.onFail(res.data.errors);
                     return
                   }

                   if (res.status === 200 && res.errors) {
                      this.message.text = res.errors;
                      this.message.class = 'alert-danger';
                     return
                   }

                   if (res.status === 200 && res.data) {
                      this.form.onSuccess(res.data);
                      if (res.data.permission !== 'Admin') {
                        this.message.text = 'لاتمتلك صلاحيات لدخول .';
                        this.message.class = 'alert-danger';
                      } else {
                        this.message.text = 'تم تاكيد هويتك بنجاح .. جاري تحويلك الي لوحة التحكم ..';
                        this.message.class = 'alert-success';

                          Auth.login(res.data);

                           setTimeout(() => {
                             this.$router.push('/');
                           },5000);
                      }
                   }
               })
               .catch((error) => {
                 this.message.text = 'عذرا هذا الحساب غير موجود .';
                 this.message.class = 'alert-danger';
                 setTimeout(() => {
                   this.message.text = '';
                   this.message.class = '';
                 },5000);
               });
          }
        }
    }
</script>

<style lang="sass">
  @import "../../assets/css/Material.icons.css"
  @import "../../assets/css/materialize.min.css"

  .login
    width: 500px
    margin-top: 11%

  html,body
    height: 100%
    direction: rtl

  html
    display: table
    margin: auto

  body
    display: table-cell
    vertical-align: middle
    background: #4ECDC4

  .card
    position: absolute
    left: 50%
    top: 50%
    -moz-transform: translate(-50%, -50%)
    -webkit-transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    -o-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)

  .input-field .prefix ~ label, .input-field .prefix ~ .validate ~ label
    margin-right: 3.2rem

  .input-field.col label
    right: .75rem

  .login-form
    .row
      .input-field
        input
          margin-right: 45px

  .title-login
     width: 100%
     height: 50px
     background: white
     border-radius: 11px
     margin-bottom: 2px

  .title-login
    span
      margin-right: 30%
      font-family: monospace
      font-size: 20px
      color: #4ecdc4
      font-weight: bold
      position: relative
      top: -12px

  .message
    position: fixed
    right: 98px
    top: 100px

  .loading
    position: absolute
    top: 168px
    right: 30%
    width: 40%
    height: 55%
    color: #26a69a
    background: #bebcb7
    font-size: 24px
    font-weight: bold
    opacity: 0.5
    border-radius: 6%
    padding: 9% 14% 0 0
    z-index: 2

  .loading::after
    position: absolute
    content: ''
    top: 154px
    left: 214px
    width: 34%
    height: 31%

  .progress
    width: 154%
    margin-right: -191px

  .alert-success
    background-color: #a3ff7d
    border-color: #d0e9c6
    color: #4caf50

  .alert
    padding: .75rem 1.25rem
    margin-bottom: 1rem
    border: 1px solid transparent
    border-radius: .25rem

  .alert-danger
    background-color: #f2dede
    border-color: #ebcccc
    color: #a94442

</style>
