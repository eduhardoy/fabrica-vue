<template>
  <div class="accordion__container">
    <details class="accordion__box">
      <summary>
        <div class="summary__title">
          <h3>DSASDADSAD</h3>
        </div>
        <div class="summary__buttons">
          <button><img src="./images/pencil.svg" alt="" />EDITAR</button>
          <button><img src="./images/trash.svg" alt="" />ELIMINAR</button>
        </div>
      </summary>
      <ul>
        <li>Email: Proveedor1@inibot.com</li>
        <li>Email: Proveedor1@inibot.com</li>
        <li>Email: Proveedor1@inibot.com</li>
        <li>Email: Proveedor1@inibot.com</li>
        <li>Email: Proveedor1@inibot.com</li>
        <li>Email: Proveedor1@inibot.com</li>
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  name: "ProductosAccordion",
};
</script>

<style lang="scss" scoped>
@keyframes sweep {
  0% {
    opacity: 0;
    margin-left: -10px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}

details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}

details[open] {
  transition: all 10s ease;
}

.accordion__container {
  width: 80%;
}

.accordion__box {
  background-color: #fff;
  box-shadow: 0px 0px 7px -1px rgba(142, 136, 136, 0.99);
  border-radius: 10px;
  transition: all 10s ease;
  summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    outline: none;
    .summary__title {
      width: 70%;
      display: flex;
      justify-content: flex-start;
      font-size: 20px;
      h3 {
        padding-left: 10%;
      }
    }
    .summary__buttons {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        height: 100%;
        width: 50%;
        border: none;
        outline: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          height: 30%;
          margin-right: 10px;
        }
      }
    }
  }
  ul {
    list-style: none;
    text-align: start;
    padding: 30px;
    li {
      padding: 10px;
    }
  }
}
</style>
