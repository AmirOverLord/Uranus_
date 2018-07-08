<template>
    <div class="post">
        <div v-if="type === 'short'">
            <div class="card hoverable">
                <div class="card-image">
                  <img src="../../assets/images/photo2.png">
                  <span class="card-title">{{title}}</span>
                  <span class="pull-left btn post-type white-text">{{post_type}}</span>
                </div>
                <div class="card-content">
                  <p class="truncate small-text" v-html="body"></p>
                </div>
                <div class="card-action">
                  <router-link class="btn btn-info" :to="`/posts/edit/${id}`">تعديل</router-link>
                  <button class="btn btn-danger" @click="$emit('delete_post',id)" >حذف</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "post",
        props:[
          'id',
          'title',
          'body',
          'post_type',
          'type'
        ],
        data() {
          return {

          }
        },
        methods: {

        }
    }
</script>

<style lang="sass">
  .small-text p span, .small-text h1,.small-text h2,.small-text h3,.small-text h4
    font-size: 15px !important

  .post-type
    margin-top: 5px
    margin-left: 5px
    border-radius: 20px

</style>
