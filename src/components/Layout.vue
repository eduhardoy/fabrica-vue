<template>
  <header class="header__loged">
    <router-link to="/home">
      <button class="home__button">
        <img src="./images/home.png" alt="" />
      </button>
    </router-link>
    <div class="header__loged_wrapper">
      <h1 class="header__loged__wrapper__title">
        FABRICA DE LUZ
      </h1>
    </div>
  </header>
  <LeftSideBar></LeftSideBar>
  <div class="container">
    <div class="container__area">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LeftSideBar from "./LeftSideBar";

export default {
  name: "Layout",
  components: {
    LeftSideBar,
  },
};
</script>

<style lang="scss" scoped>
.home__button {
  width: 80px;
  height: 64px;
  position: absolute;
  right: 0;
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

.container {
  width: 100vw;
  height: calc(100vh - 64px);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__area {
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__loged {
  width: 100vw;
  height: 64px;
  z-index: 9999;
  position: sticky;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  align-items: center;
  &__wrapper {
    width: 100%;
    &__title {
      color: white;
      font-weight: 300;
      font-family: "Raleway", Courier, monospace;
      font-size: 35px;
    }
  }
}
</style>
