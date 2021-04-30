<template>
  <div class="gastos">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="gastos__head">
      <div class="gastos_head_title">
        <h2>GASTOS</h2>
      </div>
    </div>
    <div class="gastos_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
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
      <input placeholder="test">
      <!-- <input v-model="selectedGasto.monto" placeholder="MONTO" />
      <input v-model="selectedGasto.descripcion" placeholder="DESCRIPCION" />
      <input v-model="selectedGasto.motivo" placeholder="MOTIVO" />
      <input v-model="selectedGasto.vendedor" placeholder="VENDEDOR" /> -->
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postGasto()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "GastosList",
  components: { ModalAdd },
  data() {
    return {
      newGasto: {},
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
    postGasto: function() {
      this.$store.dispatch("postGasto", this.newGasto);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProveedores");
  },
};
</script>

<style lang="scss" scoped>
.gastos {
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
.gastos__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .gastos_head_title {
    height: 100%;
    color: black;
  }
}

.gastos_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
