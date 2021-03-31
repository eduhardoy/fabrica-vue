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
      <ul class="details_list">
        <li>Nombre: {{ item.nombre }}</li>
        <li>PRODUCTO: {{ item.producto ? item.producto.nombre : null }}</li>
        <li>Costo: {{ item.costo }}</li>
        <li>Costo Flete: {{ item.costoFlete }}</li>
        <li>Stock: {{ item.stock }}</li>
        <li>Tiempo de produccion: {{ item.tiempoProduccion }}</li>
        <li>Margen: {{ item.margen }}</li>
        <li>Proveedor: {{ item.proveedor ? item.proveedor.nombre : null }}</li>
        <li>
          Subcategoria:
          {{ item.subCategoria ? item.subCategoria.nombre : null }}
        </li>
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
      <button class="cancel_button" @click="deleteParte(this.selectedParte)">
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedParte.nombre" placeholder="NOMBRE" />
      <select v-model="selectedParte.producto">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <input v-model="selectedParte.costo" placeholder="COSTO" />
      <input v-model="selectedParte.costoFlete" placeholder="COSTO FLETE" />
      <input v-model="selectedParte.stock" placeholder="STOCK" />
      <input
        v-model="selectedParte.tiempoProduccion"
        placeholder="TIEMPO DE PRODUCCION"
      />
      <input v-model="selectedParte.margen" placeholder="MARGEN" />
      <select v-model="selectedParte.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <select v-model="selectedParte.subCategoria">
        <option
          v-for="item in subCategorias"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.categoria.nombre }} - {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postParte(this.selectedParte)">
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
    partes: function () {
      return this.$store.getters.allPartes;
    },
    productos: function () {
      return this.$store.getters.allProductos;
    },
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
    subCategorias: function () {
      return this.$store.getters.allSubCategorias;
    },
  },
  methods: {
    openDelModal: function (parte) {
      Object.assign(this.selectedParte, parte);
      this.selectedParte = parte;
      this.$refs.del.openModal();
    },
    openEditModal: function (parte) {
      /* this.selectedParte = parte; */
      Object.assign(this.selectedParte, parte);
      this.selectedParte.producto = parte.producto.nombre;
      this.selectedParte.proveedor = parte.proveedor.nombre;
      this.selectedParte.subCategoria = parte.subCategoria.nombre;
      this.$refs.edit.openModal();
    },
    postParte: function () {
      console.log(this.selectedParte);
      this.$store.dispatch("postParte", this.selectedParte);
      this.$refs.edit.closeModal();
    },
    deleteParte: function () {
      this.$store.dispatch("deleteParte", this.selectedParte);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getPartes");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getSubCategorias");
  },
};
</script>

<style></style>
