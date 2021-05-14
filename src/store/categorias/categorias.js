import axios from "axios";
import Axios from "axios";

const URL = "http://198.58.123.120:3005/categorias";
// const URL = "http://192.168.1.108:3005/categorias";

export default {
    state: {
        categorias: [],
        loading: false,
        updateCategoria: {},
        selectedCategoria: {}
    },
    getters: {
        allCategorias: state => state.categorias
    },
    actions: {
        setCategoriasLoader({ commit }, loader) {
            commit("SET_CATEGORIAS_LOADER", loader)
        },
        getCategorias({ commit, dispatch }) {
            dispatch("setCategoriasLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_CATEGORIAS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCategoriasLoader", false))
        },
        async postCategoria({ dispatch }, categoria) {
            dispatch("setCategoriasLoader", true)
            Axios.post(URL, categoria)
                .then(() => dispatch("getCategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCategoriasLoader", false))
        },
        async putCategoria({ dispatch }, categoria) {
            dispatch("setCategoriasLoader", true)
            axios.put(URL, categoria)
                .then(() => dispatch("getCategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCategoriasLoader", false))
        },
        async deleteCategoria({ dispatch }, categoria) {
            dispatch("setCategoriasLoader", true)
            Axios.delete(URL + `/${categoria._key}`)
                .then(() => dispatch("getCategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setCategoriasLoader", true))
        }
    },
    mutations: {
        SET_CATEGORIAS(state, categorias) {
            state.categorias = categorias;
        },
        SET_CATEGORIAS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};