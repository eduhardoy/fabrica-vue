import Axios from "axios";
import url from "../../www/url";

const URL = url + "/vendedores";

export default {
    state: {
        vendedores: [],
        loading: false,
        updateVendedor: {},
        selectedVendedor: {}
    },
    getters: {
        allVendedores: state => state.vendedores
    },
    actions: {
        setVendedoresLoader({ commit }, loader) {
            commit("SET_VENDEDORES_LOADER", loader)
        },
        getVendedores({ commit, dispatch }) {
            dispatch("setVendedoresLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_VENDEDORES", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVendedoresLoader", false))
        },
        async postVendedor({ dispatch }, vendedor) {
            dispatch("setVendedoresLoader", true)
            Axios.post(URL, vendedor)
                .then(() => dispatch("getVendedores"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVendedoresLoader", false))
        },
        async deleteVendedor({ dispatch }, vendedor) {
            dispatch("setVendedoresLoader", true)
            Axios.delete(URL + `/${vendedor._key}`)
                .then(() => dispatch("getVendedores"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVendedoresLoader", true))
        }
    },
    mutations: {
        SET_VENDEDORES(state, vendedores) {
            state.vendedores = vendedores;
        },
        SET_VENDEDORES_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};