<template>
    <div class="xheader">
      <div class="page-announce valign-wrapper">
          <a href="#" data-activates="slide-out" class="button-collapse valign hide-on-large-only">
            <i class="material-icons">menu</i>
          </a>
         <h1 class="page-announce-text valign">{{title}}</h1>
         <p class="description">{{description}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "xheader",
        props:[
          'title',
          'description'
        ]
    }
</script>

<style lang="sass" scoped>
  .description
    position: absolute
    right: 50px
    top: 119px
    color: antiquewhite

  .page-announce
    background-color: #8561ad

</style>
