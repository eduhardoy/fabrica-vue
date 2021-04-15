<template>
  <div class="venta">
    <div class="venta__head">
      <div class="venta_head_title">
        <h1>VENTA</h1>
      </div>
    </div>
    <div class="venta_wrapper">
      <select hidden>
        <option>presupuesto</option>
      </select>
      <div class="cliente">
        <select v-model="newVenta.cliente">
        <option v-for="item in clientes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
        <button class="add__button" @click="openAddModal">
          <img src="./images/plus.svg" alt="" />
        </button>
      </div>
      <div class="productos">
        <select size="10" v-model="newVenta.productos" multiple>
          <option v-for="item in productos" :key="item._key" v-bind:value="item">
            {{item.nombre}}
          </option>
        </select>
        <button class="add__button">
          <img src="./images/plus.svg" alt="" />
        </button>
      </div>
      <!-- <div class="productoss">
          <select>
            <option v-for="item in productos" :key="item._key" v-bind:value="item">
              {{item.nombre}}
            </option>
          </select>
          <div class="productoss__buttons">
            <button class="add__button">
              <img src="./images/plus.svg" alt="" />
            </button>
            <button class="del__button">
              <img src="./images/plus.svg" alt="" />
            </button>
          </div> 
      </div> -->
      <select v-model="newVenta.estado">
          <option value="pendiente">Pendiente</option>
          <option value="finalizado">Finalizado</option>
        </select>
      <button @click="postVenta()">GENERAR VENTA</button>
    </div>
  </div>
  <ModalAdd ref="add"> 
    <template v-slot:body>
      <input placeholder="NOMBRE" />
      <input placeholder="DNI o CUIT" />
      <input placeholder="DIRECCION" />
      <input placeholder="TELEFONO"/>
      <input placeholder="EMAIL" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCliente()">AGREGAR </button>
    </template>
  </ModalAdd>

</template>

<script>
import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "Venta",
  components: { ModalAdd },
  data() {
    return {
      newVenta: {},
    };
  },
  computed: {
    presupuestos: function () {
      return this.$store.getters.allPresupuestos;
    },
    productos: function () {
      return this.$store.getters.allProductos;
    },
    clientes: function () {
      return this.$store.getters.allClientes;
    },
  },

  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    /* addArticulo: function (variable){
      variable.articulos.push({value: ""});
    },
    delArticulo: function(variable){
      variable.articulos.pop();
    }, */
    postVenta: function () {
      this.$store.dispatch("postVenta", this.newVenta);
      this.$refs.add.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getClientes");
  },
};
</script>

<style lang="scss" scoped>
.venta {
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .venta__head {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .venta_head_title {
      height: 100%;
      color: black;
    }
  }

  .venta_wrapper {
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      border: 1px black solid;
      height: 20px;
      width: 40%;
      margin: 5px;
      padding: 5px;
      
    }
    select {
      border: 1px black solid;
      width: 40%;
      margin: 5px;
      padding: 5px;
    }  

    .cliente{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      select {
        border: 1px black solid;
        width: 40%;
        margin: 5px;
        padding: 5px;
        margin-left:60px;
      }  
      .add__button {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        outline: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }  

    .productos{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      select {
        border: 1px black solid;
        width: 40%;
        margin: 5px;
        padding: 5px;
        margin-left:60px;
      }  
      .add__button {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        outline: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .productoss{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      select {
        border: 1px black solid;
        width: 40%;
        margin: 5px;
        padding: 5px;
        margin-left:60px;
      }  
      .productoss__buttons{
.del__button {
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        outline: none;
        background: rgb(128, 242, 128) ; 
        img {
          width: 100%;
          height: 100%;
        }
      }
      .add__button {
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        outline: none;
        background: rgb(255, 57, 57);
        img {
          width: 100%;
          height: 100%;
        }
      }
      }
      
    }  

    button{
      width: 30%;
      margin: 10px;
      height: 40px;
      font-weight: 500;
      outline: none;
      font-size: 15px;
      background-color: #28a745;
      color: white;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      
    }
  }
}
</style>