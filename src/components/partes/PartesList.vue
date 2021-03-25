<template>
  <div class="partes">
    <button class="add__button">
      <img src="./images/plus.svg" alt="" />
    </button>
    <div class="partes__head">
      <div class="partes__head__title">
        <h2>PARTES</h2>
      </div>
    </div>
    <div class="partes__accordion__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartesList",
};
</script>

<style lang="scss" scoped>
.partes {
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
.partes__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .partes__head__title {
    height: 100%;
    color: black;
  }
}

.partes__accordion__wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>
