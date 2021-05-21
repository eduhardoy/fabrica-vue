import Axios from "axios";
import url from "../../www/url";

const URL = url + "/users";

export default {
    state: {
        users: [],
        loading: false,
        updateUser: {},
        selectedUser: {}
    },
    getters: {
        allUsers: state => state.users
    },
    actions: {
        setUsersLoader({ commit }, loader) {
            commit("SET_USERS_LOADER", loader)
        },
        getUsers({ commit, dispatch }) {
            dispatch("setUsersLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_USERS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setUsersLoader", false))
        },
        async postUser({ dispatch }, user) {
            dispatch("setUsersLoader", true)
            Axios.post(URL, user)
                .then(() => dispatch("getUsers"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setUsersLoader", false))
        },
        async putUser({ dispatch }, user) {
            dispatch("setUsersLoader", true)
            Axios.put(URL, user)
                .then(() => dispatch("getUsers"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setUsersLoader", false))
        },
        async deleteUser({ dispatch }, user) {
            dispatch("setUsersLoader", true)
            Axios.delete(URL + `/${user._key}`)
                .then(() => dispatch("getUsers"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setUsersLoader", true))
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_USERS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};