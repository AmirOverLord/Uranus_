import AddPost from '../components/posts/add';
import Posts from '../components/posts/index';
import EventPosts from '../components/posts/event';
import UpdatePosts from '../components/posts/update';
import NewsPosts from '../components/posts/news';
import EditPost from '../components/posts/edit';
import Home from '../components/pages/Home';

export default [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    meta: {
      auth: true, roles: ['Admin']
    }
  },
  {
    path: '/posts',
    name: 'All Posts',
    component: Posts,
    meta: {
      auth: true, roles: ['Admin']
    }
  },
  {
    path: '/posts/add',
    name: 'Add Post',
    component: AddPost,
    meta: {
      auth: true, roles: ['Admin']
    }
  },
  {
    path: '/posts/event',
    name: 'Event Posts',
    component: EventPosts,
    meta: {
      auth: true, roles: ['Admin']
    }
  },
  {
    path: '/posts/update',
    name: 'Update Posts',
    component: UpdatePosts,
    meta: {
      auth: true, roles: ['Admin']
    }
  },
  {
    path: '/posts/news',
    name: 'News Posts',
    component: NewsPosts,
    meta: {
      auth: true, roles: ['Admin']
    }
  },
  {
    path: '/posts/edit/:id',
    name: 'Edit Posts',
    component: EditPost,
    meta: {
      auth: true, roles: ['Admin']
    }
  }
]
