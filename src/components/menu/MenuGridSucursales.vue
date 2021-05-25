<template>
  <div class="grid__container">
    <div class="Sucursal1">
      <router-link to="/home"><div>SUCURSAL 1</div></router-link>
    </div>
    <div class="Sucursal2">
      <router-link to="#"><div>SUCURSAL 2#</div></router-link>
    </div>
    <div class="Sucursal3">
      <router-link to="#"><div>SUCURSAL 3#</div></router-link>
    </div>
    <div class="Sucursal4">
      <router-link to="#"><div>SUCURSAL 4#</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuGridSucursales",
};
</script>

<style lang="scss" scoped>
.grid__container {
  width: 100%;
  height: 100%;
  display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr ;
  gap: 0px 0px;
  // grid-template-areas:
  //   "Articulos Compras"
  //   "Articulos Ventas"
  //   "Clientes Gastos"
  //   "Clientes Presupuestos"
  //   "Proveedores Contabilidad"
  //   "Proveedores Inventario";
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    & a {
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: black;
      text-decoration: none;
      & div {
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 0 14px 0 #7a7a7a;
        border: 1px solid black;
        font-size: 35px;
        font-weight: 300;
        text-transform: uppercase;
      }
    }
  }
}
// .Articulos {
//   grid-area: Articulos;
// }
// .Clientes {
//   grid-area: Clientes;
// }
// .Proveedores {
//   grid-area: Proveedores;
// }
// .Compras {
//   grid-area: Compras;
// }
// .Ventas {
//   grid-area: Ventas;
// }
// .Gastos {
//   grid-area: Gastos;
// }
// .Presupuestos {
//   grid-area: Presupuestos;
// }
// .Contabilidad {
//   grid-area: Contabilidad;
// }
// .Inventario {
//   grid-area: Inventario;
// }
</style>
