import { createStore } from 'vuex'
import proveedores from './proveedores/proveedores'
import categorias from './categorias/categorias'
import productos from './productos/productos'
import subcategorias from './subcategorias/subcategorias'
import partes from './partes/partes'
import clientes from './clientes/clientes'

export default createStore({
  modules: {
    proveedores,
    categorias,
    subcategorias,
    productos,
    partes,
    clientes
  }
})
