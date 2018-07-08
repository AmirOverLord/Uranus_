import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/pages/Home';
import Register from  '../components/user/Register';
import AccountRecovery from '../components/user/AccountRecovery'
import PasswordReset from '../components/user/PasswordReset'
import Download from '../components/pages/download'
import Rank from '../components/pages/rank'
import Post from '../components/pages/post'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/reset/account',
      name: 'Account Recovery',
      component: AccountRecovery
    },
    {
      path: '/reset/password',
      name: 'Password Reset',
      component: PasswordReset
    },
    {
      path: '/posts/:id',
      name: 'Post View',
      component: Post
    }
  ]
})
