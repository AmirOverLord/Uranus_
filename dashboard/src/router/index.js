import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/pages/Login';
import Admin from '../Admin'
import AdminChildren from './admin'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Admin,
      children: AdminChildren
    },
  ]
})
