<template>
  <div class="presupuestos">
    <div class="presupuestos__head">
      <div class="presupuestos_head_title">
        <h2>PRESUPUESTOS</h2>
      </div>
    </div>
    <div class="presupuestos_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "PresupuestosList",
   data() {
    return {
      newPresupuesto: { },
    };
  },
  computed: {
    clientes: function() {
      return this.$store.getters.allClientes;
    },
    productos: function() {
      return this.$store.getters.allProductos;
    },
    partes: function() {
      return this.$store.getters.allPartes;
    },
  },
  methods: {

  },
  created(){
    this.$store.dispatch("getClientes");
    this.$store.dispatch("getProductos");
    this.$store.dispatch("getPartes");
  },
};
</script>

<style lang="scss" scoped>
.subCategorias {
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
.subCategorias__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .subCategorias_head_title {
    height: 100%;
    color: black;
  }
}

.subCategorias_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>