<template>
  <div class="ventas">
    <div class="ventas__head">
      <div class="ventas_head_title">
        <h2>VENTAS</h2>
      </div>
    </div>
    <div class="ventas_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "VentasList",
  components: {  },
   data() {
    return {
      newVenta: {  },
    };
  },
  computed: {
    ventas: function() {
      return this.$store.getters.allVentas;
    },
    clientes: function() {
      return this.$store.getters.allClientes;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
    presupuestos: function() {
      return this.$store.getters.allPresupuestos;
    },
  },
  methods: {    
    openDelModal: function(venta) {
      this.selectedVenta = venta;
      this.$refs.del.openModal();
    },
    deleteVenta: function(venta) {
      this.$store.dispatch("deleteVenta", venta);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getVentas");
    this.$store.dispatch("getPresupuestos");
    this.$store.dispatch("getClientes");
  },
};
</script>

<style lang="scss" scoped>
.ventas {
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
.ventas__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .ventas_head_title {
    height: 100%;
    color: black;
  }
}

.ventas_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>