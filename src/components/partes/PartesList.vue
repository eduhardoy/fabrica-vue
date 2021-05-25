<template>
  <div class="partes">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>

    <!-- MAQUETADO PARA FILTROS -->
    <div display: flex flex-direction: row>
      <input placeholder="SEARCH" />

      <select>
        <option>PROVEEDOR</option>
      </select>
    </div>

    <div class="partes__head">
      <div class="partes_head_title">
        <h2>PARTES</h2>
      </div>
    </div>
    <div class="partes_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="newParte.nombre" placeholder="Ej: Juana" />
      <!-- <select v-model="newParte.producto" placeholder="PRODUCTO">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select> -->
      <label for="">COSTO</label>
      <input v-model="newParte.costo" placeholder="Ej: 500" />
      <label for="">COSTO DE FLETE</label>
      <input v-model="newParte.costoFlete" placeholder="Ej: 500" />
      <label for="">STOCK</label>
      <input v-model="newParte.stock" placeholder="Ej: 20" />
      <label for="">TIEMPO DE PRODUCCION</label>
      <input v-model="newParte.tiempoProduccion" placeholder="Ej: 2 meses" />
      <!-- <input v-model="newParte.margen" placeholder="MARGEN" /> -->
      <label for="">PROVEEDOR</label>
      <select v-model="newParte.proveedor">
        <option disabled selected>PROVEEDORES</option>
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.nombre }}
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
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
  },

  methods: {
    openAddModal: function() {
      this.$refs.add.openModal();
    },
    postParte: function() {
      this.$store.dispatch("postParte", this.newParte);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getProveedores");
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
