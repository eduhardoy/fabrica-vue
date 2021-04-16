<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in ventas"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>NOMBRE:{{ item.nombre }}</h3>
        </div>
        <div class="summary__buttons">
          <button @click="openDelModal(item)">
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <div class="venta__wrapper__button">
        <button>VER FACTURA</button>
        <button>VER FACTURA 2</button>
        <button>VER PRESUPUESTO</button>
        <button>FINALIZAR VENTA</button>
      </div>
      <ul class="details_list">
        <li>ESTADO: {{ item.estado }}</li>
        <li>CLIENTE: {{ item.cliente ? item.cliente.nombre : null }}</li>
        <ul>
          <strong>PRODUCTOS:</strong>
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
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";

export default {
  name: "VentasAccordion",
  components: { ModalDelete },
  data() {
    return {
      selectedVenta: {},
    };
  },
  computed: {
    ventas: function() {
      return this.$store.getters.allVentas;
    },
    clientes: function() {
      return this.$store.getters.allClientes;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
  },
  methods: {
    openDelModal: function(venta) {
      Object.assign(this.selectedVenta, venta);
      this.selectedVenta = venta;
      this.$refs.del.openModal();
    },

    deleteVenta: function() {
      this.$store.dispatch("deleteVenta", this.selectedVenta);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getVentas");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getClientes");
  },
};
</script>

<style lang="scss">
.venta__wrapper__button {
  display: flex;
  justify-content: center;
  button {
    padding: 10px 10px;
    margin: 10px;
    color: white;
    outline: none;
    border: none;
    background-color: black;
    border-radius: 8px;
  }
}
</style>
