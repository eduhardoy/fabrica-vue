<template>
  <div class="products">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="products__head">
      <div class="products__head__title">
        <h2>PRODUCTOS</h2>
      </div>
    </div>
    <div class="products__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input style="display: none !important" type="file" v-on:change="onFileSelected" ref="fileInput"/>
      <button v-on:click="$refs.fileInput.click()">Cargar imagen</button>
      <p>{{newProducto.imagen.name}}</p>
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
      <input v-model="newProducto.medidas.alto" placeholder="ALTO"/>
      <input v-model="newProducto.medidas.ancho" placeholder="ANCHO"/>
      <input v-model="newProducto.medidas.largo" placeholder="LARGO"/>
      <select v-model="newProducto.proveedor">
        <option v-for="item in proveedores" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
      <select v-model="newProducto.subCategoria">
        <option
          v-for="item in subCategorias"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.categoria.nombre }} - {{ item.nombre }}
        </option>
      </select>
      <select size="5" v-model="newProducto.partes"  multiple >
        <option v-for="item in partes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
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
      newProducto: {
        medidas: {},
        imagen:{
          name: "Imagen seleccionada...",
        }
      },
    };
  },
  computed: {
    proveedores: function() {
      return this.$store.getters.allProveedores;
    },
    subCategorias: function() {
      return this.$store.getters.allSubCategorias;
    },
    partes: function() {
      return this.$store.getters.allPartes;
    },
  },
  methods: {
    openAddModal: function() {
      this.$refs.add.openModal();
    },
    onFileSelected(event){
      // console.log(event)
      this.newProducto.imagen = event.target.files[0]
      //console.log(this.newProducto)
    },
    postProducto: function() {
      console.log(this.newProducto)
      //this.$store.dispatch("postProducto", this.newProducto);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getSubCategorias");
    this.$store.dispatch("getPartes");
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
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .products__head__title {
    height: 100%;
    color: black;
    .proveedores {
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
    .proveedores__head {
      height: 15%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .proveedores_head_title {
        height: 100%;
        color: black;
      }
    }

    .proveedores_accordion_wrapper {
      height: 85%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      overflow-x: hidden;
    }
  }
}
.products__accordion__wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
