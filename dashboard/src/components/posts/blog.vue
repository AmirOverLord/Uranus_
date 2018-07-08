<template>
    <div class="blog">
      <span class="alert message" :class="message.class" v-if="message.text !== ''">{{message.text}}</span>
          <paginate ref="paginator"
            name="posts"
            :list="posts"
            :per="3"
            tag="div"
          >
            <div v-for="post in paginated('posts')" class="col s6 m4">
              <post type="short" :id="post.id" :title="post.title" :body="post.body" :post_type="post.type" @delete_post="onDelete"/>
            </div>
          </paginate>
          <paginate-links
            for="posts"
            :async="true"
            :hide-single-page="true"
            :show-step-links="false"
            :simple="{
              next: 'التالية»',
              prev: '«السابقة'
            }"
            :classes="{
              'ul': ['pagination','paging-post'],
              '.next > a': 'waves-effect',
              '.prev > a': 'waves-effect'
            }"
          >
          </paginate-links>
          <div class="paginator-text hide" v-if="$refs.paginator">
            Show {{$refs.paginator.pageItemsCount}}
          </div>
    </div>
</template>

<script>
  import post from './post'
  import PostAPI from '../../api/Post'

  export default {
    name: "blog",
    props: ['type'],
    components: {
      post
    },
    data() {
      return {
        posts:[],
        paginate: ['posts'],
        message: {
          text: '',
          class: ''
        }
      }
    },
    methods: {
      getPosts() {
        PostAPI.getAll()
          .then((posts) => {
             if (this.type === 'All') {
               this.posts = posts;
             } else {
               this.posts = posts.filter(post => post.type === this.type);
             }
          })
      },
      onDelete(id) {
        PostAPI.destroy(id)
          .then((res) => {
            if (res.status === 500) {
              this.message.text = 'السيرفر مشغول الان جرب مره اخري ..';
              this.message.class = 'alert-danger';
              return
            }
            this.message.text = res;
            this.message.class = 'alert-success';
            setTimeout(() => {
              this.message.text = '';
              this.message.class = '';
            },5000);
            this.getPosts();
          })
      }
    },
    created() {
      this.getPosts();
    }
  }
</script>

<style scoped>

</style>
