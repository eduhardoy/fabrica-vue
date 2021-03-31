import Axios from "axios";

const URL = "http://190.106.132.208:3005/sub-categorias";

export default {
    state: {
        subcategorias: [],
        loading: false,
        updateSubcategoria: {},
        selectedSubcategoria: {}
    },
    getters: {
        allSubcategorias: state => state.subcategorias
    },
    actions: {
        setSubcategoriasLoader({ commit }, loader) {
            commit("SET_SUBCATEGORIAS_LOADER", loader)
        },
        getSubcategorias({ commit, dispatch }) {
            dispatch("setSubcategoriasLoader", true)
            Axios.get(URL)
                .then(result => commit("SET_SUBCATEGORIAS", result.data))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubcategoriasLoader", false))
        },
        async postSubcategoria({ dispatch }, subcategoria) {
            
            dispatch("setSubcategoriasLoader", true)
            Axios.post(URL, subcategoria)
                .then(() => dispatch("getSubcategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubcategoriasLoader", false))
        },
        async deleteSubcategoria({ dispatch }, subcategoria) {
            dispatch("setSubcategoriasLoader", true)
            Axios.delete(URL + `/${subcategoria._key}`)
                .then(() => dispatch("getSubcategorias"))
                .catch(err => console.log(err))
                .finally(() => dispatch("setSubcategoriasLoader", true))
        }
    },
    mutations: {
        SET_SUBCATEGORIAS(state, subcategorias) {
            state.subcategorias = subcategorias;
        },
        SET_SUBCATEGORIAS_LOADER(state, loader) {
            state.loader = loader;
        }
    },
};