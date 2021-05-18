<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in presupuestos"
      v-bind:key="item._key"
    >
      <summary>
        <div class="summary__title">
          <h3>#{{ item._key }} - {{ item.cliente.nombre }}</h3>
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
          <li><strong>Emitido: </strong>{{ item.modifiedDate }}</li>
          <li><strong>Vencimiento: </strong>{{ item.fechaVencimiento }}</li>
          <li><strong>Cliente: </strong>{{ item.cliente.nombre }}</li>
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
      <button
        class="cancel_button"
        @click="deletePresupuesto"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <!-- <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedPresupuesto.nombre" placeholder="NOMBRE" />
      <select v-model="selectedPresupuesto.categoria">
        <option
          v-for="item in categorias"
          :key="item._key"
          v-bind:value="item"
        >
          {{ item.nombre }}
        </option>
      </select>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.edit.closeModal()">
        CANCELAR
      </button>
      <button
        class="add_button"
        @click="putPresupuesto(this.selectedPresupuesto)"
      >
        MODIFICAR
      </button>
    </template>
  </ModalEdit> -->
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
// import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "PresupuestosAccordion",
  components: { ModalDelete },
  data() {
    return {
      selectedPresupuesto: { },
    };
  },
  computed: {
    presupuestos: function() {
      return this.$store.getters.allPresupuestos;
    },
    clientes: function() {
      return this.$store.getters.allClientes;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
  },
  methods: {
    openDelModal: function(presupuesto) {
      Object.assign(this.selectedPresupuesto, presupuesto);
      this.selectedPresupuesto = presupuesto;
      this.$refs.del.openModal();
    },
    // openEditModal: function(presupuesto) {
    //   Object.assign(this.selectedPresupuesto, presupuesto);
    //   this.selectedPresupuesto = presupuesto;
    //   this.$refs.edit.openModal();
    // },
    // putPresupuesto: function() {
    //   console.log("PUT");
    //   console.log(this.selectedPresupuesto);
    //   this.$store.dispatch("putPresupuesto", this.selectedPresupuesto);
    //   this.$refs.edit.closeModal();
    // },
    deletePresupuesto: function() {
      this.$store.dispatch("deletePresupuesto", this.selectedPresupuesto);
      this.$refs.del.closeModal();
    },
  },

  created() {
    this.$store.dispatch("getPresupuestos");
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getProductos");
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
