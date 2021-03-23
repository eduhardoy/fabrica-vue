<template>
  <header class="header_loged">
    <div class="header_loged_wrapper">
      <h1 class="header_loged_wrapper_title">
        FABRICA DE LUZ
      </h1>
    </div>
  </header>
  <div class="container">
    <div class="container__area">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="scss">
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

.header_loged {
  width: 100vw;
  height: 64px;
  z-index: 9999;
  position: sticky;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  align-items: center;
  &_wrapper {
    width: 100%;
    &_title {
      color: white;
      font-weight: 300;
      font-family: "Raleway", Courier, monospace;
      font-size: 35px;
    }
  }
}
</style>
