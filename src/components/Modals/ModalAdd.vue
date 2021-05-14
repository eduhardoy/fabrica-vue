<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />
      <div class="modal__dialog">
        <div class="modal__header">
          <h2>AGREGAR</h2>
          <button type="button" class="modal__close" @click="closeModal()">
            X
          </button>
        </div>
        <div class="modal__body">
          <slot name="body" />
        </div>
        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalAdd",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(40, 40, 40, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  &__backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__dialog {
    max-width: 70%;
    min-width: 50%;
    min-height: 550px;
    max-height: 80%;
    min-height: 60%;
    border-radius: 20px;
    z-index: 99999;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
  &__close {
    font-size: 30px;
    color: black;
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    outline: none;
    background-color: transparent;
  }
  &__header {
    width: 100%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__body {
    overflow-y: scroll;
    margin: 10px;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    label {
      width: 30%;
      display: flex;
      justify-content: flex-start;
      color: black;
      font-weight: bold;
      max-width: 300px;
      margin-top: 10px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      button {
        background-color: black;
        margin: 5px;
        padding: 10px;
        outline: none;
        border-radius: 10px;
        color: white;
      }
    }
    input {
      border: 1px black solid;
      min-height: 25px;
      width: 30%;
      max-width: 300px;
      min-width: 250px;
      margin: 5px;
      padding: 5px;
      font-size: 15px;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }
    select {
      max-width: 300px;
      border: 1px black solid;
      min-height: 25px;
      min-width: 250px;
      width: 30%;
      margin: 5px;
      padding: 5px;
      text-align: center;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }
    .big_select {
      min-height: 100px;
    }
  }
  &__footer {
    margin: 20px;
    width: 80%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    .black_button {
      width: 200px;
      margin: 10px;
      height: 40px;
      font-weight: 500;
      outline: none;
      font-size: 15px;
      background-color: #343a40;
      color: white;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      :hover {
        background-color: #23272b;
        color: white;
      }
      :focus {
        background-color: #23272b;
        border: 5px solid #b1b3b6;
      }
    }
    .cancel_button {
      width: 200px;
      margin: 10px;
      height: 40px;
      font-weight: 500;
      outline: none;
      font-size: 15px;
      background-color: #dc3545;
      color: white;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      :hover {
        background-color: #c82333;
        color: white;
      }
      :focus {
        border: 3px solid #f2b1b8;
        background-color: #dc3545;
      }
    }
    .add_button {
      width: 200px;
      margin: 10px;
      height: 40px;
      font-weight: 500;
      outline: none;
      font-size: 15px;
      background-color: #28a745;
      color: white;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      :hover {
        background-color: #218838;
        color: white;
      }
      :focus {
        border: 3px solid #bfe5c8;
        background-color: #28a745;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
