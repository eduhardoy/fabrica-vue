<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in compras"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.descripcion }}</h3>
        </div>
        <div class="summary__buttons">
          <!-- <button @click="openEditModal(item)">
            <img src="./images/pencil.svg" alt="" />EDITAR
          </button> -->
          <button @click="openDelModal(item)">
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <ul class="details_list">
        <li><strong>Emitida: </strong>{{ item.modifiedDate }}</li>
        <li><strong>Monto: </strong>{{ item.monto }}</li>
        <li><strong>Motivo: </strong>{{ item.motivo }}</li>
        <li><strong>Vendedor: </strong>{{ item.vendedor.nombre }}</li>
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
        @click="deleteCompra(this.selectedCompra)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";

export default {
  name: "ComprasAccordion",
  components: { ModalDelete },
  data() {
    return {
      selectedCompra: { },
    };
  },
  computed: {
    compras: function() {
      return this.$store.getters.allCompras;
    },
    vendedores: function() {
      return this.$store.getters.allVendedores;
    },
  },
  methods: {
    openDelModal: function(compra) {
      this.selectedCompra = compra;
      this.$refs.del.openModal();
    },
    putCompra: function() {
      this.$store.dispatch("putCompra", this.selectedCompra);
      this.$refs.edit.closeModal();
    },
    deleteCompra: function(compra) {
      this.$store.dispatch("deleteCompra", compra);
      this.$refs.del.closeModal();
    },
    getVendedores: function() {
      this.$store.dispatch("getVendedores");
    },
  },

  created() {
    this.$store.dispatch("getCompras");
    this.$store.dispatch("getVendedores");
  },
};
</script>

<style></style>