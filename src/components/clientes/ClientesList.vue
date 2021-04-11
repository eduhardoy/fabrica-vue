<template>
  <div class="clientes">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="clientes__head">
      <div class="clientes_head_title">
        <h2>CLIENTES</h2>
      </div>
    </div>
    <div class="clientes_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newCliente.nombre" placeholder="NOMBRE" />
      <input v-model="newCliente.dni" placeholder="DNI" />
      <input v-model="newCliente.cuit" placeholder="CUIT" />
      <input v-model="newCliente.direccion" placeholder="DIRECCION" />
      <input v-model="newCliente.telefono" placeholder="TELEFONO"/>
      <input v-model="newCliente.email" placeholder="EMAIL" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCliente()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "ClientesList",
  components: { ModalAdd },
  data() {
    return {
      newCliente: {},
    };
  },
  
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postCliente: function () {
      this.$store.dispatch("postCliente", this.newCliente);
      this.$refs.add.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.clientes {
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
.clientes__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .clientes_head_title {
    height: 100%;
    color: black;
  }
}

.clientes_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>