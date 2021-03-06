// ==|== Imports ===================================================================================
import Vue from 'vue';
import App from './App.vue';
import router from './assets/js/router';
import store from './assets/js/store';

import './assets/js/sw';

import AnimatedVue from 'animated-vue';
import 'animate.css/animate.css';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

// ==|== AnimatedVue ===============================================================================
Vue.use(AnimatedVue);

// ==|== Vuetify ===================================================================================
Vue.use(Vuetify);

// ==|== FontAwesome ===============================================================================
library.add(faEnvelope, faGithub, faFacebook, faLinkedin, faInstagram, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

// ==|== Create App ================================================================================
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
