import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Articulos from "../views/Articulos.vue";
import Productos from "../views/Productos.vue";
import Proveedores from "../views/Proveedores.vue";

const routes = [
  {
    path: "/",
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
    path: "/proveedores",
    name: "Proveedores",
    component: Proveedores,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
