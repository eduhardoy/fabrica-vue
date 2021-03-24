<template>
  <div class="products">
    <button class="add__button">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="products__head">
      <div class="products__head__title">
        <h2>PRODUCTOS</h2>
      </div>
      <div class="products__head__filters">
        <ul>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
          <li>Filtro</li>
        </ul>
      </div>
    </div>
    <div class="products__accordion__wrapper">
      <slot></slot>
    </div>
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

.add__button {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  img {
    width: 100%;
    height: 100%;
  }
}
.products__head {
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .products__head__title {
    height: 40%;
    color: black;
  }

  .products__head__filters {
    height: 60%;
    ul {
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: center;
      flex-wrap: wrap;
      li {
        color: black;
        font-size: 20px;
        padding: 10px;
        margin: 5px;
        padding-bottom: 5px;
        border-bottom: transparent solid 1px;
        &:hover {
          border-bottom: black solid 1px;
        }
      }
    }
  }
}
.products__accordion__wrapper {
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
