<template>
  <div class="products">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="products__head">
      <div class="products__head__title">
        <h2>PRODUCTOS</h2>
      </div>
      <div class="products__head__filters">
        <ul>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
        </ul>
      </div>
    </div>
    <div class="products__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newProducto.nombre" placeholder="NOMBRE" />
      <input v-model="newProducto.costo" placeholder="COSTO" />
      <input v-model="newProducto.precioVenta" placeholder="PRECIO DE VENTA" />
      <input v-model="newProducto.stock" placeholder="STOCK" />
      <input
        v-model="newProducto.tiempoProduccion"
        placeholder="TIEMPO DE PRODUCCION"
      />
      <input v-model="newProducto.costoFlete" placeholder="COSTO DE FLETE" />
      <input v-model="newProducto.margen" placeholder="MARGEN DE GANANCIA" />
      <select v-model="newProducto.proveedor">
        <option v-for="item in proveedores" :key="item._key">
          {{ item.nombre }}
        </option>
      </select>
      <!-- ACTUALIZAR A SELECT PARA SUBCATEGORIA -->
      <input v-model="newProducto.subCategoria" placeholder="SUB CATEGORIA" /> 
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postProducto()">AGREGAR</button>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "ProductosList",
  components: { ModalAdd },
  data() {
    return {
      newProducto: {},
    };
  },
  computed: {
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
  },
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    postProducto: function () {
      this.$store.dispatch("postProducto", this.newProducto);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProveedores");
  },
};
</script>

<style lang="scss" scoped>
.products {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: gray;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
}

.add__button {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  img {
    width: 100%;
    height: 100%;
  }
}
.products__head {
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .products__head__title {
    height: 40%;
    color: black;
  }

  .products__head__filters {
    height: 60%;
    ul {
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: center;
      flex-wrap: wrap;
      margin: 10px;
      padding: 10px;
      li {
        color: black;
        font-size: 20px;
        padding: 10px;
        margin: 5px;
        padding-bottom: 5px;
        border-bottom: transparent solid 1px;
        &:hover {
          border-bottom: black solid 1px;
        }
      }
    }
  }
}
.products__accordion__wrapper {
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
