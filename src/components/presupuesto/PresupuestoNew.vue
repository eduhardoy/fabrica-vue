<template>
  <div class="presupuesto">
    <div class="presupuesto__head">
      <div class="presupuesto_head_title">
        <h1>PRESUPUESTO</h1>
      </div>
    </div>
    <div class="presupuesto_wrapper">
      <!-- <div class="new">
      <button @click="openAddModalPro">
          Nuevo producto
      </button>
      <button @click="openAddModal">
          Nuevo cliente
        </button>
      </div> -->
      <input type="date" v-model="newPresupuesto.fechaVencimiento"/>
      <select v-model="newPresupuesto.cliente">
        <option v-for="item in clientes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
      <div class="productos" v-for="(item,index) in newPresupuesto.productos" :key="item.value">
        <div class="productos-datos">
          <input  @change="handleCantidad($event,index)" placeholder="1"/>
          <select name="producto" @change="handleProducto($event,index)">
            <option v-for="producto in productos" :key="producto._key" v-bind:value="JSON.stringify(producto)">
              {{producto.nombre}}
            </option>
          </select>
        </div>
          
          <div class="productos__buttons">
            <button class="productos__buttons-del"
              v-if="newPresupuesto.productos.length > 1"
              @click="delProducto()"
            >
              <img src="./images/trash.svg" alt="-" />
            </button>
          </div>
      </div>
      <button class="button-addProducto" @click="addProducto(newPresupuesto)">
        AGREGAR PRODUCTO
      </button>
      
      <!-- <input v-model="newPresupuesto.pago" placeholder="Pago"/>
      <select v-model="newPresupuesto.estado">
          <option value="pendiente">Pendiente</option>
          <option value="finalizado">Finalizado</option>
        </select>
      <button class="button-factura" >VER FACTURA</button> -->
      <button class="add_button" @click="postPresupuesto()">GENERAR PRESUPUESTO</button>
    </div>
  </div>
  <!-- <ModalAdd ref="add"> 
    <template v-slot:body>
      <input v-model="newCliente.nombre" placeholder="NOMBRE" />
      <input v-model="newCliente.cuitOrDni" placeholder="DNI o CUIT" />
      <input v-model="newCliente.direccion" placeholder="DIRECCION" />
      <input v-model="newCliente.telefono" placeholder="TELEFONO"/>
      <input v-model="newCliente.email" placeholder="EMAIL" />
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
      <input v-model="newProducto.precioPresupuesto" placeholder="PRECIO DE VENTA" />
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
      <button class="cancel_button" @click="$refs.addPro.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postProducto()">AGREGAR</button>
    </template>
  </ModalAdd> -->

</template>

<script>
// import ModalAdd from "../Modals/ModalAdd.vue";

export default {
  name: "Presupuesto",
  // components: { ModalAdd },
  data() {
    return {
      newPresupuesto: {
        productos:[{cantidad:1}],
      },
      // newProducto: {
      //   medidas: {}
      // },
      // newCliente: {},
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
    handleProducto: function(e,index){
      let cantidad = this.newPresupuesto.productos[index].cantidad
      this.newPresupuesto.productos[index] = {...JSON.parse(e.target.value),cantidad}
    },
    handleCantidad: function(e,index){
      let producto = this.newPresupuesto.productos[index]
      this.newPresupuesto.productos[index] = {...producto,cantidad:e.target.value}
    },
    // openAddModal: function () {
    //   this.$refs.add.openModal();
    // },
    // openAddModalPro: function () {
    //   this.$refs.addPro.openModal();
    // },
    addProducto: function (){
      this.newPresupuesto.productos.push({cantidad:1});
    },
    delProducto: function(index){
      this.newPresupuesto.productos.pop();
      this.$delete(this.items, index)
    },
    postPresupuesto: function () {
      this.$store.dispatch("postPresupuesto", this.newPresupuesto);
      this.$refs.add;
    },
    // postCliente: function () {
    //   this.$store.dispatch("postCliente", this.newCliente);
    //   this.$refs.add.closeModal();
    // },
    // postProducto: function () {
    //   this.$store.dispatch("postProducto", this.newProducto);
    //   this.$refs.add.closeModal();
    // },
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getClientes");
  },
};
</script>

<style lang="scss" scoped>
.presupuesto {
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .presupuesto__head {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .presupuesto_head_title {
      height: 100%;
      color: black;
    }
  }

  .presupuesto_wrapper {
    
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      border: 1px black solid;
      height: 22px;
      width: 38.7%;
      margin: 5px;
      padding: 5px;  
    }

    select {
      border: 1px black solid;
      height: 34px;
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

    .productos{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .productos-datos{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        input{
        width: 18px;
        height: 21px;
        margin: 5px 0px;
        margin-right: 5px;
      }

      select {
        border: 1px black solid;
        width: 95%;
        margin: 5px 0px;
        padding: 5px;
      }
      }
      
      
      .productos__buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 30px;
        button{
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: transparent;
          border: none;
          outline: none;
        }  
        img {
          width: 100%;
          height: 100%;
        }
      
      .productos__buttons-button {
        width: 30px;
        height: 30px;
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
    .button-addProducto{
      background-color: #5a5a5a;
    }
    .button-factura{
      background-color: #378eff;
     
    }
  }
}
</style>