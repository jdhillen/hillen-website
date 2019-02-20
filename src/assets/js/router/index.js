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
      component: require('@/views/About').default
    },
    {
      path: '/resume',
      name: 'resume',
      component: require('@/views/Resume').default
    }
  ]
})
