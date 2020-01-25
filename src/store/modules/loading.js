import {TOGGLE_LOADING, SET_LOADING} from '../mutation-types'


const state = {
    loading: false
};
const getters = {
    getLoadingState: (state) => state.loading,
};

const mutations = {
    [TOGGLE_LOADING]: (state, payload) => {
        state.loading = payload;
    },
    [SET_LOADING]: (state, payload = false) => {
        state.loading = payload;
    }
};

const actions = {
    toggleLoading: ({commit}, payload = false) => {
        console.log('toggle');
        commit(TOGGLE_LOADING, payload);
    },
    showPreLoader: ({commit}, payload = false) => {
        console.log('setloading');
        commit(SET_LOADING, payload)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
