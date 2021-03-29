import Axios from "axios";

const URL = "http://190.106.132.208:3005/proveedores";
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
        async postProveedor({ dispatch }, proveedor) {

            console.log(proveedor)
            await Promise.all(
                proveedor.cuentas.map(async CBU => {
                    return (await Axios.post(URLBANCO, { ...CBU })).data
                }),
            ).then(data => {
                Axios.post(URL, { ...proveedor, cuentas: data.map(e => e.id) })
                    .then(() => dispatch("getProveedores"))
            })

        },
        async putProveedor({ dispatch }, proveedor) {
            /**
             * recorrer CUENTA_BANCO y prguntar
             * si existe, buscar y editar
             * si no existe, crear y relacionar
             * si sobra, buscar y eliminar
             */
            console.log('PROVEEDOR', proveedor)
            const dataInDb = await (await Axios.get(URL + `/${proveedor._key}`)).data

            await Promise.all(
                [dataInDb.cuentas.filter(e => !proveedor.cuentas.find(({ id }) => e.id == id))],
            ).then(result => {
                console.log("SOBRA, BORRAR", result[0])
                result[0].map(async e =>
                    await Axios.delete(URLBANCO + `/${e.id}`)
                )
            })

            await Promise.all(
                proveedor.cuentas.map(async e => {
                    const existe = e.id ? await (await Axios.get(URLBANCO + `/${e.id}`)).data : null

                    if (existe != null) {
                        console.log("EXISTE, ACTUALIZAR", e)
                        return await (await Axios.put(URLBANCO + `/${e.id}`, e)).data
                    } else {
                        console.log("NO EXISTE, CREAR", e)
                        return await (await Axios.post(URLBANCO, e)).data
                    }
                })
            ).then(async result => {
                console.log("RELACIONAR", result)
                proveedor["cuentas"] = result.map(e => e.id)
                await Axios.put(URL + `/${proveedor._key}`, proveedor)
                dispatch("getProveedores")
            })
        },
        async deleteProveedor({ dispatch }, proveedor) {

            await Promise.all(
                proveedor.cuentas.map(e => {
                    Axios.delete(URLBANCO + `/${e.id}`)
                })
            ).then(() => {
                Axios.delete(URL + `/${proveedor._key}`)
                    .then(() => dispatch("getProveedores"))
            })

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