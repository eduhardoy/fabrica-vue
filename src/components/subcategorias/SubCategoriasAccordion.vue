<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in subcategorias"
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
      <ul>
        <li>categoria: {{ item.categoria.nombre }}</li>
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
        @click="deleteSubcategoria(this.selectedSubcategoria)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedSubcategoria.nombre" placeholder="NOMBRE" />

      <select v-model="selectedSubcategoria.categoria">
        <option v-for="item in categorias" :key="item._key" v-bind:value="item.nombre">
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
        @click="postSubcategoria(this.selectedSubcategoria)"
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
  name: "SubcategoriasAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedSubcategoria: {},
    };
  },
  computed: {
    subcategorias: function() {
      return this.$store.getters.allSubcategorias;
    },
    categorias: function () { 
      return this.$store.getters.allCategorias;
    },
  },
  methods: {
    openDelModal: function(subcategoria) {
      this.selectedSubcategoria = subcategoria;
      this.$refs.del.openModal();
    },
    openEditModal: function(subcategoria) {
      subcategoria.categoria = subcategoria.categoria.nombre
      this.selectedSubcategoria = subcategoria;
      this.$refs.edit.openModal();
    },
    postSubcategoria: function() {
      this.$store.dispatch("postSubcategoria", this.selectedSubcategoria);
      this.$refs.edit.closeModal();
    },
    deleteSubcategoria: function(subcategoria) {
      this.$store.dispatch("deleteSubcategoria", subcategoria);
      this.$refs.del.closeModal();
    },
    getCategorias: function() {
      this.$store.dispatch("getCategorias");
      console.log("Categorias", this.$store.getters.allCategorias);
    },
  },
 
  created() {
    this.$store.dispatch("getSubcategorias");
    this.$store.dispatch("getCategorias");
  },

  
};
</script>

<style></style>
