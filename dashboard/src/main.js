// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Auth from './helpers/Auth'
import config from './Config'
import VueGoodTable from 'vue-good-table'
import VuePaginate from 'vue-paginate'

Vue.use(VueGoodTable);
Vue.use(VuePaginate);
Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  // Page Title Name
  let title = to.name;
  const keys = Object.keys(to.params);
  if (keys.length) {
    title = `${to.name}: ${to.params[keys[0]]}`;
    if (to.params[keys[1]]) {
      title += ` ${to.params[keys[1]]}`;
    }
  }
  document.title = `${title} | ${config.site_name}`;

  // Auth Check
  if (!to.meta.auth) return next();

  if (!Auth.check(to.meta.roles)) return next({name: 'Login'});

    next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    'App' : {
      template: '<div><router-view></router-view></div>'
    }
  },
});
