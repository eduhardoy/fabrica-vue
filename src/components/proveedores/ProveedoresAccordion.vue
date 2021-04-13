<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in proveedores"
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
        <li><strong>Direccion: </strong>{{ item.direccion }}</li>
        <li><strong>Telefono: </strong>{{ item.telefono }}</li>
        <li><strong>Email: </strong>{{ item.email }}</li>
        <li><strong>CUIT: </strong>{{ item.cuit }}</li>
        <ul v-for="item2 in item.cuentas" v-bind:key="item2.id">
          <li><strong>CBU: </strong>{{ item2.cbu }}</li>
          <li><strong>BANCO: </strong>{{ item2.banco }}</li>
        </ul>
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
        @click="deleteProveedor(this.selectedProveedor)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedProveedor.nombre" placeholder="NOMBRE" />
      <input v-model="selectedProveedor.direccion" placeholder="DIRECCION" />
      <input v-model="selectedProveedor.telefono" placeholder="TELEFONO" />
      <input v-model="selectedProveedor.email" placeholder="EMAIL" />
      <input v-model="selectedProveedor.cuit" placeholder="CUIT" />

      <div
        v-for="item in selectedProveedor.cuentas"
        :key="item.cbu"
        class="cbu"
      >
        <input v-model.lazy="item.cbu" placeholder="CBU" />
        <input v-model.lazy="item.banco" placeholder="BANCO" />
      </div>
      <div>
        <button
          v-if="selectedProveedor.cuentas.length > 1"
          @click="delCBU(selectedProveedor)"
        >
          ELIMINAR CBU
        </button>
        <button @click="addCBU(selectedProveedor)">AGREGAR CBU</button>
      </div>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postProveedor(this.selectedProveedor)">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "ProveedoresAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedProveedor: {},
    };
  },
  computed: {
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
  },
  methods: {
    openDelModal: function(proveedor) {
      this.selectedProveedor = proveedor;
      this.$refs.del.openModal();
    },
    openEditModal: function(proveedor) {
      this.selectedProveedor = proveedor;
      this.$refs.edit.openModal();
    },
    addCBU: function(variable) {
      variable.cuentas.push({ value: "" });
    },
    delCBU: function(variable) {
      variable.cuentas.pop();
    },
    getProveedores: function() {
      this.$store.dispatch("getProveedores");
      console.log("Proveedores", this.$store.getters.allProveedores);
    },
    postProveedor: function() {
      this.$store.dispatch("postProveedor", this.selectedProveedor);
      this.$refs.edit.closeModal();
    },
    deleteProveedor: function(proveedor) {
      this.$store.dispatch("deleteProveedor", proveedor);
      this.$refs.del.closeModal();
    },
  },
  mounted() {
    this.getProveedores();
  },
};
</script>

<style></style>
