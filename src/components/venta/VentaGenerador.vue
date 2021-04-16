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
      <div class="new">
      <button @click="openAddModalPro">
          Nuevo producto
      </button>
      <button @click="openAddModal">
          Nuevo cliente
        </button>
      </div>
      
      <input v-model="newVenta.fechaEntrega" placeholder="FECHA DE ENTREGA"/>
      <!-- <div class="cliente"> -->
        <select v-model="newVenta.cliente">
        <option v-for="item in clientes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
      <!-- </div> -->
      <!-- <div class="productoss">
        <select size="10" v-model="newVenta.productos" multiple>
          <option v-for="item in productos" :key="item._key" v-bind:value="item">
            {{item.nombre}}
          </option>
        </select>
        <button class="add__button">
          <img src="./images/plus.svg" alt="" />
        </button>
      </div> -->
      <div class="productos" v-for="item in newVenta.productos" :key="item.value">
          <input class="productos__input-cantidad" v-model.lazy="item.producto.cantidad" placeholder="0"/>
          <select v-model.lazy="item.producto.nombre">
            <option v-for="item in productos" :key="item._key" v-bind:value="item">
              {{item.nombre}}
            </option>
          </select>
          <div class="productos__buttons">
            <button class="productos__buttons-del"
              v-if="newVenta.productos.length > 1"
              @click="delProducto(newVenta)"
            >
              <img src="./images/trash.svg" alt="-" />
            </button>
            <button class="productos__buttons-add"
              @click="addProducto(newVenta)"
            >
              <img src="./images/plus.svg" alt="+" />
            </button>
          </div> 
      </div>
      
      <input v-model="newVenta.Pago" placeholder="Pago"/>
      <select v-model="newVenta.estado">
          <option value="pendiente">Pendiente</option>
          <option value="finalizado">Finalizado</option>
        </select>
      <button class="button-factura" >VER FACTURA</button>
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
  <ModalAdd ref="addPro"> 
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
  name: "Venta",
  components: { ModalAdd },
  data() {
    return {
      newVenta: {
        productos:[{cantidad: " ", producto: " "}],
      },
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
    openAddModalPro: function () {
      this.$refs.addPro.openModal();
    },
    addProducto: function (variable){
      variable.productos.push({value: ""});
    },
    delProducto: function(variable){
      variable.productos.pop();
    },
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
    
    align-items: center;
    input {
      border: 1px black solid;
      height: 20px;
      width: 39%;
      margin: 5px;
      padding: 5px;
      
    }
    select {
      border: 1px black solid;
      width: 40%;
      margin: 5px;
      padding: 5px;
    }
    .new{
      display: flex;
      width: 40%;
      justify-content: center;
      button{
        width: 40%;
        margin: 10px;
        height: 40px;
        font-weight: 500;
        outline: none;
        font-size: 15px;
        background-color: rgb(0, 0, 0);
        color: white;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;      
      }
      
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

    /* .productoss{
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
    } */

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
        /* margin-left:5px; */
      }
      .productos__input-cantidad{
        width: 2%;
        height: 18px;
        margin-left: 60px;
      }  
      .productos__buttons{
        display: flex;
        flex-direction: row;
      .productos__buttons-del {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        outline: none;
        /* background: rgb(128, 242, 128) ;  */
        img {
          width: 100%;
          height: 100%;
        }
      }
      .productos__buttons-add {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        outline: none;
        /* background: rgb(255, 57, 57); */
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
    .button-factura{
      width: 30%;
      margin: 10px;
      height: 40px;
      font-weight: 500;
      outline: none;
      font-size: 15px;
      background-color: #378eff;
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