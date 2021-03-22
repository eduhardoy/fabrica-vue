import Axios from "axios";

const URL = "http://190.106.132.208:3001/";

export default {
    state: {
        proveedores: [],
        updateProveedor: {},
        selectedProveedor: {}
    },
    getters: {
        allProveedores: state => state.proveedores
    },
    actions: {
        getProveedores({ commit, dispatch }) {
            // dispatch("setLoader", true)
            // Axios.get(URL + )
        }
    },
    mutations: {
        SET_TOKEN(state, auth) {
            localStorage.setItem("LoggedUser", auth.token);
            state.auth = { ...auth };
            router.push("/admin");
        },
        DEL_TOKEN(state) {
            localStorage.removeItem("LoggedUser")
            state.auth = {}
            location.reload();
        }
    },
};