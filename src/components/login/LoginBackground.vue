<template>
  <div class="login_container">
    <div>
      <h1>BIENVENIDO</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";

export default {
  name: "LoginBackground",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.login_container {
  width: 100vw;
  height: 100vh;
  background-image: url("../../../public/images/lamparas.jpg");
  background-repeat: no-repeat;
  background-color: #f2f2f2;
  background-position: center top;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 40%;
    height: 50%;
    background-color: white;
    margin: 0;
    display: flex;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 8px 9px -1px hsl(0deg 2% 48% / 60%);
    h1 {
      height: 20%;
      font-weight: 300;
      margin: 0;
    }
  }
}
</style>
