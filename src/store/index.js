import { createStore } from 'vuex'
import proveedores from './proveedores/proveedores'
import categorias from './categorias/categorias'
import productos from './productos/productos'
import subcategorias from './subcategorias/subcategorias'
import partes from './partes/partes'
import clientes from './clientes/clientes'
import compras from './compras/compras'
import ventas from './ventas/ventas'
import presupuestos from './presupuestos/presupuestos'

export default createStore({
  modules: {
    proveedores,
    categorias,
    subcategorias,
    productos,
    partes,
    clientes,
    compras,
    ventas,
    presupuestos
  }
})
