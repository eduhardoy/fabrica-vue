import Axios from "axios";
import url from "../../www/url";

const URL = url + "/presupuestos";

export default {
    state: {
        presupuestos: [],
        loading: false,
        updatePresupuesto: {},
        selectedPresupuesto: {}
    },
    getters: {
        allPresupuestos: state => state.presupuestos
    },
    actions: {
        setPresupuestosLoader({ commit }, loader) {
            commit("SET_PRESUPUESTOS_LOADER", loader)
        },
        getPresupuestos({ commit, dispatch }) {
            dispatch("setPresupuestosLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_PRESUPUESTOS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPresupuestosLoader", false))
        },
        async postPresupuesto({ dispatch }, presupuesto) {
            dispatch("setPresupuestosLoader", true)
            Axios.post(URL, presupuesto)
                .then(() => dispatch("getPresupuestos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPresupuestosLoader", false))
        },
        async putPresupuesto({ dispatch }, presupuesto) {
            dispatch("setPresupuestosLoader", true)
            Axios.put(URL, presupuesto)
                .then(() => dispatch("getPresupuestos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPresupuestosLoader", false))
        },
        async deletePresupuesto({ dispatch }, presupuesto) {
            dispatch("setPresupuestosLoader", true)
            Axios.delete(URL + `/${presupuesto._key}`)
                .then(() => dispatch("getPresupuestos"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setPresupuestosLoader", true))
        },
    },
    mutations: {
        SET_PRESUPUESTOS(state, presupuestos) {
            state.presupuestos = presupuestos;
        },
        SET_PRESUPUESTOS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};