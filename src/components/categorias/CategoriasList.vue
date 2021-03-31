<template>
  <div class="categorias">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="categorias__head">
      <div class="categorias_head_title">
        <h2>CATEGORIAS</h2>
      </div>
    </div>
    <div class="categorias_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newCategoria.nombre" placeholder="NOMBRE" />
      <input v-model="newCategoria.descripcion" placeholder="DESCRIPCION" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCategoria()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "CategoriasList",
  data(){
    return{
      newCategoria:{}
    }
  },
  components: { ModalAdd },
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postCategoria: function () {
      this.$store.dispatch("postCategoria", this.newCategoria);
      this.$refs.add.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.categorias {
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
.categorias__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .categorias_head_title {
    height: 100%;
    color: black;
  }
}

.categorias_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
