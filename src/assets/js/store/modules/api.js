// ==|== Imports ===================================================================================
import Service from '@/assets/js/services';

// ==|== Store =====================================================================================
var api = {
	// ==|== NameSpaced ============================================================================
	namespaced: true,

	// ==|== State =================================================================================
	state: {
		about: [],
		contact: [],
		resume: [],
		social: []
	},

	// ==|== Actions ===============================================================================
	actions: {
		fetchAbout({ commit }) {
			return Service.getAbout().then(response => {
				commit('SET_ABOUT', response.data);
			});
		},

		fetchContact({ commit }) {
			return Service.getContact().then(response => {
				commit('SET_CONTACT', response.data);
			});
		},

		fetchResume({ commit }) {
			return Service.getResume().then(response => {
				commit('SET_RESUME', response.data);
				return response.data;
			});
		},

		fetchSocial({ commit }) {
			return Service.getSocial().then(response => {
				commit('SET_SOCIAL', response.data);
				return response.data;
			});
		}
	},

	// ==|== Mutations =============================================================================
	mutations: {
		SET_ABOUT(state, value) {
			state.about = value;
		},

		SET_CONTACT(state, value) {
			state.contact = value;
		},

		SET_RESUME(state, value) {
			state.resume = value;
		},

		SET_SOCIAL(state, value) {
			state.social = value;
		}
	},

	// ==|== Getters ===============================================================================
	getters: {}
};

// ==|== Export ====================================================================================
export default api;
