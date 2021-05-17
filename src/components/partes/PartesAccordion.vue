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
        <li><strong>Nombre: </strong>{{ item.nombre }}</li>
        <!-- <li>
          <strong>PRODUCTO: </strong
          >{{ item.producto ? item.producto.nombre : null }}
        </li> -->
        <li><strong>Costo: </strong>{{ item.costo }}</li>
        <li><strong>Costo Flete: </strong>{{ item.costoFlete }}</li>
        <li><strong>Stock: </strong>{{ item.stock }}</li>
        <li>
          <strong>Tiempo de produccion: </strong>{{ item.tiempoProduccion }}
        </li>
        <!-- <li><strong>Margen: </strong>{{ item.margen }}</li> -->
        <li>
          <strong>Proveedor: </strong
          >{{ item.proveedor ? item.proveedor.nombre : null }}
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
      <label for="">NOMBRE</label>
      <input v-model="selectedParte.nombre" placeholder="NOMBRE" />
      <!-- <select v-model="selectedParte.producto">
        <option
          v-for="item in productos"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select> -->
      <label for="">COSTO</label>
      <input v-model="selectedParte.costo" placeholder="COSTO" />
      <label for="">COSTO FLETE</label>
      <input v-model="selectedParte.costoFlete" placeholder="COSTO FLETE" />
      <label for="">STOCK</label>
      <input v-model="selectedParte.stock" placeholder="STOCK" />
      <label for="">TIEMPO DE PRODUCCION</label>
      <input
        v-model="selectedParte.tiempoProduccion"
        placeholder="TIEMPO DE PRODUCCION"
      />
      <!-- <input v-model="selectedParte.margen" placeholder="MARGEN" /> -->
      <label for="">PROVEEDOR</label>
      <select v-model="selectedParte.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="putParte(this.selectedParte)">
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
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
  },
  methods: {
    openDelModal: function(parte) {
      this.selectedParte = parte;
      this.$refs.del.openModal();
    },
    openEditModal: function(parte) {
      Object.assign(this.selectedParte, parte);
      this.selectedParte = parte;
      this.$refs.edit.openModal();
    },
    putParte: function() {
      console.log("PUT");
      console.log(this.selectedParte);
      this.$store.dispatch("putParte", this.selectedParte);
      this.$refs.edit.closeModal();
    },
    deleteParte: function() {
      this.$store.dispatch("deleteParte", this.selectedParte);
      this.$refs.del.closeModal();
    },
    getProveedores: function() {
      this.$store.dispatch("getProveedores");
      console.log("Proveedores", this.$store.getters.allProveedores);
    },
  },
  created() {
    this.$store.dispatch("getPartes");
    this.$store.dispatch("getProveedores");
  },
};
</script>

<style></style>
