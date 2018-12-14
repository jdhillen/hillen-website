// ==|== Imports ===================================================================================
import Vue from 'vue'
import App from './App.vue'
import router from './assets/js/router'
import store from './assets/js/store'

import './assets/js/sw'

import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'


// ==|== AnimatedVue ===============================================================================
Vue.use(AnimatedVue);


// ==|== Create App ================================================================================
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
