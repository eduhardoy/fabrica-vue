<template>
  <div class="a4__header">
    <img src="./images/logogade.png" alt="" />
  </div>
  <div class="a4__hero">
    <div class="a4__direccion">
      <br />
      <p>Av. Sarmiento 1992</p>
      <p>Resistencia - Chaco</p>
      <p>Tel: 362 - 525883</p>
      <br />
    </div>
    <div class="a4__redes">
      <br />
      <p>
        <img src="./images/correo.png" alt="" />gadedeco.resistencia@gmail.com
      </p>
      <p><img src="./images/instagram.png" alt="" />gade.deco</p>
      <br />
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
