<template>
    <div class="admin">
        <sidebar></sidebar>
       <main class="main">
         <section class="content">
           <router-view/>
         </section>
       </main>

      <footer class="footer-admin page-footer">
        <div class="footer-copyright">
          <div class="container">
              جميع الحقوق محفوظة لسيرفر اورانوس <span class="icon"><i class="fa fa-copyright"></i></span>2018
               <span>صنع بكل <span class="red-text heart-copyright"><i class="material-icons">favorite</i></span>بواسطة ميار الملاح و أمير ( فينو تيم )</span>
          </div>
        </div>
      </footer>

      <div class="fixed-action-btn horizontal tooltipped" data-position="top" dattooltipped data-delay="50" data-tooltip="الوصول السريع">
          <a class="btn-floating btn-large pulse primary-bg-color">
            <i class="large material-icons">link</i>
          </a>
          <ul>
            <li><router-link class="btn-floating red tooltipped" data-position="top" data-delay="50" data-tooltip="فريق العمل" to="/accounts/staff"><i class="material-icons">sentiment_very_satisfied</i></router-link></li>
            <li><router-link class="btn-floating yellow darken-1 tooltipped" data-position="top" data-delay="50" data-tooltip="الاخبار" to="/posts/news"><i class="material-icons">event_note</i></router-link></li>
            <li><router-link class="btn-floating green tooltipped" data-position="top" data-delay="50" data-tooltip="التحديثات" to="/posts/update"><i class="material-icons">new_releases</i></router-link></li>"
            <li><router-link class="btn-floating blue tooltipped" data-position="top" data-delay="50" data-tooltip="المحظورين" to="/accounts/block"><i class="material-icons">block</i></router-link></li>
            <li><router-link class="btn-floating orange tooltipped" data-position="top" data-delay="50" data-tooltip="حسابات اللاعبين" to="/accounts"><i class="material-icons">group</i></router-link></li>
          </ul>
      </div>
   </div>
</template>

<script>
   import sidebar from './components/layout/SideBar'

    export default {
        name: "admin",
        components:{
          sidebar
        }
    }
</script>

<style lang="sass">
  $fa-font-path: "~font-awesome/fonts"
  @import "~font-awesome/scss/font-awesome"
  @import "assets/css/Material.icons.css"
  @import "assets/css/ionicons.min.css"
  @import "assets/css/materialize.min.css"
  @import "assets/css/admin.css"

  $site-primary-color : #915dad

  html
   direction: rtl !important

  .primary-text-color
    color: $site-primary-color !important
  .primary-bg-color
    background-color: $site-primary-color
  .primary-bg-color:hover
    background-color: #8561ad

  .text-red
    color: red
  .text-green
    color: green

  .btn-danger
    background-color: firebrick
  .btn-info
    background-color: royalblue
  .btn-success
    background-color: #3c763d

  .btn-danger:hover
    background-color: red
  .btn-info:hover
    background-color: dodgerblue
  .btn-success:hover
    background-color: #3c763d

  *::-webkit-scrollbar
    width: 0.6em

  *::-webkit-scrollbar-track
    -webkit-box-shadow: inset 0 0 6px #eee
    background-color: #eee
    border-radius: 10px

  *::-webkit-scrollbar-thumb
    background-color: #a778dc
    outline: 1px solid #ffffff
    border-radius: 10px

  *::-webkit-scrollbar-thumb:hover
    background-color: #be83dc

  .admin
    font-family: 'Lemonada', sans-serif !important

  .side-nav.fixed
    right: -66px

  .side-nav
    position: fixed
    width: 376px

  .content
    position: relative
    right: 300px

  .page-footer
    background-color: #b985f3 !important

  .footer-copyright
    background-color: rgba(51,51,51,0.08) !important
    margin-right: 60%
    width: 550px

  .heart-copyright
    position: relative
    top: 8px
    right: -3px

  .fixed-action-btn
    z-index: 1000

  .small-box>.inner
    margin-right: 10px

</style>
