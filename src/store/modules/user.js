import {SET_USER, SET_USERS} from "../mutation-types";

const state = {
    users: [],
    currentUser: {}
};
const getters = {
    getUserToken: (state) => {
        return state.currentUser && state.currentUser.token || localStorage.getItem('userToken');
    }
};

const mutations = {
    [SET_USERS]: (state, payload) => {
        state.users = payload;
    },
    [SET_USER]: (state, payload) => {
        state.currentUser = payload
    }
};

const actions = {
    login({commit}, payload) {
        // eslint-disable-next-line no-console
        console.log('set user', payload);
        commit(SET_USER, payload)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
