<template>
  <div class="accordion__container">
    <details
      class="accordion__box"
      v-for="item in proveedores"
      v-bind:key="item.id"
    >
      <summary>
        <div class="summary__title">
          <h3>{{ item.NOMBRE }}</h3>
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
      <ul>
        <li>Direccion: {{ item.DIRECCION }}</li>
        <li>Telefono: {{ item.TELEFONO }}</li>
        <li>Email: {{ item.EMAIL }}</li>
        <li>CUIT: {{ item.CUIT }}</li>
        <ul v-for="item2 in item.CUENTA_BANCO" v-bind:key="item2.id">
          <li>CBU: {{ item2.CBU }}</li>
          <li>BANCO: {{ item2.BANCO }}</li>
        </ul>
      </ul>
    </details>
  </div>
  <ModalDelete ref="del">
    <template v-slot:body>
      <p>Esta seguro que desea eliminar?</p>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.del.closeModal()">
        CANCELAR
      </button>
      <button
        class="delete_button"
        @click="deleteProveedor(this.selectedProveedor)"
      >
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
  <ModalEdit ref="edit">
    <template v-slot:body>
      <input v-model="selectedProveedor.NOMBRE" placeholder="NOMBRE" />
      <input v-model="selectedProveedor.DIRECCION" placeholder="DIRECCION" />
      <input v-model="selectedProveedor.TELEFONO" placeholder="TELEFONO" />
      <input v-model="selectedProveedor.EMAIL" placeholder="EMAIL" />
      <input v-model="selectedProveedor.CUIT" placeholder="CUIT" />

      <div
        v-for="item in selectedProveedor.CUENTA_BANCO"
        :key="item.CBU"
        class="cbu"
      >
        <input v-model.lazy="item.CBU" placeholder="CBU" />
        <input v-model.lazy="item.BANCO" placeholder="BANCO" />
      </div>
      <div>
        <button
          v-if="selectedProveedor.CUENTA_BANCO.length > 1"
          @click="delCBU(selectedProveedor)"
        >
          DEL CBU
        </button>
        <button @click="addCBU(selectedProveedor)">ADD CBU</button>
      </div>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.change.closeModal()">
        CANCELAR
      </button>
      <button
        class="change_button"
        @click="putProveedor(this.selectedProveedor)"
      >
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalDelete from "../Modals/ModalDelete.vue";
import ModalEdit from "../Modals/ModalChange.vue";

export default {
  name: "ProveedoresAccordion",
  components: { ModalDelete, ModalEdit },
  data() {
    return {
      selectedProveedor: {},
    };
  },
  computed: {
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
  },
  methods: {
    openDelModal: function (proveedor) {
      this.selectedProveedor = proveedor;
      this.$refs.del.openModal();
    },
    openEditModal: function (proveedor) {
      this.selectedProveedor = proveedor;
      this.$refs.edit.openModal();
    },
    addCBU: function (variable) {
      variable.CUENTA_BANCO.push({ value: "" });
    },
    delCBU: function (variable) {
      variable.CUENTA_BANCO.pop();
    },
    getProveedores: function () {
      this.$store.dispatch("getProveedores");
      console.log("Proveedores", this.$store.getters.allProveedores);
    },
    postProveedor: function () {
      this.$store.dispatch("postProveedor", this.newProveedor);
      this.$refs.add.closeModal();
    },
    putProveedor: function (proveedor) {
      this.$store.dispatch("putProveedor", proveedor);
      this.$refs.edit.closeModal();
    },
    deleteProveedor: function (proveedor) {
      this.$store.dispatch("deleteProveedor", proveedor);
      this.$refs.del.closeModal();
    },
  },
  mounted() {
    this.getProveedores();
  },
};
</script>

<style lang="scss">
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
  margin: 20px;
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
