<template>
  <div class="compras">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="compras__head">
      <div class="compras_head_title">
        <h2>COMPRAS</h2>
      </div>
    </div>
    <div class="compras_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <!-- <select v-model="selectedCompra.proveedor">
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
      </select> -->
      <input v-model="selectedCompra.monto" placeholder="MONTO" />
      <input v-model="selectedCompra.descripcion" placeholder="DESCRIPCION" />
      <input v-model="selectedCompra.motivo" placeholder="MOTIVO" />
      <input v-model="selectedCompra.vendedor" placeholder="VENDEDOR" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCompra()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "ComprasList",
  components: { ModalAdd },
  data() {
    return {
      newCompra: {},
    };
  },
  computed: {
    productos: function () {
      return this.$store.getters.allProductos;
    },
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
    ordenesCompras: function () {
      return this.$store.getters.allOrdenesCompras;
    },
    comprobantes: function () {
      return this.$store.getters.allComprobantes;
    },
  },

  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postCompra: function () {
      this.$store.dispatch("postCompra", this.newCompra);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getOrdenesCompras");
    this.$store.dispatch("getComprobantes");
  },
};
</script>

<style lang="scss" scoped>
.compras {
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
.compras__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .compras_head_title {
    height: 100%;
    color: black;
  }
}

.compras_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>