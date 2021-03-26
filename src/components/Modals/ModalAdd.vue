<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />
      <div class="modal__dialog">
        <div class="modal__header">
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
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  &__backdrop {
    background-color: rgba(40, 40, 40, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__dialog {
    background-color: #fff;
    position: relative;
    width: 50%;
    min-width: 350px;
    height: 70%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: black;
    background: transparent;
    border: none;
    outline: none;
  }
  &__header {
    padding-right: 15px;
    padding-top: 8px;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  &__body {
    width: 80%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    input {
      height: 30px;
      width: 40%;
      margin: 5px;
    }
  }
  &__footer {
    width: 60%;
    height: 20%;
    display: flex;
    justify-content: space-between;
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
      width: 40%;
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
      width: 40%;
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
