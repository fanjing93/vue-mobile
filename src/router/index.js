import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Banner from '@/pages/banner';
import List from '@/pages/list/list';
import DialogDemo from '@/pages/dialogDemo/dialogDemo';
import MessageBox from '@/pages/messageBox/messageBox';
import Toast from '@/pages/toast/toast';

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
    {
      path: '/messageBox',
      name: 'MessageBox',
      component: MessageBox
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
  ]
});
