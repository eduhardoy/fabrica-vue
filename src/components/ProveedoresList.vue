<template>
  <div class="proveedores">
    <button class="add__button">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="proveedores__head">
      <div class="proveedores__head__title">
        <h2>PROVEEDORES</h2>
      </div>
    </div>
    <div class="proveedores__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProveedoresList",
};
</script>

<style lang="scss">
.proveedores {
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
.proveedores__head {
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .proveedores__head__title {
    height: 100%;
    color: black;
  }
}

.proveedores__accordion__wrapper {
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
