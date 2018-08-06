import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Banner from '@/pages/banner';
import List from '@/pages/list/list';
import DialogDemo from '@/pages/dialogDemo/dialogDemo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/dialogDemo',
      name: 'DialogDemo',
      component: DialogDemo
    },
  ]
});
