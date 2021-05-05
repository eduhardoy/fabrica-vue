<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
    >
      <summary>
        <div class="summary__title">
          <h3>Nombre</h3>
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
        <li><strong>Nombre: </strong></li>
        <li><strong>DNI: </strong></li>
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
    
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input placeholder="NOMBRE" />
      <input placeholder="DNI" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "VendedoresAccordion",
  components: { ModalDelete, ModalEdit },
  /* data() {
    return {
      selectedVendedor: {},
    };
  },
  computed: {
    vendedores: function() {
      return this.$store.getters.allVendedores;
    },
  },
  methods: {
    openDelModal: function(vendedor) {
      Object.assign(this.selectedVendedor, vendedor);
      this.selectedVendedor = vendedor;
      this.$refs.del.openModal();
    },
    openEditModal: function(vendedor) {
      Object.assign(this.selectedVendedor, vendedor);
      this.$refs.edit.openModal();
    },
    postVendedor: function() {
      console.log(this.selectedVendedor);
      this.$store.dispatch("postVendedor", this.selectedVendedor);
      this.$refs.edit.closeModal();
    },
    deleteVendedor: function() {
      this.$store.dispatch("deleteVendedor", this.selectedVendedor);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getVendedores");
  }, */
};
</script>

<style></style>
