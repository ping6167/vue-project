import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Chart from './views/Chart.vue'
import Work from './views/Work.vue'
import Home from './views/Home.vue'
import Upload from './views/Upload.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/home',
      name: 'home',
      component: Home
    },
    {

      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/',
      name: 'login',
      component: Login

    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart

    }
  ]
})
