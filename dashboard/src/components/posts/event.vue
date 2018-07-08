<template>
  <div class="event">
    <xheader title="منشورات الاحتفاليات" description="عرض جميع منشورات الاحتفاليات .." />
      <div id="masonry-grid" class="row">
         <blog type="event" />
      </div>
  </div>
</template>

<script>
  import xheader from '../layout/xHeader'
  import blog from './blog'

  export default {
    name: "event",
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
