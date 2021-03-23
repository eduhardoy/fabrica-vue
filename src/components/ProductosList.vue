<template>
  <div class="products">
    <div class="products_head">
      <div class="products_head_title">
        <h2>PRODUCTOS</h2>
      </div>
      <div class="products_head_adds">
        <h2>PRODUCTOS</h2>
      </div>
      <div class="products_head_filters">
        <h2>PRODUCTOS</h2>
      </div>
    </div>
    <div class="products_accordion_wrapper"><h2>PRODUCTOS</h2></div>
  </div>
</template>

<script>
export default {
  name: "ProductosList",
};
</script>

<style lang="scss">
.products {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.products_head {
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .products_head_title {
    height: calc(100% / 3);
  }
  .products_head_adds {
    height: calc(100% / 3);
  }
  .products_head_filters {
    height: calc(100% / 3);
  }
}
.products_accordion_wrapper {
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
