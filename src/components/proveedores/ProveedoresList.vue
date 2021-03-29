<template>
  <div class="proveedores">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="proveedores__head">
      <div class="proveedores_head_title">
        <h2>PROVEEDORES</h2>
      </div>
    </div>
    <div class="proveedores_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newProveedor.nombre" placeholder="NOMBRE" />
      <input v-model="newProveedor.direccion" placeholder="DIRECCION" />
      <input v-model="newProveedor.telefono" placeholder="TELEFONO" />
      <input v-model="newProveedor.email" placeholder="EMAIL" />
      <input v-model="newProveedor.cuit" placeholder="CUIT" />

      <div
        v-for="item in newProveedor.cuentas"
        :key="item.value"
        class="cbu"
      >
        <input v-model.lazy="item.cbu" placeholder="CBU" />
        <input v-model.lazy="item.banco" placeholder="BANCO" />
      </div>
      <div>
        <button
          v-if="newProveedor.cuentas.length > 1"
          @click="delCBU(newProveedor)"
        >
          DEL CBU
        </button>
        <button @click="addCBU(newProveedor)">ADD CBU</button>
      </div>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postProveedor()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "ProveedoresList",
  components: { ModalAdd },
  data() {
    return {
      newProveedor: {
        cuentas: [{ cbu: "", banco: "" }],
      },
    };
  },
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    addCBU: function (variable) {
      variable.cuentas.push({ value: "" });
    },
    delCBU: function (variable) {
      variable.cuentas.pop();
    },
    postProveedor: function () {
      this.$store.dispatch("postProveedor", this.newProveedor);
      this.$refs.add.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.proveedores {
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
.proveedores__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .proveedores_head_title {
    height: 100%;
    color: black;
  }
}

.proveedores_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>