<template>
  <div class="accordion__container">
    <details class="accordion__box"
      v-for="item in ventas"
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
        <li>PRESUPUESTO: {{ item.presupuesto }}</li>
        <li>CLIENTE: {{ item.cliente ? item.cliente.nombre : null }}</li>
        <ul>
          <strong>PRODUCTOS</strong>
          <li v-for="producto in item.productos" :key="producto._key">
            {{ producto.nombre }}
          </li>
        </ul>
        
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
      <button class="cancel_button" @click="deleteVenta(this.selectedVenta)">
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
       <input v-model="newVenta.presupuesto" placeholder="PRESUPUESTO"/>
      <input v-model="newVenta.cliente" placeholder="CLIENTE"/>
      <!-- <select v-model="newVenta.cliente">
        <option
          v-for="item in clientes"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select> -->
      <select v-model="newVenta.producto">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <div>
        <button> Eliminar Articulo </button>
        <button @click="addArticulo()"> Agregar Articulo </button>
      </div>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postVenta(this.selectedVenta)">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "VentasAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedVenta: {},
    };
  },
  computed: {
    ventas: function () {
      return this.$store.getters.allVentas;
    },
    presupuestos: function () {
      return this.$store.getters.allPresupuestos;
    },
    clientes: function () {
      return this.$store.getters.allClientes;
    },
    productos: function () {
      return this.$store.getters.allProductos;
    },
  },
  methods: {
    openDelModal: function (venta) {
      Object.assign(this.selectedVenta, venta);
      this.selectedVenta = venta;
      this.$refs.del.openModal();
    },
    openEditModal: function (venta) {
      /* this.selectedVenta = venta; */
      Object.assign(this.selectedVenta, venta);
      /* this.selectedVenta.producto = venta.producto.nombre;
      this.selectedVenta.presupuesto = venta.presupuesto.nombre;
      this.selectedVenta.cliente= venta.cliente.nombre; */
      this.$refs.edit.openModal();
    },
    postVenta: function () {
      console.log(this.selectedVenta);
      this.$store.dispatch("postVenta", this.selectedVenta);
      this.$refs.edit.closeModal();
    },
    deleteVenta: function () {
      this.$store.dispatch("deleteVenta", this.selectedVenta);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getVentas");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getPresupuestos");
  },
};
</script>

<style></style>