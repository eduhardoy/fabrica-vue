import Axios from "axios";

const URL = "http://198.58.123.120:3005/partes";

export default {
    state: {
        partes: [],
        loading: false,
        updateParte: {},
        selectedParte: {}
    },
    getters: {
        allPartes: state => state.partes
    },
    actions: {
        setPartesLoader({ commit }, loader) {
            commit("SET_PARTES_LOADER", loader)
        },
        getPartes({ commit, dispatch }) {
            dispatch("setPartesLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_PARTES", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPartesLoader", false))
        },
        async postParte({ dispatch }, parte) {
            dispatch("setPartesLoader", true)
            Axios.post(URL, parte)
                .then(() => dispatch("getPartes"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPartesLoader", false))
        },
        async deleteParte({ dispatch }, parte) {
            dispatch("setPartesLoader", true)
            Axios.delete(URL + `/${parte._key}`)
                .then(() => dispatch("getPartes"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPartesLoader", true))
        }
    },
    mutations: {
        SET_PARTES(state, partes) {
            state.partes = partes;
        },
        SET_PARTES_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};