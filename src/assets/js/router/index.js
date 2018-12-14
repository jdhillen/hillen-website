// ==|== Imports ===================================================================================
import Vue from 'vue'
import Router from 'vue-router'


// ==|== VueRouter =================================================================================
Vue.use(Router);


// ==|== Export ====================================================================================
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home').default
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: require('@/views/About').default
    }
  ]
})
