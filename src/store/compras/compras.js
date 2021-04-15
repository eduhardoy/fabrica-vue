import Axios from "axios";

const URL = "http://198.58.123.120:3005/compras";

export default {
    state: {
        compras: [],
        loading: false,
        updateCompra: {},
        selectedCompra: {}
    },
    getters: {
        allCompras: state => state.compras
    },
    actions: {
        setComprasLoader({ commit }, loader) {
            commit("SET_COMPRAS_LOADER", loader)
        },
        getCompras({ commit, dispatch }) {
            dispatch("setComprasLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_COMPRAS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setComprasLoader", false))
        },
        async postCompra({ dispatch }, compra) {
            dispatch("setComprasLoader", true)
            Axios.post(URL, compra)
                .then(() => dispatch("getCompras"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setComprasLoader", false))
        },
        async deleteCompra({ dispatch }, compra) {
            dispatch("setComprasLoader", true)
            Axios.delete(URL + `/${compra._key}`)
                .then(() => dispatch("getCompras"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setComprasLoader", true))
        }
    },
    mutations: {
        SET_COMPRAS(state, compras) {
            state.compras = compras;
        },
        SET_COMPRAS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};