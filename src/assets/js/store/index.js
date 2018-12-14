// ==|== Imports ===================================================================================
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'


// ==|== Vuex ======================================================================================
Vue.use(Vuex)


// ==|== Store =====================================================================================
export default new Vuex.Store({
    modules,
})