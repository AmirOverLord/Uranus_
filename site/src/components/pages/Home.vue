<template>
  <div class="home">
    <div class="loading" v-if="loading"></div>
     <div class="content">
      <div class="post" v-for="post in posts">
          <hr/>
          <h2 v-if="post.type === 'news'">أخبار السيرفر - {{post.title}}</h2>
          <h2 v-if="post.type === 'event'">الأحتفاليات - {{post.title}}</h2>
          <h2 v-if="post.type === 'update'">تحديثات السيرفر - {{post.title}}</h2>
          <h3 v-if="post.type === 'news'">وهو مختص بكل ما هو جديد بالسيرفر </h3>
          <h4 v-if="post.type === 'event'">وهو مختص بكل ماهو جديد من الأحتفاليات من قبل إدارة السيرفر </h4>
          <h4 v-if="post.type === 'update'"> وهو قسم خاص بتحديثات السيرفر </h4>
          <div class="content_line"></div>
          <div class="post-body" v-html="post.body"></div>
          <router-link :to="`/posts/${post.id}`" class="btn_m2">
            ...للقرأه المزيد
          </router-link>
          <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from '../../api/Post'

      export default {
        name: 'Home',
        data() {
          return {
            posts: [],
            loading: false
          }
        },
        methods: {
          getPosts() {
            this.loading = true;
            Post.getAll()
              .then((posts) => {
                  this.loading = false;
                  this.posts = posts;
              })
          }
        },
        created() {
          this.getPosts();
        }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .content .post .post-body p
    margin-left: 0 !important
    direction: rtl

  .post-body p span
    background-color: transparent !important
    color: rgb(178, 107, 0) !important

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
