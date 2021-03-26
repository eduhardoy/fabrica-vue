import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Articulos from "../views/Articulos.vue";
import Productos from "../views/Productos.vue";
import Partes from "../views/Partes.vue";
import Proveedores from "../views/Proveedores.vue";
import Categorias from "../views/Categorias.vue";
import SubCategorias from "../views/SubCategorias.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/articulos",
    name: "Articulos",
    component: Articulos,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
  {
    path: "/test",
    name: "Test",
    component: () => require("../views/Test.vue"),
  },
  {
    path: "/proveedores",
    name: "Proveedores",
    component: Proveedores,
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: Categorias,
  },
  {
    path: "/subcategorias",
    name: "SubCategorias",
    component: SubCategorias,
  },
  {
    path: "/partes",
    name: "Partes",
    component: Partes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
