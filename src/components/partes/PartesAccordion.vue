<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in partes"
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
        <li>Nombre: {{ item.nombre }}</li>
        <li>PRODUCTO: {{ item.producto.nombre }}</li>
        <li>Costo: {{ item.costo }}</li>
        <li>Costo Flete: {{ item.costoFlete }}</li>
        <li>Stock: {{ item.stock }}</li>
        <li>Tiempo de produccion: {{ item.tiempoProduccion }}</li>
        <li>Margen: {{ item.margen }}</li>
        <li>Proveedor: {{ item.proveedor }}</li>
        <li>Subcategoria: {{ item.subCategoria }}</li>
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
        @click="deleteParte(this.selectedParte)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedParte.nombre" placeholder="NOMBRE" />
      <input v-model="selectedParte.producto.nombre" placeholder="PRODUCTO"/>
      <input v-model="selectedParte.costo" placeholder="COSTO"/>
      <input v-model="selectedParte.costoFlete" placeholder="COSTO FLETE"/>
      <input v-model="selectedParte.stock" placeholder="STOCK"/>
      <input v-model="selectedParte.tiempoProduccion" placeholder="TIEMPO DE PRODUCCION"/>
      <input v-model="selectedParte.mragen" placeholder="MARGEN"/>
      <input v-model="selectedParte.proveedor.nombre" placeholder="PROVEEDOR"/>
      <input v-model="selectedParte.subCategoria.nombre" placeholder="SUBCATEGORIA"/>

    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button
        class="add_button"
        @click="postParte(this.selectedParte)"
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
  name: "PartesAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedParte: {},
    };
  },
  computed: {
    partes: function() {
      return this.$store.getters.allPartes;
    },
  },
  methods: {
    openDelModal: function(parte) {
      this.selectedParte = parte;
      this.$refs.del.openModal();
    },
    openEditModal: function(parte) {
      this.selectedParte = parte;
      this.$refs.edit.openModal();
    },
    getPartes: function() {
      this.$store.dispatch("getPartes");
      console.log("Partes", this.$store.getters.allPartes);
    },
    postParte: function() {
      this.$store.dispatch("postParte", this.selectedParte);
      this.$refs.edit.closeModal();
    },
    deleteParte: function(parte) {
      this.$store.dispatch("deleteParte", parte);
      this.$refs.del.closeModal();
    },
  },
  mounted() {
    this.getPartes();
  },
};
</script>

<style></style>
