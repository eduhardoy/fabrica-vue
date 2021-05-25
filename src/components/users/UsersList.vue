<template>
  <div class="users">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>

    <!-- MAQUETADO PARA FILTROS -->
    <div display: flex flex-direction: row>
      <input placeholder="SEARCH" />

      <select>
        <option>ROL</option>
      </select>
    </div>

    <div class="users__head">
      <div class="users_head_title">
        <h2>USUARIOS</h2>
      </div>
    </div>
    <div class="users_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="newUser.nombre" placeholder="NOMBRE" />
      <label for="">DNI</label>
      <input v-model="newUser.dni" placeholder="DNI o CUIT" />
      <label for="">Rol</label>
      <select>
        <option>Administracion</option>
        <option>Vendedor</option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postUser()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "UsersList",
  components: { ModalAdd },
  data() {
    return {
      newUser: {},
    };
  },
  
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postUser: function () {
      this.$store.dispatch("postUser", this.newUser);
      this.$refs.add.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.users {
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
.users__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .users_head_title {
    height: 100%;
    color: black;
  }
}

.users_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>