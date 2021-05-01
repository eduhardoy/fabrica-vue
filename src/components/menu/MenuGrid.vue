<template>
  <div class="grid__container">
    <div class="Articulos">
      <router-link to="/articulos"><div>ARTICULOS</div></router-link>
    </div>
    <div class="Clientes">
      <router-link to="/clientes"><div>CLIENTES</div></router-link>
    </div>
    <div class="Proveedores">
      <router-link to="/proveedores"><div>PROVEEDORES</div></router-link>
    </div>
    <div class="Compras">
      <router-link to="/compras"><div>COMPRAS</div></router-link>
    </div>
    <div class="Ventas">
      <router-link to="/ventas"><div>VENTAS</div></router-link>
    </div>
    <div class="Gastos">
      <router-link to="/gastos"><div>GASTOS</div></router-link>
    </div>
    <div class="Presupuestos">
      <router-link to="/presupuestos"><div>PRESUPUESTOS</div></router-link>
    </div>
    <div class="Contabilidad">
      <a href=""><div></div></a>
    </div>
    <div class="Estadisticas">
      <a href=""><div></div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuGrid",
};
</script>

<style lang="scss" scoped>
.grid__container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Articulos Compras"
    "Articulos Ventas"
    "Clientes Gastos"
    "Clientes Inventario"
    "Proveedores Contabilidad"
    "Proveedores Estadisticas";
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
.Articulos {
  grid-area: Articulos;
}
.Clientes {
  grid-area: Clientes;
}
.Proveedores {
  grid-area: Proveedores;
}
.Compras {
  grid-area: Compras;
}
.Ventas {
  grid-area: Ventas;
}
.Gastos {
  grid-area: Gastos;
}
.Inventario {
  grid-area: Inventario;
}
.Contabilidad {
  grid-area: Contabilidad;
}
.Estadisticas {
  grid-area: Estadisticas;
}
</style>
