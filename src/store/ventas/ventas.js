import Axios from "axios";
import url from "../../www/url";

const URL = url + "/ventas";

export default {
  state: {
    ventas: [],
    loading: false,
    updateVenta: {},
    selectedVenta: {},
  },
  getters: {
    allVentas: (state) => state.ventas,
    getSelectVenta: (state) => state.selectedVenta,
  },
  actions: {
    setVentasLoader({ commit }, loader) {
      commit("SET_VENTAS_LOADER", loader);
    },
    setSelectedVenta({ commit }, venta) {
      commit("SET_SELECTED_VENTA", venta);
    },
    getVentas({ commit, dispatch }) {
      dispatch("setVentasLoader", true);
      Axios.get(URL)
        .then((result) => commit("SET_VENTAS", result.data))
        .catch((err) => console.log(err))
        .finally(() => dispatch("setVentasLoader", false));
    },
    async postVenta({ dispatch }, venta) {
      dispatch("setVentasLoader", true);
      Axios.post(URL, venta)
        .then(() => dispatch("getVentas"))
        .catch((err) => console.log(err))
        .finally(() => dispatch("setVentasLoader", false));
    },
    async putVenta({ dispatch }, venta) {
      dispatch("setVentasLoader", true);
      Axios.put(URL, venta)
        .then(() => dispatch("getVentas"))
        .catch((err) => console.log(err))
        .finally(() => dispatch("setVentasLoader", false));
    },
    async deleteVenta({ dispatch }, venta) {
      dispatch("setVentasLoader", true);
      Axios.delete(URL + `/${venta._key}`)
        .then(() => dispatch("getVentas"))
        .catch((err) => console.log(err))
        .finally(() => dispatch("setVentasLoader", true));
    },
  },
  mutations: {
    SET_VENTAS(state, ventas) {
      state.ventas = ventas;
    },
    SET_VENTAS_LOADER(state, loader) {
      state.loader = loader;
    },
    SET_SELECTED_VENTA(state, venta) {
      state.selectedVenta = venta;
    },
  },
};
