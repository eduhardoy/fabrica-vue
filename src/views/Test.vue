<template>
  <div class="proveedores">
    <h3>Proveedores TEST</h3>
    <button @click="getProveedores">Traer Proveedores</button>
    <ul v-for="item in proveedores" v-bind:key="item.id">
      <li>
        {{ item.id }} --- {{ item.NOMBRE }} ---
        <button @click="deleteProveedor(item)">BORRAR</button>
      </li>
    </ul>
    <hr />
    <br />
    <input v-model="newProveedor.NOMBRE" placeholder="NOMBRE" />
    <input v-model="newProveedor.DIRECCION" placeholder="DIRECCION" />
    <input v-model="newProveedor.TELEFONO" placeholder="TELEFONO" />
    <input v-model="newProveedor.EMAIL" placeholder="EMAIL" />
    <input v-model="newProveedor.CUIT" placeholder="CUIT" />
    <br />
    <br />

    <button v-if="newProveedor.CBU.length > 1" @click="delCBU">DEL CBU</button>
    <div v-for="item in newProveedor.CBU" :key="item.value">
      <input v-model.lazy="item.CBU" placeholder="CBU" />
      <input v-model.lazy="item.BANCO" placeholder="BANCO" />
    </div>
    <button @click="addCBU">ADD CBU</button>

    <br />
    <br />
    <button @click="postProveedor">Crear Proveedor</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      newProveedor: {
        CBU: [{ CBU: "", BANCO: "" }],
      },
    };
  },
  computed: {
    proveedores: function () {
      return this.$store.getters.allProveedores;
    },
  },
  methods: {
    getProveedores: function () {
      this.$store.dispatch("getProveedores");
      console.log("Proveedores", this.$store.getters.allProveedores);
    },
    postProveedor: function () {
      this.$store.dispatch("postProveedor", this.newProveedor);
    },
    addCBU: function () {
      this.newProveedor.CBU.push({ value: "" });
      console.log(this.newProveedor);
    },
    delCBU: function () {
      this.newProveedor.CBU.pop();
    },
    deleteProveedor: function (proveedor) {
      this.$store.dispatch("deleteProveedor", proveedor);
    },
  },
};
</script>

<style lang="scss">
.proveedores {
  background-color: gray;
}
</style>