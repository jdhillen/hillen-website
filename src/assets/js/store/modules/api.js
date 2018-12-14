// ==|== Imports ===================================================================================
import Vapi from 'vuex-rest-api';


// ==|== Get Photos ================================================================================
const api = new Vapi({
    baseURL: 'https://jsonplaceholder.typicode.com',
    state: {
        users: []
    }
}).get({
    action: "getUsers",
    property: "users",
    path: "/users"
}).getStore();


// ==|== Export ====================================================================================
export default api;