<template>
  <div class="categorias">
    <button class="add__button">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="categorias__head">
      <div class="categorias__head__title">
        <h2>CATEGORIAS</h2>
      </div>
    </div>
    <div class="categorias__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriasList",
};
</script>

<style lang="scss">
.categorias {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: gray;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
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
.categorias__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .categorias__head__title {
    height: 100%;
    color: black;
  }
}

.categorias__accordion__wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
