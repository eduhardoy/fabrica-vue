import { createStore } from 'vuex'
import proveedores from './proveedores/proveedores'
import categorias from './categorias/categorias'

export default createStore({
  modules: {
    proveedores,
    categorias
  }
})
