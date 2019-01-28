import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Find from './views/Find.vue';
import Toplist from './views/Toplist.vue';
import Mine from './views/Mine.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: 'discover',
      component: Find,
    },
    {
      path: 'discover/toplist',
      component: Toplist,
    },
    {
      path: 'my',
      component: Mine,
    },
  ],
});
