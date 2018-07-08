<template>
    <div class="post">
      <div class="loading" v-if="loading"></div>
        <div class="content">
          <hr/>
            <h1>{{title}}</h1>
            <div v-html="body" class="post-body"></div>
        </div>
    </div>
</template>

<script>
  import Post from '../../api/Post'

    export default {
        name: "post",
        data() {
          return {
            title: '',
            body: '',
            type: '',
            id: this.$route.params.id,
            message: {
              text: '',
              class: ''
            },
            loading: false
          }
        },
        methods: {
          findPost() {
            this.loading = true;
            Post.find(this.id)
              .then((res) => {
                this.loading = false;
                if (res.status === 500) {
                  this.message.text = 'السيرفر مشغول الان جرب مره اخري ..';
                  this.message.class = 'alert-danger';
                  return
                }

                if (res.status === 404) {
                  this.message.text = 'لايمكن ايجاد هذا المنشور .';
                  this.message.class = 'alert-danger';
                  return
                }

                this.title = res.title;
                this.type = res.type;
                this.body = res.body;
              })
          }
        },
        created() {
          this.findPost();
        }
    }
</script>

<style lang="sass">
  .content .post-body p
    margin-left: 0 !important
    margin-top: 50px
    padding-top: 25px
    direction: rtl

  .content .post-body p span, .content .post-body h3 span
    background-color: transparent !important
    color: rgb(178, 107, 0) !important
    font-size: 12px
    text-shadow: 0 2px 1px rgb(0, 0, 0)
    text-transform: uppercase
    font-weight: 600
    font-family: 'Lemonada', sans-serif

  .loading
    position: absolute
    top: 308px
    width: 62%
    height: 62%
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
    width: 201px
    height: 201px
</style>
