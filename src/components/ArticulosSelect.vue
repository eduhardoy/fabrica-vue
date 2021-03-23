<template>
  <div class="articulos_wrapper">
    <div class="articulos_wrapper_box">
      <a class="articulos_wrapper_box_element" href="">PRODUCTOS</a>
    </div>
    <div class="articulos_wrapper_box">
      <a class="articulos_wrapper_box_element" href="">PARTES</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticulosSelect",
};
</script>

<style lang="scss">
.articulos_wrapper {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
  .articulos_wrapper_box {
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .articulos_wrapper_box_element {
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
