// ==|== Imports ===================================================================================
import axios from 'axios';

// ==|== Axios Client ==============================================================================
const apiClient = axios.create({
	baseURL: `https://www.jdhillen.io/api`,
	withCredentials: false, // This is the default
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	timeout: 10000
});

// ==|== Export ====================================================================================
export default {
	getAbout() {
		return apiClient.get('/resume/about/1/');
	},

	getContact() {
		return apiClient.get('/resume/contact/1/');
	},

	getResume() {
		return apiClient.get('/resume/');
	}
};
