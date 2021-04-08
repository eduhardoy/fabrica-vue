<template>
  <div class="partes">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="partes__head">
      <div class="partes_head_title">
        <h2>VENTAS  *está trayendo partes*</h2>
      </div>
    </div>
    <div class="partes_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newParte.nombre" placeholder="NOMBRE" />
      <select v-model="newParte.producto">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <input v-model="newParte.costo" placeholder="COSTO" />
      <input v-model="newParte.costoFlete" placeholder="COSTO FLETE" />
      <input v-model="newParte.stock" placeholder="STOCK" />
      <input
        v-model="newParte.tiempoProduccion"
        placeholder="TIEMPO DE PRODUCCION"
      />
      <input v-model="newParte.margen" placeholder="MARGEN" />
      <select v-model="newParte.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <select v-model="newParte.subCategoria">
        <option
          v-for="item in subCategorias"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.categoria.nombre }} - {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postParte()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "PartesList",
  components: { ModalAdd },
  data() {
    return {
      newParte: {},
    };
  },
  computed: {
    productos: function () {
      return this.$store.getters.allProductos;
    },
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
    subCategorias: function () {
      return this.$store.getters.allSubCategorias;
    },
  },

  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postParte: function () {
      this.$store.dispatch("postParte", this.newParte);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getSubCategorias");
  },
};
</script>

<style lang="scss" scoped>
.partes {
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
.partes__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .partes_head_title {
    height: 100%;
    color: black;
  }
}

.partes_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>