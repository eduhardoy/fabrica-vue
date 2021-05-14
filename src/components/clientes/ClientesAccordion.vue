<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in clientes"
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
        <li><strong>Nombre: </strong>{{ item.nombre }}</li>
        <li><strong>DNI o CUIT: </strong>{{ item.cuitOrDni }}</li>
        <li><strong>Direccion: </strong>{{ item.direccion }}</li>
        <li><strong>Telefono: </strong>{{ item.telefono }}</li>
        <li><strong>Email: </strong>{{ item.email }}</li>
        <ul>
          <strong>COMPRAS:</strong>
          <li v-for="compra in item.compras" :key="compra._key">
            {{ compra.presupuesto
            }}<!-- que campo?? -->
          </li>
        </ul>
        <ul>
          <strong>PRESUPUESTOS:</strong>
          <li v-for="presupuesto in item.presupuesto" :key="presupuesto._key">
            {{ presupuesto.fechaVencimiento
            }}<!-- que campo?? -->
          </li>
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
        @click="deleteCliente(this.selectedCliente)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="selectedCliente.nombre" placeholder="NOMBRE" />
      <label for="">DNI O CUIT</label>
      <input v-model="selectedCliente.cuitOrDni" placeholder="DNI o CUIT" />
      <label for="">DIRECCION</label>
      <input v-model="selectedCliente.direccion" placeholder="DIRECCION" />
      <label for="">TELEFONO</label>
      <input v-model="selectedCliente.telefono" placeholder="TELEFONO" />
      <label for="">EMAIL</label>
      <input v-model="selectedCliente.email" placeholder="EMAIL" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="putCliente(this.selectedCliente)">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "ClientesAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedCliente: {},
    };
  },
  computed: {
    clientes: function() {
      return this.$store.getters.allClientes;
    },
  },
  methods: {
    openDelModal: function(cliente) {
      Object.assign(this.selectedCliente, cliente);
      this.selectedCliente = cliente;
      this.$refs.del.openModal();
    },
    openEditModal: function(cliente) {
      Object.assign(this.selectedCliente, cliente);
      this.$refs.edit.openModal();
    },
    putCliente: function() {
      this.$store.dispatch("putCliente", this.selectedCliente);
      this.$refs.edit.closeModal();
    },
    deleteCliente: function() {
      this.$store.dispatch("deleteCliente", this.selectedCliente);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getClientes");
  },
};
</script>

<style></style>
