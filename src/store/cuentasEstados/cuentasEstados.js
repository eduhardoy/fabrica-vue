import Axios from "axios";

const URL = "http://198.58.123.120:3005/cuentas-estados";
// const URL = "http://192.168.1.108:3005/cuentas-estados";

export default {
    state: {
        cuentasEstados: [],
        loading: false,
        updateCuentaEstado: {},
        selectedCuentaEstado: {}
    },
    getters: {
        allCuentasEstados: state => state.cuentasEstados
    },
    actions: {
        setCuentasEstadosLoader({ commit }, loader) {
            commit("SET_CUENTASESTADOS_LOADER", loader)
        },
        getCuentasEstados({ commit, dispatch }) {
            dispatch("setCuentasEstadosLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_CUENTASESTADOS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCuentasEstadosLoader", false))
        },
        async postCuentaEstado({ dispatch }, cuentaEstado) {

            dispatch("setCuentasEstadosLoader", true)
            Axios.post(URL, cuentaEstado)
                .then(() => dispatch("getCuentasEstados"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCuentasEstadosLoader", false))
        },
        async deleteCuentaEstado({ dispatch }, cuentaEstado) {
            dispatch("setCuentasEstadosLoader", true)
            Axios.delete(URL + `/${cuentaEstado._key}`)
                .then(() => dispatch("getCuentasEstados"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCuentasEstadosLoader", true))
        }
    },
    mutations: {
        SET_CUENTASESTADOS(state, cuentasEstados) {
            state.cuentasEstados = cuentasEstados;
        },
        SET_CUENTASESTADOS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};