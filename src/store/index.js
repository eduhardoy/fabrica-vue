import { createStore } from 'vuex'
import proveedores from './proveedores/proveedores'
import categorias from './categorias/categorias'
import productos from './productos/productos'

export default createStore({
  modules: {
    proveedores,
    categorias,
    productos
  }
})
