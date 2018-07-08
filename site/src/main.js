// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import VueGoodTable from 'vue-good-table'
import config from "./Config";

Vue.use(VueGoodTable);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let title = to.name;
  const keys = Object.keys(to.params);
  if (keys.length) {
    title = `${to.name}: ${to.params[keys[0]]}`;
    if (to.params[keys[1]]) {
      title += ` ${to.params[keys[1]]}`;
    }
  }
  document.title = `${title} | ${config.site_name}`;
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
