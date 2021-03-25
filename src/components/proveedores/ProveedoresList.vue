<template>
  <div class="proveedores">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="proveedores__head">
      <div class="proveedores__head__title">
        <h2>PROVEEDORES</h2>
      </div>
    </div>
    <div class="proveedores__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newProveedor.NOMBRE" placeholder="NOMBRE" />
      <input v-model="newProveedor.DIRECCION" placeholder="DIRECCION" />
      <input v-model="newProveedor.TELEFONO" placeholder="TELEFONO" />
      <input v-model="newProveedor.EMAIL" placeholder="EMAIL" />
      <input v-model="newProveedor.CUIT" placeholder="CUIT" />

      <div
        v-for="item in newProveedor.CUENTA_BANCO"
        :key="item.value"
        class="cbu"
      >
        <input v-model.lazy="item.CBU" placeholder="CBU" />
        <input v-model.lazy="item.BANCO" placeholder="BANCO" />
      </div>
      <div>
        <button
          v-if="newProveedor.CUENTA_BANCO.length > 1"
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
        CUENTA_BANCO: [{ CBU: "", BANCO: "" }],
      },
    };
  },
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    addCBU: function (variable) {
      variable.CUENTA_BANCO.push({ value: "" });
    },
    delCBU: function (variable) {
      variable.CUENTA_BANCO.pop();
    },
    postProveedor: function () {
      this.$store.dispatch("postProveedor", this.newProveedor);
      this.$refs.add.closeModal();
    },
  },
};
</script>

<style lang="scss">
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
  .proveedores__head__title {
    height: 100%;
    color: black;
  }
}

.proveedores__accordion__wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
