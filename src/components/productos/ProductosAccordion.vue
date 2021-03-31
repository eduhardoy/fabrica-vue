<template>
  <div class="accordion__container">
    <details class="accordion__box" v-for="item in productos" :key="item._key">
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
        <li>Costo: {{ item.costo }}</li>
        <li>Precio de Venta: {{ item.precioVenta }}</li>
        <li>Stock: {{ item.stock }}</li>
        <li>Tiempo de Produccion: {{ item.tiempoProduccion }}</li>
        <li>Costo de Felte: {{ item.costoFlete }}</li>
        <li>Margen: {{ item.margen }}</li>
        <li>Proveedor: {{ item.proveedor ? item.proveedor.nombre : null }}</li>
        <li>
          Categoria:
          {{ item.subCategoria ? item.subCategoria.categoria : null }}
        </li>
        <li>
          SubCategoria:
          {{ item.subCategoria ? item.subCategoria.nombre : null }}
        </li>
      </ul>
      <img src="./images/lampara.jpg" alt="" />
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
      <button class="cancel_button" @click="deleteProducto">ELIMINAR</button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedProducto.nombre" placeholder="NOMBRE" />
      <input v-model="selectedProducto.costo" placeholder="COSTO" />
      <input
        v-model="selectedProducto.precioVenta"
        placeholder="PRECIO DE VENTA"
      />
      <input v-model="selectedProducto.stock" placeholder="STOCK" />
      <input
        v-model="selectedProducto.tiempoProduccion"
        placeholder="TIEMPO DE PRODUCCION"
      />
      <input
        v-model="selectedProducto.costoFlete"
        placeholder="COSTO DE FLETE"
      />
      <input
        v-model="selectedProducto.margen"
        placeholder="MARGEN DE GANANCIA"
      />
      <select v-model="selectedProducto.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
      <select v-model="selectedProducto.subCategoria">
        <option
          v-for="item in subCategorias"
          :key="item._key"
          v-bind:value="item.nombre"
        >
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postProducto()">MODIFICAR</button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "ProductosAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedProducto: {},
    };
  },
  computed: {
    productos: function() {
      return this.$store.getters.allProductos;
    },
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
    subCategorias: function() {
      return this.$store.getters.allSubCategorias;
    },
  },
  methods: {
    openDelModal: function(producto) {
      Object.assign(this.selectedProducto, producto);
      this.selectedProducto = producto;
      this.$refs.del.openModal();
    },
    openEditModal: function(producto) {
      Object.assign(this.selectedProducto, producto);
      this.selectedProducto.proveedor = producto.proveedor.nombre;
      this.selectedProducto.subCategoria = producto.subCategoria.nombre;
      this.$refs.edit.openModal();
    },
    postProducto: function() {
      console.log(this.selectedProducto);
      this.$store.dispatch("postProducto", this.selectedProducto);
      this.$refs.edit.closeModal();
    },
    deleteProducto: function() {
      this.$store.dispatch("deleteProducto", this.selectedProducto);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getSubCategorias");
  },
};
</script>

<style lang="scss" scoped>
@keyframes sweep {
  0% {
    opacity: 0;
    margin-left: -10px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}

details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}

details[open] {
  transition: all 10s ease;
}

.accordion__container {
  width: 80%;
}

.accordion__box {
  background-color: #fff;
  box-shadow: 0px 0px 7px -1px rgba(142, 136, 136, 0.99);
  border-radius: 10px;
  transition: all 10s ease;
  img {
    width: auto;
    max-height: 400px;
  }
  summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 64px;
    outline: none;
    .summary__title {
      width: 70%;
      display: flex;
      justify-content: flex-start;
      font-size: 20px;
      h3 {
        padding-left: 10%;
      }
    }
    .summary__buttons {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        height: 100%;
        width: 50%;
        border: none;
        outline: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          height: 30%;
          margin-right: 10px;
        }
      }
    }
  }
}

.details_list {
  list-style: none;
  text-align: start;
  padding: 15px;
  li {
    padding: 8px;
  }
  ul {
    padding: 5px;
  }
}
</style>
