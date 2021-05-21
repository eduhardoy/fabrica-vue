<template>
  <div class="a4__container">
    <button class="button-print" @click="print()">
      <img src="./images/printer-white.png" alt=""/>
    </button>
    <div class="a4" >
      <FacturaHeader />
      <div class="a4__clients__wrapper">
        <div class="a4__client" >
          <h3>CLIENTE: {{venta.cliente.nombre}}</h3>
          <h3>VENTA N° {{venta._key}}</h3>
        </div>
        <div class="a4__phone">
          <p>TELEFONO: {{venta.cliente.telefono}}</p>
        </div>
      </div>
      <div class="a4__fecha__wrapper">
        <div>
          <p>FECHA: {{dateFormat(venta.modifiedDate)}}</p>
          <p>HORA: {{timeFormat(venta.modifiedDate)}}</p>
          <p>VENDEDOR: {{venta.facturas[0].vendedor}}</p>
        </div>
      </div>
      <div class="a4__items__title">
        <div class="a4__items__wrapper">
          <div class="a4__items__item">ITEM</div>
          <div class="a4__items__imagen">IMAGEN</div>
          <div class="a4__items__descripcion">DESCRIPCION</div>
          <div class="a4__items__cantidad">CANT.</div>
          <div class="a4__items__unitario">UNITARIO</div>
          <div class="a4__items__importe">IMPORTE</div>
        </div>
      </div>
      <div class="a4__items__list">
        <div class="a4__items__wrapper" v-for="(producto, index) in venta.productos" :key="producto._key">
          <div class="a4__items__item">{{index+1}}.</div>
          <div class="a4__items__imagen">
            <img src="./images/lampara.jpg" alt="" />
          </div>
          <div class="a4__items__descripcion">
            <ul>
              <li><strong></strong></li>
              <br />
              <li><strong>Nombre:</strong> {{producto.nombre}}</li>
              <li>
                <strong>Descripcion:</strong> 
                {{producto.subCategoria.nombre}} - {{producto.subCategoria.categoria.nombre}}
              </li>
              <li>
                <strong>Medidas:</strong>
                {{producto.medidas.largo}} x
                {{producto.medidas.alto}} x
                {{producto.medidas.ancho}}
              </li>
            </ul>
          </div>
          <div class="a4__items__cantidad">{{producto.cantidad}}</div>
          <div class="a4__items__unitario">${{producto.precioVenta}}</div>
          <div class="a4__items__importe">$ -</div>
        </div>
        <div class="a4__footer">
          <div class="a4__subtotal">
            <div>SUBTOTAL</div>
            <div>$ {{venta.montoTotal}}</div>
          </div>
          <div class="a4__iva">
            <div>21% I.V.A.</div>
            <div>$ -</div>
          </div>
          <div class="a4__total">
            <div>TOTAL</div>
            <div>$ -</div>
          </div>
          <div class="a4__detalles">
            <div>
              <p>
                Condiciones de pago: 50% para hacer el pedido 50% restante para
                retirar el producto.
              </p>
              <p>Plazo de entrega: A convenir.</p>
              <p>Validez del presupuesto: 72hs.</p>
              <p>Observaciones:</p>
              <p>
                - Nuestros productos se retiran exclusivamente por el local.
              </p>
              <p>
                - Esta cotización es por la provición de los artefactos. No
                incluye instalación.
              </p>
            </div>
          </div>
          <div class="a4__vendedor"><div>VERONICA MILANO</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacturaHeader from "../components/comprobantes/FacturaHeader";
import moment from "moment";

export default {
  name: "FacturaView",
  components: { FacturaHeader },
  computed: {
    venta: function() { 
      return this.$store.getters.getSelectedVenta;
    },
  },
  created(){
    this.$store.dispatch("getVenta", this.$route.query.data);
  },
  methods:{
    print: function(){
      window.print()
    },
    dateFormat: function(date){
      return moment(date).format("L");
    },
    timeFormat: function(date){
      return moment(date).format("LT");
    }
  },
};
</script>

<style lang="scss">
.a4__container{
  display: flex;
  justify-content: center;
}

.button-print{
  background: #343a40;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 15px;
  border: solid 3px rgb(0, 0, 0);
  box-shadow: 5px 5px 5px rgb(168, 168, 168);
  visibility: visible;
  height: 70px;
  width: 70px;
  img{
    width: 100%;
    height: auto;
  }
  @media print{
    visibility: hidden;
  }
}
.a4 {
  width: 21.5cm;
  min-height: 27.9cm;
  padding: 0;
  background-color: white;
  font-family: "Lato";
}
.a4__client {
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 22px;
    padding: 20px 5px 2px 5px;
    margin: 0;
  }
}
.a4__phone {
  display: flex;
  justify-content: flex-start;
  p {
    margin: 2px 5px;
  }
}
.a4__fecha__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  div {
    width: 25%;
    text-align: left;
    p {
      padding: 3px;
      margin: 0;
    }
  }
}
.a4__items__title {
  .a4__items__wrapper {
    display: flex;
    margin-top: 20px;
    border-top: solid 2px black;
    .a4__items__item {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
    .a4__items__descripcion {
      width: 25%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 5px;
    }
    .a4__items__imagen {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
    .a4__items__cantidad {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
    .a4__items__unitario {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 5px;
    }
    .a4__items__importe {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 5px;
    }
  }
}

.a4__items__list {
  .a4__items__wrapper {
    display: flex;
    border-top: solid 2px black;
    .a4__items__item {
      width: 10%;
      display: flex;
      justify-content: center;
      margin: 5px;
      padding-top: 10px;
      font-weight: 700;
      font-size: 30px;
    }
    .a4__items__descripcion {
      width: 25%;
      display: flex;
      justify-content: flex-start;
      margin: 5px;
      padding-top: 10px;
      text-align: left;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    }
    .a4__items__imagen {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      padding-top: 10px;
      height: 225px;
      img {
        max-width: 80%;
        max-height: 225px;
      }
    }
    .a4__items__cantidad {
      width: 10%;
      display: flex;
      justify-content: center;
      margin: 5px;
      padding-top: 10px;
    }
    .a4__items__unitario {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      margin: 5px;
      padding-top: 10px;
    }
    .a4__items__importe {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      margin: 5px;
      padding-top: 10px;
    }
  }
}
.a4__footer {
  .a4__subtotal {
    display: flex;
    border-top: solid 2px black;
    justify-content: flex-end;
    div {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      margin: 5px;
      font-weight: 700;
    }
  }
  .a4__iva {
    display: flex;
    border-top: solid 2px black;
    justify-content: flex-end;
    div {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      margin: 5px;
      font-weight: 700;
    }
  }
  .a4__total {
    display: flex;
    border-top: solid 2px black;
    justify-content: flex-end;
    div {
      width: 15%;
      display: flex;
      justify-content: flex-start;
      margin: 5px;
      font-weight: 700;
    }
  }
  .a4__detalles {
    display: flex;
    flex-direction: column;
    border-top: solid 2px black;
    text-align: left;
    div {
      margin-left: 50px;
      font-size: 14px;
      padding: 10px;
      p {
        margin: 0;
        padding: 5px;
      }
    }
  }
  .a4__vendedor {
    display: flex;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    justify-content: flex-end;
    div {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      margin: 5px;
      font-weight: 700;
    }
  }
}
</style>
