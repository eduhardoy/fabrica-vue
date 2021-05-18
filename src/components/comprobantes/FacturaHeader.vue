<template>
  <div class="a4__header">
    <img src="./images/logofabrica.png" alt="" />
  </div>
  <div class="a4__hero">
    <div class="a4__direccion">
      <br />
      <p>Serrano 1308 CABA | +54 11 4777 1460</p>
      <p>Arenales 1239 Pasaje Rue des Artisans CABA | +54 11 4811 6356</p>
      <p>Santiago del Estero 436 Resistencia Chaco | +54 362 4570305</p>
    </div>
    <div class="a4__redes">
      <p><img src="./images/facebook.png" alt="" />fabricadeluz.ba</p>
      <p><img src="./images/instagram.png" alt="" />fabricadeluz.ba</p>
      <p><img src="./images/gorjeo.png" alt="" />fabricadeluz.ba</p>
      <p>www.fabricadeluz.com</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.a4__header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 42%;
  }
}
.a4__hero {
  display: flex;
  justify-content: space-between;
  .a4__direccion {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      margin: 5px;
    }
  }
  .a4__redes {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px;
      font-size: 14px;
      img {
        height: 25px;
        padding-right: 10px;
      }
    }
  }
}
</style>