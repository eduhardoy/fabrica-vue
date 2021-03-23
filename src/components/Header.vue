<template>
  <header class="header_loged">
    <div class="header_loged_wrapper">
      <h1 class="header_loged_wrapper_title">
        FABRICA DE LUZ
      </h1>
    </div>
    <md-icon>menu</md-icon>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
