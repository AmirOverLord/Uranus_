<template>
    <div class="sidebar">
      <!--<div class="radar"></div>
      <div class="radar"></div>
      <div class="radar"></div>-->
      <ul id="slide-out" class="side-nav fixed z-depth-4">
        <li>
          <div class="userView">
            <div class="background">
              <img src="../../assets/images/photo2.png">
            </div>
            <img class="circle" src="../../assets/images/user4-128x128.jpg">
            <span class="white-text name">مرحباً بك <span class="deep-purple-text waves-purple">{{user.account}}</span> مره اخري</span>
            <a class="purple-text logout" @click="logout"><span class="">تسجيل خروج<i class="ion-log-out"></i> </span></a>
          </div>
        </li>

        <li><router-link class="active dashboard-title" to="/"><i class="material-icons primary-text-color">dashboard</i>الرئيسية</router-link></li>
        <li><div class="divider"></div></li>

        <li><a class="subheader">إدارة اللعبة</a></li>
        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header">الحسابات<i class="material-icons primary-text-color">person</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#">فريق العمل</a></li>
                  <li><a href="#">المحظورين</a></li>
                  <li><a href="#">حسابات اللاعبين</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li><a class="subheader">إدارة الموقع</a></li>
        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header">المنشورات<i class="material-icons primary-text-color">reorder</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><router-link to="/posts/add">إضافة جديد</router-link></li>
                  <li><router-link to="/posts/event">الاحتفاليات</router-link></li>
                  <li><router-link to="/posts/update">التحديثات</router-link></li>
                  <li><router-link to="/posts/news">الاخبار</router-link></li>
                  <li><router-link to="/posts">كل المنشورات</router-link></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
   import Auth from '../../helpers/Auth'

    export default {
        name: "sidebar",
        data() {
          return {
            user: {}
          }
        },
        methods: {
          logout() {
            Auth.logout();
            this.$router.push('/login');
          }
        },
       created() {
          this.user = Auth.getUser();
       }
    }
</script>

<style lang="sass" scoped>
  @import "../../assets/css/animation.css"

  .radar
    position: fixed
    top: 15%
    right: -7%

  .collapsible-body
    margin-right: -25px

  .subheader ,.dashboard-title
    margin-right: 25px !important

  .dashboard-title > i
    margin-left: -19px !important

  .side-nav.fixed
    right: -66px

  .side-nav
    position: fixed
    width: 376px

  .side-nav
    .userView
      position: relative
      right: 24px

  .logout
   cursor: pointer
</style>
