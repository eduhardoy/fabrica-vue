<template>
  <div class="clientes">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>

    <!-- MAQUETADO PARA FILTROS -->
    <div display: flex flex-direction: row>
      <input placeholder="SEARCH" />
    </div>

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
      <label for="">NOMBRE</label>
      <input v-model="newCliente.nombre" placeholder="Ej: Juan Perez" />
      <label for="">DNI O CUIT</label>
      <input v-model="newCliente.cuitOrDni" placeholder="N° DNI o CUIT" />
      <label for="">DIRECCION</label>
      <input v-model="newCliente.direccion" placeholder="Ej: Laprida 1874" />
      <label for="">TELEFONO</label>
      <input v-model="newCliente.telefono" placeholder="Ej: 543794452586" />
      <label for="">EMAIL</label>
      <input v-model="newCliente.email" placeholder="Ej: juan34@gmail.com" />
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
    openAddModal: function() {
      this.$refs.add.openModal();
    },
    postCliente: function() {
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
