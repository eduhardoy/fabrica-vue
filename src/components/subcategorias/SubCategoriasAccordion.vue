<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in subCategorias"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.nombre }} - #{{ item._key }}</h3>
        </div>
        <div class="summary__buttons">
          <button @click="openEditModal(item)">
            <img src="./images/pencil.svg" alt="" />EDITAR
          </button>
          <button @click="openDelModal(item)">
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <ul class="details_list">
        <li><strong>Categoria: </strong>{{ item.categoria.nombre }}</li>
      </ul>
    </details>
  </div>
  <ModalDelete ref="del">
    <template v-slot:body>
      <p>Esta seguro que desea eliminar?</p>
    </template>
    <template v-slot:footer>
      <button class="black_button" @click="$refs.del.closeModal()">
        CANCELAR
      </button>
      <button
        class="cancel_button"
        @click="deleteSubCategoria(this.selectedSubCategoria)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="selectedSubCategoria.nombre" placeholder="NOMBRE" />
      <label for="">CATEGORIA</label>
      <select v-model="selectedSubCategoria.categoria">
        <option v-for="item in categorias" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button
        class="add_button"
        @click="putSubCategoria(this.selectedSubCategoria)"
      >
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "SubCategoriasAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedSubCategoria: {},
    };
  },
  computed: {
    subCategorias: function() {
      return this.$store.getters.allSubCategorias;
    },
    categorias: function() {
      return this.$store.getters.allCategorias;
    },
  },
  methods: {
    openDelModal: function(subCategoria) {
      this.selectedSubCategoria = subCategoria;
      this.$refs.del.openModal();
    },
    openEditModal: function(subCategoria) {
      Object.assign(this.selectedSubCategoria, subCategoria);
      this.selectedSubCategoria = subCategoria;
      this.$refs.edit.openModal();
    },
    putSubCategoria: function() {
      console.log("PUT");
      console.log(this.selectedSubCategoria);
      this.$store.dispatch("putSubCategoria", this.selectedSubCategoria);
      this.$refs.edit.closeModal();
    },
    deleteSubCategoria: function(subCategoria) {
      this.$store.dispatch("deleteSubCategoria", subCategoria);
      this.$refs.del.closeModal();
    },
    getCategorias: function() {
      this.$store.dispatch("getCategorias");
      console.log("Categorias", this.$store.getters.allCategorias);
    },
  },

  created() {
    this.$store.dispatch("getSubCategorias");
    this.$store.dispatch("getCategorias");
  },
};
</script>

<style></style>
