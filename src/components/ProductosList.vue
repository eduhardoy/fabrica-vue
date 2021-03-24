<template>
  <div class="products">
    <button class="add__button"></button>
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
      <div class="products__head__adds">
        <button>Añadir Categoria</button>
        <button>Añadir Sub-categoria</button>
      </div>
    </div>
    <div class="products__accordion__wrapper"><h2>PRODUCTOS</h2></div>
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
.products__head {
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .products__head__title {
    height: calc(100% / 3);
  }
  .products__head__adds {
    height: calc(100% / 3);
    width: 70%;
    button {
      width: 200px;
      background-color: #343a40;
      color: white;
      text-transform: uppercase;
      border-radius: 20px;
      border: none;
      outline: none;
      font-size: 12px;
      line-height: 20px;
      transition: 0.2s;
      padding: 10px;
      margin: 10px;
      box-sizing: border-box;
      ::hover {
        background-color: #23272b;
      }
      :focus {
        background-color: #23272b;
        border: 5px solid #b1b3b6;
      }
    }
  }
  .products__head__filters {
    height: calc(100% / 3);
    ul {
      width: 50%;
      display: flex;
      list-style: none;
      :hover {
        border-bottom: black solid 1px;
      }
      li {
        font-size: 20px;
        padding: 10px;
        margin: 5px;
        padding-bottom: 5px;
      }
    }
  }
}
.products__accordion__wrapper {
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
