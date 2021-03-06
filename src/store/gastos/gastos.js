import Axios from "axios";
import url from "../../www/url";

const URL = url + "/gastos";

export default {
    state: {
        gastos: [],
        loading: false,
        updateGasto: {},
        selectedGasto: {}
    },
    getters: {
        allGastos: state => state.gastos
    },
    actions: {
        setGastosLoader({ commit }, loader) {
            commit("SET_GASTOS_LOADER", loader)
        },
        getGastos({ commit, dispatch }) {
            dispatch("setGastosLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_GASTOS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setGastosLoader", false))
        },
        async postGasto({ dispatch }, gasto) {
            dispatch("setGastosLoader", true)
            Axios.post(URL, gasto)
                .then(() => dispatch("getGastos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setGastosLoader", false))
        },
        async deleteGasto({ dispatch }, gasto) {
            dispatch("setGastosLoader", true)
            Axios.delete(URL + `/${gasto._key}`)
                .then(() => dispatch("getGastos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setGastosLoader", true))
        }
    },
    mutations: {
        SET_GASTOS(state, gastos) {
            state.gastos = gastos;
        },
        SET_GASTOS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};