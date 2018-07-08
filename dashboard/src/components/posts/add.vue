<template>
    <div class="add-post">
     <xheader title="إضافة منشور" description="من هنا يمكنك إضافة منشورات جديده " />
      <div class="container">
        <div class="row">
          <div class="loading" v-if="loading">
            جاري تنفيذ طلبك.......
            <div class="progress">
              <div class="indeterminate"></div>
            </div>
          </div>
          <span class="alert message" :class="message.class" v-if="message.text !== ''">{{message.text}}</span>
          <form class="col s12" method="post" action=""  @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="row">
              <h4>إختار نوع المنشور</h4>
                <p>
                  <input type="radio" name="type" value="event" id="event" v-model="form.type" />
                  <label for="event" class="label">إحتفالية</label>
                </p>
                <p>
                  <input type="radio" name="type" value="update" id="update" v-model="form.type" />
                  <label for="update" class="label">تحديثات</label>
                </p>
                <p>
                  <input type="radio" name="type" value="news" id="news" v-model="form.type" />
                  <label for="news" class="label">أخبار</label>
                </p>
              <div class="alert alert-danger" v-if="form.errors.has('type')" v-text="form.errors.get('type')"></div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" name="title" id="title" maxlength="200" v-model="form.title" />
                <label for="title" class="post-title">العنوان </label>
                <div class="alert alert-danger" v-if="form.errors.has('title')" v-text="form.errors.get('title')"></div>
              </div>
              <div class="col s12">
                <vue-editor v-model="form.body" :editorToolbar="Toolbar"></vue-editor><br>
                <div class="alert alert-danger" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></div>
              </div>
            </div>
            <div class="center-align">
              <button class="btn pulse" :disabled="form.errors.any()">
                <span><i class="material-icons">add</i>إضافة</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
     import xheader from '../layout/xHeader'
     import { VueEditor } from 'vue2-editor'
     import Form from '../../helpers/Form'
     import Post from '../../api/Post'

    export default {
        name: "add-post",
        components: {
          xheader,
          VueEditor
        },
        data() {
          return {
            form: new Form({
              title: '',
              type: '',
              body: ''
            }),
            message: {
              text: '',
              class: ''
            },
            loading: false,
            Toolbar: [
              [{ 'font': [] }],
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              [{ 'align': [] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
              [{ 'direction': 'rtl' }],                         // text direction
              [{ 'color': [] }],          // dropdown with defaults from theme
              ['clean'],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ]
          }
        },
       methods: {
          onSubmit() {
            this.loading = true;
            Post.create(this.form.data())
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
                this.form.onSuccess(res);
                this.message.text = res;
                this.message.class = 'alert-success';
                  setTimeout(() => {
                    this.message.text = '';
                    this.message.class = '';
                  },5000);
              })
              .catch((error) => {
                this.message.text = 'خطأ غير معروف جرب مره اخر من فضلك.';
                this.message.class = 'alert-danger';
                  setTimeout(() => {
                    this.message.text = '';
                    this.message.class = '';
                  },6000);
              });
          }
       }
    }
</script>

<style lang="sass" scoped>

  form
    p
      text-align: right

  .label
    padding-right: 35px

  .label::before, .label::after
    position: absolute
    right: 0

  [type="radio"]:not(:checked), [type="radio"]:checked
    position: absolute
    left: 0

  .post-title
    position: absolute
    right: 15px

  #title
    padding-right: 7px

  .message
    position: fixed
    left: 34px
    top: 100px

  .loading
    position: absolute
    top: 182px
    right: 10%
    width: 78%
    height: 80%
    color: #26a69a
    background: #bebcb7
    font-size: 24px
    font-weight: bold
    opacity: 0.5
    border-radius: 6%
    padding: 31% 24% 0 0
    z-index: 2

  .loading::after
    position: absolute
    content: ''
    top: 154px
    left: 214px
    width: 34%
    height: 31%

  .progress
    width: 145%
    margin-right: -255px

  button
    span
      i
        margin-top: -5px
        position: relative
        top: 5px

</style>
