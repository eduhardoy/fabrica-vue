import Axios from "axios";

const URL = "http://190.106.132.208:3002/proveedores";
const URLBANCO = "http://190.106.132.208:3002/cuentas-bancos";

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
        async postProveedor( proveedor) {


            await Promise.all([
                await proveedor.CBU.forEach(async cbu => {
                    const result = await (await Axios.post(URLBANCO, { ...cbu })).data
                    return result.id
                }),
            ]).then(data => {
                console.log(data)
            })
            // Axios.post(URL, { ...proveedor, CUENTA_BANCO: cuentas })
            //     .then(() => dispatch("getProveedores"))
        },
        putProveedor({ dispatch }, proveedor) {
            Axios.post(URL + `/${proveedor.id}`, proveedor)
                .then(() => dispatch("getProveedores"))
        },
        deleteProveedor({ dispatch }, proveedor) {
            proveedor.CUENTA_BANCO.forEach(element => {
                Axios.delete(URLBANCO + `/${element.id}`)
                    .then(() => null)
            });
            Axios.delete(URL + `/${proveedor.id}`)
                .then(() => dispatch("getProveedores"))
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