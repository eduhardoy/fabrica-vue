import Axios from "axios";

const URL = "http://198.58.123.120:3005/subCategorias";

export default {
    state: {
        subCategorias: [],
        loading: false,
        updateSubcategoria: {},
        selectedSubcategoria: {}
    },
    getters: {
        allSubCategorias: state => state.subCategorias
    },
    actions: {
        setSubCategoriasLoader({ commit }, loader) {
            commit("SET_SUBCATEGORIAS_LOADER", loader)
        },
        getSubCategorias({ commit, dispatch }) {
            dispatch("setSubCategoriasLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_SUBCATEGORIAS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubCategoriasLoader", false))
        },
        async postSubCategoria({ dispatch }, subcategoria) {
            dispatch("setSubCategoriasLoader", true)
            Axios.post(URL, subcategoria)
                .then(() => dispatch("getSubCategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubCategoriasLoader", false))
        },
        async putSubCategoria({ dispatch }, subcategoria) {
            dispatch("setSubCategoriasLoader", true)
            Axios.put(URL, subcategoria)
                .then(() => dispatch("getSubCategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubCategoriasLoader", false))
        },
        async deleteSubCategoria({ dispatch }, subcategoria) {
            dispatch("setSubCategoriasLoader", true)
            Axios.delete(URL + `/${subcategoria._key}`)
                .then(() => dispatch("getSubCategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubCategoriasLoader", true))
        }
    },
    mutations: {
        SET_SUBCATEGORIAS(state, subCategorias) {
            state.subCategorias = subCategorias;
        },
        SET_SUBCATEGORIAS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};