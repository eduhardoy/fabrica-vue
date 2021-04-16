<template>
  <button
    class="menu__button"
    @click="menu == 'close' ? setMenuOpen('open') : setMenuOpen('close')"
  >
    <img src="./images/menu.png" alt="" />
  </button>
  <div class="leftside" v-show="menu == 'open'">
    <router-link to="/presupuesto" class="leftside_button">
      <img src="./images/presupuesto.png" alt="" />
      <p>PRESUPUESTO</p>
    </router-link>
    <router-link to="/venta" class="leftside_button">
      <img src="./images/sell.png" alt="" />
      <p>VENTA</p>
    </router-link>
    <router-link to="/productos3" class="leftside_button">
      <img src="./images/compra.png" alt="" />
      <p>COMPRA</p>
    </router-link>
    <router-link to="/productos4" class="leftside_button">
      <img src="./images/user.png" alt="" />
      <p>CLIENTE</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  data: () => ({
    menu: "close",
  }),
  methods: {
    setMenuOpen(menu) {
      this.menu = menu;
    },
  },
};
</script>

<style lang="scss">
.menu__button {
  width: 80px;
  height: 64px;
  z-index: 999999;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  img {
    color: white;
    height: 50%;
  }
}

.leftside {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: calc(100vh - 64px);
  border-right: 2px solid black;
  background-color: #343a40;
  flex-direction: column;
  justify-content: flex-start;
}

.leftside_button {
  margin-top: 30px;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  :hover {
    p {
      display: block;
    }
  }
  p {
    display: block;
    font-size: 10px;
    font-family: "Lato";
    font-weight: 700;
  }
  img {
    width: 60%;
  }
}
</style>
