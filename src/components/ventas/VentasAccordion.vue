<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in ventas"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.estado }}</h3>
        </div>
        <div class="summary__buttons">
          <!-- <button @click="openEditModal(item)">
            <img src="./images/pencil.svg" alt="" />EDITAR
          </button> -->
          <button
            v-show="$store.state.token === undefined"
            @click="openDelModal(item)"
          >
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <div class="venta__wrapper__button">
        <button @click="verFactura(item)">VER FACTURA</button>
        <button>VER FACTURA 2</button>
        <!-- <button>VER PRESUPUESTO</button> -->
        <button>FINALIZAR VENTA</button>
      </div>
      <ul class="details_list">
        <li><strong>Emitida: </strong>{{ item.modifiedDate }}</li>
        <li><strong>Cliente: </strong>{{ item.cliente.nombre }}</li>
        <!-- <li><strong>Presupuesto #</strong>{{ item.presupuesto._key }}</li> -->
        <ul>
          <strong>PRODUCTOS</strong>
          <li v-for="producto in item.productos" :key="producto._key">
            {{ producto.nombre }} ({{ producto.cantidad }} Unidades)
          </li>
          <strong>MONTO PENDIENTE</strong>
          <li>{{ item.montoTotal - item.montoPagado }}</li>
          <strong>MONTO TOTAL</strong>
          <li>{{ item.montoTotal }}</li>
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
      this.selectedVenta = venta;
      this.$refs.del.openModal();
    },
    putVenta: function () {
      this.$store.dispatch("putVenta", this.selectedVenta);
      this.$refs.edit.closeModal();
    },
    deleteVenta: function (venta) {
      this.$store.dispatch("deleteVenta", venta);
      this.$refs.del.closeModal();
    },
    getClientes: function () {
      this.$store.dispatch("getClientes");
    },
    getProveedores: function () {
      this.$store.dispatch("getProveedores");
    },
    getProductos: function () {
      this.$store.dispatch("getProductos");
    },
    verFactura : function (venta){
      this.selectedVenta = venta;
      // console.log("factura con esta venta:", this.selectedVenta);
      let routeData = this.$router.resolve({
        name: "Factura" ,
        query: { data: this.selectedVenta._key },
      });
      window.open(routeData.href, "_blank");
    }
  },

  created() {
    this.$store.dispatch("getVentas");
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getProductos");
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
