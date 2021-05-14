import Axios from "axios";
import url from "../../www/url";

const URL = url + "/clientes";

export default {
    state: {
        clientes: [],
        loading: false,
        updateCliente: {},
        selectedCliente: {}
    },
    getters: {
        allClientes: state => state.clientes
    },
    actions: {
        setClientesLoader({ commit }, loader) {
            commit("SET_CLIENTES_LOADER", loader)
        },
        getClientes({ commit, dispatch }) {
            dispatch("setClientesLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_CLIENTES", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setClientesLoader", false))
        },
        async postCliente({ dispatch }, cliente) {
            dispatch("setClientesLoader", true)
            Axios.post(URL, cliente)
                .then(() => dispatch("getClientes"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setClientesLoader", false))
        },
        async putCliente({ dispatch }, cliente) {
            dispatch("setClientesLoader", true)
            Axios.put(URL, cliente)
                .then(() => dispatch("getClientes"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setClientesLoader", false))
        },
        async deleteCliente({ dispatch }, cliente) {
            dispatch("setClientesLoader", true)
            Axios.delete(URL + `/${cliente._key}`)
                .then(() => dispatch("getClientes"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setClientesLoader", true))
        }
    },
    mutations: {
        SET_CLIENTES(state, clientes) {
            state.clientes = clientes;
        },
        SET_CLIENTES_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};