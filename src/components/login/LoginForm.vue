<template>
  <form class="login__form" @submit.prevent="login">
    <div>
      <input required v-model="usuario" type="text" placeholder="Usuario" />
    </div>
    <div>
      <input
        required
        v-model="contrasena"
        type="password"
        placeholder="Contraseña"
      />
    </div>
    <!-- <router-link to="/home"> -->
    <button type="submit">LOGIN</button>
    <!-- </router-link> -->
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      /* usuario,
      contrasena */
    };
  },
  methods: {
    login: function() {
      this.$store
        .dispatch("login", {
          usuario: this.usuario,
          contrasena: this.contrasena,
        })
        .then(() => this.$router.push("/home"));
    },
    logout: function() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.login__form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  width: 80%;
  div {
    width: 60%;
    position: relative;
    border-bottom: 2px solid #000;
    margin-bottom: 30px;
    input {
      font-size: 20px;
      color: #000;
      line-height: 1.2;
      display: block;
      width: 100%;
      height: 45px;
      background: transparent;
      border-bottom: 2px solid black;
      padding: 0 5px 0 20px;
      outline: none;
      border: none;
      overflow: visible;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  button {
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    align-items: center;
    padding: 0 20px;
    min-width: 120px;
    height: 50px;
    border-radius: 25px;
    position: relative;
    transition: 0.5s;
    background-color: rgb(56, 56, 56);
    border: none;
    outline: none;
    &:hover {
      background-color: black;
    }
  }
}
</style>
