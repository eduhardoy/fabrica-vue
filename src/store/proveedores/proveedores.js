import Axios from "axios";

const URL = "http://198.58.123.120:3005/proveedores";

export default {
    state: {
        proveedores: [],
        loading: false,
        updateProveedor: {},
        selectedProveedor: {}
    },
    getters: {
        allProveedores: state => state.proveedores
    },
    actions: {
        setProveedoresLoader({ commit }, loader) {
            commit("SET_PROVEEDORES_LOADER", loader)
        },
        getProveedores({ commit, dispatch }) {
            dispatch("setProveedoresLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_PROVEEDORES", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setProveedoresLoader", false))
        },
        async postProveedor({ dispatch }, proveedor) {
            dispatch("setProveedoresLoader", true)
            Axios.post(URL, proveedor)
                .then(() => dispatch("getProveedores"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setProveedoresLoader", false))
        },
        async deleteProveedor({ dispatch }, proveedor) {
            dispatch("setProveedoresLoader", true)
            Axios.delete(URL + `/${proveedor._key}`)
                .then(() => dispatch("getProveedores"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setProveedoresLoader", true))
        }
    },
    mutations: {
        SET_PROVEEDORES(state, proveedores) {
            state.proveedores = proveedores;
        },
        SET_PROVEEDORES_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};