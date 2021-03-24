<template>
  <div class="proveedores">
    <h3>Proveedores TEST</h3>
    <button @click="getProveedores">Traer Proveedores</button>
    <ul v-for="item in proveedores" v-bind:key="item.id">
      <li>
        {{ item.id }} --- {{ item.NOMBRE }} ---
        <button @click="openDelModal(item)">BORRAR</button>
        <button @click="openEditModal(item)">EDITAR</button>
      </li>
    </ul>
    <button @click="openAddModal">Crear Proveedor</button>

    <hr />
    <h3>Articulos</h3>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <input v-model="newProveedor.NOMBRE" placeholder="NOMBRE" />
      <input v-model="newProveedor.DIRECCION" placeholder="DIRECCION" />
      <input v-model="newProveedor.TELEFONO" placeholder="TELEFONO" />
      <input v-model="newProveedor.EMAIL" placeholder="EMAIL" />
      <input v-model="newProveedor.CUIT" placeholder="CUIT" />

      <div
        v-for="item in newProveedor.CUENTA_BANCO"
        :key="item.value"
        class="cbu"
      >
        <input v-model.lazy="item.CBU" placeholder="CBU" />
        <input v-model.lazy="item.BANCO" placeholder="BANCO" />
      </div>
      <div>
        <button
          v-if="newProveedor.CUENTA_BANCO.length > 1"
          @click="delCBU(newProveedor)"
        >
          DEL CBU
        </button>
        <button @click="addCBU(newProveedor)">ADD CBU</button>
      </div>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.add.closeModal()">
        CANCELAR
      </button>
      <button class="add_button" @click="postProveedor()">AGREGAR</button>
    </template>
  </ModalAdd>
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
      <button class="change_button" @click="confirmChangeModal()">
        MODIFICAR
      </button>
    </template>
  </ModalEdit>
</template>

<script>
import ModalAdd from "../components/Modals/ModalAdd.vue";
import ModalDelete from "../components/Modals/ModalDelete.vue";
import ModalEdit from "../components/Modals/ModalChange.vue";
export default {
  components: { ModalAdd, ModalDelete, ModalEdit },
  name: "Test",
  data() {
    return {
      newProveedor: {
        CUENTA_BANCO: [{ CBU: "", BANCO: "" }],
      },
      selectedProveedor: {},
    };
  },
  computed: {
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
  },
  methods: {
    openAddModal: function () {
      this.$refs.add.openModal();
    },
    openDelModal: function (proveedor) {
      this.selectedProveedor = proveedor;
      this.$refs.del.openModal();
    },
    openEditModal: function (proveedor) {
      this.selectedProveedor = proveedor;
      this.$refs.edit.openModal();
    },
    addCBU: function (variable) {
      variable.CBU.push({ value: "" });
    },
    delCBU: function (variable) {
      variable.CBU.pop();
    },
    getProveedores: function () {
      this.$store.dispatch("getProveedores");
      console.log("Proveedores", this.$store.getters.allProveedores);
    },
    postProveedor: function () {
      this.$store.dispatch("postProveedor", this.newProveedor);
      this.$refs.add.closeModal();
    },
    putProveedor: function () {
      
    },
    deleteProveedor: function (proveedor) {
      this.$store.dispatch("deleteProveedor", proveedor);
      this.$refs.del.closeModal();
    },
  },
};
</script>

<style lang="scss">
.proveedores {
  background-color: gray;
}
.cbu {
  font-size: 0;
}
</style>