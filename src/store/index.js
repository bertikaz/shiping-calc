import Vue from 'vue'
import Vuex from 'vuex'

import Loading from './modules/loading';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Loading,
        User
    }
})
