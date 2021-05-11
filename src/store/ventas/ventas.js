import Axios from "axios";

const URL = "http://198.58.123.120:3005/ventas";

export default {
    state: {
        ventas: [],
        loading: false,
        updateVenta: {},
        selectedVenta: {}
    },
    getters: {
        allVentas: state => state.ventas
    },
    actions: {
        setVentasLoader({ commit }, loader) {
            commit("SET_VENTAS_LOADER", loader)
        },
        getVentas({ commit, dispatch }) {
            dispatch("setVentasLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_VENTAS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVentasLoader", false))
        },
        async postVenta({ dispatch }, venta) {
            dispatch("setVentasLoader", true)
            Axios.post(URL, venta)
                .then(() => dispatch("getVentas"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVentasLoader", false))
        },
        async putVenta({ dispatch }, venta) {
            dispatch("setVentasLoader", true)
            Axios.put(URL, venta)
                .then(() => dispatch("getVentas"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVentasLoader", false))
        },
        async deleteVenta({ dispatch }, venta) {
            dispatch("setVentasLoader", true)
            Axios.delete(URL + `/${venta._key}`)
                .then(() => dispatch("getVentas"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setVentasLoader", true))
        }
    },
    mutations: {
        SET_VENTAS(state, ventas) {
            state.ventas = ventas;
        },
        SET_VENTAS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};