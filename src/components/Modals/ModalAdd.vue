<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />
      <div class="modal__dialog">
        <div class="modal__header">
          <h2>AGREGAR</h2>
          <button type="button" class="modal__close" @click="closeModal()">
            x
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
  width: 100vw;
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
    width: 50%;
    min-width: 350px;
    min-height: 550px;
    height: 75%;
    z-index: 99999;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 426px) {
      height: 80%;
      width: 80%;
    }
  }
  &__close {
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    outline: none;
    background-color: transparent;
  }
  &__header {
    padding-right: 15px;
    padding-top: 8px;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__body {
    height: 70%;
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
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
      height: 30px;
      width: 40%;
      margin: 5px;
    }
  }
  &__footer {
    height: 10%;
    width: 80%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    .black_button {
      width: 30%;
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
      width: 30%;
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
      width: 30%;
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
