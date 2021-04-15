<template>
  <div class="venta">
    <div class="venta__head">
      <div class="venta_head_title">
        <h1>VENTA</h1>
      </div>
    </div>
    <div class="venta_wrapper">
      <select>
        <option>presupuesto</option>
      </select>
      <div class="cliente">
        <select>
          <option>cliente</option>
        </select>
        <button class="add__button" @click="openAddModal">
          <img src="./images/plus.svg" alt="" />
        </button>
      </div>
      <div class="productos">
        <select size="10" multiple>
          <option>producto1</option>
          <option>producto2</option>
          <option>producto3</option>
          <option>producto4</option>
          <option>producto5</option>
          <option>producto6</option>
          <option>producto7</option>
          <option>producto8</option>
          <option>producto9</option>
          <option>producto10</option>
          <option>producto11</option>
          <option>producto12</option>
          <option>producto13</option>
          <option>producto14</option>
          <option>producto15</option>
          <option>producto16</option>
        </select>
        <button class="add__button" @click="openAddModal">
          <img src="./images/plus.svg" alt="" />
        </button>
      </div>
      <button>GENERAR VENTA</button>
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
    this.$store.dispatch("getPresupuestos");
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