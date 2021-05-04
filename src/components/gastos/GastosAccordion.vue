<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      
    >
      <summary>
        <div class="summary__title">
          <h3>Test maquetado</h3>
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
        
        <!-- <li>
          <strong>Proveedor: </strong
          >{{ item.proveedor ? item.proveedor.nombre : null }}
        </li>
        <li>
          <strong>Articulo: </strong
          >{{ item.producto ? item.producto.nombre : null }}
        </li> -->
        <li><strong>Esperar endpoints</strong></li>
        <li><strong>Concepto: </strong>objeto</li>
        <li><strong>Empresa: </strong></li>
        <li><strong>Direccion: </strong></li>
        <li><strong>Telefono: </strong></li>
        <li><strong>Importe: </strong></li>
        <li><strong>Fecha: </strong></li>
        <li><strong>Detalle: </strong></li>
        <li><strong>Sucursal: </strong></li>
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
      <button class="cancel_button" @click="deleteGasto(this.selectedGasto)">
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <!-- <select v-model="selectedGasto.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <select v-model="selectedGasto.producto">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select> -->
      <!-- <input v-model="selectedGasto." placeholder="" />
      <input v-model="selectedGasto." placeholder="" />
      <input v-model="selectedGasto." placeholder="" />
      <input v-model="selectedGasto." placeholder="" /> -->
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postGasto(this.selectedGasto)">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "GastosAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedGasto: {},
    };
  },
  computed: {
    gastos: function() {
      return this.$store.getters.allGastos;
    },
   /*  productos: function() {
      return this.$store.getters.allProductos;
    },
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
    subCategorias: function() {
      return this.$store.getters.allSubCategorias;
    }, */
  },
  methods: {
    openDelModal: function(gasto) {
      Object.assign(this.selectedGasto, gasto);
      this.selectedGasto = gasto;
      this.$refs.del.openModal();
    },
    openEditModal: function(gasto) {
      this.selectedGasto = gasto;
      /* Object.assign(this.selectedGasto, gasto);
      this.selectedGasto.producto = gasto.producto.nombre;
      this.selectedGasto.proveedor = gasto.proveedor.nombre;
      this.selectedGasto.ordenGasto = gasto.ordenGasto.nombre;
      this.selectedGasto.comprobante = gasto.comprobante.nombre; */
      this.$refs.edit.openModal();
    },
    postGasto: function() {
      console.log(this.selectedGasto);
      this.$store.dispatch("postGasto", this.selectedGasto);
      this.$refs.edit.closeModal();
    },
    deleteGasto: function() {
      this.$store.dispatch("deleteGasto", this.selectedGasto);
      this.$refs.del.closeModal();
    },
  },
  created() {
    /* this.$store.dispatch("getProveedores");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getOrdenesGastos");
    this.$store.dispatch("getComprobantes"); */
  },
};
</script>

<style></style>
