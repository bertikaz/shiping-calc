
const state = {
    users: [],
    currentUser: {

    }
};
const getters = {
    getUserToken: (state) => {
        return state.currentUser.token || localStorage.getItem('token')
    }
};

const mutations = {

};

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions
};
