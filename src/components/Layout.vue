<template>
  <div class="styled__container">
    <header class="header">
      <button class="home__button">MENUICON</button>
      <h2>FABRICA DE LUZ</h2>
      <button class="home__button">HOMEICON</button>
    </header>
    <div class="left__side"></div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="scss">
.styled__container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  header {
    width: 100vw;
    height: 64px;
    z-index: 9999;
    position: sticky;
    display: flex;
    justify-content: center;
    background-color: #1a1a1a;
    align-items: center;
    h2 {
      margin: 0;
      font-size: 35px;
      color: white;
      font-weight: 300;
    }
  }
}

.menu__button {
  position: absolute;
  top: 0;
  left: 0;
  height: 64px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  svg {
    font-size: 35px;
  }
}
.home__button {
  position: absolute;
  top: 0;
  right: 0;
  height: 64px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  svg {
    font-size: 35px;
  }
}
</style>
