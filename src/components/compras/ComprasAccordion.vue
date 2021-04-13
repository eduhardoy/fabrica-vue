<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in compras"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.nombre }}</h3>
        </div>
        <div class="summary__buttons">
          <button @click="openEditModal(item)">
            <img src="./images/pencil.svg" alt="" />EDITAR
          </button>
          <button @click="openDelModal(item)">
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <ul class="details_list">
        <!-- 
             Proveedor:
             Articulo:
             Orden Compra:
             Comprobante:
          -->
        <li>
          <strong>Proveedor: </strong
          >{{ item.proveedor ? item.proveedor.nombre : null }}
        </li>
        <li>
          <strong>Articulo: </strong
          >{{ item.producto ? item.producto.nombre : null }}
        </li>
        <li><strong>Orden de compra: </strong>{{ item.ordenCompra }}</li>
        <li><strong>Comprobante: </strong>{{ item.comprobante }}</li>
      </ul>
    </details>
  </div>
  <ModalDelete ref="del">
    <template v-slot:body>
      <p>Esta seguro que desea eliminar?</p>
    </template>
    <template v-slot:footer>
      <button class="black_button" @click="$refs.del.closeModal()">
        CANCELAR
      </button>
      <button class="cancel_button" @click="deleteCompra(this.selectedCompra)">
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <select v-model="selectedCompra.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <select v-model="selectedCompra.producto">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCompra(this.selectedCompra)">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "ComprasAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedCompra: {},
    };
  },
  computed: {
    compras: function() {
      return this.$store.getters.allCompras;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
    subCategorias: function() {
      return this.$store.getters.allSubCategorias;
    },
  },
  methods: {
    openDelModal: function(compra) {
      Object.assign(this.selectedCompra, compra);
      this.selectedCompra = compra;
      this.$refs.del.openModal();
    },
    openEditModal: function(compra) {
      /* this.selectedCompra = compra; */
      Object.assign(this.selectedCompra, compra);
      this.selectedCompra.producto = compra.producto.nombre;
      this.selectedCompra.proveedor = compra.proveedor.nombre;
      this.selectedCompra.ordenCompra = compra.ordenCompra.nombre;
      this.selectedCompra.comprobante = compra.comprobante.nombre;
      this.$refs.edit.openModal();
    },
    postCompra: function() {
      console.log(this.selectedCompra);
      this.$store.dispatch("postCompra", this.selectedCompra);
      this.$refs.edit.closeModal();
    },
    deleteCompra: function() {
      this.$store.dispatch("deleteCompra", this.selectedCompra);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getOrdenesCompras");
    this.$store.dispatch("getComprobantes");
  },
};
</script>

<style></style>
