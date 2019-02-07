// ==|== Imports ===================================================================================
import Vue from 'vue'
import App from './App.vue'
import router from './assets/js/router'
import store from './assets/js/store'

import './assets/js/sw'

import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faLinkedin, faInstagram, faTwitter, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


// ==|== AnimatedVue ===============================================================================
Vue.use(AnimatedVue);


// ==|== FontAwesome ===============================================================================
library.add(faCoffee, faEnvelope, faGithub, faFacebook, faLinkedin, faInstagram, faTwitter, faVuejs )

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


// ==|== Create App ================================================================================
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
