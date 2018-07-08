<template>
  <div class="news">
    <xheader title="منشورات الأخبار" description="عرض جميع منشورات الأخبار.." />
      <div id="masonry-grid" class="row">
        <blog type="news" />
      </div>
  </div>
</template>

<script>
  import xheader from '../layout/xHeader'
  import blog from './blog'

  export default {
    name: "news",
    components: {
      blog,
      xheader
    },
  }
</script>

<style lang="sass" scoped>
  .paging-post
    margin-right: 35%
    margin-top: 10px

  .paginator-text
    margin-right: 30px

  .message
    position: fixed
    left: 34px
    top: 50px

</style>
