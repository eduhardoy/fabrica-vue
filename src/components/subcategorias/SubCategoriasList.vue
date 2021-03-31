<template>
  <div class="subcategorias">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="subcategorias__head">
      <div class="subcategorias_head_title">
        <h2>SUBCATEGORIAS</h2>
      </div>
    </div>
    <div class="subcategorias_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newSubcategoria.nombre" placeholder="NOMBRE" />
      <input v-model="newSubcategoria.categoria.nombre" placeholder="CATEGORIA" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postSubcategoria()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "SubcategoriasList",
   data() {
    return {
      newSubcategoria: {
        categoria: [],
      },
    };
  },
  components: { ModalAdd },
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postSubcategoria: function () {
      this.$store.dispatch("postSubcategoria", this.newSubcategoria);
      this.$refs.add.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.subcategorias {
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
.subcategorias__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .subcategorias_head_title {
    height: 100%;
    color: black;
  }
}

.subcategorias_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>