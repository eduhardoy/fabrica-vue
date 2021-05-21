<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in users"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.nombre }}</h3>
        </div>
        <div class="summary__buttons">
          <button @click="openEditModal(item)">
            <img src="./images/pencil.svg" alt="" />EDITAR
          </button>
          <button @click="openDelModal(item)">
            <img src="./images/trash.svg" alt="" />ELIMINAR
          </button>
        </div>
      </summary>
      <ul class="details_list">
        <div>
          <li><strong>DNI: </strong>{{ item.dni }}</li>
          <li><strong>Rol: </strong>{{ item.rol }}</li>
        </div>
      </ul>
    </details>
  </div>
  <ModalDelete ref="del">
    <template v-slot:body>
      <p>Esta seguro que desea eliminar?</p>
    </template>
    <template v-slot:footer>
      <button class="black_button" @click="$refs.del.closeModal()">
        CANCELAR
      </button>
      <button class="cancel_button" @click="deleteUser">ELIMINAR</button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <label for="">NOMBRE</label>
      <input v-model="selectedUser.nombre" placeholder="NOMBRE" />
      <label for="">DNI</label>
      <input v-model="selectedUser.dni" placeholder="DNI" />
      <label for="">ROL</label>
      <select>
        <option>Administracion</option>
        <option>Vendedor</option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="putUser()">MODIFICAR</button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "UsersAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedUser: {},
    };
  },
  computed: {
    users: function() {
      return this.$store.getters.allUsers;
    },
  },
  methods: {
    openDelModal: function(user) {
      Object.assign(this.selectedUser, user);
      this.selectedUser = user;
      this.$ref.del.openDelModal();
    },
    openEditModal: function(user) {
      Object.assign(this.selectedUser, user);
      this.$ref.edit.openDelModal();
    },
    putUser: function() {
      console.log(this.selectedUser);
      this.$store.dispatch("putUser", this.selectedUser);
      this.$ref.edit.closeModal();
    },
    deleteUser: function() {
      this.$store.dispatch("deleteUser", this.selectedUser);
      this.$ref.del.closeModal();
    },
  },
  created(){
    this.$store.dispatch("getUsers");
  },
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
  img {
    width: auto;
    max-height: 400px;
  }
  summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 64px;
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
}

.details_list {
  list-style: none;
  text-align: start;
  padding: 15px;
  display: flex;
  .details_list_image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 50%;
    li {
      padding: 8px;
    }
    img {
      width: 50%;
    }
  }
  strong {
    font-weight: 700;
  }
  ul {
    list-style: none;
    text-align: start;
    padding: 10px;
    padding-top: 25px;
    li {
      padding: 0px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}

.image__input {
  border: none;
  display: none;
}

.image__input__label {
  background-color: black;
  border: black solid 1px;
  height: 25px;
  min-width: 250px;
  width: 30%;
  margin: 5px;
  padding: 5px;
  color: white;
  font-size: 18px;
}
</style>