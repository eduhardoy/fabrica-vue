<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in presupuestos"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.id }}</h3>
        </div>
        <div class="summary__buttons">
          <button @click="openDelModal(item)">
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <div class="presupuesto__wrapper__button">
        <button>VER PRESUPUESTO</button>
        <button>VER CLIENTE</button>
        <button>FINALIZAR PRESUPUESTO</button>
      </div>
      <ul class="details_list">
        <li>
          <strong>Cliente:</strong>
          {{ item.cliente ? item.cliente.nombre : null }}
        </li>
        <li><strong>Fecha vencimiento: </strong> {{item.fechaVencimiento}} </li>
        <ul>
          <!-- PRODUCTOS -->
          <ul>
          <strong>Productos:</strong>
          <li v-for="productos in item.productos" :key="productos._key">
            {{ productos.nombre }}
          </li>
          </ul>
          <!-- PARTES -->
          <ul>
          <strong>Partes:</strong>
          <li v-for="partes in item.partes" :key="partes._key">
            {{ partes.nombre }}
          </li>
          </ul>
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
      <button class="cancel_button" 
      @click="deletePresupuesto(this.selectedPresupuesto)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";

export default {
  name: "PresupuestosAccordion",
  components: { ModalDelete },
  data() {
    return {
      selectedPresupuesto: {},
    };
  },
  computed: {
    presupuestos: function() {
      return this.$store.getters.allPresupuestos;
    },
    clientes: function() {
      return this.$store.getters.allClientes;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
    partes: function() {
      return this.$store.getters.allPartes;
    },
  },
  methods: {
    openDelModal: function(presupuesto) {
      this.selectedPresupuesto = presupuesto;
      this.$refs.del.openModal();
    },
    deletePresupuesto: function(presupuesto) {
      this.$store.dispatch("deletePresupuesto", presupuesto);
      this.$refs.del.closeModal();
    },
    getClientes: function() {
      this.$store.dispatch("getClientes", this.presupuesto);
      this.$refs.del.closeModal();
    },
    getProductos: function() {
      this.$store.dispatch("getProductos", this.presupuesto);
      this.$refs.del.closeModal();
    },
    getPartes: function() {
      this.$store.dispatch("deletePresupuesto", this.presupuesto)
      this.$refs.del.closeModal()
    },
  },
  created() {
    this.$store.dispatch("getPresupuestos");
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getPartes");
  },
};
</script>

<style lang="scss" scoped>
.presupuesto__wrapper__button {
  display: flex;
  justify-content: center;
  button {
    padding: 10px 10px;
    margin: 10px;
    color: white;
    outline: none;
    border: none;
    background-color: black;
    border-radius: 8px;
  }
}

.details_list {
  ul {
    list-style: none;
    text-align: start;
    padding: 10px;
    padding-top: 25px;
    li {
      padding: 0px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
  li {
    padding: 8px;
  }
  img {
    width: 50%;
  }
}
strong {
  font-weight: 700;
}
</style>
