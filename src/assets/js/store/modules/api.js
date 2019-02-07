// ==|== Imports ===================================================================================
import Vapi from 'vuex-rest-api';


// ==|== Get Photos ================================================================================
const api = new Vapi({
    baseURL: 'https://www.jdhillen.io/api',
    state: {
        about: [],
        contact: []
    }
}).get({
    action: "getAbout",
    property: "about",
    path: "/resume/about/1/"
}).get({
    action: "getContact",
    property: "contact",
    path: "/resume/contact/1/"
}).getStore();


// ==|== Export ====================================================================================
export default api;