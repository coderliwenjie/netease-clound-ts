import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/Index.vue'),
      children: [
        {
          path: 'recommendMusic',
          component: () => import('./views/recommend-music/Index.vue'),
        },
        {
          path: 'hotMusic',
          component: () =>  import('./views/hot-music/Index.vue'),
        },
        {
          path: 'search',
          component: () => import('./views/search/Index.vue'),
        },
      ],
    },
    {
      path: '*',
      name: 'index',
      component: () => import('./views/home/Index.vue'),
    },
    {
      path: '/playList',
      name: 'playList',
      component: () => import('./views/play-list/Index.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user/Index.vue'),
    },
  ],
})
