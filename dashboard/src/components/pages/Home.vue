<template>
    <div class="home">
      <xheader title="الصفحة الرئيسية" description="محتوي الصفحة الرئيسية.." />
      <!-- Stat Boxes -->
      <div class="row">
        <div class="col l3 s6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <p> مخدم 9.4 : <span>150</span></p>
              <p> مخدم 7.2 : <span>120</span></p>
              <p>الحسابات</p>
            </div>
            <div class="icon">
              <i class="ion ion-person"></i>
            </div>
          </div>
        </div><!-- ./col -->
        <div class="col l3 s6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <p> مخدم 9.4 : <span>69</span></p>
              <p> مخدم 7.2 : <span>40</span></p>
              <p>المتصلون الان</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
          </div>
        </div><!-- ./col -->
        <div class="col l3 s6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <p> مخدم 9.4 : <span>35</span></p>
              <p> مخدم 7.2 : <span>56</span></p>
              <p>الشخصيات</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-stalker"></i>
            </div>
          </div>
        </div><!-- ./col -->
        <div class="col l3 s6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <p> مخدم 9.4 : <span>10</span></p>
              <p> مخدم 7.2 : <span>20</span></p>
              <p>شخصيات الإدارة</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="quick-links center-align">
            <h3>روابط الوصول السريع</h3>
            <div class="row">
              <div class="col l3 s12 tooltipped" data-position="top" data-delay="50" data-tooltip="إضافة منشور"><a class="waves-effect waves-light btn-large" href="#">إضافة منشور</a></div>
              <div class="col l3 s12 tooltipped" data-position="top" data-delay="50" data-tooltip="فريق العمل"><a class="waves-effect waves-light btn-large" href="#">فريق العمل</a></div>
              <div class="col l3 s12 tooltipped" data-position="top" data-delay="50" data-tooltip="الحسابات"><a class="waves-effect waves-light btn-large" href="#">الحسابات</a></div>
              <div class="col l3 s12 tooltipped" data-position="top" data-delay="50" data-tooltip="الأخبار"><a class="waves-effect waves-light btn-large" href="#">الأخبار</a></div>
            </div>
          </div>

          <h3 class="center-align">أعضاء الإدارة</h3>
          <div class="custom-responsive">
            <table class="striped hover centered">
              <thead><tr>
                <th>أسم المستخدم</th>
                <th>أسم الشخصية</th>
                <th>الصلاحيات</th>
                <th>اخر الدخول</th>
                <th>الحالة</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>adminaccount</td>
                <td>Admin</td>
                <td>أدمن</td>
                <td>2019-03-31</td>
                <td><i class="text-green material-icons">check</i></td>
              </tr>
              <tr>
                <td>devaccount</td>
                <td>Developer</td>
                <td>مطور</td>
                <td>2019-03-31</td>
                <td><i class="text-green material-icons">check</i></td>
              </tr>
              <tr>
                <td>gmaccount</td>
                <td>GameMaster</td>
                <td>جي ام</td>
                <td>2019-03-31</td>
                <td><i class="text-red material-icons">close</i></td>
              </tr>
              <tr>
                <td>gaaccount</td>
                <td>GameAssistant</td>
                <td>جي اي</td>
                <td>2019-03-31</td>
                <td><i class="text-green material-icons">check</i></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import xheader from '../layout/xHeader'

    export default {
        name: "home",
        components:{
          xheader
        }
    }
</script>

<style lang="sass" scoped>
  .fixed-action-btn
    z-index: 1000

  .small-box>.inner
    margin-right: 10px
</style>
