import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Articulos from "../views/Articulos.vue";
import Productos from "../views/Productos.vue";
import Partes from "../views/Partes.vue";
import Proveedores from "../views/Proveedores.vue";
import Categorias from "../views/Categorias.vue";
import SubCategorias from "../views/SubCategorias.vue";
import Clientes from "../views/Clientes.vue";
import Compras from "../views/Compras.vue";
import Ventas from "../views/Ventas.vue";
import NewVenta from "../views/NewVenta.vue";
import PresupuestoFab from "../views/PresupuestoFab.vue";
import Presupuesto from "../views/Presupuesto.vue";
import PresupuestoGade from "../views/PresupuestoGade.vue";
import Presupuestos from "../views/Presupuestos.vue";
import Gastos from "../views/Gastos.vue";
import ContaEstad from "../views/ContaEstad.vue";
import Contabilidad from "../views/Contabilidad.vue";
import Estadistica from "../views/Estadistica.vue";
import Inventario from "../views/Inventario.vue";
import Factura from "../views/FacturaView.vue";
import Users from "../views/Users.vue";

import Sucursales from "../views/Sucursales.vue";

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
  {
    path: "/clientes",
    name: "Clientes",
    component: Clientes,
  },
  {
    path: "/compras",
    name: "Compras",
    component: Compras,
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: Ventas,
  },
  {
    path: "/gastos",
    name: "Gastos",
    component: Gastos,
  },
  {
    path: "/venta",
    name: "NewVenta",
    component: NewVenta,
  },
  //presupuestos
  {
    path: "/presupuesto",
    name: "Presupuesto",
    component: Presupuesto,
  },
  //model contabilidad-estadistica
  {
    path: "/contaEstad",
    name: "ContaEstad",
    component: ContaEstad,
  },
  //contabilidad
  {
    path: "/contabilidad",
    name: "Contabilidad",
    component: Contabilidad,
  },
  //estadistica
  {
    path: "/estadistica",
    name: "Estadistica",
    component: Estadistica,
  },
  //inventario
  {
    path: "/inventario",
    name: "Inventario",
    component: Inventario,
  },
  //sucursales
  {
    path: "/sucursales-menu",
      name: "Sucursales",
      component: Sucursales,
  },
  {
    path: "/presupuestof",
    name: "PresupuestoFab",
    component: PresupuestoFab,
  },
  {
    path: "/presupuestog",
    name: "PresupuestoGade",
    component: PresupuestoGade,
  },
  {
    path: "/presupuestos",
    name: "Presupuestos",
    component: Presupuestos,
  },
  {
    path: "/factura",
    name: "Factura",
    component: Factura,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
