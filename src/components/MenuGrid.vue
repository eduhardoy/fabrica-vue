<template>
  <div class="grid-container">
    <div class="Articulos">
      <a href=""><div>ARTICULOS</div></a>
    </div>
    <div class="Clientes">
      <a href=""><div></div></a>
    </div>
    <div class="Proveedores">
      <a href=""><div>PROVEEDORES</div></a>
    </div>
    <div class="Compras">
      <a href=""><div></div></a>
    </div>
    <div class="Ventas">
      <a href=""><div></div></a>
    </div>
    <div class="Gastos">
      <a href=""><div></div></a>
    </div>
    <div class="Inventario">
      <a href=""><div></div></a>
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

<style lang="scss">
.grid-container {
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
