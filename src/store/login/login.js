import Axios from "axios";

const URL = "http://198.58.123.120:3005/auth/login";
// const URL = "http://192.168.1.108:3005/auth/login";

export default {
  state: {
    token: localStorage.getItem("user-token") || "",
    status: "",
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  actions: {
    login: ({ commit }, user) => {
      console.log(user);
      commit("AUTH_REQUEST");
      return new Promise((resolve, reject) => {
        Axios.post(URL, user)
          .then((resp) => {
            const token = resp.data.access_token;
            localStorage.setItem("token", token); // store the token in localstorage
            console.log(token);
            resolve();
            commit("AUTH_SUCCESS", token);
          })
          .catch((err) => {
            commit("AUTH_ERROR", err);
            reject(err);
            localStorage.removeItem("token"); // if the request fails, remove any possible user token if possible
          });
      });
    },
    logout: ({ commit }) => {
      return new Promise((resolve) => {
        commit("AUTH_LOGOUT");
        localStorage.removeItem("user-token"); // clear your user's token from localstorage
        resolve();
      });
    },
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = "loading";
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = "success";
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.status = "error";
    },
    AUTH_LOGOUT: (state) => {
      state.status = "error";
    },
  },
};
