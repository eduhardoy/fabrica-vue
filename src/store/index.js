import { createStore } from 'vuex'
import proveedores from './proveedores/proveedores'
import categorias from './categorias/categorias'
import subcategorias from './subcategorias/subcategorias'
import partes from './partes/partes'

export default createStore({
  modules: {
    proveedores,
    categorias,
    subcategorias,
    partes
  }
})
