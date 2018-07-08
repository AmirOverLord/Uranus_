<template>
  <div id="app">
      <header>
        <nav id="head_wrap">
          <div class="servername">

          </div>

        </nav>
      </header>
      <section id="login">
        <form action="/" method="post">
          <input type="text" placeholder="Benutzername" />
          <input type="password" placeholder="Passwort" />
          <input type="submit" value="Einloggen" />
        </form>
      </section>

    <div id="wrapper">
        <a id="logo" href="#">
          <img src="./assets/logo.png" class="logo"/>
        </a>
        <nav id="mainnav">
          <ul>
            <li><a href="#" target="_blank">المنتدي</a></li>
            <li><a href="#" target="_blank">الدعم الفني</a></li>
            <li><router-link to="/rank">ترتيب اللاعبين</router-link></li>
            <li><router-link to="/download">التحميل</router-link></li>
            <li><router-link to="/register">التسجيل</router-link></li>
            <li><router-link to="/">الرئيسية</router-link></li>
          </ul>
        </nav>
    <main>
      <article>
      <div class="wide-container">
            <div>
              <img src="./assets/slide.png"/>
            </div>
      </div>
      <h1>
        <span class="icon has-text-orange"><i class="fa fa-heart"></i></span>
          مرحباً بكم في سيرفر أورانوس
        <span class="icon has-text-orange"><i class="fa fa-heart"></i></span>
      </h1>
        <!-- Main Content -->
        <router-view></router-view>

      </article>
      <!-- Sidebar -->
      <aside>
        <a class="sb_btn" href="https://www.facebook.com/groups/213045869251050/" target="_blank">
          مجموعة الفيس بوك
        </a>
        <a class="sb_btn" href="#" target="_blank">
          اليوتيوب
        </a>
        <a class="sb_btn" href="https://discordapp.com/invite/uxG94S7" target="_blank">
          دردشة اللأعبين
        </a>

        <!-- Server Status -->
        <div class="sb_box">
           <server_status></server_status>
        </div>

        <div class="sb_box2">
          <h3>الملوك 10 </h3>
          <div class="sb_line2"></div>
            <top_player show="top10"></top_player>
          <br />
          <div class="clear"></div>
        </div>
      </aside>
    </main>
      <!-- Footer -->
      <footer>
        <div class="cr">
          <span>جميع الحقوق محفوظة لسيرفر <a href="#">اورانوس 2018</a></span>
          تصميم :  <a href="https://www.facebook.com/mayar.omar.9212" target="_blank">ميار عمر الملاح</a>
          <br>
          برمجة :  <a href="https://www.facebook.com/AmirDarkLord" target="_blank">أمير دارك</a>
          <br>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import server_status from '../src/components/utile/server_status'
  import top_player from '../src/components/utile/top_player'

export default {
  name: 'App',
  components: {
    server_status,
    top_player
  }
}
</script>

<style lang="sass">
  $fa-font-path: "~font-awesome/fonts"
  @import "~font-awesome/scss/font-awesome"
  @import "assets/css/style.css"
  @import "assets/css/vue-good-table.css"
  @import "assets/css/quill.core.css"

  body
    cursor: url(http://cur.cursors-4u.net/games/gam-13/gam1232.ani),url(http://cur.cursors-4u.net/games/gam-13/gam1232.png), auto !important
    font-family: 'Lemonada',cursive !important

  *:hover
    cursor: url(http://cur.cursors-4u.net/games/gam-13/gam1232.ani),url(http://cur.cursors-4u.net/games/gam-13/gam1232.png), auto !important

  .has-text-orange
    color: rgb(255, 129, 0)

  .sb_box2
    table
      margin-left: 11px

  body::-webkit-scrollbar
    width: 0.8em

  body::-webkit-scrollbar-track
    -webkit-box-shadow: inset 0 0 6px rgba(255, 129,0,0.3)
    background-color: rgba(33, 28, 28,0.3)
    border-radius: 10px

  body::-webkit-scrollbar-thumb
    background-color: #ff6420
    outline: 1px solid #a8341d
    border-radius: 10px

  body::-webkit-scrollbar-thumb:hover
    background-color: #ff8200

  // Table
  .vgt-wrap.nocturnal
    .vgt-global-search
      border: 1px solid #171312
      background: -webkit-gradient(linear, left top, left bottom, from(#4d453f), to(#1e1918))
      background: linear-gradient(#4d453f, #1e1918)

  .vgt-wrap.nocturnal
    .vgt-global-search__input
      .input__icon
        .magnifying-glass
          border: 2px solid #f2c17a

  .vgt-wrap.nocturnal
    .vgt-global-search__input
      .input__icon
        .magnifying-glass::before
          background: #f2c17a

  .vgt-global-search__input
    .input__icon
      position: absolute
      left: 41px
      top: 11px

  .vgt-wrap.nocturnal
    .vgt-global-search__input
      .vgt-input
        margin-right: 17px
        color: #8c8279
        background-color: #5d4c37
        border: 1px solid #272120

  .vgt-wrap.nocturnal
    .vgt-wrap__footer
      color: #403835
      border: 1px solid #171312
      background: -webkit-gradient(linear, left top, left bottom, from(#4d453f), to(#1e1918))
      background: linear-gradient(#4d453f, #1e1918)

  .vgt-wrap__footer
    .footer__row-count__label
      font-size: 14px
      color: #bd8654 !important
      margin: -10px 0 0 10px

  .footer__navigation__page-btn
    color: #9c8a70

  .vgt-wrap__footer
    .footer__navigation__page-btn
      .chevron.right::after
        border-left: 6px solid #f17640
        margin-left: -3px

  .vgt-wrap__footer
    .footer__navigation__page-btn
      .chevron.left::after
        border-right: 6px solid #f17640
        margin-left: -3px

  .vgt-wrap.nocturnal
    .vgt-wrap__footer
      .footer__navigation__page-btn
        color: #f2d3a3

  .vgt-wrap.nocturnal
    .vgt-wrap__footer
      .footer__navigation__info
        color: #bd8654

  .content .post .post-body p
    margin-left: 0 !important
    margin-top: 15px
    padding-top: 15px
    direction: rtl

  .content .post .post-body p span, .content .post-body h3 span
    background-color: transparent !important
    color: rgb(178, 107, 0) !important
    font-size: 12px
    text-shadow: 0 2px 1px rgb(0, 0, 0)
    text-transform: uppercase
    font-weight: 600
    font-family: 'Lemonada', sans-serif
    direction: rtl

  .content .post-body h3
    margin-left: 0
    direction: rtl
</style>
