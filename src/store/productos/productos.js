import Axios from "axios";

const URL = "http://198.58.123.120:3005/productos";

export default {
    state: {
        productos: [],
        loading: false,
    },
    getters: {
        allProductos: state => state.productos
    },
    actions: {
        setProductosLoader({ commit }, loader) {
            commit("SET_PRODUCTOS_LOADER", loader)
        },
        getProductos({ commit, dispatch }) {
            dispatch("setProductosLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_PRODUCTOS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setProductosLoader", false))
        },
        async postProducto({ dispatch }, producto) {
            dispatch("setProductosLoader", true)
            Axios.post(URL, producto)
                .then(() => dispatch("getProductos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setProductosLoader", false))
        },
        async deleteProducto({ dispatch }, producto) {
            dispatch("setProductosLoader", true)
            Axios.delete(URL + `/${producto._key}`)
                .then(() => dispatch("getProductos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setProductosLoader", true))
        }
    },
    mutations: {
        SET_PRODUCTOS(state, productos) {
            state.productos = productos;
        },
        SET_PRODUCTOS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};