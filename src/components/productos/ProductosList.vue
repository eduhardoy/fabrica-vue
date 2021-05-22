<template>
  <div class="productos">
    <button class="add__button" @click="openAddModal">
      <img src="./images/plus.svg" alt="" />
    </button>

    <!-- MAQUETADO PARA FILTROS -->
    <!-- SELECT DE EJEMPLO CON DATOS -->
    <!-- <select v-model="newProducto.proveedor">
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.nombre }}
        </option>
      </select> -->
    <div display: flex flex-direction: row>
      <input placeholder="SEARCH" />

      <select>
        <option>CATEGORIA</option>
      </select>

      <select>
        <option>SUBCATEGORIA</option>
      </select>

      <select>
        <option>PROVEEDOR</option>
      </select>
    </div>

    <div class="productos__head">
      <div class="productos__head__title">
        <h2>PRODUCTOS</h2>
      </div>
    </div>
    <div class="productos__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <!-- <form enctype="multipart/form-data"> -->
      <!-- <input 
        style="display: none !important" 
        type="file" 
        accept="image/*" 
        v-on:change="onFileSelected" 
        ref="fileInput"
      />
      <button type="button" v-on:click="$refs.fileInput.click()">Cargar imagen</button> -->
      <!-- <p>{{newProducto.imagen.name}}</p> -->
      <label for="">NOMBRE</label>
      <input v-model="newProducto.nombre" placeholder="Ej: Juan Perez" />
      <label for="">COSTO $</label>
      <input v-model="newProducto.costo" placeholder="Ej: 500" />
      <label for="">STOCK</label>
      <input v-model="newProducto.stock" placeholder="Ej: 10" />
      <label for="">TIEMPO DE PRODUCCION</label>
      <input
        v-model="newProducto.tiempoProduccion"
        placeholder="2 meses"
      />
      <label for="">COSTO DE FLETE $</label>
      <input v-model="newProducto.costoFlete" placeholder="Ej: 500" />
      <label for="">MARGEN DE GANANCIA $</label>
      <input v-model="newProducto.margen" placeholder="Ej: 500" />
      <!-- Medidas -->
      <label for="">ALTO</label>
      <input v-model="newProducto.medidas.alto" placeholder="Ej: 2" />
      <label for="">ANCHO</label>
      <input v-model="newProducto.medidas.ancho" placeholder="Ej: 3" />
      <label for="">LARGO</label>
      <input v-model="newProducto.medidas.largo" placeholder="Ej: 4" />
      <label for="">PROVEEDOR</label>
      <select v-model="newProducto.proveedor">
        <option disabled selected>PROVEEDORES</option>
        <option
          v-for="item in proveedores"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.nombre }}
        </option>
      </select>
      <label for="">SUBCATEGORIA</label>
      <select v-model="newProducto.subCategoria">
        <option disabled selected>SUBCATEGORIAS</option>
        <option
          v-for="item in subCategorias"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.categoria.nombre }} - {{ item.nombre }}
        </option>
      </select>
      <label for="">PARTES (CTRL + CLICK)</label>
      <select class="big_select" size="5" v-model="newProducto.partes" multiple>
        <option v-for="item in partes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
      <!-- </form> -->
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
        imagen: {
          name: "nombre imagen seleccionada...",
        },
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
    onFileSelected(event) {
      //console.log(event)
      this.newProducto.imagen = event.target.files[0];
      //console.log(this.newProducto)
    },
    postProducto: function() {
      this.$store.dispatch("postProducto", this.newProducto);
      this.$refs.add.closeModal();
      console.log(this.newProducto);
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
.productos {
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
.productos__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .productos__head__title {
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
.productos__accordion__wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
