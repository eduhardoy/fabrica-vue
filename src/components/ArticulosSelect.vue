<template>
  <div class="articulos__wrapper">
    <div class="articulos__wrapper__box">
      <a class="articulos__wrapper__box__element" href="">PRODUCTOS</a>
    </div>
    <div class="articulos__wrapper__box">
      <a class="articulos__wrapper__box__element" href="">PARTES</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticulosSelect",
};
</script>

<style lang="scss">
.articulos__wrapper {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
  .articulos__wrapper__box {
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .articulos__wrapper__box__element {
      cursor: pointer;
      width: 100%;
      height: 100%;
      margin: 20px;
      outline: none;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 0 14px 0 #7a7a7a;
      border: 1px solid black;
      font-size: 35px;
      font-weight: 300;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-decoration: none;
      color: black;
    }
  }
}
</style>
