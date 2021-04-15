<template>
  <div class="ventas">
    <!-- <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button> --> <!-- SACAR ESTE MODAL -->
    <div class="ventas__head">
      <div class="ventas_head_title">
        <h2>VENTAS</h2>
      </div>
    </div>
    <div class="ventas_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add"> <!-- SACAR ESTE MODAL -->
    <template v-slot:body>
      <input v-model="newVenta.presupuesto" placeholder="PRESUPUESTO"/>
      <input v-model="newVenta.cliente" placeholder="CLIENTE"/>
      <div>
        <button @click="addCliente()"> Agregar Cliente </button>
      </div>
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
        <!-- v-if="newVenta.productos.length > 1" -->
        <button @click="delArticulo()">Eliminar Articulo</button>
        <button @click="addArticulo()"> Agregar Articulo </button>
      </div>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postVenta()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "VentasList",
  components: { ModalAdd },
  data() {
    return {
      newVenta: {},
    };
  },
  computed: {
    productos: function () {
      return this.$store.getters.allProductos;
    },
    proveedores: function () {
      return this.$store.getters.allClientes;
    },
  },

  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    addArticulo: function (variable){
      variable.articulos.push({value: ""});
    },
    delArticulo: function(variable){
      variable.articulos.pop();
    },
    postVenta: function () {
      this.$store.dispatch("postVenta", this.newVenta);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getPresupuestos");
  },
};
</script>

<style lang="scss" scoped>
.ventas {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: gray;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
}

.add__button {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  img {
    width: 100%;
    height: 100%;
  }
}
.ventas__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .ventas_head_title {
    height: 100%;
    color: black;
  }
}

.ventas_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>