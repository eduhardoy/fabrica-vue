<template>
  <div class="compras">
    <div class="compras__head">
      <div class="compras_head_title">
        <h2>COMPRAS</h2>
      </div>
    </div>
    <div class="compras_accordion_wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "ComprasList",
  components: {  },
   data() {
    return {
      newCompra: {  },
    };
  },
  computed: {
    compras: function() {
      return this.$store.getters.allCompras;
    },
    vendedores: function() {
      return this.$store.getters.allVendedores;
    },
  },
  methods: {    
    openDelModal: function(compra) {
      this.selectedCompra = compra;
      this.$refs.del.openModal();
    },
    deleteCompra: function(compra) {
      this.$store.dispatch("deleteCompra", compra);
      this.$refs.del.closeModal();
    },
  },
  created() {
    this.$store.dispatch("getCompras");
    this.$store.dispatch("getVendedores");
  },
};
</script>

<style lang="scss" scoped>
.compras {
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
.compras__head {
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .compras_head_title {
    height: 100%;
    color: black;
  }
}

.compras_accordion_wrapper {
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}
</style>