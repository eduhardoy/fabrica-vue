<template>
  <div class="subCategorias">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="subCategorias__head">
      <div class="subCategorias_head_title">
        <h2>SUBCATEGORIAS</h2>
      </div>
    </div>
    <div class="subCategorias_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newSubCategoria.nombre" placeholder="NOMBRE" />
      <select v-model="newSubCategoria.categoria">
        <option disabled selected>CATEGORIA</option>
        <option v-for="item in categorias" :key="item._key" v-bind:value="item" >
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postSubCategoria()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "SubCategoriasList",
  components: { ModalAdd },
   data() {
    return {
      newSubCategoria: {
        /* categoria: [], */
      },
    };
  },
  computed: {
    categorias: function() {
      return this.$store.getters.allCategorias;
    },
  },
  methods: {
    
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postSubCategoria: function () {
      console.log("POST");
      console.log(this.newSubCategoria);
      this.$store.dispatch("postSubCategoria", this.newSubCategoria);
      this.$refs.add.closeModal();
    },
  },
  created(){
    this.$store.dispatch("getCategorias");
  },
};
</script>

<style lang="scss" scoped>
.subCategorias {
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
.subCategorias__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .subCategorias_head_title {
    height: 100%;
    color: black;
  }
}

.subCategorias_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>