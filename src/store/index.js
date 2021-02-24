import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        username: null
    },
    mutations: {
        login(state, loginData) {
            state.token = loginData.Token;
            state.username = loginData.Username;
        },
        logout(state) {
            state.token = undefined;
            state.username = undefined;
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})