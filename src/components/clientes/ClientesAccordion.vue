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
        <li>Nombre: {{ item.nombre }}</li>
        <li>DNI: {{ item.dni }}</li>
        <li>CUIT: {{ item.cuit }}</li>
        <li>Direccion: {{ item.direccion }}</li>
        <li>Telefono: {{ item.telefono }}</li>
        <li>Email: {{ item.email }}</li>
        <li>Cuenta Estado: {{ item.cuentaEstado }}</li>
        <li>Compras: {{ item.compras }}</li>
        <li>Presupuesto: {{ item.presupuestos }}</li>
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
      <button class="cancel_button" @click="deleteCliente(this.selectedCliente)">
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedCliente.nombre" placeholder="NOMBRE" />
      <input v-model="selectedCliente.dni" placeholder="DNI" />
      <input v-model="selectedCliente.cuit" placeholder="CUIT" />
      <input v-model="selectedCliente.direccion" placeholder="DIRECCION" />
      <input v-model="selectedCliente.telefono" placeholder="TELEFONO"/>
      <input v-model="selectedCliente.email" placeholder="EMAIL" />
      <select v-model="selectedCliente.cuentaEstado">
        <option
          v-for="item in cuentasEstados"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          <!-- {{ item.nombre }} -->
        </option>
      </select>
      <select v-model="selectedCliente.compras">
        <option
          v-for="item in compras"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          <!-- {{ item.nombre }} -->
        </option>
      </select>
      <select v-model="selectedCliente.presupuestos">
        <option
          v-for="item in presupuestos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          <!-- {{ item.nombre }} -->
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCliente(this.selectedCliente)">
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
    clientes: function () {
      return this.$store.getters.allClientes;
    },
    cuentasEstados: function () {
      return this.$store.getters.allCuentasEstados;
    },
    compras: function () {
      return this.$store.getters.allCompras;
    },
    presupuestos: function () {
      return this.$store.getters.allPresupuestos;
    },
  },
  methods: {
    openDelModal: function (cliente) {
      Object.assign(this.selectedCliente, cliente);
      this.selectedCliente = cliente;
      this.$refs.del.openModal();
    },
    openEditModal: function (cliente) {
      /* this.selectedCliente = cliente; */
      Object.assign(this.selectedCliente, cliente);
      this.selectedCliente.cuentaEstado = cliente.cuentaEstado.nombre;
      this.selectedCliente.compras = cliente.compras.nombre;
      this.selectedCliente.presupuestos = cliente.presupuestos.nombre;
      this.$refs.edit.openModal();
    },
    postCliente: function () {
      console.log(this.selectedCliente);
      this.$store.dispatch("postCliente", this.selectedCliente);
      this.$refs.edit.closeModal();
    },
    deleteCliente: function () {
      this.$store.dispatch("deleteCliente", this.selectedCliente);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getCuentasEstados");
    this.$store.dispatch("getCompras");
    this.$store.dispatch("getPresupuestos");
  },
};
</script>

<style></style>