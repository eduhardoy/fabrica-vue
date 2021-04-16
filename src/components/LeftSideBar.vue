<template>
  <button
    class="menu__button"
    @click="menu == 'close' ? setMenuOpen('open') : setMenuOpen('close')"
  >
    <img src="./images/menu.png" alt="" />
  </button>
  <div class="leftSide" v-show="menu == 'open'"></div>
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

.leftSide {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: calc(100vh - 64px);
  border-right: 2px solid black;
  background-color: #343a40;
  flex-direction: column;
  justify-content: flex-start;
  div {
    img {
      width: 40px;
    }
  }
}
</style>
