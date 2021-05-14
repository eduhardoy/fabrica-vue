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
        <button @click="openAddModalProducto">
          Nuevo producto
        </button>
        <button @click="openAddModalCliente">
          Nuevo cliente
        </button>
      </div>
      <label for="">FECHA DE ENTREGA</label>
      <input
        type="date"
        v-model="newVenta.fechaEntrega"
        placeholder="FECHA DE ENTREGA"
      />
      <label for="">CLIENTE</label>
      <select v-model="newVenta.cliente">
        <option v-for="item in clientes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
      <label for="">PRODUCTOS</label>
      <div
        class="productos"
        v-for="(item, index) in newVenta.productos"
        :key="item.value"
      >
        <div class="productos-datos">
          <input @change="handleCantidad($event, index)" placeholder="1" />
          <select name="producto" @change="handleProducto($event, index)">
            <option>Seleccionar Producto</option>
            <option
              v-for="producto in productos"
              :key="producto._key"
              v-bind:value="JSON.stringify(producto)"
            >
              {{ producto.nombre }}
            </option>
          </select>
        </div>

        <div class="productos__buttons">
          <button
            class="productos__buttons-del"
            v-if="newVenta.productos.length > 1"
            @click="delProducto()"
          >
            <img src="./images/trash.svg" alt="-" />
          </button>
        </div>
      </div>
      <button class="button-addProducto" @click="addProducto(newVenta)">
        AGREGAR PRODUCTO
      </button>
      <label for="">MONTO PAGADO</label>
      <input v-model="newVenta.montoPagado" placeholder="MONTO PAGADO" />
      <!-- <label for="">ESTADO</label>
      <select v-model="newVenta.estado">
        <option value="pendiente">Pendiente</option>
        <option value="finalizado">Finalizado</option>
      </select> -->
      <router-link to="/presupuestof" class="button-factura">
        <p>VER MODELO FACTURA</p>
      </router-link>
      <button @click="verFactura()" class="button-factura">
        <p>VER FACTURA</p>
      </button>
      <button @click="postVenta()">GENERAR VENTA</button>
    </div>
    <p>{{ newVenta.montoTotal }}</p>
  </div>
  <ModalAdd ref="addCliente">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="newCliente.nombre" placeholder="NOMBRE" />
      <label for="">DNI O CUIT</label>
      <input v-model="newCliente.cuitOrDni" placeholder="DNI o CUIT" />
      <label for="">DIRECCION</label>
      <input v-model="newCliente.direccion" placeholder="DIRECCION" />
      <label for="">TELEFONO</label>
      <input v-model="newCliente.telefono" placeholder="TELEFONO" />
      <label for="">EMAIL</label>
      <input v-model="newCliente.email" placeholder="EMAIL" />
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.addCliente.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postCliente()">AGREGAR</button>
    </template>
  </ModalAdd>
  <ModalAdd ref="addProducto">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="newProducto.nombre" placeholder="NOMBRE" />
      <label for="">COSTO</label>
      <input v-model="newProducto.costo" placeholder="COSTO" />
      <label for="">PRECIO DE VENTA</label>
      <input v-model="newProducto.precioVenta" placeholder="PRECIO DE VENTA" />
      <label for="">STOCK</label>
      <input v-model="newProducto.stock" placeholder="STOCK" />
      <label for="">TIEMPO DE PRODUCCION</label>
      <input
        v-model="newProducto.tiempoProduccion"
        placeholder="TIEMPO DE PRODUCCION"
      />
      <label for="">COSTO DE FLETE</label>
      <input v-model="newProducto.costoFlete" placeholder="COSTO DE FLETE" />
      <label for="">MARGEN DE GANANCIA</label>
      <input v-model="newProducto.margen" placeholder="MARGEN DE GANANCIA" />
      <label for="">ALTO</label>
      <input v-model="newProducto.medidas.alto" placeholder="ALTO" />
      <label for="">ANCHO</label>
      <input v-model="newProducto.medidas.ancho" placeholder="ANCHO" />
      <label for="">LARGO</label>
      <input v-model="newProducto.medidas.largo" placeholder="LARGO" />
      <label for="">PROVEEDOR</label>
      <select v-model="newProducto.proveedor">
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
        <option
          v-for="item in subCategorias"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.categoria.nombre }} - {{ item.nombre }}
        </option>
      </select>
      <label for="">PARTES</label>
      <select class="big_select" size="5" v-model="newProducto.partes" multiple>
        <option v-for="item in partes" :key="item._key" v-bind:value="item">
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.addProducto.closeModal()">
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
        productos: [{ cantidad: 1 }],
      },
      newProducto: {
        medidas: {},
      },
      newCliente: {},
    };
  },
  computed: {
    presupuestos: function() {
      return this.$store.getters.allPresupuestos;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
    clientes: function() {
      return this.$store.getters.allClientes;
    },
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
    handleProducto: function(e, index) {
      let cantidad = this.newVenta.productos[index].cantidad;
      this.newVenta.productos[index] = {
        ...JSON.parse(e.target.value),
        cantidad,
      };
      console.log("Venta",this.newVenta)
    },
    handleCantidad: function(e, index) {
      let producto = this.newVenta.productos[index];
      this.newVenta.productos[index] = {
        ...producto,
        cantidad: e.target.value,
      };
    },
    openAddModalCliente: function() {
      this.$refs.addCliente.openModal();
    },
    openAddModalProducto: function() {
      this.$refs.addProducto.openModal();
    },
    addProducto: function() {
      this.newVenta.productos.push({ cantidad: 1 });
    },
    delProducto: function(index) {
      this.newVenta.productos.pop();
      this.$delete(this.items, index);
    },
    postVenta: function() {
      this.$store.dispatch("postVenta", this.newVenta);
      //this.$refs.add.closeModal();
      console.log(this.newVenta);
    },
    postCliente: function() {
      this.$store.dispatch("postCliente", this.newCliente);
      this.$refs.addCliente.closeModal();
    },
    postProducto: function() {
      this.$store.dispatch("postProducto", this.newProducto);
      this.$refs.addProducto.closeModal();
    },
    verFactura: function(){
      //console.log(this.newVenta);
      // this.$router.go({ path: "/factura" })
      let routeData = this.$router.resolve({name: 'Factura', query: {data: this.newVenta}}); //params: this.newVenta.cliente
      window.open(routeData.href, '_blank');
    }
  },
  created() {
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getProveedores");
    this.$store.dispatch("getSubCategorias");
    this.$store.dispatch("getPartes");
  },
};
</script>

<style lang="scss" scoped>
.venta {
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  label {
    width: 40%;
    display: flex;
    justify-content: flex-start;
    color: black;
    font-weight: bold;
    max-width: 400px;
    margin-top: 10px;
  }
  .venta__head {
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      border: 1px rgb(0, 0, 0) solid;
      height: 22px;
      width: 38.7%;
      margin: 5px;
      padding: 5px;
    }

    select {
      border: 1px rgb(0, 0, 0) solid;
      height: 34px;
      width: 40%;
      margin: 5px;
      padding: 5px;
    }

    .new {
      display: flex;
      width: 40%;
      justify-content: center;
      button {
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

    .productos {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .productos-datos {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        input {
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

      .productos__buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 30px;
        button {
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

    button {
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
    .button-addProducto {
      background-color: #5a5a5a;
    }
    .button-factura {
      background-color: #378eff;
      width: 30%;
      margin: 10px;
      height: 40px;
      font-weight: 500;
      outline: none;
      font-size: 15px;
      color: white;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      text-decoration: none;
    }
  }
}
</style>
