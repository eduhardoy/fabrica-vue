<template>
  <div class="productos">
    <div class="productos__head">
      <div class="productos_head_title">
        <h2>PRESUPUESTOS</h2>
      </div>
    </div>
    <div class="productos_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "PresupuestosList",
  components: {  },
   data() {
    return {
      newPresupuesto: {  },
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
      this.selectedPresupuesto = presupuesto;
      this.$refs.del.openModal();
    },
    deletePresupuesto: function(presupuesto) {
      this.$store.dispatch("deletePresupuesto", presupuesto);
      this.$refs.del.closeModal();
    },
    getClientes: function() {
      this.$store.dispatch("getClientes", this.presupuesto);
      this.$refs.del.closeModal();
    },
    getProductos: function() {
      this.$store.dispatch("getProductos", this.presupuesto);
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
.productos {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: gray;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666666;
  }
}

.add__button {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  outline: none;
  img {
    width: 100%;
    height: 100%;
  }
}
.productos__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .productos_head_title {
    height: 100%;
    color: black;
  }
}

.productos_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>