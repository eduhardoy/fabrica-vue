<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in categorias"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.nombre }}</h3>
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
        <li>Descripcion: {{ item.descripcion }}</li>
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
        @click="deleteCategoria(this.selectedCategoria)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedCategoria.nombre" placeholder="NOMBRE" />
      <input
        v-model="selectedCategoria.descripcion"
        placeholder="DESCRIPCION"
      />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCategoria(this.selectedCategoria)">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "CategoriasAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedCategoria: {},
    };
  },
  computed: {
    categorias: function() {
      return this.$store.getters.allCategorias;
    },
  },
  methods: {
    openDelModal: function(categoria) {
      this.selectedCategoria = categoria;
      this.$refs.del.openModal();
    },
    openEditModal: function(categoria) {
      this.selectedCategoria = categoria;
      this.$refs.edit.openModal();
    },
    getCategorias: function() {
      this.$store.dispatch("getCategorias");
      console.log("Categorias", this.$store.getters.allCategorias);
    },
    postCategoria: function() {
      this.$store.dispatch("postCategoria", this.selectedCategoria);
      this.$refs.edit.closeModal();
    },
    deleteCategoria: function(categoria) {
      this.$store.dispatch("deleteCategoria", categoria);
      this.$refs.del.closeModal();
    },
  },
  mounted() {
    this.getCategorias();
  },
};
</script>

<style></style>
