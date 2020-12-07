// ==|== Imports ===================================================================================
import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import store from '@/assets/js/store';

// ==|== VueRouter =================================================================================
Vue.use(Router);

// ==|== Router ====================================================================================
const router = new Router({
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
			path: '/work',
			name: 'work',
			component: require('@/views/Work').default
		},
		{
			path: '/resume',
			name: 'resume',
			component: require('@/views/Resume').default,
			props: true,
			beforeEnter(routeTo, routeFrom, next) {
				store.dispatch('api/fetchResume').then(resume => {
					routeTo.params.resume = resume;
					next();
				});
			}
		},
		{
			path: '/404',
			name: '404',
			component: require('@/views/404').default
		},
		{
			path: '*',
			redirect: { name: '404' }
		}
	]
});

// ==|== Route Guards ==============================================================================
router.beforeEach((routeTo, routeFrom, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

// ==|== Export ====================================================================================
export default router;
